import qs from "qs";
import Debug from "debug";
import NodeCache from "node-cache";
import superagent from "superagent";
import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";
import {
  PaymentStatus,
  PaymentRequest,
  PaymentResponse,
  PaymentReference,
  PayGateEndpoints,
  PayGateErrorCodes,
  SuccessIndicator,
  UntypedObject,
  ErrorProperty,
  ErrorObject,
  HttpError,
  Currency,
} from "./types";
import * as util from "./util";

const debugError = Debug("paygate-sdk:error");
const debugCache = Debug("paygate-sdk:cache");
const debugSingleton = Debug("paygate-sdk:singleton");
const debugPaymentStatus = Debug("paygate-sdk:payment:status");
const debugPaymentRequest = Debug("paygate-sdk:payment:request");
const debugPaymentNotification = Debug("paygate-sdk:payment:notification");

/** @internal */
const Message = {
  UNKNOWN_PAYGATE_RESPONSE: "Unexpected PayGate response",
  UNKNOWN_RESPONSE: "Unknown response",
};

/** @internal */
const TypeChecks = {
  containsErrorProperty: (x: any): x is ErrorProperty => {
    return x.ERROR || x.error;
  },

  isErrorObject: (x: any): x is ErrorObject => {
    return x.message;
  },

  isHttpError: (x: any): x is HttpError => {
    return x.response && x.response.body && x.response.body.error;
  },

  isPaymentReference: (x: any): x is PaymentReference => {
    return x.PAY_REQUEST_ID && x.CHECKSUM;
  },

  isPaymentStatus: (x: any): x is PaymentStatus => {
    return x.TRANSACTION_STATUS && x.RESULT_CODE;
  },
};

/** @internal */
const PayGateData = {
  sanitizePaymentRequest: (data: PaymentRequest, payGateId?: string, payGateSecret?: string): PaymentRequest => {
    const obj: PaymentRequest = {
      PAYGATE_ID: payGateId || data.PAYGATE_ID,
      REFERENCE: data.REFERENCE || uuidv4(),
      AMOUNT: util.toCentAmount(data.AMOUNT),
      CURRENCY: data.CURRENCY || Currency.ZAR,
      RETURN_URL: data.RETURN_URL,
      TRANSACTION_DATE: data.TRANSACTION_DATE || DateTime.local().setZone("UTC").toISO(),
      LOCALE: data.LOCALE || "en-za",
      COUNTRY: data.COUNTRY || "ZAF",
      EMAIL: data.EMAIL,
      PAY_METHOD: data.PAY_METHOD || undefined,
      PAY_METHOD_DETAIL: data.PAY_METHOD_DETAIL || undefined,
      NOTIFY_URL: data.NOTIFY_URL || undefined,
      USER1: data.USER1 || undefined,
      USER2: data.USER2 || undefined,
      USER3: data.USER3 || undefined,
      VAULT: data.VAULT || undefined,
      VAULT_ID: data.VAULT_ID || undefined,
    };

    util.removeAllNonValuedProperties(obj);

    if (payGateSecret) {
      obj.CHECKSUM = PayGateClient.checksum(obj, payGateSecret);
    }

    return obj;
  },

  sanitizePaymentRef: (data: PaymentReference, payGateId?: string, payGateSecret?: string): PaymentReference => {
    const obj: PaymentReference = {
      PAYGATE_ID: payGateId || data.PAYGATE_ID,
      PAY_REQUEST_ID: data.PAY_REQUEST_ID,
      REFERENCE: data.REFERENCE,
    };

    util.removeAllNonValuedProperties(obj);

    if (payGateSecret) {
      obj.CHECKSUM = PayGateClient.checksum(obj, payGateSecret);
    }

    return obj;
  },
};

export class PayGateError extends Error {
  public httpStatus?: number;
  public cause?: ErrorObject | UntypedObject;

  constructor(cause: any, message?: string, httpStatus?: number) {
    const e = PayGateError.parse(cause, message, httpStatus);

    super(e.message);

    this.name = "PayGateError";

    this.message = e.message;
    this.httpStatus = e.httpStatus;
    this.cause = e.error;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PayGateError);
    }

    debugError(e);
  }

  private static parseMessage(cause: any, message?: string): string {
    if (message) {
      return message;
    }

    if (typeof cause === "string") {
      return cause;
    }

    if (TypeChecks.isHttpError(cause)) {
      return cause.response.body.error;
    }

    if (TypeChecks.containsErrorProperty(cause)) {
      const error = cause.ERROR || cause.error;
      if (PayGateErrorCodes[error]) {
        return `[${error}] ${PayGateErrorCodes[error]}`;
      }

      return error;
    }

    if (TypeChecks.isErrorObject(cause)) {
      return cause.message;
    }

    return "Unknown Error";
  }

  private static parseHttpStatus(cause: any, httpStatus?: number): number | undefined {
    if (httpStatus) {
      return httpStatus;
    }

    if (TypeChecks.isHttpError(cause)) {
      return cause.response.status;
    }

    return undefined;
  }

  private static parseErrorObject(cause: any): ErrorObject | UntypedObject | undefined {
    return typeof cause !== "string" ? cause : undefined;
  }

  private static parse(cause: any, message?: string, httpStatus?: number) {
    return {
      message: PayGateError.parseMessage(cause, message),
      httpStatus: PayGateError.parseHttpStatus(cause, httpStatus),
      error: PayGateError.parseErrorObject(cause),
    };
  }
}

export class PayGateClient {
  private payGateId: string;
  private payGateSecret: string;
  private paymentCache: NodeCache;

  private static instance: PayGateClient;

  constructor(payGateId?: string, payGateSecret?: string) {
    this.payGateId = payGateId;
    this.payGateSecret = payGateSecret;
    this.paymentCache = new NodeCache({ stdTTL: 900, checkperiod: 1000 });
  }

  static getInstance(payGateId?: string, payGateSecret?: string): PayGateClient {
    if (PayGateClient.instance) {
      if (
        payGateId &&
        payGateSecret &&
        payGateId === PayGateClient.instance.payGateId &&
        payGateSecret === PayGateClient.instance.payGateSecret
      ) {
        debugSingleton("Returning existing instance, credentials provided and matches current");
        return PayGateClient.instance;
      }

      if (payGateId && payGateSecret) {
        debugSingleton("Creating new instance, credentials provided and differs from current");
        PayGateClient.instance = new PayGateClient(payGateId, payGateSecret);
        return PayGateClient.instance;
      }

      debugSingleton("Returning existing instance");
      return PayGateClient.instance;
    }

    debugSingleton("No instance exists");

    if (!payGateId || !payGateSecret) {
      throw new PayGateError("No instance found, and insufficient credentials with which to authenticate");
    }

    debugSingleton("Creating new instance");
    PayGateClient.instance = new PayGateClient(payGateId, payGateSecret);

    return PayGateClient.instance;
  }

  async requestPayment(paymentRequest: PaymentRequest): Promise<PaymentResponse> {
    try {
      const request = PayGateData.sanitizePaymentRequest(paymentRequest, this.payGateId, this.payGateSecret);
      const payload = qs.stringify(request);

      debugPaymentRequest("Payment request");
      debugPaymentRequest(payload);
      debugPaymentRequest(request);

      const httpResponse = await superagent.post(PayGateEndpoints.INITIATE_URI).send(payload);

      debugPaymentRequest("Payment response");
      debugPaymentRequest(httpResponse.text);

      if (!httpResponse.text) {
        throw new PayGateError(Message.UNKNOWN_RESPONSE);
      }

      const paymentReference = qs.parse(httpResponse.text);

      if (TypeChecks.containsErrorProperty(paymentReference)) {
        throw new PayGateError(paymentReference);
      }

      if (!TypeChecks.isPaymentReference(paymentReference)) {
        throw new PayGateError(paymentReference, Message.UNKNOWN_PAYGATE_RESPONSE);
      }

      const paymentResponse = {
        paymentRef: paymentReference,
        redirectUri: PayGateEndpoints.REDIRECT_URI,
        redirectParams: {
          PAY_REQUEST_ID: paymentReference.PAY_REQUEST_ID as string,
          CHECKSUM: paymentReference.CHECKSUM as string,
        },
      };

      debugPaymentRequest(paymentResponse);

      return paymentResponse;
    } catch (e) {
      debugPaymentRequest("Error on requestPayment");
      throw new PayGateError(e);
    }
  }

  async handlePaymentNotification(paymentStatus: PaymentStatus): Promise<SuccessIndicator> {
    debugPaymentNotification("handlePaymentNotification");
    return this.addPaymentStatusToSession(paymentStatus);
  }

  async queryPaymentStatus(paymentRef: PaymentReference): Promise<PaymentStatus> {
    const existingPaymentStatus = await this.findPaymentStatusInSession(paymentRef);
    if (existingPaymentStatus) {
      debugPaymentStatus("Payment status returned from cache");
      return existingPaymentStatus;
    }

    try {
      const request = PayGateData.sanitizePaymentRef(paymentRef, this.payGateId, this.payGateSecret);
      const payload = qs.stringify(request);

      debugPaymentStatus("Payment status query");
      debugPaymentStatus(payload);
      debugPaymentStatus(request);

      const httpResponse = await superagent.post(PayGateEndpoints.QUERY_URI).send(payload);

      debugPaymentStatus("Payment status response");
      debugPaymentStatus(httpResponse.text);

      if (!httpResponse.text) {
        throw new PayGateError(Message.UNKNOWN_RESPONSE);
      }

      const paymentStatus = qs.parse(httpResponse.text);

      if (TypeChecks.containsErrorProperty(paymentStatus)) {
        throw new PayGateError(paymentStatus);
      }

      if (!TypeChecks.isPaymentStatus(paymentStatus)) {
        throw new PayGateError(paymentStatus, Message.UNKNOWN_PAYGATE_RESPONSE);
      }

      await this.addPaymentStatusToSession(paymentStatus);

      debugPaymentStatus(paymentStatus);

      return paymentStatus;
    } catch (e) {
      debugPaymentStatus("Error on queryPaymentStatus");
      throw new PayGateError(e);
    }
  }

  static checksum(data: UntypedObject, secret: string): string {
    return util.toPayGateChecksum(data, secret);
  }

  private async addPaymentStatusToSession(paymentStatus: PaymentStatus): Promise<SuccessIndicator> {
    if (!this.paymentCache) {
      const message = "No cache available";
      debugCache(message);
      return {
        success: false,
        message,
      };
    }

    if (!paymentStatus.REFERENCE && !paymentStatus.PAY_REQUEST_ID) {
      const message = "Cannot add payment status to cache, no valid payment reference found";
      debugCache(message);
      return {
        success: false,
        message,
      };
    }

    const existingPaymentStatus = await this.findPaymentStatusInSession({
      REFERENCE: paymentStatus.REFERENCE,
      PAY_REQUEST_ID: paymentStatus.PAY_REQUEST_ID,
    });

    if (!existingPaymentStatus) {
      const cacheEntries = Object.keys(paymentStatus)
        .filter((k) => (k === "REFERENCE" || k === "PAY_REQUEST_ID") && paymentStatus[k])
        .map((k) => {
          return { key: paymentStatus[k], val: paymentStatus };
        });

      debugCache("Adding cache entry");
      debugCache(cacheEntries);

      const success = this.paymentCache.mset(cacheEntries);

      return {
        success: success,
        message: "Cache entry set",
      };
    }

    if (paymentStatus.RESULT_CODE && !existingPaymentStatus.RESULT_CODE) {
      // the existing payment status is the minimal version sent back after returning
      // from payment page, and not the full version that is sent by the payment
      // notification call - replace the minimal version with the full version

      const existingCachedKeys = Object.keys(paymentStatus).filter(
        (k) => (k === "REFERENCE" || k === "PAY_REQUEST_ID") && paymentStatus[k]
      );

      const newCacheEntries = Object.keys(paymentStatus)
        .filter((k) => (k === "REFERENCE" || k === "PAY_REQUEST_ID") && paymentStatus[k])
        .map((k) => {
          return { key: paymentStatus[k], val: paymentStatus };
        });

      debugCache("Updating cache entry with new version");
      debugCache(existingCachedKeys);
      debugCache(newCacheEntries);

      this.paymentCache.del(existingCachedKeys);
      const success = this.paymentCache.mset(newCacheEntries);

      return {
        success: success,
        message: "Cache entry updated",
      };
    }

    debugCache("Cache entry already exits");

    return {
      success: true,
      message: "Cache entry exits",
    };
  }

  private async findPaymentStatusInSession(paymentRef: PaymentReference): Promise<PaymentStatus> {
    if (!this.paymentCache) {
      debugCache("No cache available");
      return undefined;
    }

    if (!paymentRef.REFERENCE && !paymentRef.PAY_REQUEST_ID) {
      debugCache("Cannot query cache for payment status, no valid payment reference found");
      return undefined;
    }

    if (paymentRef.REFERENCE) {
      const cachedPaymentStatus = this.paymentCache.get(paymentRef.REFERENCE) as PaymentStatus;
      if (cachedPaymentStatus) {
        debugCache("Cache entry found for key type REFERENCE");
        return cachedPaymentStatus;
      }
    }

    if (paymentRef.PAY_REQUEST_ID) {
      const cachedPaymentStatus = this.paymentCache.get(paymentRef.PAY_REQUEST_ID) as PaymentStatus;
      if (cachedPaymentStatus) {
        debugCache("Cache entry found for key type PAY_REQUEST_ID");
        return cachedPaymentStatus;
      }
    }

    debugCache("No cache entry found");

    return undefined;
  }
}

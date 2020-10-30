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
  Currency,
} from "./types";
import * as util from "./util";

/** @internal */
const debugError = Debug("paygate-sdk:error");

/** @internal */
const debugStack = Debug("paygate-sdk:stack");

/** @internal */
const debugCache = Debug("paygate-sdk:cache");

/** @internal */
const debugSingleton = Debug("paygate-sdk:singleton");

/** @internal */
const debugPaymentStatus = Debug("paygate-sdk:payment:status");

/** @internal */
const debugPaymentRequest = Debug("paygate-sdk:payment:request");

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

  isHttpError: (x: any) => {
    return x.response && x.response.error;
  },

  isPayGateResponse: (x: any) => {
    return x.text;
  },

  isPayGateErrorResponse: (x: any) => {
    return TypeChecks.containsErrorProperty(x);
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
  sanitizePaymentRequest: (data: PaymentRequest, payGateId?: string, payGateKey?: string): PaymentRequest => {
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

    if (payGateKey) {
      obj.CHECKSUM = PayGateClient.generateChecksum(obj, payGateKey);
    }

    return obj;
  },

  sanitizePaymentRef: (data: PaymentReference, payGateId?: string, payGateKey?: string): PaymentReference => {
    const obj: PaymentReference = {
      PAYGATE_ID: payGateId || data.PAYGATE_ID,
      PAY_REQUEST_ID: data.PAY_REQUEST_ID,
      REFERENCE: data.REFERENCE,
    };

    util.removeAllNonValuedProperties(obj);

    if (payGateKey) {
      obj.CHECKSUM = PayGateClient.generateChecksum(obj, payGateKey);
    }

    return obj;
  },
};

export class PayGateError extends Error {
  public httpStatus?: number;
  public cause?: ErrorObject | UntypedObject;

  constructor(cause: any, message?: string) {
    const e = PayGateError.parse(cause, message);

    super(e.message);

    this.name = "PayGateError";

    this.message = e.message;
    this.httpStatus = e.httpStatus;
    this.cause = e.error;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PayGateError);
    }

    debugError(`${this.name}: ${e.message}`);
    debugStack(this);
  }

  private static parseMessage(cause: any, message?: string): string {
    if (message) {
      return message;
    }

    if (typeof cause === "string") {
      return cause;
    }

    if (TypeChecks.isHttpError(cause)) {
      return cause.response.error.message;
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

  private static parseHttpStatus(cause: any): number | undefined {
    if (TypeChecks.isHttpError(cause)) {
      return cause.response.status;
    }

    return undefined;
  }

  private static parseErrorObject(cause: any): ErrorObject | UntypedObject | undefined {
    return typeof cause !== "string" ? cause : undefined;
  }

  private static parse(cause: any, message?: string) {
    return {
      message: PayGateError.parseMessage(cause, message),
      httpStatus: PayGateError.parseHttpStatus(cause),
      error: PayGateError.parseErrorObject(cause),
    };
  }
}

export class InvalidRequest extends PayGateError {
  constructor(cause: any, message?: string) {
    super(cause, message);
    this.name = "InvalidRequest";
  }
}

export class PayGateClient {
  private payGateId: string;
  private payGateKey: string;
  private paymentCache: NodeCache;

  private static instance: PayGateClient;

  constructor(payGateId?: string, payGateKey?: string) {
    this.payGateId = payGateId;
    this.payGateKey = payGateKey;
    this.paymentCache = new NodeCache({ stdTTL: 900, checkperiod: 1000 });
  }

  static getInstance(payGateId?: string, payGateKey?: string): PayGateClient {
    if (PayGateClient.instance) {
      if (
        payGateId &&
        payGateKey &&
        payGateId === PayGateClient.instance.payGateId &&
        payGateKey === PayGateClient.instance.payGateKey
      ) {
        debugSingleton("Returning existing instance, credentials provided and matches current");
        return PayGateClient.instance;
      }

      if (payGateId && payGateKey) {
        debugSingleton("Creating new instance, credentials provided and differs from current");
        PayGateClient.instance = new PayGateClient(payGateId, payGateKey);
        return PayGateClient.instance;
      }

      debugSingleton("Returning existing instance");
      return PayGateClient.instance;
    }

    debugSingleton("No instance exists");

    if (!payGateId || !payGateKey) {
      throw new PayGateError("No instance found, and insufficient credentials with which to authenticate");
    }

    debugSingleton("Creating new instance");
    PayGateClient.instance = new PayGateClient(payGateId, payGateKey);

    return PayGateClient.instance;
  }

  async requestPayment(paymentRequest: PaymentRequest): Promise<PaymentResponse> {
    try {
      const request = PayGateData.sanitizePaymentRequest(paymentRequest, this.payGateId, this.payGateKey);
      const payload = qs.stringify(request);

      debugPaymentRequest("Payment request");
      debugPaymentRequest(payload);
      debugPaymentRequest(request);

      const httpResponse = await superagent.post(PayGateEndpoints.INITIATE_URI).send(payload);

      debugPaymentRequest("Payment response");
      debugPaymentRequest(httpResponse.text);

      if (!TypeChecks.isPayGateResponse(httpResponse)) {
        throw new PayGateError(Message.UNKNOWN_RESPONSE);
      }

      const payGateResponse = qs.parse(httpResponse.text);

      if (TypeChecks.isPayGateErrorResponse(payGateResponse)) {
        throw new PayGateError(payGateResponse);
      }

      if (!TypeChecks.isPaymentReference(payGateResponse)) {
        throw new PayGateError(payGateResponse, Message.UNKNOWN_PAYGATE_RESPONSE);
      }

      const paymentResponse = {
        paymentRef: payGateResponse,
        redirectUri: PayGateEndpoints.REDIRECT_URI,
        redirectParams: {
          PAY_REQUEST_ID: payGateResponse.PAY_REQUEST_ID as string,
          CHECKSUM: payGateResponse.CHECKSUM as string,
        },
      };

      debugPaymentRequest(paymentResponse);

      return paymentResponse;
    } catch (e) {
      debugPaymentRequest("Error on requestPayment");
      throw e instanceof PayGateError ? e : new PayGateError(e);
    }
  }

  async handlePaymentNotification(paymentStatus: PaymentStatus): Promise<SuccessIndicator> {
    return this.addPaymentStatusToSession(paymentStatus);
  }

  async queryPaymentStatus(paymentRef: PaymentReference): Promise<PaymentStatus> {
    const existingPaymentStatus = await this.findPaymentStatusInSession(paymentRef);
    if (existingPaymentStatus) {
      debugPaymentStatus("Payment status returned from cache");
      return existingPaymentStatus;
    }

    try {
      const request = PayGateData.sanitizePaymentRef(paymentRef, this.payGateId, this.payGateKey);

      if (!request.REFERENCE || !request.PAY_REQUEST_ID) {
        throw new InvalidRequest(
          "No payment status found in cache, and both REFERENCE and PAY_REQUEST_ID is required for directly querying PayGate"
        );
      }

      const payload = qs.stringify(request);

      debugPaymentStatus("Payment status query");
      debugPaymentStatus(payload);
      debugPaymentStatus(request);

      const httpResponse = await superagent.post(PayGateEndpoints.QUERY_URI).send(payload);

      debugPaymentStatus("Payment status response");
      debugPaymentStatus(httpResponse.text);

      if (!TypeChecks.isPayGateResponse(httpResponse)) {
        throw new PayGateError(Message.UNKNOWN_RESPONSE);
      }

      const payGateResponse = qs.parse(httpResponse.text);

      if (TypeChecks.isPayGateErrorResponse(payGateResponse)) {
        throw new PayGateError(payGateResponse);
      }

      if (!TypeChecks.isPaymentStatus(payGateResponse)) {
        throw new PayGateError(payGateResponse, Message.UNKNOWN_PAYGATE_RESPONSE);
      }

      await this.addPaymentStatusToSession(payGateResponse);

      debugPaymentStatus(payGateResponse);

      return payGateResponse;
    } catch (e) {
      debugPaymentStatus("Error on queryPaymentStatus");
      throw e instanceof PayGateError ? e : new PayGateError(e);
    }
  }

  static generateChecksum(data: UntypedObject, encryptionKey: string): string {
    return util.generatePayGateChecksum(data, encryptionKey);
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

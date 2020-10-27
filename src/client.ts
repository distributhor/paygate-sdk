import qs from "qs";
import md5 from "md5";
import currency from "currency.js";
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
  ErrorObject,
  ErrorProperty,
  HttpError,
  Currency,
} from "./types";

export * from "./types";

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

export const Util = {
  removeAllNonValuedProperties: (obj: UntypedObject): void => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === undefined) {
        delete obj[key];
      }
    });
  },

  toCentAmount(amount: string | number): string {
    //   const strAmount = typeof amount === "number" ? amount.toString() : amount;
    //   const saneAmount = strAmount.replace(/,/g, "").replace(/ /g, "");
    //   const centAmount = saneAmount.indexOf(".") === -1 ? saneAmount + "00" : saneAmount.replace(/\./g, "");
    //   return centAmount;
    return currency(amount).intValue.toString();
  },
};

export const PayGateUtil = {
  checksum: (data: UntypedObject, secret: string): string => {
    return md5(
      Object.keys(data)
        .map((key) => data[key])
        .join("") + secret
    );
  },

  sanitizePaymentRequest: (data: PaymentRequest, payGateId?: string, payGateSecret?: string): PaymentRequest => {
    const obj: PaymentRequest = {
      PAYGATE_ID: payGateId || data.PAYGATE_ID,
      REFERENCE: data.REFERENCE || uuidv4(),
      AMOUNT: Util.toCentAmount(data.AMOUNT),
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

    Util.removeAllNonValuedProperties(obj);

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

    Util.removeAllNonValuedProperties(obj);

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
  private paymentStatusCache: NodeCache;

  private static instance: PayGateClient;

  constructor(payGateId?: string, payGateSecret?: string) {
    this.payGateId = payGateId;
    this.payGateSecret = payGateSecret;
    this.paymentStatusCache = new NodeCache({ stdTTL: 900, checkperiod: 1000 });
  }

  static getInstance(payGateId?: string, payGateSecret?: string): PayGateClient {
    if (PayGateClient.instance) {
      if (
        payGateId &&
        payGateSecret &&
        payGateId === PayGateClient.instance.payGateId &&
        payGateSecret === PayGateClient.instance.payGateSecret
      ) {
        // Credentials provided, but matches existing instance
        return PayGateClient.instance;
      }

      if (payGateId && payGateSecret) {
        // Different credentials provided, creating new instance
        PayGateClient.instance = new PayGateClient(payGateId, payGateSecret);
        return PayGateClient.instance;
      }

      // Returning existing instance
      return PayGateClient.instance;
    }

    // No instance exists

    if (!payGateId || !payGateSecret) {
      throw new PayGateError("No instance found, and insufficient credentials with which to authenticate");
    }

    // Create new instance
    PayGateClient.instance = new PayGateClient(payGateId, payGateSecret);

    return PayGateClient.instance;
  }

  async requestPayment(paymentRequest: PaymentRequest): Promise<PaymentResponse> {
    try {
      const data = PayGateUtil.sanitizePaymentRequest(paymentRequest, this.payGateId, this.payGateSecret);
      const httpResponse = await superagent.post(PayGateEndpoints.INITIATE_URI).send(qs.stringify(data));

      if (!httpResponse.text) {
        throw new PayGateError(Message.UNKNOWN_RESPONSE);
      }

      const payGateResponse = qs.parse(httpResponse.text);

      if (TypeChecks.containsErrorProperty(payGateResponse)) {
        throw new PayGateError(payGateResponse);
      }

      console.log("PayGate Response");
      console.log(payGateResponse);

      if (!TypeChecks.isPaymentReference(payGateResponse)) {
        throw new PayGateError(payGateResponse, Message.UNKNOWN_PAYGATE_RESPONSE);
      }

      return {
        paymentRef: payGateResponse,
        redirectUri: PayGateEndpoints.REDIRECT_URI,
        redirectParams: {
          PAY_REQUEST_ID: payGateResponse.PAY_REQUEST_ID as string,
          CHECKSUM: payGateResponse.CHECKSUM as string,
        },
      };
    } catch (e) {
      throw new PayGateError(e);
    }
  }

  async handlePaymentNotification(paymentStatus: PaymentStatus): Promise<SuccessIndicator> {
    return this.addPaymentStatusToSession(paymentStatus);
  }

  async queryPaymentStatus(paymentRef: PaymentReference): Promise<PaymentStatus> {
    const existingPaymentStatus = await this.findPaymentStatusInSession(paymentRef);
    if (existingPaymentStatus) {
      return existingPaymentStatus;
    }

    try {
      const data = PayGateUtil.sanitizePaymentRef(paymentRef, this.payGateId, this.payGateSecret);
      const httpResponse = await superagent.post(PayGateEndpoints.QUERY_URI).send(qs.stringify(data));

      if (!httpResponse.text) {
        throw new PayGateError(Message.UNKNOWN_RESPONSE);
      }

      const payGateResponse = qs.parse(httpResponse.text);

      if (TypeChecks.containsErrorProperty(payGateResponse)) {
        throw new PayGateError(payGateResponse);
      }

      if (!TypeChecks.isPaymentStatus(payGateResponse)) {
        throw new PayGateError(payGateResponse, Message.UNKNOWN_PAYGATE_RESPONSE);
      }

      await this.addPaymentStatusToSession(payGateResponse);

      return payGateResponse;
    } catch (e) {
      throw new PayGateError(e);
    }
  }

  static checksum(data: UntypedObject, secret: string): string {
    return PayGateUtil.checksum(data, secret);
  }

  private async addPaymentStatusToSession(paymentStatus: PaymentStatus): Promise<SuccessIndicator> {
    if (!this.paymentStatusCache) {
      return {
        success: false,
        message: "No cache available",
      };
    }

    if (!paymentStatus.REFERENCE && !paymentStatus.PAY_REQUEST_ID) {
      return {
        success: false,
        message: "No valid payment reference key found",
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
          return { key: k, val: paymentStatus };
        });

      console.log("Add to session");
      console.log(cacheEntries);
      const success = this.paymentStatusCache.mset(cacheEntries);

      return {
        success: success,
        message: "Set cache",
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
          return { key: k, val: paymentStatus };
        });

      console.log("Update session");
      console.log(newCacheEntries);
      this.paymentStatusCache.del(existingCachedKeys);
      const success = this.paymentStatusCache.mset(newCacheEntries);

      return {
        success: success,
        message: "Set cache",
      };
    }

    // the existing payment status already has a full version in the cache
    return {
      success: true,
      message: "Already cached",
    };
  }

  private async findPaymentStatusInSession(paymentRef: PaymentReference): Promise<PaymentStatus> {
    if (!this.paymentStatusCache) {
      return undefined;
    }

    if (!paymentRef.REFERENCE && !paymentRef.PAY_REQUEST_ID) {
      return undefined;
    }

    if (paymentRef.REFERENCE) {
      const cachedPaymentStatus = this.paymentStatusCache.get(paymentRef.REFERENCE) as PaymentStatus;
      if (cachedPaymentStatus) {
        console.log("Returning payment status from cache");
        return cachedPaymentStatus;
      }
    }

    if (paymentRef.PAY_REQUEST_ID) {
      const cachedPaymentStatus = this.paymentStatusCache.get(paymentRef.PAY_REQUEST_ID) as PaymentStatus;
      console.log("Returning payment status from cache");
      if (cachedPaymentStatus) {
        return cachedPaymentStatus;
      }
    }

    return undefined;
  }
}

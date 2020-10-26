import qs from "qs";
import md5 from "md5";
import currency from "currency.js";
import superagent from "superagent";
import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";
import {
  PaymentStatus,
  PaymentRequest,
  PaymentResponse,
  PaymentReference,
  PayGateErrorCodes,
  UntypedObject,
  ErrorObject,
  ErrorProperty,
  HttpError,
  Currency,
} from "./types";

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
const HttpStatus = {
  isSuccess: (r: any): boolean => {
    return r.status && (r.status === 200 || r.status === 204) ? true : false;
  },

  notFound: (r: any): boolean => {
    return r.status && r.status === 404 ? true : false;
  },

  isUnauthorized: (e: any): boolean => {
    if (e.status) {
      return e.status === 401 ? true : false;
    }
    return e.response && e.response.status === 401 ? true : false;
  },
};

/** @internal */
const PayGate = {
  INITIATE_URI: "https://secure.paygate.co.za/payweb3/initiate.trans",
  REDIRECT_URI: "https://secure.paygate.co.za/payweb3/process.trans",
  QUERY_URI: "https://secure.paygate.co.za/payweb3/query.trans",
  UNKNOWN_PAYGATE_RESPONSE: "Unexpected PayGate response",
  UNKNOWN_RESPONSE: "Unknown response",

  checksum: (data: UntypedObject, secret: string): string => {
    return md5(
      Object.keys(data)
        .map((key) => data[key])
        .join("") + secret
    );
  },

  removeAllNonValuedProperties: (obj: UntypedObject) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === undefined) {
        delete obj[key];
      }
    });
  },

  sanitizePaymentRequest: (data: PaymentRequest, payGateId?: string, payGateSecret?: string): PaymentRequest => {
    const obj: PaymentRequest = {
      PAYGATE_ID: payGateId || data.PAYGATE_ID,
      REFERENCE: data.REFERENCE || uuidv4(),
      AMOUNT: PayGate.toCentAmount(data.AMOUNT),
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

    PayGate.removeAllNonValuedProperties(obj);

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

    PayGate.removeAllNonValuedProperties(obj);

    if (payGateSecret) {
      obj.CHECKSUM = PayGateClient.checksum(obj, payGateSecret);
    }

    return obj;
  },

  toCentAmount(amount: string | number) {
    //   const strAmount = typeof amount === "number" ? amount.toString() : amount;
    //   const saneAmount = strAmount.replace(/,/g, "").replace(/ /g, "");
    //   const centAmount = saneAmount.indexOf(".") === -1 ? saneAmount + "00" : saneAmount.replace(/\./g, "");
    //   return centAmount;
    return currency(amount).intValue.toString();
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

  private static instance: PayGateClient;

  constructor(payGateId?: string, payGateSecret?: string) {
    this.payGateId = payGateId;
    this.payGateSecret = payGateSecret;
  }

  static getInstance(payGateId?: string, payGateSecret?: string): PayGateClient {
    if (payGateId && payGateSecret) {
      PayGateClient.instance = new PayGateClient(payGateId, payGateSecret);
    }

    if (!PayGateClient.instance) {
      throw new PayGateError("No instance found, and no credentials with which to authenticate");
    }

    return PayGateClient.instance;
  }

  async requestPayment(paymentRequest: PaymentRequest): Promise<PaymentResponse> {
    try {
      const data = PayGate.sanitizePaymentRequest(paymentRequest, this.payGateId, this.payGateSecret);
      console.log(data);
      const httpResponse = await superagent.post(PayGate.INITIATE_URI).send(qs.stringify(data));

      if (!httpResponse.text) {
        throw new PayGateError(PayGate.UNKNOWN_RESPONSE);
      }

      const payGateResponse = qs.parse(httpResponse.text);

      if (TypeChecks.containsErrorProperty(payGateResponse)) {
        throw new PayGateError(payGateResponse);
      }

      console.log("PayGate Response");
      console.log(payGateResponse);

      if (!TypeChecks.isPaymentReference(payGateResponse)) {
        throw new PayGateError(payGateResponse, PayGate.UNKNOWN_PAYGATE_RESPONSE);
      }

      return {
        paymentRef: payGateResponse,
        redirectUri: PayGate.REDIRECT_URI,
        redirectParams: {
          PAY_REQUEST_ID: payGateResponse.PAY_REQUEST_ID,
          CHECKSUM: payGateResponse.CHECKSUM,
        },
      };
    } catch (e) {
      throw new PayGateError(e);
    }
  }

  async paymentStatus(paymentRef: PaymentReference): Promise<PaymentStatus> {
    try {
      const data = PayGate.sanitizePaymentRef(paymentRef, this.payGateId, this.payGateSecret);
      const httpResponse = await superagent.post(PayGate.QUERY_URI).send(qs.stringify(data));

      if (!httpResponse.text) {
        throw new PayGateError(PayGate.UNKNOWN_RESPONSE);
      }

      const payGateResponse = qs.parse(httpResponse.text);

      if (TypeChecks.containsErrorProperty(payGateResponse)) {
        throw new PayGateError(payGateResponse);
      }

      if (!TypeChecks.isPaymentStatus(payGateResponse)) {
        throw new PayGateError(payGateResponse, PayGate.UNKNOWN_PAYGATE_RESPONSE);
      }

      return payGateResponse;
    } catch (e) {
      throw new PayGateError(e);
    }
  }

  static checksum(data: UntypedObject, secret: string): string {
    return PayGate.checksum(data, secret);
  }
}

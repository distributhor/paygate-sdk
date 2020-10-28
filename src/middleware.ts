import { Request, Response, NextFunction } from "express";
import { PaymentResponse, PaymentStatus } from "./types";
import { PayGateClient } from "./client";

export interface PayGateMiddlewareConfig {
  payGateId: string;
  payGateSecret: string;
  returnUri: string;
  notifyUri?: string;
  defaultCurrency?: string;
  defaultCountry?: string;
  defaultLocale?: string;
}

export interface PayGateMiddlewareResult {
  badRequest?: string;
  serviceError?: any;
}

export interface PayGateMiddlewarePaymentResult extends PayGateMiddlewareResult {
  paymentResponse?: PaymentResponse;
}

export interface PayGateMiddlewarePaymentStatus extends PayGateMiddlewareResult {
  paymentStatus?: PaymentStatus;
}

interface ExpressRequestWithPaymentResult extends Request {
  paygate: PayGateMiddlewarePaymentResult;
}

interface ExpressRequestWithPaymentStatus extends Request {
  paygate: PayGateMiddlewarePaymentStatus;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function paymentRequestHandler(options: PayGateMiddlewareConfig) {
  return async function (req: ExpressRequestWithPaymentResult, res: Response, next: NextFunction): Promise<void> {
    if (!req.body || !req.body.amount || !req.body.email) {
      req.paygate = {
        badRequest: "Invalid payment request received",
      };

      return next();
    }

    const paymentRequest = {
      AMOUNT: req.body.amount,
      EMAIL: req.body.email,
      RETURN_URL: options.returnUri,
      NOTIFY_URL: options.notifyUri,
    };

    try {
      const paymentResponse = await PayGateClient.getInstance(options.payGateId, options.payGateSecret).requestPayment(
        paymentRequest
      );

      req.paygate = {
        paymentResponse,
      };

      return next();
    } catch (e) {
      req.paygate = {
        serviceError: e,
      };

      return next();
    }
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function paymentNotificationHandler(options: PayGateMiddlewareConfig) {
  return async function (req: ExpressRequestWithPaymentStatus, res: Response, next: NextFunction): Promise<void> {
    if (!req.body || !req.body.PAY_REQUEST_ID) {
      req.paygate = {
        badRequest: "Invalid payment notification received",
      };

      return next();
    }

    try {
      await PayGateClient.getInstance(options.payGateId, options.payGateSecret).handlePaymentNotification(req.body);

      // if (!cacheOperation || !cacheOperation.success) {
      //   console.log("Failed to cache payment status");
      // }

      req.paygate = {
        paymentStatus: req.body,
      };

      return next();
    } catch (e) {
      req.paygate = {
        serviceError: e,
      };

      return next();
    }
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function paymentStatusHandler(options: PayGateMiddlewareConfig) {
  return async function (req: ExpressRequestWithPaymentStatus, res: Response, next: NextFunction): Promise<void> {
    if (!req.query || !req.query.PAY_REQUEST_ID || !req.query.REFERENCE) {
      req.paygate = {
        badRequest: "Invalid payment reference received",
      };

      return next();
    }

    try {
      const paymentStatus = await PayGateClient.getInstance(
        options.payGateId,
        options.payGateSecret
      ).queryPaymentStatus({
        PAY_REQUEST_ID: req.query.PAY_REQUEST_ID as string,
        REFERENCE: req.query.REFERENCE as string,
      });

      req.paygate = {
        paymentStatus,
      };

      return next();
    } catch (e) {
      req.paygate = {
        serviceError: e,
      };

      return next();
    }
  };
}

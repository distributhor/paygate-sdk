import { Request, Response, NextFunction } from "express";
import { PaymentResponse, PaymentStatus } from "./types";
import { PayGateClient } from "./client";

export interface PayGateMiddlewareConfig {
  payGateId: string;
  payGateSecret: string;
  returnUri: string;
  notifyUri?: string;
}

export interface PaymentResponseHttpRequest extends Request {
  paymentResponse: PaymentResponse;
}

export interface PaymentStatusHttpRequest extends Request {
  paymentStatus: PaymentStatus;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function paymentRequestHandler(options: PayGateMiddlewareConfig) {
  return async function (req: PaymentResponseHttpRequest, res: Response, next: NextFunction): Promise<Response> {
    if (!req.body || !req.body.amount || !req.body.email) {
      return res.sendStatus(400);
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

      req.paymentResponse = paymentResponse;

      next();
    } catch (e) {
      console.log("Error on handlePaymentRequest");
      console.log(e);
      res.sendStatus(503);
    }
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function paymentNotificationHandler(options: PayGateMiddlewareConfig) {
  return async function (req: PaymentStatusHttpRequest, res: Response, next: NextFunction): Promise<Response> {
    if (!req.body || !req.body.PAY_REQUEST_ID) {
      return res.sendStatus(400);
    }

    try {
      const cacheOperation = await PayGateClient.getInstance(
        options.payGateId,
        options.payGateSecret
      ).handlePaymentNotification(req.body);

      if (!cacheOperation || !cacheOperation.success) {
        console.log("Failed to cache payment status");
      }

      req.paymentStatus = req.body;

      next();
    } catch (e) {
      console.log("Error on handlePaymentNotification");
      console.log(e);
      return res.sendStatus(503);
    }
  };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function paymentStatusHandler(options: PayGateMiddlewareConfig) {
  return async function (req: PaymentStatusHttpRequest, res: Response, next: NextFunction): Promise<Response> {
    if (!req.query || !req.query.PAY_REQUEST_ID || !req.query.REFERENCE) {
      return res.sendStatus(400);
    }

    try {
      const paymentStatus = await PayGateClient.getInstance(
        options.payGateId,
        options.payGateSecret
      ).queryPaymentStatus({
        PAY_REQUEST_ID: req.query.PAY_REQUEST_ID as string,
        REFERENCE: req.query.REFERENCE as string,
      });

      req.paymentStatus = paymentStatus;

      next();
    } catch (e) {
      console.log("Error on queryPaymentStatus");
      console.log(e);
      return res.sendStatus(503);
    }
  };
}

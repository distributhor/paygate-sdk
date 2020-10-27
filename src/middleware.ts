import { Request, Response, NextFunction } from "express";
import { PaymentResponse, PaymentStatus } from "./types";
import { PayGateClient } from "./client";

export interface PaymentMiddlewareConfig {
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

export function handlePaymentRequest(options: PaymentMiddlewareConfig) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async function (req: PaymentResponseHttpRequest, res: Response, next: NextFunction) {
    const client = PayGateClient.getInstance(options.payGateId, options.payGateSecret);

    const paymentRequest = {
      AMOUNT: req.body.amount,
      EMAIL: req.body.email,
      RETURN_URL: options.returnUri,
      NOTIFY_URL: options.notifyUri,
    };

    try {
      req.paymentResponse = await client.requestPayment(paymentRequest);
      next();
    } catch (e) {
      console.log("Middleware Error");
      console.log(e);
      res.sendStatus(503);
    }
  };
}

export function handlePaymentNotification(options: PaymentMiddlewareConfig) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async function (req: PaymentStatusHttpRequest, res: Response, next: NextFunction) {
    if (!req.body || !req.body.PAY_REQUEST_ID) {
      console.log("Unexpected payment notification data");
      return res.sendStatus(503);
    }

    const cacheOperation = await PayGateClient.getInstance(
      options.payGateId,
      options.payGateSecret
    ).handlePaymentNotification(req.body);

    if (!cacheOperation || !cacheOperation.success) {
      console.log("Failed to cache payment status");
    }

    req.paymentStatus = req.body;

    next();
  };
}

export function queryPaymentStatus(options: PaymentMiddlewareConfig) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async function (req: PaymentStatusHttpRequest, res: Response, next: NextFunction) {
    if (!req.query.PAY_REQUEST_ID || !req.query.REFERENCE) {
      return res.sendStatus(400);
    }

    const client = PayGateClient.getInstance(options.payGateId, options.payGateSecret);

    try {
      const paymentStatus = await client.queryPaymentStatus({
        PAY_REQUEST_ID: req.query.PAY_REQUEST_ID as string,
        REFERENCE: req.query.REFERENCE as string,
      });

      req.paymentStatus = paymentStatus;

      next();
    } catch (e) {
      console.log(e);
      return res.sendStatus(503);
    }
  };
}

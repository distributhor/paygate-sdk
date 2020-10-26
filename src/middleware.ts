import { Request, Response, NextFunction } from "express";
import { PaymentResponse, PaymentStatus } from "./types";
import { PayGateClient } from "./client";

export interface PaymentMiddlewareConfig {
  payGateId: string;
  payGateSecret: string;
  returnUri: string;
  notifyUri?: string;
  session?: any;
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
    const client = new PayGateClient(options.payGateId, options.payGateSecret);

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

export function handlePaymentNotification() {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async function (req: PaymentStatusHttpRequest, res: Response, next: NextFunction) {
    if (!req.body || !req.body.PAY_REQUEST_ID) {
      console.log("Unexpected payment notification data");
      return res.sendStatus(503);
    }

    req.paymentStatus = req.body;

    next();
  };
}

export function handlePaymentStatus(options: PaymentMiddlewareConfig) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async function (req: PaymentStatusHttpRequest, res: Response, next: NextFunction) {
    if (req.query.PAY_REQUEST_ID && options && options.session[req.query.PAY_REQUEST_ID as string]) {
      return res.send(options.session[req.query.PAY_REQUEST_ID as string]);
    }

    if (!req.query.PAY_REQUEST_ID || !req.query.REFERENCE) {
      return res.sendStatus(400);
    }

    const client = new PayGateClient(options.payGateId, options.payGateSecret);

    try {
      const paymentStatus = await client.paymentStatus({
        PAY_REQUEST_ID: req.query.PAY_REQUEST_ID as string,
        REFERENCE: req.query.REFERENCE as string,
      });

      req.paymentStatus = paymentStatus;

      if (req.paymentStatus.PAY_REQUEST_ID) {
        if (!options.session) {
          options.session = {};
        }
        options.session[req.paymentStatus.PAY_REQUEST_ID] = req.paymentStatus;
      }

      next();
    } catch (e) {
      console.log(e);
      return res.sendStatus(503);
    }
  };
}

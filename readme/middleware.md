## ExpressJS Middleware

TODO: notes on caching, urlencoded body parser requirement

The middleware module exposes 3 functions that can be used in your existing [ExpressJS](https://expressjs.com) application.

▸ **paymentRequestHandler**(`config`: [PayGateConfig](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html)): (void)

▸ **paymentNotificationHandler**(`config`: [PayGateConfig](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html)): (void)

▸ **paymentStatusHandler**(`config`: [PayGateConfig](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html)): (void)

### paymentRequestHandler

The `paymentRequestHandler` can to be used on an endpoint of your choice, exposed as a `POST` request, and expects a request body that conforms to a [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html). It must be configured using a `PayGateConfig`. After handling the request, whether an error occurred or not, the result will be available on a `paygate` property on the ExpressJS request inside your endpoint function, from where you can do further processing.

The `paygate` property will contain a [PayGateMiddlewarePaymentResult](https://distributhor.github.io/paygate-sdk/interfaces/_middleware_.paygatemiddlewarepaymentresult.html), which has the following properties:

• **paymentResponse**: [PaymentResponse](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentresponse.html)

If the payment was processed, then the `paymentResponse` property will be set with the result. Note that this does not indicate whether the payment itself was successfull, or declined etc. The `PaymentResponse` has to be consulted to see the status of the actual payment. The fact that this property is set only means that the payment was processed (or handled), ie, there was no errors in providing the service.

• **badRequest**: string

If there was an issue with the data provided, such as required fields missing on the `PaymentRequest` or any other issue that can/should be rectified by the service that uses this endpoint, then an appropriate message will be set on this property, and no other properties will be set. This should usually result in an `HTTP 400` or `Bad Request`, but you can can deal with it any way you want.

• **serviceError**: any

If there was an internal error, or a caught exception, and the service could not be provided due to it, then the low level error or exception will be set on this property, and no other properties will be set. This should usually result in an `HTTP 500` or `Internal Server Error`, but you can deal with any way you want.

### paymentNotificationHandler

The `paymentNotificationHandler` can to be used on an endpoint of your choice, exposed as a `POST` request, and expects a request body that conforms to a [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html). It must be configured using a `PayGateConfig`. This endpoint can therefore be used as the URI where PayGate sends payment notifications, as per the `NOTIFY_URL`.

This endpoint will only receive such notifications, and by default does nothing else. You will typically use this endpoint to persist payment notifications or trigger any other event driven processing that needs to happen on receiving payment notifications.

TODO: must return OK according to PayGate spec

TODO: notes on caching

After receiving the request, whether an error occurred or not, the result will be available on a `paygate` property on the ExpressJS request inside your endpoint function, from where you can do further processing.

The `paygate` property will contain a [PayGateMiddlewarePaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_middleware_.paygatemiddlewarepaymentstatus.html), which has the following properties:

• **paymentStatus**: [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)

If the payment notification was received, then the `paymentStatus` property will be set with the result. Note that this does not indicate whether the payment itself was successfull, or declined etc. The `paymentStatus` has to be consulted to see the status of the actual payment. The fact that this property is set only means that the payment notification was received, ie, there was no errors in providing the service.

**badRequest** and **serviceError** is same as above

### paymentStatusHandler

The `paymentStatusHandler` can to be used on an endpoint of your choice, exposed as a `GET` request, and expects to receive either one of, or both, of the request parameters `PAY_REQUEST_ID` and `REFERENCE`. It must be configured using a `PayGateConfig`. This handler will query PayGate for the status of a payment. After handling the request, whether an error occurred or not, the result will be available on a `paygate` property on the ExpressJS request inside your endpoint function, from where you can do further processing.

The `paygate` property will contain a [PayGateMiddlewarePaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_middleware_.paygatemiddlewarepaymentstatus.html), which has the following properties:

• **paymentStatus**: [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)

If the payment status was queried, then the `paymentStatus` property will be set with the result. You will usually want to return this payment status to the caller, but can handle it any way. If a failure occurred, then either of `badRequest` or `serviceError` will be set.

TODO: notes on caching and both fields required if not quering from the cache, ie, query directly with payagte

**badRequest** and **serviceError** is same as above

### Example

Below is example showing how to use these middleware handlers in an ExpressJS environment. Note that the `urlencoded` body parser is required, since PayGate sends responses as that, and that the `paymentNotificationHandler` returns the text "OK" as required by PayGate.

```javascript
const express = require("express");
const bodyParser = require("body-parser");

const { paymentRequestHandler, paymentNotificationHandler, paymentStatusHandler } = require("paygate-sdk");

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const middlewareConfig = {
  payGateId: process.env.PAYGATE_ID,
  payGateKey: process.env.PAYGATE_SECRET,
  returnUrl: "https://your.return.url",
  notifyUrl: "https://your.notify.url",
  autoTransactionDate: true,
  autoPaymentReference: true,
  fallbackToZA: true,
};

server.post("/payment-request", paymentRequestHandler(middlewareConfig), async (req, res) => {
  if (req.paygate.badRequest) {
    return res.status(400).send({ message: req.paygate.badRequest });
  }

  if (req.paygate.serviceError) {
    return res.sendStatus(500);
  }

  // send the response back to the caller
  res.send(req.paygate.paymentResponse);
});

server.post("/payment-notification", paymentNotificationHandler(middlewareConfig), async (req, res) => {
  if (req.paygate.badRequest) {
    return res.status(400).send({ message: req.paygate.badRequest });
  }

  if (req.paygate.serviceError) {
    return res.sendStatus(500);
  }

  // persist  the payment status available on req.paygate.paymentStatus,
  // or trigger other payment notification events

  // must send back text with "OK"
  res.send("OK");
});
```

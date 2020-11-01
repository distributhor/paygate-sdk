## ExpressJS Middleware

Documentaion in progress ...

The middleware module exposes 3 functions that can be used in your existing [ExpressJS](https://expressjs.com) application.

• **paymentRequestHandler**(`config`: [PayGateConfig](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html)): (void)

• **paymentNotificationHandler**(`config`: [PayGateConfig](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html)): (void)

• **paymentStatusHandler**(`config`: [PayGateConfig](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html)): (void)

### paymentRequestHandler

The `paymentRequestHandler` has to be used on an endpoint of your choice, exposed as a `POST` request, and expects as request body that conforms to a [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html). It mus be configured using a `PayGateConfig`. After handling the request, whether an error occurred or not, the result will be available on a `paygate` property on the ExpressJS request inside your endpoint function, from where you can do further processing.

The `paygate` property will contain a [PayGateMiddlewarePaymentResult](https://distributhor.github.io/paygate-sdk/interfaces/_middleware_.paygatemiddlewarepaymentresult.html), which has the following properties:

**paymentResponse**

• `Optional` **paymentResponse**: [PaymentResponse](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentresponse.html)

If the payment was processed, then the `paymentResponse` property will be set with the result. Note that this does not indicate whether the payment itself was successfull, or declined etc. The `PaymentResponse` has to be consulted to see the status of the actual payment. The fact that this property is set only means that the payment was processed (or handled), ie, there was no errors in providing the service.

**badRequest**

• `Optional` **badRequest**: string

If there was an issue with the data provided, such as required fields missing on the `PaymentRequest` or any other issue that can/should be rectified by the service that uses this endpoint, then an appropriate message will be set on this property, and no `paymentResponse` or `serviceError` will be available. This should usually result in an `HTTP 400` or `Bad Request`, but you can can deal with it any way you want.

**serviceError**

• `Optional` **serviceError**: any

If there was an internal error, or a caught exception, and the service could not be provided due to it, then the low level error or exception will be set on this property, and no `paymentResponse` or `badRequest` will be available. This should usually result in an `HTTP 500` or `Internal Server Error`, but you can deal with any way you want.

### paymentNotificationHandler

The `paymentNotificationHandler` has to be used on an endpoint of your choice, exposed as a `POST` request, and expects a request body that conforms to a [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html). It must be configured using a `PayGateConfig`. This endpoint can therefore be used as an endpoint where PayGate sends payment notifications, as per the `NOTIFY_URL`. Thus, if you configure and endpoint with this handler, then you can use that endpoint URI as the value of your `notifyUrl` in the `PayGateConfig`.

You will typically use this endpoint to persist payment notifications.

TODO: must return OK according to PayGate spec
TODO: notes on caching

After handling the request, whether an error occurred or not, the result will be available on a `paygate` property on the ExpressJS request inside your endpoint function, from where you can do further processing.

The `paygate` property will contain a [PayGateMiddlewarePaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_middleware_.paygatemiddlewarepaymentstatus.html), which has the following properties:

**paymentStatus**

• `Optional` **paymentStatus**: [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)

If the payment notification was received, then the `paymentStatus` property will be set with the result. Note that this does not indicate whether the payment itself was successfull, or declined etc. The `paymentStatus` has to be consulted to see the status of the actual payment, the fact that this property is set only means that the payment notification was received. There was no errors in providing the service.

**badRequest**

Same as above

**serviceError**

Same as above

### paymentStatusHandler

In progress

### Example

In progress

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

  res.send(req.paygate.paymentResponse);
});
```

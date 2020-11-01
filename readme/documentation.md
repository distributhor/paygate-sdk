### Table Of Contents

- [Reference Implementation](#reference-implementation)
- [Configuration](#configuration)
- [Middleware](#expressjs-middleware)
- [API Client](#api-client)
- [Utils](#common-utility-functions)
- [Types](#types)

## Reference Implementation

In addition to the reference documentation, there is also a reference implementation available under the `impl` folder, which you can run in your local development environment (which will use a PayGate demo account) in a few simple steps. It serves as an example of how to use the various modules, and also as a playground where one can easily test an implementation. It consists of an ExpressJS backend that exposes endpoints via the middleware functions (which in turn uses the TS/JS API client), and a very simple frontend with which to test payments. To run the implementation, follow the steps below.

### Ngrok Token

In order to run the reference implementation locally, you will need to have an account with [Ngrok](https://ngrok.com). A basic account is free and quick to set up. Ngrok, if you don't already know, is a service that can make your local development server available on a public URL via a secure tunnel. This is needed because PayGate needs to return to a URL that is publically available, after processing a payment. So we use Ngrok to expose the frontend app to the web.

Once you have an Ngrok authentication token, copy the file `impl/proxy/.env.sample` to `impl/proxy/.env` and replace the fake value with your authentication token. This is all that will be required to configure the tunelling environment.

### PayGate Credentials

The backend server implementation needs to know which PayGate credentials to use for testing. Copy the file `impl/server/.env.sample` to `impl/server.env`. It is already configured with the default PayGate test credentials, so no further action is needed. But if you wanted to test with different credentials, you may update them in this file.

### Running the reference implementation locally

If you have an Ngrok auth token and PayGate credentials configured, then you can simply run `yarn install` and `yarn develop` in each of the folders `impl/proxy`, `impl/server` and `impl/app`, and the proxy needs to be the first one to run. This (the fact that 3 different instance are running in 3 consoles) may be improved later to allow for a somewhat better development experience.

Once they are all up and running, navigate to http://localhost:8000 to test payments.

[Back to top](#table-of-contents)

## Configuration

Both the API Client as well as the ExpressJS middleware are configured via a [PayGateConfig](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html) object, described by the properties below. The `payGateId` and `payGateKey` properties are required, all the rest is optional. Where optional properties or default configuration values are not specified, those values will **have** to be explicitly passed in with each [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html). For example, you would typically have to set the `RETURN_URL` and a unique `TRANSACTION_DATE` on the `PaymentRequest`, as per the [PayGate Specification](https://docs.paygate.co.za/?shell#request). But if you were to specify a `returnUrl` on the configuration, and set `autoTransactionDate` to true, then you don't have to supply those values with the `PaymentRequest`, as they will be set automatically by the client and middleware. _Values explicitly found on the `PaymentRequest` will always take precedence over default configuration values_.

For all of this README documentation, all fields in `CAPS`, such as those found on `PaymentRequest`, are values specified and required by PayGate. Please refer to [the PayGate specification](https://docs.paygate.co.za/?shell#request) for the details and requirements on those.

### Configuration Properties

• **payGateId**: string `Required`

Your PayGate account ID

• **payGateKey**: string `Required`

Your PayGate password/secret

• **returnUrl**: string `Optional`

A default URL that PayGate should return to after processing a payment. If you set a `RETURN_URL` with an individual [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html), then that value will take precedence over this one.

• **notifyUrl**: string `Optional`

A default URL that PayGate should post payment notifications to. If you set a `NOTIFY_URL` with an individual [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html), then that value will take precedence over this one. If no value is found on either, then PayGate will not post payment notification data back.

• **autoPaymentReference**: boolean `Optional`

A unique payment reference (ID) has to be passed in with each [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html) on the `REFERENCE` property. If you prefer to have control over that ID generation, then leave this value unset or false and set it on the `PaymentRequest`. But if you prefer to have a payment reference auto generated for you, then set this configuration value to `true`, and don't specify anything on the `REFERENCE` property of the `PaymentRequest` itself. If a value is found on the `PaymentRequest`, even with `autoPaymentReference` enabled, then the value on the payment request would take precedence over an auto generated one. Currently the unique ID being generated is a UUID4 string. An option may exist in the future to configure your own custom ID generator.

• **autoTransactionDate**: boolean `Optional`

A transaction date has to be passed in with each [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html) on the `TRANSACTION_DATE` property. If you prefer to have control over the date generation, then leave this value unset or false and set it on the `PaymentRequest`. But if you prefer to have a date auto generated for you (at the time the request is invoked), then set this configuration value to `true`, and don't specify anything on the `TRANSACTION_DATE` property of the `PaymentRequest` itself. If a value is found on the `PaymentRequest`, even with `autoTransactionDate` enabled, then the value on the payment request would take precedence over an auto generated one.

• **defaultCountry**: [CountryCode](https://distributhor.github.io/paygate-sdk/enums/_types_.countrycode.html) `Optional`

A country code has to be passed in with each [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html) on the `COUNTRY` property. If no value is set on the `PaymentRequest` and a `defaultCountry` is configured, then the default value will be used. If a `COUNTRY` value is present on the `PaymentRequest`, it will be used instead.

• **defaultCurrency**: [CurrencyCode](https://distributhor.github.io/paygate-sdk/enums/_types_.currencycode.html) `Optional`

A currency code has to be passed in with each [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html) on the `CURRENCY` property. If no value is set on the `PaymentRequest` and a `defaultCurrency` is configured, then the default value will be used. If a `CURRENCY` value is present on the `PaymentRequest`, it will be used instead.

• **defaultLocale**: [PayGateLocale](https://distributhor.github.io/paygate-sdk/enums/_types_.paygatelocale.html) `Optional`

A locale code has to be passed in with each [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html) on the `LOCALE` property. If no value is set on the `PaymentRequest` and a `defaultLocale` is configured, then the default value will be used. If no value is found anywhere, then an english locale will be returned. This value is only relevant for the PayGate UI, and is not used for anything related to currency and country when processing payments.

• **defaultPaymentMethod**: [PaymentMethod](https://distributhor.github.io/paygate-sdk/enums/_types_.paymentmethod.html) `Optional`

The payment method is an optional value according to the PayGate specification. However, if no value is set on the `PaymentRequest` and a `defaultPaymentMethod` is configured, then the default value will be used.

• **fallbackToZA**: boolean `Optional`

The `fallbackToZA` configuration option only affects `COUNTRY` and `CURRENCY` on the `PaymentRequest`. If it is set to `true`, and no value is expicitly set on the `PaymentRequest`, and furthermore no value is configured for `defaultCountry` and `defaultCurrency` respectively, then it will fallback to `ZAF` for country and `ZAR` for currency. If you are predominantly processing payments within South Africa, this can be a convenient option to set.

[Back to top](#table-of-contents)

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

• **badRequest** and **serviceError** is same as above

### paymentStatusHandler

The `paymentStatusHandler` can to be used on an endpoint of your choice, exposed as a `GET` request, and expects to receive either one of, or both, of the request parameters `PAY_REQUEST_ID` and `REFERENCE`. It must be configured using a `PayGateConfig`. This handler will query PayGate for the status of a payment. After handling the request, whether an error occurred or not, the result will be available on a `paygate` property on the ExpressJS request inside your endpoint function, from where you can do further processing.

The `paygate` property will contain a [PayGateMiddlewarePaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_middleware_.paygatemiddlewarepaymentstatus.html), which has the following properties:

• **paymentStatus**: [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)

If the payment status was queried, then the `paymentStatus` property will be set with the result. You will usually want to return this payment status to the caller, but can handle it any way. If a failure occurred, then either of `badRequest` or `serviceError` will be set.

TODO: notes on caching and both fields required if not quering from the cache, ie, query directly with payagte

• **badRequest** and **serviceError** is same as above

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

[Back to top](#table-of-contents)

## API Client

In progress ..

The PayGate API client is the core component of the SDK, and what most developers will use to build a PayGate integration. It is a Typescript API, but the compiled Javascript client can also be used in a NodeJS application. The TS reference documentation can be found here: https://distributhor.github.io/paygate-sdk/index.html, but an introduction is provided below.

### Constructor

\+ **new PayGateClient**(`payGateId?`: string, `payGateKey?`: string): [PayGateClient](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)

### Methods

▸ **handlePaymentNotification**(`paymentStatus`: [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)): Promise\<[SuccessIndicator](https://distributhor.github.io/paygate-sdk/interfaces/_types_.successindicator.html)>

▸ **queryPaymentStatus**(`paymentRef`: [PaymentReference](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentreference.html)): Promise\<[PaymentStatus](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)>

▸ **requestPayment**(`paymentRequest`: [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html)): Promise\<[PaymentResponse](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentresponse.html)>

▸ `Static`**generateChecksum**(`data`: [UntypedObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.untypedobject.html), `encryptionKey`: string): string

▸ `Static`**getInstance**(`payGateId?`: string, `payGateKey?`: string): [PayGateClient](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)

[Back to top](#table-of-contents)

## Common Utility Functions

Documentation in progress ...

```javascript
generatePayGateChecksum();
getTransactionDescription();
getTestCards();
toCentAmount();
redirectBrowser();
PayGateLocale;
PayGateEndpoints;
PayGateErrorCodes;
PaymentMethod;
TransactionCode;
TransactionStatus;
TransactionResultCodes;
PayGateTestCards;
```

### Functions

▸ **generatePayGateChecksum**(`data`: [UntypedObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.untypedobject.html), `encryptionKey`: string): string

▸ **getTestCards**(): [CreditCard](https://distributhor.github.io/paygate-sdk/interfaces/_types_.creditcard.html)[]

▸ **getTestCardsByTransactionType**(): [CreditCard](https://distributhor.github.io/paygate-sdk/interfaces/_types_.creditcard.html)[]

▸ **getTransactionDescription**(`paymentStatus`: [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)): [TransactionDescription](https://distributhor.github.io/paygate-sdk/interfaces/_types_.transactiondescription.html)

▸ **redirectBrowser**(`uri`: string, `params`: any): void

▸ **removeAllNonValuedProperties**(`obj`: [UntypedObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.untypedobject.html)): void

▸ **toCentAmount**(`amount`: string \| number): string

[Back to top](#table-of-contents)

## Types

Documentation in progress ...

### Enumerations

- [Currency](https://distributhor.github.io/paygate-sdk/enums/_types_.currency.html)
- [PaymentMethod](https://distributhor.github.io/paygate-sdk/enums/_types_.paymentmethod.html)
- [TransactionCode](https://distributhor.github.io/paygate-sdk/enums/_types_.transactioncode.html)
- [PayGateLocale](https://distributhor.github.io/paygate-sdk/enums/_types_.paygatelocale.html)

### Interfaces

- [UntypedObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.untypedobject.html)
- [ErrorObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.errorobject.html)
- [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html)
- [PaymentResponse](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentresponse.html)
- [PaymentReference](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentreference.html)
- [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)
- [RedirectParams](https://distributhor.github.io/paygate-sdk/interfaces/_types_.redirectparams.html)
- [SuccessIndicator](https://distributhor.github.io/paygate-sdk/interfaces/_types_.successindicator.html)
- [TransactionDescription](https://distributhor.github.io/paygate-sdk/interfaces/_types_.transactiondescription.html)
- [CreditCard](https://distributhor.github.io/paygate-sdk/interfaces/_types_.creditcard.html)

### Object literals

#### PayGateEndpoints

▪ `Const` **[PayGateEndpoints](https://distributhor.github.io/paygate-sdk/modules/_types_.html#paygateendpoints)**: object

#### Properties:

| Name           | Type   | Value                                                 |
| -------------- | ------ | ----------------------------------------------------- |
| `INITIATE_URI` | string | "https://secure.paygate.co.za/payweb3/initiate.trans" |
| `QUERY_URI`    | string | "https://secure.paygate.co.za/payweb3/query.trans"    |
| `REDIRECT_URI` | string | "https://secure.paygate.co.za/payweb3/process.trans"  |

#### TransactionStatus

▪ `Const` **[TransactionStatus](https://distributhor.github.io/paygate-sdk/modules/_types_.html#transactionstatus)**: object

#### Properties:

| Name | Type   | Value                 |
| ---- | ------ | --------------------- |
| `0`  | string | "Not Done"            |
| `1`  | string | "Approved"            |
| `2`  | string | "Declined"            |
| `3`  | string | "Cancelled"           |
| `4`  | string | "User Cancelled"      |
| `5`  | string | "Received by PayGate" |
| `7`  | string | "Settlement Voided"   |

#### PayGateErrorCodes

▪ `Const` **[PayGateErrorCodes](https://distributhor.github.io/paygate-sdk/modules/_types_.html#paygateerrorcodes)**: object

#### Properties:

| Name                 | Type   | Value                                                                                                 |
| -------------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `CNTRY_INVALID`      | string | "Country Invalid"                                                                                     |
| `DATA_AMT_NUM`       | string | "Amount is not a number"                                                                              |
| `DATA_AMT_ZERO`      | string | "Amount value is zero"                                                                                |
| `DATA_CHK`           | string | "Checksum calculated incorrectly"                                                                     |
| `DATA_CREF`          | string | "No transaction reference"                                                                            |
| `DATA_DTTM`          | string | "Transaction date invalid"                                                                            |
| `DATA_INS`           | string | "Error creating record for transaction request"                                                       |
| `DATA_PAY_REQ_ID`    | string | "Pay request ID missing or invalid"                                                                   |
| `DATA_PM`            | string | "Pay Method or Pay Method Detail fields invalid"                                                      |
| `DATA_PW`            | string | "Not all required fields have been posted to PayWeb"                                                  |
| `DATA_REGION`        | string | "No Country or Locale"                                                                                |
| `DATA_URL`           | string | "No return url"                                                                                       |
| `INVALID_VAULT`      | string | "Vault value invalid"                                                                                 |
| `INVALID_VAULT_ID`   | string | "Vault ID invalid"                                                                                    |
| `INV_EMAIL`          | string | "Invalid Email address"                                                                               |
| `LOCALE_INVALID`     | string | "Invalid Locale"                                                                                      |
| `ND_INV_PGID`        | string | "Invalid PayGate ID"                                                                                  |
| `NOT_LIVE_PM`        | string | "No available payment methods"                                                                        |
| `NO_TRANS_DATA`      | string | "No transaction data found"                                                                           |
| `PAYVAULT_NOT_EN`    | string | "PayVault not enabled"                                                                                |
| `PGID_NOT_EN`        | string | "PayGate ID not enabled, there are no available payment methods or there are no available currencies" |
| `TXN_CAN`            | string | "Transaction has already been cancelled"                                                              |
| `TXN_CMP`            | string | "Transaction has already been completed"                                                              |
| `TXN_PRC`            | string | "Transaction is older than 30 minutes or there has been an error processing it"                       |
| `VAULT_NOT_ACCEPTED` | string | "Card types enabled on terminal not available for vaulting"                                           |

#### CreditCardResultCodes

▪ `Const` **[CreditCardResultCodes](https://distributhor.github.io/paygate-sdk/modules/_types_.html#creditcardresultcodes)**: object

#### Properties:

| Name     | Type   | Value                                                           |
| -------- | ------ | --------------------------------------------------------------- |
| `900001` | string | "Call for approval"                                             |
| `900002` | string | "Card expired"                                                  |
| `900003` | string | "Insufficient funds"                                            |
| `900004` | string | "Invalid card number"                                           |
| `900005` | string | "Bank interface timeout"                                        |
| `900006` | string | "Invalid card"                                                  |
| `900007` | string | "Declined"                                                      |
| `900009` | string | "Lost card"                                                     |
| `900010` | string | "Invalid card length"                                           |
| `900011` | string | "Suspected fraud"                                               |
| `900012` | string | "Card reported as stolen"                                       |
| `900013` | string | "Restricted card"                                               |
| `900014` | string | "Excessive card usage"                                          |
| `900015` | string | "Card blacklisted"                                              |
| `900017` | string | "Auth done"                                                     |
| `900207` | string | "Declined; authentication failed (incorrect verification code)" |
| `900210` | string | "3D Secure lookup timeout"                                      |
| `990020` | string | "Auth declined"                                                 |
| `991001` | string | "Invalid expiry date"                                           |
| `991002` | string | "Invalid amount"                                                |

#### CommunicationAndDataResultCodes

▪ `Const` **[CommunicationAndDataResultCodes](https://distributhor.github.io/paygate-sdk/modules/_types_.html#communicationanddataresultcodes)**: object

#### Properties:

| Name     | Type   | Value                                                                                               |
| -------- | ------ | --------------------------------------------------------------------------------------------------- |
| `900019` | string | "Invalid PayVault scope"                                                                            |
| `900205` | string | "Unexpected authentication result (phase 1)"                                                        |
| `900206` | string | "Unexpected authentication result (phase 2)"                                                        |
| `900209` | string | "Transaction verification failed (phase 2) (verification data altered)"                             |
| `900210` | string | "Authentication already complete; transaction must be restarted (verification done more than once)" |
| `990001` | string | "Could not insert into DB"                                                                          |
| `990013` | string | "Error processing a batch transaction"                                                              |
| `990022` | string | "Bank not available"                                                                                |
| `990024` | string | "Duplicate transaction detected"                                                                    |
| `990028` | string | "Transaction cancelled"                                                                             |
| `990053` | string | "Error processing transaction"                                                                      |

#### Properties:

| Name | Type   | Value       |
| ---- | ------ | ----------- |
| `af` | string | "Afrikaans" |
| `en` | string | "Enblish"   |
| `sx` | string | "Sutu"      |
| `tn` | string | "Tswana"    |
| `ve` | string | "Venda"     |
| `zu` | string | "Zulu"      |

#### PaymentMethodName

▪ `Const` **[PaymentMethodName](https://distributhor.github.io/paygate-sdk/modules/_types_.html#paymentmethodname)**: object

#### Properties:

| Name | Type   | Value           |
| ---- | ------ | --------------- |
| `BT` | string | "Bank Transfer" |
| `CC` | string | "Credit Card"   |
| `CV` | string | "Cash Voucher"  |
| `DC` | string | "Debit Card"    |
| `EW` | string | "E-Wallet"      |
| `PC` | string | "Pre-Paid Card" |

#### PayGateTestCards

▪ `Const` **[PayGateTestCards](https://distributhor.github.io/paygate-sdk/modules/_types_.html#paygatetestcards)**: object

#### Properties:

| Name                | Type   | Value                                                                          |
| ------------------- | ------ | ------------------------------------------------------------------------------ |
| `Approved`          | object | { MasterCard: string = "5200000000000015"; Visa: string = "4000000000000002" } |
| `Declined`          | object | { MasterCard: string = "4000000000000036"; Visa: string = "5200000000000049" } |
| `InsufficientFunds` | object | { MasterCard: string = "5200000000000023"; Visa: string = "4000000000000028" } |
| `NotProcessed`      | object | { MasterCard: string = "5200000000000064" }                                    |

# PayGate SDK

[![GitHub Release][ico-release]][link-github-release]
[![License][ico-license]](LICENSE)
[![Total alerts][lgtm-alerts]](link-lgtm-alerts)
[![Language grade: JavaScript][lgtm-code-quality]](lgtm-code-quality-link)

## Work Currently In Progress

- Validation improvements
- Locales and currencies
- Documentation

## Introduction

This project contains a few parts which can be used seperately or in combination, to aid with integration to the payment provider PayGate (https://www.paygate.co.za).

The main components are:

- Standalone Typescript/Javascript client to interface with the PayGate API, usable in any Typescript or NodeJS project
- ExpressJS middleware which can be used to easily configure endpoints for payment processing
- A utility which can help with common PayGate tasks, such as generating payload checksum easily, or extracting a friendly transaction summary message from a payment status response
- Browser script of the utility functions, allowing them to be imported via a `<script>` tag straight into HTML

These components can be used in isolation, or in combination, so you only have to pick what you need in order to help with your specific integration requirements. For example, if you are already using ExpressJS and want to easily enable endpoints that can handle payment processing, then it's likely that the only thing you need from this project is the ExpressJS middleware functions. Or perhaps you want to use the TS/JS client in a Node based project so that you don't have to deal directly with the PayGate HTTP API.

Currently this project is in development, but already quite usable. Reference documentation (currently a work in progress) can be found at https://distributhor.github.io/paygate-sdk/, and more detailed usage info will be made available in this README shortly.

## Reference Implementation

There is also a reference implementation available under the `impl` folder. It consists of an ExpressJS backend that exposes endpoints via the middleware functions (which in turn uses the TS/JS API client), and a very simple frontend with which to test payments. It should demonstrate how to use these components in your own project. The reference implementation can run in your local development environment in only a few easy steps.

### Ngrok Token

In order to run the reference implementation locally, you will need to have an account with Ngrok https://ngrok.com/. A basic account is free and quick to set up. Ngrok, if you don't already know, is a service that can make your local development server available on a public URL via a secure tunnel. This is needed because PayGate needs to return to a URL that is publically available, after processing a payment. So we use Ngrok to expose the frontend app to the web.

Once you have an Ngrok authentication token, copy the file `impl/proxy/.env.sample` to `impl/proxy/.env` and replace the fake value with your authentication token. This is all that will be required to configure the tunelling environment.

### PayGate Credentials

The backend server implementation needs to know which PayGate credentials to use for testing. Copy the file `impl/server/.env.sample` to `impl/server.env`. It is already configured with the default PayGate test credentials, so no further action is needed. But if you wanted to test with different credentials, you may update them in this file.

### Running the reference implementation locally

If you have an Ngrok auth token and PayGate credentials configured, then you can simply run `yarn install` and `yarn develop` in each of the folders `impl/proxy`, `impl/server` and `impl/app`, and the proxy needs to be the first one to run. This (the fact that 3 different instance are running in 3 consoles) may be improved later to allow for a somewhat better development experience.

Once they are all up and running, navigate to http://localhost:8000 to test payments.

## API Client Usage

Documentation in progress ...

### Constructor

\+ **new PayGateClient**(`payGateId?`: string, `payGateKey?`: string): [PayGateClient](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)

### Methods

▸ **handlePaymentNotification**(`paymentStatus`: [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)): Promise\<[SuccessIndicator](https://distributhor.github.io/paygate-sdk/interfaces/_types_.successindicator.html)>

▸ **queryPaymentStatus**(`paymentRef`: [PaymentReference](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentreference.html)): Promise\<[PaymentStatus](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)>

▸ **requestPayment**(`paymentRequest`: [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html)): Promise\<[PaymentResponse](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentresponse.html)>

▸ `Static`**generateChecksum**(`data`: [UntypedObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.untypedobject.html), `encryptionKey`: string): string

▸ `Static`**getInstance**(`payGateId?`: string, `payGateKey?`: string): [PayGateClient](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)

## ExpressJS Middleware Usage

Documentation in progress ...

### Interfaces

- [PayGateMiddlewareConfig](https://distributhor.github.io/paygate-sdk/interfaces/_middleware_.paygatemiddlewareconfig.html)
- [PayGateMiddlewarePaymentResult](https://distributhor.github.io/paygate-sdk/interfaces/_middleware_.paygatemiddlewarepaymentresult.html)
- [PayGateMiddlewarePaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_middleware_.paygatemiddlewarepaymentstatus.html)
- [PayGateMiddlewareResult](https://distributhor.github.io/paygate-sdk/interfaces/_middleware_.paygatemiddlewareresult.html)

### Functions

▸ **paymentNotificationHandler**(`options`: [PayGateMiddlewareConfig](https://distributhor.github.io/paygate-sdk/interfaces/_middleware_.paygatemiddlewareconfig.html)): (Anonymous function)

▸ **paymentRequestHandler**(`options`: [PayGateMiddlewareConfig](https://distributhor.github.io/paygate-sdk/interfaces/_middleware_.paygatemiddlewareconfig.html)): (Anonymous function)

▸ **paymentStatusHandler**(`options`: [PayGateMiddlewareConfig](https://distributhor.github.io/paygate-sdk/interfaces/_middleware_.paygatemiddlewareconfig.html)): (Anonymous function)

## General Utility Functions

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

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[ico-release]: https://img.shields.io/github/tag/distributhor/paygate-sdk.svg
[link-github-release]: https://github.com/distributhor/paygate-sdk/releases
[lgtm-alerts]: https://img.shields.io/lgtm/alerts/g/distributhor/paygate-sdk.svg?logo=lgtm&logoWidth=18
[link-lgtm-alerts]: https://lgtm.com/projects/g/distributhor/paygate-sdk/alerts/
[lgtm-code-quality]: https://img.shields.io/lgtm/grade/javascript/g/distributhor/paygate-sdk.svg?logo=lgtm&logoWidth=18
[lgtm-code-quality-link]: https://lgtm.com/projects/g/distributhor/paygate-sdk/context:javascript

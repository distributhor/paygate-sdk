# PayGate SDK

[![GitHub Release][ico-release]][link-github-release]
[![License][ico-license]](LICENSE)
[![Total alerts][lgtm-alerts]](link-lgtm-alerts)
[![Language grade: JavaScript][lgtm-code-quality]](lgtm-code-quality-link)

This project contains a few parts which can be used seperately or in combination, to aid with integration to the payment provider PayGate (https://www.paygate.co.za).

The main components are:

- Standalone Typescript/Javascript client to interface with the PayGate API, usable in any Typescript or NodeJS project
- ExpressJS middleware which can be used to easily configure endpoints for payment processing
- A utility which can help with common PayGate tasks, such as generating payload checksum easily, or extracting a friendly transaction summary message from a payment status response
- Browser script of the utility functions, allowing them to be imported via a `<script>` tag straight into HTML

These components can be used in isolation, or in combination, so you only have to pick what you need in order to help with your specific integration requirements. For example, if you are already using ExpressJS and want to easily enable endpoints that can handle payment processing, then it's likely that the only thing you need from this project is the ExpressJS middleware functions. Or perhaps you want to use the TS/JS client in a Node based project so that you don't have to deal directly with the PayGate HTTP API.

Currently this project is in development, but already quite usable. Reference documentation (currently a work in progress) can be found at https://distributhor.github.io/paygate-sdk/, and more detailed usage info will be made available in this README shortly.

## Reference Implementation

In addition to the above, there is also a reference implementation available under the `impl` folder. It consists of an ExpressJS backend that exposes endpoints via the middleware functions (which in turn uses the TS/JS API client), and a very simple frontend with which to test payments. It should demonstrate how to use these components in your own project. The reference implementation can run in your local development environment in only a few easy steps.

### Ngrok Token

In order to run the reference implementation locally, you will need to have an account with Ngrok https://ngrok.com/. A basic account is free and quick to set up. Ngrok, if you don't already know, is a service that can make your local development server available on a public URL via a secure tunnel. This is needed because PayGate needs to return to a URL that is publically available, after processing a payment. So we use Ngrok to expose the frontend app to the web.

Once you have an Ngrok authentication token, copy the file `impl/proxy/.env.sample` to `impl/proxy/.env` and replace the fake value with your authentication token. This is all that will be required to configure the tunelling environment.

### PayGate Credentials

The backend server implementation needs to know which PayGate credentials to use for testing. Copy the file `impl/server/.env.sample` to `impl/server.env`. It is already configured with the default PayGate test credentials, so no further action is needed. But if you wanted to test with different credentials, you may update them in this file.

### Running the reference implementation locally

If you have an Ngrok auth token and PayGate credentials configured, then you can simply run `yarn install` and `yarn develop` in each of the folders `impl/proxy`, `impl/server` and `impl/app`, and the proxy needs to be the first one to run. This (the fact that 3 different instance are running in 3 consoles) may be improved later to allow for a somewhat better development experience.

Once they are all up and running, navigate to http://localhost:8000 to test payments.

## API Client Usage

In progress ...

## Constructors

### constructor

\+ **new PayGateClient**(`payGateId?`: string, `payGateKey?`: string): [PayGateClient](_client_.paygateclient.md)

#### Parameters:

| Name          | Type   |
| ------------- | ------ |
| `payGateId?`  | string |
| `payGateKey?` | string |

**Returns:** [PayGateClient](_client_.paygateclient.md)

## Methods

### handlePaymentNotification

▸ **handlePaymentNotification**(`paymentStatus`: [PaymentStatus](../interfaces/_types_.paymentstatus.md)): Promise\<[SuccessIndicator](../interfaces/_types_.successindicator.md)>

_Defined in [src/client.ts:299](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/client.ts#L299)_

#### Parameters:

| Name            | Type                                                    |
| --------------- | ------------------------------------------------------- |
| `paymentStatus` | [PaymentStatus](../interfaces/_types_.paymentstatus.md) |

**Returns:** Promise\<[SuccessIndicator](../interfaces/_types_.successindicator.md)>

---

### queryPaymentStatus

▸ **queryPaymentStatus**(`paymentRef`: [PaymentReference](../interfaces/_types_.paymentreference.md)): Promise\<[PaymentStatus](../interfaces/_types_.paymentstatus.md)>

_Defined in [src/client.ts:303](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/client.ts#L303)_

#### Parameters:

| Name         | Type                                                          |
| ------------ | ------------------------------------------------------------- |
| `paymentRef` | [PaymentReference](../interfaces/_types_.paymentreference.md) |

**Returns:** Promise\<[PaymentStatus](../interfaces/_types_.paymentstatus.md)>

---

### requestPayment

▸ **requestPayment**(`paymentRequest`: [PaymentRequest](../interfaces/_types_.paymentrequest.md)): Promise\<[PaymentResponse](../interfaces/_types_.paymentresponse.md)>

_Defined in [src/client.ts:253](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/client.ts#L253)_

#### Parameters:

| Name             | Type                                                      |
| ---------------- | --------------------------------------------------------- |
| `paymentRequest` | [PaymentRequest](../interfaces/_types_.paymentrequest.md) |

**Returns:** Promise\<[PaymentResponse](../interfaces/_types_.paymentresponse.md)>

---

### generateChecksum

▸ `Static`**generateChecksum**(`data`: [UntypedObject](../interfaces/_types_.untypedobject.md), `encryptionKey`: string): string

_Defined in [src/client.ts:355](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/client.ts#L355)_

#### Parameters:

| Name            | Type                                                    |
| --------------- | ------------------------------------------------------- |
| `data`          | [UntypedObject](../interfaces/_types_.untypedobject.md) |
| `encryptionKey` | string                                                  |

**Returns:** string

---

### getInstance

▸ `Static`**getInstance**(`payGateId?`: string, `payGateKey?`: string): [PayGateClient](_client_.paygateclient.md)

_Defined in [src/client.ts:219](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/client.ts#L219)_

#### Parameters:

| Name          | Type   |
| ------------- | ------ |
| `payGateId?`  | string |
| `payGateKey?` | string |

**Returns:** [PayGateClient](_client_.paygateclient.md)

## ExpressJS Middleware Usage

In progress ...

### Interfaces

- [ExpressRequestWithPaymentResult](../interfaces/_middleware_.expressrequestwithpaymentresult.md)
- [ExpressRequestWithPaymentStatus](../interfaces/_middleware_.expressrequestwithpaymentstatus.md)
- [PayGateMiddlewareConfig](../interfaces/_middleware_.paygatemiddlewareconfig.md)
- [PayGateMiddlewarePaymentResult](../interfaces/_middleware_.paygatemiddlewarepaymentresult.md)
- [PayGateMiddlewarePaymentStatus](../interfaces/_middleware_.paygatemiddlewarepaymentstatus.md)
- [PayGateMiddlewareResult](../interfaces/_middleware_.paygatemiddlewareresult.md)

### Functions

- [paymentNotificationHandler](_middleware_.md#paymentnotificationhandler)
- [paymentRequestHandler](_middleware_.md#paymentrequesthandler)
- [paymentStatusHandler](_middleware_.md#paymentstatushandler)

## Functions

### paymentNotificationHandler

▸ **paymentNotificationHandler**(`options`: [PayGateMiddlewareConfig](../interfaces/_middleware_.paygatemiddlewareconfig.md)): (Anonymous function)

_Defined in [src/middleware.ts:79](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/middleware.ts#L79)_

#### Parameters:

| Name      | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `options` | [PayGateMiddlewareConfig](../interfaces/_middleware_.paygatemiddlewareconfig.md) |

**Returns:** (Anonymous function)

---

### paymentRequestHandler

▸ **paymentRequestHandler**(`options`: [PayGateMiddlewareConfig](../interfaces/_middleware_.paygatemiddlewareconfig.md)): (Anonymous function)

_Defined in [src/middleware.ts:36](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/middleware.ts#L36)_

#### Parameters:

| Name      | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `options` | [PayGateMiddlewareConfig](../interfaces/_middleware_.paygatemiddlewareconfig.md) |

**Returns:** (Anonymous function)

---

### paymentStatusHandler

▸ **paymentStatusHandler**(`options`: [PayGateMiddlewareConfig](../interfaces/_middleware_.paygatemiddlewareconfig.md)): (Anonymous function)

_Defined in [src/middleware.ts:117](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/middleware.ts#L117)_

#### Parameters:

| Name      | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `options` | [PayGateMiddlewareConfig](../interfaces/_middleware_.paygatemiddlewareconfig.md) |

**Returns:** (Anonymous function)

## General Utility Functions

In progress ...

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

- [generatePayGateChecksum](_util_.md#generatepaygatechecksum)
- [getTestCards](_util_.md#gettestcards)
- [getTestCardsByTransactionType](_util_.md#gettestcardsbytransactiontype)
- [getTransactionDescription](_util_.md#gettransactiondescription)
- [redirectBrowser](_util_.md#redirectbrowser)
- [removeAllNonValuedProperties](_util_.md#removeallnonvaluedproperties)
- [toCentAmount](_util_.md#tocentamount)

## Functions

### generatePayGateChecksum

▸ **generatePayGateChecksum**(`data`: [UntypedObject](../interfaces/_types_.untypedobject.md), `encryptionKey`: string): string

_Defined in [src/util.ts:26](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/util.ts#L26)_

#### Parameters:

| Name            | Type                                                    |
| --------------- | ------------------------------------------------------- |
| `data`          | [UntypedObject](../interfaces/_types_.untypedobject.md) |
| `encryptionKey` | string                                                  |

**Returns:** string

---

### getTestCards

▸ **getTestCards**(): [CreditCard](../interfaces/_types_.creditcard.md)[]

_Defined in [src/util.ts:110](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/util.ts#L110)_

**Returns:** [CreditCard](../interfaces/_types_.creditcard.md)[]

---

### getTestCardsByTransactionType

▸ **getTestCardsByTransactionType**(): [CreditCard](../interfaces/_types_.creditcard.md)[]

_Defined in [src/util.ts:129](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/util.ts#L129)_

**Returns:** [CreditCard](../interfaces/_types_.creditcard.md)[]

---

### getTransactionDescription

▸ **getTransactionDescription**(`paymentStatus`: [PaymentStatus](../interfaces/_types_.paymentstatus.md)): [TransactionDescription](../interfaces/_types_.transactiondescription.md)

_Defined in [src/util.ts:34](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/util.ts#L34)_

#### Parameters:

| Name            | Type                                                    |
| --------------- | ------------------------------------------------------- |
| `paymentStatus` | [PaymentStatus](../interfaces/_types_.paymentstatus.md) |

**Returns:** [TransactionDescription](../interfaces/_types_.transactiondescription.md)

---

### redirectBrowser

▸ **redirectBrowser**(`uri`: string, `params`: any): void

_Defined in [src/util.ts:82](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/util.ts#L82)_

#### Parameters:

| Name     | Type   |
| -------- | ------ |
| `uri`    | string |
| `params` | any    |

**Returns:** void

---

### removeAllNonValuedProperties

▸ **removeAllNonValuedProperties**(`obj`: [UntypedObject](../interfaces/_types_.untypedobject.md)): void

_Defined in [src/util.ts:14](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/util.ts#L14)_

#### Parameters:

| Name  | Type                                                    |
| ----- | ------------------------------------------------------- |
| `obj` | [UntypedObject](../interfaces/_types_.untypedobject.md) |

**Returns:** void

---

### toCentAmount

▸ **toCentAmount**(`amount`: string \| number): string

_Defined in [src/util.ts:22](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/util.ts#L22)_

#### Parameters:

| Name     | Type             |
| -------- | ---------------- |
| `amount` | string \| number |

**Returns:** string

## Types

In progress ...

### Enumerations

- [Currency](../enums/_types_.currency.md)
- [PayGateLocale](../enums/_types_.paygatelocale.md)
- [PaymentMethodCode](../enums/_types_.paymentmethodcode.md)
- [TransactionCode](../enums/_types_.transactioncode.md)

### Interfaces

- [CreditCard](../interfaces/_types_.creditcard.md)
- [ErrorObject](../interfaces/_types_.errorobject.md)
- [ErrorProperty](../interfaces/_types_.errorproperty.md)
- [HttpResponse](../interfaces/_types_.httpresponse.md)
- [PaymentReference](../interfaces/_types_.paymentreference.md)
- [PaymentRequest](../interfaces/_types_.paymentrequest.md)
- [PaymentResponse](../interfaces/_types_.paymentresponse.md)
- [PaymentStatus](../interfaces/_types_.paymentstatus.md)
- [RedirectParams](../interfaces/_types_.redirectparams.md)
- [SuccessIndicator](../interfaces/_types_.successindicator.md)
- [TransactionDescription](../interfaces/_types_.transactiondescription.md)
- [UntypedObject](../interfaces/_types_.untypedobject.md)

### Variables

- [TransactionResultCodes](_types_.md#transactionresultcodes)

### Object literals

- [CommunicationAndDataResultCodes](_types_.md#communicationanddataresultcodes)
- [CreditCardResultCodes](_types_.md#creditcardresultcodes)
- [PayGateEndpoints](_types_.md#paygateendpoints)
- [PayGateErrorCodes](_types_.md#paygateerrorcodes)
- [PayGateLocaleName](_types_.md#paygatelocalename)
- [PayGateTestCards](_types_.md#paygatetestcards)
- [PaymentMethod](_types_.md#paymentmethod)
- [TransactionStatus](_types_.md#transactionstatus)

## Variables

### TransactionResultCodes

• `Const` **TransactionResultCodes**: { 900019: string = "Invalid PayVault scope"; 900205: string = "Unexpected authentication result (phase 1)"; 900206: string = "Unexpected authentication result (phase 2)"; 900209: string = "Transaction verification failed (phase 2) (verification data altered)"; 900210: string = "Authentication already complete; transaction must be restarted (verification done more than once)"; 990001: string = "Could not insert into DB"; 990013: string = "Error processing a batch transaction"; 990022: string = "Bank not available"; 990024: string = "Duplicate transaction detected"; 990028: string = "Transaction cancelled"; 990053: string = "Error processing transaction" } & { 900001: string = "Call for approval"; 900002: string = "Card expired"; 900003: string = "Insufficient funds"; 900004: string = "Invalid card number"; 900005: string = "Bank interface timeout"; 900006: string = "Invalid card"; 900007: string = "Declined"; 900009: string = "Lost card"; 900010: string = "Invalid card length"; 900011: string = "Suspected fraud"; 900012: string = "Card reported as stolen"; 900013: string = "Restricted card"; 900014: string = "Excessive card usage"; 900015: string = "Card blacklisted"; 900017: string = "Auth done"; 900207: string = "Declined; authentication failed (incorrect verification code)"; 900210: string = "3D Secure lookup timeout"; 990020: string = "Auth declined"; 991001: string = "Invalid expiry date"; 991002: string = "Invalid amount" } = Object.assign(CommunicationAndDataResultCodes, CreditCardResultCodes)

_Defined in [src/types.ts:119](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/types.ts#L119)_

## Object literals

### CommunicationAndDataResultCodes

▪ `Const` **CommunicationAndDataResultCodes**: object

_Defined in [src/types.ts:105](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/types.ts#L105)_

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

---

### CreditCardResultCodes

▪ `Const` **CreditCardResultCodes**: object

_Defined in [src/types.ts:82](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/types.ts#L82)_

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

---

### PayGateEndpoints

▪ `Const` **PayGateEndpoints**: object

_Defined in [src/types.ts:48](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/types.ts#L48)_

#### Properties:

| Name           | Type   | Value                                                 |
| -------------- | ------ | ----------------------------------------------------- |
| `INITIATE_URI` | string | "https://secure.paygate.co.za/payweb3/initiate.trans" |
| `QUERY_URI`    | string | "https://secure.paygate.co.za/payweb3/query.trans"    |
| `REDIRECT_URI` | string | "https://secure.paygate.co.za/payweb3/process.trans"  |

---

### PayGateErrorCodes

▪ `Const` **PayGateErrorCodes**: object

_Defined in [src/types.ts:54](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/types.ts#L54)_

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

---

### PayGateLocaleName

▪ `Const` **PayGateLocaleName**: object

_Defined in [src/types.ts:173](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/types.ts#L173)_

#### Properties:

| Name | Type   | Value       |
| ---- | ------ | ----------- |
| `af` | string | "Afrikaans" |
| `en` | string | "Enblish"   |
| `sx` | string | "Sutu"      |
| `tn` | string | "Tswana"    |
| `ve` | string | "Venda"     |
| `zu` | string | "Zulu"      |

---

### PayGateTestCards

▪ `Const` **PayGateTestCards**: object

_Defined in [src/types.ts:182](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/types.ts#L182)_

#### Properties:

| Name                | Type   | Value                                                                          |
| ------------------- | ------ | ------------------------------------------------------------------------------ |
| `Approved`          | object | { MasterCard: string = "5200000000000015"; Visa: string = "4000000000000002" } |
| `Declined`          | object | { MasterCard: string = "4000000000000036"; Visa: string = "5200000000000049" } |
| `InsufficientFunds` | object | { MasterCard: string = "5200000000000023"; Visa: string = "4000000000000028" } |
| `NotProcessed`      | object | { MasterCard: string = "5200000000000064" }                                    |

---

### PaymentMethod

▪ `Const` **PaymentMethod**: object

_Defined in [src/types.ts:146](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/types.ts#L146)_

#### Properties:

| Name | Type   | Value           |
| ---- | ------ | --------------- |
| `BT` | string | "Bank Transfer" |
| `CC` | string | "Credit Card"   |
| `CV` | string | "Cash Voucher"  |
| `DC` | string | "Debit Card"    |
| `EW` | string | "E-Wallet"      |
| `PC` | string | "Pre-Paid Card" |

---

### TransactionStatus

▪ `Const` **TransactionStatus**: object

_Defined in [src/types.ts:121](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/types.ts#L121)_

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

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[ico-release]: https://img.shields.io/github/tag/distributhor/paygate-sdk.svg
[link-github-release]: https://github.com/distributhor/paygate-sdk/releases
[lgtm-alerts]: https://img.shields.io/lgtm/alerts/g/distributhor/paygate-sdk.svg?logo=lgtm&logoWidth=18
[link-lgtm-alerts]: https://lgtm.com/projects/g/distributhor/paygate-sdk/alerts/
[lgtm-code-quality]: https://img.shields.io/lgtm/grade/javascript/g/distributhor/paygate-sdk.svg?logo=lgtm&logoWidth=18
[lgtm-code-quality-link]: https://lgtm.com/projects/g/distributhor/paygate-sdk/context:javascript

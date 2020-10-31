**[Documentation](../README.md)**

> [Globals](../README.md) / "types"

# Module: "types"

## Index

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

_Defined in [src/types.ts:119](https://github.com/distributhor/paygate-sdk/blob/e12a1f9/src/types.ts#L119)_

## Object literals

### CommunicationAndDataResultCodes

▪ `Const` **CommunicationAndDataResultCodes**: object

_Defined in [src/types.ts:105](https://github.com/distributhor/paygate-sdk/blob/e12a1f9/src/types.ts#L105)_

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

_Defined in [src/types.ts:82](https://github.com/distributhor/paygate-sdk/blob/e12a1f9/src/types.ts#L82)_

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

_Defined in [src/types.ts:48](https://github.com/distributhor/paygate-sdk/blob/e12a1f9/src/types.ts#L48)_

#### Properties:

| Name           | Type   | Value                                                 |
| -------------- | ------ | ----------------------------------------------------- |
| `INITIATE_URI` | string | "https://secure.paygate.co.za/payweb3/initiate.trans" |
| `QUERY_URI`    | string | "https://secure.paygate.co.za/payweb3/query.trans"    |
| `REDIRECT_URI` | string | "https://secure.paygate.co.za/payweb3/process.trans"  |

---

### PayGateErrorCodes

▪ `Const` **PayGateErrorCodes**: object

_Defined in [src/types.ts:54](https://github.com/distributhor/paygate-sdk/blob/e12a1f9/src/types.ts#L54)_

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

_Defined in [src/types.ts:173](https://github.com/distributhor/paygate-sdk/blob/e12a1f9/src/types.ts#L173)_

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

_Defined in [src/types.ts:182](https://github.com/distributhor/paygate-sdk/blob/e12a1f9/src/types.ts#L182)_

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

_Defined in [src/types.ts:146](https://github.com/distributhor/paygate-sdk/blob/e12a1f9/src/types.ts#L146)_

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

_Defined in [src/types.ts:121](https://github.com/distributhor/paygate-sdk/blob/e12a1f9/src/types.ts#L121)_

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

**[Documentation](../README.md)**

> [Globals](../README.md) / ["client"](../modules/_client_.md) / PayGateClient

# Class: PayGateClient

## Hierarchy

- **PayGateClient**

## Index

### Constructors

- [constructor](_client_.paygateclient.md#constructor)

### Methods

- [handlePaymentNotification](_client_.paygateclient.md#handlepaymentnotification)
- [queryPaymentStatus](_client_.paygateclient.md#querypaymentstatus)
- [requestPayment](_client_.paygateclient.md#requestpayment)
- [generateChecksum](_client_.paygateclient.md#generatechecksum)
- [getInstance](_client_.paygateclient.md#getinstance)

## Constructors

### constructor

\+ **new PayGateClient**(`payGateIdOrConfig`: string \| [PayGateConfig](../interfaces/_types_.paygateconfig.md), `payGateKey?`: string): [PayGateClient](_client_.paygateclient.md)

_Defined in [src/client.ts:267](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/client.ts#L267)_

#### Parameters:

| Name                | Type                                                              |
| ------------------- | ----------------------------------------------------------------- |
| `payGateIdOrConfig` | string \| [PayGateConfig](../interfaces/_types_.paygateconfig.md) |
| `payGateKey?`       | string                                                            |

**Returns:** [PayGateClient](_client_.paygateclient.md)

## Methods

### handlePaymentNotification

▸ **handlePaymentNotification**(`paymentStatus`: [PaymentStatus](../interfaces/_types_.paymentstatus.md)): Promise\<[SuccessIndicator](../interfaces/_types_.successindicator.md)>

_Defined in [src/client.ts:388](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/client.ts#L388)_

#### Parameters:

| Name            | Type                                                    |
| --------------- | ------------------------------------------------------- |
| `paymentStatus` | [PaymentStatus](../interfaces/_types_.paymentstatus.md) |

**Returns:** Promise\<[SuccessIndicator](../interfaces/_types_.successindicator.md)>

---

### queryPaymentStatus

▸ **queryPaymentStatus**(`paymentRef`: [PaymentReference](../interfaces/_types_.paymentreference.md)): Promise\<[PaymentStatus](../interfaces/_types_.paymentstatus.md)>

_Defined in [src/client.ts:392](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/client.ts#L392)_

#### Parameters:

| Name         | Type                                                          |
| ------------ | ------------------------------------------------------------- |
| `paymentRef` | [PaymentReference](../interfaces/_types_.paymentreference.md) |

**Returns:** Promise\<[PaymentStatus](../interfaces/_types_.paymentstatus.md)>

---

### requestPayment

▸ **requestPayment**(`paymentRequest`: [PaymentRequest](../interfaces/_types_.paymentrequest.md)): Promise\<[PaymentResponse](../interfaces/_types_.paymentresponse.md)>

_Defined in [src/client.ts:327](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/client.ts#L327)_

#### Parameters:

| Name             | Type                                                      |
| ---------------- | --------------------------------------------------------- |
| `paymentRequest` | [PaymentRequest](../interfaces/_types_.paymentrequest.md) |

**Returns:** Promise\<[PaymentResponse](../interfaces/_types_.paymentresponse.md)>

---

### generateChecksum

▸ `Static`**generateChecksum**(`data`: [UntypedObject](../interfaces/_types_.untypedobject.md), `encryptionKey`: string): string

_Defined in [src/client.ts:444](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/client.ts#L444)_

#### Parameters:

| Name            | Type                                                    |
| --------------- | ------------------------------------------------------- |
| `data`          | [UntypedObject](../interfaces/_types_.untypedobject.md) |
| `encryptionKey` | string                                                  |

**Returns:** string

---

### getInstance

▸ `Static`**getInstance**(`payGateIdOrConfig?`: string \| [PayGateConfig](../interfaces/_types_.paygateconfig.md), `payGateKey?`: string): [PayGateClient](_client_.paygateclient.md)

_Defined in [src/client.ts:285](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/client.ts#L285)_

#### Parameters:

| Name                 | Type                                                              |
| -------------------- | ----------------------------------------------------------------- |
| `payGateIdOrConfig?` | string \| [PayGateConfig](../interfaces/_types_.paygateconfig.md) |
| `payGateKey?`        | string                                                            |

**Returns:** [PayGateClient](_client_.paygateclient.md)

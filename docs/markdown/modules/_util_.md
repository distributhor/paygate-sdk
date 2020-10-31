**[Documentation](../README.md)**

> [Globals](../README.md) / "util"

# Module: "util"

## Index

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

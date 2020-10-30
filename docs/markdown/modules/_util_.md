**[SDK Reference Docs](../README.md)**

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

▸ **generatePayGateChecksum**(`data`: [UntypedObject](../interfaces/_types_.untypedobject.md), `secret`: string): string

_Defined in [src/util.ts:27](https://github.com/distributhor/paygate-sdk/blob/836401c/src/util.ts#L27)_

#### Parameters:

| Name     | Type                                                    |
| -------- | ------------------------------------------------------- |
| `data`   | [UntypedObject](../interfaces/_types_.untypedobject.md) |
| `secret` | string                                                  |

**Returns:** string

---

### getTestCards

▸ **getTestCards**(): [CreditCard](../interfaces/_types_.creditcard.md)[]

_Defined in [src/util.ts:111](https://github.com/distributhor/paygate-sdk/blob/836401c/src/util.ts#L111)_

**Returns:** [CreditCard](../interfaces/_types_.creditcard.md)[]

---

### getTestCardsByTransactionType

▸ **getTestCardsByTransactionType**(): [CreditCard](../interfaces/_types_.creditcard.md)[]

_Defined in [src/util.ts:128](https://github.com/distributhor/paygate-sdk/blob/836401c/src/util.ts#L128)_

**Returns:** [CreditCard](../interfaces/_types_.creditcard.md)[]

---

### getTransactionDescription

▸ **getTransactionDescription**(`paymentStatus`: [PaymentStatus](../interfaces/_types_.paymentstatus.md)): [TransactionDescription](../interfaces/_types_.transactiondescription.md)

_Defined in [src/util.ts:35](https://github.com/distributhor/paygate-sdk/blob/836401c/src/util.ts#L35)_

#### Parameters:

| Name            | Type                                                    |
| --------------- | ------------------------------------------------------- |
| `paymentStatus` | [PaymentStatus](../interfaces/_types_.paymentstatus.md) |

**Returns:** [TransactionDescription](../interfaces/_types_.transactiondescription.md)

---

### redirectBrowser

▸ **redirectBrowser**(`uri`: string, `params`: any): void

_Defined in [src/util.ts:83](https://github.com/distributhor/paygate-sdk/blob/836401c/src/util.ts#L83)_

#### Parameters:

| Name     | Type   |
| -------- | ------ |
| `uri`    | string |
| `params` | any    |

**Returns:** void

---

### removeAllNonValuedProperties

▸ **removeAllNonValuedProperties**(`obj`: [UntypedObject](../interfaces/_types_.untypedobject.md)): void

_Defined in [src/util.ts:15](https://github.com/distributhor/paygate-sdk/blob/836401c/src/util.ts#L15)_

#### Parameters:

| Name  | Type                                                    |
| ----- | ------------------------------------------------------- |
| `obj` | [UntypedObject](../interfaces/_types_.untypedobject.md) |

**Returns:** void

---

### toCentAmount

▸ **toCentAmount**(`amount`: string \| number): string

_Defined in [src/util.ts:23](https://github.com/distributhor/paygate-sdk/blob/836401c/src/util.ts#L23)_

#### Parameters:

| Name     | Type             |
| -------- | ---------------- |
| `amount` | string \| number |

**Returns:** string

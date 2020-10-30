**[SDK Reference Docs](../README.md)**

> [Globals](../README.md) / "util"

# Module: "util"

## Index

### Functions

- [generatePayGateChecksum](_util_.md#generatepaygatechecksum)
- [getTransactionDescription](_util_.md#gettransactiondescription)
- [redirectBrowser](_util_.md#redirectbrowser)
- [removeAllNonValuedProperties](_util_.md#removeallnonvaluedproperties)
- [toCentAmount](_util_.md#tocentamount)

## Functions

### generatePayGateChecksum

▸ **generatePayGateChecksum**(`data`: [UntypedObject](../interfaces/_types_.untypedobject.md), `secret`: string): string

_Defined in [src/util.ts:25](https://github.com/distributhor/paygate-sdk/blob/66ae948/src/util.ts#L25)_

#### Parameters:

| Name     | Type                                                    |
| -------- | ------------------------------------------------------- |
| `data`   | [UntypedObject](../interfaces/_types_.untypedobject.md) |
| `secret` | string                                                  |

**Returns:** string

---

### getTransactionDescription

▸ **getTransactionDescription**(`paymentStatus`: [PaymentStatus](../interfaces/_types_.paymentstatus.md)): [TransactionDescription](../interfaces/_types_.transactiondescription.md)

_Defined in [src/util.ts:33](https://github.com/distributhor/paygate-sdk/blob/66ae948/src/util.ts#L33)_

#### Parameters:

| Name            | Type                                                    |
| --------------- | ------------------------------------------------------- |
| `paymentStatus` | [PaymentStatus](../interfaces/_types_.paymentstatus.md) |

**Returns:** [TransactionDescription](../interfaces/_types_.transactiondescription.md)

---

### redirectBrowser

▸ **redirectBrowser**(`uri`: string, `params`: any): void

_Defined in [src/util.ts:81](https://github.com/distributhor/paygate-sdk/blob/66ae948/src/util.ts#L81)_

#### Parameters:

| Name     | Type   |
| -------- | ------ |
| `uri`    | string |
| `params` | any    |

**Returns:** void

---

### removeAllNonValuedProperties

▸ **removeAllNonValuedProperties**(`obj`: [UntypedObject](../interfaces/_types_.untypedobject.md)): void

_Defined in [src/util.ts:13](https://github.com/distributhor/paygate-sdk/blob/66ae948/src/util.ts#L13)_

#### Parameters:

| Name  | Type                                                    |
| ----- | ------------------------------------------------------- |
| `obj` | [UntypedObject](../interfaces/_types_.untypedobject.md) |

**Returns:** void

---

### toCentAmount

▸ **toCentAmount**(`amount`: string \| number): string

_Defined in [src/util.ts:21](https://github.com/distributhor/paygate-sdk/blob/66ae948/src/util.ts#L21)_

#### Parameters:

| Name     | Type             |
| -------- | ---------------- |
| `amount` | string \| number |

**Returns:** string

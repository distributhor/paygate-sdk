**[Documentation](../README.md)**

> [Globals](../README.md) / "middleware"

# Module: "middleware"

## Index

### Interfaces

- [ExpressRequestWithPaymentResult](../interfaces/_middleware_.expressrequestwithpaymentresult.md)
- [ExpressRequestWithPaymentStatus](../interfaces/_middleware_.expressrequestwithpaymentstatus.md)
- [PayGateMiddlewarePaymentResult](../interfaces/_middleware_.paygatemiddlewarepaymentresult.md)
- [PayGateMiddlewarePaymentStatus](../interfaces/_middleware_.paygatemiddlewarepaymentstatus.md)
- [PayGateMiddlewareResult](../interfaces/_middleware_.paygatemiddlewareresult.md)

### Functions

- [paymentNotificationHandler](_middleware_.md#paymentnotificationhandler)
- [paymentRequestHandler](_middleware_.md#paymentrequesthandler)
- [paymentStatusHandler](_middleware_.md#paymentstatushandler)

## Functions

### paymentNotificationHandler

▸ **paymentNotificationHandler**(`options`: [PayGateConfig](../interfaces/_types_.paygateconfig.md)): (Anonymous function)

_Defined in [src/middleware.ts:58](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/middleware.ts#L58)_

#### Parameters:

| Name      | Type                                                    |
| --------- | ------------------------------------------------------- |
| `options` | [PayGateConfig](../interfaces/_types_.paygateconfig.md) |

**Returns:** (Anonymous function)

---

### paymentRequestHandler

▸ **paymentRequestHandler**(`options`: [PayGateConfig](../interfaces/_types_.paygateconfig.md)): (Anonymous function)

_Defined in [src/middleware.ts:26](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/middleware.ts#L26)_

#### Parameters:

| Name      | Type                                                    |
| --------- | ------------------------------------------------------- |
| `options` | [PayGateConfig](../interfaces/_types_.paygateconfig.md) |

**Returns:** (Anonymous function)

---

### paymentStatusHandler

▸ **paymentStatusHandler**(`options`: [PayGateConfig](../interfaces/_types_.paygateconfig.md)): (Anonymous function)

_Defined in [src/middleware.ts:96](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/middleware.ts#L96)_

#### Parameters:

| Name      | Type                                                    |
| --------- | ------------------------------------------------------- |
| `options` | [PayGateConfig](../interfaces/_types_.paygateconfig.md) |

**Returns:** (Anonymous function)

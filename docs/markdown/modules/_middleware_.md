**[Documentation](../README.md)**

> [Globals](../README.md) / "middleware"

# Module: "middleware"

## Index

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

_Defined in [src/middleware.ts:79](https://github.com/distributhor/paygate-sdk/blob/1278863/src/middleware.ts#L79)_

#### Parameters:

| Name      | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `options` | [PayGateMiddlewareConfig](../interfaces/_middleware_.paygatemiddlewareconfig.md) |

**Returns:** (Anonymous function)

---

### paymentRequestHandler

▸ **paymentRequestHandler**(`options`: [PayGateMiddlewareConfig](../interfaces/_middleware_.paygatemiddlewareconfig.md)): (Anonymous function)

_Defined in [src/middleware.ts:36](https://github.com/distributhor/paygate-sdk/blob/1278863/src/middleware.ts#L36)_

#### Parameters:

| Name      | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `options` | [PayGateMiddlewareConfig](../interfaces/_middleware_.paygatemiddlewareconfig.md) |

**Returns:** (Anonymous function)

---

### paymentStatusHandler

▸ **paymentStatusHandler**(`options`: [PayGateMiddlewareConfig](../interfaces/_middleware_.paygatemiddlewareconfig.md)): (Anonymous function)

_Defined in [src/middleware.ts:117](https://github.com/distributhor/paygate-sdk/blob/1278863/src/middleware.ts#L117)_

#### Parameters:

| Name      | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `options` | [PayGateMiddlewareConfig](../interfaces/_middleware_.paygatemiddlewareconfig.md) |

**Returns:** (Anonymous function)

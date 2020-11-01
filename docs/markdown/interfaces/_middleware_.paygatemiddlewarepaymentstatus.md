**[Documentation](../README.md)**

> [Globals](../README.md) / ["middleware"](../modules/_middleware_.md) / PayGateMiddlewarePaymentStatus

# Interface: PayGateMiddlewarePaymentStatus

## Hierarchy

- [PayGateMiddlewareResult](_middleware_.paygatemiddlewareresult.md)

  ↳ **PayGateMiddlewarePaymentStatus**

## Index

### Properties

- [badRequest](_middleware_.paygatemiddlewarepaymentstatus.md#badrequest)
- [paymentStatus](_middleware_.paygatemiddlewarepaymentstatus.md#paymentstatus)
- [serviceError](_middleware_.paygatemiddlewarepaymentstatus.md#serviceerror)

## Properties

### badRequest

• `Optional` **badRequest**: string

_Inherited from [PayGateMiddlewareResult](_middleware_.paygatemiddlewareresult.md).[badRequest](_middleware_.paygatemiddlewareresult.md#badrequest)_

_Defined in [src/middleware.ts:6](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/middleware.ts#L6)_

---

### paymentStatus

• `Optional` **paymentStatus**: [PaymentStatus](_types_.paymentstatus.md)

_Defined in [src/middleware.ts:15](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/middleware.ts#L15)_

---

### serviceError

• `Optional` **serviceError**: any

_Inherited from [PayGateMiddlewareResult](_middleware_.paygatemiddlewareresult.md).[serviceError](_middleware_.paygatemiddlewareresult.md#serviceerror)_

_Defined in [src/middleware.ts:7](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/middleware.ts#L7)_

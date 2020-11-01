**[Documentation](../README.md)**

> [Globals](../README.md) / ["middleware"](../modules/_middleware_.md) / PayGateMiddlewarePaymentResult

# Interface: PayGateMiddlewarePaymentResult

## Hierarchy

- [PayGateMiddlewareResult](_middleware_.paygatemiddlewareresult.md)

  ↳ **PayGateMiddlewarePaymentResult**

## Index

### Properties

- [badRequest](_middleware_.paygatemiddlewarepaymentresult.md#badrequest)
- [paymentResponse](_middleware_.paygatemiddlewarepaymentresult.md#paymentresponse)
- [serviceError](_middleware_.paygatemiddlewarepaymentresult.md#serviceerror)

## Properties

### badRequest

• `Optional` **badRequest**: string

_Inherited from [PayGateMiddlewareResult](_middleware_.paygatemiddlewareresult.md).[badRequest](_middleware_.paygatemiddlewareresult.md#badrequest)_

_Defined in [src/middleware.ts:6](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/middleware.ts#L6)_

---

### paymentResponse

• `Optional` **paymentResponse**: [PaymentResponse](_types_.paymentresponse.md)

_Defined in [src/middleware.ts:11](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/middleware.ts#L11)_

---

### serviceError

• `Optional` **serviceError**: any

_Inherited from [PayGateMiddlewareResult](_middleware_.paygatemiddlewareresult.md).[serviceError](_middleware_.paygatemiddlewareresult.md#serviceerror)_

_Defined in [src/middleware.ts:7](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/middleware.ts#L7)_

**[Documentation](../README.md)**

> [Globals](../README.md) / ["client"](../modules/_client_.md) / InvalidRequest

# Class: InvalidRequest

## Hierarchy

- [PayGateError](_client_.paygateerror.md)

  ↳ **InvalidRequest**

## Index

### Constructors

- [constructor](_client_.invalidrequest.md#constructor)

### Properties

- [cause](_client_.invalidrequest.md#cause)
- [httpStatus](_client_.invalidrequest.md#httpstatus)
- [message](_client_.invalidrequest.md#message)
- [name](_client_.invalidrequest.md#name)
- [stack](_client_.invalidrequest.md#stack)

## Constructors

### constructor

\+ **new InvalidRequest**(`cause`: any, `message?`: string): [InvalidRequest](_client_.invalidrequest.md)

_Overrides [PayGateError](_client_.paygateerror.md).[constructor](_client_.paygateerror.md#constructor)_

_Defined in [src/client.ts:254](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/client.ts#L254)_

#### Parameters:

| Name       | Type   |
| ---------- | ------ |
| `cause`    | any    |
| `message?` | string |

**Returns:** [InvalidRequest](_client_.invalidrequest.md)

## Properties

### cause

• `Optional` **cause**: [ErrorObject](../interfaces/_types_.errorobject.md) \| [UntypedObject](../interfaces/_types_.untypedobject.md)

_Inherited from [PayGateError](_client_.paygateerror.md).[cause](_client_.paygateerror.md#cause)_

_Defined in [src/client.ts:183](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/client.ts#L183)_

---

### httpStatus

• `Optional` **httpStatus**: number

_Inherited from [PayGateError](_client_.paygateerror.md).[httpStatus](_client_.paygateerror.md#httpstatus)_

_Defined in [src/client.ts:182](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/client.ts#L182)_

---

### message

• **message**: string

_Inherited from [PayGateError](_client_.paygateerror.md).[message](_client_.paygateerror.md#message)_

_Defined in node_modules/typescript/lib/lib.es5.d.ts:974_

---

### name

• **name**: string

_Inherited from [PayGateError](_client_.paygateerror.md).[name](_client_.paygateerror.md#name)_

_Defined in node_modules/typescript/lib/lib.es5.d.ts:973_

---

### stack

• `Optional` **stack**: string

_Inherited from [PayGateError](_client_.paygateerror.md).[stack](_client_.paygateerror.md#stack)_

_Defined in node_modules/typescript/lib/lib.es5.d.ts:975_

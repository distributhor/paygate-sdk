**[SDK Reference Docs](../README.md)**

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

_Defined in [src/client.ts:199](https://github.com/distributhor/paygate-sdk/blob/2d6e3c8/src/client.ts#L199)_

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

_Defined in [src/client.ts:128](https://github.com/distributhor/paygate-sdk/blob/2d6e3c8/src/client.ts#L128)_

---

### httpStatus

• `Optional` **httpStatus**: number

_Inherited from [PayGateError](_client_.paygateerror.md).[httpStatus](_client_.paygateerror.md#httpstatus)_

_Defined in [src/client.ts:127](https://github.com/distributhor/paygate-sdk/blob/2d6e3c8/src/client.ts#L127)_

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

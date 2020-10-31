**[Documentation](../README.md)**

> [Globals](../README.md) / ["client"](../modules/_client_.md) / PayGateError

# Class: PayGateError

## Hierarchy

- [Error](_client_.paygateerror.md#error)

  ↳ **PayGateError**

  ↳↳ [InvalidRequest](_client_.invalidrequest.md)

## Index

### Constructors

- [constructor](_client_.paygateerror.md#constructor)

### Properties

- [cause](_client_.paygateerror.md#cause)
- [httpStatus](_client_.paygateerror.md#httpstatus)
- [message](_client_.paygateerror.md#message)
- [name](_client_.paygateerror.md#name)
- [stack](_client_.paygateerror.md#stack)
- [Error](_client_.paygateerror.md#error)

## Constructors

### constructor

\+ **new PayGateError**(`cause`: any, `message?`: string): [PayGateError](_client_.paygateerror.md)

_Defined in [src/client.ts:128](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/client.ts#L128)_

#### Parameters:

| Name       | Type   |
| ---------- | ------ |
| `cause`    | any    |
| `message?` | string |

**Returns:** [PayGateError](_client_.paygateerror.md)

## Properties

### cause

• `Optional` **cause**: [ErrorObject](../interfaces/_types_.errorobject.md) \| [UntypedObject](../interfaces/_types_.untypedobject.md)

_Defined in [src/client.ts:128](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/client.ts#L128)_

---

### httpStatus

• `Optional` **httpStatus**: number

_Defined in [src/client.ts:127](https://github.com/distributhor/paygate-sdk/blob/c181cfd/src/client.ts#L127)_

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

---

### Error

▪ `Static` **Error**: ErrorConstructor

_Defined in node_modules/typescript/lib/lib.es5.d.ts:984_

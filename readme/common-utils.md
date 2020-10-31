Documentation in progress ...

```javascript
generatePayGateChecksum();
getTransactionDescription();
getTestCards();
toCentAmount();
redirectBrowser();
PayGateLocale;
PayGateEndpoints;
PayGateErrorCodes;
PaymentMethod;
TransactionCode;
TransactionStatus;
TransactionResultCodes;
PayGateTestCards;
```

### Functions

▸ **generatePayGateChecksum**(`data`: [UntypedObject](../interfaces/_types_.untypedobject.md), `encryptionKey`: string): string

**Returns:** string

▸ **getTestCards**(): [CreditCard](../interfaces/_types_.creditcard.md)[]

**Returns:** [CreditCard](../interfaces/_types_.creditcard.md)[]

▸ **getTestCardsByTransactionType**(): [CreditCard](../interfaces/_types_.creditcard.md)[]

**Returns:** [CreditCard](../interfaces/_types_.creditcard.md)[]

▸ **getTransactionDescription**(`paymentStatus`: [PaymentStatus](../interfaces/_types_.paymentstatus.md)): [TransactionDescription](../interfaces/_types_.transactiondescription.md)

**Returns:** [TransactionDescription](../interfaces/_types_.transactiondescription.md)

▸ **redirectBrowser**(`uri`: string, `params`: any): void

**Returns:** void

▸ **removeAllNonValuedProperties**(`obj`: [UntypedObject](../interfaces/_types_.untypedobject.md)): void

**Returns:** void

▸ **toCentAmount**(`amount`: string \| number): string

**Returns:** string

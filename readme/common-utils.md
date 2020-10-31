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

▸ **generatePayGateChecksum**(`data`: [UntypedObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.untypedobject.html), `encryptionKey`: string): string

▸ **getTestCards**(): [CreditCard](https://distributhor.github.io/paygate-sdk/interfaces/_types_.creditcard.html)[]

▸ **getTestCardsByTransactionType**(): [CreditCard](https://distributhor.github.io/paygate-sdk/interfaces/_types_.creditcard.html)[]

▸ **getTransactionDescription**(`paymentStatus`: [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)): [TransactionDescription](https://distributhor.github.io/paygate-sdk/interfaces/_types_.transactiondescription.html)

▸ **redirectBrowser**(`uri`: string, `params`: any): void

▸ **removeAllNonValuedProperties**(`obj`: [UntypedObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.untypedobject.html)): void

▸ **toCentAmount**(`amount`: string \| number): string

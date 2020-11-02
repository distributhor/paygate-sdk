## Common Utility Functions

Documentation in progress ...

For Typescript projects ...

```typescript
import { Util } from "paygate-sdk";
import { generatePayGateChecksum } from "paygate-sdk/lib/util";

Util.toCentAmount(123.45);
generatePayGateChecksum({ prop: "val" }, "key");
```

For a NodeJS/Javascript project ..

```javascript
const { Util } = require("paygate-sdk");
const { generatePayGateChecksum } = require("paygate-sdk/lib/util");
```

Also available for the browser ...

```html
<script src="https://unpkg.com/paygate-sdk@1.0.4/dist/paygate.js"></script>
<script>
  Paygate.Util.toCentAmount(123.45);
  Paygate.Util.redirectBrowser(redirectUrl, redirectParams);
  PayGateUtil.TransactionCode.APPROVED;
</script>
```

### Functions

▸ **toCentAmount**(`amount`: string | number): string

▸ **generatePayGateChecksum**(`data`: [UntypedObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.untypedobject.html), `encryptionKey`: string): string

▸ **getTransactionDescription**(`paymentStatus`: [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)): [TransactionDescription](https://distributhor.github.io/paygate-sdk/interfaces/_types_.transactiondescription.html)

▸ **getTestCards**(): [CreditCard](https://distributhor.github.io/paygate-sdk/interfaces/_types_.creditcard.html)[]

▸ **getTestCardsByTransactionType**(): [CreditCard](https://distributhor.github.io/paygate-sdk/interfaces/_types_.creditcard.html)[]

▸ **removeAllNonValuedProperties**(`obj`: [UntypedObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.untypedobject.html)): void

▸ **redirectBrowser**(`uri`: string, `params`: any): void

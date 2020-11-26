## Quick Start

For `Typescript` ...

```typescript
import { PayGateClient } from "paygate-sdk";
```

or alternatively, for  `NodeJS/Javascript` ...

```javascript
const { PayGateClient } = require("paygate-sdk");
```

and then you can use the client ...

```javascript
const client = new PayGateClient({
    payGateId: "id",
    payGateSecret: "secret",
    returnUrl: "http://app.ui/payment-status",
    notifyUrl: "http://backend/api/handle-payment-notification",
    autoTransactionDate: true,
    autoPaymentReference: true,
    fallbackToZA: true,
});

const paymentResponse = await client.requestPayment({
    AMOUNT: 100.00,
    EMAIL: "client@email.com"
});

console.log(paymentResponse.paymentRef);
```

More detail is covered in the sections below.

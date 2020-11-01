## API Client

In progress ..

The PayGate API client is the core component of the SDK, and what most developers will use to build a PayGate integration. It is a Typescript API, but the compiled Javascript client can also be used in a NodeJS application. The TS reference documentation can be found here: https://distributhor.github.io/paygate-sdk/index.html, but an introduction is provided below.

For Typescript projects ..

```typescript
import { PayGateClient } from "paygate-sdk";
```

For a NodeJS/Javascript project ..

```javascript
const { PayGateClient } = require("paygate-sdk");
```

### Constructor

\+ **new PayGateClient**(`payGateIdOrConfig`: string | [PayGateConfig](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html), `payGateKey?`: string): [PayGateClient](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)

The constructor expects _either_ a [PayGateConfig](<(https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html)>) object, _or_ `payGateId` and `payGateKey` as parameters. If it's a `PayGateConfig`, then it's assumed that the `payGateId` and `payGateKey` properties will be set on config, as they are required, and thus the 2nd constructor parameter is ignored. However, if the first constructor parameter is a `string`, then it's assumed that **no configuration object** is passed in, and therefore both parameters (`payGateId` and `payGateKey`) are required.

### Methods

▸ **handlePaymentNotification**(`paymentStatus`: [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)): Promise\<[SuccessIndicator](https://distributhor.github.io/paygate-sdk/interfaces/_types_.successindicator.html)>

▸ **queryPaymentStatus**(`paymentRef`: [PaymentReference](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentreference.html)): Promise\<[PaymentStatus](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)>

▸ **requestPayment**(`paymentRequest`: [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html)): Promise\<[PaymentResponse](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentresponse.html)>

▸ `Static`**generateChecksum**(`data`: [UntypedObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.untypedobject.html), `encryptionKey`: string): string

▸ `Static`**getInstance**(`payGateId?`: string, `payGateKey?`: string): [PayGateClient](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)

## API Client

Documentation in progress ..

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

The constructor expects **either** a [PayGateConfig](<(https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html)>) object **or** a `payGateId` and `payGateKey` as parameters. If it's a `PayGateConfig`, then it's assumed that the `payGateId` and `payGateKey` properties will be set on the config, as they are required. Thus, the 2nd constructor parameter is ignored. However, if the first constructor parameter is a `string`, then **it's assumed that no configuration object** is provided, and therefore both the parameters `payGateId` and `payGateKey` are required.

\+ **new PayGateClient.getInstance**(`payGateIdOrConfig`: string | [PayGateConfig](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html), `payGateKey?`: string): [PayGateClient](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)

In addition to the regular constructor, a singleton instance method is also provided, which will return the same client every time it's called. Once it has been invoked, it can subsequently be invoked with no arguments to return the same instance. If that same `payGateId` and `payGateSecret` is specified in it's arguments or config, then it will also provide the same instance as that which already exists. If, however, a different `payGateId` and `payGateSecret` is specified, then it will **replace the existing instance with a new one**, using the new values and configuration.

### Methods

▸ **handlePaymentNotification**(`paymentStatus`: [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)): Promise\<[SuccessIndicator](https://distributhor.github.io/paygate-sdk/interfaces/_types_.successindicator.html)>

▸ **queryPaymentStatus**(`paymentRef`: [PaymentReference](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentreference.html)): Promise\<[PaymentStatus](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)>

▸ **requestPayment**(`paymentRequest`: [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html)): Promise\<[PaymentResponse](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentresponse.html)>

▸ `Static`**generateChecksum**(`data`: [UntypedObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.untypedobject.html), `encryptionKey`: string): string

▸ `Static`**getInstance**(`payGateId?`: string, `payGateKey?`: string): [PayGateClient](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)

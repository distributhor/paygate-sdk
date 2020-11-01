## API Client

Documentation in progress ...

Make sure you are familiar with the [PayGate process flow](https://docs.paygate.co.za/?shell#process-flow) before continuing.

The PayGate API client is the core component of the SDK, and what most developers will use to build a PayGate integration. It is a Typescript API, but the compiled Javascript client can also be used in a NodeJS application. The TS reference documentation [is available here](https://distributhor.github.io/paygate-sdk/index.html), but an introduction is provided below.

For Typescript projects ...

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

### Methods

▸ `static` **getInstance**(`payGateIdOrConfig`: string | [PayGateConfig](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html), `payGateKey?`: string): [PayGateClient](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)

In addition to the regular constructor, a static singleton method is also provided, which will return the same client instance every time it's called. Once it has been invoked with arguments, it can subsequently be invoked with no arguments to return the same instance. If the same `payGateId` and `payGateSecret` is specified in the arguments or config of subsequent invocations, then it will also provide the same instance as that which already exists. If, however, a different `payGateId` and `payGateSecret` is specified, then it will **replace the existing instance with a new one**, using the new values and configuration.

▸ **requestPayment**(`paymentRequest`: [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html)): Promise\<[PaymentResponse](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentresponse.html)>

Will issue a payment request to PayGate. To understand what is expected from all the properties available on the `PaymentRequest`, as well as which properties are required or optional, [consult the PayGate documentation](https://docs.paygate.co.za/?shell#request). By using a [PayGateConfig](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html) with the client, some of the required properies can be turned into _optional_ ones, by virtue of the fact that they can either be assigned default values or auto generated. Have a look at the [Configuration](#configuration) section at the top for more details on how the configuration can be used.

▸ **handlePaymentNotification**(`paymentStatus`: [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)): Promise\<[SuccessIndicator](https://distributhor.github.io/paygate-sdk/interfaces/_types_.successindicator.html)>

TODO: notes on caching

▸ **queryPaymentStatus**(`paymentRef`: [PaymentReference](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentreference.html)): Promise\<[PaymentStatus](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)>

TODO: finish documenting the function

Will issue a query to PayGate for the status of a payment.

▸ `Static` **generateChecksum**(`data`: [UntypedObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.untypedobject.html), `encryptionKey`: string): string

TODO: finish documenting the function

Will generate a checksum for a given object, according to the specification required by PayGate

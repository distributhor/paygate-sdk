## API Client Usage

Documentation in progress ...

### Constructor

\+ **new PayGateClient**(`payGateId?`: string, `payGateKey?`: string): [PayGateClient](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)

### Methods

▸ **handlePaymentNotification**(`paymentStatus`: [PaymentStatus](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentstatus.html)): Promise\<[SuccessIndicator](https://distributhor.github.io/paygate-sdk/interfaces/_types_.successindicator.html)>

▸ **queryPaymentStatus**(`paymentRef`: [PaymentReference](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentreference.html)): Promise\<[PaymentStatus](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)>

▸ **requestPayment**(`paymentRequest`: [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html)): Promise\<[PaymentResponse](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentresponse.html)>

▸ `Static`**generateChecksum**(`data`: [UntypedObject](https://distributhor.github.io/paygate-sdk/interfaces/_types_.untypedobject.html), `encryptionKey`: string): string

▸ `Static`**getInstance**(`payGateId?`: string, `payGateKey?`: string): [PayGateClient](https://distributhor.github.io/paygate-sdk/classes/_client_.paygateclient.html)

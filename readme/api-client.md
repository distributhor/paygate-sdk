Documentation in progress ...

### Constructor

\+ **new PayGateClient**(`payGateId?`: string, `payGateKey?`: string): [PayGateClient](_client_.paygateclient.md)

### Methods

\+ **handlePaymentNotification**(`paymentStatus`: [PaymentStatus](../interfaces/_types_.paymentstatus.md)): Promise\<[SuccessIndicator](../interfaces/_types_.successindicator.md)>

▸ **Returns:** Promise\<[SuccessIndicator](../interfaces/_types_.successindicator.md)>

▸ **queryPaymentStatus**(`paymentRef`: [PaymentReference](../interfaces/_types_.paymentreference.md)): Promise\<[PaymentStatus](../interfaces/_types_.paymentstatus.md)>

**Returns:** Promise\<[PaymentStatus](../interfaces/_types_.paymentstatus.md)>

▸ **requestPayment**(`paymentRequest`: [PaymentRequest](../interfaces/_types_.paymentrequest.md)): Promise\<[PaymentResponse](../interfaces/_types_.paymentresponse.md)>

**Returns:** Promise\<[PaymentResponse](../interfaces/_types_.paymentresponse.md)>

▸ `Static`**generateChecksum**(`data`: [UntypedObject](../interfaces/_types_.untypedobject.md), `encryptionKey`: string): string

**Returns:** string

▸ `Static`**getInstance**(`payGateId?`: string, `payGateKey?`: string): [PayGateClient](_client_.paygateclient.md)

**Returns:** [PayGateClient](_client_.paygateclient.md)

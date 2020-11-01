## Configuration

Both the API Client as well as the ExpressJS middleware are configured via a [PayGateConfig](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html) object, described by the properties below. The `payGateId` and `payGateKey` properties are required, all the rest is optional. Where optional properties or default configuration is not specified, those values will have to be explicitly passed in with each request, for example each payment request would then have to supply the `RETURN_URL` and a unique `TRANSACTION_DATE`, as per the [PayGate Specification](https://docs.paygate.co.za/?shell#request). But if you specify a `returnUrl` on the configuration, and set `autoTransactionDate` to true, then you don't have to supply those values with the payment request, as they will be set automatically by the client or middleware.

### payGateId

• `Required`**payGateId**: string
Your PayGate account ID

### payGateKey

• `Required`**payGateKey**: string
Your PayGate secret/password

### returnUrl

• `Optional` **returnUrl**: string
A default URL that PayGate should return to after processing a payment. If you set a `RETURN_URL` with an individual payment request, then that value will take precedence over this one.

### notifyUrl

• `Optional` **notifyUrl**: string
A default URL that PayGate should post payment notifications to. If you set a `NOTIFY_URL` with an individual payment request, then that value will take precedence over this one. If no value is found on either, then PayGate will not post payment notification data back.

### autoPaymentReference

• `Optional` **autoPaymentReference**: boolean

### autoTransactionDate

• `Optional` **autoTransactionDate**: boolean

### defaultCountry

• `Optional` **defaultCountry**: [CountryCode](https://distributhor.github.io/paygate-sdk/enums/_types_.countrycode.html)

### defaultCurrency

• `Optional` **defaultCurrency**: [CurrencyCode](https://distributhor.github.io/paygate-sdk/enums/_types_.currencycode.html)

### defaultLocale

• `Optional` **defaultLocale**: [PayGateLocale](https://distributhor.github.io/paygate-sdk/enums/_types_.paygatelocale.html)

### defaultPaymentMethod

• `Optional` **defaultPaymentMethod**: [PaymentMethod](https://distributhor.github.io/paygate-sdk/enums/_types_.paymentmethod.html)

### fallbackToZA

• `Optional` **fallbackToZA**: boolean

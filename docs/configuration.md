## Configuration

Both the API Client as well as the ExpressJS middleware are configured via a [PayGateConfig](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paygateconfig.html) object, described by the properties below. The `payGateId` and `payGateKey` properties are required, all the rest is optional. Where optional properties or default configuration values are not specified, those values will **have** to be explicitly passed in with each [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html). For example, you would typically have to set the `RETURN_URL` and a unique `TRANSACTION_DATE` on the `PaymentRequest`, as per the [PayGate Specification](https://docs.paygate.co.za/?shell#request). But if you were to specify a `returnUrl` on the configuration, and set `autoTransactionDate` to true, then you don't have to supply those values with the `PaymentRequest`, as they will be set automatically by the client and middleware. _Values explicitly found on the `PaymentRequest` will always take precedence over default configuration values_.

For all of this README documentation, all fields in `CAPS`, such as those found on `PaymentRequest`, are values specified and required by PayGate. Please refer to [the PayGate specification](https://docs.paygate.co.za/?shell#request) for the details and requirements on those.

### Configuration Properties

• **payGateId**: string `Required`

Your PayGate account ID

• **payGateKey**: string `Required`

Your PayGate password/secret

• **returnUrl**: string `Optional`

A default URL that PayGate should return to after processing a payment. If you set a `RETURN_URL` with an individual [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html), then that value will take precedence over this one.

• **notifyUrl**: string `Optional`

A default URL that PayGate should post payment notifications to. If you set a `NOTIFY_URL` with an individual [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html), then that value will take precedence over this one. If no value is found on either, then PayGate will not post payment notification data back.

• **autoPaymentReference**: boolean `Optional`

A unique payment reference (ID) has to be passed in with each [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html) on the `REFERENCE` property. If you prefer to have control over that ID generation, then leave this value unset or false and set it on the `PaymentRequest`. But if you prefer to have a payment reference auto generated for you, then set this configuration value to `true`, and don't specify anything on the `REFERENCE` property of the `PaymentRequest` itself. If a value is found on the `PaymentRequest`, even with `autoPaymentReference` enabled, then the value on the payment request would take precedence over an auto generated one. Currently the unique ID being generated is a UUID4 string. An option may exist in the future to configure your own custom ID generator.

• **autoTransactionDate**: boolean `Optional`

A transaction date has to be passed in with each [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html) on the `TRANSACTION_DATE` property. If you prefer to have control over the date generation, then leave this value unset or false and set it on the `PaymentRequest`. But if you prefer to have a date auto generated for you (at the time the request is invoked), then set this configuration value to `true`, and don't specify anything on the `TRANSACTION_DATE` property of the `PaymentRequest` itself. If a value is found on the `PaymentRequest`, even with `autoTransactionDate` enabled, then the value on the payment request would take precedence over an auto generated one.

• **defaultCountry**: [CountryCode](https://distributhor.github.io/paygate-sdk/enums/_types_.countrycode.html) `Optional`

A country code has to be passed in with each [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html) on the `COUNTRY` property. If no value is set on the `PaymentRequest` and a `defaultCountry` is configured, then the default value will be used. If a `COUNTRY` value is present on the `PaymentRequest`, it will be used instead.

• **defaultCurrency**: [CurrencyCode](https://distributhor.github.io/paygate-sdk/enums/_types_.currencycode.html) `Optional`

A currency code has to be passed in with each [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html) on the `CURRENCY` property. If no value is set on the `PaymentRequest` and a `defaultCurrency` is configured, then the default value will be used. If a `CURRENCY` value is present on the `PaymentRequest`, it will be used instead.

• **defaultLocale**: [PayGateLocale](https://distributhor.github.io/paygate-sdk/enums/_types_.paygatelocale.html) `Optional`

A locale code has to be passed in with each [PaymentRequest](https://distributhor.github.io/paygate-sdk/interfaces/_types_.paymentrequest.html) on the `LOCALE` property. If no value is set on the `PaymentRequest` and a `defaultLocale` is configured, then the default value will be used. If no value is found anywhere, then an english locale will be returned. This value is only relevant for the PayGate UI, and is not used for anything related to currency and country when processing payments.

• **defaultPaymentMethod**: [PaymentMethod](https://distributhor.github.io/paygate-sdk/enums/_types_.paymentmethod.html) `Optional`

The payment method is an optional value according to the PayGate specification. However, if no value is set on the `PaymentRequest` and a `defaultPaymentMethod` is configured, then the default value will be used.

• **fallbackToZA**: boolean `Optional`

The `fallbackToZA` configuration option only affects `COUNTRY` and `CURRENCY` on the `PaymentRequest`. If it is set to `true`, and no value is expicitly set on the `PaymentRequest`, and furthermore no value is configured for `defaultCountry` and `defaultCurrency` respectively, then it will fallback to `ZAF` for country and `ZAR` for currency. If you are predominantly processing payments within South Africa, this can be a convenient option to set.

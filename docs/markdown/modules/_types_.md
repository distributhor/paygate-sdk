**[Documentation](../README.md)**

> [Globals](../README.md) / "types"

# Module: "types"

## Index

### Enumerations

- [CountryCode](../enums/_types_.countrycode.md)
- [CurrencyCode](../enums/_types_.currencycode.md)
- [PayGateLocale](../enums/_types_.paygatelocale.md)
- [PaymentMethod](../enums/_types_.paymentmethod.md)
- [TransactionCode](../enums/_types_.transactioncode.md)

### Interfaces

- [Country](../interfaces/_types_.country.md)
- [CreditCard](../interfaces/_types_.creditcard.md)
- [ErrorObject](../interfaces/_types_.errorobject.md)
- [PayGateConfig](../interfaces/_types_.paygateconfig.md)
- [PaymentReference](../interfaces/_types_.paymentreference.md)
- [PaymentRequest](../interfaces/_types_.paymentrequest.md)
- [PaymentResponse](../interfaces/_types_.paymentresponse.md)
- [PaymentStatus](../interfaces/_types_.paymentstatus.md)
- [RedirectParams](../interfaces/_types_.redirectparams.md)
- [SuccessIndicator](../interfaces/_types_.successindicator.md)
- [TransactionDescription](../interfaces/_types_.transactiondescription.md)
- [UntypedObject](../interfaces/_types_.untypedobject.md)

### Variables

- [TransactionResultCode](_types_.md#transactionresultcode)

### Object literals

- [CommunicationAndDataResultCode](_types_.md#communicationanddataresultcode)
- [CountriesByCode](_types_.md#countriesbycode)
- [CreditCardResultCode](_types_.md#creditcardresultcode)
- [PayGateEndpoint](_types_.md#paygateendpoint)
- [PayGateErrorCode](_types_.md#paygateerrorcode)
- [PayGateTestCards](_types_.md#paygatetestcards)
- [PaymentMethodName](_types_.md#paymentmethodname)
- [TransactionStatus](_types_.md#transactionstatus)

## Variables

### TransactionResultCode

• `Const` **TransactionResultCode**: { 900019: string = "Invalid PayVault scope"; 900205: string = "Unexpected authentication result (phase 1)"; 900206: string = "Unexpected authentication result (phase 2)"; 900209: string = "Transaction verification failed (phase 2) (verification data altered)"; 900210: string = "Authentication already complete; transaction must be restarted (verification done more than once)"; 990001: string = "Could not insert into DB"; 990013: string = "Error processing a batch transaction"; 990022: string = "Bank not available"; 990024: string = "Duplicate transaction detected"; 990028: string = "Transaction cancelled"; 990053: string = "Error processing transaction" } & { 900001: string = "Call for approval"; 900002: string = "Card expired"; 900003: string = "Insufficient funds"; 900004: string = "Invalid card number"; 900005: string = "Bank interface timeout"; 900006: string = "Invalid card"; 900007: string = "Declined"; 900009: string = "Lost card"; 900010: string = "Invalid card length"; 900011: string = "Suspected fraud"; 900012: string = "Card reported as stolen"; 900013: string = "Restricted card"; 900014: string = "Excessive card usage"; 900015: string = "Card blacklisted"; 900017: string = "Auth done"; 900207: string = "Declined; authentication failed (incorrect verification code)"; 900210: string = "3D Secure lookup timeout"; 990020: string = "Auth declined"; 991001: string = "Invalid expiry date"; 991002: string = "Invalid amount" } = Object.assign(CommunicationAndDataResultCode, CreditCardResultCode)

_Defined in [src/types.ts:217](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/types.ts#L217)_

## Object literals

### CommunicationAndDataResultCode

▪ `Const` **CommunicationAndDataResultCode**: object

_Defined in [src/types.ts:203](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/types.ts#L203)_

#### Properties:

| Name     | Type   | Value                                                                                               |
| -------- | ------ | --------------------------------------------------------------------------------------------------- |
| `900019` | string | "Invalid PayVault scope"                                                                            |
| `900205` | string | "Unexpected authentication result (phase 1)"                                                        |
| `900206` | string | "Unexpected authentication result (phase 2)"                                                        |
| `900209` | string | "Transaction verification failed (phase 2) (verification data altered)"                             |
| `900210` | string | "Authentication already complete; transaction must be restarted (verification done more than once)" |
| `990001` | string | "Could not insert into DB"                                                                          |
| `990013` | string | "Error processing a batch transaction"                                                              |
| `990022` | string | "Bank not available"                                                                                |
| `990024` | string | "Duplicate transaction detected"                                                                    |
| `990028` | string | "Transaction cancelled"                                                                             |
| `990053` | string | "Error processing transaction"                                                                      |

---

### CountriesByCode

▪ `Const` **CountriesByCode**: object

_Defined in [src/types.ts:511](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/types.ts#L511)_

#### Properties:

| Name  | Type   | Value                                                                                                                                                                                        |
| ----- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ABW` | object | { countryCode: string = "ABW"; currency: string = "Aruban Guilder"; currencyCode: string = "AWG"; name: string = "Aruba" }                                                                   |
| `AFG` | object | { countryCode: string = "AFG"; currency: string = "Afghani"; currencyCode: string = "AFA"; name: string = "Afghanistan" }                                                                    |
| `AGO` | object | { countryCode: string = "AGO"; currency: string = "Kwanza"; currencyCode: string = "AOA"; name: string = "Angola" }                                                                          |
| `AIA` | object | { countryCode: string = "AIA"; currency: string = "E.Caribbean Dollar"; currencyCode: string = "XCD"; name: string = "Anguilla" }                                                            |
| `ALB` | object | { countryCode: string = "ALB"; currency: string = "Lek"; currencyCode: string = "ALL"; name: string = "Albania" }                                                                            |
| `AND` | object | { countryCode: string = "AND"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Andorra" }                                                                           |
| `ANT` | object | { countryCode: string = "ANT"; currency: string = "Nether. Antillian Guilder"; currencyCode: string = "ANG"; name: string = "Netherlands Antilles" }                                         |
| `ARE` | object | { countryCode: string = "ARE"; currency: string = "U.A.E. Dirham"; currencyCode: string = "AED"; name: string = "United Arab Emirates" }                                                     |
| `ARG` | object | { countryCode: string = "ARG"; currency: string = "Argentine Peso"; currencyCode: string = "ARS"; name: string = "Argentina" }                                                               |
| `ARM` | object | { countryCode: string = "ARM"; currency: string = "Armenian Dram"; currencyCode: string = "AMD"; name: string = "Armenia" }                                                                  |
| `ASM` | object | { countryCode: string = "ASM"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "American Samoa" }                                                             |
| `ATA` | object | { countryCode: string = "ATA"; currency: string = "Norwegian Krone"; currencyCode: string = "NOK"; name: string = "Antarctica" }                                                             |
| `ATF` | object | { countryCode: string = "ATF"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "French Southern Territory" }                                                         |
| `ATG` | object | { countryCode: string = "ATG"; currency: string = "E.Caribbean Dollar"; currencyCode: string = "XCD"; name: string = "Antigua and Barbuda" }                                                 |
| `AUS` | object | { countryCode: string = "AUS"; currency: string = "Australian Dollar"; currencyCode: string = "AUD"; name: string = "Australia" }                                                            |
| `AUT` | object | { countryCode: string = "AUT"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Austria" }                                                                           |
| `AZE` | object | { countryCode: string = "AZE"; currency: string = "Azerbaijan Manat"; currencyCode: string = "AZM"; name: string = "Azerbaijan" }                                                            |
| `BDI` | object | { countryCode: string = "BDI"; currency: string = "Burundi Franc"; currencyCode: string = "BIF"; name: string = "Burundi" }                                                                  |
| `BEL` | object | { countryCode: string = "BEL"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Belgium" }                                                                           |
| `BEN` | object | { countryCode: string = "BEN"; currency: string = "CFA Franc BCEAO"; currencyCode: string = "XOF"; name: string = "Benin" }                                                                  |
| `BFA` | object | { countryCode: string = "BFA"; currency: string = "CFA Franc BCEAO"; currencyCode: string = "XOF"; name: string = "Burkina Faso" }                                                           |
| `BGD` | object | { countryCode: string = "BGD"; currency: string = "Taka"; currencyCode: string = "BDT"; name: string = "Bangladesh" }                                                                        |
| `BGR` | object | { countryCode: string = "BGR"; currency: string = "Bulgarian Lev"; currencyCode: string = "BGN"; name: string = "Bulgaria" }                                                                 |
| `BHR` | object | { countryCode: string = "BHR"; currency: string = "Bahraini Dinar"; currencyCode: string = "BHD"; name: string = "Bahrain" }                                                                 |
| `BHS` | object | { countryCode: string = "BHS"; currency: string = "Bahamian Dollar"; currencyCode: string = "BSD"; name: string = "Bahamas" }                                                                |
| `BIH` | object | { countryCode: string = "BIH"; currency: string = "Bosnian Convertible Mark"; currencyCode: string = "BAM"; name: string = "Bosnia and Herzegovina" }                                        |
| `BLR` | object | { countryCode: string = "BLR"; currency: string = "Belarussian Ruble"; currencyCode: string = "BYR"; name: string = "Belarus" }                                                              |
| `BLZ` | object | { countryCode: string = "BLZ"; currency: string = "Belize Dollar"; currencyCode: string = "BZD"; name: string = "Belize" }                                                                   |
| `BMU` | object | { countryCode: string = "BMU"; currency: string = "Bermudian Dollar"; currencyCode: string = "BMD"; name: string = "Bermuda" }                                                               |
| `BOL` | object | { countryCode: string = "BOL"; currency: string = "Boliviano"; currencyCode: string = "BOB"; name: string = "Bolivia" }                                                                      |
| `BRA` | object | { countryCode: string = "BRA"; currency: string = "Brazilian Real"; currencyCode: string = "BRL"; name: string = "Brazil" }                                                                  |
| `BRB` | object | { countryCode: string = "BRB"; currency: string = "Barbados Dollar"; currencyCode: string = "BBD"; name: string = "Barbados" }                                                               |
| `BRN` | object | { countryCode: string = "BRN"; currency: string = "Brunei Dollar"; currencyCode: string = "BND"; name: string = "Brunei Darussalam" }                                                        |
| `BTN` | object | { countryCode: string = "BTN"; currency: string = "Indian Rupee"; currencyCode: string = "INR"; name: string = "Bhutan" }                                                                    |
| `BVT` | object | { countryCode: string = "BVT"; currency: string = "Norwegian Krone"; currencyCode: string = "NOK"; name: string = "Bouvet Is." }                                                             |
| `BWA` | object | { countryCode: string = "BWA"; currency: string = "Pula"; currencyCode: string = "BWP"; name: string = "Botswana" }                                                                          |
| `CAF` | object | { countryCode: string = "CAF"; currency: string = "CFA Franc BEAC"; currencyCode: string = "XAF"; name: string = "Central African Republic" }                                                |
| `CAN` | object | { countryCode: string = "CAN"; currency: string = "Canadian Dollar"; currencyCode: string = "CAD"; name: string = "Canada" }                                                                 |
| `CCK` | object | { countryCode: string = "CCK"; currency: string = "Australian Dollar"; currencyCode: string = "AUD"; name: string = "Cocos (Keeling) Is." }                                                  |
| `CHE` | object | { countryCode: string = "CHE"; currency: string = "Swiss Franc"; currencyCode: string = "CHF"; name: string = "Switzerland" }                                                                |
| `CHL` | object | { countryCode: string = "CHL"; currency: string = "Chilean Peso"; currencyCode: string = "CLP"; name: string = "Chile" }                                                                     |
| `CHN` | object | { countryCode: string = "CHN"; currency: string = "Yuan Renminbi"; currencyCode: string = "CNY"; name: string = "China" }                                                                    |
| `CIV` | object | { countryCode: string = "CIV"; currency: string = "CFA Franc BCEAO"; currencyCode: string = "XOF"; name: string = "Côte d’Ivoire (Ivory Coast)" }                                            |
| `CMR` | object | { countryCode: string = "CMR"; currency: string = "CFA Franc BEAC"; currencyCode: string = "XAF"; name: string = "Cameroon United Republic of" }                                             |
| `COD` | object | { countryCode: string = "COD"; currency: string = "Franc Congolais (formerly New Zaire)"; currencyCode: string = "CDF"; name: string = "Democratic Republic of the Congo (formerly Zaire)" } |
| `COG` | object | { countryCode: string = "COG"; currency: string = "CFA Franc BEAC"; currencyCode: string = "XAF"; name: string = "Congo" }                                                                   |
| `COK` | object | { countryCode: string = "COK"; currency: string = "New Zealand Dollar"; currencyCode: string = "NZD"; name: string = "Cook Is." }                                                            |
| `COL` | object | { countryCode: string = "COL"; currency: string = "Colombian Peso"; currencyCode: string = "COP"; name: string = "Colombia" }                                                                |
| `COM` | object | { countryCode: string = "COM"; currency: string = "Comoro Franc"; currencyCode: string = "KMF"; name: string = "Comoros" }                                                                   |
| `CPV` | object | { countryCode: string = "CPV"; currency: string = "Cape Verde Escudo"; currencyCode: string = "CVE"; name: string = "Cape Verde Is." }                                                       |
| `CRI` | object | { countryCode: string = "CRI"; currency: string = "Costa Rican Colon"; currencyCode: string = "CRC"; name: string = "Costa Rica" }                                                           |
| `CUB` | object | { countryCode: string = "CUB"; currency: string = "Cuban Peso"; currencyCode: string = "CUP"; name: string = "Cuba" }                                                                        |
| `CXR` | object | { countryCode: string = "CXR"; currency: string = "Australian Dollar"; currencyCode: string = "AUD"; name: string = "Christmas Is." }                                                        |
| `CYM` | object | { countryCode: string = "CYM"; currency: string = "Cayman Is. Dollar"; currencyCode: string = "KYD"; name: string = "Cayman Is." }                                                           |
| `CYP` | object | { countryCode: string = "CYP"; currency: string = "Cyprus Pound"; currencyCode: string = "CYP"; name: string = "Cyprus" }                                                                    |
| `CZE` | object | { countryCode: string = "CZE"; currency: string = "Czech Koruna"; currencyCode: string = "CZK"; name: string = "Czech Republic" }                                                            |
| `DEU` | object | { countryCode: string = "DEU"; currency: string = "Deutsche Mark"; currencyCode: string = "DEM"; name: string = "Germany" }                                                                  |
| `DJI` | object | { countryCode: string = "DJI"; currency: string = "Djibouti Franc"; currencyCode: string = "DJF"; name: string = "Djibouti" }                                                                |
| `DMA` | object | { countryCode: string = "DMA"; currency: string = "E.Caribbean Dollar"; currencyCode: string = "XCD"; name: string = "Dominica" }                                                            |
| `DNK` | object | { countryCode: string = "DNK"; currency: string = "Danish Krone"; currencyCode: string = "DKK"; name: string = "Denmark" }                                                                   |
| `DOM` | object | { countryCode: string = "DOM"; currency: string = "Dominican Peso"; currencyCode: string = "DOP"; name: string = "Dominican Rep." }                                                          |
| `DZA` | object | { countryCode: string = "DZA"; currency: string = "Algerian Dinar"; currencyCode: string = "DZD"; name: string = "Algeria" }                                                                 |
| `ECU` | object | { countryCode: string = "ECU"; currency: string = "Sucre"; currencyCode: string = "ECS"; name: string = "Ecuador" }                                                                          |
| `EGY` | object | { countryCode: string = "EGY"; currency: string = "Egyptian Pound"; currencyCode: string = "EGP"; name: string = "Egypt" }                                                                   |
| `ERI` | object | { countryCode: string = "ERI"; currency: string = "Eritean Nakfa"; currencyCode: string = "ERN"; name: string = "Eritrea" }                                                                  |
| `ESH` | object | { countryCode: string = "ESH"; currency: string = "Moroccan Dirham"; currencyCode: string = "MAD"; name: string = "Western Sahara" }                                                         |
| `ESP` | object | { countryCode: string = "ESP"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Spain" }                                                                             |
| `EST` | object | { countryCode: string = "EST"; currency: string = "Kroon"; currencyCode: string = "EEK"; name: string = "Estonia" }                                                                          |
| `ETH` | object | { countryCode: string = "ETH"; currency: string = "Ethiopian Birr"; currencyCode: string = "ETB"; name: string = "Ethiopia" }                                                                |
| `FIN` | object | { countryCode: string = "FIN"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Finland" }                                                                           |
| `FJI` | object | { countryCode: string = "FJI"; currency: string = "Fiji Dollar"; currencyCode: string = "FJD"; name: string = "Fiji" }                                                                       |
| `FLK` | object | { countryCode: string = "FLK"; currency: string = "Falkland Is. Pound"; currencyCode: string = "FKP"; name: string = "Falkland Is. (Malvinas)" }                                             |
| `FRA` | object | { countryCode: string = "FRA"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "France" }                                                                            |
| `FRO` | object | { countryCode: string = "FRO"; currency: string = "Danish Krone"; currencyCode: string = "DKK"; name: string = "Faeroe Is." }                                                                |
| `FSM` | object | { countryCode: string = "FSM"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "Micronesia" }                                                                 |
| `FXX` | object | { countryCode: string = "FXX"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "France Metropolitan" }                                                               |
| `GAB` | object | { countryCode: string = "GAB"; currency: string = "CFA Franc BEAC"; currencyCode: string = "XAF"; name: string = "Gabon" }                                                                   |
| `GBR` | object | { countryCode: string = "GBR"; currency: string = "Pound Sterling"; currencyCode: string = "GBP"; name: string = "United Kingdom" }                                                          |
| `GEO` | object | { countryCode: string = "GEO"; currency: string = "Georgian Lari"; currencyCode: string = "GEL"; name: string = "Georgia" }                                                                  |
| `GHA` | object | { countryCode: string = "GHA"; currency: string = "Cedi"; currencyCode: string = "GHC"; name: string = "Ghana" }                                                                             |
| `GIB` | object | { countryCode: string = "GIB"; currency: string = "Gibraltar Pound"; currencyCode: string = "GIP"; name: string = "Gibraltar" }                                                              |
| `GIN` | object | { countryCode: string = "GIN"; currency: string = "Guinea Franc"; currencyCode: string = "GNF"; name: string = "Guinea" }                                                                    |
| `GLP` | object | { countryCode: string = "GLP"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Guadeloupe" }                                                                        |
| `GMB` | object | { countryCode: string = "GMB"; currency: string = "Dalasi"; currencyCode: string = "GMD"; name: string = "Gambia" }                                                                          |
| `GNB` | object | { countryCode: string = "GNB"; currency: string = "Guinea-Bissau Peso"; currencyCode: string = "GWP"; name: string = "Guinea—Bissau" }                                                       |
| `GNQ` | object | { countryCode: string = "GNQ"; currency: string = "CFA Franc BEAC"; currencyCode: string = "XAF"; name: string = "Equatorial Guinea" }                                                       |
| `GRC` | object | { countryCode: string = "GRC"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Greece" }                                                                            |
| `GRD` | object | { countryCode: string = "GRD"; currency: string = "E.Caribbean Dollar"; currencyCode: string = "XCD"; name: string = "Grenada" }                                                             |
| `GRL` | object | { countryCode: string = "GRL"; currency: string = "Danish Krone"; currencyCode: string = "DKK"; name: string = "Greenland" }                                                                 |
| `GTM` | object | { countryCode: string = "GTM"; currency: string = "Quetzal"; currencyCode: string = "GTQ"; name: string = "Guatemala" }                                                                      |
| `GUF` | object | { countryCode: string = "GUF"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "French Guiana" }                                                                     |
| `GUM` | object | { countryCode: string = "GUM"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "Guam" }                                                                       |
| `GUY` | object | { countryCode: string = "GUY"; currency: string = "Guyana Dollar"; currencyCode: string = "GYD"; name: string = "Guyana" }                                                                   |
| `HKG` | object | { countryCode: string = "HKG"; currency: string = "Hong Kong Dollar"; currencyCode: string = "HKD"; name: string = "Hong Kong China" }                                                       |
| `HMD` | object | { countryCode: string = "HMD"; currency: string = "Australian Dollar"; currencyCode: string = "AUD"; name: string = "Heard and McDonald Is." }                                               |
| `HND` | object | { countryCode: string = "HND"; currency: string = "Lempira"; currencyCode: string = "HNL"; name: string = "Honduras" }                                                                       |
| `HRV` | object | { countryCode: string = "HRV"; currency: string = "Croatian Kuna"; currencyCode: string = "HRK"; name: string = "Croatia" }                                                                  |
| `HTI` | object | { countryCode: string = "HTI"; currency: string = "Gourde"; currencyCode: string = "HTG"; name: string = "Haiti" }                                                                           |
| `HUN` | object | { countryCode: string = "HUN"; currency: string = "Forint"; currencyCode: string = "HUF"; name: string = "Hungary" }                                                                         |
| `IDN` | object | { countryCode: string = "IDN"; currency: string = "Rupiah"; currencyCode: string = "IDR"; name: string = "Indonesia" }                                                                       |
| `IND` | object | { countryCode: string = "IND"; currency: string = "Indian Rupee"; currencyCode: string = "INR"; name: string = "India" }                                                                     |
| `IOT` | object | { countryCode: string = "IOT"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "British Indian Ocean Territory" }                                             |
| `IRL` | object | { countryCode: string = "IRL"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Ireland Republic of" }                                                               |
| `IRN` | object | { countryCode: string = "IRN"; currency: string = "Iranian Rial"; currencyCode: string = "IRR"; name: string = "Iran Islamic Republic of" }                                                  |
| `IRQ` | object | { countryCode: string = "IRQ"; currency: string = "Iraqi Dinar"; currencyCode: string = "IQD"; name: string = "Iraq" }                                                                       |
| `ISL` | object | { countryCode: string = "ISL"; currency: string = "Iceland Krona"; currencyCode: string = "ISK"; name: string = "Iceland" }                                                                  |
| `ISR` | object | { countryCode: string = "ISR"; currency: string = "New Israeli Shekel"; currencyCode: string = "ILS"; name: string = "Israel" }                                                              |
| `ITA` | object | { countryCode: string = "ITA"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Italy" }                                                                             |
| `JAM` | object | { countryCode: string = "JAM"; currency: string = "Jamaican Dollar"; currencyCode: string = "JMD"; name: string = "Jamaica" }                                                                |
| `JOR` | object | { countryCode: string = "JOR"; currency: string = "Jordanian Dinar"; currencyCode: string = "JOD"; name: string = "Jordan" }                                                                 |
| `JPN` | object | { countryCode: string = "JPN"; currency: string = "Yen"; currencyCode: string = "JPY"; name: string = "Japan" }                                                                              |
| `KAZ` | object | { countryCode: string = "KAZ"; currency: string = "Tenge"; currencyCode: string = "KZT"; name: string = "Kazakhstan" }                                                                       |
| `KEN` | object | { countryCode: string = "KEN"; currency: string = "Kenyan Shilling"; currencyCode: string = "KES"; name: string = "Kenya" }                                                                  |
| `KGZ` | object | { countryCode: string = "KGZ"; currency: string = "Som"; currencyCode: string = "KGS"; name: string = "Kyrgyzstan" }                                                                         |
| `KHM` | object | { countryCode: string = "KHM"; currency: string = "Riel"; currencyCode: string = "KHR"; name: string = "Cambodia" }                                                                          |
| `KIR` | object | { countryCode: string = "KIR"; currency: string = "Australian Dollar"; currencyCode: string = "AUD"; name: string = "Kiribati" }                                                             |
| `KNA` | object | { countryCode: string = "KNA"; currency: string = "E.Caribbean Dollar"; currencyCode: string = "XCD"; name: string = "St. Kitts-Nevis" }                                                     |
| `KOR` | object | { countryCode: string = "KOR"; currency: string = "Won"; currencyCode: string = "KRW"; name: string = "Korea Republic of" }                                                                  |
| `KWT` | object | { countryCode: string = "KWT"; currency: string = "Kuwaiti Dinar"; currencyCode: string = "KWD"; name: string = "Kuwait" }                                                                   |
| `LAO` | object | { countryCode: string = "LAO"; currency: string = "Kip"; currencyCode: string = "LAK"; name: string = "Lao People’s Democratic Republic" }                                                   |
| `LBN` | object | { countryCode: string = "LBN"; currency: string = "Lebanese Pound"; currencyCode: string = "LBP"; name: string = "Lebanon" }                                                                 |
| `LBR` | object | { countryCode: string = "LBR"; currency: string = "Liberian Dollar"; currencyCode: string = "LRD"; name: string = "Liberia" }                                                                |
| `LBY` | object | { countryCode: string = "LBY"; currency: string = "Libyan Dinar"; currencyCode: string = "LYD"; name: string = "Libyan Arab Jamahiriya" }                                                    |
| `LCA` | object | { countryCode: string = "LCA"; currency: string = "E.Caribbean Dollar"; currencyCode: string = "XCD"; name: string = "St. Lucia" }                                                           |
| `LIE` | object | { countryCode: string = "LIE"; currency: string = "Swiss Franc"; currencyCode: string = "CHF"; name: string = "Liechtenstein" }                                                              |
| `LKA` | object | { countryCode: string = "LKA"; currency: string = "Sri Lanka Rupee"; currencyCode: string = "LKR"; name: string = "Sri Lanka" }                                                              |
| `LSO` | object | { countryCode: string = "LSO"; currency: string = "Rand"; currencyCode: string = "ZAR"; name: string = "Lesotho" }                                                                           |
| `LTU` | object | { countryCode: string = "LTU"; currency: string = "Lithuanian Litas"; currencyCode: string = "LTL"; name: string = "Lithuania" }                                                             |
| `LUX` | object | { countryCode: string = "LUX"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Luxembourg" }                                                                        |
| `LVA` | object | { countryCode: string = "LVA"; currency: string = "Latvian Lats"; currencyCode: string = "LVL"; name: string = "Latvia" }                                                                    |
| `MAC` | object | { countryCode: string = "MAC"; currency: string = "Pataca"; currencyCode: string = "MOP"; name: string = "Macau China" }                                                                     |
| `MAR` | object | { countryCode: string = "MAR"; currency: string = "Moroccan Dirham"; currencyCode: string = "MAD"; name: string = "Morocco" }                                                                |
| `MCO` | object | { countryCode: string = "MCO"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Monaco" }                                                                            |
| `MDA` | object | { countryCode: string = "MDA"; currency: string = "Moldovan Leu"; currencyCode: string = "MDL"; name: string = "Moldova Republic of" }                                                       |
| `MDG` | object | { countryCode: string = "MDG"; currency: string = "Malagasy Franc"; currencyCode: string = "MGF"; name: string = "Madagascar" }                                                              |
| `MDV` | object | { countryCode: string = "MDV"; currency: string = "Rufiyaa"; currencyCode: string = "MVR"; name: string = "Maldives" }                                                                       |
| `MEX` | object | { countryCode: string = "MEX"; currency: string = "Mexican Peso"; currencyCode: string = "MXN"; name: string = "Mexico" }                                                                    |
| `MHL` | object | { countryCode: string = "MHL"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "Marshall Islands" }                                                           |
| `MKD` | object | { countryCode: string = "MKD"; currency: string = "Denar"; currencyCode: string = "MKD"; name: string = "Macedonia the Former Yugoslav Republic of" }                                        |
| `MLI` | object | { countryCode: string = "MLI"; currency: string = "CFA Franc BCEAO"; currencyCode: string = "XOF"; name: string = "Mali" }                                                                   |
| `MLT` | object | { countryCode: string = "MLT"; currency: string = "Maltese Lira"; currencyCode: string = "MTL"; name: string = "Malta" }                                                                     |
| `MMR` | object | { countryCode: string = "MMR"; currency: string = "Kyat"; currencyCode: string = "MMK"; name: string = "Myanmar" }                                                                           |
| `MNG` | object | { countryCode: string = "MNG"; currency: string = "Tugrik"; currencyCode: string = "MNT"; name: string = "Mongolia" }                                                                        |
| `MNP` | object | { countryCode: string = "MNP"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "Northern Mariana Islands" }                                                   |
| `MOZ` | object | { countryCode: string = "MOZ"; currency: string = "Metical"; currencyCode: string = "MZM"; name: string = "Mozambique" }                                                                     |
| `MRT` | object | { countryCode: string = "MRT"; currency: string = "Ouguiya"; currencyCode: string = "MRO"; name: string = "Mauritania" }                                                                     |
| `MSR` | object | { countryCode: string = "MSR"; currency: string = "E.Caribbean Dollar"; currencyCode: string = "XCD"; name: string = "Montserrat" }                                                          |
| `MTQ` | object | { countryCode: string = "MTQ"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Martinique" }                                                                        |
| `MUS` | object | { countryCode: string = "MUS"; currency: string = "Mauritius Rupee"; currencyCode: string = "MUR"; name: string = "Mauritius" }                                                              |
| `MWI` | object | { countryCode: string = "MWI"; currency: string = "Malawi Kwacha"; currencyCode: string = "MWK"; name: string = "Malawi" }                                                                   |
| `MYS` | object | { countryCode: string = "MYS"; currency: string = "Malaysian Ringgit"; currencyCode: string = "MYR"; name: string = "Malaysia" }                                                             |
| `MYT` | object | { countryCode: string = "MYT"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Mayotte" }                                                                           |
| `NAM` | object | { countryCode: string = "NAM"; currency: string = "Namibia Dollar"; currencyCode: string = "NAD"; name: string = "Namibia" }                                                                 |
| `NCL` | object | { countryCode: string = "NCL"; currency: string = "CFP Franc"; currencyCode: string = "XPF"; name: string = "New Caledonia" }                                                                |
| `NER` | object | { countryCode: string = "NER"; currency: string = "CFA Franc BCEAO"; currencyCode: string = "XOF"; name: string = "Niger" }                                                                  |
| `NFK` | object | { countryCode: string = "NFK"; currency: string = "Australian Dollar"; currencyCode: string = "AUD"; name: string = "Norfolk Is." }                                                          |
| `NGA` | object | { countryCode: string = "NGA"; currency: string = "Naira"; currencyCode: string = "NGN"; name: string = "Nigeria" }                                                                          |
| `NIC` | object | { countryCode: string = "NIC"; currency: string = "Cordoba Oro"; currencyCode: string = "NIO"; name: string = "Nicaragua" }                                                                  |
| `NIU` | object | { countryCode: string = "NIU"; currency: string = "New Zealand Dollar"; currencyCode: string = "NZD"; name: string = "Niue" }                                                                |
| `NLD` | object | { countryCode: string = "NLD"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Netherlands" }                                                                       |
| `NOR` | object | { countryCode: string = "NOR"; currency: string = "Norwegian Krone"; currencyCode: string = "NOK"; name: string = "Norway" }                                                                 |
| `NPL` | object | { countryCode: string = "NPL"; currency: string = "Nepalese Rupee"; currencyCode: string = "NPR"; name: string = "Nepal" }                                                                   |
| `NRU` | object | { countryCode: string = "NRU"; currency: string = "Australian Dollar"; currencyCode: string = "AUD"; name: string = "Nauru" }                                                                |
| `NZL` | object | { countryCode: string = "NZL"; currency: string = "New Zealand Dollar"; currencyCode: string = "NZD"; name: string = "New Zealand" }                                                         |
| `OMN` | object | { countryCode: string = "OMN"; currency: string = "Rial Omani"; currencyCode: string = "OMR"; name: string = "Oman" }                                                                        |
| `PAK` | object | { countryCode: string = "PAK"; currency: string = "Pakistan Rupee"; currencyCode: string = "PKR"; name: string = "Pakistan" }                                                                |
| `PAN` | object | { countryCode: string = "PAN"; currency: string = "Balboa"; currencyCode: string = "PAB"; name: string = "Panama" }                                                                          |
| `PCN` | object | { countryCode: string = "PCN"; currency: string = "New Zealand Dollar"; currencyCode: string = "NZD"; name: string = "Pitcairn" }                                                            |
| `PER` | object | { countryCode: string = "PER"; currency: string = "Nuevo Sol"; currencyCode: string = "PEN"; name: string = "Peru" }                                                                         |
| `PHL` | object | { countryCode: string = "PHL"; currency: string = "Philippine Peso"; currencyCode: string = "PHP"; name: string = "Philippines" }                                                            |
| `PLW` | object | { countryCode: string = "PLW"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "Palau" }                                                                      |
| `PNG` | object | { countryCode: string = "PNG"; currency: string = "Kina"; currencyCode: string = "PGK"; name: string = "Papua New Guinea" }                                                                  |
| `POL` | object | { countryCode: string = "POL"; currency: string = "Polish New Zloty"; currencyCode: string = "PLN"; name: string = "Poland" }                                                                |
| `PRI` | object | { countryCode: string = "PRI"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "Puerto Rico" }                                                                |
| `PRK` | object | { countryCode: string = "PRK"; currency: string = "North Korean Won"; currencyCode: string = "KPW"; name: string = "Korea Democratic People’s Republic of (North Korea)" }                   |
| `PRT` | object | { countryCode: string = "PRT"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Portugal" }                                                                          |
| `PRY` | object | { countryCode: string = "PRY"; currency: string = "Guarani"; currencyCode: string = "PYG"; name: string = "Paraguay" }                                                                       |
| `PYF` | object | { countryCode: string = "PYF"; currency: string = "CFP Franc"; currencyCode: string = "XPF"; name: string = "French Polynesia" }                                                             |
| `QAT` | object | { countryCode: string = "QAT"; currency: string = "Qatari Rial"; currencyCode: string = "QAR"; name: string = "Qatar" }                                                                      |
| `REU` | object | { countryCode: string = "REU"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Reunion" }                                                                           |
| `ROM` | object | { countryCode: string = "ROM"; currency: string = "Leu"; currencyCode: string = "ROL"; name: string = "Romania" }                                                                            |
| `RUS` | object | { countryCode: string = "RUS"; currency: string = "Russian Ruble (International)"; currencyCode: string = "RUB"; name: string = "Russian Federation" }                                       |
| `RWA` | object | { countryCode: string = "RWA"; currency: string = "Rwanda Franc"; currencyCode: string = "RWF"; name: string = "Rwanda" }                                                                    |
| `SAU` | object | { countryCode: string = "SAU"; currency: string = "Saudi Riyal"; currencyCode: string = "SAR"; name: string = "Saudi Arabia" }                                                               |
| `SDN` | object | { countryCode: string = "SDN"; currency: string = "Sudanese Pound"; currencyCode: string = "SDD"; name: string = "Sudan" }                                                                   |
| `SEN` | object | { countryCode: string = "SEN"; currency: string = "CFA Franc BCEAO"; currencyCode: string = "XOF"; name: string = "Senegal" }                                                                |
| `SGP` | object | { countryCode: string = "SGP"; currency: string = "Singapore Dollar"; currencyCode: string = "SGD"; name: string = "Singapore" }                                                             |
| `SGS` | object | { countryCode: string = "SGS"; currency: string = "Pound Sterling"; currencyCode: string = "GBP"; name: string = "So. Georgia and So. Sandwich Is." }                                        |
| `SHN` | object | { countryCode: string = "SHN"; currency: string = "St. Helena Pound"; currencyCode: string = "SHP"; name: string = "St. Helena" }                                                            |
| `SJM` | object | { countryCode: string = "SJM"; currency: string = "Norwegian Krone"; currencyCode: string = "NOK"; name: string = "Svalbard and Jan Mayen Is." }                                             |
| `SLB` | object | { countryCode: string = "SLB"; currency: string = "Solomon Is. Dollar"; currencyCode: string = "SBD"; name: string = "Solomon Is." }                                                         |
| `SLE` | object | { countryCode: string = "SLE"; currency: string = "Leone"; currencyCode: string = "SLL"; name: string = "Sierra Leone" }                                                                     |
| `SLV` | object | { countryCode: string = "SLV"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "El Salvador" }                                                                |
| `SMR` | object | { countryCode: string = "SMR"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "San Marino" }                                                                        |
| `SOM` | object | { countryCode: string = "SOM"; currency: string = "Somali Shilling"; currencyCode: string = "SOS"; name: string = "Somalia" }                                                                |
| `SPM` | object | { countryCode: string = "SPM"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "St. Pierre and Miquelon" }                                                           |
| `STP` | object | { countryCode: string = "STP"; currency: string = "Dobra"; currencyCode: string = "STD"; name: string = "Sao Tome and Principe" }                                                            |
| `SUR` | object | { countryCode: string = "SUR"; currency: string = "Surinam Guilder"; currencyCode: string = "SRG"; name: string = "Suriname" }                                                               |
| `SVK` | object | { countryCode: string = "SVK"; currency: string = "Slovak Koruna"; currencyCode: string = "SKK"; name: string = "Slovakia" }                                                                 |
| `SVN` | object | { countryCode: string = "SVN"; currency: string = "Tolar"; currencyCode: string = "SIT"; name: string = "Slovenia" }                                                                         |
| `SWE` | object | { countryCode: string = "SWE"; currency: string = "Swedish Krona"; currencyCode: string = "SEK"; name: string = "Sweden" }                                                                   |
| `SWZ` | object | { countryCode: string = "SWZ"; currency: string = "Lilangeni"; currencyCode: string = "SZL"; name: string = "Swaziland" }                                                                    |
| `SYC` | object | { countryCode: string = "SYC"; currency: string = "Seychelles Rupee"; currencyCode: string = "SCR"; name: string = "Seychelles" }                                                            |
| `SYR` | object | { countryCode: string = "SYR"; currency: string = "Syrian Pound"; currencyCode: string = "SYP"; name: string = "Syrian Arab Rep." }                                                          |
| `TCA` | object | { countryCode: string = "TCA"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "Turks and Caicos Is." }                                                       |
| `TCD` | object | { countryCode: string = "TCD"; currency: string = "CFA Franc BEAC"; currencyCode: string = "XAF"; name: string = "Chad" }                                                                    |
| `TGO` | object | { countryCode: string = "TGO"; currency: string = "CFA Franc BCEAO"; currencyCode: string = "XOF"; name: string = "Togo" }                                                                   |
| `THA` | object | { countryCode: string = "THA"; currency: string = "Thailand Baht"; currencyCode: string = "THB"; name: string = "Thailand" }                                                                 |
| `TJK` | object | { countryCode: string = "TJK"; currency: string = "Somoni"; currencyCode: string = "TJS"; name: string = "Tajikistan" }                                                                      |
| `TKL` | object | { countryCode: string = "TKL"; currency: string = "New Zealand Dollar"; currencyCode: string = "NZD"; name: string = "Tokelau" }                                                             |
| `TKM` | object | { countryCode: string = "TKM"; currency: string = "Manat"; currencyCode: string = "TMM"; name: string = "Turkmenistan" }                                                                     |
| `TMP` | object | { countryCode: string = "TMP"; currency: string = "Timor Escudo"; currencyCode: string = "TPE"; name: string = "East Timor" }                                                                |
| `TON` | object | { countryCode: string = "TON"; currency: string = "Pa’anga"; currencyCode: string = "TOP"; name: string = "Tonga" }                                                                          |
| `TTO` | object | { countryCode: string = "TTO"; currency: string = "Trinidad and Tobago Dollar"; currencyCode: string = "TTD"; name: string = "Trinidad and Tobago" }                                         |
| `TUN` | object | { countryCode: string = "TUN"; currency: string = "Tunisian Dinar"; currencyCode: string = "TND"; name: string = "Tunisia" }                                                                 |
| `TUR` | object | { countryCode: string = "TUR"; currency: string = "Turkish Lira"; currencyCode: string = "TRL"; name: string = "Turkey" }                                                                    |
| `TUV` | object | { countryCode: string = "TUV"; currency: string = "Australian Dollar"; currencyCode: string = "AUD"; name: string = "Tuvalu" }                                                               |
| `TWN` | object | { countryCode: string = "TWN"; currency: string = "New Taiwan Dollar"; currencyCode: string = "TWD"; name: string = "Taiwan" }                                                               |
| `TZA` | object | { countryCode: string = "TZA"; currency: string = "Tanzanian Shilling"; currencyCode: string = "TZS"; name: string = "Tanzania United Republic of" }                                         |
| `UGA` | object | { countryCode: string = "UGA"; currency: string = "Uganda Shilling"; currencyCode: string = "UGX"; name: string = "Uganda" }                                                                 |
| `UKR` | object | { countryCode: string = "UKR"; currency: string = "Ukrainian Hryvnia"; currencyCode: string = "UAH"; name: string = "Ukraine" }                                                              |
| `UMI` | object | { countryCode: string = "UMI"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "U.S. Minor Outlying Islands" }                                                |
| `URY` | object | { countryCode: string = "URY"; currency: string = "Peso Uruguayo"; currencyCode: string = "UYU"; name: string = "Uruguay" }                                                                  |
| `USA` | object | { countryCode: string = "USA"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "United States" }                                                              |
| `UZB` | object | { countryCode: string = "UZB"; currency: string = "Uzbekistan Sum"; currencyCode: string = "UZS"; name: string = "Uzbekistan" }                                                              |
| `VAT` | object | { countryCode: string = "VAT"; currency: string = "Euro"; currencyCode: string = "EUR"; name: string = "Holy See (Vatican City State)" }                                                     |
| `VCT` | object | { countryCode: string = "VCT"; currency: string = "E.Caribbean Dollar"; currencyCode: string = "XCD"; name: string = "St. Vincent and The Grenadines" }                                      |
| `VEN` | object | { countryCode: string = "VEN"; currency: string = "Bolivar"; currencyCode: string = "VEB"; name: string = "Venezuela" }                                                                      |
| `VGB` | object | { countryCode: string = "VGB"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "British Virgin Is." }                                                         |
| `VIR` | object | { countryCode: string = "VIR"; currency: string = "U.S. Dollar"; currencyCode: string = "USD"; name: string = "U.S. Virgin Is." }                                                            |
| `VNM` | object | { countryCode: string = "VNM"; currency: string = "Dong"; currencyCode: string = "VND"; name: string = "Vietnam" }                                                                           |
| `VUT` | object | { countryCode: string = "VUT"; currency: string = "Vatu"; currencyCode: string = "VUV"; name: string = "Vanuatu" }                                                                           |
| `WLF` | object | { countryCode: string = "WLF"; currency: string = "CFP Franc"; currencyCode: string = "XPF"; name: string = "Wallis and Futuna Is." }                                                        |
| `WSM` | object | { countryCode: string = "WSM"; currency: string = "Tala"; currencyCode: string = "WST"; name: string = "Samoa" }                                                                             |
| `YEM` | object | { countryCode: string = "YEM"; currency: string = "Yemeni Rial"; currencyCode: string = "YER"; name: string = "Yemen" }                                                                      |
| `YUG` | object | { countryCode: string = "YUG"; currency: string = "Yugoslavian New Dinar"; currencyCode: string = "YUM"; name: string = "Yugoslavia" }                                                       |
| `ZAF` | object | { countryCode: string = "ZAF"; currency: string = "Rand"; currencyCode: string = "ZAR"; name: string = "South Africa" }                                                                      |
| `ZMB` | object | { countryCode: string = "ZMB"; currency: string = "Zambian Kwacha"; currencyCode: string = "ZMK"; name: string = "Zambia" }                                                                  |
| `ZWE` | object | { countryCode: string = "ZWE"; currency: string = "Zimbabwe Dollar"; currencyCode: string = "ZWD"; name: string = "Zimbabwe" }                                                               |

---

### CreditCardResultCode

▪ `Const` **CreditCardResultCode**: object

_Defined in [src/types.ts:180](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/types.ts#L180)_

#### Properties:

| Name     | Type   | Value                                                           |
| -------- | ------ | --------------------------------------------------------------- |
| `900001` | string | "Call for approval"                                             |
| `900002` | string | "Card expired"                                                  |
| `900003` | string | "Insufficient funds"                                            |
| `900004` | string | "Invalid card number"                                           |
| `900005` | string | "Bank interface timeout"                                        |
| `900006` | string | "Invalid card"                                                  |
| `900007` | string | "Declined"                                                      |
| `900009` | string | "Lost card"                                                     |
| `900010` | string | "Invalid card length"                                           |
| `900011` | string | "Suspected fraud"                                               |
| `900012` | string | "Card reported as stolen"                                       |
| `900013` | string | "Restricted card"                                               |
| `900014` | string | "Excessive card usage"                                          |
| `900015` | string | "Card blacklisted"                                              |
| `900017` | string | "Auth done"                                                     |
| `900207` | string | "Declined; authentication failed (incorrect verification code)" |
| `900210` | string | "3D Secure lookup timeout"                                      |
| `990020` | string | "Auth declined"                                                 |
| `991001` | string | "Invalid expiry date"                                           |
| `991002` | string | "Invalid amount"                                                |

---

### PayGateEndpoint

▪ `Const` **PayGateEndpoint**: object

_Defined in [src/types.ts:1](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/types.ts#L1)_

#### Properties:

| Name           | Type   | Value                                                 |
| -------------- | ------ | ----------------------------------------------------- |
| `INITIATE_URI` | string | "https://secure.paygate.co.za/payweb3/initiate.trans" |
| `QUERY_URI`    | string | "https://secure.paygate.co.za/payweb3/query.trans"    |
| `REDIRECT_URI` | string | "https://secure.paygate.co.za/payweb3/process.trans"  |

---

### PayGateErrorCode

▪ `Const` **PayGateErrorCode**: object

_Defined in [src/types.ts:152](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/types.ts#L152)_

#### Properties:

| Name                 | Type   | Value                                                                                                 |
| -------------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `CNTRY_INVALID`      | string | "Country Invalid"                                                                                     |
| `DATA_AMT_NUM`       | string | "Amount is not a number"                                                                              |
| `DATA_AMT_ZERO`      | string | "Amount value is zero"                                                                                |
| `DATA_CHK`           | string | "Checksum calculated incorrectly"                                                                     |
| `DATA_CREF`          | string | "No transaction reference"                                                                            |
| `DATA_DTTM`          | string | "Transaction date invalid"                                                                            |
| `DATA_INS`           | string | "Error creating record for transaction request"                                                       |
| `DATA_PAY_REQ_ID`    | string | "Pay request ID missing or invalid"                                                                   |
| `DATA_PM`            | string | "Pay Method or Pay Method Detail fields invalid"                                                      |
| `DATA_PW`            | string | "Not all required fields have been posted to PayWeb"                                                  |
| `DATA_REGION`        | string | "No Country or Locale"                                                                                |
| `DATA_URL`           | string | "No return url"                                                                                       |
| `INVALID_VAULT`      | string | "Vault value invalid"                                                                                 |
| `INVALID_VAULT_ID`   | string | "Vault ID invalid"                                                                                    |
| `INV_EMAIL`          | string | "Invalid Email address"                                                                               |
| `LOCALE_INVALID`     | string | "Invalid Locale"                                                                                      |
| `ND_INV_PGID`        | string | "Invalid PayGate ID"                                                                                  |
| `NOT_LIVE_PM`        | string | "No available payment methods"                                                                        |
| `NO_TRANS_DATA`      | string | "No transaction data found"                                                                           |
| `PAYVAULT_NOT_EN`    | string | "PayVault not enabled"                                                                                |
| `PGID_NOT_EN`        | string | "PayGate ID not enabled, there are no available payment methods or there are no available currencies" |
| `TXN_CAN`            | string | "Transaction has already been cancelled"                                                              |
| `TXN_CMP`            | string | "Transaction has already been completed"                                                              |
| `TXN_PRC`            | string | "Transaction is older than 30 minutes or there has been an error processing it"                       |
| `VAULT_NOT_ACCEPTED` | string | "Card types enabled on terminal not available for vaulting"                                           |

---

### PayGateTestCards

▪ `Const` **PayGateTestCards**: object

_Defined in [src/types.ts:224](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/types.ts#L224)_

#### Properties:

| Name                | Type   | Value                                                                          |
| ------------------- | ------ | ------------------------------------------------------------------------------ |
| `Approved`          | object | { MasterCard: string = "5200000000000015"; Visa: string = "4000000000000002" } |
| `Declined`          | object | { MasterCard: string = "4000000000000036"; Visa: string = "5200000000000049" } |
| `InsufficientFunds` | object | { MasterCard: string = "5200000000000023"; Visa: string = "4000000000000028" } |
| `NotProcessed`      | object | { MasterCard: string = "5200000000000064" }                                    |

---

### PaymentMethodName

▪ `Const` **PaymentMethodName**: object

_Defined in [src/types.ts:61](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/types.ts#L61)_

#### Properties:

| Name | Type   | Value           |
| ---- | ------ | --------------- |
| `BT` | string | "Bank Transfer" |
| `CC` | string | "Credit Card"   |
| `CV` | string | "Cash Voucher"  |
| `DC` | string | "Debit Card"    |
| `EW` | string | "E-Wallet"      |
| `PC` | string | "Pre-Paid Card" |

---

### TransactionStatus

▪ `Const` **TransactionStatus**: object

_Defined in [src/types.ts:127](https://github.com/distributhor/paygate-sdk/blob/f45caff/src/types.ts#L127)_

#### Properties:

| Name | Type   | Value                 |
| ---- | ------ | --------------------- |
| `0`  | string | "Not Done"            |
| `1`  | string | "Approved"            |
| `2`  | string | "Declined"            |
| `3`  | string | "Cancelled"           |
| `4`  | string | "User Cancelled"      |
| `5`  | string | "Received by PayGate" |
| `7`  | string | "Settlement Voided"   |

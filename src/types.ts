export const PayGateEndpoint = {
  INITIATE_URI: "https://secure.paygate.co.za/payweb3/initiate.trans",
  REDIRECT_URI: "https://secure.paygate.co.za/payweb3/process.trans",
  QUERY_URI: "https://secure.paygate.co.za/payweb3/query.trans",
};

// interface SuperAgentResponse {
//   headers?: any;
//   body?: any;
//   text?: string;
//   status: number;
//   error?: false | string | Error;
// }

// interface HttpResponse {
//   response: SuperAgentResponse;
// }

/** @internal */
export interface ErrorProperty {
  ERROR?: string;
  error?: string;
}

export interface ErrorObject {
  message: string;
}

export interface SuccessIndicator {
  success: boolean;
  message?: string;
}

export interface UntypedObject {
  [key: string]: any;
}

export interface PayGateConfig {
  payGateId?: string;
  payGateKey?: string;
  returnUrl?: string;
  notifyUrl?: string;
  autoTransactionDate?: boolean;
  autoPaymentReference?: boolean;
  defaultCountry?: CountryCode;
  defaultCurrency?: CurrencyCode;
  defaultLocale?: PayGateLocale;
  defaultPaymentMethod?: PaymentMethod;
  fallbackToZA?: boolean;
}

export interface PaymentRequest {
  PAYGATE_ID?: string;
  REFERENCE?: string;
  AMOUNT: string;
  CURRENCY?: CurrencyCode;
  RETURN_URL: string;
  TRANSACTION_DATE?: string;
  LOCALE?: PayGateLocale;
  COUNTRY?: CountryCode;
  EMAIL: string;
  PAY_METHOD?: PaymentMethod;
  PAY_METHOD_DETAIL?: string;
  NOTIFY_URL?: string;
  USER1?: string;
  USER2?: string;
  USER3?: string;
  VAULT?: number;
  VAULT_ID?: string;
  CHECKSUM?: string;
}

export interface PaymentResponse {
  paymentRef: PaymentReference;
  redirectParams: RedirectParams;
  redirectUri: string;
}

export interface PaymentReference {
  PAYGATE_ID?: string;
  PAY_REQUEST_ID?: string;
  REFERENCE?: string;
  CHECKSUM?: string;
}

export interface PaymentStatus {
  PAYGATE_ID: string;
  PAY_REQUEST_ID: string;
  REFERENCE: string;
  TRANSACTION_STATUS: string;
  RESULT_CODE: string;
  AUTH_CODE: string;
  CURRENCY: string;
  AMOUNT: string;
  RESULT_DESC: string;
  TRANSACTION_ID: string;
  RISK_INDICATOR?: string;
  PAY_METHOD?: string;
  PAY_METHOD_DETAIL?: string;
  USER1?: string;
  USER2?: string;
  USER3?: string;
  VAULT_ID?: string;
  PAYVAULT_DATA_1?: string;
  PAYVAULT_DATA_2?: string;
  CHECKSUM?: string;
}

export const enum PaymentMethod {
  CREDIT_CARD = "CC",
  DEBIT_CARD = "DC",
  E_WALLET = "EW",
  BANK_TRANSFER = "BT",
  CASH_VOUCHER = "CV",
  PREPAID_CARD = "PC",
}

export const PaymentMethodName = {
  CC: "Credit Card",
  DC: "Debit Card",
  EW: "E-Wallet",
  BT: "Bank Transfer",
  CV: "Cash Voucher",
  PC: "Pre-Paid Card",
  CREDIT_CARD: "Credit Card",
  DEBIT_CARD: "Debit Card",
  E_WALLET: "E-Wallet",
  BANK_TRANSFER: "Bank Transfer",
  CASH_VOUCHER: "Cash Voucher",
  PREPAID_CARD: "Pre-Paid Card",
};

export const enum TransactionStatusText {
  NOT_DONE = "Not Done",
  APPROVED = "Approved",
  DECLINED = "Declined",
  CANCELLED = "Cancelled",
  USER_CANCELLED = "User Cancelled",
  RECEIVED_BY_PAYGATE = "Received by PayGate",
  SETTLEMENT_VOIDED = "Settlement Voided",
}

export const enum TransactionCode {
  NOT_DONE = "0",
  APPROVED = "1",
  DECLINED = "2",
  CANCELLED = "3",
  USER_CANCELLED = "4",
  RECEIVED_BY_PAYGATE = "5",
  SETTLEMENT_VOIDED = "7",
}

export interface TransactionStatus {
  code?: TransactionCode;
  status?: TransactionStatusText;
  detail?: string;
}

export const PayGateErrorCode = {
  CNTRY_INVALID: "Country Invalid",
  DATA_AMT_NUM: "Amount is not a number",
  DATA_AMT_ZERO: "Amount value is zero",
  DATA_CHK: "Checksum calculated incorrectly",
  DATA_CREF: "No transaction reference",
  DATA_DTTM: "Transaction date invalid",
  DATA_INS: "Error creating record for transaction request",
  DATA_PAY_REQ_ID: "Pay request ID missing or invalid",
  DATA_PM: "Pay Method or Pay Method Detail fields invalid",
  DATA_PW: "Not all required fields have been posted to PayWeb",
  DATA_REGION: "No Country or Locale",
  DATA_URL: "No return url",
  INVALID_VAULT: "Vault value invalid",
  INVALID_VAULT_ID: "Vault ID invalid",
  INV_EMAIL: "Invalid Email address",
  LOCALE_INVALID: "Invalid Locale",
  ND_INV_PGID: "Invalid PayGate ID",
  NOT_LIVE_PM: "No available payment methods",
  NO_TRANS_DATA: "No transaction data found",
  PAYVAULT_NOT_EN: "PayVault not enabled",
  PGID_NOT_EN: "PayGate ID not enabled, there are no available payment methods or there are no available currencies",
  TXN_CAN: "Transaction has already been cancelled",
  TXN_CMP: "Transaction has already been completed",
  TXN_PRC: "Transaction is older than 30 minutes or there has been an error processing it",
  VAULT_NOT_ACCEPTED: "Card types enabled on terminal not available for vaulting",
};

export const CreditCardResultCode = {
  "900001": "Call for approval",
  "900002": "Card expired",
  "900003": "Insufficient funds",
  "900004": "Invalid card number",
  "900005": "Bank interface timeout",
  "900006": "Invalid card",
  "900007": "Declined",
  "900009": "Lost card",
  "900010": "Invalid card length",
  "900011": "Suspected fraud",
  "900012": "Card reported as stolen",
  "900013": "Restricted card",
  "900014": "Excessive card usage",
  "900015": "Card blacklisted",
  "900017": "Auth done",
  "900207": "Declined; authentication failed (incorrect verification code)",
  "990020": "Auth declined",
  "900210": "3D Secure lookup timeout",
  "991001": "Invalid expiry date",
  "991002": "Invalid amount",
};

export const CommunicationAndDataResultCode = {
  "900205": "Unexpected authentication result (phase 1)",
  "900206": "Unexpected authentication result (phase 2)",
  "990001": "Could not insert into DB",
  "990022": "Bank not available",
  "990053": "Error processing transaction",
  "900209": "Transaction verification failed (phase 2) (verification data altered)",
  "900210": "Authentication already complete; transaction must be restarted (verification done more than once)",
  "900019": "Invalid PayVault scope",
  "990013": "Error processing a batch transaction",
  "990024": "Duplicate transaction detected",
  "990028": "Transaction cancelled",
};

export const TransactionResultCode = Object.assign(CommunicationAndDataResultCode, CreditCardResultCode);

export interface RedirectParams {
  PAY_REQUEST_ID: string;
  CHECKSUM: string;
}

export const PayGateTestCards = {
  Approved: {
    MasterCard: "5200000000000015",
    Visa: "4000000000000002",
  },
  InsufficientFunds: {
    MasterCard: "5200000000000023",
    Visa: "4000000000000028",
  },
  Declined: {
    MasterCard: "4000000000000036",
    Visa: "5200000000000049",
  },
  NotProcessed: {
    MasterCard: "5200000000000064",
  },
};

export interface CreditCard {
  transactionType?: string;
  cardHolderName?: string;
  vendor?: string;
  number: string;
  expireMonth?: string;
  expireYear?: string;
  ccv?: string;
}

export const enum CurrencyCode {
  ZAR = "ZAR",
  USD = "USD",
  EUR = "EUR",
}

export const enum PayGateLocale {
  ENGLISH = "en",
}

export interface Country {
  name?: string;
  countryCode?: string;
  currencyCode?: string;
  currency?: string;
}

export enum CountryCode {
  AFG = "AFG",
  ALB = "ALB",
  DZA = "DZA",
  ASM = "ASM",
  AND = "AND",
  AGO = "AGO",
  AIA = "AIA",
  ATA = "ATA",
  ATG = "ATG",
  ARG = "ARG",
  ARM = "ARM",
  ABW = "ABW",
  AUS = "AUS",
  AUT = "AUT",
  AZE = "AZE",
  BHS = "BHS",
  BHR = "BHR",
  BGD = "BGD",
  BRB = "BRB",
  BLR = "BLR",
  BEL = "BEL",
  BLZ = "BLZ",
  BEN = "BEN",
  BMU = "BMU",
  BTN = "BTN",
  BOL = "BOL",
  BIH = "BIH",
  BWA = "BWA",
  BVT = "BVT",
  BRA = "BRA",
  IOT = "IOT",
  VGB = "VGB",
  BRN = "BRN",
  BGR = "BGR",
  BFA = "BFA",
  BDI = "BDI",
  KHM = "KHM",
  CMR = "CMR",
  CAN = "CAN",
  CPV = "CPV",
  CYM = "CYM",
  CAF = "CAF",
  TCD = "TCD",
  CHL = "CHL",
  CHN = "CHN",
  CXR = "CXR",
  CCK = "CCK",
  COL = "COL",
  COM = "COM",
  COG = "COG",
  COK = "COK",
  CRI = "CRI",
  CIV = "CIV",
  HRV = "HRV",
  CUB = "CUB",
  CYP = "CYP",
  CZE = "CZE",
  COD = "COD",
  DNK = "DNK",
  DJI = "DJI",
  DMA = "DMA",
  DOM = "DOM",
  TMP = "TMP",
  ECU = "ECU",
  EGY = "EGY",
  SLV = "SLV",
  GNQ = "GNQ",
  ERI = "ERI",
  EST = "EST",
  ETH = "ETH",
  FRO = "FRO",
  FLK = "FLK",
  FJI = "FJI",
  FIN = "FIN",
  FRA = "FRA",
  FXX = "FXX",
  GUF = "GUF",
  PYF = "PYF",
  ATF = "ATF",
  GAB = "GAB",
  GMB = "GMB",
  GEO = "GEO",
  DEU = "DEU",
  GHA = "GHA",
  GIB = "GIB",
  GRC = "GRC",
  GRL = "GRL",
  GRD = "GRD",
  GLP = "GLP",
  GUM = "GUM",
  GTM = "GTM",
  GIN = "GIN",
  GNB = "GNB",
  GUY = "GUY",
  HTI = "HTI",
  HMD = "HMD",
  VAT = "VAT",
  HND = "HND",
  HKG = "HKG",
  HUN = "HUN",
  ISL = "ISL",
  IND = "IND",
  IDN = "IDN",
  IRN = "IRN",
  IRQ = "IRQ",
  IRL = "IRL",
  ISR = "ISR",
  ITA = "ITA",
  JAM = "JAM",
  JPN = "JPN",
  JOR = "JOR",
  KAZ = "KAZ",
  KEN = "KEN",
  KIR = "KIR",
  PRK = "PRK",
  KOR = "KOR",
  KWT = "KWT",
  KGZ = "KGZ",
  LAO = "LAO",
  LVA = "LVA",
  LBN = "LBN",
  LSO = "LSO",
  LBR = "LBR",
  LBY = "LBY",
  LIE = "LIE",
  LTU = "LTU",
  LUX = "LUX",
  MAC = "MAC",
  MKD = "MKD",
  MDG = "MDG",
  MWI = "MWI",
  MYS = "MYS",
  MDV = "MDV",
  MLI = "MLI",
  MLT = "MLT",
  MHL = "MHL",
  MTQ = "MTQ",
  MRT = "MRT",
  MUS = "MUS",
  MYT = "MYT",
  MEX = "MEX",
  FSM = "FSM",
  MDA = "MDA",
  MCO = "MCO",
  MNG = "MNG",
  MSR = "MSR",
  MAR = "MAR",
  MOZ = "MOZ",
  MMR = "MMR",
  NAM = "NAM",
  NRU = "NRU",
  NPL = "NPL",
  NLD = "NLD",
  ANT = "ANT",
  NCL = "NCL",
  NZL = "NZL",
  NIC = "NIC",
  NER = "NER",
  NGA = "NGA",
  NIU = "NIU",
  NFK = "NFK",
  MNP = "MNP",
  NOR = "NOR",
  OMN = "OMN",
  PAK = "PAK",
  PLW = "PLW",
  PAN = "PAN",
  PNG = "PNG",
  PRY = "PRY",
  PER = "PER",
  PHL = "PHL",
  PCN = "PCN",
  POL = "POL",
  PRT = "PRT",
  PRI = "PRI",
  QAT = "QAT",
  REU = "REU",
  ROM = "ROM",
  RUS = "RUS",
  RWA = "RWA",
  WSM = "WSM",
  SMR = "SMR",
  STP = "STP",
  SAU = "SAU",
  SEN = "SEN",
  SYC = "SYC",
  SLE = "SLE",
  SGP = "SGP",
  SVK = "SVK",
  SVN = "SVN",
  SGS = "SGS",
  SLB = "SLB",
  SOM = "SOM",
  ZAF = "ZAF",
  ESP = "ESP",
  LKA = "LKA",
  SHN = "SHN",
  KNA = "KNA",
  LCA = "LCA",
  SPM = "SPM",
  VCT = "VCT",
  SDN = "SDN",
  SUR = "SUR",
  SJM = "SJM",
  SWZ = "SWZ",
  SWE = "SWE",
  CHE = "CHE",
  SYR = "SYR",
  TWN = "TWN",
  TJK = "TJK",
  TZA = "TZA",
  THA = "THA",
  TGO = "TGO",
  TKL = "TKL",
  TON = "TON",
  TTO = "TTO",
  TUN = "TUN",
  TUR = "TUR",
  TKM = "TKM",
  TCA = "TCA",
  TUV = "TUV",
  UMI = "UMI",
  VIR = "VIR",
  UGA = "UGA",
  UKR = "UKR",
  ARE = "ARE",
  GBR = "GBR",
  USA = "USA",
  URY = "URY",
  UZB = "UZB",
  VUT = "VUT",
  VEN = "VEN",
  VNM = "VNM",
  WLF = "WLF",
  ESH = "ESH",
  YEM = "YEM",
  YUG = "YUG",
  ZMB = "ZMB",
  ZWE = "ZWE",
}

export const CountriesByCode = {
  AFG: {
    name: "Afghanistan",
    countryCode: "AFG",
    currency: "Afghani",
    currencyCode: "AFA",
  },
  ALB: {
    name: "Albania",
    countryCode: "ALB",
    currency: "Lek",
    currencyCode: "ALL",
  },
  DZA: {
    name: "Algeria",
    countryCode: "DZA",
    currency: "Algerian Dinar",
    currencyCode: "DZD",
  },
  ASM: {
    name: "American Samoa",
    countryCode: "ASM",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  AND: {
    name: "Andorra",
    countryCode: "AND",
    currency: "Euro",
    currencyCode: "EUR",
  },
  AGO: {
    name: "Angola",
    countryCode: "AGO",
    currency: "Kwanza",
    currencyCode: "AOA",
  },
  AIA: {
    name: "Anguilla",
    countryCode: "AIA",
    currency: "E.Caribbean Dollar",
    currencyCode: "XCD",
  },
  ATA: {
    name: "Antarctica",
    countryCode: "ATA",
    currency: "Norwegian Krone",
    currencyCode: "NOK",
  },
  ATG: {
    name: "Antigua and Barbuda",
    countryCode: "ATG",
    currency: "E.Caribbean Dollar",
    currencyCode: "XCD",
  },
  ARG: {
    name: "Argentina",
    countryCode: "ARG",
    currency: "Argentine Peso",
    currencyCode: "ARS",
  },
  ARM: {
    name: "Armenia",
    countryCode: "ARM",
    currency: "Armenian Dram",
    currencyCode: "AMD",
  },
  ABW: {
    name: "Aruba",
    countryCode: "ABW",
    currency: "Aruban Guilder",
    currencyCode: "AWG",
  },
  AUS: {
    name: "Australia",
    countryCode: "AUS",
    currency: "Australian Dollar",
    currencyCode: "AUD",
  },
  AUT: {
    name: "Austria",
    countryCode: "AUT",
    currency: "Euro",
    currencyCode: "EUR",
  },
  AZE: {
    name: "Azerbaijan",
    countryCode: "AZE",
    currency: "Azerbaijan Manat",
    currencyCode: "AZM",
  },
  BHS: {
    name: "Bahamas",
    countryCode: "BHS",
    currency: "Bahamian Dollar",
    currencyCode: "BSD",
  },
  BHR: {
    name: "Bahrain",
    countryCode: "BHR",
    currency: "Bahraini Dinar",
    currencyCode: "BHD",
  },
  BGD: {
    name: "Bangladesh",
    countryCode: "BGD",
    currency: "Taka",
    currencyCode: "BDT",
  },
  BRB: {
    name: "Barbados",
    countryCode: "BRB",
    currency: "Barbados Dollar",
    currencyCode: "BBD",
  },
  BLR: {
    name: "Belarus",
    countryCode: "BLR",
    currency: "Belarussian Ruble",
    currencyCode: "BYR",
  },
  BEL: {
    name: "Belgium",
    countryCode: "BEL",
    currency: "Euro",
    currencyCode: "EUR",
  },
  BLZ: {
    name: "Belize",
    countryCode: "BLZ",
    currency: "Belize Dollar",
    currencyCode: "BZD",
  },
  BEN: {
    name: "Benin",
    countryCode: "BEN",
    currency: "CFA Franc BCEAO",
    currencyCode: "XOF",
  },
  BMU: {
    name: "Bermuda",
    countryCode: "BMU",
    currency: "Bermudian Dollar",
    currencyCode: "BMD",
  },
  BTN: {
    name: "Bhutan",
    countryCode: "BTN",
    currency: "Indian Rupee",
    currencyCode: "INR",
  },
  BOL: {
    name: "Bolivia",
    countryCode: "BOL",
    currency: "Boliviano",
    currencyCode: "BOB",
  },
  BIH: {
    name: "Bosnia and Herzegovina",
    countryCode: "BIH",
    currency: "Bosnian Convertible Mark",
    currencyCode: "BAM",
  },
  BWA: {
    name: "Botswana",
    countryCode: "BWA",
    currency: "Pula",
    currencyCode: "BWP",
  },
  BVT: {
    name: "Bouvet Is.",
    countryCode: "BVT",
    currency: "Norwegian Krone",
    currencyCode: "NOK",
  },
  BRA: {
    name: "Brazil",
    countryCode: "BRA",
    currency: "Brazilian Real",
    currencyCode: "BRL",
  },
  IOT: {
    name: "British Indian Ocean Territory",
    countryCode: "IOT",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  VGB: {
    name: "British Virgin Is.",
    countryCode: "VGB",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  BRN: {
    name: "Brunei Darussalam",
    countryCode: "BRN",
    currency: "Brunei Dollar",
    currencyCode: "BND",
  },
  BGR: {
    name: "Bulgaria",
    countryCode: "BGR",
    currency: "Bulgarian Lev",
    currencyCode: "BGN",
  },
  BFA: {
    name: "Burkina Faso",
    countryCode: "BFA",
    currency: "CFA Franc BCEAO",
    currencyCode: "XOF",
  },
  BDI: {
    name: "Burundi",
    countryCode: "BDI",
    currency: "Burundi Franc",
    currencyCode: "BIF",
  },
  KHM: {
    name: "Cambodia",
    countryCode: "KHM",
    currency: "Riel",
    currencyCode: "KHR",
  },
  CMR: {
    name: "Cameroon United Republic of",
    countryCode: "CMR",
    currency: "CFA Franc BEAC",
    currencyCode: "XAF",
  },
  CAN: {
    name: "Canada",
    countryCode: "CAN",
    currency: "Canadian Dollar",
    currencyCode: "CAD",
  },
  CPV: {
    name: "Cape Verde Is.",
    countryCode: "CPV",
    currency: "Cape Verde Escudo",
    currencyCode: "CVE",
  },
  CYM: {
    name: "Cayman Is.",
    countryCode: "CYM",
    currency: "Cayman Is. Dollar",
    currencyCode: "KYD",
  },
  CAF: {
    name: "Central African Republic",
    countryCode: "CAF",
    currency: "CFA Franc BEAC",
    currencyCode: "XAF",
  },
  TCD: {
    name: "Chad",
    countryCode: "TCD",
    currency: "CFA Franc BEAC",
    currencyCode: "XAF",
  },
  CHL: {
    name: "Chile",
    countryCode: "CHL",
    currency: "Chilean Peso",
    currencyCode: "CLP",
  },
  CHN: {
    name: "China",
    countryCode: "CHN",
    currency: "Yuan Renminbi",
    currencyCode: "CNY",
  },
  CXR: {
    name: "Christmas Is.",
    countryCode: "CXR",
    currency: "Australian Dollar",
    currencyCode: "AUD",
  },
  CCK: {
    name: "Cocos (Keeling) Is.",
    countryCode: "CCK",
    currency: "Australian Dollar",
    currencyCode: "AUD",
  },
  COL: {
    name: "Colombia",
    countryCode: "COL",
    currency: "Colombian Peso",
    currencyCode: "COP",
  },
  COM: {
    name: "Comoros",
    countryCode: "COM",
    currency: "Comoro Franc",
    currencyCode: "KMF",
  },
  COG: {
    name: "Congo",
    countryCode: "COG",
    currency: "CFA Franc BEAC",
    currencyCode: "XAF",
  },
  COK: {
    name: "Cook Is.",
    countryCode: "COK",
    currency: "New Zealand Dollar",
    currencyCode: "NZD",
  },
  CRI: {
    name: "Costa Rica",
    countryCode: "CRI",
    currency: "Costa Rican Colon",
    currencyCode: "CRC",
  },
  CIV: {
    name: "Côte d’Ivoire (Ivory Coast)",
    countryCode: "CIV",
    currency: "CFA Franc BCEAO",
    currencyCode: "XOF",
  },
  HRV: {
    name: "Croatia",
    countryCode: "HRV",
    currency: "Croatian Kuna",
    currencyCode: "HRK",
  },
  CUB: {
    name: "Cuba",
    countryCode: "CUB",
    currency: "Cuban Peso",
    currencyCode: "CUP",
  },
  CYP: {
    name: "Cyprus",
    countryCode: "CYP",
    currency: "Cyprus Pound",
    currencyCode: "CYP",
  },
  CZE: {
    name: "Czech Republic",
    countryCode: "CZE",
    currency: "Czech Koruna",
    currencyCode: "CZK",
  },
  COD: {
    name: "Democratic Republic of the Congo (formerly Zaire)",
    countryCode: "COD",
    currency: "Franc Congolais (formerly New Zaire)",
    currencyCode: "CDF",
  },
  DNK: {
    name: "Denmark",
    countryCode: "DNK",
    currency: "Danish Krone",
    currencyCode: "DKK",
  },
  DJI: {
    name: "Djibouti",
    countryCode: "DJI",
    currency: "Djibouti Franc",
    currencyCode: "DJF",
  },
  DMA: {
    name: "Dominica",
    countryCode: "DMA",
    currency: "E.Caribbean Dollar",
    currencyCode: "XCD",
  },
  DOM: {
    name: "Dominican Rep.",
    countryCode: "DOM",
    currency: "Dominican Peso",
    currencyCode: "DOP",
  },
  TMP: {
    name: "East Timor",
    countryCode: "TMP",
    currency: "Timor Escudo",
    currencyCode: "TPE",
  },
  ECU: {
    name: "Ecuador",
    countryCode: "ECU",
    currency: "Sucre",
    currencyCode: "ECS",
  },
  EGY: {
    name: "Egypt",
    countryCode: "EGY",
    currency: "Egyptian Pound",
    currencyCode: "EGP",
  },
  SLV: {
    name: "El Salvador",
    countryCode: "SLV",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  GNQ: {
    name: "Equatorial Guinea",
    countryCode: "GNQ",
    currency: "CFA Franc BEAC",
    currencyCode: "XAF",
  },
  ERI: {
    name: "Eritrea",
    countryCode: "ERI",
    currency: "Eritean Nakfa",
    currencyCode: "ERN",
  },
  EST: {
    name: "Estonia",
    countryCode: "EST",
    currency: "Kroon",
    currencyCode: "EEK",
  },
  ETH: {
    name: "Ethiopia",
    countryCode: "ETH",
    currency: "Ethiopian Birr",
    currencyCode: "ETB",
  },
  FRO: {
    name: "Faeroe Is.",
    countryCode: "FRO",
    currency: "Danish Krone",
    currencyCode: "DKK",
  },
  FLK: {
    name: "Falkland Is. (Malvinas)",
    countryCode: "FLK",
    currency: "Falkland Is. Pound",
    currencyCode: "FKP",
  },
  FJI: {
    name: "Fiji",
    countryCode: "FJI",
    currency: "Fiji Dollar",
    currencyCode: "FJD",
  },
  FIN: {
    name: "Finland",
    countryCode: "FIN",
    currency: "Euro",
    currencyCode: "EUR",
  },
  FRA: {
    name: "France",
    countryCode: "FRA",
    currency: "Euro",
    currencyCode: "EUR",
  },
  FXX: {
    name: "France Metropolitan",
    countryCode: "FXX",
    currency: "Euro",
    currencyCode: "EUR",
  },
  GUF: {
    name: "French Guiana",
    countryCode: "GUF",
    currency: "Euro",
    currencyCode: "EUR",
  },
  PYF: {
    name: "French Polynesia",
    countryCode: "PYF",
    currency: "CFP Franc",
    currencyCode: "XPF",
  },
  ATF: {
    name: "French Southern Territory",
    countryCode: "ATF",
    currency: "Euro",
    currencyCode: "EUR",
  },
  GAB: {
    name: "Gabon",
    countryCode: "GAB",
    currency: "CFA Franc BEAC",
    currencyCode: "XAF",
  },
  GMB: {
    name: "Gambia",
    countryCode: "GMB",
    currency: "Dalasi",
    currencyCode: "GMD",
  },
  GEO: {
    name: "Georgia",
    countryCode: "GEO",
    currency: "Georgian Lari",
    currencyCode: "GEL",
  },
  DEU: {
    name: "Germany",
    countryCode: "DEU",
    currency: "Deutsche Mark",
    currencyCode: "DEM",
  },
  GHA: {
    name: "Ghana",
    countryCode: "GHA",
    currency: "Cedi",
    currencyCode: "GHC",
  },
  GIB: {
    name: "Gibraltar",
    countryCode: "GIB",
    currency: "Gibraltar Pound",
    currencyCode: "GIP",
  },
  GRC: {
    name: "Greece",
    countryCode: "GRC",
    currency: "Euro",
    currencyCode: "EUR",
  },
  GRL: {
    name: "Greenland",
    countryCode: "GRL",
    currency: "Danish Krone",
    currencyCode: "DKK",
  },
  GRD: {
    name: "Grenada",
    countryCode: "GRD",
    currency: "E.Caribbean Dollar",
    currencyCode: "XCD",
  },
  GLP: {
    name: "Guadeloupe",
    countryCode: "GLP",
    currency: "Euro",
    currencyCode: "EUR",
  },
  GUM: {
    name: "Guam",
    countryCode: "GUM",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  GTM: {
    name: "Guatemala",
    countryCode: "GTM",
    currency: "Quetzal",
    currencyCode: "GTQ",
  },
  GIN: {
    name: "Guinea",
    countryCode: "GIN",
    currency: "Guinea Franc",
    currencyCode: "GNF",
  },
  GNB: {
    name: "Guinea—Bissau",
    countryCode: "GNB",
    currency: "Guinea-Bissau Peso",
    currencyCode: "GWP",
  },
  GUY: {
    name: "Guyana",
    countryCode: "GUY",
    currency: "Guyana Dollar",
    currencyCode: "GYD",
  },
  HTI: {
    name: "Haiti",
    countryCode: "HTI",
    currency: "Gourde",
    currencyCode: "HTG",
  },
  HMD: {
    name: "Heard and McDonald Is.",
    countryCode: "HMD",
    currency: "Australian Dollar",
    currencyCode: "AUD",
  },
  VAT: {
    name: "Holy See (Vatican City State)",
    countryCode: "VAT",
    currency: "Euro",
    currencyCode: "EUR",
  },
  HND: {
    name: "Honduras",
    countryCode: "HND",
    currency: "Lempira",
    currencyCode: "HNL",
  },
  HKG: {
    name: "Hong Kong China",
    countryCode: "HKG",
    currency: "Hong Kong Dollar",
    currencyCode: "HKD",
  },
  HUN: {
    name: "Hungary",
    countryCode: "HUN",
    currency: "Forint",
    currencyCode: "HUF",
  },
  ISL: {
    name: "Iceland",
    countryCode: "ISL",
    currency: "Iceland Krona",
    currencyCode: "ISK",
  },
  IND: {
    name: "India",
    countryCode: "IND",
    currency: "Indian Rupee",
    currencyCode: "INR",
  },
  IDN: {
    name: "Indonesia",
    countryCode: "IDN",
    currency: "Rupiah",
    currencyCode: "IDR",
  },
  IRN: {
    name: "Iran Islamic Republic of",
    countryCode: "IRN",
    currency: "Iranian Rial",
    currencyCode: "IRR",
  },
  IRQ: {
    name: "Iraq",
    countryCode: "IRQ",
    currency: "Iraqi Dinar",
    currencyCode: "IQD",
  },
  IRL: {
    name: "Ireland Republic of",
    countryCode: "IRL",
    currency: "Euro",
    currencyCode: "EUR",
  },
  ISR: {
    name: "Israel",
    countryCode: "ISR",
    currency: "New Israeli Shekel",
    currencyCode: "ILS",
  },
  ITA: {
    name: "Italy",
    countryCode: "ITA",
    currency: "Euro",
    currencyCode: "EUR",
  },
  JAM: {
    name: "Jamaica",
    countryCode: "JAM",
    currency: "Jamaican Dollar",
    currencyCode: "JMD",
  },
  JPN: {
    name: "Japan",
    countryCode: "JPN",
    currency: "Yen",
    currencyCode: "JPY",
  },
  JOR: {
    name: "Jordan",
    countryCode: "JOR",
    currency: "Jordanian Dinar",
    currencyCode: "JOD",
  },
  KAZ: {
    name: "Kazakhstan",
    countryCode: "KAZ",
    currency: "Tenge",
    currencyCode: "KZT",
  },
  KEN: {
    name: "Kenya",
    countryCode: "KEN",
    currency: "Kenyan Shilling",
    currencyCode: "KES",
  },
  KIR: {
    name: "Kiribati",
    countryCode: "KIR",
    currency: "Australian Dollar",
    currencyCode: "AUD",
  },
  PRK: {
    name: "Korea Democratic People’s Republic of (North Korea)",
    countryCode: "PRK",
    currency: "North Korean Won",
    currencyCode: "KPW",
  },
  KOR: {
    name: "Korea Republic of",
    countryCode: "KOR",
    currency: "Won",
    currencyCode: "KRW",
  },
  KWT: {
    name: "Kuwait",
    countryCode: "KWT",
    currency: "Kuwaiti Dinar",
    currencyCode: "KWD",
  },
  KGZ: {
    name: "Kyrgyzstan",
    countryCode: "KGZ",
    currency: "Som",
    currencyCode: "KGS",
  },
  LAO: {
    name: "Lao People’s Democratic Republic",
    countryCode: "LAO",
    currency: "Kip",
    currencyCode: "LAK",
  },
  LVA: {
    name: "Latvia",
    countryCode: "LVA",
    currency: "Latvian Lats",
    currencyCode: "LVL",
  },
  LBN: {
    name: "Lebanon",
    countryCode: "LBN",
    currency: "Lebanese Pound",
    currencyCode: "LBP",
  },
  LSO: {
    name: "Lesotho",
    countryCode: "LSO",
    currency: "Rand",
    currencyCode: "ZAR",
  },
  LBR: {
    name: "Liberia",
    countryCode: "LBR",
    currency: "Liberian Dollar",
    currencyCode: "LRD",
  },
  LBY: {
    name: "Libyan Arab Jamahiriya",
    countryCode: "LBY",
    currency: "Libyan Dinar",
    currencyCode: "LYD",
  },
  LIE: {
    name: "Liechtenstein",
    countryCode: "LIE",
    currency: "Swiss Franc",
    currencyCode: "CHF",
  },
  LTU: {
    name: "Lithuania",
    countryCode: "LTU",
    currency: "Lithuanian Litas",
    currencyCode: "LTL",
  },
  LUX: {
    name: "Luxembourg",
    countryCode: "LUX",
    currency: "Euro",
    currencyCode: "EUR",
  },
  MAC: {
    name: "Macau China",
    countryCode: "MAC",
    currency: "Pataca",
    currencyCode: "MOP",
  },
  MKD: {
    name: "Macedonia the Former Yugoslav Republic of",
    countryCode: "MKD",
    currency: "Denar",
    currencyCode: "MKD",
  },
  MDG: {
    name: "Madagascar",
    countryCode: "MDG",
    currency: "Malagasy Franc",
    currencyCode: "MGF",
  },
  MWI: {
    name: "Malawi",
    countryCode: "MWI",
    currency: "Malawi Kwacha",
    currencyCode: "MWK",
  },
  MYS: {
    name: "Malaysia",
    countryCode: "MYS",
    currency: "Malaysian Ringgit",
    currencyCode: "MYR",
  },
  MDV: {
    name: "Maldives",
    countryCode: "MDV",
    currency: "Rufiyaa",
    currencyCode: "MVR",
  },
  MLI: {
    name: "Mali",
    countryCode: "MLI",
    currency: "CFA Franc BCEAO",
    currencyCode: "XOF",
  },
  MLT: {
    name: "Malta",
    countryCode: "MLT",
    currency: "Maltese Lira",
    currencyCode: "MTL",
  },
  MHL: {
    name: "Marshall Islands",
    countryCode: "MHL",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  MTQ: {
    name: "Martinique",
    countryCode: "MTQ",
    currency: "Euro",
    currencyCode: "EUR",
  },
  MRT: {
    name: "Mauritania",
    countryCode: "MRT",
    currency: "Ouguiya",
    currencyCode: "MRO",
  },
  MUS: {
    name: "Mauritius",
    countryCode: "MUS",
    currency: "Mauritius Rupee",
    currencyCode: "MUR",
  },
  MYT: {
    name: "Mayotte",
    countryCode: "MYT",
    currency: "Euro",
    currencyCode: "EUR",
  },
  MEX: {
    name: "Mexico",
    countryCode: "MEX",
    currency: "Mexican Peso",
    currencyCode: "MXN",
  },
  FSM: {
    name: "Micronesia",
    countryCode: "FSM",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  MDA: {
    name: "Moldova Republic of",
    countryCode: "MDA",
    currency: "Moldovan Leu",
    currencyCode: "MDL",
  },
  MCO: {
    name: "Monaco",
    countryCode: "MCO",
    currency: "Euro",
    currencyCode: "EUR",
  },
  MNG: {
    name: "Mongolia",
    countryCode: "MNG",
    currency: "Tugrik",
    currencyCode: "MNT",
  },
  MSR: {
    name: "Montserrat",
    countryCode: "MSR",
    currency: "E.Caribbean Dollar",
    currencyCode: "XCD",
  },
  MAR: {
    name: "Morocco",
    countryCode: "MAR",
    currency: "Moroccan Dirham",
    currencyCode: "MAD",
  },
  MOZ: {
    name: "Mozambique",
    countryCode: "MOZ",
    currency: "Metical",
    currencyCode: "MZM",
  },
  MMR: {
    name: "Myanmar",
    countryCode: "MMR",
    currency: "Kyat",
    currencyCode: "MMK",
  },
  NAM: {
    name: "Namibia",
    countryCode: "NAM",
    currency: "Namibia Dollar",
    currencyCode: "NAD",
  },
  NRU: {
    name: "Nauru",
    countryCode: "NRU",
    currency: "Australian Dollar",
    currencyCode: "AUD",
  },
  NPL: {
    name: "Nepal",
    countryCode: "NPL",
    currency: "Nepalese Rupee",
    currencyCode: "NPR",
  },
  NLD: {
    name: "Netherlands",
    countryCode: "NLD",
    currency: "Euro",
    currencyCode: "EUR",
  },
  ANT: {
    name: "Netherlands Antilles",
    countryCode: "ANT",
    currency: "Nether. Antillian Guilder",
    currencyCode: "ANG",
  },
  NCL: {
    name: "New Caledonia",
    countryCode: "NCL",
    currency: "CFP Franc",
    currencyCode: "XPF",
  },
  NZL: {
    name: "New Zealand",
    countryCode: "NZL",
    currency: "New Zealand Dollar",
    currencyCode: "NZD",
  },
  NIC: {
    name: "Nicaragua",
    countryCode: "NIC",
    currency: "Cordoba Oro",
    currencyCode: "NIO",
  },
  NER: {
    name: "Niger",
    countryCode: "NER",
    currency: "CFA Franc BCEAO",
    currencyCode: "XOF",
  },
  NGA: {
    name: "Nigeria",
    countryCode: "NGA",
    currency: "Naira",
    currencyCode: "NGN",
  },
  NIU: {
    name: "Niue",
    countryCode: "NIU",
    currency: "New Zealand Dollar",
    currencyCode: "NZD",
  },
  NFK: {
    name: "Norfolk Is.",
    countryCode: "NFK",
    currency: "Australian Dollar",
    currencyCode: "AUD",
  },
  MNP: {
    name: "Northern Mariana Islands",
    countryCode: "MNP",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  NOR: {
    name: "Norway",
    countryCode: "NOR",
    currency: "Norwegian Krone",
    currencyCode: "NOK",
  },
  OMN: {
    name: "Oman",
    countryCode: "OMN",
    currency: "Rial Omani",
    currencyCode: "OMR",
  },
  PAK: {
    name: "Pakistan",
    countryCode: "PAK",
    currency: "Pakistan Rupee",
    currencyCode: "PKR",
  },
  PLW: {
    name: "Palau",
    countryCode: "PLW",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  PAN: {
    name: "Panama",
    countryCode: "PAN",
    currency: "Balboa",
    currencyCode: "PAB",
  },
  PNG: {
    name: "Papua New Guinea",
    countryCode: "PNG",
    currency: "Kina",
    currencyCode: "PGK",
  },
  PRY: {
    name: "Paraguay",
    countryCode: "PRY",
    currency: "Guarani",
    currencyCode: "PYG",
  },
  PER: {
    name: "Peru",
    countryCode: "PER",
    currency: "Nuevo Sol",
    currencyCode: "PEN",
  },
  PHL: {
    name: "Philippines",
    countryCode: "PHL",
    currency: "Philippine Peso",
    currencyCode: "PHP",
  },
  PCN: {
    name: "Pitcairn",
    countryCode: "PCN",
    currency: "New Zealand Dollar",
    currencyCode: "NZD",
  },
  POL: {
    name: "Poland",
    countryCode: "POL",
    currency: "Polish New Zloty",
    currencyCode: "PLN",
  },
  PRT: {
    name: "Portugal",
    countryCode: "PRT",
    currency: "Euro",
    currencyCode: "EUR",
  },
  PRI: {
    name: "Puerto Rico",
    countryCode: "PRI",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  QAT: {
    name: "Qatar",
    countryCode: "QAT",
    currency: "Qatari Rial",
    currencyCode: "QAR",
  },
  REU: {
    name: "Reunion",
    countryCode: "REU",
    currency: "Euro",
    currencyCode: "EUR",
  },
  ROM: {
    name: "Romania",
    countryCode: "ROM",
    currency: "Leu",
    currencyCode: "ROL",
  },
  RUS: {
    name: "Russian Federation",
    countryCode: "RUS",
    currency: "Russian Ruble (International)",
    currencyCode: "RUB",
  },
  RWA: {
    name: "Rwanda",
    countryCode: "RWA",
    currency: "Rwanda Franc",
    currencyCode: "RWF",
  },
  WSM: {
    name: "Samoa",
    countryCode: "WSM",
    currency: "Tala",
    currencyCode: "WST",
  },
  SMR: {
    name: "San Marino",
    countryCode: "SMR",
    currency: "Euro",
    currencyCode: "EUR",
  },
  STP: {
    name: "Sao Tome and Principe",
    countryCode: "STP",
    currency: "Dobra",
    currencyCode: "STD",
  },
  SAU: {
    name: "Saudi Arabia",
    countryCode: "SAU",
    currency: "Saudi Riyal",
    currencyCode: "SAR",
  },
  SEN: {
    name: "Senegal",
    countryCode: "SEN",
    currency: "CFA Franc BCEAO",
    currencyCode: "XOF",
  },
  SYC: {
    name: "Seychelles",
    countryCode: "SYC",
    currency: "Seychelles Rupee",
    currencyCode: "SCR",
  },
  SLE: {
    name: "Sierra Leone",
    countryCode: "SLE",
    currency: "Leone",
    currencyCode: "SLL",
  },
  SGP: {
    name: "Singapore",
    countryCode: "SGP",
    currency: "Singapore Dollar",
    currencyCode: "SGD",
  },
  SVK: {
    name: "Slovakia",
    countryCode: "SVK",
    currency: "Slovak Koruna",
    currencyCode: "SKK",
  },
  SVN: {
    name: "Slovenia",
    countryCode: "SVN",
    currency: "Tolar",
    currencyCode: "SIT",
  },
  SGS: {
    name: "So. Georgia and So. Sandwich Is.",
    countryCode: "SGS",
    currency: "Pound Sterling",
    currencyCode: "GBP",
  },
  SLB: {
    name: "Solomon Is.",
    countryCode: "SLB",
    currency: "Solomon Is. Dollar",
    currencyCode: "SBD",
  },
  SOM: {
    name: "Somalia",
    countryCode: "SOM",
    currency: "Somali Shilling",
    currencyCode: "SOS",
  },
  ZAF: {
    name: "South Africa",
    countryCode: "ZAF",
    currency: "Rand",
    currencyCode: "ZAR",
  },
  ESP: {
    name: "Spain",
    countryCode: "ESP",
    currency: "Euro",
    currencyCode: "EUR",
  },
  LKA: {
    name: "Sri Lanka",
    countryCode: "LKA",
    currency: "Sri Lanka Rupee",
    currencyCode: "LKR",
  },
  SHN: {
    name: "St. Helena",
    countryCode: "SHN",
    currency: "St. Helena Pound",
    currencyCode: "SHP",
  },
  KNA: {
    name: "St. Kitts-Nevis",
    countryCode: "KNA",
    currency: "E.Caribbean Dollar",
    currencyCode: "XCD",
  },
  LCA: {
    name: "St. Lucia",
    countryCode: "LCA",
    currency: "E.Caribbean Dollar",
    currencyCode: "XCD",
  },
  SPM: {
    name: "St. Pierre and Miquelon",
    countryCode: "SPM",
    currency: "Euro",
    currencyCode: "EUR",
  },
  VCT: {
    name: "St. Vincent and The Grenadines",
    countryCode: "VCT",
    currency: "E.Caribbean Dollar",
    currencyCode: "XCD",
  },
  SDN: {
    name: "Sudan",
    countryCode: "SDN",
    currency: "Sudanese Pound",
    currencyCode: "SDD",
  },
  SUR: {
    name: "Suriname",
    countryCode: "SUR",
    currency: "Surinam Guilder",
    currencyCode: "SRG",
  },
  SJM: {
    name: "Svalbard and Jan Mayen Is.",
    countryCode: "SJM",
    currency: "Norwegian Krone",
    currencyCode: "NOK",
  },
  SWZ: {
    name: "Swaziland",
    countryCode: "SWZ",
    currency: "Lilangeni",
    currencyCode: "SZL",
  },
  SWE: {
    name: "Sweden",
    countryCode: "SWE",
    currency: "Swedish Krona",
    currencyCode: "SEK",
  },
  CHE: {
    name: "Switzerland",
    countryCode: "CHE",
    currency: "Swiss Franc",
    currencyCode: "CHF",
  },
  SYR: {
    name: "Syrian Arab Rep.",
    countryCode: "SYR",
    currency: "Syrian Pound",
    currencyCode: "SYP",
  },
  TWN: {
    name: "Taiwan",
    countryCode: "TWN",
    currency: "New Taiwan Dollar",
    currencyCode: "TWD",
  },
  TJK: {
    name: "Tajikistan",
    countryCode: "TJK",
    currency: "Somoni",
    currencyCode: "TJS",
  },
  TZA: {
    name: "Tanzania United Republic of",
    countryCode: "TZA",
    currency: "Tanzanian Shilling",
    currencyCode: "TZS",
  },
  THA: {
    name: "Thailand",
    countryCode: "THA",
    currency: "Thailand Baht",
    currencyCode: "THB",
  },
  TGO: {
    name: "Togo",
    countryCode: "TGO",
    currency: "CFA Franc BCEAO",
    currencyCode: "XOF",
  },
  TKL: {
    name: "Tokelau",
    countryCode: "TKL",
    currency: "New Zealand Dollar",
    currencyCode: "NZD",
  },
  TON: {
    name: "Tonga",
    countryCode: "TON",
    currency: "Pa’anga",
    currencyCode: "TOP",
  },
  TTO: {
    name: "Trinidad and Tobago",
    countryCode: "TTO",
    currency: "Trinidad and Tobago Dollar",
    currencyCode: "TTD",
  },
  TUN: {
    name: "Tunisia",
    countryCode: "TUN",
    currency: "Tunisian Dinar",
    currencyCode: "TND",
  },
  TUR: {
    name: "Turkey",
    countryCode: "TUR",
    currency: "Turkish Lira",
    currencyCode: "TRL",
  },
  TKM: {
    name: "Turkmenistan",
    countryCode: "TKM",
    currency: "Manat",
    currencyCode: "TMM",
  },
  TCA: {
    name: "Turks and Caicos Is.",
    countryCode: "TCA",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  TUV: {
    name: "Tuvalu",
    countryCode: "TUV",
    currency: "Australian Dollar",
    currencyCode: "AUD",
  },
  UMI: {
    name: "U.S. Minor Outlying Islands",
    countryCode: "UMI",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  VIR: {
    name: "U.S. Virgin Is.",
    countryCode: "VIR",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  UGA: {
    name: "Uganda",
    countryCode: "UGA",
    currency: "Uganda Shilling",
    currencyCode: "UGX",
  },
  UKR: {
    name: "Ukraine",
    countryCode: "UKR",
    currency: "Ukrainian Hryvnia",
    currencyCode: "UAH",
  },
  ARE: {
    name: "United Arab Emirates",
    countryCode: "ARE",
    currency: "U.A.E. Dirham",
    currencyCode: "AED",
  },
  GBR: {
    name: "United Kingdom",
    countryCode: "GBR",
    currency: "Pound Sterling",
    currencyCode: "GBP",
  },
  USA: {
    name: "United States",
    countryCode: "USA",
    currency: "U.S. Dollar",
    currencyCode: "USD",
  },
  URY: {
    name: "Uruguay",
    countryCode: "URY",
    currency: "Peso Uruguayo",
    currencyCode: "UYU",
  },
  UZB: {
    name: "Uzbekistan",
    countryCode: "UZB",
    currency: "Uzbekistan Sum",
    currencyCode: "UZS",
  },
  VUT: {
    name: "Vanuatu",
    countryCode: "VUT",
    currency: "Vatu",
    currencyCode: "VUV",
  },
  VEN: {
    name: "Venezuela",
    countryCode: "VEN",
    currency: "Bolivar",
    currencyCode: "VEB",
  },
  VNM: {
    name: "Vietnam",
    countryCode: "VNM",
    currency: "Dong",
    currencyCode: "VND",
  },
  WLF: {
    name: "Wallis and Futuna Is.",
    countryCode: "WLF",
    currency: "CFP Franc",
    currencyCode: "XPF",
  },
  ESH: {
    name: "Western Sahara",
    countryCode: "ESH",
    currency: "Moroccan Dirham",
    currencyCode: "MAD",
  },
  YEM: {
    name: "Yemen",
    countryCode: "YEM",
    currency: "Yemeni Rial",
    currencyCode: "YER",
  },
  YUG: {
    name: "Yugoslavia",
    countryCode: "YUG",
    currency: "Yugoslavian New Dinar",
    currencyCode: "YUM",
  },
  ZMB: {
    name: "Zambia",
    countryCode: "ZMB",
    currency: "Zambian Kwacha",
    currencyCode: "ZMK",
  },
  ZWE: {
    name: "Zimbabwe",
    countryCode: "ZWE",
    currency: "Zimbabwe Dollar",
    currencyCode: "ZWD",
  },
};

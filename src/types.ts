/** @internal */
interface SuperAgentResponse {
  headers?: any;
  body?: any;
  text?: string;
  status: number;
  error?: false | string | Error;
}

export interface ErrorObject {
  message: string;
}

export interface ErrorProperty {
  ERROR?: string;
  error?: string;
}

export interface HttpResponse {
  response: SuperAgentResponse;
}

export interface SuccessIndicator {
  success: boolean;
  message?: string;
}

export interface UntypedObject {
  [key: string]: any;
}

export const enum Currency {
  ZAR = "ZAR",
  USD = "USD",
  EUR = "EUR",
}

export interface CreditCard {
  transactionType?: string;
  cardHolderName?: string;
  vendor?: string;
  number: string;
  ccv?: number;
}

export const PayGateEndpoints = {
  INITIATE_URI: "https://secure.paygate.co.za/payweb3/initiate.trans",
  REDIRECT_URI: "https://secure.paygate.co.za/payweb3/process.trans",
  QUERY_URI: "https://secure.paygate.co.za/payweb3/query.trans",
};

export const PayGateErrorCodes = {
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

export const CreditCardCodes = {
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

export const CommunicationAndDataErrors = {
  "900205": "Unexpected authentication result (phase 1)",
  "900206": "Unexpected authentication result (phase 2)",
  "900001": "Could not insert into DB",
  "990022": "Bank not available",
  "990053": "Error processing transaction",
  "900209": "Transaction verification failed (phase 2) (verification data altered)",
  "900210": "Authentication already complete; transaction must be restarted (verification done more than once)",
  "900019": "Invalid PayVault scope",
  "990013": "Error processing a batch transaction",
  "990024": "Duplicate transaction detected",
  "990028": "Transaction cancelled",
};

export const TransactionStatus = {
  "0": "Not Done",
  "1": "Approved",
  "2": "Declined",
  "3": "Cancelled",
  "4": "User Cancelled",
  "5": "Received by PayGate",
  "7": "Settlement Voided",
};

export const enum TransactionCode {
  NOT_DONE = "0",
  APPROVED = "1",
  DECLINED = "2",
  CANCELLED = "3",
  USER_CANCELLED = "4",
  RECEIVED_BY_PAYGATE = "5",
  SETTLEMENT_VOIDED = "7",
}

export interface TransactionDescription {
  status: string;
  detail?: string;
}

export const PaymentMethod = {
  CC: "Credit Card",
  DC: "Debit Card",
  EW: "E-Wallet",
  BT: "Bank Transfer",
  CV: "Cash Voucher",
  PC: "Pre-Paid Card",
};

export const enum PaymentMethodCode {
  CREDIT_CARD = "CC",
  DEBIT_CARD = "DC",
  E_WALLET = "EW",
  BANK_TRANSFER = "BT",
  CASH_VOUCHER = "CV",
  PREPAID_CARD = "PC",
}

export const enum PayGateLocale {
  AFRIKAANS = "af",
  ENGLISH = "en",
  SUTU = "sx",
  TSWANA = "tn",
  VENDA = "vn",
  ZULU = "zu",
}

export const PayGateLocaleName = {
  af: "Afrikaans",
  en: "Enblish",
  sx: "Sutu",
  tn: "Tswana",
  ve: "Venda",
  zu: "Zulu",
};

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

export interface PaymentRequest {
  PAYGATE_ID?: string;
  REFERENCE?: string;
  AMOUNT: string;
  CURRENCY?: string;
  RETURN_URL: string;
  TRANSACTION_DATE?: string;
  LOCALE?: string;
  COUNTRY?: string;
  EMAIL: string;
  PAY_METHOD?: string;
  PAY_METHOD_DETAIL?: string;
  NOTIFY_URL?: string;
  USER1?: string;
  USER2?: string;
  USER3?: string;
  VAULT?: number;
  VAULT_ID?: string;
  CHECKSUM?: string;
}

export interface PaymentReference {
  PAYGATE_ID?: string;
  PAY_REQUEST_ID?: string;
  REFERENCE?: string;
  CHECKSUM?: string;
}

export interface RedirectParams {
  PAY_REQUEST_ID: string;
  CHECKSUM: string;
}

export interface PaymentResponse {
  paymentRef: PaymentReference;
  redirectParams: RedirectParams;
  redirectUri: string;
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

import { Response } from "superagent";

export interface UntypedObject {
  [key: string]: any;
}

export interface ErrorObject {
  message: string;
}

/** @internal */
export interface ErrorProperty {
  ERROR?: string;
  error?: string;
}

/** @internal */
interface HttpResponse extends Response {
  body: any;
  status: number;
}

/** @internal */
interface HttpErrorResponse extends HttpResponse {
  body: ErrorProperty;
  error: any;
}

/** @internal */
export interface HttpError {
  response: HttpErrorResponse;
}

export interface SuccessIndicator {
  success: boolean;
  message?: string;
}

type CurrencyCode = "ZAR" | "USD" | "EUR";

export enum Currency {
  ZAR = "ZAR",
  USD = "USD",
  EUR = "EUR",
}

export interface MonetaryAmount {
  currencyCode?: CurrencyCode;
  centAmount: number;
}

export type Price = {
  // [key: string]: MonetaryAmount;
  [T in CurrencyCode]?: MonetaryAmount;
  // [index in keyof typeof Currency]?: MonetaryAmount;
};

// export enum PayGateStatus {
//   "CNTRY_INVALID": "Country Invalid",
//   "DATA_AMT_NUM": "Amount is not a number",
//   "DATA_AMT_ZERO": "Amount value is zero",
//   "DATA_CHK": "Checksum calculated incorrectly",
//   "DATA_CREF": "No transaction reference",
//   "DATA_DTTM": "Transaction date invalid",
//   "DATA_INS": "Error creating record for transaction request",
//   "DATA_PAY_REQ_ID": "Pay request ID missing or invalid",
//   "DATA_PM": "Pay Method or Pay Method Detail fields invalid",
//   "DATA_PW": "Not all required fields have been posted to PayWeb",
//   "DATA_REGION": "No Country or Locale",
//   "DATA_URL": "No return url",
//   "INVALID_VAULT": "Vault value invalid",
//   "INVALID_VAULT_ID": "Vault ID invalid",
//   "INV_EMAIL": "Invalid Email address",
//   "LOCALE_INVALID": "Invalid Locale",
//   "ND_INV_PGID": "Invalid PayGate ID",
//   "NOT_LIVE_PM": "No available payment methods",
//   "NO_TRANS_DATA": "No transaction data found",
//   "PAYVAULT_NOT_EN": "PayVault not enabled",
//   "PGID_NOT_EN": "PayGate ID not enabled, there are no available payment methods or there are no available currencies",
//   "TXN_CAN": "Transaction has already been cancelled",
//   "TXN_CMP": "Transaction has already been completed",
//   "TXN_PRC": "Transaction is older than 30 minutes or there has been an error processing it",
//   "VAULT_NOT_ACCEPTED": "Card types enabled on terminal not available for vaulting",
// }

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

export interface PaymentRequestRef {
  PAYGATE_ID?: string;
  PAY_REQUEST_ID: string;
  REFERENCE?: string;
  CHECKSUM?: string;
}

export interface PaymentResponse {
  paymentRef?: PaymentRequestRef;
  redirectUrl: string;
}
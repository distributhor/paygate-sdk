import md5 from "md5";
import currency from "currency.js";
import {
  UntypedObject,
  PaymentStatus,
  TransactionStatus,
  TransactionResultCode,
  TransactionCode,
  PayGateTestCards,
  CreditCard,
  TransactionStatusText,
} from "./types";

export function removeAllNonValuedProperties(obj: UntypedObject): void {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
      delete obj[key];
    }
  });
}

export function toCentAmount(amount: string | number): string {
  return currency(amount).intValue.toString();
}

export function generatePayGateChecksum(data: UntypedObject, encryptionKey: string): string {
  return md5(
    Object.keys(data) // lgtm [js/weak-cryptographic-algorithm]
      .map((key) => data[key])
      .join("") + encryptionKey
  );
}

const TransactionStatusMap = {
  "0": TransactionStatusText.NOT_DONE,
  "1": TransactionStatusText.APPROVED,
  "2": TransactionStatusText.DECLINED,
  "3": TransactionStatusText.CANCELLED,
  "4": TransactionStatusText.USER_CANCELLED,
  "5": TransactionStatusText.RECEIVED_BY_PAYGATE,
  "7": TransactionStatusText.SETTLEMENT_VOIDED,
};

const TransactionCodeMap = {
  "0": TransactionCode.NOT_DONE,
  "1": TransactionCode.APPROVED,
  "2": TransactionCode.DECLINED,
  "3": TransactionCode.CANCELLED,
  "4": TransactionCode.USER_CANCELLED,
  "5": TransactionCode.RECEIVED_BY_PAYGATE,
  "7": TransactionCode.SETTLEMENT_VOIDED,
};

export function getTransactionInfo(paymentStatus: PaymentStatus): TransactionStatus {
  if (!paymentStatus || paymentStatus.PAY_REQUEST_ID == undefined) {
    return undefined;
  }

  const txCode = paymentStatus.TRANSACTION_STATUS.toString();
  const rsCode = paymentStatus.RESULT_CODE ? paymentStatus.RESULT_CODE.toString() : undefined;

  return {
    paymentReqId: paymentStatus.PAY_REQUEST_ID,
    code: TransactionCodeMap[txCode],
    status: TransactionStatusMap[txCode],
    detail: rsCode && TransactionResultCode[rsCode] ? TransactionResultCode[rsCode] : undefined,
  };
}

export function redirectBrowser(uri: string, params: any): void {
  const form = document.createElement("form");
  form.method = "post";
  form.action = uri;

  for (const key in params) {
    // eslint-disable-next-line no-prototype-builtins
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement("input");
      hiddenField.type = "hidden";
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);

  form.submit();
}

/** @internal */
export function splitCamelCaseString(s: string): string {
  // /([a-z0-9])([A-Z])/ for numbers counting as lowercase characters
  return s.replace(/([a-z])([A-Z])/g, "$1 $2");
}

export function getTestCards(): CreditCard[] {
  const cards = [];

  for (const transactionType of Object.keys(PayGateTestCards)) {
    for (const cardVendor of Object.keys(PayGateTestCards[transactionType])) {
      cards.push({
        transactionType: splitCamelCaseString(transactionType),
        vendor: splitCamelCaseString(cardVendor),
        number: PayGateTestCards[transactionType][cardVendor],
        expireMonth: "05",
        expireYear: "2024",
        ccv: "123",
      });
    }
  }

  return cards;
}

export function getTestCardsByTransactionType(): CreditCard[] {
  const cards = [];

  for (const transactionType of Object.keys(PayGateTestCards)) {
    const type = {
      type: transactionType,
      name: splitCamelCaseString(transactionType),
      cards: [],
    };

    for (const cardVendor of Object.keys(PayGateTestCards[transactionType])) {
      type.cards.push({
        transactionType: splitCamelCaseString(transactionType),
        vendor: splitCamelCaseString(cardVendor),
        number: PayGateTestCards[transactionType][cardVendor],
        expireMonth: "05",
        expireYear: "2024",
        ccv: "123",
      });
    }

    cards.push(type);
  }

  return cards;
}

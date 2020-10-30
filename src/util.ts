import md5 from "md5";
import currency from "currency.js";
import {
  UntypedObject,
  PaymentStatus,
  TransactionStatus,
  TransactionDescription,
  CommunicationAndDataErrors,
  CreditCardCodes,
  TransactionCode,
  PayGateTestCards,
  CreditCard,
} from "./types";

export function removeAllNonValuedProperties(obj: UntypedObject): void {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });
}

export function toCentAmount(amount: string | number): string {
  return currency(amount).intValue.toString();
}

export function generatePayGateChecksum(data: UntypedObject, secret: string): string {
  return md5(
    Object.keys(data)
      .map((key) => data[key])
      .join("") + secret
  );
}

export function getTransactionDescription(paymentStatus: PaymentStatus): TransactionDescription {
  if (!paymentStatus || paymentStatus.TRANSACTION_STATUS == undefined) {
    return {
      status: "No transaction status found",
    };
  }

  const status = paymentStatus.TRANSACTION_STATUS.toString();
  const code = paymentStatus.RESULT_CODE ? paymentStatus.RESULT_CODE.toString() : undefined;

  if (status && !code) {
    return {
      status: TransactionStatus[status],
    };
  }

  if (status === TransactionCode.APPROVED) {
    return {
      status: TransactionStatus[status],
    };
  }

  if (status === TransactionCode.NOT_DONE) {
    return {
      status: "Transaction not done, due to communication or internal data error",
      detail: CommunicationAndDataErrors[code] ? CommunicationAndDataErrors[code] : undefined,
    };
  }

  if (status === TransactionCode.DECLINED) {
    return {
      status: "Transaction declined due to credit card error",
      detail: CreditCardCodes[code] ? CreditCardCodes[code] : undefined,
    };
  }

  if (status === TransactionCode.DECLINED || status === TransactionCode.USER_CANCELLED) {
    return {
      status: "Transaction cancelled",
      detail: CommunicationAndDataErrors[code] ? CommunicationAndDataErrors[code] : undefined,
    };
  }

  return {
    status: paymentStatus.TRANSACTION_STATUS,
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
function splitCamelCaseString(s: string): string {
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
        ccv: 123,
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
        ccv: 123,
      });
    }

    cards.push(type);
  }

  return cards;
}

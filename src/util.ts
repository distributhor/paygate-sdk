import md5 from "md5";
import currency from "currency.js";
import {
  UntypedObject,
  PaymentStatus,
  TransactionStatus,
  TransactionSummary,
  CreditCardCodes,
  CommunicationAndDataErrors,
} from "./types";

export function removeAllNonValuedProperties(obj: UntypedObject): void {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });
}

export function toCentAmount(amount: string | number): string {
  //   const strAmount = typeof amount === "number" ? amount.toString() : amount;
  //   const saneAmount = strAmount.replace(/,/g, "").replace(/ /g, "");
  //   const centAmount = saneAmount.indexOf(".") === -1 ? saneAmount + "00" : saneAmount.replace(/\./g, "");
  //   return centAmount;
  return currency(amount).intValue.toString();
}

export function toPayGateChecksum(data: UntypedObject, secret: string): string {
  return md5(
    Object.keys(data)
      .map((key) => data[key])
      .join("") + secret
  );
}

export function redirect(uri: string, params: any): void {
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

export function getTransactionSummary(paymentStatus: PaymentStatus): TransactionSummary {
  if (!paymentStatus || paymentStatus.TRANSACTION_STATUS == undefined) {
    return {
      summary: "No transaction status found",
    };
  }

  const status = paymentStatus.TRANSACTION_STATUS.toString();
  const code = paymentStatus.RESULT_CODE ? paymentStatus.RESULT_CODE.toString() : undefined;

  if (status && !code) {
    return {
      summary: TransactionStatus[status],
    };
  }

  if (status === "1") {
    return {
      summary: TransactionStatus[status],
    };
  }

  if (status === "0") {
    return {
      summary: "Transaction not done, due to communication or internal data error",
      reason: CommunicationAndDataErrors[status] ? CommunicationAndDataErrors[status] : undefined,
    };
  }

  if (status === "2") {
    return {
      summary: "Transaction declined due to credit card error",
      reason: CreditCardCodes[status] ? CreditCardCodes[status] : undefined,
    };
  }

  if (status === "3" || status === "4") {
    return {
      summary: "Transaction cancelled",
      reason: CommunicationAndDataErrors[status] ? CommunicationAndDataErrors[status] : undefined,
    };
  }

  return {
    summary: paymentStatus.TRANSACTION_STATUS,
  };
}

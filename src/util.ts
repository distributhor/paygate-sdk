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
      detail: CommunicationAndDataErrors[status] ? CommunicationAndDataErrors[status] : undefined,
    };
  }

  if (status === TransactionCode.DECLINED) {
    return {
      status: "Transaction declined due to credit card error",
      detail: CreditCardCodes[status] ? CreditCardCodes[status] : undefined,
    };
  }

  if (status === TransactionCode.DECLINED || status === TransactionCode.USER_CANCELLED) {
    return {
      status: "Transaction cancelled",
      detail: CommunicationAndDataErrors[status] ? CommunicationAndDataErrors[status] : undefined,
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

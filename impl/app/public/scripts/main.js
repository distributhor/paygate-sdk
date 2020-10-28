// import { PayGateClient } from "paygate-sdk";
// console.log(PayGateClient);

function jqueryRedirect(uri, params) {
  const form = $("<form></form>");

  form.attr("method", "post");
  form.attr("action", uri);

  $.each(params, function (key, value) {
    if (typeof value == "object" || typeof value == "array") {
      $.each(value, function (subkey, subvalue) {
        var field = $("<input />");
        field.attr("type", "hidden");
        field.attr("name", key + "[]");
        field.attr("value", subvalue);
        form.append(field);
      });
    } else {
      var field = $("<input />");
      field.attr("type", "hidden");
      field.attr("name", key);
      field.attr("value", value);
      form.append(field);
    }
  });
  $(document.body).append(form);
  form.submit();
}

function redirect(uri, params) {
  const form = document.createElement("form");
  form.method = "post";
  form.action = uri;

  for (const key in params) {
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

function requestPayment(amount, email) {
  $.ajax({
    type: "POST",
    url: "http://localhost:7000/payment-request",
    data: JSON.stringify({ amount: amount, email: email }),
    contentType: "application/json",
    dataType: "json",
    success: function (data) {
      if (data.redirectUri) {
        redirect(data.redirectUri, data.redirectParams);
      }
    },
    error: function (error) {
      console.log(error.status);
      console.log(error.statusText);
    },
  });
}

function queryPaymentStatus(paymentRef) {
  NProgress.start();
  $.ajax({
    type: "GET",
    url:
      "http://localhost:7000/payment-status?PAY_REQUEST_ID=" +
      paymentRef.PAY_REQUEST_ID +
      "&REFERENCE=" +
      paymentRef.REFERENCE,
    contentType: "application/json",
    dataType: "json",
    success: function (data) {
      NProgress.done();
      redirect("/status", data);
    },
    error: function (error) {
      NProgress.done();
      console.log(error.status);
      console.log(error.statusText);
    },
  });
}

function validateAmount(value) {
  if (!value) {
    return {
      amount: 0,
      valid: false,
      message: "Amount is required",
    };
  }

  const amount = +value;

  if (typeof amount !== "number" || !isFinite(amount)) {
    return {
      amount: 0,
      valid: false,
      message: "Amount is not a number",
    };
  }

  return {
    amount: amount,
    valid: true,
  };
}

$(document).ready(function () {
  $("#error").hide();

  $("#amount").on("input", function () {
    const validation = validateAmount($("#amount").val());
    if (!validation.valid) {
      $("#error").text(validation.message);
      $("#error").show();
      return false;
    }

    $("#error").hide();
  });

  $("#pay").click(function () {
    const email = $("#email").val();
    if (!email) {
      $("#error").text("Email is required");
      $("#error").show();
      return false;
    }

    const validation = validateAmount($("#amount").val());
    if (!validation.valid) {
      $("#error").text(validation.message);
      $("#error").show();
      return false;
    }

    $("#error").hide();

    requestPayment(validation.amount, email);
  });

  $("#status").click(function () {
    $("#error").hide();

    const payRequestId = $("#pay_request_id").val();
    const paymentReference = $("#payment_reference").val();
    if (!payRequestId && !paymentReference) {
      $("#error").text("No input received");
      $("#error").show();
      return false;
    }

    queryPaymentStatus({
      PAY_REQUEST_ID: payRequestId,
      REFERENCE: paymentReference,
    });
  });
});

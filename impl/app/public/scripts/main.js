function requestPayment(amount, email) {
  $.ajax({
    type: "POST",
    url: "http://localhost:7000/payment-request",
    data: JSON.stringify({ amount: amount, email: email }),
    contentType: "application/json",
    dataType: "json",
    success: function (data) {
      if (data.redirectUri) {
        paygate.util.redirectBrowser(data.redirectUri, data.redirectParams);
      }
    },
    error: function (error) {
      console.log(error.status);
      console.log(error.statusText);
    },
  });
}

function queryPaymentStatus(paymentRef) {
  $("#error").hide();

  let params = undefined;

  if (paymentRef.PAY_REQUEST_ID) {
    params = "PAY_REQUEST_ID=" + paymentRef.PAY_REQUEST_ID;
  }

  if (paymentRef.REFERENCE) {
    if (params) {
      params = params + "&REFERENCE=" + paymentRef.REFERENCE;
    } else {
      params = "REFERENCE=" + paymentRef.REFERENCE;
    }
  }

  NProgress.start();

  $.ajax({
    type: "GET",
    url: "http://localhost:7000/payment-status?" + params,
    contentType: "application/json",
    dataType: "json",
    success: function (data) {
      NProgress.done();
      paygate.util.redirectBrowser("/status", data);
    },
    error: function (error) {
      NProgress.done();
      if (error.status === 400 && error.responseJSON) {
        $("#error").text(error.responseJSON.message);
        $("#error").show();
      }
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

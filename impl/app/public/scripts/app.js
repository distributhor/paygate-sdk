function redirect(redirectUri, paymentReqId, checksum) {
  $("#redirect").html(
    '<form action="' +
      redirectUri +
      '" name="redirect-form" method="post" style="display:none;"><input type="text" name="PAY_REQUEST_ID" value="' +
      paymentReqId +
      '" /><input type="text" name="CHECKSUM" value="' +
      checksum +
      '" /></form>'
  );
  document.forms["redirect-form"].submit();
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
        redirect(data.redirectUri, data.paymentRef.PAY_REQUEST_ID, data.paymentRef.CHECKSUM);
      }
    },
    error: function (error) {
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
});

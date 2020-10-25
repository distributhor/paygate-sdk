const baseUri = "http://localhost:7000";

function initiatePayment(amount) {
  $.ajax({
    type: "POST",
    url: baseUri + "/paygate/pay",
    data: JSON.stringify({ amount: amount }),
    success: function(data) {
      console.log(data);
      if (data.paygateRedirectUri) {
        window.location.replace(data.paygateRedirectUri);
      }
    },
    error: function(error) {
      console.log(error.status);
      console.log(error.statusText);
    },
    contentType: "application/json",
    dataType: "json"
  });
}

function validateAmount(value) {
  if (!value) {
    return {
      amount: 0,
      valid: false,
      message: "Amount is required"
    };
  }

  const amount = +value;

  if (typeof amount !== "number" || !isFinite(amount)) {
    return {
      amount: 0,
      valid: false,
      message: "Amount is not a number"
    };
  }

  return {
    amount: amount,
    valid: true
  };
}

$(document).ready(function() {
  $("#error").hide();

  $("#amount").on("input", function() {
    const validation = validateAmount($("#amount").val());
    if (!validation.valid) {
      $("#error").text(validation.message);
      $("#error").show();
      return false;
    }

    $("#error").hide();
  });

  $("#pay").click(function() {
    const validation = validateAmount($("#amount").val());
    if (!validation.valid) {
      $("#error").text(validation.message);
      $("#error").show();
      return false;
    }

    $("#error").hide();

    initiatePayment(validation.amount);
  });
});

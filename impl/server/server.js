const cors = require("cors");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const superagent = require("superagent");

const { PayGateClient } = require("../../dist/client.js");

require("dotenv").config({ path: path.join(__dirname, ".env") });

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const client = new PayGateClient(process.env.PAYGATE_ID, process.env.PAYGATE_SECRET);

let returnUrl = "https://www.aquarium.co.za";
let notifyUrl = null;

(async function () {
  const response = await superagent.get(`http://localhost:7500/proxy-info`);
  console.log(response.body);
  returnUrl = response.body.appUri;
  notifyUrl = response.body.serverUri;
})();

server.get("/health-check", (req, res) => {
  res.sendStatus(200);
});

server.post("/payment-request", async (req, res) => {
  const paymentRequest = {
    AMOUNT: req.body.amount,
    EMAIL: req.body.email,
    RETURN_URL: `${returnUrl}/status`,
    NOTIFY_URL: `${notifyUrl}/payment-notification`,
    USER1: "sdk-test",
  };

  try {
    const paymentResponse = await client.requestPayment(paymentRequest);

    console.log("Express Response");
    console.log(paymentResponse);

    res.send(paymentResponse);
  } catch (e) {
    console.log("Error");
    console.log(e);
    return res.sendStatus(503);
  }
});

server.post("/payment-notification", (req, res) => {
  try {
    // body: {
    //   PAYGATE_ID: '10011072130',
    //   PAY_REQUEST_ID: '4C8583D3-4B20-07E1-5033-0A2F93E7BE8C',
    //   REFERENCE: '4469083e-3265-4248-be22-6e4f05ce2451',
    //   TRANSACTION_STATUS: '1',
    //   RESULT_CODE: '990017',
    //   AUTH_CODE: '8KO7DW',
    //   CURRENCY: 'ZAR',
    //   AMOUNT: '2000',
    //   RESULT_DESC: 'Auth Done',
    //   TRANSACTION_ID: '218815324',
    //   RISK_INDICATOR: 'AP',
    //   PAY_METHOD: 'CC',
    //   PAY_METHOD_DETAIL: 'Visa',
    //   USER1: 'sdk-test',
    //   CHECKSUM: '56b7cd47861008dfe106ca4fb1a86733'
    // },
    res.send(req.body);
  } catch (e) {
    console.log(e);
    return res.sendStatus(503);
  }
});

server.listen(7000, function () {
  console.log(`PayGate test server running on http://localhost:7000`);
});

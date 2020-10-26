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

const session = {};

const client = new PayGateClient(process.env.PAYGATE_ID, process.env.PAYGATE_SECRET);

let returnUrl = "https://www.aquarium.co.za";
let notifyUrl = null;

(async function () {
  try {
    const response = await superagent.get(`http://localhost:7500/proxy-info`);
    console.log(response.body);
    returnUrl = response.body.appUri;
    notifyUrl = response.body.serverUri;
  } catch (e) {
    console.log("Proxy server is not running, no public URL's available");
  }
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
    res.send(paymentResponse);
  } catch (e) {
    console.log("Error");
    console.log(e);
    res.sendStatus(503);
  }
});

server.post("/payment-notification", async (req, res) => {
  try {
    if (!req.body || !req.body.PAY_REQUEST_ID) {
      console.log("Unexpected payment notification data");
      return res.sendStatus(503);
    }

    session[req.body.PAY_REQUEST_ID] = req.body;

    res.send("OK");
  } catch (e) {
    console.log(e);
    return res.sendStatus(503);
  }
});

server.get("/payment-status", async (req, res) => {
  try {
    if (req.query.PAY_REQUEST_ID && session[req.query.PAY_REQUEST_ID]) {
      return res.send(session[req.query.PAY_REQUEST_ID]);
    }

    if (!req.query.PAY_REQUEST_ID || !req.query.REFERENCE) {
      return res.sendStatus(400);
    }

    const paymentStatus = await client.paymentStatus({
      PAY_REQUEST_ID: req.query.PAY_REQUEST_ID,
      REFERENCE: req.query.REFERENCE,
    });
    console.log("Payment Status");
    console.log(paymentStatus);
    res.send(paymentStatus);
  } catch (e) {
    console.log(e);
    return res.sendStatus(503);
  }
});

server.listen(7000, function () {
  console.log(`PayGate test server running on http://localhost:7000`);
});

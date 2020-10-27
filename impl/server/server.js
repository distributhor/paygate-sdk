const cors = require("cors");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const superagent = require("superagent");

const { handlePaymentRequest, handlePaymentNotification, queryPaymentStatus } = require("../../dist/middleware.js");

require("dotenv").config({ path: path.join(__dirname, ".env") });

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const paymentMiddlewareConfig = {
  payGateId: process.env.PAYGATE_ID,
  payGateSecret: process.env.PAYGATE_SECRET,
  returnUri: "https://www.aquarium.co.za",
  notifyUri: undefined,
};

(async function () {
  try {
    const response = await superagent.get(`http://localhost:7500/proxy-info`);
    paymentMiddlewareConfig.returnUri = response.body.appUri;
    paymentMiddlewareConfig.notifyUri = response.body.serverUri;
    console.log(response.body);
  } catch (e) {
    console.log("Proxy server is not running, no public URL's available");
  }
})();

server.get("/health-check", (req, res) => {
  res.sendStatus(200);
});

server.post("/payment-request", handlePaymentRequest(paymentMiddlewareConfig), async (req, res) => {
  res.send(req.paymentResponse);
});

server.post("/payment-notification", handlePaymentNotification(paymentMiddlewareConfig), async (req, res) => {
  res.send("OK");
});

server.get("/payment-status", queryPaymentStatus(paymentMiddlewareConfig), async (req, res) => {
  res.send(req.paymentStatus);
});

server.listen(7000, function () {
  console.log(`PayGate test server running on http://localhost:7000`);
});

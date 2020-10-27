const cors = require("cors");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const superagent = require("superagent");

const { paymentRequestHandler, paymentNotificationHandler, paymentStatusHandler } = require("../../dist/index.js");

require("dotenv").config({ path: path.join(__dirname, ".env") });

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const middlewareConfig = {
  payGateId: process.env.PAYGATE_ID,
  payGateSecret: process.env.PAYGATE_SECRET,
  returnUri: "https://www.aquarium.co.za",
  notifyUri: "https://www.aquarium.co.za",
};

(async function () {
  try {
    const response = await superagent.get(`http://localhost:7500/proxy-info`);

    if (response.body && response.body.appUri) {
      middlewareConfig.returnUri = `${response.body.appUri}/status`;
    }

    if (response.body && response.body.serverUri) {
      middlewareConfig.notifyUri = `${response.body.serverUri}/payment-notification`;
    }
  } catch (e) {
    console.log("Proxy server is not running, no public URL's available");
  }

  server.get("/health-check", (req, res) => {
    res.sendStatus(200);
  });

  server.post("/payment-request", paymentRequestHandler(middlewareConfig), async (req, res) => {
    res.send(req.paymentResponse);
  });

  server.post("/payment-notification", paymentNotificationHandler(middlewareConfig), async (req, res) => {
    res.send("OK");
  });

  server.get("/payment-status", paymentStatusHandler(middlewareConfig), async (req, res) => {
    res.send(req.paymentStatus);
  });

  server.listen(7000, function () {
    console.log(`PayGate test server running on http://localhost:7000`);
    console.log("Payment Middleware Config");
    console.log(middlewareConfig);
  });
})();

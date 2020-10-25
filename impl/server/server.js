const md5 = require("md5");
const cors = require("cors");
const path = require("path");
const ngrok = require("ngrok");
const express = require("express");
const bodyParser = require("body-parser");
const { DateTime } = require("luxon");

const { PayGateClient } = require("../../dist/client.js");

require("dotenv").config({ path: path.join(__dirname, ".env") });

const server = express();

server.use(cors());
server.use(bodyParser.json());

const paygateId = process.env.PAYGATE_ID;
const paygateSecret = process.env.PAYGATE_SECRET;

let returnUrl = "https://www.aquarium.co.za";
let notifyUrl = "http://localhost:7000";

(async function () {
  if (process.env.NGROK_URL) {
    notifyUrl = process.env.NGROK_URL;
  } else if (process.env.NGROK_AUTH_TOKEN) {
    notifyUrl = await ngrok.connect({
      authtoken: process.env.NGROK_AUTH_TOKEN,
      addr: 7000,
      region: "eu",
    });

    // The ngrok and all tunnels will be killed when node process is done. To stop the tunnels use
    // await ngrok.disconnect(url); // stops one
    // await ngrok.disconnect(); // stops all
    // await ngrok.kill(); // kills ngrok process
  }

  if (notifyUrl !== "http://localhost:7000") {
    console.log(`Available via ngrok on ${notifyUrl}`);
  }
})();

if (!process.env.NODE_ENV || process.env.NODE_ENV !== "production") {
  //
}

server.get("/health-check", (req, res) => {
  res.sendStatus(200);
});

server.post("/paygate/pay", async (req, res) => {
  const paymentRequest = {
    AMOUNT: "100", // req.body.amount,
    RETURN_URL: returnUrl,
    EMAIL: "distributhor@fastmail.com",
    NOTIFY_URL: `${notifyUrl}/paygate/notify`,
    USER1: "wk",
  };

  try {
    const client = new PayGateClient(paygateId, paygateSecret);
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

server.post("/paygate/notify", (req, res) => {
  try {
    console.log("");
    console.log("POST paygate/notify ...");
    console.log(req.headers);
    console.log(req.body);
    console.log("");
    res.send(req.body);
  } catch (e) {
    console.log(e);
    return res.sendStatus(503);
  }
});

server.get("/paygate/notify", (req, res) => {
  try {
    console.log("");
    console.log("GET paygate/notify ...");
    console.log(req.headers);
    console.log(req.body);
    console.log("");
    res.send(req.body);
  } catch (e) {
    console.log(e);
    return res.sendStatus(503);
  }
});

server.listen(7000, function () {
  console.log(`PayGate test server running on http://localhost:7000`);
});

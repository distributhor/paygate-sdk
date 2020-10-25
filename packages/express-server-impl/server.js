const qs = require('qs');
const md5 = require('md5');
const cors = require('cors');
const path = require("path");
const ngrok = require('ngrok');
const logger = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const superagent = require('superagent');
const { v4: uuidv4 } = require('uuid');
const { DateTime } = require('luxon');

require("dotenv").config({ path: path.join(__dirname, ".env") });

const server = express();

server.use(cors());
server.use(logger("development"));
server.use(bodyParser.json());

const paygateId = process.env.PAYGATE_ID;
const paygateSecret = process.env.PAYGATE_SECRET;
const paygateInitiateUri = "https://secure.paygate.co.za/payweb3/initiate.trans";
const paygateRedirectUri = "https://secure.paygate.co.za/payweb3/process.trans";

const returnUrl = "https://duckduckgo.com";
let notifyUrl = "http://localhost:7000";

(async function() {
  if (process.env.NGROK_URL) {
    notifyUrl = process.env.NGROK_URL;
  } else if (process.env.NGROK_AUTH_TOKEN) {
    notifyUrl = await ngrok.connect({
      authtoken: process.env.NGROK_AUTH_TOKEN,
      addr: 7000,
      region: "eu"
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



const PayGateStatus = {
  "CNTRY_INVALID": "Country Invalid",
  "DATA_AMT_NUM": "Amount is not a number",
  "DATA_AMT_ZERO": "Amount value is zero",
  "DATA_CHK": "Checksum calculated incorrectly",
  "DATA_CREF": "No transaction reference",
  "DATA_DTTM": "Transaction date invalid",
  "DATA_INS": "Error creating record for transaction request",
  "DATA_PAY_REQ_ID": "Pay request ID missing or invalid",
  "DATA_PM": "Pay Method or Pay Method Detail fields invalid",
  "DATA_PW": "Not all required fields have been posted to PayWeb",
  "DATA_REGION": "No Country or Locale",
  "DATA_URL": "No return url",
  "INVALID_VAULT": "Vault value invalid",
  "INVALID_VAULT_ID": "Vault ID invalid",
  "INV_EMAIL": "Invalid Email address",
  "LOCALE_INVALID": "Invalid Locale",
  "ND_INV_PGID": "Invalid PayGate ID",
  "NOT_LIVE_PM": "No available payment methods",
  "NO_TRANS_DATA": "No transaction data found",
  "PAYVAULT_NOT_EN": "PayVault not enabled",
  "PGID_NOT_EN": "PayGate ID not enabled, there are no available payment methods or there are no available currencies",
  "TXN_CAN": "Transaction has already been cancelled",
  "TXN_CMP": "Transaction has already been completed",
  "TXN_PRC": "Transaction is older than 30 minutes or there has been an error processing it",
  "VAULT_NOT_ACCEPTED": "Card types enabled on terminal not available for vaulting",
}

if (!process.env.NODE_ENV || process.env.NODE_ENV !== "production") {
  // 
}

server.get("/health-check", (req, res) => {
  res.sendStatus(200);
});

server.post('/paygate/pay', async (req, res) => {
  try {
      const data = {
        PAYGATE_ID: paygateId,
        REFERENCE: uuidv4(),
        AMOUNT: req.body.amount,
        CURRENCY: "ZAR",
        RETURN_URL: returnUrl,
        TRANSACTION_DATE: DateTime.local().setZone("UTC").toISO(),
        LOCALE: "en-za",
        COUNTRY: "ZAF",
        EMAIL: "distributhor@fastmail.com",
        NOTIFY_URL: `${notifyUrl}/paygate/notify`,
        USER1: "wk"
      };

      console.log(data);

      const checksum = md5(Object.keys(data).map(key => data[key]).join("") + paygateSecret);

      const response = await superagent.post(paygateInitiateUri)
        .send(qs.stringify(data))
        .send(`CHECKSUM=${checksum}`);

      console.log("");
      console.log("paygate/pay ...");
      console.log(req.body);
      console.log("");

      if (!response.text) {
        return res.send("Unknown PayGate response");
      }

      const paygate = qs.parse(response.text);

      if (paygate.ERROR) {
        paygate.status = PayGateStatus[paygate.ERROR] ? PayGateStatus[paygate.ERROR] : `Unkonwn code ${paygate.ERROR}`;
        console.log(paygate);
        return res.send(paygate);
      }

      console.log(response.statusCode);
      console.log(response.text);
      console.log(response.body);

      paygate.paygateRedirectUri = `${paygateRedirectUri}?PAY_REQUEST_ID=${paygate.PAY_REQUEST_ID}&CHECKSUM=${paygate.CHECKSUM}`;
      console.log(paygate);

      res.send(paygate);
  } catch (e) {
      console.log("Error");
      console.log(e);
      return res.sendStatus(503);
  }
});

server.post('/paygate/notify', (req, res) => {
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

server.get('/paygate/notify', (req, res) => {
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

server.listen(7000, function() {
  console.log(`PayGate test server running on http://localhost:7000`);
});

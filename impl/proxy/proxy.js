const path = require("path");
const ngrok = require("ngrok");
const express = require("express");

require("dotenv").config({ path: path.join(__dirname, ".env") });

const server = express();

let appUri = undefined;
let serverUri = undefined;

(async function () {
  if (process.env.NGROK_AUTH_TOKEN) {
    appUri = await ngrok.connect({
      authtoken: process.env.NGROK_AUTH_TOKEN,
      addr: 8000,
      region: "eu",
    });

    serverUri = await ngrok.connect({
      authtoken: process.env.NGROK_AUTH_TOKEN,
      addr: 7000,
      region: "eu",
    });

    // The ngrok and all tunnels will be killed when node process is done.
    // To stop the tunnels manually use ...
    // await ngrok.disconnect(url); // stops one
    // await ngrok.disconnect(); // stops all
    // await ngrok.kill(); // kills ngrok process
  }

  console.log(`Public app URI: ${appUri}`);
  console.log(`Public server URI: ${serverUri}`);
})();

server.get("/proxy-info", (req, res) => {
  res.send({
    serverUri,
    appUri,
  });
});

server.listen(7500, function () {
  console.log(`Ngrok proxy server running on http://localhost:7500`);
});

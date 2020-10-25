const path = require("path");
const ngrok = require("ngrok");
const express = require("express");

require("dotenv").config({ path: path.join(__dirname, ".env") });

const server = express();

let publicServerUri = null;
let publicAppUri = null;

(async function () {
  if (process.env.NGROK_AUTH_TOKEN) {
    publicServerUri = await ngrok.connect({
      authtoken: process.env.NGROK_AUTH_TOKEN,
      addr: 7000,
      region: "eu",
    });

    publicAppUri = await ngrok.connect({
      authtoken: process.env.NGROK_AUTH_TOKEN,
      addr: 8000,
      region: "eu",
    });

    // The ngrok and all tunnels will be killed when node process is done.
    // To stop the tunnels manually use ...
    // await ngrok.disconnect(url); // stops one
    // await ngrok.disconnect(); // stops all
    // await ngrok.kill(); // kills ngrok process
  }

  console.log(`Public server URI: ${publicServerUri}`);
  console.log(`Public app URI: ${publicAppUri}`);
})();

server.get("/uri-server", (req, res) => {
  res.send(publicServerUri);
});

server.get("/uri-app", (req, res) => {
  res.send(publicAppUri);
});

server.get("/uri-info", (req, res) => {
  res.send({
    publicServerUri,
    publicAppUri,
  });
});

server.listen(7500, function () {
  console.log(`Ngrok proxy server running on http://localhost:7500`);
});

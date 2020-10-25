const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index", { title: "Payment" });
});

app.post("/status", function (req, res) {
  console.log(req.body);
  // {
  //   PAY_REQUEST_ID: '664863E9-AD95-43CD-0B40-7D00B7207E56',
  //   TRANSACTION_STATUS: '1',
  //   CHECKSUM: 'eb74f319179dfbfd3bfbd134e5628e2a'
  // }
  res.render("status", { title: "Payment Status" });
});

app.listen(8000, function () {
  console.log(`PayGate test app running on http://localhost:8000`);
});

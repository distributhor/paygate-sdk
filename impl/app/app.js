const path = require("path");
const express = require("express");
const nunjucks = require("nunjucks");
const cookieParser = require("cookie-parser");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index.html", { title: "Payment Request" });
});

app.post("/status", function (req, res) {
  console.log(req.body);
  const data = {
    isPost: true,
    title: "Payment Status",
    paymentStatus: req.body,
  };

  res.render("status.html", data);
});

app.get("/status", function (req, res) {
  const data = {
    isPost: false,
    title: "Payment Status",
  };

  res.render("status.html", data);
});

app.listen(8000, function () {
  console.log(`PayGate test app running on http://localhost:8000`);
});

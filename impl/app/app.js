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
  const data = Object.assign({ title: "Payment Status" }, req.body);
  res.render("status", data);
});

app.listen(8000, function () {
  console.log(`PayGate test app running on http://localhost:8000`);
});

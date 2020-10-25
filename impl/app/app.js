const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");

const indexRouter = require("./routes/index");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// module.exports = app;

app.listen(3000, function () {
  console.log(`PayGate test app running on http://localhost:3000`);
});

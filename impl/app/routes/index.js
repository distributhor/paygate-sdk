var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("index", { title: "PayGate Test" });
});

module.exports = router;

var express = require("express");
var router = express.Router();

router.use(function timeLog(req, res, next) {
   console.log("I'm midelware, Time: ", Date.now());
   next();
});

router.get("/", function (req, res) {
   res.send("Cloud FireStore.");
});

module.exports = router;

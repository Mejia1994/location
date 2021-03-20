var express = require("express");
var router = express.Router();
var { messaging } = require("../app");

router.use(function timeLog(req, res, next) {
   console.log("I'm midelware, Time: ", Date.now());
   next();
});

router.get("/", function (req, res) {
   res.send("Cloud Messaging.");
});

router.get("/send", function (req, res) {
   let registrationToken =
      "fcWXIu9CST2LtaBoSXi7Ct:APA91bF2GotTKc_xScV6G_4dVk8kCe3E_6E-cKpix0beK_FUkgweI8ikh_Ma-Kg5S6fYUhyfMpha3EEA3jIj3ziZGeDdpfx612bpPHt2zqk9qOzgAY2obk9EatVRF8V_ks0Q8_t3hkXN";

   let message = [
      {
         data: {
            title: "Solicitud de ubicacion",
            body: "Pedro solicita que le compartas tu ubicacion",
         },
         token: registrationToken,
      },
      {
         notification: {
            title: "Solicitud de ubicacion",
            body: "Pedro solicita que le compartas tu ubicacion",
         },
         token: registrationToken,
      },
   ];

   messaging
      .sendAll(message)
      .then(() => res.json({ message: "ok" }))
      .catch((error) => res.status(500).json({ messeage: error }));
});

module.exports = router;

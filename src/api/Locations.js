var express = require("express");
var router = express.Router();
var { enviarNotificacion } = require("./CloudMessaging");
var { guardarNotificaciones, obtenerUserData } = require("./CloudFirestore");

router.get("/", function (req, res) {
   res.send("locations share w");
});

router.post("/", async function (req, res) {
   let { to, from, titulo, mensaje } = req.body;

   try {
      let toData = await obtenerUserData(to);

      let data = {
         to,
         from,
         token: toData.TokenMsg,
         titulo: titulo || "Solicitud de ubicacion",
         mensaje: mensaje || `${to} solicita que le compartas tu ubicacion`,
      };

      let notificationResponse = await guardarNotificaciones(data);
      let enviarResponse = await enviarNotificacion(data);

      res.json({ status: true, mensaje: "ok" });
   } catch (e) {
      res.json({ status: false, mensaje: e });
   }
});

module.exports = router;

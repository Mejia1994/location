var { messaging } = require("../app");

const enviarNotificacion = function (params) {
   let message = [
      /* {
         data: {
            title: "Solicitud de ubicacion",
            body: "Pedro solicita que le compartas tu ubicacion",
         },
         token: registrationToken,},*/
      {
         token: params.token,
         notification: {
            title: params.titulo,
            body:
               params.mensaje,
         },
      },
   ];

   return messaging.sendAll(message);
};

module.exports = {
   enviarNotificacion,
};

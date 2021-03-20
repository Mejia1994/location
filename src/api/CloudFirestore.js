const { fireStore } = require("../app");
const usuariosRef = fireStore.collection("Usuarios");

const obtenerUserData = async function (numeroAcceso) {
   return new Promise(function (resolve, reject) {
      usuariosRef
         .doc(numeroAcceso)
         .get()
         .then((doc) => {
            resolve(doc.data());
         })
         .catch((r) => reject(r));
   });
};

const guardarNotificaciones = function (params) {
   return new Promise(function (resolve, reject) {
      try {
         usuariosRef
            .doc(params.to)
            .collection("incomingNotification")
            .doc(params.from)
            .set({
               titulo: params.titulo,
               mensaje: params.mensaje,
            })
            .then(() => {
               resolve("notificacion enviada.");
            })
            .catch((e) => {
               reject(e);
            });
      } catch (e) {
         console.log(e);
      }
   });
};

module.exports = {
   obtenerUserData,
   guardarNotificaciones,
};

const { fireStore } = require("../app");

const obtenerUserData = async function (numeroAcceso) {
   return new Promise(function (resolve, reject) {
      const usuariosRef = fireStore.collection("Usuarios");

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
         let referencia = fireStore.collection(params.to);

         referencia
            .doc(params.from)
            .set({
               tipo: params.tipo,
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

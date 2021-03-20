const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const firebase = require("firebase-admin");
const serviceAccount = require("./api/location-1e64d-firebase-adminsdk-nkk69-6865c2a5e6.json");
var bodyParser = require('body-parser');

let firebaseConfig = {
   apiKey: "AIzaSyA3HfgjlWGJJgPgEpMeh1iz9gjlwHelGrY",
   authDomain: "locations-2559.firebaseapp.com",
   projectId: "locations-2559",
   storageBucket: "locations-2559.appspot.com",
   messagingSenderId: "843967978417",
   appId: "1:843967978417:web:29657bb7dd2745652c7b90",
   measurementId: "G-N1HEX4TFQ8",
};

firebase.initializeApp({
   credential: firebase.credential.cert(serviceAccount),
   ...firebaseConfig,
});

app.use(bodyParser.json());

app.listen(PORT, () => {
   console.log(`Example app listening at port ${PORT}`);
});

module.exports = {
   app,
   fireStore: firebase.firestore(),
   messaging: firebase.messaging(),
};

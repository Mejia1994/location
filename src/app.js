const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const firebase = require("firebase-admin");
const serviceAccount = require("./api/location-1e64d-firebase-adminsdk-nkk69-6865c2a5e6.json");

let firebaseConfig = {
   apiKey: "AIzaSyDpQTmVVZUqGxzV1CYRLM6ip-ewV8v_Jr4",
   authDomain: "location-1e64d.firebaseapp.com",
   projectId: "location-1e64d",
   storageBucket: "location-1e64d.appspot.com",
   messagingSenderId: "138766667523",
   appId: "1:138766667523:web:3f3df58ae49354c3fba336",
   measurementId: "G-3NE8EBJYD5",
};

firebase.initializeApp({
   credential: firebase.credential.cert(serviceAccount),
   ...firebaseConfig,
});

app.listen(PORT, () => {
   console.log(`Example app listening at port ${PORT}`);
});

module.exports = {
   app,
   fireStore: firebase.firestore(),
   messaging: firebase.messaging(),
};

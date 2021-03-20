var { app } = require("./src/app");
var CloudMessaging = require("./src/api/CloudMessaging");


app.use("/notification", CloudMessaging);

app.get("/", (req, res) => {
   res.send("Hirme's server with firebase.");
});

const { app } = require("./src/app");
const locations = require("./src/api/Locations");
const fs = require("fs");

app.use("/locations", locations);

app.get("/", (req, res) => {
   res.writeHead(200, { "content-type": "text/html" });
   fs.createReadStream("./src/app.html").pipe(res);
});

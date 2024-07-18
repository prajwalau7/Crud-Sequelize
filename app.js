const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 20;

app.use(bodyParser.json());

const router = require("./controller/router");
app.use("/api", router);

app.listen(port, () => {
  console.log(`Listening on the port number ${port}`);
});

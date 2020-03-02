const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Node server is working...");
});

app.listen(PORT, () => {
  console.log("Node server listening on port 5000.");
});

const express = require("express");
const fs = require("fs");
const { getSystemErrorMap } = require("util");

const app = express();
const port = process.env.PORT || 5001;

function sendDataBack(path, res) {
  console.log(req.method, req.path, req);

  const rawdata = fs.readFileSync("." + path + ".json");

  res.setHeader("content-type", "application/json");
  res.send(rawdata);
}

app.get("/*", (req, res) => {
  sendDataBack(req.path, res);
});

app.put("/*", (req, res) => {
  res.send({ success: true });
});

app.patch("/*", (req, res) => {
  res.send({ success: true, path: req.path });
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});

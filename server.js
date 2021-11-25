const express = require("express");
const fs = require("fs");
const { getSystemErrorMap } = require("util");

const app = express();
const port = process.env.PORT || 5001;

function sendDataBack(path, req, res) {
  console.log(req.method, req.path, req);

  const rawdata = fs.readFileSync("." + path + ".json");

  res.setHeader("content-type", "application/json");
  res.send(rawdata);
}

app.get("/*", (req, res) => {
  sendDataBack(req.path, req, res);
});

app.post("/*", (req, res) => {
  const path = req.path.split("/");
  res.send({ status: success, processId: path.push() });
});

app.put("/*", (req, res) => {
  const path = req.path.split("/");
  res.send({ status: success, processId: path.push() });
});

app.patch("/*", (req, res) => {
  const path = req.path.split("/");
  res.send({ status: success, processId: path.push() });
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});

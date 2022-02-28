const express = require("express");
const fs = require("fs");
const pathLib = require('path');
const HansenManager = require('./hansen/hansenManager');

const app = express();
const port = process.env.PORT || 5001;

function sendDataBack(path, req, res) {
  console.log(req.method, req.path, req);

  const rawdata = fs.readFileSync("." + path + ".json");

  res.setHeader("content-type", "application/json");
  res.send(rawdata);
};

app.get("/pages/*", (req, res) => {
  const htmlPage = pathLib.join(__dirname, req.path)
  res.sendFile(htmlPage);
});

app.get("/*", (req, res) => {
  sendDataBack(req.path, req, res);
});

app.post("/hansen*", (req, res) => {
  let hm = new HansenManager();
  const rawData = hm.getJSON(req.path);
  res.setHeader("content-type", "application/json");
  res.send(rawData);
});

app.post("/*", (req, res) => {
  sendDataBack(req.path, req, res);
});

app.put("/*", (req, res) => {
  sendDataBack(req.path, req, res);
});

app.patch("/*", (req, res) => {
  res.send({ status: "success" });
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});

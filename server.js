const express = require('express')
const fs = require('fs');
const { getSystemErrorMap } = require('util');
const app = express()
const port = process.env.PORT || 5001

function sendDataBack(path, res){
  const rawdata = fs.readFileSync("."+path+'.json');

  res.setHeader('content-type', 'application/json');
  res.send(rawdata)
}

app.get('/*', (req, res) => {
  console.log(req.path);
  sendDataBack(req.path, res);
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})
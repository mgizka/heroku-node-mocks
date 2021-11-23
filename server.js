const express = require('express')
const fs = require('fs');
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/invoices/:id', (req, res) => {
    let rawdata = fs.readFileSync('./invoices/'+req.params.id+'.json');

    res.setHeader('content-type', 'application/json');
    res.send(rawdata)
  })

  app.get('/prechecks/:id', (req, res) => {
    let rawdata = fs.readFileSync('./prechecks/'+req.params.id+'.json');

    res.setHeader('content-type', 'application/json');
    res.send(rawdata)
  })

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})
'use strict'

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/version', function (req, res) {
  const version = 3
  res.status(200).send("version app = " + version);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
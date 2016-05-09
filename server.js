var express = require('express');
var bb8api = require('./bb8api');
var slackapi = require('./slackapi');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/move', function (req, res) {
  bb8api.lookAround();
});

app.get('/disco', function (req, res) {
  bb8api.disco();
});

app.get('/clear', function (req, res) {
  res.send('Clear');
  bb8api.color(0x000000);
});



app.listen(3000, function () {
  console.log('BB8 + Slack app listening on port 3000!');

  bb8api.connect();

  slackapi.connect( message => {
    message = message || "";
    if (message.toLowerCase().includes("urgent")) {
      bb8api.lookAround();
      bb8api.color("red");
    }
    else {
      bb8api.lookAround();
      bb8api.disco();
    }
  })
});

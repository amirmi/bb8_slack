var express = require('express');
var bb8api = require('./bb8api');
var slackapi = require('./slackapi');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.param('bb8action', function (req, res, next, id) {
    if (bb8api.hasOwnProperty(id)) {
        bb8api[id]();
    }
    else {
        res.send("Unknown command");
    }
});

app.get('/bb8/:bb8action', function (req, res) {
    res.send('Done');
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

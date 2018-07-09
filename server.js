// server.js
// where your node app starts

// init project
var express = require('express');
const moment = require('moment')
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp/:date_string', function(req, res) {
  let date = req.params.date_string;
  res.json({"unix": moment(date).valueOf(), "utc": moment(date).format('ddd, D MMM YYYY kk:mm:ss z')})
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

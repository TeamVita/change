var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('mysecret'));

app.use('/', express.static(path.join(__dirname, './client')));
app.get('/authorize', routes.authorize);
app.get('/oauth', routes.oauth);
app.post('/signup', function (req, res) {
  var data = req.body;
  res.send(data);
});

module.exports = app;

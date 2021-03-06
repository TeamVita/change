var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./db/index').sequelize;
var utility = require('./routes/subroutes/utility');

// dev routers
var routers = require('./routes/');
var session = require('express-session');
var signup = routers.signup;
var login = routers.login;
var donate = routers.donate;
var pin = routers.pin;

var sess = {
  secret: 'team vita',
  resave: false,
  saveUninitialized: true,
  cookie: { }
};

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('mysecret'));

// auth
app.use(session(sess));

app.use('/', express.static(path.join(__dirname, './client')));
app.use('/donate', donate);
app.use('/signup', signup);
app.use('/login', login);
app.use('/pin', pin);

module.exports = app;

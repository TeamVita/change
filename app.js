var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var fs = require('fs');
var session = require('express-session');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

try {
  var configJSON = fs.readFileSync(__dirname + '/config.json');
  var config = JSON.parse(configJSON.toString());
} catch (e) {
  // debug('File config.json not found or is invalid: ' + e.message);
  process.exit(1);
}
routes.init(config);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('mysecret'));
app.use(session());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/create', routes.create);
app.get('/execute', routes.execute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// database test
app.set('db', require('./db/index'));
var db = app.get('db');
var donor = db.donor;
var recipient = db.recipient;

db.sequelize.sync({ force: true }).catch(function() {
  throw new Error('Error at sequelize sync');
})
.then(function() {
  return donor.create({firstName: "A", lastName: "B"})
})
.then(function() {
  return recipient.create({firstName: "C", lastName: "D"});
})
.then(function() {
  return db.donation.create(1, 1, 100);
})
.then(function() {
  return db.donation.create(1, 1, 300);
})
.then(function() {
  return db.donation.create(1, 1, 300);
})
.then(function() {
  return db.donation.create(1, 1, 300);
})
.then(function() {
  return db.donation.create(1, 1, 123.23);
})

module.exports = app;
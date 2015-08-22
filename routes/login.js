var express = require('express');
var router = express.Router();
var utility = require('./subroutes/utility');
// var models = require('../db/index');

router.post('/vendor', function(req, res) {
  // TODO Check DB for req.body.email and password
  // TODO respond with result
  console.log(req.body);
});

router.post('/shelter', function(req, res) {
  // TODO Check DB for req.body.email and password
  // TODO respond with result
  console.log(req.body);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var utility = require('./subroutes/utility');
// var models = require('../db/index');

// Login users
router.post('/donor', function(req, res, next) {
});

router.post('/vendor', function(req, res, next) {
  utility.initDB();
  res.send("success!!");
});

router.post('/shelter', function(req, res, next) {
});

module.exports = router;
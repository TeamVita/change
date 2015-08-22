var express = require('express');
var router = express.Router();
var utility = require('./subroutes/utility');
// var models = require('../db/index');
// Login users
router.post('/donor', function(req, res) {
});

router.post('/vendor', function(req, res) {
  // TODO Check DB for req.body.email and password
  // utility.checkVendor(req.body.email, req.body.password).then(function(result){
  //  res.send(result);
//   });
  // TODO respond with result
	
});

router.post('/shelter', function(req, res) {
  // TODO Check DB for req.body.email and password
  // utility.checkVendor(req.body.email, req.body.password).then(function(result){
  //  res.send(result);
//   });
  // TODO respond with result
});

router.post('/vendor/redeem', function(req, res) {
	var results = req.body;
	res.send(results);
	

});

module.exports = router;

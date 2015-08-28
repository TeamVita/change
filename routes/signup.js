var keys = require('../config');
var CLIENT_ID = keys.CLIENT_ID;
var API_KEY = keys.SECRET_KEY;
var TOKEN_URI = 'https://connect.stripe.com/oauth/token';
var AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';

var qs = require('querystring');
var request = require('request');
var stripe = require("stripe")(API_KEY);
var express = require('express');
var router = express.Router();
var stripeHandler = require('../stripeHandler');
var utility = require("./subroutes/utility");

// Create vendor stripe account and add record to DB
router.post('/vendor', function(req, res) {
	var vendorType = req.body.type;
  var email = req.body.email;
  var username = req.body.business_name;
  var password = req.body.password;
  req.body.dob_year = req.body.dob_day.slice(0,4);
  req.body.dob_month = req.body.dob_day.slice(5,7);
  req.body.dob_day = req.body.dob_day.slice(8,10);

	var newVendor = utility.createVendor(email, password, username, vendorType);
	newVendor.then(function(thing) {
		stripeHandler.createStripeAccount(req, res, function(newAccount){
	  	newAccount.type = vendorType;
	    newAccount.password = password;
	    // debugger;
	    res.send(newAccount);
	  });
	});

});

// Add shelter record to DB
router.post('/shelter', function(req, res) {
	var shelter = req.body;
	var addShelter = utility.createShelter(shelter.email, shelter.password, shelter.name);
	addShelter.then(function(newShelter) {
		res.send(newShelter);
	});
});

module.exports = router;

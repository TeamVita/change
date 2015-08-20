var keys = require('../config');
var CLIENT_ID = keys.CLIENT_ID;
var SECRET_KEY = keys.SECRET_KEY;
var TOKEN_URI = 'https://connect.stripe.com/oauth/token';
var AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';

var qs = require('querystring');
var request = require('request');
// var stripe = require("stripe")(API_KEY);
var stripe = require("stripe")(SECRET_KEY);
var express = require('express');
var router = express.Router();
var stripeHandler = require('../stripeHandler');

// Create stripe accounts for vendors/donors, add accounts to DB, redirect users
router.post('/donor', function(req, res) {
  stripeHandler.createAccount(req, res);
});

router.post('/vendor', function(req, res) {
  stripeHandler.createAccount(req, res);
});

router.post('/shelter', function(req, res) {
  // console.log(req.body);
});

module.exports = router;

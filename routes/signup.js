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
var createStripeAccount = require('../createStripeAccount');

// Create stripe accounts for vendors/donors, add accounts to DB, redirect users
router.post('/donor', function(req, res) {
  createStripeAccount(req, res);
});

router.post('/vendor', function(req, res) {
  createStripeAccount(req, res);
});

router.post('/shelter', function(req, res) {

});

module.exports = router;

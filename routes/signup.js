var keys = require('../config');
var CLIENT_ID = keys.CLIENT_ID;
var API_KEY = keys.API_KEY;
var TOKEN_URI = 'https://connect.stripe.com/oauth/token';
var AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';

var qs = require('querystring');
var request = require('request');
var stripe = require("stripe")(API_KEY);
var express = require('express');
var router = express.Router();
var createAccount = require('../createAccount');

// Create vendor, add to DB, redirect user
router.post('/donor', function(req, res) {
  createAccount(req, res);
});

router.post('/vendor', function(req, res) {
  createAccount(req, res);
});

router.post('/shelter', function(req, res) {

});

module.exports = router;

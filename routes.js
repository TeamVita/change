
var keys = require('./config');
var CLIENT_ID = keys.CLIENT_ID;
var API_KEY = keys.API_KEY;

var TOKEN_URI = 'https://connect.stripe.com/oauth/token';
var AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';

var qs = require('querystring');
var request = require('request');
var express = require('express');

var stripe = require("stripe")(API_KEY);

exports.create = function(req, res){
  stripe.accounts.create({
    managed: true,
    country: 'US',
    email: 'bob@example.com'
  }, function(err, account) {
    // asynchronously called
    res.send('hell yeah!');
  });
};

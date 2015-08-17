var keys = require('./config');
var CLIENT_ID = keys.CLIENT_ID;
var API_KEY = keys.API_KEY;
var TOKEN_URI = 'https://connect.stripe.com/oauth/token';
var AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';

var qs = require('querystring');
var request = require('request');
var stripe = require("stripe")(API_KEY);

// Creates Stripe account for vendors/donors
var createAccount = function(req, res, callback){

  stripe.accounts.create({
    managed: true,
    country: 'US',
    legal_entity: {
      last_name: 'exampleman',
      first_name: 'bob',
      type: 'corporation',
      dob: {
        day: '21',
        month: '12',
        year: '1984',
      }
    },
    email: 'bob@example.com',
    tos_acceptance: {
      date: Math.floor(Date.now() / 1000),
      ip: req.connection.remoteAddress // Assumes you're not using a proxy
    }
  }, function(err, account) {
    // Add account to DB here
    // then redirect usr to some other page
    console.log('hell yeah!');
    if (callback) {
      callback();
    }
    /*purpose of this is to send a response for front end request
    -if this breaks anything delete it - Adi */
    res.send("Hello");
  });
};

module.exports = createAccount;

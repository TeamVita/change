var keys = require('./config');
var CLIENT_ID = keys.CLIENT_ID;
var SECRET_KEY = keys.SECRET_KEY;
var TOKEN_URI = 'https://connect.stripe.com/oauth/token';
var AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';

var stripe = require("stripe")(SECRET_KEY);

// Creates Stripe account for vendors/donors
exports.createAccount = function(req, res, callback){
  /*
  * TODO handle individual vs corporate accounts here
  */

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
    if (callback) {
      callback();
    }
  });
};

exports.addBankAccount = function(req, res) {
  
};

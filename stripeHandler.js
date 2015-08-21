var keys = require('./config');
var CLIENT_ID = keys.CLIENT_ID;
var SECRET_KEY = keys.SECRET_KEY;
var TOKEN_URI = 'https://connect.stripe.com/oauth/token';
var AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';
var assign = require('object-assign');

var stripe = require("stripe")(SECRET_KEY);

// Creates Stripe account for vendors
exports.createStripeAccount = function(req, res, callback){

  // Package data object for Stripe API call
  var accountMapper = function(request){
    var body = request.body;
    var vendorData = {
      email: body.email,
      bank_account: body.token,
      business_name: body.business_name,
      legal_entity: {
        last_name: body.last_name,
        first_name: body.first_name,
        type: 'corporation',
        dob: {
          day: body.dob_day,
          month: body.dob_month,
          year: body.dob_year
        }
      }
    };

    var staticData = {
      managed: true,
      country: 'US',
      tos_acceptance: {
        date: Math.floor(Date.now() / 1000),
        ip: request.connection.remoteAddress // Assumes you're not using a proxy
      }
    };

    assign(vendorData, staticData);
    return vendorData;
  };

  var vendorData = accountMapper(req);
  stripe.accounts.create(vendorData, function(err, account) {
    if (err) {
      console.log(err);
    } else {
      if (callback) {
        callback(account);
      }
    }
  });

};

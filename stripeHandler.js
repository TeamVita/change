var keys = require('./config');
var CLIENT_ID = keys.CLIENT_ID;
var SECRET_KEY = keys.SECRET_KEY;
var TOKEN_URI = 'https://connect.stripe.com/oauth/token';
var AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';

var stripe = require("stripe")(SECRET_KEY);

// Creates Stripe account for vendors/donors
exports.createStripeAccount = function(req, res, callback){

  var accountMapper = function(request){

    var vendorData = request.body;
    var result = {
      managed: true,
      country: 'US',
      tos_acceptance: {
        date: Math.floor(Date.now() / 1000),
        ip: request.connection.remoteAddress // Assumes you're not using a proxy
      }
    };

    result.extend(vendorData);
    result.legal_entity.extend({type: 'corporation'});
    return result;

  };

  // Create data object for stripe account creation
  var vendorData = accountMapper(req);

  // Strip token from data object
  var token = vendorData.token;
  delete vendorData.token;

  stripe.accounts.create(vendorData, function(err, account) {
    // Add account to DB here; include token
    // then redirect usr to some other page
    if (callback) {
      callback();
    }
  });
};

/*
*
* EXAMPLE vendorData OBJECT
* Note that there is no token on this object because it was stripped off
* before calling to Stripe API.
*
*  {
*    managed: true,
*    country: 'US',
*    display_name: 'Wall-e-mart',
*    legal_entity: {
*      last_name: 'exampleman',
*      first_name: 'bob',
*      type: 'corporation',
*      dob: {
*        day: '21',
*        month: '12',
*        year: '1984',
*      }
*    },
*    email: 'bob@example.com',
*    tos_acceptance: {
*      date: Math.floor(Date.now() / 1000),
*      ip: req.connection.remoteAddress
*    }
*  }
*
*/

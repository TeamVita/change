var keys = require('./config');
var CLIENT_ID = keys.CLIENT_ID;
var SECRET_KEY = keys.SECRET_KEY;
var TOKEN_URI = 'https://connect.stripe.com/oauth/token';
var AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';

var stripe = require("stripe")(SECRET_KEY);

var makePayment = function(req, destination) {
  // Get the credit card details submitted by the form
  var stripeToken = JSON.parse(req.body.token);
  var fee = Math.round(req.amt * 0.029) + 0.30;
  var description = destination === 'food' ? 'Safeway payment'
                                           : 'Salvation Army Payment';

  var charge = stripe.charges.create({
    amount: 1000, // amount in cents, again
    currency: "usd",
    source: stripeToken,
    description: description,
    destination: destination,
    application_fee: fee
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
      console.log(err);
    } else {
      console.log('CHARGE: ' + charge);
    }
  });
};

module.exports = makePayment;

var keys = require('./config');
var CLIENT_ID = keys.CLIENT_ID;
var SECRET_KEY = keys.SECRET_KEY;
var TOKEN_URI = 'https://connect.stripe.com/oauth/token';
var AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';

var stripe = require("stripe")(SECRET_KEY);

// Create and execute Stripe payment
var makePayment = function(req) {

  // Calculate application fee to cover Stripe processing expense
  // Stripe fee is 2.9% plus 30 cents
  var calculateFee = function(amt){
    var fee = (amt * 0.029) + 0.30;
    fee = fee.toString().slice(0, 4);
    fee = parseFloat(fee);
    fee *= 100;
    return fee;
  };

  // Collect token and payment details submitted by form
  var stripeToken = JSON.parse(req.body.token);
  var type = req.body.type;
  var description = type === 'food' ? 'Safeway payment'
                                           : 'Salvation Army Payment';
  var fee = calculateFee(req.body.amt);

  // TODO query DB for destination ID and set destination value to this ID;
  destination = 'acct_16c3n1LJ0pbcCi52'; // testing only

  // Create and execute payment
  var charge = stripe.charges.create({
    amount: 1000, // amount in cents, again
    currency: "usd",
    source: stripeToken.id,
    description: description,
    destination: destination,
    application_fee: fee
  }, function(err, charge) {
    // if (err && err.type === 'StripeCardError') {
    if (err){
      // The card has been declined
      console.log(err.message);
    } else {
      console.log('CHARGE: ' + charge.id);
    }
  });
};

module.exports = makePayment;

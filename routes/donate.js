var express = require('express');
var router = express.Router();
var makePayment = require('../payment');

// Create vendor, add to DB, redirect user
/*Changed  "/donate" to "/" otherwise route becomes /donate/donate -Adi */
router.post('/', function(req, res) {
	var destination = req.body.destination || 'food'; // TODO remove boolean default once button is implemented client-side
	makePayment(req, destination);

	// TODO add payment to DB
	res.send('Success!');
});

module.exports = router;

/*

EXAMPLE REQ OBJECT

{ pin: '7777',
  amt: '9',
  'token[id]': 'tok_16c2oQJizS4yNB58I81lA9yf',
  'token[livemode]': 'false',
  'token[created]': '1440114674',
  'token[used]': 'false',
  'token[object]': 'token',
  'token[type]': 'card',
  'token[card][id]': 'card_16c2oQJizS4yNB58bXIqNDme',
  'token[card][object]': 'card',
  'token[card][last4]': '4242',
  'token[card][brand]': 'Visa',
  'token[card][funding]': 'credit',
  'token[card][exp_month]': '1',
  'token[card][exp_year]': '2018',
  'token[card][country]': 'US',
  'token[card][name]': 'v@v.com',
  'token[card][address_line1]': '',
  'token[card][address_line2]': '',
  'token[card][address_city]': '',
  'token[card][address_state]': '',
  'token[card][address_zip]': '',
  'token[card][address_country]': '',
  'token[card][cvc_check]': 'pass',
  'token[card][address_line1_check]': '',
  'token[card][address_zip_check]': '',
  'token[card][tokenization_method]': '',
  'token[card][dynamic_last4]': '',
  'token[email]': 'v@v.com',
  'token[verification_allowed]': 'true',
  'token[client_ip]': '173.247.204.106' }

*/

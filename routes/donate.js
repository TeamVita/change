var express = require('express');
var router = express.Router();
var makePayment = require('../payment');
var utility = require('./subroutes/utility');

// Create vendor, add to DB, redirect user
router.post('/', function(req, res) {
	var newCharge = makePayment(req);
	newCharge.then(function(charge) {
		var donation = utility.donateToRecipientByPin(req.body.pin, req.body.amt, req.body.type);
		donation.then(function(recipient) {
			var response = {};
			if (recipient) {
				response.message = "Donation succeeded.";
				response.status = 'success';
				console.log('Donation: ' + response.status);
				res.send(response);
			} else {
				response.message = "That PIN doesn't exist anywhere but your own mind.";
				response.status = 'error';
				console.log('Donation: ' + response.status);
				res.send(response);
			}
		});
	});
});

module.exports = router;

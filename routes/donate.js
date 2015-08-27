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
			console.log(recipient);
			res.send(recipient);
		});
	});
});

module.exports = router;

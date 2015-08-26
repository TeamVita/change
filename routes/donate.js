var express = require('express');
var router = express.Router();
var makePayment = require('../payment');

// Create vendor, add to DB, redirect user
router.post('/', function(req, res) {
	var newCharge = makePayment(req);
	newCharge.then(function(charge) {
		// TODO add payment to DB
		res.send(charge);
	});
});

module.exports = router;

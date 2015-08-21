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

var express = require('express');
var router = express.Router();
var makePayment = require('../payment');

// Create vendor, add to DB, redirect user
/*Changed  "/donate" to "/" otherwise route becomes /donate/donate -Adi */
router.post('/', function(req, res) {
	makePayment(req);

	// TODO add payment to DB
	res.send('Success!');
});

module.exports = router;

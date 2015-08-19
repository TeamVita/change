var express = require('express');
var router = express.Router();

var payment = require('../payment');

// Create vendor, add to DB, redirect user
/*Changed  "/donate" to "/" otherwise route becomes /donate/donate -Adi */
router.post('/', function(req, res) {
	/*lines of code below are for testing the front end -Adi */
	var results = req.body;
	res.send("hello");
});

module.exports = router;

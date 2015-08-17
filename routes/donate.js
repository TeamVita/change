var express = require('express');
var router = express.Router();

var payment = require('../payment');

// Create vendor, add to DB, redirect user
/*Changed  "/donate" to "/" otherwise route becomes /donate/donate -Adi */
router.post('/', function(req, res) {
	/*lines of code below are for testing the front end -Adi */
	res.send("Here you go!");
});

module.exports = router;

var express = require('express');
var router = express.Router();
var utility = require('./subroutes/utility');
// var models = require('../db/index');

// Login users
router.post('/donor', function(req, res) {
});

router.post('/vendor', function(req, res, next) {
  // Vendor test to create a recipient
  var pin = req.body.pin;
  var amount = req.body.amount;
  utility.createRecipient(Number(pin), "first name", "last name")
  .then(function(recipient) {
    console.log("Created recipient", recipient);
  })
  .then(function() {
    return utility.findRecipientByPin(pin)
  })
  .then(function(recipient) {
    // console.log("Find recipient", recipient);
    // charge 
    return recipient;
  })
  .then(function(recipient) {
    res.send(recipient);
  })
});

router.post('/shelter', function(req, res) {
});

module.exports = router;
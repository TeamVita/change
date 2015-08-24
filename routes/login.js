var express = require('express');
var router = express.Router();
var utility = require('./subroutes/utility');
var auth = require('./subroutes/auth');
// Login users
router.post('/donor', function(req, res) {
});

router.post('/vendor', function(req, res) {

  utility.findAccountByEmail(req.body.email, 'vendor')
  .then(function(account) {
    if (account) {
      res.send(account);
    } else {
      res.send("Error!!");
    }
  });

});

router.post('/shelter', function(req, res) {
  
  utility.findAccountByEmail(req.body.email, 'shelter')
  .then(function(account) {
    if (account) {
      res.send(account);
    } else {
      res.send("Error!!");
    }
  });

});

router.post('/vendor/retrieve', function(req, res) {
  var request = req.body;
  var pin = Number(req.body.pin);

  // check vendor type

  utility.findRecipientByPin(pin, 'food').then(function(recipient) {
    res.send(recipient);
  });
  
});

router.post('/vendor/redeem', function(req, res) {
  var request = req.body;
  var pin = Number(req.body.pin);
  var chargedAmount = request.amount;
  var vendorType = 'food';

  utility.findRecipientByPin(pin, vendorType).then(function(recipient) {
    return recipient;
  })
  .then(function(recipient) {
    return utility.chargeRecipientByPin(pin, vendorType);
  })
  .then(function(recipient) {
    res.send(recipient);
  });
});

module.exports = router;

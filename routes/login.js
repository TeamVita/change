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
    if (account === req.body.password) {
      res.send(account);
    } else {
      var error = {
        message: "We don't have an account on record with that username and password combination."
      };
      res.send({error: error});
    }
  });
res.send()

});

router.post('/shelter', function(req, res) {


  utility.findAccountByEmail(req.body.email, 'shelter')
  .then(function(account) {
    if (account.password === req.body.password) {
      res.send(account.business_name);
    } else {
      var error = {
        message: "We don't have an account on record with that username and password combination."
      };
      res.send({error: error});
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

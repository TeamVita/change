var express = require('express');
var router = express.Router();
var utility = require('./subroutes/utility');
var auth = require('./subroutes/auth');
// Login users
router.post('/donor', function(req, res) {
});

router.post('/vendor', function(req, res) {
  var vendorInfo = {};

  utility.findAccountByEmail(req.body.email, 'vendor')
  .then(function(account) {
    if (account === req.body.password) {
      vendorInfo['type'] = account.vendorType;
      vendorInfo['business_name'] = account.username;
      res.send(vendorInfo);
    } else {
      var error = {
        message: "We don't have an account on record with that username and password combination."
      };
      res.send({error: error});
    }
  });

});

router.post('/shelter', function(req, res) {

  utility.findAccountByEmail(req.body.email, 'shelter')
  .then(function(account) {
    if (account && (account.password === req.body.password)) {
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
  var pin = req.body.pin;
  var vendorType = req.body.type;
  vendorType = 'food';

  utility.findRecipientByPin(pin, vendorType).then(function(recipient) {
    // password verification
    console.log("recipient", recipient);
    res.send({ type: vendorType, balance: recipient[vendorType] });
  });

});

router.post('/vendor/redeem', function(req, res) {
  var pin = req.body.pin;
  var chargeAmount = parseInt(req.body.bill);
  var vendorType = req.body.type;
  var password = req.body.password;

  vendorType = 'food';
  console.log("REQUEST AMOUNT", req.body.bill);
  utility.chargeRecipientByPin(pin, chargeAmount, vendorType)
  .then(function(recipient) {
    console.log("RECIPIENT", recipient);
    res.send({ balance: recipient[vendorType] });
  })
  
});

module.exports = router;

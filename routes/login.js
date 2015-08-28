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
    if (account && (account.password === req.body.password)) {
      vendorInfo.type = account.vendorType;
      vendorInfo.business_name = account.username;
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
  console.log(req.body, 'the body of the request');
  var credentials = {
    pin: req.body.pin,
    vendorType: req.body.type
  };

  utility.findRecipientByPin(credentials.pin, credentials.vendorType).then(function(recipient) {
    if (recipient) {
      res.send({ type: credentials.vendorType, balance: recipient[credentials.vendorType] });
    } else {
      var error = {
        status: 'error',
        message: "We don't have an account on record with that PIN." 
      };
      return error;
    }
  });

});

router.post('/vendor/redeem', function(req, res) {
  var credentials = {
    pin: req.body.pin,
    password: req.body.password,
    vendorType: req.body.type
  };
  var chargeAmount = parseInt(req.body.bill);

  var wasFound = utility.findRecipientByPin(credentials.pin, credentials.vendorType);
  if (wasFound) {
    wasFound.then(function(account) {
      if (account && (account.password.toUpperCase() === credentials.password.toUpperCase())) {
        utility.chargeRecipientByPin(credentials.pin, chargeAmount, credentials.vendorType)
        .then(function(recipient) {
          res.send({ balance: recipient[credentials.vendorType] });
        });
      } else {
        var error = {
          message: "We don't have an account on record with that PIN and password combination.",
          status: 'error'
        };
        res.send({error: error});
      }
    });
  } else {
    var error = {
      message: "We don't have an account on record with that PIN.",
      status: 'error'
    };
    res.send({error: error});
  }


});

module.exports = router;

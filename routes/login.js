var express = require('express');
var router = express.Router();
var utility = require('./subroutes/utility');
// var models = require('../db/index');
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

router.post('/vendor/:id/redeem/', function(req, res) {
 //  utility.initDB();

	var results = req.body;
  utility.findRecipientByPin(1)
  .then(function(recipient) {
    return utility.chargeRecipientByPin(1, 100, "food");
  })
  .then(function(recipient) {
    res.send(recipient);
  })
  
});

module.exports = router;

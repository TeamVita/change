var express = require('express');
var router = express.Router();
var utility = require('./subroutes/utility');
// var models = require('../db/index');
// Login users
router.post('/donor', function(req, res) {
});

router.post('/vendor', function(req, res) {
  // TODO Check DB for req.body.email and password
  // utility.checkVendor(req.body.email, req.body.password).then(function(result){
  //  res.send(result);
//   });
  // TODO respond with result
	res.send({business_name: 'salvation army'}); // test
});

router.post('/shelter', function(req, res) {
  // TODO Check DB for req.body.email and password
  // utility.checkVendor(req.body.email, req.body.password).then(function(result){
  //  res.send(result);
//   });

  // TODO respond with result

  // Test code for searching a recipient
  // utility.createRecipient("123", 1).then(function(recipient) {
  //   return recipient;
  // })
  // .then(function(recipient) {
  //   return utility.findRecipientByPin(1);
  // })

  utility.findAccountByEmail(req.body.email)
  .then(function(account) {
    if (account) {
      res.send(account);
    } else {
      res.send("Error!!");
    }
  });

});

router.post('/vendor/redeem', function(req, res) {
  utility.initDB();

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

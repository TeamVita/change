var express = require('express');
var router = express.Router();
var utility = require('./subroutes/utility');

router.get('/', function(req, res) {
  var newPin = utility.generatePin();
  var newPassword = utility.generatePassword();
  newPin.then(function(newPin) {
    var recipient = utility.createRecipient(newPassword, newPin);
    recipient.then( function(account) {
      res.send({
        pin: account.pin,
        password: account.password
      });
    });
  });
});

module.exports = router;

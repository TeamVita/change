var express = require('express');
var router = express.Router();
var utility = require('./subroutes/utility');

router.get('/', function(req, res) {
  var newPin = utilities.generatePin();
  var newPassword = utilities.generatePassword();
  // TODO add new recipient record to DB here;
  var recipient = utility.createRecipient(newPassword, newPin);
  res.send({pin: newPin, password: newPassword});
});

module.exports = router;

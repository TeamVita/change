var express = require('express');
var router = express.Router();
var utility = require('./subroutes/utility');

router.get('/', function(req, res) {
  var newPin = utilities.generatePin();
  var newPassword = utilities.generatePassword();
  // TODO add new recipient record to DB here;
  res.send({PIN: newPin, password: newPassword});
});

module.exports = router;

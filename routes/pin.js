var express = require('express');
var router = express.Router();
var utility = require('./subroutes/utility');

router.get('/', function(req, res) {
  var newPin = utility.generatePin();
  var newPassword = utility.generatePassword();
  // TODO add new recipient record to DB here;
  var recipient = utility.createRecipient(newPassword, newPin);
  recipient.then( function(hobo) {
    res.send({
      pin: hobo.pin,
      password: hobo.password
    });
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // TODO query DB for PIN and PW and return to client
  res.send({PIN: 1234, password: 'ninja'}); // test
});

module.exports = router;

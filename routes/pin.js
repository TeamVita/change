var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log('in pin route')
  res.send({PIN: 1234, password: 'ninja'}); // test
});

module.exports = router;

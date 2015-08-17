var express = require('express');
var router = express.Router();

/* Authentication */

router.get('/', function(req, res, next) {
  res.send('Dummy message for authentication');
});

// TODO: utility functions

// create?
// TODO: refactor to use dedicated auth functions
router.post('/login', function() {

});

router.post('/signup', function() {

});

router.get('/login', function() {

});

router.get('/signup', function() {

});

module.exports = router;

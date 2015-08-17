var express = require('express');
var router = express.Router();

/* Authentication */

router.get('/', function(req, res, next) {
  res.send("Organization/Donor");
});

// Redirect
router.post('/', function(req, res, next) {

});

router.get('/org', function(req, res, next) {
  res.send('Dummy message for organization authentication');
});

router.get('/donor', function(req, res, next) {
  res.send('Dummy message for donor authentication');
});

// TODO: utility functions

// create?
// TODO: refactor to use dedicated auth functions
router.post('/org/login', function() {

});

router.post('/org/signup', function() {

});

router.get('/donor/login', function() {

});

router.get('/donor/signup', function() {

});

module.exports = router;

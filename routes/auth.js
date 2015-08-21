var express = require('express');
var router = express.Router();
//var auth = require('../middleware/auth');
var utility = require('./subroutes/utility');

/* Authentication */
router.get('/', function(req, res, next) {
  res.send("Organization/Donor");
});

// Redirect?
router.post('/', function(req, res, next) {
  // Sample query string:
  // localhost:3000/auth?org=shelter1
  // req.query['org'] --> shelter1
  utility.createDonor(req, res, next);
  utility.createDonation(req, res, next);
  // res.send(req.query['org']);
  res.send(req.body);
});

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

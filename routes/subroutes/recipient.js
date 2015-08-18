var express = require('express');
var router = express.Router();
var utility = require('./utility');

/* GET donors listing. */
router.get('/', function(req, res, next) {
  res.send("Return recipient listing");
});

router.get('/:id', function(req, res, next) {
  // validation
  // console.log(req.query.q);
  // res.send(req.path);
  res.send(req.params.id);
});

router.put('/:id', function(req, res, next) {
  res.send("Update donor!");
});

router.delete('/:id', function(req, res, next) {

});

module.exports = router;
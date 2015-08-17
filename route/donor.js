var express = require('express');
var router = express.Router();

/* GET donors listing. */
router.get('/', function(req, res, next) {
  res.send("Return all donors listing");
});

router.get('/:id', function(req, res, next) {
  // validation
  // console.log(req.query.q);
  // res.send(req.path);
  res.send(req.params.id);
});

router.put('/:id', function(req, res, next) {
  res.send("Update donor!");
})

module.exports = router;


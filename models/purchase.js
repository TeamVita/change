var db = require('./index.js');

var purchase = {
  create: function(uid) {
    db.Purchase.findOrCreate({
      where: { uid: uid },
      default: {
        // firstName: donor.firstName,
        // lastName: donor.lastName,
        // fbId: donor.fbId
      }
    })
    .then(function(results) {
      return results[0].get({ plain: true });
    })
    .catch(function() {
        throw new Error('Unknown error at method donor create()');
    })
  },

  findOneByEmail: function(email) {
    db.Purchase.findOne({ where: { email: email } }).then(function(donor) {
      console.log("find a donor", donor);
    })
    .catch(function() {
        throw new Error('Unknown error at method donor findOneByEmail()');
    })
  },

  findOneById: function(id) {
    db.Purchase.findById(id).then(function(donor) {
      console.log("find a donor", donor);
    })
    .catch(function() {
        throw new Error('Unknown error at method donor findOneById()');
    })
  },

  findAll: function() {
    db.Purchase.findAll().then(function(donors) {
      console.log("find all donors", donors);
    })
    .catch(function() {
        throw new Error('Unknown error at method donor findAll()');
    })
  }
}

module.exports = purchase;
var db = require('../index.js');

var purchase = {
  create: function(uid) {
    return db.Purchase.findOrCreate({
      where: { uid: uid },
      default: {
      }
    })
    .then(function(results) {
      return results[0].get({ plain: true });
    })
    .catch(function() {
      throw new Error('Unknown error at method purchase create()');
    })
  },

  findOneByEmail: function(email) {
    return db.Purchase.findOne({ where: { email: email } }).then(function(purchase) {
      // console.log("find a purchase", purchase);
      return purchase;
    })
    .catch(function() {
      throw new Error('Unknown error at method purchase findOneByEmail()');
    })
  },

  findOneById: function(id) {
    return db.Purchase.findById(id).then(function(purchase) {
      // console.log("find a purchase", purchase);
      return purchase;
    })
    .catch(function() {
      throw new Error('Unknown error at method purchase findOneById()');
    })
  },

  findAll: function() {
    return db.Purchase.findAll().then(function(purchases) {
      // console.log("find all purchases", purchases);
      return purchases;
    })
    .catch(function() {
      throw new Error('Unknown error at method purchase findAll()');
    })
  }
}

module.exports = purchase;
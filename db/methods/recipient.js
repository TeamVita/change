var db = require('../index.js');

var recipient = {
  create: function(recipient) {
    return db.Recipient.findOrCreate({
      where: { 
        food: 0,
        cloth: 0,
        password: recipient.password,
        pin: recipient.pin
      },
      default: {
      }
    })
    .then(function(results, created) {
      return results[0].get({ plain: true });
    })
    .catch(function() {
      throw new Error('Unknown error at method recipient create()');
    })
  },

  findOneById: function(id) {
    return db.Recipient.findById(id).then(function(recipient) {
      // console.log("find a recipient", recipient);
      return recipient;
    })
    .catch(function() {
      throw new Error('Unknown error at method recipient findOneById()');
    })
  },

  // FIX ME
  findOneByPin: function(pin) {
    return db.Recipient.findOne({ where: { pin: pin } }).then(function(recipient) {
      // console.log("find a recipient", recipient);
      return recipient;
    })
    .catch(function() {
      throw new Error('Unknown error at method recipient findOneByPin()');
    })
  },

  findAll: function() {
    return db.Recipient.findAll().then(function(recipients) {
      // console.log("find all recipients", recipients);
      return recipients;
    })
    .catch(function() {
      throw new Error('Unknown error at method recipient findAll()');
    })
  },

  // amountType: food/cloth
  updateOneByPin: function(pin, chargedAmount, amountType){
    console.log("chargedAmount", chargedAmount);
    // refactoring using increment
    return db.Recipient.findOne({ where: { pin: pin } }).then(function(recipient) {
      console.log("updateOneByPin", recipient.get());
      return recipient.decrement(amountType, {by: chargedAmount}).then(function(recipient) {
        console.log("After decrementing", recipient.get());
        return recipient.get();
      });
    })    
  }
}

module.exports = recipient;
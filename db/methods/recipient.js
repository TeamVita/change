var db = require('../index.js');

var recipient = {
  create: function(recipient) {

    return db.Recipient.findOrCreate({
      where: {
        food: 0,
        clothing: 0,
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

  // vendorType: food/clothing
  decrementOneByPin: function(pin, chargedAmount, vendorType){
    return db.Recipient.findOne({ where: { pin: pin } }).then(function(recipient) {
      // console.log("updateOneByPin", recipient.get());
      return recipient.decrement(vendorType, {by: chargedAmount}).then(function(recipient) {
        // console.log("After decrementing", recipient.get());
        return recipient.get();
      })
    })
    .catch(function() {
      throw new Error('Unknown error at method recipient updateOneByPin()');
    })
  },

  // vendorType: food/clothing
  incrementOneByPin: function(pin, donateAmount, vendorType){
    return db.Recipient.findOne({ where: { pin: pin } }).then(function(recipient) {
      // console.log("updateOneByPin", recipient.get());
      return recipient.increment(vendorType, {by: donateAmount}).then(function(recipient) {
        // console.log("After incrementing", recipient.get());
        return recipient.get();
      })
    })
    .catch(function() {
      throw new Error('Unknown error at method recipient updateOneByPin()');
    })
  },

  // Get currently maximum id from database
  findMaxId: function() {
    // query maximum id
    return db.Recipient.max('id').then(function(maxId) {
      return maxId || 0;
    })
    .catch(function() {
      throw new Error('Unknown error at method recipient findMaxId()');
    })
  }
}

module.exports = recipient;

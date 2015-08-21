var db = require('../index.js');

var recipient = {
  create: function(recipient) {
    return db.Recipient.findOrCreate({
      where: { 
        firstName: recipient.firstName, 
        lastName: recipient.lastName,
        totalAmount: 0,
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

  // TODO: Fix this one by only requiring one entry
  findOneByName: function(firstName, lastName) {
    return db.Recipient.findOne({ where: { firstName: firstName, lastName: lastName } }).then(function(recipient) {
      // console.log("find a recipient", recipient);
      return recipient;
    })
    .catch(function() {
      throw new Error('Unknown error at method recipient findOneByEmail()');
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

  findOneByPin: function(pin) {
    return db.Recipient.findOne({ where: { pin: pin } }).then(function(recipient) {
      // console.log("find a recipient", recipient);
      return recipient;
    })
    .catch(function() {
      throw new Error('Unknown error at method recipient findOneByEmail()');
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
  }
}

module.exports = recipient;
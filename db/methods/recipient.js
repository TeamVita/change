var db = require('../index.js');

var recipient = {
  create: function(recipient) {
    db.Recipient.findOrCreate({
      where: { firstName: recipient.firstName, lastName: recipient.lastName },
      default: {
      }
    })
    .then(function(results) {
      return results[0].get({ plain: true });
    })
    .catch(function() {
        throw new Error('Unknown error at method recipient create()');
    })
  },

  // TODO: Fix this one by only requiring one entry
  findOneByName: function(firstName, lastName) {
    db.Recipient.findOne({ where: { firstName: firstName, lastName: lastName } }).then(function(recipient) {
      console.log("find a recipient", recipient);
    })
    .catch(function() {
        throw new Error('Unknown error at method recipient findOneByEmail()');
    })
  },

  findOneById: function(id) {
    db.Recipient.findById(id).then(function(recipient) {
      console.log("find a recipient", recipient);
    })
    .catch(function() {
        throw new Error('Unknown error at method recipient findOneById()');
    })
  },

  findOneByPin: function(pin) {
    db.Recipient.findOne({ where: { pin: pin } }).then(function(recipient) {
      console.log("find a recipient", recipient);
    })
    .catch(function() {
        throw new Error('Unknown error at method recipient findOneByEmail()');
    })
  },

  findAll: function() {
    db.Recipient.findAll().then(function(recipients) {
      console.log("find all recipients", recipients);
    })
    .catch(function() {
        throw new Error('Unknown error at method recipient findAll()');
    })
  }
}

module.exports = recipient;
var db = require('./index.js');

var recipient = {
  create: function(recipient) {
    db.Recipient.findOrCreate({
      where: { 
        firstName: recipient.firstName,
        lastName: recipient.lastName,
        pin: recipient.pin,
        totalAmount: 0
      },
      default: {
      }
    })
    .then(function(results) {
      // console.log("return first result", results[0].get({ plain: true }))
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
      throw new Error('Unknown error at method recipient findOneByPin()');
    })
  },

  findAll: function() {
    db.Recipient.findAll().then(function(recipients) {
      console.log("find all recipients", recipients);
    })
    .catch(function() {
      throw new Error('Unknown error at method recipient findAll()');
    })
  },

  updateById: function(key, value, id) {
    // TODO: key verfication
    var updateObj = {};
    updateObj[key] = value;
    db.Recipient.update(updateObj, { 
      where : { 
        uid: id 
      } 
    }).then(function(donor) { 
       console.log("update the donor", donor);
    })
    .catch(function() {
      throw new Error('Unknown error at method donor updateById()');
    })
  },

  // TEST ONLY!
  deleteById: function(id) {
    db.Recipient.destroy({
      where: {
        uid: id
      }
    }).then(function(affectedRows) {
      // console.log('affectedRows', affectedRows);
    })
    .catch(function() {
      throw new Error('Unknown error at method recipient updateById()');
    })
  },

  // TEST ONLY!
  deleteAll: function() {
    db.Recipient.findAll().then(function(recipients) {
      for (var i = recipients.length - 1; i >= 0; i--) {
        recipients[i].destroy().then(function() {

        }).catch(function() {
          throw new Error('Unknown error at method recipient deleteAll destroy()');
        })
      };
    })
    .catch(function() {
      throw new Error('Unknown error at method recipient deleteAll findAll()');
    })
  }
}

module.exports = recipient;
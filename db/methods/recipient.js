var db = require('../index.js');

var recipient = {
  create: function(recipient) {
    return db.Recipient.findOrCreate({
      where: { 
        food: 0,
        cloth: 0,
        password: password,
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
  },

  // amountType: food/cloth
  updateOneByPin: function(pin, newAmount, amountType){
    if ( amountType !== 'food' || amountType !== 'cloth' ) {
      console.error('In updateByPin() amountType should either be "food" or "cloth" ');
      return null;
    }

    db.Recipient.update({ amountType: new_amount }, {
      where: {
        pin: pin
      }
    }).then(function(recipient){
      return recipient;
    })
    .catch(function(){
      throw new Error('Unknow errar at method recipient updateByPin');
    })
  }
}

module.exports = recipient;
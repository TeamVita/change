var Promise = require('bluebird');
var models = require('../../db');
// TODO: utility functions
var utility = {
  pin: 0,

  initDB: function() {
    if (process.env.dev === 'development') {
      // Proceed with caution! DROP TABLES!
      return models.sequelize.sync({ force: true });  
    } else {
      return models.sequelize.sync()
    }
  },

  generatePin: function() {
    if (this.pin === undefined) {
      return null;
    }
    var pin = this.pin
    this.pin += 1;
    return pin;
  },

  setUserType: function(req, res, next) {
    // verification
    // 'donor' by default
    req.body.userType = (req.body.userType === 'org' || req.query.hasOwnProperty('org')) ? 'org' : 'donor';
    req.body.signup = (req.body.signup || req.query.hasOwnProperty('signup'));
    next();
  },

  createRecipient: function(password, pin) {
    // verification
    var pin = pin || this.generatePin();
    if (pin < this.pin || pin > 9999) {
      console.log("In utility createRecipient(), invalid PIN number! Call built-in pin generator.");
      pin = this.generatePin();
    };
    console.log("createRecipient pin", pin);
    var recipient = {
      password: password,
      pin: pin
    };

    return models.recipient.create(recipient).then(function(obj) {
      console.log("Received created recipient from db", obj);
      return obj;
    });
  },

  findRecipientByPin: function(pin) {
    // Pin number out of range?
    if (typeof pin !== 'number') {
      console.error("In utility findRecipientByPin(), pin number has to be a javascript number!");
      return null;
    }
    return models.recipient.findOneByPin(pin).then(function(recipient) {
      return recipient.get();
    });
  },

  // Specific amountType: "food"/"cloth" to charge certain recipient with PIN tags
  chargeRecipientByPin: function(pin, chargedAmount, amountType) {
    if ( amountType !== 'food' && amountType !== 'cloth' ) {
      console.error('In chargeRecipientByPin() amountType should either be "food" or "cloth" ');
      return null;
    };

    return models.recipient.updateOneByPin(pin, chargedAmount, amountType);
  }
}

module.exports = utility;
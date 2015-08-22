var Promise = require('bluebird');
var models = require('../../db');
// TODO: utility functions
var utility = {
  // db init

  // TODO: pin generator
  setUserType: function(req, res, next) {
    // verification
    // 'donor' by default
    req.body.userType = (req.body.userType === 'org' || req.query.hasOwnProperty('org')) ? 'org' : 'donor';
    req.body.signup = (req.body.signup || req.query.hasOwnProperty('signup'));
    next();
  },

  createDonor: function(req, res, next) {
    // varification
    var email = req.body.email;
    var password = req.body.password;
    var firstName = req.body.firstName || null;
    var lastName = req.body.lastName || null;
    // check if donor exists or not

    // if no, create user

    // TODO: bcrypt to hash password
    var donor = {
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName || null,
      lastName: req.body.lastName || null
    };

    models.donor.create(donor).then(function(obj) {
      console.log("Received created donor from db", obj);
    });

    // next();
  },

  // TODO: remove test code after research
  createDonation: function(req, res, next) {
    var donorEmail = req.body.email || 'some@mail.com' // or search from database
    var recipientId = 1;             // TODO: fix user id look up
    var amount = req.body.amout || 100;

    models.donation.create(donorEmail, recipientId, amount)
    .then(function(recipient) {
      console.log("Received corresponding recipient from db", recipient);
    })

  },

  // TODO: PIN generator
  createRecipient: function(password) {
    // verification
    var pin = pin || 1000;
    var recipient = {
      password: password
    };

    return models.recipient.create(recipient).then(function(obj) {
      console.log("Received created recipient from db", obj);
      return obj;
    });
  },

    return models.recipient.create(recipient).then(function(obj) {
      console.log("Received created recipient from db", obj);
      return obj;
    });
  },

  findRecipientByPin: function(pin) {
    // TODO: guarding code
    return models.recipient.findOneByPin(pin).then(function(recipient) {
      return recipient.get();
    });
  },

  // Specific amountType: "food"/"cloth" to charge certain recipient with PIN tags
  chargeRecipientByPin: function(pin, chargedAmount, amountType) {
    if ( amountType !== 'food' || amountType !== 'cloth' ) {
      console.error('In updateByPin() amountType should either be "food" or "cloth" ');
      return null;
    };

    this.findRecipientByPin(pin).then(function(recipient) {
      if (recipient) {
        return recipient;
      }
      console.error("In utility chargedRecipientByPin(), cannot find recipient with PIN", pin);
    })
    .then(function(recipient) {
      if (recipient) {
        var newAmount = recipient.get().amountType - chargedAmount;
        if (newAmount < 0) {
          console.error("In utility chargedRecipientByPin(), insufficient fund! for recipient with PIN", pin);
          return null;
        }
        return models.recipient.updateOneByPin(pin, newAmount, amountType);
      };
    });
  }
}

module.exports = utility;
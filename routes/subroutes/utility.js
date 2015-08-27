var Promise = require('bluebird');
var models = require('../../db');
var dictionary = require('../../dictionary');
// TODO: utility functions
var utility = {

  organizationType: {
    shelter: "shelter",
    vendor: "vendor"
  },

  initDB: function() {
    if (process.env.dev === 'development') {
      // Proceed with caution! DROP TABLES!
      // return models.sequelize.sync();
      return models.sequelize.sync({ force: true });
    } else {
      return models.sequelize.sync({ force: true });
      return models.sequelize.sync();
    }
  },

  toFourDigitsString: function(num) {

    if (typeof num !== 'number') {
      return null;
    }

    var fourDigits = num.toString();

    var _requiredLen = 4;
    var paddingLen = _requiredLen - fourDigits.length;
    for (var i = 0; i < paddingLen; i++) {
      fourDigits = "0" + fourDigits;
    }

    return fourDigits;
  },

  generatePin: function() {
    var self = this;
    return models.recipient.findMaxId().then(function(maxId) {
      // transfer id to four digits string
      return self.toFourDigitsString(maxId  + 1);
    });
  },

  generatePassword: function() {
    var index = Math.floor(Math.random() * (dictionary.words.length - 1));
    return dictionary.words[index];
  },

  checkPin: function(pin) {
    numPin = parseInt(pin);
    if (typeof numPin !== 'number' || numPin > 9999) {
      console.error("Invalid PIN number");
      return null;
    }
    return pin;
  },

  checkVendorType: function(vendorType) {
    if (typeof vendorType !== 'string') {
      return null;
    }

    vendorType = vendorType.toLowerCase();

    if (vendorType !== 'food' && vendorType !== 'clothing') {
      console.error('Invalid Vendor Type');
      return null;
    }
    return vendorType;
  },

  checkOrgType: function(organization) {
    if (organizationType[organizationType]) {
      return organization;
    };
    return null;
  },

  checkEmail: function(email) {
    if (email === undefined) {
      console.error('In createVendor(), require email to create vendor');
      return null;
    }
    return email;
  },

  setUserType: function(req, res, next) {
    // verification
    // 'donor' by default
    req.body.userType = (req.body.userType === 'org' || req.query.hasOwnProperty('org')) ? 'org' : 'donor';
    req.body.signup = (req.body.signup || req.query.hasOwnProperty('signup'));
    next();
  },

  createRecipient: function(password, pin) {
    if(!this.checkPin(pin)) {
      return null;
    }
    var recipient = {
      password: password,
      pin: pin
    };

    return models.recipient.create(recipient).then(function(recipient) {
      console.log("Received created recipient from db", recipient);
      return recipient;
    });
  },

  findRecipientByPin: function(pin, vendorType) {
    if(!this.checkPin(pin)) {
      return null;
    }

    if(!this.checkVendorType(vendorType)) {
      return null;
    }

    var wasFound = models.recipient.findOneByPin(pin);
    return wasFound.then(function(recipient) {
      // console.log("Before return", recipient.get().vendorType);
      // return recipient.get()[vendorType];
      if (recipient) {
        return recipient.get();
      } else {
        return recipient;
      }
    });
  },

  // Specific vendorType: "food"/"clothing" to charge certain recipient with PIN tags
  // chargedAmount is how much money will be reduced on recipient balance
  chargeRecipientByPin: function(pin, chargedAmount, vendorType) {
    if(!this.checkPin(pin)) {
      return null;
    }

    if(!this.checkVendorType(vendorType)) {
      return null;
    }

    return models.recipient.decrementOneByPin(pin, chargedAmount, vendorType);
  },

  // Specific vendorType: "food"/"clothing" to charge certain recipient with PIN tags
  // chargedAmount is how much money will be reduced on recipient balance
  donateToRecipientByPin: function(pin, donateAmount, vendorType) {
    if(!this.checkPin(pin)) {
      return null;
    }

    if(!this.checkVendorType(vendorType)) {
      return null;
    }

    var wasFound = this.findRecipientByPin(pin, vendorType);
    return wasFound.then(function(recipient) {
      if (recipient) {
        return models.recipient.incrementOneByPin(pin, donateAmount, vendorType);
      } else {
        return recipient;
      }
    });

  },

  createVendor: function(email, password, username, vendorType) {
    if (email === undefined) {
      console.error('In createVendor(), require email to create vendor');
      return null;
    }

    if(!this.checkVendorType(vendorType)) {
      return null;
    }

    var vendorInfo = {
      email: email,
      password: password,
      username: username,
      vendorType: vendorType
    };

    return models.vendor.create(vendorInfo).then(function(vendor) {
      console.log("Received created vendor from db", vendor);
      return vendor;
    });
  },

  createShelter: function(email, password, username) {
    if (email === undefined) {
      console.error('In createShelter, require email to create shelter');
      return null;
    }

    var shelterInfo = {
      email: email,
      password: password,
      username: username
    };

    return models.shelter.create(shelterInfo).then(function(shelter) {
      console.log("Received created shelter from db", shelter);
      return shelter;
    });
  },

  findAccountByEmail: function(email, organization) {
    if (organization === 'shelter') {
      return models.shelter.findOneByEmail(email);
    } else if (organization === 'vendor') {
      return models.vendor.findOneByEmail(email);
    } else {
      console.error('Invalid organization type');
    }
  }

};

module.exports = utility;

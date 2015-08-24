var Promise = require('bluebird');
var models = require('../../db');
// TODO: utility functions
var utility = {
  pin: 0,

  organizationType: {
    shelter: "shelter",
    vendor: "vendor"
  },

  initDB: function() {
    if (process.env.dev === 'development') {
      // Proceed with caution! DROP TABLES!
      return models.sequelize.sync();
      // return models.sequelize.sync({ force: true });
    } else {
      return models.sequelize.sync();
    }
  },

  generatePin: function() {
    if (this.pin === undefined) {
      return null;
    }
    var pin = this.pin;
    this.pin += 1;
    return pin;
  },

  checkPin: function(pin) {
    if (typeof pin !== 'number' || pin < this.pin || pin > 9999) {
      console.error("Invalid PIN number");
      return null;
    }
    return pin;
  },

  checkVendorType: function(vendorType) {
    if (vendorType !== 'Food' && vendorType !== 'Clothing') {
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
  }

  setUserType: function(req, res, next) {
    // verification
    // 'donor' by default
    req.body.userType = (req.body.userType === 'org' || req.query.hasOwnProperty('org')) ? 'org' : 'donor';
    req.body.signup = (req.body.signup || req.query.hasOwnProperty('signup'));
    next();
  },

  createRecipient: function(password, pin) {
    // verification
    if(!this.checkPin(pin)) {
      pin = this.generatePin();
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

    return models.recipient.findOneByPin(pin).then(function(recipient) {
      return recipient.get().vendorType;
    });
  },

  // Specific vendorType: "food"/"cloth" to charge certain recipient with PIN tags
  // chargedAmount is how much money will be reduced on recipient balance
  chargeRecipientByPin: function(pin, chargedAmount, vendorType) {
    if(!this.checkPin(pin)) {
      return null;
    }

    if(!this.checkVendorType(vendorType)) {
      return null;
    }

    return models.recipient.updateOneByPin(pin, chargedAmount, vendorType);
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

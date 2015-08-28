var db = require('../index.js');

var Vendor = {
  create: function(vendor) {
    return db.Vendor.findOrCreate({
      where: {
        email: vendor.email,
        username: vendor.username,
        password: vendor.password,
        vendorType: vendor.vendorType
      },
      default: {
      }
    })
    .then(function(results, created) {
      return results[0].get({ plain: true });
    })
    .catch(function() {
      throw new Error('Unknown error at method Vendor create()');
    });
  },

  findOneById: function(id) {
    return db.Vendor.findById(id).then(function(Vendor) {
      return vendor;
    })
    .catch(function() {
      throw new Error('Unknown error at method vendor findOneById()');
    });
  },

  findOneByEmail: function(email) {
    console.log('EMAIL: ' + email);
    return db.Vendor.findOne({ where: { email: email } }).then(function(vendor) {
      if (vendor) {
        return vendor.get();
      } else {
        return vendor;
      }
    })
    .catch(function(error) {
      console.log('ERROR: ' + error);
      throw new Error('Unknown error at method vendor findOneByEmail()');
    });
  },

  findAll: function() {
    return db.Vendor.findAll().then(function(vendors) {
      // console.log("find all vendors", vendors);
      return vendors;
    })
    .catch(function() {
      throw new Error('Unknown error at method vendor findAll()');
    });
  }
};

module.exports = Vendor;

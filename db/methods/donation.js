var db = require('../index.js');
var Promise = require('bluebird');

var donation = {
  create: function(donor, recipient, amount) {
    // input validation
    return db.orm.transaction(function(t) {
      return Promise.all([
        db.Donor.find({ where: { id: donor } }, {transaction: t}),
        db.Recipient.find({ where: { id: recipient } }, {transaction: t})
      ]).spread(function(_donor, _recipient) {
        var _amount = _recipient.get().amount - amount;
        // simple validation
        if (!_donor || !_recipient) {
          return null;
        };

        return Donation.create({ amount: amount }).then(function(donation) {
          _donor.setDonation(donation, {transaction: t});
          _recipient.setDonation(donation, {transaction: t});
          donation.setDonor(user, {transaction: t});
          donation.setRecipient(recipient, {transaction: t});
          // return recipient.setDataValue('amount', updateAmount.toString(), {transaction: t});
          return recipient.set('amount', updateAmount.toString(), {transaction: t});  
        });
      })
    })
    .then(function(results) {
      return results[0].get({ plain: true });
    })
    .catch(function(err) {
      // throw new Error('Unknown error at method donation create()');
      console.error(err);
    })
  },
  
  findOneById: function(id) {
    db.Donation.findById(id).then(function(donor) {
      console.log("find a donor", donor);
    })
    .catch(function() {
      throw new Error('Unknown error at method donation findOneById()');
    })
  },

  // TODO: How to fix search by donor id?
  findOneByDonor: function(donorId) {
    // db.Donation.findOne({ where: { email: email } }).then(function(donor) {
    //   console.log("find a donor", donor);
    // })
    // .catch(function() {
    //   throw new Error('Unknown error at method donor findOneByEmail()');
    // })
  },  

  findAll: function() {
    db.Donation.findAll().then(function(donors) {
      console.log("find all donors", donors);
    })
    .catch(function() {
      throw new Error('Unknown error at method donation findAll()');
    })
  }
}

module.exports = donation;
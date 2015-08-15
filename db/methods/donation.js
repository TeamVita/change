var db = require('../index.js');
var Promise = require('bluebird');

var donation = {
  create: function(donorName, recipientName, amount) {
    return db.sequelize.transaction(function(t) {
      return Promise.all([
        db.Donor.find({ where: { firstName:donorName } }, {transaction: t}),
        db.Recipient.find({ where: { firstName:recipientName } }, {transaction: t})
      ])
      .spread(function(donor, recipient) {
        console.log("With in create() donor", donor.get());
        console.log("With in create() recipient", recipient.get());
        if (donor === undefined || recipient === undefined) {
          return null;
        }
        // console.log("current recipient during donation", recipient.get());
        var totalAmount = parseInt(recipient.get({transaction: t}).totalAmount) + amount;
        return db.Donation.create({ amount: amount }, {transaction: t}).then(function(donation) {
          donor.setDonation(donation, {transaction: t});
          recipient.setDonation(donation, {transaction: t});
          donation.setDonor(donor, {transaction: t});
          donation.setRecipient(recipient, {transaction: t});
          // return recipient.setDataValue('amount', updateAmount.toString(), {transaction: t});  
          return recipient.updateAttributes({'totalAmount': totalAmount}, {transaction: t});
        });
      })
      .then(function(recipient) {
        // console.log("recipient after action", recipient.get());
        console.log("In commit", recipient.get());
        return recipient;
        // t.commit();
      })
      .catch(function(err) {
        console.error("In makeDonation()", err);
      })
    })  
  },
  
  findOneById: function(id) {
    return db.Donation.findById(id).then(function(donor) {
      console.log("find a donor", donor);
      return donor;
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
    return db.Donation.findAll().then(function(donors) {
      // console.log("find all donors", donors);
      return donors;
    })
    .catch(function() {
      throw new Error('Unknown error at method donation findAll()');
    })
  },

  deleteAll: function() {
    db.Donation.findAll().then(function(donations) {
      for (var i = donations.length - 1; i >= 0; i--) {
        donations[i].destroy().then(function() {

        }).catch(function() {
          throw new Error('Unknown error at method donor deleteAll destroy()');
        })
      };
    })
    .catch(function() {
      throw new Error('Unknown error at method donor deleteAll findAll()');
    })
  }
}

module.exports = donation;
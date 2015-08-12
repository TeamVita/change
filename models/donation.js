var db = require('./index.js');

var donation = {
  // from donor id integer
  // to recipient id integer
  // amount: dollar mount
  create: function(donation) {
    db.Donation.findOrCreate({
      where: { 
        // donorUid: donation.from,
        // recipientUid: donation.to,
        amount: donation.amount
      },
      default: {
      }
    })
    .then(function(results) {
      // console.log(results[0].get({ plain: true }));
      return results[0].get({ plain: true });
    })
    .catch(function() {
      throw new Error('Unknown error at method donation create()');
    })
  },
  
  findOneById: function(id) {
    db.Donation.findById(id).then(function(donation) {
      console.log("find a donation", donation);
    })
    .catch(function() {
      throw new Error('Unknown error at method donation findOneById()');
    })
  },

  findOneByDonorId: function(donorId) {
    db.Donation.findOne({ where: { fromDonor: donorId } }).then(function(donation) {
      console.log("find a donation", donation);
    })
    .catch(function() {
      throw new Error('Unknown error at method donation findOneByEmail()');
    })
  },

  // FIX: recipientId or pin
  findOneByRecipientId: function(recipientId) {
    db.Donation.findOne({ where: { toRecipient: recipientId } }).then(function(donation) {
      console.log("find a donation", donation);
    })
    .catch(function() {
      throw new Error('Unknown error at method donation findOneByEmail()');
    })
  },  

  findAll: function() {
    db.Donation.findAll().then(function(donations) {
      console.log("find all donations", donations);
    })
    .catch(function() {
      throw new Error('Unknown error at method donation findAll()');
    })
  }
}

module.exports = donation;
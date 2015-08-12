var db = require('./index.js');

var donation = {
  create: function(uid) {
    db.Donation.findOrCreate({
      where: { uid: uid },
      default: {
        // firstName: donor.firstName,
        // lastName: donor.lastName,
        // fbId: donor.fbId
      }
    })
    .then(function(results) {
      return results[0].get({ plain: true });
    })
    .catch(function() {
        throw new Error('Unknown error at method donation create()');
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
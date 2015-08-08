var db = require('./index.js');

// donation
var save = function(donor) {
  db.Donor.findOrCreate({
    where: { email: donor.email },
    default: {
      firstName: donor.firstName,
      lastName: donor.lastName,
      fbId: donor.fbId
    }
  })
  .then(function(results) {
    return results[0].get({ plain: true });
  })
  .catch(function() {
      throw new Error('Unknown error at method donor save()');
  })
};

var findDonorByEmail = function(DonorEmail) {
  db.Donor.findOne({ where: { email: donor.email} }).then(function(donor) {
    console.log("find a donor", donor);
  });
};


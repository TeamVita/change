var db = require('./index.js');

// TODO: rename methods in CRUD pattern
var donor = {
  create: function(donor) {
    db.Donor.findOrCreate({
      where: { 
        email: donor.email ,
        firstName: donor.firstName,
        lastName: donor.lastName
      },
      default: {
        fbId: donor.fbId
      }
    })
    .then(function(results) {
      console.log("return first result", results[0].get({ plain: true }))
      return results[0].get({ plain: true });
    })
    .catch(function() {
      throw new Error('Unknown error at method donor create()');
    })
  },

  findOneByEmail: function(email) {
    db.Donor.findOne({ where: { email: email } }).then(function(donor) {
      console.log("find a donor", donor);
    })
    .catch(function() {
      throw new Error('Unknown error at method donor findOneByEmail()');
    })
  },

  findOneById: function(id) {
    db.Donor.findById(id).then(function(donor) {
      console.log("find a donor", donor);
    })
    .catch(function() {
      throw new Error('Unknown error at method donor findOneById()');
    })
  },

  findAll: function() {
    db.Donor.findAll().then(function(donors) {
      // console.log("find all donors", donors);
    })
    .catch(function() {
      throw new Error('Unknown error at method donor findAll()');
    })
  },

  updateEmail: function(email, id) {
    db.Donor.update({ email: email }, { 
      where : { 
        uid: id 
      } 
    }).then(function(donor) { 
       // console.log("update the donor", donor);
     })
    .catch(function() {
      throw new Error('Unknown error at method donor updateEmail()');
    })
  } 
}

module.exports = donor;
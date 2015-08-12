var db = require('./index.js');

// TODO: rename methods in CRUD pattern
var donor = {
  create: function(donor) {
    return db.Donor.findOrCreate({
      where: {
        email: donor.email,
        firstName: donor.firstName,
        lastName: donor.lastName,
        fbId: donor.fbId
      },
      default: {
      }
    })
    .then(function(results) {
      // console.log(results[0].get({ plain: true }));
      return results[0].get({ plain: true });
    })
    .catch(function() {
      throw new Error('Unknown error at method donor create()');
    })
  },

  findOneByEmail: function(email) {
    return db.Donor.findOne({ where: { email: email } }).then(function(donor) {
      return donor;
    })
    .catch(function() {
      throw new Error('Unknown error at method donor findOneByEmail()');
    })
  },

  findOneById: function(id) {
    db.Donor.findById(id).then(function(donor) {
      return donor;
    })
    .catch(function() {
      throw new Error('Unknown error at method donor findOneById()');
    })
  },

  findAll: function() {
    return db.Donor.findAll().then(function(donors) {
      // donors.forEach(function(donor) {
        // console.log(donors);
        return donors;
      // });
    })
    .catch(function() {
      throw new Error('Unknown error at method donor findAll()');
    })
  },

  find: function(someStr) {
    db.Donor.find({ email:someStr }).then(function() {
      // console.log("I am here!!!!",someStr);
    });
  },

  updateEmailById: function(email, id) {
    db.Donor.update({ email: email }, { 
      where : { 
        id: id
      } 
    }).then(function(donor) { 
       // console.log("update the donor", donor);
     })
    .catch(function() {
      throw new Error('Unknown error at method donor updateEmail()');
    })
  },

  updateById: function(key, value, id) {
    // TODO: key verfication
    var updateObj = {};
    updateObj[key] = value;
    db.Donor.update(updateObj, { 
      where : { 
        id: id 
      } 
    }).then(function(donor) { 
       // console.log("update the donor", donor);
     })
    .catch(function() {
      throw new Error('Unknown error at method donor updateById()');
    })
  },

  // TEST ONLY!
  deleteById: function(id) {
    db.Donor.destroy({
      where: {
        id: id
      }
    }).then(function(affectedRows) {
      // console.log('')
    })
    .catch(function() {
      throw new Error('Unknown error at method donor updateById()');
    })
  },

  // TEST ONLY!
  deleteAll: function() {
    db.Donor.findAll().then(function(donors) {
      // TODO: Right way to do for loop in promise?
      for (var i = donors.length - 1; i >= 0; i--) {
        donors[i].destroy().then(function() {

        }).catch(function() {
          throw new Error('Unknown error at method donor deleteAll destroy()');
        })
      };
    })
    .catch(function() {
      throw new Error('Unknown error at method donor deleteAll findAll()');
    })
  },

  find: function() {
    db.Donor.find({ where: { email: "myEmail" } }).then(function(donor) {
      console.log("I am here");
      console.log(donor.get());
    })
  }
}

module.exports = donor;
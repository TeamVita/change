var db = require('../index');

// TODO: refactor common methods
// TODO: check if exists?
var donor = {
  create: function(donor) {
    // TODO: verification
    return db.Donor.findOrCreate({ where: {
      email: donor.email} 
    })
    .spread(function(_donor, created) {
      // console.log(created);
      return _donor.get({
        plain: true
      });
    })
    .catch(function() {
      throw new Error('Unknown error at method donor create()');
    })
  },

  findOneByEmail: function(email) {
    return db.Donor.findOne({ where: { email: email } }).then(function(donor) {
      // console.log("find a donor", donor);
      return donor;
    })
    .catch(function() {
      throw new Error('Unknown error at method donor findOneByEmail()');
    })
  },

  findOneById: function(id) {
    return db.Donor.findById(id).then(function(donor) {
      // console.log("find a donor", donor);
      return donor;
    })
    .catch(function() {
      throw new Error('Unknown error at method donor findOneById()');
    })
  },

  findAll: function() {
    return db.Donor.findAll().then(function(donors) {
      // console.log("find all donors", donors);
      return donors;
    })
    .catch(function() {
      throw new Error('Unknown error at method donor findAll()');
    })
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
       console.log("update the donor", donor);
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
  }

}

module.exports = donor;
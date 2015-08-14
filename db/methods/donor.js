var db = require('../index');

var donor = {
  create: function(donor) {
    return db.Donor.create({ 
      firstName: donor.firstName, 
      lastName: donor.lastName 
    }).then(function(result) {
      // return result[0].get({ plain: true });
      return result[0];
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
      console.log("find all donors", donors);
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

module.exports.donor = donor;
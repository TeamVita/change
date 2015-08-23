var db = require('../index.js');

var Shelter = {
  create: function(shelter) {
    return db.Shelter.findOrCreate({
      where: {
        email: shelter.email,
        name: shelter.username,
        password: shelter.password
      },
      default: {
      }
    })
    .then(function(results, created) {
      return results[0].get({ plain: true });
    })
    .catch(function() {
      throw new Error('Unknown error at method shelter create()');
    });
  },

  findOneById: function(id) {
    return db.Shelter.findById(id).then(function(shelter) {
      return shelter;
    })
    .catch(function() {
      throw new Error('Unknown error at method shelter findOneById()');
    });
  },

  findOneByEmail: function(email) {
    return db.Shelter.findOne({ where: { email: email } }).then(function(shelter) {
      console.log(shelter);
      return shelter;
    })
    .catch(function() {
      throw new Error('Unknown error at method shelter findOneByEmail()');
    });
  },

  findAll: function() {
    return db.Shelter.findAll().then(function(shelters) {
      // console.log("find all shelters", shelters);
      return shelters;
    })
    .catch(function() {
      throw new Error('Unknown error at method shelter findAll()');
    });
  }
};

module.exports = Shelter;

var Sequalize = require('sequalize');
var orm = new Sequalize(process.env.DATABASE_URL || 'sqlite://ChangeDB.sqlite');

orm.authenticate()
  // .then(function() {
  //   console.log('Connection to db successful!');
  //  })
  .catch(function(err) {
    console.log('Connection to db failed: ', err);
  })
  .done();


var User = orm.define('users', {
  first_name: {
    type: Sequelize.STRING
  },

  last_name: {
    type: Sequelize.STRING
  },

  email: {
    type: Sequelize.STRING
  },

  password: {
    type: Sequelize.STRING
  },

  total_donations: {
    type: Sequelize.INTEGER
  },

  profile_image: {
    type: Sequelize.STRING,
    defaultValue: '/img/placeholder.jpg'
  },

  achievments: {
    type: Sequelize.INTEGER
  },

  score: {
    type: Sequelize.INTEGER
  }
});

var Donation = orm.define('donations', {

})
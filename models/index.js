// var Sequalize = require('sequalize');
var orm = new Sequalize(process.env.DATABASE_URL || 'sqlite://ChangeDB.sqlite');
// var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
// var orm = new Sequalize(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/todo');

orm.authenticate()
  // .then(function() {
  //   console.log('Connection to db successful!');
  //  })
  .catch(function(err) {
    console.log('Connection to db failed: ', err);
  })
  .done();


var User = orm.define('users', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  firstName: {
    type: Sequelize.STRING
  },

  lastName: {
    type: Sequelize.STRING
  },

  email: {
    type: Sequelize.STRING
  },

  password: {
    type: Sequelize.STRING
  },

  totalDonations: {
    type: Sequelize.DECIMAL
  },

  profileImage: {
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
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  fromUser: {
    type: Sequelize.INTEGER,
    references: 'users',
    referencesKey: 'uid'
  },

  
})
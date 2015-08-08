var Sequelize = require('sequelize')
  , orm = new Sequelize('database_name', 'username', 'password', {
      dialect: "postgres", // or 'sqlite', 'mysql', 'mariadb'
      port:    5432, // or 5432 (for postgres)
    });

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });
  .done();


var User = orm.define('users', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

  totalDonations: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  profileImage: {
    type: Sequelize.STRING,
    defaultValue: '/img/placeholder.jpg'
  },

  achievements: {
    type: Sequelize.INTEGER
  },

  score: {
    type: Sequelize.INTEGER
  }
});

var Donation = orm.define('donations', {
  donor_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  recipient_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  amount: {
    type: Sequelize.Integer,
    allowNull: false
  },

  date: {
    type: Sequelize.DATE,
    allowNull: false
  },

  receipt: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

var Recipient = orm.define('recipient', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING
  }

  accountBalance: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  pinNumber: {
    type: Sequelize.Integer,
    allowNull: false
  }
})
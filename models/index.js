var Sequelize = require('sequelize')
  , orm = new Sequelize('database_name', 'username', 'password', {
      dialect: "postgres", // or 'sqlite', 'mysql', 'mariadb'
      port:    5432, // or 5432 (for postgres)
    });

//Connecting the Database
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });
  .done();

//Creating the User Table
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
    type: Sequelize.DECIMAL(10, 2),
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

//Creating the Donation Table
var Donation = orm.define('donations', {
  donorId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  recipientId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  amount: {
    type: Sequelize.Integer,
    allowNull: false
  },

//dates are automatically created
  // date: {
  //   type: Sequelize.DATE,
  //   allowNull: false
  // },

  receipt: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

//Creating the Recipient Table
var Recipient = orm.define('recipients', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING
  }

  accountBalance: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0
  },

  pinNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});


//Creating the Purchase Table
var Purchase = orm.define('purchases', {
  venderName: {
    type: Sequelize.STRING
  },

  date: {
    type: Sequelize.DATE
  },

  amount: {
    type: Sequelize.DECIMAL(10, 2);
  }
});

var UserDonation = orm.define('userDonations', {

});

User.hasMany(Donation);
Donation.hasMany(User);
Recipient.hasMany(Donation);
Recipient.hasMany(Purchase);

// make the database
// delete database file to clear database
orm.sync();

exports.User = User;
exports.Donation = Donation;
exports.Recipient = Recipient;
exports.Purchase = Purchase;
exports.orm = orm;


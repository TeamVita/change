var Sequelize = require('sequelize');
// var orm = new Sequelize(process.env.DATABASE_URL || 'sqlite://ChangeDB.sqlite');
// var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
// var orm = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/todo');

var dbConfig = {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  dbName: 'testdb',
  username: 'postgres',
  password: 'postgres'
}

var connectionString = dbConfig.dialect + '://' + dbConfig.username + ':' + dbConfig.password + '@' + dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.dbName;
var orm = new Sequelize(process.env.DATABASE_URL || connectionString);

orm.authenticate()
  .then(function() {
    console.log('Connection to db successful!');
   })
  .catch(function(err) {
    console.error('Connection to db failed: ', err);
  })
  .done();

var Donor = orm.define('donors', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  email: {
    type: Sequelize.STRING
  },

  username: {
    type: Sequelize.STRING
  },
  
  password: {
    type: Sequelize.STRING
  },

  firstName: {
    type: Sequelize.STRING
  },

  lastName: {
    type: Sequelize.STRING
  },

  fbId: {
    type: Sequelize.STRING
  },

  totalDonations: {
    type: Sequelize.DECIMAL(10, 2)
  },

  profileImage: {
    type: Sequelize.STRING
    // defaultValue: '/img/placeholder.jpg'
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

  fromDonor: {
    type: Sequelize.INTEGER,
    references: 'donors',
    referencesKey: 'uid'
  },

  toRecipient: {
    type: Sequelize.INTEGER,
    references: 'recipients',
    referencesKey: 'uid'
  },

  amount: {
    type: Sequelize.DECIMAL(10, 2)
  },

  timeStamp: {
    type: Sequelize.DATE, defaultValue: Sequelize.NOW
  }
});

var Recipient = orm.define('recipients', {
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

  totalAmount: {
    type: Sequelize.DECIMAL(10, 2)
  },

  pin: {
    // auto increment? avoid duplicate?
    type: Sequelize.INTEGER
  }
})

var Purchase = orm.define('purchases', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  fromRecipient: {
    type: Sequelize.INTEGER,
    references: 'recipients',
    referencesKey: 'uid'
  },

  amount: {
    type: Sequelize.DECIMAL(10, 2)
  },

  timeStamp: {
    type: Sequelize.DATE, defaultValue: Sequelize.NOW
  }

  // other purchase information obtained from purchase process
});

// join table definition?
// relation mapping
Donation.belongsTo(Donor); 
Donation.belongsTo(Recipient);
Purchase.belongsTo(Recipient);


orm.sync().catch(function() {
      throw new Error('Unknown error at orm sync');
    });

exports.Donor = Donor;
exports.Purchase = Purchase;
exports.Donation = Donation;
exports.Recipient = Recipient;
exports.orm = orm;
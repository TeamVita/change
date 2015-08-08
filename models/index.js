var Sequalize = require('sequalize');
// var orm = new Sequalize(process.env.DATABASE_URL || 'sqlite://ChangeDB.sqlite');
// var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
// var orm = new Sequalize(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/todo');

var dbConfig = {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  dbName: 'todo',
  username: 'postgres',
  password: 'postgres'
}

var connectionString = dbConfig.dialect + '://' + dbConfig.username + ':' + dbConfig.password + '@' + dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.dbName;
var orm = new Sequalize(process.env.DATABASE_URL || connectionString);
// var orm = new Sequalize(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/todo'); test url

orm.authenticate()
  // .then(function() {
  //   console.log('Connection to db successful!');
  //  })
  .catch(function(err) {
    console.log('Connection to db failed: ', err);
  })
  .done();

var Donor = orm.define('donor', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  email: {
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

  password: {
    type: Sequelize.STRING
  },

  fbId: {
    type: Sequelize.STRING
  },

  totalDonations: {
    type: Sequelize.DECIMAL
  },

  profileImage: {
    // type: Sequelize.STRING,
    // defaultValue: '/img/placeholder.jpg'
  },

  achievments: {
    type: Sequelize.INTEGER
  },

  score: {
    type: Sequelize.INTEGER
  }
});

var Donation = orm.define('donation', {
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

  toRecipient: {
    type: Sequelize.INTEGER,
    references: 'recipient',
    referencesKey: 'uid'
  },

  amount: {
    type: Sequelize.DECIMAL
  },

  timeStamp: {
    type: Sequelize.DATE, defaultValue: Sequelize.NOW
  }
});

var Recipient = orm.define('recipient', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  totalDonations: {
    type: Sequelize.DECIMAL
  },

  firstName: {
    type: Sequelize.STRING
  },

  lastName: {
    type: Sequelize.STRING
  },

  pin: {
    type: Sequelize.INTEGER
  }
});

var Purchase = orm.define('purchase', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  amount: {
    type: Sequelize.DECIMAL
  },

  timeStamp: {
    type: Sequelize.DATE, defaultValue: Sequelize.NOW
  }

  // other purchase information obtained from PayPal
});
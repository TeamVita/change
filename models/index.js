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

  email: Sequelize.STRING,

  username: Sequelize.STRING,
  
  password: Sequelize.STRING,

  firstName: Sequelize.STRING,

  lastName: Sequelize.STRING,

  fbId: Sequelize.STRING,

  totalDonations: Sequelize.DECIMAL(10, 2),

  profileImage: {
    type: Sequelize.STRING
    // defaultValue: '/img/placeholder.jpg'
  },

  achievments: Sequelize.INTEGER,

  score: Sequelize.INTEGER,
});

var Donation = orm.define('donations', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  amount: Sequelize.DECIMAL(10, 2),

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

  firstName: Sequelize.STRING,

  lastName: Sequelize.STRING,

  totalAmount: Sequelize.DECIMAL(10, 2),

  // auto increment? avoid duplicate?
  pin: Sequelize.INTEGER
})

var Purchase = orm.define('purchases', {
  uid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  amount: Sequelize.DECIMAL(10, 2),

  timeStamp: {
    type: Sequelize.DATE, defaultValue: Sequelize.NOW
  }

  // other purchase information obtained from purchase process
});

// relational mapping
// Donor.hasMany(Donation, { as: 'donation', foreignKey: 'donationId'});
// Donation.belongsTo(Donor, { as: 'donor', foreignKey: 'donationId' });
Donor.hasMany(Donation);
Donation.belongsTo(Donor);
Donation.belongsTo(Recipient, { as: 'recipient', foreignKey: 'donationId' });
Recipient.hasMany(Donation, { as: 'donation', foreignKey: 'donationId'});
Recipient.hasMany(Purchase, { as: 'purchase', foreignKey: 'purchaseId' });

// Relation verfication
User      = orm.define('User', {
                  username: Sequelize.STRING,
                  password: Sequelize.STRING
                });

Project   = orm.define('Project', {
                  title: Sequelize.STRING
                });

User.hasOne(Project);
Project.belongsTo(User);

orm.sync({ force: true }).then(function() {
  return User.create({ username: 'john', password: '1111' });
}).then(function(user1) {
  return User.find({ username: 'john' })
}).then(function(user) {
  console.log(user.get()); // Get returns a JSON representation of the user
});

orm.sync({ force: true }).then(function() { 
  return Project.create({ title: "New title" })
});

exports.Donor = Donor;
exports.Purchase = Purchase;
exports.Donation = Donation;
exports.Recipient = Recipient;
exports.orm = orm;
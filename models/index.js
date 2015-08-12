var Sequelize = require('sequelize');

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
  amount: Sequelize.DECIMAL(10, 2),

  timeStamp: {
    type: Sequelize.DATE, defaultValue: Sequelize.NOW
  }
});

var Recipient = orm.define('recipients', {

  firstName: Sequelize.STRING,

  lastName: Sequelize.STRING,

  totalAmount: Sequelize.DECIMAL(10, 2),

  // auto increment? avoid duplicate?
  pin: Sequelize.INTEGER
})

var Purchase = orm.define('purchases', {

  amount: Sequelize.DECIMAL(10, 2),

  timeStamp: {
    type: Sequelize.DATE, defaultValue: Sequelize.NOW
  }

  // other purchase information obtained from purchase process
});

Donor.hasMany(Donation, { as: "donation" });
Donation.belongsTo(Donor);
Recipient.hasMany(Donation, { as: 'donation' });
Donation.belongsTo(Recipient);
Recipient.hasMany(Purchase, { as: 'purchase' });

Donor.sync();
Donation.sync();
Recipient.sync();
Purchase.sync();

// orm.sync().catch(function() {
// Test Only! in production use above
orm.sync({ force: true }).catch(function() {
  throw new Error('Error at orm sync');
})

// return promises
exports.Donor = Donor;
exports.Purchase = Purchase;
exports.Donation = Donation;
exports.Recipient = Recipient;
exports.orm = orm;
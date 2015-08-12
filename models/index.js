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
var sequelize = new Sequelize(process.env.DATABASE_URL || connectionString);

sequelize.authenticate()
  .then(function() {
    console.log('Connection to db successful!');
   })
  .catch(function(err) {
    console.error('Connection to db failed: ', err);
  })
  .done();

var models = [
  'Donor',
  'Donation',
  'Recipient',
  'Purchase'
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

(function(m) {
  m.Donor.hasMany(m.Donation, { as: "donation" });
  m.Donation.belongsTo(m.Donor);
  m.Recipient.hasMany(m.Donation, { as: 'donation' });
  m.Donation.belongsTo(m.Recipient);
  m.Recipient.hasMany(m.Purchase, { as: 'purchase' });  
})(module.exports);

// Donor.sync();
// Donation.sync();
// Recipient.sync();
// Purchase.sync();

// // sequelize.sync().catch(function() {
// // Test Only! in production use above
// sequelize.sync({ force: true }).catch(function() {
//   throw new Error('Error at sequelize sync');
// })

// sequelize.sync().catch(function() {
// Test Only! in production use above
sequelize.sync({ force: true }).catch(function() {
  throw new Error('Error at sequelize sync');
})

module.exports.sequelize = sequelize;
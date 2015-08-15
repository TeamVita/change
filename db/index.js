var Sequelize = require('sequelize');
var Promise = require('bluebird');

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

var methods = [
  'donor',
  'donation',
  'recipient',
  'purchase'
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/models' + '/' + model);
});

methods.forEach(function(method) {
  module.exports[method] = require(__dirname + '/methods/' + method);
});

(function(m) {
  m.Donor.hasMany(m.Donation, { as: "donation" });
  m.Donation.belongsTo(m.Donor);
  m.Recipient.hasMany(m.Donation, { as: 'donation' });
  m.Donation.belongsTo(m.Recipient);
  m.Recipient.hasMany(m.Purchase, { as: 'purchase' });  
})(module.exports);



module.exports.sequelize = sequelize;
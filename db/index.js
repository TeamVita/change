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
    console.log('Successfully connecting to DB!');
   })
  .catch(function(err) {
    console.error('Failed to connect to DB: ', err);
  })
  .done();

var models = [
  'Donor',
  'Recipient'
];

var methods = [
  'donor',
  'recipient'
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/models' + '/' + model);
});

methods.forEach(function(method) {
  module.exports[method] = require(__dirname + '/methods/' + method);
});

(function(m) {
  
})(module.exports);



module.exports.sequelize = sequelize;
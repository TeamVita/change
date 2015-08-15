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
  // 'donor',
  'donation'
  // 'recipient',
  // 'purchase'
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/models' + '/' + model);
});

methods.forEach(function(method) {
  module.exports[method] = require('./methods/donation.js');
});

(function(m) {

  m.Donor.hasMany(m.Donation, { as: "donation" });
  m.Donation.belongsTo(m.Donor);
  m.Recipient.hasMany(m.Donation, { as: 'donation' });
  m.Donation.belongsTo(m.Recipient);
  m.Recipient.hasMany(m.Purchase, { as: 'purchase' });  
  // sequelize.sync({ force: true }).catch(function() {
  //   throw new Error('Error at sequelize sync');
  // })
  // m.makeDonation = function(donorId, recipientId, amount) {
  //   return sequelize.transaction(function(t) {
  //     return Promise.all([
  //       m.Donor.find({ where: { id:donorId } }, {transaction: t}),
  //       m.Recipient.find({ where: { id:recipientId } }, {transaction: t})
  //     ])
  //     .spread(function(donor, recipient) {
  //       console.log("With in create() donor", donor.get());
  //       console.log("With in create() recipient", recipient.get());
  //       if (donor === undefined || recipient === undefined) {
  //         return null;
  //       }
  //       // console.log("current recipient during donation", recipient.get());
  //       var totalAmount = parseInt(recipient.get({transaction: t}).totalAmount) + amount;
  //       return m.Donation.create({ amount: amount }, {transaction: t}).then(function(donation) {
  //         donor.setDonation(donation, {transaction: t});
  //         recipient.setDonation(donation, {transaction: t});
  //         donation.setDonor(donor, {transaction: t});
  //         donation.setRecipient(recipient, {transaction: t});
  //         // return recipient.setDataValue('amount', updateAmount.toString(), {transaction: t});  
  //         return recipient.updateAttributes({'totalAmount': totalAmount}, {transaction: t});
  //       });
  //     })
  //     .then(function(recipient) {
  //       // console.log("recipient after action", recipient.get());
  //       console.log("In commit", recipient.get());
  //       return recipient;
  //       // t.commit();
  //     })
  //     .catch(function(err) {
  //       console.error("In makeDonation()", err);
  //     })
  //   })  
  // }
})(module.exports);



module.exports.sequelize = sequelize;
// module.exports.makeDonation = makeDonation;
// Database test file 
var database = require('./models.js');
var DONOR_TEST = false;
var RECIPIENT_TEST = true;

if (DONOR_TEST) {
  var donorObj = {
    email: "myEmail",
    firstName: "Ian",
    lastName: "Zhang",
    fbId: "SomeId"
  }
  // create a new user
  database.donor.create(donorObj)
  database.donor.create(donorObj)
  database.donor.create(donorObj);
  database.donor.findOneByEmail(donorObj.email);
  database.donor.findOneById(1);
  database.donor.findAll();

  database.donor.updateEmailById("someOtherEmail", 1);
  database.donor.findOneById(1);

  database.donor.updateById('email', 'testEmail', 1);
  database.donor.updateEmailById("anotherEmail", 1);
  database.donor.findOneById(1);
  database.donor.deleteById(1);
  database.donor.findAll();
  database.donor.deleteById(100);
  database.donor.deleteAll();
  database.donor.findAll();
};

if (RECIPIENT_TEST) {
  var recipientObj = {
    firstName: "Boyan",
    lastName: "Zhang",
    pin: 1113
  }

  // database.recipient.create(recipientObj);
  // database.recipient.findAll();
  // database.recipient.findOneById(2);
  // database.recipient.findOneByPin(1111);
  // database.recipient.updateById('firstName', 'XXXX', 1);
  // database.recipient.findOneById(1);
  // database.recipient.deleteById(1);
  // database.recipient.findOneById(1);
  // database.recipient.findAll();
  database.recipient.deleteAll();
  database.recipient.findAll();
};
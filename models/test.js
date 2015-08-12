// Database test file 
var database = require('./models.js');
var DONOR_TEST = false;
var RECIPIENT_TEST = false;
var DONATION_TEST = true;

var donorObj = {
  email: "myEmail",
  firstName: "Ian",
  lastName: "Zhang",
  fbId: "SomeId"
};

var recipientObj = {
  firstName: "B",
  lastName: "Zhang",
  pin: 1111
};

if (DONOR_TEST) {
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
  database.recipient.create(recipientObj);
  database.recipient.findAll();
  database.recipient.findOneById(2);
  database.recipient.findOneByPin(1111);
  database.recipient.updateById('firstName', 'XXXX', 1);
  database.recipient.findOneById(1);
  database.recipient.deleteById(1);
  database.recipient.findOneById(1);
  database.recipient.findAll();
  database.recipient.deleteAll();
  database.recipient.findAll();
};

if (DONATION_TEST) {
  var obj = {
    from: 3,
    to: 3,
    amount: 100
  }

  // database.recipient.deleteAll();     // clear up previous record
  // database.recipient.create(recipientObj);

  // database.donor.deleteAll();
  // database.donor.create(donorObj);

  // database.recipient.findAll();
  // database.recipient.findOneByPin(1111);
  // database.donor.findAll();
  // database.donor.findOneByEmail("myEmail");
  // database.donation.create(obj);
  // database.donation.findAll();
  // database.donor.findAll();
  // // database.donor.findOneById(58);
  // database.donor.findAll();
  // database.recipient.findOneById(64);
};
// Database test file 
var database = require('./models.js');
var donorObj = {
  email: "myEmail",
  firstName: "Ian",
  lastName: "Zhang",
  fbId: "SomeId"
}

// create a new user
// database.donor.create(donorObj);
// database.donor.findOneByEmail(donorObj.email);
// database.donor.findOneById(313);
// database.donor.findAll();

database.donor.updateEmail("someOtherEmail", 311);
database.donor.findOneById(311);


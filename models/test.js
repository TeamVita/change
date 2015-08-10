var database = require('./models.js');
// create a new user
var donorObj = {
  email: "myEmail",
  firstName: "Ian",
  lastName: "Zhang",
  fbId: "SomeId"
}

// database.donor.create(donorObj);

database.donor.findOneByEmail(donorObj.email);
// database.donor.findAll();



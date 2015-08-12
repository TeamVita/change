var donor = require('./donor.js');
var donation = require('./donation.js');
var recipient = require('./recipient.js');
var orm = require('./index.js');

module.exports = {
  donor: donor,
  donation: donation,
  recipient: recipient,
  db: orm.orm
}
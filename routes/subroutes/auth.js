var Promise = require('bluebird');
var utility = require('./utility');
// var session = require('express-session');

var auth = {
  // Session: function() {
  //   var session;
  //   return session = {
  //     sessionID: "",
  //     isLoggedIn: function() {
  //       return (session.sessionID != null);
  //     }
  //   };
  // },

  // verifyOrgType: function(email, organization, id) {
  //   utility.findAccountByEmail(email, organization).then(function(organization) {

  //   })
  // },
  // organizationType: "vendor"/"shelter"
  verifyPassword: function(inputPassword, storedPassword, returnMsg) {
    var rtnVal = inputPassword === storedPassword ? returnMsg : "Your password is incorrect!";
    return rtnVal;
  }
}

module.exports = auth;
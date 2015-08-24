var Dispatcher = require('../dispatcher/Appdispatcher');
var Constants = require('../constants/Constants.js');
var ActionTypes = Constants.ActionTypes;

module.exports = {

  logIn: function(info, welcome) {
    $.ajax({
      url: '/login/shelter',
      type: 'POST',
      data: info,
      success: function(data) {
        if (data.error) {
          var error = data.error;
          console.log(error.message);
          // TODO display error.message to user;
        } else {
          welcome('welcome', data.business_name);
        }
      },
      error: function(error) {
        console.log(error);
      }
    });
  },

  shelterSignUp: function(info, welcome) {
    $.ajax({
      url: '/signup/shelter',
      type: 'POST',
      data: info,
      success: function(data) {
        welcome('welcome', data.username);
      },
      error: function(error) {
        console.log(error);
      }
    });
  },

  createPIN: function(cb) {
		$.ajax({
			url: '/pin',
			type: 'GET',
			success: function(data) {
        cb(data);
			},
			error: function(error) {
				console.error(error);
			}
		});
	}

};

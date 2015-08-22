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
        welcome('welcome', data.business_name);
      },
      error: function(error) {
        console.log(error);
      }
    });
  },

  shelterSignUp: function(info, cb) {
    $.ajax({
      url: '/signup/shelter',
      type: 'POST',
      data: info,
      success: function(data) {
        Dispatcher.dispatch({
          type: ActionTypes.SHELTER_SIGNUP,
          username: data.username,
          password: data.password,
          pane: 'orgInfo'
        });
        cb(data);
      }.bind(this),
      error: function(error) {
        console.log(error);
      }.bind(this)
    });
  },

  createPIN: function(cb) {
		$.ajax({
			url: '/vendor',
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

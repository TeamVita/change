var Dispatcher = require('../dispatcher/Appdispatcher');
var Constants = require('../constants/Constants.js');
var ActionTypes = Constants.ActionTypes;

module.exports = {

	signUp: function(info, welcome) {
		$.ajax({
			url: '/signup/vendor',
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

	logIn: function(info, cb) {
		$.ajax({
			url: '/login/vendor',
			type: 'POST',
			data: info,
			success: function(data) {
				cb('welcome', data.business_name);
			},
			error: function(error) {
				console.log(error);
			}
		});
	},

	switchPage: function(page) {
		Dispatcher.dispatch({
			type: ActionTypes.SWITCH_PAGE,
			page: page
		});
	},

	requestAmount: function(pinInfo) {
		$.ajax({
			url: 'login/vendor',
			type: 'POST',
			data: pinInfo,
			success: function(data) {
				console.log("Update db entry successfully", data);
			},
			error: function(error) {
				console.error(error);
			}
		});
	}

};

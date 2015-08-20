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
				console.log(data);
				welcome();
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
	}

};

var Dispatcher = require('../dispatcher/Appdispatcher');
var Constants = require('../constants/Constants.js');
var ActionTypes = Constants.ActionTypes;


module.exports = {
	// POST donation info to initiate Stripe payment
	donate: function(info, cb) {
		$.ajax({
			url: '/donate',
			type: 'POST',
			data: info,
			success: function(data) {
				console.log('Payment: ' + data.status);
				cb(data.status);
			},
			error: function() {
			console.log('Failed to execute donate ajax request.');
			}.bind(this)
		});
	},

	//This is the signup function for the donor to create an account
	donorSignUp: function(info) {
		$.ajax({
			url: '/signup/donor',
			type: 'POST',
			data: info,
			success: function(data) {
				Dispatcher.dispatch({
					type: ActionTypes.DONOR_SIGNUP,
					pane: 'account'
			});
			}.bind(this),
			error: function(error) {
			console.log(error);
			}.bind(this)
		});
	},

};

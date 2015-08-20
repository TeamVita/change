var Dispatcher = require('../Dispatcher/Appdispatcher');
var Constants = require('../Constants/Constants.js');
var ActionTypes = Constants.ActionTypes;

module.exports = {
	//This code is for the user to specify the amount the user wishes to donate
	donate: function(info) {
		$.ajax({
			url: '/donate',
			type: 'POST',
			data: info, 
			success: function(data) {
				Dispatcher.dispatch({
					type: ActionTypes.CHOOSE_AMOUNT,
					pin: data.pin,
					amount: data.amt
			});
			}.bind(this),
			error: function() {
			console.log('Failed to execute donate ajax request.');
			}.bind(this)
		});
	},

	//This function takes in the Stripe token as an input from checkout and sends it to the server
	sendToken: function(token){
		$.ajax({
			url: '/donate', 
			type: 'POST', 
			data: token,
			success: function(data){
				Dispatcher.dispatch({
					//some data to send - probably going to render a different
					type: ActionTypes.DONATE,
					pane: 'signup', 
					email: data.email
				});
			}.bind(this),
			error: function(){
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
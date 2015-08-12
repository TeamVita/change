var Dispatcher = require('../Dispatcher/Appdispatcher');
var Constants = require('../Constants/Constants.js');
var ActionTypes = Constants.ActionTypes;

module.exports = {

	signUp: function(info, cb){
		console.log('in actions.signUp');
		$.ajax({
	      url: '/signup',
	      type: 'POST',
	      data: info,
	      success: function(data) {
	            Dispatcher.dispatch({
	            	type: ActionTypes.SIGN_UP,
	            	username: data.username,
	            	password: data.password,
	            });
							cb(data);
	          }.bind(this),
	            error: function() {
	              console.log(error);
	          }.bind(this)
	    });
	},

	switchPage: function(page) {
		console.log('in actions.switchPage');
		Dispatcher.dispatch({
			type: ActionTypes.SWITCH_PAGE,
			page: page
		});
	}

};

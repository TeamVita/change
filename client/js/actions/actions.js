var Dispatcher = require('../dispatcher/Appdispatcher');
var Constants = require('../constants/Constants.js');
var ActionTypes = Constants.ActionTypes;

module.exports = {
	
	switchPage: function(page) {
		Dispatcher.dispatch({
			type: ActionTypes.SWITCH_PAGE,
			page: page
		});
	}

};

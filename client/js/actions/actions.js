var Dispatcher = require('../Dispatcher/Appdispatcher');
var Constants = require('../Constants/Constants.js');
var ActionTypes = Constants.ActionTypes;

module.exports = {

	switchPage: function(page) {
		Dispatcher.dispatch({
			type: ActionTypes.SWITCH_PAGE,
			page: page
		});
	}

};

var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../Dispatcher/Appdispatcher.js');
var Constants = require('../Constants/Constants.js');
var ActionTypes = Constants.ActionTypes;

var CHANGE_EVENT = 'submit';

var appState = {page: 'SIGNUP'};

var reset = function() {
	appState = {};
};

var SignupStore = assign({}, EventEmitter.prototype, {

	emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
	addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getState: function() {
  	return appState;
  }
});

SignupStore.dispatchToken = Dispatcher.register(function(action){

	switch(action.type) {

		case ActionTypes.SIGN_UP:
		console.log('in store switch SIGN_UP');
		break;

		case ActionTypes.SWITCH_PAGE:
		console.log('in store switch SWITCH_PAGE');
		appState.page = action.page;
		SignupStore.emitChange();
		break;
	}
});

module.exports = SignupStore;

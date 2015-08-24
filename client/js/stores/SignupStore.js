var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../dispatcher/Appdispatcher.js');
var Constants = require('../constants/Constants.js');
var ActionTypes = Constants.ActionTypes;

var CHANGE_EVENT = 'submit';


var appState = {page: 'DONOR', pane: 'donate'};

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
			appState.pane = action.pane;
			break;

		case ActionTypes.SWITCH_PAGE:
			appState.page = action.page;
			SignupStore.emitChange();
			break;

		case ActionTypes.CHOOSE_AMOUNT:
			appState.amount = action.amount;
			appState.pin = action.pin;
			SignupStore.emitChange();
			break;

		case ActionTypes.DONATE:
			appState.pane = action.pane;
			appState.email = action.email;
			SignupStore.emitChange();
			break;

		case ActionTypes.DONOR_SIGNUP:
			appState.pane = action.pane;
			SignupStore.emitChange();
			break;

    case ActionTypes.SHELTER_SIGNUP:
      appState.pane = action.pane;
      SignupStore.emitChange();
      break;

    case ActionTypes.DONOR_LOGIN:
			appState.pane = action.pane;
			SignupStore.emitChange();
			break;

		case ActionTypes.SHOW_AMOUNT:
			appState.pane = action.pane;
			appState.balance = action.balance;
			SignupStore.emitChange();

		case ActionTypes.CHARGE:
			appState.pane = action.pane;
			appState.balance = action.balance;
			SignupStore.emitChange();
	}
});

module.exports = SignupStore;

var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../Dispatcher/Appdispatcher.js');
var Constants = require('../Constants/Constants.js');
var ActionTypes = Constants.ActionTypes;
var Promise = require('promise');

var CHANGE_EVENT = 'change';
// helper functions

var ShelterStore = assign({}, EventEmitter.prototype, {

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

module.exports = ShelterStore;
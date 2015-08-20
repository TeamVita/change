var Dispatcher = require('../Dispatcher/Appdispatcher');
var Constants = require('../Constants/Constants.js');
var ActionTypes = Constants.ActionTypes;

module.exports = {

  shelterSignUp: function(info, cb) {
    $.ajax({
      url: '/signup/shelter',
      type: 'POST',
      data: info,
      success: function(data) {
        Dispatcher.dispatch({
          type: ActionTypes.SHELTER_SIGNUP,
          username: data.username,
          password: data.password,
          pane: 'orgInfo'
        });
        cb(data);
      }.bind(this), 
      error: function(error) {
        console.log(error);
      }.bind(this)
    });
  }
  
}
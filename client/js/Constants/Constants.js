
var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    SIGN_UP: null,
    LOG_IN: null,
    SWITCH_PAGE: null
  }),

  Pages: keyMirror({
  	SIGNUP: null,
  	SIGNIN: null,
  	WELCOME: null,
  	SUCCESS: null
  })

};

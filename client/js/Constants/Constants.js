var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    SIGN_UP: null,
    LOG_IN: null,
    DONATE: null,
    SWITCH_PAGE: null,
    // Shelter info
    GET_USER_DATA: null
  }),

  Pages: keyMirror({
  	SIGNUP: null,
  	SIGNIN: null,
  	WELCOME: null,
  	SUCCESS: null,
    SHELTER_SIGNUP: null
  })

};

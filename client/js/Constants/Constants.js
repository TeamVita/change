
var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    SIGN_UP: null,
    LOG_IN: null,
    DONATE: null,
    SWITCH_PAGE: null
  }),

  Pages: keyMirror({
  	VENDOR_SIGNUP: null,
  	SHELTER_SIGNUP: null,
  	DONOR_PASSWORD: null,
  	VENDOR_SIGNIN: null,
  	SHELTER_SIGNIN: null,
  	VENDOR_WELCOME: null,
  	SHELTER_WELCOME: null,
  	DONOR_WELCOME: null,
  	SUCCESS: null
  })

};

var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    SIGN_UP: null,
    LOG_IN: null,
    DONATE: null,
    SWITCH_PAGE: null, 
    CHOOSE_AMOUNT: null, 
    DONOR_SIGNUP: null
  }),

  Pages: keyMirror({
  	VENDOR: null,
  	SHELTER: null,
  	DONOR: null
  })

};

var Constants = require('../Constants/constants');
var SignupStore = require('../stores/SignupStore');
var Pages = Constants.Pages;

var getPageComponent = function(page) {
	switch (page) {
		case Pages.SIGNUP: 
		return require('./Signup/signup');

		// case Pages.SIGNIN:
		// return require('./Signin/signin');
		
		case Pages.WELCOME:
		console.log('in welcome case')
		return require('./Welcome/welcome');
	}
};

var getStateFromStores = function() {
	return {appState: SignupStore.getState()};
};

var Change = React.createClass({
	
	getInitialState: function() {
		return getStateFromStores();
	},

	_onSubmit: function() {
		this.setState(getStateFromStores());
		console.log('in onsubmit')
	}, 

	render: function() {
	var appState = this.state.appState;
	var PageComponent = getPageComponent(appState.page);
	return <PageComponent appState = {appState} />
	}
});

module.exports = Change;
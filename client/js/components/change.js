var Constants = require('../Constants/Constants');
var SignupStore = require('../stores/SignupStore');
var Pages = Constants.Pages;

var getPageComponent = function(page) {
	switch (page) {
		
		case Pages.SIGNUP:
		return require('./shelter/signup');

		case Pages.SIGNIN:
		return require('./shelter/organizationInfo');
	}
};

var getStateFromStores = function() {
	return {appState: SignupStore.getState()};
};

var Change = React.createClass({

	getInitialState: function() {
		return getStateFromStores();
	},

	componentDidMount: function(){
		SignupStore.addChangeListener(this._onSubmit);
	},

	componentWillUnmount: function() {
		SignupStore.removeChangeListener(this._onSubmit);
	},

	_onSubmit: function() {
		// console.log("After on submit", getStateFromStores());
		this.setState(getStateFromStores());
	},

	render: function() {
		var appState = this.state.appState;
		console.log(appState, 'this is the appState');
		var PageComponent = getPageComponent(appState.page);
		return (<PageComponent appState = {appState} />);
	}
});

module.exports = Change;

var Constants = require('../constants/Constants');
var SignupStore = require('../stores/SignupStore');
var Pages = Constants.Pages;

var getPageComponent = function(page) {
	switch (page) {

		case Pages.VENDOR:
		return require('./vendor/controller');

		case Pages.SHELTER:
		return require('./shelter/controller');

		case Pages.DONOR:
		return require('./donor/donate');

		case Pages.ABOUT:
		console.log('in about');
		return require('./threesteps');
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
		this.setState(getStateFromStores());
	},

	render: function() {
		var appState = this.state.appState;
		var PageComponent = getPageComponent(appState.page);
		return (<PageComponent appState = {appState} />);
	}
});

module.exports = Change;

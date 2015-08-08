var React = require('react');
var Username = require('./Username.jsx');
var Pass = require('./Pass.jsx');

var Login = React.createClass({
	
	render: function() {
		return (
			<form id = 'Login'><h1>Login Here!</h1>
				<Username />
				<Pass />
			</form>
		);
	}
});

module.exports = Login;
var React = require('react');


var Username = React.createClass({
	render: function() {
		return (
			<input id = "username" type="text" name="login" placeholder="Username or Email"/>
		);
	}
});

module.exports = Username;
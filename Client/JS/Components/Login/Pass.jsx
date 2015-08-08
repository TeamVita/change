var React = require('react');

var Pass = React.createClass({
	render: function() {
		return (
			<input type = 'password' name = 'pass' placeholder='password'/>
		);
	}
});

module.exports = Pass;
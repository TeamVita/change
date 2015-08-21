var DonorActions = require('../../actions/donorActions');

var Pass = React.createClass({

	handleSubmit: function(event) {
		event.preventDefault();
		var email = this.refs.email.getDOMNode().value.trim();
		var name = this.refs.name.getDOMNode().value.trim();
		var pass = this.refs.signuppass.getDOMNode().value.trim();

		DonorActions.donorSignUp({email: email, name: name, password: pass});
	},
	render: function() {
		//get props to pass properly
		return (
		<div id = 'success'>
			<h4>You have successfully submitted your payment! </h4>
			<img src= '../../Assets/checkmark.png'/>
			<form onSubmit={this.handleSubmit}>
				Email:
				<div class ='input'><input type = 'text' ref = 'email'id = 'email' value ={this.props.email} readOnly/></div>
				<div class ='input'><input placeholder= 'Password'  type= 'password' ref ='loginpass'/></div>
				<div><strong>Or</strong></div>
				<p>Please fill out the following to Sign up:</p>
				<div class ='input'><input placeholder= 'Full Name' type = 'text'ref = 'name'/></div>
				<div class ='input'><input placeholder= 'Password'  type= 'password' ref ='pass'/></div>
				<div class ='input'><input placeholder= 'Re-enter Password'  type= 'password' ref ='signuppass'/></div>
				<div class ='input'><input type= 'submit'/></div>
			</form>
		</div>
		);
	}
});

module.exports = Pass;

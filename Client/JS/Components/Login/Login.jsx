var React = require('react');

var Login = React.createClass({

  handleSubmit: function(event) {
    event.preventDefault();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var pass = React.findDOMNode(this.refs.pass).value.trim();
    this.props.onLoginSubmit({username: username, password: pass});
  },

  render: function() {
    return (
        <form onSubmit ={this.handleSubmit}><h1>Login Here!</h1>
          <input type ='text' ref ='username'/>
          <input type = 'password' ref = "pass" />
          <input type ="submit"/>
        </form>
    );
  }
});




module.exports = Login;

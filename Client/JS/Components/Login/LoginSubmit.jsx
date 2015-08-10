var React = require('react');
var Login = require('./Login.jsx');

var LoginSubmit = React.createClass({
  handleLoginSubmit: function(user) { 
    $.ajax({
      url: this.props.url, 
      type: 'POST',
      data: user, 
      success: function(data) {
            console.log('The username is: ', data.username);
            console.log('The password is, ', data.password);
          }.bind(this),
            error: function() {
              console.log(error);
          }.bind(this)
    });
  },

  render: function() {
    return (
      <Login onLoginSubmit ={this.handleLoginSubmit} />
    );
  }
});

module.exports = LoginSubmit;
var actions = require('../../actions/actions');
var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../Constants/Constants.js');

var Signup = React.createClass({

  render: function() {
    return (
      <div id = 'form'>
          <h1>Welcome to Organization Login Page</h1>
          <div class ='input'><input placeholder='email' type ='text' /></div>
          <div class ='input'><input placeholder='first name' type = 'text' /></div>
          <input type ="submit" />
      </div>
    );
  }
});

module.exports = Signup;

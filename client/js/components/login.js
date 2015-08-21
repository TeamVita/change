var actions = require('../../actions/actions');
var Constants = require('../../constants/Constants.js');

var login = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Log in to make a CHANGE</h1>
        <div><input type = 'text' placeholder = 'email address' ref='email' /></div>
        <div><input type = 'text' placeholder ='password' ref='password' /></div>
        <input type='submit' />
      </div>
    );
  }
});

module.exports = login;

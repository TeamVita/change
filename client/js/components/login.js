var actions = require('../../actions/actions');
var Constants = require('../../constants/Constants.js');

var login = React.createClass({

  // Collect values from input fields
  getFields: function() {
    var fields = {};
    for (var key in this.refs){
      fields[key] = this.refs[key].getDOMNode().value.trim();
    }
    return fields;
  },

  render: function() {
    return (
      <div>
        <h1>Log in to make a CHANGE</h1>
        <h2>I am a...</h2>
        <select name="select" ref='accountType'>
          <option value="shelter">shelter</option>
          <option value="vendor" selected>vendor</option>
        </select>
        <div><input type = 'text' placeholder = 'email address' ref='email' /></div>
        <div><input type = 'text' placeholder ='password' ref='password' /></div>
        <input type='submit' />
      </div>
    );
  }
});

module.exports = login;

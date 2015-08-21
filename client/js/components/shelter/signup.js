var actions = require('../../actions/actions');
var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../constants/Constants.js');

var OrgSignup = React.createClass({

  getFields: function() {
    var fields = {};
    for (var keys in this.refs) {
      fields[keys] = this.refs[keys].getDOMNode().value.trim();
    }
    return fields;
  },

  render: function() {
    return (
      <div id = 'form'>
        <h1>Welcome to Organization Login Page</h1>
        <div className ='input'><input placeholder='Organization Name' ref='email' type ='text'/></div>
        <div className ='input'><input placeholder='Password' ref='password' type='text'/></div>
        <input type ="submit" />
      </div>
    );
  }
});

module.exports = OrgSignup;

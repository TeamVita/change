var actions = require('../../actions/actions');
var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../constants/Constants.js');

var OrgSignup = React.createClass({

  getInitialState: function() {
    return {text: ""};
  },

  getFields: function() {
    var fields = {};
    for (var keys in this.refs) {
      fields[keys] = this.refs[keys].getDOMNode().value.trim();
    }
    return fields;
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

// <div className ='input'><input placeholder='Password' ref='password' type='text'/></div>
  render: function() {
    return (
      <div id = 'form'>
        <h1>Welcome to Shelter Signup Page</h1>
        <div className ='input'>
          <input placeholder='organization name' ref='name' type ='text'/>
        </div>
        <div className ='input'>
          <input placeholder='email' ref='email' type ='text'/>
        </div>
        <div className ='input'>
          <input placeholder="password" onChange={this.onChange} type='text' ref='password' value={this.state.text}/>
        </div>
        <input type ="submit" />
      </div>
    );
  }
});

module.exports = OrgSignup;

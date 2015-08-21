var actions = require('../../actions/actions');
var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../constants/Constants.js');

var OrgSignup = React.createClass({

  getInitialState: function() {
    return {text: "null"};
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
        <h1>Welcome to Organization Login Page</h1>
        <div className ='input'>
          <input placeholder='Organization Name' ref='email' type ='text'/>
        </div>
        <div className ='input'>
          <input placeholder="" onChange={this.onChange} type='text' ref='password' value={this.state.text}/>
        </div>
        <input type ="submit" />
      </div>
    );
  }
});

module.exports = OrgSignup;

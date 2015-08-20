var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');

var personalInfo = React.createClass({

  getFields: function() {
    var fields = {};
    for (var field in this.refs){
      fields[field] = this.refs[field].getDOMNode().value.trim();
    }
    return fields;
  },

  render: function() {

    return (
      <div>
        <h1>Give us your personal info.</h1>
        <div class ='input'><input placeholder='email' type ='text' ref ='email' value='vincent@awesome.com'/></div>
        <div class ='input'><input placeholder='first name' type = 'text' ref ='first_name' value='Vincent'/></div>
        <div class ='input'><input placeholder='last name' type = 'text' ref ='last_name' value='Rupp'/></div>
        <div class ='input'><input placeholder='dob_day' type = 'text' ref ='dob_day' value='21'/></div>
        <div class ='input'><input placeholder='dob_month' type = 'text' ref ='dob_month' value='12'/></div>
        <div class ='input'><input placeholder='dob_year' type = 'text' ref ='dob_year' value='1982'/></div>
        <div class ='input'><input placeholder='company name' type = 'text' ref ='display_name' value='VITA'/></div>
        <input type ="submit" />
      </div>
    );
  }
});

module.exports = personalInfo;

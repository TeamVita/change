var actions = require('../../actions/actions');
var Constants = require('../../constants/Constants.js');

var personalInfo = React.createClass({

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
        <h1>Give us your personal info.</h1>
        <div className ='input'><input placeholder='email' type ='text' ref ='email' value='vincent@awesome.com'/></div>
        <div className ='input'><input placeholder='password' type ='password' ref ='pass'/></div>
        <div className ='input'><input placeholder='first name' type = 'text' ref ='first_name' value='Vincent'/></div>
        <div className ='input'><input placeholder='last name' type = 'text' ref ='last_name' value='Rupp'/></div>
        <div className ='input'><input placeholder='dob_day' type = 'text' ref ='dob_day' value='21'/></div>
        <div className ='input'><input placeholder='dob_month' type = 'text' ref ='dob_month' value='12'/></div>
        <div className ='input'><input placeholder='dob_year' type = 'text' ref ='dob_year' value='1982'/></div>
        <div className ='input'><input placeholder='business name' type = 'text' ref ='business_name' value='VITA'/></div>
        <div className = 'input'><input placeholder='Enter "Food" or "Clothing"' type = 'text' ref = 'type'/></div> 
        <input type ="submit" />
      </div>
    );
  }
});

module.exports = personalInfo;

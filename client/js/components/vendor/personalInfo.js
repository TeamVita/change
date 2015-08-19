var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');
var Promise = require('promise');

var Signup = React.createClass({

  handleSubmit: function(event) {

    event.preventDefault();
    var company_name = this.refs.company_name.getDOMNode().value.trim();
    var email = this.refs.email.getDOMNode().value.trim();
    var first_name = this.refs.first_name.getDOMNode().value.trim();
    var last_name = this.refs.last_name.getDOMNode().value.trim();
    var dob_day = this.refs.dob_day.getDOMNode().value.trim();
    var dob_month = this.refs.dob_month.getDOMNode().value.trim();
    var dob_year = this.refs.dob_year.getDOMNode().value.trim();
    var promise = new Promise(function (resolve, reject) {
        actions.signUp({username: username, password: pass}, resolve);
      });
    promise.then(function(resp) {
      // render bankInfo subcomponent
    });
  },

  render: function() {

    return (
      <div id = 'form'>
        <form onSubmit ={this.handleSubmit}><h1>Create your account</h1>
          <div class ='input'><input placeholder='Company Name' type = 'text' ref ='company_name' /></div>
          <div class ='input'><input placeholder='Email' type ='text' ref ='email' /></div>
          <div class ='input'><input placeholder='First Name' type = 'text' ref ='first_name' /></div>
          <div class ='input'><input placeholder='Last Name' type = 'text' ref ='last_name' /></div>
          <div class ='input'><input placeholder='Birthday-Day' type = 'text' ref ='dob_day' /></div>
          <div class ='input'><input placeholder='Birthday-Month' type = 'text' ref ='dob_month' /></div>
          <div class ='input'><input placeholder='Birthday-Year' type = 'text' ref ='dob_year' /></div>
          <input type ="submit" />
        </form>
      </div>
    );
  }
});

module.exports = personalInfo;

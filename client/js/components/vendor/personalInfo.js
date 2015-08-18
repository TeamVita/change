var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');
var Promise = require('promise');

var Signup = React.createClass({

  handleSubmit: function(event) {

    event.preventDefault();
    var username = this.refs.username.getDOMNode().value.trim();
    var pass = this.refs.pass.getDOMNode().value.trim();
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
          <div class ='input'><input placeholder='email' type ='text' ref ='email' /></div>
          <div class ='input'><input placeholder='first_name' type = 'text' ref ='first_name' /></div>
          <div class ='input'><input placeholder='last_name' type = 'text' ref ='last_name' /></div>
          <div class ='input'><input placeholder='dob_day' type = 'text' ref ='dob_day' /></div>
          <div class ='input'><input placeholder='dob_month' type = 'text' ref ='dob_month' /></div>
          <div class ='input'><input placeholder='dob_year' type = 'text' ref ='dob_year' /></div>
          <div class ='input'><input placeholder='company_name' type = 'text' ref ='company_name' /></div>
          <input type ="submit" />
        </form>
      </div>
    );
  }
});

module.exports = personalInfo;

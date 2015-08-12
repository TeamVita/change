var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');

var welcome = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    return true;
  },

  render: function() {

    return (

      <div id = 'form'>

        <form onSubmit ={this.handleSubmit}><h1>Welcome to your account</h1>
          <div class ='input'><input placeholder='email' type ='text' ref ='email' /></div>
          <div class ='input'><input placeholder='username' type = 'text' ref ='username' /></div>
          <div class ='input'><input type = 'password' placeholder= 'password' ref = "pass" /></div>
          <div class ='input'><input type = 'password' placeholder= 'Re-enter password' ref = "pass" /></div>
          <input type ="submit" />
        </form>
      </div>
    );
  }
});

module.exports = welcome;

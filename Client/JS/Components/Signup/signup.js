var actions = require('../actions/actions');
var Constants = require('../Constants/constants.js');

var Signup = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var pass = React.findDOMNode(this.refs.pass).value.trim();
    var promise = new Promise(function (resolve, reject) {
        actions.signUp({username: username, password: pass}),function (err, res) {
        if (err) reject(err);
        else resolve(res);
      });
    });
    promise.then(function(resp) {actions.switchPage('WELCOME')});
  },

  render: function() {
    return (
      <div id = 'form'>
        <form onSubmit ={this.handleSubmit}><h1>Create your account</h1>
          <div class ='input'><input placeholder='email'type ='text' ref ='email'/></div>
          <div class ='input'><input placeholder='username'type ='text' ref ='username'/></div>
          <div class ='input'><input type = 'password' placeholder='password'ref = "pass" /></div>
          <div class ='input'><input type = 'password' placeholder='Re-enter password'ref = "pass" /></div>
          <input type ="submit"/>
        </form>
      </div>
    );
  }
});

module.exports = Signup;
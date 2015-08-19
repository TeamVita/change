var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');
var PersonalInfo = require('./personalInfo');
var BankInfo = require('./bankInfo');

var Signup = React.createClass({

  handleSubmit: function(event) {

    event.preventDefault();
    var accountData = {};
    for (var field in this.refs) {
      accountData[field] = field.getDOMNode().value.trim();
    }

    var promise = new Promise(function (resolve, reject) {
        actions.signUp(accountData, resolve);
      });
    promise.then(function(resp) {
      if (this.state.pane === 'personal') {
        this.state.pane === 'bank';
      } else {
        //render welcome component
      }
    });
  },

  render: function() {
    var partial;
    if (this.state.pane === 'personal') {
      partial = <PersonalInfo />;
    }
    else if (this.state.pane === 'bank'){
      partial = <BankInfo />;
    }

    return (
      <div id = 'form'>
        <form onSubmit ={this.handleSubmit}>
          <h1>Create your account</h1>
          {partial}
        </form>
      </div>
    );
  }
});

module.exports = Signup;

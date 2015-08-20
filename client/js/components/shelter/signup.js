var actions = require('../../actions/actions');
var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../Constants/Constants.js');

var Signup = React.createClass({

  handleSubmit: function(event) {
    event.preventDefault();
    actions.switchPage(Constants.Pages.SIGNIN);
    // fire up a request!
    var info = { username: "Test Recipient", password: "1234" };
    shelterActions.recipientSignUp(info, function(data) {
      console.log("receive from server", data);
    });
  },

  render: function() {
    return (
      <div id = 'form'>
        <form onSubmit={this.handleSubmit}><h1>Welcome to Organization Login Page</h1>
          <input type ="submit" />
        </form>
      </div>
    );
  }
});

module.exports = Signup;

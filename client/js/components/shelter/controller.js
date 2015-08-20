var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../Constants/Constants.js');
var OrganizationInfo = require('./organizationInfo');
var OrgSignup = require('./signup');

var Signup = React.createClass({

  getInitialState: function() {
    return {pane: 'orgSignUp'};
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var info = { username: "Test Recipient", password: "1234" };
    var self = this;
    console.log("click event!");
    shelterActions.shelterSignUp(info, function(data) {
      console.log("receive from server", data);
      // TODO: refactor use bind later
      self.setState({pane: 'orgInfo'});
    });
  },

  render: function() {
    var partial;
    if (this.state.pane === 'orgSignUp') {
      partial = <OrgSignup ref='partial'/>;
    }
    else if (this.state.pane === 'orgInfo') {
      partial = <OrganizationInfo ref='partial' />;
    }

    return (
      <div id = 'form'>
        <form onSubmit={this.handleSubmit}>
          {partial}
        </form>
      </div>
    );
  }
});

module.exports = Signup;
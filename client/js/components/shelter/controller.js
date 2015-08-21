var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../constants/Constants.js');
var OrgInfo = require('./organizationInfo');
var OrgSignup = require('./signup');

var Shelter = React.createClass({

  getInitialState: function() {
    return {pane: 'orgSignup'};
  },

  // stateMachine
  changeState: function() {
    var partial;
    if (this.state.pane === 'orgSignup') {
      partial = <OrgSignup ref='partial'/>;
    }
    else if (this.state.pane === 'organizationInfo') {
      partial = <OrgInfo ref='partial' />;
    }
    return partial;
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var info = { username: "Test Recipient", password: "1234" };

    // var fields = this.refs.partial.getFields();
    // console.log("fields", fields);
    console.log("Prop", this.props);
    (function (self) {
      shelterActions.shelterSignUp(info, function(data) {
        console.log("receive from server", data);
        self.setState({pane: 'organizationInfo'});
      })      
    }) (this);
  },

  render: function() {
    var partial;
    partial = this.changeState();

    // TODO: change form width to include wider title
    return (
      <div id = 'form'>
        <form onSubmit={this.handleSubmit}>
          {partial}
        </form>
      </div>
    );
  }
});

module.exports = Shelter;
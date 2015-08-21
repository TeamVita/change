var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../constants/Constants.js');
var OrgInfo = require('./organizationInfo');
var OrgSignup = require('./signup');

var Shelter = React.createClass({

  // State machine
  _states: {
    orgSignup: (function() {
      return <OrgSignup ref='partial'/>
    })(),
    organizationInfo: (function() {
      return <OrgInfo ref='partial' />
    })(),
  },

  getInitialState: function() {
    return {pane: 'orgSignup'};
  },

  changeState: function() {
    return this._states[this.state.pane];
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
    var partial = this.changeState();
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
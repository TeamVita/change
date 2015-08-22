var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../constants/Constants.js');
var OrgInfo = require('./organizationInfo');
var OrgSignup = require('./signup');
var Login = require('../login');

var Shelter = React.createClass({

  // state machines
  _states: {
    orgSignup: function() {
      return <OrgSignup ref='partial'/>
    },
    organizationInfo: function() {
      return <OrgInfo ref='partial' />
    },
    login: function() {
      return <Login ref='partial' />
    },
    welcome: function() {
      return <Welcome ref='partial' />
    }
  },

  getInitialState: function() {
    // state initialize
    return {pane: 'orgSignup'};
  },

  handleClick: function() {
    // TODO set login anchor class to 'hidden', or something
    this.setState({
      pane: 'login'
    });
  },

  // Render different form pane
  changePane: function(pane, business) {
    this.setState({
      pane: pane,
      business: arguments[2]
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var info = { username: "Test Recipient", password: "1234" };

    if (this.state.pane === 'login') {
      var loginData = this.refs.partial.getFields();
      shelterActions.logIn(loginData, function(result) {
        if (result) {
          this.changePane.bind(this, 'welcome');
        }
      });
    } else {
      var fields = this.refs.partial.getFields();
      // console.log("Prop", this.props);
      if (fields !== undefined) {
        console.log(fields);
      }

      (function (self) {
        shelterActions.shelterSignUp(info, function(data) {
          console.log("receive from server", data);
          self.setState({pane: 'organizationInfo'});
        });
      }) (this);
    }

  },

  render: function() {
    var partial = this._states[this.state.pane]();
    // TODO: change form width to include wider title
    return (
      <div id='form'>
        <form onSubmit={this.handleSubmit}>
          {partial}
        </form>
        <a onClick={this.handleClick}>Already have an account? Log in here.</a>
      </div>
    );
  }
});

module.exports = Shelter;

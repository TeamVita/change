var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../constants/Constants.js');
var OrgSignup = require('./signup');
var Welcome = require('./welcome');
var Login = require('../login');

var Shelter = React.createClass({

  // state machines
  _states: {
    orgSignup: function() {
      return <OrgSignup ref='partial'/>
    },
    login: function() {
      return <Login ref='partial' />
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
      business: business
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var info = this.refs.partial.getFields();

    // Log in OR Sign up now
    if (this.state.pane === 'login') {
      var loginData = this.refs.partial.getFields();
      shelterActions.logIn(loginData, (function(pane, business) {
        this.changePane.call(this, pane, business);
      }).bind(this));
    } else if (this.state.pane === 'orgSignup') {
      var fields = this.refs.partial.getFields();
      (function (self) {
        shelterActions.shelterSignUp(info, function(data) {
          console.log("receive from server", data);
          self.setState({pane: 'welcome'});
        });
      }) (this);
    }

  },

  render: function() {
    // TODO: change form width to include wider title
    if (this.state.pane === 'welcome') {
      var partial = <Welcome business={this.state.business} ref='partial' />;
    } else {
      var partial = this._states[this.state.pane]();
    }
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

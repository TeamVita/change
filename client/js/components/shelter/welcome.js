var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../constants/Constants.js');
var NewPin = require('./newpin.js');

var welcome = React.createClass({

  _states: {
    blank: function() {
      return <div></div>
    },
    newPin: function() {
      return <NewPin PIN={this.state.PIN} password={this.state.password}/>
    }
  },

  getInitialState: function() {
    return {pane: 'blank'};
  },

  // Save results of PIN generation to state and display NewPin component
  showResults: function(account) {
    this.setState({
      PIN: account.PIN,
      password: account.password,
      pane: 'newPin'
    });
  },

  createPIN: function(event) {
    event.preventDefault();
    shelterActions.createPIN(this.showResults.bind(this));
  },

  render: function() {
    // var partial = this._states[this.state.pane]();
    var partial;
    if (this.state.pane === 'blank') {
      partial = <div></div>
    } else if (this.state.pane === 'newPin') {
      partial = <NewPin PIN={this.state.PIN} password={this.state.password}/>
    }
    return (
      <div>
        <h1>WELCOME {this.props.business}</h1>
        <div>
          <button onClick={this.createPIN}>Create a PIN!</button>
        </div>
        <br/>
        {partial}
      </div>
    );
  }
});

module.exports = welcome;

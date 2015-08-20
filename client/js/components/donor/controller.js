var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');

var DonorController = React.createClass({

  render: function() {
    var amount = this.props.appState.amount;
    var email = this.props.appState.email; 
    var partial;
    if (this.props.appState.pane === 'donate') {
      NewPane = require('./donate');
      partial = <NewPane amount = {amount}  />;
    }
    else if (this.props.appState.pane === 'signup') {
      NewPane = require('./password');
      partial = <NewPane email = {email}/>;
    }
    else if (this.props.appState.pane === 'account') {
      NewPane = require('./account');
      partial = <NewPane />;
    }
    return (
      <div>
        {partial}
      </div>
    );
  }
});

module.exports = DonorController;

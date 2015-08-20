var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');

var DonorController = React.createClass({

  render: function() {
    console.log("This is the appstate pane: ", this.props.appState.pane);
    var partial;
    if (this.props.appState.pane === 'donate') {
      NewPane = require('./donate');
      partial = <NewPane />;
    }
    else if (this.props.appState.pane === 'signup') {
      NewPane = require('./password');
      partial = <NewPane />;
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

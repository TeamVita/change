var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');

var welcome = React.createClass({

  render: function() {
    var partial;
    if (this.props.appState.pane === 'donate') {
      NewPane = require('./donate');
      partial = <NewPane />;
    }
    else if (this.props.appState.pane === 'success') {
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

module.exports = welcome;

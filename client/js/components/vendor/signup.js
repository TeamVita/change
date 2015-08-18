var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');

var Signup = React.createClass({

  render: function() {
    var partial;
    if (this.props.appState.pane === 'donate') {
      NewPane = require('./donate');
      partial = <NewPane />;
    }
    else if (this.props.appState.pane === 'success'){
      NewPane = require('./success');
      partial = <NewPane />;
    }

    return (
      <div>
        {partial}
      </div>
    );
  }
});

module.exports = Signup;

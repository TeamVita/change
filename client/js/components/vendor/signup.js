var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');

var Signup = React.createClass({

  render: function() {
    var partial;
    if (this.props.appState.pane === 'personal') {
      NewPane = require('./personalInfo');
      partial = <NewPane />;
    }
    else if (this.props.appState.pane === 'bank'){
      NewPane = require('./bankInfo');
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

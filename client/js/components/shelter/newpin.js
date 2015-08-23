var actions = require('../../actions/actions');
var Constants = require('../../constants/Constants.js');

var NewPin = React.createClass({

  render: function() {

    return (
      <div>
        <h1>Here is your new account info:</h1>
        <h2>{this.props.PIN}</h2>
        <h2>{this.props.password}</h2>
      </div>
    );
  }
});

module.exports = NewPin;

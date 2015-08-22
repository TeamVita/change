var vendorActions = require('../../actions/vendorActions');
var Constants = require('../../constants/Constants.js');

var welcome = React.createClass({

  createRecipient: function(event) {
    event.preventDefault();
    vendorActions.createPIN();
  },

  render: function() {
    return (
      <div>
        <h1>WELCOME {this.props.business}</h1>
        <div>
          <button onClick={this.createRecipient}>Create a PIN!</button>
        </div>
      </div>
    );
  }
});

module.exports = welcome;

var vendorActions = require('../../actions/vendorActions');
var Constants = require('../../constants/Constants.js');

var welcome = React.createClass({

  chargeRecipient: function(event) {
    event.preventDefault();
    var pin = this.refs.pin.getDOMNode().value.trim();
    var amount = this.refs.pin.getDOMNode().value.trim();
    pin = Number(pin);
    var info = {
      pin: pin,
      amount: amount
    }
    vendorActions.requestAmount(info);
  },

  render: function() {
    return (
      <div>
        <h1>WELCOME {this.props.business}</h1>
        <div>
          <input type = 'text' placeholder = 'search for pin' ref='pin' size = '20'/> 
          <button onClick={this.chargeRecipient}>CHARGE</button> 
        </div> 
        <div><input type = 'text' placeholder ='amount displayed from database'  /></div>
        <div><input type = 'text' placeholder = 'Total amount from purchases'  ref='chargeAmount'/></div>
        <button>CHARGE</button>
      </div>
    );
  }
});

module.exports = welcome;

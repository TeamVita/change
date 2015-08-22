var actions = require('../../actions/vendorActions');
var Constants = require('../../constants/Constants.js');

var welcome = React.createClass({

  requestAmount: function (event) {
    event.preventDefault();
    var pin = this.refs.pin.getDOMNode().value.trim();
    var pass = this.refs.pass.getDOMNode().value.trim();
    actions.getAmount({pin: pin, password: pass});
  },

  render: function() {
    return (
      <div>
        <h1>WELCOME {this.props.business}</h1>
        <div><input type = 'text' placeholder = 'search for pin' ref = 'pin' size = '20'/></div>
        <div><input type = 'text' placeholder = 'enter password' ref = 'pass'/> </div>
        <div><input type = 'text' placeholder ='amount displayed from database'  /></div>
        <div><input type = 'text' placeholder = 'Total amount from purchases'  /></div>
        <button onClick = {this.requestAmount}>CHARGE</button>
      </div>
    );
  }
});
        // <button onClick = {this.requestAmount}>Get Amount</button></div>

module.exports = welcome;

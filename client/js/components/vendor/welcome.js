var actions = require('../../actions/vendorActions');
var Constants = require('../../constants/Constants.js');
var welcome = React.createClass({

  showBalance: function() {
    var pin = this.refs.pin.getDOMNode().value.trim();
    var type = this.props.type;
    if (pin.length === 4) {
      actions.showAmount({pin: pin, type: type});
    }
  },

  charge: function (event) {
    var pin = this.refs.pin.getDOMNode().value.trim();
    var bill = this.refs.bill.getDOMNode().value.trim();
    var pass = this.refs.pass.getDOMNode().value.trim();
    actions.charge({pin: pin, password: pass, bill: bill, type: this.props.type});
  },

  render: function() {
    return (
      <div>
        <h1>WELCOME {this.props.business}</h1>
        <div><input onChange={this.showBalance} type = 'text' placeholder = 'search for pin' ref = 'pin' /></div>
        <div><input type = 'password' placeholder = 'enter password' ref = 'pass'/> </div>
        <div><input type = 'text' placeholder = 'Bill amount' ref ='bill'  /></div>
        <button onClick = {this.charge}>CHARGE</button>
        <div>Amount: ${this.props.balance}</div>
      </div>
    );
  }
});
        // <button onClick = {this.requestAmount}>Get Amount</button></div>

module.exports = welcome;

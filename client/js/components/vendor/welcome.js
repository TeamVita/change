var actions = require('../../actions/vendorActions');
var Constants = require('../../constants/Constants.js');

var welcome = React.createClass({

  showBalance: function() {
    var pin = this.refs.pin.getDOMNode().value.trim();
    var pass = this.refs.pass.getDOMNode().value.trim();
    var type = this.props.type;
    actions.showAmount({pin: pin, password: pass, type: type});
  },

  // charge: function (event) {
  //   event.preventDefault();
  //   var bill = this.refs.bill.getDOMNode().value.trim();
  //   actions.charge({pin: pin, password: pass, bill: bill, type: type});
  // },

  render: function() {
    return (
      <div>
        <h1>WELCOME {this.props.business}</h1>
        <div><input type = 'text' placeholder = 'search for pin' ref = 'pin' size = '20'/></div>
        <div><input type = 'password' placeholder = 'enter password' ref = 'pass'/> </div>
        <button onClick={this.showBalance}>Current Balance</button>
        <div><input type = 'text' value = {this.props.balance} readOnly/></div>
        <div><input type = 'text' placeholder = 'Bill amount' ref ='bill'  /></div>
        <button onClick = {this.charge}>CHARGE</button>
      </div>
    );
  }
});
        // <button onClick = {this.requestAmount}>Get Amount</button></div>

module.exports = welcome;

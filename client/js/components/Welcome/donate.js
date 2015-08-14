var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');

var donate = React.createClass({

  handleSubmit: function(event) {
    event.preventDefault();
    var pin = this.refs.PIN.getDOMNode().value.trim();
    var amt = this.refs.amount.getDOMNode().value.trim();
    var promise = new Promise(function (resolve, reject){
      actions.donate({pin: pin, amt: amt}, resolve);
    });
    promise.then(function(resp) {
      actions.switchPage('SUCCESS');
    });
  },

  render: function() {
    return (
      <div id = 'form'>
        <form onSubmit ={this.handleSubmit}><h1>Welcome to your account</h1>
          <div class ='input'><input placeholder='PIN' type ='text' ref ='PIN' /></div>
          <div class ='input'><input placeholder='amount' type = 'text' ref ='amount' /></div>
          <input type ="submit" />
        </form>
      </div>
    );
  }
});

module.exports = donate;

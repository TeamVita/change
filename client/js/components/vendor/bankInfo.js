var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');
var Promise = require('promise');

var Signup = React.createClass({

  handleSubmit: function(event) {

    event.preventDefault();
    var bankData = {};
    for (var field in this.refs) {
      bankData[field] = field.getDOMNode().value.trim();
    }
    var promise = new Promise(function (resolve, reject) {
        // TODO send bankData to server
        actions.signUp(bankData, resolve);
      });
    promise.then(function(resp) {
      // render welcome
    });
  },

  render: function() {

    return (
      <div id = 'form'>
        <form onSubmit ={this.handleSubmit}><h1>Give us your bank account info.</h1>
          <div class ='input'><input placeholder='routing' type ='text' ref ='routing' /></div>
          <div class ='input'><input placeholder='account' type = 'text' ref ='account' /></div>
          <input type ="submit" />
        </form>
      </div>
    );
  }
});

module.exports = bankInfo;

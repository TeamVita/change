var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');
var Promise = require('promise');

var bankInfo = React.createClass({

  render: function() {

    return (
      <div>
        <h1>Give us your bank account info.</h1>
        <div class ='input'><input placeholder='routing number' type ='text' ref ='routing' /></div>
        <div class ='input'><input placeholder='account number' type = 'text' ref ='account' /></div>
        <input type ="submit" />
      </div>
    );
  }
});

module.exports = bankInfo;

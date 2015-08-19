var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');
var Promise = require('promise');

var bankInfo = React.createClass({

  render: function() {

    return (
      <h1>Give us your bank account info.</h1>
      <div class ='input'><input placeholder='routing' type ='text' ref ='routing' /></div>
      <div class ='input'><input placeholder='account' type = 'text' ref ='account' /></div>
      <input type ="submit" />
    );
  }
});

module.exports = bankInfo;

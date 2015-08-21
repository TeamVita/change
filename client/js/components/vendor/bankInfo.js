var actions = require('../../actions/actions');
var Constants = require('../../constants/Constants.js');

var bankInfo = React.createClass({

  getFields: function() {
    var fields = {};
    for (var field in this.refs){
      fields[field] = this.refs[field].getDOMNode().value.trim();
    }
    return fields;
  },

  render: function() {

    return (
      <div>
        <h1>Give us your bank account info.</h1>
        <div class ='input'><input placeholder='routing number' type ='text' ref ='routing' value='110000000'/></div>
        <div class ='input'><input placeholder='account number' type = 'text' ref ='account' value='000123456789'/></div>
        <input type ="submit" />
      </div>
    );
  }
});

module.exports = bankInfo;

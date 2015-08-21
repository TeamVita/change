var actions = require('../../actions/actions');
var Constants = require('../../constants/Constants.js');

var welcome = React.createClass({

  render: function() {
    return (
      <div>
        <h1>WELCOME {this.props.business}</h1>
        <div><input type = 'text' placeholder = 'search for pin' size = '20'/></div>
        <div><input type = 'text' placeholder ='amount displayed from database'  /></div>
        <div><input type = 'text' placeholder = 'Total amount from purchases'  /></div>
        <button>CHARGE</button>
      </div>
    );
  }
});

module.exports = welcome;

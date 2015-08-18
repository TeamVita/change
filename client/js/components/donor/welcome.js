var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');

var welcome = React.createClass({

  // handleSubmit: function(event) {
  //   event.preventDefault();
  //   var pin = this.refs.PIN.getDOMNode().value.trim();
  //   var amt = this.refs.amount.getDOMNode().value.trim();
  //   var promise = new Promise(function (resolve, reject){
  //     actions.donate({pin: pin, amt: amt}, resolve);
  //   });
  //   promise.then(function(resp) {
  //     actions.switchPage('SUCCESS');
  //   });
  // },

  render: function() {
    var partial;
     if (this.props.appState.pane === 'donate') {
      NewPane = require('./donate');
      partial = <NewPane />;
    }
    else if (this.props.appState.pane === 'success'){
      NewPane = require('./success');
      partial = <NewPane />;
    }
    return (
      <div>
        {partial}
      </div>
    );
  }
});

module.exports = welcome;

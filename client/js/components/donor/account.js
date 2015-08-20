var Account = React.createClass({

  render: function() {
  	return (
  		<div id = 'myaccount'>
  	 	<h3>Welcome to your account</h3>
  			<button>This will be a button to dispaly logs</button>
  			<button>This will be a button to show how donations could be spent</button>
  		</div>
  	);
  }
});

module.exports = Account;
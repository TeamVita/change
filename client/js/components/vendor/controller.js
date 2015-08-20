var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');
var PersonalInfo = require('./personalInfo');
var BankInfo = require('./bankInfo');

var Signup = React.createClass({

  getInitialState: function() {
    return {pane: 'personal'};
  },

  handleSubmit: function(event) {

    event.preventDefault();
    if (this.state.pane === 'personal'){
      personalResponseHandler.bind(this)();
    } else {
      var bankAccount = this.refs.partial.getFields();
      Stripe.bankAccount.createToken({
        country: 'US',
        currency: 'USD',
        routing_number: bankAccount.routing,
        account_number: bankAccount.account
      }, bankResponseHandler).bind(this);
    }

    function personalResponseHandler() {
      var accountData = this.refs.partial.getFields();
      // save accountData to state and render bank collection form
      this.setState({
        pane: 'bank',
        accountData: accountData
      });
    }

    function bankResponseHandler(status, response) {

      if (response.error) {
        // TODO let the user know somehow
        // response.error.message might be useful
        console.log('error in bankResponseHandler! | ' + error.message);
      } else {
        // response contains id and bank_account, which contains additional bank account details
        this.state.accountData.token = response.id;
        // TODO post accountData to server
        console.log('hell yeah!', this.state.accountData.token);
      }
    }

  },

  render: function() {
    var partial;
    if (this.state.pane === 'personal') {
      partial = <PersonalInfo ref='partial' />;
    }
    else if (this.state.pane === 'bank'){
      partial = <BankInfo ref='partial' />;
    }

    return (
      <div ref = 'form'>
        <form onSubmit ={this.handleSubmit}>
          {partial}
        </form>
      </div>
    );
  }
});

module.exports = Signup;
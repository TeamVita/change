var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');
var PersonalInfo = require('./personalInfo');
var BankInfo = require('./bankInfo');

var Signup = React.createClass({

  handleSubmit: function(event) {

    event.preventDefault();
    if (this.state.pane === 'personal'){
      personalResponseHandler();
    } else {
      Stripe.bankAccount.createToken({
        country: 'US',
        currency: 'USD',
        routing_number: this.refs.routing.getDOMNode().value.trim(),
        account_number: this.refs.account.getDOMNode().value.trim()
      }, stripeResponseHandler);
    }

    var personalResponseHandler = function() {
      var accountData = {};
      for (var field in this.refs) {
        accountData[field] = field.getDOMNode().value.trim();
      }

      var promise = new Promise(function (resolve, reject) {
          actions.signUp(accountData, resolve);
        });
      promise.then(function(resp) {
        // TODO render welcome component
      });
    };

    var stripeResponseHandler = function() {
      var $form = $('#payment-form');

      if (response.error) {
        // Show the errors on the form
        $form.find('.bank-errors').text(response.error.message);
        $form.find('button').prop('disabled', false);
      } else {
        // response contains id and bank_account, which contains additional bank account details
        var token = response.id;
        // Insert the token into the form so it gets submitted to the server
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));
        // and submit
        $form.get(0).submit();
      }
    };

  },

  render: function() {
    var partial;
    if (this.state.pane === 'personal') {
      partial = <PersonalInfo />;
    }
    else if (this.state.pane === 'bank'){
      partial = <BankInfo />;
    }

    return (
      <div id = 'form'>
        <form onSubmit ={this.handleSubmit}>
          {partial}
        </form>
      </div>
    );
  }
});

module.exports = Signup;

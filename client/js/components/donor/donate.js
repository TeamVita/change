var DonorActions = require('../../actions/donorActions');
var Constants = require('../../Constants/Constants.js');
var StripeCheckout = require('react-stripe-checkout');
var Keys = require('../../../../config.js');

var Donate = React.createClass({


  handleSubmit: function(event) {
  console.log('Here is the key:', Keys);
    event.preventDefault();

    var pin = this.refs.PIN.getDOMNode().value.trim();
    var amt = this.refs.amount.getDOMNode().value.trim();
    DonorActions.donate({pin: pin, amt: amt});
  },

  onToken: function(token) {

    DonorActions.sendToken(token);
  },
    
  render: function() {
    var string_amount = parseInt(this.props.amount);
    var amount = (string_amount * 100)|| 100;
    return (
      <div id = 'form'>
        <form onSubmit ={this.handleSubmit}><h1>Make a Change!</h1>
          <div class ='input'><input placeholder='PIN' type ='text' ref ='PIN' /></div>
          <div class ='input'><input placeholder='amount' type = 'text' ref ='amount' /></div>
          <input type ="submit" />
        </form>
      <StripeCheckout
              name="Change"
              description= "Thanks for Change!" 
              panelLabel="Donate"
              amount={amount}
              currency="USD"
              stripeKey= {Keys.PUBLIC_KEY}
              token={this.onToken}>
              <button className="myOwnButton">
                <span>Take my money</span>
              </button>
        </StripeCheckout>
      </div>
    );
  }
});

module.exports = Donate;

var DonorActions = require('../../actions/donorActions');
var Constants = require('../../constants/Constants.js');
var StripeCheckout = require('react-stripe-checkout');
var Keys = require('../../../../config.js');


var Donate = React.createClass({

  // Upon token receipt, wrap data package and POST for payment creation
  onToken: function(token) {
    var pin = this.refs.PIN.getDOMNode().value.trim();
    var amt = this.refs.amount.getDOMNode().value.trim();
    DonorActions.donate({pin: pin, amt: amt, type: this.state.type, token: JSON.stringify(token)});
  },

  // Handle selection of clothing or food donation
  handleClick: function(event) {
    event.preventDefault();
    var type = event.target.value;
    this.setState({type: type});
  },

  render: function() {
    var string_amount = parseInt(this.props.amount);
    var amount = (string_amount * 100)|| 100;
    return (
      <div id = 'form'>
        <form><h1>Make a Change!</h1>
          <div className='input'><input placeholder='PIN' type ='text' ref ='PIN' /></div>
          <div className='input'><input placeholder='amount' type = 'text' ref ='amount' /></div>
        </form>
        <button onClick={this.handleClick} value='food'>Food</button>
        <button onClick={this.handleClick} value='clothing'>Clothing</button>
        <br/>
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

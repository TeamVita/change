var DonorActions = require('../../actions/donorActions');
var Constants = require('../../constants/Constants.js');
var StripeCheckout = require('react-stripe-checkout');
var Keys = require('../../../../config.js');
var actions = require('../../actions/actions');

var Donate = React.createClass({

  getInitialState: function() {
    return {amount: 100};
  },

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

  // Handle selection of donation amount
  handleChange: function(event) {
    event.preventDefault();
    var string_amount = parseInt(event.target.value);
    var amount = (string_amount * 100);
    this.setState({amount: amount});
  },

  vendorPage: function(){
    actions.switchPage('VENDOR');
  },

  shelterPage: function (){
    actions.switchPage('SHELTER');
  },

  render: function() {
    
    return (
      <div id = 'form'>
        <form><h1>Make a Change!</h1>
          <div className='input'>
            <input placeholder='PIN' type ='text' ref ='PIN' /></div>
          <div className='input'>
            <input placeholder='amount' type = 'text' ref ='amount' onChange={this.handleChange} />
          </div>
        </form>
        <div>
          <button onClick={this.handleClick} value='food'>Food</button>
          <button onClick={this.handleClick} value='clothing'>Clothing</button>
        </div>
        <br/>
      <StripeCheckout
              name="Change"
              description= "Thanks for Change!"
              panelLabel="Donate"
              amount={this.state.amount}
              currency="USD"
              stripeKey= {Keys.PUBLIC_KEY}
              token={this.onToken}>
              <button className="myOwnButton">
                <span>Take my money</span>
              </button>
        </StripeCheckout>
        <br/>
        <button onClick= {this.vendorPage}>Vendor</button>
        <button onClick= {this.shelterPage}>Shelter</button>
      </div>
    );
  }
});

module.exports = Donate;

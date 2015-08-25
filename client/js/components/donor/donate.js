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
        console.log('hello');

    return (
      <div id="contact">
        <header className="fullwidth">
            <img src={"./styles/images/Change_logo.png"}/>
          </header>
        <div className="container">
              <h2 className="text-center formheader2">Make a Donation</h2>

               <div className="row">
                  <div className="form-group col-sm-6 col-sm-4 col-sm-offset-4 text-center floating-label-form-group controls">
                    <span className="fonty">Pin Tag #</span>

                      <input type="text" className="text-center" placeholder="####" id="name" ref='account'/>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-6 col-sm-4 col-sm-offset-4 text-center floating-label-form-group controls">
                    <span className="fonty">Amount</span>
                      <input type="text" onChange={this.handleChange} className="text-center" placeholder="$0.00" id="name" ref='account'/>
                  </div>
                </div>

            <div className="col-lg-12 text-center">
              <h4 className="formheader">What would you like to give?</h4>
               <div className="space">
                <button type="submit" onClick={this.handleClick} value='clothing' className="btn btn-lg clothes">
                  <input type ='image' src={"./styles/images/Clothes_Icon.png"}ref ='PIN' />
                </button>
                 <button type="submit" onClick={this.handleClick} value='food' className="btn btn-lg clothes">
                  <input type ='image' src={"./styles/images/Food_Icon.png"}ref ='PIN' />
                </button>
              </div>
            </div>
              <div id="success" className="button"></div>
                  <div className="row boo">
                    <div className="form-group col-xs-12 text-center booga2">



              <br/>
              <StripeCheckout
              name="Change"
              description= "Thanks for Change!"
              panelLabel="Donate"
              amount={this.state.amount}
              currency="USD"
              stripeKey= {Keys.PUBLIC_KEY}
              token={this.onToken}>
              <button className="text-center btn btn-success btn-lg boo button">
                <span>Take my money</span>
              </button>
        </StripeCheckout>
        <br/>
         </div>
                  </div>
        </div>
        <button onClick= {this.vendorPage}>Vendor</button>
        <button onClick= {this.shelterPage}>Shelter</button>

         <header className="fullwidth">
            <img src={"./styles/images/Change_logo.png"}/>
          </header>
      </div>
    );
  }
});

module.exports = Donate;

var DonorActions = require('../../actions/donorActions');
var Constants = require('../../constants/Constants.js');
var StripeCheckout = require('react-stripe-checkout');
var Keys = require('../../../../config.js');
var actions = require('../../actions/actions');

var Donate = React.createClass({

  getInitialState: function() {
    return {
      amount: 100,
      foodColor: 'btn btn-lg kind',
      clothingColor: 'btn btn-lg kind'
    };
  },

  requestStatus: function(response) {
    if (response === 'error') {
      this.setState({
        failure: true
      });
    } else {
      this.setState({
        failure: false
      });
    }
  },

  // Upon token receipt, wrap data package and POST for payment creation
  onToken: function(token) {
    var pin = React.findDOMNode(this.refs.PIN).value.trim();
    var amt = React.findDOMNode(this.refs.amount).value.trim();
    DonorActions.donate({pin: pin, amt: amt, type: this.state.type, token: JSON.stringify(token)}, this.requestStatus.bind(this));
  },

  // Handle selection of clothing or food donation
  handleClick: function(event) {
    event.preventDefault();
    var type = event.target.value;
    var newFoodColor, newClothingColor;
    if (type === 'food') {
      newFoodColor = 'btn btn-lg highlighted';
      newClothingColor = 'btn btn-lg kind';
    } else {
      newFoodColor = 'btn btn-lg kind';
      newClothingColor = 'btn btn-lg highlighted';
    }
    this.setState({
      type: type,
      foodColor: newFoodColor,
      clothingColor: newClothingColor
    });
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

  donorPage: function (){
    actions.switchPage('DONOR');
  },

  aboutPage: function() {
    console.log('hits about function');
    actions.switchPage('ABOUT');
  },

  render: function() {
    return (
      <div id="contact">
        <header className="fullwidth">
            <img className="logo" onClick={this.donorPage} src={"./styles/images/Change_logo.png"}/>
          </header>
        <div className="container">
              <h2 className="text-center formheader2">Make a Donation</h2>

               <div className="row">
                  <div className="form-group col-sm-6 col-sm-4 col-sm-offset-4 text-center floating-label-form-group controls">
                    <span className="fonty">Pin Tag #</span>
                      <input type="text" maxLength='4' className="text-center" placeholder="####" id="name" ref='PIN'/>
                  </div>
                </div>

                <div className="row">
                  <div className="form-group col-sm-6 col-sm-4 col-sm-offset-4 text-center floating-label-form-group controls">
                    <span className="fonty">Amount:</span>
                      <input type="text" onChange={this.handleChange} className="text-center" placeholder="$0.00" id="name" ref='amount'/>
                  </div>
                </div>

            <div className="col-lg-12 text-center">
              <h4 className="formheader">What would you like to give?</h4>
               <div className="space">
                <button type="submit" onClick={this.handleClick} value='clothing' className={this.state.clothingColor}>
                  <input type ='image' onClick={this.handleClick} value='clothing' src={"./styles/images/Clothes_Icon.png"} />
                </button>
                 <button type="submit" onClick={this.handleClick} value='food' className={this.state.foodColor}>
                  <input type ='image' onClick={this.handleClick} value='food' src={"./styles/images/Food_Icon.png"} />
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
                <span>Make a change</span>
              </button>
        </StripeCheckout>
        {this.state.failure ? <p>No record was found for that PIN. Please try your donation again with a different PIN.</p> : null}
        <br/>


            </div>
          </div>
        </div>
   
         <header className="fullwidth">
<<<<<<< HEAD
            <div className="container text-center">
                <div className="row">
                    <div className="footer-col col-md-4 logo">
                        <h3><a href='../../../practice.html'>About Us</a></h3>
=======
                <div className="row footersize">
                    <div className="col-md-4 logo">
                        <p onClick={this.donorPage}>About Us</p>
>>>>>>> [refactor] Add footer to all pages
                    </div>
                    <div className="col-md-4 logo">
                        <p onClick= {this.vendorPage}>Vendors</p>
                    </div>
                    <div className="col-md-4 logo">
                        <p onClick= {this.shelterPage}>Shelters</p>
                    </div>
            </div>
          </header>
          
      </div>
    );
  }
});

module.exports = Donate;

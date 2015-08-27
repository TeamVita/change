var actions = require('../../actions/vendorActions');
var Constants = require('../../constants/Constants.js');

var welcome = React.createClass({

  showBalance: function() {
    var pin = this.refs.pin.getDOMNode().value.trim();
    var type = this.props.type;
    if (pin.length === 4) {
      actions.showAmount({pin: pin, type: type});
    }
  },

  charge: function (event) {
    var pin = this.refs.pin.getDOMNode().value.trim();
    var bill = this.refs.bill.getDOMNode().value.trim();
    var pass = this.refs.pass.getDOMNode().value.trim();
    // console.log("Data in charge()", pin, bill, pass);
    actions.charge({pin: pin, password: pass, bill: bill, type: this.props.type});
  },

  donorPage: function (){
    actions.switchPage('DONOR');
  },

  render: function() {
    return (
      <div id="contact">
        <header className="fullwidth">
            <img onClick={this.donorPage} src={"./styles/images/Change_logo.png"}/>
          </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="formheader">Welcome {this.props.business}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <form id="contactForm">
                <div className="row control-group whitey">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Pin Tag Search
                      <input type="number" onChange={this.showBalance} className="form-control" placeholder="" ref='pin'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Enter Password
                      <input type="number" className="form-control" placeholder="" ref='pass'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Total Purchase Amount
                      <input type="number" className="form-control" placeholder="" ref='bill'/>
                  </div>
                </div>
                <div id="success" className="button"></div>
                  <div className="row">
                    <div className="form-group col-xs-12 text-center">
                      <button type="submit" onClick={this.charge} className="btn btn-success btn-lg">Send</button>
                    </div>
                  </div>

                <div>
                  <div>
                    Recipient Current Balance: ${this.props.balance}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
         <header className="fullwidth">
            <img onClick={this.donorPage} src={"./styles/images/Change_logo.png"}/>
          </header>
      </div>
    );
  }
});

module.exports = welcome;

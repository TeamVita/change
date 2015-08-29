var actions = require('../../actions/vendorActions');
var Constants = require('../../constants/Constants.js');

var welcome = React.createClass({

  showBalance: function() {
    var pin = this.refs.pin.getDOMNode().value.trim();
    var password = this.refs.pass.getDOMNode().value.trim();
    var type = this.props.type;
    if (pin.length === 4) {
      actions.showAmount({
        pin: pin,
        type: type,
        password: password
      });
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

      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="formheader">Welcome {this.props.business}</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="row control-group whitey">
              <div className="form-group col-xs-12 floating-label-form-group">
                <span className="spacey">Pin Tag Search:</span>
                <input type="number" onChange={this.showBalance} className="" placeholder="" ref='pin'/>
              </div>
            </div>

            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <span className="spacey">Enter Password:</span>
                  <input type="text" className="" placeholder="" ref='pass'/>
              </div>
            </div>

            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <span className="spacey">Total Purchase Amount:</span>
                   <input type="number" className="" placeholder="" ref='bill'/>
              </div>
            </div>

              <div id="success" className="button2"></div>
                <div className="row">
                  <div className="form-group col-xs-12 text-center">
                    <button type="submit" onClick={this.charge} className="btn btn-success btn-lg">Charge</button>
                  </div>
                </div>

                <div className="row control-group space3 text-center">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <span className="space3">Recipient Current Balance: ${this.props.balance}</span>
                  </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = welcome;
var actions = require('../../actions/actions');
var Constants = require('../../constants/Constants.js');
var actions = require('../../actions/actions');

var bankInfo = React.createClass({

  // Collect values from input fields
  getFields: function() {
    var fields = {};
    for (var field in this.refs){
      fields[field] = this.refs[field].getDOMNode().value.trim();
    }
    return fields;
  },

  donorPage: function (){
    actions.switchPage('DONOR');
  },

  render: function() {

    return (
      <div id="contact">
        <header className="fullwidth">
            <img className="logo" onClick={this.donorPage} src={"./styles/images/Change_logo.png"}/>
          </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="formheader">Banking Information</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">

                <div className="row whitey">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <span className="spacey">Routing Number:</span>
                      <input type="text" value = "110000000"className="" placeholder="" id="email" ref='routing'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <span className="spacey">Account Number:</span>
                      <input type="text" value= "000123456789" className="" placeholder="" id="name" ref='account'/>
                  </div>
                </div>


                <div id="success" className="button2"></div>
                  <div className="row">
                    <div className="form-group col-xs-12 text-center">
                      <button type="submit" className="btn btn-success btn-lg">Send</button>
                    </div>
                  </div>
            </div>
          </div>
        </div>
         <header className="fullwidth">
            <img className="logo" onClick={this.donorPage} src={"./styles/images/Change_logo.png"}/>
          </header>
      </div>
    );
  }
});

module.exports = bankInfo;

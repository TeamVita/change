var actions = require('../../actions/actions');
var Constants = require('../../constants/Constants.js');

var bankInfo = React.createClass({

  // Collect values from input fields
  getFields: function() {
    var fields = {};
    for (var field in this.refs){
      fields[field] = this.refs[field].getDOMNode().value.trim();
    }
    return fields;
  },

  render: function() {

    return (
      <div id="contact">
        <header className="fullwidth">
            <img src={"./styles/images/Change_logo.png"}/>
          </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="formheader">Bank Account Information</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">

                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Routing Number
                      <input type="text" className="form-control" placeholder="" id="email" ref='routing'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Account Number
                      <input type="text" className="form-control" placeholder="" id="name" value='110000000' ref='account'/>
                  </div>
                </div>
                <div id="success" className="button"></div>
                  <div className="row">
                    <div className="form-group col-xs-12 text-center">
                      <button type="submit" className="btn btn-success btn-lg">Send</button>
                    </div>
                  </div>

            </div>
          </div>
        </div>
         <header className="fullwidth">
            <img src={"./styles/images/Change_logo.png"}/>
          </header>
      </div>
    );
  }
});

module.exports = bankInfo;

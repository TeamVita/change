var actions = require('../../actions/actions');
var Constants = require('../../constants/Constants.js');

var personalInfo = React.createClass({

  // Collect values from input fields
  getFields: function() {
    var fields = {};
    for (var key in this.refs){
      fields[key] = this.refs[key].getDOMNode().value.trim();
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
              <h2 className="formheader">Vendor Sign Up</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <form id="contactForm">
                <div className="row control-group whitey">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Email
                      <input type="text" className="form-control" placeholder="" id="email" ref='email'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    First Name
                      <input type="text" className="form-control" placeholder="" id="name" ref='first_name'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Last Name
                      <input type="text" className="form-control" placeholder="" id="name" ref='last_name'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                      Birthday
                      <input type="date" className="form-control" placeholder="Birthday" id="birthday" ref='dob_day'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Business Name
                      <input type="text" className="form-control" placeholder="" id="name" ref='business_name'/>
                  </div>
                </div>

                <div id="success" className="button"></div>
                  <div className="row">
                    <div className="form-group col-xs-12 text-center">
                      <button type="submit" className="btn btn-success btn-lg">Send</button>
                    </div>
                  </div>
              </form>
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

module.exports = personalInfo;

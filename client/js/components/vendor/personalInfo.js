var actions = require('../../actions/actions');
var Constants = require('../../constants/Constants.js');
var actions = require('../../actions/actions');

var personalInfo = React.createClass({

  getButton: function() {
    // return this.refs['vendorType'].getDOMNode().value.trim();
    return this.refs['vendorType'];
  },

  // Collect values from input fields
  getFields: function() {
    var fields = {};
    for (var key in this.refs){
      fields[key] = this.refs[key].getDOMNode().value.trim();
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
            <h2 className="formheader">Vendor Sign Up</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="row control-group whitey">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <span className="spacey">Email:</span>
                <input type="text" className="" placeholder="" id="email" ref='email'/>
              </div>
            </div>

            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <span className="spacey">First Name:</span>
                  <input type="text" className="" placeholder="" id="name" ref='first_name'/>
              </div>
            </div>

            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <span className="spacey">Last Name:</span>
                  <input type="text" className="" placeholder="" id="name" ref='last_name'/>
              </div>
            </div>

            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <span className="spacey">Birthday:</span>
                  <input type="date" className="" placeholder="Birthday" id="birthday" ref='dob_day'/>
              </div>
            </div>

            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <span className="spacey">Business Name:</span>
                  <input type="text" className="" placeholder="" id="name" ref='business_name'/>
              </div>
            </div>


            <div className="col-lg-12 text-center">
              <h4 className="formheader">What type of Vendor are you?</h4>
               <div className="space">
                <button type="submit" onClick={this.handleClick} value='clothing' ref="food" className="btn btn-lg clothes">
                  <input type ='image' onClick={this.handleClick} value='clothing' src={"./styles/images/Clothes_Icon.png"} />
                </button>
                <button type="submit" onClick={this.handleClick} value='food' ref="clothing" className="btn btn-lg clothes">
                  <input type ='image' onClick={this.handleClick} value='food' src={"./styles/images/Food_Icon.png"} />
                </button>
              </div>
            </div>

            <div id="success" className="button4"></div>
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

module.exports = personalInfo;

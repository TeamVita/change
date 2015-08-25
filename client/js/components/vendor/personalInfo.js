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
        <div className="container fonty">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="formheader">Vendor Sign Upppp</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">

                <div className="row control-group whitey">
                  <div className="form-group col-md-12 floating-label-form-group controls">
                    <span className='fonty'>Email: </span>
                      <input type="text" className="" placeholder="" id="" ref='email'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12  controls">
                    <span className='fonty'>First Name </span>
                      <input type="text" className="form-control" placeholder="" id="name" ref='first_name'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <span className='fonty'>Last Name</span>
                      <input type="text" className="form-control" placeholder="" id="name" ref='last_name'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <span className='fonty'>Birthday</span>
                      <input type="date" className="form-control" placeholder="Birthday" id="birthday" ref='dob_day'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <span className='fonty'>Business Name</span>
                      <input type="text" className="form-control" placeholder="" id="name" ref='business_name'/>
                  </div>
                </div>

                <div id="success" className="button"></div>
                  <div className="row boo">
                    <div className="form-group col-xs-12 text-center booga2">
                      <button type="submit" className="btn btn-success btn-lg">Submit</button>
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

module.exports = personalInfo;

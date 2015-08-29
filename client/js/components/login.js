var actions = require('../actions/actions');

var login = React.createClass({

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
     
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="formheader2">Log in to make a CHANGE</h2>
            </div>
          </div>
            <div className="row">
                  <div className="form-group col-sm-6 col-sm-4 col-sm-offset-4 text-center floating-label-form-group controls">
                    <span className="fonty">Username</span>
                      <input type="text" className="text-center" placeholder="abc@abc.com" id="email" ref='email'/>
                  </div>
                </div>
            <div className="row">
                  <div className="form-group col-sm-6 col-sm-4 col-sm-offset-4 text-center floating-label-form-group controls">
                    <span className="fonty">Password</span>
                      <input type="password" className="text-center" placeholder="" id="name" ref='password' />
                  </div>
                </div>

          <div id="success" className="button"></div>
                  <div className="row boo">
                    <div className="form-group col-xs-12 text-center booga2">
                      <button type="submit" className="btn btn-success btn-lg">Login</button>
                    </div>
                  </div>

          </div>
        </div>
    );
  }
});

module.exports = login;

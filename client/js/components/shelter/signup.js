var actions = require('../../actions/actions');
var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../constants/Constants.js');

var OrgSignup = React.createClass({

  getInitialState: function() {
    return {text: ""};
  },

  getFields: function() {
    var fields = {};
    for (var keys in this.refs) {
      fields[keys] = this.refs[keys].getDOMNode().value.trim();
    }
    return fields;
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

// <div className ='input'><input placeholder='Password' ref='password' type='text'/></div>
  render: function() {
    return (
      <div id="contact">
        <header className="fullwidth">
            <img src={"./styles/images/Change_logo.png"}/>
          </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="formheader">Organization Login</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <form id="contactForm">
                <div className="row control-group whitey">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Organization Name
                      <input type="text" className="form-control" placeholder="" id="email" ref='email'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Password
                      <input type="password" onChange={this.onChange} className="form-control" placeholder="" id="name" ref='password' value={this.state.text}/>
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

module.exports = OrgSignup;

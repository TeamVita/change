var React = require('react');
var actions = require('../../actions/actions');
var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../constants/Constants.js');
var actions = require('../../actions/actions');

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

  donorPage: function (){
    actions.switchPage('DONOR');
  },

  render: function() {
    return (

      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="formheader2">Shelter Signup</h2>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-sm-6 col-sm-4 col-sm-offset-4 text-center floating-label-form-group controls">
              <span className="fonty">Organization Name:</span>
                <input type="text" className="text-center" placeholder="abc@abc.com" id="email" ref='email'/>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6 col-sm-4 col-sm-offset-4 text-center floating-label-form-group controls">
              <span className="fonty">Password:</span>
                <input type="password" onChange={this.onChange} className="text-center" placeholder="" id="name" ref='password' value={this.state.text}/>
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

module.exports = OrgSignup;

var React = require('react');
var actions = require('../../actions/actions');
var Constants = require('../../constants/Constants.js');

var NewPin = React.createClass({

  render: function() {

    return (
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="formheader">Here is your new account info:</h2>
            </div>
          </div>
        <div>

        <div id="success" className=""></div>
            <div className="row">
              <div className="form-group col-xs-12 text-center">
                 <h2>{this.props.PIN}</h2>
              </div>
            </div>
        </div>

        <div id="success" className=""></div>
          <div className="row">
            <div className="form-group col-xs-12 text-center">
              <h2>{this.props.password}</h2>
            </div>
          </div>
        </div>
    
      </div>
    );
  }
});

module.exports = NewPin;

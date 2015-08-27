var actions = require('../../actions/actions');
var Constants = require('../../constants/Constants.js');

var NewPin = React.createClass({

  render: function() {

    return (
      <div id="contact">
        <header className="fullwidth">
            <img className="logo" onClick={this.donorPage} src={"./styles/images/Change_logo.png"}/>
          </header>
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

         <header className="fullwidth">
            <h2>{this.props.password}</h2>
          </header>
      </div>
    );
  }
});

module.exports = NewPin;

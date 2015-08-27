var shelterActions = require('../../actions/shelterActions');
var Constants = require('../../constants/Constants.js');
var NewPin = require('./newpin.js');
var actions = require('../../actions/actions');


var welcome = React.createClass({

  _states: {
    blank: function() {
      return <div></div>
    },
    newPin: function() {
      return <NewPin PIN={this.state.PIN} password={this.state.password}/>
    }
  },

  getInitialState: function() {
    return {pane: 'blank'};
  },

  // Save results of PIN generation to state and display NewPin component
  showResults: function(account) {
    this.setState({
      pin: account.pin,
      password: account.password,
      pane: 'newPin'
    });
  },

  createPIN: function(event) {
    event.preventDefault();
    shelterActions.createPIN(this.showResults.bind(this));
  },

  donorPage: function (){
    actions.switchPage('DONOR');
  },

  render: function() {
    // var partial = this._states[this.state.pane]();
    var partial;
    if (this.state.pane === 'blank') {
      partial = <div></div>
    } else if (this.state.pane === 'newPin') {
      partial = <NewPin PIN={this.state.pin} password={this.state.password}/>
    }
    return (
      <div id="contact">
        <header className="fullwidth">
            <img onClick={this.donorPage} src={"./styles/images/Change_logo.png"}/>
          </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="formheader">Welcome {this.props.business}</h2>
            </div>
          </div>
          <div>
        
          <div id="success" className="button4"></div>
              <div className="row">
                <div className="form-group col-xs-12 text-center">
                  <button onClick={this.createPIN} type="submit" className="btn btn-success btn-lg">Create a PIN!</button>
                </div>
            </div>
        </div>
        <br/>
            {partial}
        </div>
         <header className="fullwidth">
            <img onClick={this.donorPage} src={"./styles/images/Change_logo.png"}/>
          </header>
      </div>
    );
  }
});

module.exports = welcome;

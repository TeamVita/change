var actions = require('../../actions/actions');
var Constants = require('../../Constants/Constants.js');

var donate = React.createClass({

  handleSubmit: function(event) {
    event.preventDefault();
    var pin = this.refs.PIN.getDOMNode().value.trim();
    var amt = this.refs.amount.getDOMNode().value.trim();
    actions.donate({pin: pin, amt: amt});
  },

  render: function() {
    return <div id="form">
          <div class="col-md-12">
                <form role="form">
                  <div class="form-group">
                      <label>Your name</label>
                      <input type="text" class="form-control" id="name" />
                    </div>
                    <div class="form-group">
                      <label>Email address</label>
                      <input type="email" class="form-control" id="email" />
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" id="password" />
                    </div>
                    <div class="checkbox">
                      <label>
                          <input type="checkbox"> You have read  agree to the 
                          <a href="#">Terms of service</a>
                      </label>
                    </div>
                    <div class="submit">
                      <a href="index.html" class="button-clear">
                        <span>Create my account</span>
                      </a>
                    </div>
                </form>
              </div>
              </div>
    
  }
});

module.exports = donate;

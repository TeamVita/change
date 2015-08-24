var DonorActions = require('../../actions/donorActions');

var Pass = React.createClass({

	handleSubmit: function(event) {
		event.preventDefault();
		var email = this.refs.email.getDOMNode().value.trim();
		var name = this.refs.name.getDOMNode().value.trim();
		var pass = this.refs.signuppass.getDOMNode().value.trim();

		DonorActions.donorSignUp({email: email, name: name, password: pass});
	},
	render: function() {
		//get props to pass properly
		return (
		<div id="contact">
        <header className="fullwidth">
            <img src={"./styles/images/Change_logo.png"}/>
          </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="formheader">Yooooou have successfully submitted your payment!</h2>
              	<img className="images" src= '../../Assets/checkmark.png'/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <form id="contactForm" onSubmit={this.handleSubmit}>
                <div className="row control-group whitey">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Email
                      <input type="text" className="form-control" placeholder="" id="email" ref='email' value ={this.props.email} />
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Password
                      <input type="text" className="form-control" placeholder="" id="name" ref='first_name'/>
                  </div>
                </div>
                <div><strong>Or</strong></div>
       						 <p>Please fill out the following to Sign up:</p>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Full Name
                      <input type="text" className="form-control" placeholder="" id="name" ref='name'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                      Password
                      <input type="password" className="form-control" placeholder="" id="birthday" ref='pass'/>
                  </div>
                </div>
                <div className="row control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    Re-enter Password
                      <input type="password" className="form-control" placeholder="" id="name" ref='signuppass'/>
                  </div>
                </div>

                <div id="success" className="button"></div>
                  <div className="row">
                    <div className="form-group col-xs-12 text-center">
                      <button type="submit" className="btn btn-success btn-lg">Submit</button>
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

module.exports = Pass;

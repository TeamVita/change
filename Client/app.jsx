var Login = React.createClass({

  handleSubmit: function(event) {
    event.preventDefault();
    var username = React.findDOMNode(this.refs.username).value.trim();
    var pass = React.findDOMNode(this.refs.pass).value.trim();
    this.props.onLoginSubmit({username: username, password: pass});
  },

  render: function() {
    return (
        <form onSubmit ={this.handleSubmit}><h1>Login Here!</h1>
          <input type ='text' ref ='username'/>
          <input type = 'password' ref = "pass" />
          <input type ="submit"/>
        </form>
    );
  }
});

var LoginSubmit = React.createClass({
  handleLoginSubmit: function(user) { 
    $.ajax({
      url: this.props.url, 
      type: 'POST',
      data: user, 
      success: function(data) {
            console.log('The username is: ', data.username);
            console.log('The password is, ', data.password);
          }.bind(this),
            error: function() {
              console.log(error);
          }.bind(this)
    });
  },

  render: function() {
    return (
      <Login onLoginSubmit ={this.handleLoginSubmit} />
    );
  }
});

React.render(<LoginSubmit url ='/login'/>, document.getElementById('test'));
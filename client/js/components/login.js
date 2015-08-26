var login = React.createClass({

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
      <div>
        <h1>Log in to make a CHANGE</h1>
        <div><input type = 'text' placeholder = 'email address' ref='email' /></div>
        <div><input type = 'password' placeholder ='password' ref='password' /></div>
        <input type='submit' />
      </div>
    );
  }
});

module.exports = login;

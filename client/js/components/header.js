var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

// var Reflux = require('reflux');
var SignUp = require('./signup/signup');

var header = React.createClass({
  
  
  render: function() {
    return <nav className='navbar navbar-default header'>
      <div className='container-fluid'>
        // <div= className="navbar-brand">
        //   Change
        // </div>
        <ul className="nav navbar-nav navbar-right">

          <li><a></a></li>
        </ul>
      </div>
    </nav>
  }
})

module.exports = header;
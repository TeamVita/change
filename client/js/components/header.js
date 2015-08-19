var React = require('react');

var Header = React.createClass({  
  render: function() {
    return <header className="navbar navbar-inverse white" role="banner">
      <div className="container">
        <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="index.html" className="navbar-brand">Change</a>
        </div>
        <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul className="nav navbar-nav navbar-right">
           
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    About Us
                    <i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
          
              <li><a href="signup.html">Sign Up & Sign In</a></li>
              <li><a href="signup-rotate.html">Sign Up Miscellaneous</a></li>
              <li><a href="404.html">404 Page</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Blog 
                    <i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
              <li><a href="blog.html">Blog</a></li>
              <li><a href="blogpost.html">Blog Post</a></li>
                </ul>
              </li>
              <li>
                  <a href="signup.html" className="signup visible-md visible-lg">Sign Up</a>
              </li>
            </ul>
        </nav>
      </div>
  </header>
  }
})

module.exports = Header;
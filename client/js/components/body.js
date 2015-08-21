var React = require('react');


var Body = React.createClass({
    render: function () {
        return <div id="hero">
        <div className="container">
         
        <div id="signup">
          <div className="row header">
            <div className="col-md-12">
          <h3 className="logo"></h3>
          <h4>A Little Change Can Go a Long Wayyy</h4>
          </div>
          </div>
        <div className="row">
        <div className="col-md-12">
        <div className="wrapper clearfix">
        <div className="formy">
        <div className="row">
        <div className="col-md-12">
        <form onSubmit ={this.handleSubmit} role="form">
          <div className ='form-group'>
            <label for="PIN">PIN</label>
            <input placeholder='PIN' type ='text' className="form-control" id="email" ref ='PIN' />
          </div>
          <div className ='form-group'>
            <label for="Amount">Amount</label>
            <input placeholder='$$$' type ='text' className="form-control" id="password" ref ='Amount' />
          </div>

         
          <div className="submit">
                      <a href="index.html" className="button-clear colory">
                        <span>Donate</span>
                      </a>
                    </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    }
});

module.exports = Body;
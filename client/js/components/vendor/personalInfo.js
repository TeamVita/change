var actions = require('../../actions/actions');
var Constants = require('../../constants/Constants.js');

var personalInfo = React.createClass({

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
        <h2 className="formheader3 text-center">How Does Change Work</h2>

        <div className="container">
            <div className="">
                <div className="col-lg-12 text-center">
                </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-4">
                <img src={"styles/images/Step_1_Illustration.png"} className="img-responsive center-block" />
                <h4 className="text-center space2">1) Find Someone In Need</h4>
                <p className="text-center caption">If they're wearing a yellow button you can give them Change, so take not of their 4-digit PIN Tag. Some people also write their PIN on a sign.</p>
              </div>
              <div className="col-xs-6 col-sm-4">
                <img src={"styles/images/Step_2_Illustration.png"} className="img-responsive center-block" />
                <h4 className="text-center space2">2) Show That You Care</h4>
                <p className="text-center caption">Open the Change app and enter the PIN Tag #, the amount you'd like to give, and choose to give either food or clothing.</p>
              </div>
              <div className="clearfix visible-xs-block"></div>
              <div className="col-xs-6 col-sm-4">
                <img src={"styles/images/Step_3_Illustration.png"} className="img-responsive center-block" />
                     <h4 className="text-center space2">3) Make A Difference</h4>
                     <p className="text-center caption">Our partner vendors will give credit for your donations to every Change recipient, so they can be fed, warm and happy.</p>
              </div>
            </div>
        </div>
    </div>
    );
  }
});

module.exports = personalInfo;

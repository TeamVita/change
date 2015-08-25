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
      <section id="portfolio">
        <div className="container">
            <div className="">
                <div className="col-lg-12 text-center">
                </div>
            </div>
            <div className="">
              <div className="col-sm-4 portfolio-item">
                    <img src={"styles/images/Step_1_Illustration.png"} className="img-responsive center-block" />
                    <h4 className="text-center">1 Find Someone In Need</h4>
                     <span className="text-center">If they're wearing a yellow button you can give them Change, so take not of their 4-digit PIN Tag. Some people also write their PIN on a sign.</span>
                </div>

            <div className="">
              <div className="col-sm-4 portfolio-item">
                    <img src={"styles/images/Step_2_Illustration.png"} className="img-responsive center-block" />
                    <h4 className="text-center">2 Show That You Care</h4>
                     <span className="text-center">Open the Change app and enter the PIN Tag #, the amount you'd like to give, and choose to give either food or clothing.</span>
                </div>

            <div className="">
              <div className="col-sm-4 portfolio-item">
                    <img src={"styles/images/Step_3_Illustration.png"} className="img-responsive center-block" />
                    <h4 className="text-center">3 Make A Difference</h4>
                     <span className="text-center">Our partner vendors will give credit for your donations to every Change recipient, so they can be fed, warm and happy.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
    );
  }
});

module.exports = personalInfo;

var Dispatcher = require('../dispatcher/Appdispatcher');
var Constants = require('../constants/Constants.js');
var ActionTypes = Constants.ActionTypes;
module.exports = {

	signUp: function(info, welcome) {
		$.ajax({
			url: '/signup/vendor',
			type: 'POST',
			data: info,
			success: function(data) {
				console.log("This is the data received", data);
				welcome('welcome', data);
			},
			error: function(error) {
				console.log(error);
			}
		});
	},

	showAmount: function(recipientInfo) {
		$.ajax({
			url: '/login/vendor/retrieve',
			type: 'POST',
			data: recipientInfo,
			success: function(data) {
				Dispatcher.dispatch({
					pane: 'welcome',
					type: ActionTypes.SHOW_AMOUNT,
					vendorType: data.type,
					balance: data.balance
				});
			},
			error: function(error) {
				console.log(error);
			}
		});
	},

	charge: function(recipientInfo) {
		$.ajax({
			url: '/login/vendor/redeem',
			type: 'POST',
			data: recipientInfo,
			success: function(data) {
				console.log('BALANCE', data.balance);
				Dispatcher.dispatch({
					pane: 'welcome',
					type: ActionTypes.CHARGE,
					balance: data.balance
				});
			},
			error: function(error) {
				console.log(error);
			}
		});
	},

	logIn: function(info, cb) {
		$.ajax({
			url: '/login/vendor',
			type: 'POST',
			data: info,
			success: function(data) {
        if (data.error) {
          var error = data.error;
          console.log(error.message);
          // TODO display error.message to user;
        } else {
          cb('welcome', data);
        }
      },
      error: function(error) {
        console.log(error);
      }
    });
  },

	switchPage: function(page) {
		Dispatcher.dispatch({
			type: ActionTypes.SWITCH_PAGE,
			page: page
		});
	},

};

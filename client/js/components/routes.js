var Router = require('react-router');
var Route = Router.Route;
var HashHistory = require('react-router/lib/hashhistory');
var Change = require('./change');
var DonorController = require('./donor/controller');
var Donate = require('./donor/donate');
var SignUp = require('./donor/password');
var DonorAccount = require('./donor/account');

module.exports = {
	<Router history={new HashHistory}>
		<Route path = '/' component = {Change}>
			<Route path = 'donate' component = {Donate}>
				<Route path = 'signup' component = {Signup}>
					<Route path = 'donoraccount' component = {DonorAccount} />
				</Route>
			</Route>
		</Route>
	</Router>	
};
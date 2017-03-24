/**
 * 
 */
app.config(function($routeProvider) {
	
	$routeProvider
	.when('/home', {
		templateUrl:'resources/app/templates/home.html',
		controller : "homeController"
	})
	.when('/accounts', {
		templateUrl: 'resources/app/templates/accounts.html',
		controller : "accountsController"
	})
	.when('/transactions', {
		templateUrl: 'resources/app/templates/transaction.html',
		controller : "transactionController"
	})
	.when('/register', {
		templateUrl: 'resources/app/templates/register.html',
		controller : "registerController"
	})
	.otherwise({
		templateUrl: 'resources/app/templates/login.html',
		controller : "loginController"	
	});
});
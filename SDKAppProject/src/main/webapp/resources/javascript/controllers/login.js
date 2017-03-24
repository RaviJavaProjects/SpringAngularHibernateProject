/**
 * 
 */
app.controller('loginController', function($scope, AppService){
	$scope.login = function(data){
		AppService.sendData('login', data).then(function(data){
			var j = data;
		});
	}
})
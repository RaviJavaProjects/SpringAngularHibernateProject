/**
 * 
 */
app.controller('registerController', function($scope, AppService){
	$scope.register = function(data){
		AppService.sendData('register', data).then(function(data){
			var j = data;
		});
	}
})
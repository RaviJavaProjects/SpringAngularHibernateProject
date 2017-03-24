/**
 * 
 */
app.service('AppService', function($http, $q){
	return {
		sendData : function(url, data){
			return $http.post(url, data).then(function(response){
				if(typeof response.data === 'object'){
					return response.data;
				}else{
					return $q.reject(response.data);
				}
			}, function(response){
				return $q.reject(response.data);
			})
		}
	}
});
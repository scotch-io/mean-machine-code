angular.module('userService', [])

.factory('User', ['$http', function($http) {

	var service = {};

	service.getUsers = function() {
		return $http.get('/api/users');
	};

	service.getUser = function(id) {

	};

	service.updateUser = function(id, userInfo) {

	};

	service.deleteUser = function(id) {

	};

	return service;

}]);
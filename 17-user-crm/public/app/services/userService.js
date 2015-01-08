angular.module('userService', [])

.factory('User', function($http) {

	var userFactory = {};

	// get a single user
	userFactory.get = function(id) {
		return $http.get('/api/users/' + id);
	};

	// get all users
	userFactory.all = function() {
		return $http.get('/api/users/');
	};

	// create a user
	userFactory.create = function(userData) {
		return $http({
			method: 'POST',
			url: '/api/users/',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			data: userData
		});
	};

	// update a user
	userFactory.update = function(id, userData) {
		return $http.put('/api/users/' + id, userData);
	};

	// delete a user
	userFactory.delete = function(id) {
		return $http.delete('/api/users/' + id);
	};

	return userFactory;

});
angular.module('userService', [])

.factory('User', function($http) {

	var userFactory = {};

	// get a single user
	userFactory.getUser = function(id) {
		return $http.get('/api/users/' + id);
	};

	// get all users
	userFactory.getUsers = function() {
		return $http.get('/api/users/');
	};

	// create a user
	userFactory.createUser = function(userData) {
		return $http.post('/api/users/', userData);
	};

	// update a user
	userFactory.updateUser = function(id, userData) {
		return $http.put('/api/users/' + id, userData);
	};

	// delete a user
	userFactory.deleteUser = function(id) {
		return $http.delete('/api/users/' + id);
	};

	return userFactory;

});
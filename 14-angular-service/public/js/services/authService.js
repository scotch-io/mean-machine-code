angular.module('authService', [])

.factory('Auth', function($http, $cookieStore) {

	var currentUser = $cookieStore.get('user');

	var service = {};

	// log a user in
	// store the given user with token in cookie
	service.login = function(user) {
		$http.post('/api/authenticate', user)
			.success(function(data) {
				// $cookieStore.set('user', data);
			})
			.error(function(data) {

			});
	};

	// log a user out
	service.logout = function() {
		return $http.post('/api/logout');
	};

	// check if a user is logged in
	// return true or false
	service.isLoggedIn = function(user) {

	};

});
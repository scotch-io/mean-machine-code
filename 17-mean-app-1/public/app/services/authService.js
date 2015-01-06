angular.module('authService', [])

// auth factory to login and get information
// inject $http for communicating with the API
// inject $localStorage to store token client-side
.factory('Auth', function($http, $window) {

	// create auth factory object
	var authFactory = {};

	// log a user in
	authFactory.login = function(username, password) {

		return $http.post('/api/authenticate', {
			username: username,
			password: password
		})
			.success(function(data) {
				authFactory.setToken(data.token);
       			return data;
			});
	};

	// get the token out of localstorage
	authFactory.getToken = function() {
		return $window.localStorage.getItem('token');
	};

	// function to set token or clear token
	authFactory.setToken = function(token) {
		if (token) {
			$window.localStorage.setItem('token', token);
		} else {
			$window.localStorage.removeItem('token');
		}
	};

	// return auth factory object
	return authFactory;

})

// application configuration to integrate token into requests
.factory('AuthInterceptor', function(Auth) {

	return {
		request: function(config) {
			var token = Auth.getToken();
			if (token) 
				config.headers = config.headers || {};
		}
	};
	
});
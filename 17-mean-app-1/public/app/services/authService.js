angular.module('authService', [])

// auth factory to login and get information
// inject $http for communicating with the API
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

	// return auth factory object
	return authFactory;

})

// factory for handling tokens
// inject $window to store token client-side
.factory('AuthToken', function($window) {

	var authTokenFactory = {};

	// get the token out of localstorage
	authTokenFactory.getToken = function() {
		return $window.localStorage.getItem('token');
	};

	// function to set token or clear token
	authTokenFactory.setToken = function(token) {
		if (token) {
			$window.localStorage.setItem('token', token);
		} else {
			$window.localStorage.removeItem('token');
		}
	};

	return authTokenFactory;

})

// application configuration to integrate token into requests
.factory('AuthInterceptor', function(AuthToken) {

	var injector = {
		request: function(config) {
			var token = AuthToken.getToken();
			if (token) {
				config.headers['x-access-token'] = token;
			}
			return config;
		}
	};

	return injector;
	
});
angular.module('authService', [])

// auth factory to login and get information
// inject $http for communicating with the API
.factory('Auth', function($http, $window, $q, AuthToken) {

	// create auth factory object
	var authFactory = {};

	// log a user in
	authFactory.login = function(username, password) {

		return $http.post('/api/authenticate', {
			username: username,
			password: password
		})
			.success(function(data) {
				AuthToken.setToken(data.token);
       			return data;
			});
	};

	// log a user out
	authFactory.logout = function() {
		// clear the token
		AuthToken.setToken();
	};

	authFactory.isLoggedIn = function() {
		if (AuthToken.getToken()) {
			console.log('stuff');
			return true;
		}
		else {
			console.log('duh');
			return false;
		}
	};

	authFactory.getUser = function() {
		if (AuthToken.getToken()) {
			console.log('success');
			return $http.get('/api/me');
		} else {
			console.log('error');
			return $q.reject({ message: 'User has no token.' });
		}
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
.factory('AuthInterceptor', function($q, AuthToken) {

	var injector = {
		request: function(config) {
			var token = AuthToken.getToken();
			if (token) 
				config.headers['x-access-token'] = token;
			
			return config;
		},
		responseError: function(response) {
			if (response.status == 401 || response.status == 403)
				$location.path('/login');

			return $q.reject(response);
		}
	};

	return injector;
	
});
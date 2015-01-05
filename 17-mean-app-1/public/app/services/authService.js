angular.module('authService', [])

// auth factory to login and get information
// inject $http for communicating with the API
// inject $localStorage to store token client-side
.factory('Auth', function($http, $localStorage) {

	// create auth factory object
	var authFactory = {};

	// log a user in
	authFactory.login = function(username, password) {

		return $http({
			method: 'POST',
			url: '/api/authenticate', 
			data: {
				username: username,
				password: password
			},
			transformRequest: function(obj) {
				var str = [];
				for(var p in obj)
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				return str.join("&");
		    },
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
			.success(function(data) {
				authFactory.setToken(data.token);
       			 return data;
			});
	};

	// log a user out
	authFactory.logout = function() {
		return $http.post('/api/logout');
	};

	authFactory.isLoggedIn = function() {

	};

	authFactory.getToken = function() {
		return $window.localStorage.getItem('token');
	};

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
.config(function($httpProvider, Auth) {

	$httpProvider.interceptors.push({

		// interceptor to attach token to every request
		request: function(config) {
			if (Auth.isLoggedIn) config.headers['x-access-token'] = Auth.getToken();
			return config;
		},

		// if the user is not logged in
		responseError: function(config) {
			if 	
		}

	});

});
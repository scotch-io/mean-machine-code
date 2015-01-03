angular.module('authService', [])

.factory('Auth', function($http, $window) {

	var authFactory = {

		// log a user in
		login: function(username, password) {

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
		},

		// log a user out
		logout: function() {
			return $http.post('/api/logout');
		},

		isLoggedIn: function() {

		},

		getToken: function() {
			return $window.localStorage.getItem('token');
		},

		setToken: function(token) {
			if (token) {
				$window.localStorage.setItem('token', token);
			} else {
				$window.localStorage.removeItem('token');
			}
		},

	};

	return authFactory;

});
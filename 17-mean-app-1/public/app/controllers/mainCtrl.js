angular.module('mainCtrl', [])

.controller('mainController', function($http) {

	this.users = {};

	this.getUsers = function() {
		$http.get('/api/users')
			.success(function(data) {

				this.users = data;
				this.message = 'hello';
				console.log(this.users);
				console.log(data);

			});
	}

});
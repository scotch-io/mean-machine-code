angular.module('mainCtrl', [])

.controller('mainController', function($http, Auth) {

	var vm = this;

	vm.loggedIn = false;

	// function to handle login form
	vm.doLogin = function() {
		Auth.login(vm.loginData.username, vm.loginData.password)
			.success(function(data) {
				// set the user variable as logged in
				vm.loggedIn = true;
				$location.path('/users');
			});
	};

	// handle logging out
	vm.doLogout = function() {
		Auth.logout()
			.success(function(data) {
				$location.path('/');
			});
	};

});
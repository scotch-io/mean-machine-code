angular.module('loginCtrl', [])

.controller('loginController', function($location, Auth) {

	var vm = this;

	// function to handle login form
	vm.doLogin = function() {
		console.log('logigng in ');
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
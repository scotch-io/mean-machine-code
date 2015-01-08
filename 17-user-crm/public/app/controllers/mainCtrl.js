angular.module('mainCtrl', [])

.controller('mainController', function($http, $location, Auth) {

	var vm = this;

	vm.loggedIn = Auth.isLoggedIn();

	// function to handle login form
	vm.doLogin = function() {
		vm.processing = true;

		Auth.login(vm.loginData.username, vm.loginData.password)
			.success(function(data) {
				vm.processing = false;

				if (data.success) 
					$location.path('/users');
				else
					vm.error = data.message;
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
angular.module('mainCtrl', [])

.controller('mainController', function($http, $location, Auth) {

	var vm = this;

	// get user information on page load
	// could also be placed in a .run()
	vm.loggedIn = Auth.isLoggedIn();
	Auth.getUser()
		.then(function(data) {
			console.log(data);
			vm.user = data;
		});

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

	// function to handle logging out
	vm.doLogout = function() {
		Auth.logout();
		$location.path('/');
	};

});
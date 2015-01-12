angular.module('mainCtrl', [])

.controller('mainController', function($rootScope, $location, Auth) {

	var vm = this;

	// get info if a person is logged in
	vm.loggedIn = Auth.isLoggedIn();

	// check to see if a user is logged in on every request
	$rootScope.$on('$routeChangeStart', function() {
		vm.loggedIn = Auth.isLoggedIn();
	});

	// get user information on page load
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
		console.log('stuff');	
		Auth.logout();
		$location.path('/');
	};

});
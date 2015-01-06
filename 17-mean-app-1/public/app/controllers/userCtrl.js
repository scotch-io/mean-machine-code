angular.module('userCtrl', ['userService'])

.controller('userController', function(User) {

	var vm = this;

	User.getUsers()
		.success(function(data) {
			vm.users = data;
		});

})

.controller('userCreateController', function(User) {
	
	var vm = this;

	vm.userData = {};

	// function to create a user
	vm.createUser = function() {
		User.create(vm.userData)
			.success(function(data) {
				console.log(data);

			});
	};	

})

.controller('userShowController', function($routeParams, User) {

	var vm = this;

	User.getUser($routeParams.user_id)
		.success(function(data) {
			console.log(data);
			vm.user = data;
		});

});
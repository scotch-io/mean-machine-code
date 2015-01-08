angular.module('userCtrl', ['userService'])

.controller('userController', function(User) {

	var vm = this;
	vm.processing = true;

	User.all()
		.success(function(data) {
			vm.processing = false;
			vm.users = data;
		});

	// function to delete a user
	vm.deleteUser = function(id) {
		vm.processing = true;

		User.delete(id)
			.success(function(data) {

				// get all users to update the table
				// you can also set up your api to return the list of users with the delete call
				User.getUsers()
					.success(function(data) {
						vm.processing = false;
						vm.users = data;
					});

			});
	};

})

.controller('userCreateController', function(User) {
	
	var vm = this;
	vm.type = 'create';

	// function to create a user
	vm.saveUser = function() {
		vm.processing = true;

		User.create(vm.userData)
			.success(function(data) {
				vm.processing = false;
				vm.userData = {};
				vm.message = data.message;
			});
			
	};	

})

.controller('userEditController', function($routeParams, User) {

	var vm = this;
	vm.type = 'edit';

	User.get($routeParams.user_id)
		.success(function(data) {
			console.log(data);
			vm.userData = data;
		});

	vm.saveUser = function() {
		vm.processing = true;

		User.update(vm.userData)
			.success(function(data) {
				vm.processing = false;
				vm.userData = {};
				vm.message = data.message;
			});
	}

});
angular.module('userCtrl', ['userService'])

.controller('userController', function(User) {

	var vm = this;
	vm.processing = true;

	User.all()
		.success(function(data) {
			vm.processing = false;
			vm.users = data;
		});

	vm.deleteUser = function(id) {
		vm.processing = true;

		User.delete(id)
			.success(function(data) {
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
	vm.createUser = function() {

		console.log('fuck');

		vm.processing = true;

		User.create(vm.userData)
			.success(function(data) {
				vm.processing = false;

				console.log(data);

			})
			.error(function(data) {
				console.log(data);	
			});
	};	

})

.controller('userShowController', function($routeParams, User) {

	var vm = this;
	vm.type = 'edit';

	User.get($routeParams.user_id)
		.success(function(data) {
			console.log(data);
			vm.user = data;
		});

	vm.updateUser = function() {
		User.update(vm.userData)
			.success(function(data) {
				console.log(data);
			});
	}

});
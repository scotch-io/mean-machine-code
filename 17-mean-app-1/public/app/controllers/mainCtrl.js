angular.module('mainCtrl', [])

.controller('mainController', function($http, Auth) {

	var vm = this;

	vm.loggedIn = Auth.isLoggedIn();

});
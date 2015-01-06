angular.module('loginCtrl', [])

.controller('loginController', function(Auth) {

	// object to hold login data
	this.loginData = {};

	this.doLogin = function() {
		console.log(Auth.login(this.loginData.username, this.loginData.password));
	};

});
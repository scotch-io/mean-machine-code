angular.module('userApp', ['appRoutes', 'authService', 'mainCtrl', 'userCtrl', 'userService'])

// application configuration to integrate token into requests
.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');

});
angular.module('userApp', ['appRoutes', 'authService', 'mainCtrl', 'loginCtrl'])

// application configuration to integrate token into requests
.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');

});
angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl : 'app/views/pages/home.html',
      controller  : 'mainController',
      controllerAs: 'main'
		})

		.when('/login', {
			templateUrl : 'app/views/pages/login.html',
      controller  : 'loginController',
      controllerAs: 'login'
		});

	$locationProvider.html5Mode(true);

});
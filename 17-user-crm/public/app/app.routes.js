angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl : 'app/views/pages/home.html'
		})

		.when('/login', {
			templateUrl : 'app/views/pages/login.html',
   			controller  : 'mainController',
    		controllerAs: 'login'
		})
		
		.when('/users', {
			templateUrl: 'app/views/pages/users/all.html',
			controller: 'userController',
			controllerAs: 'user'
		})

		.when('/users/create', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userCreateController',
			controllerAs: 'userSingle'
		})

		.when('/users/:user_id', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userShowController',
			controllerAs: 'userSingle'
		});

	$locationProvider.html5Mode(true);

});
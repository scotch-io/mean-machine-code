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
			templateUrl: 'app/views/pages/users/index.html',
			controller: 'userController',
			controllerAs: 'user'
		})

		.when('/users/create', {
			templateUrl: 'app/views/pages/users/create.html',
			controller: 'userCreateController',
			controllerAs: 'userCreate'
		})

		.when('/users/:user_id', {
			templateUrl: 'app/views/pages/users/show.html',
			controller: 'userShowController',
			controllerAs: 'userShow'
		});

	$locationProvider.html5Mode(true);

});
angular.module('appRoutes', ['ngRoute'])

// configure our routes
.config(function($routeProvider, $locationProvider) {

	$routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/pages/home.html'
        })

        .when('/login', {
            templateUrl : 'views/pages/login.html'
        });

	// turn on html5Mode to clean up the URL (remove the #)
    $locationProvider.html5Mode(true);
});
angular.module('userRoutes', ['ngRoute'])

// configure our routes
.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/pages/home.html'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'views/pages/about.html'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'views/pages/contact.html'
        });

    $locationProvider.html5Mode(true);
});
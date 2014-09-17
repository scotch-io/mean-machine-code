angular.module('routerApp', ['routerRoutes'])

// create the controller and inject Angular's $scope
// this will be the controller for the ENTIRE site
.controller('mainController', function($scope) {

    // create a bigMessage variable to display in our view
    $scope.bigMessage = 'A smooth sea never made a skilled sailor.';

})

// home page specific controller
.controller('homeController', function($scope) {
	$scope.message = 'This is the home page!';
})

// about page controller
.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
})

// contact page controller
.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
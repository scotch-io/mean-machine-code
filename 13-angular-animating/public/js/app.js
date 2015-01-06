angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

// create the controller and inject Angular's 
// this will be the controller for the ENTIRE site
.controller('mainController', function() {

    // create a bigMessage variable to display in our view
    this.bigMessage = 'A smooth sea never made a skilled sailor.';

})

// home page specific controller
.controller('homeController', function() {
	this.message = 'This is the home page!';
})

// about page controller
.controller('aboutController', function() {
    this.message = 'Look! I am an about page.';
})

// contact page controller
.controller('contactController', function() {
    this.message = 'Contact us! JK. This is just a demo.';
});
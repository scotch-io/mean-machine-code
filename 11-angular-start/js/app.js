// name our angular app
angular.module('firstApp', [])

.controller('mainController', function($scope) {

	// define variables and objects on $scope
	// this lets them be available to our views

	// define a basic variable
	$scope.message = 'Hey there! Come and see how good I look!';

	// define a list of items
	$scope.computers = [
		{ name: 'Macbook Pro', color: 'Silver', nerdness: 7 },
		{ name: 'Yoga 2 Pro', color: 'Gray', nerdness: 6 },
		{ name: 'Chromebook', color: 'Black', nerdness: 5 }
	];

});
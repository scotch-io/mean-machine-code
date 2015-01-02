angular.module('userApp', ['mainCtrl', 'authService'])

.controller('appCtrl', function($scope, Auth) {

	$scope.username = 'ffff';
	$scope.password = 'asfasdf';

	$scope.login = function() {
		console.log($scope.username, $scope.password);

		Auth.login($scope.username, $scope.password)
			.then(function(data) {
        console.log(data);
				console.log('what');
			});
	};

});



// configure http interceptors for 
// .config(function($httpProvider, Auth) {
// 	$httpProvider.interceptors.push({
// 		request: function(config) {
// 			if (Auth.isLoggedIn) config.headers['x-access-token'] = Auth.token;
// 			return config;
// 		}
// 	});
// });
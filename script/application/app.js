var app = angular.module('App', [ 
	'ngResource',
	'ui.router'
]);

app.controller('AppController', function ($state, $scope){
	$scope.welcome = "CI + AngularJs";
});

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/app");

	$stateProvider
		.state('app', {
			url: '/app',
			templateUrl: 'script/application/app.html',
			controller: 'AppController'
		});
}]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/app");

	$stateProvider
		.state('sample', {
			url: '/sample/page/:page',
			templateUrl: 'script/application/modules/sample/samples.html',
			controller: 'SampleController'
		})
		.state('sample-add', {
			url: 'sample/page/:page/add',
			templateUrl: 'script/application/modules/sample/sample-add.html',
			controller: 'SampleAddController'
		})
		.state('sample-view', {
			url: 'sample/page/:page/data/:id',
			templateUrl: 'script/application/modules/sample/sample-view.html',
			controller: 'SampleViewController'
		})
		.state('sample-edit', {
			url: 'sample/page/:page/data/:id/edit',
			templateUrl: 'script/application/modules/sample/sample-edit.html',
			controller: 'SampleEditController'
		});
}]);
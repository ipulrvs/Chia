app.controller('SampleAddController', function ($state, $scope, Sample){
	/* #Variable */
	$scope.sample = {};
	$scope.currentPage = $state.params.page;

	/* #Method */
	$scope.save = function (){
		Sample.save($scope.sample, function (data){
			var insertedId = data.id;
			$state.go('sample', {page: $scope.currentPage});
		});
	}

	$scope.back = function (){
		$state.go('sample', {page: $scope.currentPage});
	}
});
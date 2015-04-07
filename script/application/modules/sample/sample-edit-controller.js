app.controller('SampleEditController', function ($state, $scope, Sample){
	/* #Variable */
	$scope.sampleId = $state.params.id;
	$scope.currentPage = $state.params.page;
	$scope.sample = {};

	/* #Initialize */
	$scope.load = function (id){
		Sample.findBy({id: id}, function (data){
			$scope.sample = data[0];
		});
	}
	$scope.load($scope.sampleId);;

	/* #Method */
	$scope.save = function (){
		Sample.update($scope.sample, function (){
			$state.go('sample-view', {id: $scope.sampleId, page: $scope.currentPage});
		});
	}
	
	$scope.back = function (){
		$state.go('sample-view', {id: $scope.sampleId, page: $scope.currentPage});
	}
});
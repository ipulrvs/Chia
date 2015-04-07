app.controller('SampleViewController', function ($state, $scope, Sample){
	/* #Variable */
	$scope.sampleId = $state.params.id;
	$scope.currentPage = $state.params.page;
	
	/* #Initialize */
	$scope.load = function (id){
		Sample.findBy({id: id}, function (data){
			$scope.sample = data[0];
		});
	}
	$scope.load($scope.sampleId);;

	/* #Method */
	$scope.back = function (){
		$state.go('sample', {page: $scope.currentPage});
	}
});
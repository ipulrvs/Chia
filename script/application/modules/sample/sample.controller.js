app.controller('SampleController', function ($state, $scope, Sample){
	/* #Variable */
	$scope.pageTitle = "Sample";
	$scope.searchDefault = "name";
	$scope.currentPage = parseInt($state.params.page);
	/* #Initialize */
	$scope.page = {
		"limit": 3
	}
	$scope.getPage = function (page, index){
		Sample.getTotal(function (data){
			// Get Clicked Item
			$scope.selected = $state.params.page - 1;

			// Get Total Page
			$scope.page.total = data.total;

			// Get Pagination Template
			Sample.pagination($scope.page, function (sample){
				// Get Data
				$scope.paginations = sample;

				var pages = _.filter(sample, function (item){
					return item.page == page;
				});

				if(pages.length > 0){
					$scope.samples = Sample.findAll({limit: pages[0].limit, offset: pages[0].offset});
					$scope.pageNumber = pages[0].offset;
				} else {
					$scope.refresh();
				}

			});
		});
	}

	/* #Grab Data */
	if($state.params.page.length > 0){
		$scope.getPage($state.params.page);
	} else {
		$scope.getPage(1);
	}

	/* #Method */
	$scope.load = function (){
		$scope.getPage($state.params.page);
	}

	$scope.refresh = function (){
		$scope.samples = Sample.findAll();
	}

	$scope.search = function(param){
		Sample.search({field: param, data: $scope.find}, function (data){
			$scope.samples = data;
		});
	}

	$scope.destroy = function (param){
		Sample.destroy({id: param.id}, function (){

			$scope.getPage($state.params.page);

			$scope.dataLeft = $scope.samples.length - 1;

			if($scope.dataLeft == 0){
				if($state.params.page == 1){
					$scope.refresh()
				} else {
					$state.go('sample', {page: $state.params.page - 1});
					$scope.load();
				}
			}
			
		});
	}

	$scope.back = function (){
		$state.go('app')
	}

	/* #Watch */
	$scope.$watch('find', function (){
		if($scope.find != null || $scope.find != undefined){
			if($scope.find.length > 0){
				Sample.search({field: $scope.searchDefault, data: $scope.find}, function (data){
					$scope.samples = data;
				});
			} else {
				$scope.load();
			}
		}
	});
});
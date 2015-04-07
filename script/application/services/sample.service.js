app.factory('Sample', ['$resource', 
	function ($resource){
		return $resource('index.php/sample/findAll', {}, {
			findAll: {method: 'GET', isArray: true},
			getTotal: {
				method: 'GET',
				url: 'index.php/sample/total'
			},
			pagination: {
				method: 'GET',
				url: 'index.php/sample/pagination',
				isArray: true
			},
			search: {
				method: 'GET',
				url: 'index.php/sample/search',
				isArray: true
			},
			save: {
				method: 'POST',
				url: 'index.php/sample/save'
			},
			destroy: {
				method: 'POST',
				url: 'index.php/sample/destroy'
			},
			findBy: {
				method: 'GET',
				url: 'index.php/sample/findBy',
				isArray: true
			},
			update: {
				method: 'POST',
				url: 'index.php/sample/update'
			},
		});
	}
]);
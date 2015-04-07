<!DOCTYPE html>
<html lang="en" ng-app="App">
<head>
	<meta charset="utf-8">
	<title>Chia</title>

	<link rel="stylesheet" type="text/css" href="script/libs/bower_components/bootstrap/dist/css/bootstrap.css">
</head>
<body>
	
	<!-- <h1>Welcome to Chia</h1> -->

	<ui-view></ui-view>

	<!-- Core -->
	<script src="script/libs/bower_components/jquery/dist/jquery.js"></script>
	<script src="script/libs/bower_components/angular/angular.js"></script>
	<script src="script/libs/bower_components/angular-ui-router/release/angular-ui-router.js"></script>
	<script src="script/libs/bower_components/angular-resource/angular-resource.js"></script>

	<!-- Utilities -->
	<script src="script/libs/bower_components/underscore/underscore.js"></script>

	<!-- App -->
	<script src="script/application/app.js"></script>

	<!-- Sample Module -->
	<script src="script/application/modules/sample/sample.js"></script>
	<script src="script/application/modules/sample/sample.controller.js"></script>
	<script src="script/application/modules/sample/sample-add-controller.js"></script>
	<script src="script/application/modules/sample/sample-view-controller.js"></script>
	<script src="script/application/modules/sample/sample-edit-controller.js"></script>
	<script src="script/application/services/sample.service.js"></script>


</body>
</html>
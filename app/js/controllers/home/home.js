(function () {
	'use strict';

	angular.module('example-hyper-angular-project.controllers.home', [])
		.controller('HomeCtrl', ['$scope', function ($scope) {
			$scope.projectName = 'Example HyperAngular Project';
		}]);
})();
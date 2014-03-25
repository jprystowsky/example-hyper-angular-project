(function () {
	'use strict';

	angular.module('example-hyper-angular-project.controllers.readme', [])
		.controller('ReadMeCtrl', ['$scope', 'readme', '$sce', function ($scope, readme, $sce) {
			readme.get(function (data) {
				$scope.readme = $sce.trustAsHtml(data);
			});
		}]);
})();
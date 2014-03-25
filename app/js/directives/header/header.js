(function () {
	'use strict';

	angular.module('example-hyper-angular-project.directives.header', [])
		.directive('header', function () {
			return {
				templateUrl: '/templates/header/header.html'
			};
		});
})();
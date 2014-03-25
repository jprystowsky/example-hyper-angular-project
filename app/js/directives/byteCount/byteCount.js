(function () {
	'use strict';

	angular.module('example-hyper-angular-project.directives.byteCount', [])
		.directive('byteCount', function () {
			return {
				transclude: true,
				templateUrl: '/templates/byteCount/byteCount.html',
				scope: {
					byteCount: '@'
				}
			};
		});
})();
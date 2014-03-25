(function () {
	'use strict';

	angular.module('example-hyper-angular-project.directives.footer', [])
		.directive('footer', function () {
			return {
				templateUrl: '/templates/footer/footer.html'
			};
		});
})();
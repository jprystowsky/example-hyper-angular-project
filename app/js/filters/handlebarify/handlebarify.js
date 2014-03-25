(function () {
	'use strict';

	angular.module('example-hyper-angular-project.filters.handlebarify', [])
		.filter('handlebarify', function () {
			return function (input) {
				return '{{ ' + input + ' }}';
			};
		});
})();
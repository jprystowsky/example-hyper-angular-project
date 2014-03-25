(function () {
	'use strict';

	angular.module('example-hyper-angular-project.services.readme', [])
		.service('readme', ['$http', function ($http) {
			return {
				get: function (success, error) {
					$http({
						method: 'GET',
						url: '/api/readme'
					})
						.success(success)
						.error(error);
				}
			};
		}]);
})();
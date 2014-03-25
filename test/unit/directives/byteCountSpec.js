(function () {
	'use strict';

	describe('byteCount directive', function () {
		var $compile,
			$rootScope,
			$httpBackend,
			scope,
			element;

		angular.module('specApp', ['example-hyper-angular-project.directives.byteCount'])
			.controller('ByteCountCtrl', ['$scope', function ($scope) {
				$scope.$watch('byteCount', function (v) {
					if (v) {
						$scope.byteLength = v.length;
					}
				});
			}]);

		beforeEach(function () {
			module('specApp');
		});

		beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
			$compile = _$compile_;
			$rootScope = _$rootScope_;
			$httpBackend = _$httpBackend_;

			$httpBackend
				.expectGET('/templates/byteCount/byteCount.html')
				.respond('<span ng-controller="ByteCountCtrl">{{ byteLength }} <span ng-transclude></span></span>');

			scope = $rootScope.$new();

			element = $compile('<div byte-count="bar">foo</div>')(scope);
		}));

		afterEach(function () {
			$httpBackend.verifyNoOutstandingRequest();
			$httpBackend.verifyNoOutstandingExpectation();
		});

		it('should display the length of the project name in 8-bit bytes', function () {
			element.scope().$digest();

			$httpBackend.flush();

			expect(element.text()).to.match(/3 foo/i);
		});
	});
})();
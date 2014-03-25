(function () {
	/* jshint expr: true */
	'use strict';

	describe('home controller', function () {
		var $controller,
			$rootScope,
			scope,
			ctrl;

		beforeEach(module('example-hyper-angular-project.controllers.home'));

		beforeEach(inject(function (_$controller_, _$rootScope_) {
			$controller = _$controller_;
			$rootScope = _$rootScope_;

			scope = $rootScope.$new();

			ctrl = $controller('HomeCtrl', {
				$scope: scope
			});
		}));

		it('should exist', function () {
			expect(ctrl).to.exist;
		});

		it('should be an object', function () {
			expect(ctrl).to.be.an('object');
		});

		it('should set projectname', function () {
			scope.$digest();

			expect(scope.projectName).to.not.be.undefined;
			expect(scope.projectName).to.equal('Example HyperAngular Project');
		});
	});
})();
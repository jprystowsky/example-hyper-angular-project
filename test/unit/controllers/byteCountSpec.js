(function () {
	/* jshint expr: true */
	'use strict';

	describe('byteCount controller', function () {
		var $controller,
			$rootScope,
			scope,
			ctrl;

		beforeEach(module('example-hyper-angular-project.controllers.byteCount'));

		beforeEach(inject(function (_$controller_, _$rootScope_) {
			$controller = _$controller_;
			$rootScope = _$rootScope_;

			scope = $rootScope.$new();

			ctrl = $controller('ByteCountCtrl', {
				$scope: scope
			});
		}));

		it('should exist', function () {
			expect(ctrl).to.exist;
		});

		it('should be an object', function () {
			expect(ctrl).to.be.an('object');
		});

		it('should set byteLength to the length of byteCount', function () {
			scope.byteCount = 'abc';

			scope.$digest();

			expect(scope.byteLength).to.equal(3);
		});
	});
})();
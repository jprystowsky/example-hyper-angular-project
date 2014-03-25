(function () {
	/* jshint expr: true */
	'use strict';

	var $controller,
		$rootScope,
		scope,
		ctrl,
		mockReadmeService,
		mockReadmeServiceGet,
		mockReadmeServiceCallbackData = '<strong>foobar</strong>';

	beforeEach(function () {
		mockReadmeServiceGet = sinon.stub();
		mockReadmeServiceGet.onFirstCall().callsArgWith(0, mockReadmeServiceCallbackData);

		mockReadmeService = {
			get: mockReadmeServiceGet
		};

		module(function ($provide) {
			$provide.service('readme', function () { return mockReadmeService; });
		});
	});

	beforeEach(module('example-hyper-angular-project.controllers.readme'));

	describe('readme controller', function () {
		beforeEach(inject(function (_$controller_, _$rootScope_) {
			$controller = _$controller_;
			$rootScope = _$rootScope_;

			scope = $rootScope.$new();

			ctrl = $controller('ReadMeCtrl', {
				$scope: scope
			});
		}));

		it('should exist', function () {
			expect(ctrl).to.exist;
		});

		it('should be an object', function () {
			expect(ctrl).to.be.an('object');
		});

		it('should call readme.get() one time', function () {
			expect(mockReadmeService.get).to.have.been.calledOnce;
		});

		it('should set the scope variable readme to the returned dummy data\'s trusted HTML ($sce object)', function () {
			expect(scope.readme.toString()).to.equal(mockReadmeServiceCallbackData);
		});
	});
})();
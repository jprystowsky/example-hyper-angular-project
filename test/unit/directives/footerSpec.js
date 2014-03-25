(function () {
	/* jshint expr: true */
	'use strict';

	describe('footer directive', function () {
		var $httpBackend,
			$compile,
			$rootScope,
			element,
			scope;

		beforeEach(module('example-hyper-angular-project.directives.footer'));

		beforeEach(inject(function (_$httpBackend_, _$compile_, _$rootScope_) {
			$httpBackend = _$httpBackend_;
			$compile = _$compile_;
			$rootScope = _$rootScope_;

			$httpBackend.expectGET('/templates/footer/footer.html')
				.respond('<div>Footer content</div>');

			scope = $rootScope.$new();

			element = $compile('<div footer></div>')(scope);
		}));

		afterEach(function () {
			$httpBackend.verifyNoOutstandingRequest();
			$httpBackend.verifyNoOutstandingExpectation();
		});

		it('should exist', function () {
			expect(element).to.exist;
		});

		it('should render footer content', function () {
			element.scope().$digest();

			$httpBackend.flush();

			expect(element.text()).to.match(/footer content/i);
		});
	});
})();
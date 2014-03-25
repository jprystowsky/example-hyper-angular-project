(function () {
	/* jshint expr: true */
	'use strict';

	describe('header directive', function () {
		var $httpBackend,
			$compile,
			$rootScope,
			element,
			scope;

		beforeEach(module('example-hyper-angular-project.directives.header'));

		beforeEach(inject(function (_$httpBackend_, _$compile_, _$rootScope_) {
			$httpBackend = _$httpBackend_;
			$compile = _$compile_;
			$rootScope = _$rootScope_;

			$httpBackend.expectGET('/templates/header/header.html')
				.respond('<div>Header content</div>');

			scope = $rootScope.$new();

			element = $compile('<div header></div>')(scope);
		}));

		afterEach(function () {
			$httpBackend.verifyNoOutstandingRequest();
			$httpBackend.verifyNoOutstandingExpectation();
		});

		it('should exist', function () {
			expect(element).to.exist;
		});

		it('should render header content', function () {
			element.scope().$digest();

			$httpBackend.flush();

			expect(element.text()).to.match(/header content/i);
		});
	});
})();
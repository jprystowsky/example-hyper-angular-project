(function () {
	/* jshint expr: true */
	'use strict';

	describe('Readme service', function () {
		var $httpBackend,
			readme,
			getSpy;

		beforeEach(module('example-hyper-angular-project.services.readme'));

		beforeEach(inject(function (_readme_) {
			readme = _readme_;
		}));

		describe('dependency injection', function () {
			it('should succeed', function () {
				expect(readme).not.to.be.undefined;
			});

			it('should yield a service with a get function', function () {
				expect(readme.get).to.be.a('function');
			});
		});

		describe('get function', function () {
			beforeEach(inject(function (_$httpBackend_) {
				$httpBackend = _$httpBackend_;

				$httpBackend
					.expectGET('/api/readme')
					.respond('*Readme*');

				getSpy = sinon.spy(readme, 'get');
			}));

			afterEach(function () {
				$httpBackend.verifyNoOutstandingRequest();
				$httpBackend.verifyNoOutstandingExpectation();
			});

			it('should return readme file data', function (done) {
				readme.get(function (data) {
					expect(data).to.equal('*Readme*');
					done();
				}, function (error) {
					throw error;
				});

				$httpBackend.flush();
			});

			it('should have been called once', function (done) {
				readme.get(function () {
					expect(getSpy).to.have.been.calledOnce;
					done();
				}, function (error) {
					throw error;
				});

				$httpBackend.flush();
			});
		});
	});
})();
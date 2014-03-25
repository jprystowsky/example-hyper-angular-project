(function () {
	/* jshint expr: true */
	'use strict';

	var chai = require('chai'),
		chaiAsPromised = require('chai-as-promised'),
		expect = chai.expect;

	chai.use(chaiAsPromised);

	describe('The readme page', function () {
		var Readme = function () {
			this.h1Project = element(by.tagName('h1'));

			this.get = function () {
				browser.get('http://localhost:3000/readme');
				browser.waitForAngular();
				return this;
			};
		};

		var readme = new Readme().get();

		describe('project h1', function () {
			it('should exist', function () {
				expect(readme.h1Project).to.exist;
			});

			it('should match the project name', function () {
				expect(readme.h1Project.getText()).to.eventually.equal('Example HyperAngular Project');
			});
		});
	});
})();
(function () {
	'use strict';

	module.exports = {
		all: {
			tasks: [
				'test:headless',
				'test:e2e'
			]
		},
		headless: {
			tasks: [
				'test:lint',
				'test:unit'
			]
		},
		lint: {
			tasks: [
				'setEnvironment:test',
				'lesslint',
				'jshint'
			]
		},
		unit: {
			tasks: [
				'setEnvironment:test',
				'karma'
			]
		},
		e2e: {
			tasks: [
				'setEnvironment:test',
				'compile:test',
				'express:test',
				'protractor_webdriver',
				'protractor',
				'express:test:stop'
			]
		}
	};
})();
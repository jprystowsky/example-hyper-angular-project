(function () {
	'use strict';

	module.exports = {
		development: {
			tasks: [
				'compile:development',
				'express:development',
				'watch:expressDevelopment'
			]
		},
		test: {
			tasks: [
				'test:all',
				'compile:test',
				'express:test',
				'watch:expressTest'
			]
		},
		production: {
			tasks: [
				'test:all',
				'compile:production',
				'express:production',
				'watch:expressProduction'
			]
		}
	};
})();
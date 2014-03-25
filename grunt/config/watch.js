
(function () {
	'use strict';

	module.exports = {
		expressDevelopment: {
			files: [
				'css/**/*.css',
				'js/**/*.js',
				'templates/**/*.html'
			],
			tasks: ['express:development'],
			options: {
				spawn: false
			}
		},
		expressTest: {
			files: [
				'css/**/*.css',
				'js/**/*.js',
				'templates/**/*.html'
			],
			tasks: ['express:test'],
			options: {
				spawn: false
			}
		},
		expressProduction: {
			files: [
				'dist/app/**/*.js'
			],
			tasks: ['express:production'],
			options: {
				spawn: false
			}
		},
		karma: {
			files: [
				'app/js/**/*.js',
				'test/unit/**/*Spec.js'
			],
			tasks: [
				'karma:unit:run'
			]
		}
	};
})();
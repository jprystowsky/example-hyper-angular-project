(function () {
	/* jshint camelcase: false */
	'use strict';

	module.exports = {
		options: {
			background: true,
			debug: false
		},
		development: {
			options: {
				script: 'app.js',
				node_env: 'development'
			}
		},
		test: {
			options: {
				script: 'app.js',
				node_env: 'test'
			}
		},
		production: {
			options: {
				script: 'dist/app.js',
				node_env: 'production'
			}
		}
	};
})();
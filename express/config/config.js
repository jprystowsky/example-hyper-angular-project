(function () {
	'use strict';

	var path = require('path'),
		rootPath = path.normalize(__dirname + '/../..'),
		env = process.env.NODE_ENV || 'development';

	var config = {
		development: {
			root: rootPath,
			app: {
				name: 'example-hyper-angular-project',
				path: '/'
			},
			port: 3000,
			protocol: 'http',
			server: 'localhost'
		},

		test: {
			root: rootPath,
			app: {
				name: 'example-hyper-angular-project',
				path: '/'
			},
			port: 3000,
			protocol: 'http',
			server: 'localhost'
		},

		production: {
			root: rootPath,
			app: {
				name: 'example-hyper-angular-project',
				path: '/'
			},
			port: 3000,
			protocol: 'http',
			server: 'localhost'
		}
	};

	module.exports = config[env];
})();
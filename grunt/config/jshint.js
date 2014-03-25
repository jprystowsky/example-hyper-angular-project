(function () {
	'use strict';

	var config = require('../../express/config/config'),
		path = require('path');

	module.exports = {
		app: {
			options: {
				jshintrc: path.join(config.root, '/.jshintrc')
			},
			files: [
				{ expand: true, cwd: 'app/js', src: '*.js' },
				{ expand: true, cwd: 'app/js', src: '{controllers,directives,filters,services}/**/*.js' },
				{ expand: true, cwd: 'app/express', src: '**/*.js' },
				{ expand: true, cwd: 'grunt', src: '**/*.js' },
				{ expand: true, cwd: 'test', src: '**/*.js' },
				{ expand: true, cwd: '.', src: '*.js' }
			]
		}
	};
})();
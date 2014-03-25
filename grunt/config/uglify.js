(function () {
	'use strict';

	module.exports = {
		src: {
			files: {
				'dist/app/js/app.min.js': ['app/js/{controllers,directives,filters,services}/**/*.js', 'app/js/*.js', 'dist/app/templates/app.js']
			}
		},
		routes: {
			files: [
				{
					expand: true,
					src: 'express/routes/*.js',
					dest: 'dist/'
				}
			]
		},
		app: {
			files: {
				'dist/app.js': ['app.js']
			}
		},
		expressConfig: {
			files: [
				{
					expand: true,
					src: 'express/**/*.js',
					dest: 'dist/'
				}
			]
		}
	};
})();
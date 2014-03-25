(function () {
	'use strict';

	module.exports = {
		development: {
			tasks: [
				'setEnvironment:development',
				// Generate CSS from LESS
				'less:app',
				// Preprocess views used to create the layouts at runtime
				'concat:appJsDependencies',
				'concat:layoutJade',
				// Process *.jade.tmpl views directly in place in development mode
				'processTemplates:development',
			]
		},
		test: {
			tasks: [
				'setEnvironment:test',
				// Generate CSS from LESS
				'less:app',
				// Preprocess views used to create the layouts at runtime
				'concat:appJsDependencies',
				'concat:layoutJade',
				// Process *.jade.tmpl views directly in place in development mode
				'processTemplates:test',
			]
		},
		production: {
			tasks: [
				'setEnvironment:production',
				// Remove stale and recreate dist dir
				'clean:dist',
				'mkdir:dist',

				// Copy express configs (minified), and node modules
				'uglify:expressConfig',
				'copy:nodeModules',

				// Create app dir for serving AJS app
				'mkdir:app',

				// Generate CSS from LESS
				'less:app',

				// Copy and combine/compress CSS
				'cssmin:css',

				// Create app dir for images
				'mkdir:appImg',

				// Copy and compress images
				'imagemin:img',

				// Copy the JS but remove all but the dependencies (the uncompressed app data)
				'copy:appJs',
				'clean:distAppJsBig',

			/**
			 * Minify the app templates, minify the app JS and write it out along with the minified templates,
			 * then remove the temporary file and dir
			 */
				'ngtemplates:app',
				'uglify:src',
				'clean:templatesDir',

				// Copy and minify routes
				'uglify:routes',

				// Preprocess views used to create the layouts at runtime
				'concat:appJsDependencies',
				'concat:layoutJade',

			/**
			 * Copy jade views and process jade-tmpl views into proper jade views.
			 * The copy task only copies *.jade views; *.jade.tmpl views are
			 * processed from the source dir directly into the dist dir.
			 */
				'copy:jadeViews',
				'processTemplates:production',

				// Minify and copy the node app.js
				'uglify:app'
			]
		}
	};
})();
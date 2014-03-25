(function () {
	'use strict';

	module.exports = {
		app: {
			cwd: 'app',
			src: 'templates/**/*.html',
			dest: 'dist/app/templates/app.js',
			options: {
				module: 'example-hyper-angular-project',
				prefix: '/',
				htmlmin: {
					collapseBooleanAttributes:      true,
					collapseWhitespace:             true,
					removeAttributeQuotes:          true,
					removeComments:                 true, // Only if you don't use comment directives!
					removeEmptyAttributes:          true,
					removeRedundantAttributes:      true,
					removeScriptTypeAttributes:     true,
					removeStyleLinkTypeAttributes:  true
				}
			}
		}
	};
})();
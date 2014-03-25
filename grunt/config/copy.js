(function () {
	'use strict';

	module.exports = {
		nodeModules: {
			files: [
				{ expand: true, src: 'node_modules/**/*', dest: 'dist/' }
			]
		},
		appJs: {
			files: [
				{ expand: true, cwd: 'app/js', src: '**/*', dest: 'dist/app/js/' }
			]
		},
		jadeViews: {
			files: [
				{ expand: true, cwd: 'express/views', src: '**/*.jade', dest: 'dist/express/views/' }
			]
		}
	};
})();
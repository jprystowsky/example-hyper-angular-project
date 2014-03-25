(function () {
	'use strict';

	module.exports = {
		/**
		 * The concat:appJsDependencies target should be run before concat:layoutJade.
		 * The former surrounds the appJsDependenciesBase.jade.tmpl with lodash/underscore
		 * interpolation strings that depend on grunt and would be nulled by the Yeoman build process.
		 *
		 * The latter takes the lodash-enabled chunk and concatenates it with the remainder of the
		 * (already processed) layout file.
		 *
		 * This enables build-time injection of application scripts.
		 */
		appJsDependencies: {
			options: {
				banner: '<%',
				footer: '%>'
			},
			src: ['express/views/components/appJsDependenciesBase.jade.tmpl'],
			dest: 'express/views/components/appJsDependencies.jade.tmpl'
		},
		layoutJade: {
			src: ['express/views/components/layoutBase.jade.tmpl', 'express/views/components/appJsDependencies.jade.tmpl'],
			dest: 'express/views/layout.jade.tmpl'
		}
	};
})();
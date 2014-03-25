(function () {
	'use strict';

	module.exports = {
		options: {
			configFile: 'test/conf/protractorConf.js',
			keepAlive: false,
			noColor: false
		},
		/**
		 * Workaround for requirement to have targets, derp.
		 * See https://github.com/teerapap/grunt-protractor-runner/issues/1
		 */
		default: {}
	};
})();
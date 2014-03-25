(function () {
	'use strict';

	// An example configuration file.
	exports.config = {
		// The address of a running selenium server.
		seleniumAddress: 'http://localhost:4444/wd/hub',

		// Capabilities to be passed to the webdriver instance.
		capabilities: {
			'browserName': 'chrome'
		},

		// Spec patterns are relative to the current working directly when
		// protractor is called.
		specs: [
			'../e2e/**/*Spec.js'
		],

		framework: 'mocha',

		mochaOpts: {
			reporter: 'spec',
			slow: 3000
		},

		baseUrl: 'http://localhost:3000/'
	};

})();
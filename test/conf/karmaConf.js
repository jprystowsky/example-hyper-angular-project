(function () {
	'use strict';

	module.exports = function (config) {
		config.set({
			// base path, that will be used to resolve files and exclude
			basePath: '../../',


			// frameworks to use
			frameworks: ['mocha', 'chai', 'sinon'],


			// list of files / patterns to load in the browser
			files: [
				'app/js/lib/bower_components/jquery/dist/jquery.js',
				'app/js/lib/bower_components/lodash/dist/lodash.compat.js',
				'app/js/lib/bower_components/moment/moment.js',
				'app/js/lib/bower_components/angular/angular.js',
				'app/js/lib/bower_components/angular-resource/angular-resource.js',
				'app/js/lib/bower_components/angular-mocks/angular-mocks.js',
				
				'app/js/lib/bower_components/angular-ui-router/release/angular-ui-router.js',
				
				'app/js/lib/bower_components/bootstrap/dist/js/bootstrap.js',
				'app/js/lib/bower_components/sinon-chai/lib/sinon-chai.js',
				'app/js/lib/bower_components/chai-as-promised/lib/chai-as-promised.js',
				'app/js/controllers/**/*.js',
				'app/js/directives/**/*.js',
				'app/js/filters/**/*.js',
				'app/js/services/**/*.js',
				'app/js/app.js',
				'test/unit/**/*Spec.js'
			],


			// list of files to exclude
			exclude: [

			],


			// test results reporter to use
			// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
			reporters: ['progress'],


			// web server port
			port: 9876,


			// enable / disable colors in the output (reporters and logs)
			colors: true,


			// level of logging
			// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
			logLevel: config.LOG_INFO,


			// enable / disable watching file and executing tests whenever any file changes
			autoWatch: true,


			// Start these browsers, currently available:
			// - Chrome
			// - ChromeCanary
			// - Firefox
			// - Opera (has to be installed with `npm install karma-opera-launcher`)
			// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
			// - PhantomJS
			// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
			browsers: ['PhantomJS'],


			// If browser does not capture in given timeout [ms], kill it
			captureTimeout: 60000,


			// Continuous Integration mode
			// if true, it capture browsers, run tests and exit
			singleRun: false
	    });
	};
})();
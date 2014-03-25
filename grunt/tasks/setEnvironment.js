(function () {
	'use strict';

	module.exports = function (grunt) {
		grunt.registerTask('setEnvironment', 'Set the grunt environment', function (environment) {
			grunt.config('environment', environment);
		});
	};
})();
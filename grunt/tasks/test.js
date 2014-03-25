(function () {
	'use strict';

	var _ = require('lodash-node');

	module.exports = function (grunt) {
		grunt.registerMultiTask('test', 'Test the application', function () {
			_(this.data.tasks).forEach(function (task) {
				grunt.task.run(task);
			});
		});
	};
})();
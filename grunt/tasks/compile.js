(function () {
	'use strict';

	var chalk = require('chalk'),
		_ = require('lodash-node');

	module.exports = function (grunt) {
		grunt.registerMultiTask('compile', 'Compile the application', function () {
			grunt.log.writeln(chalk.bold(chalk.red('Compiling Example HyperAngular Project in ' + this.target + ' mode')));

			// Run tasks
			if (!_.isUndefined(this.data.tasks) && _.isArray(this.data.tasks)) {
				_(this.data.tasks).forEach(function (task) {
					grunt.task.run(task);
				});
			}
		});
	};
})();
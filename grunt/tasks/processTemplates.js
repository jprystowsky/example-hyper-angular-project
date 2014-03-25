(function () {
	'use strict';

	var chalk = require('chalk');

	module.exports = function (grunt) {
		grunt.registerTask('processTemplates', 'Process application templates', function (environment) {
			var templateConfigs = grunt.config('appTemplates')[environment];

			for (var prop in templateConfigs) {
				if (templateConfigs.hasOwnProperty(prop)) {
					var tmplConfig = templateConfigs[prop];

					var tmpl = grunt.file.read(tmplConfig.src);

					grunt.file.write(tmplConfig.dest, grunt.template.process(tmpl));

					grunt.log.writeln(chalk.green('✔ ') + chalk.blue(tmplConfig.dest) + ' generated from ' + chalk.gray(tmplConfig.src));
				}
			}
		});
	};
})();
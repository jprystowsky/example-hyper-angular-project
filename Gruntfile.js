(function () {
	'use strict';

	module.exports = function (grunt) {
		function loadConfig(path) {
			var glob = require('glob');
			var object = {};
			var key;

			glob.sync('*', {cwd: path}).forEach(function (option) {
				key = option.replace(/\.js$/, '');
				object[key] = require(path + option);
			});

			return object;
		}

		var config = {
			pkg: grunt.file.readJSON('package.json')
		};

		grunt.util._.extend(config, loadConfig('./grunt/config/'));
		grunt.initConfig(config);

		require('load-grunt-tasks')(grunt);

		grunt.loadTasks('grunt/tasks');
	};
})();
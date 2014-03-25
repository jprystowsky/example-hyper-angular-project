(function () {
	'use strict';

	var chalk = require('chalk');

	module.exports = function (config) {
		console.log(chalk.white(chalk.bgBlack('Express server listening on port ' + config.port)));
		console.log(chalk.bold(chalk.green('Visit ' + config.protocol + '://' + config.server + ':' + config.port + config.app.path)));
	};
})();
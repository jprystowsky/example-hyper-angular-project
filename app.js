(function () {
	'use strict';

	var express = require('express'),
		http = require('http'),
		config = require('./express/config/config');

	var app = module.exports = express();

	require('./express/config/express')(app, config);
	require('./express/config/routes')(app);

	http.createServer(app).listen(config.port, function () {
		require('./express/config/startupMessages')(config);
	});
})();
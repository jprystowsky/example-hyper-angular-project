(function () {
	'use strict';

	var express = require('express'),
		path = require('path');

	module.exports = function (app, config) {
		app.set('port', process.env.PORT || config.port);
		app.set('views', path.join(config.root, path.join('express', 'views')));
		app.set('view engine', 'jade');
		app.use(express.json());
		app.use(express.urlencoded());
		app.use(express.methodOverride());
		app.use(express.static(path.join(config.root, 'app')));
		app.use(app.router);

		if (['development', 'test'].indexOf(app.get('env')) !== -1) {
			app.use(express.errorHandler());
		}

		if (app.get('env') === 'development') {
			app.use(express.logger('dev'));
		}

		if (app.get('env') === 'production') {
		}
	};
})();
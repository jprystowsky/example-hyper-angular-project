(function () {
	'use strict';

	var express = require('express'),
		path = require('path');

	module.exports = function (app, config) {
		app.set('port', process.env.PORT || config.port);
		app.set('views', path.join(config.root, path.join('express', 'views')));
		app.set('view engine', 'jade');
		app.use(require('body-parser')());
		app.use(require('method-override')());
		app.use(require('serve-static')(path.join(config.root, 'app')));

		if (['development', 'test'].indexOf(app.get('env')) !== -1) {
			app.use(require('errorhandler')());
		}

		if (app.get('env') === 'development') {
			app.use(require('morgan')('dev'));
		}

		if (app.get('env') === 'production') {
		}
	};
})();
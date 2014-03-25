(function () {
	'use strict';

	var config = require('./config'),
		routes = require('../routes'),
		api = require('../routes/api');

	module.exports = function (app) {
		app.get('/', routes.index);

		app.get('/api/readme', api.readme.get);

		app.get('*', routes.index);
	};
})();
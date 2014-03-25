(function () {
	'use strict';

	module.exports = {
		development: [
			'js/app.js',

			'js/controllers/controllers.js',
			'js/controllers/byteCount/byteCount.js',
			'js/controllers/home/home.js',
			'js/controllers/readme/readme.js',

			'js/directives/directives.js',
			'js/directives/byteCount/byteCount.js',
			'js/directives/footer/footer.js',
			'js/directives/header/header.js',

			'js/filters/filters.js',
			'js/filters/handlebarify/handlebarify.js',

			'js/services/services.js',
			'js/services/readme/readme.js'
		],

		test: [
			'js/app.js',

			'js/controllers/controllers.js',
			'js/controllers/byteCount/byteCount.js',
			'js/controllers/home/home.js',
			'js/controllers/readme/readme.js',

			'js/directives/directives.js',
			'js/directives/byteCount/byteCount.js',
			'js/directives/footer/footer.js',
			'js/directives/header/header.js',

			'js/filters/filters.js',
			'js/filters/handlebarify/handlebarify.js',

			'js/services/services.js',
			'js/services/readme/readme.js'
		],

		production: [
			'js/app.min.js'
		]
	};
})();
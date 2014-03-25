(function () {
	'use strict';

	module.exports = {
		src: ['app/css/app.less'],
		imports: ['app/css/less/**/*.less'],
		options: {
			csslint: {
				'box-sizing': false,
				'box-model': false
			}
		}
	};
})();
(function () {
	'use strict';

	module.exports = {
		dist: {
			options: {
				mode: '0755',
				create: ['dist']
			}
		},
		app: {
			options: {
				mode: '0755',
				create: ['dist/app']
			}
		},
		appImg: {
			options: {
				mode: '0755',
				create: ['dist/app/img']
			}
		}
	};
})();
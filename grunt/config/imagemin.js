(function () {
	'use strict';

	module.exports = {
		img: {
			options: {
				optimizationLevel: 7,
				cache: false
			},
			files: [
				{
					expand: true,
					cwd: 'app/img',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/app/img'
				}
			]
		}
	};
})();
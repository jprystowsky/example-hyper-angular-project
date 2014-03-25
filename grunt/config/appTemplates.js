(function () {
	'use strict';

	module.exports = {
		development: {
			layout: {
				src: 'express/views/layout.jade.tmpl',
				dest: 'express/views/layout.jade'
			},
			stylesheets: {
				src: 'express/views/components/stylesheets.jade.tmpl',
				dest: 'express/views/components/stylesheets.jade'
			}
		},
		test: {
			layout: {
				src: 'express/views/layout.jade.tmpl',
				dest: 'express/views/layout.jade'
			},
			stylesheets: {
				src: 'express/views/components/stylesheets.jade.tmpl',
				dest: 'express/views/components/stylesheets.jade'
			}
		},
		production: {
			layout: {
				src: 'express/views/layout.jade.tmpl',
				dest: 'dist/express/views/layout.jade'
			},
			stylesheets: {
				src: 'express/views/components/stylesheets.jade.tmpl',
				dest: 'dist/express/views/components/stylesheets.jade'
			}
		}
	};
})();
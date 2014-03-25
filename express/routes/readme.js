(function () {
	'use strict';

	var fs = require('fs'),
		markdown = require('markdown').markdown;

	exports.get = function (req, res) {
		fs.readFile('README.md', { encoding: 'utf-8' }, function (err, data) {
			if (err) {
				res.send(500, err);
			} else {
				res.send(markdown.toHTML(data));
			}
		});
	};
})();
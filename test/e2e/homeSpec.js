(function () {
	'use strict';

	var chai = require('chai'),
		chaiAsPromised = require('chai-as-promised'),
		expect = chai.expect;

	chai.use(chaiAsPromised);

	describe('The homepage', function () {
		var Home = function () {
			this.h1 = element(by.tagName('h1'));
			this.h2 = element(by.tagName('h2'));

			this.indexLink = element(by.css('ul.nav li:nth-of-type(1)'));
			this.readmeLink = element(by.css('ul.nav li:nth-of-type(2)'));

			this.footer = element(by.tagName('footer'));

			this.get = function () {
				browser.get('http://localhost:3000');
				browser.waitForAngular();
				return this;
			};
		};

		var home = new Home().get();

		describe('header navigation', function () {
			describe('readme link', function () {
				it('should load /readme', function () {
					home.readmeLink.click();
					expect(browser.getCurrentUrl()).to.eventually.equal('http://localhost:3000/readme');
				});
			});

			describe('index link', function () {
				it('should load /', function () {
					home.indexLink.click();
					expect(browser.getCurrentUrl()).to.eventually.equal('http://localhost:3000/');
				});
			});
		});

		describe('jumbotron header 1', function () {
			it('should name the project', function () {
				expect(home.h1.getText()).to.eventually.equal('Example HyperAngular Project');
			});
		});

		describe('jumbotron header 2', function () {
			it('should count the bytes of the project\'s name in a handlebar-y fashion', function () {
				expect(home.h2.getText()).to.eventually.equal('{{ 28 }} Delicious Bytes');
			});
		});

		describe('footer', function () {
			it('should mention HyperAngular', function () {
				expect(home.footer.getText()).to.eventually.match(/HyperAngular/);
			});
		});
	});
})();
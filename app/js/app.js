(function () {
	'use strict';

	angular.module('example-hyper-angular-project', [
			'ngResource',
			'example-hyper-angular-project.controllers',
			'example-hyper-angular-project.directives',
			'example-hyper-angular-project.filters',
			'example-hyper-angular-project.services',
			
			'ui.router'
			
		])
		.config([
		
			'$stateProvider',
			'$urlRouterProvider',
			'$locationProvider',
			function ($stateProvider, $urlRouterProvider, $locationProvider) {
				$urlRouterProvider.otherwise('/');

				$stateProvider
					.state('home', {
						url: '/',
						templateUrl: '/templates/home/home.html'
					})
					.state('readme', {
						url: '/readme',
						templateUrl: '/templates/readme/readme.html'
					});

				$locationProvider.html5Mode(true).hashPrefix('!');
			}
		
		]);
})();
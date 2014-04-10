# Example HyperAngular Project [![Build Status](https://img.shields.io/travis/jprystowsky/example-hyper-angular-project.svg)](https://travis-ci.org/jprystowsky/example-hyper-angular-project) [![Dependency Status](https://david-dm.org/jprystowsky/example-hyper-angular-project.svg?theme=shields.io)](https://david-dm.org/jprystowsky/example-hyper-angular-project)

Welcome to your project! We've made a number of opinionated choices up front to avoid common pitfalls in JavaScript
application architecture. We've also included a few of our favorite helper libraries to handle common problems
in development. Everything is modular, tested, and encapsulated. If you don't like something, just swap it out or
remove it.

# Get to Know Your Project

Take a few minutes to get familiar with your project's directory structure. This isn't everything, but it's the
important parts:

* `app.js` defines the node.js application used to run Express
* `bower.json` is Bower's dependencies
* `Gruntfile.js` is the Grunt configuration file. It reads in config properties and loads all tasks.
* `package.json` contains npm dependencies
* `README.md` is the file that you're reading
* `app/` contains all frontend application code, including CSS, templates, etc.
	* `css/` holds application stylesheets
		* `app.less` is the master application LESS file which additionally imports all other LESS files
		* `less/` contains sub-LESS files
			* `components/` holds individual LESS components to be imported by other LESS files
	* `js/` holds AngularJS application code
		* `app.js` is the base AngularJS application
		* `controllers/` contains AngularJS controllers
			* `controllers.js` references all controllers in the application to allow for a single dependency import
		* `directives/` holds AngularJS directives and works like `controllers/`
		* `filters/` is for AngularJS filters and also works like `controllers/`
		* `services/` contains AngularJS services and works like... you guessed it
		* `lib/` holds external libraries, e.g.,
			* `bower_components/`, packages installed by Bower.
	* `templates/` contains application component HTML templates (often for directives)
* `dist/` is generated by the Grunt production compilation and will contain a reduced subset of the project's
directory structure. It doesn't exist by default.
* `express/` holds Express (server) files
	* `config/` holds configuration files
		* `express.js` sets Express configuration options
		* `routes.js` defines Express routes
	* `routes/` holds Express route controllers
		* `api.js` imports API (data-returning) routes
		* `index.js` defines the base, index-rendering route (single-page app)
	* `views/` defines Express (Jade) views
* `grunt/` holds Grunt configurations
	* `config/` holds individual task configurations, as well as a few special files:
		* `appBowerScripts.js`, defining the bower-loaded scripts that should be loaded in each mode (development/test/production)
		* `appExternalScripts.js`, defining the externally-hosted scripts that should be loaded in each mode
		* `appScripts.js`, defining what application scripts should be imported in each mode
		* `appStyles.js`, defining what CSS should be imported in each mode
		* `appTemplates.js`, defining what templates will need to be compiled to what location, in each mode
	* `tasks/` holds custom Grunt tasks
* `node_modules/` holds all of the installed npm modules
* `test/` holds application test information
	* `conf/` holds Karma and Protractor configuration files
	* `e2e` holds end-to-end/integration tests executed by Protractor
	* `unit` holds unit test executed by Karma, which should be set up more or less to mirror the `app/js` directory

# Grunt Tasks

Frequent development tasks are encapsulated by grunt tasks. These are designed to make your life easier and automate
repetitive or time-consuming processes.

## tl;dr

`grunt` with `test:all` every so often while you code and `serve:development` when you want to see your work.

Use `compile:` with target `development`, `test`, or `production` when you want to create a usable copy of your
application that fits one of those states.

To run your app, run `serve:` with one of the same three targets. (You don't need to `compile` or anything first;
we'll do that for you.)

## `test`

`test` runs tests in a target's `tasks` against the application to check for problems. Specifically:

* `test:lint` lints/hints your LESS (and resultant CSS) and your JS (all of it)
* `test:unit` runs Karma unit tests
* `test:e2e` runs Protractor end-to-end tests
* `test:all` runs all of 'em above, in order

## `compile`

`compile` reads a set of `tasks` and executes each to produce some useful output synthesized from some thoughtful input.

* `compile:development` sets the grunt environment to `development`, compiles LESS into CSS, creates the
`layout.jade` intermediary files, and compiles the application templates.
* `compile:test` does the same as `development`, but in `test` mode (which may or may not differ and doesn't
by default for simplicity).
* `compile:production`
	* sets the grunt environment to `production`,
	* cleans and recreates a resultant directory, `dist`,
	* copies and minifies Express (node.js) application files for fastest node.js server execution,
	* copies `node_modules`,
	* compiles LESS into CSS and minifies it,
	* optimizes all images,
	* copies Bower-referenced JavaScript libraries,
	* creates a single, minified `app.min.js` encompassing all frontend application JavaScript code, including all
	template data statically preloaded into the template cache,
	* compiles/copies intermediary-free application templates,
	* minifies the node.js `app.js`.
	* Whew!

## `serve`

`serve` executes the steps needed to run your project by running a set of `tasks`.

* `serve:development` means **run my application as it stands right now**. It runs `compile:development` to do a dev
compile, `express:development` to start an Express application server, and `watch:expressDevelopment` to keep Express
running and watch for file changes that might need to trigger a rebuild.
* `serve:test` means **test my application and run it if everything is good**. It runs `test`, then does the same as
`serve:development` but in `test` mode (which includes the suppression of Express output).
* `serve:production` means **test my application, and if it's ready, create a production-ready instance of it
 and run that**. It runs `test`, then does the same as `serve:development` but in `production` mode.

## `bump`

We've included [`grunt-bump`](https://github.com/vojtajina/grunt-bump) for you and set it up to synchronize your
`bower.json` and `package.json` versions according to [SemVer](http://semver.org/).

# Architecture Details

**Frontend**

* [AngularJS](http://angularjs.org/)
* [AngularUI State Router](https://github.com/angular-ui/ui-router) (optionally, or else the standard AngularJS router)

**Backend**

* [Node.js](http://nodejs.org/)
* [Express](http://expressjs.com/)

**Design**

* [Bootstrap](http://getbootstrap.com/)
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
* [LESS](http://lesscss.org/)
* [Jade](http://jade-lang.com/)
* [Markdown](http://daringfireball.net/projects/markdown/)

**Management**

* [npm](https://www.npmjs.org/)
* [Bower](http://bower.io/)
* [Grunt](http://gruntjs.com/) (with a lot of tasks)
* [David DM](https://david-dm.org/) (nothing to install, but we recommend checking it out)
* [Travis CI](https://travis-ci.org/) (.travis.yml set up and ready to go)

**Testing**

* [Protractor](https://github.com/angular/protractor)
* [Karma](http://karma-runner.github.io/) (with a bunch of helper libs)
* [Mocha](http://visionmedia.github.io/mocha/)
* [Chai](http://chaijs.com/)
* [Chai-as-promised](http://chaijs.com/plugins/chai-as-promised)
* [Sinon.js](http://sinonjs.org/)
* [Sinon-Chai](http://chaijs.com/plugins/sinon-chai)

**Helper libraries**

* [Lo-Dash](http://lodash.com/)
* [Moment](http://momentjs.com)
* [Underscore.string](https://epeli.github.io/underscore.string/)
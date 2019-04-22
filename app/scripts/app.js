'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
    .module( 'appApp', [
    'ngRoute'
  ] )
    .config( function ( $routeProvider ) {
        $routeProvider
            .when( '/', {
                templateUrl: 'views/main.html'
                , controller: 'MainCtrl'
                , controllerAs: 'mainCtrl'
            } )
            .when( '/about', {
                templateUrl: 'views/about.html'
                , controller: 'AboutCtrl'
                , controllerAs: 'aboutCtrl'
            } )
            .when( '/projects', {
                templateUrl: 'views/projects.html'
                , controller: 'ProjectsCtrl'
                , controllerAs: 'projectsCtrl'
            } )
            .when( '/resume', {
                templateUrl: 'views/resume.html'
                , controller: 'ResumeCtrl'
                , controllerAs: 'resumeCtrl'
            } )
            .when( '/contact', {
                templateUrl: 'views/contact.html'
                , controller: 'ContactCtrl'
                , controllerAs: 'contactCtrl'
            } )
            .when( '/results', {
                templateUrl: 'views/results.html'
                , controller: 'ResultsCtrl'
                , controllerAs: 'resultsCtrl'
            } )
            .otherwise( {
                redirectTo: '/'
            } );
    } );

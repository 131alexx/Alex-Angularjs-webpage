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
    'ngRoute',
    'pascalprecht.translate'
  ] )
    .config( function ( $routeProvider, $translateProvider ) {
        console.log("$translateProvider", $translateProvider);
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


            $translateProvider.translations('en', {
                "TEST": "Hello",
                "ABOUT":{},
                "CONTACT":{
                    "CONTACTME":"You can contact me using...",
                    
                    "PHONE":"Phone:",
                    "LINKEDINVISIT":"Visit my profile!"
                },
                "MAIN":{
                    "WELCOME": "Not a candy but me 😏",
                    "CLICK1":"Try to click the ball!",
                    "WIN":"You win!!",
                    "CLICK2":"Click the ball to play again."
                },
                "PROJECTS":{},
                "RESUME":{},
                "TOPNAV":{},
                "GENERAL":{}
            });

            $translateProvider.translations('es', {
                "TEST": "Hola",
                "ABOUT":{},
                "CONTACT":{
                    "CONTACTME":"Puedes contactarme mediante...",
                    
                    "PHONE":"Telefono:",
                    "LINKEDINVISIT":"Visita mi perfil!"
                },
                "MAIN":{
                    "WELCOME": "No soy un caramelo per casi 😏",
                    "CLICK1":"Intenta clicar la bola!",
                    "WIN":"Has ganado!!",
                    "CLICK2":"Clic a la bola para jugar de nuevo."
                },
                "PROJECTS":{},
                "RESUME":{},
                "TOPNAV":{},
                "GENERAL":{}


            });


             $translateProvider.preferredLanguage('es');

    } );

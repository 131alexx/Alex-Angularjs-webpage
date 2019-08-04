'use strict';
console.log( 'app.js' );
angular
.module( 'appApp', [
    'ngRoute',
    'pascalprecht.translate'
  ] )
.config( function ( $routeProvider, $translateProvider ) {
    $routeProvider
    .when( '/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
    } )
    .when( '/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'aboutCtrl'
    } )
    .when( '/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projectsCtrl'
    } )
    .when( '/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl',
        controllerAs: 'resumeCtrl'
    } )
    .when( '/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contactCtrl'
    } )
    .when( '/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl',
        controllerAs: 'resultsCtrl'
    } )
    .otherwise( {
        redirectTo: '/'
    } );


    $translateProvider.translations( 'en', {
        "TEST": "Hello",
        "ABOUT": {},
        "CONTACT": {
            "CONTACTME": "You can contact me using...",

            "PHONE": "Phone:",
            "LINKEDINVISIT": "Visit my profile!"
        },
        "MAIN": {
            "WELCOME": "Welcome to my webpage!",
            "CANDY": "Not a candy but me 😏",
            "CLICK1": "Try to click the ball!",
            "WIN": "You win!!",
            "CLICK2": "Click the ball to play again."
        },
        "PROJECTS": {
            "TITLE": "Projects",
            "INYOURHOUSE": "As if you were in your house...",
            "GOTOGH": "Go to GitHub",
            "SOMEPROJECTS": "Here are some of my projects, take a look...",
            "DYNIP": "Dynamic IP Notification",
            "CVWEB": "Personal WebPage",
            "STARTDO": "Starting on DevOps"
        },
        "RESUME": {},
        "TOPNAV": {},
        "GENERAL": {
            "HOME": "Home",
            "PROJECTS": "Projects",
            "ABOUTME": "About me",
            "RESUME": "Resume",
            "CONTACT": "Contact",
            "FREET": "Free time",
            "PROJECTSGH": "Projects on GitHub",
            "THISWEB": "(This web)"
        }
    } );

    $translateProvider.translations( 'es', {
        "TEST": "Hola",
        "ABOUT": {},
        "CONTACT": {
            "CONTACTME": "Puedes contactarme mediante...",

            "PHONE": "Teléfono:",
            "LINKEDINVISIT": "Visita mi perfil!"
        },
        "MAIN": {
            "WELCOME": "Bienvenido a mi pagina web!",
            "CANDY": "No soy un caramelo pero casi 😏",
            "CLICK1": "Intenta clicar la bola!",
            "WIN": "Has ganado!!",
            "CLICK2": "Clic a la bola para jugar de nuevo."
        },
        "PROJECTS": {
            "TITLE": "Proyectos",
            "INYOURHOUSE": "Como si estubieras en tu casa...",
            "GOTOGH": "Ir a GitHub",
            "SOMEPROJECTS": "Aquí hay algunos de mis proyectos, echa un vistazo...",
            "DYNIP": "Notificación de IP dinámica",
            "CVWEB": "Página web personal",
            "STARTDO": "Comenzando en DevOps"
        },
        "RESUME": {},
        "TOPNAV": {},
        "GENERAL": {
            "HOME": "Inicio",
            "PROJECTS": "Proyectos",
            "ABOUTME": "Sobre mi",
            "RESUME": "Curriculum",
            "CONTACT": "Contacto",
            "FREET": "Tiempo libre",
            "PROJECTSGH": "Proyectos en GitHub",
            "THISWEB": "(Esta web)"
        }


    } );

    $translateProvider.translations( 'ca', {
        "TEST": "Hola",
        "ABOUT": {},
        "CONTACT": {
            "CONTACTME": "Pots contactar-me mitjançant...",

            "PHONE": "Telèfon:",
            "LINKEDINVISIT": "Visita el meu perfil!"
        },
        "MAIN": {
            "WELCOME": "Benvingut a la meva pàgina web!",
            "CANDY": "No soc un caramel però casi 😏",
            "CLICK1": "Intenta clicar la bola!",
            "WIN": "Has guanyat!!",
            "CLICK2": "Clic a la bola per tornar a jugar."
        },
        "PROJECTS": {
            "TITLE": "Projectes",
            "INYOURHOUSE": "Com si fosis a casa teva...",
            "GOTOGH": "Anar a GitHub",
            "SOMEPROJECTS": "Aquí hi ha alguns dels meus projectes, dona-hi una ullada...",
            "DYNIP": "Notificació d'IP dinàmica",
            "CVWEB": "Pàgina web personal",
            "STARTDO": "Començant a DevOps"
        },
        "RESUME": {},
        "TOPNAV": {},
        "GENERAL": {
            "HOME": "Inici",
            "PROJECTS": "Projectes",
            "ABOUTME": "Sobre mi",
            "RESUME": "Curriculum",
            "CONTACT": "Contacte",
            "FREET": "Temps lliure",
            "PROJECTSGH": "Projectes a GitHub",
            "THISWEB": "(Aquesta web)"
        }


    } );

    $translateProvider.preferredLanguage( 'en' );

} );

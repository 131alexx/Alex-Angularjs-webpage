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
            "STARTDO": "Starting on DevOps",
            "DESCDYNIP": "The project came from the necessity to know my IP address to access my own web due to companies setting dynamic addresses. Are three scripts that checks for the public address and, if it has changed, sends a mail notifying the change. The script can be configured to be executed from time to time (Cron, TaskManager...).",
            "DESCCVWEB": "This project is the webpage you are reading right now, and was made just to test my own skills and what I learned as a Front-End developer. If you want to see the source code, go check it. ;)",
            "DESCSTARTDO": "The objective of this project is to make an easy way to deploy machines without having to buy an infrastructure to test it. You can deploy a few machines very fast and start testing tools like Ansible. DevOps culture, hello world!"
        },
        "RESUME": {},
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
            "STARTDO": "Comenzando en DevOps",
            "DESCDYNIP": "El proyecto vino de la necesidad de saber mi dirección IP para acceder a mi propia web debido a que las compañias establecen direcciones dinamicas. Hay tres scripts que comprueban la dirección pública y, si ha cambiado, envian un mail notificando el cambio. El script puede ser configurado para ser ejecutado cada cirto tiempo (Cron, TaskManager...).",
            "DESCCVWEB": "Este proyecto es la web que estas leyendo ahora mismo, y comenzó para poner a prueba mis habilidades adquiridas y lo que aprendí como desarrollador Front-End. Si quieres ver el codigo fuente, ve a comprovarlo. ;)",
            "DESCSTARTDO": "El objetivo de este proyecto es hacer sencillo el desplegamiento de maquinas sin la necesidad de tener que comprar una infraestructura para hacer pruebas. Puedes desplegar una pocas maquinas muy rapido y comenzar a probar herramientas como Ansible. Cultura DevOps, hello world!"
        },
        "RESUME": {},
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
            "STARTDO": "Començant a DevOps",
            "DESCDYNIP": "Aquest projecte va venir amb la necesitat de saber la meva dicrecció IP per poder accedir a la meva propia pagina web degut a que les companyies esableixen direccions dinàmiques. Hi ha tres scripts que comproven la direcció pública i, en cas d'haver canviat, envien un mail notificant el canvi. El script pot ser configurat per  ser executat cada cert temps (Cron, TaskManager...).",
            "DESCCVWEB": "Aquest  projecte és la web que estas llegint ara mateix, i va começar per posar a proba les meves habilitats adquirides i el que vaig aprendre com a desenvolupador Front-End. Si vols veure el codi font, ves a comprovar-lo. ;)",
            "DESCSTARTDO": "L'objectiu d'aquest projecte es fer senzull el desplegament de maquines sense la necessitat de haver de comprar una infraestructura per fer proves. Pots desplegar unes poques maquines molt ràpid i començar a provar eines com Ansible. Cultura DevOps, hello world!"
        },
        "RESUME": {},
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

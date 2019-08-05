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
        "ABOUT": {
            "REGARDS":"Hello!",
            "PRESENTATION1":"I'm Àlex and this my about page.",
            "PRESENTATION21":"I'm a ",
            "PRESENTATION22":"year old guy passionate about computer science and mathematics.",
            "ILOVE":"About what I love",
            "DESCILOVE":"In my free time, I listen to music, go out with my friends, read things on the Internet and do some exercise (as much as I can). I love traveling with my family and discover new places with natural landscapes.",
            "MYSTUDY":"About my studies",
            "DESCMYSTUDY":"In 2016 I entered the UAB(Autonomous University of Barcelona) and coursed a computer engeneering since today. I specialized on the section of ITC (Information and Comunication Technologies).",
            "MYEXP":"About my work experience",
            "DESCMYEXP":"I've worked as a Front-End for a few months, where i learned the basics of the web development. I'm currently learning the system administrator job and enriching my experience a lot. I love learning new things!"
        },
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
        "ABOUT": {
                 "REGARDS":"Buenas!",
            "PRESENTATION1":"Soy Àlex, y esta es la página sobre mi.",
            "PRESENTATION21":"Soy un chico de ",
            "PRESENTATION22":"años apasionado por la informatica y las matemáticas.",
            "ILOVE":"Sobre lo que me encanta",
            "DESCILOVE":"En mi tiempo libre, escucho musica, salgo con amigos, leo actualidad en Internet y hago ejercicio (tanto como puedo). Me encanta viajar con mi familia y descubrir nuevos sitios con paisajes naturales.",
            "MYSTUDY":"Sobre mis estudios",
            "DESCMYSTUDY":"En 2016 entré en la UAB (Universidad Autonoma de Barcelona) y comencé una ingenieria informatica hasta hoy. Estoy especializadoen la sección de TIC (Tecnologias de la Información y Comunicación).",
            "MYEXP":"Sobre mi experiencia laboral",
            "DESCMYEXP":"He trabajado como desarrollador Front-End durante unos meses, donde aprendí las bases del desarrollo web. Actualmente estoy aprendiendo el trabajo de un administrador de sistemas y enriqueciendo muchísimo mi experiencia. Me encanta aprender cosas nuevas!"
        },
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
        "ABOUT": {
                 "REGARDS":"Bones!",
            "PRESENTATION1":"Soc Àlex, i aquesta és la pàgina sobre mi.",
            "PRESENTATION21":"Soc un noi de ",
            "PRESENTATION22":"anys apassionat per la informàtica y las matemàtiques.",
            "ILOVE":"Sobre el que m'encanta",
            "DESCILOVE":"En el meu temps lliure, escolto música, surto amb els amics, llegeixo l'actualitat a Internet i faig exercici (tant com puc). M'encanta viatjar amb la meva familia i descobrir nous llocs amb paissatges naturals.",
            "MYSTUDY":"Sobre els meus estudis",
            "DESCMYSTUDY":"Al 2016 vaig entrar a la UAB (Universitat Autonóma de Barcelona) i vaig començar una enginyeria informatica fins avui. Estic especialitzat a la secció de les TIC (Tecnologies de la Informació y Communicació).",
            "MYEXP":"Sobre la meva experiència laboral",
            "DESCMYEXP":"He treballat com a desenvolupador Front-end durant uns mesos, on vaig aprendre les bases del desenvolupament web. Actualmente estic aprenent la feina d'administrador de sistemes i enriquient moltissim la meva experiencia. M'encanta aprendre coses noves!"
        },
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

'use strict';

angular.module( 'appApp' )
.controller( 'ResumeCtrl', [ '$scope', '$document', function ( $scope, $document ) {
    this.section = "Resume";
    this.skill = "";
    this.skillType = "";
    this.aConduct = [ 'Teamworking skills', 'Good interpersonal skills', 'Efective Communication', 'Curiosity', 'Scrum', 'Kanban' ];
    this.aSkills = [ 'Docker', 'Jenkins', 'Ansible', 'Docker Swarm', 'Git', 'Debian OS' ];
    //Programming Languages
    this.aPL = [ "C", "C++", "Python", "Node.js", "Java EE", "Bash Scriping" ];
    this.aLT = [ "Maven", "SonarQube", "Terraform", "Kubernetes" ];
    this.aOtherSkills = [ ];
    this.displayAll = false;
    this.changeSkill = ( ) => {
        var allElements = this.aConduct
        .concat( this.aSkills )
        .concat( this.aPL )
        .concat( this.aLT );
        //to check another skill
        var element;
        do {
            element = allElements[ Math.floor( ( Math.random( ) * allElements.length ) ) ];
        }
        while ( element === this.skill );
        this.skill = element;
        if ( this.aConduct.indexOf( this.skill ) !== -1 ) this.skillType = "Social Skill";

        if ( this.aSkills.indexOf( this.skill ) !== -1 ) this.skillType = "Technology Knowledge";

        if ( this.aPL.indexOf( this.skill ) !== -1 ) this.skillType = "Programming Language";

        if ( this.aLT.indexOf( this.skill ) !== -1 ) this.skillType = "Learning Technology";
    }
    this.addOtherSkill = function ( name_, type_ ) {
        this.aOtherSkills.push( {
            name: name_,
            type: type_
        } );
    };
    //Init function
    ( ( ) => {
        this.changeSkill( );    
        this.addOtherSkill("Native Catalan","Language");

        this.addOtherSkill("Native Spanish","Language");

        this.addOtherSkill("Upper Intermediate English","Language");


        this.addOtherSkill("B2 Car License","Mobility");

    } )( )
} ] );

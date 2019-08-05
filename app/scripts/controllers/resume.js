'use strict';

angular.module( 'appApp' )
.controller( 'ResumeCtrl', [ '$scope', '$document', function ( $scope, $document ) {
    this.section = "Resume";
    this.skill = "";
    this.skillType = "";
    this.aConduct = [ 'RESUME.SS.TW', 'RESUME.SS.GOODINT', 'RESUME.SS.EFFCOM', 'RESUME.SS.CURI', 'Scrum', 'Kanban' ];
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
        if ( this.aConduct.indexOf( this.skill ) !== -1 ) this.skillType = "RESUME.SOCIALSKILL";

        if ( this.aSkills.indexOf( this.skill ) !== -1 ) this.skillType = "RESUME.TECHKNOW";

        if ( this.aPL.indexOf( this.skill ) !== -1 ) this.skillType = "RESUME.PROGLANG";

        if ( this.aLT.indexOf( this.skill ) !== -1 ) this.skillType = "RESUME.LEARNTECH";
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
        this.addOtherSkill("RESUME.NCS.CAT","RESUME.LANG");

        this.addOtherSkill("RESUME.NCS.ES","RESUME.LANG");

        this.addOtherSkill("RESUME.NCS.EN","RESUME.LANG");


        this.addOtherSkill("RESUME.NCS.CAR","RESUME.MOBIL");

    } )( )
} ] );

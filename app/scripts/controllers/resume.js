'use strict';
/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp').controller('ResumeCtrl', ['$scope', '$document', function($scope, $document) {
    this.section = "Resume";
    this.skill = "";
    this.skillType = "";
    this.aConduct = ['Teamworking skills', 'Interpersonal skills'];
    this.aSkills = ['AngularJS', 'Jenkins'];
    //Programming Languages
    this.aPL = ["C", "C++", "Python", "Javascript", "Java"];
    this.displayAll = false;
    this.changeSkill = () => {
        var allElements = this.aConduct.concat(this.aSkills).concat(this.aPL);
        //to check another skill
        var element;
        do {
            element = allElements[Math.floor((Math.random() * allElements.length))];
        }
        while (element === this.skill);
        this.skill = element;
        if(this.aConduct.indexOf(this.skill) !== -1) this.skillType = "Social Skill";

        if(this.aSkills.indexOf(this.skill) !== -1) this.skillType = "Technologies Knowledge";

        if(this.aPL.indexOf(this.skill) !== -1) this.skillType = "Programming Language";
   
    }
    //Init function
    (() => {
        this.changeSkill()
    })()
}]);
'use strict';

angular.module('appApp').controller('TopnavCtrl', ['$scope', function($scope) {
    this.section = "topNav";
    this.selected = "";
    /***xivato***/
    this.xivato = function() {
            // console.log( "self", this );
            // console.log('home', self.selected==='home');
            // console.log('projects', self.selected==='projects');
            // console.log('resume', self.selected==='resume');
            // console.log('contact', self.selected==='contact');
            // console.log( "se f.selected", self.selected, typeof self.selected );
        };
        
        (() => {
            // console.log( "window", window.location.hash );
            // console.log( "self", self );
            if (window.location.hash === '#/' || window.location.hash === '') {
                self.selected = angular.copy('home');
            } else {
                self.selected = angular.copy(window.location.hash.split("/")[1]);
            }
            // console.log( "self.selected", self.selected );
            // console.log( "$scope", $scope );
        })();
}]);
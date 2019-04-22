'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module( 'appApp' )
    .controller( 'ResultsCtrl', function ( ) {
        self = this;
        self.section = "Results";
        self.search = "";

        function init( ) {

        	//To get the param from get without the path to the file
            function getUrlVars( ) {
                var vars = {};
                var url = window.location.origin + window.location.search;
                var parts = url.replace( /[?&]+([^=&]+)=([^&]*)/gi, function ( m, key, value ) {
                    vars[ key ] = value;
                } );
                return vars;
            }

            var vars = getUrlVars();
            if(vars.search){
            	self.search = vars.search;
            }
            window.location.href = window.location.origin + window.location.search;
            


        }



        init( );
    } );

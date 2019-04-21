'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appApp
 */
angular.module( 'appApp' )
    .controller( 'AboutCtrl', function ( ) {
        self = this;

        self.section = "About";

        self.name = "Àlex";
        self.age = undefined;

        function init( ) {
            var now = new Date( );
            var birth = new Date( "1998-01-13" );
            self.age = now.getYear( ) - birth.getYear( );
            if ( now.getMonth( ) === 0 && now.getDate( ) < 13 ) {
                self.age--;
            }
        }
        init( );
    } );

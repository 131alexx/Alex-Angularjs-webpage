'use strict';

angular.module( 'appApp' )
.controller( 'TopnavCtrl', [ '$scope', '$translate', function ( $scope, $translate ) {
    this.section = "topNav";
    this.selected = "";
    this.aLanguages = [ ];
    this.langSelected = 'es';
    /***xivato***/
    this.xivato = function ( ) {
        // console.log( "self", this );
        // console.log('home', self.selected==='home');
        // console.log('projects', self.selected==='projects');
        // console.log('resume', self.selected==='resume');
        // console.log('contact', self.selected==='contact');
        // console.log( "se f.selected", self.selected, typeof self.selected );
    };
    this.changeLang = ( ) => {
        console.log( "this.langSelected", this.langSelected );
        $translate.use( this.langSelected );
    }
    this.addLang = ( name_, lang_ ) => {
        this.aLanguages.push( {
            name: name_,
            lang: lang_
        } );
    }
    ( ( ) => {
        // console.log( "window", window.location.hash );
        // console.log( "self", self );
        if ( window.location.hash === '#/' || window.location.hash === '' ) {
            self.selected = angular.copy( 'home' );
        } else {
            self.selected = angular.copy( window.location.hash.split( "/" )[ 1 ] );
        }

        this.addLang( 'Castellano', 'es' );
        this.addLang( 'English', 'en' );
        this.addLang( 'Català', 'ca' );

        console.log( "this.aLanguages", this.aLanguages );
        // console.log( "self.selected", self.selected );
        // console.log( "$scope", $scope );
    } )( );
} ] );

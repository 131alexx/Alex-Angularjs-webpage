'use strict';

angular.module( 'appApp' )
.controller( 'TopnavCtrl', [ '$scope', '$translate', function ( $scope, $translate ) {
    this.section = "topNav";
    this.selected = "";
    this.aLanguages = [ ];
    this.langSelected;
    /***xivato***/
    this.xivato = function ( ) {};
    this.changeLang = ( ) => {

        $translate.use( this.langSelected );
        localStorage.lang = this.langSelected;
    }
    this.addLang = ( name_, lang_ ) => {
        this.aLanguages.push( {
            name: name_,
            lang: lang_
        } );
    }
    ( ( ) => {

        if ( window.location.hash === '#/' || window.location.hash === '' ) {
            self.selected = angular.copy( 'home' );
        } else {
            self.selected = angular.copy( window.location.hash.split( "/" )[ 1 ] );
        }
        if ( localStorage.lang ) {
            this.langSelected = localStorage.lang;
            $translate.use( this.langSelected );
        } else {
            this.langSelected = 'en';
            localStorage.lang = this.langSelected;
            $translate.use( this.langSelected );

        }

        this.addLang( 'Castellano', 'es' );
        this.addLang( 'English', 'en' );
        this.addLang( 'Català', 'ca' );

    } )( );
} ] );

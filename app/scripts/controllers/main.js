'use strict';


angular.module( 'appApp' )
.controller( 'MainCtrl', function ( ) {

    this.square = {
        width: 400,
        height: 400
    }
    this.circle = {
        centerx: 25,
        centery: 25,
        radius: 25

    }
    this.delay = 0;
    this.ingame = true;
    this.intransition = false;

    this.overBall = function ( ) {


        function random( min, max ) {
            return Math.floor( Math.random( ) * ( max - min ) ) + min;

        }
        if ( this.ingame && !this.intransition ) {
            this.intransition = true;
            var rad = this.circle.radius + 5;
            var newX = random( rad, this.square.width - rad );

            var newY = random( rad, this.square.height - rad );



            setTimeout( this.changeBallPosition, this.delay, newX, newY );
        }

    };
    this.win = ( ) => {

        this.ingame = !this.ingame;
        if ( !this.ingame ) {
            this.intransition = false;
            this.delay = 0;
        } else {

            this.overBall( );

        }

    };

    this.changeBallPosition = ( x, y ) => {


        if ( this.ingame ) {

            this.circle.centerx = x;
            this.circle.centery = y;
            this.delay += 15;

            this.intransition = false;
        }
    };

    //Init function
    ( ( ) => {

        this.overBall( );
    } )( )

} );

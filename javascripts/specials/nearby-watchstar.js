( function( M ) {
var nearby = M.require( 'nearby' ),
	watchstar = M.require( 'watchstar' );

nearby.overlay.on( 'postRender', function( $el ) {
	watchstar.initWatchListIconList( $el.find( 'ul' ) );
} );

}( mw.mobileFrontend ) );

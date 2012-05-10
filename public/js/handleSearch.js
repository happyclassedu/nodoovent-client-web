function handleSearch ( ) {

	this.id = 'searchbar';

	$ ( '#' + this.id ).on ( 'input', function ( e ) {
		if ( $ ( '#' + e.currentTarget.id ).val ( ).length == 0 ) {
			$ ( '#mainPanel' ).html ( "" );
		} else {
			$ ( '#mainPanel' ).html ( $ ( '#searchbar' ).val ( ) );
		}
	} );
}
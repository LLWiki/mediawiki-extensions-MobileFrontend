( function ( M ) {
	var context = M.require( 'mobile.startup/context' ),
		/**
		 * MobileWebSearch schema
		 * https://meta.wikimedia.org/wiki/Schema:MobileWebSearch
		 */
		schemaMobileWebSearch = new mw.eventLog.Schema(
			'MobileWebSearch',
			// Sampled at 0.1% (consistent with the Desktop search rate)
			1 / 1000,
			/**
			 * @property {Object} defaults Default options hash.
			 * @property {string} defaults.platform Always "mobileweb"
			 * @property {string} defaults.platformVersion The version of MobileFrontend
			 *  that the user is using. One of "stable" or "beta"
			 */
			{
				platform: 'mobileweb',
				platformVersion: context.getMode()
			}
		);

	mw.trackSubscribe( 'mf.schemaMobileWebSearch', function ( topic, data ) {
		schemaMobileWebSearch.log( data );
	} );

}( mw.mobileFrontend ) );

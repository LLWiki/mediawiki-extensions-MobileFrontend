( function ( M ) {
	var util;

	/**
	 * Utility library
	 * @class util
	 * @singleton
	 */
	util = {
		/**
		 * Escape dots and colons in a hash, jQuery doesn't like them because they
		 * look like CSS classes and pseudoclasses. See
		 * http://bugs.jquery.com/ticket/5241
		 * http://stackoverflow.com/questions/350292/how-do-i-get-jquery-to-select-elements-with-a-period-in-their-id
		 *
		 * @method
		 * @param {string} hash A hash to escape
		 * @return {string}
		 */
		escapeHash: function ( hash ) {
			return hash.replace( /(:|\.)/g, '\\$1' );
		},

		/**
		 * Heuristic for determining whether an Event should be handled by
		 * MobileFrontend or allowed to bubble to the browser.
		 *
		 * @param {Event} ev
		 * @return {boolean} True if event is modified with control, alt, meta, or
		 *                   shift keys and should probably be handled by the
		 *                   browser.
		 *
		 * todo: move this function to a ClickUtil file once bundling and code
		 * splitting is supported.
		 */
		isModifiedEvent: function ( ev ) {
			return ev.altKey || ev.ctrlKey || ev.metaKey || ev.shiftKey;
		}
	};

	M.define( 'mobile.startup/util', util );

}( mw.mobileFrontend, jQuery ) );

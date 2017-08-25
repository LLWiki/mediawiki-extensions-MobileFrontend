( function ( M ) {
	/** @ignore @event Nearby#Nearby-postRender */
	var NEARBY_EVENT_POST_RENDER = 'Nearby-postRender',
		MessageBox = M.require( 'mobile.messageBox/MessageBox' ),
		NearbyGateway = M.require( 'mobile.nearby/NearbyGateway' ),
		util = M.require( 'mobile.startup/util' ),
		WatchstarPageList = M.require( 'mobile.pagelist.scripts/WatchstarPageList' ),
		browser = M.require( 'mobile.startup/Browser' ).getSingleton(),
		icons = M.require( 'mobile.startup/icons' );

	/**
	 * List of nearby pages
	 * @class Nearby
	 * @uses NearbyGateway
	 * @extends WatchstarPageList
	 *
	 * @constructor
	 * @param {Object} options Configuration options
	 * @param {Function} [options.onItemClick] Callback invoked when a result is
	 *                                         clicked. Defaults to nop.
	 */
	function Nearby( options ) {
		var self = this,
			_super = WatchstarPageList;

		this.range = options.range || mw.config.get( 'wgMFNearbyRange' ) || 1000;
		this.source = options.source || 'nearby';
		this.nearbyApi = new NearbyGateway( {
			api: options.api
		} );

		if ( options.errorType ) {
			options.errorOptions = self._errorOptions( options.errorType );
		}

		this.onItemClick = options.onItemClick;

		_super.apply( this, arguments );
	}

	OO.mfExtend( Nearby, WatchstarPageList, {
		errorMessages: {
			empty: {
				heading: mw.msg( 'mobile-frontend-nearby-noresults' ),
				hasHeading: true,
				msg: mw.msg( 'mobile-frontend-nearby-noresults-guidance' )
			},
			locating: {
				heading: mw.msg( 'mobile-frontend-nearby-lookup-ui-error' ),
				hasHeading: true,
				msg: mw.msg( 'mobile-frontend-nearby-lookup-ui-error-guidance' )
			},
			permission: {
				heading: mw.msg( 'mobile-frontend-nearby-permission' ),
				hasHeading: true,
				msg: mw.msg( 'mobile-frontend-nearby-permission-guidance' )
			},
			http: {
				heading: mw.msg( 'mobile-frontend-nearby-error' ),
				hasHeading: true,
				msg: mw.msg( 'mobile-frontend-nearby-error-guidance' )
			},
			incompatible: {
				heading: mw.msg( 'mobile-frontend-nearby-requirements' ),
				hasHeading: true,
				msg: mw.msg( 'mobile-frontend-nearby-requirements-guidance' )
			}
		},
		templatePartials: util.extend( {}, WatchstarPageList.prototype.templatePartials, {
			pageList: WatchstarPageList.prototype.template,
			messageBox: MessageBox.prototype.template
		} ),
		template: mw.template.get( 'mobile.nearby', 'Nearby.hogan' ),
		/**
		 * @inheritdoc
		 * @cfg {Object} defaults Default options hash.
		 * @cfg {mw.Api} defaults.api
		 * @cfg {Object} defaults.errorOptions options to pass to a messagebox template
		 * @cfg {string} defaults.spinner HTML of the spinner icon with a tooltip that
		 * tells the user that their location is being looked up
		 */
		defaults: util.extend( {}, WatchstarPageList.prototype.defaults, {
			errorOptions: undefined,
			spinner: icons.spinner( {
				title: mw.msg( 'mobile-frontend-nearby-loading' )
			} ).toHtmlString()
		} ),

		/**
		 * Obtain users current location and return a deferred object with the
		 * longitude and latitude values
		 * Resolve return object with 'incompatible' if browser doesn't support geo location
		 * FIXME: This should be refactored into a LocationGateway
		 *
		 * @return {jQuery.Deferred}
		 */
		getCurrentPosition: function () {
			var result = util.Deferred();
			if ( browser.supportsGeoLocation() ) {
				navigator.geolocation.getCurrentPosition(
					function ( geo ) {
						result.resolve( {
							latitude: geo.coords.latitude,
							longitude: geo.coords.longitude
						} );
					},
					function ( err ) {
						// see https://developer.mozilla.org/en-US/docs/Web/API/PositionError
						if ( err.code === 1 ) {
							err = 'permission';
						} else {
							err = 'locating';
						}
						result.reject( err );
					},
					{
						timeout: 10000,
						enableHighAccuracy: true
					}
				);
			} else {
				result.reject( 'incompatible' );
			}
			return result;
		},
		/**
		 * Request pages from api based on provided options.
		 * When options.longitude and options.latitude set getPages near that location.
		 * If those are not present use options.title to find pages near that title.
		 * If no valid options given resolve return object with error message.
		 * @param {Object} options Configuration options
		 * @return {jQuery.Deferred}
		 * @private
		 */
		_find: function ( options ) {
			var result = util.Deferred(),
				self = this;

			/**
			 * Handler for successful query
			 * @param {Array} pages as passed by done callback of Nearby##getPages
			 * @ignore
			 */
			function pagesSuccess( pages ) {
				options.pages = pages;
				if ( pages && pages.length === 0 ) {
					options.errorOptions = self._errorOptions( 'empty' );
				}
				self._isLoading = false;
				result.resolve( options );
			}

			/**
			 * Handler for failed query
			 *
			 * @param {string} code Error Code
			 * @param {string} details A html-safe string with ad detailed error description
			 * @ignore
			 */
			function pagesError( code, details ) {
				self._isLoading = false;
				options.errorOptions = self._errorOptions( code, details );
				result.resolve( options );
			}

			if ( options.latitude && options.longitude ) {
				this.nearbyApi.getPages(
					{
						latitude: options.latitude,
						longitude: options.longitude
					},
					this.range, options.exclude
				)
					.done( pagesSuccess )
					.fail( pagesError );
			} else if ( options.pageTitle ) {
				this.nearbyApi.getPagesAroundPage( options.pageTitle, this.range )
					.done( pagesSuccess )
					.fail( pagesError );
			} else {
				if ( options.errorType ) {
					options.errorOptions = this._errorOptions( options.errorType );
				}
				result.resolve( options );
			}
			return result;
		},
		/**
		 * Generate a list of options that can be passed to a messagebox template.
		 * @private
		 * @param {string} key to a defined error message
		 * @param {string} msg Message to use, instead of a mapped error message from this.errorMessages
		 * @return {Object}
		 */
		_errorOptions: function ( key, msg ) {
			var message;

			if ( msg ) {
				message = { msg: msg };
			} else {
				message = this.errorMessages[ key ] || this.errorMessages.http;
			}
			return util.extend( {
				className: 'errorbox'
			}, message );
		},
		/** @inheritdoc */
		postRender: function () {
			if ( !this._isLoading ) {
				this.$( '.spinner' ).addClass( 'hidden' );
				this.$( '.page-list' ).removeClass( 'hidden' );
			}
			WatchstarPageList.prototype.postRender.apply( this );
			this._postRenderLinks();
			this.$( function () {
				// todo: use the local emitter when refresh() doesn't recreate the
				//       OO.EventEmitter by calling the super's constructor.
				M.emit( NEARBY_EVENT_POST_RENDER );
			} );
		},
		/**
		 * Hijack links to apply several customisations to them:
		 * Ensure that when clicked they register an uploads funnel.
		 * Ensure that when a user navigates back to the page their page position is restored using
		 * fragment identifier trickery.
		 * @private
		 */
		_postRenderLinks: function () {
			var self = this;
			this.$( 'a' ).each( function ( i ) {
				// FIXME: not unique if multiple Nearby objects on same page
				self.$( this ).attr( 'id', 'nearby-page-list-item-' + i );
			} ).on( 'click', this.onItemClick );
		},
		/**
		 * Refresh the list of the nearby articles depending on the options.
		 * The current location, latitude/longitude, or page title can be used
		 * to find the articles.
		 *
		 * @param {Object} options Configuration options
		 */
		refresh: function ( options ) {
			var self = this,
				_super = WatchstarPageList;

			this.$( '.spinner' ).removeClass( 'hidden' );
			this.$( '.page-list' ).addClass( 'hidden' );

			// Re-run after api/geolocation request
			if ( options.useCurrentLocation ) {
				// Flush any existing list of pages
				options.pages = [];

				// Get some new pages
				this.getCurrentPosition().done( function ( coordOptions ) {
					util.extend( options, coordOptions );
					self._find( options ).done( function ( options ) {
						_super.call( self, options );
					} );
				} ).fail( function ( errorType ) {
					options.errorOptions = self._errorOptions( errorType );
					self._isLoading = false;
					_super.call( self, options );
				} );
			} else if ( ( options.latitude && options.longitude ) || options.pageTitle ) {
				// Flush any existing list of pages
				options.pages = [];

				// Get some new pages
				this._find( options ).done( function ( options ) {
					_super.call( self, options );
				} ).fail( function ( errorType ) {
					options.errorOptions = self._errorOptions( errorType );
					self._isLoading = false;
					_super.call( self, options );
				} );
			}

			// Run it once for loader etc
			this._isLoading = true;
		}
	} );

	M.define( 'mobile.nearby/Nearby', Nearby );

}( mw.mobileFrontend ) );

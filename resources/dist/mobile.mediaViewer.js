this.mfModules=this.mfModules||{},this.mfModules["mobile.mediaViewer"]=(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/mobile.mediaViewer/ImageGateway.js":function(e,t,i){var a=[320,640,800,1024,1280,1920,2560,2880],s=i("./src/mobile.startup/actionParams.js"),r=i("./src/mobile.startup/util.js");function n(e){for(var t=0;e>a[t]&&t<a.length-1;)++t;return a[t]}function o(e){this._cache={},this.api=e.api}o.prototype.getThumb=function(e){var t=this._cache[e],i=r.getWindow(),a=window.devicePixelRatio&&window.devicePixelRatio>1?window.devicePixelRatio:1;return t||(this._cache[e]=this.api.get(s({prop:"imageinfo",titles:e,iiprop:["url","extmetadata"],iiurlwidth:n(i.width()*a),iiurlheight:n(i.height()*a)})).then(function(e){if(e.query&&e.query.pages&&e.query.pages[0]&&e.query.pages[0].imageinfo)return e.query.pages[0].imageinfo[0];throw new Error("The API failed to return any pages matching the titles.")})),this._cache[e]},o._findSizeBucket=n,e.exports=o},"./src/mobile.mediaViewer/ImageOverlay.js":function(e,t,i){var a=i("./src/mobile.startup/Overlay.js"),s=i("./src/mobile.startup/util.js"),r=i("./src/mobile.startup/mfExtend.js"),n=i("./src/mobile.startup/Icon.js"),o=i("./src/mobile.startup/icons.js"),l=i("./src/mobile.startup/Button.js"),d=o.cancel("gray"),m=new l({label:mw.msg("mobile-frontend-media-details"),additionalClassNames:"button",progressive:!0}),h=new n({rotation:90,name:"arrow-invert"}),u=new n({rotation:-90,name:"arrow-invert"}),c=i("./src/mobile.mediaViewer/LoadErrorMessage.js"),g=i("./src/mobile.mediaViewer/ImageGateway.js"),p=mw.loader.require("mediawiki.router");function f(e){this.gateway=e.gateway||new g({api:e.api}),this.router=e.router||p,this.eventBus=e.eventBus,a.call(this,s.extend({className:"overlay media-viewer",events:{"click .image-wrapper":"onToggleDetails","click .slider-button":"onSlide"}},e))}r(f,a,{hideOnExitClick:!1,template:mw.template.get("mobile.mediaViewer","Overlay.hogan"),defaults:s.extend({},a.prototype.defaults,{licenseLinkMsg:mw.msg("mobile-frontend-media-license-link"),thumbnails:[]}),onSlide:function(e){var t=this.$el.find(e.target).closest(".slider-button").data("thumbnail");this.emit(f.EVENT_SLIDE,t)},preRender:function(){var e=this;this.options.thumbnails.forEach(function(t,i){t.getFileName()===e.options.title&&(e.options.caption=t.getDescription(),e.galleryOffset=i)})},_enableArrowImages:function(e){var t,i,a=this.galleryOffset;void 0===this.galleryOffset?(t=e[e.length-1],i=e[0]):(t=e[0===a?e.length-1:a-1],i=e[a===e.length-1?0:a+1]),this.$el.find(".prev").data("thumbnail",t),this.$el.find(".next").data("thumbnail",i)},_disableArrowImages:function(){this.$el.find(".prev, .next").remove()},_handleRetry:function(){this.router.emit("hashchange")},postRender:function(){var e,t=o.spinner().$el,i=this.options.thumbnails||[],s=this;function r(){s.hasLoadError=!0,t.hide(),s.$el.find(".image img").hide(),0===s.$el.find(".load-fail-msg").length&&new c({retryPath:s.router.getPath()}).on("retry",s._handleRetry.bind(s)).prependTo(s.$el.find(".image"))}function n(){e.addClass("image-loaded")}i.length<2?this._disableArrowImages():this._enableArrowImages(i),this.$details=this.$el.find(".image-details"),this.$el.find(".image").append(t),a.prototype.postRender.apply(this),this.$details.prepend(m.$el),this.gateway.getThumb(s.options.title).then(function(i){var a,o=i.descriptionurl+"#mw-jump-to-license";t.hide(),s.thumbWidth=i.thumbwidth,s.thumbHeight=i.thumbheight,s.imgRatio=i.thumbwidth/i.thumbheight,(e=s.parseHTML("<img>",document)).on("load",n).on("error",r),e.attr("src",i.thumburl).attr("alt",s.options.caption),s.$el.find(".image").append(e),s.$details.addClass("is-visible"),s._positionImage(),s.$el.find(".image-details a").attr("href",o),i.extmetadata&&(i.extmetadata.LicenseShortName&&s.$el.find(".license a").text(i.extmetadata.LicenseShortName.value).attr("href",o),i.extmetadata.Artist&&(a=i.extmetadata.Artist.value.replace(/<.*?>/g,""),s.$el.find(".license").prepend(a+" &bull; "))),s.adjustDetails()},function(){r()}),this.eventBus.on("resize:throttled",this._positionImage.bind(this))},onToggleDetails:function(){this.hasLoadError||(this.$el.find(".cancel, .slider-button").toggle(),this.$details.toggle(),this._positionImage())},onExitClick:function(e){a.prototype.onExitClick.apply(this,arguments),this.emit(f.EVENT_EXIT,e)},show:function(){a.prototype.show.apply(this,arguments),this._positionImage()},_positionImage:function(){var e,t,i,a,r,n=s.getWindow();this.adjustDetails(),e=this.$details.is(":visible")?this.$details.outerHeight():0,a=(t=n.width())/(i=n.height()-e),r=this.$el.find("img"),this.imgRatio>a?t<this.thumbWidth&&r.css({width:t,height:"auto"}):i<this.thumbHeight&&r.css({width:"auto",height:i}),this.$el.find(".image-wrapper").css("bottom",e),this.$el.find(".slider-button.prev").append(h.$el),this.$el.find(".slider-button.next").append(u.$el),d.$el.insertBefore(this.$details)},adjustDetails:function(){var e=s.getWindow().height();this.$el.find(".image-details").height()>.5*e&&this.$el.find(".image-details").css("max-height",.5*e)}}),f.EVENT_EXIT="ImageOverlay-exit",f.EVENT_SLIDE="ImageOverlay-slide",e.exports=f},"./src/mobile.mediaViewer/LoadErrorMessage.js":function(e,t,i){var a=i("./src/mobile.startup/util.js"),s=i("./src/mobile.startup/mfExtend.js"),r=i("./src/mobile.startup/Icon.js"),n=i("./src/mobile.startup/View.js");function o(e){if(!e.retryPath)throw new Error("'retryPath' must be set in options param. Received: "+e.retryPath);n.call(this,{events:{"click .load-fail-msg-link a":"onRetry"}},e)}s(o,n,{template:mw.template.get("mobile.mediaViewer","LoadErrorMessage.hogan"),isTemplateMode:!0,defaults:a.extend({},o.prototype.defaults,{icon:new r({name:"alert-invert",additionalClassNames:"load-fail-msg-icon"}).toHtmlString(),msgToUser:mw.msg("mobile-frontend-media-load-fail-message"),retryTxt:mw.msg("mobile-frontend-media-load-fail-retry")}),postRender:function(){this.$el.find(".load-fail-msg-link a").attr("href","#"+this.options.retryPath)},onRetry:function(){return this.emit("retry"),!1}}),e.exports=o},"./src/mobile.mediaViewer/mobile.mediaViewer.js":function(e,t,i){var a=i("./src/mobile.startup/moduleLoaderSingleton.js"),s=i("./src/mobile.mediaViewer/ImageOverlay.js");a.define("mobile.mediaViewer/ImageOverlay",s)}},[["./src/mobile.mediaViewer/mobile.mediaViewer.js",0,1]]]);
//# sourceMappingURL=mobile.mediaViewer.js.map.json
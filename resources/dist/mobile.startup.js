this.mfModules=this.mfModules||{},this.mfModules["mobile.startup"]=(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/mobile.startup/Toggler.js":function(e,t,r){var s=r("./src/mobile.startup/Browser.js").getSingleton(),n=r("./src/mobile.startup/util.js"),a=n.escapeHash,o={name:"arrow",additionalClassNames:"indicator"},i=r("./src/mobile.startup/Icon.js");function l(e){this.eventBus=e.eventBus,this._enable(e.$container,e.prefix,e.page,e.isClosed)}function c(e){var t=JSON.parse(mw.storage.get("expandedSections")||"{}");return t[e.title]=t[e.title]||{},t}function u(e){mw.storage.set("expandedSections",JSON.stringify(e))}function p(e,t,r){var s,n,a=c(r);t.find(".section-heading span").each(function(){n=t.find(this),s=n.parents(".section-heading"),a[r.title][n.attr("id")]&&!s.hasClass("open-block")&&e.toggle(s,r)})}function h(e){var t=(new Date).getTime(),r=c(e);Object.keys(r).forEach(function(e){var s=r[e];Object.keys(s).forEach(function(n){var a=s[n];Math.floor((t-a)/1e3/60/60/24)>=1&&delete r[e][n]})}),u(r)}l.prototype.toggle=function(e,t){var r,n=e.is(".open-block"),a=e.next();e.toggleClass("open-block"),e.data("indicator").remove(),o.rotation=n?0:180,r=new i(o).prependTo(e),e.data("indicator",r),a.toggleClass("open-block").attr({"aria-pressed":!n,"aria-expanded":!n}),this.eventBus.emit("section-toggled",{expanded:n,isReferenceSection:Boolean(a.attr("data-is-reference-section")),$heading:e}),s.isWideScreen()||function(e,t){var r=e.find("span").attr("id"),s=e.hasClass("open-block"),n=c(t);r&&(s?n[t.title][r]=(new Date).getTime():delete n[t.title][r],u(n))}(e,t)},l.prototype.reveal=function(e,t,r){var s,n;try{(n=(s=t.find(a(e))).parents(".collapsible-heading")).length||(n=s.parents(".collapsible-block").prev(".collapsible-heading")),n.length&&!n.hasClass("open-block")&&this.toggle(n,r),n.length&&window.scrollTo(0,s.offset().top)}catch(e){}},l.prototype._enable=function(e,t,r,a){var l,c,u,m,d,f=this,g=mw.config.get("wgMFCollapseSectionsByDefault");function b(){var t=window.location.hash;0===t.indexOf("#")&&f.reveal(decodeURIComponent(t),e,r)}l=e.find("> h1,> h2,> h3,> h4,> h5,> h6,.section-heading").eq(0).prop("tagName")||"H1",void 0===g&&(g=!0),c=!g||"true"===mw.storage.get("expandSections"),e.children(l).each(function(n){var l,p=e.find(this),h=p.find(".indicator"),d=t+"collapsible-block-"+n;p.next().is("div")&&(m=p.next("div"),l=Boolean(m.attr("data-is-reference-section")),p.addClass("collapsible-heading ").data("section-number",n).attr({tabindex:0,"aria-haspopup":"true","aria-controls":d}).on("click",function(e){e.target.href||(e.preventDefault(),f.toggle(p,r))}),o.rotation=c?180:0,u=new i(o),h.length?h.replaceWith(u.$el):u.prependTo(p),p.data("indicator",u.$el),m.addClass("collapsible-block").eq(0).attr({id:d,"aria-pressed":"false","aria-expanded":"false"}),function(e,t,r){t.on("keypress",function(s){13!==s.which&&32!==s.which||e.toggle(t,r)}).find("a").on("keypress mouseup",function(e){e.stopPropagation()})}(f,p,r),!l&&(!a&&s.isWideScreen()||c)&&f.toggle(p,r))}),function(){var t=mw.config.get("wgInternalRedirectTargetUrl"),s=!!t&&t.split("#")[1];s&&(window.location.hash=s,f.reveal(s,e,r))}(),b(),(d=e.find("a:not(.reference a)")).on("click",function(){void 0!==d.attr("href")&&d.attr("href").indexOf("#")>-1&&b()}),n.getWindow().on("hashchange",function(){b()}),!s.isWideScreen()&&r&&(p(this,e,r),h(r))},l._getExpandedSections=c,l._expandStoredSections=p,l._cleanObsoleteStoredSections=h,e.exports=l},"./src/mobile.startup/languageOverlay/getDeviceLanguage.js":function(e,t){e.exports=function(e){var t=e.languages?e.languages[0]:e.language||e.userLanguage||e.browserLanguage||e.systemLanguage;return t?t.toLowerCase():void 0}},"./src/mobile.startup/languageOverlay/languageOverlay.js":function(e,t,r){var s=r("./src/mobile.startup/moduleLoaderSingleton.js"),n=r("./src/mobile.startup/languageOverlay/getDeviceLanguage.js"),a=r("./src/mobile.startup/Overlay.js"),o=r("./src/mobile.startup/promisedView.js");function i(e){return mw.loader.using("mobile.languages.structured").then(function(){return e.getPageLanguages(mw.config.get("wgPageName"),mw.config.get("wgUserLanguage"))}).then(function(e){return new(s.require("mobile.languages.structured/LanguageSearcher"))({languages:e.languages,variants:e.variants,deviceLanguage:n(navigator)})})}function l(e){return a.make({heading:mw.msg("mobile-frontend-language-heading"),className:"overlay language-overlay"},o(i(e)))}l.test={loadLanguageSearcher:i},e.exports=l},"./src/mobile.startup/mediaViewer/overlay.js":function(e,t,r){var s=r("./src/mobile.startup/moduleLoaderSingleton.js"),n=r("./src/mobile.startup/promisedView.js"),a=r("./src/mobile.startup/util.js"),o=r("./src/mobile.startup/headers.js").header,i=r("./src/mobile.startup/icons.js"),l=r("./src/mobile.startup/Overlay.js");e.exports=function(e){return l.make({headers:[o("",[],i.cancel("gray"))],className:"overlay media-viewer"},n(a.Promise.all([mw.loader.using("mobile.mediaViewer")]).then(function(){return new(0,s.require("mobile.mediaViewer").ImageCarousel)(e)})))}},"./src/mobile.startup/mobile.startup.js":function(e,t,r){var s=r("./src/mobile.startup/moduleLoaderSingleton.js"),n=r("./src/mobile.startup/search/schemaMobileWebSearch.js");e.exports={moduleLoader:s,mfExtend:r("./src/mobile.startup/mfExtend.js"),context:r("./src/mobile.startup/context.js"),time:r("./src/mobile.startup/time.js"),util:r("./src/mobile.startup/util.js"),View:r("./src/mobile.startup/View.js"),PageGateway:r("./src/mobile.startup/PageGateway.js"),Browser:r("./src/mobile.startup/Browser.js"),Button:r("./src/mobile.startup/Button.js"),Icon:r("./src/mobile.startup/Icon.js"),ReferencesDrawer:r("./src/mobile.startup/references/ReferencesDrawer.js"),ReferencesGateway:r("./src/mobile.startup/references/ReferencesGateway.js"),ReferencesHtmlScraperGateway:r("./src/mobile.startup/references/ReferencesHtmlScraperGateway.js"),icons:r("./src/mobile.startup/icons.js"),Page:r("./src/mobile.startup/Page.js"),currentPage:r("./src/mobile.startup/currentPage.js"),PageHTMLParser:r("./src/mobile.startup/PageHTMLParser.js"),currentPageHTMLParser:r("./src/mobile.startup/currentPageHTMLParser.js"),Anchor:r("./src/mobile.startup/Anchor.js"),Skin:r("./src/mobile.startup/Skin.js"),OverlayManager:r("./src/mobile.startup/OverlayManager.js"),Overlay:r("./src/mobile.startup/Overlay.js"),loadingOverlay:r("./src/mobile.startup/loadingOverlay.js"),CtaDrawer:r("./src/mobile.startup/CtaDrawer.js"),toast:r("./src/mobile.startup/toast.js"),Watchstar:r("./src/mobile.startup/watchstar/Watchstar.js"),rlModuleLoader:r("./src/mobile.startup/rlModuleLoader.js"),eventBusSingleton:r("./src/mobile.startup/eventBusSingleton.js"),Toggler:r("./src/mobile.startup/Toggler.js"),toc:{TableOfContents:r("./src/mobile.startup/toc/TableOfContents.js")},notifications:{overlay:r("./src/mobile.startup/notifications/overlay.js")},search:{SearchOverlay:r("./src/mobile.startup/search/SearchOverlay.js"),MobileWebSearchLogger:r("./src/mobile.startup/search/MobileWebSearchLogger.js"),SearchGateway:r("./src/mobile.startup/search/SearchGateway.js")},lazyImages:{lazyImageLoader:r("./src/mobile.startup/lazyImages/lazyImageLoader.js")},talk:{overlay:r("./src/mobile.startup/talk/overlay.js")},languageOverlay:r("./src/mobile.startup/languageOverlay/languageOverlay.js"),mediaViewer:{overlay:r("./src/mobile.startup/mediaViewer/overlay.js")}},mw.mobileFrontend=s,s.define("mobile.startup",e.exports),n.subscribeMobileWebSearchSchema()},"./src/mobile.startup/notifications/overlay.js":function(e,t,r){var s=r("./src/mobile.startup/Overlay.js"),n=r("./src/mobile.startup/moduleLoaderSingleton.js"),a=r("./src/mobile.startup/promisedView.js"),o=r("./src/mobile.startup/View.js"),i=r("./src/mobile.startup/Anchor.js");e.exports=function(e,t){var r,l=mw.loader.using("mobile.notifications.overlay").then(function(){return r=new OO.ui.ButtonWidget({icon:"checkAll",title:mw.msg("echo-mark-all-as-read")}),o.make({class:"notifications-overlay-header-markAllRead"},[r.$element])}),c=a(l);return c.$el.hide(),s.make({heading:"<strong>"+mw.message("notifications").escaped()+"</strong>",footerAnchor:new i({href:mw.util.getUrl("Special:Notifications"),progressive:!0,additionalClassNames:"footer-link notifications-archive-link",label:mw.msg("echo-overlay-link")}).options,headerActions:[c],isBorderBox:!1,className:"overlay notifications-overlay navigation-drawer"},a(l.then(function(){return(0,n.require("mobile.notifications.overlay").list)(mw.echo,r,e,t)})))}},"./src/mobile.startup/references/ReferencesDrawer.js":function(e,t,r){var s=r("./src/mobile.startup/Drawer.js"),n=r("./src/mobile.startup/util.js"),a=r("./src/mobile.startup/icons.js"),o=r("./src/mobile.startup/mfExtend.js"),i=r("./src/mobile.startup/references/ReferencesGateway.js"),l=r("./src/mobile.startup/Icon.js");function c(e){s.call(this,n.extend({className:"drawer position-fixed text references-drawer",events:{"click sup a":"showNestedReference"}},e))}o(c,s,{defaults:n.extend({},s.prototype.defaults,{errorClassName:new l({name:"error",hasText:!0,isSmall:!0}).getClassName()}),show:function(){return s.prototype.show.apply(this,arguments)},template:n.template('\n<div class="references-drawer__header"></div>\n{{#error}}\n\t<div class="{{errorClassName}}">\n{{/error}}\n<sup>{{title}}</sup>\n{{#text}}\n\t{{{text}}}\n{{/text}}\n{{#error}}</div>{{/error}}\n\t'),closeOnScroll:!1,postRender:function(){s.prototype.postRender.apply(this),this.$el.find(".references-drawer__header").append([new l({isSmall:!0,name:"citation-invert",additionalClassNames:"references-drawer__title",hasText:!0,label:mw.msg("mobile-frontend-references-citation")}).$el,a.cancel("gray").$el]),this.options.text||this.$el.append(a.spinner().$el),this.on("show",this.onShow.bind(this)),this.on("hide",this.onHide.bind(this))},onShow:function(){n.getDocument().find("body").addClass("drawer-enabled")},onHide:function(){n.getDocument().find("body").removeClass("drawer-enabled")},showReference:function(e,t,r,s){var n=this,a=this.options.gateway;return this.options.page=t,this.options.pageHTMLParser=s,n.show(),a.getReference(e,t,s).then(function(e){n.render({title:r,text:e.text})},function(e){e===i.ERROR_NOT_EXIST?n.hide():n.render({error:!0,title:r,text:mw.msg("mobile-frontend-references-citation-error")})})},showNestedReference:function(e){var t=this.$el.find(e.target);return this.showReference(t.attr("href"),this.options.page,t.text(),this.options.pageHTMLParser),!1}}),e.exports=c},"./src/mobile.startup/references/ReferencesGateway.js":function(e,t){function r(e){this.api=e}r.prototype.getReference=null,r.ERROR_NOT_EXIST="NOT_EXIST_ERROR",r.ERROR_OTHER="OTHER_ERROR",e.exports=r},"./src/mobile.startup/references/ReferencesHtmlScraperGateway.js":function(e,t,r){var s=r("./src/mobile.startup/references/ReferencesGateway.js"),n=r("./src/mobile.startup/mfExtend.js"),a=r("./src/mobile.startup/util.js");function o(){s.apply(this,arguments)}n(o,s,{EXTERNAL_LINK_CLASS:"external--reference",getReferenceFromContainer:function(e,t){var r,n=a.Deferred();return(r=t.find("#"+a.escapeSelector(e.substr(1)))).length?(r.find(".external").addClass(this.EXTERNAL_LINK_CLASS),n.resolve({text:r.html()})):n.reject(s.ERROR_NOT_EXIST),n.promise()},getReference:function(e,t,r){return this.getReferenceFromContainer(decodeURIComponent(e),r.$el.find("ol.references"))}}),e.exports=o},"./src/mobile.startup/search/MobileWebSearchLogger.js":function(e,t){function r(){this.userSessionToken=null,this.searchSessionToken=null}r.prototype={_newUserSession:function(){this.userSessionToken=mw.user.generateRandomSessionId()},_newSearchSession:function(){this.searchSessionToken=mw.user.generateRandomSessionId(),this.searchSessionCreatedAt=(new Date).getTime()},onSearchShow:function(){this._newUserSession()},onSearchStart:function(){this._newSearchSession(),mw.track("mf.schemaMobileWebSearch",{action:"session-start",userSessionToken:this.userSessionToken,searchSessionToken:this.searchSessionToken,timeOffsetSinceStart:0})},onSearchResults:function(e){var t=(new Date).getTime()-this.searchSessionCreatedAt;mw.track("mf.schemaMobileWebSearch",{action:"impression-results",resultSetType:"prefix",numberOfResults:e.results.length,userSessionToken:this.userSessionToken,searchSessionToken:this.searchSessionToken,timeToDisplayResults:t,timeOffsetSinceStart:t})},onSearchResultClick:function(e){var t=(new Date).getTime()-this.searchSessionCreatedAt;mw.track("mf.schemaMobileWebSearch",{action:"click-result",clickIndex:e.resultIndex+1,userSessionToken:this.userSessionToken,searchSessionToken:this.searchSessionToken,timeOffsetSinceStart:t})}},r.register=function(e){var t=new r;e.on("search-show",t.onSearchShow.bind(t)),e.on("search-start",t.onSearchStart.bind(t)),e.on("search-results",t.onSearchResults.bind(t)),e.on("search-result-click",t.onSearchResultClick.bind(t))},e.exports=r},"./src/mobile.startup/search/SearchOverlay.js":function(e,t,r){var s=r("./src/mobile.startup/mfExtend.js"),n=r("./src/mobile.startup/Overlay.js"),a=r("./src/mobile.startup/util.js"),o=r("./src/mobile.startup/icons.js"),i=r("./src/mobile.startup/headers.js").formHeader,l=r("./src/mobile.startup/Icon.js"),c=r("./src/mobile.startup/search/SearchResultsView.js"),u=r("./src/mobile.startup/watchstar/WatchstarPageList.js");function p(e){var t=a.extend(!0,{headerChrome:!0,isBorderBox:!1,className:"overlay search-overlay",headers:[i(a.template('<div class="overlay-title">\n<form method="get" action="{{action}}" class="search-box">\n\t<input class="search" type="search" name="search" autocomplete="off" placeholder="{{placeholderMsg}}" aria-label="{{placeholderMsg}}" value="{{searchTerm}}">\n</form>\n</div>\n\t\t\t\t\t').render({placeholderMsg:e.placeholderMsg,action:e.action||mw.config.get("wgScript")}),[o.cancel()],!1)],events:{"input input":"onInputInput","click .clear":"onClickClear","click .search-content":"onClickSearchContent","click .overlay-content":"onClickOverlayContent","click .overlay-content > div":"onClickOverlayContentDiv","touchstart .results":"hideKeyboardOnScroll","mousedown .results":"hideKeyboardOnScroll","click .results a":"onClickResult"}},e);n.call(this,t),this.api=t.api,this.gateway=new t.gatewayClass(this.api),this.router=t.router}s(p,n,{defaults:a.extend({},n.prototype.defaults,{clearIcon:new l({tagName:"button",name:"search-clear",isSmall:!0,label:mw.msg("mobile-frontend-clear-search"),additionalClassNames:"clear"}),searchTerm:""}),onInputInput:function(){this.performSearch(),this.$clear.toggle(""!==this.$input.val())},onClickClear:function(){return this.$input.val("").trigger("focus"),this.performSearch(),this.$clear.hide(),!1},onClickSearchContent:function(){var e=a.getDocument().find("body"),t=this.$el.find("form");this.parseHTML("<input>").attr({type:"hidden",name:"fulltext",value:"search"}).appendTo(t),setTimeout(function(){t.appendTo(e),t.trigger("submit")},0)},onClickOverlayContent:function(){this.$el.find(".cancel").trigger("click")},onClickOverlayContentDiv:function(e){e.stopPropagation()},hideKeyboardOnScroll:function(){this.$input.trigger("blur")},onClickResult:function(e){var t=this.$el.find(e.currentTarget),r=t.closest("li");this.emit("search-result-click",{result:r,resultIndex:this.$results.index(r),originalEvent:e}),e.preventDefault(),this.router.back().then(function(){window.location.href=t.attr("href")})},postRender:function(){var e,t=this,r=this.options,s=new c({searchContentLabel:mw.msg("mobile-frontend-search-content"),noResultsMsg:mw.msg("mobile-frontend-search-no-results"),searchContentNoResultsMsg:mw.message("mobile-frontend-search-content-no-results").parse()});function a(){t.$spinner.hide(),clearTimeout(e)}this.$el.find(".overlay-content").append(s.$el),n.prototype.postRender.call(this),this.$el.find(".overlay-title").append(r.clearIcon.$el),this.$input=this.$el.find("input"),this.$clear=this.$el.find(".clear"),this.$searchContent=s.$el.hide(),this.$resultContainer=s.$el.find(".results-list-container"),this.$spinner=s.$el.find(".spinner-container"),this.on("search-start",function(r){e&&a(),e=setTimeout(function(){t.$spinner.show()},2e3-r.delay)}),this.on("search-results",a),""===t.$input.val()&&this.$clear.hide()},showKeyboard:function(){var e=this.$input.val().length;this.$input.trigger("focus"),this.$input[0].setSelectionRange&&this.$input[0].setSelectionRange(e,e)},show:function(){n.prototype.show.apply(this,arguments),this.showKeyboard(),this.emit("search-show")},performSearch:function(){var e=this,t=this.api,r=this.$input.val(),s=this.gateway.isCached(r)?0:300;r!==this.lastQuery&&(e._pendingQuery&&e._pendingQuery.abort(),clearTimeout(this.timer),r.length?this.timer=setTimeout(function(){var n;e.emit("search-start",{query:r,delay:s}),n=e.gateway.search(r),e._pendingQuery=n.then(function(r){r&&r.query===e.$input.val()&&(e.$el.toggleClass("no-results",0===r.results.length),e.$searchContent.show().find("p").hide().filter(r.results.length?".with-results":".without-results").show(),new u({api:t,funnel:"search",pages:r.results,el:e.$resultContainer}),e.$results=e.$resultContainer.find("li"),e.emit("search-results",{results:r.results}))}).promise({abort:function(){n.abort()}})},s):e.resetSearch(),this.lastQuery=r)},resetSearch:function(){this.$el.find(".overlay-content").children().hide()}}),e.exports=p},"./src/mobile.startup/search/SearchResultsView.js":function(e,t,r){function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function a(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e,t,r){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var s=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(s){var n=Object.getOwnPropertyDescriptor(s,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=r("./src/mobile.startup/View.js"),u=r("./src/mobile.startup/Icon.js"),p=r("./src/mobile.startup/Anchor.js"),h=r("./src/mobile.startup/icons.js"),m=mw.config.get("wgCirrusSearchFeedbackLink"),d=h.spinner().$el,f=r("./src/mobile.startup/util.js"),g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,i(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,c),function(e,t,r){t&&n(e.prototype,t),r&&n(e,r)}(t,[{key:"preRender",value:function(){m&&(this.options.feedback={prompt:mw.msg("mobile-frontend-search-feedback-prompt")})}},{key:"postRender",value:function(e){o(i(t.prototype),"postRender",this).call(this,e),this.$el.find(".search-content li").append(new u({tagName:"a",href:"#",name:"search-content",label:mw.msg("mobile-frontend-search-content")}).$el),this.$el.find(".spinner-container").append(d),m&&this.$el.find(".search-feedback").append(new p({label:mw.msg("mobile-frontend-search-feedback-link-text"),href:m}).$el)}},{key:"isTemplateMode",get:function(){return!0}},{key:"template",get:function(){return f.template('\n<div class="search-results-view">\n\t<div class="search-content overlay-header search-results-view">\n\t\t<ul>\n\t\t\t<li>{{! search content icon goes here }}</li>\n\t\t</ul>\n\t\t<div class="caption">\n\t\t\t<p class="with-results">{{searchContentLabel}}</p>\n\t\t\t<p class="without-results">{{noResultsMsg}}</p>\n\t\t\t<p class="without-results">{{{searchContentNoResultsMsg}}}</p>\n\t\t</div>\n\t</div>\n\t<div class="spinner-container position-fixed"></div>\n\t<div class="results">\n\t\t<div class="results-list-container"></div>\n\t\t{{#feedback}}\n\t\t\t<div class="search-feedback">\n\t\t\t\t{{prompt}}\n\t\t\t</div>\n\t\t{{/feedback}}\n\t</div>\n</div>')}}]),t}();e.exports=g},"./src/mobile.startup/search/schemaMobileWebSearch.js":function(e,t,r){var s=r("./src/mobile.startup/context.js");e.exports={subscribeMobileWebSearchSchema:function(){mw.loader.using(["ext.eventLogging"]).then(function(){var e=new(0,mw.eventLog.Schema)("MobileWebSearch",mw.config.get("wgMFSchemaSearchSampleRate",.001),{platform:"mobileweb",platformVersion:s.getMode()});mw.trackSubscribe("mf.schemaMobileWebSearch",function(t,r){e.log(r)})})}}},"./src/mobile.startup/talk/overlay.js":function(e,t,r){var s=r("./src/mobile.startup/moduleLoaderSingleton.js"),n=r("./src/mobile.startup/promisedView.js"),a=r("./src/mobile.startup/Anchor.js"),o=r("./src/mobile.startup/util.js"),i=r("./src/mobile.startup/headers.js").header,l=r("./src/mobile.startup/Overlay.js");e.exports=function(e,t){var r=mw.user;return l.make({headers:[i("<strong>"+mw.msg("mobile-frontend-talk-overlay-header")+"</strong>",r.isAnon()?[]:[new a({href:"#/talk/new",additionalClassNames:"continue",label:mw.msg("mobile-frontend-talk-add-overlay-submit")})])],footerAnchor:new a({progressive:!0,href:mw.util.getUrl(e),additionalClassNames:"footer-link talk-fullpage",label:mw.msg("mobile-frontend-talk-fullpage")}).options,className:"talk-overlay overlay"},n(o.Promise.all([t.getSections(e),mw.loader.using("mobile.talk.overlays")]).then(function(e){return s.require("mobile.talk.overlays/talkBoard")(e)})))}},"./src/mobile.startup/toc/TableOfContents.js":function(e,t,r){var s=r("./src/mobile.startup/View.js"),n=r("./src/mobile.startup/mfExtend.js"),a=r("./src/mobile.startup/util.js"),o=r("./src/mobile.startup/Icon.js");function i(e){s.call(this,a.extend({className:"toc-mobile",contentsMsg:mw.msg("toc")},e))}n(i,s,{templatePartials:{tocHeading:a.template('\n<li>\n\t<a href="#{{anchor}}">{{{line}}}</a>\n\t<ul>\n\t\t{{#subsections}}\n\t\t{{>tocHeading}}\n\t\t{{/subsections}}\n\t</ul>\n</li>\n\t\t')},template:a.template('\n<h2><span>{{contentsMsg}}</span></h2>\n<div>\n\t<ul>\n\t{{#sections}}\n\t{{>tocHeading}}\n\t{{/sections}}\n\t</ul>\n</div>\n<div style="clear:both;"></div>\n\t'),postRender:function(){new o({name:"toc",additionalClassNames:"toc-button"}).$el.prependTo(this.$el.find("h2"))}}),e.exports=i}},[["./src/mobile.startup/mobile.startup.js",0,1]]]);
//# sourceMappingURL=mobile.startup.js.map.json
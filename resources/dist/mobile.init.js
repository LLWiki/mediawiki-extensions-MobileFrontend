this.mfModules=this.mfModules||{},this.mfModules["mobile.init"]=(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/mobile.init/editor.js":function(e,t,i){var n=i("./src/mobile.startup/moduleLoaderSingleton.js"),o=i("./src/mobile.startup/util.js"),a=i("./src/mobile.init/editorLoadingOverlay.js"),r=i("./src/mobile.startup/OverlayManager.js"),s=$("#ca-edit, .mw-editsection a, .edit-link"),c=mw.user,l=i("./src/mobile.startup/CtaDrawer.js"),m=mw.config.get("wgPageContentModel"),d=mw.config.get("wgVisualEditorConfig"),g=mw.config.get("wgUserEditCount"),u=/^\/editor\/(\d+|T-\d+|all)$/;function w(e,t,i,l){var m,w,f,p=r.getSingleton(),v=0===e.id,h=!1;s.on("click",(function(e){!function(e,t,i){var n;n=1===s.length?"all":mw.util.getParamValue("section",e.href)||"all",mw.config.get("wgPageName")===mw.util.getParamValue("title",e.href)&&(i.navigate("#/editor/"+n),t.preventDefault())}(this,e,p.router)})),p.add(u,(function(r){var s,l,m,u,w=window.pageYOffset,b=$("#mw-content-text"),S={overlayManager:p,currentPageHTMLParser:i,fakeScroll:0,api:new mw.Api,licenseMsg:t.getLicenseMsg(),title:e.title,titleObj:e.titleObj,isAnon:c.isAnon(),isNewPage:v,editCount:g,oldId:mw.util.getParamValue("oldid"),contentLang:b.attr("lang"),contentDir:b.attr("dir"),sessionId:mw.config.get("wgWMESchemaEditAttemptStepSessionId")||mw.Uri().query.editingStatsId||c.generateRandomSessionId()},E=mw.util.getParamValue("redlink")?"new":"click";function y(e){h&&(S.sessionId=c.generateRandomSessionId()),mw.track("mf.schemaEditAttemptStep",{action:"init",type:"section",mechanism:E,editor_interface:e,editing_session_id:S.sessionId}),h=!0}function _(){var t=!!d,i=function(){var e,t,i=mw.user.options.get("mobile-editor")||mw.storage.get("preferredEditor");if(i)return i;switch(e=mw.config.get("wgMFDefaultEditor"),(t=mw.storage.getObject("MFDefaultEditorABToken"))&&t.expires<Date.now()&&(mw.storage.remove("MFDefaultEditorABToken"),t=null),e){case"source":return"SourceEditor";case"visual":return"VisualEditor";case"preference":return(mw.user.options.get("visualeditor-hidebetawelcome")||mw.user.options.get("visualeditor-hideusered"))&&"visualeditor"===mw.user.options.get("visualeditor-editor")?"VisualEditor":"SourceEditor"}return"SourceEditor"}(),n=d&&d.namespaces||[];return t&&e.isWikiText()&&-1!==n.indexOf(mw.config.get("wgNamespaceNumber"))&&"translation"!==mw.config.get("wgTranslatePageTranslation")&&("VisualEditor"===i||"VisualEditor"===f)&&"SourceEditor"!==f}function k(){return y("wikitext"),mw.hook("mobileFrontend.editorOpening").fire(),mw.loader.using("mobile.editor.overlay").then((function(){return new(n.require("mobile.editor.overlay/SourceEditorOverlay"))(S)}))}return"all"!==r&&(S.sectionId=e.isWikiText()?r:void 0),s=o.Deferred(),m=a((function(){var e,t,i,n,o;$(document.body).addClass("ve-loading"),e=$("#mw-mf-page-center"),t=$("#content"),"0"===r||"all"===r?i=$("#bodyContent"):(i=$('[data-section="'+r+'"]').closest("h1, h2, h3, h4, h5, h6")).length||(i=$("#bodyContent")),e.prop("scrollTop",w),n=i[0].getBoundingClientRect().top,n-=48,_()?(o=!0===d.enableVisualSectionEditing||"mobile"===d.enableVisualSectionEditing,("0"===r||"all"===r||o)&&(n-=16)):"0"!==r&&"all"!==r||(n-=16),t.css({transform:"translate( 0, "+-n+"px )","padding-bottom":"+="+n,"margin-bottom":"-="+n}),S.fakeScroll=n,setTimeout(s.resolve,500)}),(function(){l&&l.abort&&l.abort(),$("#content").css({transform:"","padding-bottom":"","margin-bottom":""}),$(document.body).removeClass("ve-loading")})),_()?(y("visualeditor"),mw.hook("mobileFrontend.editorOpening").fire(),S.mode="visual",S.dataPromise=mw.loader.using("ext.visualEditor.targetLoader").then((function(){return l=mw.libs.ve.targetLoader.requestPageData(S.mode,S.titleObj.getPrefixedDb(),{sessionStore:!0,section:void 0===S.sectionId?null:S.sectionId,oldId:S.oldId||void 0,targetName:"mobile"})})),u=mw.loader.using("ext.visualEditor.targetLoader").then((function(){return mw.libs.ve.targetLoader.addPlugin("mobile.editor.ve"),mw.libs.ve.targetLoader.loadModules(S.mode)})).then((function(){var e=n.require("mobile.editor.overlay/VisualEditorOverlay"),t=n.require("mobile.editor.overlay/SourceEditorOverlay");return S.SourceEditorOverlay=t,new e(S)}),(function(){return k()}))):u=k(),o.Promise.all([u,s]).then((function(e){e.getLoadingPromise().then((function(){var t=p.stack[0];t&&t.overlay===m&&p.replaceCurrent(e)}),(function(e,t){p.router.back(),e.show?(document.body.appendChild(e.$el[0]),e.show()):t?mw.notify(S.api.getErrorMessage(t)):mw.notify(mw.msg("mobile-frontend-editor-error-loading"))}))})),m})),$("#ca-edit a").prop("href",(function(e,t){try{var i=new mw.Uri(t);return i.query.section="0",i.toString()}catch(e){return t}})),l.getPath()||!mw.util.getParamValue("veaction")&&"edit"!==mw.config.get("wgAction")||("edit"===mw.util.getParamValue("veaction")?f="VisualEditor":"editsource"===mw.util.getParamValue("veaction")&&(f="SourceEditor"),w="#/editor/"+(mw.util.getParamValue("section")||("edit"===mw.config.get("wgAction")?"all":"0")),window.history&&history.pushState?(delete(m=mw.Uri()).query.action,delete m.query.veaction,delete m.query.section,history.replaceState(null,document.title,m.toString()+w)):l.navigate(w))}function f(e,t,i,n){var o,a;if(!(o=mw.config.get("wgMinervaReadOnly"))&&mw.config.get("wgIsProbablyEditable"))w(e,i,t,n);else if(function(e){e.$el.find(".mw-editsection").hide()}(t),a=mw.config.get("wgRestrictionEdit"),mw.user.isAnon()&&Array.isArray(a)&&!a.length)!function(e){var t;function i(){t||(t=new l({content:mw.msg("mobile-frontend-editor-disabled-anon"),signupQueryParams:{warning:"mobile-frontend-watchlist-signup-action"}}),document.body.appendChild(t.$el[0])),t.show()}s.on("click",(function(e){i(),e.preventDefault()})),e.route(u,(function(){i()})),e.checkRoute()}(n);else{var r=$("<a>").attr("href","/wiki/"+mw.config.get("wgPageName")+"?action=edit");p(o?mw.msg("apierror-readonly"):mw.message("mobile-frontend-editor-disabled",r).parseDom(),n)}}function p(e,t){s.on("click",(function(t){mw.notify(e),t.preventDefault()})),t.route(u,(function(){mw.notify(e)})),t.checkRoute()}e.exports=function(e,t,i){var n=0===e.id,o=mw.loader.require("mediawiki.router"),a=o.isSupported();"wikitext"===m&&(mw.util.getParamValue("undo")||a&&(e.inNamespace("file")&&n?p(mw.msg("mobile-frontend-editor-uploadenable"),o):f(e,t,i,o)))}},"./src/mobile.init/editorLoadingOverlay.js":function(e,t,i){var n=i("./src/mobile.init/fakeToolbar.js"),o=i("./src/mobile.startup/Overlay.js");e.exports=function(e,t){var i=n(),a=new o({className:"overlay overlay-loading",noHeader:!0,isBorderBox:!1,onBeforeExit:function(e){e(),t()}});return a.show=function(){o.prototype.show.call(this),e()},i.appendTo(a.$el.find(".overlay-content")),i.addClass("toolbar-hidden"),setTimeout((function(){i.addClass("toolbar-shown"),setTimeout((function(){i.addClass("toolbar-shown-done")}),250)})),a}},"./src/mobile.init/eventLogging/schemaEditAttemptStep.js":function(e,t,i){e.exports=function(){var e,t,n,o,a,r,s=!!mw.util.getParamValue("trackdebug"),c=i("./src/mobile.startup/util.js");mw.config.exists("wgWMESchemaEditAttemptStepSamplingRate")&&(e=mw.eventLog.Schema,t=mw.user,n=mw.config.get("wgWMESchemaEditAttemptStepSamplingRate"),o={firstChange:"first_change",saveIntent:"save_intent",saveAttempt:"save_attempt",saveSuccess:"save_success",saveFailure:"save_failure"},a={},r=new e("EditAttemptStep",n,{page_id:mw.config.get("wgArticleId"),revision_id:mw.config.get("wgRevisionId"),page_title:mw.config.get("wgPageName"),page_ns:mw.config.get("wgNamespaceNumber"),user_id:t.getId(),user_class:t.isAnon()?"IP":void 0,user_editcount:mw.config.get("wgUserEditCount",0),mw_version:mw.config.get("wgVersion"),platform:"phone",integration:"page",page_token:t.getPageviewToken(),session_token:t.sessionId(),version:1}),mw.trackSubscribe("mf.schemaEditAttemptStep",(function(e,t){var i=o[t.action]||t.action,l=mw.now(),m=0;if(mw.storage.get("preferredEditor")||(mw.config.get("wgMFSchemaEditAttemptStepAnonymousUserId")&&(t.anonymous_user_token=mw.config.get("wgMFSchemaEditAttemptStepAnonymousUserId")),mw.config.get("wgMFSchemaEditAttemptStepBucket")&&(t.bucket=mw.config.get("wgMFSchemaEditAttemptStepBucket"))),"init"!==t.action&&"abort"!==t.action&&"saveFailure"!==t.action||(t[i+"_type"]=t.type),"init"!==t.action&&"abort"!==t.action||(t[i+"_mechanism"]=t.mechanism),"init"!==t.action&&(m=Math.round(function(e,t,i){if(void 0!==t.timing)return t.timing;switch(e){case"ready":case"loaded":return i-a.init;case"firstChange":case"saveIntent":return i-a.ready;case"saveAttempt":return i-a.saveIntent;case"saveSuccess":case"saveFailure":return mw.log.warn("mf.schemaEditAttemptStep: Do not rely on default timing value for saveSuccess/saveFailure"),-1;case"abort":switch(t.abort_type){case"preinit":return i-a.init;case"nochange":case"switchwith":case"switchwithout":case"switchnochange":case"abandon":return i-a.ready;case"abandonMidsave":return i-a.saveAttempt}return mw.log.warn("mf.schemaEditAttemptStep: Unrecognized abort type",t.type),-1}return mw.log.warn("mf.schemaEditAttemptStep: Unrecognized action",e),-1}(t.action,t,l)),t[i+"_timing"]=m),"saveFailure"===t.action&&(t[i+"_message"]=t.message),delete t.type,delete t.mechanism,delete t.timing,delete t.message,t.is_oversample=!mw.eventLog.inSample(1/n),"abort"===t.action&&"switchnochange"!==t.abort_type?a={}:a[t.action]=l,"switchnochange"!==t.abort_type){if(a.abort){if("ready"===t.action)return;if("loaded"===t.action)return void delete a.abort}if(s)!function(){console.log.apply(console,arguments)}(e+"."+t.action,m+"ms",t,r.defaults);else{r.log(t,mw.config.get("wgWMESchemaEditAttemptStepOversample")||"all"===mw.config.get("wgMFSchemaEditAttemptStepOversample")||t.editor_interface===mw.config.get("wgMFSchemaEditAttemptStepOversample")?1:n);var d="eas.mf."+i,g=c.extend({integration:"page"},t);delete g.action,delete g.is_oversample,mw.eventLog.dispatch(d,g)}}})))}},"./src/mobile.init/eventLogging/schemaVisualEditorFeatureUse.js":function(e,t){e.exports=function(){var e,t,i,n,o=!!mw.util.getParamValue("trackdebug");mw.config.exists("wgWMESchemaEditAttemptStepSamplingRate")&&(e=mw.eventLog.Schema,t=mw.user,i=mw.config.get("wgWMESchemaEditAttemptStepSamplingRate"),n=new e("VisualEditorFeatureUse",i,{user_id:t.getId(),user_editcount:mw.config.get("wgUserEditCount",0),platform:"phone",integration:"page"}),mw.trackSubscribe("mf.schemaVisualEditorFeatureUse",(function(e,t){var a={feature:t.feature,action:t.action,editingSessionId:t.editing_session_id,editor_interface:t.editor_interface};if(o)!function(){console.log.apply(console,arguments)}(e,a,n.defaults);else{n.log(a,mw.config.get("wgWMESchemaEditAttemptStepOversample")||"visualeditor"===mw.config.get("wgMFSchemaEditAttemptStepOversample")||"all"===mw.config.get("wgMFSchemaEditAttemptStepOversample")?1:i);var r="vefu."+t.action,s={feature:t.feature,editing_session_id:t.editing_session_id,editor_interface:t.editor_interface,integration:"page"};mw.eventLog.dispatch(r,s)}})))}},"./src/mobile.init/lazyLoadedImages.js":function(e,t,i){var n=i("./src/mobile.startup/lazyImages/lazyImageLoader.js");function o(e){var t=n.queryPlaceholders(e[0]);if(window.addEventListener("beforeprint",(function(){n.loadImages(t)})),mw.config.get("wgMFLazyLoadImages"))if("IntersectionObserver"in window){var i=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.target;e.isIntersecting&&(n.loadImage(t),i.unobserve(t))}))}),{rootMargin:"0px 0px 50% 0px",threshold:0});t.forEach((function(e){i.observe(e)}))}else $(t).addClass("".concat(n.placeholderClass,"--tap")),document.addEventListener("click",(function(e){t.indexOf(e.target)>-1&&n.loadImage(e.target)}))}e.exports=function(){mw.hook("wikipage.content").add(o)}},"./src/mobile.init/mobile.init.js":function(e,t,i){var n,o=i("./src/constants.js"),a=o.USER_FONT_SIZE_REGULAR,r=o.USER_FONT_SIZES,s=mw.storage,c=i("./src/mobile.init/toggling.js"),l=i("./src/mobile.init/lazyLoadedImages.js"),m=mw.config.get("skin"),d=mw.config.get("wgMFIsPageContentModelEditable"),g=mw.config.get("wgMFEditorAvailableSkins"),u=i("./src/mobile.init/editor.js"),w=i("./src/mobile.startup/currentPage.js")(),f=i("./src/mobile.startup/currentPageHTMLParser.js")(),p=i("./src/mobile.startup/util.js").getWindow(),v=i("./src/mobile.startup/Skin.js"),h=i("./src/mobile.startup/eventBusSingleton.js"),b=i("./src/mobile.init/eventLogging/schemaEditAttemptStep.js"),S=i("./src/mobile.init/eventLogging/schemaVisualEditorFeatureUse.js");function E(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function y(){var e=s.get("userFontSize",a);r.forEach((function(t){var i="mf-font-size-".concat(t);t===e?document.documentElement.classList.add(i):document.documentElement.classList.remove(i)}))}n=v.getSingleton(),p.on("resize",E(mw.util.debounce((function(){h.emit("resize")}),100),mw.util.throttle((function(){h.emit("resize:throttled")}),200))).on("scroll",E(mw.util.debounce((function(){h.emit("scroll")}),100),mw.util.throttle((function(){h.emit("scroll:throttled")}),200))),window.addEventListener("pageshow",(function(){y()})),y(),window.console&&window.console.log&&window.console.log.apply&&mw.config.get("wgMFEnableJSConsoleRecruitment")&&console.log(mw.msg("mobile-frontend-console-recruit")),!w.inNamespace("special")&&d&&-1!==g.indexOf(m)&&null!==mw.config.get("wgMFMode")&&u(w,f,n),c(),l(),mw.loader.using("ext.eventLogging").then((function(){b(),S()}))},"./src/mobile.init/toggling.js":function(e,t,i){e.exports=function(){var e=i("./src/mobile.startup/currentPage.js")(),t=i("./src/mobile.startup/Toggler.js"),n=i("./src/mobile.startup/eventBusSingleton.js");e.inNamespace("special")||"view"!==mw.config.get("wgAction")||mw.hook("wikipage.content").add((function(i){var o=i.find(".mw-parser-output");0===o.length&&(o=i),function(e,i,o){var a=mw.config.get("wgMFMobileFormatterHeadings").map((function(e){return"> "+e})).join(",");e.find(a).addClass("section-heading").removeAttr("onclick"),void 0!==window.mfTempOpenSection&&delete window.mfTempOpenSection,new t({$container:e,prefix:i,page:o,eventBus:n})}(o,"content-",e)}))}}},[["./src/mobile.init/mobile.init.js",0,1]]]);
//# sourceMappingURL=mobile.init.js.map.json
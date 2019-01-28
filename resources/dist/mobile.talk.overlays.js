this.mfModules=this.mfModules||{},this.mfModules["mobile.talk.overlays"]=(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/mobile.talk.overlays/TalkBoard.js":function(e,t,o){var i=o("./src/mobile.startup/util.js"),a=o("./src/mobile.startup/mfExtend.js"),s=o("./src/mobile.startup/View.js"),n=o("./src/mobile.startup/PageGateway.js"),r=o("./src/mobile.startup/icons.js"),l=o("./src/mobile.startup/Page.js");function d(e){this.eventBus=e.eventBus,this.pageGateway=new n(e.api),s.call(this,i.extend(e,{className:"talk-board"}))}a(d,s,{isTemplateMode:!0,template:mw.template.get("mobile.talk.overlays","TalkBoard.hogan"),postRender:function(e){s.prototype.postRender.call(this,e),this.$el.append(r.spinner().$el),this.$spinner=this.$(".spinner"),this.$board=this.$(".board"),this.options.headings||this._loadContent(this.options),this.eventBus.on("talk-discussion-added",this._loadContent.bind(this))},showSpinner:function(){this.$board.hide(),this.$spinner.show()},hideSpinner:function(){this.$spinner.hide(),this.$board.show()},_loadContent:function(e){var t=this;e=e||this.options,this.showSpinner(),this.$(".topic-title-list").empty(),this.pageGateway.getPage(e.title).then(function(o){t._addContent(o,e)},function(o){"missingtitle"===o?t._addContent({title:e.title,sections:[]},e):t.options.onFail?t.options.onFail(e.title):window.location=mw.util.getUrl(e.title)})},_addContent:function(e,t){var o=new l(e),i=o.getSections();this.page=o,t.explanation=i.length>0?mw.msg("mobile-frontend-talk-explained"):mw.msg("mobile-frontend-talk-explained-empty"),t.headings=i,this.render(t),this.hideSpinner()}}),e.exports=d},"./src/mobile.talk.overlays/TalkSectionAddOverlay.js":function(e,t,o){var i=o("./src/mobile.startup/mfExtend.js"),a=o("./src/mobile.startup/Overlay.js"),s=o("./src/mobile.startup/PageGateway.js"),n=o("./src/mobile.startup/util.js"),r=o("./src/mobile.talk.overlays/autosign.js"),l=o("./src/mobile.startup/toast.js"),d=o("./src/mobile.startup/Icon.js");function m(e){this.editorApi=e.api,this.pageGateway=new s(e.api),a.call(this,n.extend(e,{className:"talk-overlay overlay"})),this.title=e.title,this.currentPageTitle=e.currentPageTitle,this.eventBus=e.eventBus,this._saveHit=!1}i(m,a,{defaults:n.extend({},a.prototype.defaults,{cancelMsg:mw.msg("mobile-frontend-editor-cancel"),topicTitlePlaceHolder:mw.msg("mobile-frontend-talk-add-overlay-subject-placeholder"),topicContentPlaceHolder:mw.msg("mobile-frontend-talk-add-overlay-content-placeholder"),editingMsg:mw.msg("mobile-frontend-talk-add-overlay-submit"),waitMsg:mw.msg("mobile-frontend-talk-topic-wait"),waitIcon:new d({name:"spinner",additionalClassNames:"savespinner loading"}).toHtmlString()}),template:mw.template.get("mobile.talk.overlays","SectionAddOverlay.hogan"),templatePartials:n.extend({},a.prototype.templatePartials,{contentHeader:mw.template.get("mobile.talk.overlays","SectionAddOverlay/contentHeader.hogan"),saveHeader:mw.template.get("mobile.editor.overlay","saveHeader.hogan")}),events:n.extend({},a.prototype.events,{"input .wikitext-editor, .summary":"onTextInput","change .wikitext-editor, .summary":"onTextInput","click .confirm-save":"onSaveClick"}),postRender:function(){a.prototype.postRender.call(this),this.showHidden(".initial-header"),this.$confirm=this.$("button.confirm-save"),this.$subject=this.$(".summary"),this.$ta=this.$(".wikitext-editor")},hide:function(){var e,t=mw.msg("mobile-frontend-editor-cancel-confirm");return e=!this.$subject.val()&&!this.$ta.val(),!!(this._saveHit||e||window.confirm(t))&&a.prototype.hide.apply(this,arguments)},onTextInput:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){e.$ta.val().trim()&&e.$subject.val().trim()?e.$confirm.prop("disabled",!1):e.$confirm.prop("disabled",!0)},250)},onSaveClick:function(){var e=this,t=e.title===e.currentPageTitle;this.showHidden(".saving-header"),this.save().then(function(o){"ok"===o&&(t?e.eventBus.emit("talk-added-wo-overlay"):(e.pageGateway.invalidatePage(e.title),l.show(mw.msg("mobile-frontend-talk-topic-feedback")),e.eventBus.emit("talk-discussion-added"),e.hide()))},function(t){var o=mw.msg("mobile-frontend-talk-topic-error");switch(e.$confirm.prop("disabled",!1),t.details){case"protectedpage":o=mw.msg("mobile-frontend-talk-topic-error-protected");break;case"noedit":case"blocked":o=mw.msg("mobile-frontend-talk-topic-error-permission");break;case"spamdetected":o=mw.msg("mobile-frontend-talk-topic-error-spam");break;case"badtoken":o=mw.msg("mobile-frontend-talk-topic-error-badtoken");break;default:o=mw.msg("mobile-frontend-talk-topic-error")}l.show(o,"error"),e.showHidden(".save-header, .save-panel")})},save:function(){var e=this.$subject.val(),t=n.Deferred(),o=this.$ta.val();return this.$ta.removeClass("error"),this.$subject.removeClass("error"),this._saveHit=!0,this.$(".content").empty().addClass("loading"),this.editorApi.postWithToken("csrf",{action:"edit",section:"new",sectiontitle:e,title:this.title,summary:mw.msg("newsectionsummary",e),text:r(o)}).then(function(){return"ok"},function(e){return t.reject({type:"error",details:e})})}}),e.exports=m},"./src/mobile.talk.overlays/TalkSectionOverlay.js":function(e,t,o){var i=mw.user,a=o("./src/mobile.startup/mfExtend.js"),s=o("./src/mobile.startup/PageGateway.js"),n=o("./src/mobile.startup/Overlay.js"),r=o("./src/mobile.startup/util.js"),l=o("./src/mobile.startup/toast.js"),d=o("./src/mobile.talk.overlays/autosign.js"),m=o("./src/mobile.startup/Page.js"),c=o("./src/mobile.startup/Button.js");function p(e){this.editorApi=e.api,this.pageGateway=new s(e.api),n.call(this,r.extend(e,{className:"talk-overlay overlay"}))}a(p,n,{templatePartials:r.extend({},n.prototype.templatePartials,{header:mw.template.get("mobile.talk.overlays","Section/header.hogan"),content:mw.template.get("mobile.talk.overlays","Section/content.hogan")}),defaults:r.extend({},n.prototype.defaults,{saveButton:new c({block:!0,additionalClassNames:"save-button",progressive:!0,label:mw.msg("mobile-frontend-editor-save")}).options,title:void 0,section:void 0,reply:mw.msg("mobile-frontend-talk-reply"),info:mw.msg("mobile-frontend-talk-reply-info")}),events:r.extend({},n.prototype.events,{"focus textarea":"onFocusTextarea","click .save-button":"onSaveClick"}),postRender:function(){n.prototype.postRender.apply(this),this.$saveButton=this.$(".save-button"),this.options.section?(this.hideSpinner(),this._enableComments()):this.renderFromApi(this.options)},_enableComments:function(){this.$commentBox=this.$(".comment"),i.isAnon()?this.$commentBox.remove():this.$textarea=this.$commentBox.find("textarea")},renderFromApi:function(e){var t=this;this.pageGateway.getPage(e.title).then(function(o){var i=new m(o);e.section=i.getSection(e.id),t.render(e),t.hideSpinner()})},onFocusTextarea:function(){this.$textarea.removeClass("error")},onSaveClick:function(){var e=this.$textarea.val(),t=this;function o(){t.$saveButton.prop("disabled",!1)}e?(this.showSpinner(),this.$saveButton.prop("disabled",!0),e="\n\n"+d(e),this.editorApi.postWithToken("csrf",{action:"edit",title:this.options.title,section:this.options.id,appendtext:e,redirect:!0}).then(function(){l.show(mw.msg("mobile-frontend-talk-reply-success")),t.pageGateway.invalidatePage(t.options.title),t.renderFromApi(t.options),o()},function(e,i){var a;a=i.error&&["readonly","blocked","autoblocked"].indexOf(i.error.code)>-1?i.error.info:mw.msg("mobile-frontend-editor-error"),t.hideSpinner(),l.show(a,"toast error"),o()})):this.$textarea.addClass("error")}}),e.exports=p},"./src/mobile.talk.overlays/autosign.js":function(e,t){e.exports=function(e){return/~{3,5}/.test(e)?e:e+" ~~~~"}},"./src/mobile.talk.overlays/mobile.talk.overlays.js":function(e,t,o){var i=o("./src/mobile.startup/moduleLoaderSingleton.js"),a=o("./src/mobile.talk.overlays/talkOverlay.js"),s=o("./src/mobile.talk.overlays/TalkSectionAddOverlay.js"),n=o("./src/mobile.talk.overlays/TalkSectionOverlay.js");i.define("mobile.talk.overlays/talkOverlay",a),i.deprecate("mobile.talk.overlays/TalkOverlay",a,"mobile.talk.overlays/talkOverlay"),i.define("mobile.talk.overlays/TalkSectionAddOverlay",s),i.define("mobile.talk.overlays/TalkSectionOverlay",n)},"./src/mobile.talk.overlays/talkOverlay.js":function(e,t,o){var i=mw.user,a=o("./src/mobile.talk.overlays/TalkBoard.js"),s=o("./src/mobile.startup/Anchor.js"),n=o("./src/mobile.startup/Overlay.js");e.exports=function(e){var t,o=new a(e);return(t=new n({heading:"<strong>"+mw.msg("mobile-frontend-talk-overlay-header")+"</strong>",headerButtonsListClassName:"header-action",headerButtons:[i.isAnon()?{}:{href:"#/talk/new",className:"add continue",msg:mw.msg("mobile-frontend-talk-add-overlay-submit")}],footerAnchor:new s({progressive:!0,href:mw.util.getUrl(e.title),additionalClassNames:"footer-link talk-fullpage",label:mw.msg("mobile-frontend-talk-fullpage")}).options,className:"talk-overlay overlay"})).$(".overlay-content").append(o.$el),t}}},[["./src/mobile.talk.overlays/mobile.talk.overlays.js",0,1]]]);
//# sourceMappingURL=mobile.talk.overlays.js.map.json
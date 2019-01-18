this.mfModules=this.mfModules||{},this.mfModules["mobile.special.uploads.scripts"]=(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/mobile.special.uploads.scripts/PhotoItem.js":function(t,e,i){var s=i("./src/mobile.startup/View.js");function n(){s.apply(this,arguments)}i("./src/mobile.startup/mfExtend.js")(n,s,{template:mw.template.get("mobile.special.uploads.scripts","PhotoItem.hogan"),tagName:"li"}),t.exports=n},"./src/mobile.special.uploads.scripts/PhotoList.js":function(t,e,i){var s=i("./src/mobile.startup/icons.js"),n=i("./src/mobile.special.uploads.scripts/PhotoListGateway.js"),o=i("./src/mobile.special.uploads.scripts/PhotoItem.js"),r=i("./src/mobile.startup/mfExtend.js"),a=i("./src/mobile.startup/ScrollEndEventEmitter.js"),l=i("./src/mobile.startup/View.js");function c(t){var e={url:t.url,api:t.api};t.username?e.username=t.username:t.category&&(e.category=t.category),this.gateway=new n(e),this.scrollEndEventEmitter=new a(t.eventBus,1e3),this.scrollEndEventEmitter.on(a.EVENT_SCROLL_END,this._loadPhotos.bind(this)),l.call(this,t)}r(c,l,{template:mw.template.get("mobile.special.uploads.scripts","PhotoList.hogan"),defaults:{spinner:s.spinner().toHtmlString()},preRender:function(){this.scrollEndEventEmitter.setElement(this.$el),this.scrollEndEventEmitter.disable()},postRender:function(){this.$end=this.$(".end"),this.$list=this.$("ul"),this._loadPhotos()},isEmpty:function(){return 0===this.$list.find("li").length},showEmptyMessage:function(){this.parseHTML('<p class="content empty">').text(mw.msg("mobile-frontend-donate-image-nouploads")).insertBefore(this.$list)},hideEmptyMessage:function(){this.$(".empty").hide()},showSpinner:function(){this.$end.show()},hideSpinner:function(){this.$end.hide()},updateEmptyUI:function(){this.isEmpty()?this.showEmptyMessage():this.hideEmptyMessage()},appendPhotos:function(t){var e=this;t.forEach(function(t){new o(t).appendTo(e.$list)})},enableScroll:function(){!1===this.scrollEndEventEmitter.enabled&&this.scrollEndEventEmitter.enable()},_loadPhotos:function(){var t=this;t.showSpinner(),this.gateway.getPhotos().then(function(e){var i=e.photos||[],s=e.canContinue;t.appendPhotos(i),t.updateEmptyUI(),s&&t.enableScroll(),t.hideSpinner()}).catch(function(){t.updateEmptyUI(),t.hideSpinner(),t.enableScroll()})}}),t.exports=c},"./src/mobile.special.uploads.scripts/PhotoListGateway.js":function(t,e,i){var s=i("./src/mobile.startup/util.js");function n(t){this.api=t.api,this.url=t.url,this.username=t.username,this.category=t.category,this.limit=10,this.continueParams={continue:""},this.canContinue=!0}function o(t){return(t=t.replace(/\.[^. ]+$/,"")).replace(/^[^:]*:/,"").replace(/ \d{4}-\d{1,2}-\d{1,2} \d{1,2}-\d{1,2}$/,"")}n.prototype={getWidth:function(){return mw.config.get("wgMFThumbnailSizes").small},_getImageDataFromPage:function(t){var e=t.imageinfo[0];return{url:e.thumburl,title:t.title,timestamp:e.timestamp,description:o(t.title),descriptionUrl:e.descriptionurl}},getQuery:function(){var t=s.extend({action:"query",prop:"imageinfo",iiprop:"url|timestamp",iiurlwidth:this.getWidth()},this.continueParams);return this.username?s.extend(t,{generator:"allimages",gaiuser:this.username,gaisort:"timestamp",gaidir:"descending",gailimit:this.limit}):this.category&&s.extend(t,{generator:"categorymembers",gcmtitle:"Category:"+this.category,gcmtype:"file",gcmdir:"descending",gcmlimit:this.limit}),this.url&&(t.origin="*"),t},getPhotos:function(){var t=this;return this.api.ajax(this.getQuery(),{url:this.url}).then(function(e){var i=[];return e.query&&e.query.pages&&(i=Object.keys(e.query.pages).map(function(i){return t._getImageDataFromPage(e.query.pages[i])}).sort(function(t,e){return t.timestamp<e.timestamp?1:-1})),void 0!==e.continue?t.continueParams=e.continue:t.canContinue=!1,{canContinue:t.canContinue,photos:i}})}},n.test={getDescription:o},t.exports=n},"./src/mobile.special.uploads.scripts/mobile.special.uploads.scripts.js":function(t,e,i){var s=mw.user,n=i("./src/mobile.special.uploads.scripts/PhotoList.js"),o=i("./src/mobile.startup/eventBusSingleton.js"),r=mw.config.get("wgPageName").split("/"),a=s.getName(),l=mw.config.get("wgMFPhotoUploadEndpoint")||void 0,c=r[1]?r[1]:a;c&&$(function(){!function(t){0===$(".errorbox").length&&new n({url:l,api:t,username:c,eventBus:o}).appendTo("#mw-content-text .content")}(new mw.Api)})}},[["./src/mobile.special.uploads.scripts/mobile.special.uploads.scripts.js",0,1]]]);
//# sourceMappingURL=mobile.special.uploads.scripts.js.map.json
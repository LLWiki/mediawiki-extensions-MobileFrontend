this.mfModules=this.mfModules||{},this.mfModules["mobile.languages.structured"]=(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/mobile.languages.structured/LanguageSearcher.js":function(e,a,s){var t=s("./src/mobile.startup/View.js"),n=s("./src/mobile.startup/util.js"),r=s("./src/mobile.languages.structured/util.js");function u(e){var a=r.getStructuredLanguages(e.languages,e.variants,r.getFrequentlyUsedLanguages(),e.deviceLanguage);t.call(this,n.extend({className:"language-searcher",events:{"click a":"onLinkClick","input .search":"onSearchInput"},inputPlaceholder:mw.msg("mobile-frontend-languages-structured-overlay-search-input-placeholder"),allLanguagesHeader:mw.msg("mobile-frontend-languages-structured-overlay-all-languages-header").toLocaleUpperCase(),suggestedLanguagesHeader:mw.msg("mobile-frontend-languages-structured-overlay-suggested-languages-header").toLocaleUpperCase(),allLanguages:a.all,allLanguagesCount:a.all.length,suggestedLanguages:a.suggested,suggestedLanguagesCount:a.suggested.length},e))}s("./src/mobile.startup/mfExtend.js")(u,t,{template:mw.template.get("mobile.languages.structured","LanguageSearcher.hogan"),postRender:function(){this.$siteLinksList=this.$el.find(".site-link-list"),this.$languageItems=this.$siteLinksList.find("a"),this.$subheaders=this.$el.find("h3")},onLinkClick:function(e){var a=this.$el.find(e.currentTarget).attr("lang"),s=this,t=this.$languageItems.filter(":visible");r.saveLanguageUsageCount(a,r.getFrequentlyUsedLanguages()),t.each(function(e,t){if(s.$el.find(t).hasClass(a))return!1})},onSearchInput:function(e){this.filterLanguages(this.$el.find(e.target).val().toLowerCase())},filterLanguages:function(e){var a=[];e?(this.options.languages.forEach(function(s){var t=s.langname;(s.autonym.toLowerCase().indexOf(e)>-1||t&&t.toLowerCase().indexOf(e)>-1||s.lang.toLowerCase().indexOf(e)>-1)&&a.push(s.lang)}),this.options.variants&&this.options.variants.forEach(function(s){(s.autonym.toLowerCase().indexOf(e)>-1||s.lang.toLowerCase().indexOf(e)>-1)&&a.push(s.lang)}),this.$languageItems.addClass("hidden"),a.length&&this.$siteLinksList.find("."+a.join(",.")).removeClass("hidden"),this.$siteLinksList.addClass("filtered"),this.$subheaders.addClass("hidden")):(this.$languageItems.removeClass("hidden"),this.$siteLinksList.removeClass("filtered"),this.$subheaders.removeClass("hidden"))}}),e.exports=u},"./src/mobile.languages.structured/mobile.languages.structured.js":function(e,a,s){var t=s("./src/mobile.startup/moduleLoaderSingleton.js"),n=s("./src/mobile.startup/PageGateway.js"),r=s("./src/mobile.languages.structured/LanguageSearcher.js"),u=s("./src/mobile.startup/languageOverlay/languageOverlay.js");t.define("mobile.languages.structured/LanguageSearcher",r),t.deprecate("mobile.languages.structured/LanguageOverlay",function(){return u(new n(new mw.Api))},"mobile.startup")},"./src/mobile.languages.structured/rtlLanguages.js":function(e,a){e.exports=["aeb","aeb-arab","ar","arc","arq","arz","azb","bcc","bgn","bqi","ckb","dv","fa","glk","he","khw","kk-arab","kk-cn","ks","ks-arab","ku-arab","lki","lrc","luz","mzn","pnb","ps","sd","sdh","skr","skr-arab","ug","ug-arab","ur","yi"]},"./src/mobile.languages.structured/util.js":function(e,a,s){var t=mw.log,n=s("./src/mobile.startup/util.js"),r=s("./src/mobile.languages.structured/rtlLanguages.js");e.exports={getDir:function(e){var a=r.indexOf(e.lang)>-1?"rtl":"ltr";return n.extend({},e,{dir:a})},getStructuredLanguages:function(e,a,s,n){var r=Object.prototype.hasOwnProperty,u=0,g=0,i=0,l=[],o=[],c=this;function d(e){return e.dir?e:(i++,c.getDir(e))}return(n=function(e,a){var s,t,n=Object.prototype.hasOwnProperty,r={};if(a)return-1!==(t=a.indexOf("-"))&&(s=a.slice(0,t)),e.forEach(function(e){e.lang!==s&&e.lang!==a||(r[e.lang]=!0)}),n.call(r,a)?a:n.call(r,s)?s:void 0}(e,n))&&(Object.keys(s).forEach(function(e){var a=s[e];u=u<a?a:u,g=g>a?a:g}),s[n]=u+1),e.map(d).forEach(function(e){r.call(s,e.lang)?(e.frequency=s[e.lang],l.push(e)):o.push(e)}),a&&a.map(d).forEach(function(e){r.call(s,e.lang)?e.frequency=s[e.lang]:e.frequency=g-1,l.push(e)}),l=l.sort(function(e,a){return a.frequency-e.frequency}),o=o.sort(function(e,a){return e.autonym.toLocaleLowerCase()<a.autonym.toLocaleLowerCase()?-1:1}),t.warn(0===i?"Direction is provided. Please remove handling in getStructuredLanguages":"`dir` attribute was missing from languages. Is T74153 resolved?"),{suggested:l,all:o}},getFrequentlyUsedLanguages:function(){var e=mw.storage.get("langMap");return e?JSON.parse(e):{}},saveFrequentlyUsedLanguages:function(e){mw.storage.set("langMap",JSON.stringify(e))},saveLanguageUsageCount:function(e,a){var s=a[e]||0;s+=1,a[e]=s>100?100:s,this.saveFrequentlyUsedLanguages(a)}}}},[["./src/mobile.languages.structured/mobile.languages.structured.js",0,1]]]);
//# sourceMappingURL=mobile.languages.structured.js.map.json
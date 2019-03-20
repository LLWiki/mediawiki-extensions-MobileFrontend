this.mfModules=this.mfModules||{},this.mfModules["mobile.notifications.overlay"]=(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/mobile.notifications.overlay/NotificationsFilterOverlay.js":function(e,i,o){var t,n=o("./src/mobile.startup/Overlay.js"),a=o("./src/mobile.startup/util.js");o("./src/mobile.startup/mfExtend.js")(t=function(e){var i=this;n.call(this,a.extend({className:"overlay notifications-filter-overlay notifications-overlay navigation-drawer"},e)),this.on("hide",function(){e.mainMenu.closeNavigationDrawers()}),e.$crossWikiUnreadFilter.on("click",function(){i.hide()}),e.$notifReadState.find(".oo-ui-buttonElement").on("click",function(){i.hide()}),this.$el.find(".overlay-content").append(this.parseHTML("<div>").addClass("notifications-filter-overlay-read-state").append(e.$notifReadState),e.$crossWikiUnreadFilter)},n,{defaults:a.extend({},n.prototype.defaults,{heading:mw.msg("mobile-frontend-notifications-filter-title")}),preRender:function(){this.options.heading="<strong>"+mw.message("mobile-frontend-notifications-filter-title").escaped()+"</strong>"}}),e.exports=t},"./src/mobile.notifications.overlay/NotificationsOverlay.js":function(e,i,o){var t,n=o("./src/mobile.startup/Overlay.js"),a=o("./src/mobile.startup/util.js"),r=o("./src/mobile.startup/View.js"),s=o("./src/mobile.startup/promisedView.js"),l=o("./src/mobile.startup/mfExtend.js"),c=o("./src/mobile.startup/Anchor.js");l(t=function(e){var i,o,t,l,d=this,m=new OO.ui.ButtonWidget({icon:"checkAll",title:mw.msg("echo-mark-all-as-read")}),f=a.parseHTML("<div>").addClass("notifications-overlay-overlay position-fixed"),h=a.extend({},{heading:"<strong>"+mw.message("notifications").escaped()+"</strong>",footerAnchor:new c({href:mw.util.getUrl("Special:Notifications"),progressive:!0,additionalClassNames:"footer-link notifications-archive-link",label:mw.msg("echo-overlay-link")}).options,headerActions:[r.make({class:"notifications-overlay-header-markAllRead"},[m.$element])],isBorderBox:!1,className:"overlay notifications-overlay navigation-drawer"},e),u=mw.config.get("wgEchoMaxNotificationCount"),p=new mw.echo.api.EchoApi;n.call(this,h),this.badge=h.badge,h.error?h.onError():(mw.echo.config.maxPrioritizedActions=1,o=new mw.echo.dm.UnreadNotificationCounter(p,"all",u),i=new mw.echo.dm.ModelManager(o,{type:["message","alert"]}),this.controller=new mw.echo.Controller(p,i,{type:["message","alert"]}),t=new mw.echo.ui.NotificationsWrapper(this.controller,i,{$overlay:f}),this.markAllReadButton=m,m.toggle(!1),l=new mw.echo.ui.ConfirmationPopupWidget,f.append(l.$element),this.confirmationWidget=l,o.connect(this,{countChange:"onUnreadCountChange"}),this.markAllReadButton.connect(this,{click:"onMarkAllReadButtonClick"}),this.$el.find(".overlay-content").append(s(t.populate().then(function(){return d.controller.updateSeenTime(),d.badge.markAsSeen(),d.checkShowMarkAllRead(),i.connect(d,{update:"checkShowMarkAllRead"}),r.make({},[t.$element,f])})).$el))},n,{checkShowMarkAllRead:function(){this.markAllReadButton.toggle(this.controller.manager.hasLocalUnread())},onMarkAllReadButtonClick:function(){var e=this,i=this.controller.manager.getLocalUnread().length;this.controller.markLocalNotificationsRead().then(function(){e.confirmationWidget.setLabel(mw.msg("echo-mark-all-as-read-confirmation",i)),e.confirmationWidget.showAnimated()})},onUnreadCountChange:function(e){this.badge.setCount(this.controller.manager.getUnreadCounter().getCappedNotificationCount(e)),this.checkShowMarkAllRead()}}),e.exports=t},"./src/mobile.notifications.overlay/mobile.notifications.overlay.js":function(e,i,o){var t=o("./src/mobile.startup/moduleLoaderSingleton.js"),n=o("./src/mobile.notifications.overlay/NotificationsOverlay.js"),a=o("./src/mobile.notifications.overlay/NotificationsFilterOverlay.js");t.define("mobile.notifications.overlay/NotificationsFilterOverlay",a),t.define("mobile.notifications.overlay/NotificationsOverlay",n)}},[["./src/mobile.notifications.overlay/mobile.notifications.overlay.js",0,1]]]);
//# sourceMappingURL=mobile.notifications.overlay.js.map.json
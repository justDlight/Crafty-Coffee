!function(){var t={229:function(){},730:function(t,e,r){var n=r(229);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,r(840).Z)("e09d0bc8",n,!0,{})},840:function(t,e,r){"use strict";function n(t,e){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],s=i[0],a={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}r.d(e,{Z:function(){return g}});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,d=0,l=!1,c=function(){},f=null,u="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(t,e,r,o){l=r,f=o||{};var s=n(t,e);return p(s),function(e){for(var r=[],o=0;o<s.length;o++){var a=s[o];(d=i[a.id]).refs--,r.push(d)}for(e?p(s=n(t,e)):s=[],o=0;o<r.length;o++){var d;if(0===(d=r[o]).refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete i[d.id]}}}}function p(t){for(var e=0;e<t.length;e++){var r=t[e],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(b(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(b(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:s}}}}function m(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function b(t){var e,r,n=document.querySelector("style["+u+'~="'+t.id+'"]');if(n){if(l)return c;n.parentNode.removeChild(n)}if(h){var o=d++;n=a||(a=m()),e=y.bind(null,n,o,!1),r=y.bind(null,n,o,!0)}else n=m(),e=A.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}var v,C=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function y(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=C(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function A(t,e){var r=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),f.ssrId&&t.setAttribute(u,e.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t;function e(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}r(730),window.livePreviewHideFullscreen=!1,t=jQuery,Craft.RedactorInput=Garnish.Base.extend({id:null,linkOptions:null,volumes:null,elementSiteId:null,allSites:{},redactorConfig:null,showAllUploaders:!1,$textarea:null,redactor:null,linkOptionModals:null,enforceButtonOrder:null,init:function(r){if(this.id=r.id,this.linkOptions=r.linkOptions,this.volumes=r.volumes,this.transforms=r.transforms,this.elementSiteId=r.elementSiteId,this.allSites=r.allSites,this.redactorConfig=r.redactorConfig,this.showAllUploaders=r.showAllUploaders,this.defaultTransform=r.defaultTransform,this.linkOptionModals=[],this.redactorConfig.enforceButtonOrder&&(this.enforceButtonOrder=this.redactorConfig.enforceButtonOrder,delete this.redactorConfig.enforceButtonOrder),this.redactorConfig.lang||(this.redactorConfig.lang=r.redactorLang),this.redactorConfig.direction||(this.redactorConfig.direction=r.direction||Craft.orientation),this.redactorConfig.imageUpload=!1,this.redactorConfig.fileUpload=!1,i(this.redactorConfig.plugins)!==i([])&&(this.redactorConfig.plugins=[]),this.redactorConfig.plugins.push("craftAssetImages"),this.redactorConfig.plugins.push("craftAssetFiles"),this.redactorConfig.plugins.push("craftElementLinks"),this.redactorConfig.plugins.push("craftAssetImageEditor"),this.redactorConfig.buttons){-1!==(a=t.inArray("formatting",this.redactorConfig.buttons))&&this.redactorConfig.buttons.splice(a,1,"format");for(var n,o=["unorderedlist","orderedlist","undent","indent"],s=0;s<o.length;s++)-1!==(a=t.inArray(o[s],this.redactorConfig.buttons))&&(this.redactorConfig.buttons.splice(a,1),(void 0===n||a<n)&&(n=a));void 0!==n&&this.redactorConfig.buttons.splice(n,0,"lists")}else this.redactorConfig.buttons=["html","format","bold","italic","deleted","lists","image","file","link"];var a;if(this.redactorConfig.buttonsAddFirst&&(this.redactorConfig.buttons=this.redactorConfig.buttonsAddFirst.buttons.concat(this.redactorConfig.buttons)),this.redactorConfig.buttonsAdd&&(this.redactorConfig.buttons=this.redactorConfig.buttons.concat(this.redactorConfig.buttonsAdd.buttons)),this.redactorConfig.buttonsAddBefore)for(s=0;s<this.redactorConfig.buttons.length;s++)if(this.redactorConfig.buttons[s]==this.redactorConfig.buttonsAddBefore.before){var d;(d=this.redactorConfig.buttons).splice.apply(d,[s,0].concat(e(this.redactorConfig.buttonsAddBefore.buttons)));break}if(this.redactorConfig.buttonsAddAfter)for(s=0;s<this.redactorConfig.buttons.length;s++)if(this.redactorConfig.buttons[s]==this.redactorConfig.buttonsAddAfter.after){var l;(l=this.redactorConfig.buttons).splice.apply(l,[s+1,0].concat(e(this.redactorConfig.buttonsAddAfter.buttons)));break}delete this.redactorConfig.buttonsAddFirst,delete this.redactorConfig.buttonsAddBefore,delete this.redactorConfig.buttonsAddAfter,delete this.redactorConfig.buttonsAdd,this.redactorConfig.callbacks={started:Craft.RedactorInput.handleRedactorInit,focus:this.onEditorFocus.bind(this),blur:this.onEditorBlur.bind(this),contextbar:this.showContextBar.bind(this)},0===this.redactorConfig.buttons.length&&delete this.redactorConfig.buttons,this.initRedactor(),void 0!==Craft.Slideout&&(Garnish.on(Craft.Slideout,"open",(function(){return t("body").addClass("redactor-element-editor-open")})),Garnish.on(Craft.Slideout,"close",(function(){return t("body").removeClass("redactor-element-editor-open")})))},initRedactor:function(){var e="#"+this.id;if(this.$textarea=t(e),void 0===this.redactorConfig.toolbarFixed||this.redactorConfig.toolbarFixed){var r=this.$textarea.closest("#content");r.length&&(this.redactorConfig.toolbarFixedTarget=r)}Craft.RedactorInput.currentInstance=this,this.$textarea.redactor(this.redactorConfig),this.redactor=$R(e),void 0===this.redactorConfig.buttons&&(this.redactorConfig.buttons=[]);var o=this.redactor.toolbar.getButtonsKeys();if(-1!==this.redactorConfig.buttons.indexOf("image")&&(-1!==o.indexOf("image")?this.redactor.plugin.craftAssetImages.overrideButton("image"):this.redactor.plugin.craftAssetImages.addButton("image",this.redactorConfig.buttons.indexOf("image")),this.redactor.plugin.craftAssetImages.setTransforms(this.transforms),this.redactor.plugin.craftAssetImages.setDefaultTransform(this.defaultTransform),this.redactor.plugin.craftAssetImages.setVolumes(this.volumes),this.redactor.plugin.craftAssetImages.setElementSiteId(this.elementSiteId),this.redactor.plugin.craftAssetImages.allowAllUploaders=this.showAllUploaders),-1!==this.redactorConfig.buttons.indexOf("file")&&(-1!==o.indexOf("file")?this.redactor.plugin.craftAssetFiles.overrideButton("file"):this.redactor.plugin.craftAssetFiles.addButton("file",this.redactorConfig.buttons.indexOf("file")),this.redactor.plugin.craftAssetFiles.setVolumes(this.volumes),this.redactor.plugin.craftAssetFiles.setElementSiteId(this.elementSiteId)),-1!==o.indexOf("link")&&(this.redactor.plugin.craftElementLinks.setElementSiteId(this.elementSiteId),this.redactor.plugin.craftElementLinks.setAllSites(this.allSites),this.linkOptions.length&&this.redactor.plugin.craftElementLinks.setLinkOptions(this.linkOptions)),-1!==this.redactorConfig.plugins.indexOf("fullscreen")&&void 0!==Craft.livePreview&&!1===window.livePreviewHideFullscreen&&(window.livePreviewHideFullscreen=!0,Craft.livePreview.on("beforeEnter",(function(e){t("a.re-button.re-fullscreen").addClass("hidden")})),Craft.livePreview.on("beforeExit",(function(e){t("a.re-button.re-fullscreen").removeClass("hidden")}))),this.trigger("afterInitializeRedactor",{inputField:this}),this.enforceButtonOrder){var i=this.enforceButtonOrder,s=t(this.redactor.toolbar.getElement().nodes);if(i.length>0){var a,d=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=n(t))){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){d=!0,s=t},f:function(){try{a||null==r.return||r.return()}finally{if(d)throw s}}}}(i.reverse());try{for(d.s();!(a=d.n()).done;){var l=a.value,c=s.find("[data-re-name=".concat(l,"]"));c.length>0&&s.prepend(c)}}catch(t){d.e(t)}finally{d.f()}}}delete Craft.RedactorInput.currentInstance},onInitRedactor:function(t){this.redactor=t,this.redactor.container.getElement().addClass("focusable-input"),this.leaveFullscreenOnSaveShortcut(),this.redactor.opts.toolbarFixed&&!Craft.RedactorInput.scrollPageOnReady&&(Garnish.$doc.ready((function(){Garnish.$doc.trigger("scroll")})),Craft.RedactorInput.scrollPageOnReady=!0)},onEditorFocus:function(){this.redactor.container.getElement().trigger("focus")},onEditorBlur:function(){this.redactor.container.getElement().trigger("blur")},leaveFullscreenOnSaveShortcut:function(){void 0!==this.redactor.plugin.fullscreen&&"function"==typeof this.redactor.plugin.fullscreen.close&&Craft.cp.on("beforeSaveShortcut",t.proxy((function(){this.redactor.plugin.fullscreen.isOpen&&this.redactor.plugin.fullscreen.close()}),this))},replaceRedactorButton:function(t,e){var r=this.redactor.toolbar.getButton(t);if(r){var n=r.$icon.get(0),o=t+"_placeholder",i=this.redactor.toolbar.addButtonAfter(t,o,{title:e});r.remove();var s=this.redactor.toolbar.addButtonAfter(o,t,{title:e});return i.remove(),s.setIcon(n),s}},showContextBar:function(e,r){var n=this;if(this.justResized)this.justResized=!1;else{var o=this.redactor.selection.getCurrent(),i=this.redactor.inspector.parse(o),s=function(t,e){var r=e.$contextbar.parent(),n=t.clientY+e.$contextbar.height()-10-r.offset().top+(e.livePreview?r.scrollTop():e.$win.scrollTop()),o={left:t.clientX-e.$contextbar.width()/2-r.offset().left+"px",top:n+"px"};e.$contextbar.css(o)};if(!i.isFigcaption()&&i.isComponentType("image")){var a=i.getComponent(),d=t(a).find("img");if(1===d.length){var l=l=d.attr("src").match(/#asset:(\d+)/i);if(l){var c=l[1];Craft.sendActionRequest("POST","redactor",{data:{assetId:c}}).then((function(t){var o={"image-editor":{title:n.redactor.lang.get("image-editor"),api:"plugin.craftAssetImageEditor.open",args:c},edit:{title:n.redactor.lang.get("edit"),api:"module.image.open"},remove:{title:n.redactor.lang.get("delete"),api:"module.image.remove",args:a}};r.set(e,a,o)})).finally((function(){s(e,r)}))}}}s(e,r)}}},{handleRedactorInit:function(){Craft.RedactorInput.currentInstance.onInitRedactor(this)}})}()}();
//# sourceMappingURL=RedactorInput.js.map
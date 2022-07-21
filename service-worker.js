/*! For license information please see service-worker.js.LICENSE.txt */
!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="./",r(r.s=2)}([function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(j){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=L(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=f;var h={};function p(){}function d(){}function y(){}var v={};s(v,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(_([])));m&&m!==e&&r.call(m,a)&&(v=m);var w=y.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,u,c){var s=l(t[i],t,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(h).then((function(t){f.value=t,u(f)}),(function(t){return o("throw",t,u,c)}))}c(s.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=y,s(w,"constructor",y),s(y,"constructor",d),d.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,c,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}r.d(e,"a",(function(){return o}))},function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,"a",(function(){return o}))},function(t,e,r){"use strict";r.r(e),function(t){var e=r(0),n=r(1),o="undefined"===typeof t||!1;o?(importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"),workbox.setConfig({debug:!0})):(importScripts("/workbox/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"/workbox/"})),self.addEventListener("message",(function(t){t.data&&"SKIP_WAITING"===t.data.type&&self.skipWaiting()})),workbox.core.clientsClaim(),o||(workbox.precaching.precacheAndRoute([{'revision':'2e0f6de3dcf2e7860e3c24eac1aec174','url':'./index.html'},{'revision':null,'url':'./static/css/main.12dcf667.chunk.css'},{'revision':null,'url':'./static/js/0.a054f600.chunk.js'},{'revision':null,'url':'./static/js/55.be7fec11.chunk.js'},{'revision':null,'url':'./static/js/56.70a386ad.chunk.js'},{'revision':null,'url':'./static/js/57.48f631e6.chunk.js'},{'revision':null,'url':'./static/js/58.37ffe20f.chunk.js'},{'revision':null,'url':'./static/js/59.e215a262.chunk.js'},{'revision':null,'url':'./static/js/60.a55b7d5f.chunk.js'},{'revision':null,'url':'./static/js/61.1ed21e9e.chunk.js'},{'revision':null,'url':'./static/js/62.fa7c9445.chunk.js'},{'revision':null,'url':'./static/js/63.09968288.chunk.js'},{'revision':null,'url':'./static/js/64.2ab9e6c5.chunk.js'},{'revision':null,'url':'./static/js/65.0cc1393b.chunk.js'},{'revision':null,'url':'./static/js/66.09295079.chunk.js'},{'revision':null,'url':'./static/js/bug-issue-template.d743b7b8.chunk.js'},{'revision':null,'url':'./static/js/firebase.bee72053.chunk.js'},{'revision':null,'url':'./static/js/locales/ar-SA-json.6ff5f94b.chunk.js'},{'revision':null,'url':'./static/js/locales/bg-BG-json.23b2df63.chunk.js'},{'revision':null,'url':'./static/js/locales/bn-BD-json.55a1b47f.chunk.js'},{'revision':null,'url':'./static/js/locales/ca-ES-json.0fff3c53.chunk.js'},{'revision':null,'url':'./static/js/locales/cs-CZ-json.95ed204b.chunk.js'},{'revision':null,'url':'./static/js/locales/da-DK-json.5ec0e322.chunk.js'},{'revision':null,'url':'./static/js/locales/de-DE-json.08a10a3f.chunk.js'},{'revision':null,'url':'./static/js/locales/el-GR-json.00cb4705.chunk.js'},{'revision':null,'url':'./static/js/locales/es-ES-json.42d6d71d.chunk.js'},{'revision':null,'url':'./static/js/locales/eu-ES-json.205e9b78.chunk.js'},{'revision':null,'url':'./static/js/locales/fa-IR-json.84635f37.chunk.js'},{'revision':null,'url':'./static/js/locales/fi-FI-json.1399ebe0.chunk.js'},{'revision':null,'url':'./static/js/locales/fr-FR-json.debc3ac2.chunk.js'},{'revision':null,'url':'./static/js/locales/gl-ES-json.eab7e150.chunk.js'},{'revision':null,'url':'./static/js/locales/he-IL-json.353e5766.chunk.js'},{'revision':null,'url':'./static/js/locales/hi-IN-json.24e2fbf6.chunk.js'},{'revision':null,'url':'./static/js/locales/hu-HU-json.9b44f10c.chunk.js'},{'revision':null,'url':'./static/js/locales/id-ID-json.e79bb3f6.chunk.js'},{'revision':null,'url':'./static/js/locales/it-IT-json.c78536ad.chunk.js'},{'revision':null,'url':'./static/js/locales/ja-JP-json.3928721d.chunk.js'},{'revision':null,'url':'./static/js/locales/kab-KAB-json.0dc322cf.chunk.js'},{'revision':null,'url':'./static/js/locales/kk-KZ-json.8dec7b9c.chunk.js'},{'revision':null,'url':'./static/js/locales/ko-KR-json.8697a616.chunk.js'},{'revision':null,'url':'./static/js/locales/lt-LT-json.68cdc2c1.chunk.js'},{'revision':null,'url':'./static/js/locales/lv-LV-json.224f463d.chunk.js'},{'revision':null,'url':'./static/js/locales/mr-IN-json.537507cd.chunk.js'},{'revision':null,'url':'./static/js/locales/my-MM-json.dec4439d.chunk.js'},{'revision':null,'url':'./static/js/locales/nb-NO-json.3ecfb635.chunk.js'},{'revision':null,'url':'./static/js/locales/nl-NL-json.3d8b7c64.chunk.js'},{'revision':null,'url':'./static/js/locales/nn-NO-json.85284c84.chunk.js'},{'revision':null,'url':'./static/js/locales/oc-FR-json.99579666.chunk.js'},{'revision':null,'url':'./static/js/locales/pa-IN-json.51c82a9c.chunk.js'},{'revision':null,'url':'./static/js/locales/pl-PL-json.8e898e2d.chunk.js'},{'revision':null,'url':'./static/js/locales/pt-BR-json.695b35a2.chunk.js'},{'revision':null,'url':'./static/js/locales/pt-PT-json.d9244503.chunk.js'},{'revision':null,'url':'./static/js/locales/ro-RO-json.ac592aef.chunk.js'},{'revision':null,'url':'./static/js/locales/ru-RU-json.e74b852e.chunk.js'},{'revision':null,'url':'./static/js/locales/si-LK-json.f9ee8ae1.chunk.js'},{'revision':null,'url':'./static/js/locales/sk-SK-json.685b5cbe.chunk.js'},{'revision':null,'url':'./static/js/locales/sl-SI-json.69c07259.chunk.js'},{'revision':null,'url':'./static/js/locales/sv-SE-json.901f24ed.chunk.js'},{'revision':null,'url':'./static/js/locales/ta-IN-json.ded71f3c.chunk.js'},{'revision':null,'url':'./static/js/locales/tr-TR-json.a0f5d4e3.chunk.js'},{'revision':null,'url':'./static/js/locales/uk-UA-json.c64b4724.chunk.js'},{'revision':null,'url':'./static/js/locales/vi-VN-json.61fc15a0.chunk.js'},{'revision':null,'url':'./static/js/locales/zh-CN-json.21237dff.chunk.js'},{'revision':null,'url':'./static/js/locales/zh-HK-json.c341bae6.chunk.js'},{'revision':null,'url':'./static/js/locales/zh-TW-json.353a51c9.chunk.js'},{'revision':null,'url':'./static/js/main.fa897cc5.chunk.js'},{'revision':null,'url':'./static/js/pwacompat.ce7990bc.chunk.js'},{'revision':null,'url':'./static/js/runtime-main.c4258b0a.js'},{'revision':null,'url':'./static/js/socketIoClient.c56c9195.chunk.js'}]),workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("./index.html"),{blacklist:[/^\/_/,/\/[^/?]+\.[^/]+$/]})),workbox.routing.registerRoute(new RegExp("/(fonts.css|.+.(ttf|woff2|otf))"),new workbox.strategies.StaleWhileRevalidate({cacheName:"fonts",plugins:[new workbox.expiration.Plugin({maxEntries:10})]})),self.addEventListener("fetch",(function(t){if("POST"===t.request.method&&t.request.url.endsWith("/web-share-target"))return t.respondWith(Object(n.a)(Object(e.a)().mark((function r(){var n,o,i;return Object(e.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request.formData();case 2:return n=e.sent,o=n.get("file"),e.next=6,caches.open("web-share-target");case 6:return i=e.sent,e.next=9,i.put("shared-file",new Response(o));case 9:return e.abrupt("return",Response.redirect("/?web-share-target",303));case 10:case"end":return e.stop()}}),r)})))())}))}.call(this,r(3))},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var c,s=[],f=!1,l=-1;function h(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&p())}function p(){if(!f){var t=u(h);f=!0;for(var e=s.length;e;){for(c=s,s=[];++l<e;)c&&c[l].run();l=-1,e=s.length}c=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];s.push(new d(t,e)),1!==s.length||f||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]);
//# sourceMappingURL=service-worker.js.map
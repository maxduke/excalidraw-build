!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./",r(r.s=0)}([function(e,t){importScripts("/workbox/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"/workbox/"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{'revision':'dc5ffcf6a01b6bfb2c2303c5a3ac5cb0','url':'./index.html'},{'revision':null,'url':'./static/css/main.2ee6204f.chunk.css'},{'revision':null,'url':'./static/js/0.334e07f4.chunk.js'},{'revision':null,'url':'./static/js/1.9fe531f7.chunk.js'},{'revision':null,'url':'./static/js/51.ae0dd705.chunk.js'},{'revision':null,'url':'./static/js/52.ce663bc5.chunk.js'},{'revision':null,'url':'./static/js/53.81133e5f.chunk.js'},{'revision':null,'url':'./static/js/54.f1a8a6cc.chunk.js'},{'revision':null,'url':'./static/js/55.92d5b7b5.chunk.js'},{'revision':null,'url':'./static/js/56.c42257e4.chunk.js'},{'revision':null,'url':'./static/js/57.84ab3527.chunk.js'},{'revision':null,'url':'./static/js/58.d5f3669e.chunk.js'},{'revision':null,'url':'./static/js/59.b959681c.chunk.js'},{'revision':null,'url':'./static/js/60.b5c5dc36.chunk.js'},{'revision':null,'url':'./static/js/61.078e9791.chunk.js'},{'revision':null,'url':'./static/js/62.0841ea0c.chunk.js'},{'revision':null,'url':'./static/js/bug-issue-template.f5324568.chunk.js'},{'revision':null,'url':'./static/js/firebase.b425de96.chunk.js'},{'revision':null,'url':'./static/js/i18n-ar-SA-json.3d702a55.chunk.js'},{'revision':null,'url':'./static/js/i18n-bg-BG-json.1c9dc049.chunk.js'},{'revision':null,'url':'./static/js/i18n-bn-BD-json.4b21dc7d.chunk.js'},{'revision':null,'url':'./static/js/i18n-ca-ES-json.47dfd74b.chunk.js'},{'revision':null,'url':'./static/js/i18n-cs-CZ-json.846682c6.chunk.js'},{'revision':null,'url':'./static/js/i18n-da-DK-json.a7560cfa.chunk.js'},{'revision':null,'url':'./static/js/i18n-de-DE-json.ea365d48.chunk.js'},{'revision':null,'url':'./static/js/i18n-el-GR-json.5d3b57c9.chunk.js'},{'revision':null,'url':'./static/js/i18n-es-ES-json.5417b109.chunk.js'},{'revision':null,'url':'./static/js/i18n-fa-IR-json.06c72ab7.chunk.js'},{'revision':null,'url':'./static/js/i18n-fi-FI-json.edc1b706.chunk.js'},{'revision':null,'url':'./static/js/i18n-fr-FR-json.c57310af.chunk.js'},{'revision':null,'url':'./static/js/i18n-he-IL-json.5d9ccdf2.chunk.js'},{'revision':null,'url':'./static/js/i18n-hi-IN-json.9d55a89a.chunk.js'},{'revision':null,'url':'./static/js/i18n-hu-HU-json.7145c5f1.chunk.js'},{'revision':null,'url':'./static/js/i18n-id-ID-json.c62008eb.chunk.js'},{'revision':null,'url':'./static/js/i18n-it-IT-json.39ba3e6d.chunk.js'},{'revision':null,'url':'./static/js/i18n-ja-JP-json.05d4a9f8.chunk.js'},{'revision':null,'url':'./static/js/i18n-kab-KAB-json.98b14b46.chunk.js'},{'revision':null,'url':'./static/js/i18n-kk-KZ-json.0ccdd2c9.chunk.js'},{'revision':null,'url':'./static/js/i18n-ko-KR-json.62bf36ec.chunk.js'},{'revision':null,'url':'./static/js/i18n-lv-LV-json.b975dcfd.chunk.js'},{'revision':null,'url':'./static/js/i18n-my-MM-json.c57752cc.chunk.js'},{'revision':null,'url':'./static/js/i18n-nb-NO-json.d991f537.chunk.js'},{'revision':null,'url':'./static/js/i18n-nl-NL-json.160ebb3c.chunk.js'},{'revision':null,'url':'./static/js/i18n-nn-NO-json.199d96b5.chunk.js'},{'revision':null,'url':'./static/js/i18n-oc-FR-json.993b687f.chunk.js'},{'revision':null,'url':'./static/js/i18n-pa-IN-json.ce3ee1c4.chunk.js'},{'revision':null,'url':'./static/js/i18n-pl-PL-json.572657e4.chunk.js'},{'revision':null,'url':'./static/js/i18n-pt-BR-json.12b363ed.chunk.js'},{'revision':null,'url':'./static/js/i18n-pt-PT-json.18d6bb09.chunk.js'},{'revision':null,'url':'./static/js/i18n-ro-RO-json.ed4430d0.chunk.js'},{'revision':null,'url':'./static/js/i18n-ru-RU-json.da7497e8.chunk.js'},{'revision':null,'url':'./static/js/i18n-si-LK-json.351fe599.chunk.js'},{'revision':null,'url':'./static/js/i18n-sk-SK-json.87f79a88.chunk.js'},{'revision':null,'url':'./static/js/i18n-sv-SE-json.f0324b3a.chunk.js'},{'revision':null,'url':'./static/js/i18n-ta-IN-json.e97b4bd0.chunk.js'},{'revision':null,'url':'./static/js/i18n-tr-TR-json.e1d5f8c3.chunk.js'},{'revision':null,'url':'./static/js/i18n-uk-UA-json.d2556f13.chunk.js'},{'revision':null,'url':'./static/js/i18n-zh-CN-json.cfa36436.chunk.js'},{'revision':null,'url':'./static/js/i18n-zh-HK-json.156835ea.chunk.js'},{'revision':null,'url':'./static/js/i18n-zh-TW-json.ee37bee3.chunk.js'},{'revision':null,'url':'./static/js/image.b5bb6de8.chunk.js'},{'revision':null,'url':'./static/js/main.c3a5fa1b.chunk.js'},{'revision':null,'url':'./static/js/pwacompat.16d612c2.chunk.js'},{'revision':null,'url':'./static/js/runtime-main.c33cba54.js'},{'revision':null,'url':'./static/js/socketIoClient.c72b3cd3.chunk.js'}]),workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("./index.html"),{blacklist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}),workbox.routing.registerRoute(new RegExp("/(fonts.css|.+.(ttf|woff2|otf))"),new workbox.strategies.StaleWhileRevalidate({cacheName:"fonts",plugins:[new workbox.expiration.Plugin({maxEntries:10})]})),self.addEventListener("fetch",(e=>{if("POST"===e.request.method&&e.request.url.endsWith("/web-share-target"))return e.respondWith((async()=>{const t=(await e.request.formData()).get("file"),r=await caches.open("web-share-target");return await r.put("shared-file",new Response(t)),Response.redirect("/?web-share-target",303)})())}))}]);
//# sourceMappingURL=service-worker.js.map
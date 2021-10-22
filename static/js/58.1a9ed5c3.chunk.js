/*! For license information please see 58.1a9ed5c3.chunk.js.LICENSE.txt */
(this.webpackJsonpexcalidraw=this.webpackJsonpexcalidraw||[]).push([[58],{244:function(t,e,r){t.exports=function(){function t(e,r,i){function n(A,o){if(!r[A]){if(!e[A]){if(a)return a(A,!0);var s=new Error("Cannot find module '"+A+"'");throw s.code="MODULE_NOT_FOUND",s}var u=r[A]={exports:{}};e[A][0].call(u.exports,(function(t){return n(e[A][1][t]||t)}),u,u.exports,t,e,r,i)}return r[A].exports}for(var a=!1,A=0;A<i.length;A++)n(i[A]);return n}return t}()({1:[function(t,e,r){"use strict";var i=t("inherits"),n=t("multimath"),a=t("./mm_unsharp_mask"),A=t("./mm_resize");function o(t){var e=t||[],r={js:e.indexOf("js")>=0,wasm:e.indexOf("wasm")>=0};n.call(this,r),this.features={js:r.js,wasm:r.wasm&&this.has_wasm()},this.use(a),this.use(A)}i(o,n),o.prototype.resizeAndUnsharp=function(t,e){var r=this.resize(t,e);return t.unsharpAmount&&this.unsharp_mask(r,t.toWidth,t.toHeight,t.unsharpAmount,t.unsharpRadius,t.unsharpThreshold),r},e.exports=o},{"./mm_resize":4,"./mm_unsharp_mask":9,inherits:19,multimath:20}],2:[function(t,e,r){"use strict";function i(t){return t<0?0:t>255?255:t}function n(t,e,r,n,a,A){var o,s,u,h,c,f,l,g,d,p,m,I=0,w=0;for(d=0;d<n;d++){for(c=0,p=0;p<a;p++){for(f=A[c++],l=A[c++],g=I+4*f|0,o=s=u=h=0;l>0;l--)h=h+(m=A[c++])*t[g+3]|0,u=u+m*t[g+2]|0,s=s+m*t[g+1]|0,o=o+m*t[g]|0,g=g+4|0;e[w+3]=i(h+8192>>14),e[w+2]=i(u+8192>>14),e[w+1]=i(s+8192>>14),e[w]=i(o+8192>>14),w=w+4*n|0}w=4*(d+1)|0,I=(d+1)*r*4|0}}function a(t,e,r,n,a,A){var o,s,u,h,c,f,l,g,d,p,m,I=0,w=0;for(d=0;d<n;d++){for(c=0,p=0;p<a;p++){for(f=A[c++],l=A[c++],g=I+4*f|0,o=s=u=h=0;l>0;l--)h=h+(m=A[c++])*t[g+3]|0,u=u+m*t[g+2]|0,s=s+m*t[g+1]|0,o=o+m*t[g]|0,g=g+4|0;e[w+3]=i(h+8192>>14),e[w+2]=i(u+8192>>14),e[w+1]=i(s+8192>>14),e[w]=i(o+8192>>14),w=w+4*n|0}w=4*(d+1)|0,I=(d+1)*r*4|0}}e.exports={convolveHorizontally:n,convolveVertically:a}},{}],3:[function(t,e,r){"use strict";e.exports="AGFzbQEAAAAADAZkeWxpbmsAAAAAAAEXA2AAAGAGf39/f39/AGAHf39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMEAwABAgYGAX8AQQALB1cFEV9fd2FzbV9jYWxsX2N0b3JzAAAIY29udm9sdmUAAQpjb252b2x2ZUhWAAIMX19kc29faGFuZGxlAwAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAAK7AMDAwABC8YDAQ9/AkAgA0UNACAERQ0AA0AgDCENQQAhE0EAIQcDQCAHQQJqIQYCfyAHQQF0IAVqIgcuAQIiFEUEQEGAwAAhCEGAwAAhCUGAwAAhCkGAwAAhCyAGDAELIBIgBy4BAGohCEEAIQsgFCEHQQAhDiAGIQlBACEPQQAhEANAIAUgCUEBdGouAQAiESAAIAhBAnRqKAIAIgpBGHZsIBBqIRAgCkH/AXEgEWwgC2ohCyAKQRB2Qf8BcSARbCAPaiEPIApBCHZB/wFxIBFsIA5qIQ4gCEEBaiEIIAlBAWohCSAHQQFrIgcNAAsgC0GAQGshCCAOQYBAayEJIA9BgEBrIQogEEGAQGshCyAGIBRqCyEHIAEgDUECdGogCUEOdSIGQf8BIAZB/wFIGyIGQQAgBkEAShtBCHRBgP4DcSAKQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG0EQdEGAgPwHcSALQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG0EYdHJyIAhBDnUiBkH/ASAGQf8BSBsiBkEAIAZBAEobcjYCACADIA1qIQ0gE0EBaiITIARHDQALIAxBAWoiDCACbCESIAMgDEcNAAsLCx4AQQAgAiADIAQgBSAAEAEgAkEAIAQgBSAGIAEQAQs="},{}],4:[function(t,e,r){"use strict";e.exports={name:"resize",fn:t("./resize"),wasm_fn:t("./resize_wasm"),wasm_src:t("./convolve_wasm_base64")}},{"./convolve_wasm_base64":3,"./resize":5,"./resize_wasm":8}],5:[function(t,e,r){"use strict";var i=t("./resize_filter_gen"),n=t("./convolve").convolveHorizontally,a=t("./convolve").convolveVertically;function A(t,e,r){for(var i=3,n=e*r*4|0;i<n;)t[i]=255,i=i+4|0}e.exports=function(t){var e=t.src,r=t.width,o=t.height,s=t.toWidth,u=t.toHeight,h=t.scaleX||t.toWidth/t.width,c=t.scaleY||t.toHeight/t.height,f=t.offsetX||0,l=t.offsetY||0,g=t.dest||new Uint8Array(s*u*4),d="undefined"===typeof t.quality?3:t.quality,p=t.alpha||!1,m=i(d,r,s,h,f),I=i(d,o,u,c,l),w=new Uint8Array(s*o*4);return n(e,w,r,o,s,m),a(w,g,o,s,u,I),p||A(g,s,u),g}},{"./convolve":2,"./resize_filter_gen":6}],6:[function(t,e,r){"use strict";var i=t("./resize_filter_info"),n=14;function a(t){return Math.round(t*((1<<n)-1))}e.exports=function(t,e,r,n,A){var o,s,u,h,c,f,l,g,d,p,m,I,w,_,B,b,v,y=i[t].filter,Q=1/n,C=Math.min(1,n),E=i[t].win/C,M=Math.floor(2*(E+1)),x=new Int16Array((M+2)*r),D=0,G=!x.subarray||!x.set;for(o=0;o<r;o++){for(s=(o+.5)*Q+A,u=Math.max(0,Math.floor(s-E)),c=(h=Math.min(e-1,Math.ceil(s+E)))-u+1,f=new Float32Array(c),l=new Int16Array(c),g=0,d=u,p=0;d<=h;d++,p++)g+=m=y((d+.5-s)*C),f[p]=m;for(I=0,p=0;p<f.length;p++)I+=w=f[p]/g,l[p]=a(w);for(l[r>>1]+=a(1-I),_=0;_<l.length&&0===l[_];)_++;if(_<l.length){for(B=l.length-1;B>0&&0===l[B];)B--;if(b=u+_,v=B-_+1,x[D++]=b,x[D++]=v,G)for(p=_;p<=B;p++)x[D++]=l[p];else x.set(l.subarray(_,B+1),D),D+=v}else x[D++]=0,x[D++]=0}return x}},{"./resize_filter_info":7}],7:[function(t,e,r){"use strict";e.exports=[{win:.5,filter:function(t){return t>=-.5&&t<.5?1:0}},{win:1,filter:function(t){if(t<=-1||t>=1)return 0;if(t>-1.1920929e-7&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*(.54+.46*Math.cos(e/1))}},{win:2,filter:function(t){if(t<=-2||t>=2)return 0;if(t>-1.1920929e-7&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*Math.sin(e/2)/(e/2)}},{win:3,filter:function(t){if(t<=-3||t>=3)return 0;if(t>-1.1920929e-7&&t<1.1920929e-7)return 1;var e=t*Math.PI;return Math.sin(e)/e*Math.sin(e/3)/(e/3)}}]},{}],8:[function(t,e,r){"use strict";var i=t("./resize_filter_gen");function n(t,e,r){for(var i=3,n=e*r*4|0;i<n;)t[i]=255,i=i+4|0}function a(t){return new Uint8Array(t.buffer,0,t.byteLength)}var A=!0;try{A=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0]}catch(s){}function o(t,e,r){if(A)e.set(a(t),r);else for(var i=r,n=0;n<t.length;n++){var o=t[n];e[i++]=255&o,e[i++]=o>>8&255}}e.exports=function(t){var e=t.src,r=t.width,a=t.height,A=t.toWidth,s=t.toHeight,u=t.scaleX||t.toWidth/t.width,h=t.scaleY||t.toHeight/t.height,c=t.offsetX||0,f=t.offsetY||0,l=t.dest||new Uint8Array(A*s*4),g="undefined"===typeof t.quality?3:t.quality,d=t.alpha||!1,p=i(g,r,A,u,c),m=i(g,a,s,h,f),I=0,w=this.__align(I+Math.max(e.byteLength,l.byteLength)),_=this.__align(w+a*A*4),B=this.__align(_+p.byteLength),b=B+m.byteLength,v=this.__instance("resize",b),y=new Uint8Array(this.__memory.buffer),Q=new Uint32Array(this.__memory.buffer),C=new Uint32Array(e.buffer);return Q.set(C),o(p,y,_),o(m,y,B),(v.exports.convolveHV||v.exports._convolveHV)(_,B,w,r,a,A,s),new Uint32Array(l.buffer).set(new Uint32Array(this.__memory.buffer,0,s*A)),d||n(l,A,s),l}},{"./resize_filter_gen":6}],9:[function(t,e,r){"use strict";e.exports={name:"unsharp_mask",fn:t("./unsharp_mask"),wasm_fn:t("./unsharp_mask_wasm"),wasm_src:t("./unsharp_mask_wasm_base64")}},{"./unsharp_mask":10,"./unsharp_mask_wasm":11,"./unsharp_mask_wasm_base64":12}],10:[function(t,e,r){"use strict";var i=t("glur/mono16");function n(t,e,r){for(var i,n,a,A,o=e*r,s=new Uint16Array(o),u=0;u<o;u++)i=t[4*u],n=t[4*u+1],a=t[4*u+2],A=i>=n&&i>=a?i:n>=a&&n>=i?n:a,s[u]=A<<8;return s}e.exports=function(t,e,r,a,A,o){var s,u,h,c,f;if(!(0===a||A<.5)){A>2&&(A=2);var l=n(t,e,r),g=new Uint16Array(l);i(g,e,r,A);for(var d=a/100*4096+.5|0,p=o<<8,m=e*r,I=0;I<m;I++)c=(s=l[I])-g[I],Math.abs(c)>=p&&(h=((u=(u=(u=s+(d*c+2048>>12))>65280?65280:u)<0?0:u)<<12)/(s=0!==s?s:1)|0,t[f=4*I]=t[f]*h+2048>>12,t[f+1]=t[f+1]*h+2048>>12,t[f+2]=t[f+2]*h+2048>>12)}}},{"glur/mono16":18}],11:[function(t,e,r){"use strict";e.exports=function(t,e,r,i,n,a){if(!(0===i||n<.5)){n>2&&(n=2);var A=e*r,o=4*A,s=2*A,u=2*A,h=4*Math.max(e,r),c=32,f=0,l=o,g=l+s,d=g+u,p=d+u,m=p+h,I=this.__instance("unsharp_mask",o+s+2*u+h+c,{exp:Math.exp}),w=new Uint32Array(t.buffer);new Uint32Array(this.__memory.buffer).set(w);var _=I.exports.hsv_v16||I.exports._hsv_v16;_(f,l,e,r),(_=I.exports.blurMono16||I.exports._blurMono16)(l,g,d,p,m,e,r,n),(_=I.exports.unsharp||I.exports._unsharp)(f,f,l,g,e,r,i,a),w.set(new Uint32Array(this.__memory.buffer,0,A))}}},{}],12:[function(t,e,r){"use strict";e.exports="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"},{}],13:[function(t,e,r){"use strict";var i=100;function n(t,e){this.create=t,this.available=[],this.acquired={},this.lastId=1,this.timeoutId=0,this.idle=e||2e3}n.prototype.acquire=function(){var t,e=this;return 0!==this.available.length?t=this.available.pop():((t=this.create()).id=this.lastId++,t.release=function(){return e.release(t)}),this.acquired[t.id]=t,t},n.prototype.release=function(t){var e=this;delete this.acquired[t.id],t.lastUsed=Date.now(),this.available.push(t),0===this.timeoutId&&(this.timeoutId=setTimeout((function(){return e.gc()}),i))},n.prototype.gc=function(){var t=this,e=Date.now();this.available=this.available.filter((function(r){return!(e-r.lastUsed>t.idle)||(r.destroy(),!1)})),0!==this.available.length?this.timeoutId=setTimeout((function(){return t.gc()}),i):this.timeoutId=0},e.exports=n},{}],14:[function(t,e,r){"use strict";var i=2;e.exports=function(t,e,r,n,a,A){var o=r/t,s=n/e,u=(2*A+i+1)/a;if(u>.5)return[[r,n]];var h=Math.ceil(Math.log(Math.min(o,s))/Math.log(u));if(h<=1)return[[r,n]];for(var c=[],f=0;f<h;f++){var l=Math.round(Math.pow(Math.pow(t,h-f-1)*Math.pow(r,f+1),1/h)),g=Math.round(Math.pow(Math.pow(e,h-f-1)*Math.pow(n,f+1),1/h));c.push([l,g])}return c}},{}],15:[function(t,e,r){"use strict";var i=1e-5;function n(t){var e=Math.round(t);return Math.abs(t-e)<i?e:Math.floor(t)}function a(t){var e=Math.round(t);return Math.abs(t-e)<i?e:Math.ceil(t)}e.exports=function(t){var e,r,i,A,o,s,u=t.toWidth/t.width,h=t.toHeight/t.height,c=n(t.srcTileSize*u)-2*t.destTileBorder,f=n(t.srcTileSize*h)-2*t.destTileBorder;if(c<1||f<1)throw new Error("Internal error in pica: target tile width/height is too small.");var l,g=[];for(A=0;A<t.toHeight;A+=f)for(i=0;i<t.toWidth;i+=c)(e=i-t.destTileBorder)<0&&(e=0),e+(o=i+c+t.destTileBorder-e)>=t.toWidth&&(o=t.toWidth-e),(r=A-t.destTileBorder)<0&&(r=0),r+(s=A+f+t.destTileBorder-r)>=t.toHeight&&(s=t.toHeight-r),l={toX:e,toY:r,toWidth:o,toHeight:s,toInnerX:i,toInnerY:A,toInnerWidth:c,toInnerHeight:f,offsetX:e/u-n(e/u),offsetY:r/h-n(r/h),scaleX:u,scaleY:h,x:n(e/u),y:n(r/h),width:a(o/u),height:a(s/h)},g.push(l);return g}},{}],16:[function(t,e,r){"use strict";function i(t){return Object.prototype.toString.call(t)}e.exports.isCanvas=function(t){var e=i(t);return"[object HTMLCanvasElement]"===e||"[object OffscreenCanvas]"===e||"[object Canvas]"===e},e.exports.isImage=function(t){return"[object HTMLImageElement]"===i(t)},e.exports.isImageBitmap=function(t){return"[object ImageBitmap]"===i(t)},e.exports.limiter=function(t){var e=0,r=[];function i(){e<t&&r.length&&(e++,r.shift()())}return function(t){return new Promise((function(n,a){r.push((function(){t().then((function(t){n(t),e--,i()}),(function(t){a(t),e--,i()}))})),i()}))}},e.exports.cib_quality_name=function(t){switch(t){case 0:return"pixelated";case 1:return"low";case 2:return"medium"}return"high"},e.exports.cib_support=function(t){return Promise.resolve().then((function(){if("undefined"===typeof createImageBitmap)return!1;var e=t(100,100);return createImageBitmap(e,0,0,100,100,{resizeWidth:10,resizeHeight:10,resizeQuality:"high"}).then((function(t){var r=10===t.width;return t.close(),e=null,r}))})).catch((function(){return!1}))},e.exports.worker_offscreen_canvas_support=function(){return new Promise((function(t,e){if("undefined"!==typeof OffscreenCanvas){var r=btoa("(".concat(n.toString(),")(self);")),i=new Worker("data:text/javascript;base64,".concat(r));i.onmessage=function(e){return t(e.data)},i.onerror=e}else t(!1);function n(t){"undefined"!==typeof createImageBitmap?Promise.resolve().then((function(){var t=new OffscreenCanvas(10,10);return t.getContext("2d").rect(0,0,1,1),createImageBitmap(t,0,0,1,1)})).then((function(){return t.postMessage(!0)}),(function(){return t.postMessage(!1)})):t.postMessage(!1)}})).then((function(t){return t}),(function(){return!1}))},e.exports.can_use_canvas=function(t){var e=!1;try{var r=t(2,1).getContext("2d"),i=r.createImageData(2,1);i.data[0]=12,i.data[1]=23,i.data[2]=34,i.data[3]=255,i.data[4]=45,i.data[5]=56,i.data[6]=67,i.data[7]=255,r.putImageData(i,0,0),i=null,12===(i=r.getImageData(0,0,2,1)).data[0]&&23===i.data[1]&&34===i.data[2]&&255===i.data[3]&&45===i.data[4]&&56===i.data[5]&&67===i.data[6]&&255===i.data[7]&&(e=!0)}catch(n){}return e},e.exports.cib_can_use_region=function(){return new Promise((function(t){if("undefined"!==typeof createImageBitmap){var e=new Image;e.src="data:image/jpeg;base64,/9j/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9sAQwAEAwMEAwMEBAMEBQQEBQYKBwYGBgYNCQoICg8NEBAPDQ8OERMYFBESFxIODxUcFRcZGRsbGxAUHR8dGh8YGhsa/9sAQwEEBQUGBQYMBwcMGhEPERoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa/8IAEQgAAQACAwERAAIRAQMRAf/EABQAAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF/P//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z",e.onload=function(){createImageBitmap(e,0,0,e.width,e.height).then((function(r){r.width===e.width&&r.height===e.height?t(!0):t(!1)}),(function(){return t(!1)}))},e.onerror=function(){return t(!1)}}else t(!1)}))}},{}],17:[function(t,e,r){"use strict";e.exports=function(){var e,r=t("./mathlib");onmessage=function(t){var i=t.data.opts,n=!1;if(!i.src&&i.srcBitmap){var a=new OffscreenCanvas(i.width,i.height),A=a.getContext("2d",{alpha:Boolean(i.alpha)});A.drawImage(i.srcBitmap,0,0),i.src=A.getImageData(0,0,i.width,i.height).data,a.width=a.height=0,a=null,i.srcBitmap.close(),i.srcBitmap=null,n=!0}e||(e=new r(t.data.features));var o=e.resizeAndUnsharp(i);if(n){var s=new ImageData(new Uint8ClampedArray(o),i.toWidth,i.toHeight),u=new OffscreenCanvas(i.toWidth,i.toHeight);u.getContext("2d",{alpha:Boolean(i.alpha)}).putImageData(s,0,0),createImageBitmap(u).then((function(t){postMessage({bitmap:t},[t])}))}else postMessage({data:o},[o.buffer])}}},{"./mathlib":1}],18:[function(t,e,r){var i,n,a,A,o,s;function u(t){t<.5&&(t=.5);var e=Math.exp(.527076)/t,r=Math.exp(-e),u=Math.exp(-2*e),h=(1-r)*(1-r)/(1+2*e*r-u);return i=h,n=h*(e-1)*r,a=h*(e+1)*r,A=-h*u,o=2*r,s=-u,new Float32Array([i,n,a,A,o,s,(i+n)/(1-o-s),(a+A)/(1-o-s)])}function h(t,e,r,i,n,a){var A,o,s,u,h,c,f,l,g,d,p,m,I,w;for(g=0;g<a;g++){for(f=g,l=0,u=h=(A=t[c=g*n])*i[6],p=i[0],m=i[1],I=i[4],w=i[5],d=0;d<n;d++)s=(o=t[c])*p+A*m+u*I+h*w,h=u,u=s,A=o,r[l]=u,l++,c++;for(l--,f+=a*(n-1),u=h=(A=t[--c])*i[7],o=A,p=i[2],m=i[3],d=n-1;d>=0;d--)s=o*p+A*m+u*I+h*w,h=u,u=s,A=o,o=t[c],e[f]=r[l]+u,c--,l--,f-=a}}function c(t,e,r,i){if(i){var n=new Uint16Array(t.length),a=new Float32Array(Math.max(e,r)),A=u(i);h(t,n,a,A,e,r,i),h(n,t,a,A,r,e,i)}}e.exports=c},{}],19:[function(t,e,r){"function"===typeof Object.create?e.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}},{}],20:[function(t,e,r){"use strict";var i=t("object-assign"),n=t("./lib/base64decode"),a=t("./lib/wa_detect"),A={js:!0,wasm:!0};function o(t){if(!(this instanceof o))return new o(t);var e=i({},A,t||{});if(this.options=e,this.__cache={},this.__init_promise=null,this.__modules=e.modules||{},this.__memory=null,this.__wasm={},this.__isLE=1===new Uint32Array(new Uint8Array([1,0,0,0]).buffer)[0],!this.options.js&&!this.options.wasm)throw new Error('mathlib: at least "js" or "wasm" should be enabled')}o.prototype.has_wasm=a,o.prototype.use=function(t){return this.__modules[t.name]=t,this.options.wasm&&this.has_wasm()&&t.wasm_fn?this[t.name]=t.wasm_fn:this[t.name]=t.fn,this},o.prototype.init=function(){if(this.__init_promise)return this.__init_promise;if(!this.options.js&&this.options.wasm&&!this.has_wasm())return Promise.reject(new Error('mathlib: only "wasm" was enabled, but it\'s not supported'));var t=this;return this.__init_promise=Promise.all(Object.keys(t.__modules).map((function(e){var r=t.__modules[e];return t.options.wasm&&t.has_wasm()&&r.wasm_fn?t.__wasm[e]?null:WebAssembly.compile(t.__base64decode(r.wasm_src)).then((function(r){t.__wasm[e]=r})):null}))).then((function(){return t})),this.__init_promise},o.prototype.__base64decode=n,o.prototype.__reallocate=function(t){if(!this.__memory)return this.__memory=new WebAssembly.Memory({initial:Math.ceil(t/65536)}),this.__memory;var e=this.__memory.buffer.byteLength;return e<t&&this.__memory.grow(Math.ceil((t-e)/65536)),this.__memory},o.prototype.__instance=function(t,e,r){if(e&&this.__reallocate(e),!this.__wasm[t]){var n=this.__modules[t];this.__wasm[t]=new WebAssembly.Module(this.__base64decode(n.wasm_src))}if(!this.__cache[t]){var a={memoryBase:0,memory:this.__memory,tableBase:0,table:new WebAssembly.Table({initial:0,element:"anyfunc"})};this.__cache[t]=new WebAssembly.Instance(this.__wasm[t],{env:i(a,r||{})})}return this.__cache[t]},o.prototype.__align=function(t,e){var r=t%(e=e||8);return t+(r?e-r:0)},e.exports=o},{"./lib/base64decode":21,"./lib/wa_detect":22,"object-assign":23}],21:[function(t,e,r){"use strict";var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";e.exports=function(t){for(var e=t.replace(/[\r\n=]/g,""),r=e.length,n=new Uint8Array(3*r>>2),a=0,A=0,o=0;o<r;o++)o%4===0&&o&&(n[A++]=a>>16&255,n[A++]=a>>8&255,n[A++]=255&a),a=a<<6|i.indexOf(e.charAt(o));var s=r%4*6;return 0===s?(n[A++]=a>>16&255,n[A++]=a>>8&255,n[A++]=255&a):18===s?(n[A++]=a>>10&255,n[A++]=a>>2&255):12===s&&(n[A++]=a>>4&255),n}},{}],22:[function(t,e,r){"use strict";var i;e.exports=function(){if("undefined"!==typeof i)return i;if(i=!1,"undefined"===typeof WebAssembly)return i;try{var t=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),e=new WebAssembly.Module(t);return 0!==new WebAssembly.Instance(e,{}).exports.test(4)&&(i=!0),i}catch(r){}return i}},{}],23:[function(t,e,r){"use strict";var i=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function A(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function o(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(t){i[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(n){return!1}}e.exports=o()?Object.assign:function(t,e){for(var r,o,s=A(t),u=1;u<arguments.length;u++){for(var h in r=Object(arguments[u]))n.call(r,h)&&(s[h]=r[h]);if(i){o=i(r);for(var c=0;c<o.length;c++)a.call(r,o[c])&&(s[o[c]]=r[o[c]])}}return s}},{}],24:[function(t,e,r){var i=arguments[3],n=arguments[4],a=arguments[5],A=JSON.stringify;e.exports=function(t,e){for(var r,o=Object.keys(a),s=0,u=o.length;s<u;s++){var h=o[s],c=a[h].exports;if(c===t||c&&c.default===t){r=h;break}}if(!r){r=Math.floor(Math.pow(16,8)*Math.random()).toString(16);var f={};for(s=0,u=o.length;s<u;s++)f[h=o[s]]=h;n[r]=["function(require,module,exports){"+t+"(self); }",f]}var l=Math.floor(Math.pow(16,8)*Math.random()).toString(16),g={};g[r]=r,n[l]=["function(require,module,exports){var f = require("+A(r)+");(f.default ? f.default : f)(self);}",g];var d={};function p(t){for(var e in d[t]=!0,n[t][1]){var r=n[t][1][e];d[r]||p(r)}}p(l);var m="("+i+")({"+Object.keys(d).map((function(t){return A(t)+":["+n[t][0]+","+A(n[t][1])+"]"})).join(",")+"},{},["+A(l)+"])",I=window.URL||window.webkitURL||window.mozURL||window.msURL,w=new Blob([m],{type:"text/javascript"});if(e&&e.bare)return w;var _=I.createObjectURL(w),B=new Worker(_);return B.objectURL=_,B}},{}],"/index.js":[function(t,e,r){"use strict";function i(t,e){return s(t)||o(t,e)||a(t,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return A(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(t,e):void 0}}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function o(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var i,n,a=[],A=!0,o=!1;try{for(r=r.call(t);!(A=(i=r.next()).done)&&(a.push(i.value),!e||a.length!==e);A=!0);}catch(s){o=!0,n=s}finally{try{A||null==r.return||r.return()}finally{if(o)throw n}}return a}}function s(t){if(Array.isArray(t))return t}var u=t("object-assign"),h=t("webworkify"),c=t("./lib/mathlib"),f=t("./lib/pool"),l=t("./lib/utils"),g=t("./lib/worker"),d=t("./lib/stepper"),p=t("./lib/tiler"),m={},I=!1;try{"undefined"!==typeof navigator&&navigator.userAgent&&(I=navigator.userAgent.indexOf("Safari")>=0)}catch(x){}var w=1;"undefined"!==typeof navigator&&(w=Math.min(navigator.hardwareConcurrency||1,4));var _={tile:1024,concurrency:w,features:["js","wasm","ww"],idle:2e3,createCanvas:function(t,e){var r=document.createElement("canvas");return r.width=t,r.height=e,r}},B={quality:3,alpha:!1,unsharpAmount:0,unsharpRadius:0,unsharpThreshold:0},b=!1,v=!1,y=!1,Q=!1,C=!1;function E(){return{value:h(g),destroy:function(){if(this.value.terminate(),"undefined"!==typeof window){var t=window.URL||window.webkitURL||window.mozURL||window.msURL;t&&t.revokeObjectURL&&this.value.objectURL&&t.revokeObjectURL(this.value.objectURL)}}}}function M(t){if(!(this instanceof M))return new M(t);this.options=u({},_,t||{});var e="lk_".concat(this.options.concurrency);this.__limit=m[e]||l.limiter(this.options.concurrency),m[e]||(m[e]=this.__limit),this.features={js:!1,wasm:!1,cib:!1,ww:!1},this.__workersPool=null,this.__requested_features=[],this.__mathlib=null}M.prototype.init=function(){var e=this;if(this.__initPromise)return this.__initPromise;if("undefined"!==typeof ImageData&&"undefined"!==typeof Uint8ClampedArray)try{new ImageData(new Uint8ClampedArray(400),10,10),b=!0}catch(s){}"undefined"!==typeof ImageBitmap&&(ImageBitmap.prototype&&ImageBitmap.prototype.close?v=!0:this.debug("ImageBitmap does not support .close(), disabled"));var r=this.options.features.slice();if(r.indexOf("all")>=0&&(r=["cib","wasm","js","ww"]),this.__requested_features=r,this.__mathlib=new c(r),r.indexOf("ww")>=0&&"undefined"!==typeof window&&"Worker"in window)try{t("webworkify")((function(){})).terminate(),this.features.ww=!0;var i="wp_".concat(JSON.stringify(this.options));m[i]?this.__workersPool=m[i]:(this.__workersPool=new f(E,this.options.idle),m[i]=this.__workersPool)}catch(s){}var n,a,A=this.__mathlib.init().then((function(t){u(e.features,t.features)}));n=v?l.cib_support(this.options.createCanvas).then((function(t){e.features.cib&&r.indexOf("cib")<0?e.debug("createImageBitmap() resize supported, but disabled by config"):r.indexOf("cib")>=0&&(e.features.cib=t)})):Promise.resolve(!1),y=l.can_use_canvas(this.options.createCanvas),a=(a=v&&b&&-1!==r.indexOf("ww")?l.worker_offscreen_canvas_support():Promise.resolve(!1)).then((function(t){Q=t}));var o=l.cib_can_use_region().then((function(t){C=t}));return this.__initPromise=Promise.all([A,n,a,o]).then((function(){return e})),this.__initPromise},M.prototype.__invokeResize=function(t,e){var r=this;return e.__mathCache=e.__mathCache||{},Promise.resolve().then((function(){return r.features.ww?new Promise((function(i,n){var a=r.__workersPool.acquire();e.cancelToken&&e.cancelToken.catch((function(t){return n(t)})),a.value.onmessage=function(t){a.release(),t.data.err?n(t.data.err):i(t.data)};var A=[];t.src&&A.push(t.src.buffer),t.srcBitmap&&A.push(t.srcBitmap),a.value.postMessage({opts:t,features:r.__requested_features,preload:{wasm_nodule:r.__mathlib.__}},A)})):{data:r.__mathlib.resizeAndUnsharp(t,e.__mathCache)}}))},M.prototype.__extractTileData=function(t,e,r,i,n){if(this.features.ww&&Q&&(l.isCanvas(e)||C))return this.debug("Create tile for OffscreenCanvas"),createImageBitmap(i.srcImageBitmap||e,t.x,t.y,t.width,t.height).then((function(t){return n.srcBitmap=t,n}));if(l.isCanvas(e))return i.srcCtx||(i.srcCtx=e.getContext("2d",{alpha:Boolean(r.alpha)})),this.debug("Get tile pixel data"),n.src=i.srcCtx.getImageData(t.x,t.y,t.width,t.height).data,n;this.debug("Draw tile imageBitmap/image to temporary canvas");var a=this.options.createCanvas(t.width,t.height),A=a.getContext("2d",{alpha:Boolean(r.alpha)});return A.globalCompositeOperation="copy",A.drawImage(i.srcImageBitmap||e,t.x,t.y,t.width,t.height,0,0,t.width,t.height),this.debug("Get tile pixel data"),n.src=A.getImageData(0,0,t.width,t.height).data,a.width=a.height=0,n},M.prototype.__landTileData=function(t,e,r){var i;if(this.debug("Convert raw rgba tile result to ImageData"),e.bitmap)return r.toCtx.drawImage(e.bitmap,t.toX,t.toY),null;if(b)i=new ImageData(new Uint8ClampedArray(e.data),t.toWidth,t.toHeight);else if((i=r.toCtx.createImageData(t.toWidth,t.toHeight)).data.set)i.data.set(e.data);else for(var n=i.data.length-1;n>=0;n--)i.data[n]=e.data[n];return this.debug("Draw tile"),I?r.toCtx.putImageData(i,t.toX,t.toY,t.toInnerX-t.toX,t.toInnerY-t.toY,t.toInnerWidth+1e-5,t.toInnerHeight+1e-5):r.toCtx.putImageData(i,t.toX,t.toY,t.toInnerX-t.toX,t.toInnerY-t.toY,t.toInnerWidth,t.toInnerHeight),null},M.prototype.__tileAndResize=function(t,e,r){var i=this,n={srcCtx:null,srcImageBitmap:null,isImageBitmapReused:!1,toCtx:null},a=function(e){return i.__limit((function(){if(r.canceled)return r.cancelToken;var a={width:e.width,height:e.height,toWidth:e.toWidth,toHeight:e.toHeight,scaleX:e.scaleX,scaleY:e.scaleY,offsetX:e.offsetX,offsetY:e.offsetY,quality:r.quality,alpha:r.alpha,unsharpAmount:r.unsharpAmount,unsharpRadius:r.unsharpRadius,unsharpThreshold:r.unsharpThreshold};return i.debug("Invoke resize math"),Promise.resolve(a).then((function(a){return i.__extractTileData(e,t,r,n,a)})).then((function(t){return i.debug("Invoke resize math"),i.__invokeResize(t,r)})).then((function(t){return r.canceled?r.cancelToken:(n.srcImageData=null,i.__landTileData(e,t,n))}))}))};return Promise.resolve().then((function(){if(n.toCtx=e.getContext("2d",{alpha:Boolean(r.alpha)}),l.isCanvas(t))return null;if(l.isImageBitmap(t))return n.srcImageBitmap=t,n.isImageBitmapReused=!0,null;if(l.isImage(t))return v?(i.debug("Decode image via createImageBitmap"),createImageBitmap(t).then((function(t){n.srcImageBitmap=t})).catch((function(t){return null}))):null;throw new Error('Pica: ".from" should be Image, Canvas or ImageBitmap')})).then((function(){if(r.canceled)return r.cancelToken;i.debug("Calculate tiles");var t=p({width:r.width,height:r.height,srcTileSize:i.options.tile,toWidth:r.toWidth,toHeight:r.toHeight,destTileBorder:r.__destTileBorder}).map((function(t){return a(t)}));function A(t){t.srcImageBitmap&&(t.isImageBitmapReused||t.srcImageBitmap.close(),t.srcImageBitmap=null)}return i.debug("Process tiles"),Promise.all(t).then((function(){return i.debug("Finished!"),A(n),e}),(function(t){throw A(n),t}))}))},M.prototype.__processStages=function(t,e,r,n){var a=this;if(n.canceled)return n.cancelToken;var A,o=i(t.shift(),2),s=o[0],h=o[1],c=0===t.length;return n=u({},n,{toWidth:s,toHeight:h,quality:c?n.quality:Math.min(1,n.quality)}),c||(A=this.options.createCanvas(s,h)),this.__tileAndResize(e,c?r:A,n).then((function(){return c?r:(n.width=s,n.height=h,a.__processStages(t,A,r,n))})).then((function(t){return A&&(A.width=A.height=0),t}))},M.prototype.__resizeViaCreateImageBitmap=function(t,e,r){var i=this,n=e.getContext("2d",{alpha:Boolean(r.alpha)});return this.debug("Resize via createImageBitmap()"),createImageBitmap(t,{resizeWidth:r.toWidth,resizeHeight:r.toHeight,resizeQuality:l.cib_quality_name(r.quality)}).then((function(t){if(r.canceled)return r.cancelToken;if(!r.unsharpAmount)return n.drawImage(t,0,0),t.close(),n=null,i.debug("Finished!"),e;i.debug("Unsharp result");var a=i.options.createCanvas(r.toWidth,r.toHeight),A=a.getContext("2d",{alpha:Boolean(r.alpha)});A.drawImage(t,0,0),t.close();var o=A.getImageData(0,0,r.toWidth,r.toHeight);return i.__mathlib.unsharp_mask(o.data,r.toWidth,r.toHeight,r.unsharpAmount,r.unsharpRadius,r.unsharpThreshold),n.putImageData(o,0,0),a.width=a.height=0,o=A=a=n=null,i.debug("Finished!"),e}))},M.prototype.resize=function(t,e,r){var i=this;this.debug("Start resize...");var n=u({},B);if(isNaN(r)?r&&(n=u(n,r)):n=u(n,{quality:r}),n.toWidth=e.width,n.toHeight=e.height,n.width=t.naturalWidth||t.width,n.height=t.naturalHeight||t.height,0===e.width||0===e.height)return Promise.reject(new Error("Invalid output size: ".concat(e.width,"x").concat(e.height)));n.unsharpRadius>2&&(n.unsharpRadius=2),n.canceled=!1,n.cancelToken&&(n.cancelToken=n.cancelToken.then((function(t){throw n.canceled=!0,t}),(function(t){throw n.canceled=!0,t})));var a=3;return n.__destTileBorder=Math.ceil(Math.max(a,2.5*n.unsharpRadius|0)),this.init().then((function(){if(n.canceled)return n.cancelToken;if(i.features.cib)return i.__resizeViaCreateImageBitmap(t,e,n);if(!y){var r=new Error("Pica: cannot use getImageData on canvas, make sure fingerprinting protection isn't enabled");throw r.code="ERR_GET_IMAGE_DATA",r}var a=d(n.width,n.height,n.toWidth,n.toHeight,i.options.tile,n.__destTileBorder);return i.__processStages(a,t,e,n)}))},M.prototype.resizeBuffer=function(t){var e=this,r=u({},B,t);return this.init().then((function(){return e.__mathlib.resizeAndUnsharp(r)}))},M.prototype.toBlob=function(t,e,r){return e=e||"image/png",new Promise((function(i){if(t.toBlob)t.toBlob((function(t){return i(t)}),e,r);else if(t.convertToBlob)i(t.convertToBlob({type:e,quality:r}));else{for(var n=atob(t.toDataURL(e,r).split(",")[1]),a=n.length,A=new Uint8Array(a),o=0;o<a;o++)A[o]=n.charCodeAt(o);i(new Blob([A],{type:e}))}}))},M.prototype.debug=function(){},e.exports=M},{"./lib/mathlib":1,"./lib/pool":13,"./lib/stepper":14,"./lib/tiler":15,"./lib/utils":16,"./lib/worker":17,"object-assign":23,webworkify:24}]},{},[])("/index.js")}}]);
//# sourceMappingURL=58.1a9ed5c3.chunk.js.map
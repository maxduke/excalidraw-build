/*! For license information please see 54.a9ad95cd.chunk.js.LICENSE.txt */
(this.webpackJsonpexcalidraw=this.webpackJsonpexcalidraw||[]).push([[54],{221:function(e,t,i){"use strict";i.r(t);const n=async function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.name,a=arguments.length>3?arguments[3]:void 0;const r=[],c=[];for await(const o of e.values()){const s="".concat(i,"/").concat(o.name);"file"===o.kind?c.push(o.getFile().then((t=>(t.directoryHandle=e,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>s}))))):"directory"!==o.kind||!t||a&&a(o)||r.push(n(o,t,s,a))}return[...(await Promise.all(r)).flat(),...await Promise.all(c)]};t.default=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.recursive=e.recursive||!1;const t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn});return n(t,e.recursive,void 0,e.skipDirectory)}}}]);
//# sourceMappingURL=54.a9ad95cd.chunk.js.map
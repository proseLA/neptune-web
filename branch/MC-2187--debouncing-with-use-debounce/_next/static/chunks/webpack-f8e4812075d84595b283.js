!function(){"use strict";var e={},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,loaded:!1,exports:{}},u=!0;try{e[r].call(c.exports,c,c.exports,n),u=!1}finally{u&&delete t[r]}return c.loaded=!0,c.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,c){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],c=e[f][2];for(var i=!0,a=0;a<r.length;a++)(!1&c||u>=c)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(i=!1,c<u&&(u=c));i&&(e.splice(f--,1),t=o())}return t}c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[r,o,c]}}(),n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var c=Object.create(null);n.r(c);var u={};e=e||[null,t({}),t([]),t(t)];for(var i=2&o&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){u[e]=function(){return r[e]}}));return u.default=function(){return r},n.d(c,u),c}}(),n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))},n.u=function(e){return"static/chunks/"+e+"."+{405:"6e04e4c743eebf93e5a1",563:"38294a618de3dec67750",1096:"84b0f01ada00bffaf5b8",2066:"200a14f5f91cf696f6b6",3535:"11bab63a087f8f86933b",4309:"9056ce2abe9ba9288cb4",4390:"f3f23a2ebeb5f87ee3e5",4832:"35e590ad8a7277ab28c7",5548:"2c8b7d50c9ab87d21894",5940:"6590c7a6baccf99a40fc",6138:"bd4520671edbcc297c22",7228:"53bfdcb6a99f6cd40aa8",7297:"919fd1372fb58eef8bd2",8886:"0bbee73ad6b0e8b90b76",9334:"58f6c4339cd71dfb1c7d",9622:"d34e51ace751b8488a6c"}[e]+".js"},n.miniCssF=function(e){return"static/css/4bfe397b4c28f21f7bd0.css"},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="_N_E:";n.l=function(r,o,c,u){if(e[r])e[r].push(o);else{var i,a;if(void 0!==c)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var l=f[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+c){i=l;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+c),i.src=r),e[r]=[o];var s=function(t,n){i.onerror=i.onload=null,clearTimeout(b);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),a&&document.head.appendChild(i)}}}(),n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},n.p="/neptune-web/branch/MC-2187--debouncing-with-use-debounce/_next/",function(){var e={2272:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(2272!=t){var c=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=c);var u=n.p+n.u(t),i=new Error;n.l(u,(function(r){if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var c=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+c+": "+u+")",i.name="ChunkLoadError",i.type=c,i.request=u,o[1](i)}}),"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,c,u=r[0],i=r[1],a=r[2],f=0;for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(a)var d=a(n);for(t&&t(r);f<u.length;f++)c=u[f],n.o(e,c)&&e[c]&&e[c][0](),e[u[f]]=0;return n.O(d)},r=self.webpackChunk_N_E=self.webpackChunk_N_E||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}()}();
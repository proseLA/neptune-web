!function(){"use strict";var e={},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,loaded:!1,exports:{}},i=!0;try{e[r].call(c.exports,c,c.exports,n),i=!1}finally{i&&delete t[r]}return c.loaded=!0,c.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,c){if(!r){var i=1/0;for(a=0;a<e.length;a++){r=e[a][0],o=e[a][1],c=e[a][2];for(var u=!0,f=0;f<r.length;f++)(!1&c||i>=c)&&Object.keys(n.O).every((function(e){return n.O[e](r[f])}))?r.splice(f--,1):(u=!1,c<i&&(i=c));u&&(e.splice(a--,1),t=o())}return t}c=c||0;for(var a=e.length;a>0&&e[a-1][2]>c;a--)e[a]=e[a-1];e[a]=[r,o,c]}}(),n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var c=Object.create(null);n.r(c);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&o&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return r[e]}}));return i.default=function(){return r},n.d(c,i),c}}(),n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))},n.u=function(e){return"static/chunks/"+e+"."+{405:"26423aceb7dda9cc05e3",563:"d1514b8961d523fbf3b4",1096:"fba1ab982356a2113d6d",2066:"a25e6c8eb1ae4530a71d",3535:"69ab924778028ab717de",4309:"ecf8db37a3afb1118d99",4390:"361a369f3c8e0ad4e887",4832:"f294f318a64065e28ac8",5548:"bb007a8e96ede68ea866",5940:"2b48cae5d284d5f9b2ef",6138:"248032d7641c36ede776",7228:"67280d5b6c22bde48567",7297:"32fcdf6769477929489c",8886:"596b5c1ca78bccbc6786",9334:"522e6e29b451968d238c",9622:"f2d446616ff40455abb4"}[e]+".js"},n.miniCssF=function(e){return"static/css/d11b8c454cf45847da8c.css"},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="_N_E:";n.l=function(r,o,c,i){if(e[r])e[r].push(o);else{var u,f;if(void 0!==c)for(var a=document.getElementsByTagName("script"),d=0;d<a.length;d++){var l=a[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+c){u=l;break}}u||(f=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+c),u.src=r),e[r]=[o];var s=function(t,n){u.onerror=u.onload=null,clearTimeout(b);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),f&&document.head.appendChild(u)}}}(),n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},n.p="/neptune-web/branch/rtl-with-css-logical-properties/_next/",function(){var e={2272:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(2272!=t){var c=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=c);var i=n.p+n.u(t),u=new Error;n.l(i,(function(r){if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var c=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+c+": "+i+")",u.name="ChunkLoadError",u.type=c,u.request=i,o[1](u)}}),"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,c,i=r[0],u=r[1],f=r[2],a=0;for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(f)var d=f(n);for(t&&t(r);a<i.length;a++)c=i[a],n.o(e,c)&&e[c]&&e[c][0](),e[i[a]]=0;return n.O(d)},r=self.webpackChunk_N_E=self.webpackChunk_N_E||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}()}();
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[77],{"+wNj":function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))},"0FSu":function(t,e,n){var r=n("IRf+"),o=n("g6a+"),a=n("N9G2"),c=n("tJVe"),i=n("aoZ+"),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,p=6==t,l=7==t,m=5==t||p;return function(y,d,v,b){for(var O,g,w=a(y),h=o(w),j=r(d,v,3),x=c(h.length),E=0,P=b||i,N=e?P(y,x):n||l?P(y,0):void 0;x>E;E++)if((m||E in h)&&(g=j(O=h[E],E,w),t))if(e)N[E]=g;else if(g)switch(t){case 3:return!0;case 5:return O;case 6:return E;case 2:u.call(N,O)}else switch(t){case 4:return!1;case 7:u.call(N,O)}return p?-1:s||f?f:N}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},GJtw:function(t,e,n){var r=n("ct80"),o=n("fVMg"),a=n("T+0C"),c=o("species");t.exports=function(t){return a>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},HbGN:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("+wNj");function o(t,e){if(null==t)return{};var n,o,a=Object(r.a)(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}},"IRf+":function(t,e,n){var r=n("hpdy");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},IjDp:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/InstructionsList",function(){return n("cpcP")}])},N9G2:function(t,e,n){var r=n("cww3");t.exports=function(t){return Object(r(t))}},"T+0C":function(t,e,n){var r,o,a=n("9JhN"),c=n("ZORK"),i=a.process,u=i&&i.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},ZORK:function(t,e,n){var r=n("VCi3");t.exports=r("navigator","userAgent")||""},ZVZ0:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("ERkP"),o=n.n(r);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=o.a.createContext({}),f=function(t){var e=o.a.useContext(s),n=e;return t&&(n="function"===typeof t?t(e):i(i({},e),t)),n},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},l=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),l=f(n),m=r,y=l["".concat(c,".").concat(m)]||l[m]||p[m]||a;return n?o.a.createElement(y,i(i({ref:e},s),{},{components:n})):o.a.createElement(y,i({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"===typeof t||r){var a=n.length,c=new Array(a);c[0]=l;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"===typeof t?t:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},ZrBu:function(t,e,n){"use strict";n("z84I");var r=n("ERkP"),o=n.n(r),a=n("/Vl7"),c=(n("9s95"),function(t){var e=t.dos,n=t.donts;return o.a.createElement("div",{className:"tw-instructions"},e.map((function(t,e){return o.a.createElement("div",{className:"instruction m-t-1",key:e},o.a.createElement(a.i,{size:24,className:"do"}),o.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},t))})),n.map((function(t,e){return o.a.createElement("div",{className:"instruction m-t-1",key:e},o.a.createElement(a.n,{size:24,className:"dont"}),o.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},t))})))});c.defaultProps={dos:[],donts:[]};var i=c;e.a=i},"aoZ+":function(t,e,n){var r=n("dSaG"),o=n("xt6W"),a=n("fVMg")("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},cpcP:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return f})),n.d(e,"default",(function(){return l}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),c=n.n(a),i=n("ZVZ0"),u=n("Qi1R"),s=n("ZrBu"),f=(c.a.createElement,{name:"InstructionsList"}),p={meta:f};function l(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.a)("wrapper",Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)(u.b,{code:"<InstructionsList\n  dos={[\n    'Do an initial money transfer',\n    'Invite at least 3 friends',\n    'Convince them to use this amazing product',\n  ]}\n  donts={[\n    <>Paying extra <a href=\"\">hidden fees</a> for transfers</>, \n    'Use bad exchange rate'\n  ]}\n/>;\n",scope:{InstructionsList:s.a},mdxType:"LiveEditorBlock"}),Object(i.a)(u.a,{componentName:"InstructionsList",mdxType:"GeneratePropsTable"}))}l.isMDXComponent=!0},cxan:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},hpdy:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},xt6W:function(t,e,n){var r=n("amH4");t.exports=Array.isArray||function(t){return"Array"==r(t)}},z84I:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").map,a=n("GJtw"),c=n("znGZ"),i=a("map"),u=c("map");r({target:"Array",proto:!0,forced:!i||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},znGZ:function(t,e,n){var r=n("1Mu/"),o=n("ct80"),a=n("8aeu"),c=Object.defineProperty,i={},u=function(t){throw t};t.exports=function(t,e){if(a(i,t))return i[t];e||(e={});var n=[][t],s=!!a(e,"ACCESSORS")&&e.ACCESSORS,f=a(e,0)?e[0]:u,p=a(e,1)?e[1]:void 0;return i[t]=!!n&&!o((function(){if(s&&!r)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,f,p)}))}}},[["IjDp",0,1,2,6,3,5,4]]]);
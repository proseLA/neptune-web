_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[75],{"+wNj":function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))},"/ZZR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/DefinitionList",function(){return n("t7/X")}])},"0FSu":function(t,e,n){var r=n("IRf+"),o=n("g6a+"),i=n("N9G2"),a=n("tJVe"),u=n("aoZ+"),c=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,l=4==t,s=6==t,p=7==t,O=5==t||s;return function(y,m,d,v){for(var b,T,E=i(y),w=o(E),L=r(m,d,3),N=a(w.length),h=0,_=v||u,g=e?_(y,N):n||p?_(y,0):void 0;N>h;h++)if((O||h in w)&&(T=L(b=w[h],h,E),t))if(e)g[h]=T;else if(T)switch(t){case 3:return!0;case 5:return b;case 6:return h;case 2:c.call(g,b)}else switch(t){case 4:return!1;case 7:c.call(g,b)}return s?-1:f||l?l:g}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},"56Cj":function(t,e,n){var r=n("T+0C"),o=n("ct80");t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"7J1Q":function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).VERTICAL="VERTICAL",o.VERTICAL_TWO_COLUMN="VERTICAL_TWO_COLUMN",o.VERTICAL_ONE_COLUMN="VERTICAL_ONE_COLUMN",o.HORIZONTAL="HORIZONTAL",o.HORIZONTAL_JUSTIFIED="HORIZONTAL_JUSTIFIED",o.HORIZONTAL_LEFT_ALIGNED="HORIZONTAL_LEFT_ALIGNED",o.HORIZONTAL_RIGHT_ALIGNED="HORIZONTAL_RIGHT_ALIGNED"},GJtw:function(t,e,n){var r=n("ct80"),o=n("fVMg"),i=n("T+0C"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},HbGN:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("+wNj");function o(t,e){if(null==t)return{};var n,o,i=Object(r.a)(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},"IRf+":function(t,e,n){var r=n("hpdy");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"KEM+":function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.default=t.exports,t.exports.__esModule=!0},LW0h:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").filter;r({target:"Array",proto:!0,forced:!n("GJtw")("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},"T+0C":function(t,e,n){var r,o,i=n("9JhN"),a=n("ZORK"),u=i.process,c=u&&u.versions,f=c&&c.v8;f?o=(r=f.split("."))[0]<4?1:r[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},TbR9:function(t,e,n){var r=n("56Cj");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},WuAH:function(t,e,n){"use strict";var r,o=n("KEM+"),i=n.n(o),a=(n("z84I"),n("LW0h"),n("ERkP")),u=n.n(a),c=n("O94r"),f=n.n(c),l=n("7J1Q"),s=(n("alEp"),function(t){return 0<=[l.a.HORIZONTAL_LEFT_ALIGNED,l.a.HORIZONTAL_RIGHT_ALIGNED,l.a.HORIZONTAL_JUSTIFIED].indexOf(t)}),p=(r={},i()(r,l.a.HORIZONTAL_RIGHT_ALIGNED,"text-sm-right"),i()(r,l.a.HORIZONTAL_JUSTIFIED,"text-sm-justify"),r),O=function(t){var e=t.definitions,n=t.layout,r=t.muted;return u.a.createElement("dl",{className:f()("tw-definition-list d-flex ",{"text-muted":r,"flex-column":n===l.a.VERTICAL_ONE_COLUMN,"tw-definition-list--columns flex-column flex-row--sm":n===l.a.VERTICAL_TWO_COLUMN,"tw-definition-list--horizontal flex-column":s(n)})},e.filter((function(t){return t})).map((function(t){var e=t.title,r=t.value,o=t.key;return u.a.createElement("div",{className:"tw-definition-list__item",key:o},u.a.createElement("dt",null,e),u.a.createElement("dd",{className:p[n]||""},r))})))};O.defaultProps={definitions:[],layout:l.a.VERTICAL_TWO_COLUMN,muted:!1},e.a=O},ZORK:function(t,e,n){var r=n("VCi3");t.exports=r("navigator","userAgent")||""},ZVZ0:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n("ERkP"),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var f=o.a.createContext({}),l=function(t){var e=o.a.useContext(f),n=e;return t&&(n="function"===typeof t?t(e):u(u({},e),t)),n},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},p=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,f=c(t,["components","mdxType","originalType","parentName"]),p=l(n),O=r,y=p["".concat(a,".").concat(O)]||p[O]||s[O]||i;return n?o.a.createElement(y,u(u({ref:e},f),{},{components:n})):o.a.createElement(y,u({ref:e},f))}));function O(t,e){var n=arguments,r=e&&e.mdxType;if("string"===typeof t||r){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"===typeof t?t:r,a[1]=u;for(var f=2;f<i;f++)a[f]=n[f];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},alEp:function(t,e,n){},"aoZ+":function(t,e,n){var r=n("dSaG"),o=n("xt6W"),i=n("fVMg")("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},cxan:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},fVMg:function(t,e,n){var r=n("9JhN"),o=n("TN3B"),i=n("8aeu"),a=n("HYrn"),u=n("56Cj"),c=n("TbR9"),f=o("wks"),l=r.Symbol,s=c?l:l&&l.withoutSetter||a;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(l,t)?f[t]=l[t]:f[t]=s("Symbol."+t)),f[t]}},hpdy:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"t7/X":function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return p})),n.d(e,"default",(function(){return y}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),u=n("ZVZ0"),c=n("Qi1R"),f=n("WuAH"),l=n("7J1Q"),s=["components"],p=(a.a.createElement,{name:"DefinitionList"}),O={meta:p};function y(t){var e=t.components,n=Object(o.a)(t,s);return Object(u.a)("wrapper",Object(r.a)({},O,n,{components:e,mdxType:"MDXLayout"}),Object(u.a)(c.b,{code:"<DefinitionList\n  layout={Layout.VERTICAL_TWO_COLUMN}\n  muted={false}\n  definitions={[\n    {\n      title: 'A simple title',\n      value: 'A simple value',\n      key: 'first',\n    },\n    {\n      title: <span>Use wrapper elements to style</span>,\n      value: <span className=\"h3\">89.45GBP</span>,\n      key: 'second',\n    },\n    {\n      title: 'Long strings will wrap',\n      value: 'And values with long words will eventuallybreakontothenextline',\n      key: 'third',\n    },\n  ]}\n/>;\n",scope:{DefinitionList:f.a,Layout:l.a},mdxType:"LiveEditorBlock"}),Object(u.a)(c.a,{componentName:"DefinitionList",mdxType:"GeneratePropsTable"}))}y.isMDXComponent=!0},xt6W:function(t,e,n){var r=n("amH4");t.exports=Array.isArray||function(t){return"Array"==r(t)}},z84I:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").map;r({target:"Array",proto:!0,forced:!n("GJtw")("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}},[["/ZZR",0,1,2,3,5,4]]]);
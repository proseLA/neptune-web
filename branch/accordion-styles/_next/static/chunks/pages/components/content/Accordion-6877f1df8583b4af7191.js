_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[69],{"+KXO":function(n,t,e){var r=e("ax0f"),o=e("N9G2"),i=e("DEeE");r({target:"Object",stat:!0,forced:e("ct80")((function(){i(1)}))},{keys:function(n){return i(o(n))}})},"6U7i":function(n,t,e){"use strict";var r=e("1Mu/"),o=e("9JhN"),i=e("66wQ"),a=e("uLp7"),c=e("8aeu"),u=e("amH4"),l=e("j6nH"),f=e("CD8Q"),s=e("ct80"),d=e("guiJ"),m=e("ZdBB").f,p=e("GFpt").f,v=e("q9+l").f,h=e("Ya2h").trim,b=o.Number,y=b.prototype,E="Number"==u(d(y)),N=function(n){var t,e,r,o,i,a,c,u,l=f(n,!1);if("string"==typeof l&&l.length>2)if(43===(t=(l=h(l)).charCodeAt(0))||45===t){if(88===(e=l.charCodeAt(2))||120===e)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(a=(i=l.slice(2)).length,c=0;c<a;c++)if((u=i.charCodeAt(c))<48||u>o)return NaN;return parseInt(i,r)}return+l};if(i("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var g,x=function(n){var t=arguments.length<1?0:n,e=this;return e instanceof x&&(E?s((function(){y.valueOf.call(e)})):"Number"!=u(e))?l(new b(N(t)),e,x):N(t)},I=r?m(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;I.length>T;T++)c(b,g=I[T])&&!c(x,g)&&v(x,g,p(b,g));x.prototype=y,y.constructor=x,a(o,"Number",x)}},"97Jx":function(n,t){function e(){return n.exports=e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},e.apply(this,arguments)}n.exports=e},AXuR:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"e",(function(){return c})),e.d(t,"d",(function(){return u}));e("jQ3i"),e("KqXw"),e("MvUL"),e("tVqn");var r="en-GB",o=["he-IL"],i=["en","ja","de","es","fr","hu","id","it","pl","pt","ro","ru","tr","uk","zh"];function a(n){if(!n||0===n.trim().length)return null;try{return new Intl.Locale(n.trim().replace("_","-")).baseName}catch(n){return console.error(n),null}}function c(n){var t=a(n);if(null===t)return null;try{var e=new Intl.Locale(t).language;return i.includes(e)?e:null}catch(n){return console.error(n),null}}var u=function(n){var t=a(n);if(null===t)return null;try{var e=new Intl.Locale(t).region;return null!==e&&void 0!==e?e:null}catch(n){return console.error(n),null}}},EUyq:function(n,t,e){"use strict";var r,o;e.d(t,"a",(function(){return r})),(o=r||(r={})).LIGHT="light",o.DARK="dark"},Hi8P:function(n,t,e){"use strict";var r,o=e("KEM+"),i=e.n(o),a=(e("J/fC"),e("ERkP")),c=e.n(a),u=e("O94r"),l=e.n(u),f=e("/Vl7"),s=e("VehP"),d=e("eKd8"),m=(r={},i()(r,s.a.EXTRA_SMALL,10),i()(r,s.a.SMALL,16),i()(r,s.a.MEDIUM,24),r),p=function(n){var t=n.className;return c.a.createElement("span",{className:l()("tw-icon","tw-icon-chevron",t),role:"presentation","aria-hidden":!0},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",focusable:"false"},c.a.createElement("path",{fillRule:"evenodd",d:"M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"})))};p.defaultProps={className:null};var v=function(n){var t=n.orientation,e=n.size,r=n.disabled,o=n.className,i=l()("tw-chevron",{"chevron-color":!r},"".concat([t]).toLowerCase(),o),a=m[e];return e===s.a.EXTRA_SMALL?c.a.createElement(p,{className:i}):c.a.createElement(f.k,{className:i,size:a})};v.defaultProps={orientation:d.a.BOTTOM,size:s.a.SMALL,disabled:!1,className:null},t.a=v},"J/fC":function(n,t,e){},RhWx:function(n,t,e){var r=e("tGbD"),o=e("twbh"),i=e("peMk"),a=e("d8WC");n.exports=function(n){return r(n)||o(n)||i(n)||a()}},Ua7V:function(n,t){n.exports=function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return e}}},VehP:function(n,t,e){"use strict";var r,o;e.d(t,"a",(function(){return r})),(o=r||(r={})).EXTRA_SMALL="xs",o.SMALL="sm",o.MEDIUM="md",o.LARGE="lg",o.EXTRA_LARGE="xl"},VrRy:function(n,t,e){"use strict";e.r(t),e.d(t,"meta",(function(){return w})),e.d(t,"default",(function(){return L}));var r=e("cxan"),o=e("HbGN"),i=e("ERkP"),a=e.n(i),c=e("ZVZ0"),u=e("Qi1R"),l=(e("z84I"),e("97Jx")),f=e.n(l),s=e("RhWx"),d=e.n(s),m=e("ddV6"),p=e.n(m),v=e("O94r"),h=e.n(v),b=e("v1+v"),y=e("Hi8P"),E=e("eKd8"),N=e("EUyq"),g=e("uIuh"),x=function(n){var t=n.id,e=n.title,r=n.content,o=n.onClick,c=n.open,u=n.icon,l=n.theme,f=u?Object(i.cloneElement)(u,{size:24}):null,s=Object(g.a)().isRTL;return a.a.createElement("div",{id:t,className:h()("tw-accordion-item decision p-a-0","tw-accordion-item--".concat(l),{closed:!c})},a.a.createElement("button",{type:"button","aria-expanded":c,onClick:o,className:h()("tw-accordion-item btn btn-link p-x-0 text-no-decoration p-t-3",{"p-b-3":!c,"p-b-2":c})},a.a.createElement("div",{className:"media"},u&&a.a.createElement("div",{className:h()("hidden-xs hidden-sm",{"media-left":!s,"media-right":s,"p-r-2":!s,"p-l-2":s})},f),a.a.createElement("div",{className:h()("media-body title",{"text-xs-left":!s,"text-xs-right":s})},Object(b.i)(e)?a.a.createElement("span",{className:"h5 tw-accordion-item__title"},e):e),a.a.createElement("div",{className:"media-right d-flex align-items-center"},a.a.createElement(y.a,{orientation:c?E.a.TOP:E.a.BOTTOM})))),a.a.createElement("div",{className:"accordion-content media"},a.a.createElement("div",{className:h()("media-body p-b-3",{"m-l-5":u||s,"m-r-5":u}),"aria-hidden":!c},r)))};x.defaultProps={icon:null,id:null,theme:N.a.LIGHT};var I=x,T=(e("cnZ1"),function(n){var t=n.items,e=n.onClick,r=n.indexOpen,o=n.theme,c=Object(i.useState)((function(){return t.map((function(n,t){return t===r}))})),u=p()(c,2),l=u[0],s=u[1];return t.map((function(n,t){return a.a.createElement(I,f()({key:n.id||t,onClick:function(){return function(n){e&&e(n);var t=d()(l);t[n]=!l[n],s(t)}(t)},open:l[t]},n,{theme:o}))}))});T.defaultProps={indexOpen:-1,onClick:null,theme:N.a.LIGHT};var A=T,O=e("/Vl7"),w=(a.a.createElement,{name:"Accordion"}),k={meta:w};function L(n){var t=n.components,e=Object(o.a)(n,["components"]);return Object(c.a)("wrapper",Object(r.a)({},k,e,{components:t,mdxType:"MDXLayout"}),Object(c.a)(u.b,{code:"<Accordion\n  indexOpen={1}\n  items={[\n    {\n      title: 'Item 1',\n      content: 'I can be text',\n      icon: <Freeze size={24} />,\n    },\n    {\n      title: 'Item 2 with icon',\n      content: <span>I can be a node</span>,\n      icon: <Emoji size={24} />,\n    },\n    {\n      title: 'Item 3',\n      content: 'I can be text',\n      icon: <New size={24} />,\n    },\n  ]}\n/>;\n",scope:{Accordion:A,New:O.v,Emoji:O.o,Freeze:O.q},mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Accordion",mdxType:"GeneratePropsTable"}))}L.isMDXComponent=!0},"X+oG":function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return c}));e("vrRf");var r=e("ERkP"),o=e.n(r),i=e("AXuR"),a=o.a.createContext("ltr"),c=function(n){var t=n.locale,e=n.children;return o.a.createElement(a.Provider,{value:-1<i.b.indexOf(t)?"rtl":"ltr"},e)};c.defaultProps={children:null,locale:i.a}},d8WC:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},ddV6:function(n,t,e){var r=e("qPgQ"),o=e("Ua7V"),i=e("peMk"),a=e("f2kJ");n.exports=function(n,t){return r(n)||o(n,t)||i(n,t)||a()}},eKd8:function(n,t,e){"use strict";var r,o;e.d(t,"a",(function(){return r})),(o=r||(r={})).BOTTOM="bottom",o.BOTTOM_LEFT="bottom-left",o.BOTTOM_RIGHT="bottom-right",o.CENTER="center",o.LEFT="left",o.LEFT_TOP="left-top",o.RIGHT="right",o.RIGHT_TOP="right-top",o.TOP="top"},f2kJ:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},iQ7j:function(n,t){n.exports=function(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}},mVF9:function(n,t,e){var r=e("ct80"),o=e("+/eK");n.exports=function(n){return r((function(){return!!o[n]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[n]()||o[n].name!==n}))}},peMk:function(n,t,e){var r=e("iQ7j");n.exports=function(n,t){if(n){if("string"===typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}},qPgQ:function(n,t){n.exports=function(n){if(Array.isArray(n))return n}},ssvU:function(n,t,e){e("ax0f")({target:"Number",stat:!0},{isNaN:function(n){return n!=n}})},t1Iz:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Accordion",function(){return e("VrRy")}])},tGbD:function(n,t,e){var r=e("iQ7j");n.exports=function(n){if(Array.isArray(n))return r(n)}},tVqn:function(n,t,e){"use strict";var r=e("ax0f"),o=e("Ya2h").trim;r({target:"String",proto:!0,forced:e("mVF9")("trim")},{trim:function(){return o(this)}})},twbh:function(n,t){n.exports=function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}},uIuh:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("ERkP"),o=e("X+oG"),i=function(){var n=Object(r.useContext)(o.a);return{direction:n,isRTL:"rtl"===n}}},"v1+v":function(n,t,e){"use strict";e.d(t,"r",(function(){return s})),e.d(t,"o",(function(){return d})),e.d(t,"l",(function(){return m})),e.d(t,"q",(function(){return p})),e.d(t,"m",(function(){return v})),e.d(t,"p",(function(){return h})),e.d(t,"n",(function(){return b})),e.d(t,"k",(function(){return y})),e.d(t,"i",(function(){return r})),e.d(t,"g",(function(){return o})),e.d(t,"d",(function(){return i})),e.d(t,"b",(function(){return a})),e.d(t,"h",(function(){return c})),e.d(t,"a",(function(){return u})),e.d(t,"f",(function(){return l})),e.d(t,"j",(function(){return f})),e.d(t,"c",(function(){return E})),e.d(t,"e",(function(){return g}));e("iKE+"),e("KqXw"),e("DZ+c"),e("6U7i"),e("ssvU");var r=function(n){return"string"==typeof n},o=function(n){return"number"==typeof n&&!Number.isNaN(n)},i=function(n){return o(n)&&Math.floor(n)===n},a=function(n){return"boolean"==typeof n},c=function(n){return!l(n)&&!f(n)&&n.constructor===Object},u=function(n){return Array.isArray(n)},l=function(n){return null===n},f=function(n){return"undefined"==typeof n};function s(n,t){return!t||!f(n)}function d(n,t){return!o(t)||r(n)&&n.length>=t}function m(n,t){return!o(t)||r(n)&&n.length<=t}function p(n,t){try{var e=new RegExp(t);return"undefined"!=typeof n&&!!e.test(n)}catch(n){return!0}}function v(n,t){return!o(t)&&!r(t)||(o(n)||r(n))&&n<=t}function h(n,t){return!o(t)&&!r(t)||(o(n)||r(n))&&n>=t}function b(n,t){return!o(t)||u(n)&&n.length>=t}function y(n,t){return!o(t)||u(n)&&n.length<=t}e("+KXO");var E=function(n){return r(n)&&0===n.length||(c(n)||u(n))&&0===Object.keys(n).length},N=(e("vrRf"),{SPACE:{key:[" ","Spacebar"],keyCode:32},ENTER:{key:"Enter",keyCode:13},TAB:{key:"Tab",keyCode:9},ESCAPE:{key:"Escape",keyCode:27}}),g=function(n){var t=n.keyType,e=n.event;if(!t||!e)return!1;var r=t.toUpperCase(),o=N[r];if(!o)return!1;var i=e.key,a=e.keyCode;return i?u(o.key)?-1<o.key.indexOf(i):i===o.key:a===o.keyCode}},z84I:function(n,t,e){"use strict";var r=e("ax0f"),o=e("0FSu").map,i=e("GJtw"),a=e("znGZ"),c=i("map"),u=a("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(n){return o(this,n,arguments.length>1?arguments[1]:void 0)}})}},[["t1Iz",0,1,2,6,3,5,7,9,4]]]);
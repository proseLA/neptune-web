_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[87],{"+wNj":function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,"a",(function(){return r}))},"2G9S":function(t,e,n){"use strict";var r=n("ax0f"),o=n("ct80"),c=n("xt6W"),a=n("dSaG"),i=n("N9G2"),u=n("tJVe"),l=n("2sZ7"),p=n("aoZ+"),s=n("GJtw"),b=n("fVMg"),f=n("T+0C"),y=b("isConcatSpreadable"),d=f>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),O=s("concat"),m=function(t){if(!a(t))return!1;var e=t[y];return void 0!==e?!!e:c(t)};r({target:"Array",proto:!0,forced:!d||!O},{concat:function(t){var e,n,r,o,c,a=i(this),s=p(a,0),b=0;for(e=-1,r=arguments.length;e<r;e++)if(m(c=-1===e?a:arguments[e])){if(b+(o=u(c.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,b++)n in c&&l(s,b,c[n])}else{if(b>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(s,b++,c)}return s.length=b,s}})},"2sZ7":function(t,e,n){"use strict";var r=n("CD8Q"),o=n("q9+l"),c=n("lhjL");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,c(0,n)):t[a]=n}},"56Cj":function(t,e,n){var r=n("ct80");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"97Jx":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},GJtw:function(t,e,n){var r=n("ct80"),o=n("fVMg"),c=n("T+0C"),a=o("species");t.exports=function(t){return c>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},HbGN:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("+wNj");function o(t,e){if(null==t)return{};var n,o,c=Object(r.a)(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}},"KEM+":function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},LdEA:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}},N9G2:function(t,e,n){var r=n("cww3");t.exports=function(t){return Object(r(t))}},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var c=typeof r;if("string"===c||"number"===c)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===c)for(var i in r)n.call(r,i)&&r[i]&&t.push(i)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},"T+0C":function(t,e,n){var r,o,c=n("9JhN"),a=n("ZORK"),i=c.process,u=i&&i.versions,l=u&&u.v8;l?o=(r=l.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},TbR9:function(t,e,n){var r=n("56Cj");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},URBt:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return T})),n.d(e,"default",(function(){return x}));var r=n("cxan"),o=n("HbGN"),c=n("ERkP"),a=n.n(c),i=n("ZVZ0"),u=n("Qi1R"),l=n("/Vl7"),p=(n("2G9S"),n("97Jx")),s=n.n(p),b=n("m3Bd"),f=n.n(b),y=n("O94r"),d=n.n(y),O=n("VMOe"),m=n("b2Zl"),j=(n("bKuS"),function(t){var e=t.className,n=t.children,r=t.disabled,o=t.icon,i=t.priority,u=t.type,l=f()(t,["className","children","disabled","icon","priority","type"]),p=d()("btn np-btn",m.b[u],m.a[i]),b=24===o.props.size?o:Object(c.cloneElement)(o,{size:24});return a.a.createElement("label",{className:"np-circular-btn ".concat(i," ").concat(u," ").concat(r?"disabled":""," ").concat(e)},a.a.createElement("input",s()({type:"button","aria-label":n,className:p,disabled:r},l)),b,a.a.createElement("span",{className:"np-circular-btn__label"},n))});j.Priority={PRIMARY:O.a.PRIMARY,SECONDARY:O.a.SECONDARY},j.Type=O.b,j.defaultProps={className:"",disabled:!1,priority:j.Priority.PRIMARY,type:j.Type.ACCENT};var v=j,T=(a.a.createElement,{name:"CircularButton",badge:{type:"new",expiryDate:"2021-04-14"}}),g={meta:T};function x(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.a)("wrapper",Object(r.a)({},g,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)(u.b,{code:"<CircularButton\n  icon={<Freeze />}\n  type={CircularButton.Type.ACCENT}\n  onClick={() => console.log('Button clicked')}\n>\n  Freeze\n</CircularButton>;\n",scope:{CircularButton:v,Freeze:l.p},mdxType:"LiveEditorBlock"}),Object(i.a)(u.a,{componentName:"CircularButton",mdxType:"GeneratePropsTable"}),Object(i.a)("h2",{id:"variants"},"Variants"),Object(i.a)("div",{className:"scroll-table"},Object(i.a)("table",{className:"docs-table table"},Object(i.a)("thead",null,Object(i.a)("tr",null,Object(i.a)("th",null,"Type"),Object(i.a)("th",null,"Priority"),Object(i.a)("th",null,"Preview"))),Object(i.a)("tbody",null,Object(i.a)("tr",null,Object(i.a)("td",null,"Accent"),Object(i.a)("td",null,"Primary"),Object(i.a)("td",null,Object(i.a)(v,{icon:Object(i.a)(l.p,{mdxType:"Freeze"}),type:v.Type.ACCENT,onClick:function(){return console.log("Button clicked")},mdxType:"CircularButton"},"Freeze"))),Object(i.a)("tr",null,Object(i.a)("td",null,"Accent"),Object(i.a)("td",null,"Secondary"),Object(i.a)("td",null,Object(i.a)(v,{icon:Object(i.a)(l.p,{mdxType:"Freeze"}),type:v.Type.ACCENT,priority:v.Priority.SECONDARY,onClick:function(){return console.log("Button clicked")},mdxType:"CircularButton"},"Freeze"))),Object(i.a)("tr",null,Object(i.a)("td",null,"Positive"),Object(i.a)("td",null,"Primary"),Object(i.a)("td",null,Object(i.a)(v,{icon:Object(i.a)(l.w,{mdxType:"Plus"}),type:v.Type.POSITIVE,onClick:function(){return console.log("Button clicked")},mdxType:"CircularButton"},"Add money"))),Object(i.a)("tr",null,Object(i.a)("td",null,"Positive"),Object(i.a)("td",null,"Secondary"),Object(i.a)("td",null,Object(i.a)(v,{icon:Object(i.a)(l.w,{mdxType:"Plus"}),type:v.Type.POSITIVE,priority:v.Priority.SECONDARY,onClick:function(){return console.log("Button clicked")},mdxType:"CircularButton"},"Add money"))),Object(i.a)("tr",null,Object(i.a)("td",null,"Negative"),Object(i.a)("td",null,"Primary"),Object(i.a)("td",null,Object(i.a)(v,{icon:Object(i.a)(l.d,{mdxType:"Bin"}),type:v.Type.NEGATIVE,onClick:function(){return console.log("Button clicked")},mdxType:"CircularButton"},"Delete"))),Object(i.a)("tr",null,Object(i.a)("td",null,"Negative"),Object(i.a)("td",null,"Secondary"),Object(i.a)("td",null,Object(i.a)(v,{icon:Object(i.a)(l.d,{mdxType:"Bin"}),type:v.Type.NEGATIVE,priority:v.Priority.SECONDARY,onClick:function(){return console.log("Button clicked")},mdxType:"CircularButton"},"Delete")))))))}x.isMDXComponent=!0},VMOe:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var r={ACCENT:"accent",POSITIVE:"positive",NEGATIVE:"negative"},o={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary"}},XL7h:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/CircularButton",function(){return n("URBt")}])},ZORK:function(t,e,n){var r=n("VCi3");t.exports=r("navigator","userAgent")||""},ZVZ0:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("ERkP"),o=n.n(r);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=o.a.createContext({}),p=function(t){var e=o.a.useContext(l),n=e;return t&&(n="function"===typeof t?t(e):i(i({},e),t)),n},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,c=t.originalType,a=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),b=p(n),f=r,y=b["".concat(a,".").concat(f)]||b[f]||s[f]||c;return n?o.a.createElement(y,i(i({ref:e},l),{},{components:n})):o.a.createElement(y,i({ref:e},l))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"===typeof t||r){var c=n.length,a=new Array(c);a[0]=b;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"===typeof t?t:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},"aoZ+":function(t,e,n){var r=n("dSaG"),o=n("xt6W"),c=n("fVMg")("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[c])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},b2Zl:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l}));var r,o,c=n("KEM+"),a=n.n(c),i=n("VMOe"),u=(r={},a()(r,i.b.ACCENT,"btn-accent"),a()(r,i.b.POSITIVE,"btn-positive"),a()(r,i.b.NEGATIVE,"btn-negative"),r),l=(o={},a()(o,i.a.PRIMARY,"btn-priority-1"),a()(o,i.a.SECONDARY,"btn-priority-2"),a()(o,i.a.TERTIARY,"btn-priority-3"),o)},cxan:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},fVMg:function(t,e,n){var r=n("9JhN"),o=n("TN3B"),c=n("8aeu"),a=n("HYrn"),i=n("56Cj"),u=n("TbR9"),l=o("wks"),p=r.Symbol,s=u?p:p&&p.withoutSetter||a;t.exports=function(t){return c(l,t)||(i&&c(p,t)?l[t]=p[t]:l[t]=s("Symbol."+t)),l[t]}},m3Bd:function(t,e,n){var r=n("LdEA");t.exports=function(t,e){if(null==t)return{};var n,o,c=r(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}},xt6W:function(t,e,n){var r=n("amH4");t.exports=Array.isArray||function(t){return"Array"==r(t)}}},[["XL7h",0,1,2,6,3,5,4]]]);
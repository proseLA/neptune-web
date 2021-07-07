_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[64],{"+KRd":function(e,t,r){"use strict";var n,o;r.d(t,"a",(function(){return n})),(o=n||(n={})).NEGATIVE="negative",o.NEUTRAL="neutral",o.POSITIVE="positive",o.WARNING="warning",o.INFO="info",o.ERROR="error",o.SUCCESS="success"},"+wNj":function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,"a",(function(){return n}))},"2G9S":function(e,t,r){"use strict";var n=r("ax0f"),o=r("ct80"),a=r("xt6W"),c=r("dSaG"),i=r("N9G2"),u=r("tJVe"),l=r("2sZ7"),s=r("aoZ+"),f=r("GJtw"),p=r("fVMg"),d=r("T+0C"),y=p("isConcatSpreadable"),O=d>=51||!o((function(){var e=[];return e[y]=!1,e.concat()[0]!==e})),m=f("concat"),b=function(e){if(!c(e))return!1;var t=e[y];return void 0!==t?!!t:a(e)};n({target:"Array",proto:!0,forced:!O||!m},{concat:function(e){var t,r,n,o,a,c=i(this),f=s(c,0),p=0;for(t=-1,n=arguments.length;t<n;t++)if(b(a=-1===t?c:arguments[t])){if(p+(o=u(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in a&&l(f,p,a[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(f,p++,a)}return f.length=p,f}})},"2sZ7":function(e,t,r){"use strict";var n=r("CD8Q"),o=r("q9+l"),a=r("lhjL");e.exports=function(e,t,r){var c=n(t);c in e?o.f(e,c,a(0,r)):e[c]=r}},"56Cj":function(e,t,r){var n=r("T+0C"),o=r("ct80");e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},"97Jx":function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},"9YoD":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts/InlineAlert",function(){return r("GBMp")}])},GBMp:function(e,t,r){"use strict";r.r(t),r.d(t,"meta",(function(){return p})),r.d(t,"default",(function(){return y}));var n=r("cxan"),o=r("HbGN"),a=r("ERkP"),c=r.n(a),i=r("ZVZ0"),u=r("Qi1R"),l=r("tFYr"),s=r("+KRd"),f=["components"],p=(c.a.createElement,{name:"InlineAlert"}),d={meta:p};function y(e){var t=e.components,r=Object(o.a)(e,f);return Object(i.a)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"The styling for the input (the coloured border) and the visibility of the inline alert is controlled through the use of ",Object(i.a)("code",null,"has-","*","*","*")," classes which are applied to the ",Object(i.a)("code",null,"form-group")," element. For example, to display an inline alert of type error, you must also apply the class ",Object(i.a)("code",null,"has-error")," to the parent ",Object(i.a)("code",null,"form-group")," element. The available classes are ",Object(i.a)("code",null,"has-error"),", ",Object(i.a)("code",null,"has-info"),", ",Object(i.a)("code",null,"has-warning")," and ",Object(i.a)("code",null,"has-success"),"."),Object(i.a)(u.b,{code:'() => {\n  return (\n    <>\n      {/* has-error, has-info, has-success, has-warning */}\n      <div className="form-group has-warning">\n        <label className="control-label" htmlFor="id">\n          Some text\n        </label>\n        <input type="text" className="form-control" id="id" />\n        <InlineAlert type={Sentiment.WARNING}>\n          Payments sent to your bank details today might not arrive in time for the holidays.\n        </InlineAlert>\n      </div>\n    </>\n  );\n};\n',scope:{InlineAlert:l.a,Sentiment:s.a},mdxType:"LiveEditorBlock"}),Object(i.a)(u.a,{componentName:"InlineAlert",mdxType:"GeneratePropsTable"}))}y.isMDXComponent=!0},GJtw:function(e,t,r){var n=r("ct80"),o=r("fVMg"),a=r("T+0C"),c=o("species");e.exports=function(e){return a>=51||!n((function(){var t=[];return(t.constructor={})[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},HbGN:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("+wNj");function o(e,t){if(null==e)return{};var r,o,a=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},"KEM+":function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},O94r:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===a)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},"T+0C":function(e,t,r){var n,o,a=r("9JhN"),c=r("ZORK"),i=a.process,u=i&&i.versions,l=u&&u.v8;l?o=(n=l.split("."))[0]<4?1:n[0]+n[1]:c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(o=n[1]),e.exports=o&&+o},TbR9:function(e,t,r){var n=r("56Cj");e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},XU0q:function(e,t,r){"use strict";var n,o;r.d(t,"a",(function(){return n})),(o=n||(n={})).TOP_LEFT="up-left",o.TOP="up-center",o.TOP_RIGHT="up-right",o.BOTTOM_LEFT="down-left",o.BOTTOM="down-center",o.BOTTOM_RIGHT="down-right"},ZORK:function(e,t,r){var n=r("VCi3");e.exports=n("navigator","userAgent")||""},ZVZ0:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("ERkP"),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"===typeof e?e(t):i(i({},t),e)),r},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,y=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return r?o.a.createElement(y,i(i({ref:t},l),{},{components:r})):o.a.createElement(y,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"===typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},"aoZ+":function(e,t,r){var n=r("dSaG"),o=r("xt6W"),a=r("fVMg")("species");e.exports=function(e,t){var r;return o(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},cxan:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},fO07:function(e,t,r){"use strict";var n=r("97Jx"),o=r.n(n),a=(r("2G9S"),r("ERkP")),c=r.n(a),i=r("O94r"),u=r.n(i),l=r("XU0q");function s(e){if(e){var t=["arrow"],r=l.a.BOTTOM,n=l.a.BOTTOM_LEFT,o=l.a.BOTTOM_RIGHT,a=l.a.TOP,c=l.a.TOP_RIGHT,i=l.a.TOP_LEFT;switch(e){case r:return t.concat("arrow-bottom","arrow-center");case n:return t.concat("arrow-bottom","arrow-left");case o:return t.concat("arrow-bottom","arrow-right");case a:return t.concat("arrow-center");case c:return t.concat("arrow-right");case i:default:return t}}return""}t.a=function(e,t){var r=function(r){return c.a.createElement(e,o()({},r,{className:u()(r.className,s(t)),arrow:void 0}))};return r.defaultProps={className:void 0},r}},fVMg:function(e,t,r){var n=r("9JhN"),o=r("TN3B"),a=r("8aeu"),c=r("HYrn"),i=r("56Cj"),u=r("TbR9"),l=o("wks"),s=n.Symbol,f=u?s:s&&s.withoutSetter||c;e.exports=function(e){return a(l,e)&&(i||"string"==typeof l[e])||(i&&a(s,e)?l[e]=s[e]:l[e]=f("Symbol."+e)),l[e]}},tFYr:function(e,t,r){"use strict";var n=r("KEM+"),o=r.n(n),a=r("ERkP"),c=r.n(a),i=r("O94r"),u=r.n(i),l=r("+KRd"),s=r("fO07"),f=r("XU0q"),p=o()({},l.a.ERROR,"danger"),d=function(e){var t=Object(s.a)((function(e){var t=e.children,r=e.className,n=e.type,o="alert-".concat(p[n]||n);return c.a.createElement("div",{role:"alert",className:u()("alert alert-detach p-x-2 p-y-1",o,r)},t)}),f.a.TOP_LEFT);return c.a.createElement(t,e)};d.defaultProps={className:void 0,type:l.a.INFO},t.a=d},xt6W:function(e,t,r){var n=r("amH4");e.exports=Array.isArray||function(e){return"Array"==n(e)}}},[["9YoD",0,1,2,3,4]]]);
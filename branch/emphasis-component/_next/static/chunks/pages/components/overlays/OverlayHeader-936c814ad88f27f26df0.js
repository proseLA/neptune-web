_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[117],{"+4rU":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/overlays/OverlayHeader",function(){return r("XZBA")}])},"+KXO":function(e,t,r){var n=r("ax0f"),a=r("N9G2"),o=r("DEeE");n({target:"Object",stat:!0,forced:r("ct80")((function(){o(1)}))},{keys:function(e){return o(a(e))}})},"+wNj":function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},"1IsZ":function(e,t,r){var n=r("ax0f"),a=r("YAkj").values;n({target:"Object",stat:!0},{values:function(e){return a(e)}})},"2G9S":function(e,t,r){"use strict";var n=r("ax0f"),a=r("ct80"),o=r("xt6W"),i=r("dSaG"),c=r("N9G2"),u=r("tJVe"),l=r("2sZ7"),s=r("aoZ+"),f=r("GJtw"),p=r("fVMg"),d=r("T+0C"),v=p("isConcatSpreadable"),m=d>=51||!a((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),g=f("concat"),y=function(e){if(!i(e))return!1;var t=e[v];return void 0!==t?!!t:o(e)};n({target:"Array",proto:!0,forced:!m||!g},{concat:function(e){var t,r,n,a,o,i=c(this),f=s(i,0),p=0;for(t=-1,n=arguments.length;t<n;t++)if(y(o=-1===t?i:arguments[t])){if(p+(a=u(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<a;r++,p++)r in o&&l(f,p,o[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(f,p++,o)}return f.length=p,f}})},"2sZ7":function(e,t,r){"use strict";var n=r("CD8Q"),a=r("q9+l"),o=r("lhjL");e.exports=function(e,t,r){var i=n(t);i in e?a.f(e,i,o(0,r)):e[i]=r}},"34wW":function(e,t,r){var n=r("amH4"),a=r("QsUS");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"4/YM":function(e,t,r){"use strict";var n=r("t/tF").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"56Cj":function(e,t,r){var n=r("T+0C"),a=r("ct80");e.exports=!!Object.getOwnPropertySymbols&&!a((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},"7J1Q":function(e,t,r){"use strict";var n,a;r.d(t,"a",(function(){return n})),(a=n||(n={})).VERTICAL="VERTICAL",a.VERTICAL_TWO_COLUMN="VERTICAL_TWO_COLUMN",a.VERTICAL_ONE_COLUMN="VERTICAL_ONE_COLUMN",a.HORIZONTAL="HORIZONTAL",a.HORIZONTAL_JUSTIFIED="HORIZONTAL_JUSTIFIED",a.HORIZONTAL_LEFT_ALIGNED="HORIZONTAL_LEFT_ALIGNED",a.HORIZONTAL_RIGHT_ALIGNED="HORIZONTAL_RIGHT_ALIGNED"},"7xRU":function(e,t,r){"use strict";var n=r("ax0f"),a=r("g6a+"),o=r("N4z3"),i=r("f4p7"),c=[].join,u=a!=Object,l=i("join",",");n({target:"Array",proto:!0,forced:u||!l},{join:function(e){return c.call(o(this),void 0===e?",":e)}})},"97Jx":function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},"9YZu":function(e,t,r){"use strict";var n=r("ERkP"),a=r.n(n),o=r("O94r"),i=r.n(o),c=r("h9gP"),u=r("VehP"),l=r("EUyq"),s=(r("DGa2"),function(e){var t=e.backgroundColor,r=e.children,n=e.className,o=e.outlined,c=e.size,u=e.theme,l=e.type;return a.a.createElement("div",{className:i()("tw-avatar",n,"tw-avatar--".concat(c),"tw-avatar--".concat(l),"tw-avatar--".concat(u),{"tw-avatar--outlined":o})},a.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:t||void 0}},r))});s.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:u.a.MEDIUM,theme:l.a.LIGHT,type:c.a.THUMBNAIL},t.a=s},BAoe:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n,a,o=r("D57K"),i=r("ERkP"),c=r("kQwz");!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(n||(n={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(a||(a={}));function u(e){var t=function(t){var r=Object(c.a)(),n=t.value,a=t.children,i=Object(o.c)(t,["value","children"]),u="string"===typeof n?new Date(n||0):n;return a("formatDate"===e?r.formatDateToParts(u,i):r.formatTimeToParts(u,i))};return t.displayName=a[e],t}function l(e){var t=function(t){var r=Object(c.a)(),n=t.value,a=t.children,u=Object(o.c)(t,["value","children"]),l=r[e](n,u);if("function"===typeof a)return a(l);var s=r.textComponent||i.Fragment;return i.createElement(s,null,l)};return t.displayName=n[e],t}function s(e){return e}l("formatDate"),l("formatTime"),l("formatNumber"),l("formatList"),l("formatDisplayName"),u("formatDate"),u("formatTime")},Bk02:function(e,t,r){"use strict";var n=r("KEM+"),a=r.n(n),o=r("ERkP"),i=r.n(o),c=r("O94r"),u=r.n(c),l=r("VehP"),s=r("EUyq");r("FkPD");t.a=function(e){var t,r=e.badge,n=e.className,o=void 0===n?void 0:n,c=e.size,f=void 0===c?l.a.SMALL:c,p=e.border,d=void 0===p?s.a.LIGHT:p,v=e.children,m=u()("tw-badge",(t={},a()(t,"tw-badge-border-".concat(d),d),a()(t,"tw-badge-".concat(f),f),t),o);return i.a.createElement("div",{className:m},i.a.createElement("div",{className:"tw-badge__children"},v),i.a.createElement("div",{className:"tw-badge__content"},r))}},DEeE:function(e,t,r){var n=r("yRya"),a=r("sX5C");e.exports=Object.keys||function(e){return n(e,a)}},DGa2:function(e,t,r){},EUyq:function(e,t,r){"use strict";var n,a;r.d(t,"a",(function(){return n})),(a=n||(n={})).LIGHT="light",a.DARK="dark"},Fr7r:function(e,t,r){"use strict";var n=r("ERkP"),a=r.n(n),o=r("O94r"),i=r.n(o),c=r("7J1Q"),u=a.a.forwardRef((function(e,t){var r=e.bottomContent,n=e.className,o=e.layout,u=e.leftContent,l=e.rightContent,s=o===c.a.VERTICAL;return a.a.createElement("div",{className:i()("np-header","d-flex","flex-wrap",n),ref:t},a.a.createElement("div",{className:i()("align-items-center","np-header__left","d-flex",{"flex__item--8":s})},u),a.a.createElement("div",{className:i()("align-items-center","d-flex","np-header__right","justify-content-end",{"flex__item--4 ":s,"order-2":!s})},l),a.a.createElement("div",{className:i()("align-items-center","d-flex","justify-content-center",{"flex__item--12":s,"order-1 flex-grow-1":!s})},r))}));u.defaultProps={bottomContent:void 0,className:void 0,layout:c.a.HORIZONTAL,leftContent:void 0,rightContent:void 0},t.a=u},FtHn:function(e,t,r){var n=r("ax0f"),a=r("1Mu/"),o=r("oD4t"),i=r("N4z3"),c=r("GFpt"),u=r("2sZ7");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){for(var t,r,n=i(e),a=c.f,l=o(n),s={},f=0;l.length>f;)void 0!==(r=a(n,t=l[f++]))&&u(s,t,r);return s}})},GJtw:function(e,t,r){var n=r("ct80"),a=r("fVMg"),o=r("T+0C"),i=a("species");e.exports=function(e){return o>=51||!n((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},GW4H:function(e,t,r){"use strict";var n,a;r.d(t,"a",(function(){return n})),(a=n||(n={})).BUSINESS="BUSINESS",a.PERSONAL="PERSONAL"},HbGN:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("+wNj");function a(e,t){if(null==e)return{};var r,a,o=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},"KEM+":function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},KcoV:function(e,t,r){},KqXw:function(e,t,r){"use strict";var n=r("ax0f"),a=r("QsUS");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},L2rT:function(e,t,r){"use strict";var n=r("ct80");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a},e.exports.default=e.exports,e.exports.__esModule=!0},"M+/F":function(e,t,r){"use strict";var n=r("ax0f"),a=r("dSaG"),o=r("xt6W"),i=r("mg+6"),c=r("tJVe"),u=r("N4z3"),l=r("2sZ7"),s=r("fVMg"),f=r("GJtw")("slice"),p=s("species"),d=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!f},{slice:function(e,t){var r,n,s,f=u(this),m=c(f.length),g=i(e,m),y=i(void 0===t?m:t,m);if(o(f)&&("function"!=typeof(r=f.constructor)||r!==Array&&!o(r.prototype)?a(r)&&null===(r=r[p])&&(r=void 0):r=void 0,r===Array||void 0===r))return d.call(f,g,y);for(n=new(void 0===r?Array:r)(v(y-g,0)),s=0;g<y;g++,s++)g in f&&l(n,s,f[g]);return n.length=s,n}})},O94r:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},QsUS:function(e,t,r){"use strict";var n=r("q/0V"),a=r("L2rT"),o=r("TN3B"),i=RegExp.prototype.exec,c=o("native-string-replace",String.prototype.replace),u=i,l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1];(l||f||s)&&(u=function(e){var t,r,a,o,u=this,p=s&&u.sticky,d=n.call(u),v=u.source,m=0,g=e;return p&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),g=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,m++),r=new RegExp("^(?:"+v+")",d)),f&&(r=new RegExp("^"+v+"$(?!\\s)",d)),l&&(t=u.lastIndex),a=i.call(p?r:u,g),p?a?(a.input=a.input.slice(m),a[0]=a[0].slice(m),a.index=u.lastIndex,u.lastIndex+=a[0].length):u.lastIndex=0:l&&a&&(u.lastIndex=u.global?a.index+a[0].length:t),f&&a&&a.length>1&&c.call(a[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a}),e.exports=u},Qzre:function(e,t,r){var n=r("FXyv"),a=r("hpdy"),o=r("fVMg")("species");e.exports=function(e,t){var r,i=n(e).constructor;return void 0===i||void 0==(r=n(i)[o])?t:a(r)}},"T+0C":function(e,t,r){var n,a,o=r("9JhN"),i=r("ZORK"),c=o.process,u=c&&c.versions,l=u&&u.v8;l?a=(n=l.split("."))[0]<4?1:n[0]+n[1]:i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(a=n[1]),e.exports=a&&+a},TbR9:function(e,t,r){var n=r("56Cj");e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},Te6E:function(e,t,r){"use strict";var n,a;r.d(t,"a",(function(){return n})),(a=n||(n={})).WISE="WISE",a.WISE_BUSINESS="WISE_BUSINESS"},Ua7V:function(e,t){e.exports=function(e,t){var r=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(u){c=!0,a=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}},e.exports.default=e.exports,e.exports.__esModule=!0},VehP:function(e,t,r){"use strict";var n,a;r.d(t,"a",(function(){return n})),(a=n||(n={})).EXTRA_SMALL="xs",a.SMALL="sm",a.MEDIUM="md",a.LARGE="lg",a.EXTRA_LARGE="xl"},XE1s:function(e,t,r){"use strict";var n=r("KEM+"),a=r.n(n),o=r("ddV6"),i=r.n(o),c=r("97Jx"),u=r.n(c),l=r("m3Bd"),s=r.n(l),f=(r("+KXO"),r("1t7P"),r("LW0h"),r("daRM"),r("+oxZ"),r("FtHn"),r("ho0z"),r("7xRU"),r("z84I"),r("KqXw"),r("Ysgh"),r("M+/F"),r("ERkP")),p=r.n(f),d=r("/Vl7"),v=r("9YZu"),m=r("h9gP"),g=r("Bk02"),y=r("GW4H"),b=r("VehP"),h=["url","children"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?x(Object(t),!0).forEach((function(r){a()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}var O=function(e){var t=e.url,r=e.children,n=s()(e,h);return t?p.a.createElement(g.a,u()({badge:p.a.createElement("img",{src:t,alt:""})},n),r):r};O.defaultProps={url:void 0};var S=function(e){var t=e.url,r=e.profileType,n=e.badgeUrl,a=e.name,o=e.avatarProps,c=e.badgeProps,l=Object(f.useState)(!1),s=i()(l,2),g=s[0],h=s[1],x=r===y.a.BUSINESS;return Object(f.useEffect)((function(){return h(!1)}),[t]),p.a.createElement(O,u()({url:n},c),p.a.createElement(v.a,u()({size:b.a.MEDIUM},E(t&&!g?{type:m.a.THUMBNAIL,children:p.a.createElement("img",{src:t,alt:"avatar",onError:function(){return h(!0)}})}:r?{type:m.a.ICON,children:x?p.a.createElement(d.f,null):p.a.createElement(d.y,null)}:a?{type:m.a.INITIALS,children:p.a.createElement("small",null,N(a))}:{type:m.a.ICON,children:p.a.createElement(d.y,null)},o))))};function N(e){var t=e.split(" ").map((function(e){return e[0]})).join("").toUpperCase();return 1===t.length?t[0]:t[0]+t.slice(-1)}S.defaultProps={url:void 0,profileType:void 0,badgeUrl:void 0,name:void 0,avatarProps:{},badgeProps:{}};var w=S;t.a=w},XZBA:function(e,t,r){"use strict";r.r(t),r.d(t,"meta",(function(){return h})),r.d(t,"default",(function(){return E}));var n=r("cxan"),a=r("HbGN"),o=r("ERkP"),i=r.n(o),c=r("ZVZ0"),u=r("Qi1R"),l=r("Fr7r"),s=r("qGsU"),f=(r("nKII"),r("jGnQ")),p=function(e){var t=e.avatar,r=e.onClose,n=e.logo,a=r&&i.a.createElement(s.a,{onClick:r});return i.a.createElement(l.a,{className:"np-overlay-header p-a-3",leftContent:n,rightContent:i.a.createElement(i.a.Fragment,null,t,t&&a&&i.a.createElement("span",{className:"separator"}),a)})};p.defaultProps={avatar:null,logo:i.a.createElement(f.a,null),onClose:null};var d=p,v=r("9YZu"),m=r("XE1s"),g=r("GW4H"),y=r("/Vl7"),b=["components"],h=(i.a.createElement,{name:"OverlayHeader"}),x={meta:h};function E(e){var t=e.components,r=Object(a.a)(e,b);return Object(c.a)("wrapper",Object(n.a)({},x,r,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Simple header component that displays a responsive logo an avatar and a close button.\nThe current and recommended size for logo is width = 138px height=24px."),Object(c.a)(u.b,{code:"<OverlayHeader\n  avatar={\n    <AvatarWrapper url=\"https://github.com/transferwise.png\" profileType={ProfileType.BUSINESS} />\n  }\n  logo={<Logo />}\n  onClose={() => console.log('Close clicked')}\n/>;\n",scope:{OverlayHeader:d,Avatar:v.a,BriefcaseIcon:y.f,ProfileIcon:y.y,AvatarWrapper:m.a,Logo:f.a,ProfileType:g.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"OverlayHeader",mdxType:"GeneratePropsTable"}))}E.isMDXComponent=!0},YAkj:function(e,t,r){var n=r("1Mu/"),a=r("DEeE"),o=r("N4z3"),i=r("4Sk5").f,c=function(e){return function(t){for(var r,c=o(t),u=a(c),l=u.length,s=0,f=[];l>s;)r=u[s++],n&&!i.call(c,r)||f.push(e?[r,c[r]]:c[r]);return f}};e.exports={entries:c(!0),values:c(!1)}},Ysgh:function(e,t,r){"use strict";var n=r("lbJE"),a=r("jl0/"),o=r("FXyv"),i=r("cww3"),c=r("Qzre"),u=r("4/YM"),l=r("tJVe"),s=r("34wW"),f=r("QsUS"),p=r("L2rT").UNSUPPORTED_Y,d=[].push,v=Math.min;n("split",2,(function(e,t,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var n=String(i(this)),o=void 0===r?4294967295:r>>>0;if(0===o)return[];if(void 0===e)return[n];if(!a(e))return t.call(n,e,o);for(var c,u,l,s=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,m=new RegExp(e.source,p+"g");(c=f.call(m,n))&&!((u=m.lastIndex)>v&&(s.push(n.slice(v,c.index)),c.length>1&&c.index<n.length&&d.apply(s,c.slice(1)),l=c[0].length,v=u,s.length>=o));)m.lastIndex===c.index&&m.lastIndex++;return v===n.length?!l&&m.test("")||s.push(""):s.push(n.slice(v)),s.length>o?s.slice(0,o):s}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var a=i(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,r):n.call(String(a),t,r)},function(e,a){var i=r(n,e,this,a,n!==t);if(i.done)return i.value;var f=o(e),d=String(this),m=c(f,RegExp),g=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(p?"g":"y"),b=new m(p?"^(?:"+f.source+")":f,y),h=void 0===a?4294967295:a>>>0;if(0===h)return[];if(0===d.length)return null===s(b,d)?[d]:[];for(var x=0,E=0,O=[];E<d.length;){b.lastIndex=p?0:E;var S,N=s(b,p?d.slice(E):d);if(null===N||(S=v(l(b.lastIndex+(p?E:0)),d.length))===x)E=u(d,E,g);else{if(O.push(d.slice(x,E)),O.length===h)return O;for(var w=1;w<=N.length-1;w++)if(O.push(N[w]),O.length===h)return O;E=x=S}}return O.push(d.slice(x)),O}]}),p)},ZORK:function(e,t,r){var n=r("VCi3");e.exports=n("navigator","userAgent")||""},ZVZ0:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("ERkP"),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"===typeof e?e(t):c(c({},t),e)),r},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,v=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return r?a.a.createElement(v,c(c({ref:t},l),{},{components:r})):a.a.createElement(v,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"===typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},"aoZ+":function(e,t,r){var n=r("dSaG"),a=r("xt6W"),o=r("fVMg")("species");e.exports=function(e,t){var r;return a(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!a(r.prototype)?n(r)&&null===(r=r[o])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},cxan:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},daRM:function(e,t,r){var n=r("ax0f"),a=r("ct80"),o=r("N4z3"),i=r("GFpt").f,c=r("1Mu/"),u=a((function(){i(1)}));n({target:"Object",stat:!0,forced:!c||u,sham:!c},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},ddV6:function(e,t,r){var n=r("qPgQ"),a=r("Ua7V"),o=r("peMk"),i=r("f2kJ");e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},fVMg:function(e,t,r){var n=r("9JhN"),a=r("TN3B"),o=r("8aeu"),i=r("HYrn"),c=r("56Cj"),u=r("TbR9"),l=a("wks"),s=n.Symbol,f=u?s:s&&s.withoutSetter||i;e.exports=function(e){return o(l,e)&&(c||"string"==typeof l[e])||(c&&o(s,e)?l[e]=s[e]:l[e]=f("Symbol."+e)),l[e]}},guiJ:function(e,t,r){var n,a=r("FXyv"),o=r("uZvN"),i=r("sX5C"),c=r("1odi"),u=r("kySU"),l=r("8r/q"),s=r("MyxS"),f=s("IE_PROTO"),p=function(){},d=function(e){return"<script>"+e+"<\/script>"},v=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}v=n?function(e){e.write(d("")),e.close();var t=e.parentWindow.Object;return e=null,t}(n):function(){var e,t=l("iframe");return t.style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F}();for(var e=i.length;e--;)delete v.prototype[i[e]];return v()};c[f]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(p.prototype=a(e),r=new p,p.prototype=null,r[f]=e):r=v(),void 0===t?r:o(r,t)}},h9gP:function(e,t,r){"use strict";var n,a;r.d(t,"a",(function(){return n})),(a=n||(n={})).THUMBNAIL="thumbnail",a.ICON="icon",a.EMOJI="emoji",a.INITIALS="initials"},ho0z:function(e,t,r){var n=r("1Mu/"),a=r("q9+l").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/;n&&!("name"in o)&&a(o,"name",{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(e){return""}}})},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},jGnQ:function(e,t,r){"use strict";r("2G9S");var n=r("ERkP"),a=r.n(n),o=r("O94r"),i=r.n(o),c=r("Te6E"),u=(r("tXN1"),{WISE:"brand_logo.svg",WISE_BUSINESS:"brand_logo_business.svg",WISE_INVERSE:"brand_logo_inverse.svg",WISE_BUSINESS_INVERSE:"brand_logo_business_inverse.svg"}),l=function(e){var t=e.className,r=e.inverse,n=e.type,o=u["".concat(n).concat(r?"_INVERSE":"")];return a.a.createElement("img",{className:i()("np-logo",t),alt:n===c.a.WISE?"Wise":"Wise business",src:"".concat("https://wise.com/public-resources/assets/logos/wise/").concat(o)})};l.defaultProps={className:void 0,inverse:!1,type:c.a.WISE},t.a=l},"jl0/":function(e,t,r){var n=r("dSaG"),a=r("amH4"),o=r("fVMg")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},kySU:function(e,t,r){var n=r("VCi3");e.exports=n("document","documentElement")},lbJE:function(e,t,r){"use strict";r("KqXw");var n=r("uLp7"),a=r("QsUS"),o=r("ct80"),i=r("fVMg"),c=r("WxKw"),u=i("species"),l=RegExp.prototype,s=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f="$0"==="a".replace(/./,"$0"),p=i("replace"),d=!!/./[p]&&""===/./[p]("a","$0"),v=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,p){var m=i(e),g=!o((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),y=g&&!o((function(){var t=!1,r=/a/;return"split"===e&&((r={}).constructor={},r.constructor[u]=function(){return r},r.flags="",r[m]=/./[m]),r.exec=function(){return t=!0,null},r[m](""),!t}));if(!g||!y||"replace"===e&&(!s||!f||d)||"split"===e&&!v){var b=/./[m],h=r(m,""[e],(function(e,t,r,n,o){var i=t.exec;return i===a||i===l.exec?g&&!o?{done:!0,value:b.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=h[0],E=h[1];n(String.prototype,e,x),n(l,m,2==t?function(e,t){return E.call(e,this,t)}:function(e){return E.call(e,this)})}p&&c(l[m],"sham",!0)}},m3Bd:function(e,t,r){var n=r("LdEA");e.exports=function(e,t){if(null==e)return{};var r,a,o=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},e.exports.default=e.exports,e.exports.__esModule=!0},peMk:function(e,t,r){var n=r("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},"q/0V":function(e,t,r){"use strict";var n=r("FXyv");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},qGsU:function(e,t,r){"use strict";r("1IsZ");var n=r("ERkP"),a=r.n(n),o=r("O94r"),i=r.n(o),c=r("kQwz"),u=r("/Vl7"),l=r("BAoe"),s=Object(l.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(r("KcoV"),a.a.forwardRef((function(e,t){var r=Object(c.a)(),n=e.onClick,o=e.className,l=e.size;return a.a.createElement("button",{ref:t,type:"button",className:i()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":l===f.Size.LARGE},o),"aria-label":r.formatMessage(s.ariaLabel),onClick:n},a.a.createElement(u.l,{size:l}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};t.a=f},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},"t/tF":function(e,t,r){var n=r("i7Kn"),a=r("cww3"),o=function(e){return function(t,r){var o,i,c=String(a(t)),u=n(r),l=c.length;return u<0||u>=l?e?"":void 0:(o=c.charCodeAt(u))<55296||o>56319||u+1===l||(i=c.charCodeAt(u+1))<56320||i>57343?e?c.charAt(u):o:e?c.slice(u,u+2):i-56320+(o-55296<<10)+65536}};e.exports={codeAt:o(!1),charAt:o(!0)}},uZvN:function(e,t,r){var n=r("1Mu/"),a=r("q9+l"),o=r("FXyv"),i=r("DEeE");e.exports=n?Object.defineProperties:function(e,t){o(e);for(var r,n=i(t),c=n.length,u=0;c>u;)a.f(e,r=n[u++],t[r]);return e}},xt6W:function(e,t,r){var n=r("amH4");e.exports=Array.isArray||function(e){return"Array"==n(e)}}},[["+4rU",0,1,2,6,3,5,8,10,4]]]);
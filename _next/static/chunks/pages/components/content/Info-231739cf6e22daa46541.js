_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[72],{"1IsZ":function(e,t,n){var a=n("ax0f"),r=n("YAkj").values;a({target:"Object",stat:!0},{values:function(e){return r(e)}})},"1Ix9":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n("cxan"),r=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("ZVZ0"),c=n("e0j8"),s=n("OUB3"),u=n("VehP"),f=n("Qi1R"),d=(i.a.createElement,{name:"Info"}),m={meta:d};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Opens a Popover or Modal based on presentation prop."),Object(l.a)("div",null,Object(l.a)(f.b,{code:'<Info\n  content="Your address has been verified, no more actions are required."\n  presentation={InfoPresentation.POPOVER}\n  size={Size.SMALL}\n  title="You entered your address"\n  aria-label="Click here for more details"\n/>;\n',scope:{Info:c.a,InfoPresentation:s.a,Size:u.a},mdxType:"LiveEditorBlock"}),Object(l.a)(f.a,{componentName:"Info",mdxType:"GeneratePropsTable"})))}p.isMDXComponent=!0},"2lU4":function(e,t,n){},"34wW":function(e,t,n){var a=n("amH4"),r=n("QsUS");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"4/YM":function(e,t,n){"use strict";var a=n("t/tF").charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},"5BfY":function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={}))[r.EXTRA_SMALL=480]="EXTRA_SMALL",r[r.SMALL=576]="SMALL",r[r.MEDIUM=768]="MEDIUM",r[r.LARGE=992]="LARGE",r[r.EXTRA_LARGE=1200]="EXTRA_LARGE"},BAoe:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,r,o=n("DIbr"),i=n("ERkP"),l=n("kQwz");!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(a||(a={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(r||(r={}));function c(e){var t=function(t){var n=Object(l.a)(),a=t.value,r=t.children,i=Object(o.c)(t,["value","children"]),c="string"===typeof a?new Date(a||0):a;return r("formatDate"===e?n.formatDateToParts(c,i):n.formatTimeToParts(c,i))};return t.displayName=r[e],t}function s(e){var t=function(t){var n=Object(l.a)(),a=t.value,r=t.children,c=Object(o.c)(t,["value","children"]),s=n[e](a,c);if("function"===typeof r)return r(s);var u=n.textComponent||i.Fragment;return i.createElement(u,null,s)};return t.displayName=a[e],t}function u(e){return e}s("formatDate"),s("formatTime"),s("formatNumber"),s("formatList"),s("formatDisplayName"),c("formatDate"),c("formatTime")},GAp3:function(e,t,n){"use strict";n("vrRf"),n("KqXw"),n("Ysgh");var a=n("97Jx"),r=n.n(a),o=n("KEM+"),i=n.n(o),l=n("m3Bd"),c=n.n(l),s=n("ERkP"),u=n.n(s),f=n("O94r"),d=n.n(f),m=n("05Xt"),p=(n("2lU4"),n("dLgZ")),v=n("eKd8"),E=n("VehP"),h=n("P8nL"),g=n("qGsU"),b=function(e){var t=e.title,n=e.body,a=e.footer,o=e.onClose,l=e.className,s=e.open,f=e.size,E=e.closeOnClick,b=e.scroll,x=e.position,O=c()(e,["title","body","footer","onClose","className","open","size","closeOnClick","scroll","position"]),N=function(e){return-1!==l.split(" ").indexOf(e)},P=N("compact"),T=N("no-divider");return u.a.createElement(h.a,{open:s,scrollable:b===p.a.CONTENT,onClose:function(e){("click"===e.type&&E||"click"!==e.type)&&o(e)},className:d()("d-flex","justify-content-center")},u.a.createElement(m.a,{appear:!0,in:s,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},u.a.createElement("div",r()({className:d()("tw-modal",{"tw-modal--content":b===p.a.CONTENT,"align-self-center":x===v.a.CENTER},"fade","outline-none",l)},O),u.a.createElement("div",{className:d()("tw-modal-dialog","d-flex",i()({},"tw-modal-".concat(f),f)),"aria-modal":!0,role:"dialog"},u.a.createElement("div",{className:d()("tw-modal-content","d-flex","flex-column","justify-content-between",{"tw-modal-compact":P,"tw-modal-no-title":!t})},u.a.createElement("div",{className:d()("tw-modal-header","d-flex","align-items-center","justify-content-between","flex-wrap",{"modal--withoutborder":!t||T})},u.a.createElement("h4",{className:"tw-modal-title"},t),u.a.createElement(g.a,{onClick:o})),u.a.createElement("div",{className:"tw-modal-body"},n),a&&u.a.createElement("div",{className:d()("tw-modal-footer","d-flex","align-items-center","flex-wrap",{"modal--withoutborder":T})},a))))))};b.defaultProps={title:null,footer:null,size:E.a.MEDIUM,className:"",closeOnClick:!0,scroll:p.a.VIEWPORT,position:v.a.CENTER},t.a=b},KcoV:function(e,t,n){},OUB3:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={})).POPOVER="POPOVER",r.MODAL="MODAL"},Qzre:function(e,t,n){var a=n("FXyv"),r=n("hpdy"),o=n("fVMg")("species");e.exports=function(e,t){var n,i=a(e).constructor;return void 0===i||void 0==(n=a(i)[o])?t:r(n)}},YAkj:function(e,t,n){var a=n("1Mu/"),r=n("DEeE"),o=n("N4z3"),i=n("4Sk5").f,l=function(e){return function(t){for(var n,l=o(t),c=r(l),s=c.length,u=0,f=[];s>u;)n=c[u++],a&&!i.call(l,n)||f.push(e?[n,l[n]]:l[n]);return f}};e.exports={entries:l(!0),values:l(!1)}},"YF/V":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Info",function(){return n("1Ix9")}])},Ysgh:function(e,t,n){"use strict";var a=n("lbJE"),r=n("jl0/"),o=n("FXyv"),i=n("cww3"),l=n("Qzre"),c=n("4/YM"),s=n("tJVe"),u=n("34wW"),f=n("QsUS"),d=n("ct80"),m=[].push,p=Math.min,v=!d((function(){return!RegExp(4294967295,"y")}));a("split",2,(function(e,t,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var a=String(i(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===e)return[a];if(!r(e))return t.call(a,e,o);for(var l,c,s,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,v=new RegExp(e.source,d+"g");(l=f.call(v,a))&&!((c=v.lastIndex)>p&&(u.push(a.slice(p,l.index)),l.length>1&&l.index<a.length&&m.apply(u,l.slice(1)),s=l[0].length,p=c,u.length>=o));)v.lastIndex===l.index&&v.lastIndex++;return p===a.length?!s&&v.test("")||u.push(""):u.push(a.slice(p)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=i(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,r,n):a.call(String(r),t,n)},function(e,r){var i=n(a,e,this,r,a!==t);if(i.done)return i.value;var f=o(e),d=String(this),m=l(f,RegExp),E=f.unicode,h=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),g=new m(v?f:"^(?:"+f.source+")",h),b=void 0===r?4294967295:r>>>0;if(0===b)return[];if(0===d.length)return null===u(g,d)?[d]:[];for(var x=0,O=0,N=[];O<d.length;){g.lastIndex=v?O:0;var P,T=u(g,v?d:d.slice(O));if(null===T||(P=p(s(g.lastIndex+(v?0:O)),d.length))===x)O=c(d,O,E);else{if(N.push(d.slice(x,O)),N.length===b)return N;for(var w=1;w<=T.length-1;w++)if(N.push(T[w]),N.length===b)return N;O=x=P}}return N.push(d.slice(x)),N}]}),!v)},dLgZ:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={})).CONTENT="content",r.VIEWPORT="viewport"},e0j8:function(e,t,n){"use strict";var a=n("97Jx"),r=n.n(a),o=n("ddV6"),i=n.n(o),l=n("ERkP"),c=n.n(l),s=n("O94r"),u=n.n(s),f=n("/Vl7"),d=n("b1ss"),m=n("GAp3"),p=n("VehP"),v=n("eKd8"),E=n("OUB3"),h=(n("v9dN"),function(e){var t=e.className,n=e.content,a=e.presentation,o=e.size,s=e.title,h=Object(l.useState)(!1),g=i()(h,2),b=g[0],x=g[1],O=a===E.a.MODAL,N=o===p.a.SMALL,P={"aria-label":e["aria-label"],className:"btn-unstyled",children:c.a.createElement(f.r,{size:N?16:24})};return c.a.createElement("span",{className:u()(t,"np-info",{"np-info__small":N,"np-info__large":!N})},O?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",r()({type:"button",onClick:function(){return x(!b)}},P)),c.a.createElement(m.a,{body:n,onClose:function(){return x(!1)},open:b,title:s})):c.a.createElement(d.a,{content:n,preferredPlacement:v.a.BOTTOM,title:s},c.a.createElement("button",r()({type:"button"},P))))});h.defaultProps={className:void 0,content:void 0,presentation:E.a.POPOVER,size:p.a.SMALL,title:void 0},t.a=h},eKd8:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={})).BOTTOM="bottom",r.BOTTOM_LEFT="bottom-left",r.BOTTOM_RIGHT="bottom-right",r.CENTER="center",r.LEFT="left",r.LEFT_TOP="left-top",r.RIGHT="right",r.RIGHT_TOP="right-top",r.TOP="top"},lbJE:function(e,t,n){"use strict";n("KqXw");var a=n("uLp7"),r=n("ct80"),o=n("fVMg"),i=n("QsUS"),l=n("WxKw"),c=o("species"),s=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),f=o("replace"),d=!!/./[f]&&""===/./[f]("a","$0"),m=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var p=o(e),v=!r((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),E=v&&!r((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!v||!E||"replace"===e&&(!s||!u||d)||"split"===e&&!m){var h=/./[p],g=n(p,""[e],(function(e,t,n,a,r){return t.exec===i?v&&!r?{done:!0,value:h.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=g[0],x=g[1];a(String.prototype,e,b),a(RegExp.prototype,p,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}f&&l(RegExp.prototype[p],"sham",!0)}},qGsU:function(e,t,n){"use strict";n("1IsZ");var a=n("ERkP"),r=n.n(a),o=n("O94r"),i=n.n(o),l=n("kQwz"),c=n("/Vl7"),s=n("BAoe"),u=Object(s.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),r.a.forwardRef((function(e,t){var n=Object(l.a)(),a=e.onClick,o=e.className,s=e.size;return r.a.createElement("button",{ref:t,type:"button",className:i()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":s===f.Size.LARGE},o),"aria-label":n.formatMessage(u.ariaLabel),onClick:a},r.a.createElement(c.k,{size:s}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};t.a=f},"s+Iv":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));n("vrRf");function a(t){var n,a;0<=["development","test"].indexOf(null===(n=e)||void 0===n||null===(a=n.env)||void 0===a?void 0:"production")&&console.warn(t)}function r(e,t){t&&a(e)}}).call(this,n("F63i"))},sob3:function(e,t,n){"use strict";var a=n("97Jx"),r=n.n(a),o=n("m3Bd"),i=n.n(o),l=n("ERkP"),c=n.n(l),s=n("O94r"),u=n.n(s),f=n("05Xt"),d=(n("yiBs"),Object(l.forwardRef)((function(e,t){var n=e.children,a=e.className,o=e.open,l=e.position,s=e.showSlidingPanelBorder,d=e.slidingPanelPositionFixed,m=i()(e,["children","className","open","position","showSlidingPanelBorder","slidingPanelPositionFixed"]);return c.a.createElement(f.a,r()({},m,{in:o,timeout:{enter:0,exit:350},classNames:u()("sliding-panel--open-".concat(l),s&&"sliding-panel--border-".concat(l),{"sliding-panel--fixed":d},"sliding-panel"),appear:!0,unmountOnExit:!0}),c.a.createElement("div",{className:u()("sliding-panel",a),ref:t},n))})));d.defaultProps={children:null,className:void 0,open:!1,position:"left",showSlidingPanelBorder:!1,slidingPanelPositionFixed:!1},t.a=d},"t/tF":function(e,t,n){var a=n("i7Kn"),r=n("cww3"),o=function(e){return function(t,n){var o,i,l=String(r(t)),c=a(n),s=l.length;return c<0||c>=s?e?"":void 0:(o=l.charCodeAt(c))<55296||o>56319||c+1===s||(i=l.charCodeAt(c+1))<56320||i>57343?e?l.charAt(c):o:e?l.slice(c,c+2):i-56320+(o-55296<<10)+65536}};e.exports={codeAt:o(!1),charAt:o(!0)}},v9dN:function(e,t,n){},yiBs:function(e,t,n){},z84I:function(e,t,n){"use strict";var a=n("ax0f"),r=n("0FSu").map,o=n("GJtw"),i=n("znGZ"),l=o("map"),c=i("map");a({target:"Array",proto:!0,forced:!l||!c},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})}},[["YF/V",0,1,2,6,3,5,7,8,9,10,17,4]]]);
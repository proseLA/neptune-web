_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[81],{"0Q6q":function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={})).PROCESSING="processing",r.FAILED="failed",r.SUCCEEDED="succeeded",r.HIDDEN="hidden",r.DONE="done",r.NOT_DONE="notDone",r.PENDING="pending"},"1IsZ":function(e,t,n){var a=n("ax0f"),r=n("YAkj").values;a({target:"Object",stat:!0},{values:function(e){return r(e)}})},"2lU4":function(e,t,n){},"5BfY":function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={}))[r.EXTRA_SMALL=480]="EXTRA_SMALL",r[r.SMALL=576]="SMALL",r[r.MEDIUM=768]="MEDIUM",r[r.LARGE=992]="LARGE",r[r.EXTRA_LARGE=1200]="EXTRA_LARGE"},AXuR:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return s}));n("tVqn"),n("KqXw"),n("MvUL"),n("jQ3i");var a="en-GB",r=["he-IL"],i=["en","ja","de","es","fr","hu","id","it","pl","pt","ro","ru","tr","uk","zh"];function o(e){if(!e||0===e.trim().length)return null;try{return new Intl.Locale(e.trim().replace("_","-")).baseName}catch(e){return console.error(e),null}}function l(e){var t=o(e);if(null===t)return null;try{var n=new Intl.Locale(t).language;return i.includes(n)?n:null}catch(e){return console.error(e),null}}var s=function(e){var t=o(e);if(null===t)return null;try{var n=new Intl.Locale(t).region;return null!==n&&void 0!==n?n:null}catch(e){return console.error(e),null}}},BAoe:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,r,i=n("D57K"),o=n("ERkP"),l=n("kQwz");!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(a||(a={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(r||(r={}));function s(e){var t=function(t){var n=Object(l.a)(),a=t.value,r=t.children,o=Object(i.c)(t,["value","children"]),s="string"===typeof a?new Date(a||0):a;return r("formatDate"===e?n.formatDateToParts(s,o):n.formatTimeToParts(s,o))};return t.displayName=r[e],t}function c(e){var t=function(t){var n=Object(l.a)(),a=t.value,r=t.children,s=Object(i.c)(t,["value","children"]),c=n[e](a,s);if("function"===typeof r)return r(c);var u=n.textComponent||o.Fragment;return o.createElement(u,null,c)};return t.displayName=a[e],t}function u(e){return e}c("formatDate"),c("formatTime"),c("formatNumber"),c("formatList"),c("formatDisplayName"),s("formatDate"),s("formatTime")},FtHn:function(e,t,n){var a=n("ax0f"),r=n("1Mu/"),i=n("oD4t"),o=n("N4z3"),l=n("GFpt"),s=n("2sZ7");a({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){for(var t,n,a=o(e),r=l.f,c=i(a),u={},d=0;c.length>d;)void 0!==(n=r(a,t=c[d++]))&&s(u,t,n);return u}})},GAp3:function(e,t,n){"use strict";var a=n("97Jx"),r=n.n(a),i=n("KEM+"),o=n.n(i),l=n("m3Bd"),s=n.n(l),c=(n("KqXw"),n("Ysgh"),n("ERkP")),u=n.n(c),d=n("O94r"),m=n.n(d),f=n("05Xt"),p=(n("2lU4"),n("dLgZ")),v=n("eKd8"),h=n("VehP"),g=n("P8nL"),E=n("qGsU"),b=["title","body","footer","onClose","className","open","size","closeOnClick","scroll","position"],N=function(e){var t=e.title,n=e.body,a=e.footer,i=e.onClose,l=e.className,c=e.open,d=e.size,h=e.closeOnClick,N=e.scroll,y=e.position,O=s()(e,b),w=function(e){return-1!==l.split(" ").indexOf(e)},P=w("compact"),x=w("no-divider");return u.a.createElement(g.a,{open:c,scrollable:N===p.a.CONTENT,onClose:i,className:m()("d-flex","justify-content-center"),disableClickToClose:!h},u.a.createElement(f.a,{appear:!0,in:c,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},u.a.createElement("div",r()({className:m()("tw-modal",{"tw-modal--content":N===p.a.CONTENT,"align-self-center":y===v.a.CENTER},"fade","outline-none",l)},O),u.a.createElement("div",{className:m()("tw-modal-dialog","d-flex",o()({},"tw-modal-".concat(d),d)),"aria-modal":!0,role:"dialog"},u.a.createElement("div",{className:m()("tw-modal-content","d-flex","flex-column","justify-content-between",{"tw-modal-compact":P,"tw-modal-no-title":!t})},u.a.createElement("div",{className:m()("tw-modal-header","d-flex","align-items-center","justify-content-between","flex-wrap",{"modal--withoutborder":!t||x})},u.a.createElement("h4",{className:"tw-modal-title"},t),u.a.createElement(E.a,{onClick:i})),u.a.createElement("div",{className:"tw-modal-body"},n),a&&u.a.createElement("div",{className:m()("tw-modal-footer","d-flex","align-items-center","flex-wrap",{"modal--withoutborder":x})},a))))))};N.defaultProps={title:null,footer:null,size:h.a.MEDIUM,className:"",closeOnClick:!0,scroll:p.a.VIEWPORT,position:v.a.CENTER},t.a=N},KcoV:function(e,t,n){},LKIi:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return T})),n.d(t,"default",(function(){return D}));var a,r=n("cxan"),i=n("HbGN"),o=n("ERkP"),l=n.n(o),s=n("ZVZ0"),c=n("KEM+"),u=n.n(c),d=(n("1t7P"),n("jQ/y"),n("O94r")),m=n.n(d),f=n("kQwz"),p=n("/Vl7"),v=(n("j+zR"),n("e0j8")),h=n("0Q6q"),g=n("VehP"),E=n("BAoe"),b=Object(E.a)({statusNotDone:{id:"neptune.Summary.statusNotDone"},statusPending:{id:"neptune.Summary.statusPending"},statusDone:{id:"neptune.Summary.statusDone"}}),N=(n("rrw+"),n("uIuh")),y={done:p.h,pending:p.w},O=(a={},u()(a,h.a.NOT_DONE,"statusNotDone"),u()(a,h.a.DONE,"statusDone"),u()(a,h.a.PENDING,"statusPending"),a),w=function(e){var t,n=e.action,a=e.as,r=e.className,i=e.content,s=e.description,c=void 0===s?i:s,u=e.help,d=e.icon,p=e.illustration,h=e.info,E=void 0===h?u:h,w=e.status,P=e.title,x=Object(f.a)(),L=Object(N.a)().isRTL,T=p;d&&(T=24===(null===d||void 0===d||null===(t=d.props)||void 0===t?void 0:t.size)?d:Object(o.cloneElement)(d,{size:24}));var S=w&&y[w];return l.a.createElement(a,{className:m()("np-summary d-flex align-items-start",r),"aria-label":w&&x.formatMessage(b[O[w]])},l.a.createElement("div",{className:"np-summary__icon"},T,S&&l.a.createElement(S,{size:16,filled:!0,className:"np-summary-icon__".concat(w)})),l.a.createElement("div",{className:m()("np-summary__body",{"m-l-2":!L,"m-r-2":L})},l.a.createElement("div",{className:"np-summary__title d-flex"},l.a.createElement("strong",null,P),E&&l.a.createElement(v.a,{"aria-label":E["aria-label"],className:m()({"m-l-1":!L,"m-r-1":L},"hidden-xs"),content:E.content,presentation:E.presentation,title:E.title})),c&&l.a.createElement("div",{className:"np-summary__description"},c),n&&l.a.createElement("a",{href:n.href,target:n.target,onClick:n.onClick,className:"np-summary__action","aria-label":n["aria-label"]},n.text)),E&&l.a.createElement(v.a,{"aria-label":E["aria-label"],className:"m-l-2 hidden-sm hidden-md hidden-lg hidden-xl",content:E.content,presentation:E.presentation,size:g.a.LARGE,title:E.title}))};w.defaultProps={action:null,as:"div",className:null,content:null,help:null,illustration:null,status:null};var P=w,x=n("Qi1R"),L=["components"],T=(l.a.createElement,{name:"Summary"}),S={meta:T};function D(e){var t=e.components,n=Object(i.a)(e,L);return Object(s.a)("wrapper",Object(r.a)({},S,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)("p",null,"For displaying a list of requirements, some instructions, or perhaps some general information. Always has an icon and title, can also have a content block and a help icon with some popover text."),Object(s.a)("div",null,Object(s.a)(x.b,{code:"<ul>\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    icon={<HomeIcon size={24} />}\n    title=\"Verify your address\"\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'You entered your address',\n      content: 'Your address has been verified, no more actions are required.',\n      'aria-label': 'Please click here to know more about your address update status',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"You verified your address\"\n    status={Status.DONE}\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'Address verification pending',\n      content:\n        'Your address change is currently being processed. Please allow 48 hours for verification.',\n      presentation: 'MODAL',\n      'aria-label': 'Please click here to know more about your address update status',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"We\u2019re verifying your address\"\n    status={Status.PENDING}\n  />\n</ul>;\n",scope:{Summary:P,Status:h.a,HomeIcon:p.t},mdxType:"LiveEditorBlock"}),Object(s.a)(x.a,{componentName:"Summary",mdxType:"GeneratePropsTable"})))}D.isMDXComponent=!0},OUB3:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={})).POPOVER="POPOVER",r.MODAL="MODAL"},Qzre:function(e,t,n){var a=n("FXyv"),r=n("hpdy"),i=n("fVMg")("species");e.exports=function(e,t){var n,o=a(e).constructor;return void 0===o||void 0==(n=a(o)[i])?t:r(n)}},"X+oG":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var a=n("ERkP"),r=n.n(a),i=n("AXuR"),o=r.a.createContext("ltr"),l=function(e){var t=e.locale,n=e.children;return r.a.createElement(o.Provider,{value:-1<i.b.indexOf(t)?"rtl":"ltr"},n)};l.defaultProps={children:null,locale:i.a}},YAkj:function(e,t,n){var a=n("1Mu/"),r=n("DEeE"),i=n("N4z3"),o=n("4Sk5").f,l=function(e){return function(t){for(var n,l=i(t),s=r(l),c=s.length,u=0,d=[];c>u;)n=s[u++],a&&!o.call(l,n)||d.push(e?[n,l[n]]:l[n]);return d}};e.exports={entries:l(!0),values:l(!1)}},Ysgh:function(e,t,n){"use strict";var a=n("lbJE"),r=n("jl0/"),i=n("FXyv"),o=n("cww3"),l=n("Qzre"),s=n("4/YM"),c=n("tJVe"),u=n("34wW"),d=n("QsUS"),m=n("L2rT").UNSUPPORTED_Y,f=[].push,p=Math.min;a("split",2,(function(e,t,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var a=String(o(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===e)return[a];if(!r(e))return t.call(a,e,i);for(var l,s,c,u=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,v=new RegExp(e.source,m+"g");(l=d.call(v,a))&&!((s=v.lastIndex)>p&&(u.push(a.slice(p,l.index)),l.length>1&&l.index<a.length&&f.apply(u,l.slice(1)),c=l[0].length,p=s,u.length>=i));)v.lastIndex===l.index&&v.lastIndex++;return p===a.length?!c&&v.test("")||u.push(""):u.push(a.slice(p)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=o(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,r,n):a.call(String(r),t,n)},function(e,r){var o=n(a,e,this,r,a!==t);if(o.done)return o.value;var d=i(e),f=String(this),v=l(d,RegExp),h=d.unicode,g=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"g":"y"),E=new v(m?"^(?:"+d.source+")":d,g),b=void 0===r?4294967295:r>>>0;if(0===b)return[];if(0===f.length)return null===u(E,f)?[f]:[];for(var N=0,y=0,O=[];y<f.length;){E.lastIndex=m?0:y;var w,P=u(E,m?f.slice(y):f);if(null===P||(w=p(c(E.lastIndex+(m?y:0)),f.length))===N)y=s(f,y,h);else{if(O.push(f.slice(N,y)),O.length===b)return O;for(var x=1;x<=P.length-1;x++)if(O.push(P[x]),O.length===b)return O;y=N=w}}return O.push(f.slice(N)),O}]}),m)},"Z0+U":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Summary",function(){return n("LKIi")}])},dLgZ:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={})).CONTENT="content",r.VIEWPORT="viewport"},daRM:function(e,t,n){var a=n("ax0f"),r=n("ct80"),i=n("N4z3"),o=n("GFpt").f,l=n("1Mu/"),s=r((function(){o(1)}));a({target:"Object",stat:!0,forced:!l||s,sham:!l},{getOwnPropertyDescriptor:function(e,t){return o(i(e),t)}})},e0j8:function(e,t,n){"use strict";var a=n("97Jx"),r=n.n(a),i=n("ddV6"),o=n.n(i),l=n("ERkP"),s=n.n(l),c=n("O94r"),u=n.n(c),d=n("/Vl7"),m=n("b1ss"),f=n("GAp3"),p=n("VehP"),v=n("eKd8"),h=n("OUB3"),g=(n("v9dN"),function(e){var t=e.className,n=e.content,a=e.presentation,i=e.size,c=e.title,g=Object(l.useState)(!1),E=o()(g,2),b=E[0],N=E[1],y=a===h.a.MODAL,O=i===p.a.SMALL,w={"aria-label":e["aria-label"],className:"btn-unstyled",children:s.a.createElement(d.s,{size:O?16:24})};return s.a.createElement("span",{className:u()(t,"np-info",{"np-info__small":O,"np-info__large":!O})},y?s.a.createElement(s.a.Fragment,null,s.a.createElement("button",r()({type:"button",onClick:function(){return N(!b)}},w)),s.a.createElement(f.a,{body:n,onClose:function(){return N(!1)},open:b,title:c})):s.a.createElement(m.a,{content:n,preferredPlacement:v.a.BOTTOM,title:c},s.a.createElement("button",r()({type:"button"},w))))});g.defaultProps={className:void 0,content:void 0,presentation:h.a.POPOVER,size:p.a.SMALL,title:void 0},t.a=g},eKd8:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={})).BOTTOM="bottom",r.BOTTOM_LEFT="bottom-left",r.BOTTOM_RIGHT="bottom-right",r.CENTER="center",r.LEFT="left",r.LEFT_TOP="left-top",r.RIGHT="right",r.RIGHT_TOP="right-top",r.TOP="top"},"j+zR":function(e,t){e.exports=function(e,t){return function(n,a,r){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+r+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+r+". Validation failed.");var i=t(n)?e.isRequired:e;return i.apply(this,arguments)}}},"jQ/y":function(e,t,n){"use strict";var a=n("ax0f"),r=n("1Mu/"),i=n("9JhN"),o=n("8aeu"),l=n("dSaG"),s=n("q9+l").f,c=n("tjTa"),u=i.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};c(m,u);var f=m.prototype=u.prototype;f.constructor=m;var p=f.toString,v="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=p.call(e);if(o(d,e))return"";var n=v?t.slice(7,-1):t.replace(h,"$1");return""===n?void 0:n}}),a({global:!0,forced:!0},{Symbol:m})}},"jl0/":function(e,t,n){var a=n("dSaG"),r=n("amH4"),i=n("fVMg")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==r(e))}},mVF9:function(e,t,n){var a=n("ct80"),r=n("+/eK");e.exports=function(e){return a((function(){return!!r[e]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[e]()||r[e].name!==e}))}},qGsU:function(e,t,n){"use strict";n("1IsZ");var a=n("ERkP"),r=n.n(a),i=n("O94r"),o=n.n(i),l=n("kQwz"),s=n("/Vl7"),c=n("BAoe"),u=Object(c.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),d=(n("KcoV"),r.a.forwardRef((function(e,t){var n=Object(l.a)(),a=e.onClick,i=e.className,c=e.size;return r.a.createElement("button",{ref:t,type:"button",className:o()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":c===d.Size.LARGE},i),"aria-label":n.formatMessage(u.ariaLabel),onClick:a},r.a.createElement(s.l,{size:c}))})));d.Size={SMALL:16,LARGE:24},d.defaultProps={className:null,size:d.Size.LARGE};t.a=d},"s+Iv":function(e,t,n){"use strict";(function(e){function a(t){var n,a;0<=["development","test"].indexOf(null===(n=e)||void 0===n||null===(a=n.env)||void 0===a?void 0:"production")&&console.warn(t)}function r(e,t){t&&a(e)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}))}).call(this,n("F63i"))},sob3:function(e,t,n){"use strict";var a=n("97Jx"),r=n.n(a),i=n("m3Bd"),o=n.n(i),l=n("ERkP"),s=n.n(l),c=n("O94r"),u=n.n(c),d=n("05Xt"),m=(n("yiBs"),["children","className","open","position","showSlidingPanelBorder","slidingPanelPositionFixed"]),f=Object(l.forwardRef)((function(e,t){var n=e.children,a=e.className,i=e.open,l=e.position,c=e.showSlidingPanelBorder,f=e.slidingPanelPositionFixed,p=o()(e,m);return s.a.createElement(d.a,r()({},p,{in:i,timeout:{enter:0,exit:350},classNames:u()("sliding-panel--open-".concat(l),c&&"sliding-panel--border-".concat(l),{"sliding-panel--fixed":f},"sliding-panel"),appear:!0,unmountOnExit:!0}),s.a.createElement("div",{className:u()("sliding-panel",a),ref:t},n))}));f.defaultProps={children:null,className:void 0,open:!1,position:"left",showSlidingPanelBorder:!1,slidingPanelPositionFixed:!1},t.a=f},tVqn:function(e,t,n){"use strict";var a=n("ax0f"),r=n("Ya2h").trim;a({target:"String",proto:!0,forced:n("mVF9")("trim")},{trim:function(){return r(this)}})},uIuh:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("ERkP"),r=n("X+oG"),i=function(){var e=Object(a.useContext)(r.a);return{direction:e,isRTL:"rtl"===e}}},v9dN:function(e,t,n){},yiBs:function(e,t,n){}},[["Z0+U",0,1,2,6,3,5,7,8,9,10,11,17,4]]]);
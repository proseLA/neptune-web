_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[82],{"0Q6q":function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={})).PROCESSING="processing",r.FAILED="failed",r.SUCCEEDED="succeeded",r.HIDDEN="hidden",r.DONE="done",r.NOT_DONE="notDone",r.PENDING="pending"},"1IsZ":function(e,t,n){var a=n("ax0f"),r=n("YAkj").values;a({target:"Object",stat:!0},{values:function(e){return r(e)}})},"2lU4":function(e,t,n){},"5BfY":function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={}))[r.EXTRA_SMALL=480]="EXTRA_SMALL",r[r.SMALL=576]="SMALL",r[r.MEDIUM=768]="MEDIUM",r[r.LARGE=992]="LARGE",r[r.EXTRA_LARGE=1200]="EXTRA_LARGE"},"7bhD":function(e,t,n){},"AX+q":function(e,t,n){"use strict";var a=n("ddV6"),r=n.n(a),o=(n("2G9S"),n("ERkP")),i=n.n(o),l=n("O94r"),s=n.n(l),c=(n("7bhD"),n("P8nL")),u=n("sob3"),d=n("qGsU"),m=n("TIxY"),f=n("F0xR"),p=n("eKd8");t.a=function(e){function t(e){v.current&&(v.current.style.transform="translateY(".concat(e,"px)"))}function n(){null===v.current||(v.current.style.removeProperty("transform"),e.onClose&&e.onClose())}function a(){cancelAnimationFrame(y.current),O(!1),P.current>50&&l()?n():t(0),P.current=0}function l(){var e;return void 0!==(null===b||void 0===b||null===(e=b.current)||void 0===e?void 0:e.scrollTop)&&b.current.scrollTop<=1}var v=Object(o.useRef)(null),h=Object(o.useRef)(null),b=Object(o.useRef)(null),E=Object(o.useState)(!1),g=r()(E,2),N=g[0],O=g[1],y=Object(o.useRef)(0),P=Object(o.useRef)(0),T=Object(o.useRef)(0);Object(f.a)({attachListener:e.open&&!Object(m.a)(),callback:function(){if(null!==h.current){var e=h.current.classList;l()?e.remove("np-bottom-sheet--top-bar--shadow"):e.add("np-bottom-sheet--top-bar--shadow")}},eventType:"scroll",parent:Object(m.a)()?void 0:document});var w=function(e){return function(t){T.current=(e?t.touches[0]:t).clientY,O(!0)}},x=function(e){return function(n){if(N){var a=function(e){return e-T.current}((e?n.touches[0]:n).clientY);a>0&&l()&&(P.current=a,y.current=requestAnimationFrame((function(){void 0!==y.current&&null!==v.current&&t(a)})))}}};return i.a.createElement(c.a,{open:e.open,onClose:n,fadeContentOnEnter:!0,fadeContentOnExit:!0},i.a.createElement(u.a,{open:e.open,position:p.a.BOTTOM,ref:v,className:s()("np-bottom-sheet",e.className),onTouchStart:w(!0),onTouchMove:x(!0),onTouchEnd:a,onMouseDown:w(!1),onMouseMove:x(!1),onMouseUp:a,role:"dialog"},i.a.createElement("div",{className:"np-bottom-sheet--top-bar",ref:h},i.a.createElement("div",{className:"np-bottom-sheet--handler"}),i.a.createElement(d.a,{onClick:n,size:16,className:"sr-only np-bottom-sheet--close-btn"})),i.a.createElement("div",{style:function(){var e=Object(m.a)()?0:window.innerHeight,t="".concat(.01*e*100,"px");return{maxHeight:"calc(".concat(t," - ").concat("64px"," - ").concat("32px",")")}}(),className:"np-bottom-sheet--content",ref:b},e.children)))}},BAoe:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,r,o=n("D57K"),i=n("ERkP"),l=n("kQwz");!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(a||(a={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(r||(r={}));function s(e){var t=function(t){var n=Object(l.a)(),a=t.value,r=t.children,i=Object(o.c)(t,["value","children"]),s="string"===typeof a?new Date(a||0):a;return r("formatDate"===e?n.formatDateToParts(s,i):n.formatTimeToParts(s,i))};return t.displayName=r[e],t}function c(e){var t=function(t){var n=Object(l.a)(),a=t.value,r=t.children,s=Object(o.c)(t,["value","children"]),c=n[e](a,s);if("function"===typeof r)return r(c);var u=n.textComponent||i.Fragment;return i.createElement(u,null,c)};return t.displayName=a[e],t}function u(e){return e}c("formatDate"),c("formatTime"),c("formatNumber"),c("formatList"),c("formatDisplayName"),s("formatDate"),s("formatTime")},GAp3:function(e,t,n){"use strict";var a=n("97Jx"),r=n.n(a),o=n("KEM+"),i=n.n(o),l=n("m3Bd"),s=n.n(l),c=(n("KqXw"),n("Ysgh"),n("ERkP")),u=n.n(c),d=n("O94r"),m=n.n(d),f=n("05Xt"),p=(n("2lU4"),n("dLgZ")),v=n("eKd8"),h=n("VehP"),b=n("P8nL"),E=n("qGsU"),g=["title","body","footer","onClose","className","open","size","closeOnClick","scroll","position"],N=function(e){var t=e.title,n=e.body,a=e.footer,o=e.onClose,l=e.className,c=e.open,d=e.size,h=(e.closeOnClick,e.scroll),N=e.position,O=s()(e,g),y=function(e){return-1!==l.split(" ").indexOf(e)},P=y("compact"),T=y("no-divider");return u.a.createElement(b.a,{open:c,scrollable:h===p.a.CONTENT,onClose:o,className:m()("d-flex","justify-content-center")},u.a.createElement(f.a,{appear:!0,in:c,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},u.a.createElement("div",r()({className:m()("tw-modal",{"tw-modal--content":h===p.a.CONTENT,"align-self-center":N===v.a.CENTER},"fade","outline-none",l)},O),u.a.createElement("div",{className:m()("tw-modal-dialog","d-flex",i()({},"tw-modal-".concat(d),d)),"aria-modal":!0,role:"dialog"},u.a.createElement("div",{className:m()("tw-modal-content","d-flex","flex-column","justify-content-between",{"tw-modal-compact":P,"tw-modal-no-title":!t})},u.a.createElement("div",{className:m()("tw-modal-header","d-flex","align-items-center","justify-content-between","flex-wrap",{"modal--withoutborder":!t||T})},u.a.createElement("h4",{className:"tw-modal-title"},t),u.a.createElement(E.a,{onClick:o})),u.a.createElement("div",{className:"tw-modal-body"},n),a&&u.a.createElement("div",{className:m()("tw-modal-footer","d-flex","align-items-center","flex-wrap",{"modal--withoutborder":T})},a))))))};N.defaultProps={title:null,footer:null,size:h.a.MEDIUM,className:"",closeOnClick:!0,scroll:p.a.VIEWPORT,position:v.a.CENTER},t.a=N},KcoV:function(e,t,n){},LKIi:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return L})),n.d(t,"default",(function(){return R}));var a,r=n("cxan"),o=n("HbGN"),i=n("ERkP"),l=n.n(i),s=n("ZVZ0"),c=n("KEM+"),u=n.n(c),d=(n("1t7P"),n("jQ/y"),n("O94r")),m=n.n(d),f=n("kQwz"),p=n("/Vl7"),v=(n("j+zR"),n("e0j8")),h=n("0Q6q"),b=n("VehP"),E=n("BAoe"),g=Object(E.a)({statusNotDone:{id:"neptune.Summary.statusNotDone"},statusPending:{id:"neptune.Summary.statusPending"},statusDone:{id:"neptune.Summary.statusDone"}}),N=(n("rrw+"),n("uIuh")),O={done:p.i,pending:p.y},y=(a={},u()(a,h.a.NOT_DONE,"statusNotDone"),u()(a,h.a.DONE,"statusDone"),u()(a,h.a.PENDING,"statusPending"),a),P=function(e){var t,n=e.action,a=e.as,r=e.className,o=e.content,s=e.description,c=void 0===s?o:s,u=e.help,d=e.icon,p=e.illustration,h=e.info,E=void 0===h?u:h,P=e.status,T=e.title,w=Object(f.a)(),x=Object(N.a)().isRTL,L=p;d&&(L=24===(null===d||void 0===d||null===(t=d.props)||void 0===t?void 0:t.size)?d:Object(i.cloneElement)(d,{size:24}));var S=P&&O[P];return l.a.createElement(a,{className:m()("np-summary d-flex align-items-start",r),"aria-label":P&&w.formatMessage(g[y[P]])},l.a.createElement("div",{className:"np-summary__icon"},L,S&&l.a.createElement(S,{size:16,filled:!0,className:"np-summary-icon__".concat(P)})),l.a.createElement("div",{className:m()("np-summary__body",{"m-l-2":!x,"m-r-2":x})},l.a.createElement("div",{className:"np-summary__title d-flex"},l.a.createElement("strong",null,T),E&&l.a.createElement(v.a,{"aria-label":E["aria-label"],className:m()({"m-l-1":!x,"m-r-1":x},"hidden-xs"),content:E.content,onClick:E.onClick,presentation:E.presentation,title:E.title})),c&&l.a.createElement("div",{className:"np-summary__description"},c),n&&l.a.createElement("a",{href:n.href,target:n.target,onClick:n.onClick,className:"np-summary__action","aria-label":n["aria-label"]},n.text)),E&&l.a.createElement(v.a,{"aria-label":E["aria-label"],className:"m-l-2 hidden-sm hidden-md hidden-lg hidden-xl",content:E.content,onClick:E.onClick,presentation:E.presentation,size:b.a.LARGE,title:E.title}))};P.defaultProps={action:null,as:"div",className:null,content:null,help:null,illustration:null,status:null};var T=P,w=n("Qi1R"),x=["components"],L=(l.a.createElement,{name:"Summary"}),S={meta:L};function R(e){var t=e.components,n=Object(o.a)(e,x);return Object(s.a)("wrapper",Object(r.a)({},S,n,{components:t,mdxType:"MDXLayout"}),Object(s.a)("p",null,"For displaying a list of requirements, some instructions, or perhaps some general information. Always has an icon and title, can also have a content block and a help icon with some popover text."),Object(s.a)("div",null,Object(s.a)(w.b,{code:"<ul>\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    icon={<HomeIcon size={24} />}\n    title=\"Verify your address\"\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'You entered your address',\n      content: 'Your address has been verified, no more actions are required.',\n      'aria-label': 'Please click here to know more about your address update status',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"You verified your address\"\n    status={Status.DONE}\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'Address verification pending',\n      content:\n        'Your address change is currently being processed. Please allow 48 hours for verification.',\n      presentation: 'MODAL',\n      'aria-label': 'Please click here to know more about your address update status',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"We\u2019re verifying your address\"\n    status={Status.PENDING}\n  />\n</ul>;\n",scope:{Summary:T,Status:h.a,HomeIcon:p.u},mdxType:"LiveEditorBlock"}),Object(s.a)(w.a,{componentName:"Summary",mdxType:"GeneratePropsTable"})))}R.isMDXComponent=!0},OUB3:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={})).POPOVER="POPOVER",r.MODAL="MODAL"},Qzre:function(e,t,n){var a=n("FXyv"),r=n("hpdy"),o=n("fVMg")("species");e.exports=function(e,t){var n,i=a(e).constructor;return void 0===i||void 0==(n=a(i)[o])?t:r(n)}},TIxY:function(e,t,n){"use strict";function a(){return!1}n.d(t,"a",(function(){return a}))},"X+oG":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n("ERkP"),r=n.n(a),o=n("AXuR"),i=r.a.createContext("ltr"),l=function(e){var t=e.locale,n=e.children;return r.a.createElement(i.Provider,{value:-1<o.b.indexOf(t)?"rtl":"ltr"},n)};l.defaultProps={children:null,locale:o.a}},YAkj:function(e,t,n){var a=n("1Mu/"),r=n("DEeE"),o=n("N4z3"),i=n("4Sk5").f,l=function(e){return function(t){for(var n,l=o(t),s=r(l),c=s.length,u=0,d=[];c>u;)n=s[u++],a&&!i.call(l,n)||d.push(e?[n,l[n]]:l[n]);return d}};e.exports={entries:l(!0),values:l(!1)}},Ysgh:function(e,t,n){"use strict";var a=n("lbJE"),r=n("jl0/"),o=n("FXyv"),i=n("cww3"),l=n("Qzre"),s=n("4/YM"),c=n("tJVe"),u=n("34wW"),d=n("QsUS"),m=n("L2rT").UNSUPPORTED_Y,f=[].push,p=Math.min;a("split",2,(function(e,t,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var a=String(i(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===e)return[a];if(!r(e))return t.call(a,e,o);for(var l,s,c,u=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,v=new RegExp(e.source,m+"g");(l=d.call(v,a))&&!((s=v.lastIndex)>p&&(u.push(a.slice(p,l.index)),l.length>1&&l.index<a.length&&f.apply(u,l.slice(1)),c=l[0].length,p=s,u.length>=o));)v.lastIndex===l.index&&v.lastIndex++;return p===a.length?!c&&v.test("")||u.push(""):u.push(a.slice(p)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=i(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,r,n):a.call(String(r),t,n)},function(e,r){var i=n(a,e,this,r,a!==t);if(i.done)return i.value;var d=o(e),f=String(this),v=l(d,RegExp),h=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"g":"y"),E=new v(m?"^(?:"+d.source+")":d,b),g=void 0===r?4294967295:r>>>0;if(0===g)return[];if(0===f.length)return null===u(E,f)?[f]:[];for(var N=0,O=0,y=[];O<f.length;){E.lastIndex=m?0:O;var P,T=u(E,m?f.slice(O):f);if(null===T||(P=p(c(E.lastIndex+(m?O:0)),f.length))===N)O=s(f,O,h);else{if(y.push(f.slice(N,O)),y.length===g)return y;for(var w=1;w<=T.length-1;w++)if(y.push(T[w]),y.length===g)return y;O=N=P}}return y.push(f.slice(N)),y}]}),m)},"Z0+U":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Summary",function(){return n("LKIi")}])},dLgZ:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={})).CONTENT="content",r.VIEWPORT="viewport"},e0j8:function(e,t,n){"use strict";var a=n("97Jx"),r=n.n(a),o=n("ddV6"),i=n.n(o),l=n("ERkP"),s=n.n(l),c=n("O94r"),u=n.n(c),d=n("/Vl7"),m=n("b1ss"),f=n("GAp3"),p=n("VehP"),v=n("eKd8"),h=n("OUB3"),b=(n("v9dN"),function(e){var t=e.className,n=e.content,a=e.onClick,o=e.presentation,c=e.size,b=e.title,E=Object(l.useState)(!1),g=i()(E,2),N=g[0],O=g[1],y=o===h.a.MODAL,P=c===p.a.SMALL,T={"aria-label":e["aria-label"],className:"btn-unstyled",children:s.a.createElement(d.t,{size:P?16:24})};return s.a.createElement("span",{className:u()(t,"np-info",{"np-info__small":P,"np-info__large":!P})},y?s.a.createElement(s.a.Fragment,null,s.a.createElement("button",r()({type:"button",onClick:function(){O(!N),a&&a()}},T)),s.a.createElement(f.a,{body:n,onClose:function(){return O(!1)},open:N,title:b})):s.a.createElement(m.a,{content:n,preferredPlacement:v.a.BOTTOM,title:b},s.a.createElement("button",r()({type:"button"},T,{onClick:function(){a&&a()}}))))});b.defaultProps={className:void 0,content:void 0,onClick:void 0,presentation:h.a.POPOVER,size:p.a.SMALL,title:void 0},t.a=b},eKd8:function(e,t,n){"use strict";var a,r;n.d(t,"a",(function(){return a})),(r=a||(a={})).BOTTOM="bottom",r.BOTTOM_LEFT="bottom-left",r.BOTTOM_RIGHT="bottom-right",r.CENTER="center",r.LEFT="left",r.LEFT_TOP="left-top",r.RIGHT="right",r.RIGHT_TOP="right-top",r.TOP="top"},"j+zR":function(e,t){e.exports=function(e,t){return function(n,a,r){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+r+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+r+". Validation failed.");var o=t(n)?e.isRequired:e;return o.apply(this,arguments)}}},"jQ/y":function(e,t,n){"use strict";var a=n("ax0f"),r=n("1Mu/"),o=n("9JhN"),i=n("8aeu"),l=n("dSaG"),s=n("q9+l").f,c=n("tjTa"),u=o.Symbol;if(r&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};c(m,u);var f=m.prototype=u.prototype;f.constructor=m;var p=f.toString,v="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;s(f,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=p.call(e);if(i(d,e))return"";var n=v?t.slice(7,-1):t.replace(h,"$1");return""===n?void 0:n}}),a({global:!0,forced:!0},{Symbol:m})}},qGsU:function(e,t,n){"use strict";n("1IsZ");var a=n("ERkP"),r=n.n(a),o=n("O94r"),i=n.n(o),l=n("kQwz"),s=n("/Vl7"),c=n("BAoe"),u=Object(c.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),d=(n("KcoV"),r.a.forwardRef((function(e,t){var n=Object(l.a)(),a=e.onClick,o=e.className,c=e.size;return r.a.createElement("button",{ref:t,type:"button",className:i()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":c===d.Size.LARGE},o),"aria-label":n.formatMessage(u.ariaLabel),onClick:a},r.a.createElement(s.m,{size:c}))})));d.Size={SMALL:16,LARGE:24},d.defaultProps={className:null,size:d.Size.LARGE};t.a=d},"s+Iv":function(e,t,n){"use strict";(function(e){function a(t){var n,a;0<=["development","test"].indexOf(null===(n=e)||void 0===n||null===(a=n.env)||void 0===a?void 0:"production")&&console.warn(t)}function r(e,t){t&&a(e)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}))}).call(this,n("F63i"))},sob3:function(e,t,n){"use strict";var a=n("97Jx"),r=n.n(a),o=n("m3Bd"),i=n.n(o),l=n("ERkP"),s=n.n(l),c=n("O94r"),u=n.n(c),d=n("05Xt"),m=(n("yiBs"),["children","className","open","position","showSlidingPanelBorder","slidingPanelPositionFixed"]),f=Object(l.forwardRef)((function(e,t){var n=e.children,a=e.className,o=e.open,l=e.position,c=e.showSlidingPanelBorder,f=e.slidingPanelPositionFixed,p=i()(e,m);return s.a.createElement(d.a,r()({},p,{in:o,timeout:{enter:0,exit:350},classNames:u()("sliding-panel--open-".concat(l),c&&"sliding-panel--border-".concat(l),{"sliding-panel--fixed":f},"sliding-panel"),appear:!0,unmountOnExit:!0}),s.a.createElement("div",{className:u()("sliding-panel",a),ref:t},n))}));f.defaultProps={children:null,className:void 0,open:!1,position:"left",showSlidingPanelBorder:!1,slidingPanelPositionFixed:!1},t.a=f},uIuh:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("ERkP"),r=n("X+oG"),o=function(){var e=Object(a.useContext)(r.a);return{direction:e,isRTL:"rtl"===e}}},v9dN:function(e,t,n){},yiBs:function(e,t,n){}},[["Z0+U",0,1,2,6,3,5,7,8,9,10,11,18,4]]]);
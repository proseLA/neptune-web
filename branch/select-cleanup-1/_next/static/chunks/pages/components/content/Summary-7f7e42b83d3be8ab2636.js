_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[77],{"+kY7":function(e,t,n){var r=n("q9+l").f,a=n("8aeu"),o=n("fVMg")("toStringTag");e.exports=function(e,t,n){e&&!a(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},"0Q6q":function(e,t,n){"use strict";var r,a;n.d(t,"a",(function(){return r})),(a=r||(r={})).PROCESSING="processing",a.FAILED="failed",a.SUCCEEDED="succeeded",a.HIDDEN="hidden",a.DONE="done",a.NOT_DONE="notDone",a.PENDING="pending"},"1t7P":function(e,t,n){"use strict";var r=n("ax0f"),a=n("9JhN"),o=n("VCi3"),i=n("DpO5"),l=n("1Mu/"),c=n("56Cj"),s=n("TbR9"),u=n("ct80"),f=n("8aeu"),d=n("xt6W"),m=n("dSaG"),p=n("FXyv"),v=n("N9G2"),h=n("N4z3"),g=n("CD8Q"),b=n("lhjL"),y=n("guiJ"),E=n("DEeE"),N=n("ZdBB"),O=n("7lg/"),w=n("JAL5"),S=n("GFpt"),P=n("q9+l"),x=n("4Sk5"),T=n("WxKw"),D=n("uLp7"),k=n("TN3B"),j=n("MyxS"),_=n("1odi"),C=n("HYrn"),L=n("fVMg"),R=n("TkGI"),A=n("aokA"),I=n("+kY7"),M=n("zc29"),z=n("0FSu").forEach,G=j("hidden"),F=L("toPrimitive"),V=M.set,B=M.getterFor("Symbol"),U=Object.prototype,K=a.Symbol,q=o("JSON","stringify"),Q=S.f,W=P.f,J=O.f,X=x.f,H=k("symbols"),Y=k("op-symbols"),Z=k("string-to-symbol-registry"),$=k("symbol-to-string-registry"),ee=k("wks"),te=a.QObject,ne=!te||!te.prototype||!te.prototype.findChild,re=l&&u((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=Q(U,t);r&&delete U[t],W(e,t,n),r&&e!==U&&W(U,t,r)}:W,ae=function(e,t){var n=H[e]=y(K.prototype);return V(n,{type:"Symbol",tag:e,description:t}),l||(n.description=t),n},oe=s?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof K},ie=function(e,t,n){e===U&&ie(Y,t,n),p(e);var r=g(t,!0);return p(n),f(H,r)?(n.enumerable?(f(e,G)&&e[G][r]&&(e[G][r]=!1),n=y(n,{enumerable:b(0,!1)})):(f(e,G)||W(e,G,b(1,{})),e[G][r]=!0),re(e,r,n)):W(e,r,n)},le=function(e,t){p(e);var n=h(t),r=E(n).concat(fe(n));return z(r,(function(t){l&&!ce.call(n,t)||ie(e,t,n[t])})),e},ce=function(e){var t=g(e,!0),n=X.call(this,t);return!(this===U&&f(H,t)&&!f(Y,t))&&(!(n||!f(this,t)||!f(H,t)||f(this,G)&&this[G][t])||n)},se=function(e,t){var n=h(e),r=g(t,!0);if(n!==U||!f(H,r)||f(Y,r)){var a=Q(n,r);return!a||!f(H,r)||f(n,G)&&n[G][r]||(a.enumerable=!0),a}},ue=function(e){var t=J(h(e)),n=[];return z(t,(function(e){f(H,e)||f(_,e)||n.push(e)})),n},fe=function(e){var t=e===U,n=J(t?Y:h(e)),r=[];return z(n,(function(e){!f(H,e)||t&&!f(U,e)||r.push(H[e])})),r};(c||(D((K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=C(e),n=function(e){this===U&&n.call(Y,e),f(this,G)&&f(this[G],t)&&(this[G][t]=!1),re(this,t,b(1,e))};return l&&ne&&re(U,t,{configurable:!0,set:n}),ae(t,e)}).prototype,"toString",(function(){return B(this).tag})),D(K,"withoutSetter",(function(e){return ae(C(e),e)})),x.f=ce,P.f=ie,S.f=se,N.f=O.f=ue,w.f=fe,R.f=function(e){return ae(L(e),e)},l&&(W(K.prototype,"description",{configurable:!0,get:function(){return B(this).description}}),i||D(U,"propertyIsEnumerable",ce,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:K}),z(E(ee),(function(e){A(e)})),r({target:"Symbol",stat:!0,forced:!c},{for:function(e){var t=String(e);if(f(Z,t))return Z[t];var n=K(t);return Z[t]=n,$[n]=t,n},keyFor:function(e){if(!oe(e))throw TypeError(e+" is not a symbol");if(f($,e))return $[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!l},{create:function(e,t){return void 0===t?y(e):le(y(e),t)},defineProperty:ie,defineProperties:le,getOwnPropertyDescriptor:se}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ue,getOwnPropertySymbols:fe}),r({target:"Object",stat:!0,forced:u((function(){w.f(1)}))},{getOwnPropertySymbols:function(e){return w.f(v(e))}}),q)&&r({target:"JSON",stat:!0,forced:!c||u((function(){var e=K();return"[null]"!=q([e])||"{}"!=q({a:e})||"{}"!=q(Object(e))}))},{stringify:function(e,t,n){for(var r,a=[e],o=1;arguments.length>o;)a.push(arguments[o++]);if(r=t,(m(t)||void 0!==e)&&!oe(e))return d(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!oe(t))return t}),a[1]=t,q.apply(null,a)}});K.prototype[F]||T(K.prototype,F,K.prototype.valueOf),I(K,"Symbol"),_[G]=!0},"2lU4":function(e,t,n){},"34wW":function(e,t,n){var r=n("amH4"),a=n("QsUS");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"4/YM":function(e,t,n){"use strict";var r=n("t/tF").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"7lg/":function(e,t,n){var r=n("N4z3"),a=n("ZdBB").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==o.call(e)?function(e){try{return a(e)}catch(t){return i.slice()}}(e):a(r(e))}},BAoe:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r,a,o=n("DIbr"),i=n("ERkP"),l=n("kQwz");!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(a||(a={}));function c(e){var t=function(t){var n=Object(l.a)(),r=t.value,a=t.children,i=Object(o.c)(t,["value","children"]),c="string"===typeof r?new Date(r||0):r;return a("formatDate"===e?n.formatDateToParts(c,i):n.formatTimeToParts(c,i))};return t.displayName=a[e],t}function s(e){var t=function(t){var n=Object(l.a)(),r=t.value,a=t.children,c=Object(o.c)(t,["value","children"]),s=n[e](r,c);if("function"===typeof a)return a(s);var u=n.textComponent||i.Fragment;return i.createElement(u,null,s)};return t.displayName=r[e],t}function u(e){return e}s("formatDate"),s("formatTime"),s("formatNumber"),s("formatList"),s("formatDisplayName"),c("formatDate"),c("formatTime")},GAp3:function(e,t,n){"use strict";n("vrRf"),n("KqXw"),n("Ysgh");var r=n("97Jx"),a=n.n(r),o=n("KEM+"),i=n.n(o),l=n("m3Bd"),c=n.n(l),s=n("ERkP"),u=n.n(s),f=n("O94r"),d=n.n(f),m=n("05Xt"),p=(n("2lU4"),n("dLgZ")),v=n("eKd8"),h=n("VehP"),g=n("P8nL"),b=n("qGsU"),y=function(e){var t=e.title,n=e.body,r=e.footer,o=e.onClose,l=e.className,s=e.open,f=e.size,h=e.closeOnClick,y=e.scroll,E=e.position,N=c()(e,["title","body","footer","onClose","className","open","size","closeOnClick","scroll","position"]),O=function(e){return-1!==l.split(" ").indexOf(e)},w=O("compact"),S=O("no-divider");return u.a.createElement(g.a,{open:s,scrollable:y===p.a.CONTENT,onClose:function(e){("click"===e.type&&h||"click"!==e.type)&&o(e)},className:d()("d-flex","justify-content-center",{"align-items-center":E===v.a.CENTER,"align-items-start":E===v.a.TOP})},u.a.createElement(m.a,{appear:!0,in:s,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},u.a.createElement("div",a()({className:d()("tw-modal",{"tw-modal--content":y===p.a.CONTENT},"fade","outline-none",l)},N),u.a.createElement("div",{className:d()("tw-modal-dialog","d-flex",i()({},"tw-modal-".concat(f),f)),"aria-modal":!0,role:"dialog"},u.a.createElement("div",{className:d()("tw-modal-content","d-flex","flex-column","justify-content-between",{"tw-modal-compact":w,"tw-modal-no-title":!t})},u.a.createElement("div",{className:d()("tw-modal-header","d-flex","align-items-center","justify-content-between","flex-wrap",{"modal--withoutborder":!t||S})},u.a.createElement("h4",{className:"tw-modal-title"},t),u.a.createElement(b.a,{onClick:o})),u.a.createElement("div",{className:"tw-modal-body"},n),r&&u.a.createElement("div",{className:d()("tw-modal-footer","d-flex","align-items-center","flex-wrap",{"modal--withoutborder":S})},r))))))};y.defaultProps={title:null,footer:null,size:h.a.MEDIUM,className:"",closeOnClick:!0,scroll:p.a.VIEWPORT,position:v.a.CENTER},t.a=y},KcoV:function(e,t,n){},LKIi:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return P})),n.d(t,"default",(function(){return T}));var r,a=n("cxan"),o=n("HbGN"),i=n("ERkP"),l=n.n(i),c=n("ZVZ0"),s=(n("1t7P"),n("jQ/y"),n("KEM+")),u=n.n(s),f=n("O94r"),d=n.n(f),m=n("kQwz"),p=n("/Vl7"),v=(n("j+zR"),n("e0j8")),h=n("0Q6q"),g=n("VehP"),b=n("BAoe"),y=Object(b.a)({statusNotDone:{id:"neptune.Summary.statusNotDone"},statusPending:{id:"neptune.Summary.statusPending"},statusDone:{id:"neptune.Summary.statusDone"}}),E=(n("rrw+"),{done:p.g,pending:p.v}),N=(r={},u()(r,h.a.NOT_DONE,"statusNotDone"),u()(r,h.a.DONE,"statusDone"),u()(r,h.a.PENDING,"statusPending"),r),O=function(e){var t,n=e.action,r=e.as,a=e.className,o=e.content,c=e.description,s=void 0===c?o:c,u=e.help,f=e.icon,p=e.illustration,h=e.info,b=void 0===h?u:h,O=e.status,w=e.title,S=Object(m.a)(),P=p;f&&(P=24===(null===f||void 0===f||null===(t=f.props)||void 0===t?void 0:t.size)?f:Object(i.cloneElement)(f,{size:24}));var x=O&&E[O];return l.a.createElement(r,{className:d()("np-summary d-flex align-items-start",a),"aria-label":O&&S.formatMessage(y[N[O]])},l.a.createElement("div",{className:"np-summary__icon"},P,x&&l.a.createElement(x,{size:16,filled:!0,className:"np-summary-icon__".concat(O)})),l.a.createElement("div",{className:"np-summary__body m-l-2"},l.a.createElement("div",{className:"np-summary__title d-flex"},l.a.createElement("strong",null,w),b&&l.a.createElement(v.a,{"aria-label":b["aria-label"],className:"m-l-1 hidden-xs",content:b.content,presentation:b.presentation,title:b.title})),s&&l.a.createElement("div",{className:"np-summary__description"},s),n&&l.a.createElement("a",{href:n.href,target:n.target,onClick:n.onClick,className:"np-summary__action","aria-label":n["aria-label"]},n.text)),b&&l.a.createElement(v.a,{"aria-label":b["aria-label"],className:"m-l-2 hidden-sm hidden-md hidden-lg hidden-xl",content:b.content,presentation:b.presentation,size:g.a.LARGE,title:b.title}))};O.defaultProps={action:null,as:"div",className:null,content:null,help:null,illustration:null,status:null};var w=O,S=n("Qi1R"),P=(l.a.createElement,{name:"Summary"}),x={meta:P};function T(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},x,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"For displaying a list of requirements, some instructions, or perhaps some general information. Always has an icon and title, can also have a content block and a help icon with some popover text."),Object(c.a)("div",null,Object(c.a)(S.b,{code:"<ul>\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    icon={<HomeIcon size={24} />}\n    title=\"Verify your address\"\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'You entered your address',\n      content: 'Your address has been verified, no more actions are required.',\n      'aria-label': 'Please click here to know more about your address update status',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"You verified your address\"\n    status={Status.DONE}\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'Address verification pending',\n      content:\n        'Your address change is currently being processed. Please allow 48 hours for verification.',\n      presentation: 'MODAL',\n      'aria-label': 'Please click here to know more about your address update status',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"We\u2019re verifying your address\"\n    status={Status.PENDING}\n  />\n</ul>;\n",scope:{Summary:w,Status:h.a,HomeIcon:p.s},mdxType:"LiveEditorBlock"}),Object(c.a)(S.a,{componentName:"Summary",mdxType:"GeneratePropsTable"})))}T.isMDXComponent=!0},LxGA:function(e,t,n){},OUB3:function(e,t,n){"use strict";var r,a;n.d(t,"a",(function(){return r})),(a=r||(r={})).POPOVER="POPOVER",a.MODAL="MODAL"},Qzre:function(e,t,n){var r=n("FXyv"),a=n("hpdy"),o=n("fVMg")("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||void 0==(n=r(i)[o])?t:a(n)}},TkGI:function(e,t,n){var r=n("fVMg");t.f=r},Ysgh:function(e,t,n){"use strict";var r=n("lbJE"),a=n("jl0/"),o=n("FXyv"),i=n("cww3"),l=n("Qzre"),c=n("4/YM"),s=n("tJVe"),u=n("34wW"),f=n("QsUS"),d=n("ct80"),m=[].push,p=Math.min,v=!d((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(i(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,o);for(var l,c,s,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,v=new RegExp(e.source,d+"g");(l=f.call(v,r))&&!((c=v.lastIndex)>p&&(u.push(r.slice(p,l.index)),l.length>1&&l.index<r.length&&m.apply(u,l.slice(1)),s=l[0].length,p=c,u.length>=o));)v.lastIndex===l.index&&v.lastIndex++;return p===r.length?!s&&v.test("")||u.push(""):u.push(r.slice(p)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=i(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,n):r.call(String(a),t,n)},function(e,a){var i=n(r,e,this,a,r!==t);if(i.done)return i.value;var f=o(e),d=String(this),m=l(f,RegExp),h=f.unicode,g=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),b=new m(v?f:"^(?:"+f.source+")",g),y=void 0===a?4294967295:a>>>0;if(0===y)return[];if(0===d.length)return null===u(b,d)?[d]:[];for(var E=0,N=0,O=[];N<d.length;){b.lastIndex=v?N:0;var w,S=u(b,v?d:d.slice(N));if(null===S||(w=p(s(b.lastIndex+(v?0:N)),d.length))===E)N=c(d,N,h);else{if(O.push(d.slice(E,N)),O.length===y)return O;for(var P=1;P<=S.length-1;P++)if(O.push(S[P]),O.length===y)return O;N=E=w}}return O.push(d.slice(E)),O}]}),!v)},"Z0+U":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Summary",function(){return n("LKIi")}])},aokA:function(e,t,n){var r=n("PjZX"),a=n("8aeu"),o=n("TkGI"),i=n("q9+l").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});a(t,e)||i(t,e,{value:o.f(e)})}},b1ss:function(e,t,n){"use strict";n("2G9S");var r,a=n("KEM+"),o=n.n(a),i=n("ddV6"),l=n.n(i),c=n("ERkP"),s=n.n(c),u=n("O94r"),f=n.n(u),d=n("eKd8"),m=n("69BZ"),p=n("s+Iv"),v=(n("LxGA"),function(e){var t=e.children,n=e.className,r=e.content,a=e.preferredPlacement,o=e.title;h({preferredPlacement:a});var i=Object(c.useRef)(null),u=Object(c.useState)(!1),d=l()(u,2),p=d[0],v=d[1];return s.a.createElement("span",{className:f()("np-popover d-inline-block",n)},s.a.createElement("span",{className:"d-inline-block",ref:i},Object(c.cloneElement)(t,{onClick:function(){var e;null!==t&&void 0!==t&&null!==(e=t.props)&&void 0!==e&&e.onClick&&t.props.onClick(),v(!p)}})),s.a.createElement(m.a,{open:p,anchorRef:i,position:g[a]||a,onClose:function(){return v(!1)},arrow:!0,className:"np-popover__container"},s.a.createElement("div",{className:"np-popover__content","aria-hidden":!p,role:"tooltip"},o&&s.a.createElement("div",{role:"heading","aria-level":1,className:"np-popover__title m-b-1"},o),r)))}),h=function(e){var t=e.preferredPlacement;Object(p.b)("Popover has deprecated ".concat(t," value for the 'preferredPlacement' prop. Please use ").concat(g[t]," instead."),g[t])};v.defaultProps={className:void 0,preferredPlacement:d.a.RIGHT,title:void 0};var g=(r={},o()(r,d.a.BOTTOM_LEFT,d.a.BOTTOM),o()(r,d.a.BOTTOM_RIGHT,d.a.BOTTOM),o()(r,d.a.LEFT_TOP,d.a.TOP),o()(r,d.a.RIGHT_TOP,d.a.TOP),r);t.a=v},dLgZ:function(e,t,n){"use strict";var r,a;n.d(t,"a",(function(){return r})),(a=r||(r={})).CONTENT="content",a.VIEWPORT="viewport"},e0j8:function(e,t,n){"use strict";var r=n("97Jx"),a=n.n(r),o=n("ddV6"),i=n.n(o),l=n("ERkP"),c=n.n(l),s=n("O94r"),u=n.n(s),f=n("/Vl7"),d=n("b1ss"),m=n("GAp3"),p=n("VehP"),v=n("eKd8"),h=n("OUB3"),g=(n("v9dN"),function(e){var t=e.className,n=e.content,r=e.presentation,o=e.size,s=e.title,g=Object(l.useState)(!1),b=i()(g,2),y=b[0],E=b[1],N=r===h.a.MODAL,O=o===p.a.SMALL,w={"aria-label":e["aria-label"],className:"btn-unstyled",children:c.a.createElement(f.r,{size:O?16:24})};return c.a.createElement("span",{className:u()(t,"np-info",{"np-info__small":O,"np-info__large":!O})},N?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",a()({type:"button",onClick:function(){return E(!y)}},w)),c.a.createElement(m.a,{body:n,onClose:function(){return E(!1)},open:y,title:s})):c.a.createElement(d.a,{content:n,preferredPlacement:v.a.BOTTOM,title:s},c.a.createElement("button",a()({type:"button"},w))))});g.defaultProps={className:void 0,content:void 0,presentation:h.a.POPOVER,size:p.a.SMALL,title:void 0},t.a=g},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,a){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+a+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+a+". Validation failed.");var o=t(n)?e.isRequired:e;return o.apply(this,arguments)}}},"jQ/y":function(e,t,n){"use strict";var r=n("ax0f"),a=n("1Mu/"),o=n("9JhN"),i=n("8aeu"),l=n("dSaG"),c=n("q9+l").f,s=n("tjTa"),u=o.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new u(e):void 0===e?u():u(e);return""===e&&(f[t]=!0),t};s(d,u);var m=d.prototype=u.prototype;m.constructor=d;var p=m.toString,v="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=p.call(e);if(i(f,e))return"";var n=v?t.slice(7,-1):t.replace(h,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},lbJE:function(e,t,n){"use strict";n("KqXw");var r=n("uLp7"),a=n("ct80"),o=n("fVMg"),i=n("QsUS"),l=n("WxKw"),c=o("species"),s=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),f=o("replace"),d=!!/./[f]&&""===/./[f]("a","$0"),m=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var p=o(e),v=!a((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),h=v&&!a((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!v||!h||"replace"===e&&(!s||!u||d)||"split"===e&&!m){var g=/./[p],b=n(p,""[e],(function(e,t,n,r,a){return t.exec===i?v&&!a?{done:!0,value:g.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=b[0],E=b[1];r(String.prototype,e,y),r(RegExp.prototype,p,2==t?function(e,t){return E.call(e,this,t)}:function(e){return E.call(e,this)})}f&&l(RegExp.prototype[p],"sham",!0)}},qGsU:function(e,t,n){"use strict";n("1IsZ");var r=n("ERkP"),a=n.n(r),o=n("O94r"),i=n.n(o),l=n("kQwz"),c=n("/Vl7"),s=n("BAoe"),u=Object(s.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),a.a.forwardRef((function(e,t){var n=Object(l.a)(),r=e.onClick,o=e.className,s=e.size;return a.a.createElement("button",{ref:t,type:"button",className:i()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":s===f.Size.LARGE},o),"aria-label":n.formatMessage(u.ariaLabel),onClick:r},a.a.createElement(c.k,{size:s}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};t.a=f},"s+Iv":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));n("vrRf");function r(t){var n,r;0<=["development","test"].indexOf(null===(n=e)||void 0===n||null===(r=n.env)||void 0===r?void 0:"production")&&console.warn(t)}function a(e,t){t&&r(e)}}).call(this,n("F63i"))},"t/tF":function(e,t,n){var r=n("i7Kn"),a=n("cww3"),o=function(e){return function(t,n){var o,i,l=String(a(t)),c=r(n),s=l.length;return c<0||c>=s?e?"":void 0:(o=l.charCodeAt(c))<55296||o>56319||c+1===s||(i=l.charCodeAt(c+1))<56320||i>57343?e?l.charAt(c):o:e?l.slice(c,c+2):i-56320+(o-55296<<10)+65536}};e.exports={codeAt:o(!1),charAt:o(!0)}},v9dN:function(e,t,n){}},[["Z0+U",0,1,2,6,3,5,7,8,9,10,11,4]]]);
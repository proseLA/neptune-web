_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{"+KRd":function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),(o=r||(r={})).NEGATIVE="negative",o.NEUTRAL="neutral",o.POSITIVE="positive",o.WARNING="warning",o.INFO="info",o.ERROR="error",o.SUCCESS="success"},"+KXO":function(e,t,n){var r=n("ax0f"),o=n("N9G2"),a=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){a(1)}))},{keys:function(e){return a(o(e))}})},"+oxZ":function(e,t,n){var r=n("9JhN"),o=n("Ew2P"),a=n("6OVi"),l=n("WxKw");for(var i in o){var u=r[i],s=u&&u.prototype;if(s&&s.forEach!==a)try{l(s,"forEach",a)}catch(c){s.forEach=a}}},"0FSu":function(e,t,n){var r=n("IRf+"),o=n("g6a+"),a=n("N9G2"),l=n("tJVe"),i=n("aoZ+"),u=[].push,s=function(e){var t=1==e,n=2==e,s=3==e,c=4==e,f=6==e,p=7==e,d=5==e||f;return function(m,h,v,b){for(var g,T,P=a(m),y=o(P),w=r(h,v,3),E=l(y.length),O=0,x=b||i,A=t?x(m,E):n||p?x(m,0):void 0;E>O;O++)if((d||O in y)&&(T=w(g=y[O],O,P),e))if(t)A[O]=T;else if(T)switch(e){case 3:return!0;case 5:return g;case 6:return O;case 2:u.call(A,g)}else switch(e){case 4:return!1;case 7:u.call(A,g)}return f?-1:s||c?c:A}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},"2G9S":function(e,t,n){"use strict";var r=n("ax0f"),o=n("ct80"),a=n("xt6W"),l=n("dSaG"),i=n("N9G2"),u=n("tJVe"),s=n("2sZ7"),c=n("aoZ+"),f=n("GJtw"),p=n("fVMg"),d=n("T+0C"),m=p("isConcatSpreadable"),h=d>=51||!o((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),v=f("concat"),b=function(e){if(!l(e))return!1;var t=e[m];return void 0!==t?!!t:a(e)};r({target:"Array",proto:!0,forced:!h||!v},{concat:function(e){var t,n,r,o,a,l=i(this),f=c(l,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(b(a=-1===t?l:arguments[t])){if(p+(o=u(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in a&&s(f,p,a[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,a)}return f.length=p,f}})},"2sZ7":function(e,t,n){"use strict";var r=n("CD8Q"),o=n("q9+l"),a=n("lhjL");e.exports=function(e,t,n){var l=r(t);l in e?o.f(e,l,a(0,n)):e[l]=n}},"3g/d":function(e,t,n){"use strict";var r=n("ddV6"),o=n.n(r),a=n("KEM+"),l=n.n(a),i=(n("+KXO"),n("2G9S"),n("jQ3i"),n("x4t0"),n("ERkP")),u=n.n(i),s=n("O94r"),c=n.n(s),f=(n("j+zR"),n("/Vl7")),p=n("+KRd"),d=n("qGsU"),m=n("fO07"),h=n("97Jx"),v=n.n(h),b=n("UTRh"),g=[n("2//c").a.STRONG],T=function(e){return u.a.createElement(b.a,v()({},e,{as:"span",allowList:g,blockList:void 0}))};T.defaultProps={className:void 0};var P,y,w,E=T,O=n("s+Iv"),x=n("uIuh"),A=(P={},l()(P,p.a.SUCCESS,p.a.POSITIVE),l()(P,p.a.INFO,p.a.NEUTRAL),l()(P,p.a.ERROR,p.a.NEGATIVE),P),N=(y={},l()(y,p.a.POSITIVE,f.h),l()(y,p.a.NEUTRAL,f.u),l()(y,p.a.WARNING,f.a),l()(y,p.a.NEGATIVE,f.b),y),L=function e(t){var n=Object(i.useState)(!1),r=o()(n,2),a=r[0],l=r[1],s=t.arrow,f=t.action,p=t.children,h=t.className,v=t.icon,b=t.onDismiss,g=t.message,T=t.type,P=Object(i.useRef)(null),y=Object(x.a)().isRTL;if(s){var w=Object(m.a)(e,s);return u.a.createElement(w,t)}!function(e){var t=e.size,n=e.type;Object(O.b)("Alert no longer supports any possible variations in size. Please remove the `size` prop.",!!t),Object(O.b)("Alert has deprecated the ".concat(n," value for the `type` prop. Please update to ").concat(R[n],"."),I.includes(n))}(t);var L=A[T]||T,S=N[L],_=v?Object(i.cloneElement)(v,{size:24}):u.a.createElement(S,{size:24});return u.a.createElement("div",{role:"alert",className:c()("alert d-flex","alert-".concat(L),h),onTouchStart:function(){return l(!0)},onTouchEnd:function(e){a&&f&&null!==P&&void 0!==P&&P.current&&!P.current.contains(e.target)&&("_blank"===(null===f||void 0===f?void 0:f.target)?window.top.open(f.href):window.top.location.assign(f.href)),l(!1)},onTouchMove:function(){return l(!1)}},_,u.a.createElement("div",{className:c()("alert__message flex-grow-1",{"p-l-2":!y,"p-r-2":y})},u.a.createElement("div",null,p||u.a.createElement(E,null,g)),f&&u.a.createElement("a",{href:f.href,className:"m-t-1 d-inline-block","aria-label":f["aria-label"],target:f.target},f.text)),b&&u.a.createElement(d.a,{onClick:b,size:16,className:c()({"m-l-2":!y,"m-r-2":y}),ref:P}))},R=(w={},l()(w,p.a.SUCCESS,"Sentiment.POSITIVE"),l()(w,p.a.INFO,"Sentiment.NEUTRAL"),l()(w,p.a.ERROR,"Sentiment.NEGATIVE"),w),I=Object.keys(A);L.defaultProps={action:void 0,arrow:void 0,className:void 0,dismissible:void 0,icon:void 0,type:p.a.NEUTRAL};t.a=L},"6OVi":function(e,t,n){"use strict";var r=n("0FSu").forEach,o=n("f4p7")("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},BAoe:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r,o,a=n("D57K"),l=n("ERkP"),i=n("kQwz");!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(o||(o={}));function u(e){var t=function(t){var n=Object(i.a)(),r=t.value,o=t.children,l=Object(a.c)(t,["value","children"]),u="string"===typeof r?new Date(r||0):r;return o("formatDate"===e?n.formatDateToParts(u,l):n.formatTimeToParts(u,l))};return t.displayName=o[e],t}function s(e){var t=function(t){var n=Object(i.a)(),r=t.value,o=t.children,u=Object(a.c)(t,["value","children"]),s=n[e](r,u);if("function"===typeof o)return o(s);var c=n.textComponent||l.Fragment;return l.createElement(c,null,s)};return t.displayName=r[e],t}function c(e){return e}s("formatDate"),s("formatTime"),s("formatNumber"),s("formatList"),s("formatDisplayName"),u("formatDate"),u("formatTime")},CqdY:function(e,t){e.exports="/neptune-web/branch/datelookup-behaviour-fix/_next/static/images/popover-release-mar-2021_1-b7ce8084bff5fa44a978536b5e6d1537.png"},Ew2P:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},F63i:function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var u,s=[],c=!1,f=-1;function p(){c&&u&&(c=!1,u.length?s=u.concat(s):f=-1,s.length&&d())}function d(){if(!c){var e=i(p);c=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||c||i(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},GJtw:function(e,t,n){var r=n("ct80"),o=n("fVMg"),a=n("T+0C"),l=o("species");e.exports=function(e){return a>=51||!r((function(){var t=[];return(t.constructor={})[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},HFyK:function(e,t,n){"use strict";var r=n("ddV6"),o=n.n(r),a=n("ERkP"),l=n.n(a),i=n("O94r"),u=n.n(i),s=(n("+oxZ"),{threshold:.1}),c=function(e){var t=e.elRef;if("eager"===e.loading)return[!1];var n=Object(a.useState)(!1),r=o()(n,2),l=r[0],i=r[1],u=function(e,n){e.forEach((function(e){e.isIntersecting&&(i(!0),n.unobserve(t.current))}))};return Object(a.useEffect)((function(){var e,n=!1;return window.IntersectionObserver&&t&&t.current?!n&&(e=new IntersectionObserver(u,s)).observe(t.current):i(!0),function(){n=!0,e&&e.unobserve(t.current)}}),[t]),[l]},f=(n("PkpH"),function(e){var t=e.id,n=e.src,r=e.alt,i=e.onLoad,s=e.onError,f=e.className,p=e.loading,d=e.stretch,m=e.shrink,h=Object(a.useRef)(),v=c({elRef:h,loading:p}),b=o()(v,1)[0],g=n,T=i;return"lazy"!==p||b||(g="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",T=null),l.a.createElement("img",{id:t,alt:r,src:g,className:u()(["tw-image",{"tw-image__stretch":d,"tw-image__shrink":m},f]),ref:h,onLoad:T,onError:s})});f.defaultProps={id:null,className:"",onLoad:function(){},onError:function(){},loading:"eager",stretch:!0,shrink:!0};t.a=f},"IRf+":function(e,t,n){var r=n("hpdy");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},KcoV:function(e,t,n){},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Ua7V:function(e,t){e.exports=function(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(u){i=!0,o=u}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},"X+oG":function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i}));var r=n("ERkP"),o=n.n(r),a=n("AXuR"),l=o.a.createContext("ltr"),i=function(e){var t=e.locale,n=e.children;return o.a.createElement(l.Provider,{value:-1<a.b.indexOf(t)?"rtl":"ltr"},n)};i.defaultProps={children:null,locale:a.a}},XU0q:function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),(o=r||(r={})).TOP_LEFT="up-left",o.TOP="up-center",o.TOP_RIGHT="up-right",o.BOTTOM_LEFT="down-left",o.BOTTOM="down-center",o.BOTTOM_RIGHT="down-right"},"aoZ+":function(e,t,n){var r=n("dSaG"),o=n("xt6W"),a=n("fVMg")("species");e.exports=function(e,t){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},c9VE:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return m})),n.d(t,"default",(function(){return h}));var r=n("ERkP"),o=n.n(r),a=n("3g/d"),l=n("HFyK"),i=n("CqdY"),u=n.n(i),s=n("p9bC"),c=n.n(s),f=n("snVg"),p=n.n(f),d=o.a.createElement,m={name:"Popover Upgrade guide",date:"2021-03-08",authors:[{name:"Andrea Piras",githubUsername:"andreapiras"}],hidden:!0};function h(){return d("div",null,d(a.a,{message:"These changes will be released in components v35. See the Popover designs, the PR for these changes, play with a demo or try the beta release in your own repository by updating to @transferwise/components@34.2.16-beta.48"}),d("p",null,"We refactored Popover to make it more robust and accessible. The positioning engine has also been replaced with a more sophisticated tool called"," ",d("a",{href:"https://popper.js.org/",rel:"noreferrer",target:"_blank"},"Popper"),"."),d("h2",null,"Changes"),d("table",{className:"docs-table table"},d("thead",null,d("tr",null,d("th",null,"Old API"),d("th",null,"New API"),d("th",null,"Change type"))),d("tbody",null,d("tr",null,d("td",null,d("code",null,"children: Types.element | Types.string")),d("td",null,d("code",null,"children: Types.node")),d("td",null,"BREAKING CHANGE: Internal logic has changed. Elements will not be wrapped in focusable elements")),d("tr",null,d("td",null,d("code",null,"classNames: Types.string")),d("td",null,d("code",null,"className: Types.string")),d("td",null,"BREAKING CHANGE: prop name")),d("tr",null,d("td",null,d("code",null,"content:",d("br",null),"Types.element | Types.string | Types.func")),d("td",null,d("code",null,"content: Types.node")),d("td",null,"BREAKING CHANGE: Removed type function support")),d("tr",null,d("td",null,d("code",null,"containsFocusableElement")),d("td",null,"-"),d("td",null,"Deleted this property")),d("tr",null,d("td",null,d("code",null,"preferredPlacement: ",d("br",null),"Popover.Placement.TOP | Popover.Placement.RIGHT |",d("br",null),"Popover.Placement.BOTTOM | Popover.Placement.LEFT | Popover.Placement.LEFT_TOP |",d("br",null),"Popover.Placement.RIGHT_TOP | Popover.Placement.BOTTOM_RIGHT |",d("br",null),"Popover.Placement.BOTTOM_LEFT")),d("td",null,d("code",null,"preferredPlacement:",d("br",null),"Popover.Placement.TOP | Popover.Placement.RIGHT | Popover.Placement.BOTTOM | Popover.Placement.LEFT")),d("td",null)),d("tr",null,d("td",null,d("code",null,"title: Types.element | Types.string")),d("td",null,d("code",null,"title: Types.node")),d("td",null)))),d("ul",null,d("li",null,d("b",null,"className"))),d(a.a,{type:"warning",message:"Breaking change"}),d("p",null,"ClassNames has been renamed to ClassName and To be consistent with the rest of our API now accepts only strings \u201cclass1 class2 \u2026\u201d"),d("ul",null,d("li",null,d("b",null,"containsFocusableElement"))),d(a.a,{type:"warning",message:"Breaking change"}),d("p",null,"containsFocusableElement was introduced in this"," ",d("a",{href:"https://github.com/transferwise/neptune-web/commit/e0787fe3ed0dc1af48a3296129cda4f479219da6#diff-d4f3b771644287c2d339aea614ebe1e12841586ca1d3c421e21d98f2bb7f877a"},"PR")," ","to allow Popover to be opened by multiple triggers and attach focus props."),d("p",null,"Example: Avatar + choose an icons"),d(l.a,{src:u.a,alt:"Avatar + choose an icons",loading:"lazy",stretch:!1,shrink:!0}),d("p",null,"To achieve the same behavior you can do something similar:"),d("pre",null,"// This is not the cleanest solution but still better to embed this logic in Popover for one use case.\nconst simulateTriggerClick = () => {\n  // Do your stuff here\n  triggerRef.current.click();\n};\n<Popover content={<IconElement onClick={()=>simulateTriggerClick()} \u2026>\n  <button ref={triggerRef} ...>\n    <Avatar ...>\n      \ud83e\udddc\ud83c\udffc\n    </Avatar>\n    Choose an icon\n  </button>\n</Popover>"),d("ul",null,d("li",null,d("b",null,"preferredPlacement"))),d(a.a,{type:"warning",message:"**DEPRECATION**"}),d("p",null,"We deprecated some of the preferredPlacement"),d("table",{className:"docs-table table"},d("thead",null,d("tr",null,d("th",null,"Deprecated"),d("th",null,"Supported"))),d("tbody",null,d("tr",null,d("td",null,d("code",null,"Popover.Position.LEFT_TOP")),d("td",null,d("code",null,"Popover.Position.TOP"))),d("tr",null,d("td",null,d("code",null,"Popover.Position.RIGHT_TOP")),d("td",null,d("code",null,"Popover.Position.TOP"))),d("tr",null,d("td",null,d("code",null,"Popover.Position.BOTTOM_LEFT")),d("td",null,d("code",null,"Popover.Position.BOTTOM"))),d("tr",null,d("td",null,d("code",null,"Popover.Position.BOTTOM_RIGHT")),d("td",null,d("code",null,"Popover.Position.BOTTOM"))))),d("p",null,"The only supported position will be TOP, RIGHT, BOTTOM, LEFT. Please note that Popper engine is going to determine the best position for your popover based on the space available on screen if the one provided is not suitable."),d("ul",null,d("li",null,d("b",null,"content"))),d(a.a,{type:"warning",message:"Breaking change"}),d("p",null,"The old API used to accept"),d("ul",null,d("li",null,"Types.element"),d("li",null,"Types.string"),d("li",null,"Types.func")),d("p",null,"Now it will accept only nodes.",d("br",null),"Popover content should accept only a restricted set of html (see docs) and translatable string."),d("ul",null,d("li",null,d("b",null,"Markup"))),d(a.a,{type:"warning",message:"Breaking change"}),d("p",null,"Although we don\u2019t provide official support for user relying on html and css internal implementation, it\u2019s worth mention that the both html structure and css have changed."),d("h2",null,"Migration Example"),d("h3",null,"Old API"),d("pre",null,'<Popover\n  containsFocusableElement={containsFocusableElement}\n  content="You\u2019ll get this rate as long..."\n  preferredPlacement={Popover.Placement.BOTTOM_RIGHT}\n  title="Guaranteed rate"\n>\n  <Icon> / <span> / string\n</Popover>'),d("h3",null,"New API"),d("pre",null,'<Popover\n  content={You\u2019ll get this rate as long...}\n  preferredPlacement={Popover.Placement.BOTTOM}\n  title="Guaranteed rate"\n>\n  <button ...>\n      <Icon> / string\n  </button>\n</Popover>'),d("h2",null,"Adaptive Positioning"),d(a.a,{type:"warning",message:"**VISUAL CHANGE**"}),d("p",null,"At the moment Popover doesn\u2019t change its placements when reaching the windows boundaries. Its position gets recalculated only on open/close. The new version adapts to the container and calculates automatically the best placement on screen for both content and arrow"),d(l.a,{src:c.a,alt:"Popover Adaptive Positioning",loading:"lazy",stretch:!1}),d("h2",null,"Mobile Behaviour"),d(a.a,{type:"warning",message:"**VISUAL CHANGE**"}),d("p",null,"In order to align mobile web with mobile behaviour, Popover will now open in a bottomSheet on Mobile size devices."),d(l.a,{src:p.a,alt:"Popover example of mobile behaviour",loading:"lazy",stretch:!1}),d("h2",null,"Dependency requirements"),d("pre",null,"@transferwise/components >= 35.x.x",d("br",null),"@transferwise/neptune-css >= 9.x.x"))}},ddV6:function(e,t,n){var r=n("qPgQ"),o=n("Ua7V"),a=n("peMk"),l=n("f2kJ");e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},f4p7:function(e,t,n){"use strict";var r=n("ct80");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},fO07:function(e,t,n){"use strict";var r=n("97Jx"),o=n.n(r),a=(n("2G9S"),n("ERkP")),l=n.n(a),i=n("O94r"),u=n.n(i),s=n("XU0q");function c(e){if(e){var t=["arrow"],n=s.a.BOTTOM,r=s.a.BOTTOM_LEFT,o=s.a.BOTTOM_RIGHT,a=s.a.TOP,l=s.a.TOP_RIGHT,i=s.a.TOP_LEFT;switch(e){case n:return t.concat("arrow-bottom","arrow-center");case r:return t.concat("arrow-bottom","arrow-left");case o:return t.concat("arrow-bottom","arrow-right");case a:return t.concat("arrow-center");case l:return t.concat("arrow-right");case i:default:return t}}return""}t.a=function(e,t){var n=function(n){return l.a.createElement(e,o()({},n,{className:u()(n.className,c(t)),arrow:void 0}))};return n.defaultProps={className:void 0},n}},hpdy:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,o){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var a=t(n)?e.isRequired:e;return a.apply(this,arguments)}}},lpmq:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},p9bC:function(e,t){e.exports="/neptune-web/branch/datelookup-behaviour-fix/_next/static/images/popover-release-mar-2021_2-304524b1e4ec399923e767c20cefdbab.png"},pWoL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2021-03-08-popover-upgrade-guide",function(){return n("c9VE")}])},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},qGsU:function(e,t,n){"use strict";n("1IsZ");var r=n("ERkP"),o=n.n(r),a=n("O94r"),l=n.n(a),i=n("kQwz"),u=n("/Vl7"),s=n("BAoe"),c=Object(s.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),o.a.forwardRef((function(e,t){var n=Object(i.a)(),r=e.onClick,a=e.className,s=e.size;return o.a.createElement("button",{ref:t,type:"button",className:l()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":s===f.Size.LARGE},a),"aria-label":n.formatMessage(c.ariaLabel),onClick:r},o.a.createElement(u.l,{size:s}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};t.a=f},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},snVg:function(e,t){e.exports="/neptune-web/branch/datelookup-behaviour-fix/_next/static/images/popover-release-mar-2021_3-6bde12d971dc956ab728043882e085fb.png"},uIuh:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("ERkP"),o=n("X+oG"),a=function(){var e=Object(r.useContext)(o.a);return{direction:e,isRTL:"rtl"===e}}},xt6W:function(e,t,n){var r=n("amH4");e.exports=Array.isArray||function(e){return"Array"==r(e)}}},[["pWoL",0,1,6,5,7,8,12,4]]]);
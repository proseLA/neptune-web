_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{"+KRd":function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),(o=r||(r={})).NEGATIVE="negative",o.NEUTRAL="neutral",o.POSITIVE="positive",o.WARNING="warning",o.INFO="info",o.ERROR="error",o.SUCCESS="success"},"+KXO":function(e,t,n){var r=n("ax0f"),o=n("N9G2"),a=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){a(1)}))},{keys:function(e){return a(o(e))}})},"+oxZ":function(e,t,n){var r=n("9JhN"),o=n("Ew2P"),a=n("6OVi"),l=n("WxKw");for(var i in o){var c=r[i],u=c&&c.prototype;if(u&&u.forEach!==a)try{l(u,"forEach",a)}catch(s){u.forEach=a}}},"0FSu":function(e,t,n){var r=n("IRf+"),o=n("g6a+"),a=n("N9G2"),l=n("tJVe"),i=n("aoZ+"),c=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,s=4==e,f=6==e,d=7==e,p=5==e||f;return function(m,h,v,b){for(var g,T,P=a(m),y=o(P),w=r(h,v,3),E=l(y.length),O=0,A=b||i,L=t?A(m,E):n||d?A(m,0):void 0;E>O;O++)if((p||O in y)&&(T=w(g=y[O],O,P),e))if(t)L[O]=T;else if(T)switch(e){case 3:return!0;case 5:return g;case 6:return O;case 2:c.call(L,g)}else switch(e){case 4:return!1;case 7:c.call(L,g)}return f?-1:u||s?s:L}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},"2G9S":function(e,t,n){"use strict";var r=n("ax0f"),o=n("ct80"),a=n("xt6W"),l=n("dSaG"),i=n("N9G2"),c=n("tJVe"),u=n("2sZ7"),s=n("aoZ+"),f=n("GJtw"),d=n("fVMg"),p=n("T+0C"),m=d("isConcatSpreadable"),h=p>=51||!o((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),v=f("concat"),b=function(e){if(!l(e))return!1;var t=e[m];return void 0!==t?!!t:a(e)};r({target:"Array",proto:!0,forced:!h||!v},{concat:function(e){var t,n,r,o,a,l=i(this),f=s(l,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(b(a=-1===t?l:arguments[t])){if(d+(o=c(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,d++)n in a&&u(f,d,a[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(f,d++,a)}return f.length=d,f}})},"2sZ7":function(e,t,n){"use strict";var r=n("CD8Q"),o=n("q9+l"),a=n("lhjL");e.exports=function(e,t,n){var l=r(t);l in e?o.f(e,l,a(0,n)):e[l]=n}},"3g/d":function(e,t,n){"use strict";n("2G9S"),n("jQ3i"),n("+KXO"),n("x4t0");var r=n("ddV6"),o=n.n(r),a=n("KEM+"),l=n.n(a),i=n("ERkP"),c=n.n(i),u=n("O94r"),s=n.n(u),f=(n("j+zR"),n("/Vl7")),d=n("+KRd"),p=n("qGsU"),m=n("fO07"),h=n("97Jx"),v=n.n(h),b=n("UTRh"),g=[n("2//c").a.STRONG],T=function(e){return c.a.createElement(b.a,v()({},e,{as:"span",allowList:g,blockList:void 0}))};T.defaultProps={className:void 0};var P,y,w,E=T,O=n("s+Iv"),A=n("uIuh"),L=(P={},l()(P,d.a.SUCCESS,d.a.POSITIVE),l()(P,d.a.INFO,d.a.NEUTRAL),l()(P,d.a.ERROR,d.a.NEGATIVE),P),N=(y={},l()(y,d.a.POSITIVE,f.h),l()(y,d.a.NEUTRAL,f.u),l()(y,d.a.WARNING,f.a),l()(y,d.a.NEGATIVE,f.b),y),x=function e(t){var n=Object(i.useState)(!1),r=o()(n,2),a=r[0],l=r[1],u=t.arrow,f=t.action,d=t.children,h=t.className,v=t.icon,b=t.onDismiss,g=t.message,T=t.type,P=Object(i.useRef)(null),y=Object(A.a)().isRTL;if(u){var w=Object(m.a)(e,u);return c.a.createElement(w,t)}!function(e){var t=e.size,n=e.type;Object(O.b)("Alert no longer supports any possible variations in size. Please remove the `size` prop.",!!t),Object(O.b)("Alert has deprecated the ".concat(n," value for the `type` prop. Please update to ").concat(R[n],"."),I.includes(n))}(t);var x=L[T]||T,S=N[x],G=v?Object(i.cloneElement)(v,{size:24}):c.a.createElement(S,{size:24});return c.a.createElement("div",{role:"alert",className:s()("alert d-flex","alert-".concat(x),h),onTouchStart:function(){return l(!0)},onTouchEnd:function(e){a&&f&&null!==P&&void 0!==P&&P.current&&!P.current.contains(e.target)&&("_blank"===(null===f||void 0===f?void 0:f.target)?window.top.open(f.href):window.top.location.assign(f.href)),l(!1)},onTouchMove:function(){return l(!1)}},G,c.a.createElement("div",{className:s()("alert__message flex-grow-1",{"p-l-2":!y,"p-r-2":y})},c.a.createElement("div",null,d||c.a.createElement(E,null,g)),f&&c.a.createElement("a",{href:f.href,className:"m-t-1 d-inline-block","aria-label":f["aria-label"],target:f.target},f.text)),b&&c.a.createElement(p.a,{onClick:b,size:16,className:"m-l-2",ref:P}))},R=(w={},l()(w,d.a.SUCCESS,"Sentiment.POSITIVE"),l()(w,d.a.INFO,"Sentiment.NEUTRAL"),l()(w,d.a.ERROR,"Sentiment.NEGATIVE"),w),I=Object.keys(L);x.defaultProps={action:void 0,arrow:void 0,className:void 0,dismissible:void 0,icon:void 0,type:d.a.NEUTRAL};t.a=x},"6OVi":function(e,t,n){"use strict";var r=n("0FSu").forEach,o=n("f4p7"),a=n("znGZ"),l=o("forEach"),i=a("forEach");e.exports=l&&i?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},AXuR:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return c}));n("jQ3i"),n("KqXw"),n("MvUL"),n("tVqn");var r="en-GB",o=["he-IL"],a=["en","ja","de","es","fr","hu","id","it","pl","pt","ro","ru","tr","uk","zh"];function l(e){if(!e||0===e.trim().length)return null;try{return new Intl.Locale(e.trim().replace("_","-")).baseName}catch(e){return console.error(e),null}}function i(e){var t=l(e);if(null===t)return null;try{var n=new Intl.Locale(t).language;return a.includes(n)?n:null}catch(e){return console.error(e),null}}var c=function(e){var t=l(e);if(null===t)return null;try{var n=new Intl.Locale(t).region;return null!==n&&void 0!==n?n:null}catch(e){return console.error(e),null}}},BAoe:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r,o,a=n("DIbr"),l=n("ERkP"),i=n("kQwz");!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(o||(o={}));function c(e){var t=function(t){var n=Object(i.a)(),r=t.value,o=t.children,l=Object(a.c)(t,["value","children"]),c="string"===typeof r?new Date(r||0):r;return o("formatDate"===e?n.formatDateToParts(c,l):n.formatTimeToParts(c,l))};return t.displayName=o[e],t}function u(e){var t=function(t){var n=Object(i.a)(),r=t.value,o=t.children,c=Object(a.c)(t,["value","children"]),u=n[e](r,c);if("function"===typeof o)return o(u);var s=n.textComponent||l.Fragment;return l.createElement(s,null,u)};return t.displayName=r[e],t}function s(e){return e}u("formatDate"),u("formatTime"),u("formatNumber"),u("formatList"),u("formatDisplayName"),c("formatDate"),c("formatTime")},CqdY:function(e,t){e.exports="/neptune-web/branch/accordion-styles/_next/static/images/popover-release-mar-2021_1-b7ce8084bff5fa44a978536b5e6d1537.png"},Ew2P:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},F63i:function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var c,u=[],s=!1,f=-1;function d(){s&&c&&(s=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!s){var e=i(d);s=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||s||i(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},GJtw:function(e,t,n){var r=n("ct80"),o=n("fVMg"),a=n("T+0C"),l=o("species");e.exports=function(e){return a>=51||!r((function(){var t=[];return(t.constructor={})[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},HFyK:function(e,t,n){"use strict";var r=n("ddV6"),o=n.n(r),a=n("ERkP"),l=n.n(a),i=n("O94r"),c=n.n(i),u=(n("jwue"),n("+oxZ"),{threshold:.1}),s=function(e){var t=e.elRef;if("eager"===e.loading)return[!1];var n=Object(a.useState)(!1),r=o()(n,2),l=r[0],i=r[1],c=function(e,n){e.forEach((function(e){e.isIntersecting&&(i(!0),n.unobserve(t.current))}))};return Object(a.useEffect)((function(){var e,n=!1;return window.IntersectionObserver&&t&&t.current?!n&&(e=new IntersectionObserver(c,u)).observe(t.current):i(!0),function(){n=!0,e&&e.unobserve(t.current)}}),[t]),[l]},f=(n("PkpH"),function(e){var t=e.id,n=e.src,r=e.alt,i=e.onLoad,u=e.onError,f=e.className,d=e.loading,p=e.stretch,m=e.shrink,h=Object(a.useRef)(),v=s({elRef:h,loading:d}),b=o()(v,1)[0],g=n,T=i;return"lazy"!==d||b||(g="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",T=null),l.a.createElement("img",{id:t,alt:r,src:g,className:c()(["tw-image",{"tw-image__stretch":p,"tw-image__shrink":m},f]),ref:h,onLoad:T,onError:u})});f.defaultProps={id:null,className:"",onLoad:function(){},onError:function(){},loading:"eager",stretch:!0,shrink:!0};t.a=f},"IRf+":function(e,t,n){var r=n("hpdy");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},KcoV:function(e,t,n){},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},"T+0C":function(e,t,n){var r,o,a=n("9JhN"),l=n("ZORK"),i=a.process,c=i&&i.versions,u=c&&c.v8;u?o=(r=u.split("."))[0]+r[1]:l&&(!(r=l.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=l.match(/Chrome\/(\d+)/))&&(o=r[1]),e.exports=o&&+o},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}},"X+oG":function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i}));n("vrRf");var r=n("ERkP"),o=n.n(r),a=n("AXuR"),l=o.a.createContext("ltr"),i=function(e){var t=e.locale,n=e.children;return o.a.createElement(l.Provider,{value:-1<a.b.indexOf(t)?"rtl":"ltr"},n)};i.defaultProps={children:null,locale:a.a}},XU0q:function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),(o=r||(r={})).TOP_LEFT="up-left",o.TOP="up-center",o.TOP_RIGHT="up-right",o.BOTTOM_LEFT="down-left",o.BOTTOM="down-center",o.BOTTOM_RIGHT="down-right"},ZORK:function(e,t,n){var r=n("VCi3");e.exports=r("navigator","userAgent")||""},"aoZ+":function(e,t,n){var r=n("dSaG"),o=n("xt6W"),a=n("fVMg")("species");e.exports=function(e,t){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[a])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},c9VE:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return m})),n.d(t,"default",(function(){return h}));var r=n("ERkP"),o=n.n(r),a=n("3g/d"),l=n("HFyK"),i=n("CqdY"),c=n.n(i),u=n("p9bC"),s=n.n(u),f=n("snVg"),d=n.n(f),p=o.a.createElement,m={name:"Popover Upgrade guide",date:"2021-03-08",authors:[{name:"Andrea Piras",githubUsername:"andreapiras"}],hidden:!0};function h(){return p("div",null,p(a.a,{message:"These changes will be released in components v35. See the Popover designs, the PR for these changes, play with a demo or try the beta release in your own repository by updating to @transferwise/components@34.2.16-beta.48"}),p("p",null,"We refactored Popover to make it more robust and accessible. The positioning engine has also been replaced with a more sophisticated tool called"," ",p("a",{href:"https://popper.js.org/",rel:"noreferrer",target:"_blank"},"Popper"),"."),p("h2",null,"Changes"),p("table",{className:"docs-table table"},p("thead",null,p("tr",null,p("th",null,"Old API"),p("th",null,"New API"),p("th",null,"Change type"))),p("tbody",null,p("tr",null,p("td",null,p("code",null,"children: Types.element | Types.string")),p("td",null,p("code",null,"children: Types.node")),p("td",null,"BREAKING CHANGE: Internal logic has changed. Elements will not be wrapped in focusable elements")),p("tr",null,p("td",null,p("code",null,"classNames: Types.string")),p("td",null,p("code",null,"className: Types.string")),p("td",null,"BREAKING CHANGE: prop name")),p("tr",null,p("td",null,p("code",null,"content:",p("br",null),"Types.element | Types.string | Types.func")),p("td",null,p("code",null,"content: Types.node")),p("td",null,"BREAKING CHANGE: Removed type function support")),p("tr",null,p("td",null,p("code",null,"containsFocusableElement")),p("td",null,"-"),p("td",null,"Deleted this property")),p("tr",null,p("td",null,p("code",null,"preferredPlacement: ",p("br",null),"Popover.Placement.TOP | Popover.Placement.RIGHT |",p("br",null),"Popover.Placement.BOTTOM | Popover.Placement.LEFT | Popover.Placement.LEFT_TOP |",p("br",null),"Popover.Placement.RIGHT_TOP | Popover.Placement.BOTTOM_RIGHT |",p("br",null),"Popover.Placement.BOTTOM_LEFT")),p("td",null,p("code",null,"preferredPlacement:",p("br",null),"Popover.Placement.TOP | Popover.Placement.RIGHT | Popover.Placement.BOTTOM | Popover.Placement.LEFT")),p("td",null)),p("tr",null,p("td",null,p("code",null,"title: Types.element | Types.string")),p("td",null,p("code",null,"title: Types.node")),p("td",null)))),p("ul",null,p("li",null,p("b",null,"className"))),p(a.a,{type:"warning",message:"Breaking change"}),p("p",null,"ClassNames has been renamed to ClassName and To be consistent with the rest of our API now accepts only strings \u201cclass1 class2 \u2026\u201d"),p("ul",null,p("li",null,p("b",null,"containsFocusableElement"))),p(a.a,{type:"warning",message:"Breaking change"}),p("p",null,"containsFocusableElement was introduced in this"," ",p("a",{href:"https://github.com/transferwise/neptune-web/commit/e0787fe3ed0dc1af48a3296129cda4f479219da6#diff-d4f3b771644287c2d339aea614ebe1e12841586ca1d3c421e21d98f2bb7f877a"},"PR")," ","to allow Popover to be opened by multiple triggers and attach focus props."),p("p",null,"Example: Avatar + choose an icons"),p(l.a,{src:c.a,alt:"Avatar + choose an icons",loading:"lazy",stretch:!1,shrink:!0}),p("p",null,"To achieve the same behavior you can do something similar:"),p("pre",null,"// This is not the cleanest solution but still better to embed this logic in Popover for one use case.\nconst simulateTriggerClick = () => {\n  // Do your stuff here\n  triggerRef.current.click();\n};\n<Popover content={<IconElement onClick={()=>simulateTriggerClick()} \u2026>\n  <button ref={triggerRef} ...>\n    <Avatar ...>\n      \ud83e\udddc\ud83c\udffc\n    </Avatar>\n    Choose an icon\n  </button>\n</Popover>"),p("ul",null,p("li",null,p("b",null,"preferredPlacement"))),p(a.a,{type:"warning",message:"**DEPRECATION**"}),p("p",null,"We deprecated some of the preferredPlacement"),p("table",{className:"docs-table table"},p("thead",null,p("tr",null,p("th",null,"Deprecated"),p("th",null,"Supported"))),p("tbody",null,p("tr",null,p("td",null,p("code",null,"Popover.Position.LEFT_TOP")),p("td",null,p("code",null,"Popover.Position.TOP"))),p("tr",null,p("td",null,p("code",null,"Popover.Position.RIGHT_TOP")),p("td",null,p("code",null,"Popover.Position.TOP"))),p("tr",null,p("td",null,p("code",null,"Popover.Position.BOTTOM_LEFT")),p("td",null,p("code",null,"Popover.Position.BOTTOM"))),p("tr",null,p("td",null,p("code",null,"Popover.Position.BOTTOM_RIGHT")),p("td",null,p("code",null,"Popover.Position.BOTTOM"))))),p("p",null,"The only supported position will be TOP, RIGHT, BOTTOM, LEFT. Please note that Popper engine is going to determine the best position for your popover based on the space available on screen if the one provided is not suitable."),p("ul",null,p("li",null,p("b",null,"content"))),p(a.a,{type:"warning",message:"Breaking change"}),p("p",null,"The old API used to accept"),p("ul",null,p("li",null,"Types.element"),p("li",null,"Types.string"),p("li",null,"Types.func")),p("p",null,"Now it will accept only nodes.",p("br",null),"Popover content should accept only a restricted set of html (see docs) and translatable string."),p("ul",null,p("li",null,p("b",null,"Markup"))),p(a.a,{type:"warning",message:"Breaking change"}),p("p",null,"Although we don\u2019t provide official support for user relying on html and css internal implementation, it\u2019s worth mention that the both html structure and css have changed."),p("h2",null,"Migration Example"),p("h3",null,"Old API"),p("pre",null,'<Popover\n  containsFocusableElement={containsFocusableElement}\n  content="You\u2019ll get this rate as long..."\n  preferredPlacement={Popover.Placement.BOTTOM_RIGHT}\n  title="Guaranteed rate"\n>\n  <Icon> / <span> / string\n</Popover>'),p("h3",null,"New API"),p("pre",null,'<Popover\n  content={You\u2019ll get this rate as long...}\n  preferredPlacement={Popover.Placement.BOTTOM}\n  title="Guaranteed rate"\n>\n  <button ...>\n      <Icon> / string\n  </button>\n</Popover>'),p("h2",null,"Adaptive Positioning"),p(a.a,{type:"warning",message:"**VISUAL CHANGE**"}),p("p",null,"At the moment Popover doesn\u2019t change its placements when reaching the windows boundaries. Its position gets recalculated only on open/close. The new version adapts to the container and calculates automatically the best placement on screen for both content and arrow"),p(l.a,{src:s.a,alt:"Popover Adaptive Positioning",loading:"lazy",stretch:!1}),p("h2",null,"Mobile Behaviour"),p(a.a,{type:"warning",message:"**VISUAL CHANGE**"}),p("p",null,"In order to align mobile web with mobile behaviour, Popover will now open in a bottomSheet on Mobile size devices."),p(l.a,{src:d.a,alt:"Popover example of mobile behaviour",loading:"lazy",stretch:!1}),p("h2",null,"Dependency requirements"),p("pre",null,"@transferwise/components >= 35.x.x",p("br",null),"@transferwise/neptune-css >= 9.x.x"))}},ddV6:function(e,t,n){var r=n("qPgQ"),o=n("Ua7V"),a=n("peMk"),l=n("f2kJ");e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||l()}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},fO07:function(e,t,n){"use strict";n("2G9S");var r=n("97Jx"),o=n.n(r),a=n("ERkP"),l=n.n(a),i=n("O94r"),c=n.n(i),u=n("XU0q");function s(e){if(e){var t=["arrow"],n=u.a.BOTTOM,r=u.a.BOTTOM_LEFT,o=u.a.BOTTOM_RIGHT,a=u.a.TOP,l=u.a.TOP_RIGHT,i=u.a.TOP_LEFT;switch(e){case n:return t.concat("arrow-bottom","arrow-center");case r:return t.concat("arrow-bottom","arrow-left");case o:return t.concat("arrow-bottom","arrow-right");case a:return t.concat("arrow-center");case l:return t.concat("arrow-right");case i:default:return t}}return""}t.a=function(e,t){var n=function(n){return l.a.createElement(e,o()({},n,{className:c()(n.className,s(t)),arrow:void 0}))};return n.defaultProps={className:void 0},n}},hpdy:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,o){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var a=t(n)?e.isRequired:e;return a.apply(this,arguments)}}},"jl0/":function(e,t,n){var r=n("dSaG"),o=n("amH4"),a=n("fVMg")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==o(e))}},jwue:function(e,t,n){"use strict";var r=n("ax0f"),o=n("6OVi");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},lpmq:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},mVF9:function(e,t,n){var r=n("ct80"),o=n("+/eK");e.exports=function(e){return r((function(){return!!o[e]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[e]()||o[e].name!==e}))}},p9bC:function(e,t){e.exports="/neptune-web/branch/accordion-styles/_next/static/images/popover-release-mar-2021_2-304524b1e4ec399923e767c20cefdbab.png"},pWoL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2021-03-08-popover-upgrade-guide",function(){return n("c9VE")}])},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},qGsU:function(e,t,n){"use strict";n("1IsZ");var r=n("ERkP"),o=n.n(r),a=n("O94r"),l=n.n(a),i=n("kQwz"),c=n("/Vl7"),u=n("BAoe"),s=Object(u.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),o.a.forwardRef((function(e,t){var n=Object(i.a)(),r=e.onClick,a=e.className,u=e.size;return o.a.createElement("button",{ref:t,type:"button",className:l()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":u===f.Size.LARGE},a),"aria-label":n.formatMessage(s.ariaLabel),onClick:r},o.a.createElement(c.l,{size:u}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};t.a=f},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},snVg:function(e,t){e.exports="/neptune-web/branch/accordion-styles/_next/static/images/popover-release-mar-2021_3-6bde12d971dc956ab728043882e085fb.png"},tVqn:function(e,t,n){"use strict";var r=n("ax0f"),o=n("Ya2h").trim;r({target:"String",proto:!0,forced:n("mVF9")("trim")},{trim:function(){return o(this)}})},uIuh:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("ERkP"),o=n("X+oG"),a=function(){var e=Object(r.useContext)(o.a);return{direction:e,isRTL:"rtl"===e}}},xt6W:function(e,t,n){var r=n("amH4");e.exports=Array.isArray||function(e){return"Array"==r(e)}}},[["pWoL",0,1,6,5,7,8,11,4]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[72],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},"1IsZ":function(e,t,n){var r=n("ax0f"),o=n("YAkj").values;r({target:"Object",stat:!0},{values:function(e){return o(e)}})},"1Ix9":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),l=n("e0j8"),s=n("Qi1R"),u=(a.a.createElement,{name:"Info",badge:{type:"new",expiryDate:"2021-03-31"}}),f={meta:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Opens a Popover or Modal based on presentation prop."),Object(c.a)("div",null,Object(c.a)(s.b,{code:"<Info\n  content={'Your address has been verified, no more actions are required.'}\n  presentation={Info.Presentation.POPOVER}\n  size={Info.Size.SMALL}\n  title={'You entered your address'}\n  aria-label=\"Click here for more details\"\n/>",scope:{Info:l.a},mdxType:"LiveEditorBlock"}),Object(c.a)(s.a,{componentName:"Info",mdxType:"GeneratePropsTable"})))}p.isMDXComponent=!0},"1Pcy":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"5BYb":function(e,t,n){"use strict";var r=n("ax0f"),o=n("0FSu").some,i=n("f4p7"),a=n("znGZ"),c=i("some"),l=a("some");r({target:"Array",proto:!0,forced:!c||!l},{some:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"5BfY":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={EXTRA_SMALL:480,SMALL:576,MEDIUM:768,LARGE:992,EXTRA_LARGE:1200}},"5Yy7":function(e,t,n){var r=n("695J");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"695J":function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},"6gor":function(e,t,n){"use strict";t.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"7yHk":function(e,t,n){},"99fE":function(e,t,n){"use strict";var r=n("ddV6"),o=n.n(r),i=n("ERkP"),a=n.n(i),c=n("7nmT");t.a=function(e){return function(t){var n=Object(i.useState)(!1),r=o()(n,2),l=r[0],s=r[1];return Object(i.useEffect)((function(){s(!0)}),[s]),l?Object(c.createPortal)(a.a.createElement(e,t),document.body):null}}},AuHH:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},DEeE:function(e,t,n){var r=n("yRya"),o=n("sX5C");e.exports=Object.keys||function(e){return r(e,o)}},GAp3:function(e,t,n){"use strict";n("2G9S"),n("vrRf"),n("KqXw"),n("Ysgh");var r,o=n("97Jx"),i=n.n(o),a=n("m3Bd"),c=n.n(a),l=n("VrFO"),s=n.n(l),u=n("Y9Ll"),f=n.n(u),p=n("1Pcy"),d=n.n(p),m=n("5Yy7"),y=n.n(m),v=n("N+ot"),b=n.n(v),O=n("AuHH"),h=n.n(O),E=n("KEM+"),g=n.n(E),x=n("ERkP"),P=n.n(x),w=n("O94r"),j=n.n(w),S=n("05Xt"),T=n("/Vl7"),C=n("6gor"),N=(n("2lU4"),n("eKd8")),k=n("VehP"),R=n("P8nL");function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b()(this,n)}}var L=function(e){function t(){var e;s()(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=n.call.apply(n,[this].concat(o)),g()(d()(e),"onEscape",(function(t){var n=e.props.onClose;t&&(t.keyCode===C.a.ESCAPE||"Escape"===t.key)&&n&&n(t)})),g()(d()(e),"handleOnClick",(function(t){var n=e.props,r=n.onClose,o=n.closeOnClick;t.target===t.currentTarget&&r&&o&&r(t)})),g()(d()(e),"checkSpecialClasses",(function(t){return-1!==e.props.className.split(" ").indexOf(t)})),e}y()(t,e);var n=A(t);return f()(t,[{key:"componentDidMount",value:function(){this.modalDialog&&this.modalDialog.focus(),document.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){var e=this,n=this.props,r=n.title,o=n.body,a=n.footer,l=n.onClose,s=n.className,u=n.open,f=(n.size,n.closeOnClick,n.scroll),p=n.position,d=c()(n,["title","body","footer","onClose","className","open","size","closeOnClick","scroll","position"]),m=this.checkSpecialClasses("compact"),y=this.checkSpecialClasses("no-divider");return P.a.createElement(R.a,{open:u,scrollable:f===t.Scroll.CONTENT},P.a.createElement(S.a,{appear:!0,in:u,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},P.a.createElement("div",i()({className:j()("tw-modal","d-flex","justify-content-center",{"tw-modal--content":f===t.Scroll.CONTENT,"align-items-center":p===N.a.CENTER,"align-items-start":p===N.a.TOP},"fade",s),tabIndex:"-1",role:"presentation",ref:function(t){e.modalDialog=t},onKeyDown:this.onEscape,onClick:this.handleOnClick},d),P.a.createElement("div",{className:j()("tw-modal-dialog","d-flex",g()({},"tw-modal-".concat(this.props.size),this.props.size)),"aria-modal":!0,role:"dialog"},P.a.createElement("div",{className:j()("tw-modal-content","d-flex","flex-column","justify-content-between",{"tw-modal-compact":m,"tw-modal-no-title":!r})},P.a.createElement("div",{className:j()("tw-modal-header","d-flex","align-items-center","justify-content-between","flex-wrap",{"modal--withoutborder":!r||y})},P.a.createElement("h4",{className:"tw-modal-title"},r),P.a.createElement("button",{type:"button",onClick:l,className:"close","aria-label":"close"},P.a.createElement(T.k,{size:24}))),P.a.createElement("div",{className:"tw-modal-body"},o),a&&P.a.createElement("div",{className:j()("tw-modal-footer","d-flex","align-items-center","flex-wrap",{"modal--withoutborder":y})},a))))))}}]),t}(x.Component);g()(L,"Size",k.a),g()(L,"Scroll",{CONTENT:"content",VIEWPORT:"viewport"}),g()(L,"Position",(r={},g()(r,N.a.TOP.toUpperCase(),N.a.TOP),g()(r,N.a.CENTER.toUpperCase(),N.a.CENTER),r)),L.defaultProps={title:null,footer:null,size:L.Size.MEDIUM,className:"",closeOnClick:!0,scroll:L.Scroll.VIEWPORT,position:L.Position.CENTER},t.a=L},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("+wNj");function o(e,t){if(null==e)return{};var n,o,i=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},LW0h:function(e,t,n){"use strict";var r=n("ax0f"),o=n("0FSu").filter,i=n("GJtw"),a=n("znGZ"),c=i("filter"),l=a("filter");r({target:"Array",proto:!0,forced:!c||!l},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"N+ot":function(e,t,n){var r=n("T0aG"),o=n("1Pcy");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},P8nL:function(e,t,n){"use strict";var r=n("ERkP"),o=n.n(r),i=n("O94r"),a=n.n(i),c=n("05Xt"),l=n("99fE"),s=(n("7yHk"),n("6gor")),u=function(e){var t=e.open,n=e.children,r=e.scrollable,i=e.onClose,l=e.fadeContentOnExit,s=e.fadeContentOnEnter,u=function(e){i&&i(e)};return o.a.createElement(c.a,{in:t,appear:!0,timeout:{enter:0,exit:350},classNames:{enter:a()({"dimmer--enter-fade":s}),enterDone:a()("dimmer--enter-done",{"dimmer--enter-fade":s}),exit:a()("dimmer--exit",{"dimmer--exit-fade":l})},unmountOnExit:!0},o.a.createElement(f,{handleOnClose:u},o.a.createElement("div",{role:"presentation",className:a()("dimmer",{"dimmer--scrollable":r}),onClick:function(e){e.target===e.currentTarget&&u(e)}},n)))},f=function(e){var t=e.children,n=e.handleOnClose;return Object(r.useEffect)((function(){var e=function(e){e&&(e.keyCode===s.a.ESCAPE||"Escape"===e.key)&&n(e)};return document.body.classList.add("no-scroll"),document.addEventListener("keydown",e),function(){document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",e)}}),[]),t};u.defaultProps={scrollable:!1,open:!1,children:null,onClose:null,fadeContentOnExit:!1,fadeContentOnEnter:!1};t.a=Object(l.a)(u)},Qzre:function(e,t,n){var r=n("FXyv"),o=n("hpdy"),i=n("fVMg")("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||void 0==(n=r(a)[i])?t:o(n)}},T0aG:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}},VrFO:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},Y9Ll:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},YAkj:function(e,t,n){var r=n("1Mu/"),o=n("DEeE"),i=n("N4z3"),a=n("4Sk5").f,c=function(e){return function(t){for(var n,c=i(t),l=o(c),s=l.length,u=0,f=[];s>u;)n=l[u++],r&&!a.call(c,n)||f.push(e?[n,c[n]]:c[n]);return f}};e.exports={entries:c(!0),values:c(!1)}},"YF/V":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Info",function(){return n("1Ix9")}])},Ysgh:function(e,t,n){"use strict";var r=n("lbJE"),o=n("jl0/"),i=n("FXyv"),a=n("cww3"),c=n("Qzre"),l=n("4/YM"),s=n("tJVe"),u=n("34wW"),f=n("QsUS"),p=n("ct80"),d=[].push,m=Math.min,y=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,i);for(var c,l,s,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,y=new RegExp(e.source,p+"g");(c=f.call(y,r))&&!((l=y.lastIndex)>m&&(u.push(r.slice(m,c.index)),c.length>1&&c.index<r.length&&d.apply(u,c.slice(1)),s=c[0].length,m=l,u.length>=i));)y.lastIndex===c.index&&y.lastIndex++;return m===r.length?!s&&y.test("")||u.push(""):u.push(r.slice(m)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=a(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,o,n):r.call(String(o),t,n)},function(e,o){var a=n(r,e,this,o,r!==t);if(a.done)return a.value;var f=i(e),p=String(this),d=c(f,RegExp),v=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(y?"y":"g"),O=new d(y?f:"^(?:"+f.source+")",b),h=void 0===o?4294967295:o>>>0;if(0===h)return[];if(0===p.length)return null===u(O,p)?[p]:[];for(var E=0,g=0,x=[];g<p.length;){O.lastIndex=y?g:0;var P,w=u(O,y?p:p.slice(g));if(null===w||(P=m(s(O.lastIndex+(y?0:g)),p.length))===E)g=l(p,g,v);else{if(x.push(p.slice(E,g)),x.length===h)return x;for(var j=1;j<=w.length-1;j++)if(x.push(w[j]),x.length===h)return x;g=E=P}}return x.push(p.slice(E)),x}]}),!y)},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("ERkP"),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"===typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},ddV6:function(e,t,n){var r=n("qPgQ"),o=n("Ua7V"),i=n("peMk"),a=n("f2kJ");e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()}},e0j8:function(e,t,n){"use strict";var r=n("97Jx"),o=n.n(r),i=n("ddV6"),a=n.n(i),c=n("ERkP"),l=n.n(c),s=n("O94r"),u=n.n(s),f=n("/Vl7"),p=n("b1ss"),d=n("GAp3"),m=n("VehP"),y=(n("v9dN"),function e(t){var n=t.className,r=t.content,i=t.presentation,s=t.size,m=t.title,y=Object(c.useState)(!1),v=a()(y,2),b=v[0],O=v[1],h=i===e.Presentation.MODAL,E=s===e.Size.SMALL,g={"aria-label":t["aria-label"],className:"btn-unstyled",children:l.a.createElement(f.r,{size:E?16:24})};return l.a.createElement("span",{className:u()(n,"np-info",{"np-info__small":E,"np-info__large":!E})},h?l.a.createElement(l.a.Fragment,null,l.a.createElement("button",o()({type:"button",onClick:function(){return O(!b)}},g)),l.a.createElement(d.a,{body:r,onClose:function(){return O(!1)},open:b,title:m})):l.a.createElement(p.a,{content:r,preferredPlacement:p.a.Placement.BOTTOM,title:m},l.a.createElement("button",o()({type:"button"},g))))});y.Presentation={POPOVER:"POPOVER",MODAL:"MODAL"},y.Size={SMALL:m.a.SMALL,LARGE:m.a.LARGE},y.defaultProps={className:void 0,content:void 0,presentation:y.Presentation.POPOVER,size:y.Size.SMALL,title:void 0},t.a=y},eKd8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",CENTER:"center",LEFT:"left",LEFT_TOP:"left-top",RIGHT:"right",RIGHT_TOP:"right-top",TOP:"top"}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},"s+Iv":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));n("vrRf");function r(t){var n,r;0<=["development","test"].indexOf(null===(n=e)||void 0===n||null===(r=n.env)||void 0===r?void 0:"production")&&console.warn(t)}function o(e,t){t&&r(e)}}).call(this,n("F63i"))},sob3:function(e,t,n){"use strict";var r=n("97Jx"),o=n.n(r),i=n("m3Bd"),a=n.n(i),c=n("ERkP"),l=n.n(c),s=n("O94r"),u=n.n(s),f=n("05Xt"),p=(n("yiBs"),Object(c.forwardRef)((function(e,t){var n=e.children,r=e.className,i=e.open,c=e.position,s=e.showSlidingPanelBorder,p=e.slidingPanelPositionFixed,d=a()(e,["children","className","open","position","showSlidingPanelBorder","slidingPanelPositionFixed"]);return l.a.createElement(f.a,o()({},d,{in:i,timeout:{enter:0,exit:350},classNames:u()("sliding-panel--open-".concat(c),s&&"sliding-panel--border-".concat(c),{"sliding-panel--fixed":p},"sliding-panel"),appear:!0,unmountOnExit:!0}),l.a.createElement("div",{className:u()("sliding-panel",r),ref:t},n))})));p.defaultProps={children:null,className:void 0,open:!1,position:"left",showSlidingPanelBorder:!1,slidingPanelPositionFixed:!1},t.a=p},vrRf:function(e,t,n){"use strict";var r=n("ax0f"),o=n("H17f").indexOf,i=n("f4p7"),a=n("znGZ"),c=[].indexOf,l=!!c&&1/[1].indexOf(1,-0)<0,s=i("indexOf"),u=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:l||!s||!u},{indexOf:function(e){return l?c.apply(this,arguments)||0:o(this,e,arguments.length>1?arguments[1]:void 0)}})},yiBs:function(e,t,n){},z84I:function(e,t,n){"use strict";var r=n("ax0f"),o=n("0FSu").map,i=n("GJtw"),a=n("znGZ"),c=i("map"),l=a("map");r({target:"Array",proto:!0,forced:!c||!l},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}},[["YF/V",0,1,2,6,3,5,8,9,16,4]]]);
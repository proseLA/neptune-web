_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[73],{"1IsZ":function(e,t,n){var r=n("ax0f"),o=n("YAkj").values;r({target:"Object",stat:!0},{values:function(e){return o(e)}})},"1Ix9":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),l=n("e0j8"),s=n("Qi1R"),u=(a.a.createElement,{name:"Info"}),f={meta:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"Opens a Popover or Modal based on presentation prop."),Object(c.a)("div",null,Object(c.a)(s.b,{code:"<Info\n  content={'Your address has been verified, no more actions are required.'}\n  presentation={Info.Presentation.POPOVER}\n  size={Info.Size.SMALL}\n  title={'You entered your address'}\n  aria-label=\"Click here for more details\"\n/>",scope:{Info:l.a},mdxType:"LiveEditorBlock"}),Object(c.a)(s.a,{componentName:"Info",mdxType:"GeneratePropsTable"})))}p.isMDXComponent=!0},"1Pcy":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"34wW":function(e,t,n){var r=n("amH4"),o=n("QsUS");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"4/YM":function(e,t,n){"use strict";var r=n("t/tF").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"5BYb":function(e,t,n){"use strict";var r=n("ax0f"),o=n("0FSu").some,i=n("f4p7"),a=n("znGZ"),c=i("some"),l=a("some");r({target:"Array",proto:!0,forced:!c||!l},{some:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"5BfY":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={EXTRA_SMALL:480,SMALL:576,MEDIUM:768,LARGE:992,EXTRA_LARGE:1200}},"5Yy7":function(e,t,n){var r=n("695J");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"695J":function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},"6gor":function(e,t,n){"use strict";t.a={DOWN:40,UP:38,LEFT:37,RIGHT:39,ENTER:13,ESCAPE:27,TAB:9,SPACE:32,BACKSPACE:8}},"7yHk":function(e,t,n){},"99fE":function(e,t,n){"use strict";var r=n("ddV6"),o=n.n(r),i=n("ERkP"),a=n.n(i),c=n("7nmT");t.a=function(e){return function(t){var n=Object(i.useState)(!1),r=o()(n,2),l=r[0],s=r[1];return Object(i.useEffect)((function(){s(!0)}),[s]),l?Object(c.createPortal)(a.a.createElement(e,t),document.body):null}}},AuHH:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},DEeE:function(e,t,n){var r=n("yRya"),o=n("sX5C");e.exports=Object.keys||function(e){return r(e,o)}},GAp3:function(e,t,n){"use strict";n("2G9S"),n("vrRf"),n("KqXw"),n("Ysgh");var r,o=n("97Jx"),i=n.n(o),a=n("m3Bd"),c=n.n(a),l=n("VrFO"),s=n.n(l),u=n("Y9Ll"),f=n.n(u),p=n("1Pcy"),d=n.n(p),m=n("5Yy7"),v=n.n(m),E=n("N+ot"),h=n.n(E),y=n("AuHH"),b=n.n(y),g=n("KEM+"),x=n.n(g),O=n("ERkP"),P=n.n(O),w=n("O94r"),S=n.n(w),T=n("05Xt"),C=n("/Vl7"),R=n("6gor"),N=(n("2lU4"),n("eKd8")),A=n("VehP"),k=n("P8nL");function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b()(e);if(t){var o=b()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h()(this,n)}}var j=function(e){function t(){var e;s()(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=n.call.apply(n,[this].concat(o)),x()(d()(e),"onEscape",(function(t){var n=e.props.onClose;t&&(t.keyCode===R.a.ESCAPE||"Escape"===t.key)&&n&&n(t)})),x()(d()(e),"handleOnClick",(function(t){var n=e.props,r=n.onClose,o=n.closeOnClick;t.target===t.currentTarget&&r&&o&&r(t)})),x()(d()(e),"checkSpecialClasses",(function(t){return-1!==e.props.className.split(" ").indexOf(t)})),e}v()(t,e);var n=L(t);return f()(t,[{key:"componentDidMount",value:function(){this.modalDialog&&this.modalDialog.focus(),document.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){var e=this,n=this.props,r=n.title,o=n.body,a=n.footer,l=n.onClose,s=n.className,u=n.open,f=(n.size,n.closeOnClick,n.scroll),p=n.position,d=c()(n,["title","body","footer","onClose","className","open","size","closeOnClick","scroll","position"]),m=this.checkSpecialClasses("compact"),v=this.checkSpecialClasses("no-divider");return P.a.createElement(k.a,{open:u,scrollable:f===t.Scroll.CONTENT},P.a.createElement(T.a,{appear:!0,in:u,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},P.a.createElement("div",i()({className:S()("tw-modal","d-flex","justify-content-center",{"tw-modal--content":f===t.Scroll.CONTENT,"align-items-center":p===N.a.CENTER,"align-items-start":p===N.a.TOP},"fade",s),tabIndex:"-1",role:"presentation",ref:function(t){e.modalDialog=t},onKeyDown:this.onEscape,onClick:this.handleOnClick},d),P.a.createElement("div",{className:S()("tw-modal-dialog","d-flex",x()({},"tw-modal-".concat(this.props.size),this.props.size)),"aria-modal":!0,role:"dialog"},P.a.createElement("div",{className:S()("tw-modal-content","d-flex","flex-column","justify-content-between",{"tw-modal-compact":m,"tw-modal-no-title":!r})},P.a.createElement("div",{className:S()("tw-modal-header","d-flex","align-items-center","justify-content-between","flex-wrap",{"modal--withoutborder":!r||v})},P.a.createElement("h4",{className:"tw-modal-title"},r),P.a.createElement("button",{type:"button",onClick:l,className:"close","aria-label":"close"},P.a.createElement(C.k,{size:24}))),P.a.createElement("div",{className:"tw-modal-body"},o),a&&P.a.createElement("div",{className:S()("tw-modal-footer","d-flex","align-items-center","flex-wrap",{"modal--withoutborder":v})},a))))))}}]),t}(O.Component);x()(j,"Size",A.a),x()(j,"Scroll",{CONTENT:"content",VIEWPORT:"viewport"}),x()(j,"Position",(r={},x()(r,N.a.TOP.toUpperCase(),N.a.TOP),x()(r,N.a.CENTER.toUpperCase(),N.a.CENTER),r)),j.defaultProps={title:null,footer:null,size:j.Size.MEDIUM,className:"",closeOnClick:!0,scroll:j.Scroll.VIEWPORT,position:j.Position.CENTER},t.a=j},LW0h:function(e,t,n){"use strict";var r=n("ax0f"),o=n("0FSu").filter,i=n("GJtw"),a=n("znGZ"),c=i("filter"),l=a("filter");r({target:"Array",proto:!0,forced:!c||!l},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"N+ot":function(e,t,n){var r=n("T0aG"),o=n("1Pcy");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},P8nL:function(e,t,n){"use strict";var r=n("ERkP"),o=n.n(r),i=n("O94r"),a=n.n(i),c=n("05Xt"),l=n("99fE"),s=(n("7yHk"),n("6gor")),u=function(e){var t=e.open,n=e.children,r=e.scrollable,i=e.onClose,l=e.fadeContentOnExit,s=e.fadeContentOnEnter,u=function(e){i&&i(e)};return o.a.createElement(c.a,{in:t,appear:!0,timeout:{enter:0,exit:350},classNames:{enter:a()({"dimmer--enter-fade":s}),enterDone:a()("dimmer--enter-done",{"dimmer--enter-fade":s}),exit:a()("dimmer--exit",{"dimmer--exit-fade":l})},unmountOnExit:!0},o.a.createElement(f,{handleOnClose:u},o.a.createElement("div",{role:"presentation",className:a()("dimmer",{"dimmer--scrollable":r}),onClick:function(e){e.target===e.currentTarget&&u(e)}},n)))},f=function(e){var t=e.children,n=e.handleOnClose;return Object(r.useEffect)((function(){var e=function(e){e&&(e.keyCode===s.a.ESCAPE||"Escape"===e.key)&&n(e)};return document.body.classList.add("no-scroll"),document.addEventListener("keydown",e),function(){document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",e)}}),[]),t};u.defaultProps={scrollable:!1,open:!1,children:null,onClose:null,fadeContentOnExit:!1,fadeContentOnEnter:!1};t.a=Object(l.a)(u)},Qzre:function(e,t,n){var r=n("FXyv"),o=n("hpdy"),i=n("fVMg")("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||void 0==(n=r(a)[i])?t:o(n)}},T0aG:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}},VrFO:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},Y9Ll:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},YAkj:function(e,t,n){var r=n("1Mu/"),o=n("DEeE"),i=n("N4z3"),a=n("4Sk5").f,c=function(e){return function(t){for(var n,c=i(t),l=o(c),s=l.length,u=0,f=[];s>u;)n=l[u++],r&&!a.call(c,n)||f.push(e?[n,c[n]]:c[n]);return f}};e.exports={entries:c(!0),values:c(!1)}},"YF/V":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Info",function(){return n("1Ix9")}])},Ysgh:function(e,t,n){"use strict";var r=n("lbJE"),o=n("jl0/"),i=n("FXyv"),a=n("cww3"),c=n("Qzre"),l=n("4/YM"),s=n("tJVe"),u=n("34wW"),f=n("QsUS"),p=n("ct80"),d=[].push,m=Math.min,v=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,i);for(var c,l,s,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,v=new RegExp(e.source,p+"g");(c=f.call(v,r))&&!((l=v.lastIndex)>m&&(u.push(r.slice(m,c.index)),c.length>1&&c.index<r.length&&d.apply(u,c.slice(1)),s=c[0].length,m=l,u.length>=i));)v.lastIndex===c.index&&v.lastIndex++;return m===r.length?!s&&v.test("")||u.push(""):u.push(r.slice(m)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=a(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,o,n):r.call(String(o),t,n)},function(e,o){var a=n(r,e,this,o,r!==t);if(a.done)return a.value;var f=i(e),p=String(this),d=c(f,RegExp),E=f.unicode,h=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),y=new d(v?f:"^(?:"+f.source+")",h),b=void 0===o?4294967295:o>>>0;if(0===b)return[];if(0===p.length)return null===u(y,p)?[p]:[];for(var g=0,x=0,O=[];x<p.length;){y.lastIndex=v?x:0;var P,w=u(y,v?p:p.slice(x));if(null===w||(P=m(s(y.lastIndex+(v?0:x)),p.length))===g)x=l(p,x,E);else{if(O.push(p.slice(g,x)),O.length===b)return O;for(var S=1;S<=w.length-1;S++)if(O.push(w[S]),O.length===b)return O;x=g=P}}return O.push(p.slice(g)),O}]}),!v)},ddV6:function(e,t,n){var r=n("qPgQ"),o=n("Ua7V"),i=n("peMk"),a=n("f2kJ");e.exports=function(e,t){return r(e)||o(e,t)||i(e,t)||a()}},e0j8:function(e,t,n){"use strict";var r=n("97Jx"),o=n.n(r),i=n("ddV6"),a=n.n(i),c=n("ERkP"),l=n.n(c),s=n("O94r"),u=n.n(s),f=n("/Vl7"),p=n("b1ss"),d=n("GAp3"),m=n("VehP"),v=(n("v9dN"),function e(t){var n=t.className,r=t.content,i=t.presentation,s=t.size,m=t.title,v=Object(c.useState)(!1),E=a()(v,2),h=E[0],y=E[1],b=i===e.Presentation.MODAL,g=s===e.Size.SMALL,x={"aria-label":t["aria-label"],className:"btn-unstyled",children:l.a.createElement(f.r,{size:g?16:24})};return l.a.createElement("span",{className:u()(n,"np-info",{"np-info__small":g,"np-info__large":!g})},b?l.a.createElement(l.a.Fragment,null,l.a.createElement("button",o()({type:"button",onClick:function(){return y(!h)}},x)),l.a.createElement(d.a,{body:r,onClose:function(){return y(!1)},open:h,title:m})):l.a.createElement(p.a,{content:r,preferredPlacement:p.a.Placement.BOTTOM,title:m},l.a.createElement("button",o()({type:"button"},x))))});v.Presentation={POPOVER:"POPOVER",MODAL:"MODAL"},v.Size={SMALL:m.a.SMALL,LARGE:m.a.LARGE},v.defaultProps={className:void 0,content:void 0,presentation:v.Presentation.POPOVER,size:v.Size.SMALL,title:void 0},t.a=v},eKd8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",CENTER:"center",LEFT:"left",LEFT_TOP:"left-top",RIGHT:"right",RIGHT_TOP:"right-top",TOP:"top"}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},lbJE:function(e,t,n){"use strict";n("KqXw");var r=n("uLp7"),o=n("ct80"),i=n("fVMg"),a=n("QsUS"),c=n("WxKw"),l=i("species"),s=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),f=i("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),d=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var m=i(e),v=!o((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),E=v&&!o((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[l]=function(){return n},n.flags="",n[m]=/./[m]),n.exec=function(){return t=!0,null},n[m](""),!t}));if(!v||!E||"replace"===e&&(!s||!u||p)||"split"===e&&!d){var h=/./[m],y=n(m,""[e],(function(e,t,n,r,o){return t.exec===a?v&&!o?{done:!0,value:h.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=y[0],g=y[1];r(String.prototype,e,b),r(RegExp.prototype,m,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}f&&c(RegExp.prototype[m],"sham",!0)}},peMk:function(e,t,n){var r=n("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},"s+Iv":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));n("vrRf");function r(t){var n,r;0<=["development","test"].indexOf(null===(n=e)||void 0===n||null===(r=n.env)||void 0===r?void 0:"production")&&console.warn(t)}function o(e,t){t&&r(e)}}).call(this,n("F63i"))},sob3:function(e,t,n){"use strict";var r=n("97Jx"),o=n.n(r),i=n("m3Bd"),a=n.n(i),c=n("ERkP"),l=n.n(c),s=n("O94r"),u=n.n(s),f=n("05Xt"),p=(n("yiBs"),Object(c.forwardRef)((function(e,t){var n=e.children,r=e.className,i=e.open,c=e.position,s=e.showSlidingPanelBorder,p=e.slidingPanelPositionFixed,d=a()(e,["children","className","open","position","showSlidingPanelBorder","slidingPanelPositionFixed"]);return l.a.createElement(f.a,o()({},d,{in:i,timeout:{enter:0,exit:350},classNames:u()("sliding-panel--open-".concat(c),s&&"sliding-panel--border-".concat(c),{"sliding-panel--fixed":p},"sliding-panel"),appear:!0,unmountOnExit:!0}),l.a.createElement("div",{className:u()("sliding-panel",r),ref:t},n))})));p.defaultProps={children:null,className:void 0,open:!1,position:"left",showSlidingPanelBorder:!1,slidingPanelPositionFixed:!1},t.a=p},"t/tF":function(e,t,n){var r=n("i7Kn"),o=n("cww3"),i=function(e){return function(t,n){var i,a,c=String(o(t)),l=r(n),s=c.length;return l<0||l>=s?e?"":void 0:(i=c.charCodeAt(l))<55296||i>56319||l+1===s||(a=c.charCodeAt(l+1))<56320||a>57343?e?c.charAt(l):i:e?c.slice(l,l+2):a-56320+(i-55296<<10)+65536}};e.exports={codeAt:i(!1),charAt:i(!0)}},yiBs:function(e,t,n){},z84I:function(e,t,n){"use strict";var r=n("ax0f"),o=n("0FSu").map,i=n("GJtw"),a=n("znGZ"),c=i("map"),l=a("map");r({target:"Array",proto:!0,forced:!c||!l},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}},[["YF/V",0,1,2,6,3,5,7,9,17,4]]]);
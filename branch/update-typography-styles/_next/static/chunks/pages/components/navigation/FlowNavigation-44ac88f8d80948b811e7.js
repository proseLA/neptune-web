_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[108],{"+KXO":function(t,e,n){var r=n("ax0f"),o=n("N9G2"),a=n("DEeE");r({target:"Object",stat:!0,forced:n("ct80")((function(){a(1)}))},{keys:function(t){return a(o(t))}})},"1IsZ":function(t,e,n){var r=n("ax0f"),o=n("YAkj").values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},"1Pcy":function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},"2G9S":function(t,e,n){"use strict";var r=n("ax0f"),o=n("ct80"),a=n("xt6W"),i=n("dSaG"),c=n("N9G2"),l=n("tJVe"),u=n("2sZ7"),s=n("aoZ+"),f=n("GJtw"),p=n("fVMg"),d=n("T+0C"),v=p("isConcatSpreadable"),m=d>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=f("concat"),h=function(t){if(!i(t))return!1;var e=t[v];return void 0!==e?!!e:a(t)};r({target:"Array",proto:!0,forced:!m||!g},{concat:function(t){var e,n,r,o,a,i=c(this),f=s(i,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(h(a=-1===e?i:arguments[e])){if(p+(o=l(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in a&&u(f,p,a[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(f,p++,a)}return f.length=p,f}})},"2gZs":function(t,e,n){var r=n("POz8"),o=n("amH4"),a=n("fVMg")("toStringTag"),i="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),a))?n:i?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},"2sZ7":function(t,e,n){"use strict";var r=n("CD8Q"),o=n("q9+l"),a=n("lhjL");t.exports=function(t,e,n){var i=r(e);i in t?o.f(t,i,a(0,n)):t[i]=n}},"34wW":function(t,e,n){var r=n("amH4"),o=n("QsUS");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"4/YM":function(t,e,n){"use strict";var r=n("t/tF").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"5BfY":function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={}))[o.EXTRA_SMALL=480]="EXTRA_SMALL",o[o.SMALL=576]="SMALL",o[o.MEDIUM=768]="MEDIUM",o[o.LARGE=992]="LARGE",o[o.EXTRA_LARGE=1200]="EXTRA_LARGE"},"5Yy7":function(t,e,n){var r=n("695J");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"695J":function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},"7CQW":function(t,e,n){"use strict";n("2G9S"),n("7x/C"),n("DZ+c");var r=n("VrFO"),o=n.n(r),a=n("Y9Ll"),i=n.n(a),c=n("1Pcy"),l=n.n(c),u=n("5Yy7"),s=n.n(u),f=n("N+ot"),p=n.n(f),d=n("AuHH"),v=n.n(d),m=n("KEM+"),g=n.n(m),h=n("ERkP"),b=n.n(h),E=n("eKd8");n("7gtC");function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var o=v()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var x=function(t){function e(){var t;return o()(this,e),t=n.call(this),g()(l()(t),"ensureHidden",(function(e){t.state.show||(e.stopPropagation(),t.hide())})),t.state={show:!1,tooltipId:null},t}s()(e,t);var n=y(e);return i()(e,[{key:"componentDidMount",value:function(){this.setState({tooltipId:Math.random().toString(36).substring(7)})}},{key:"show",value:function(){this.setState((function(){return{show:!0}}))}},{key:"hide",value:function(){this.setState((function(){return{show:!1}}))}},{key:"render",value:function(){var t=this,e=this.state.tooltipId,n=this.props,r=n.position,o=n.children,a=n.label,i=n.offset,c=this.elementReference&&this.tooltipReference?function(t,e,n,r){return n===E.a.TOP?{top:"".concat(t.offsetTop-e.offsetHeight-r,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:n===E.a.LEFT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft-e.offsetWidth-r,"px")}:n===E.a.RIGHT?{top:"".concat(t.offsetTop+t.offsetHeight/2-e.offsetHeight/2,"px"),left:"".concat(t.offsetLeft+t.offsetWidth+r,"px")}:n===E.a.BOTTOM?{top:"".concat(t.offsetTop+t.offsetHeight+r,"px"),left:"".concat(t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2,"px")}:{}}(this.elementReference,this.tooltipReference,r,i):{};return b.a.createElement("span",{onMouseOver:function(){return t.show()},onFocus:function(){return t.show()},onMouseOut:function(){return t.hide()},onBlur:function(){return t.hide()},ref:function(e){t.elementReference=e},"aria-describedby":e,className:"tw-tooltip-container"},b.a.createElement("div",{onMouseOver:this.ensureHidden,onFocus:this.ensureHidden,className:"tooltip fade ".concat(r," ").concat(this.state.show?"in":""),role:"tooltip",style:c,ref:function(e){t.tooltipReference=e},id:e},b.a.createElement("div",{className:"tooltip-arrow"}),b.a.createElement("div",{className:"tooltip-inner"},a)),o)}}]),e}(h.Component);x.defaultProps={position:E.a.TOP,offset:0};var O=x;e.a=O},"7J1Q":function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).VERTICAL="VERTICAL",o.VERTICAL_TWO_COLUMN="VERTICAL_TWO_COLUMN",o.VERTICAL_ONE_COLUMN="VERTICAL_ONE_COLUMN",o.HORIZONTAL="HORIZONTAL",o.HORIZONTAL_JUSTIFIED="HORIZONTAL_JUSTIFIED",o.HORIZONTAL_LEFT_ALIGNED="HORIZONTAL_LEFT_ALIGNED",o.HORIZONTAL_RIGHT_ALIGNED="HORIZONTAL_RIGHT_ALIGNED"},"7x/C":function(t,e,n){var r=n("POz8"),o=n("uLp7"),a=n("UmhL");r||o(Object.prototype,"toString",a,{unsafe:!0})},"7xRU":function(t,e,n){"use strict";var r=n("ax0f"),o=n("g6a+"),a=n("N4z3"),i=n("f4p7"),c=[].join,l=o!=Object,u=i("join",",");r({target:"Array",proto:!0,forced:l||!u},{join:function(t){return c.call(a(this),void 0===t?",":t)}})},"97Jx":function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},"9YZu":function(t,e,n){"use strict";var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=n("h9gP"),l=n("VehP"),u=n("EUyq"),s=(n("DGa2"),function(t){var e=t.backgroundColor,n=t.children,r=t.className,a=t.outlined,c=t.size,l=t.theme,u=t.type;return o.a.createElement("div",{className:i()("tw-avatar",r,"tw-avatar--".concat(c),"tw-avatar--".concat(u),"tw-avatar--".concat(l),{"tw-avatar--outlined":a})},o.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:e||void 0}},n))});s.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:l.a.MEDIUM,theme:u.a.LIGHT,type:c.a.THUMBNAIL},e.a=s},AuHH:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},BAoe:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r,o,a=n("D57K"),i=n("ERkP"),c=n("kQwz");!function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"}(o||(o={}));function l(t){var e=function(e){var n=Object(c.a)(),r=e.value,o=e.children,i=Object(a.c)(e,["value","children"]),l="string"===typeof r?new Date(r||0):r;return o("formatDate"===t?n.formatDateToParts(l,i):n.formatTimeToParts(l,i))};return e.displayName=o[t],e}function u(t){var e=function(e){var n=Object(c.a)(),r=e.value,o=e.children,l=Object(a.c)(e,["value","children"]),u=n[t](r,l);if("function"===typeof o)return o(u);var s=n.textComponent||i.Fragment;return i.createElement(s,null,u)};return e.displayName=r[t],e}function s(t){return t}u("formatDate"),u("formatTime"),u("formatNumber"),u("formatList"),u("formatDisplayName"),l("formatDate"),l("formatTime")},Bk02:function(t,e,n){"use strict";var r=n("KEM+"),o=n.n(r),a=n("ERkP"),i=n.n(a),c=n("O94r"),l=n.n(c),u=n("VehP"),s=n("EUyq");n("FkPD");e.a=function(t){var e,n=t.badge,r=t.className,a=void 0===r?void 0:r,c=t.size,f=void 0===c?u.a.SMALL:c,p=t.border,d=void 0===p?s.a.LIGHT:p,v=t.children,m=l()("tw-badge",(e={},o()(e,"tw-badge-border-".concat(d),d),o()(e,"tw-badge-".concat(f),f),e),a);return i.a.createElement("div",{className:m},i.a.createElement("div",{className:"tw-badge__children"},v),i.a.createElement("div",{className:"tw-badge__content"},n))}},DEeE:function(t,e,n){var r=n("yRya"),o=n("sX5C");t.exports=Object.keys||function(t){return r(t,o)}},DGa2:function(t,e,n){},EUyq:function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).LIGHT="light",o.DARK="dark"},FYta:function(t,e,n){"use strict";n.r(e),n.d(e,"meta",(function(){return P})),n.d(e,"default",(function(){return C}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),i=n.n(a),c=n("ZVZ0"),l=n("Qi1R"),u=(n("LW0h"),n("z84I"),n("+KXO"),n("ddV6")),s=n.n(u),f=n("O94r"),p=n.n(f),d=n("Fr7r"),v=n("ToGa"),m=(n("aDaW"),function(t){var e=t.activeLabel,n=t.className,r=t.labels,o=r.length-1;return i.a.createElement("div",{className:p()("np-animated-label",n)},r.map((function(t,n){var r=n-1;return i.a.createElement("div",{key:n,className:p()("text-xs-left",{"np-animated-label--in":n===e,"np-animated-label--out":r===e&&r!==o})},t)})))});m.defaultProps={className:void 0};var g=m,h=n("/Vl7"),b=(n("ePcE"),function(t){var e=t.label,n=t.className,r=t.onClick;return i.a.createElement("button",{type:"button",className:p()("np-back-button","align-items-center","btn-unstyled",n),onClick:r},i.a.createElement(h.c,{size:24}),e)});b.defaultProps={className:void 0,label:void 0};var E=b,y=n("qGsU"),x=n("5BfY"),O=n("7J1Q"),S=n("Tz8v"),w=(n("7ndt"),n("jGnQ")),N={"np-flow-navigation--sm":x.a.SMALL,"np-flow-navigation--lg":x.a.LARGE},T=function(t){var e=t.activeStep,n=t.avatar,r=t.logo,o=t.onClose,c=t.onGoBack,l=t.done,u=t.steps,f=Object(a.useRef)(null),m=Object(S.a)({ref:f}),h=s()(m,1)[0],b=o&&i.a.createElement(y.a,{onClick:o}),w=h<x.a.SMALL,T=l?null:n;return i.a.createElement("div",{ref:f,className:p()("np-flow-navigation d-flex align-items-center justify-content-center p-y-3",{"np-flow-navigation--border-bottom":!l})},i.a.createElement(d.a,{className:p()("np-flow-navigation__content p-x-3",{"np-flow-navigation--hidden":!h,"np-flow-navigation--xs-max":w},Object.keys(N).filter((function(t){return h>=N[t]}))),leftContent:w?function(){var t=c&&0<e;return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement(E,{label:i.a.createElement(g,{className:"m-x-1",labels:u.map((function(t){return t.label})),activeLabel:e-1}),onClick:c}),i.a.createElement("div",{className:p()("np-flow-navigation--flag",{"np-flow-navigation--flag__hidden":t,"np-flow-navigation--flag__display":!t})}))}():r,rightContent:i.a.createElement(i.a.Fragment,null,T,T&&b&&i.a.createElement("span",{className:"separator"}),b),bottomContent:!l&&i.a.createElement(v.a,{activeStep:e,steps:u,className:p()("np-flow-navigation__stepper")}),layout:h<x.a.LARGE?O.a.VERTICAL:O.a.HORIZONTAL}))};T.defaultProps={activeStep:0,avatar:void 0,logo:i.a.createElement(w.a,null),onGoBack:void 0,onClose:void 0,done:!1};var L=T,A=n("9YZu"),R=n("XE1s"),I=n("Te6E"),_=n("GW4H"),P=(i.a.createElement,{name:"FlowNavigation"}),j={meta:P};function C(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(c.a)("wrapper",Object(r.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(l.b,{code:"() => {\n  const [activeStep, setActiveStep] = React.useState(0);\n  const [closed, setClosed] = React.useState(false);\n\n  return !closed ? (\n    <FlowNavigation\n      done={false}\n      avatar={\n        <AvatarWrapper url=\"http://placekitten.com/100/100\" profileType={ProfileType.PERSONAL} />\n      }\n      logo={<Logo />}\n      onClose={() => setClosed(true)}\n      onGoBack={() => setActiveStep(activeStep - 1 > 0 ? activeStep - 1 : 0)}\n      steps={[\n        {\n          label: 'Amount',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>100 GBP</strong>\n              </div>\n              0.2351 ETH\n            </>\n          ),\n          onClick: () => setActiveStep(0),\n        },\n        {\n          label: 'You',\n          hoverLabel: (\n            <>\n              <div>\n                <strong>Elena Durante</strong>\n              </div>\n              elenadurante@test.com\n            </>\n          ),\n          onClick: () => setActiveStep(1),\n        },\n        { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },\n        { label: 'Review', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },\n        {\n          label: 'Pay',\n          hoverLabel: 'Enrico Gusso II',\n          onClick: () => setActiveStep(4),\n        },\n      ]}\n      activeStep={activeStep}\n    />\n  ) : null;\n};\n",scope:{FlowNavigation:L,Avatar:A.a,BriefcaseIcon:h.f,ProfileIcon:h.y,AvatarWrapper:R.a,Logo:w.a,LogoType:I.a,ProfileType:_.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(c.a)("p",null,"Use FlowNavigation to help a user navigate through a flow. If a Stepper does not need to be included please use ",Object(c.a)("a",Object(r.a)({parentName:"p"},{href:"/components/overlays/OverlayHeader"}),"OverflowHeader")," instead.\nThe current and recommended size for logo is height=24px."),Object(c.a)(l.a,{componentName:"FlowNavigation",mdxType:"GeneratePropsTable"}))}C.isMDXComponent=!0},Fr7r:function(t,e,n){"use strict";var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=n("7J1Q"),l=o.a.forwardRef((function(t,e){var n=t.bottomContent,r=t.className,a=t.layout,l=t.leftContent,u=t.rightContent,s=a===c.a.VERTICAL;return o.a.createElement("div",{className:i()("np-header","d-flex","flex-wrap",r),ref:e},o.a.createElement("div",{className:i()("align-items-center","np-header__left","d-flex",{"flex__item--8":s})},l),o.a.createElement("div",{className:i()("align-items-center","d-flex","np-header__right","justify-content-end",{"flex__item--4 ":s,"order-2":!s})},u),o.a.createElement("div",{className:i()("align-items-center","d-flex","justify-content-center",{"flex__item--12":s,"order-1 flex-grow-1":!s})},n))}));l.defaultProps={bottomContent:void 0,className:void 0,layout:c.a.HORIZONTAL,leftContent:void 0,rightContent:void 0},e.a=l},GW4H:function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).BUSINESS="BUSINESS",o.PERSONAL="PERSONAL"},KcoV:function(t,e,n){},KqXw:function(t,e,n){"use strict";var r=n("ax0f"),o=n("QsUS");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},L2rT:function(t,e,n){"use strict";var r=n("ct80");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},LW0h:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").filter,a=n("GJtw"),i=n("znGZ"),c=a("filter"),l=i("filter");r({target:"Array",proto:!0,forced:!c||!l},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},LdEA:function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}},"M+/F":function(t,e,n){"use strict";var r=n("ax0f"),o=n("dSaG"),a=n("xt6W"),i=n("mg+6"),c=n("tJVe"),l=n("N4z3"),u=n("2sZ7"),s=n("fVMg"),f=n("GJtw"),p=n("znGZ"),d=f("slice"),v=p("slice",{ACCESSORS:!0,0:0,1:2}),m=s("species"),g=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!d||!v},{slice:function(t,e){var n,r,s,f=l(this),p=c(f.length),d=i(t,p),v=i(void 0===e?p:e,p);if(a(f)&&("function"!=typeof(n=f.constructor)||n!==Array&&!a(n.prototype)?o(n)&&null===(n=n[m])&&(n=void 0):n=void 0,n===Array||void 0===n))return g.call(f,d,v);for(r=new(void 0===n?Array:n)(h(v-d,0)),s=0;d<v;d++,s++)d in f&&u(r,s,f[d]);return r.length=s,r}})},"N+ot":function(t,e,n){var r=n("T0aG"),o=n("1Pcy");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},N9G2:function(t,e,n){var r=n("cww3");t.exports=function(t){return Object(r(t))}},O94r:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&t.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},POz8:function(t,e,n){var r={};r[n("fVMg")("toStringTag")]="z",t.exports="[object z]"===String(r)},QsUS:function(t,e,n){"use strict";var r=n("q/0V"),o=n("L2rT"),a=RegExp.prototype.exec,i=String.prototype.replace,c=a,l=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=o.UNSUPPORTED_Y||o.BROKEN_CARET,s=void 0!==/()??/.exec("")[1];(l||s||u)&&(c=function(t){var e,n,o,c,f=this,p=u&&f.sticky,d=r.call(f),v=f.source,m=0,g=t;return p&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,m++),n=new RegExp("^(?:"+v+")",d)),s&&(n=new RegExp("^"+v+"$(?!\\s)",d)),l&&(e=f.lastIndex),o=a.call(p?n:f,g),p?o?(o.input=o.input.slice(m),o[0]=o[0].slice(m),o.index=f.lastIndex,f.lastIndex+=o[0].length):f.lastIndex=0:l&&o&&(f.lastIndex=f.global?o.index+o[0].length:e),s&&o&&o.length>1&&i.call(o[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o}),t.exports=c},Qzre:function(t,e,n){var r=n("FXyv"),o=n("hpdy"),a=n("fVMg")("species");t.exports=function(t,e){var n,i=r(t).constructor;return void 0===i||void 0==(n=r(i)[a])?e:o(n)}},T0aG:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},Te6E:function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).WISE="WISE",o.WISE_BUSINESS="WISE_BUSINESS"},ToGa:function(t,e,n){"use strict";n("2G9S"),n("z84I");var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=(n("//SO"),n("7CQW"));n("7xRU"),n("iKE+"),n("KqXw"),n("DZ+c"),n("WNMA");function l(){return function(){var t=void 0!==window.ontouchstart,e="undefined"!=typeof navigator&&navigator.maxTouchPoints,n=window.DocumentTouch&&document instanceof window.DocumentTouch;return!!(t||e||n)}()||function(){var t=["android","iemobile","iphone","ipad","ipod","blackberry","bada"].map((function(t){return"(".concat(t,")")})).join("|"),e=new RegExp(t,"ig");return"undefined"!=typeof navigator&&!!navigator.userAgent.match(e)}()}var u=n("eKd8");var s=function(t){var e=t.steps,n=t.activeStep,r=t.className;if(0===e.length)return null;var a=function(t,e,n){return Math.max(Math.min(e,n),t)}(0,e.length-1,n),s=1/(e.length-1),f=a/(e.length-1),p=Math.max(f-s,0),d=Math.min(a,1)*s;return o.a.createElement("div",{className:i()("tw-stepper",r)},o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"progress-bar-filler",style:{width:"".concat(100*p,"%")}}),o.a.createElement("div",{className:"progress-bar-ending",style:{width:"".concat(100*d,"%")}})),o.a.createElement("ul",{className:"tw-stepper-steps p-t-1 m-b-0"},e.map((function(t,e){var n=e===a,r=t.onClick&&!n,i=o.a.createElement("button",{type:"button",className:"btn-unstyled tw-stepper__step-label",disabled:!r,onClick:function(){return r&&t.onClick()}},o.a.createElement("small",null,t.label));return o.a.createElement("li",{key:e,style:{left:"".concat(e*s*100,"%")},className:"\n          hidden-xs\n          tw-stepper__step\n          ".concat(n?"tw-stepper__step--active":"","\n          ").concat(r?"tw-stepper__step--clickable":"","\n        ")},t.hoverLabel&&!l()?o.a.createElement(c.a,{position:u.a.BOTTOM,label:t.hoverLabel},i):i)}))))};s.defaultProps={activeStep:0,className:void 0};var f=s;e.a=f},Tz8v:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("ddV6"),o=n.n(r),a=n("ERkP"),i=n("XORh"),c=n.n(i),l=a.useLayoutEffect,u=function(t){var e=t.ref,n=t.throttleMs,r=void 0===n?100:n,i=Object(a.useState)(null),u=o()(i,2),s=u[0],f=u[1];return l((function(){var t=function(){e&&(e.innerWidth?f(e.innerWidth):e.current&&f(e.current.clientWidth))},n=c()(t,r);return window.addEventListener("resize",n,!0),window.requestAnimationFrame(t),function(){return window.removeEventListener("resize",n,!0)}}),[]),[s]};u.THROTTLE_MS=100},Ua7V:function(t,e){t.exports=function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}},UmhL:function(t,e,n){"use strict";var r=n("POz8"),o=n("2gZs");t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},VehP:function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).EXTRA_SMALL="xs",o.SMALL="sm",o.MEDIUM="md",o.LARGE="lg",o.EXTRA_LARGE="xl"},VrFO:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},WNMA:function(t,e,n){"use strict";var r=n("lbJE"),o=n("FXyv"),a=n("tJVe"),i=n("cww3"),c=n("4/YM"),l=n("34wW");r("match",1,(function(t,e,n){return[function(e){var n=i(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=o(t),u=String(this);if(!i.global)return l(i,u);var s=i.unicode;i.lastIndex=0;for(var f,p=[],d=0;null!==(f=l(i,u));){var v=String(f[0]);p[d]=v,""===v&&(i.lastIndex=c(u,a(i.lastIndex),s)),d++}return 0===d?null:p}]}))},XE1s:function(t,e,n){"use strict";n("7xRU"),n("z84I"),n("M+/F"),n("ho0z"),n("KqXw"),n("Ysgh");var r=n("KEM+"),o=n.n(r),a=n("ddV6"),i=n.n(a),c=n("97Jx"),l=n.n(c),u=n("m3Bd"),s=n.n(u),f=n("ERkP"),p=n.n(f),d=n("/Vl7"),v=n("9YZu"),m=n("h9gP"),g=n("Bk02"),h=n("GW4H"),b=n("VehP");function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?E(Object(e),!0).forEach((function(n){o()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}var x=function(t){var e=t.url,n=t.children,r=s()(t,["url","children"]);return e?p.a.createElement(g.a,l()({badge:p.a.createElement("img",{src:e,alt:""})},r),n):n};x.defaultProps={url:void 0};var O=function(t){var e=t.url,n=t.profileType,r=t.badgeUrl,o=t.name,a=t.avatarProps,c=t.badgeProps,u=Object(f.useState)(!1),s=i()(u,2),g=s[0],E=s[1],O=n===h.a.BUSINESS;return Object(f.useEffect)((function(){return E(!1)}),[e]),p.a.createElement(x,l()({url:r},c),p.a.createElement(v.a,l()({size:b.a.MEDIUM},y(e&&!g?{type:m.a.THUMBNAIL,children:p.a.createElement("img",{src:e,alt:"avatar",onError:function(){return E(!0)}})}:n?{type:m.a.ICON,children:O?p.a.createElement(d.f,null):p.a.createElement(d.y,null)}:o?{type:m.a.INITIALS,children:p.a.createElement("small",null,S(o))}:{type:m.a.ICON,children:p.a.createElement(d.y,null)},a))))};function S(t){var e=t.split(" ").map((function(t){return t[0]})).join("").toUpperCase();return 1===e.length?e[0]:e[0]+e.slice(-1)}O.defaultProps={url:void 0,profileType:void 0,badgeUrl:void 0,name:void 0,avatarProps:{},badgeProps:{}};var w=O;e.a=w},XORh:function(t,e,n){(function(e){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,u=c||l||Function("return this")(),s=Object.prototype.toString,f=Math.max,p=Math.min,d=function(){return u.Date.now()};function v(t,e,n){var r,o,a,i,c,l,u=0,s=!1,v=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=r,a=o;return r=o=void 0,u=e,i=t.apply(a,n)}function E(t){return u=t,c=setTimeout(x,e),s?b(t):i}function y(t){var n=t-l;return void 0===l||n>=e||n<0||v&&t-u>=a}function x(){var t=d();if(y(t))return O(t);c=setTimeout(x,function(t){var n=e-(t-l);return v?p(n,a-(t-u)):n}(t))}function O(t){return c=void 0,h&&r?b(t):(r=o=void 0,i)}function S(){var t=d(),n=y(t);if(r=arguments,o=this,l=t,n){if(void 0===c)return E(l);if(v)return c=setTimeout(x,e),b(l)}return void 0===c&&(c=setTimeout(x,e)),i}return e=g(e)||0,m(n)&&(s=!!n.leading,a=(v="maxWait"in n)?f(g(n.maxWait)||0,e):a,h="trailing"in n?!!n.trailing:h),S.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=l=o=c=void 0},S.flush=function(){return void 0===c?i:O(d())},S}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var c=o.test(t);return c||a.test(t)?i(t.slice(2),c?2:8):r.test(t)?NaN:+t}t.exports=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(t,e,{leading:r,maxWait:e,trailing:o})}}).call(this,n("lpmq"))},Y9Ll:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},YAkj:function(t,e,n){var r=n("1Mu/"),o=n("DEeE"),a=n("N4z3"),i=n("4Sk5").f,c=function(t){return function(e){for(var n,c=a(e),l=o(c),u=l.length,s=0,f=[];u>s;)n=l[s++],r&&!i.call(c,n)||f.push(t?[n,c[n]]:c[n]);return f}};t.exports={entries:c(!0),values:c(!1)}},Ysgh:function(t,e,n){"use strict";var r=n("lbJE"),o=n("jl0/"),a=n("FXyv"),i=n("cww3"),c=n("Qzre"),l=n("4/YM"),u=n("tJVe"),s=n("34wW"),f=n("QsUS"),p=n("ct80"),d=[].push,v=Math.min,m=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(i(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,a);for(var c,l,u,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,m=new RegExp(t.source,p+"g");(c=f.call(m,r))&&!((l=m.lastIndex)>v&&(s.push(r.slice(v,c.index)),c.length>1&&c.index<r.length&&d.apply(s,c.slice(1)),u=c[0].length,v=l,s.length>=a));)m.lastIndex===c.index&&m.lastIndex++;return v===r.length?!u&&m.test("")||s.push(""):s.push(r.slice(v)),s.length>a?s.slice(0,a):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=i(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,o,n):r.call(String(o),e,n)},function(t,o){var i=n(r,t,this,o,r!==e);if(i.done)return i.value;var f=a(t),p=String(this),d=c(f,RegExp),g=f.unicode,h=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(m?"y":"g"),b=new d(m?f:"^(?:"+f.source+")",h),E=void 0===o?4294967295:o>>>0;if(0===E)return[];if(0===p.length)return null===s(b,p)?[p]:[];for(var y=0,x=0,O=[];x<p.length;){b.lastIndex=m?x:0;var S,w=s(b,m?p:p.slice(x));if(null===w||(S=v(u(b.lastIndex+(m?0:x)),p.length))===y)x=l(p,x,g);else{if(O.push(p.slice(y,x)),O.length===E)return O;for(var N=1;N<=w.length-1;N++)if(O.push(w[N]),O.length===E)return O;x=y=S}}return O.push(p.slice(y)),O}]}),!m)},ddV6:function(t,e,n){var r=n("qPgQ"),o=n("Ua7V"),a=n("peMk"),i=n("f2kJ");t.exports=function(t,e){return r(t)||o(t,e)||a(t,e)||i()}},eKd8:function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).BOTTOM="bottom",o.BOTTOM_LEFT="bottom-left",o.BOTTOM_RIGHT="bottom-right",o.CENTER="center",o.LEFT="left",o.LEFT_TOP="left-top",o.RIGHT="right",o.RIGHT_TOP="right-top",o.TOP="top"},f2kJ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},f4p7:function(t,e,n){"use strict";var r=n("ct80");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},gxsa:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/FlowNavigation",function(){return n("FYta")}])},h9gP:function(t,e,n){"use strict";var r,o;n.d(e,"a",(function(){return r})),(o=r||(r={})).THUMBNAIL="thumbnail",o.ICON="icon",o.EMOJI="emoji",o.INITIALS="initials"},ho0z:function(t,e,n){var r=n("1Mu/"),o=n("q9+l").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/;r&&!("name"in a)&&o(a,"name",{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},iQ7j:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},jGnQ:function(t,e,n){"use strict";n("2G9S");var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=n("Te6E"),l=(n("tXN1"),{WISE:"brand_logo.svg",WISE_BUSINESS:"brand_logo_business.svg",WISE_INVERSE:"brand_logo_inverse.svg",WISE_BUSINESS_INVERSE:"brand_logo_business_inverse.svg"}),u=function(t){var e=t.className,n=t.inverse,r=t.type,a=l["".concat(r).concat(n?"_INVERSE":"")];return o.a.createElement("img",{className:i()("np-logo",e),alt:r===c.a.WISE?"Wise":"Wise business",src:"".concat("https://wise.com/public-resources/assets/logos/wise/").concat(a)})};u.defaultProps={className:void 0,inverse:!1,type:c.a.WISE},e.a=u},lbJE:function(t,e,n){"use strict";n("KqXw");var r=n("uLp7"),o=n("ct80"),a=n("fVMg"),i=n("QsUS"),c=n("WxKw"),l=a("species"),u=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),f=a("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),d=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=a(t),m=!o((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=m&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[l]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!m||!g||"replace"===t&&(!u||!s||p)||"split"===t&&!d){var h=/./[v],b=n(v,""[t],(function(t,e,n,r,o){return e.exec===i?m&&!o?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),E=b[0],y=b[1];r(String.prototype,t,E),r(RegExp.prototype,v,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}f&&c(RegExp.prototype[v],"sham",!0)}},m3Bd:function(t,e,n){var r=n("LdEA");t.exports=function(t,e){if(null==t)return{};var n,o,a=r(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}},peMk:function(t,e,n){var r=n("iQ7j");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},"q/0V":function(t,e,n){"use strict";var r=n("FXyv");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},qGsU:function(t,e,n){"use strict";n("1IsZ");var r=n("ERkP"),o=n.n(r),a=n("O94r"),i=n.n(a),c=n("kQwz"),l=n("/Vl7"),u=n("BAoe"),s=Object(u.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(n("KcoV"),o.a.forwardRef((function(t,e){var n=Object(c.a)(),r=t.onClick,a=t.className,u=t.size;return o.a.createElement("button",{ref:e,type:"button",className:i()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":u===f.Size.LARGE},a),"aria-label":n.formatMessage(s.ariaLabel),onClick:r},o.a.createElement(l.l,{size:u}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};e.a=f},qPgQ:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},"t/tF":function(t,e,n){var r=n("i7Kn"),o=n("cww3"),a=function(t){return function(e,n){var a,i,c=String(o(e)),l=r(n),u=c.length;return l<0||l>=u?t?"":void 0:(a=c.charCodeAt(l))<55296||a>56319||l+1===u||(i=c.charCodeAt(l+1))<56320||i>57343?t?c.charAt(l):a:t?c.slice(l,l+2):i-56320+(a-55296<<10)+65536}};t.exports={codeAt:a(!1),charAt:a(!0)}},z84I:function(t,e,n){"use strict";var r=n("ax0f"),o=n("0FSu").map,a=n("GJtw"),i=n("znGZ"),c=a("map"),l=i("map");r({target:"Array",proto:!0,forced:!c||!l},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},znGZ:function(t,e,n){var r=n("1Mu/"),o=n("ct80"),a=n("8aeu"),i=Object.defineProperty,c={},l=function(t){throw t};t.exports=function(t,e){if(a(c,t))return c[t];e||(e={});var n=[][t],u=!!a(e,"ACCESSORS")&&e.ACCESSORS,s=a(e,0)?e[0]:l,f=a(e,1)?e[1]:void 0;return c[t]=!!n&&!o((function(){if(u&&!r)return!0;var t={length:-1};u?i(t,1,{enumerable:!0,get:l}):t[1]=1,n.call(t,s,f)}))}}},[["gxsa",0,1,2,6,3,5,8,9,4]]]);
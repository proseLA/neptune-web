_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[68],{"+kY7":function(e,t,n){var r=n("q9+l").f,o=n("8aeu"),i=n("fVMg")("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},"0FSu":function(e,t,n){var r=n("IRf+"),o=n("g6a+"),i=n("N9G2"),a=n("tJVe"),c=n("aoZ+"),l=[].push,s=function(e){var t=1==e,n=2==e,s=3==e,u=4==e,f=6==e,p=7==e,d=5==e||f;return function(m,v,y,h){for(var g,b,E=i(m),x=o(E),O=r(v,y,3),S=a(x.length),w=0,T=h||c,N=t?T(m,S):n||p?T(m,0):void 0;S>w;w++)if((d||w in x)&&(b=O(g=x[w],w,E),e))if(t)N[w]=b;else if(b)switch(e){case 3:return!0;case 5:return g;case 6:return w;case 2:l.call(N,g)}else switch(e){case 4:return!1;case 7:l.call(N,g)}return f?-1:s||u?u:N}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},"0Q6q":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={PROCESSING:"processing",FAILED:"failed",SUCCEEDED:"succeeded",HIDDEN:"hidden",DONE:"done",PENDING:"pending"}},"1Pcy":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"1t7P":function(e,t,n){"use strict";var r=n("ax0f"),o=n("9JhN"),i=n("VCi3"),a=n("DpO5"),c=n("1Mu/"),l=n("56Cj"),s=n("TbR9"),u=n("ct80"),f=n("8aeu"),p=n("xt6W"),d=n("dSaG"),m=n("FXyv"),v=n("N9G2"),y=n("N4z3"),h=n("CD8Q"),g=n("lhjL"),b=n("guiJ"),E=n("DEeE"),x=n("ZdBB"),O=n("7lg/"),S=n("JAL5"),w=n("GFpt"),T=n("q9+l"),N=n("4Sk5"),P=n("WxKw"),R=n("uLp7"),C=n("TN3B"),j=n("MyxS"),_=n("1odi"),I=n("HYrn"),k=n("fVMg"),A=n("TkGI"),L=n("aokA"),M=n("+kY7"),G=n("zc29"),D=n("0FSu").forEach,V=j("hidden"),z=k("toPrimitive"),F=G.set,B=G.getterFor("Symbol"),H=Object.prototype,U=o.Symbol,J=i("JSON","stringify"),W=w.f,q=T.f,K=O.f,X=N.f,Y=C("symbols"),Z=C("op-symbols"),Q=C("string-to-symbol-registry"),$=C("symbol-to-string-registry"),ee=C("wks"),te=o.QObject,ne=!te||!te.prototype||!te.prototype.findChild,re=c&&u((function(){return 7!=b(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=W(H,t);r&&delete H[t],q(e,t,n),r&&e!==H&&q(H,t,r)}:q,oe=function(e,t){var n=Y[e]=b(U.prototype);return F(n,{type:"Symbol",tag:e,description:t}),c||(n.description=t),n},ie=s?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof U},ae=function(e,t,n){e===H&&ae(Z,t,n),m(e);var r=h(t,!0);return m(n),f(Y,r)?(n.enumerable?(f(e,V)&&e[V][r]&&(e[V][r]=!1),n=b(n,{enumerable:g(0,!1)})):(f(e,V)||q(e,V,g(1,{})),e[V][r]=!0),re(e,r,n)):q(e,r,n)},ce=function(e,t){m(e);var n=y(t),r=E(n).concat(fe(n));return D(r,(function(t){c&&!le.call(n,t)||ae(e,t,n[t])})),e},le=function(e){var t=h(e,!0),n=X.call(this,t);return!(this===H&&f(Y,t)&&!f(Z,t))&&(!(n||!f(this,t)||!f(Y,t)||f(this,V)&&this[V][t])||n)},se=function(e,t){var n=y(e),r=h(t,!0);if(n!==H||!f(Y,r)||f(Z,r)){var o=W(n,r);return!o||!f(Y,r)||f(n,V)&&n[V][r]||(o.enumerable=!0),o}},ue=function(e){var t=K(y(e)),n=[];return D(t,(function(e){f(Y,e)||f(_,e)||n.push(e)})),n},fe=function(e){var t=e===H,n=K(t?Z:y(e)),r=[];return D(n,(function(e){!f(Y,e)||t&&!f(H,e)||r.push(Y[e])})),r};(l||(R((U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=I(e),n=function(e){this===H&&n.call(Z,e),f(this,V)&&f(this[V],t)&&(this[V][t]=!1),re(this,t,g(1,e))};return c&&ne&&re(H,t,{configurable:!0,set:n}),oe(t,e)}).prototype,"toString",(function(){return B(this).tag})),R(U,"withoutSetter",(function(e){return oe(I(e),e)})),N.f=le,T.f=ae,w.f=se,x.f=O.f=ue,S.f=fe,A.f=function(e){return oe(k(e),e)},c&&(q(U.prototype,"description",{configurable:!0,get:function(){return B(this).description}}),a||R(H,"propertyIsEnumerable",le,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:U}),D(E(ee),(function(e){L(e)})),r({target:"Symbol",stat:!0,forced:!l},{for:function(e){var t=String(e);if(f(Q,t))return Q[t];var n=U(t);return Q[t]=n,$[n]=t,n},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(f($,e))return $[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!c},{create:function(e,t){return void 0===t?b(e):ce(b(e),t)},defineProperty:ae,defineProperties:ce,getOwnPropertyDescriptor:se}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:ue,getOwnPropertySymbols:fe}),r({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(e){return S.f(v(e))}}),J)&&r({target:"JSON",stat:!0,forced:!l||u((function(){var e=U();return"[null]"!=J([e])||"{}"!=J({a:e})||"{}"!=J(Object(e))}))},{stringify:function(e,t,n){for(var r,o=[e],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=t,(d(t)||void 0!==e)&&!ie(e))return p(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!ie(t))return t}),o[1]=t,J.apply(null,o)}});U.prototype[z]||P(U.prototype,z,U.prototype.valueOf),M(U,"Symbol"),_[V]=!0},"2G9S":function(e,t,n){"use strict";var r=n("ax0f"),o=n("ct80"),i=n("xt6W"),a=n("dSaG"),c=n("N9G2"),l=n("tJVe"),s=n("2sZ7"),u=n("aoZ+"),f=n("GJtw"),p=n("fVMg"),d=n("T+0C"),m=p("isConcatSpreadable"),v=d>=51||!o((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),y=f("concat"),h=function(e){if(!a(e))return!1;var t=e[m];return void 0!==t?!!t:i(e)};r({target:"Array",proto:!0,forced:!v||!y},{concat:function(e){var t,n,r,o,i,a=c(this),f=u(a,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(h(i=-1===t?a:arguments[t])){if(p+(o=l(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&s(f,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(f,p++,i)}return f.length=p,f}})},"2sZ7":function(e,t,n){"use strict";var r=n("CD8Q"),o=n("q9+l"),i=n("lhjL");e.exports=function(e,t,n){var a=r(t);a in e?o.f(e,a,i(0,n)):e[a]=n}},"34wW":function(e,t,n){var r=n("amH4"),o=n("QsUS");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"4/YM":function(e,t,n){"use strict";var r=n("t/tF").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"56Cj":function(e,t,n){var r=n("ct80");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"5Yy7":function(e,t,n){var r=n("695J");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"695J":function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},"7lg/":function(e,t,n){var r=n("N4z3"),o=n("ZdBB").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(t){return a.slice()}}(e):o(r(e))}},AuHH:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},GAp3:function(e,t,n){"use strict";n("2G9S"),n("vrRf"),n("KqXw"),n("Ysgh");var r,o=n("97Jx"),i=n.n(o),a=n("m3Bd"),c=n.n(a),l=n("VrFO"),s=n.n(l),u=n("Y9Ll"),f=n.n(u),p=n("1Pcy"),d=n.n(p),m=n("5Yy7"),v=n.n(m),y=n("N+ot"),h=n.n(y),g=n("AuHH"),b=n.n(g),E=n("KEM+"),x=n.n(E),O=n("ERkP"),S=n.n(O),w=n("O94r"),T=n.n(w),N=n("05Xt"),P=n("/Vl7"),R=n("6gor"),C=(n("2lU4"),n("bRoR")),j=n("eKd8"),_=n("VehP"),I=n("P8nL");function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b()(e);if(t){var o=b()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h()(this,n)}}var A=function(e){function t(){var e;s()(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=n.call.apply(n,[this].concat(o)),x()(d()(e),"onEscape",(function(t){var n=e.props.onClose;t&&(t.keyCode===R.a.ESCAPE||"Escape"===t.key)&&n&&n(t)})),x()(d()(e),"handleOnClick",(function(t){var n=e.props,r=n.onClose,o=n.closeOnClick;t.target===t.currentTarget&&r&&o&&r(t)})),x()(d()(e),"handleOnEnter",(function(){Object(C.a)()})),x()(d()(e),"handleOnClose",(function(){Object(C.b)()})),x()(d()(e),"checkSpecialClasses",(function(t){return-1!==e.props.className.split(" ").indexOf(t)})),e}v()(t,e);var n=k(t);return f()(t,[{key:"componentDidMount",value:function(){this.modalDialog&&this.modalDialog.focus(),document.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){this.props.open&&Object(C.b)(),document.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){var e=this,n=this.props,r=n.title,o=n.body,a=n.footer,l=n.onClose,s=n.className,u=n.open,f=(n.size,n.closeOnClick,n.scroll),p=n.position,d=c()(n,["title","body","footer","onClose","className","open","size","closeOnClick","scroll","position"]),m=this.checkSpecialClasses("compact"),v=this.checkSpecialClasses("no-divider");return S.a.createElement(I.a,{open:u,scrollable:f===t.Scroll.CONTENT},S.a.createElement(N.a,{appear:!0,in:u,onEnter:this.handleOnEnter,onExited:this.handleOnClose,classNames:{enterDone:"in"},timeout:150,unmountOnExit:!0},S.a.createElement("div",i()({className:T()("tw-modal","d-flex","justify-content-center",{"tw-modal--content":f===t.Scroll.CONTENT,"align-items-center":p===j.a.CENTER,"align-items-start":p===j.a.TOP},"fade",s),tabIndex:"-1",role:"presentation",ref:function(t){e.modalDialog=t},onKeyDown:this.onEscape,onClick:this.handleOnClick},d),S.a.createElement("div",{className:T()("tw-modal-dialog","d-flex",x()({},"tw-modal-".concat(this.props.size),this.props.size)),"aria-modal":!0,role:"dialog"},S.a.createElement("div",{className:T()("tw-modal-content","d-flex","flex-column","justify-content-between",{"tw-modal-compact":m,"tw-modal-no-title":!r})},S.a.createElement("div",{className:T()("tw-modal-header","d-flex","align-items-center","justify-content-between","flex-wrap",{"modal--withoutborder":!r||v})},S.a.createElement("h4",{className:"tw-modal-title"},r),S.a.createElement("button",{type:"button",onClick:l,className:"close","aria-label":"close"},S.a.createElement(P.j,{size:24}))),S.a.createElement("div",{className:"tw-modal-body"},o),a&&S.a.createElement("div",{className:T()("tw-modal-footer","d-flex","align-items-center","flex-wrap",{"modal--withoutborder":v})},a))))))}}]),t}(O.Component);x()(A,"Size",_.a),x()(A,"Scroll",{CONTENT:"content",VIEWPORT:"viewport"}),x()(A,"Position",(r={},x()(r,j.a.TOP.toUpperCase(),j.a.TOP),x()(r,j.a.CENTER.toUpperCase(),j.a.CENTER),r)),A.defaultProps={title:null,footer:null,size:A.Size.MEDIUM,className:"",closeOnClick:!0,scroll:A.Scroll.VIEWPORT,position:A.Position.CENTER},t.a=A},GJtw:function(e,t,n){var r=n("ct80"),o=n("fVMg"),i=n("T+0C"),a=o("species");e.exports=function(e){return i>=51||!r((function(){var t=[];return(t.constructor={})[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"IRf+":function(e,t,n){var r=n("hpdy");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},KqXw:function(e,t,n){"use strict";var r=n("ax0f"),o=n("QsUS");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},L2rT:function(e,t,n){"use strict";var r=n("ct80");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},LKIi:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return T})),n.d(t,"default",(function(){return P}));var r=n("cxan"),o=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("ZVZ0"),l=(n("1t7P"),n("jQ/y"),n("O94r")),s=n.n(l),u=n("/Vl7"),f=(n("j+zR"),n("97Jx")),p=n.n(f),d=n("ddV6"),m=n.n(d),v=n("b1ss"),y=n("GAp3"),h=n("VehP"),g=(n("mSMe"),function e(t){var n=t.className,r=t.content,o=t.presentation,c=t.size,l=t.title,f=Object(i.useState)(!1),d=m()(f,2),h=d[0],g=d[1],b=o===e.Presentation.MODAL,E=c===e.Size.SMALL,x={"aria-label":t["aria-label"],className:"btn-unstyled",children:a.a.createElement(u.o,{size:E?16:24})};return a.a.createElement("span",{className:s()(n,"np-info",{"np-info__small":E,"np-info__large":!E})},b?a.a.createElement(a.a.Fragment,null,a.a.createElement("button",p()({type:"button",onClick:function(){return g(!0)}},x)),a.a.createElement(y.a,{body:r,onClose:function(){return g(!1)},open:h,title:l})):a.a.createElement(v.a,{content:r,preferredPlacement:v.a.Placement.BOTTOM,title:l},a.a.createElement("button",p()({type:"button"},x))))});g.Presentation={POPOVER:"POPOVER",MODAL:"MODAL"},g.Size={SMALL:h.a.SMALL,LARGE:h.a.LARGE},g.defaultProps={"aria-label":void 0,className:void 0,content:void 0,presentation:g.Presentation.POPOVER,size:g.Size.SMALL,title:void 0};var b=g,E=n("0Q6q"),x=(n("rrw+"),{done:u.f,pending:u.r}),O=function(e){var t,n=e.action,r=e.as,o=e.className,c=e.content,l=e.description,u=void 0===l?c:l,f=e.help,p=e.icon,d=e.illustration,m=e.info,v=void 0===m?f:m,y=e.status,h=e.title,g=d;p&&(g=24===(null===p||void 0===p||null===(t=p.props)||void 0===t?void 0:t.size)?p:Object(i.cloneElement)(p,{size:24}));var E=y&&x[y];return a.a.createElement(r,{className:s()("np-summary d-flex align-items-start",o)},a.a.createElement("div",{className:"np-summary__icon"},g,y&&a.a.createElement(E,{size:16,filled:!0,className:"np-summary-icon__".concat(y)})),a.a.createElement("div",{className:"np-summary__body m-l-2"},a.a.createElement("div",{className:"np-summary__title d-flex"},a.a.createElement("strong",null,h),v&&a.a.createElement(b,{"aria-label":v["aria-label"],className:"m-l-1 hidden-xs",content:v.content,presentation:v.presentation,title:v.title})),u&&a.a.createElement("div",{className:"np-summary__description"},u),n&&a.a.createElement("a",{href:n.href,className:"np-summary__action","aria-label":n["aria-label"]},n.text)),v&&a.a.createElement(b,{"aria-label":v["aria-label"],className:"m-l-2 hidden-sm hidden-md hidden-lg hidden-xl",content:v.content,presentation:v.presentation,size:b.Size.LARGE,title:v.title}))};O.Status={DONE:E.a.DONE,PENDING:E.a.PENDING},O.defaultProps={action:null,as:"div",className:null,content:null,help:null,illustration:null,status:null};var S=O,w=n("Qi1R"),T=(a.a.createElement,{name:"Summary"}),N={meta:T};function P(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},N,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"For displaying a list of requirements, some instructions, or perhaps some general information. Always has an icon and title, can also have a content block and a help icon with some popover text."),Object(c.a)("div",null,Object(c.a)(w.b,{code:"<ul>\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    icon={<HomeIcon size={24} />}\n    title=\"Verify your address\"\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'You entered your address',\n      content: 'Your address has been verified, no more actions are required.',\n      'aria-label': 'Please click here to know more about your address update status',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"You verified your address\"\n    status={Summary.Status.DONE}\n  />\n  <Summary\n    action={{\n      text: 'Change address',\n      href: '#change-address',\n      'aria-label': ' Click here to change address',\n    }}\n    as=\"li\"\n    description=\"10 Downing Street, Westminster, London SW1A 2AA.\"\n    info={{\n      title: 'Address verification pending',\n      content:\n        'Your address change is currently being processed. Please allow 48 hours for verification.',\n      presentation: 'MODAL',\n      'aria-label': 'Please click here to know more about your address update status',\n    }}\n    icon={<HomeIcon size={24} />}\n    title=\"We\u2019re verifying your address\"\n    status={Summary.Status.PENDING}\n  />\n</ul>;\n",scope:{Summary:S,HomeIcon:u.p},mdxType:"LiveEditorBlock"}),Object(c.a)(w.a,{componentName:"Summary",mdxType:"GeneratePropsTable"})))}P.isMDXComponent=!0},LxGA:function(e,t,n){},"N+ot":function(e,t,n){var r=n("T0aG"),o=n("1Pcy");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},N9G2:function(e,t,n){var r=n("cww3");e.exports=function(e){return Object(r(e))}},QsUS:function(e,t,n){"use strict";var r=n("q/0V"),o=n("L2rT"),i=RegExp.prototype.exec,a=String.prototype.replace,c=i,l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=o.UNSUPPORTED_Y||o.BROKEN_CARET,u=void 0!==/()??/.exec("")[1];(l||u||s)&&(c=function(e){var t,n,o,c,f=this,p=s&&f.sticky,d=r.call(f),m=f.source,v=0,y=e;return p&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),y=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(m="(?: "+m+")",y=" "+y,v++),n=new RegExp("^(?:"+m+")",d)),u&&(n=new RegExp("^"+m+"$(?!\\s)",d)),l&&(t=f.lastIndex),o=i.call(p?n:f,y),p?o?(o.input=o.input.slice(v),o[0]=o[0].slice(v),o.index=f.lastIndex,f.lastIndex+=o[0].length):f.lastIndex=0:l&&o&&(f.lastIndex=f.global?o.index+o[0].length:t),u&&o&&o.length>1&&a.call(o[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o}),e.exports=c},Qzre:function(e,t,n){var r=n("FXyv"),o=n("hpdy"),i=n("fVMg")("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||void 0==(n=r(a)[i])?t:o(n)}},"T+0C":function(e,t,n){var r,o,i=n("9JhN"),a=n("ZORK"),c=i.process,l=c&&c.versions,s=l&&l.v8;s?o=(r=s.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),e.exports=o&&+o},T0aG:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},TbR9:function(e,t,n){var r=n("56Cj");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},TkGI:function(e,t,n){var r=n("fVMg");t.f=r},VrFO:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},Y9Ll:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},Ysgh:function(e,t,n){"use strict";var r=n("lbJE"),o=n("jl0/"),i=n("FXyv"),a=n("cww3"),c=n("Qzre"),l=n("4/YM"),s=n("tJVe"),u=n("34wW"),f=n("QsUS"),p=n("ct80"),d=[].push,m=Math.min,v=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,i);for(var c,l,s,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,v=new RegExp(e.source,p+"g");(c=f.call(v,r))&&!((l=v.lastIndex)>m&&(u.push(r.slice(m,c.index)),c.length>1&&c.index<r.length&&d.apply(u,c.slice(1)),s=c[0].length,m=l,u.length>=i));)v.lastIndex===c.index&&v.lastIndex++;return m===r.length?!s&&v.test("")||u.push(""):u.push(r.slice(m)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=a(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,o,n):r.call(String(o),t,n)},function(e,o){var a=n(r,e,this,o,r!==t);if(a.done)return a.value;var f=i(e),p=String(this),d=c(f,RegExp),y=f.unicode,h=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),g=new d(v?f:"^(?:"+f.source+")",h),b=void 0===o?4294967295:o>>>0;if(0===b)return[];if(0===p.length)return null===u(g,p)?[p]:[];for(var E=0,x=0,O=[];x<p.length;){g.lastIndex=v?x:0;var S,w=u(g,v?p:p.slice(x));if(null===w||(S=m(s(g.lastIndex+(v?0:x)),p.length))===E)x=l(p,x,y);else{if(O.push(p.slice(E,x)),O.length===b)return O;for(var T=1;T<=w.length-1;T++)if(O.push(w[T]),O.length===b)return O;x=E=S}}return O.push(p.slice(E)),O}]}),!v)},"Z0+U":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/content/Summary",function(){return n("LKIi")}])},ZORK:function(e,t,n){var r=n("VCi3");e.exports=r("navigator","userAgent")||""},"aoZ+":function(e,t,n){var r=n("dSaG"),o=n("xt6W"),i=n("fVMg")("species");e.exports=function(e,t){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},aokA:function(e,t,n){var r=n("PjZX"),o=n("8aeu"),i=n("TkGI"),a=n("q9+l").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});o(t,e)||a(t,e,{value:i.f(e)})}},b1ss:function(e,t,n){"use strict";var r,o=n("KEM+"),i=n.n(o),a=n("ddV6"),c=n.n(a),l=n("ERkP"),s=n.n(l),u=n("O94r"),f=n.n(u),p=n("eKd8"),d=n("69BZ"),m=(n("LxGA"),function(e){var t=e.children,n=e.className,r=e.content,o=e.preferredPlacement,i=e.title,a=Object(l.useRef)(null),u=Object(l.useState)(!1),p=c()(u,2),m=p[0],y=p[1];return s.a.createElement("span",{className:f()("np-popover",n)},s.a.createElement("span",{className:"d-inline-block",ref:a},Object(l.cloneElement)(t,{onClick:function(){var e;null!==t&&void 0!==t&&null!==(e=t.props)&&void 0!==e&&e.onClick&&t.props.onClick(),y(!m)}}),m&&s.a.createElement("span",{role:"status",className:"sr-only"},i,r)),s.a.createElement(d.a,{open:m,triggerRef:a,position:v[o]||o,onClose:function(e){return e&&y(!1)},arrow:!0},s.a.createElement("div",{className:"np-popover__content","aria-hidden":!m,role:"tooltip"},s.a.createElement("div",{className:"h5"},i),r)))});m.Placement={BOTTOM:p.a.BOTTOM,BOTTOM_LEFT:p.a.BOTTOM_LEFT,BOTTOM_RIGHT:p.a.BOTTOM_RIGHT,LEFT:p.a.LEFT,LEFT_TOP:p.a.LEFT_TOP,RIGHT:p.a.RIGHT,RIGHT_TOP:p.a.RIGHT_TOP,TOP:p.a.TOP},m.defaultProps={className:void 0,preferredPlacement:m.Placement.RIGHT,title:void 0};var v=(r={},i()(r,p.a.BOTTOM_LEFT,m.Placement.BOTTOM),i()(r,p.a.BOTTOM_RIGHT,m.Placement.BOTTOM),i()(r,p.a.LEFT_TOP,m.Placement.TOP),i()(r,p.a.RIGHT_TOP,m.Placement.TOP),r);t.a=m},bRoR:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(){document.body.classList.add("no-scroll")},o=function(){document.body.classList.remove("no-scroll")}},f4p7:function(e,t,n){"use strict";var r=n("ct80");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},fVMg:function(e,t,n){var r=n("9JhN"),o=n("TN3B"),i=n("8aeu"),a=n("HYrn"),c=n("56Cj"),l=n("TbR9"),s=o("wks"),u=r.Symbol,f=l?u:u&&u.withoutSetter||a;e.exports=function(e){return i(s,e)||(c&&i(u,e)?s[e]=u[e]:s[e]=f("Symbol."+e)),s[e]}},guiJ:function(e,t,n){var r,o=n("FXyv"),i=n("uZvN"),a=n("sX5C"),c=n("1odi"),l=n("kySU"),s=n("8r/q"),u=n("MyxS"),f=u("IE_PROTO"),p=function(){},d=function(e){return"<script>"+e+"<\/script>"},m=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}m=r?function(e){e.write(d("")),e.close();var t=e.parentWindow.Object;return e=null,t}(r):function(){var e,t=s("iframe");return t.style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F}();for(var e=a.length;e--;)delete m.prototype[a[e]];return m()};c[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(p.prototype=o(e),n=new p,p.prototype=null,n[f]=e):n=m(),void 0===t?n:i(n,t)}},hpdy:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"j+zR":function(e,t){e.exports=function(e,t){return function(n,r,o){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var i=t(n)?e.isRequired:e;return i.apply(this,arguments)}}},"jQ/y":function(e,t,n){"use strict";var r=n("ax0f"),o=n("1Mu/"),i=n("9JhN"),a=n("8aeu"),c=n("dSaG"),l=n("q9+l").f,s=n("tjTa"),u=i.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new u(e):void 0===e?u():u(e);return""===e&&(f[t]=!0),t};s(p,u);var d=p.prototype=u.prototype;d.constructor=p;var m=d.toString,v="Symbol(test)"==String(u("test")),y=/^Symbol\((.*)\)[^)]+$/;l(d,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=m.call(e);if(a(f,e))return"";var n=v?t.slice(7,-1):t.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},"jl0/":function(e,t,n){var r=n("dSaG"),o=n("amH4"),i=n("fVMg")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},kySU:function(e,t,n){var r=n("VCi3");e.exports=r("document","documentElement")},lbJE:function(e,t,n){"use strict";n("KqXw");var r=n("uLp7"),o=n("ct80"),i=n("fVMg"),a=n("QsUS"),c=n("WxKw"),l=i("species"),s=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),f=i("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),d=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var m=i(e),v=!o((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),y=v&&!o((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[l]=function(){return n},n.flags="",n[m]=/./[m]),n.exec=function(){return t=!0,null},n[m](""),!t}));if(!v||!y||"replace"===e&&(!s||!u||p)||"split"===e&&!d){var h=/./[m],g=n(m,""[e],(function(e,t,n,r,o){return t.exec===a?v&&!o?{done:!0,value:h.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=g[0],E=g[1];r(String.prototype,e,b),r(RegExp.prototype,m,2==t?function(e,t){return E.call(e,this,t)}:function(e){return E.call(e,this)})}f&&c(RegExp.prototype[m],"sham",!0)}},"q/0V":function(e,t,n){"use strict";var r=n("FXyv");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"t/tF":function(e,t,n){var r=n("i7Kn"),o=n("cww3"),i=function(e){return function(t,n){var i,a,c=String(o(t)),l=r(n),s=c.length;return l<0||l>=s?e?"":void 0:(i=c.charCodeAt(l))<55296||i>56319||l+1===s||(a=c.charCodeAt(l+1))<56320||a>57343?e?c.charAt(l):i:e?c.slice(l,l+2):a-56320+(i-55296<<10)+65536}};e.exports={codeAt:i(!1),charAt:i(!0)}},uZvN:function(e,t,n){var r=n("1Mu/"),o=n("q9+l"),i=n("FXyv"),a=n("DEeE");e.exports=r?Object.defineProperties:function(e,t){i(e);for(var n,r=a(t),c=r.length,l=0;c>l;)o.f(e,n=r[l++],t[n]);return e}},xt6W:function(e,t,n){var r=n("amH4");e.exports=Array.isArray||function(e){return"Array"==r(e)}}},[["Z0+U",0,1,2,6,3,5,8,10,11,4]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[66],{"+/eK":function(t,n){t.exports="\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"1IsZ":function(t,n,e){var r=e("ax0f"),o=e("YAkj").values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},"56Cj":function(t,n,e){var r=e("T+0C"),o=e("ct80");t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"5BfY":function(t,n,e){"use strict";var r,o;e.d(n,"a",(function(){return r})),(o=r||(r={}))[o.EXTRA_SMALL=480]="EXTRA_SMALL",o[o.SMALL=576]="SMALL",o[o.MEDIUM=768]="MEDIUM",o[o.LARGE=992]="LARGE",o[o.EXTRA_LARGE=1200]="EXTRA_LARGE"},"7St7":function(t,n,e){var r=e("fVMg"),o=e("guiJ"),i=e("q9+l"),a=r("unscopables"),c=Array.prototype;void 0==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},"91IA":function(t,n,e){},DEeE:function(t,n,e){var r=e("yRya"),o=e("sX5C");t.exports=Object.keys||function(t){return r(t,o)}},FtHn:function(t,n,e){var r=e("ax0f"),o=e("1Mu/"),i=e("oD4t"),a=e("N4z3"),c=e("GFpt"),u=e("2sZ7");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var n,e,r=a(t),o=c.f,s=i(r),l={},p=0;s.length>p;)void 0!==(e=o(r,n=s[p++]))&&u(l,n,e);return l}})},HRvm:function(t,n,e){"use strict";e.r(n),e.d(n,"meta",(function(){return d})),e.d(n,"default",(function(){return E}));var r=e("cxan"),o=e("HbGN"),i=e("ERkP"),a=e.n(i),c=e("ZVZ0"),u=e("Qi1R"),s=e("b1ss"),l=e("SP0Y"),p=e("eKd8"),f=["components"],d=(a.a.createElement,{name:"Popover"}),v={meta:d};function E(t){var n=t.components,e=Object(o.a)(t,f);return Object(c.a)("wrapper",Object(r.a)({},v,e,{components:n,mdxType:"MDXLayout"}),Object(c.a)(u.b,{code:'<Popover\n  content="You\u2019ll get this rate as long as we receive your 10 EUR within the next 51 hours."\n  preferredPlacement={Position.BOTTOM}\n  title="Guaranteed rate"\n>\n  <Button onClick={() => console.log(`I\'m also triggered`)}>Click here to Open Popover!</Button>\n</Popover>;\n',scope:{Popover:s.a,Button:l.a,Position:p.a},mdxType:"LiveEditorBlock"}),Object(c.a)(u.a,{componentName:"Popover",mdxType:"GeneratePropsTable"}))}E.isMDXComponent=!0},KqXw:function(t,n,e){"use strict";var r=e("ax0f"),o=e("QsUS");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},L2rT:function(t,n,e){"use strict";var r=e("ct80");function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},O94r:function(t,n,e){var r;!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===i)for(var c in r)e.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(t.exports=r)}()},PjJO:function(t,n,e){var r=e("fVMg")("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,"/./"[t](n)}catch(o){}}return!1}},QsUS:function(t,n,e){"use strict";var r=e("q/0V"),o=e("L2rT"),i=e("TN3B"),a=RegExp.prototype.exec,c=i("native-string-replace",String.prototype.replace),u=a,s=function(){var t=/a/,n=/b*/g;return a.call(t,"a"),a.call(n,"a"),0!==t.lastIndex||0!==n.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(s||p||l)&&(u=function(t){var n,e,o,i,u=this,f=l&&u.sticky,d=r.call(u),v=u.source,E=0,b=t;return f&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),b=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(v="(?: "+v+")",b=" "+b,E++),e=new RegExp("^(?:"+v+")",d)),p&&(e=new RegExp("^"+v+"$(?!\\s)",d)),s&&(n=u.lastIndex),o=a.call(f?e:u,b),f?o?(o.input=o.input.slice(E),o[0]=o[0].slice(E),o.index=u.lastIndex,u.lastIndex+=o[0].length):u.lastIndex=0:s&&o&&(u.lastIndex=u.global?o.index+o[0].length:n),p&&o&&o.length>1&&c.call(o[0],e,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o}),t.exports=u},SP0Y:function(t,n,e){"use strict";var r,o,i=e("97Jx"),a=e.n(i),c=e("m3Bd"),u=e.n(c),s=e("ERkP"),l=e.n(s),p=e("O94r"),f=e.n(p),d=(e("j+zR"),e("91IA"),e("VMOe")),v=e("VehP"),E=e("KEM+"),b=e.n(E);e("+KXO"),e("2G9S"),e("jQ3i"),e("x4t0");(o=r||(r={})).PRIMARY="primary",o.PAY="pay",o.SECONDARY="secondary",o.DANGER="danger",o.LINK="link";var y,g,R,T=e("s+Iv"),m=(y={},b()(y,r.PRIMARY,d.a.ACCENT),b()(y,r.SECONDARY,d.a.ACCENT),b()(y,r.LINK,d.a.ACCENT),b()(y,r.PAY,d.a.POSITIVE),b()(y,r.DANGER,d.a.NEGATIVE),y),h=(g={},b()(g,r.DANGER,d.b.SECONDARY),b()(g,r.LINK,d.b.TERTIARY),b()(g,r.SECONDARY,d.b.SECONDARY),g),x=(R={},b()(R,r.DANGER,"Type.NEGATIVE"),b()(R,r.LINK,"ControlType.ACCENT with priority Priority.TERTIARY"),b()(R,r.PAY,"ControlType.POSITIVE"),b()(R,r.PRIMARY,"ControlType.ACCENT"),b()(R,r.SECONDARY,"ControlType.ACCENT with priority Priority.SECONDARY"),R),A=Object.keys(m),O=function(t){return m[t]||t},N=e("b2Zl"),P=["block","children","className","disabled","htmlType","loading","priority","size","type"],S=function(t){var n=t.block,e=t.children,r=t.className,o=t.disabled,i=t.htmlType,c=t.loading,s=t.priority,p=t.size,E=t.type,b=u()(t,P);!function(t){var n=t.size,e=t.type;Object(T.b)("Button has deprecated the `Size.EXTRA_SMALL` value for the `size` prop. Please use Size.SMALL instead.",n===v.a.EXTRA_SMALL),Object(T.b)("Button has deprecated the ".concat(e," value for the `type` prop. Please update to ").concat(x[e],"."),A.includes(e))}(t);var y=O(E),g=function(t,n){var e=O(n);return h[n]?h[n]:t===d.b.TERTIARY&&e!==d.a.ACCENT?d.b.SECONDARY:t}(s,E),R=f()("btn btn-".concat(p),"np-btn np-btn-".concat(p),{"btn-loading":c,"btn-block np-btn-block":n},N.b[y],N.a[g],r);return l.a.createElement("button",a()({type:i,className:R,disabled:o||c},b),e,c&&l.a.createElement("span",{className:f()("btn-loader",{"m-l-2":!n})}))};S.defaultProps={block:!1,className:null,disabled:!1,htmlType:"button",loading:!1,priority:d.b.PRIMARY,size:v.a.MEDIUM,type:d.a.ACCENT};n.a=S},"T+0C":function(t,n,e){var r,o,i=e("9JhN"),a=e("ZORK"),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]<4?1:r[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},TbR9:function(t,n,e){var r=e("56Cj");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},VMOe:function(t,n,e){"use strict";var r,o,i;e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i})),(o=r||(r={})).ACCENT="accent",o.POSITIVE="positive",o.NEGATIVE="negative",function(t){t.PRIMARY="primary",t.SECONDARY="secondary",t.TERTIARY="tertiary"}(i||(i={}))},YAkj:function(t,n,e){var r=e("1Mu/"),o=e("DEeE"),i=e("N4z3"),a=e("4Sk5").f,c=function(t){return function(n){for(var e,c=i(n),u=o(c),s=u.length,l=0,p=[];s>l;)e=u[l++],r&&!a.call(c,e)||p.push(t?[e,c[e]]:c[e]);return p}};t.exports={entries:c(!0),values:c(!1)}},Ya2h:function(t,n,e){var r=e("cww3"),o="["+e("+/eK")+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),c=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(a,"")),e}};t.exports={start:c(1),end:c(2),trim:c(3)}},ZORK:function(t,n,e){var r=e("VCi3");t.exports=r("navigator","userAgent")||""},b2Zl:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"a",(function(){return s}));var r,o,i=e("KEM+"),a=e.n(i),c=e("VMOe"),u=(r={},a()(r,c.a.ACCENT,"btn-accent"),a()(r,c.a.POSITIVE,"btn-positive"),a()(r,c.a.NEGATIVE,"btn-negative"),r),s=(o={},a()(o,c.b.PRIMARY,"btn-priority-1"),a()(o,c.b.SECONDARY,"btn-priority-2"),a()(o,c.b.TERTIARY,"btn-priority-3"),o)},daRM:function(t,n,e){var r=e("ax0f"),o=e("ct80"),i=e("N4z3"),a=e("GFpt").f,c=e("1Mu/"),u=o((function(){a(1)}));r({target:"Object",stat:!0,forced:!c||u,sham:!c},{getOwnPropertyDescriptor:function(t,n){return a(i(t),n)}})},eKd8:function(t,n,e){"use strict";var r,o;e.d(n,"a",(function(){return r})),(o=r||(r={})).BOTTOM="bottom",o.BOTTOM_LEFT="bottom-left",o.BOTTOM_RIGHT="bottom-right",o.CENTER="center",o.LEFT="left",o.LEFT_TOP="left-top",o.RIGHT="right",o.RIGHT_TOP="right-top",o.TOP="top"},fVMg:function(t,n,e){var r=e("9JhN"),o=e("TN3B"),i=e("8aeu"),a=e("HYrn"),c=e("56Cj"),u=e("TbR9"),s=o("wks"),l=r.Symbol,p=u?l:l&&l.withoutSetter||a;t.exports=function(t){return i(s,t)&&(c||"string"==typeof s[t])||(c&&i(l,t)?s[t]=l[t]:s[t]=p("Symbol."+t)),s[t]}},guiJ:function(t,n,e){var r,o=e("FXyv"),i=e("uZvN"),a=e("sX5C"),c=e("1odi"),u=e("kySU"),s=e("8r/q"),l=e("MyxS"),p=l("IE_PROTO"),f=function(){},d=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(n){}v=r?function(t){t.write(d("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):function(){var t,n=s("iframe");return n.style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F}();for(var t=a.length;t--;)delete v.prototype[a[t]];return v()};c[p]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(f.prototype=o(t),e=new f,f.prototype=null,e[p]=t):e=v(),void 0===n?e:i(e,n)}},"j+zR":function(t,n){t.exports=function(t,n){return function(e,r,o){if("function"!==typeof t)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof n)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var i=n(e)?t.isRequired:t;return i.apply(this,arguments)}}},jQ3i:function(t,n,e){"use strict";var r=e("ax0f"),o=e("H17f").includes,i=e("7St7");r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},kySU:function(t,n,e){var r=e("VCi3");t.exports=r("document","documentElement")},nuol:function(t,n,e){var r=e("jl0/");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"q/0V":function(t,n,e){"use strict";var r=e("FXyv");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},qh8L:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts/Popover",function(){return e("HRvm")}])},"s+Iv":function(t,n,e){"use strict";(function(t){function r(n){var e,r;0<=["development","test"].indexOf(null===(e=t)||void 0===e||null===(r=e.env)||void 0===r?void 0:"production")&&console.warn(n)}function o(t,n){n&&r(t)}e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}))}).call(this,e("F63i"))},sob3:function(t,n,e){"use strict";var r=e("97Jx"),o=e.n(r),i=e("m3Bd"),a=e.n(i),c=e("ERkP"),u=e.n(c),s=e("O94r"),l=e.n(s),p=e("05Xt"),f=(e("yiBs"),["children","className","open","position","showSlidingPanelBorder","slidingPanelPositionFixed"]),d=Object(c.forwardRef)((function(t,n){var e=t.children,r=t.className,i=t.open,c=t.position,s=t.showSlidingPanelBorder,d=t.slidingPanelPositionFixed,v=a()(t,f);return u.a.createElement(p.a,o()({},v,{in:i,timeout:{enter:0,exit:350},classNames:l()("sliding-panel--open-".concat(c),s&&"sliding-panel--border-".concat(c),{"sliding-panel--fixed":d},"sliding-panel"),appear:!0,unmountOnExit:!0}),u.a.createElement("div",{className:l()("sliding-panel",r),ref:n},e))}));d.defaultProps={children:null,className:void 0,open:!1,position:"left",showSlidingPanelBorder:!1,slidingPanelPositionFixed:!1},n.a=d},uZvN:function(t,n,e){var r=e("1Mu/"),o=e("q9+l"),i=e("FXyv"),a=e("DEeE");t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=a(n),c=r.length,u=0;c>u;)o.f(t,e=r[u++],n[e]);return t}},x4t0:function(t,n,e){"use strict";var r=e("ax0f"),o=e("nuol"),i=e("cww3");r({target:"String",proto:!0,forced:!e("PjJO")("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},yiBs:function(t,n,e){}},[["qh8L",0,1,2,3,4,9,10,11,19,5]]]);
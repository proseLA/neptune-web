_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[91],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return r}))},"97Jx":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("+wNj");function c(e,t){if(null==e)return{};var n,c,a=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var o=c.apply(null,r);o&&e.push(o)}else if("object"===a)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},URBt:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return E})),n.d(t,"default",(function(){return T}));var r=n("cxan"),c=n("HbGN"),a=n("ERkP"),o=n.n(a),l=n("ZVZ0"),i=n("Qi1R"),u=n("/Vl7"),p=n("97Jx"),b=n.n(p),s=n("m3Bd"),y=n.n(s),O=n("O94r"),f=n.n(O),d=n("VMOe"),j=n("b2Zl"),m=(n("bKuS"),function(e){var t=e.className,n=e.children,r=e.disabled,c=e.icon,l=e.priority,i=e.type,u=y()(e,["className","children","disabled","icon","priority","type"]),p=f()("btn np-btn",j.b[i],j.a[l]),s=24===c.props.size?c:Object(a.cloneElement)(c,{size:24});return o.a.createElement("label",{className:f()("np-circular-btn",l,i,r?"disabled":"",t)},o.a.createElement("input",b()({type:"button","aria-label":n,className:p,disabled:r},u)),s,o.a.createElement("span",{className:"np-circular-btn__label"},n))});m.defaultProps={className:void 0,disabled:!1,priority:d.b.PRIMARY,type:d.a.ACCENT};var v=m,E=(o.a.createElement,{name:"CircularButton",badge:{type:"new",expiryDate:"2021-04-14"}}),g={meta:E};function T(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.a)("wrapper",Object(r.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(i.b,{code:"<CircularButton\n  icon={<Freeze />}\n  type={ControlType.ACCENT}\n  onClick={() => console.log('Button clicked')}\n>\n  Freeze\n</CircularButton>;\n",scope:{CircularButton:v,ControlType:d.a,Freeze:u.r},mdxType:"LiveEditorBlock"}),Object(l.a)(i.a,{componentName:"CircularButton",mdxType:"GeneratePropsTable"}),Object(l.a)("h2",{id:"variants"},"Variants"),Object(l.a)("div",{className:"scroll-table"},Object(l.a)("table",{className:"docs-table table"},Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"Type"),Object(l.a)("th",null,"Priority"),Object(l.a)("th",null,"Preview"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"Accent"),Object(l.a)("td",null,"Primary"),Object(l.a)("td",null,Object(l.a)(v,{icon:Object(l.a)(u.r,{mdxType:"Freeze"}),type:d.a.ACCENT,onClick:function(){return console.log("Button clicked")},mdxType:"CircularButton"},"Freeze"))),Object(l.a)("tr",null,Object(l.a)("td",null,"Accent"),Object(l.a)("td",null,"Secondary"),Object(l.a)("td",null,Object(l.a)(v,{icon:Object(l.a)(u.r,{mdxType:"Freeze"}),type:d.a.ACCENT,priority:d.b.SECONDARY,onClick:function(){return console.log("Button clicked")},mdxType:"CircularButton"},"Freeze"))),Object(l.a)("tr",null,Object(l.a)("td",null,"Positive"),Object(l.a)("td",null,"Primary"),Object(l.a)("td",null,Object(l.a)(v,{icon:Object(l.a)(u.y,{mdxType:"Plus"}),type:d.a.POSITIVE,onClick:function(){return console.log("Button clicked")},mdxType:"CircularButton"},"Add money"))),Object(l.a)("tr",null,Object(l.a)("td",null,"Positive"),Object(l.a)("td",null,"Secondary"),Object(l.a)("td",null,Object(l.a)(v,{icon:Object(l.a)(u.y,{mdxType:"Plus"}),type:d.a.POSITIVE,priority:d.b.SECONDARY,onClick:function(){return console.log("Button clicked")},mdxType:"CircularButton"},"Add money"))),Object(l.a)("tr",null,Object(l.a)("td",null,"Negative"),Object(l.a)("td",null,"Primary"),Object(l.a)("td",null,Object(l.a)(v,{icon:Object(l.a)(u.f,{mdxType:"Bin"}),type:d.a.NEGATIVE,onClick:function(){return console.log("Button clicked")},mdxType:"CircularButton"},"Delete"))),Object(l.a)("tr",null,Object(l.a)("td",null,"Negative"),Object(l.a)("td",null,"Secondary"),Object(l.a)("td",null,Object(l.a)(v,{icon:Object(l.a)(u.f,{mdxType:"Bin"}),type:d.a.NEGATIVE,priority:d.b.SECONDARY,onClick:function(){return console.log("Button clicked")},mdxType:"CircularButton"},"Delete")))))))}T.isMDXComponent=!0},VMOe:function(e,t,n){"use strict";var r,c,a;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),(c=r||(r={})).ACCENT="accent",c.POSITIVE="positive",c.NEGATIVE="negative",function(e){e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary"}(a||(a={}))},XL7h:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/CircularButton",function(){return n("URBt")}])},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("ERkP"),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),p=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),y=r,O=s["".concat(o,".").concat(y)]||s[y]||b[y]||a;return n?c.a.createElement(O,l(l({ref:t},u),{},{components:n})):c.a.createElement(O,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"===typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},b2Zl:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r,c,a=n("KEM+"),o=n.n(a),l=n("VMOe"),i=(r={},o()(r,l.a.ACCENT,"btn-accent"),o()(r,l.a.POSITIVE,"btn-positive"),o()(r,l.a.NEGATIVE,"btn-negative"),r),u=(c={},o()(c,l.b.PRIMARY,"btn-priority-1"),o()(c,l.b.SECONDARY,"btn-priority-2"),o()(c,l.b.TERTIARY,"btn-priority-3"),c)},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},m3Bd:function(e,t,n){var r=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,c,a=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)n=o[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}}},[["XL7h",0,1,2,6,3,4]]]);
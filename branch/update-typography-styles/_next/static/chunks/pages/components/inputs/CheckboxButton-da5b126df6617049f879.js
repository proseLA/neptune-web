_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[90],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))},"7bnI":function(e,n,t){},"97Jx":function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},t.apply(this,arguments)}e.exports=t},"9p0K":function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return p})),t.d(n,"default",(function(){return f}));var r=t("cxan"),o=t("HbGN"),a=t("ERkP"),c=t.n(a),i=t("ZVZ0"),u=t("Qi1R"),l=t("bby/"),p=(c.a.createElement,{name:"CheckboxButton"}),s={meta:p};function f(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("p",null,"If you are pairing a checkbox with a label (recommended), use the Checkbox component instead."),Object(i.a)("p",null,"Only use CheckboxButton on the rare occassion that you want a checkbox with no label (e.g. on a settings page with a matrix of options). Ensure you provide an ",Object(i.a)("inlineCode",{parentName:"p"},"aria-label")," to replace the absent label."),Object(i.a)(u.b,{code:'() => {\n  const [checked, setChecked] = React.useState(true);\n  return (\n    <CheckboxButton\n      aria-label="Toggle email updates"\n      onChange={() => setChecked(!checked)}\n      checked={checked}\n      disabled={false}\n    />\n  );\n};\n',scope:{CheckboxButton:l.a},mdxType:"LiveEditorBlock"}),Object(i.a)(u.a,{componentName:"CheckboxButton",mdxType:"GeneratePropsTable"}))}f.isMDXComponent=!0},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("+wNj");function o(e,n){if(null==e)return{};var t,o,a=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},Kzkw:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/CheckboxButton",function(){return t("9p0K")}])},LdEA:function(e,n){e.exports=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}},O94r:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)t.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t("ERkP"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(t),b=r,y=f["".concat(c,".").concat(b)]||f[b]||s[b]||a;return t?o.a.createElement(y,i(i({ref:n},l),{},{components:t})):o.a.createElement(y,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"===typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},"bby/":function(e,n,t){"use strict";var r=t("97Jx"),o=t.n(r),a=t("m3Bd"),c=t.n(a),i=t("ERkP"),u=t.n(i),l=t("O94r"),p=t.n(l),s=(t("7bnI"),function(e){var n=e.checked,t=e.className,r=e.disabled,a=e.onChange,i=c()(e,["checked","className","disabled","onChange"]);return u.a.createElement("span",{className:p()("np-checkbox-button",t)},u.a.createElement("input",o()({},i,{type:"checkbox",disabled:r,checked:n,onChange:a})),u.a.createElement("span",{className:"tw-checkbox-button"},u.a.createElement("span",{className:"tw-checkbox-check"})))});s.defaultProps={"aria-label":void 0,checked:!1,className:void 0,disabled:!1},n.a=s},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},m3Bd:function(e,n,t){var r=t("LdEA");e.exports=function(e,n){if(null==e)return{};var t,o,a=r(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}}},[["Kzkw",0,1,2,3,4]]]);
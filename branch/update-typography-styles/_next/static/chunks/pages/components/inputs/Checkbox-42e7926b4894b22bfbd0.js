_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[91],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},"7bnI":function(e,n,t){},"97Jx":function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("+wNj");function a(e,n){if(null==e)return{};var t,a,o=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},LdEA:function(e,n){e.exports=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a},e.exports.default=e.exports,e.exports.__esModule=!0},Nks8:function(e,n,t){"use strict";var r=t("ERkP"),a=t.n(r),o=t("O94r"),c=t.n(o),u=t("bby/"),l=t("uIuh"),i=function(e){var n=e.id,t=e.checked,r=e.required,o=e.disabled,i=e.readOnly,s=e.label,p=e.secondary,f=e.onChange,d=e.onFocus,b=e.onBlur,m=Object(l.a)().isRTL,y=r&&!o&&!i&&!t,O=c()("np-checkbox",{checkbox:!0,"checkbox-lg":p,"has-error":y,disabled:o});return a.a.createElement("div",{id:n,className:O},a.a.createElement("label",null,a.a.createElement(u.a,{className:c()({"has-error":y,"p-r-2":!m,"p-l-2":m}),checked:t,onFocus:d,onChange:function(){return f(!t)},onBlur:b,disabled:o||i}),a.a.createElement("span",{className:"np-checkbox__text"},s,r&&"*",p&&a.a.createElement("small",null,p))))};i.defaultProps={id:null,checked:!1,required:!1,disabled:!1,readOnly:!1,secondary:null,onFocus:null,onBlur:null};var s=i;n.a=s},VaOz:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Checkbox",function(){return t("hr9p")}])},"X+oG":function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var r=t("ERkP"),a=t.n(r),o=t("AXuR"),c=a.a.createContext("ltr"),u=function(e){var n=e.locale,t=e.children;return a.a.createElement(c.Provider,{value:-1<o.b.indexOf(n)?"rtl":"ltr"},t)};u.defaultProps={children:null,locale:o.a}},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("ERkP"),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),s=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"===typeof e?e(n):u(u({},n),e)),t},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=r,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return t?a.a.createElement(b,u(u({ref:n},i),{},{components:t})):a.a.createElement(b,u({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var o=t.length,c=new Array(o);c[0]=f;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"===typeof e?e:r,c[1]=u;for(var i=2;i<o;i++)c[i]=t[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},"bby/":function(e,n,t){"use strict";var r=t("97Jx"),a=t.n(r),o=t("m3Bd"),c=t.n(o),u=t("ERkP"),l=t.n(u),i=t("O94r"),s=t.n(i),p=(t("7bnI"),["checked","className","disabled","onChange"]),f=function(e){var n=e.checked,t=e.className,r=e.disabled,o=e.onChange,u=c()(e,p);return l.a.createElement("span",{className:s()("np-checkbox-button",t)},l.a.createElement("input",a()({},u,{type:"checkbox",disabled:r,checked:n,onChange:o})),l.a.createElement("span",{className:"tw-checkbox-button"},l.a.createElement("span",{className:"tw-checkbox-check"})))};f.defaultProps={"aria-label":void 0,checked:!1,className:void 0,disabled:!1},n.a=f},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},hr9p:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return p})),t.d(n,"default",(function(){return d}));var r=t("cxan"),a=t("HbGN"),o=t("ERkP"),c=t.n(o),u=t("ZVZ0"),l=t("Qi1R"),i=t("Nks8"),s=["components"],p=(c.a.createElement,{name:"Checkbox"}),f={meta:p};function d(e){var n=e.components,t=Object(a.a)(e,s);return Object(u.a)("wrapper",Object(r.a)({},f,t,{components:n,mdxType:"MDXLayout"}),Object(u.a)(l.b,{code:'() => {\n  const [checked, setChecked] = React.useState(true);\n  return (\n    <Checkbox\n      label="I agree to the terms and conditions"\n      onChange={(newState) => setChecked(newState)}\n      checked={checked}\n      required\n      disabled={false}\n    />\n  );\n};\n',scope:{Checkbox:i.a},mdxType:"LiveEditorBlock"}),Object(u.a)(l.a,{componentName:"Checkbox",mdxType:"GeneratePropsTable"}))}d.isMDXComponent=!0},m3Bd:function(e,n,t){var r=t("LdEA");e.exports=function(e,n){if(null==e)return{};var t,a,o=r(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o},e.exports.default=e.exports,e.exports.__esModule=!0},uIuh:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("ERkP"),a=t("X+oG"),o=function(){var e=Object(r.useContext)(a.a);return{direction:e,isRTL:"rtl"===e}}}},[["VaOz",0,1,2,3,5,7,4]]]);
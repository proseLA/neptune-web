_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[80],{"7bnI":function(e,n,t){},"97Jx":function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},t.apply(this,arguments)}e.exports=t},"9p0K":function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t("cxan"),o=t("HbGN"),c=t("ERkP"),r=t.n(c),s=t("ZVZ0"),i=t("Qi1R"),u=t("bby/"),l=(r.a.createElement,{name:"CheckboxButton"}),p={meta:l};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.a)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.a)("p",null,"If you are pairing a checkbox with a label (recommended), use the Checkbox component instead."),Object(s.a)("p",null,"Only use CheckboxButton on the rare occassion that you want a checkbox with no label (e.g. on a settings page with a matrix of options). Ensure you provide an ",Object(s.a)("inlineCode",{parentName:"p"},"aria-label")," to replace the absent label."),Object(s.a)(i.b,{code:'() => {\n  const [checked, setChecked] = React.useState(true);\n  return (\n    <CheckboxButton\n      aria-label="Toggle email updates"\n      onChange={() => setChecked(!checked)}\n      checked={checked}\n      disabled={false}\n    />\n  );\n};\n',scope:{CheckboxButton:u.a},mdxType:"LiveEditorBlock"}),Object(s.a)(i.a,{componentName:"CheckboxButton",mdxType:"GeneratePropsTable"}))}b.isMDXComponent=!0},Kzkw:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/CheckboxButton",function(){return t("9p0K")}])},LdEA:function(e,n){e.exports=function(e,n){if(null==e)return{};var t,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}},O94r:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var r=o.apply(null,a);r&&e.push(r)}else if("object"===c)for(var s in a)t.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(n,[]))||(e.exports=a)}()},"bby/":function(e,n,t){"use strict";var a=t("97Jx"),o=t.n(a),c=t("m3Bd"),r=t.n(c),s=t("ERkP"),i=t.n(s),u=t("O94r"),l=t.n(u),p=(t("7bnI"),function(e){var n=e.checked,t=e.className,a=e.disabled,c=e.onChange,s=r()(e,["checked","className","disabled","onChange"]);return i.a.createElement("span",{className:l()("np-checkbox-button",t)},i.a.createElement("input",o()({},s,{type:"checkbox",disabled:a,checked:n,onChange:c})),i.a.createElement("span",{className:"tw-checkbox-button"},i.a.createElement("span",{className:"tw-checkbox-check"})))});p.defaultProps={"aria-label":void 0,checked:!1,className:void 0,disabled:!1},n.a=p},m3Bd:function(e,n,t){var a=t("LdEA");e.exports=function(e,n){if(null==e)return{};var t,o,c=a(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}}},[["Kzkw",0,1,2,3,4]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[85],{"+KRd":function(e,t,n){"use strict";var r,a;n.d(t,"a",(function(){return r})),(a=r||(r={})).NEGATIVE="negative",a.NEUTRAL="neutral",a.POSITIVE="positive",a.WARNING="warning",a.INFO="info",a.ERROR="error",a.SUCCESS="success"},"1IsZ":function(e,t,n){var r=n("ax0f"),a=n("YAkj").values;r({target:"Object",stat:!0},{values:function(e){return a(e)}})},KVzC:function(e,t,n){"use strict";n.d(t,"h",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return p}));n("KOtZ"),n("z84I");var r=n("v1+v");n("iKE+"),n("KqXw"),n("DZ+c");function a(e,t){return!t||!Object(r.j)(e)}function o(e,t){return!Object(r.g)(t)&&!Object(r.i)(t)||(Object(r.g)(e)||Object(r.i)(e))&&e<=t}function u(e,t){return!Object(r.g)(t)&&!Object(r.i)(t)||(Object(r.g)(e)||Object(r.i)(e))&&e>=t}function c(e,t,n){if(t.enum)return m(e,t,n);if(t.const)return d(e,t,n);if(Object(r.f)(e))return n?["required"]:[];switch(t.type){case"string":return i(e,t,n);case"number":return s(e,t,n);case"integer":return l(e,t,n);case"boolean":return f(e,t,n);case"array":return p(e,t);case"object":return function(e,t){return Object(r.h)(e)||Object(r.f)(e)?Object(r.a)(t.required)?t.required.map((function(t){return"undefined"!=typeof e[t]})).reduce((function(e,t){return e&&t}),!0)?[]:["required"]:[]:["type"]}(e,t);default:return[]}}function i(e,t,n){if(!Object(r.i)(e)&&!Object(r.f)(e))return["type"];if(""===e&&n)return["required"];var c=[];return a(e,n)||c.push("required"),function(e,t){return!Object(r.g)(t)||Object(r.i)(e)&&e.length>=t}(e,t.minLength)||c.push("minLength"),function(e,t){return!Object(r.g)(t)||Object(r.i)(e)&&e.length<=t}(e,t.maxLength)||c.push("maxLength"),function(e,t){try{var n=new RegExp(t);return"undefined"!=typeof e&&!!n.test(e)}catch(e){return!0}}(e,t.pattern)||c.push("pattern"),u(e,t.minimum)||c.push("minimum"),o(e,t.maximum)||c.push("maximum"),c}function s(e,t,n){if(!Object(r.g)(e)&&!Object(r.f)(e))return["type"];if(""===e&&n)return["required"];var c=[];return a(e,n)||c.push("required"),u(e,t.minimum)||c.push("minimum"),o(e,t.maximum)||c.push("maximum"),c}function l(e,t,n){return Object(r.d)(e)?s(e,t,n):["type"]}function f(e,t,n){if(!Object(r.b)(e)&&!Object(r.f)(e))return["type"];var o=[];return a(e,n)||o.push("required"),o}function m(e,t,n){return a(e,n)?Object(r.f)(e)||-1===t.enum.indexOf(e)?["enum"]:[]:["required"]}function d(e,t,n){return a(e,n)?e===t.const?[]:["enum"]:["required"]}function p(e,t){if(!Object(r.a)(e)&&!Object(r.f)(e))return["type"];var n=[];return function(e,t){return!Object(r.g)(t)||Object(r.a)(e)&&e.length>=t}(e,t.minItems)||n.push("minItems"),function(e,t){return!Object(r.g)(t)||Object(r.a)(e)&&e.length<=t}(e,t.maxItems)||n.push("maxItems"),n}},LiCV:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return V})),n.d(t,"default",(function(){return A}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),u=n.n(o),c=n("ZVZ0"),i=n("Qi1R"),s=n("97Jx"),l=n.n(s),f=n("VrFO"),m=n.n(f),d=n("Y9Ll"),p=n.n(d),h=n("1Pcy"),v=n.n(h),g=n("5Yy7"),b=n.n(g),O=n("N+ot"),y=n.n(O),E=n("AuHH"),j=n.n(E),T=n("KEM+"),w=n.n(T),x=(n("OZaJ"),n("+KXO"),n("+oxZ"),n("z84I"),n("ho0z"),n("1IsZ"),n("O94r")),N=n.n(x),M=n("ZrBu"),R=n("tFYr"),P=n("E+8c"),F=n("2k+G"),k=(n("2G9S"),n("KqXw"),n("Ysgh"),n("1t7P"),n("jQ/y"),n("lTEL"),n("7x/C"),n("kYxP"),n("M+/F"),n("iKE+"),n("DZ+c"),n("7xRU"),function(e){if(e.control)return e.control.toLowerCase();if(e.hidden)return"hidden";if(e.values&&e.values.length)return I(e);switch(e.type){case"string":return S(e.format);case"number":case"integer":return"number";case"boolean":return"checkbox";default:return"text"}}),S=function(e){return"date"===e?"date":"base64url"===e?"file":"password"===e?"password":"uri"===e||"email"===e?"text":"phone"===e?"tel":"text"},I=function(e){return e.control?e.control:"select"===e.type?"select":"radio"===e.type?"radio":e.values?3<e.values.length?"select":"radio":"select"},L=n("KVzC");function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j()(e);if(t){var a=j()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y()(this,n)}}var _={REQUIRED:"Required",PATTERN:"Incorrect format",MINLENGTH:"The value is too short",MAXLENGTH:"The value is too long",MIN:"The value is too low",MAX:"The value is too high"},q=function(e){function t(e){var r;return m()(this,t),r=n.call(this,e),w()(v()(r),"objectSizeOf",(function(e){return e?Object.keys(e).length:0})),r.state={focused:!1,changed:!1,error:e.errorMessage},r}b()(t,e);var n=C(t);return p()(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.errorMessage!==this.props.errorMessage&&this.setState({error:e.errorMessage})}},{key:"onFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({focused:!0})}},{key:"onBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({focused:!1})}},{key:"onChange",value:function(e){this.props.onChange(e),this.setState({changed:!0,focused:!0})}},{key:"validateValue",value:function(e){var t={},n=this.props.field;return Object(L.h)(e,n).forEach((function(e){var r=e.toLowerCase(),a=n.validationMessages&&n.validationMessages[r]||_[r.toUpperCase()];a&&(t[r]=a)})),t}},{key:"updateAlert",value:function(e){var t=this.props,n=t.value,r=t.field,a=t.errorMessage,o=t.warningMessage,c=this.state,i=c.focused,s=c.changed,l=c.error,f=s&&!i?this.validateValue(n):{};return 0<this.objectSizeOf(f)?{type:"error",content:Object.keys(f).map((function(e){return u.a.createElement("div",{key:e},f[e])}))}:l&&a?{type:"error",content:u.a.createElement(u.a.Fragment,null,a)}:o?{type:"warning",content:u.a.createElement(u.a.Fragment,null,o)}:i&&r.help&&r.help.message?{type:"info",content:u.a.createElement(u.a.Fragment,null,r.help.message)}:i&&r.help&&r.help.list&&0<r.help.list.length?{type:"info",content:r.help.list.map((function(e,t){return u.a.createElement("div",{key:t},e)}))}:i&&r.help&&r.help.do&&0<r.help.do.length&&r.help.dont&&0<r.help.dont.length?{type:"info",content:u.a.createElement("div",{className:"m-b-1"},u.a.createElement(M.a,{dos:r.help.do,donts:r.help.dont}))}:i&&e!==F.a.FILE&&r.help&&r.help.image?{type:"info",content:u.a.createElement("img",{className:"thumbnail m-y-2",src:"".concat(r.help.image),alt:r.label})}:{type:null,content:null}}},{key:"render",value:function(){var e=this,t=this.props,n=t.name,r=t.field,a=t.value,o=t.locale,c=t.label,i=r.control||k(r),s=this.updateAlert(i),f=!!s.content,m=i!==F.a.FILE&&i!==F.a.UPLOAD&&i!==F.a.CHECKBOX;return u.a.createElement("div",{className:N()("form-group","tw-field-".concat(n),{"has-info":"info"===s.type&&f,"has-error":"error"===s.type&&f,"has-warning":"warning"===s.type&&f,hidden:r.hidden})},m&&u.a.createElement("label",{className:"control-label"},c),u.a.createElement(P.a,l()({},r,{type:i,name:n,locale:o,value:a,onChange:function(t){return e.onChange(t)},onFocus:function(t){return e.onFocus(t)},onBlur:function(t){return e.onBlur(t)}})),f&&u.a.createElement(R.a,{type:s.type},s.content))}}]),t}(o.Component);q.defaultProps={locale:"en-GB",countryCode:null,value:null,errorMessage:null,warningMessage:null,onFocus:null,onBlur:null,label:null};var B=q,G=["components"],V=(u.a.createElement,{name:"Field"}),K={meta:V};function A(e){var t=e.components,n=Object(a.a)(e,G);return Object(c.a)("wrapper",Object(r.a)({},K,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Note:")," This component is deprecated. It can now be found in ",Object(c.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),"."),Object(c.a)(i.b,{code:"() => {\n  const [value, setValue] = React.useState('a value');\n  return (\n    <Field\n      value={value}\n      errorMessage=\"\"\n      warningMessage=\"\"\n      label=\"label\"\n      name=\"text\"\n      field={{\n        control: 'text',\n        type: 'string',\n        displayPattern: '',\n        help: {\n          message: '',\n          image: '',\n          list: [],\n          do: ['good', 'much better'],\n          dont: ['not so good', 'erm no!'],\n        },\n        options: [\n          { label: 'Mars', value: 'mars' },\n          { label: 'Earth', value: 'earth' },\n        ],\n        label: 'a label',\n        required: false,\n        disabled: false,\n        hidden: false,\n        readOnly: false,\n        autoComplete: false,\n        placeholder: 'a placeholder',\n        searchPlaceholder: 'search',\n        minLength: null,\n        maxLength: null,\n        minimum: 10,\n        maximum: 99,\n        validationMessages: {\n          required: 'Number is required',\n          minimum: 'Must be 10 or greater',\n          maximum: 'Must be 99 or less',\n        },\n      }}\n      onChange={(value) => setValue(value)}\n    />\n  );\n};\n",scope:{Field:B},mdxType:"LiveEditorBlock"}),Object(c.a)(i.a,{componentName:"Field",mdxType:"GeneratePropsTable"}))}A.isMDXComponent=!0},PjJO:function(e,t,n){var r=n("fVMg")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,"/./"[e](t)}catch(a){}}return!1}},T0YW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dynamicForms/Field",function(){return n("LiCV")}])},XU0q:function(e,t,n){"use strict";var r,a;n.d(t,"a",(function(){return r})),(a=r||(r={})).TOP_LEFT="up-left",a.TOP="up-center",a.TOP_RIGHT="up-right",a.BOTTOM_LEFT="down-left",a.BOTTOM="down-center",a.BOTTOM_RIGHT="down-right"},YAkj:function(e,t,n){var r=n("1Mu/"),a=n("DEeE"),o=n("N4z3"),u=n("4Sk5").f,c=function(e){return function(t){for(var n,c=o(t),i=a(c),s=i.length,l=0,f=[];s>l;)n=i[l++],r&&!u.call(c,n)||f.push(e?[n,c[n]]:c[n]);return f}};e.exports={entries:c(!0),values:c(!1)}},ZrBu:function(e,t,n){"use strict";n("z84I");var r=n("ERkP"),a=n.n(r),o=n("/Vl7"),u=(n("9s95"),function(e){var t=e.dos,n=e.donts;return a.a.createElement("div",{className:"tw-instructions"},t.map((function(e,t){return a.a.createElement("div",{className:"instruction m-t-1",key:t},a.a.createElement(o.h,{size:24,className:"do"}),a.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})),n.map((function(e,t){return a.a.createElement("div",{className:"instruction m-t-1",key:t},a.a.createElement(o.m,{size:24,className:"dont"}),a.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})))});u.defaultProps={dos:[],donts:[]};var c=u;t.a=c},fO07:function(e,t,n){"use strict";var r=n("97Jx"),a=n.n(r),o=(n("2G9S"),n("ERkP")),u=n.n(o),c=n("O94r"),i=n.n(c),s=n("XU0q");function l(e){if(e){var t=["arrow"],n=s.a.BOTTOM,r=s.a.BOTTOM_LEFT,a=s.a.BOTTOM_RIGHT,o=s.a.TOP,u=s.a.TOP_RIGHT,c=s.a.TOP_LEFT;switch(e){case n:return t.concat("arrow-bottom","arrow-center");case r:return t.concat("arrow-bottom","arrow-left");case a:return t.concat("arrow-bottom","arrow-right");case o:return t.concat("arrow-center");case u:return t.concat("arrow-right");case c:default:return t}}return""}t.a=function(e,t){var n=function(n){return u.a.createElement(e,a()({},n,{className:i()(n.className,l(t)),arrow:void 0}))};return n.defaultProps={className:void 0},n}},"jQ/y":function(e,t,n){"use strict";var r=n("ax0f"),a=n("1Mu/"),o=n("9JhN"),u=n("8aeu"),c=n("dSaG"),i=n("q9+l").f,s=n("tjTa"),l=o.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new l(e):void 0===e?l():l(e);return""===e&&(f[t]=!0),t};s(m,l);var d=m.prototype=l.prototype;d.constructor=m;var p=d.toString,h="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;i(d,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=p.call(e);if(u(f,e))return"";var n=h?t.slice(7,-1):t.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:m})}},"jl0/":function(e,t,n){var r=n("dSaG"),a=n("amH4"),o=n("fVMg")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},kYxP:function(e,t,n){var r=n("9JhN"),a=n("Ew2P"),o=n("lTEL"),u=n("WxKw"),c=n("fVMg"),i=c("iterator"),s=c("toStringTag"),l=o.values;for(var f in a){var m=r[f],d=m&&m.prototype;if(d){if(d[i]!==l)try{u(d,i,l)}catch(h){d[i]=l}if(d[s]||u(d,s,f),a[f])for(var p in o)if(d[p]!==o[p])try{u(d,p,o[p])}catch(h){d[p]=o[p]}}}},nuol:function(e,t,n){var r=n("jl0/");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},tFYr:function(e,t,n){"use strict";var r=n("KEM+"),a=n.n(r),o=n("ERkP"),u=n.n(o),c=n("O94r"),i=n.n(c),s=n("+KRd"),l=n("fO07"),f=n("XU0q"),m=a()({},s.a.ERROR,"danger"),d=function(e){var t=Object(l.a)((function(e){var t=e.children,n=e.className,r=e.type,a="alert-".concat(m[r]||r);return u.a.createElement("div",{role:"alert",className:i()("alert alert-detach p-x-2 p-y-1",a,n)},t)}),f.a.TOP_LEFT);return u.a.createElement(t,e)};d.defaultProps={className:void 0,type:s.a.INFO},t.a=d},x4t0:function(e,t,n){"use strict";var r=n("ax0f"),a=n("nuol"),o=n("cww3");r({target:"String",proto:!0,forced:!n("PjJO")("includes")},{includes:function(e){return!!~String(o(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})}},[["T0YW",0,1,2,6,3,5,7,8,9,10,11,13,14,15,18,19,20,16,21,4]]]);
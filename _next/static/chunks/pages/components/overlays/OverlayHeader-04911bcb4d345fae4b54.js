_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[110],{"+4rU":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/overlays/OverlayHeader",function(){return a("XZBA")}])},"1IsZ":function(e,t,a){var r=a("ax0f"),n=a("YAkj").values;r({target:"Object",stat:!0},{values:function(e){return n(e)}})},"9YZu":function(e,t,a){"use strict";var r=a("ERkP"),n=a.n(r),o=a("O94r"),i=a.n(o),l=a("VehP"),c=a("EUyq"),u=(a("DGa2"),function(e){var t=e.backgroundColor,a=e.children,r=e.className,o=e.outlined,l=e.size,c=e.theme,u=e.type;return n.a.createElement("div",{className:i()("tw-avatar",r,"tw-avatar--".concat(l),"tw-avatar--".concat(u),"tw-avatar--".concat(c),{"tw-avatar--outlined":o})},n.a.createElement("div",{className:"tw-avatar__content",style:{backgroundColor:t||void 0}},a))});u.Size={SMALL:l.a.SMALL,MEDIUM:l.a.MEDIUM,LARGE:l.a.LARGE},u.Theme=c.a,u.Type={THUMBNAIL:"thumbnail",ICON:"icon",EMOJI:"emoji",INITIALS:"initials"},u.defaultProps={backgroundColor:null,children:null,className:null,outlined:!1,size:u.Size.MEDIUM,theme:c.a.LIGHT,type:u.Type.THUMBNAIL},t.a=u},BAoe:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r,n,o=a("D57K"),i=a("ERkP"),l=a("yGPN"),c=a("ymT0");!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(r||(r={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(n||(n={}));function u(e){var t=function(t){return i.createElement(c.a.Consumer,null,(function(a){Object(l.c)(a);var r=t.value,n=t.children,i=Object(o.c)(t,["value","children"]),c="string"===typeof r?new Date(r||0):r;return n("formatDate"===e?a.formatDateToParts(c,i):a.formatTimeToParts(c,i))}))};return t.displayName=n[e],t}function s(e){var t=function(t){return i.createElement(c.a.Consumer,null,(function(a){Object(l.c)(a);var r=t.value,n=t.children,c=Object(o.c)(t,["value","children"]),u=a[e](r,c);if("function"===typeof n)return n(u);var s=a.textComponent||i.Fragment;return i.createElement(s,null,u)}))};return t.displayName=r[e],t}function f(e){return e}s("formatDate"),s("formatTime"),s("formatNumber"),s("formatList"),s("formatDisplayName"),u("formatDate"),u("formatTime")},DEeE:function(e,t,a){var r=a("yRya"),n=a("sX5C");e.exports=Object.keys||function(e){return r(e,n)}},DGa2:function(e,t,a){},EUyq:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r={LIGHT:"light",DARK:"dark"}},Fr7r:function(e,t,a){"use strict";var r=a("ERkP"),n=a.n(r),o=a("O94r"),i=a.n(o),l=n.a.forwardRef((function(e,t){var a=e.bottomContent,r=e.className,o=e.layout,c=e.leftContent,u=e.rightContent,s=o===l.Layout.VERTICAL;return n.a.createElement("div",{className:i()("np-header","d-flex","flex-wrap",r),ref:t},n.a.createElement("div",{className:i()("align-items-center","d-flex",{"flex__item--8":s})},c),n.a.createElement("div",{className:i()("align-items-center","d-flex","justify-content-end",{"flex__item--4 ":s,"order-2":!s})},u),n.a.createElement("div",{className:i()("align-items-center","d-flex","justify-content-center",{"flex__item--12":s,"order-1 flex-grow-1":!s})},a))}));l.Layout={VERTICAL:"VERTICAL",HORIZONTAL:"HORIZONTAL"},l.defaultProps={bottomContent:void 0,className:void 0,layout:l.Layout.HORIZONTAL,leftContent:void 0,rightContent:void 0},t.a=l},KcoV:function(e,t,a){},O94r:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},Ua7V:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(c){n=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return a}}},VehP:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},XZBA:function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return y})),a.d(t,"default",(function(){return b}));var r=a("cxan"),n=a("HbGN"),o=a("ERkP"),i=a.n(o),l=a("ZVZ0"),c=a("Qi1R"),u=a("Fr7r"),s=a("qGsU"),f=(a("nKII"),function(e){var t=e.avatar,a=e.onClose,r=e.logo,n=a&&i.a.createElement(s.a,{onClick:a});return i.a.createElement(u.a,{className:"np-overlay-header p-a-3",leftContent:r,rightContent:i.a.createElement(i.a.Fragment,null,t,t&&n&&i.a.createElement("span",{className:"separator"}),n)})});f.defaultProps={avatar:null,onClose:null};var m=f,p=a("9YZu"),d=a("zutg"),v=a("/Vl7"),y=(i.a.createElement,{name:"OverlayHeader"}),E={meta:y};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.a)("wrapper",Object(r.a)({},E,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Simple header component that displays a responsive logo an avatar and a close button.\nThe current and recommended size for logo is width = 138px height=24px."),Object(l.a)(c.b,{code:'<OverlayHeader\n  avatar={\n    <AvatarWrapper\n      url="https://github.com/transferwise.png"\n      profileType={AvatarWrapper.ProfileType.BUSINESS}\n    />\n  }\n  logo={<img alt="logo" src="./../../static/assets/img/wise_logo.svg" width="138" />}\n  onClose={() => console.log(\'Close clicked\')}\n/>;\n',scope:{OverlayHeader:m,Avatar:p.a,BriefcaseIcon:v.e,ProfileIcon:v.x,AvatarWrapper:d.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(l.a)(c.a,{componentName:"OverlayHeader",mdxType:"GeneratePropsTable"}))}b.isMDXComponent=!0},YAkj:function(e,t,a){var r=a("1Mu/"),n=a("DEeE"),o=a("N4z3"),i=a("4Sk5").f,l=function(e){return function(t){for(var a,l=o(t),c=n(l),u=c.length,s=0,f=[];u>s;)a=c[s++],r&&!i.call(l,a)||f.push(e?[a,l[a]]:l[a]);return f}};e.exports={entries:l(!0),values:l(!1)}},ddV6:function(e,t,a){var r=a("qPgQ"),n=a("Ua7V"),o=a("peMk"),i=a("f2kJ");e.exports=function(e,t){return r(e)||n(e,t)||o(e,t)||i()}},f2kJ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},iQ7j:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}},kQwz:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("ERkP"),n=a("ymT0"),o=a("yGPN");function i(){var e=r.useContext(n.a);return Object(o.c)(e),e}},nKII:function(e,t,a){},peMk:function(e,t,a){var r=a("iQ7j");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}},qGsU:function(e,t,a){"use strict";a("1IsZ");var r=a("ERkP"),n=a.n(r),o=a("O94r"),i=a.n(o),l=a("kQwz"),c=a("/Vl7"),u=a("BAoe"),s=Object(u.a)({ariaLabel:{id:"neptune.CloseButton.ariaLabel"}}),f=(a("KcoV"),n.a.forwardRef((function(e,t){var a=Object(l.a)(),r=e.onClick,o=e.className,u=e.size;return n.a.createElement("button",{ref:t,type:"button",className:i()("np-close-button close btn-link text-no-decoration",{"np-close-button--large":u===f.Size.LARGE},o),"aria-label":a.formatMessage(s.ariaLabel),onClick:r},n.a.createElement(c.k,{size:u}))})));f.Size={SMALL:16,LARGE:24},f.defaultProps={className:null,size:f.Size.LARGE};t.a=f},qPgQ:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},zutg:function(e,t,a){"use strict";var r=a("ddV6"),n=a.n(r),o=a("ERkP"),i=a.n(o),l=a("/Vl7"),c=a("9YZu"),u={BUSINESS:"BUSINESS",PERSONAL:"PERSONAL"};function s(e){var t=e.url,a=e.profileType,r=Object(o.useState)(!1),s=n()(r,2),f=s[0],m=s[1],p=t&&!f,d=a===u.BUSINESS;return Object(o.useEffect)((function(){return m(!1)}),[t]),p?i.a.createElement(c.a,{type:c.a.Type.THUMBNAIL,size:c.a.Size.MEDIUM},p&&i.a.createElement("img",{src:t,alt:"avatar",onError:function(){return m(!0)}})):i.a.createElement(c.a,{type:c.a.Type.ICON,size:c.a.Size.MEDIUM},d?i.a.createElement(l.e,null):i.a.createElement(l.x,null))}s.ProfileType=u,s.defaultProps={url:"",profileType:s.ProfileType.PERSONAL};t.a=s}},[["+4rU",0,1,2,6,3,5,7,4]]]);
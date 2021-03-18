_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[55],{"+wNj":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("+wNj");function r(e,t){if(null==e)return{};var n,r,o=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n("ERkP"),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,O=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return n?r.a.createElement(O,c(c({ref:t},i),{},{components:n})):r.a.createElement(O,c({ref:t},i))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"===typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},lcus:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n("cxan"),r=n("HbGN"),o=n("ERkP"),l=n.n(o),c=n("ZVZ0"),s=(l.a.createElement,{name:"FlowNavigation Upgrade Guide",date:"2020-12-15",authors:[{name:"Andrea Piras",githubUsername:"andreapiras"}]}),i={meta:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h2",{id:"summary"},"Summary"),Object(c.a)("p",null,"FlowNavigation has gone through a major refactor, and there are some breaking changes. This upgrade guide will provide the necessary steps to switch to the new version."),Object(c.a)("h3",{id:"api-changes"},"API Changes"),Object(c.a)("table",{className:"docs-table table"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Old API"),Object(c.a)("th",null,"New API"),Object(c.a)("th",null,"Change"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("td",null,"activeStep"),Object(c.a)("td",null,"activeStep"),Object(c.a)("td",null,"No change")),Object(c.a)("tr",null,Object(c.a)("td",null,"avatarUrl"),Object(c.a)("td",null,"avatar"),Object(c.a)("td",null,"Instead of a URL, we now expect an Avatar. Please provide this in avatar, and remove avatarURL. The old logic can still be used via AvatarWrapper component that embeds the business loigc")),Object(c.a)("tr",null,Object(c.a)("td",null,"done"),Object(c.a)("td",null,"done"),Object(c.a)("td",null,"Use to remove stepper and avatar and border")),Object(c.a)("tr",null,Object(c.a)("td",null,"-"),Object(c.a)("td",null,"logo"),Object(c.a)("td",null,"@new We used to display the logo within the component using CSS. We now expect you to pass in a logo as an image. You will need to use the inverse logo if working on a dark screen:"," ",Object(c.a)("a",{href:"https://transferwise.com/public-resources/assets/logos/transferwise/brand_logo_inverse.svg"},"https://transferwise.com/public-resources/assets/logos/transferwise/brand_logo_inverse.svg"),"For old logo the recommended size are `width 142` `height 24`",Object(c.a)("a",{href:"https://transferwise.com/public-resources/assets/logos/transferwise/brand_logo.svg"},"https://transferwise.com/public-resources/assets/logos/transferwise/brand_logo.svg"),"the new logo will be centrally aligned by default. In order to temporary aligned the old one please add an inline margin-top:-8px;")),Object(c.a)("tr",null,Object(c.a)("td",null,"onClose"),Object(c.a)("td",null,"onClose"),Object(c.a)("td",null,"No change")),Object(c.a)("tr",null,Object(c.a)("td",null,"onGoBack"),Object(c.a)("td",null,"onGoBack"),Object(c.a)("td",null,"No change")),Object(c.a)("tr",null,Object(c.a)("td",null,"theme"),Object(c.a)("td",null,"test"),Object(c.a)("td",null,"@deprecated Used to change logo appearances and borders. Now you can pass and manage logo.")))),Object(c.a)("h3",{id:"dependency-requirements"},"Dependency requirements"),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"@transferwise/components >= 34.2.3")),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"@transferwise/neptune-css>= 8.0.1")),Object(c.a)("h3",{id:"style-changes"},"Style Changes"),Object(c.a)("h4",{id:"dimensions"},"Dimensions"),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"FlowNavigation")," is provided with a container that also provides the ",Object(c.a)("inlineCode",{parentName:"p"},"border-bottom")),Object(c.a)("h4",{id:"border"},"Border"),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"done")," manages show/hide of the border. By default is set to ",Object(c.a)("inlineCode",{parentName:"p"},"true")),Object(c.a)("h3",{id:"code-changes"},"Code changes"),Object(c.a)("p",null,"More detail on the API changes."),Object(c.a)("h4",{id:"avatarurl-replaced-by-avatar"},Object(c.a)("inlineCode",{parentName:"h4"},"avatarUrl")," replaced by ",Object(c.a)("inlineCode",{parentName:"h4"},"Avatar")),Object(c.a)("p",null,"Avatar logic has been extracted but consumers can use ",Object(c.a)("inlineCode",{parentName:"p"},"AvatarWrapper")," component to implement the business logic"),Object(c.a)("h4",{id:"theme-has-been-removed"},"theme has been removed"),Object(c.a)("p",null,"Previously a number of things were happening based on ",Object(c.a)("inlineCode",{parentName:"p"},"theme")," prop:"),Object(c.a)("ol",null,Object(c.a)("li",{parentName:"ol"},Object(c.a)("p",{parentName:"li"},"switch the Logo theme. Now Logo can be provided as prop so consumers can decide which theme to applied")),Object(c.a)("li",{parentName:"ol"},Object(c.a)("p",{parentName:"li"},"hide the Stepper. Please use OverlayHeader if you don't need the ",Object(c.a)("inlineCode",{parentName:"p"},"Stepper")))),Object(c.a)("h4",{id:"logo-\u2192-added"},"logo \u2192 added"),Object(c.a)("p",null,"Consumers now have to provide logo asset for the full version of logo. The recommended size for the old logo ",Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://transferwise.com/public-resources/assets/logos/transferwise/brand_logo.svg"}),"https://transferwise.com/public-resources/assets/logos/transferwise/brand_logo.svg"),' are width="142" height="24"'))}u.isMDXComponent=!0},o9XZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2020-12-15-flownavigation-upgrade-guide",function(){return n("lcus")}])}},[["o9XZ",0,1]]]);
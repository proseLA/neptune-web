_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[114],{"0FSu":function(n,e,t){var r=t("IRf+"),i=t("g6a+"),o=t("N9G2"),a=t("tJVe"),l=t("aoZ+"),c=[].push,s=function(n){var e=1==n,t=2==n,s=3==n,u=4==n,f=6==n,p=7==n,d=5==n||f;return function(v,m,h,w){for(var C,b,g=o(v),y=i(g),x=r(m,h,3),N=a(y.length),V=0,M=w||l,H=e?M(v,N):t||p?M(v,0):void 0;N>V;V++)if((d||V in y)&&(b=x(C=y[V],V,g),n))if(e)H[V]=b;else if(b)switch(n){case 3:return!0;case 5:return C;case 6:return V;case 2:c.call(H,C)}else switch(n){case 4:return!1;case 7:c.call(H,C)}return f?-1:s||u?u:H}};n.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},"1QAi":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab/MobileNav",function(){return t("UXDF")}])},"56Cj":function(n,e,t){var r=t("ct80");n.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},GJtw:function(n,e,t){var r=t("ct80"),i=t("fVMg"),o=t("T+0C"),a=i("species");n.exports=function(n){return o>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[n](Boolean).foo}))}},"IRf+":function(n,e,t){var r=t("hpdy");n.exports=function(n,e,t){if(r(n),void 0===e)return n;switch(t){case 0:return function(){return n.call(e)};case 1:return function(t){return n.call(e,t)};case 2:return function(t,r){return n.call(e,t,r)};case 3:return function(t,r,i){return n.call(e,t,r,i)}}return function(){return n.apply(e,arguments)}}},N9G2:function(n,e,t){var r=t("cww3");n.exports=function(n){return Object(r(n))}},O94r:function(n,e,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)n.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&n.push(a)}else if("object"===o)for(var l in r)t.call(r,l)&&r[l]&&n.push(l)}}return n.join(" ")}n.exports?(i.default=i,n.exports=i):void 0===(r=function(){return i}.apply(e,[]))||(n.exports=r)}()},"T+0C":function(n,e,t){var r,i,o=t("9JhN"),a=t("ZORK"),l=o.process,c=l&&l.versions,s=c&&c.v8;s?i=(r=s.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(i=r[1]),n.exports=i&&+i},TbR9:function(n,e,t){var r=t("56Cj");n.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},UXDF:function(n,e,t){"use strict";t.r(e),t.d(e,"meta",(function(){return C})),t.d(e,"default",(function(){return g}));var r=t("cxan"),i=t("HbGN"),o=t("ERkP"),a=t.n(o),l=t("ZVZ0"),c=t("Qi1R"),s=(t("z84I"),t("ddV6")),u=t.n(s),f=t("O94r"),p=t.n(f),d=function(){if("undefined"==typeof window.navigator)return!1;var n=window.navigator.userAgent;return/iP(ad|od|hone)/i.test(n)&&/WebKit/i.test(n)&&!/(CriOS|FxiOS|OPiOS|mercury)/i.test(n)},v=function(){if("undefined"==typeof window.navigator)return!1;var n=window.navigator;return n.maxTouchPoints&&2<n.maxTouchPoints&&/WebKit/i.test(n.userAgent)&&/Safari/i.test(n.userAgent)&&/MacIntel/.test(n.platform)};t("78Mi");var m={CALL_TO_ACTION:"call-to-action"},h=function(n){var e=n.items,t=n.activeItemPath,r=Object(o.useState)(!1),i=u()(r,2),l=i[0],c=i[1],s=function(){var n=Object(o.useState)(null),e=u()(n,2),t=e[0],r=e[1];return[t,Object(o.useCallback)((function(n){null!==n&&r(n)}),[])]}(),f=u()(s,2),h=f[0],w=f[1];return Object(o.useEffect)((function(){var n,e=function(){n&&window.cancelAnimationFrame(n),n=window.requestAnimationFrame((function(){if(0<window.scrollY)c(!1);else{var n=h.getBoundingClientRect().bottom,e=l?44:0;Math.floor(n)+e+window.scrollY>window.innerHeight?0===window.scrollY&&c(!0):c(!1)}}))},t=window.innerHeight,r=function(){document.hidden?t=window.innerHeight:(t!==window.innerHeight&&c(!1),e())};return(d()||v())&&null!==h&&(e(),window.addEventListener("resize",e),window.addEventListener("scroll",e),document.addEventListener("visibilitychange",r)),function(){window.removeEventListener("resize",e),window.removeEventListener("scroll",e),document.removeEventListener("visibilitychange",r)}}),[h,l]),a.a.createElement("div",{ref:w,className:p()("mobileNav",{"mobileNav--with-open-in-app-banner":l})},a.a.createElement("ul",{className:"mobileNav__items"},e.map((function(n){return a.a.createElement("li",{key:n.path,className:p()("mobileNavItem",{"mobileNavItem--call-to-action":n.type===m.CALL_TO_ACTION,"mobileNavItem--active":t===n.path})},n.path&&a.a.createElement("a",{className:"mobileNavItem__link",onClick:n.onClick,href:n.path},a.a.createElement("span",{className:"mobileNavItem__icon"},n.icon),a.a.createElement("span",{className:"mobileNavItem__label"},n.label)))}))))};h.mobileNavType=m,h.defaultProps={activeItemPath:null};var w=h,C=(a.a.createElement,{name:"MobileNav"}),b={meta:C};function g(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(l.a)("wrapper",Object(r.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(l.a)(c.b,{code:'<MobileNav\n  items={[\n    {\n      hidden: false,\n      icon: (\n        <span className="tw-icon">\n          <svg\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M22.9999 11L12 2L0.894714 11L2.11935 12.5512L12 4.51802L21.7753 12.5512L22.9999 11Z"\n              fill="#37517e"\n            />\n            <path\n              d="M5.99999 14.0001V20.0001H18V14.0001H20V22.0001H3.99999V14.0001H5.99999Z"\n              fill="#37517e"\n            />\n          </svg>\n        </span>\n      ),\n      label: \'Home\',\n      path: \'#home\',\n    },\n    {\n      hidden: false,\n      icon: (\n        <span className="tw-icon">\n          <svg\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path d="M16 16H4V14H16V16Z" fill="#37517e" />\n            <path\n              d="M5.5 9C4.67157 9 4 9.67157 4 10.5C4 11.3284 4.67157 12 5.5 12H6.5C7.32843 12 8 11.3284 8 10.5C8 9.67157 7.32843 9 6.5 9H5.5Z"\n              fill="#37517e"\n            />\n            <path\n              fillRule="evenodd"\n              clipRule="evenodd"\n              d="M2 4C0.89543 4 0 4.89543 0 6V18C0 19.1046 0.895431 20 2 20H22C23.1046 20 24 19.1046 24 18V6C24 4.89543 23.1046 4 22 4H2ZM2 6L22 6V9.65675C20.6944 10.0785 19.75 11.304 19.75 12.75C19.75 14.196 20.6944 15.4215 22 15.8433V18H2V6Z"\n              fill="#37517e"\n            />\n          </svg>\n        </span>\n      ),\n      label: \'Card\',\n      path: \'#card-management\',\n    },\n    {\n      hidden: false,\n      type: \'call-to-action\',\n      icon: (\n        <span className="tw-icon">\n          <svg\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M12.5548 13.6119L16.0486 5.87567L17.3103 9.34209L19.1896 8.65805L16.7955 2.0802L15.3658 2.60058L15.3387 2.58836L15.3268 2.61478L10.2177 4.47434L10.9017 6.35373L14.1765 5.1618L10.7324 12.7879C11.3917 12.9585 12.0062 13.2402 12.5548 13.6119Z"\n              fill="#FFFFFF"\n            />\n            <path\n              fillRule="evenodd"\n              clipRule="evenodd"\n              d="M12.75 18.5C12.75 20.433 11.183 22 9.25 22C7.317 22 5.75 20.433 5.75 18.5C5.75 16.567 7.317 15 9.25 15C11.183 15 12.75 16.567 12.75 18.5ZM10.75 18.5C10.75 19.3284 10.0784 20 9.25 20C8.42157 20 7.75 19.3284 7.75 18.5C7.75 17.6715 8.42157 17 9.25 17C10.0784 17 10.75 17.6715 10.75 18.5Z"\n              fill="#FFFFFF"\n            />\n          </svg>\n        </span>\n      ),\n      label: \'Send\',\n      path: \'#send\',\n    },\n    {\n      hidden: false,\n      icon: (\n        <span className="tw-icon">\n          <svg\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M15.4999 2C14.0509 2 12.7618 2.68491 11.9387 3.74866C12.5157 4.09437 13.0363 4.52444 13.4836 5.02181C13.9386 4.4022 14.6723 4 15.4999 4C16.8807 4 17.9999 5.11929 17.9999 6.5C17.9999 7.88071 16.8807 9 15.4999 9C15.3916 9 15.2848 8.9931 15.1801 8.97973C15.1932 9.15144 15.2 9.32496 15.2 9.50005C15.2 10.0073 15.1436 10.5014 15.0368 10.9765C15.189 10.992 15.3436 11 15.4999 11C17.9852 11 19.9999 8.98528 19.9999 6.5C19.9999 4.01472 17.9852 2 15.4999 2Z"\n              fill="#37517e"\n            />\n            <path\n              d="M15.4999 15C15.299 15 15.1032 15.0036 14.9125 15.0106C14.3695 14.7777 13.7636 14.5619 13.0919 14.379C13.5102 13.9852 13.8779 13.5381 14.1842 13.0486C14.6016 13.0171 15.04 13 15.4999 13C18.9027 13 21.1267 13.9336 22.4122 14.7478C23.5927 15.4956 23.9999 16.8088 23.9999 17.9482V19H21.9999V17.9482C21.9999 17.2161 21.7424 16.6911 21.3419 16.4374C20.3692 15.8212 18.5151 15 15.4999 15Z"\n              fill="#37517e"\n            />\n            <path\n              fillRule="evenodd"\n              clipRule="evenodd"\n              d="M4 9.5C4 7.01472 6.01472 5 8.5 5C10.9853 5 13 7.01472 13 9.5C13 11.9853 10.9853 14 8.5 14C6.01472 14 4 11.9853 4 9.5ZM8.5 7C7.11929 7 6 8.11929 6 9.5C6 10.8807 7.11929 12 8.5 12C9.88071 12 11 10.8807 11 9.5C11 8.11929 9.88071 7 8.5 7Z"\n              fill="#37517e"\n            />\n            <path\n              d="M17 20.9482V22H15V20.9482C15 20.2161 14.7424 19.6911 14.342 19.4374C13.3692 18.8212 11.5151 18 8.5 18C5.48489 18 3.63077 18.8212 2.65803 19.4374C2.25756 19.6911 2 20.2161 2 20.9482V22H0V20.9482C0 19.8088 0.407265 18.4956 1.58779 17.7478C2.87325 16.9336 5.09725 16 8.5 16C11.9027 16 14.1268 16.9336 15.4122 17.7478C16.5927 18.4956 17 19.8088 17 20.9482Z"\n              fill="#37517e"\n            />\n          </svg>\n        </span>\n      ),\n      label: \'Recipients\',\n      path: \'#recipients\',\n    },\n    {\n      hidden: false,\n      icon: (\n        <span className="tw-icon">\n          <svg\n            width="24"\n            height="24"\n            viewBox="0 0 24 24"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              fillRule="evenodd"\n              clipRule="evenodd"\n              d="M22 9V7H17.6632C17.8792 6.54537 18 6.0368 18 5.5C18 3.567 16.433 2 14.5 2C13.5207 2 12.6353 2.40223 12 3.05051C11.3647 2.40223 10.4793 2 9.5 2C7.567 2 6 3.567 6 5.5C6 6.0368 6.12085 6.54537 6.33682 7H2V9H22ZM8 5.5C8 6.32843 8.67157 7 9.5 7H11V5.5C11 4.67157 10.3284 4 9.5 4C8.67157 4 8 4.67157 8 5.5ZM16 5.5C16 6.32843 15.3284 7 14.5 7H13V5.5C13 4.67157 13.6716 4 14.5 4C15.3284 4 16 4.67157 16 5.5Z"\n              fill="#37517e"\n            />\n            <path d="M5 20V11H3V22H21V11H19V20H13V11H11V20H5Z" fill="#37517e" />\n          </svg>\n        </span>\n      ),\n      label: \'Invite\',\n      path: \'#invite\',\n    },\n  ]}\n  activeItemPath="#invite"\n/>;\n',scope:{MobileNav:w},mdxType:"LiveEditorBlock"}),Object(l.a)(c.a,{componentName:"MobileNav",mdxType:"GeneratePropsTable"}))}g.isMDXComponent=!0},Ua7V:function(n,e){n.exports=function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,l=n[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return t}}},ZORK:function(n,e,t){var r=t("VCi3");n.exports=r("navigator","userAgent")||""},"aoZ+":function(n,e,t){var r=t("dSaG"),i=t("xt6W"),o=t("fVMg")("species");n.exports=function(n,e){var t;return i(n)&&("function"!=typeof(t=n.constructor)||t!==Array&&!i(t.prototype)?r(t)&&null===(t=t[o])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===e?0:e)}},ddV6:function(n,e,t){var r=t("qPgQ"),i=t("Ua7V"),o=t("peMk"),a=t("f2kJ");n.exports=function(n,e){return r(n)||i(n,e)||o(n,e)||a()}},f2kJ:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},fVMg:function(n,e,t){var r=t("9JhN"),i=t("TN3B"),o=t("8aeu"),a=t("HYrn"),l=t("56Cj"),c=t("TbR9"),s=i("wks"),u=r.Symbol,f=c?u:u&&u.withoutSetter||a;n.exports=function(n){return o(s,n)||(l&&o(u,n)?s[n]=u[n]:s[n]=f("Symbol."+n)),s[n]}},hpdy:function(n,e){n.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n}},iQ7j:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}},peMk:function(n,e,t){var r=t("iQ7j");n.exports=function(n,e){if(n){if("string"===typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}},qPgQ:function(n,e){n.exports=function(n){if(Array.isArray(n))return n}},xt6W:function(n,e,t){var r=t("amH4");n.exports=Array.isArray||function(n){return"Array"==r(n)}},z84I:function(n,e,t){"use strict";var r=t("ax0f"),i=t("0FSu").map,o=t("GJtw"),a=t("znGZ"),l=o("map"),c=a("map");r({target:"Array",proto:!0,forced:!l||!c},{map:function(n){return i(this,n,arguments.length>1?arguments[1]:void 0)}})},znGZ:function(n,e,t){var r=t("1Mu/"),i=t("ct80"),o=t("8aeu"),a=Object.defineProperty,l={},c=function(n){throw n};n.exports=function(n,e){if(o(l,n))return l[n];e||(e={});var t=[][n],s=!!o(e,"ACCESSORS")&&e.ACCESSORS,u=o(e,0)?e[0]:c,f=o(e,1)?e[1]:void 0;return l[n]=!!t&&!i((function(){if(s&&!r)return!0;var n={length:-1};s?a(n,1,{enumerable:!0,get:c}):n[1]=1,t.call(n,u,f)}))}}},[["1QAi",0,1,2,3,5,4]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[94],{"91IA":function(n,e,t){},I5Kg:function(n,e,t){"use strict";t.r(e),t.d(e,"meta",(function(){return f})),t.d(e,"default",(function(){return m}));var i=t("cxan"),o=t("HbGN"),a=t("ERkP"),r=t.n(a),l=t("ZVZ0"),c=t("Qi1R"),s=t("sob3"),u=function(n){var e=n.open,t=n.position,i=n.children;return r.a.createElement(s.a,{open:e,position:t,slidingPanelPositionFixed:!0,showSlidingPanelBorder:!0},i)};u.defaultProps={open:!0,position:"bottom",children:null};var d=u,p=t("SP0Y"),f=(r.a.createElement,{name:"Sticky"}),b={meta:f};function m(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(l.a)("wrapper",Object(i.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(l.a)("p",null,"This component is used inside other components, such as Drawer. Please do not use it directly."),Object(l.a)("div",null,Object(l.a)(c.b,{code:"() => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <>\n      <Button onClick={() => setOpen(!open)}>Open Sticky</Button>\n      <Sticky open={open} position={'bottom'} fullParentWidth={true}>\n        <div className={'d-flex justify-content-start align-items-start flex-wrap p-x-4 p-y-4'}>\n          <Button onClick={() => setOpen(!open)}>Close Sticky</Button>\n        </div>\n      </Sticky>\n    </>\n  );\n};\n",scope:{Sticky:d,Button:p.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(l.a)(c.a,{componentName:"Sticky",mdxType:"GeneratePropsTable"})))}m.isMDXComponent=!0},SP0Y:function(n,e,t){"use strict";var i=t("97Jx"),o=t.n(i),a=t("m3Bd"),r=t.n(a),l=t("ERkP"),c=t.n(l),s=t("O94r"),u=t.n(s),d=(t("j+zR"),t("s+Iv")),p=(t("91IA"),{PRIMARY:"primary",PAY:"pay",SECONDARY:"secondary",DANGER:"danger",LINK:"link"}),f=t("VehP"),b=function(n){var e=n.className,t=n.block,i=n.children,a=n.disabled,l=n.htmlType,s=n.loading,b=n.size,m=n.type,y=r()(n,["className","block","children","disabled","htmlType","loading","size","type"]),S=u()("btn btn-".concat(b),"np-btn np-btn-".concat(b),{"btn-loading":s,"btn-primary":m===p.PRIMARY,"btn-success":m===p.PAY,"btn-default":m===p.SECONDARY,"btn-danger":m===p.DANGER,"btn-link":m===p.LINK,"btn-block np-btn-block":t},e);return Object(d.b)("Button has deprecated the `Button.Size.EXTRA_SMALL` value for the `size` prop. Please use Button.Size.SMALL instead.",b===f.a.EXTRA_SMALL),c.a.createElement("button",o()({type:l,className:S,disabled:a||s},y),i,s&&c.a.createElement("span",{className:u()("btn-loader",{"m-l-2":!t})}))};b.Type=p,b.Size={EXTRA_SMALL:f.a.EXTRA_SMALL,SMALL:f.a.SMALL,MEDIUM:f.a.MEDIUM,LARGE:f.a.LARGE},b.defaultProps={className:null,size:b.Size.MEDIUM,type:b.Type.PRIMARY,disabled:!1,block:!1,loading:!1,htmlType:"button"};e.a=b},f4p7:function(n,e,t){"use strict";var i=t("ct80");n.exports=function(n,e){var t=[][n];return!!t&&i((function(){t.call(null,e||function(){throw 1},1)}))}},"j+zR":function(n,e){n.exports=function(n,e){return function(t,i,o){if("function"!==typeof n)return new Error("Invalid react-required-if prop type supplied to "+o+". Validation failed.");if("function"!==typeof e)return new Error("Invalid react-required-if condition supplied to "+o+". Validation failed.");var a=e(t)?n.isRequired:n;return a.apply(this,arguments)}}},"s+Iv":function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return o}));t("vrRf");function i(e){var t,i;0<=["development","test"].indexOf(null===(t=n)||void 0===t||null===(i=t.env)||void 0===i?void 0:"production")&&console.warn(e)}function o(n,e){e&&i(n)}}).call(this,t("F63i"))},sob3:function(n,e,t){"use strict";var i=t("97Jx"),o=t.n(i),a=t("m3Bd"),r=t.n(a),l=t("ERkP"),c=t.n(l),s=t("O94r"),u=t.n(s),d=t("05Xt"),p=(t("yiBs"),function(n){var e=n.open,t=n.position,i=n.children,a=n.slidingPanelPositionFixed,l=n.showSlidingPanelBorder,s=r()(n,["open","position","children","slidingPanelPositionFixed","showSlidingPanelBorder"]);return c.a.createElement(d.a,o()({},s,{in:e,timeout:{enter:0,exit:350},classNames:u()("sliding-panel--open-".concat(t),l&&"sliding-panel--border-".concat(t),{"sliding-panel--fixed":a},"sliding-panel"),appear:!0,unmountOnExit:!0}),c.a.createElement("div",{className:"sliding-panel"},i))});p.defaultProps={open:!1,slidingPanelPositionFixed:!1,showSlidingPanelBorder:!1,position:"left",children:null},e.a=p},vrRf:function(n,e,t){"use strict";var i=t("ax0f"),o=t("H17f").indexOf,a=t("f4p7"),r=t("znGZ"),l=[].indexOf,c=!!l&&1/[1].indexOf(1,-0)<0,s=a("indexOf"),u=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!s||!u},{indexOf:function(n){return c?l.apply(this,arguments)||0:o(this,n,arguments.length>1?arguments[1]:void 0)}})},yiBs:function(n,e,t){},yu9r:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/internal/Sticky",function(){return t("I5Kg")}])},znGZ:function(n,e,t){var i=t("1Mu/"),o=t("ct80"),a=t("8aeu"),r=Object.defineProperty,l={},c=function(n){throw n};n.exports=function(n,e){if(a(l,n))return l[n];e||(e={});var t=[][n],s=!!a(e,"ACCESSORS")&&e.ACCESSORS,u=a(e,0)?e[0]:c,d=a(e,1)?e[1]:void 0;return l[n]=!!t&&!o((function(){if(s&&!i)return!0;var n={length:-1};s?r(n,1,{enumerable:!0,get:c}):n[1]=1,t.call(n,u,d)}))}}},[["yu9r",0,1,2,3,5,9,4]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[43],{R3li:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t("ERkP"),s=t.n(o),a=t("3g/d"),r=t("+KRd"),i=s.a.createElement,l={name:"April Release",date:"2021-04-30",authors:[{name:"Anton Dozortsev",githubUsername:"dozortsev"}],version:{components:"36.0.0",css:"9.1.0"},tags:["Typescript"]};function p(){return i("div",{className:"m-t-2"},"This release introduced TypeScript types for ",i("code",null,"@transferwise/components"),", and adds the ability to write components in TypeScript \ud83c\udf89 To do this we had to refactor how we expose prop values on components - more in the breaking changes section below.",i("h2",{className:"m-t-3 m-b-1"},"Features"),i("h3",{className:"m-b-1"},"Types"),i("p",null,"The package now provides types for almost all components (with a few exceptions - see the bottom of the page). Even though all components are written in JavaScript we have found a way to provide pretty accurate (~90%) types using"," ",i("a",{href:"https://www.npmjs.com/package/react-to-typescript-definitions"},"react-to-typescript-definitions"),", a tool which generates"," ",i("a",{href:"https://www.typescriptlang.org/docs/handbook/2/type-declarations.html"},"type declarations")," ","based on ",i("a",{href:"https://reactjs.org/docs/typechecking-with-proptypes.html"},"PropTypes"),"."),i("h3",{className:"m-b-1"},"JSDoc"),i("p",null,"With the addition of types, we now have some awesome ",i("a",{href:"https://jsdoc.app/"},"JSDoc")," support. You should now be able to see documentation for anything that has it by hovering over a component instance or its props in VSCode."),i("h3",{className:"m-b-1"},"TypeScript Support"),i("p",null,"We have added the ability to write components in TypeScript in ",i("code",null,"@transferwise/components"),". Code will be transpiled using Babel and types generated using TSC. We welcome contributions in TypeScript"),i("p",null,"Because we are using ",i("code",null,"react-to-typescript-definitions")," to generate types for JS files, if you make a contribution in JS, please read our new ",i("a",{href:"https://github.com/transferwise/neptune-web/blob/main/packages/components/CONTRIBUTING.md#js-component-rules"},"contribution guidelines for JS components")," to ensure types are generated correctly."),i("h2",{id:"breaking-changes",className:"m-t-3 m-b-1"},"Breaking Changes and Deprecations"),i("h3",{className:"m-b-1"},"Component enums"),i(a.a,{className:"m-y-2",message:"Breaking change",type:r.a.NEGATIVE}),i("p",null,"For accurate type generation we had to change the way we expose enumerated values for components. The pattern we used to follow was to expose them as static props on the component - for example ",i("code",null,"Alert.Size.SMALL"),". We will now expose the enums via an object which must be imported separately. ",i("b",null,"This is big change.")," We have written an upgrade script to make upgrading easier - see the upgrade guide below."),i("h4",{className:"m-b-1"},"Before"),i("pre",null,"import { Alert, Popover, Button } from '@transferwise/components';\n\n<Alert size={Alert.Size.SMALL} />\n<Popover preferredPlacement={Popover.Placement.TOP} />\n<Button type={Button.Type.POSITIVE} />"),i("h4",{className:"m-b-1"},"After"),i("pre",null,'import { Alert, Popover, Button, Size, Position, Sentiment } from \'@transferwise/components\';\n\n<Alert size={Size.SMALL} />\n<Popover preferredPlacement={Position.TOP} />\n<Button type={Sentiment.POSITIVE} />\n\n// Raw values can also be used although we don\'t recommend it\n<Alert size="sm" />\n<Popover preferredPlacement="top" />\n<Logo type="positive" />\n'),i("h4",{id:"reasons-for-enums"},"The use of the exposed enums is encouraged for a couple of reasons:"),i("ul",null,i("li",null,"You can avoid unnecessary duplication by using the enums we expose in your own code"),i("li",null,"Using consistent values across apps helps reduce confusion (e.g. avoiding the use of both ",i("code",null,"top_left")," and ",i("code",null,"left_up"),") and bugs (e.g. by using consistent constants for ",i("code",null,"Breakpoint"),")."),i("li",null,"If there is documentation available (and you're using TS), you'll see it")),i("h2",{id:"migration-checklist"},"Upgrade guide"),i("ol",null,i("li",null,"Make sure all your dependencies have migrated to this version or higher version of components (36.x)"),i("li",null,"Delete any custom type declarations that you have for ",i("code",null,"@transferwise/components")," from"," ",i("code",null,"global.d.ts")," / ",i("code",null,"declarations.d.ts")," etc"),i("li",null,"Run the provided code mod",i("pre",null,"$ yarn run neptune-upgrade-util\n? \u2728 Which upgrade would you like to run?\n...\n\u25b6 2021-04-v35-36-typescript-support.js")),i("li",null,"If you have ESLint enabled for TypeScript files, search for ",i("code",null,"eslint-disable-*"),"comments with the following rules in your code. They may not be needed any more.",i("ul",null,i("li",null,i("a",{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md"},i("code",null,"@typescript-eslint/no-unsafe-assignment"))),i("li",null,i("a",{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md"},i("code",null,"@typescript-eslint/no-unsafe-member-access")))))),i("h4",{className:"m-b-1"},"For TypeScript projects"),i("ul",null,i("li",null,i("p",null,"Translations and utils are now exported from the package. The warning generated by the TS compiler can be fixed by changing to the new syntax."),i("h5",{className:"m-b-1"},"Before"),i("pre",null,"import componentTranslations from '@transferwise/components/build/i18n';\nimport { getLangFromLocale } from '@transferwise/components/build/es/polyfill/common/locale';"),i("h5",{className:"m-b-1"},"After"),i("pre",null,"import { translations, getLangFromLocale } from '@transferwise/components';")),i("li",null,"If TypeScript complains about incorrect prop types being passed into a component but you're sure the value is right, please let us know."),i("li",null,"You might find some redundant props that have been deleted in previous releases (for example ",i("code",null,"locale"),"). You can safely delete these.")),i("h2",{className:"m-b-1"},"Missing types"),i("p",null,"These components are missing types: ",i("code",null,"Upload"),", ",i("code",null,"MoneyInput"),", ",i("code",null,"Dimmer")," and ",i("code",null,"Snackbar"),". This is because they use higher-order components, and the type generator we use doesn't parse them correctly. We will look at fixing this in a subsequent release."))}},efPU:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2021-04-30-april-release",function(){return t("R3li")}])}},[["efPU",0,1,2,3]]]);
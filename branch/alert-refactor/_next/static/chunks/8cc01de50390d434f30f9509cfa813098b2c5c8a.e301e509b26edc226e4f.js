(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"9Nsj":function(e,t,n){},"E/ZA":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,l=parseInt,i="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=i||u||Function("return this")(),s=Object.prototype.toString,p=Math.max,d=Math.min,h=function(){return c.Date.now()};function f(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(f(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=f(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var i=o.test(e);return i||r.test(e)?l(e.slice(2),i?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var a,o,r,l,i,u,c=0,s=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=a,r=o;return a=o=void 0,c=t,l=e.apply(r,n)}function w(e){return c=e,i=setTimeout(E,t),s?b(e):l}function g(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=r}function E(){var e=h();if(g(e))return S(e);i=setTimeout(E,function(e){var n=t-(e-u);return v?d(n,r-(e-c)):n}(e))}function S(e){return i=void 0,y&&a?b(e):(a=o=void 0,l)}function N(){var e=h(),n=g(e);if(a=arguments,o=this,u=e,n){if(void 0===i)return w(u);if(v)return i=setTimeout(E,t),b(u)}return void 0===i&&(i=setTimeout(E,t)),l}return t=m(t)||0,f(n)&&(s=!!n.leading,r=(v="maxWait"in n)?p(m(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),N.cancel=function(){void 0!==i&&clearTimeout(i),c=0,a=u=o=i=void 0},N.flush=function(){return void 0===i?l:S(h())},N}}).call(this,n("lpmq"))},"LZe/":function(e,t,n){},gxmQ:function(e,t,n){},kXS8:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return Z})),n.d(t,"default",(function(){return G}));var a=n("cxan"),o=n("HbGN"),r=n("ERkP"),l=n.n(r),i=n("ZVZ0"),u=n("Qi1R"),c=(n("2G9S"),n("DfhM"),n("LW0h"),n("vrRf"),n("7xRU"),n("z84I"),n("M+/F"),n("5BYb"),n("ho0z"),n("7x/C"),n("OZaJ"),n("iKE+"),n("KqXw"),n("DZ+c"),n("Ysgh"),n("tVqn"),n("97Jx")),s=n.n(c),p=n("RhWx"),d=n.n(p),h=n("VrFO"),f=n.n(h),m=n("Y9Ll"),v=n.n(m),y=n("1Pcy"),b=n.n(y),w=n("5Yy7"),g=n.n(w),E=n("N+ot"),S=n.n(E),N=n("AuHH"),O=n.n(N),x=n("KEM+"),C=n.n(x),k=n("E/ZA"),F=n.n(k),D=n("hyBr"),I=n.n(D),R=n("O94r"),P=n.n(R),T=n("/Vl7"),j=n("6gor");function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=O()(e);if(t){var o=O()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return S()(this,n)}}var q=function(e){function t(){var e;return f()(this,t),e=n.call(this),C()(b()(e),"recalculateWidth",(function(){requestAnimationFrame((function(){e.setState({inputWidth:Math.max(10,e.sizerRef.scrollWidth+10)})}))})),C()(b()(e),"renderInput",(function(){var t=e.props,n=t.typeaheadId,a=t.autoFocus,o=t.multiple,r=t.name,i=t.optionsShown,u=t.placeholder,c=t.selected,s=t.value,p=t.onChange,d=t.onKeyDown,h=t.onFocus,f=t.onPaste,m=t.autoComplete,v=e.state.inputWidth,y=!o||0===c.length;return l.a.createElement("input",{className:P()({"typeahead__input form-control":o,"form-control":!o}),type:"text",ref:function(t){e.inputRef=t},name:r,id:"input-".concat(n),autoFocus:a,placeholder:y?u:"",onChange:p,onKeyDown:d,onClick:h,onFocus:h,onPaste:f,"aria-autocomplete":"list","aria-expanded":i,"aria-haspopup":"listbox","aria-controls":"menu-".concat(n),autoComplete:m,role:"combobox",value:s,style:o&&0<c.length?{width:v}:{}})})),e.state={inputWidth:10},e}g()(t,e);var n=M(t);return v()(t,[{key:"componentDidMount",value:function(){this.props.autoFocus&&this.inputRef.focus()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.props.multiple&&this.recalculateWidth()}},{key:"render",value:function(){var e=this,t=this.props,n=t.multiple,a=t.selected,o=t.value,r=t.maxHeight,i=t.renderChip;return n?l.a.createElement("div",{className:"form-control typeahead__input-container",onClick:function(){e.inputRef.focus()},style:r&&{maxHeight:r}},l.a.createElement("div",{className:"typeahead__input-wrapper"},a&&a.map((function(e,t){return i(e,t)})),this.renderInput(),l.a.createElement("div",{className:"typeahead__input-aligner"})),l.a.createElement("div",{ref:function(t){e.sizerRef=t},className:"sizer form-control typeahead__input"},o)):this.renderInput()}}]),t}(r.Component);q.defaultProps={autoFocus:!1,maxHeight:null,placeholder:"",optionsShown:!1,selected:[]};n("LZe/");var V=function(e){var t=e.option,n=e.selected,a=e.onClick,o=e.query,r=t.label,i=t.note,u=t.secondary;return l.a.createElement("li",{role:"option","aria-selected":"false",className:P()("typeahead__option tw-dropdown-item tw-dropdown-item--clickable",{"tw-dropdown-item--focused":n})},l.a.createElement("a",{className:"dropdown-item",href:"#",onClick:a},l.a.createElement("span",null,function(e,t){if(e&&t){var n=e.toUpperCase().indexOf(t.trim().toUpperCase()),a=n+t.trim().length;if(-1!==n)return l.a.createElement(l.a.Fragment,null,e.substring(0,n),l.a.createElement("strong",null,e.substring(n,a)),e.substring(a))}return e}(r,o)),i&&l.a.createElement("span",{className:"small m-l-1"},i),u&&l.a.createElement("span",{className:"small text-ellipsis"},u)))};V.defaultProps={selected:!1,query:"",onClick:function(){}};var _=V,A=n("3g/d"),W=n("znXw"),z=n("XksX"),B=(n("gxmQ"),n("VehP")),H=n("PFiD");function K(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=O()(e);if(t){var o=O()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return S()(this,n)}}var L=function(e){function t(e){var a;f()(this,t),a=n.call(this,e),C()(b()(a),"handleOnFocus",(function(){var e=a.props.onFocus;a.showMenu(),e&&a.props.onFocus()})),C()(b()(a),"onOptionSelected",(function(e,t){e.preventDefault(),a.selectItem(t)})),C()(b()(a),"handleOnChange",(function(e){var t=a.state,n=t.optionsShown,o=t.selected,r=a.props,l=r.multiple,i=r.onInputChange;n||a.showMenu();var u=e.target.value;!l&&0<o.length&&a.updateSelectedValue([]),a.setState({query:u},(function(){a.handleSearchDebounced(u),i&&i(u)}))})),C()(b()(a),"handleOnPaste",(function(e){var t=a.props,n=t.allowNew,o=t.multiple,r=t.chipSeparators,l=a.state.selected;if(n&&o&&0<r.length){e.preventDefault();var i=e.clipboardData.getData("text");if(i){var u=new RegExp(r.join("|")),c=i.split(u).map((function(e){return{label:e.trim()}})).filter((function(e){return e.label}));a.updateSelectedValue([].concat(d()(l),d()(c)))}}})),C()(b()(a),"handleOnKeyDown",(function(e){var t=a.props,n=t.showSuggestions,o=t.allowNew,r=t.multiple,l=t.chipSeparators,i=t.options,u=a.state,c=u.keyboardFocusedOptionIndex,s=u.query,p=u.selected;if(!n&&o&&r&&-1!==["Enter","Tab"].concat(d()(l)).indexOf(e.key)&&s.trim())e.preventDefault(),a.selectItem({label:s});else switch(e.keyCode){case j.a.DOWN:e.preventDefault(),a.moveFocusedOption(1);break;case j.a.UP:e.preventDefault(),a.moveFocusedOption(-1);break;case j.a.ENTER:e.preventDefault(),i[c]?a.selectItem(i[c]):o&&s.trim()&&a.selectItem({label:s});break;case j.a.BACKSPACE:r&&!s&&0<p.length&&a.updateSelectedValue(p.slice(0,-1))}})),C()(b()(a),"selectItem",(function(e){var t,n=a.props.multiple,o=d()(a.state.selected);n?(o.push(e),t=""):(o=[e],t=e.label),a.updateSelectedValue(o),a.hideMenu(),a.setState({query:t})})),C()(b()(a),"stopPropagation",(function(e){e.stopPropagation(),e.preventDefault(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()})),C()(b()(a),"handleSearch",(function(e){var t=a.props.onSearch;t&&t(e),a.setState((function(e){return{keyboardFocusedOptionIndex:null===e.keyboardFocusedOptionIndex?null:0}}))})),C()(b()(a),"handleDocumentClick",(function(){if(a.state.optionsShown){a.hideMenu();var e=a.props,t=e.allowNew,n=e.onBlur,o=e.autoFillOnBlur,r=a.state.query;a.setState({isFocused:!1}),t&&o&&r.trim()&&a.selectItem({label:r}),n&&n()}})),C()(b()(a),"showMenu",(function(){a.setState({isFocused:!0,optionsShown:!0},(function(){Object(z.a)(),document.addEventListener("click",a.handleDocumentClick,!1)}))})),C()(b()(a),"hideMenu",(function(){a.setState({optionsShown:!1,keyboardFocusedOptionIndex:null},(function(){Object(z.b)(),document.removeEventListener("click",a.handleDocumentClick,!1)}))})),C()(b()(a),"updateSelectedValue",(function(e){var t=a.props,n=t.onChange,o=t.validateChip,r=e.some((function(e){return!o(e)}));a.setState({selected:e,errorState:r},(function(){n(e)}))})),C()(b()(a),"clear",(function(e){e.preventDefault(),0<a.state.selected.length&&a.updateSelectedValue([]),a.setState({query:""})})),C()(b()(a),"removeChip",(function(e){var t=a.state.selected;0<t.length&&a.updateSelectedValue(d()(t.filter((function(t){return t!==e}))))})),C()(b()(a),"renderChip",(function(e,t){var n=a.props.validateChip(e);return l.a.createElement(W.a,{key:t,hasError:!n,label:e.label,onRemove:function(){return a.removeChip(e)}})})),C()(b()(a),"renderMenu",(function(e){var t=e.footer,n=e.options,o=e.id,r=e.keyboardFocusedOptionIndex,i=e.query,u=e.allowNew,c=e.showNewEntry,s=e.dropdownOpen,p=d()(n);return u&&i.trim()&&n.every((function(e){return e.label.trim().toUpperCase()!==i.trim().toUpperCase()}))&&c&&p.push({label:i}),l.a.createElement("div",{className:P()("dropdown btn-group btn-block",{open:s}),id:"menu-".concat(o)},l.a.createElement("ul",{className:"dropdown-menu",role:"menu","aria-labelledby":"dropdownMenu1"},p.map((function(e,t){return l.a.createElement(_,{key:"".concat(e.label).concat(t.toString()),query:i,option:e,selected:r===t,onClick:function(t){a.onOptionSelected(t,e)}})})),t))}));var o=e.searchDelay,r=e.initialValue,i=e.multiple;a.handleSearchDebounced=F()(a.handleSearch,o);var u=!i&&0<r.length?r[0].label:"";return a.state={selected:r,errorState:!1,query:u,keyboardFocusedOptionIndex:null},a}g()(t,e);var n=K(t);return v()(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.multiple!==this.props.multiple&&this.setState((function(t){var n=t.selected;return!e.multiple&&0<n.length?{query:n[0].label,selected:[n[0]]}:{query:""}}))}},{key:"componentWillUnmount",value:function(){this.handleSearchDebounced.cancel()}},{key:"moveFocusedOption",value:function(e){var t=this;this.setState((function(n){var a=n.keyboardFocusedOptionIndex,o=t.props.options,r=0;return null!==a&&(r=I()(a+e,0,o.length-1)),{keyboardFocusedOptionIndex:r}}))}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.placeholder,a=e.multiple,o=e.size,r=e.addon,i=e.name,u=e.clearable,c=e.allowNew,p=e.footer,d=e.showSuggestions,h=e.showNewEntry,f=e.options,m=e.minQueryLength,v=e.autoFocus,y=e.maxHeight,b=e.alert,w=e.inputAutoComplete,g=this.state,E=g.errorState,S=g.query,N=g.selected,O=g.optionsShown,x=g.keyboardFocusedOptionIndex,C=u&&(S||0<N.length),k=O&&d&&S.length>=m,F=this.renderMenu({footer:p,options:f,keyboardFocusedOptionIndex:x,query:S,allowNew:c,showNewEntry:h,dropdownOpen:k}),D=function(e){return 0<=[A.a.Type.ERROR,A.a.Type.NEGATIVE].indexOf(e)},I=E||b&&D(b.type),R=!E&&b||b&&D(b.type),j=R&&b.type===A.a.Type.WARNING;return l.a.createElement("div",{id:t,className:P()("typeahead","typeahead-".concat(o),{"typeahead--has-value":0<N.length,"typeahead--empty":0===N.length,"typeahead--multiple":a,open:k}),onClick:this.stopPropagation},l.a.createElement("div",{className:P()("form-group",{"has-error":I,"has-warning":j})},l.a.createElement("div",{className:"input-group input-group-".concat(o)},r&&l.a.createElement("span",{className:"input-group-addon"},r),l.a.createElement(q,s()({autoFocus:v,multiple:a,optionsShown:O,placeholder:n,selected:N,maxHeight:y},{name:i,value:S,typeaheadId:t,renderChip:this.renderChip,onChange:this.handleOnChange,onKeyDown:this.handleOnKeyDown,onFocus:this.handleOnFocus,onPaste:this.handleOnPaste,autoComplete:w})),C&&l.a.createElement("div",{className:"input-group-addon"},l.a.createElement("button",{type:"button",className:"btn-unstyled",onClick:this.clear},l.a.createElement(T.i,null)))),R&&l.a.createElement(A.a,{type:b.type,message:b.message}),F))}}]),t}(r.Component);C()(L,"Size",B.a),C()(L,"Type",H.a),L.defaultProps={allowNew:!1,autoFocus:!1,clearable:!0,multiple:!1,maxHeight:null,showSuggestions:!0,showNewEntry:!0,searchDelay:200,minQueryLength:3,addon:null,placeholder:null,alert:null,footer:null,size:L.Size.MEDIUM,chipSeparators:[],initialValue:[],onSearch:null,onBlur:null,onInputChange:null,onFocus:null,validateChip:function(){return!0},inputAutoComplete:"new-password",autoFillOnBlur:!0};var U=L,Z=(l.a.createElement,{name:"Typeahead"}),X={meta:Z};function G(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},X,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)(u.b,{code:"() => {\n  const [options, setOptions] = React.useState([\n    {\n      label: 'A thing',\n      note: 'with a note',\n    },\n    {\n      label: 'Another thing',\n      secondary: 'with secondary text this time',\n    },\n    {\n      label: 'Profile',\n    },\n    {\n      label: 'Globe',\n    },\n    {\n      label: 'British pound',\n    },\n    {\n      label: 'Euro',\n    },\n    {\n      label: 'Something else',\n    },\n  ]);\n  const multiple = false;\n  const showNewEntry = false;\n  const allowNew = true;\n  const validateChip =\n    multiple && allowNew\n      ? (option) =>\n          /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test(\n            option.label,\n          )\n      : undefined;\n\n  return (\n    <Typeahead\n      id=\"typeahead\"\n      name=\"typeahead-input-name\"\n      size=\"md\"\n      maxHeight={100}\n      footer={<div>Want a footer? Style it!</div>}\n      multiple={multiple}\n      clearable={false}\n      allowNew={allowNew}\n      showSuggestions\n      placeholder=\"placeholder\"\n      chipSeparators={[',', ' ']}\n      validateChip={validateChip}\n      alert={{ message: 'alert message', type: 'success' }}\n      onSearch={() => {\n        setTimeout(() => setOptions(options), 1500);\n      }}\n      showNewEntry={showNewEntry}\n      onChange={() => {}}\n      addon={<SearchIcon />}\n      onBlur={() => {}}\n      options={options}\n    />\n  );\n};\n",scope:{Typeahead:U,SearchIcon:T.u},display:"vertical",mdxType:"LiveEditorBlock"}),Object(i.a)(u.a,{componentName:"Typeahead",mdxType:"GeneratePropsTable"}))}G.isMDXComponent=!0},mVF9:function(e,t,n){var a=n("ct80"),o=n("+/eK");e.exports=function(e){return a((function(){return!!o[e]()||"\u200b\x85\u180e"!="\u200b\x85\u180e"[e]()||o[e].name!==e}))}},tVqn:function(e,t,n){"use strict";var a=n("ax0f"),o=n("Ya2h").trim;a({target:"String",proto:!0,forced:n("mVF9")("trim")},{trim:function(){return o(this)}})},znXw:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),r=n("O94r"),l=n.n(r),i=n("/Vl7"),u=(n("9Nsj"),function(e){var t=e.className,n=e.hasError,a=e.label,r=e.onRemove;return o.a.createElement("div",{className:l()("chip",{"has-error":n},t)},a,o.a.createElement("button",{type:"button",className:"btn-unstyled chip-remove m-l-2",onClick:r},o.a.createElement(i.i,null)))});u.defaultProps={className:"",hasError:!1},t.a=u}}]);
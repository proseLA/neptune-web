(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"0jyW":function(e,a,t){"use strict";t.r(a),t.d(a,"meta",(function(){return $})),t.d(a,"default",(function(){return ae}));var n,o,c=t("cxan"),s=t("HbGN"),r=t("ERkP"),p=t.n(r),l=t("ZVZ0"),i=t("97Jx"),d=t.n(i),m=t("RhWx"),u=t.n(m),N=t("KEM+"),b=t.n(N),O=t("ddV6"),j=t.n(O),f=t("m3Bd"),k=t.n(f),E=(t("+KXO"),t("1t7P"),t("daRM"),t("+oxZ"),t("FtHn"),t("LW0h"),t("z84I"),t("ho0z"),t("2G9S"),t("7xRU"),t("kQwz")),y=t("O94r"),v=t.n(y),g=t("0Q6q"),h=t("VMOe"),D=t("uIuh"),I=t("ofpN"),w=t("i8wB"),C=t("GAp3"),F=t("SP0Y"),T=t("/Vl7");(o=n||(n={})).PDF=".pdf,application/pdf",o.JPG=".jpg,.jpeg,image/jpeg",o.PNG=".png,image/png",o.CSV=".csv,text/csv";var x,S=[n.PDF,n.JPG,n.PNG],U=(t("KqXw"),t("Ysgh"),t("jQ3i"),t("x4t0"),t("MvUL"),function(e){return e.map((function(e){return e.split(",").filter((function(e){return!e.includes("/")})).map((function(e){return e.replace(".","").toUpperCase()})).join(", ")}))}),P=t("BAoe"),B=Object(P.a)({uploadFile:{id:"neptune.UploadButton.uploadFile"},uploadFiles:{id:"neptune.UploadButton.uploadFiles"},instructions:{id:"neptune.UploadButton.instructions"},allFileTypes:{id:"neptune.UploadButton.allFileTypes"},dropFile:{id:"neptune.UploadButton.dropFiles"}});t("SlwH");!function(e){e.uploadInputLabel="uploadInputLabel",e.uploadInput="uploadInput",e.mediaBody="mediaBody"}(x||(x={}));var M,A=function(e){var a=e.disabled,t=e.multiple,n=e.fileTypes,o=void 0===n?S:n,c=e.sizeLimit,s=void 0===c?5e3:c,l=e.onChange,i=Object(D.a)().isRTL,m=Object(E.a)().formatMessage,u=Object(r.useState)(!1),N=j()(u,2),b=N[0],O=N[1],f=Object(r.useRef)(0),k=Array.isArray(o)?U(o).join(", "):"*"===o?o:U([o]).join(", "),y="*"===k,g=y?m(B.allFileTypes):k,h=Array.isArray(o)?o.join(","):o;return p.a.createElement("div",d()({className:v()("np-upload-button-container","droppable",{"droppable-dropping":b})},!a&&{onDragEnter:function(e){e.preventDefault(),++f.current,1===f.current&&O(!0)},onDragLeave:function(e){e.preventDefault(),--f.current,0===f.current&&O(!1)},onDrop:function(e){e.preventDefault(),f.current=0,O(!1),e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0]&&l(e.dataTransfer.files)},onDragOver:function(e){e.preventDefault()}}),p.a.createElement("input",d()({id:"np-upload-button",type:"file"},!y&&{accept:h},t&&{multiple:!0},{className:"tw-droppable-input",disabled:a,name:"file-upload",onChange:function(e){var a=e.target.files;a&&l(a)},"data-testid":x.uploadInput})),p.a.createElement("label",{htmlFor:"np-upload-button","data-testid":x.uploadInputLabel,className:v()("btn","np-upload-accent","np-upload-button",{disabled:a})},p.a.createElement("div",{className:"media"},p.a.createElement("div",{className:v()("np-upload-icon",{"media-right":i,"media-left":!i})},p.a.createElement(T.C,{size:24,className:"text-link"})),p.a.createElement("div",{className:v()("media-body","p-r-3",{"text-xs-right":i,"text-xs-left":!i}),"data-testid":x.mediaBody},p.a.createElement("div",null,m(t?B.uploadFiles:B.uploadFile)),p.a.createElement("small",{className:v()("np-upload-description",{"text-primary":!a})},m(B.instructions,{fileTypes:g,size:Math.round(s/1e3)}))))),b&&p.a.createElement("div",{className:"droppable-card droppable-dropping-card droppable-card-content"},p.a.createElement(T.y,{filled:!0,size:24,className:"text-info m-x-1"}),p.a.createElement("div",{className:"text-info"},m(B.dropFile))))},L=t("T0aG"),G=t.n(L),_=(t("jQ/y"),t("4aUP")),R=t("VehP"),z=Object(P.a)({uploadingFailed:{id:"neptune.UploadItem.uploadingFailed"},uploaded:{id:"neptune.UploadItem.uploaded"},uploading:{id:"neptune.UploadItem.uploading"},deleting:{id:"neptune.UploadItem.deleting"},uploadedFile:{id:"neptune.UploadItem.uploadedFile"},removeFile:{id:"neptune.UploadItem.removeFile"}}),H=(t("dSCB"),function(e){var a=e.children,t=e.url;return t?p.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},a):p.a.createElement("div",null,a)});!function(e){e.uploadItem="uploadItem",e.mediaBody="mediaBody",e.title="title",e.description="description",e.deleteButton="deleteButton",e.progressIcon="progressIcon",e.successIcon="successIcon",e.errorIcon="errorIcon"}(M||(M={}));var V=[g.a.PENDING,g.a.PROCESSING],X=function(e){var a=e.file,t=e.onDelete,n=Object(D.a)().isRTL,o=Object(E.a)().formatMessage,c=a.status,s=a.filename,r=a.error,l=a.url,i=[g.a.SUCCEEDED,void 0].includes(c)&&!!l;return p.a.createElement("div",{className:v()("np-upload-item",{"np-upload-item__link":i}),"data-testid":M.uploadItem},p.a.createElement("div",{className:"np-upload-item__container"},p.a.createElement(H,{url:i?l:void 0},p.a.createElement("div",{className:"np-upload-button"},p.a.createElement("div",{className:"media"},p.a.createElement("div",{className:v()("np-upload-icon",{"media-right":n,"media-left":!n})},function(){if(r||c===g.a.FAILED)return p.a.createElement(T.b,{size:24,"data-testid":M.errorIcon,className:"text-danger"});var e;switch(c){case g.a.PROCESSING:case g.a.PENDING:e=p.a.createElement(_.a,{size:R.a.EXTRA_SMALL,status:g.a.PROCESSING,"data-testid":M.progressIcon});case g.a.SUCCEEDED:case g.a.DONE:default:e=p.a.createElement(_.a,{size:R.a.EXTRA_SMALL,status:g.a.SUCCEEDED,"data-testid":M.successIcon})}return p.a.createElement("span",{style:{transform:"scale(0.8335)"}},e)}()),p.a.createElement("div",{className:v()("media-body",{"text-xs-right":n,"text-xs-left":!n}),"data-testid":M.mediaBody},p.a.createElement("div",{className:"text-primary","data-testid":M.title},s||o(z.uploadedFile)),p.a.createElement("small",{className:"np-upload-description text-primary","data-testid":M.description},function(){if(r||c===g.a.FAILED)return p.a.createElement("span",{className:"text-danger"},"object"===G()(r)&&r.message||r||o(z.uploadingFailed));switch(c){case g.a.PENDING:return p.a.createElement("span",null,o(z.uploading));case g.a.PROCESSING:return p.a.createElement("span",null,o(z.deleting));case g.a.SUCCEEDED:case g.a.DONE:default:return p.a.createElement("span",{className:"text-success"},o(z.uploaded))}}()))))),t&&(!c||!V.includes(c))&&p.a.createElement("button",{"aria-label":o(z.removeFile,{filename:a.filename}),className:v()("btn np-upload-item__remove-button",{"media-right":!n,"media-left":n}),"data-testid":M.deleteButton,onClick:function(){return t(a)},type:"button"},p.a.createElement(T.m,{filled:!0,size:16,title:o(z.removeFile,{filename:s})}))))},J=Object(P.a)({fileIsTooLarge:{id:"neptune.UploadInput.fileIsTooLarge"},fileTypeNotSupported:{id:"neptune.UploadInput.fileTypeNotSupported"},deleteModalTitle:{id:"neptune.UploadInput.deleteModalTitle"},deleteModalBody:{id:"neptune.UploadInput.deleteModalBody"},deleteModalCancelButtonText:{id:"neptune.UploadInput.deleteModalCancelButtonText"},deleteModalConfirmButtonText:{id:"neptune.UploadInput.deleteModalConfirmButtonText"}}),Q=(t("sres"),["files","fileInputName","className","onUploadFile","onDeleteFile","deleteModalTitle","deleteModalBody","deleteModalCancelButtonText","deleteModalConfirmButtonText"]);function Y(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function q(e){for(var a,t=1;t<arguments.length;t++)a=null==arguments[t]?{}:arguments[t],t%2?Y(Object(a),!0).forEach((function(t){b()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}));return e}var W=function(e){var a=e.files,t=void 0===a?[]:a,n=e.fileInputName,o=void 0===n?"file":n,c=e.className,s=e.onUploadFile,l=e.onDeleteFile,i=e.deleteModalTitle,m=e.deleteModalBody,N=e.deleteModalCancelButtonText,b=e.deleteModalConfirmButtonText,O=k()(e,Q),f=(Object(D.a)().isRTL,Object(r.useState)(null)),y=j()(f,2),T=y[0],x=y[1],U=O.multiple,P=O.sizeLimit,B=void 0===P?5e3:P,M=O.fileTypes,L=void 0===M?S:M,G=Object(E.a)().formatMessage,_=Object(r.useState)(U||!t.length?t:[t[0]]),R=j()(_,2),z=R[0],H=R[1],V=function(e){H((function(a){return a.filter((function(a){return e!==a&&e.id!==a.id}))}))},Y=function(e,a){H((function(t){return t.map((function(t){return t===e||t.id===e.id?q(q({},e),a):t}))}))},W=function(e){var a=e.id;e.status===g.a.FAILED?V(e):l&&a&&(Y(e,{status:g.a.PROCESSING,error:void 0}),l(a).then((function(){return V(e)})).catch((function(a){Y(e,{error:a})})))};return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:v()("np-upload-input",c)},z.map((function(e){return p.a.createElement(X,{key:e.id,file:e,onDelete:l||e.status===g.a.FAILED?e.status===g.a.FAILED?function(){return W(e)}:function(){return x(e)}:void 0})})),(U||!U&&!z.length)&&p.a.createElement(A,d()({onChange:function(e){for(var a=0;a<e.length;a++){var t=e.item(a),n=new FormData;if(t){var c=function(){var e=t.name,a=t.size,c="".concat(e,"_").concat(a),r=Array.isArray(L)?L.join(","):L;if(!Object(w.a)(t,r))return H((function(a){return[].concat(u()(a),[{id:c,filename:e,status:g.a.FAILED,error:G(J.fileTypeNotSupported)}])})),"continue";if(!Object(I.a)(t,1e3*B))return H((function(a){return[].concat(u()(a),[{id:c,filename:e,status:g.a.FAILED,error:G(J.fileIsTooLarge)}])})),"continue";n.append(o,t);var p={id:c,filename:e,status:g.a.PENDING};return H((function(e){return[].concat(u()(e),[p])})),s(n).then((function(e){var a=e.id,t=e.url,n=e.error;Y(p,{id:a,url:t,error:n,status:g.a.SUCCEEDED})})).catch((function(e){Y(p,{error:e,status:g.a.FAILED})})),U?void 0:"break"}();if("continue"===c)continue;if("break"===c)break}}}},O))),p.a.createElement(C.a,{title:i||G(J.deleteModalTitle),body:m||G(J.deleteModalBody),onClose:function(){x(null)},open:!!T,footer:p.a.createElement(p.a.Fragment,null,p.a.createElement(F.a,{block:!0,onClick:function(){x(null)}},N||G(J.deleteModalCancelButtonText)),p.a.createElement(F.a,{block:!0,priority:h.b.SECONDARY,type:h.a.NEGATIVE,onClick:function(){!T||W(T),x(null)}},b||G(J.deleteModalConfirmButtonText)))}))},K=t("Qi1R"),Z=["components"],$=(p.a.createElement,{name:"UploadInput",badge:{type:"new",expiryDate:"2021-09-15"}}),ee={meta:$};function ae(e){var a=e.components,t=Object(s.a)(e,Z);return Object(l.a)("wrapper",Object(c.a)({},ee,t,{components:a,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Upload one or more files and display the list of already uploaded file with optional link and delete functionality."),Object(l.a)("p",null,"Actual network request can be performed by the API library of your choice (",Object(l.a)("inlineCode",{parentName:"p"},"fetch/axios/api-call"),"). Perform the form submission for each file individually inside ",Object(l.a)("inlineCode",{parentName:"p"},"onFileUpload(formData)")," and return a ",Object(l.a)("inlineCode",{parentName:"p"},"Promise")," with the result that must contain an ",Object(l.a)("inlineCode",{parentName:"p"},"id")," and optionally ",Object(l.a)("inlineCode",{parentName:"p"},"url"),", ",Object(l.a)("inlineCode",{parentName:"p"},"error")," fields."),Object(l.a)("p",null,"Deletion is performed via ",Object(l.a)("inlineCode",{parentName:"p"},"onDeleteFile(id)"),", that receives the ",Object(l.a)("inlineCode",{parentName:"p"},"id")," of the file and can perform the API request, as long as it returns a ",Object(l.a)("inlineCode",{parentName:"p"},"Promise<void>"),"."),Object(l.a)(K.b,{code:"() => {\n  const props = {\n    files: [\n      {\n        id: 1,\n        filename: 'purchase-receipt.pdf',\n        url: 'https://wise.com/public-resources/assets/logos/wise/brand_logo_inverse.svg',\n        status: Status.SUCCEEDED,\n      },\n      {\n        id: 2,\n        filename: 'CoWork-0317-invoice.pdf',\n        url: 'https://wise.com/public-resources/assets/logos/wise/brand_logo_inverse.svg',\n        status: Status.SUCCEEDED,\n      },\n      {\n        id: 3,\n        filename: 'receipt failed.png',\n        status: Status.FAILED,\n        error: 'Error message from API',\n      },\n    ],\n    onUploadFile: (formData) => {\n      const additionalData = {\n        activityId: '12345',\n        profileId: 6789,\n      };\n\n      const customHeaders = {\n        Foo: 'bar',\n      };\n\n      Object.keys(additionalData).forEach((key) => formData.append(key, additionalData[key]));\n\n      return fetch('https://httpbin.org/post', {\n        method: 'POST',\n        body: formData,\n        credentials: 'include',\n        headers: customHeaders,\n      })\n        .then((response) => {\n          if (!response.ok) {\n            const error = new Error(response.statusText);\n            error.status = response.status;\n            throw error;\n          }\n\n          // DEBUG CODE ONLY\n          return { id: Math.round(Math.random() * 10000), url: 'https://wise.com' };\n\n          // Normally you'd return the servers's response\n          // return response.json();\n        })\n        .catch((e) => {\n          throw e;\n        });\n    },\n    onDeleteFile: (id) =>\n      // DEBUG CODE ONLY\n      // Normally you'll call an API endpoint and return a promise that is resolved when deletion is successful\n      new Promise((resolve) => {\n        setTimeout(() => resolve(), 3000);\n      }),\n  };\n\n  return <UploadInput multiple fileInputName=\"file\" {...props} />;\n};\n",scope:{UploadInput:W,Status:g.a},display:"vertical",mdxType:"LiveEditorBlock"}),Object(l.a)("p",null,"An example for an actual ",Object(l.a)("inlineCode",{parentName:"p"},"onUploadFile()")," callback:"),Object(l.a)("pre",{className:"language-javascript"},Object(l.a)("code",{parentName:"pre",className:"language-javascript"},Object(l.a)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(l.a)("span",{parentName:"code",className:"token function-variable function"},"onUploadFile")," ",Object(l.a)("span",{parentName:"code",className:"token operator"},"=")," ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"("),Object(l.a)("span",{parentName:"code",className:"token parameter"},"formData"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(l.a)("span",{parentName:"code",className:"token arrow operator"},"=>")," ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  \n  ",Object(l.a)("span",{parentName:"code",className:"token keyword"},"const")," additionalData ",Object(l.a)("span",{parentName:"code",className:"token operator"},"=")," ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    activityId",Object(l.a)("span",{parentName:"code",className:"token operator"},":")," ",Object(l.a)("span",{parentName:"code",className:"token string"},"'12345'"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},","),"\n    profileId",Object(l.a)("span",{parentName:"code",className:"token operator"},":")," ",Object(l.a)("span",{parentName:"code",className:"token number"},"6789"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",Object(l.a)("span",{parentName:"code",className:"token spread operator"},"..."),"\n  ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"}"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},";"),"\n  \n  ",Object(l.a)("span",{parentName:"code",className:"token keyword"},"const")," customHeaders ",Object(l.a)("span",{parentName:"code",className:"token operator"},"=")," ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",Object(l.a)("span",{parentName:"code",className:"token string"},"'Accept-language'"),Object(l.a)("span",{parentName:"code",className:"token operator"},":")," ",Object(l.a)("span",{parentName:"code",className:"token string"},"'en'"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",Object(l.a)("span",{parentName:"code",className:"token spread operator"},"..."),"\n  ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"}"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n  ",Object(l.a)("span",{parentName:"code",className:"token known-class-name class-name"},"Object"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},"."),Object(l.a)("span",{parentName:"code",className:"token method function property-access"},"keys"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},"("),"additionalData",Object(l.a)("span",{parentName:"code",className:"token punctuation"},")"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},"."),Object(l.a)("span",{parentName:"code",className:"token method function property-access"},"forEach"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},"("),Object(l.a)("span",{parentName:"code",className:"token punctuation"},"("),Object(l.a)("span",{parentName:"code",className:"token parameter"},"key"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(l.a)("span",{parentName:"code",className:"token arrow operator"},"=>")," formData",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"."),Object(l.a)("span",{parentName:"code",className:"token method function property-access"},"append"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},"("),"key",Object(l.a)("span",{parentName:"code",className:"token punctuation"},",")," additionalData",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"["),"key",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"]"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},")"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},")"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},";"),"\n  \n  ",Object(l.a)("span",{parentName:"code",className:"token keyword control-flow"},"return")," ",Object(l.a)("span",{parentName:"code",className:"token function"},"fetch"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},"("),Object(l.a)("span",{parentName:"code",className:"token template-string"},Object(l.a)("span",{parentName:"span",className:"token template-punctuation string"},"`"),Object(l.a)("span",{parentName:"span",className:"token string"},"v2/someApi/someEndpoint"),Object(l.a)("span",{parentName:"span",className:"token template-punctuation string"},"`")),Object(l.a)("span",{parentName:"code",className:"token punctuation"},",")," ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    method",Object(l.a)("span",{parentName:"code",className:"token operator"},":")," ",Object(l.a)("span",{parentName:"code",className:"token string"},"'POST'"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},","),"\n    body",Object(l.a)("span",{parentName:"code",className:"token operator"},":")," formData",Object(l.a)("span",{parentName:"code",className:"token punctuation"},","),"\n    headers",Object(l.a)("span",{parentName:"code",className:"token operator"},":")," customHeaders\n    credentials",Object(l.a)("span",{parentName:"code",className:"token operator"},":")," ",Object(l.a)("span",{parentName:"code",className:"token string"},"'include'"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},","),"\n  ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"}"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},")"),"\n    ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"."),Object(l.a)("span",{parentName:"code",className:"token method function property-access"},"then"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},"("),Object(l.a)("span",{parentName:"code",className:"token punctuation"},"("),Object(l.a)("span",{parentName:"code",className:"token parameter"},"response"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(l.a)("span",{parentName:"code",className:"token arrow operator"},"=>")," ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      ",Object(l.a)("span",{parentName:"code",className:"token keyword control-flow"},"if")," ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"("),Object(l.a)("span",{parentName:"code",className:"token operator"},"!"),"response",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"."),Object(l.a)("span",{parentName:"code",className:"token property-access"},"ok"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        ",Object(l.a)("span",{parentName:"code",className:"token keyword"},"const")," error ",Object(l.a)("span",{parentName:"code",className:"token operator"},"=")," ",Object(l.a)("span",{parentName:"code",className:"token keyword"},"new")," ",Object(l.a)("span",{parentName:"code",className:"token class-name"},"Error"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},"("),"response",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"."),Object(l.a)("span",{parentName:"code",className:"token property-access"},"statusText"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},")"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},";"),"\n        error",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"."),Object(l.a)("span",{parentName:"code",className:"token property-access"},"status")," ",Object(l.a)("span",{parentName:"code",className:"token operator"},"=")," response",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"."),Object(l.a)("span",{parentName:"code",className:"token property-access"},"status"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},";"),"\n        ",Object(l.a)("span",{parentName:"code",className:"token keyword control-flow"},"throw")," error",Object(l.a)("span",{parentName:"code",className:"token punctuation"},";"),"\n      ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"}"),"\n      ",Object(l.a)("span",{parentName:"code",className:"token keyword control-flow"},"return")," response",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"."),Object(l.a)("span",{parentName:"code",className:"token method function property-access"},"json"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},"("),Object(l.a)("span",{parentName:"code",className:"token punctuation"},")"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"}"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},")"),"\n    ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"."),Object(l.a)("span",{parentName:"code",className:"token keyword control-flow"},"catch"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},"("),Object(l.a)("span",{parentName:"code",className:"token punctuation"},"("),Object(l.a)("span",{parentName:"code",className:"token parameter"},"e"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(l.a)("span",{parentName:"code",className:"token arrow operator"},"=>")," ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      ",Object(l.a)("span",{parentName:"code",className:"token keyword control-flow"},"throw")," e",Object(l.a)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"}"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},")"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(l.a)("span",{parentName:"code",className:"token punctuation"},"}"),Object(l.a)("span",{parentName:"code",className:"token punctuation"},";"),"\n")),Object(l.a)(K.a,{componentName:"UploadInput",mdxType:"GeneratePropsTable"}))}ae.isMDXComponent=!0},SlwH:function(e,a,t){},dSCB:function(e,a,t){},sres:function(e,a,t){}}]);
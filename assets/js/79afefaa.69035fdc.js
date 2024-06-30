"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[829],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(v,o(o({ref:n},p),{},{components:t})):r.createElement(v,o({ref:n},p))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:2,sidebar_class_name:"nav-det-level"},o="Change Log",l={unversionedId:"AddOns-Finance/Expense-Recovery/Changelog",id:"AddOns-Finance/Expense-Recovery/Changelog",title:"Change Log",description:"All notable changes to this project will be documented in this file.",source:"@site/docs/AddOns-Finance/16-Expense-Recovery/Changelog.md",sourceDirName:"AddOns-Finance/16-Expense-Recovery",slug:"/AddOns-Finance/Expense-Recovery/Changelog",permalink:"/AddOns-Finance/Expense-Recovery/Changelog",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Functionality",permalink:"/AddOns-Finance/Expense-Recovery/Functionality"},next:{title:"Pricing",permalink:"/AddOns-Finance/Expense-Recovery/Pricing"}},s={},c=[{value:"1.4.0 - 2024-06-28",id:"140---2024-06-28",level:2},{value:"Changes",id:"changes",level:3},{value:"Fixes",id:"fixes",level:3},{value:"Extensibility Improvements",id:"extensibility-improvements",level:3},{value:"1.3.0 - 2024-05-10",id:"130---2024-05-10",level:2},{value:"Extensibility Improvements",id:"extensibility-improvements-1",level:3},{value:"1.2.0.1 - 2024-04-21",id:"1201---2024-04-21",level:2},{value:"Changes",id:"changes-1",level:3},{value:"1.1.0 - 2024-04-08",id:"110---2024-04-08",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"change-log"},"Change Log"),(0,a.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,a.kt)("h2",{id:"140---2024-06-28"},"[1.4.0]"," - 2024-06-28"),(0,a.kt)("p",null,"Available version: 23.0+"),(0,a.kt)("h3",{id:"changes"},"Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Expense Recovery Lines now can be processed even if there are existing errors. The error lines are automatically skipped, and users must fix the error before processing."),(0,a.kt)("li",{parentName:"ul"},"Optimalization for expense recovery line validation \u2013 change company only if the current company is different from the target company.")),(0,a.kt)("h3",{id:"fixes"},"Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix for the issue that showed confirmation dialog to run expense recovery lines validation even if there are no lines."),(0,a.kt)("li",{parentName:"ul"},"Fix for the issue that caused \u201cPosting Description\u201d field to contain wrong value in generated sales document.")),(0,a.kt)("h3",{id:"extensibility-improvements"},"Extensibility Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New events",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'OnCreateSalesHeaderAfterInsertSalesHeader(var SalesHeader: Record "Sales Header"; ExpRecoveryLine: Record "FS5A16 Exp. Recovery Line")'),(0,a.kt)("li",{parentName:"ul"},'OnGenerateSalesDocumentsFromExpenseRecoveryLinesBeforeCreateFirstSalesDocument(var ExpRecoveryLine: Record "FS5A16 Exp. Recovery Line")'),(0,a.kt)("li",{parentName:"ul"},'OnBeforeIsTargetCompany(ExpenseRecoverySetup: Record "FS5A16 Expense Recovery Setup"; var Result: Boolean; var IsHandled: Boolean)'),(0,a.kt)("li",{parentName:"ul"},'OnBeforeIsSourceCompany(ExpenseRecoverySetup: Record "FS5A16 Expense Recovery Setup"; var Result: Boolean; var IsHandled: Boolean)'))),(0,a.kt)("li",{parentName:"ul"},"New parameters in OnCreateSalesHeaderAfterSetFilters publisher",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"var ForceNewSalesHeader: Boolean; "),(0,a.kt)("li",{parentName:"ul"},"var IsHandled: Boolean")))),(0,a.kt)("h2",{id:"130---2024-05-10"},"[1.3.0]"," - 2024-05-10"),(0,a.kt)("p",null,"Available version: 23.0+"),(0,a.kt)("h3",{id:"extensibility-improvements-1"},"Extensibility Improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New Events",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'OnAfterCreateSalesDocument(Record "FS5A16 Exp. Recovery Line"; var Record "Sales Header"; var Record "Sales Line")'))),(0,a.kt)("li",{parentName:"ul"},"New Event Parameters",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'OnCreateSalesDocumentBeforeCreateSalesHeader - Record "FS5A16 Exp. Recovery Line"')))),(0,a.kt)("h2",{id:"1201---2024-04-21"},"[1.2.0.1]"," - 2024-04-21"),(0,a.kt)("p",null,"Available version: 23.0+"),(0,a.kt)("h3",{id:"changes-1"},"Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New action to open ",(0,a.kt)("strong",{parentName:"li"},"Processed Lines")," from ",(0,a.kt)("strong",{parentName:"li"},"Expense Recovery Worksheet"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Processed Expense Recovery Lines")," now contains number from created sales document, information whether the document is posted and posted invoice number (applies only to companies with ",(0,a.kt)("strong",{parentName:"li"},"Company Type")," = Target or Both).")),(0,a.kt)("h2",{id:"110---2024-04-08"},"[1.1.0]"," - 2024-04-08"),(0,a.kt)("p",null,"Available version: 23.0+"),(0,a.kt)("p",null,"First App-Source version"))}d.isMDXComponent=!0}}]);
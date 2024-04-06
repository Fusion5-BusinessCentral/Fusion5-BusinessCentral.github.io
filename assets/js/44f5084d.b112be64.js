"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[680],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return r?o.createElement(f,l(l({ref:t},p),{},{components:r})):o.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7879:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:3,sidebar_class_name:"nav-det-level"},l="Change Log",i={unversionedId:"AddOns-Power-Automate/Pack-for-Power-Automate/Changelog",id:"AddOns-Power-Automate/Pack-for-Power-Automate/Changelog",title:"Change Log",description:"All notable changes to this project will be documented in this file.",source:"@site/docs/AddOns-Power-Automate/07-Pack-for-Power-Automate/Changelog.md",sourceDirName:"AddOns-Power-Automate/07-Pack-for-Power-Automate",slug:"/AddOns-Power-Automate/Pack-for-Power-Automate/Changelog",permalink:"/AddOns-Power-Automate/Pack-for-Power-Automate/Changelog",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Functionality",permalink:"/AddOns-Power-Automate/Pack-for-Power-Automate/Functionality"},next:{title:"Vendor Bank Account Approval",permalink:"/category/vendor-bank-account-approval"}},u={},c=[{value:"1.1.0 - 2024-03-05",id:"110---2024-03-05",level:2},{value:"Changes",id:"changes",level:3},{value:"Obsoleted Functions (will be removed in 25.0)",id:"obsoleted-functions-will-be-removed-in-250",level:3},{value:"1.0.0 - 2024-02-04",id:"100---2024-02-04",level:2}],p={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"change-log"},"Change Log"),(0,n.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,n.kt)("h2",{id:"110---2024-03-05"},"[1.1.0]"," - 2024-03-05"),(0,n.kt)("p",null,"Available version: 23.0+"),(0,n.kt)("h3",{id:"changes"},"Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Limit Power Automate workflow for selected records in a table only using ",(0,n.kt)("strong",{parentName:"li"},"Power Automate Flow Record Limitation"),"."),(0,n.kt)("li",{parentName:"ul"},"Generic table ",(0,n.kt)("strong",{parentName:"li"},"Power Automate Flow Tracked Field")," where users can specify tracked fields for every Power Automate workflow."),(0,n.kt)("li",{parentName:"ul"},"Major refactoring of interfaces used for implementing custom power automate flows.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'interface "FS5B07 Manage PA Workflow"',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"procedure EnableWorkflow()"),(0,n.kt)("li",{parentName:"ul"},"procedure DisableWorkflow()"))),(0,n.kt)("li",{parentName:"ul"},'interface "FS5B07 Run PA Workflow"',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"procedure IsWorkflowEnabled(): Boolean;"),(0,n.kt)("li",{parentName:"ul"},"procedure IsWorkflowEnabledForRecord(RecordVariant: Variant): Boolean;"),(0,n.kt)("li",{parentName:"ul"},"procedure GetSourceTable() SourceTableNo: Integer"),(0,n.kt)("li",{parentName:"ul"},'procedure SetApprovalStatus(SourceRecordID: Guid; NewApprovalStatus: Enum "FS5B07 Approval Status");')))))),(0,n.kt)("h3",{id:"obsoleted-functions-will-be-removed-in-250"},"Obsoleted Functions (will be removed in 25.0)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There are no obsoleted functions from the user perspective."),(0,n.kt)("li",{parentName:"ul"},"Obsoleted functions/objects:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'interface "FS5B07 PA Workflow" (replaced by "FS5B07 Manage PA Workflow" and "FS5B07 Run PA Workflow" interfaces)'),(0,n.kt)("li",{parentName:"ul"},'codeunit 71697825 "FS5B07 Workflow N/A"'),(0,n.kt)("li",{parentName:"ul"},'enum 71697826 "FS5B07 PA Workflow Type" now implements "FS5B07 PA Workflow", "FS5B07 Manage PA Workflow", "FS5B07 Run PA Workflow" (with all interfaces having default implementation). After 25.0 the enum will implement only "FS5B07 Manage PA Workflow", "FS5B07 Run PA Workflow"')))),(0,n.kt)("h2",{id:"100---2024-02-04"},"[1.0.0]"," - 2024-02-04"),(0,n.kt)("p",null,"Available version: 23.0+"),(0,n.kt)("p",null,"First App-Source version based on our legacy Pack for Power Automate"))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[8719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||n;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:2,sidebar_class_name:"nav-det-level"},i="Functionality",l={unversionedId:"AddOns-Power-Automate/Pack-for-Power-Automate/Functionality",id:"AddOns-Power-Automate/Pack-for-Power-Automate/Functionality",title:"Functionality",description:"Setup",source:"@site/docs/AddOns-Power-Automate/07-Pack-for-Power-Automate/Functionality.md",sourceDirName:"AddOns-Power-Automate/07-Pack-for-Power-Automate",slug:"/AddOns-Power-Automate/Pack-for-Power-Automate/Functionality",permalink:"/AddOns-Power-Automate/Pack-for-Power-Automate/Functionality",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Pricing",permalink:"/AddOns-Power-Automate/Pack-for-Power-Automate/Pricing"},next:{title:"Change Log",permalink:"/AddOns-Power-Automate/Pack-for-Power-Automate/Changelog"}},s={},u=[{value:"Setup",id:"setup",level:2},{value:"Record Limits",id:"record-limits",level:3},{value:"Tracked Fields",id:"tracked-fields",level:3},{value:"Log Entries",id:"log-entries",level:3},{value:"Power Automate",id:"power-automate",level:2},{value:"Available API Pages",id:"available-api-pages",level:2},{value:"System API",id:"system-api",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functionality"},"Functionality"),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"New configuration table ",(0,a.kt)("strong",{parentName:"p"},"Power Automate Flows")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Contains all existing flows and allows for enabling/disabling them. When the flow is enabled, there could be changes to standard processes."),(0,a.kt)("li",{parentName:"ul"},"Available flows depend on extensions you have installed in your environment. This pack contains no flow but is used as the basis for others.")),(0,a.kt)("p",null,"This page also contains two actions ",(0,a.kt)("strong",{parentName:"p"},"Tracked Fields")," and ",(0,a.kt)("strong",{parentName:"p"},"Record Limits"),". "),(0,a.kt)("h3",{id:"record-limits"},"Record Limits"),(0,a.kt)("p",null,"This configuration table limits records for which the flow should be active. If there is no record, the flow is active for all records; once there is at least one record, the flow will be run only for the records within the filter."),(0,a.kt)("p",null,"Example: If you have a flow for Vendor Bank Accounts, you can use this table to limit flows to run only for accounts with foreign currency."),(0,a.kt)("h3",{id:"tracked-fields"},"Tracked Fields"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tracked Fields")," specify fields that will trigger the workflow if they are changed. "),(0,a.kt)("p",null,"Example: If you have a flow for Vendor Bank Accounts, you can use this table to run the trigger only when the bank account number is changed. If only fields not listed in this table are changed, the workflow will not be run, and the record approval status will not change."),(0,a.kt)("h3",{id:"log-entries"},"Log Entries"),(0,a.kt)("p",null,"We have created a new log table, ",(0,a.kt)("strong",{parentName:"p"},"Power Automate Log Entries"),", which contains all raised events or received signals from our Fusion5 flows. If the Power Automate flow provides any feedback or comments, these comments are visible in this log table."),(0,a.kt)("p",null,"Actions are also available to open the source record from the log entry table and the associated flow run in Power Automate."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:r(6444).Z,width:"1696",height:"276"})),(0,a.kt)("p",null,"New configuration table ",(0,a.kt)("strong",{parentName:"p"},"Power Automate Approver Groups")," with a subpage ",(0,a.kt)("strong",{parentName:"p"},"Power Automate Approvers"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allows to define approver groups (multiple for one workflow type). For each group, users can link approver user accounts (using the action ",(0,a.kt)("strong",{parentName:"li"},"Approvers"),") or specify email accounts for approvers who do not have an account in Business Central."),(0,a.kt)("li",{parentName:"ul"},"Multiple approver groups allow using of different approvers in Power Automate.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:r(4180).Z,width:"943",height:"253"}),"\n",(0,a.kt)("img",{alt:"image.png",src:r(2106).Z,width:"948",height:"266"})),(0,a.kt)("h2",{id:"power-automate"},"Power Automate"),(0,a.kt)("p",null,"To configure the Power Automate flow, open ",(0,a.kt)("a",{parentName:"p",href:"https://make.powerautomate.com/"},"https://make.powerautomate.com/")," with the tenant account with the BC license assigned (not our delegated admin account). The BC license is needed to be able to use Premium BC connectors without additional licenses."),(0,a.kt)("p",null,"In Power Automate, go to ",(0,a.kt)("strong",{parentName:"p"},"My Flows")," -> ",(0,a.kt)("strong",{parentName:"p"},"New Flow")," -> ",(0,a.kt)("strong",{parentName:"p"},"Automated Cloud Flow")," or import the existing flow."),(0,a.kt)("h2",{id:"available-api-pages"},"Available API Pages"),(0,a.kt)("p",null,"All API pages have APIPublisher = 'fusion5', APIGroup = 'packForPowerAutomate';"),(0,a.kt)("h3",{id:"system-api"},"System API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Power Automate Approvers")," (View Approvers)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"APIVersion = 'v1.0';"),(0,a.kt)("li",{parentName:"ul"},"EntityName = 'powerAutomateApprover';"),(0,a.kt)("li",{parentName:"ul"},"EntitySetName = 'powerAutomateApprovers';"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Power Automate Log Entries")," (View and Create new log entries)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"APIVersion = 'v1.0';"),(0,a.kt)("li",{parentName:"ul"},"EntityName = 'powerAutomateLogEntry';"),(0,a.kt)("li",{parentName:"ul"},"EntitySetName = 'powerAutomateLogEntries';"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Users")," (View Existing Users)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"APIVersion = 'v1.0';"),(0,a.kt)("li",{parentName:"ul"},"EntityName = 'user';"),(0,a.kt)("li",{parentName:"ul"},"EntitySetName = 'users';")))))}m.isMDXComponent=!0},4180:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Approver-Groups-c89350456f02b08c1faa36010401cea5.png"},2106:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Approvers-d55df3d69320eec9c990e68dc104d816.png"},6444:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Power-Automate-Log-Entries-9c294cbb975861c959722041b1270a78.png"}}]);
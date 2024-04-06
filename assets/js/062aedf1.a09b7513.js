"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3,sidebar_class_name:"nav-det-level"},i="Change Log",o={unversionedId:"AddOns-IT-Support/IT-Pack/Changelog",id:"AddOns-IT-Support/IT-Pack/Changelog",title:"Change Log",description:"All notable changes to this project will be documented in this file.",source:"@site/docs/AddOns-IT-Support/03-IT-Pack/Changelog.md",sourceDirName:"AddOns-IT-Support/03-IT-Pack",slug:"/AddOns-IT-Support/IT-Pack/Changelog",permalink:"/AddOns-IT-Support/IT-Pack/Changelog",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Functionality",permalink:"/AddOns-IT-Support/IT-Pack/Functionality"},next:{title:"AddOns: Power Automate",permalink:"/category/addons-power-automate"}},s={},c=[{value:"2.2.0 - 2024-03-28",id:"220---2024-03-28",level:2},{value:"Changes",id:"changes",level:3},{value:"Fixes",id:"fixes",level:3},{value:"2.1.0 - 2024-01-31",id:"210---2024-01-31",level:2},{value:"Changes",id:"changes-1",level:3},{value:"Fixes",id:"fixes-1",level:3},{value:"2.0.0 - 2024-01-24",id:"200---2024-01-24",level:2},{value:"Changes",id:"changes-2",level:3},{value:"1.4.0 - 2023-12-18",id:"140---2023-12-18",level:2},{value:"Changes",id:"changes-3",level:3},{value:"Fixes",id:"fixes-2",level:3},{value:"1.3.0 - 2023-10-27",id:"130---2023-10-27",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"change-log"},"Change Log"),(0,r.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,r.kt)("h2",{id:"220---2024-03-28"},"[2.2.0]"," - 2024-03-28"),(0,r.kt)("h3",{id:"changes"},"Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fusion5 telemetry logger was moved from A02 IT Pack to A00 Licensing.")),(0,r.kt)("h3",{id:"fixes"},"Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CreateTableRelation procedure now supports up to 250 incremented Table Relation codes.")),(0,r.kt)("h2",{id:"210---2024-01-31"},"[2.1.0]"," - 2024-01-31"),(0,r.kt)("p",null,"Available version: 23.0+"),(0,r.kt)("h3",{id:"changes-1"},"Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Table Relations" now contains information about the extension from which the relation comes (if an extension created the relation).'),(0,r.kt)("li",{parentName:"ul"},'New codeunit 71697637 "FS5A03 Table Relation Mgt.", a facade for creating table relation programmatically from another extension.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CreateTableRelation(Code: Code","[20]",'; SourceTableNo: Integer; TargetTableNo: Integer) TableRelation: Record "FS5A03 Table Relation"'),(0,r.kt)("li",{parentName:"ul"},'CreateTableRelationLineFilter(TableRelation: Record "FS5A03 Table Relation"; TargetFieldNo: Integer; TargetFieldFilter: Text',"[100]",")"),(0,r.kt)("li",{parentName:"ul"},'CreateTableRelationLineField(TableRelation: Record "FS5A03 Table Relation"; TargetFieldNo: Integer; SourceFieldNo: Integer)')))),(0,r.kt)("h3",{id:"fixes-1"},"Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Fix for "FS5A03 Big Text Editor" addin for older browsers')),(0,r.kt)("h2",{id:"200---2024-01-24"},"[2.0.0]"," - 2024-01-24"),(0,r.kt)("p",null,"Available version: 23.0+"),(0,r.kt)("h3",{id:"changes-2"},"Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Page 71697637 "FS5A03 Big Text Editor"'),(0,r.kt)("li",{parentName:"ul"},"Internal changes for BC 2023 wave 2 (namespaces, minor refactoring)")),(0,r.kt)("h2",{id:"140---2023-12-18"},"[1.4.0]"," - 2023-12-18"),(0,r.kt)("p",null,"Available version: 22.2+"),(0,r.kt)("h3",{id:"changes-3"},"Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Table Relation functuonality")),(0,r.kt)("h3",{id:"fixes-2"},"Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"REST Authentication: Remove applied filters when new record is created (otherwise the new record can dissapear if not within filter conditions)")),(0,r.kt)("h2",{id:"130---2023-10-27"},"[1.3.0]"," - 2023-10-27"),(0,r.kt)("p",null,"Available version: 22.2+"),(0,r.kt)("p",null,"First App-Source version"))}p.isMDXComponent=!0}}]);
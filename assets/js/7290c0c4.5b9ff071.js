"use strict";(self.webpackChunkapp_source_documentation=self.webpackChunkapp_source_documentation||[]).push([[3631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=l,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const i={sidebar_position:2,sidebar_class_name:"nav-det-level"},r="Functionality",o={unversionedId:"AddOns-Other/API-Generator/Functionality",id:"AddOns-Other/API-Generator/Functionality",title:"Functionality",description:"API Generator",source:"@site/docs/AddOns-Other/11-API-Generator/Functionality.md",sourceDirName:"AddOns-Other/11-API-Generator",slug:"/AddOns-Other/API-Generator/Functionality",permalink:"/AddOns-Other/API-Generator/Functionality",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"nav-det-level"},sidebar:"tutorialSidebar",previous:{title:"Pricing",permalink:"/AddOns-Other/API-Generator/Pricing"},next:{title:"Change Log",permalink:"/AddOns-Other/API-Generator/Changelog"}},s={},p=[{value:"API Generator",id:"api-generator",level:2},{value:"Tables",id:"tables",level:3},{value:"Table Fields",id:"table-fields",level:3},{value:"Source Table View",id:"source-table-view",level:3},{value:"Parent-Child Relations",id:"parent-child-relations",level:3},{value:"Export API Extension",id:"export-api-extension",level:3},{value:"Install and Configure Visual Studio Code",id:"install-and-configure-visual-studio-code",level:4},{value:"Build the extension",id:"build-the-extension",level:4},{value:"Deploy the extension",id:"deploy-the-extension",level:4}],d={toc:p},u="wrapper";function c(e){let{components:t,...i}=e;return(0,l.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"functionality"},"Functionality"),(0,l.kt)("h2",{id:"api-generator"},"API Generator"),(0,l.kt)("p",null,"The main page can be found through the search as ",(0,l.kt)("strong",{parentName:"p"},"API Generator"),". "),(0,l.kt)("p",null,"The fields in the header section should not be changed, except if there is a reason for this change and the user knows the consequences."),(0,l.kt)("h3",{id:"tables"},"Tables"),(0,l.kt)("p",null,"This section allows you to define all API pages. Every API page is based on the source table from which the fields contained in it come. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(3315).Z,width:"1844",height:"763"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Code"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Unique identifier of the API page. This value is not used in generated API page and is used only for API definition."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Table Caption"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Specifies the table on which the API page is based on."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Table View"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This is optional field to specify the SourceTableView property. Using this property users can limit data visible in the API page."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"API Version"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This field is not used now."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Page Object ID"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Automatically assigned page object ID."),(0,l.kt)("li",{parentName:"ul"},"This field should not be changed, except if there is a reason for this change and user knows the consequences."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Page Object Name"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Automatically assigned page name."),(0,l.kt)("li",{parentName:"ul"},"This field should not be changed, except if there is a reason for this change and user knows the consequences."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parent Table Code"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Optional field to specify parent-child relation. If specified, the child API page is exposed separately, but also as a part of the parent object."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"Parent Table Relation")," is mandatory when this field has a value."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parent Table Relation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Specifies connection between parent and child table."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Change Tracking Allowed"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Sets a value that indicates whether the entity exposed through the OData API supports change tracking."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"API URL"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Shows the expected API URL once the API pages are deployed to the environment.")))),(0,l.kt)("h3",{id:"table-fields"},"Table Fields"),(0,l.kt)("p",null,"Every API Page must have at least one field. To define a field, select the table, choose the action ",(0,l.kt)("strong",{parentName:"p"},"Fields")," and choose all fields that should be included on the API page."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(8057).Z,width:"1846",height:"770"})),(0,l.kt)("p",null,"You can use the action ",(0,l.kt)("strong",{parentName:"p"},"Add Multiple")," to add multiple fields at once."),(0,l.kt)("p",null,"The system will not allow the following fields to be used on the API page:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fields with ObsoleteState = Removed."),(0,l.kt)("li",{parentName:"ul"},"Fields with the following data types: Binary, BLOB, Media, MediaSet, OemCode, OemText, RecordID, TableFilter")),(0,l.kt)("h3",{id:"source-table-view"},"Source Table View"),(0,l.kt)("p",null,"A table view can limit the number of records included in the API page. To create a table view, create a new relation, set ",(0,l.kt)("strong",{parentName:"p"},"Target Table No.")," to the same table as your API page, and leave the ",(0,l.kt)("strong",{parentName:"p"},"Source Table No.")," blank."),(0,l.kt)("p",null,"Specify any condition in the line section (all lines automatically have an AND condition). Only ",(0,l.kt)("strong",{parentName:"p"},"Type")," = ",(0,l.kt)("strong",{parentName:"p"},"Filter")," is allowed for table view."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(8054).Z,width:"1848",height:"775"})),(0,l.kt)("h3",{id:"parent-child-relations"},"Parent-Child Relations"),(0,l.kt)("p",null,"Parent-child relations can be used to include one API page in another API page (for example, to access customer ledger entries through the customer API page). "),(0,l.kt)("p",null,"To create a relation, create a new relation, set ",(0,l.kt)("strong",{parentName:"p"},"Target Table No.")," to the same table as your API page and the ",(0,l.kt)("strong",{parentName:"p"},"Source Table No.")," to the table of the parent API page."),(0,l.kt)("p",null,"Specify any condition in the line section (all lines have AND condition automatically). Both ",(0,l.kt)("strong",{parentName:"p"},"Types")," = ",(0,l.kt)("strong",{parentName:"p"},"Filter")," and ",(0,l.kt)("strong",{parentName:"p"},"Field")," are allowed."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(4504).Z,width:"1844",height:"723"})),(0,l.kt)("h3",{id:"export-api-extension"},"Export API Extension"),(0,l.kt)("p",null,"To export the API extension, use the action ",(0,l.kt)("strong",{parentName:"p"},"Generate")," and follow the steps."),(0,l.kt)("h4",{id:"install-and-configure-visual-studio-code"},"Install and Configure Visual Studio Code"),(0,l.kt)("p",null,"This step must be done only once (after the first export)."),(0,l.kt)("p",null,"1) Download VS Code from ",(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"https://code.visualstudio.com/"),".\n1) Install the VS Code using the installation wizard downloaded in previous step.\n1) Once installed, open the VS Code.\n1) From the left menu, choose ",(0,l.kt)("strong",{parentName:"p"},"Extensions"),".\n1) Find and Install ",(0,l.kt)("strong",{parentName:"p"},"AL Language extension for Microsoft Dynamics 365 Business Central")," extension.\n1) Close and reopen the VS Code."),(0,l.kt)("h4",{id:"build-the-extension"},"Build the extension"),(0,l.kt)("p",null,"In this step, you will generate the app file that can be installed into your Business Central environment."),(0,l.kt)("p",null,"1) Download the project ZIP file from your Business Central using the action ",(0,l.kt)("strong",{parentName:"p"},"Generate"),".\n1) Open VS Code.\n1) Extract the downloaded ZIP file.\n1) Open the extracted folder in VS Code (",(0,l.kt)("strong",{parentName:"p"},"File -> Open Folder"),").\n1) Download Business Central symbols (",(0,l.kt)("strong",{parentName:"p"},"View -> Command Pallete -> AL: Donwload Symbols"),").\n1) Build and create the .app file (",(0,l.kt)("strong",{parentName:"p"},"View -> Command Pallete -> AL: Package"),")."),(0,l.kt)("h4",{id:"deploy-the-extension"},"Deploy the extension"),(0,l.kt)("p",null,"In this step, you will deploy created app to your Business Central environment. Deploying extensions may cause system errors to all logged users hence it is recommended to do this step outside of your business hours to minimaze the impact on other users."),(0,l.kt)("p",null,"1) Open your Business Central environment.\n1) Open page ",(0,l.kt)("strong",{parentName:"p"},"Extension Management"),".\n1) Use action ",(0,l.kt)("strong",{parentName:"p"},"Manage -> Upload Extension"),".\n1) Locate the .app file, accept the privacy policy and use the ",(0,l.kt)("strong",{parentName:"p"},"Deploy")," action.\n1) See the installation status under ",(0,l.kt)("strong",{parentName:"p"},"Installation Status"),". The API pages will be available once the installation is completed."))}c.isMDXComponent=!0},3315:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/API-Generator-077070aef9666e2d0a29e4e1582337e0.png"},8057:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Table-Fields-dbc308e3dcd4ff55ad33cbdeee912225.png"},8054:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Table-View-799b249cdf559fea21df3a19543e21e2.png"},4504:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Table2Table-Relation-40dda6776fd89e47465b6865809044f5.png"}}]);
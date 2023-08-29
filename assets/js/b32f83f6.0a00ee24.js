"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[8774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1845:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);const a="timeEstimate_t8XS";const i=function(e){let{children:t}=e;return r.createElement("div",{className:a}," ",t," ")}},7369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),i=n(1845);const o={title:"Controller Environment"},l="Create Controller Environment",s={unversionedId:"Implementation/Dev/dev-environment",id:"Implementation/Dev/dev-environment",title:"Controller Environment",description:"Estimated Time to Complete: 10 minutes",source:"@site/docs/02-Implementation/02-Dev/220-dev-environment.md",sourceDirName:"02-Implementation/02-Dev",slug:"/Implementation/Dev/dev-environment",permalink:"/lab-aemc-utah/docs/Implementation/Dev/dev-environment",draft:!1,tags:[],version:"current",sidebarPosition:220,frontMatter:{title:"Controller Environment"},sidebar:"mySidebar",previous:{title:"Credentials",permalink:"/lab-aemc-utah/docs/Implementation/Dev/dev-credentials"},next:{title:"Collaboration Descriptors",permalink:"/lab-aemc-utah/docs/Implementation/Dev/dev-collaboration-descriptors"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Before",id:"before",level:3},{value:"After",id:"after",level:3},{value:"Instructions",id:"instructions",level:2},{value:"Lessons Learned",id:"lessons-learned",level:2}],c={toc:m},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-controller-environment"},"Create Controller Environment"),(0,a.kt)(i.Z,{mdxType:"TimeEstimate"},"Estimated Time to Complete: 10 minutes"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,'Production is considered the "Controller" Environment as that is where App Engine Management Center is installed and orchestrates activities from. '),(0,a.kt)("p",null,"Next up, you add an Environment record to your Dev instance containing the details for your Prod instance. "),(0,a.kt)("h3",{id:"before"},"Before"),(0,a.kt)("mermaid",{value:"graph LR\n    Dev[Development Instance]\n    style Dev fill:#D5F7FF"}),(0,a.kt)("h3",{id:"after"},"After"),(0,a.kt)("mermaid",{value:'graph \n    subgraph Development[Development Instance]\n        Prod("#quot; AEMC Controller #quot;\n        Environment record\n        (Prod)")\n    end\n    class Development devStyle\n    class Dev envStyle\n    classDef devStyle fill:#D5F7FF;\n    classDef envStyle fill:#F3F3F3;'}),(0,a.kt)("h2",{id:"instructions"},"Instructions"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"For this exercise, the specific Application Scope is not critical - Global is acceptable. Always check with your Platform Administrator for any company policies around ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{href:"https://docs.servicenow.com/csh?topicname=connection-alias.html&version=latest",target:"_blank"},"Connection and Credential Aliases \u2197")),".")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Complete this section in ",(0,a.kt)("strong",{parentName:"p"},"DEV"),".")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in ",(0,a.kt)("strong",{parentName:"p"},"DEV"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"All")," >> type ",(0,a.kt)("strong",{parentName:"p"},"environment")," >> click ",(0,a.kt)("strong",{parentName:"p"},"Environments")," "))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"relative",src:n(587).Z,width:"323",height:"317"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"New")," in the top-right.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"relative",src:n(3479).Z,width:"102",height:"52"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Complete the form using the information below. ")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"FOR THE INSTANCE URL YOU MUST PUT THE PROD INSTANCE URL!!!"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",{parentName:"tr",align:"left"},"AEMC Controller")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Instance Type")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Production")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Instance URL")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("img",{src:n(7366).Z,width:"658",height:"32"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Instance credential")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Pipeline_Credentials")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Is Controller?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"CHECK THE BOX"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Instance Id")),(0,a.kt)("td",{parentName:"tr",align:"left"},"This will auto populate after clicking Validate.")))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Validate"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"relative",src:n(7006).Z,width:"330",height:"129"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"relative",src:n(845).Z,width:"617",height:"144"})),(0,a.kt)("p",null,'You should see a blue message that says "The controller environment was validated successfully". '),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"relative",src:n(2609).Z,width:"627",height:"140"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Submit")," to finish creating the ",(0,a.kt)("strong",{parentName:"li"},"Prod")," environment record.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"relative",src:n(547).Z,width:"276",height:"143"})),(0,a.kt)("h2",{id:"lessons-learned"},"Lessons Learned"),(0,a.kt)("p",null,"Throughout this exercise, we have gleaned important insights that can guide future procedures:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Importance of the Controller Environment"),": Setting up the Controller Environment is crucial for the operation of the App Engine Management Center. This exercise emphasizes the vital role of the Production instance, as it's where AEMC is installed and from where it orchestrates activities.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Need for Accuracy"),": The necessity of accurate input, especially when entering the Instance URL and designating the Controller, underlines the importance of attention to detail when setting up environments. One incorrect entry can hinder the functionality of the entire system.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Validation Process"),": The validation process ensures that the environment setup is correct and functional. The success message serves as confirmation that the system is correctly configured, reducing the potential for future issues."))))}u.isMDXComponent=!0},7366:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-08-10-13-17-01-22eab83e25ea01cf7f77e777b02ba8f7.png"},3479:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},587:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-07-05-09-45-11-4083ff184d3c3b1c9cf6422236c5b672.png"},845:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-07-05-13-56-23-52cf19773dbf207bdcfde37e2b88ffcd.png"},2609:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-07-11-15-58-48-fdb76943ca82d35c8ec3fce53e752a49.png"},547:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-07-11-15-59-53-9e7d3149be45883abb55e23544b94995.png"},7006:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2023-07-11-16-01-35-7540a499cd85ae6f22e81b701210ab76.png"}}]);
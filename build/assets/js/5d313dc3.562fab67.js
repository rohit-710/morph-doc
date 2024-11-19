"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[3147],{365:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=n(6070),r=n(1582);const s={title:"Prune State",lang:"en-US"},i=void 0,d={id:"build-on-morph/developer-resources/node-operation/prune-state",title:"Prune State",description:"The performance of a full node will degrade when the storage size reaches a high volume. We suggest that the fullnode always keep light storage by pruning the storage.",source:"@site/docs/build-on-morph/developer-resources/node-operation/1-prune-state.md",sourceDirName:"build-on-morph/developer-resources/node-operation",slug:"/build-on-morph/developer-resources/node-operation/prune-state",permalink:"/docs/build-on-morph/developer-resources/node-operation/prune-state",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/developer-resources/node-operation/1-prune-state.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Prune State",lang:"en-US"},sidebar:"DeveloperSidebar",previous:{title:"Upgrade node running on the host",permalink:"/docs/build-on-morph/developer-resources/node-operation/upgrade-node/upgrade-node-host"},next:{title:"Contract Addresses",permalink:"/docs/build-on-morph/developer-resources/contracts"}},a={},l=[{value:"How to Prune",id:"how-to-prune",level:3}];function u(e){const o={admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"The performance of a full node will degrade when the storage size reaches a high volume. We suggest that the fullnode always keep light storage by pruning the storage."}),"\n",(0,t.jsx)(o.h3,{id:"how-to-prune",children:"How to Prune"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"Stop the node, including the consensus client(morphnode) and the execution client(geth)"}),"\n",(0,t.jsxs)(o.li,{children:["Run ",(0,t.jsx)(o.code,{children:'nohup geth snapshot prune-zk-state --datadir "$GETH_DB_DIR" > prune.log &'}),". It will take 5~7 hours to finish."]}),"\n",(0,t.jsx)(o.li,{children:"Start the node once it is done."}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["The hardware is important, ",(0,t.jsx)(o.strong,{children:"make sure the SSD meets: solid-state drive(SSD), 8k IOPS, 500 MB/S throughput, read latency < 1ms."})]}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsx)(o.p,{children:"To prune a Geth node at least 200 GB of free disk space is recommended. This means pruning cannot be used to save a hard drive that has been completely filled. A good rule of thumb is to prune before the node fills ~80% of the available disk space."})})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},1582:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>d});var t=n(758);const r={},s=t.createContext(r);function i(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);
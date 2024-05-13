"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[4116],{9866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var r=t(3274),o=t(2333);const s={},c="Function: getOEContract()",d={id:"build-on-morph/sdk/functions/getOEContract",title:"getOEContract",description:"[@morph-l2/sdk] \u2022 Docs",source:"@site/docs/build-on-morph/sdk/functions/getOEContract.md",sourceDirName:"build-on-morph/sdk/functions",slug:"/build-on-morph/sdk/functions/getOEContract",permalink:"/docs/build-on-morph/sdk/functions/getOEContract",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/sdk/functions/getOEContract.md",tags:[],version:"current",frontMatter:{},sidebar:"DevSidebar",previous:{title:"getL1GasPrice",permalink:"/docs/build-on-morph/sdk/functions/getL1GasPrice"},next:{title:"hashLowLevelMessageV2",permalink:"/docs/build-on-morph/sdk/functions/hashLowLevelMessageV2"}},i={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Source",id:"source",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["[",(0,r.jsx)(n.strong,{children:"@morph-l2/sdk"}),"] \u2022 ",(0,r.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/build-on-morph/sdk/globals",children:"@morph-l2/sdk"})," / getOEContract"]}),"\n",(0,r.jsx)(n.h1,{id:"function-getoecontract",children:"Function: getOEContract()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"getOEContract"}),"(",(0,r.jsx)(n.code,{children:"contractName"}),", ",(0,r.jsx)(n.code,{children:"l2ChainId"}),", ",(0,r.jsx)(n.code,{children:"opts"}),"): ",(0,r.jsx)(n.code,{children:"Contract"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Returns an ethers.Contract object for the given name, connected to the appropriate address for\nthe given L2 chain ID. Users can also provide a custom address to connect the contract to\ninstead. If the chain ID is not known then the user MUST provide a custom address or this\nfunction will throw an error."}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"contractName"}),": keyof OEL2Contracts | keyof OEL1Contracts"]}),"\n",(0,r.jsx)(n.p,{children:"Name of the contract to connect to."}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"l2ChainId"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsx)(n.p,{children:"Chain ID for the L2 network."}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"opts"}),"= ",(0,r.jsx)(n.code,{children:"{}"})]}),"\n",(0,r.jsx)(n.p,{children:"Additional options for connecting to the contract."}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"opts.address?"}),": ",(0,r.jsx)(n.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,r.jsx)(n.code,{children:"AddressLike"})})]}),"\n",(0,r.jsx)(n.p,{children:"Custom address to connect to the contract."}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"opts.signerOrProvider?"}),": ",(0,r.jsx)(n.code,{children:"Provider"})," | ",(0,r.jsx)(n.code,{children:"Signer"})]}),"\n",(0,r.jsx)(n.p,{children:"Signer or provider to connect to the contract."}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Contract"})}),"\n",(0,r.jsx)(n.p,{children:"An ethers.Contract object connected to the appropriate address and interface."}),"\n",(0,r.jsx)(n.h2,{id:"source",children:"Source"}),"\n",(0,r.jsx)(n.p,{children:"src/utils/contracts.ts:43"})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},2333:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var r=t(9474);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
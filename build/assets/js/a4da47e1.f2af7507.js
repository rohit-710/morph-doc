"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[4788],{9131:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=r(3274),n=r(2333);const i={},a="Type alias: L2Provider<TProvider>",d={id:"build-on-morph/sdk/type-aliases/L2Provider",title:"L2Provider",description:"[@morph-l2/sdk] \u2022 Docs",source:"@site/docs/build-on-morph/sdk/type-aliases/L2Provider.md",sourceDirName:"build-on-morph/sdk/type-aliases",slug:"/build-on-morph/sdk/type-aliases/L2Provider",permalink:"/docs/build-on-morph/sdk/type-aliases/L2Provider",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/sdk/type-aliases/L2Provider.md",tags:[],version:"current",frontMatter:{}},o={},l=[{value:"Type declaration",id:"type-declaration",level:2},{value:"_isL2Provider",id:"_isl2provider",level:3},{value:"estimateL1Gas()",id:"estimatel1gas",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"estimateL1GasCost()",id:"estimatel1gascost",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"estimateL2GasCost()",id:"estimatel2gascost",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"estimateTotalGasCost()",id:"estimatetotalgascost",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getL1GasPrice()",id:"getl1gasprice",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Type parameters",id:"type-parameters",level:2},{value:"Source",id:"source",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["[",(0,t.jsx)(s.strong,{children:"@morph-l2/sdk"}),"] \u2022 ",(0,t.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/build-on-morph/sdk/globals",children:"@morph-l2/sdk"})," / L2Provider"]}),"\n",(0,t.jsx)(s.h1,{id:"type-alias-l2providertprovider",children:"Type alias: L2Provider<TProvider>"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"L2Provider"}),"<",(0,t.jsx)(s.code,{children:"TProvider"}),">: ",(0,t.jsx)(s.code,{children:"TProvider"})," & ",(0,t.jsx)(s.code,{children:"object"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Represents an extended version of an normal ethers Provider that returns additional L2 info and\nhas special functions for L2-specific interactions."}),"\n",(0,t.jsx)(s.h2,{id:"type-declaration",children:"Type declaration"}),"\n",(0,t.jsx)(s.h3,{id:"_isl2provider",children:"_isL2Provider"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"_isL2Provider"}),": ",(0,t.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Internal property to determine if a provider is a L2Provider\nYou are likely looking for the isL2Provider function"}),"\n",(0,t.jsx)(s.h3,{id:"estimatel1gas",children:"estimateL1Gas()"}),"\n",(0,t.jsx)(s.p,{children:"Estimates the L1 (data) gas required for a transaction."}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"tx"}),": ",(0,t.jsx)(s.code,{children:"TransactionRequest"})]}),"\n",(0,t.jsx)(s.p,{children:"Transaction to estimate L1 gas for."}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Estimated L1 gas."}),"\n",(0,t.jsx)(s.h3,{id:"estimatel1gascost",children:"estimateL1GasCost()"}),"\n",(0,t.jsx)(s.p,{children:"Estimates the L1 (data) gas cost for a transaction in wei by multiplying the estimated L1 gas\ncost by the current L1 gas price."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"tx"}),": ",(0,t.jsx)(s.code,{children:"TransactionRequest"})]}),"\n",(0,t.jsx)(s.p,{children:"Transaction to estimate L1 gas cost for."}),"\n",(0,t.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Estimated L1 gas cost."}),"\n",(0,t.jsx)(s.h3,{id:"estimatel2gascost",children:"estimateL2GasCost()"}),"\n",(0,t.jsx)(s.p,{children:"Estimates the L2 (execution) gas cost for a transaction in wei by multiplying the estimated L1\ngas cost by the current L2 gas price. This is a simple multiplication of the result of\ngetGasPrice and estimateGas for the given transaction request."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"tx"}),": ",(0,t.jsx)(s.code,{children:"TransactionRequest"})]}),"\n",(0,t.jsx)(s.p,{children:"Transaction to estimate L2 gas cost for."}),"\n",(0,t.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Estimated L2 gas cost."}),"\n",(0,t.jsx)(s.h3,{id:"estimatetotalgascost",children:"estimateTotalGasCost()"}),"\n",(0,t.jsx)(s.p,{children:"Estimates the total gas cost for a transaction in wei by adding the estimated the L1 gas cost\nand the estimated L2 gas cost."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"tx"}),": ",(0,t.jsx)(s.code,{children:"TransactionRequest"})]}),"\n",(0,t.jsx)(s.p,{children:"Transaction to estimate total gas cost for."}),"\n",(0,t.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Estimated total gas cost."}),"\n",(0,t.jsx)(s.h3,{id:"getl1gasprice",children:"getL1GasPrice()"}),"\n",(0,t.jsx)(s.p,{children:"Gets the current L1 (data) gas price."}),"\n",(0,t.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Current L1 data gas price in wei."}),"\n",(0,t.jsx)(s.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"TProvider"})," ",(0,t.jsx)(s.em,{children:"extends"})," ",(0,t.jsx)(s.code,{children:"Provider"})]}),"\n",(0,t.jsx)(s.h2,{id:"source",children:"Source"}),"\n",(0,t.jsx)(s.p,{children:"src/interfaces/l2-provider.ts:43"})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2333:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>d});var t=r(9474);const n={},i=t.createContext(n);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);
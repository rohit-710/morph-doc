"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[2960],{6646:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>t});var n=r(3274),d=r(2333);const i={},o="Interface: IBridgeAdapter",l={id:"build-on-morph/sdk/interfaces/IBridgeAdapter",title:"IBridgeAdapter",description:"[@morph-l2/sdk] \u2022 Docs",source:"@site/docs/build-on-morph/sdk/interfaces/IBridgeAdapter.md",sourceDirName:"build-on-morph/sdk/interfaces",slug:"/build-on-morph/sdk/interfaces/IBridgeAdapter",permalink:"/docs/build-on-morph/sdk/interfaces/IBridgeAdapter",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/sdk/interfaces/IBridgeAdapter.md",tags:[],version:"current",frontMatter:{},sidebar:"DevSidebar",previous:{title:"CrossChainMessageRequest",permalink:"/docs/build-on-morph/sdk/interfaces/CrossChainMessageRequest"},next:{title:"L2Block",permalink:"/docs/build-on-morph/sdk/interfaces/L2Block"}},c={},t=[{value:"Properties",id:"properties",level:2},{value:"estimateGas",id:"estimategas",level:3},{value:"approve()",id:"approve",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"deposit()",id:"deposit",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"withdraw()",id:"withdraw",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Source",id:"source",level:4},{value:"l1Bridge",id:"l1bridge",level:3},{value:"Source",id:"source-1",level:4},{value:"l2Bridge",id:"l2bridge",level:3},{value:"Source",id:"source-2",level:4},{value:"messenger",id:"messenger",level:3},{value:"Source",id:"source-3",level:4},{value:"populateTransaction",id:"populatetransaction",level:3},{value:"approve()",id:"approve-1",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"deposit()",id:"deposit-1",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-4",level:5},{value:"withdraw()",id:"withdraw-1",level:4},{value:"Parameters",id:"parameters-5",level:5},{value:"Returns",id:"returns-5",level:5},{value:"Source",id:"source-4",level:4},{value:"Methods",id:"methods",level:2},{value:"approval()",id:"approval",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Source",id:"source-5",level:4},{value:"approve()",id:"approve-2",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Source",id:"source-6",level:4},{value:"deposit()",id:"deposit-2",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Source",id:"source-7",level:4},{value:"getDepositsByAddress()",id:"getdepositsbyaddress",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Source",id:"source-8",level:4},{value:"getWithdrawalsByAddress()",id:"getwithdrawalsbyaddress",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Source",id:"source-9",level:4},{value:"supportsTokenPair()",id:"supportstokenpair",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Source",id:"source-10",level:4},{value:"withdraw()",id:"withdraw-2",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Source",id:"source-11",level:4}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["[",(0,n.jsx)(s.strong,{children:"@morph-l2/sdk"}),"] \u2022 ",(0,n.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/globals",children:"@morph-l2/sdk"})," / IBridgeAdapter"]}),"\n",(0,n.jsx)(s.h1,{id:"interface-ibridgeadapter",children:"Interface: IBridgeAdapter"}),"\n",(0,n.jsx)(s.p,{children:"Represents an adapter for an L1L2 token bridge. Each custom bridge currently needs its own\nadapter because the bridge interface is not standardized. This may change in the future."}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"estimategas",children:"estimateGas"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"estimateGas"}),": ",(0,n.jsx)(s.code,{children:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"Object that holds the functions that estimates the gas required for a given transaction.\nFollows the pattern used by ethers.js."}),"\n",(0,n.jsx)(s.h4,{id:"approve",children:"approve()"}),"\n",(0,n.jsx)(s.p,{children:"Estimates gas required to approve some tokens to deposit into the L2 chain."}),"\n",(0,n.jsx)(s.h5,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l1Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L1 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l2Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L2 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"amount"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/NumberLike",children:(0,n.jsx)(s.code,{children:"NumberLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Amount of the token to approve."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts?"})]}),"\n",(0,n.jsx)(s.p,{children:"Additional options."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.overrides?"}),": ",(0,n.jsx)(s.code,{children:"CallOverrides"})]}),"\n",(0,n.jsx)(s.p,{children:"Optional transaction overrides."}),"\n",(0,n.jsx)(s.h5,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"`BigNumber`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Gas estimate for the transaction."}),"\n",(0,n.jsx)(s.h4,{id:"deposit",children:"deposit()"}),"\n",(0,n.jsx)(s.p,{children:"Estimates gas required to deposit some tokens into the L2 chain."}),"\n",(0,n.jsx)(s.h5,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l1Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L1 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l2Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L2 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"amount"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/NumberLike",children:(0,n.jsx)(s.code,{children:"NumberLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Amount of the token to deposit."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts?"})]}),"\n",(0,n.jsx)(s.p,{children:"Additional options."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.l2GasLimit?"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/NumberLike",children:(0,n.jsx)(s.code,{children:"NumberLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional gas limit to use for the transaction on L2."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.overrides?"}),": ",(0,n.jsx)(s.code,{children:"CallOverrides"})]}),"\n",(0,n.jsx)(s.p,{children:"Optional transaction overrides."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.recipient?"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional address to receive the funds on L2. Defaults to sender."}),"\n",(0,n.jsx)(s.h5,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"`BigNumber`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Gas estimate for the transaction."}),"\n",(0,n.jsx)(s.h4,{id:"withdraw",children:"withdraw()"}),"\n",(0,n.jsx)(s.p,{children:"Estimates gas required to withdraw some tokens back to the L1 chain."}),"\n",(0,n.jsx)(s.h5,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l1Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L1 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l2Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L2 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"amount"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/NumberLike",children:(0,n.jsx)(s.code,{children:"NumberLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Amount of the token to withdraw."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts?"})]}),"\n",(0,n.jsx)(s.p,{children:"Additional options."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.overrides?"}),": ",(0,n.jsx)(s.code,{children:"CallOverrides"})]}),"\n",(0,n.jsx)(s.p,{children:"Optional transaction overrides."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.recipient?"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional address to receive the funds on L1. Defaults to sender."}),"\n",(0,n.jsx)(s.h5,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"`BigNumber`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Gas estimate for the transaction."}),"\n",(0,n.jsx)(s.h4,{id:"source",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"src/interfaces/bridge-adapter.ts:255"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"l1bridge",children:"l1Bridge"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"l1Bridge"}),": ",(0,n.jsx)(s.code,{children:"Contract"})]}),"\n",(0,n.jsx)(s.p,{children:"L1 bridge contract."}),"\n",(0,n.jsx)(s.h4,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"src/interfaces/bridge-adapter.ts:37"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"l2bridge",children:"l2Bridge"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"l2Bridge"}),": ",(0,n.jsx)(s.code,{children:"Contract"})]}),"\n",(0,n.jsx)(s.p,{children:"L2 bridge contract."}),"\n",(0,n.jsx)(s.h4,{id:"source-2",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"src/interfaces/bridge-adapter.ts:42"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"messenger",children:"messenger"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"messenger"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/classes/CrossChainMessenger",children:(0,n.jsx)(s.code,{children:"CrossChainMessenger"})})]}),"\n",(0,n.jsx)(s.p,{children:"Provider used to make queries related to cross-chain interactions."}),"\n",(0,n.jsx)(s.h4,{id:"source-3",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"src/interfaces/bridge-adapter.ts:32"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"populatetransaction",children:"populateTransaction"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"populateTransaction"}),": ",(0,n.jsx)(s.code,{children:"object"})]}),"\n",(0,n.jsx)(s.p,{children:"Object that holds the functions that generate transactions to be signed by the user.\nFollows the pattern used by ethers.js."}),"\n",(0,n.jsx)(s.h4,{id:"approve-1",children:"approve()"}),"\n",(0,n.jsx)(s.p,{children:"Generates a transaction for approving some tokens to deposit into the L2 chain."}),"\n",(0,n.jsx)(s.h5,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l1Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L1 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l2Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L2 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"amount"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/NumberLike",children:(0,n.jsx)(s.code,{children:"NumberLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Amount of the token to approve."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts?"})]}),"\n",(0,n.jsx)(s.p,{children:"Additional options."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.overrides?"}),": ",(0,n.jsx)(s.code,{children:"CallOverrides"})]}),"\n",(0,n.jsx)(s.p,{children:"Optional transaction overrides."}),"\n",(0,n.jsx)(s.h5,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"`TransactionRequest`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Transaction that can be signed and executed to deposit the tokens."}),"\n",(0,n.jsx)(s.h4,{id:"deposit-1",children:"deposit()"}),"\n",(0,n.jsx)(s.p,{children:"Generates a transaction for depositing some tokens into the L2 chain."}),"\n",(0,n.jsx)(s.h5,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l1Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L1 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l2Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L2 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"amount"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/NumberLike",children:(0,n.jsx)(s.code,{children:"NumberLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Amount of the token to deposit."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts?"})]}),"\n",(0,n.jsx)(s.p,{children:"Additional options."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.direction?"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/enumerations/MessageDirection",children:(0,n.jsx)(s.code,{children:"MessageDirection"})})]}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.l2GasLimit?"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/NumberLike",children:(0,n.jsx)(s.code,{children:"NumberLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional gas limit to use for the transaction on L2."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.overrides?"}),": ",(0,n.jsx)(s.code,{children:"PayableOverrides"})]}),"\n",(0,n.jsx)(s.p,{children:"Optional transaction overrides."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.recipient?"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional address to receive the funds on L2. Defaults to sender."}),"\n",(0,n.jsx)(s.h5,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"`TransactionRequest`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Transaction that can be signed and executed to deposit the tokens."}),"\n",(0,n.jsx)(s.h4,{id:"withdraw-1",children:"withdraw()"}),"\n",(0,n.jsx)(s.p,{children:"Generates a transaction for withdrawing some tokens back to the L1 chain."}),"\n",(0,n.jsx)(s.h5,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l1Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L1 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l2Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L2 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"amount"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/NumberLike",children:(0,n.jsx)(s.code,{children:"NumberLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Amount of the token to withdraw."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts?"})]}),"\n",(0,n.jsx)(s.p,{children:"Additional options."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.overrides?"}),": ",(0,n.jsx)(s.code,{children:"Overrides"})]}),"\n",(0,n.jsx)(s.p,{children:"Optional transaction overrides."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.recipient?"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional address to receive the funds on L1. Defaults to sender."}),"\n",(0,n.jsx)(s.h5,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"`TransactionRequest`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Transaction that can be signed and executed to withdraw the tokens."}),"\n",(0,n.jsx)(s.h4,{id:"source-4",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"src/interfaces/bridge-adapter.ts:185"}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"approval",children:"approval()"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"approval"}),"(",(0,n.jsx)(s.code,{children:"l1Token"}),", ",(0,n.jsx)(s.code,{children:"l2Token"}),", ",(0,n.jsx)(s.code,{children:"opts"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"`BigNumber`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Queries the account's approval amount for a given L1 token."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l1Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L1 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l2Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L2 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts?"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.direction?"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/enumerations/MessageDirection",children:(0,n.jsx)(s.code,{children:"MessageDirection"})})]}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.overrides?"}),": ",(0,n.jsx)(s.code,{children:"Overrides"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.signer?"}),": ",(0,n.jsx)(s.code,{children:"Signer"})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"`BigNumber`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Amount of tokens approved for deposits from the account."}),"\n",(0,n.jsx)(s.h4,{id:"source-5",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"src/interfaces/bridge-adapter.ts:102"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"approve-2",children:"approve()"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"approve"}),"(",(0,n.jsx)(s.code,{children:"l1Token"}),", ",(0,n.jsx)(s.code,{children:"l2Token"}),", ",(0,n.jsx)(s.code,{children:"amount"}),", ",(0,n.jsx)(s.code,{children:"signer"}),", ",(0,n.jsx)(s.code,{children:"opts"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"`TransactionResponse`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Approves a deposit into the L2 chain."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l1Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L1 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l2Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L2 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"amount"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/NumberLike",children:(0,n.jsx)(s.code,{children:"NumberLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Amount of the token to approve."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"signer"}),": ",(0,n.jsx)(s.code,{children:"Signer"})]}),"\n",(0,n.jsx)(s.p,{children:"Signer used to sign and send the transaction."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts?"})]}),"\n",(0,n.jsx)(s.p,{children:"Additional options."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.overrides?"}),": ",(0,n.jsx)(s.code,{children:"Overrides"})]}),"\n",(0,n.jsx)(s.p,{children:"Optional transaction overrides."}),"\n",(0,n.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"`TransactionResponse`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Transaction response for the approval transaction."}),"\n",(0,n.jsx)(s.h4,{id:"source-6",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"src/interfaces/bridge-adapter.ts:123"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"deposit-2",children:"deposit()"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"deposit"}),"(",(0,n.jsx)(s.code,{children:"l1Token"}),", ",(0,n.jsx)(s.code,{children:"l2Token"}),", ",(0,n.jsx)(s.code,{children:"amount"}),", ",(0,n.jsx)(s.code,{children:"signer"}),", ",(0,n.jsx)(s.code,{children:"opts"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"`TransactionResponse`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Deposits some tokens into the L2 chain."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l1Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L1 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l2Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L2 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"amount"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/NumberLike",children:(0,n.jsx)(s.code,{children:"NumberLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Amount of the token to deposit."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"signer"}),": ",(0,n.jsx)(s.code,{children:"Signer"})]}),"\n",(0,n.jsx)(s.p,{children:"Signer used to sign and send the transaction."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts?"})]}),"\n",(0,n.jsx)(s.p,{children:"Additional options."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.l2GasLimit?"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/NumberLike",children:(0,n.jsx)(s.code,{children:"NumberLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional gas limit to use for the transaction on L2."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.overrides?"}),": ",(0,n.jsx)(s.code,{children:"Overrides"})]}),"\n",(0,n.jsx)(s.p,{children:"Optional transaction overrides."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.recipient?"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional address to receive the funds on L2. Defaults to sender."}),"\n",(0,n.jsx)(s.h4,{id:"returns-8",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"`TransactionResponse`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Transaction response for the deposit transaction."}),"\n",(0,n.jsx)(s.h4,{id:"source-7",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"src/interfaces/bridge-adapter.ts:146"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getdepositsbyaddress",children:"getDepositsByAddress()"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"getDepositsByAddress"}),"(",(0,n.jsx)(s.code,{children:"address"}),", ",(0,n.jsx)(s.code,{children:"opts"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"[",(0,n.jsx)(s.code,{children:"TokenBridgeMessage"}),"](/docs/build-on-morph/sdk/interfaces/TokenBridgeMessage)[]\\"]}),"\n",(0,n.jsx)(s.p,{children:"Gets all deposits for a given address."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"address"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Address to search for messages from."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts?"})]}),"\n",(0,n.jsx)(s.p,{children:"Options object."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.fromBlock?"}),": ",(0,n.jsx)(s.code,{children:"BlockTag"})]}),"\n",(0,n.jsx)(s.p,{children:"Block to start searching for messages from. If not provided, will start\nfrom the first block (block #0)."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.toBlock?"}),": ",(0,n.jsx)(s.code,{children:"BlockTag"})]}),"\n",(0,n.jsx)(s.p,{children:'Block to stop searching for messages at. If not provided, will stop at the\nlatest known block ("latest").'}),"\n",(0,n.jsx)(s.h4,{id:"returns-9",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"[",(0,n.jsx)(s.code,{children:"TokenBridgeMessage"}),"](/docs/build-on-morph/sdk/interfaces/TokenBridgeMessage)[]\\"]}),"\n",(0,n.jsx)(s.p,{children:"All deposit token bridge messages sent by the given address."}),"\n",(0,n.jsx)(s.h4,{id:"source-8",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"src/interfaces/bridge-adapter.ts:55"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getwithdrawalsbyaddress",children:"getWithdrawalsByAddress()"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"getWithdrawalsByAddress"}),"(",(0,n.jsx)(s.code,{children:"address"}),", ",(0,n.jsx)(s.code,{children:"opts"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"[",(0,n.jsx)(s.code,{children:"TokenBridgeMessage"}),"](/docs/build-on-morph/sdk/interfaces/TokenBridgeMessage)[]\\"]}),"\n",(0,n.jsx)(s.p,{children:"Gets all withdrawals for a given address."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"address"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Address to search for messages from."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts?"})]}),"\n",(0,n.jsx)(s.p,{children:"Options object."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.fromBlock?"}),": ",(0,n.jsx)(s.code,{children:"BlockTag"})]}),"\n",(0,n.jsx)(s.p,{children:"Block to start searching for messages from. If not provided, will start\nfrom the first block (block #0)."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.toBlock?"}),": ",(0,n.jsx)(s.code,{children:"BlockTag"})]}),"\n",(0,n.jsx)(s.p,{children:'Block to stop searching for messages at. If not provided, will stop at the\nlatest known block ("latest").'}),"\n",(0,n.jsx)(s.h4,{id:"returns-10",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"[",(0,n.jsx)(s.code,{children:"TokenBridgeMessage"}),"](/docs/build-on-morph/sdk/interfaces/TokenBridgeMessage)[]\\"]}),"\n",(0,n.jsx)(s.p,{children:"All withdrawal token bridge messages sent by the given address."}),"\n",(0,n.jsx)(s.h4,{id:"source-9",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"src/interfaces/bridge-adapter.ts:74"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"supportstokenpair",children:"supportsTokenPair()"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"supportsTokenPair"}),"(",(0,n.jsx)(s.code,{children:"l1Token"}),", ",(0,n.jsx)(s.code,{children:"l2Token"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"`boolean`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Checks whether the given token pair is supported by the bridge."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l1Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L1 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l2Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L2 token address."}),"\n",(0,n.jsx)(s.h4,{id:"returns-11",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"`boolean`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Whether the given token pair is supported by the bridge."}),"\n",(0,n.jsx)(s.h4,{id:"source-10",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"src/interfaces/bridge-adapter.ts:89"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"withdraw-2",children:"withdraw()"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"withdraw"}),"(",(0,n.jsx)(s.code,{children:"l1Token"}),", ",(0,n.jsx)(s.code,{children:"l2Token"}),", ",(0,n.jsx)(s.code,{children:"amount"}),", ",(0,n.jsx)(s.code,{children:"signer"}),", ",(0,n.jsx)(s.code,{children:"opts"}),"?): ",(0,n.jsx)(s.code,{children:"Promise"}),"`TransactionResponse`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Withdraws some tokens back to the L1 chain."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-12",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l1Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L1 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"l2Token"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"The L2 token address."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"amount"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/NumberLike",children:(0,n.jsx)(s.code,{children:"NumberLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Amount of the token to withdraw."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"signer"}),": ",(0,n.jsx)(s.code,{children:"Signer"})]}),"\n",(0,n.jsx)(s.p,{children:"Signer used to sign and send the transaction."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts?"})]}),"\n",(0,n.jsx)(s.p,{children:"Additional options."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.overrides?"}),": ",(0,n.jsx)(s.code,{children:"Overrides"})]}),"\n",(0,n.jsx)(s.p,{children:"Optional transaction overrides."}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"opts.recipient?"}),": ",(0,n.jsx)(s.a,{href:"/docs/build-on-morph/sdk/type-aliases/AddressLike",children:(0,n.jsx)(s.code,{children:"AddressLike"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional address to receive the funds on L1. Defaults to sender."}),"\n",(0,n.jsx)(s.h4,{id:"returns-12",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"`TransactionResponse`\\"]}),"\n",(0,n.jsx)(s.p,{children:"Transaction response for the withdraw transaction."}),"\n",(0,n.jsx)(s.h4,{id:"source-11",children:"Source"}),"\n",(0,n.jsx)(s.p,{children:"src/interfaces/bridge-adapter.ts:170"})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2333:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>l});var n=r(9474);const d={},i=n.createContext(d);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);
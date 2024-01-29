"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[3547],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),h=o,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var a=r(8063),o=(r(9496),r(9613));const n={title:"Faucet",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimstic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!"},i=void 0,c={unversionedId:"quick-start/faucet",id:"quick-start/faucet",title:"Faucet",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!",source:"@site/docs/quick-start/3-faucet.md",sourceDirName:"quick-start",slug:"/quick-start/faucet",permalink:"/docs/quick-start/faucet",draft:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/quick-start/3-faucet.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Faucet",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimstic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimstic zk-rollup solution. Try it now!"},sidebar:"StartSidebar",previous:{title:"Wallet Setup",permalink:"/docs/quick-start/wallet-setup"},next:{title:"Bridge",permalink:"/docs/quick-start/bridge"}},l={},p=[{value:"Faucet",id:"faucet",level:2},{value:"Sepolia ETH Faucet",id:"sepolia-eth-faucet",level:3},{value:"Morph ERC20 Faucet",id:"morph-erc20-faucet",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"faucet"},"Faucet"),(0,o.kt)("h3",{id:"sepolia-eth-faucet"},"Sepolia ETH Faucet"),(0,o.kt)("p",null,"To use Morph's public testnet, obtain testnet ETH on Sepolia, then bridge it to the Morph testnet."),(0,o.kt)("p",null,"Here are a few Sepolia faucet apps:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://sepoliafaucet.com/"},"https://sepoliafaucet.com/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.infura.io/faucet/sepolia"},"https://www.infura.io/faucet/sepolia")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://faucet.quicknode.com/ethereum/sepolia"},"https://faucet.quicknode.com/ethereum/sepolia")),(0,o.kt)("p",null,"Once you receive ETH on Sepolia, you should see it in your wallet on the Sepolia Network. "),(0,o.kt)("p",null,"It may take a few seconds for them to appear, but you can check the status by looking for a transaction to your address on the ",(0,o.kt)("a",{parentName:"p",href:"https://sepolia.etherscan.io/"},"Sepolia Block Explorer"),"."),(0,o.kt)("h3",{id:"morph-erc20-faucet"},"Morph ERC20 Faucet"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Currently, we set the limit that for each discord user, you can only request the tokens once every 24 hours.")),(0,o.kt)("p",null,"You can obtain morph's version of USDT on Sepolia through our discord faucet, here's how it works:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Join our discord server through this ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/f3Wh6ZK6XC"},"link"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the ",(0,o.kt)("em",{parentName:"p"},"#| discord-faucet")," channel")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"type ",(0,o.kt)("em",{parentName:"p"},"/faucet")," in the channel and add your Sepolia address behind it."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"command",src:r(8197).Z,width:"1352",height:"168"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Wait for a few seconds.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mining",src:r(3352).Z,width:"820",height:"192"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Once succeeded, you will see this in the channel.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"success",src:r(1903).Z,width:"852",height:"274"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Add the Morph Sepolia USDT information to your wallet")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\nSepolia address: "0x5F4c7D793D898e64eddd1fC82D27EcfB5F6e4596"\n\nMorph Sepolia address: "0xB4A71512cf4F3A8f675D2aeC76198D6419D219C7"\n\n')),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Check you wallet for USDT balance and start to bridge!")))}d.isMDXComponent=!0},8197:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/command-d0ad25a6587632bb5cd1f20e74b69b2a.png"},3352:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/mining-d624baa6a2a2c55b6df710899f7cd4d9.png"},1903:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/success-afb43ad13b976ca1ffd4bbad636a93f0.png"}}]);
"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[7e3],{3647:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>h,toc:()=>c});var r=o(3274),t=o(2333);const i={title:"How to Run a Morph Node",lang:"en-US"},s=void 0,h={id:"build-on-morph/developer-resources/how-to-run-a-morph-node",title:"How to Run a Morph Node",description:"Run a Morph Full Node",source:"@site/docs/build-on-morph/developer-resources/2-how-to-run-a-morph-node.md",sourceDirName:"build-on-morph/developer-resources",slug:"/build-on-morph/developer-resources/how-to-run-a-morph-node",permalink:"/docs/build-on-morph/developer-resources/how-to-run-a-morph-node",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/developer-resources/2-how-to-run-a-morph-node.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to Run a Morph Node",lang:"en-US"},sidebar:"DeveloperSidebar",previous:{title:"Bridge between Morph and Ethereum",permalink:"/docs/build-on-morph/build-on-morph/bridge-between-morph-and-ethereum"},next:{title:"How to Run a Morph Validator Node",permalink:"/docs/build-on-morph/developer-resources/how-to-run-a-validator-node"}},d={},c=[{value:"Run a Morph Full Node",id:"run-a-morph-full-node",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:3},{value:"Build executable binary",id:"build-executable-binary",level:3},{value:"Clone morph",id:"clone-morph",level:4},{value:"Build Geth",id:"build-geth",level:4},{value:"Build Node",id:"build-node",level:4},{value:"Sync from genesis block",id:"sync-from-genesis-block",level:3},{value:"Config Preparation",id:"config-preparation",level:4},{value:"Script to start the process",id:"script-to-start-the-process",level:4},{value:"Check sync status",id:"check-sync-status",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"run-a-morph-full-node",children:"Run a Morph Full Node"}),"\n",(0,r.jsxs)(n.p,{children:["This guide describes the approach to starting up a morph node. We create the folder ",(0,r.jsx)(n.code,{children:"~/.morph"})," as our home directory for the following example."]}),"\n",(0,r.jsx)(n.h3,{id:"hardware-requirements",children:"Hardware requirements"}),"\n",(0,r.jsxs)(n.p,{children:["Running the morph node requires 2 processes to be started, which are ",(0,r.jsx)(n.code,{children:"geth"})," and ",(0,r.jsx)(n.code,{children:"node"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Geth"})," is the Morph execution layer which needs to meet the ",(0,r.jsx)(n.a,{href:"https://github.com/ethereum/go-ethereum#hardware-requirements",children:"go-ethereum hardware requirements"}),", but with less storage, 500GB is enough so far."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Node"})," is the Morph consensus layer embedded tendermint which needs to meet the ",(0,r.jsx)(n.a,{href:"https://docs.tendermint.com/v0.34/tendermint-core/running-in-production.html#processor-and-memory",children:"tendermint hardware requirements"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"According to limitations of the current geth implementation, we only support archive mode for launching a Geth.  So the storage size of Geth will constantly increase along with blocks produced."})}),"\n",(0,r.jsx)(n.h3,{id:"build-executable-binary",children:"Build executable binary"}),"\n",(0,r.jsx)(n.h4,{id:"clone-morph",children:"Clone morph"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mkdir -p ~/.morph \ncd ~/.morph\ngit clone https://github.com/morph-l2/morph.git\n"})}),"\n",(0,r.jsx)(n.p,{children:"Currently, we use tag v0.1.0-beta as our beta version."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd morph\ngit checkout v0.1.0-beta\n"})}),"\n",(0,r.jsx)(n.h4,{id:"build-geth",children:"Build Geth"}),"\n",(0,r.jsx)(n.p,{children:"Notice: You need C compiler to build geth"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"make nccc_geth\n"})}),"\n",(0,r.jsx)(n.h4,{id:"build-node",children:"Build Node"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd ~/.morph/morph/node \nmake build\n"})}),"\n",(0,r.jsx)(n.h3,{id:"sync-from-genesis-block",children:"Sync from genesis block"}),"\n",(0,r.jsx)(n.h4,{id:"config-preparation",children:"Config Preparation"}),"\n",(0,r.jsx)(n.p,{children:"Download the config files and make data dir"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd ~/.morph\nwget https://raw.githubusercontent.com/morph-l2/config-template/main/holesky/data.zip\nunzip data.zip\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create a shared secret with node"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd ~/.morph\nopenssl rand -hex 32 > jwt-secret.txt\n"})}),"\n",(0,r.jsx)(n.h4,{id:"script-to-start-the-process",children:"Script to start the process"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Geth"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'./morph/go-ethereum/build/bin/geth --morph-holesky \\\n    --datadir "./geth-data" \\\n    --http --http.api=web3,debug,eth,txpool,net,engine \\\n    --authrpc.addr localhost \\\n    --authrpc.vhosts="localhost" \\\n    --authrpc.port 8551 \\\n    --authrpc.jwtsecret=./jwt-secret.txt \\\n    --miner.gasprice="100000000" \\\n    --log.filename=./geth.log\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"tail -f geth.log"})," to check if the Geth is running properly, or you can also exeucte the below curl command to check if you are connected to the peer."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl -X POST -H \'Content-Type: application/json\' --data \n\'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":74}\' \nlocalhost:8545\n\n{"jsonrpc":"2.0","id":74,"result":"0x3"}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Node"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"./morph/node/build/bin/morphnode --home ./node-data \\\n     --l2.jwt-secret ./jwt-secret.txt \\\n     --l2.eth http://localhost:8545 \\\n     --l2.engine http://localhost:8551 \\\n     --log.filename ./node.log\n"})}),"\n",(0,r.jsx)(n.p,{children:"tail -f node.log to check if the node is running properly, and you can also execute the command curl to check your node connection status."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl http://localhost:26657/net_info\n\n{\n  "jsonrpc": "2.0",\n  "id": -1,\n  "result": {\n    "listening": true,\n    "listeners": [\n      "Listener(@)"\n    ],\n    "n_peers": "3",\n    "peers": [\n      {\n        "node_info": {\n          "protocol_version": {\n            "p2p": "8",\n            "block": "11",\n            "app": "0"\n          },\n          "id": "0fb5ce425197a462a66de015ee5fbbf103835b8a",\n          "listen_addr": "tcp://0.0.0.0:26656",\n          "network": "chain-morph-holesky",\n          "version": "0.37.0-alpha.1",\n          "channels": "4020212223386061",\n          "moniker": "morph-dataseed-node-1",\n          "other": {\n            "tx_index": "on",\n            "rpc_address": "tcp://0.0.0.0:26657"\n          }\n        },\n        "is_outbound": true,\n'})}),"\n",(0,r.jsx)(n.h3,{id:"check-sync-status",children:"Check sync status"}),"\n",(0,r.jsxs)(n.p,{children:["curl ",(0,r.jsx)(n.a,{href:"http://localhost:26657/status",children:"http://localhost:26657/status"})," to check the sync status of the node"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n  "jsonrpc": "2.0",\n  "id": -1,\n  "result": {\n    "node_info": {\n      "protocol_version": {\n        "p2p": "8",\n        "block": "11",\n        "app": "0"\n      },\n      "id": "b3f34dc2ce9c4fee5449426992941aee1e09670f",\n      "listen_addr": "tcp://0.0.0.0:26656",\n      "network": "chain-morph-holesky",\n      "version": "0.37.0-alpha.1",\n      "channels": "4020212223386061",\n      "moniker": "my-morph-node",\n      "other": {\n        "tx_index": "on",\n        "rpc_address": "tcp://0.0.0.0:26657"\n      }\n    },\n    "sync_info": {\n      "latest_block_hash": "71024385DDBEB7B554DB11FD2AE097ECBD99B2AF826C11B2A74F7172F2DEE5D2",\n      "latest_app_hash": "",\n      "latest_block_height": "2992",\n      "latest_block_time": "2024-04-25T13:48:27.647889852Z",\n      "earliest_block_hash": "C7A73D3907C6CA34B9DFA043FC6D4529A8EAEC8F059E100055653E46E63F6F8E",\n      "earliest_app_hash": "",\n      "earliest_block_height": "1",\n      "earliest_block_time": "2024-04-25T09:06:30Z",\n      "catching_up": false\n    },\n    "validator_info": {\n      "address": "5FB3D3734640792F14B70E7A53FBBD39DB9787A8",\n      "pub_key": {\n        "type": "tendermint/PubKeyEd25519",\n        "value": "rzN67ZJWsaLSGGpNj7HOWs8nrL5kr1n+w0OckWUCetw="\n      },\n      "voting_power": "0"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'The returned "catching_up" indicates whether the node is in sync or not. True means it is in sync. Meanwhile, the returned latest_block_height indicates the latest block height this node synced.'})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},2333:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>h});var r=o(9474);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
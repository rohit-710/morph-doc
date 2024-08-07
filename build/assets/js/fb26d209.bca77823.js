"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[7e3],{3647:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var t=o(3274),r=o(2333);const s={title:"How to Run a Morph Node",lang:"en-US"},i=void 0,a={id:"build-on-morph/developer-resources/how-to-run-a-morph-node",title:"How to Run a Morph Node",description:"Run a Morph node with docker",source:"@site/docs/build-on-morph/developer-resources/2-how-to-run-a-morph-node.md",sourceDirName:"build-on-morph/developer-resources",slug:"/build-on-morph/developer-resources/how-to-run-a-morph-node",permalink:"/docs/build-on-morph/developer-resources/how-to-run-a-morph-node",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/developer-resources/2-how-to-run-a-morph-node.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to Run a Morph Node",lang:"en-US"},sidebar:"DeveloperSidebar",previous:{title:"Use Ecosystem Infrastructures",permalink:"/docs/build-on-morph/developer-resources/ecosystem-infrastructure"},next:{title:"How to Run a Morph Validator Node",permalink:"/docs/build-on-morph/developer-resources/how-to-run-a-validator-node"}},d={},h=[{value:"Run a Morph node with docker",id:"run-a-morph-node-with-docker",level:2},{value:"Quick Start",id:"quick-start",level:3},{value:"Advanced Usage",id:"advanced-usage",level:3},{value:"Customizing Data Directory",id:"customizing-data-directory",level:4},{value:"Customizing parameters",id:"customizing-parameters",level:4},{value:"Managing Snapshots Yourself",id:"managing-snapshots-yourself",level:4},{value:"Run a Morph Full Node from source",id:"run-a-morph-full-node-from-source",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:3},{value:"Build executable binary",id:"build-executable-binary",level:3},{value:"Clone morph",id:"clone-morph",level:4},{value:"Build Geth",id:"build-geth",level:4},{value:"Build Node",id:"build-node",level:4},{value:"Config Preparation",id:"config-preparation",level:3},{value:"Sync from snapshot(Recommended)",id:"sync-from-snapshotrecommended",level:3},{value:"Download snapshot",id:"download-snapshot",level:4},{value:"Start execution client",id:"start-execution-client",level:4},{value:"Start consensus client",id:"start-consensus-client",level:4},{value:"Check sync status",id:"check-sync-status",level:4},{value:"Sync from genesis block(Not Recommended)",id:"sync-from-genesis-blocknot-recommended",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"run-a-morph-node-with-docker",children:"Run a Morph node with docker"}),"\n",(0,t.jsx)(n.p,{children:"This guide will help you start a full node running in the docker container."}),"\n",(0,t.jsx)(n.h3,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsx)(n.p,{children:"Currently, users need to build the Docker image themselves using the Docker file and Docker Compose file we provide. However, there's no need to worry, as you only need one command to quickly start a full node. This command will handle everything for you, including downloading snapshots, structure data and config files, building the image, and starting the container."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Clone the dockerfile repository"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone --branch v0.2.0-beta https://github.com/morph-l2/morph.git\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Run the following command"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd ops/publicnode\nmake run-holesky-node\n"})}),"\n",(0,t.jsx)(n.p,{children:"Running this command will create a .morph-holesky directory in your user directory by default, serving as the node's home directory. Before starting the node, this command will perform several preparations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create the node's home directory and copy the default configuration file into it."}),"\n",(0,t.jsx)(n.li,{children:"Prepare the secret-jwt.txt file for signature verification during RPC calls between geth and the node."}),"\n",(0,t.jsx)(n.li,{children:"Download the latest snapshot data to speed up node synchronization."}),"\n",(0,t.jsx)(n.li,{children:"Place the extracted snapshot data into the corresponding folder within the home directory."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After completing these preparations, the command will automatically build the image and start the container, with Docker volumes mounted to the created node home directory. If this is your first run, these processes may take some time."}),"\n",(0,t.jsx)(n.p,{children:"Note that if you are starting the node for the first time but already have a .morph-holesky directory, you must delete that directory before running the command. Otherwise, the preparation phase will be skipped, which may prevent the node from running properly."}),"\n",(0,t.jsx)(n.p,{children:"If the command fails during execution, you will also need to delete the previously created .morph-holesky directory before restarting."}),"\n",(0,t.jsx)(n.h3,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,t.jsxs)(n.p,{children:["With the ",(0,t.jsx)(n.em,{children:"Quick Start"})," guide above, you can quickly start a node using the default configuration files. However, we also support customizing the node's home directory and parameter settings."]}),"\n",(0,t.jsx)(n.h4,{id:"customizing-data-directory",children:"Customizing Data Directory"}),"\n",(0,t.jsxs)(n.p,{children:["The host directory paths that are mounted by the Docker container are specified in the ",(0,t.jsx)(n.code,{children:"ops/publicnode/.env"})," file."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"##the home folder of your Morph node\nNODE_HOME=${HOME}/.morph-holesky \n## the data directory for your execution client: geth\nGETH_DATA_DIR=${NODE_HOME}/geth-data\n## the data directory for you consensus client: tendermint\nNODE_DATA_DIR=${NODE_HOME}/node-data\n## the entrypoint shell script for start execution client\nGETH_ENTRYPOINT_FILE=${NODE_HOME}/entrypoint-geth.sh\n## the jwt secret file for communicating between execution client and consensus client via engine API\nJWT_SECRET_FILE=${NODE_HOME}/jwt-secret.txt\n## the snapshot name for holesky Morph node \nSNAPSHOT_NAME=snapshot-20240805-1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You have the flexibility to customize the directory paths as per your requirements.\nPlease note that if you want make ",(0,t.jsx)(n.em,{children:"run-holesky-node"})," to generate the necessary configuration files and snapshots for running the node, you need to ensure that the specified node home directory is new (not previously created) and do ",(0,t.jsx)(n.em,{children:"NOT"})," alter the paths for ",(0,t.jsx)(n.code,{children:"GETH_DATA_DIR"})," and ",(0,t.jsx)(n.code,{children:"NODE_DATA_DIR"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"customizing-parameters",children:"Customizing parameters"}),"\n",(0,t.jsxs)(n.p,{children:["The default configuration required for node startup is located in the ",(0,t.jsx)(n.code,{children:"ops/publicnode/holesky "}),"directory. If your node home directory is empty, the ",(0,t.jsx)(n.em,{children:"run"})," command will automatically copy these configuration files to the directory mounted in the node's docker container."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"\u2514\u2500\u2500 holesky\n    \u251c\u2500\u2500 entrypoint-geth.sh\n    \u251c\u2500\u2500 geth-data\n    \u2502\xa0\xa0 \u2514\u2500\u2500 static-nodes.json\n    \u2514\u2500\u2500 node-data\n        \u251c\u2500\u2500 config\n        \u2502\xa0\xa0 \u251c\u2500\u2500 config.toml\n        \u2502\xa0\xa0 \u2514\u2500\u2500 genesis.json\n        \u2514\u2500\u2500 data\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you wish to modify the Geth startup command, you can do so by editing the ",(0,t.jsx)(n.code,{children:"entrypoint-geth.sh"})," file. For adjustments to the Tendermint-related configuration parameters, you should modify the node-data/config/config.toml file.\nNote that if you have customized your ",(0,t.jsx)(n.code,{children:"GETH_DATA_DIR"})," and ",(0,t.jsx)(n.code,{children:"NODE_DATA_DIR"}),", you will need to manually place the modified configuration files in the appropriate locations."]}),"\n",(0,t.jsx)(n.h4,{id:"managing-snapshots-yourself",children:"Managing Snapshots Yourself"}),"\n",(0,t.jsxs)(n.p,{children:["You may also manually manage snapshot, particularly if you are using custom paths for the node directories.\nThe ",(0,t.jsx)(n.em,{children:"make download-and-decompress-snapshot"})," command in the ",(0,t.jsx)(n.code,{children:"ops/publicnode"})," directory will assist you in downloading and decompressing the snapshot archive."]}),"\n",(0,t.jsxs)(n.p,{children:["Then, you need to manually place the decompressed data files in the appropriate node data directories.\nFor example, if the snapshot folder is named ",(0,t.jsx)(n.code,{children:"snapshot-20240805-1"}),", move the contents from ",(0,t.jsx)(n.code,{children:"snapshot-20240805-1/geth"})," to the ",(0,t.jsx)(n.code,{children:"${GETH_DATA_DIR}/geth"})," directory and the contents from ",(0,t.jsx)(n.code,{children:"snapshot-20240805-1/data"})," to the ",(0,t.jsx)(n.code,{children:"${NODE_DATA_DIR}/data"})," directory."]}),"\n",(0,t.jsx)(n.h2,{id:"run-a-morph-full-node-from-source",children:"Run a Morph Full Node from source"}),"\n",(0,t.jsxs)(n.p,{children:["This guide outlines the steps to start a Morph node. The example assumes the home directory is ",(0,t.jsx)(n.code,{children:"~/.morph"})]}),"\n",(0,t.jsx)(n.h3,{id:"hardware-requirements",children:"Hardware requirements"}),"\n",(0,t.jsxs)(n.p,{children:["Running the morph node requires 2 processes",":L",(0,t.jsx)(n.code,{children:"geth"})," and ",(0,t.jsx)(n.code,{children:"node"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Geth"}),":the"," Morph execution layer which needs to meet the ",(0,t.jsx)(n.a,{href:"https://github.com/ethereum/go-ethereum#hardware-requirements",children:"go-ethereum hardware requirements"}),", but with less storage, 500GB is enough so far."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Node"}),":the"," Morph consensus layer embedded tendermint which needs to meet the ",(0,t.jsx)(n.a,{href:"https://docs.tendermint.com/v0.34/tendermint-core/running-in-production.html#processor-and-memory",children:"tendermint hardware requirements"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"According to limitations of the current geth implementation, we only support archive mode for launching a Geth.  So the storage size of Geth will constantly increase along with blocks produced."})}),"\n",(0,t.jsx)(n.h3,{id:"build-executable-binary",children:"Build executable binary"}),"\n",(0,t.jsx)(n.h4,{id:"clone-morph",children:"Clone morph"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mkdir -p ~/.morph \ncd ~/.morph\ngit clone https://github.com/morph-l2/morph.git\n"})}),"\n",(0,t.jsx)(n.p,{children:"Currently, we use tag v0.2.0-beta as our beta version."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd morph\ngit checkout v0.2.0-beta\n"})}),"\n",(0,t.jsx)(n.h4,{id:"build-geth",children:"Build Geth"}),"\n",(0,t.jsx)(n.p,{children:"Notice: You need C compiler to build geth"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"make nccc_geth\n"})}),"\n",(0,t.jsx)(n.h4,{id:"build-node",children:"Build Node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd ~/.morph/morph/node \nmake build\n"})}),"\n",(0,t.jsx)(n.h3,{id:"config-preparation",children:"Config Preparation"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Download the config files and make data dir"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd ~/.morph\nwget https://raw.githubusercontent.com/morph-l2/config-template/main/holesky/data.zip\nunzip data.zip\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create a shared secret with node"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd ~/.morph\nopenssl rand -hex 32 > jwt-secret.txt\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sync-from-snapshotrecommended",children:"Sync from snapshot(Recommended)"}),"\n",(0,t.jsx)(n.p,{children:"You should build the binary and prepare the config files in the above steps first, then download the snapshot."}),"\n",(0,t.jsx)(n.h4,{id:"download-snapshot",children:"Download snapshot"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"## download package\nwget -q --show-progress https://snapshot.morphl2.io/holesky/snapshot-20240805-1.tar.gz\n## uncompress package\ntar -xzvf snapshot-20240805-1.tar.gz\n"})}),"\n",(0,t.jsx)(n.p,{children:"Extracting snapshot data to the data directory your node points to"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mv snapshot-20240805-1/geth geth-data\nmv snapshot-20240805-1/data node-data\n"})}),"\n",(0,t.jsx)(n.h4,{id:"start-execution-client",children:"Start execution client"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'./morph/go-ethereum/build/bin/geth --morph-holesky \\\n    --datadir "./geth-data" \\\n    --http --http.api=web3,debug,eth,txpool,net,engine \\\n    --authrpc.addr localhost \\\n    --authrpc.vhosts="localhost" \\\n    --authrpc.port 8551 \\\n    --authrpc.jwtsecret=./jwt-secret.txt \\\n    --log.filename=./geth.log\n'})}),"\n",(0,t.jsx)(n.p,{children:"tail -f geth.log to check if the Geth is running properly, or you can also exeucte the curl command below to check if you are connected to the peer."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Shell",children:'curl -X POST -H \'Content-Type: application/json\' --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":74}\' localhost:8545\n\n{"jsonrpc":"2.0","id":74,"result":"0x3"}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"start-consensus-client",children:"Start consensus client"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:" ./morph/node/build/bin/morphnode --home ./node-data \\\n     --l2.jwt-secret ./jwt-secret.txt \\\n     --l2.eth http://localhost:8545 \\\n     --l2.engine http://localhost:8551 \\\n     --log.filename ./node.log \n"})}),"\n",(0,t.jsx)(n.p,{children:"tail -f node.log to check if the node is running properly, and you can also execute the command curl to check your node connection status."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl http://localhost:26657/net_info\n\n{\n  "jsonrpc": "2.0",\n  "id": -1,\n  "result": {\n    "listening": true,\n    "listeners": [\n      "Listener(@)"\n    ],\n    "n_peers": "3",\n    "peers": [\n      {\n        "node_info": {\n          "protocol_version": {\n            "p2p": "8",\n            "block": "11",\n            "app": "0"\n          },\n          "id": "0fb5ce425197a462a66de015ee5fbbf103835b8a",\n          "listen_addr": "tcp://0.0.0.0:26656",\n          "network": "chain-morph-holesky",\n          "version": "0.37.0-alpha.1",\n          "channels": "4020212223386061",\n          "moniker": "morph-dataseed-node-1",\n          "other": {\n            "tx_index": "on",\n            "rpc_address": "tcp://0.0.0.0:26657"\n          }\n        },\n        "is_outbound": true,\n ....... \n'})}),"\n",(0,t.jsx)(n.h4,{id:"check-sync-status",children:"Check sync status"}),"\n",(0,t.jsxs)(n.p,{children:["curl ",(0,t.jsx)(n.a,{href:"http://localhost:26657/status",children:"http://localhost:26657/status"})," to check the sync status of the node"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'{\n  "jsonrpc": "2.0",\n  "id": -1,\n  "result": {\n    "node_info": {\n      "protocol_version": {\n        "p2p": "8",\n        "block": "11",\n        "app": "0"\n      },\n      "id": "b3f34dc2ce9c4fee5449426992941aee1e09670f",\n      "listen_addr": "tcp://0.0.0.0:26656",\n      "network": "chain-morph-holesky",\n      "version": "0.37.0-alpha.1",\n      "channels": "4020212223386061",\n      "moniker": "my-morph-node",\n      "other": {\n        "tx_index": "on",\n        "rpc_address": "tcp://0.0.0.0:26657"\n      }\n    },\n    "sync_info": {\n      "latest_block_hash": "71024385DDBEB7B554DB11FD2AE097ECBD99B2AF826C11B2A74F7172F2DEE5D2",\n      "latest_app_hash": "",\n      "latest_block_height": "2992",\n      "latest_block_time": "2024-04-25T13:48:27.647889852Z",\n      "earliest_block_hash": "C7A73D3907C6CA34B9DFA043FC6D4529A8EAEC8F059E100055653E46E63F6F8E",\n      "earliest_app_hash": "",\n      "earliest_block_height": "1",\n      "earliest_block_time": "2024-04-25T09:06:30Z",\n      "catching_up": false\n    },\n    "validator_info": {\n      "address": "5FB3D3734640792F14B70E7A53FBBD39DB9787A8",\n      "pub_key": {\n        "type": "tendermint/PubKeyEd25519",\n        "value": "rzN67ZJWsaLSGGpNj7HOWs8nrL5kr1n+w0OckWUCetw="\n      },\n      "voting_power": "0"\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:['The returned "catching_up" indicates  whether the node is in sync or not. ',(0,t.jsx)(n.em,{children:"True"})," means it is in sync. Meanwhile, the returned  latest_block_height indicates the latest block height this node synced."]}),"\n",(0,t.jsx)(n.h3,{id:"sync-from-genesis-blocknot-recommended",children:"Sync from genesis block(Not Recommended)"}),"\n",(0,t.jsx)(n.p,{children:"Start the execution client and consensus client directly without downloading snapshot"})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2333:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(9474);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
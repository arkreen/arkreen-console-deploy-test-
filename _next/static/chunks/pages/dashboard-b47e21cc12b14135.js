(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{26117:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(70947)}])},70947:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var i=n(85893),a=n(67294),r=n(69077),s=n(47640),l=n(99559),o=n(32983),d=n(420),c=n.n(d),u=n(40254),p=n(11163);function x(e){let t=(0,p.useRouter)(),[n,r]=(0,a.useState)(e.current?e.current:1);function s(){n>1&&(r(n-1),o(n-1))}function l(){r(n+1),o(n+1)}return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:c()["pagination-box-pc"],children:[(0,i.jsx)("div",{className:c()["pagination-btn"],onClick:()=>l(),children:(0,i.jsx)(u.m9,{})}),(0,i.jsx)("div",{className:c()["pagination-btn"]+" "+c().selected,children:n}),(0,i.jsx)("div",{className:n<=1?c()["pagination-btn"]+" "+c().disable:c()["pagination-btn"],onClick:()=>s(),children:(0,i.jsx)(u.Ey,{})})]}),(0,i.jsxs)("div",{className:c()["pagination-box-m"],children:[(0,i.jsx)("div",{className:n<=1?c()["pagination-btn"]+" "+c().disable:c()["pagination-btn"],onClick:()=>s(),children:(0,i.jsx)(u.Ey,{})}),(0,i.jsx)("div",{className:c()["pagination-btn"]+" "+c().selected,children:n}),(0,i.jsx)("div",{className:c()["pagination-btn"],onClick:()=>l(),children:(0,i.jsx)(u.m9,{})})]})]});function o(n){var i;null===(i=e.onChange)||void 0===i||i.call(null,n,1);let a=new URLSearchParams(location.search);a.set("page",""+n),t.push("?"+a.toString())}}var m=n(9098),g=n.n(m);function y(e){return(0,i.jsx)("div",{className:g()["arkreen-table-m"],children:e.dataList&&e.dataList.length>0?e.dataList.map(t=>(0,i.jsx)("div",{className:g()["arkreen-m-table"],children:(0,i.jsx)("table",{style:{width:"100%"},children:(0,i.jsx)("tbody",{children:e.columns.map(e=>(0,i.jsxs)("tr",{style:{height:"32px"},children:[(0,i.jsx)("td",{style:{width:"120px",color:"#707079"},children:e.title}),(0,i.jsx)("td",{style:{color:"#101020"},children:t[e.dataIndex]})]},e.title))})})},t.key)):(0,i.jsx)(i.Fragment,{children:0==e.dataList.length?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{style:{backgroundColor:"#FFFFFF",padding:"16px",borderRadius:"8px"},children:(0,i.jsx)(o.Z,{})})}):(0,i.jsx)(i.Fragment,{children:e.emptyItems.map(t=>(0,i.jsx)("div",{className:g()["arkreen-m-table"],children:(0,i.jsx)("table",{style:{width:"100%"},children:(0,i.jsx)("tbody",{children:e.columns.map(e=>(0,i.jsxs)("tr",{style:{height:"32px"},children:[(0,i.jsx)("td",{style:{width:"120px"},children:e.title}),(0,i.jsx)("td",{children:(0,i.jsx)(l.Z.Input,{style:{height:"32px"},active:!0,block:!0,size:"small"})})]},e.title+"-"+Math.random()))})})},Math.random().toString()))})})})}function h(e){var t;let n=function(e){for(var t=Array(e),n=0;n<e;++n)t[n]={};return t}(e.pageSize?e.pageSize:25);return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:g()["arkreen-table-pc"],children:(0,i.jsx)(s.Z,{className:g()["table-border"],size:"small",scroll:e.scroll,pagination:!1,columns:e.columns,dataSource:e.loading?[]:e.datalist,locale:{emptyText:e.loading?n.map(t=>(0,i.jsx)("div",{style:{width:"100%",display:"flex",gap:"12px"},children:e.columns.map(e=>(0,i.jsx)(l.Z.Button,{block:!0,active:!0,style:{marginTop:"3px",marginBottom:"3px",flex:10}},e.key+"-"+Math.random()))},Math.random())):(0,i.jsx)(o.Z,{})}})}),(0,i.jsx)(y,{columns:e.columns,dataList:e.datalist,emptyItems:n}),(null===(t=e.datalist)||void 0===t?void 0:t.length)<25&&1===e.currentPage&&!e.hidePagination?"":(0,i.jsx)(x,{current:e.currentPage,onChange:e.onPageChange})]})}var f=n(27790),b=n(37911),v=n(96074),_=n(18662),j=n(26162),k=n(90327),S=n(79331),w=n(24135),E={getPowerPlants:async function(e){return await w.Z.sendJsonRPC("/v1","rms_getPowerPlants",{owner:e})},requestPriceAuthorization:async function(e,t,n,i,a){return await w.Z.sendJsonRPC("/v1","rms_requestPriceAuthorization",{owner:e,plantId:n,price:a,power:i,currency:t})}},N=n(82970),P=JSON.parse('{"hb":{"DA":[{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"miner","type":"address"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct Sig","name":"permitMiner","type":"tuple"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct Signature","name":"permitToPay","type":"tuple"}],"name":"RemoteMinerOnboard","outputs":[],"stateMutability":"nonpayable","type":"function"}],"Yv":[{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}}');let{chain:T,chains:Z}=(0,N.Hy)(),A="0xc4f795514586275c799729af5ae7113bdb7ccc86";async function C(e,t){return await (0,N.a4)({address:"0x".concat(e.substring(2)),abi:P.hb.Yv,functionName:"nonces",args:[t],chainId:Z[0].id})}async function M(e){try{return await (0,N.EC)({address:"0x".concat(e.substring(2))})}catch(e){return}}var O={assembleSignTypedData:async function(e,t,n,i){let a=await M(e);if(!a)return;let r=await C(e,t),s={name:a.name,version:"1",chainId:null==T?void 0:T.id,verifyingContract:"0x".concat(e.substring(2))},l={owner:"0x".concat(t.substring(2)),spender:"0x".concat(A.substring(2)),value:i,nonce:r.toNumber(),deadline:n};return{types:{EIP712Domain:[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],Permit:[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}]},primaryType:"Permit",domain:s,value:l}},tokenInfo:M,etherTokenNonce:C,etherRemoteMinerOnboard:async function(e,t,n,i){let a=await (0,N.$q)({address:"0x".concat(A.replace("0x","")),abi:P.hb.DA,functionName:P.hb.DA[0].name,args:[e,t,n,i],chainId:null==T?void 0:T.id});return await (0,N.n9)(a)},etherSignTypeData:async function(e){return console.log(e),await (0,N.xq)(e)},waitTransaction:async function(e){let t=await (0,N.Mn)({hash:"0x".concat(e.replace("0x",""))});return t},etherBalance:async function(e,t){if(t){let n=await (0,N.EG)({address:"0x".concat(e.substring(2)),token:"0x".concat(t.substring(2))});return n}{let t=await (0,N.EG)({address:"0x".concat(e.substring(2))});return t}}},F=n(2593),R=n(79090),z=n(45962);function B(e){let t=(0,z.uX)(),[n,r]=(0,a.useState)(!1),[s,l]=(0,a.useState)(!1),[o,d]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!0),[p,x]=(0,a.useState)(!1);async function m(){var n,i,a;d(!1),x(!1),k.Z.sendEvent({category:"Event_Click_Payment_Button",action:"Event_Click_Payment_Button",label:"user address:"+e.args[0]+",miner:"+e.args[1]}),l(!1),r(!0);let s={isSuccess:!1,hash:"",message:"",isLoading:"none"};null===(n=e.onWriteData)||void 0===n||n.call(1,s);try{s.isLoading="pending",d(!0);let n=await O.etherRemoteMinerOnboard(e.args[0],e.args[1],e.args[2],e.args[3]);d(!1),console.log("txHash:"+n.hash),l(!0),s.hash=n.hash,null===(a=e.onWriteData)||void 0===a||a.call(1,s),t({hash:n.hash,description:"Remote Miner Onboard"});let i=await O.waitTransaction(n.hash);s.isSuccess=1==i.status}catch(t){d(!1);let e="-->"+JSON.stringify(t);console.log(e),e.indexOf("Internal JSON-RPC error")>=0?s.message="钱包调用合约时网络异常":e.indexOf("user rejected")>=0||e.indexOf("User rejected")>=0?s.message="用户拒绝本次交易":s.message=JSON.stringify(t)}s.isLoading="done",r(!1),null===(i=e.onWriteData)||void 0===i||i.call(1,s)}return(0,a.useEffect)(()=>{document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState?u(!1):"visible"===document.visibilityState&&u(!0)})},[]),(0,a.useEffect)(()=>{(0,S.xb)("wc:"+o+"   visibility:"+c),o&&c&&(0,S.tq)()&&window.setTimeout(()=>{o&&((0,S.xb)("页面未发生切换，提示用户尝试手动切换唤起钱包APP"),x(!0))},5e3)},[o]),(0,i.jsx)("div",{children:s?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{style:{paddingBlock:"12px",color:"#101020",fontSize:"16px",paddingInline:"20px"},children:[(0,i.jsx)(R.Z,{}),"\xa0 Payment in progress..."]})}):(0,i.jsxs)(i.Fragment,{children:[p?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)("div",{style:{paddingBlock:"12px",color:"#101020",fontSize:"16px"},children:"Click to pay"}),p?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)("div",{style:{paddingTop:"12px"},children:(0,i.jsx)(_.ZP,{style:{width:100},size:"large",disabled:n,type:"primary",onClick:()=>m(),children:"Pay"})}),p?(0,i.jsx)("div",{style:{textAlign:"center",paddingBlock:"12px",color:"#000000"},children:"If the wallet app does not auto open, please try switching manually."}):(0,i.jsx)(i.Fragment,{}),p?(0,i.jsx)("div",{style:{textAlign:"center",paddingBlock:"12px"},children:(0,i.jsx)(_.ZP,{size:"large",type:"primary",onClick:()=>void(window.location.href="wc://"),children:"Open Wallet"})}):(0,i.jsx)(i.Fragment,{})]})})}var I=n(43298),W=n.n(I),L=n(28508);function U(e){let[t,n]=(0,a.useState)(e.isModalOpen);return(0,a.useEffect)(()=>{n(e.isModalOpen)},[e.isModalOpen]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:W()["arkreen-modal"],style:{display:t?"flex":"none"},children:(0,i.jsx)("div",{className:W()["arkreen-modal-body"],children:(0,i.jsxs)("div",{className:W()["arkreen-modal-context"],children:[(0,i.jsxs)("div",{style:{display:"flex",color:"#101020",fontSize:"16px"},children:[(0,i.jsx)("div",{style:{fontWeight:"bold",flex:"1"},children:e.title}),(0,i.jsx)("div",{style:{textAlign:"right",cursor:"pointer"},onClick:()=>{var t;null===(t=e.onClose)||void 0===t||t.call(1,!1)},children:(0,i.jsx)(L.Z,{})})]}),e.children]})})})})}function J(e){let{address:t}=(0,r.mA)(),[n,s]=(0,a.useState)([]),[o,d]=(0,a.useState)(!1),[c,u]=(0,a.useState)("Request price authorization..."),[p,x]=(0,a.useState)(!1),[m,y]=(0,a.useState)(!0),[h,w]=(0,a.useState)(!1);async function N(e){x(!1),w(!1),k.Z.sendEvent({category:"Event_Click_Buy_Now_Button",action:"Event_Click_Buy_Now_Button",label:"user address:"+t}),s([]),d(!0),u("Request price authorization..."),(0,S.xb)("开始获取价格授权信息..."),k.Z.sendEvent({category:"Event_Request_Price_Authorization",action:"Event_Request_Price_Authorization",label:"user address:"+t});let n=await E.requestPriceAuthorization(""+t,e.currency,e.plantId,Number(e.power),Number(e.price));if((0,S.xb)("获取的价格授权信息为:"+JSON.stringify(n)),n.error){k.Z.sendEvent({category:"Event_Request_Price_Authorization_Failed",action:"Event_Request_Price_Authorization_Failed",label:"request price authorization failed:"+JSON.stringify(n.error)});return}let i=n.result.signature,a=n.result.address,r=n.result.owner,l=n.result.expiredTime,o=Number(i.v),c=i.r,p=i.s;(0,S.xb)("开始查询用于支付的代币信息："+e.currency);let m=await O.tokenInfo(e.currency);if(!m){(0,S.xb)("获取的用于支付的代币信息失败，请检查链网络是否选择正确以及合约地址是否有误！");return}(0,S.xb)("查询的代币信息为："+JSON.stringify(m)),k.Z.sendEvent({category:"Event_Check_User_Balance",action:"Event_Check_User_Balance",label:"user address:"+t+"  ,type:Matic"}),u("Check balance ...");let g=await O.etherBalance(t);if(console.log(g),!g){(0,S.xb)("查询Matic余额失败，终止交易!"),f.ZP.error("Check matic balance failed!"),d(!1),k.Z.sendEvent({category:"Event_Check_Balance_Failed",action:"Event_Check_Balance_Failed",label:"user address:"+t+"  ,type:Matic"});return}let y=Number(g.formatted);if(y<.1){(0,S.xb)("Matic余额不足，终止交易!"),f.ZP.error("Insufficient fund to pay. Please check your Matic balance."),d(!1),k.Z.sendEvent({category:"Event_User_Balance_Insufficient",action:"Event_User_Balance_Insufficient",label:"user address:"+t+"  ,matic:"+y});return}k.Z.sendEvent({category:"Event_Check_User_Balance",action:"Event_Check_User_Balance",label:"user address:"+t+"  ,type:"+m.symbol});let h=await O.etherBalance(t,e.currency);if(console.log(h),!h){(0,S.xb)("查询"+m.symbol+"余额失败，终止交易!"),f.ZP.error("Check "+m.symbol+" balance failed!"),k.Z.sendEvent({category:"Event_Check_Balance_Failed",action:"Event_Check_Balance_Failed",label:"user address:"+t+"  ,type:"+m.symbol});return}let b=Number(h.formatted),v=Number(e.price);if(console.log("currency:"+b),console.log("price:"+v),b<v){(0,S.xb)(h.symbol+"余额不足，终止交易!"),f.ZP.error("Insufficient fund to pay. Please check your "+h.symbol+" balance."),d(!1),k.Z.sendEvent({category:"Event_User_Balance_Insufficient",action:"Event_User_Balance_Insufficient",label:"user address:"+t+"  ,"+h.symbol+":"+b});return}k.Z.sendEvent({category:"Event_User_Permit_Sign",action:"Event_User_Permit_Sign",label:"user address:"+t}),(0,S.xb)("开始进行permit签名..."),u("Signing...");let _=await P(e.price,m.decimals,e.currency,r,l);if(_){(0,S.xb)("permit签名结果:"+JSON.stringify(_));try{s([r,a,{v:o,r:c,s:p},_])}catch(n){let e="-->"+JSON.stringify(n);if(console.log(e),e.indexOf("Internal JSON-RPC error")>=0){(0,S.xb)("钱包调用合约时网络异常"),k.Z.sendEvent({category:"Event_User_Sign_Internal_Error",action:"Event_User_Sign_Internal_Error",label:"info:"+JSON.stringify(n)});return}e.indexOf("User rejected")>=0&&((0,S.xb)("用户拒绝本次交易"),k.Z.sendEvent({category:"Event_User_Rejected_Sign",action:"Event_User_Rejected_Sign",label:"user address:"+t}));return}}}async function P(e,n,i,a,r){try{let t=1;(""+e).toString().indexOf(".")>0&&(t=1e4);let s=F.O$.from(e*t).mul(F.O$.from(10).pow(Number(n))).div(t),l=await O.assembleSignTypedData(i,a,r,s.toHexString());l||((0,S.xb)("组装签名数据时出错!"),k.Z.sendEvent({category:"Event_User_Sign_Error",action:"Event_User_Sign_Error",label:"info: package sign data error"}),d(!1)),x(!0);let o=await O.etherSignTypeData(l);if(x(!1),console.log(o),(0,S.xb)("签名结果："+JSON.stringify(o)),!o)return;let c=o.slice(0,66),u="0x"+o.slice(66,130),p=Number("0x"+o.slice(130,132)),m=s.toHexString();return{token:i,value:m,deadline:r,v:p,r:c,s:u}}catch(n){let e="error -> "+n;console.log(e),e.indexOf("User rejected request")>=0&&((0,S.xb)("用户拒绝本次permit签名"),d(!1),k.Z.sendEvent({category:"Event_User_Rejected_Sign",action:"Event_User_Rejected_Sign",label:"user address:"+t}));return}}async function T(t){"none"===t.isLoading?((0,S.xb)("开始调用合约方法RemoteMinerOnboard..."),k.Z.sendEvent({category:"Event_Remote_Miner_Onboard",action:"Event_Remote_Miner_Onboard",label:"start call chain code function:RemoteMinerOnboard"})):"pending"===t.isLoading?(0,S.xb)("本次交易Hash:"+t.hash):"done"===t.isLoading?((0,S.xb)("本次交易结果:"+(t.isSuccess?"成功":"失败")),t.isSuccess?(f.ZP.success("购买成功"),k.Z.sendEvent({category:"Event_Remote_Miner_Onboard_Success",action:"Event_Remote_Miner_Onboard_Success",label:"call chain code function RemoteMinerOnboard success,txhash:"+t.hash}),e.refreshSource.call(1)):(f.ZP.error("购买失败"),(0,S.xb)("本次交易失败原因:"+t.message),k.Z.sendEvent({category:"Event_Remote_Miner_Onboard_Failed",action:"Event_Remote_Miner_Onboard_Failed",label:"call chain code function RemoteMinerOnboard failed, txhash:"+t.hash+",message:"+t.message})),d(!1)):(0,S.xb)("交易信息未知！")}return(0,a.useEffect)(()=>{document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState?y(!1):"visible"===document.visibilityState&&y(!0)})},[]),(0,a.useEffect)(()=>{(0,S.xb)("wc:"+p+"   visibility:"+m),p&&m&&(0,S.tq)()&&window.setTimeout(()=>{p&&((0,S.xb)("页面未发生切换，提示用户尝试手动切换唤起钱包APP"),w(!0))},5e3)},[p]),(0,i.jsxs)("div",{children:[e.datalist.length>0?e.datalist.map(t=>(0,i.jsxs)("div",{className:g()["rm-cell-grid"],children:[(0,i.jsx)("div",{className:g()["rm-cell-td-img"],children:(0,i.jsx)(b.C,{shape:"square",className:g()["rm-remote-miner-logo"],children:"Remote Miner"})}),(0,i.jsxs)("div",{className:g()["rm-cell-td-detail"],children:[(0,i.jsx)("div",{className:g()["rm-title-info"],children:"Arkreen Remote Miner"}),(0,i.jsxs)("div",{className:g()["rm-claimed-info"],children:[t.total?t.total-t.num:0," Claimed / ",t.total?t.total:0," Total"]}),(0,i.jsx)(v.Z,{}),(0,i.jsx)("div",{style:{textAlign:"left",fontSize:"16px",fontWeight:"500"},children:(0,i.jsx)("span",{children:"Miner running remotely without having your own PV panel on roof top."})}),(0,i.jsx)(v.Z,{}),(0,i.jsxs)("div",{style:{textAlign:"left",fontSize:"16px",fontWeight:"500",display:"flex",flexWrap:"wrap"},children:[(0,i.jsxs)("div",{style:{flex:1,minWidth:"150px",paddingTop:"16px"},children:[(0,i.jsx)("div",{style:{fontSize:"14px",fontWeight:"400",color:"rgba(0,0,0,0.5)"},children:"You can buy"}),(0,i.jsx)("div",{style:{paddingTop:"10px",fontSize:"20px",fontWeight:"600"},children:t.num})]}),(0,i.jsxs)("div",{style:{flex:1,minWidth:"150px",paddingTop:"16px"},children:[(0,i.jsx)("div",{style:{fontSize:"14px",fontWeight:"400",color:"rgba(0,0,0,0.5)"},children:"Price"}),(0,i.jsx)("div",{style:{paddingTop:"10px",fontSize:"20px",fontWeight:"600"},children:t.priceString})]}),(0,i.jsxs)("div",{style:{flex:1,minWidth:"150px",paddingTop:"16px"},children:[(0,i.jsx)("div",{style:{fontSize:"14px",fontWeight:"400",color:"rgba(0,0,0,0.5)"},children:"Capacity"}),(0,i.jsx)("div",{style:{paddingTop:"10px",fontSize:"20px",fontWeight:"600"},children:(0,j.bu)(Number(t.power))})]})]}),(0,i.jsx)("div",{style:{textAlign:"left",fontSize:"16px",fontWeight:"500",paddingTop:"24px"},children:(0,i.jsx)(_.ZP,{disabled:!e.canBuy,style:{width:"100%"},type:"primary",size:"large",onClick:()=>{N(t.operation)},children:"Buy Now"})})]})]},t.key)):(0,i.jsxs)("div",{className:g()["rm-cell-grid"],children:[(0,i.jsx)("div",{className:g()["rm-cell-td-img"],children:(0,i.jsx)(l.Z.Input,{className:g()["rm-img-Skeleton"],active:!0,block:!0})}),(0,i.jsxs)("div",{className:g()["rm-cell-td-detail"],children:[(0,i.jsx)("div",{style:{fontSize:"20px",fontWeight:"bold",textAlign:"left"},children:"Arkreen Remote Miner 1 Round"}),(0,i.jsx)("div",{style:{textAlign:"left",fontSize:"16px",fontWeight:"500",paddingTop:"24px"},children:(0,i.jsx)(l.Z.Input,{style:{width:"140px"},active:!0,block:!0})}),(0,i.jsx)(v.Z,{}),(0,i.jsx)("div",{style:{textAlign:"left",fontSize:"16px",fontWeight:"500"},children:(0,i.jsx)(l.Z.Input,{style:{width:"100%"},active:!0,block:!0})}),(0,i.jsx)(v.Z,{}),(0,i.jsxs)("div",{style:{textAlign:"left",fontSize:"16px",fontWeight:"500",display:"flex"},children:[(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsx)("div",{style:{fontSize:"14px",fontWeight:"400",color:"rgba(0,0,0,0.5)"},children:"You can buy"}),(0,i.jsx)("div",{style:{paddingTop:"10px",fontSize:"20px",fontWeight:"600"},children:(0,i.jsx)(l.Z.Button,{style:{width:"100px"},active:!0,block:!0})})]}),(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsx)("div",{style:{fontSize:"14px",fontWeight:"400",color:"rgba(0,0,0,0.5)"},children:"Price"}),(0,i.jsx)("div",{style:{paddingTop:"10px",fontSize:"20px",fontWeight:"600"},children:(0,i.jsx)(l.Z.Button,{style:{width:"100px"},active:!0,block:!0})})]}),(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsx)("div",{style:{fontSize:"14px",fontWeight:"400",color:"rgba(0,0,0,0.5)"},children:"Power"}),(0,i.jsx)("div",{style:{paddingTop:"10px",fontSize:"20px",fontWeight:"600"},children:(0,i.jsx)(l.Z.Button,{style:{width:"100px"},active:!0,block:!0})})]})]}),(0,i.jsx)("div",{style:{textAlign:"left",fontSize:"16px",fontWeight:"500",paddingTop:"12px"},children:(0,i.jsx)(l.Z.Button,{style:{width:"100%"},active:!0,block:!0})})]})]}),(0,i.jsx)(U,{title:"Payment",isModalOpen:o,onClose:e=>d(e),children:(0,i.jsx)("div",{style:{textAlign:"center",paddingBlock:"12px"},children:n&&n.length>0?(0,i.jsx)(B,{args:n,onWriteData:e=>T(e)}):(0,i.jsxs)("div",{style:{color:"#101020",fontSize:"16px"},children:[(0,i.jsxs)("div",{style:{textAlign:"center",paddingBlock:"6px"},children:[(0,i.jsx)(R.Z,{}),"\xa0 ",c]}),h?(0,i.jsx)("div",{style:{textAlign:"center",paddingBlock:"12px"},children:"If the wallet app does not auto open, please try switching manually."}):(0,i.jsx)(i.Fragment,{}),h?(0,i.jsx)("div",{style:{textAlign:"center",paddingBlock:"12px"},children:(0,i.jsx)(_.ZP,{size:"large",type:"primary",onClick:()=>void(window.location.href="wc://"),children:"Open Wallet"})}):(0,i.jsx)(i.Fragment,{})]})})})]})}var q={list:async function(e){let t={offset:(null==e?void 0:e.offset)?e.offset:1,limit:(null==e?void 0:e.limit)?e.limit:25,type:e.type,status:e.status};return await w.Z.sendJsonRPC("/v1","net_getMinerList",t)},getMinerListByOwner:async function(e){let t={address:e.address,offset:(null==e?void 0:e.offset)?e.offset:1,limit:(null==e?void 0:e.limit)?e.limit:25};return await w.Z.sendJsonRPC("/v1","net_getMinerListByOwner",t)},getMinerByAddress:async function(e){return await w.Z.sendJsonRPC("/v1","net_getMinerByAddress",{address:e})}},D=n(99138),H=n(9008),G=n.n(H);function Y(){let{address:e,isConnected:t}=(0,r.mA)(),[n,s]=(0,a.useState)([]),[l,o]=(0,a.useState)([]),[d,c]=(0,a.useState)(!0),[p,x]=(0,a.useState)(!0),[m,g]=(0,a.useState)(1),[y,f]=(0,a.useState)(),[b,v]=(0,a.useState)(),[w,N]=(0,a.useState)(!1);async function P(){x(!0),(0,S.xb)("开始获取可购买RemoteMiner列表...");let t=await E.getPowerPlants(e||"");if(t.error)k.Z.sendEvent({category:"Event_Get_Remote_Miner_List_Failed",action:"Event_Get_Remote_Miner_List_Failed",label:"get remote miner list failed:"+JSON.stringify(t.error)}),(0,S.xb)("获取可购买RemoteMiner列表失败!"),(0,S.xb)("失败原因："+JSON.stringify(t));else{let e=[];for(let n=0;n<t.result.length;n++){let i=await O.tokenInfo(t.result[n].currency);i||(0,S.xb)("获取的用于支付的代币信息失败，请检查链网络是否选择正确以及合约地址是否有误！");let a={key:t.result[n].plantId,total:t.result[n].num>50?200:50,plantId:(0,j.NH)(t.result[n].plantId,7,7),power:t.result[n].power,num:t.result[n].num,price:t.result[n].price,priceString:t.result[n].price+" "+(i?i.symbol:""),currency:t.result[n].currency,region:t.result[n].region,expiredTime:(0,j.vd)(t.result[n].expiredTime),operation:t.result[n]};e.push(a),k.Z.sendEvent({category:"Event_Get_Remote_Miner_List_Success",action:"Event_Get_Remote_Miner_List_Success",label:"get remote miner list success."}),(0,S.xb)("获取可购买RemoteMiner列表成功")}s(e)}x(!1)}async function T(){c(!0),(0,S.xb)("开始获取已购买的Miner列表..."),k.Z.sendEvent({category:"Event_Get_Remote_Miner_List",action:"Event_Get_Remote_Miner_List",label:"get remote miner list"});let t=await q.getMinerListByOwner({address:e}),n=[];t.error?(0,S.xb)("获取已购买的Miner列表失败"):(t.result.forEach((e,a)=>{let r=e.address,s=e.status,l=e.runStatus;2===s?0===l?t.result[a].status=(0,j.Vu)("success","Normal"):t.result[a].status=(0,j.Vu)("warning","Abnormal"):3===s?t.result[a].status=(0,j.Vu)("danger","Terminated"):t.result[a].status=(0,j.Vu)("warning","Abnormal");let o={key:e.address,address:(0,i.jsx)("span",{className:"content-td-link",children:(0,j.NH)(r,7,7)}),minerType:(0,i.jsx)("span",{children:(0,j.QX)(Number(e.minerType))}),maker:e.maker,totalReward:(0,i.jsx)("span",{children:Number(e.totalReward).toLocaleString()}),capacity:(0,i.jsx)("span",{children:Number(e.capacity).toLocaleString()}),totalEnergyGeneration:(0,i.jsx)("span",{children:(0,j.Pr)(Number(e.totalEnergyGeneration)/1e3)}),onboardTime:(0,i.jsx)("span",{children:(0,j.Fq)(e.onboardTime)}),status:t.result[a].status};n.length<5&&n.push(o)}),o(n),(0,S.xb)("获取已购买的Miner列表成功")),c(!1)}async function Z(){let t=await O.etherBalance(e),n=await O.etherBalance(e,"0x9C5653339E0B3A99262997FbB541E2562f3361C9");f(t),v(n)}return(0,a.useEffect)(()=>{N((null==y?void 0:y.formatted)>0&&(null==b?void 0:b.formatted)>0)},[y,b]),(0,a.useEffect)(()=>{t?(k.Z.sendEvent({category:"Event_Open_Dashboard_Page",action:"Event_Open_Dashboard_Page",label:"user open dashboard page"}),P(),T(),Z()):(k.Z.sendEvent({category:"Event_User_Logout",action:"Event_User_Logout",label:"user wallet disconnect"}),(0,S.xb)("用户断开连接"))},[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(G(),{children:(0,i.jsx)("title",{children:"Dashboard - Arkreen Console"})}),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{style:{backgroundColor:"#FFFFFF",borderRadius:"8px",color:"#000000",fontWeight:"bold",marginBottom:"16px",display:y||b?(null==y?void 0:y.formatted)>1e-4&&(null==b?void 0:b.formatted)>1e-4?"flex":"":"flex",flexWrap:"wrap"},children:[(0,i.jsxs)("div",{className:W()["m-balance"],style:{lineHeight:"48px",paddingInline:"16px"},children:[(0,i.jsxs)("div",{children:["Matic: ",y?Number(y.formatted).toFixed(4):(0,i.jsx)(R.Z,{})," ",y?(null==y?void 0:y.formatted)>1e-4?(0,i.jsx)(u.tm,{style:{color:"#00913A"}}):(0,i.jsx)(u.aN,{style:{color:"#E16969"}}):(0,i.jsx)(i.Fragment,{})]}),y?(0,i.jsx)("div",{className:W()["message-transition"],style:{display:(null==y?void 0:y.formatted)>1e-4?"none":""},children:(0,i.jsx)(D.Z,{type:"error",message:(0,i.jsx)("span",{style:{fontWeight:"bold"},children:"Insufficient matic balance"}),description:(0,i.jsxs)("span",{children:["You must have the test matic of the Polygon mumbai network, you can get the mumbai test matic through ",(0,i.jsx)("a",{style:{color:"#1677ff"},target:"_blank",href:"https://faucet.polygon.technology",children:"https://faucet.polygon.technology"})]}),action:(0,i.jsx)(_.ZP,{size:"small",type:"primary",children:(0,i.jsx)("a",{style:{color:""},target:"_blank",href:"https://faucet.polygon.technology",children:"Get it"})})})}):(0,i.jsx)(i.Fragment,{})]}),(0,i.jsxs)("div",{className:W()["m-balance"],style:{flex:1,lineHeight:"48px",paddingInline:"16px"},children:[(0,i.jsxs)("div",{children:["USDC: ",b?Number(b.formatted).toFixed(4):(0,i.jsx)(R.Z,{})," ",b?(null==b?void 0:b.formatted)>1e-4?(0,i.jsx)(u.tm,{style:{color:"#00913A"}}):(0,i.jsx)(u.aN,{style:{color:"#E16969"}}):(0,i.jsx)(i.Fragment,{})]}),b?(0,i.jsx)("div",{className:W()["message-transition"],style:{display:(null==b?void 0:b.formatted)>1e-4?"none":""},children:(0,i.jsx)(D.Z,{type:"error",message:(0,i.jsx)("span",{style:{fontWeight:"bold"},children:"Insufficient USDC balance"}),description:(0,i.jsxs)("span",{children:["You must have the test usdc deployed on the Polygon mumbai network. After you fill in your wallet address, we will send it to you ",(0,i.jsx)("a",{style:{color:"#1677ff"},target:"_blank",href:"https://forms.gle/6T7NfgukH8avc8zs9",children:"https://forms.gle/6T7NfgukH8avc8zs9"})]}),action:(0,i.jsx)(_.ZP,{size:"small",type:"primary",children:(0,i.jsx)("a",{style:{color:""},target:"_blank",href:"https://forms.gle/6T7NfgukH8avc8zs9",children:"Get it"})})})}):(0,i.jsx)(i.Fragment,{})]})]})}),(0,i.jsx)("div",{style:{padding:"12px",backgroundColor:"#FFFFFF",borderRadius:"8px"},children:t?(0,i.jsx)(J,{refreshSource:()=>void(P(),T()),canBuy:w,datalist:n,loading:p}):""}),(0,i.jsx)("div",{style:{padding:"20px 0px 12px 0px"},children:(0,i.jsxs)("div",{className:W()["test-r1-fh"],children:[(0,i.jsx)("span",{style:{fontSize:"20px",fontWeight:"bold",color:"#000000"},children:"Miner List Top 5"}),(0,i.jsx)("div",{style:{paddingTop:"16px"},children:t?(0,i.jsx)(h,{pageSize:1,scroll:{x:760},currentPage:m,columns:[{title:"Address",dataIndex:"address",key:"address",width:"180px",fixed:"left"},{title:"Type",dataIndex:"minerType",key:"minerType",width:"160px"},{title:"Status",dataIndex:"status",key:"status",width:"150px"},{title:"Capacity(W)",dataIndex:"capacity",key:"capacity",width:"160px"},{title:"Energy(kWh)",dataIndex:"totalEnergyGeneration",key:"totalEnergyGeneration",width:"160px"},{title:"Onboarding Time",dataIndex:"onboardTime",key:"onboardTime",width:"180px"}],datalist:l,loading:d,onPageChange:g}):""})]})})]})}},420:function(e){e.exports={"pagination-btn":"ArkreenPagination_pagination-btn___yptC",disable:"ArkreenPagination_disable__lVZ_P",active:"ArkreenPagination_active__wuqjA",selected:"ArkreenPagination_selected__JYF6x","pagination-box-pc":"ArkreenPagination_pagination-box-pc__9SOHt","pagination-box-m":"ArkreenPagination_pagination-box-m__uykpp"}},9098:function(e){e.exports={"table-border":"ArkreenTable_table-border__z_Jfv","arkreen-table-pc":"ArkreenTable_arkreen-table-pc__HwLv9","arkreen-table-m":"ArkreenTable_arkreen-table-m__NC1pU","rm-cell-grid":"ArkreenTable_rm-cell-grid__JHcB5","rm-cell-td-img":"ArkreenTable_rm-cell-td-img__mve4M","rm-cell-td-detail":"ArkreenTable_rm-cell-td-detail___HUiI","rm-claimed-info":"ArkreenTable_rm-claimed-info__G2Lj0","rm-title-info":"ArkreenTable_rm-title-info___fymA","rm-remote-miner-logo":"ArkreenTable_rm-remote-miner-logo__FibOI","rm-img-Skeleton":"ArkreenTable_rm-img-Skeleton__vr3O4","arkreen-m-table":"ArkreenTable_arkreen-m-table__4pSEH"}}},function(e){e.O(0,[367,774,888,179],function(){return e(e.s=26117)}),_N_E=e.O()}]);
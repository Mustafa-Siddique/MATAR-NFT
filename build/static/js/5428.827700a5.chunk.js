"use strict";(self.webpackChunkmatar_frontend=self.webpackChunkmatar_frontend||[]).push([[5428],{15428:(t,e,n)=>{n.d(e,{OneKeyConnector:()=>r});var i=n(2600),s=n(38690),o=n(82611),c=n(66131),a=n(97419),h=n(24157);n(65892);class r extends c.InjectedConnector{constructor(t){const e={...{name:"OneKey Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:h.g},...t.options};super({chains:t.chains,options:e,connectorStorage:t.connectorStorage}),(0,i._)(this,"id",o.w.oneKey)}async connect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var e,n;const c=await this.getProvider();if(!c)throw new s.a;this.setupListeners(),this.emit("message",{type:"connecting"});let h=null;if(null!==(e=this.options)&&void 0!==e&&e.shimDisconnect&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))){h=await this.getAccount().catch((()=>null));if(!!h)try{await c.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(i){if(this.isUserRejectedRequestError(i))throw new s.U(i)}}if(!h){const t=await c.request({method:"eth_requestAccounts"});h=a.getAddress(t[0])}let r=await this.getChainId(),d=this.isChainUnsupported(r);if(t.chainId&&r!==t.chainId)try{await this.switchChain(t.chainId),r=t.chainId,d=this.isChainUnsupported(t.chainId)}catch(o){console.error("Could not switch to chain id : ".concat(t.chainId),o)}null!==(n=this.options)&&void 0!==n&&n.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const u={chain:{id:r,unsupported:d},provider:c,account:h};return this.emit("connect",u),u}catch(i){if(this.isUserRejectedRequestError(i))throw new s.U(i);if(-32002===i.code)throw new s.R(i);throw i}}}}}]);
//# sourceMappingURL=5428.827700a5.chunk.js.map
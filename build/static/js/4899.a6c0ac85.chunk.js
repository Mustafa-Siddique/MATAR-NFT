"use strict";(self.webpackChunkmatar_frontend=self.webpackChunkmatar_frontend||[]).push([[4899],{54899:(t,e,i)=>{i.d(e,{CryptoDefiWalletConnector:()=>h});var n=i(2600),s=i(38690),o=i(82611),c=i(66131),r=i(97419),a=i(82333);i(65892);class h extends c.InjectedConnector{constructor(t){const e={...{name:"Crypto Defi Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:a.g},...t.options};super({chains:t.chains,options:e,connectorStorage:t.connectorStorage}),(0,n._)(this,"id",o.w.cryptoDefiWallet)}async connect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var e,i;const c=await this.getProvider();if(!c)throw new s.a;this.setupListeners(),this.emit("message",{type:"connecting"});let a=null;if(null!==(e=this.options)&&void 0!==e&&e.shimDisconnect&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))){a=await this.getAccount().catch((()=>null));if(!!a)try{await c.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(n){if(this.isUserRejectedRequestError(n))throw new s.U(n)}}if(!a){const t=await c.request({method:"eth_requestAccounts"});a=r.getAddress(t[0])}let h=await this.getChainId(),d=this.isChainUnsupported(h);if(t.chainId&&h!==t.chainId)try{await this.switchChain(t.chainId),h=t.chainId,d=this.isChainUnsupported(t.chainId)}catch(o){console.error("Could not switch to chain id : ".concat(t.chainId),o)}null!==(i=this.options)&&void 0!==i&&i.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const u={chain:{id:h,unsupported:d},provider:c,account:a};return this.emit("connect",u),u}catch(n){if(this.isUserRejectedRequestError(n))throw new s.U(n);if(-32002===n.code)throw new s.R(n);throw n}}}}}]);
//# sourceMappingURL=4899.a6c0ac85.chunk.js.map
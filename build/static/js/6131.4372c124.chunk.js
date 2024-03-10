"use strict";(self.webpackChunkmatar_frontend=self.webpackChunkmatar_frontend||[]).push([[6131],{69822:(t,e,n)=>{n.d(e,{W:()=>r});var s=n(29278),i=n(65892);class r extends i.Z{constructor(t){let{chains:e=s.gL9,options:n}=t;super(),this.chains=e,this.options=n}getBlockExplorerUrls(t){var e,n;const s=null!==(e=null===(n=t.explorers)||void 0===n?void 0:n.map((t=>t.url)))&&void 0!==e?e:[];return s.length>0?s:void 0}isChainUnsupported(t){return!this.chains.some((e=>e.chainId===t))}updateChains(t){this.chains=t}}},38690:(t,e,n)=>{n.d(e,{A:()=>o,C:()=>a,R:()=>h,S:()=>d,U:()=>u,a:()=>c});var s=n(2600);class i extends Error{constructor(t,e){const{cause:n,code:s,data:i}=e;if(!Number.isInteger(s))throw new Error('"code" must be an integer.');if(!t||"string"!==typeof t)throw new Error('"message" must be a nonempty string.');super("".concat(t,". Cause: ").concat(JSON.stringify(n))),this.cause=n,this.code=s,this.data=i}}class r extends i{constructor(t,e){const{cause:n,code:s,data:i}=e;if(!(Number.isInteger(s)&&s>=1e3&&s<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(t,{cause:n,code:s,data:i})}}class o extends Error{constructor(){super(...arguments),(0,s._)(this,"name","AddChainError"),(0,s._)(this,"message","Error adding chain")}}class a extends Error{constructor(t){let{chainId:e,connectorId:n}=t;super('Chain "'.concat(e,'" not configured for connector "').concat(n,'".')),(0,s._)(this,"name","ChainNotConfigured")}}class c extends Error{constructor(){super(...arguments),(0,s._)(this,"name","ConnectorNotFoundError"),(0,s._)(this,"message","Connector not found")}}class h extends i{constructor(t){super("Resource unavailable",{cause:t,code:-32002}),(0,s._)(this,"name","ResourceUnavailable")}}class d extends r{constructor(t){super("Error switching chain",{cause:t,code:4902}),(0,s._)(this,"name","SwitchChainError")}}class u extends r{constructor(t){super("User rejected request",{cause:t,code:4001}),(0,s._)(this,"name","UserRejectedRequestError")}}},91609:(t,e,n)=>{function s(t){return"string"===typeof t?Number.parseInt(t,"0x"===t.trim().substring(0,2)?16:10):"bigint"===typeof t?Number(t):t}n.d(e,{n:()=>s})},83506:(t,e,n)=>{n.d(e,{g:()=>r,i:()=>i});var s=n(29278);function i(t){const e=new URL(t).hostname;return e.endsWith(".thirdweb.com")||e.endsWith(".thirdweb-dev.com")||"localhost"===e||"0.0.0.0"===e}function r(t){return(0,s.OZ$)(t).map((t=>{try{const e=new URL(t);return e.hostname.endsWith(".thirdweb.com")&&(e.pathname="",e.search=""),e.toString()}catch(e){return t}}))}},66131:(t,e,n)=>{n.d(e,{InjectedConnector:()=>g});var s=n(2600),i=n(63700),r=n(69822),o=n(38690),a=n(66072),c=n(83506),h=n(97419),d=n(60723),u=n(49716),l=n(91609);n(65892);var m=new WeakMap;class g extends r.W{constructor(t){const e={...{shimDisconnect:!0,getProvider:()=>{if((0,a.a)(globalThis.window))return globalThis.window.ethereum}},...t.options};super({chains:t.chains,options:e}),(0,i._)(this,m,{writable:!0,value:void 0}),(0,s._)(this,"shimDisconnectKey","injected.shimDisconnect"),(0,s._)(this,"onAccountsChanged",(async t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:h.getAddress(t[0])})})),(0,s._)(this,"onChainChanged",(t=>{const e=(0,l.n)(t),n=this.isChainUnsupported(e);this.emit("change",{chain:{id:e,unsupported:n}})})),(0,s._)(this,"onDisconnect",(async t=>{if(1013===t.code){if(await this.getProvider())try{if(await this.getAccount())return}catch{}}this.emit("disconnect"),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey)}));const n=e.getProvider();if("string"===typeof e.name)this.name=e.name;else if(n){const t=function(t){var e,n;if(!t)return"Injected";const s=t=>t.isAvalanche?"Core Wallet":t.isBitKeep?"BitKeep":t.isBraveWallet?"Brave Wallet":t.isCoinbaseWallet?"Coinbase Wallet":t.isExodus?"Exodus":t.isFrame?"Frame":t.isKuCoinWallet?"KuCoin Wallet":t.isMathWallet?"MathWallet":t.isOneInchIOSWallet||t.isOneInchAndroidWallet?"1inch Wallet":t.isOpera?"Opera":t.isPortal?"Ripio Portal":t.isTally?"Tally":t.isTokenPocket?"TokenPocket":t.isTokenary?"Tokenary":t.isTrust||t.isTrustWallet?"Trust Wallet":t.isMetaMask?"MetaMask":void 0;if(null!==(e=t.providers)&&void 0!==e&&e.length){var i;const e=new Set;let n=1;for(const i of t.providers){let t=s(i);t||(t="Unknown Wallet #".concat(n),n+=1),e.add(t)}const r=[...e];return r.length?r:null!==(i=r[0])&&void 0!==i?i:"Injected"}return null!==(n=s(t))&&void 0!==n?n:"Injected"}(n);e.name?this.name=e.name(t):this.name="string"===typeof t?t:t[0]}else this.name="Injected";this.id="injected",this.ready=!!n,this.connectorStorage=t.connectorStorage}async connect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{const n=await this.getProvider();if(!n)throw new o.a;this.setupListeners(),this.emit("message",{type:"connecting"});const s=await n.request({method:"eth_requestAccounts"}),i=h.getAddress(s[0]);let r=await this.getChainId(),a=this.isChainUnsupported(r);if(t.chainId&&r!==t.chainId)try{await this.switchChain(t.chainId),r=t.chainId,a=this.isChainUnsupported(t.chainId)}catch(e){console.error("Could not switch to chain id: ".concat(t.chainId),e)}this.options.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const c={account:i,chain:{id:r,unsupported:a},provider:n};return this.emit("connect",c),c}catch(n){if(this.isUserRejectedRequestError(n))throw new o.U(n);if(-32002===n.code)throw new o.R(n);throw n}}async disconnect(){const t=await this.getProvider();null!==t&&void 0!==t&&t.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){const t=await this.getProvider();if(!t)throw new o.a;const e=await t.request({method:"eth_accounts"});return h.getAddress(e[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new o.a;return t.request({method:"eth_chainId"}).then(l.n)}async getProvider(){const t=this.options.getProvider();return t&&(0,i.a)(this,m,t),(0,i.b)(this,m)}async getSigner(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[e,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new d.Q(e,t).getSigner(n)}async isAuthorized(){try{if(this.options.shimDisconnect&&!Boolean(await this.connectorStorage.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new o.a;return!!await this.getAccount()}catch{return!1}}async switchChain(t){const e=await this.getProvider();if(!e)throw new o.a;const n=u.hexValue(t);try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]});const s=this.chains.find((e=>e.chainId===t));return s||{chainId:t,name:"Chain ".concat(n),slug:"".concat(n),nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(i){var s;const a=this.chains.find((e=>e.chainId===t));if(!a)throw new o.C({chainId:t,connectorId:this.id});if(4902===i.code||4902===(null===i||void 0===i||null===(s=i.data)||void 0===s||null===(s=s.originalError)||void 0===s?void 0:s.code))try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:(0,c.g)(a),blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),a}catch(r){if(this.isUserRejectedRequestError(r))throw new o.U(i);throw new o.A}if(this.isUserRejectedRequestError(i))throw new o.U(i);throw new o.S(i)}}async setupListeners(){const t=await this.getProvider();t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(t){return 4001===t.code}}}}]);
//# sourceMappingURL=6131.4372c124.chunk.js.map
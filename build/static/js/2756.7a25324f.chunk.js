"use strict";(self.webpackChunkmatar_frontend=self.webpackChunkmatar_frontend||[]).push([[2756],{12756:(t,n,a)=>{a.d(n,{TokenBoundSmartWalletConnector:()=>c});var e=a(83374),o=a(68375),s=a(6989);a(65892),a(63952);class c extends o.SmartWalletConnector{constructor(t){super({...t,factoryAddress:t.registryAddress||s.a}),this.tbaConfig=t}defaultFactoryInfo(){return{createAccount:async t=>t.prepare("createAccount",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt,e.Y0("")]),getAccountAddress:async t=>await t.call("account",[this.tbaConfig.accountImplementation,this.chainId,this.tbaConfig.tokenContract,this.tbaConfig.tokenId,this.tbaConfig.salt])}}}}}]);
//# sourceMappingURL=2756.7a25324f.chunk.js.map
var devowlWp_realProductManagerWpClient;(()=>{"use strict";var e,t={9314:(e,t,n)=>{n.r(t),n.d(t,{Avatar:()=>o.A,CLICK_HANDLER_PLUGIN_UPDATE_MODAL_ATTRIBUTE:()=>J,Card:()=>a.A,FeedbackModal:()=>$,Form:()=>r.A,HASH_HANDLER_PLUGIN_UPDATE_MODAL_PREFIX:()=>z,LearnMoreTag:()=>re,OptionStore:()=>h,PLUGIN_UPDATE_FORM_LAYOUT:()=>le,PLUGIN_UPDATE_FORM_LAYOUT_MARGIN_BOTTOM:()=>ce,PluginUpdateEmbed:()=>fe,PluginUpdateErrorNotice:()=>be,PluginUpdateForm:()=>de,PluginUpdateLicenseList:()=>ve,PluginUpdateLicenseListItem:()=>me,PluginUpdateLicenseTelemetryDataModal:()=>se,PluginUpdateModal:()=>xe,PluginUpdateStore:()=>P,PluginUpdateTermFields:()=>ie,Provider:()=>U,RootStore:()=>k,Space:()=>l.A,listenHashPluginUpdate:()=>Z,listenPluginDeactivation:()=>G,listenPluginUpdateLinkClick:()=>Y,locationRestAnnouncementActive:()=>g,locationRestLicenseDelete:()=>x,locationRestLicenseRetry:()=>f,locationRestLicenseTelemetryGet:()=>w,locationRestPluginFeedbackPost:()=>V,locationRestPluginUpdateGet:()=>S,locationRestPluginUpdatePatch:()=>y,locationRestPluginUpdateSkipPost:()=>m,useStores:()=>C});const s=ReactJSXRuntime,i=devowlWp_utils;var o=n(6086),a=n(4225),r=n(2651),l=n(3978),c=n(5666),d=n(9117),p=n(9670),u=n(4497);class h extends i.BaseOptions{constructor(e){super(),this.rootStore=e,this.pureSlug=i.BaseOptions.getPureSlug("real-product-manager-wp-client"),this.pureSlugCamelCased=i.BaseOptions.getPureSlug("real-product-manager-wp-client",!0),(0,u.runInAction)((()=>Object.assign(this,window[this.pureSlugCamelCased])))}}(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],h.prototype,"others",void 0);const g={path:"/announcement/:slug/active",method:i.RouteHttpVerb.POST},y={path:"/plugin-update/:slug",method:i.RouteHttpVerb.PATCH},m={path:"/plugin-update/:slug/skip",method:i.RouteHttpVerb.POST};let v;const b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(v||(v=(0,i.createRequestFactory)(window[i.BaseOptions.getPureSlug("real-product-manager-wp-client",!0)]))).request(...t)},f={path:"/plugin-update/:slug/license/:blogId/retry",method:i.RouteHttpVerb.POST},x={path:"/plugin-update/:slug/license/:blogId",method:i.RouteHttpVerb.DELETE},w={path:"/plugin-update/:slug/telemetry/:blogId",method:i.RouteHttpVerb.GET};class j{constructor(e,t){this.busy=!1,this.retry=(0,u.flow)((function*(){this.busy=!0;try{const e=yield b({location:f,params:{slug:this.store.slug,blogId:this.blog}});(0,u.set)(this,e)}catch(e){throw console.log(e),e}finally{this.busy=!1}})),this.deactivate=(0,u.flow)((function*(){this.busy=!0;try{const e=yield b({location:x,params:{slug:this.store.slug,blogId:this.blog}});(0,u.set)(this,e)}catch(e){throw console.log(e),e}finally{this.busy=!1}})),this.fetchTelemetryData=(0,u.flow)((function*(){this.busy=!0;try{const e=yield b({location:w,params:{slug:this.store.slug,blogId:this.blog}});this.telemetryData=e}catch(e){throw console.log(e),e}finally{this.busy=!1}})),(0,u.runInAction)((()=>(0,u.set)(this,e))),this.store=t}}(0,p.Cg)([u.observable],j.prototype,"busy",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],j.prototype,"uuid",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],j.prototype,"blog",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],j.prototype,"host",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],j.prototype,"programmatically",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],j.prototype,"blogName",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],j.prototype,"installationType",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],j.prototype,"telemetryDataSharingOptIn",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],j.prototype,"code",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],j.prototype,"hint",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],j.prototype,"remote",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],j.prototype,"noUsage",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type","undefined"==typeof ResponseRouteLicenseTelemetryGet?Object:ResponseRouteLicenseTelemetryGet)],j.prototype,"telemetryData",void 0);class A{get licensedEntries(){return this.licenses.filter((e=>{let{code:t}=e;return t}))}get unlicensedEntries(){return this.licenses.filter((e=>{let{code:t}=e;return!t}))}get noUsageEntries(){return this.unlicensedEntries.filter((e=>{let{noUsage:t}=e;return t}))}get modifiableEntries(){return this.unlicensedEntries.filter((e=>{let{programmatically:t}=e;return!t}))}get isLicensed(){return 0===this.unlicensedEntries.length}constructor(e,t){this.busy=!1,this.additionalCheckboxes=[],this.showBlogName=!1,this.showNetworkWideUpdateIssueNotice=!1,this.setAnnouncementActive=(0,u.flow)((function*(e){this.busy=!0;try{const t=yield b({location:g,params:{slug:this.slug},request:{state:e}});return t.success&&(this.announcementsActive=e),t.success}catch(e){throw console.log(e),e}finally{this.busy=!1}})),this.update=(0,u.flow)((function*(e){this.busy=!0,this.invalidKeysError=void 0;try{const t=yield b({location:y,params:{slug:this.slug},request:e});this.fromResponse(t)}catch(e){var t,n;throw console.log(e),(null==(n=e.responseJSON)||null==(t=n.data)?void 0:t.invalidKeys)&&(this.invalidKeysError=e.responseJSON.data.invalidKeys),e}finally{this.busy=!1}})),this.skip=(0,u.flow)((function*(){this.busy=!0;try{yield b({location:m,params:{slug:this.slug}})}catch(n){var e,t;throw console.log(n),(null==(t=n.responseJSON)||null==(e=t.data)?void 0:e.invalidKeys)&&(this.invalidKeysError=n.responseJSON.data.invalidKeysError),n}finally{this.busy=!1}})),this.fromResponse(e),this.store=t}fromResponse(e){let{licenses:t,...n}=e;(0,u.set)(this,n),this.licenses=[],null==t||t.forEach((e=>{this.licenses.push(new j(e,this))}))}}(0,p.Cg)([u.observable],A.prototype,"busy",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"slug",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Array)],A.prototype,"licenses",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"hasInteractedWithFormOnce",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"name",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"needsLicenseKeys",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"announcementsActive",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"allowsAutoUpdates",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"allowsTelemetry",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"allowsNewsletter",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"potentialNewsletterUser",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"privacyProvider",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"privacyPolicy",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"accountSiteUrl",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"additionalCheckboxes",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"licenseKeyHelpUrl",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"checkUpdateLink",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type","undefined"==typeof ResponseRoutePluginUpdatePatchErrorInvalidKeysData?Object:ResponseRoutePluginUpdatePatchErrorInvalidKeysData)],A.prototype,"invalidKeysError",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"showBlogName",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",Object)],A.prototype,"showNetworkWideUpdateIssueNotice",void 0),(0,p.Cg)([u.computed,(0,p.Sn)("design:type",Function),(0,p.Sn)("design:paramtypes",[]),(0,p.Sn)("design:returntype",void 0)],A.prototype,"licensedEntries",null),(0,p.Cg)([u.computed,(0,p.Sn)("design:type",Function),(0,p.Sn)("design:paramtypes",[]),(0,p.Sn)("design:returntype",void 0)],A.prototype,"unlicensedEntries",null),(0,p.Cg)([u.computed,(0,p.Sn)("design:type",Function),(0,p.Sn)("design:paramtypes",[]),(0,p.Sn)("design:returntype",void 0)],A.prototype,"noUsageEntries",null),(0,p.Cg)([u.computed,(0,p.Sn)("design:type",Function),(0,p.Sn)("design:paramtypes",[]),(0,p.Sn)("design:returntype",void 0)],A.prototype,"modifiableEntries",null),(0,p.Cg)([u.computed,(0,p.Sn)("design:type",Function),(0,p.Sn)("design:paramtypes",[]),(0,p.Sn)("design:returntype",void 0)],A.prototype,"isLicensed",null),(0,p.Cg)([u.action,(0,p.Sn)("design:type",Function),(0,p.Sn)("design:paramtypes",["undefined"==typeof Partial?Object:Partial]),(0,p.Sn)("design:returntype",void 0)],A.prototype,"fromResponse",null);const S={path:"/plugin-update/:slug",method:i.RouteHttpVerb.GET};class P{constructor(e){this.busy=!1,this.pluginUpdates=new Map,this.pluginUpdateFetchErrors=new Map,this.showInModal=(0,u.flow)((function*(e){this.modalPlugin=e;try{yield this.fetchPluginUpdate(e)}catch(e){throw console.log(e),e}})),this.fetchPluginUpdate=(0,u.flow)((function*(e){this.busy=!0;try{const t=yield b({location:S,params:{slug:e}}),n=new A(t,this);return this.pluginUpdates.set(e,n),this.pluginUpdateFetchErrors.delete(e),n}catch(t){throw console.log(t),this.pluginUpdateFetchErrors.set(e,t),t}finally{this.busy=!1}})),this.rootStore=e}hideModal(){this.modalPlugin=void 0}}(0,p.Cg)([u.observable],P.prototype,"busy",void 0),(0,p.Cg)([u.observable,(0,p.Sn)("design:type",String)],P.prototype,"modalPlugin",void 0),(0,p.Cg)([u.observable],P.prototype,"pluginUpdates",void 0),(0,p.Cg)([u.observable],P.prototype,"pluginUpdateFetchErrors",void 0),(0,p.Cg)([u.action,(0,p.Sn)("design:type",Function),(0,p.Sn)("design:paramtypes",[]),(0,p.Sn)("design:returntype",void 0)],P.prototype,"hideModal",null);class k{get context(){return this.contextMemo?this.contextMemo:this.contextMemo=(0,i.createContextFactory)(this)}constructor(){this.optionStore=new h(this),this.pluginUpdateStore=new P(this)}static get StoreProvider(){return k.get.context.StoreProvider}static get get(){return k.me?k.me:k.me=new k}}const C=()=>k.get.context.useStores();var O=n(9327);const U=e=>{let{children:t,configProvider:n={},app:i={}}=e;return(0,s.jsx)(c.Ay,{prefixCls:"rpm-wpc-antd",iconPrefixCls:"rpm-wpc-antd-anticon",theme:{token:{colorPrimary:"#2271b1",borderRadius:3}},...n,children:(0,s.jsx)(O.Z_3,{value:{prefixCls:"rpm-wpc-antd-anticon"},children:(0,s.jsx)(d.A,{message:{top:50},...i,children:(0,s.jsx)(k.StoreProvider,{children:t})})})})};var I=n(1594),T=n(8915),E=n(7333),F=n(8197),N=n(1533),L=n(6565),D=n(4936),R=n(9991);let _;function M(){return _||(_=(0,i.createLocalizationFactory)("devowl-wp-real-product-manager-wp-client"))}const X=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return M()._x(...t)},W=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return M().__(...t)},q=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return M()._i(...t)};var B=n(2975);const V={path:"/feedback/:slug",method:i.RouteHttpVerb.POST},H={labelCol:{span:24},wrapperCol:{span:24}},K={marginBottom:8},$=e=>{let{initialValues:t={},plugin:n,name:i,hasAtLeastOneActiveLicense:o,isPluginActiveForNetwork:a,privacyPolicy:l,privacyProvider:c,onClose:p,onDeactivate:u}=e;const{message:h}=d.A.useApp(),g=(0,I.useMemo)((()=>({"upgrade-to-pro":W("Upgrade to PRO Version"),"not-working":W("Plugin does not work"),"missing-features":W("Not the features I want"),incompatible:W("Incompatible with themes/plugins"),"missing-doc":W("Lack of documentation"),"found-better-plugin":W("Found a better plugin"),temp:W("Temporary deactivation"),other:W("Other")})),[]),[y]=r.A.useForm(),m=`license-form-${n}`,[v,f]=(0,I.useState)(!0),[x,w]=(0,I.useState)(!1),j=(0,I.useCallback)((()=>{window.confirm(W("Are you sure you want to leave the feedback form?"))&&f(!1)}),[]),A=(0,I.useCallback)((async e=>{let{skip:t=!1,reason:s="other",note:i="",email:o="",name:a="",deactivateLicense:r=!1}=e;try{w(!0),await b({location:V,params:{slug:n},request:{skip:t,reason:s,note:i,email:o,name:o?a:"",deactivateLicense:r}}),null==u||u()}catch(e){var l,c,d;const{responseJSON:t}=e,n=null==t||null==(d=t.data)||null==(c=d.body)||null==(l=c[0])?void 0:l.code;if(["DeactivationFeedbackAlreadyGiven","DeactivationFeedbackMightBeSpam"].indexOf(n)>-1||!n)return void(null==u||u());var p,g,y;h.error(null==t||null==(y=t.data)||null==(g=y.body)||null==(p=g[0])?void 0:p.message)}finally{w(!1)}}),[y,n]),S=(0,I.useCallback)((()=>{const e=y.getFieldValue("deactivateLicense");e?A({skip:!0,deactivateLicense:e}):null==u||u()}),[A]);return(0,s.jsx)(T.A,{afterClose:p,onCancel:j,open:v,footer:[(0,s.jsx)(E.Ay,{type:"default",onClick:S,className:"alignleft",disabled:x,children:(0,s.jsx)("b",{children:W("Skip & Deactivate")})},"skip"),(0,s.jsx)(E.Ay,{type:"primary",htmlType:"submit",form:m,disabled:x,children:W("Deactivate")},"submit")],title:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(B.A,{twoToneColor:"#eb2f96"})," ",W("Too bad you are leaving")]}),children:(0,s.jsx)(F.A,{spinning:x,children:(0,s.jsxs)(r.A,{name:m,id:m,form:y,...H,onFinish:A,initialValues:t,layout:"vertical",labelWrap:!0,children:[(0,s.jsx)(r.A.Item,{name:"reason",label:(0,s.jsx)(s.Fragment,{children:W("Please give us feedback why you deactivate %s.",i)}),style:K,required:!0,rules:[{required:!0,message:W("Please provide a reason!")}],children:(0,s.jsx)(N.Ay.Group,{children:Object.keys(g).map((e=>(0,s.jsx)(N.Ay,{value:e,style:{width:"calc(50% - 8px)",float:"left"},children:g[e]},e)))})}),(0,s.jsx)(r.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.reason!==t.reason,children:e=>{let{getFieldValue:t}=e;return!!t("reason")&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A.Item,{label:W("What could we do better?"),name:"note",style:K,children:(0,s.jsx)(L.A.TextArea,{autoSize:{minRows:3}})}),(0,s.jsx)(r.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.answerTerms!==t.answerTerms,children:e=>{let{getFieldValue:t}=e;return!!t("reason")&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A.Item,{name:"email",label:W("Email for answer/solution"),style:K,rules:[{type:"email",required:t("answerTerms"),message:W("Please provide a valid e-mail address!")}],children:(0,s.jsx)(L.A,{})}),(0,s.jsx)(r.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.email!==t.email,children:e=>{let{getFieldValue:t}=e;return(0,s.jsxs)(s.Fragment,{children:[!!t("email")&&(0,s.jsx)(r.A.Item,{name:"name",label:W("Name"),required:!0,style:K,rules:[{required:!0,message:W("Please provide a name!")}],children:(0,s.jsx)(L.A,{})}),(0,s.jsx)(r.A.Item,{name:"answerTerms",valuePropName:"checked",required:!0,rules:[{type:"boolean",required:!!t("email"),transform:e=>e||void 0,message:W("Please confirm that you have checked the privacy policy.")}],style:K,children:(0,s.jsx)(D.A,{style:{zoom:.8},children:q(W("I would like to receive a response to my request. For this purpose, I agree to the data processing of my feedback and my e-mail address. I have read and acknowledge the %s {{a}}Privacy Policy{{/a}}.",c),{a:(0,s.jsx)("a",{href:l,target:"_blank",rel:"noreferrer"})})})})]})}})]})}})]})}}),(0,s.jsx)(r.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.note!==t.note||e.answerTerms!==t.answerTerms,children:e=>{let{getFieldValue:t}=e;const n=t("answerTerms")||!1,i=t("note")||"";return n?null:i.split(" ").length>=5?(0,s.jsx)("div",{className:"notice notice-info inline below-h2 notice-alt",style:{margin:0},children:(0,s.jsx)("p",{children:W("Allow us to reply to you by email and we will get back to you as soon as possible!")})}):(0,s.jsx)("p",{className:"description",style:{marginTop:5},children:q(W("Are there any problems with the setup or use of the plugin? Maybe we can help you in the support. {{a}}Contact support{{/a}}."),{a:(0,s.jsx)("a",{href:W("https://devowl.io/support/"),target:"_blank",rel:"noreferrer"})})})}}),o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(R.A,{style:{margin:"12px 0"}}),(0,s.jsx)(r.A.Item,{style:{marginBottom:0},name:"deactivateLicense",valuePropName:"checked",label:W("Do you want to deactivate your active license so that you can use it again on another site?"),children:(0,s.jsx)(D.A,{children:W(a?"Yes, deactivate all active licenses for all sites within this multisite":"Yes, deactivate license")})})]})]})})})};function G(){document.addEventListener("click",(e=>{const{names:t,currentUserFullName:n}=k.get.optionStore.others,o=null==e?void 0:e.target;for(const a in t){const{plugin:r,hasAtLeastOneActiveLicense:l,isPluginActiveForNetwork:c}=t[a];if(o.matches(`tr[data-plugin="${r}"] a[href*="action=deactivate"]`)){const r=document.createElement("div");document.body.appendChild(r);const d=(0,i.createRoot)(r);d.render((0,s.jsx)(U,{children:(0,s.jsx)($,{...t[a],initialValues:{name:n},plugin:a,hasAtLeastOneActiveLicense:l,isPluginActiveForNetwork:c,onClose:()=>{d.unmount()},onDeactivate:()=>{window.location.href=o.href}})})),e.preventDefault(),e.stopImmediatePropagation();break}}}),!0)}const J="data-rpm-wp-client-plugin-update";function Y(){document.addEventListener("click",(e=>{var t;const n=null==(t=e.target)?void 0:t.getAttribute(J);n&&(k.get.pluginUpdateStore.showInModal(n),e.preventDefault())}))}const z="rpm-wp-client-plugin-update-";function Z(){const{hash:e}=window.location;if(e.startsWith(`#${z}`)){const t=e.substr(z.length+1);k.get.pluginUpdateStore.showInModal(t),window.location.hash=""}}var Q=n(7922),ee=n(1767),te=n(8779),ne=n(8116);const se=(0,Q.PA)((e=>{let{license:t,linkWrapper:n,disabled:i,children:o}=e;const{busy:a,telemetryData:r,telemetryDataSharingOptIn:l}=t,[c,d]=(0,I.useState)(!1);return(0,I.useEffect)((()=>{c&&!r&&t.fetchTelemetryData()}),[c,r,t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(T.A,{title:W("Telemetry data preview"),open:c&&!i,onCancel:()=>d(!1),cancelText:W("Close"),okButtonProps:{style:{display:"none"}},children:[l&&(0,s.jsx)("p",{style:{marginTop:0,marginBottom:10},children:X("At the time of activating the license, you agreed that we may send telemetry data from your installation to our server. You can revoke this at any time by deactivating and reactivating the licence.","legal-text")}),(0,s.jsx)("p",{style:{marginTop:0},children:W("The following data (raw) will be sent to our server:")}),(0,s.jsx)(F.A,{spinning:a,children:(0,s.jsx)("textarea",{readOnly:!0,style:{width:"100%",height:300},value:r?JSON.stringify(r,null,4):""})})]}),(0,s.jsx)("span",{onClick:e=>{i||d(!0),e.preventDefault()},children:n?(0,s.jsx)("a",{children:o}):o})]})})),ie=(0,Q.PA)((e=>{let{pluginUpdate:t}=e;const n={...ce,zoom:.8},{privacyProvider:i,privacyPolicy:o,allowsTelemetry:a,allowsAutoUpdates:l,allowsNewsletter:c,additionalCheckboxes:d,licenses:[p]}=t;return(0,s.jsxs)(s.Fragment,{children:[l&&(0,s.jsx)(r.A.Item,{name:"autoUpdates",valuePropName:"checked",style:n,children:(0,s.jsx)(D.A,{children:q(W("Updates containing bug fixes and new features will be downloaded and installed automatically."),{a:(0,s.jsx)("a",{href:o,target:"_blank",rel:"noreferrer"})})})}),(0,s.jsx)(r.A.Item,{name:"terms",valuePropName:"checked",required:!0,rules:[{type:"boolean",required:!0,transform:e=>e||void 0,message:W("Please confirm that you have read the privacy policy!")}],style:n,children:(0,s.jsx)(D.A,{children:X("I allow to transfer technical data about this WordPress installation to the update server of %1$s and get latest announcements. This data is required for license activation and update functionality.","legal-text",i)})}),a&&(0,s.jsx)(r.A.Item,{name:"telemetry",valuePropName:"checked",style:n,children:(0,s.jsx)(D.A,{children:q(X("I allow telemetry data about the use of this WordPress plugin to be collected in accordance with the %1$s {{a}}privacy policy{{/a}}. This data does not include any personal information about users of the plugin. Collected data ({{aDataExample}}open example of transmitted data{{/aDataExample}}) will be used to provide you with the best possible support and to improve the plugin.","legal-text",i),{a:(0,s.jsx)("a",{href:o,target:"_blank",rel:"noreferrer"}),aDataExample:(0,s.jsx)(se,{license:p,linkWrapper:!0})})})}),d.map((e=>{let{id:t,text:i}=e;return(0,s.jsx)(r.A.Item,{name:t,valuePropName:"checked",style:n,children:(0,s.jsx)(D.A,{children:i})},t)})),c&&(0,s.jsx)(r.A.Item,{name:"newsletter",valuePropName:"checked",style:n,children:(0,s.jsx)(D.A,{children:X("I would like to receive the %1$s newsletter with WordPress news, sales and product offers (approx. 1-2 per month) via email. I know that I can withdraw my consent for the newsletter at any time.","legal-text",i)})}),(0,s.jsx)(r.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.newsletter!==t.newsletter,children:e=>{let{getFieldValue:t}=e;return t("newsletter")&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A.Item,{label:W("First name"),name:"firstName",style:ce,required:!0,rules:[{required:!0,message:W("Please enter your first name!")}],children:(0,s.jsx)(L.A,{})}),(0,s.jsx)(r.A.Item,{label:W("Email"),name:"email",style:ce,required:!0,rules:[{type:"email",required:!0,message:W("Please enter your email address!")}],children:(0,s.jsx)(L.A,{})}),(0,s.jsx)("div",{className:"notice notice-info inline below-h2 notice-alt",style:{margin:0},children:(0,s.jsx)("p",{children:W("Please note that we will send you a confirmation e-mail. Only when you have clicked on the activation link in the email will you receive the newsletter.")})})]})}}),(0,s.jsx)(r.A.Item,{style:n,children:q(W("Information on the processing of your personal data can be found in our {{a}}privacy policy{{/a}}."),{a:(0,s.jsx)("a",{href:o,target:"_blank",rel:"noreferrer"})})})]})}));var oe=n(3491),ae=n(5330);const re=e=>{let{url:t,style:n,label:i=W("Learn more")}=e;const o={cursor:"pointer",...n};return(0,s.jsxs)(oe.A,{style:o,onClick:()=>window.open(t,"_blank"),children:[(0,s.jsx)(ae.A,{})," ",i]})},le={labelCol:{span:24},wrapperCol:{span:24}},ce={marginBottom:8},de=(0,Q.PA)((e=>{let{onSave:t,onFailure:n,footer:i,pluginUpdate:o}=e;const{message:a}=d.A.useApp(),[l,c]=(0,I.useState)(!1),{busy:p,slug:u,allowsAutoUpdates:h,needsLicenseKeys:g,licenses:y,unlicensedEntries:m,noUsageEntries:v,modifiableEntries:b,invalidKeysError:f,accountSiteUrl:x,additionalCheckboxes:w,licenseKeyHelpUrl:j,name:A,potentialNewsletterUser:{firstName:S,email:P},showBlogName:k,showNetworkWideUpdateIssueNotice:C}=o,O=y.length>1,U={licenses:y.map((e=>{let{blog:t,code:n,installationType:s,hint:i,noUsage:o}=e;var a;return{blog:t,code:n||(i?null==(a=i.help.match(/(\w{8}-\w{4}-\w{4}-\w{4}-\w{12})|(\w{32})/))?void 0:a[0]:"")||"",installationType:s||"",noUsage:o}})),autoUpdates:h,terms:!1,telemetry:!1,newsletter:!1,firstName:S,email:P,...w.reduce(((e,t)=>(e[t.id]=!1,e)),{})},[T]=r.A.useForm(),[E,N]=(0,I.useState)(v.length!==m.length),_=(0,I.useCallback)((async e=>{const{licenses:s,...i}=e,r={...i,licenses:JSON.stringify(g?s.filter((e=>{let{blog:t}=e;const[n]=y.filter((e=>e.blog===t));return m.indexOf(n)>-1})):void 0)};try{await o.update(r),T.setFieldsValue({terms:!1,telemetry:!1,newsletter:!1}),a.success(W("Your license has been activated!")),null==t||t()}catch(e){throw o.invalidKeysError||a.error(e.responseJSON.message),null==n||n(),e}}),[o,t,y,m,g]),M=(0,I.useCallback)((async e=>{try{await _(e)}catch(e){}finally{c(!1)}}),[T,_,c]),X=(0,I.useCallback)((()=>{c(!0),N(!0)}),[]);return(0,s.jsxs)(F.A,{spinning:p,children:[C&&(0,s.jsxs)("div",{className:"notice notice-error inline below-h2 notice-alt",style:{margin:"0 0 10px 0"},children:[(0,s.jsx)("p",{children:W("You are using a WordPress mulisite. Due to technical limitations of WordPress core, %s can receive automatic updates in WordPress multisites only if the plugin is enabled network-wide. You can enable the plugin network-wide, but still only license it for specific sites.",A)}),(0,s.jsx)("p",{children:W("Please enable %s network-wide or take care of regular updates manually!",A)})]}),m.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:"description",style:{marginBottom:15},children:g?W("Activate your %s PRO license to receive regular updates and support.",A):q(W("To use all advantages of %s {{strong}}you need a free license{{/strong}}. After license activation you will receive answers to support requests and announcements in your plugin (e.g. also notices for discount actions of the PRO version).",A),{strong:(0,s.jsx)("strong",{})})}),(0,s.jsxs)(r.A,{name:`license-form-${u}`,id:`license-form-${u}`,form:T,...le,initialValues:U,onFinish:M,onFinishFailed:X,onChange:()=>{N(!0)},labelWrap:!0,children:[g&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A.List,{name:"licenses",children:e=>e.map((e=>{const{blog:t}=T.getFieldValue(["licenses",e.name]),[n]=y.filter((e=>e.blog===t));if(-1===m.indexOf(n))return null;const{busy:i,blogName:o,programmatically:c,host:d}=n,p=null==f?void 0:f[t],u=l?{}:p||n.hint,h=!!(null==p?void 0:p.debug.errors.LicenseMaxUsagesReached);return(0,s.jsxs)(F.A,{spinning:i,children:[(0,s.jsx)(r.A.Item,{noStyle:!0,shouldUpdate:(t,n)=>t.licenses[e.key].noUsage!==n.licenses[e.key].noUsage,children:t=>{let{getFieldValue:n}=t;const i=n(["licenses",e.key,"noUsage"]);return(0,s.jsxs)(r.A.Item,{label:(0,s.jsxs)("span",{children:[m.length>1||k?q(W("Installation type and license key for {{strong}}%s{{/strong}}",o),{strong:(0,s.jsx)("strong",{})}):W("Installation type and license key")," ",(0,s.jsx)(re,{url:j})]}),...u,required:!0,style:ce,children:[!i&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.A.Item,{name:[e.name,"code"],noStyle:!0,rules:[{pattern:/(^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$)|(^\w{32}$)/,required:!0,message:W("Please enter a valid license key!")}],children:(0,s.jsx)(L.A,{placeholder:c?c.code:"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",disabled:!!c,addonBefore:(0,s.jsx)(ee.A,{destroyTooltipOnHide:!0,overlayStyle:{maxWidth:"370px"},content:(0,s.jsxs)("div",{className:"wp-clearfix",children:[(0,s.jsx)("p",{style:{marginTop:0},children:q(W("{{strong}}Production:{{/strong}} Use this, when your site is {{i}}live{{/i}} and {{i}}publicly available{{/i}} to your website visitors."),{strong:(0,s.jsx)("strong",{}),i:(0,s.jsx)("i",{})})}),(0,s.jsx)("p",{children:q(W("{{strong}}Development:{{/strong}} Use this, when your site is {{i}}not yet live{{/i}}, or it is a {{i}}staging environment{{/i}} of your site."),{strong:(0,s.jsx)("strong",{}),i:(0,s.jsx)("i",{})})}),(0,s.jsx)("p",{style:{marginBottom:0},children:W("You can change the installation-type at any time by deactivating the license and activate it again.")})]}),title:(0,s.jsxs)(s.Fragment,{children:[W("What is an installation type?")," ",(0,s.jsx)(re,{url:W("https://devowl.io/knowledge-base/license-installation-type/")})]}),placement:"topLeft",trigger:"hover",children:(0,s.jsx)("div",{children:(0,s.jsx)(r.A.Item,{name:[e.name,"installationType"],noStyle:!0,rules:[{required:!0,message:W("Please choose an installation type!")}],children:(0,s.jsxs)(te.A,{placeholder:W("Installation type"),disabled:!!c,children:[(0,s.jsx)(te.A.Option,{value:"",disabled:!0,children:c?"development"===c.type?W("Development"):W("Production"):W("Select installation type...")}),(0,s.jsx)(te.A.Option,{value:"production",children:W("Production")}),(0,s.jsx)(te.A.Option,{value:"development",children:W("Development")})]})})})})})})}),O&&(0,s.jsx)(r.A.Item,{name:[e.name,"noUsage"],valuePropName:"checked",style:{marginTop:i?-25:0,marginBottom:0},children:(0,s.jsx)(D.A,{children:W("I do not want to license and use the plugin for this site within my multisite.")})})]})}}),c&&(0,s.jsx)("div",{className:"notice notice-warning inline below-h2 notice-alt",style:{margin:"0 0 10px 0"},children:(0,s.jsxs)("p",{children:[q(W("This license cannot be activated manually because it is configured programmatically. That means you have used the {{a}}activation filter{{/a}} for host {{code}}%s{{/code}} (Blog ID: %d). Unfortunately, something went wrong during the license activation.",d,t),{code:(0,s.jsx)("code",{}),a:(0,s.jsx)("a",{href:"https://docs.devowl.io/real-cookie-banner/hooks/DevOwl_RealProductManager_License_Programmatic_$slug.html",target:"_blank",rel:"noreferrer"})})," ","•"," ",(0,s.jsx)("a",{className:"button-link",onClick:async()=>{try{await n.retry(),n.hint&&a.error(n.hint.help)}catch(e){a.error(e.responseJSON.message)}},children:W("Retry activation")})]})}),h&&(0,s.jsx)(ne.A,{type:"info",showIcon:!0,message:W("I have purchased a license that can be used on multiple websites! What can I do?"),description:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:q(W("After purchasing one of our products, only one license key is generated by default, even if your purchase covers multiple websites. This license key can be used for only one website by default. To add more websites to your purchase, you can generate additional license keys within your quota in the {{a}}Customer Center{{/a}}."),{a:(0,s.jsx)("a",{href:x,target:"_blank",rel:"noreferrer"})})}),(0,s.jsx)("a",{className:"button button-primary",href:x,target:"_blank",rel:"noreferrer",children:W("Add licenses in the customer center now")})," ",(0,s.jsx)("a",{className:"button",target:"_blank",href:W("https://devowl.io/knowledge-base/the-limit-of-activated-clients-for-this-license-has-already-been-reached/"),rel:"noreferrer",children:W("Learn more")})]})})]},e.key)}))}),(0,s.jsx)(R.A,{type:"horizontal",style:{margin:"10px 0"}})]}),b.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{display:E?"block":"none"},children:(0,s.jsx)(ie,{pluginUpdate:o})}),i]})]})]})]})}));var pe=n(4918),ue=n(5107),he=n(5881),ge=n(7067),ye=n(8170);const me=(0,Q.PA)((e=>{let{license:t,onDeactivate:n}=e;const{message:i}=d.A.useApp(),{busy:o,uuid:a,installationType:r,telemetryDataSharingOptIn:c,blogName:p,code:u,remote:h,programmatically:g,host:y,blog:m,store:{needsLicenseKeys:v}}=t;return(0,s.jsx)(F.A,{spinning:o,children:(0,s.jsxs)(pe.A.Item,{style:{paddingLeft:0,paddingRight:0},actions:[v&&(0,s.jsxs)(l.A,{children:[(0,s.jsx)(ue.A,{title:W("Client UUID: %s, click to copy.",a),children:(0,s.jsx)(he.A,{style:{cursor:"pointer"},onClick:()=>{!function(e){const t=document.createElement("textarea");t.innerHTML=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}(a),i.success("Successfully copied client UUID key to clipboard!")}})}),"production"===r?W("Production"):"development"===r?W("Development"):"n/a"]},"installationType"),h&&(0,s.jsxs)(l.A,{children:[(0,s.jsx)(ge.A,{}),W("Activated %s",new Date(h.licenseActivation.activatedAt).toLocaleString(document.documentElement.lang))]},"activatedAt"),(0,s.jsx)(se,{license:t,disabled:!c,children:(0,s.jsxs)(l.A,{style:{cursor:"pointer"},children:[(0,s.jsx)(ye.A,{}),W(c?"Telemetry data sharing enabled":"Telemetry data sharing disabled")]},"telemetryDataSharingOptIn")},"telemetryModal"),!g&&(0,s.jsx)("a",{className:"button-link",onClick:async()=>{try{await t.deactivate()}catch(e){i.error(e.responseJSON.message)}null==n||n(t)},children:W("Deactivate")},"deactivate")].filter(Boolean),children:[(0,s.jsx)(pe.A.Item.Meta,{title:p,description:v?(0,s.jsxs)(s.Fragment,{children:[W("Your license key"),": ",(0,s.jsx)("code",{children:u})]}):(0,s.jsxs)(s.Fragment,{children:[W("Your installation is fully activated."),(0,s.jsx)("div",{style:{marginTop:15},children:(0,s.jsx)("a",{rel:"noreferrer",href:W("https://devowl.io/knowledge-base/real-cookie-banner-upgrade-free-to-pro-version/"),className:"button",target:"_blank",children:W("Enter license key to unlock PRO features")})})]})}),g&&(0,s.jsx)("div",{className:"notice notice-info inline below-h2 notice-alt",style:{margin:"0 0 10px 0"},children:(0,s.jsx)("p",{children:q(W("This license cannot be deactivated manually because it is configured programmatically. That means you have used the {{a}}activation filter{{/a}} for host {{code}}%s{{/code}} (Blog ID: %d). Please remove the filter to deactivate the license!",y,m),{code:(0,s.jsx)("code",{}),a:(0,s.jsx)("a",{href:"https://docs.devowl.io/real-cookie-banner/hooks/DevOwl_RealProductManager_License_Programmatic_$slug.html",target:"_blank",rel:"noreferrer"})})})})]})})})),ve=(0,Q.PA)((e=>{let{onDeactivate:t,pluginUpdate:n}=e;const{licensedEntries:i}=n;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(pe.A,{itemLayout:"vertical",size:"small",dataSource:i,renderItem:e=>(0,s.jsx)(me,{license:e,onDeactivate:t})}),(0,s.jsx)("p",{style:{textAlign:"right"},children:(0,s.jsx)(D.A,{disabled:n.busy,checked:n.announcementsActive,onChange:e=>n.setAnnouncementActive(e.target.checked),children:W("Show announcements for this plugin")})})]})})),be=(0,Q.PA)((e=>{let{slug:t}=e;var n;const i=C().pluginUpdateStore.pluginUpdateFetchErrors.get(t),o=null==i||null==(n=i.responseJSON)?void 0:n.message;return(0,s.jsx)("div",{className:"notice notice-error inline below-h2 notice-alt",style:{margin:"20px 0"},children:(0,s.jsx)("p",{children:q(W("Something has gone wrong%s. It could be that you have configured your WordPress instance in such a way that you have blocked the WordPress REST API. Find out how to deal with this {{a}}here{{/a}}.",o?` (${o})`:""),{a:(0,s.jsx)("a",{href:W("https://devowl.io/knowledge-base/wordpress-rest-api-does-not-respond/"),target:"_blank",rel:"noreferrer"})})})})})),fe=(0,Q.PA)((e=>{let{formProps:t={},listProps:n={},slug:i}=e;const{pluginUpdateStore:o}=C(),{busy:a,pluginUpdates:r,pluginUpdateFetchErrors:l}=o,c=r.get(i),d=(null==c?void 0:c.unlicensedEntries.length)>0&&(null==c?void 0:c.licensedEntries.length)>0;return(0,I.useEffect)((()=>{try{o.fetchPluginUpdate(i)}catch(e){}}),[i]),l.get(i)?(0,s.jsx)(be,{slug:i}):a||!c?(0,s.jsx)(F.A,{spinning:!0}):(0,s.jsxs)("div",{children:[d&&(0,s.jsx)(R.A,{type:"horizontal",orientation:"left",style:{marginTop:0},children:W("Not yet licensed")}),(0,s.jsx)(de,{...t,pluginUpdate:c}),d&&(0,s.jsx)(R.A,{type:"horizontal",orientation:"left",children:W("Already licensed")}),c.licensedEntries.length>0&&(0,s.jsx)(ve,{...n,pluginUpdate:c})]})})),xe=(0,Q.PA)((()=>{const[e,t]=(0,I.useState)(!1),{pluginUpdateStore:n}=C(),{busy:i,modalPlugin:o,pluginUpdates:a,pluginUpdateFetchErrors:r}=n,l=o?a.get(o):void 0,c=(null==l?void 0:l.unlicensedEntries.length)>0&&(null==l?void 0:l.licensedEntries.length)>0,d=(0,I.useCallback)((()=>{if(e){const{checkUpdateLink:e}=l;e?window.location.href=e:window.location.reload()}else n.hideModal()}),[e,n,l]),p=(0,I.useCallback)((()=>t(!0)),[t]),u=r.get(o);return(0,I.useEffect)((()=>{document.body.classList[o?"add":"remove"]("rpm-wpc-antd-modal-open")}),[o]),o?(0,s.jsx)(T.A,{open:!0,okButtonProps:{form:`license-form-${null==l?void 0:l.slug}`,htmlType:"submit",style:{display:0===(null==l?void 0:l.unlicensedEntries.length)||u?"none":void 0}},cancelButtonProps:{style:{display:"none"}},onCancel:d,okText:W("Save"),title:l?(0,s.jsxs)("span",{style:{fontWeight:"normal"},children:[(0,s.jsxs)("strong",{children:[l.name,":"]})," ",W("License settings")]}):"",width:800,children:u?(0,s.jsx)(be,{slug:o}):i||!l?(0,s.jsx)(F.A,{spinning:!0}):(0,s.jsxs)("div",{children:[c&&(0,s.jsx)(R.A,{type:"horizontal",orientation:"left",style:{marginTop:0},children:W("Not yet licensed")}),(0,s.jsx)(de,{onSave:p,pluginUpdate:l}),c&&(0,s.jsx)(R.A,{type:"horizontal",orientation:"left",children:W("Already licensed")}),l.licensedEntries.length>0&&(0,s.jsx)(ve,{onDeactivate:p,pluginUpdate:l})]})}):null})),we=()=>{let e;return[!1,new Promise((t=>e=t)),e]},je={loading:we(),complete:we(),interactive:we()},Ae=["readystatechange","rocket-readystatechange","DOMContentLoaded","rocket-DOMContentLoaded","rocket-allScriptsLoaded"];var Se,Pe;G(),Se=()=>{const e=document.createElement("div");document.body.appendChild(e),(0,i.createRoot)(e).render((0,s.jsx)(U,{children:(0,s.jsx)(xe,{})})),Y(),Z()},void 0===Pe&&(Pe="complete"),new Promise((e=>{let t=!1;const n=()=>{(()=>{const{readyState:e}=document,[t,,n]=je[e];if(!t){je[e][0]=!0,n();const[t,,s]=je.interactive;"complete"!==e||t||(je.interactive[0]=!0,s())}})(),!t&&je[Pe][0]&&(t=!0,null==Se||Se(),setTimeout(e,0))};n();for(const e of Ae)document.addEventListener(e,n);je[Pe][1].then(n)}))},1594:e=>{e.exports=React},5206:e=>{e.exports=ReactDOM},4497:e=>{e.exports=mobx}},n={};function s(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,s),o.exports}s.m=t,e=[],s.O=(t,n,i,o)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,i,o]=e[d],r=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(s.O).every((e=>s.O[e](n[l])))?n.splice(l--,1):(r=!1,o<a&&(a=o));if(r){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,i,o]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={57:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[a,r,l]=n,c=0;if(a.some((t=>0!==e[t]))){for(i in r)s.o(r,i)&&(s.m[i]=r[i]);if(l)var d=l(s)}for(t&&t(n);c<a.length;c++)o=a[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},n=self.webpackChunkdevowlWp_realProductManagerWpClient=self.webpackChunkdevowlWp_realProductManagerWpClient||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=s.O(void 0,[26],(()=>s(9314)));i=s.O(i),devowlWp_realProductManagerWpClient=i})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-category-library/4.2.25/40bb823e9a7e81d311fefac964d2d0ea/index.js.map

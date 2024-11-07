(()=>{"use strict";var t={n:i=>{var e=i&&i.__esModule?()=>i.default:()=>i;return t.d(e,{a:e}),e},d:(i,e)=>{for(var o in e)t.o(e,o)&&!t.o(i,o)&&Object.defineProperty(i,o,{enumerable:!0,get:e[o]})},o:(t,i)=>Object.prototype.hasOwnProperty.call(t,i)};const i=jQuery;var e=t.n(i);const o=devowlWp_utils,n=()=>window[o.BaseOptions.getPureSlug("real-utils",!0)].others;let a,s;const r=function(){for(var t=arguments.length,i=new Array(t),e=0;e<t;e++)i[e]=arguments[e];return(s||(s=(0,o.createLocalizationFactory)("devowl-wp-real-utils"))).__(...i)},l={path:"/cross/:slug/:action/dismiss",method:o.RouteHttpVerb.DELETE},c="crossSellingPointer";class p{constructor(t,i,e,o){this.slug=i,this.action=e,this.position=o,this.$handler=t,this.init()}static waitForVisibleElement(t,i,o,n){if(!this.isActionAvailable(i,o))return!1;const a=e()(t);return a.length&&!a.data(c)&&(a.data(c,!0),new p(a,i,o,n)),a.length>0}static isActionAvailable(t,i){var e,o;return!!(null==(o=n().cross)||null==(e=o[t])?void 0:e[i])}close(t,i){t.preventDefault();const e=this.$handler.pointer("widget").find('input[type="checkbox"]').is(":checked");if(this.$handler.pointer("close"),this.$handler.pointer("destroy"),i){const{link:t}=this.getAction();window.open(t,"_blank")}!function(){for(var t=arguments.length,i=new Array(t),e=0;e<t;e++)i[e]=arguments[e];(a||(a=(0,o.createRequestFactory)(window[o.BaseOptions.getPureSlug("real-utils",!0)]))).request(...i)}({location:l,params:{slug:this.slug,action:this.action,force:e}})}buttons(){const t=e()(`<a class="button" href="#">${r("Not now")}</a>`).click((t=>{this.close(t,!1)})),i=e()(`<a class="button button-primary" href="#">${r("Learn more!")}</a>`).click((t=>{this.close(t,!0)}));return e()('<div class="real-utils-pointer-buttons" />').append(i,t)}getAction(){var t;return null==(t=n().cross)?void 0:t[this.slug][this.action]}init(){const{position:t}=this,{title:i,description:e,image:o}=this.getAction(),n=`<label><input type="checkbox" /> ${r("Never show this popup again")}</label>`;this.$handler.pointer({pointerClass:"wp-pointer real-utils-cross-pointer",content:`<h3>${i}</h3><p><img src="${o}" />${e}${n}</p>`,buttons:this.buttons.bind(this),position:t}).pointer("open").pointer("widget").find("img").get(0).onload=()=>this.$handler.pointer("reposition")}}const d="real-media-library",h="real-category-library",u="real-physical-media",b=()=>e()("select#parent").length&&p.isActionAvailable(h,"add-category")&&e()("body.wp-admin.edit-tags-php:not(.woocommerce-page,.post-type-attachment) form#addtag #submit").one("click",(function(){new p(e()(this),h,"add-category","bottom")})),m=()=>e()("select#parent").length&&p.isActionAvailable(h,"add-wc-category")&&e()("body.wp-admin.edit-tags-php.woocommerce-page form#addtag #submit").one("click",(function(){new p(e()(this),h,"add-wc-category","bottom")}));class g{static#t=this.SELECTOR='body.wp-admin.post-php:not(.post-type-attachment) #categorychecklist input[type="checkbox"]';static onChange(){new p(e()(this),h,"assign"),e()(g.SELECTOR).off("change",g.onChange)}static bind(){p.isActionAvailable(h,"assign")&&e()(this.SELECTOR).one("change",this.onChange)}}class w{static#t=this.SELECTOR="body.wp-admin.edit-php:not(.post-type-attachment) .tablenav-pages .pagination-links a";static onClick(t){const i=e()(this).attr("href");return new p(e()(this),h,"pagination"),e()(this).pointer("widget").find(".button").click((()=>{setTimeout((()=>window.open(i,"_self")),1e3)})),e()(w.SELECTOR).off("click",w.onClick),t.preventDefault(),!1}static bind(){p.isActionAvailable(h,"pagination")&&e()(this.SELECTOR).one("click",this.onClick)}}e()(document).ready((()=>{var t;setTimeout((function t(){let i=!1;!i&&(i=p.waitForVisibleElement("body.wp-admin.upload-php .attachment-info > .details:visible, body.wp-admin.post-php.post-type-attachment #post-body-content #titlewrap:visible",d,"attachment-details")),!i&&(i=p.waitForVisibleElement("body.wp-admin.plugins-php #wpbody-content > div.wrap > h1:first","real-cookie-banner","gdpr-compliant")),!i&&(i=p.waitForVisibleElement('body > div > .media-modal.wp-core-ui .media-frame-router button[role="tab"]:eq(1).active',d,"insert-dialog")),!i&&(i=p.waitForVisibleElement("body.wp-admin .editor-post-taxonomies__hierarchical-terms-list:visible",h,"assign","bottom")),!i&&(i=p.waitForVisibleElement("body.wp-admin.upload-php #wpbody-content .upload-ui .button-hero:visible, body.wp-admin.media-new-php #media-items .media-item:first:visible",u,"upload")),!i&&setTimeout(t,1e3)}),1e3),b(),m(),p.isActionAvailable(u,"move")&&(null==(t=window.rml)||t.hooks.register("attachment/move/finished",((t,i)=>{new p(e()(`.rml-container:visible li[data-li-id="${i}"]`),u,"move")}))),g.bind(),w.bind()}))})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-category-library/4.2.24/7496610ea37cb73ea5883175718e2dde/cross.js.map

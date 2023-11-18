var altcha=function(O){"use strict";var ft=Object.defineProperty;var ht=(O,y,F)=>y in O?ft(O,y,{enumerable:!0,configurable:!0,writable:!0,value:F}):O[y]=F;var x=(O,y,F)=>(ht(O,typeof y!="symbol"?y+"":y,F),F);function y(){}function F(t){return t()}function le(){return Object.create(null)}function U(t){t.forEach(F)}function ie(t){return typeof t=="function"}function ve(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function we(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function je(t,e,n){const l=pe(t);if(!l.getElementById(e)){const i=$("style");i.id=e,i.textContent=n,ye(l,i)}}function pe(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ye(t,e){return d(t.head||t,e),e.sheet}function V(t,e,n){t.insertBefore(e,n||null)}function R(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ke(t){return document.createTextNode(t)}function T(){return ke(" ")}function J(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function o(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ee(t){return Array.from(t.childNodes)}function se(t,e,n){t.classList.toggle(e,!!n)}function Ce(t,e,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:l})}function Le(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}let K;function P(t){K=t}function Q(){if(!K)throw new Error("Function called outside component initialization");return K}function xe(t){Q().$$.on_mount.push(t)}function Re(t){Q().$$.on_destroy.push(t)}function Ie(){const t=Q();return(e,n,{cancelable:l=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=Ce(e,n,{cancelable:l});return i.slice().forEach(c=>{c.call(t,r)}),!r.defaultPrevented}return!0}}const B=[],q=[];let Y=[];const oe=[],Ne=Promise.resolve();let ee=!1;function Ae(){ee||(ee=!0,Ne.then(I))}function te(t){Y.push(t)}const ne=new Set;let Z=0;function I(){if(Z!==0)return;const t=K;do{try{for(;Z<B.length;){const e=B[Z];Z++,P(e),Me(e.$$)}}catch(e){throw B.length=0,Z=0,e}for(P(null),B.length=0,Z=0;q.length;)q.pop()();for(let e=0;e<Y.length;e+=1){const n=Y[e];ne.has(n)||(ne.add(n),n())}Y.length=0}while(B.length);for(;oe.length;)oe.pop()();ee=!1,ne.clear(),P(t)}function Me(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(te)}}function Ve(t){const e=[],n=[];Y.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),Y=e}const Oe=new Set;function Se(t,e){t&&t.i&&(Oe.delete(t),t.i(e))}function Fe(t,e,n){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),te(()=>{const r=t.$$.on_mount.map(F).filter(ie);t.$$.on_destroy?t.$$.on_destroy.push(...r):U(r),t.$$.on_mount=[]}),i.forEach(te)}function He(t,e){const n=t.$$;n.fragment!==null&&(Ve(n.after_update),U(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ge(t,e){t.$$.dirty[0]===-1&&(B.push(t),Ae(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Te(t,e,n,l,i,r,c=null,a=[-1]){const u=K;P(t);const f=t.$$={fragment:null,ctx:[],props:r,update:y,not_equal:i,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:le(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};c&&c(f.root);let N=!1;if(f.ctx=n?n(t,e.props||{},(g,_,...E)=>{const k=E.length?E[0]:_;return f.ctx&&i(f.ctx[g],f.ctx[g]=k)&&(!f.skip_bound&&f.bound[g]&&f.bound[g](k),N&&Ge(t,g)),_}):[],f.update(),N=!0,U(f.before_update),f.fragment=l?l(f.ctx):!1,e.target){if(e.hydrate){const g=Ee(e.target);f.fragment&&f.fragment.l(g),g.forEach(R)}else f.fragment&&f.fragment.c();e.intro&&Se(t.$$.fragment),Fe(t,e.target,e.anchor),I()}P(u)}let ce;typeof HTMLElement=="function"&&(ce=class extends HTMLElement{constructor(e,n,l){super();x(this,"$$ctor");x(this,"$$s");x(this,"$$c");x(this,"$$cn",!1);x(this,"$$d",{});x(this,"$$r",!1);x(this,"$$p_d",{});x(this,"$$l",{});x(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=n,l&&this.attachShadow({mode:"open"})}addEventListener(e,n,l){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(n),this.$$c){const i=this.$$c.$on(e,n);this.$$l_u.set(n,i)}super.addEventListener(e,n,l)}removeEventListener(e,n,l){if(super.removeEventListener(e,n,l),this.$$c){const i=this.$$l_u.get(n);i&&(i(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(r){return()=>{let c;return{c:function(){c=$("slot"),r!=="default"&&o(c,"name",r)},m:function(f,N){V(f,c,N)},d:function(f){f&&R(c)}}}};if(await Promise.resolve(),!this.$$cn)return;const n={},l=Le(this);for(const r of this.$$s)r in l&&(n[r]=[e(r)]);for(const r of this.attributes){const c=this.$$g_p(r.name);c in this.$$d||(this.$$d[c]=D(c,r.value,this.$$p_d,"toProp"))}this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const i=()=>{this.$$r=!0;for(const r in this.$$p_d)if(this.$$d[r]=this.$$c.$$.ctx[this.$$c.$$.props[r]],this.$$p_d[r].reflect){const c=D(r,this.$$d[r],this.$$p_d,"toAttribute");c==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,c)}this.$$r=!1};this.$$c.$$.after_update.push(i),i();for(const r in this.$$l)for(const c of this.$$l[r]){const a=this.$$c.$on(r,c);this.$$l_u.set(c,a)}this.$$l={}}}attributeChangedCallback(e,n,l){var i;this.$$r||(e=this.$$g_p(e),this.$$d[e]=D(e,l,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===e||!this.$$p_d[n].attribute&&n.toLowerCase()===e)||e}});function D(t,e,n,l){var r;const i=(r=n[t])==null?void 0:r.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!l||!n[t])return e;if(l==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function We(t,e,n,l,i,r){let c=class extends ce{constructor(){super(t,n,i),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Object.keys(e).forEach(a=>{Object.defineProperty(c.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(u){var f;u=D(a,u,e),this.$$d[a]=u,(f=this.$$c)==null||f.$set({[a]:u})}})}),l.forEach(a=>{Object.defineProperty(c.prototype,a,{get(){var u;return(u=this.$$c)==null?void 0:u[a]}})}),r&&(c=r(c)),t.element=c,c}class Be{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){He(this,1),this.$destroy=y}$on(e,n){if(!ie(n))return y;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!we(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ye="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ye);const ae="KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHI9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGMoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAobj0+bi50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBsKGUsbixhKXtyZXR1cm4gYyhhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChhLHIuZW5jb2RlKGUrbikpKX1hc3luYyBmdW5jdGlvbiBpKGUsbixhPSJTSEEtMjU2IixvPTFlNyl7Y29uc3Qgcz1EYXRlLm5vdygpO2ZvcihsZXQgdD0wO3Q8PW87dCsrKWlmKGF3YWl0IGwobix0LGEpPT09ZSlyZXR1cm57bnVtYmVyOnQsdG9vazpEYXRlLm5vdygpLXN9O3JldHVybiBudWxsfW9ubWVzc2FnZT1hc3luYyBlPT57Y29uc3R7YWxnOm4sY2hhbGxlbmdlOmEsbWF4Om8sc2FsdDpzfT1lLmRhdGF8fHt9O2lmKGEmJnMpe2NvbnN0IHQ9YXdhaXQgaShhLHMsbixvKTtzZWxmLnBvc3RNZXNzYWdlKHQmJnsuLi50LHdvcmtlcjohMH0pfWVsc2Ugc2VsZi5wb3N0TWVzc2FnZShudWxsKX19KSgpOwo=",ue=typeof window<"u"&&window.Blob&&new Blob([atob(ae)],{type:"text/javascript;charset=utf-8"});function Ze(){let t;try{if(t=ue&&(window.URL||window.webkitURL).createObjectURL(ue),!t)throw"";return new Worker(t)}catch{return new Worker("data:application/javascript;base64,"+ae)}finally{t&&(window.URL||window.webkitURL).revokeObjectURL(t)}}const Ue=1e7,Ke=new TextEncoder;function Pe(t){return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function Xe(t=1e5,e="SHA-256"){const n=Date.now().toString(16),l=await fe(n,Math.round(Math.random()*t),e);return{algorithm:e,challenge:l,salt:n,signature:""}}async function fe(t,e,n){return Pe(await crypto.subtle.digest(n,Ke.encode(t+e)))}async function De(t,e,n="SHA-256",l=Ue){const i=Date.now();for(let r=0;r<=l;r++)if(await fe(e,r,n)===t)return{number:r,took:Date.now()-i};return null}var p=(t=>(t.ERROR="error",t.VERIFIED="verified",t.VERIFYING="verifying",t.UNVERIFIED="unverfied",t))(p||{});function ze(t){je(t,"svelte-mjm2j6",".altcha.svelte-mjm2j6.svelte-mjm2j6{background:var(--altcha-color-base, #ffffff);border:1px solid var(--altcha-color-border, #a0a0a0);border-radius:3px;color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:260px;overflow:hidden;position:relative}.altcha.svelte-mjm2j6.svelte-mjm2j6:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha-main.svelte-mjm2j6.svelte-mjm2j6{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-mjm2j6.svelte-mjm2j6{flex-grow:1}.altcha-label.svelte-mjm2j6 label.svelte-mjm2j6{cursor:pointer}.altcha-logo.svelte-mjm2j6.svelte-mjm2j6{color:currentColor;opacity:0.3}.altcha-logo.svelte-mjm2j6.svelte-mjm2j6:hover{opacity:1}.altcha-error.svelte-mjm2j6.svelte-mjm2j6{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-mjm2j6.svelte-mjm2j6{align-items:center;background-color:var(--altcha-color-footer-bg, #f4f4f4);display:flex;font-size:0.75rem;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-mjm2j6>.svelte-mjm2j6:first-child{flex-grow:1}.altcha-footer.svelte-mjm2j6 a{color:currentColor}.altcha-checkbox.svelte-mjm2j6.svelte-mjm2j6{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-mjm2j6 input.svelte-mjm2j6{width:18px;height:18px;margin:0}.altcha-hidden.svelte-mjm2j6.svelte-mjm2j6{display:none}.altcha-spinner.svelte-mjm2j6.svelte-mjm2j6{animation:svelte-mjm2j6-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-mjm2j6-altcha-spinner{100%{transform:rotate(360deg)}}")}function he(t){let e,n,l;return{c(){e=S("svg"),n=S("path"),l=S("path"),o(n,"d","M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"),o(n,"fill","currentColor"),o(n,"opacity",".25"),o(l,"d","M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"),o(l,"fill","currentColor"),o(l,"class","altcha-spinner svelte-mjm2j6"),o(e,"width","24"),o(e,"height","24"),o(e,"viewBox","0 0 24 24"),o(e,"xmlns","http://www.w3.org/2000/svg")},m(i,r){V(i,e,r),d(e,n),d(e,l)},d(i){i&&R(e)}}}function Je(t){let e,n=t[7].label+"",l;return{c(){e=$("label"),o(e,"for",l=t[1]+"_checkbox"),o(e,"class","svelte-mjm2j6")},m(i,r){V(i,e,r),e.innerHTML=n},p(i,r){r[0]&128&&n!==(n=i[7].label+"")&&(e.innerHTML=n),r[0]&2&&l!==(l=i[1]+"_checkbox")&&o(e,"for",l)},d(i){i&&R(e)}}}function Qe(t){let e,n=t[7].verifying+"";return{c(){e=$("span")},m(l,i){V(l,e,i),e.innerHTML=n},p(l,i){i[0]&128&&n!==(n=l[7].verifying+"")&&(e.innerHTML=n)},d(l){l&&R(e)}}}function qe(t){let e,n=t[7].verified+"",l,i;return{c(){e=$("span"),l=T(),i=$("input"),o(i,"type","hidden"),o(i,"name",t[1]),i.value=t[6]},m(r,c){V(r,e,c),e.innerHTML=n,V(r,l,c),V(r,i,c)},p(r,c){c[0]&128&&n!==(n=r[7].verified+"")&&(e.innerHTML=n),c[0]&2&&o(i,"name",r[1]),c[0]&64&&(i.value=r[6])},d(r){r&&(R(e),R(l),R(i))}}}function de(t){let e,n,l,i,r,c=t[7].error+"";return{c(){e=$("div"),n=S("svg"),l=S("path"),i=T(),r=$("div"),o(l,"stroke-linecap","round"),o(l,"stroke-linejoin","round"),o(l,"d","M6 18L18 6M6 6l12 12"),o(n,"width","14"),o(n,"height","14"),o(n,"xmlns","http://www.w3.org/2000/svg"),o(n,"fill","none"),o(n,"viewBox","0 0 24 24"),o(n,"stroke-width","1.5"),o(n,"stroke","currentColor"),o(r,"title",t[5]),o(e,"class","altcha-error svelte-mjm2j6")},m(a,u){V(a,e,u),d(e,n),d(n,l),d(e,i),d(e,r),r.innerHTML=c},p(a,u){u[0]&128&&c!==(c=a[7].error+"")&&(r.innerHTML=c),u[0]&32&&o(r,"title",a[5])},d(a){a&&R(e)}}}function me(t){let e,n,l=t[7].footer+"";return{c(){e=$("div"),n=$("div"),o(n,"class","svelte-mjm2j6"),o(e,"class","altcha-footer svelte-mjm2j6")},m(i,r){V(i,e,r),d(e,n),n.innerHTML=l},p(i,r){r[0]&128&&l!==(l=i[7].footer+"")&&(n.innerHTML=l)},d(i){i&&R(e)}}}function et(t){let e,n,l,i,r,c,a,u,f,N,g,_,E,k,W,X,A,H,M,v=t[2]===p.VERIFYING&&he();function G(h,L){return h[2]===p.VERIFIED?qe:h[2]===p.VERIFYING?Qe:Je}let C=G(t),m=C(t),w=t[5]&&de(t),j=t[7].footer&&t[0]!==!0&&me(t);return{c(){e=$("div"),n=$("div"),v&&v.c(),l=T(),i=$("div"),r=$("input"),a=T(),u=$("div"),m.c(),f=T(),N=$("div"),g=$("a"),_=S("svg"),E=S("path"),k=S("path"),W=S("path"),X=T(),w&&w.c(),A=T(),j&&j.c(),o(r,"type","checkbox"),o(r,"id",c=t[1]+"_checkbox"),r.required=!0,o(r,"class","svelte-mjm2j6"),o(i,"class","altcha-checkbox svelte-mjm2j6"),se(i,"altcha-hidden",t[2]===p.VERIFYING),o(u,"class","altcha-label svelte-mjm2j6"),o(E,"d","M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"),o(E,"fill","currentColor"),o(k,"d","M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"),o(k,"fill","currentColor"),o(W,"d","M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"),o(W,"fill","currentColor"),o(_,"width","22"),o(_,"height","22"),o(_,"viewBox","0 0 20 20"),o(_,"fill","none"),o(_,"xmlns","http://www.w3.org/2000/svg"),o(g,"href",ge),o(g,"target","_blank"),o(g,"class","altcha-logo svelte-mjm2j6"),o(n,"class","altcha-main svelte-mjm2j6"),o(e,"class","altcha svelte-mjm2j6"),o(e,"data-state",t[2])},m(h,L){V(h,e,L),d(e,n),v&&v.m(n,null),d(n,l),d(n,i),d(i,r),r.checked=t[3],d(n,a),d(n,u),m.m(u,null),d(n,f),d(n,N),d(N,g),d(g,_),d(_,E),d(_,k),d(_,W),d(e,X),w&&w.m(e,null),d(e,A),j&&j.m(e,null),t[20](e),H||(M=[J(r,"change",t[19]),J(r,"change",t[8]),J(r,"invalid",t[9])],H=!0)},p(h,L){h[2]===p.VERIFYING?v||(v=he(),v.c(),v.m(n,l)):v&&(v.d(1),v=null),L[0]&2&&c!==(c=h[1]+"_checkbox")&&o(r,"id",c),L[0]&8&&(r.checked=h[3]),L[0]&4&&se(i,"altcha-hidden",h[2]===p.VERIFYING),C===(C=G(h))&&m?m.p(h,L):(m.d(1),m=C(h),m&&(m.c(),m.m(u,null))),h[5]?w?w.p(h,L):(w=de(h),w.c(),w.m(e,A)):w&&(w.d(1),w=null),h[7].footer&&h[0]!==!0?j?j.p(h,L):(j=me(h),j.c(),j.m(e,null)):j&&(j.d(1),j=null),L[0]&4&&o(e,"data-state",h[2])},i:y,o:y,d(h){h&&R(e),v&&v.d(),m.d(),w&&w.d(),j&&j.d(),t[20](null),H=!1,U(M)}}}const ge="https://altcha.org/";function be(t){return JSON.parse(t)}function tt(t,e,n){let l,i,r,{challengeurl:c=void 0}=e,{challengejson:a=void 0}=e,{debug:u=!1}=e,{hidefooter:f=!1}=e,{name:N="altcha"}=e,{maxnumber:g=void 0}=e,{mockerror:_=!1}=e,{strings:E=void 0}=e,{test:k=!1}=e;const W=Ie(),X=["SHA-256","SHA-384","SHA-512"];let A=!1,H,M=null,v=null,G=null,C=p.UNVERIFIED;Re(()=>{M&&(M.removeEventListener("submit",w),M.removeEventListener("reset",j),M=null)}),xe(()=>{m("mounted"),k&&m("using test mode"),M=H.closest("form"),M&&(M.addEventListener("submit",w),M.addEventListener("reset",j))});function m(...s){(u||s.some(b=>b instanceof Error))&&console[s[0]instanceof Error?"error":"log"]("ALTCHA",...s)}function w(){z()}function j(){z()}function h(s,b){return btoa(JSON.stringify({algorithm:s.algorithm,challenge:s.challenge,number:b.number,salt:s.salt,signature:s.signature,test:k?!0:void 0,took:b.took}))}function L(s){if(!s.algorithm||!X.includes(s.algorithm))throw new Error(`Unknown algorithm value. Allowed values: ${X.join(", ")}`);if(!s.challenge||s.challenge.length<40)throw new Error("Challenge is too short. Min. 40 chars.");if(!s.salt||s.salt.length<10)throw new Error("Salt is too short. Min. 10 chars.");if(s.signature===void 0)throw new Error("Signature is missing.")}async function nt(){if(_)throw m("mocking error"),new Error("Mocked error.");if(l)return m("using provided json data"),l;if(k)return m("generating test challenge"),Xe();{if(!c)throw new Error("Attribute challengeurl not set.");m("fetching challenge from",c);const s=await fetch(c);if(s.status!==200)throw new Error(`Server responded with ${s.status}.`);return s.json()}}async function rt(s){let b=null;if("Worker"in window){try{b=await lt(s.challenge,s.salt,s.algorithm)}catch(re){m(re)}if((b==null?void 0:b.number)!==void 0)return{data:s,solution:b}}return{data:s,solution:await De(s.challenge,s.salt,s.algorithm,g)}}async function lt(s,b,re){const _e=new Ze;return new Promise(at=>{_e.addEventListener("message",ut=>{at(ut.data)}),_e.postMessage({alg:re,challenge:s,max:g,salt:b})})}function it(){[p.UNVERIFIED,p.ERROR].includes(C)?(z(p.VERIFYING),nt().then(s=>(L(s),m("challenge",s),rt(s))).then(({data:s,solution:b})=>{if(m("solution",b),(b==null?void 0:b.number)!==void 0)m("verified"),n(2,C=p.VERIFIED),n(3,A=!0),n(6,G=h(s,b)),W("verified",{payload:G}),m("payload",G);else throw new Error("Unexpected result returned.")}).catch(s=>{m(s),n(2,C=p.ERROR),n(3,A=!1),n(5,v=s)})):n(3,A=!0)}function st(){C===p.VERIFYING&&alert(r.waitAlert)}function z(s=p.UNVERIFIED){n(3,A=!1),n(5,v=null),n(6,G=null),n(2,C=s)}function ot(){A=this.checked,n(3,A)}function ct(s){q[s?"unshift":"push"](()=>{H=s,n(4,H)})}return t.$$set=s=>{"challengeurl"in s&&n(10,c=s.challengeurl),"challengejson"in s&&n(11,a=s.challengejson),"debug"in s&&n(12,u=s.debug),"hidefooter"in s&&n(0,f=s.hidefooter),"name"in s&&n(1,N=s.name),"maxnumber"in s&&n(13,g=s.maxnumber),"mockerror"in s&&n(14,_=s.mockerror),"strings"in s&&n(15,E=s.strings),"test"in s&&n(16,k=s.test)},t.$$.update=()=>{t.$$.dirty[0]&2048&&(l=a?be(a):void 0),t.$$.dirty[0]&32768&&n(18,i=E?be(E):{}),t.$$.dirty[0]&262144&&n(7,r={error:"Verification failed. Try again later.",footer:`Protected by <a href="${ge}" target="_blank">ALTCHA</a>`,label:"I'm not a robot",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait.",...i}),t.$$.dirty[0]&4&&W("statechange",{state:C})},[f,N,C,A,H,v,G,r,it,st,c,a,u,g,_,E,k,z,i,ot,ct]}class $e extends Be{constructor(e){super(),Te(this,e,tt,et,ve,{challengeurl:10,challengejson:11,debug:12,hidefooter:0,name:1,maxnumber:13,mockerror:14,strings:15,test:16,reset:17},ze,[-1,-1])}get challengeurl(){return this.$$.ctx[10]}set challengeurl(e){this.$$set({challengeurl:e}),I()}get challengejson(){return this.$$.ctx[11]}set challengejson(e){this.$$set({challengejson:e}),I()}get debug(){return this.$$.ctx[12]}set debug(e){this.$$set({debug:e}),I()}get hidefooter(){return this.$$.ctx[0]}set hidefooter(e){this.$$set({hidefooter:e}),I()}get name(){return this.$$.ctx[1]}set name(e){this.$$set({name:e}),I()}get maxnumber(){return this.$$.ctx[13]}set maxnumber(e){this.$$set({maxnumber:e}),I()}get mockerror(){return this.$$.ctx[14]}set mockerror(e){this.$$set({mockerror:e}),I()}get strings(){return this.$$.ctx[15]}set strings(e){this.$$set({strings:e}),I()}get test(){return this.$$.ctx[16]}set test(e){this.$$set({test:e}),I()}get reset(){return this.$$.ctx[17]}}return customElements.define("altcha-box",We($e,{challengeurl:{},challengejson:{},debug:{type:"Boolean"},hidefooter:{type:"Boolean"},name:{},maxnumber:{},mockerror:{type:"Boolean"},strings:{},test:{type:"Boolean"}},[],["reset"],!1)),O.Altcha=$e,Object.defineProperty(O,Symbol.toStringTag,{value:"Module"}),O}({});
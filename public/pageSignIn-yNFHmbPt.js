const __vite__fileDeps=["./pageIm-BArwD9kg.js","./index-r2gGMmA-.js","./index-8FqDkb1A.css","./page-De0hPReT.js","./pageAuthCode-BWgZkpRc.js","./codeInputField-CZD3dk5h.js","./wrapEmojiText-CLm7708U.js","./button-DQpxWumM.js","./putPreloader-9BKU5zUs.js","./countryInputField-BWE-irbU.js","./scrollable-CwMIL7Lm.js","./pageSignQR-CposOwEu.js","./textToSvgURL-Cnw_Q8Rw.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as s,b as L,c as E,i as m,A as C,_ as I,d as x,I as A,e as N,f as M,g as F}from"./index-r2gGMmA-.js";import{p as O}from"./putPreloader-9BKU5zUs.js";import{P as V,a as B}from"./page-De0hPReT.js";import{C as U,T as W,a as z}from"./countryInputField-BWE-irbU.js";import{B as P,r as H}from"./button-DQpxWumM.js";import{p as K,l as Q,t as $,r as h}from"./wrapEmojiText-CLm7708U.js";import{p as j,g as q}from"./pageSignQR-CposOwEu.js";import"./scrollable-CwMIL7Lm.js";import"./textToSvgURL-Cnw_Q8Rw.js";let a=null,l;const D=()=>{const g=document.createElement("div");g.classList.add("input-wrapper");let y,k;const d=new U({onCountryChange:(e,t)=>{y=e,k=t,t&&(i.value=i.lastValue="+"+t.country_code,setTimeout(()=>{u.focus(),K(u,!0)},0))}}),i=new W({onInput:e=>{Q.loadLottieWorkers();const{country:t,code:o}=e||{},n=t?t.name||t.default_name:"";n!==d.value&&(!y||!t||!o||y!==t&&k.country_code!==o.country_code)&&d.override(t,o,n),t||i.value.length-1>1?a.style.visibility="":a.style.visibility="hidden"}}),u=i.input;u.addEventListener("keypress",e=>{if(!a.style.visibility&&e.key==="Enter")return S()});const c=new z({text:"Login.KeepSigned",name:"keepSession",withRipple:!0,checked:!0});c.input.addEventListener("change",()=>{const e=c.checked;s.managers.appStateManager.pushToState("keepSigned",e),L.toggleStorages(e,!0)}),L.getState().then(e=>{E.isAvailable()?c.checked=e.keepSigned:(c.checked=!1,c.label.classList.add("checkbox-disabled"))}),a=P("btn-primary btn-color-primary",{text:"Login.Next"}),a.style.visibility="hidden";const S=e=>{e&&N(e);const t=$([a,l],!0);h(a,m("PleaseWait")),O(a);const o=i.value;s.managers.apiManager.invokeApi("auth.sendCode",{phone_number:o,api_id:C.id,api_hash:C.hash,settings:{_:"codeSettings",pFlags:{}}}).then(async n=>{if(n._==="auth.sentCodeSuccess"){const{authorization:r}=n;r._==="auth.authorization"&&(await s.managers.apiManager.setUser(r.user),I(()=>import("./pageIm-BArwD9kg.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(b=>{b.default.mount()}))}I(()=>import("./pageAuthCode-BWgZkpRc.js"),__vite__mapDeps([4,1,2,3,5,6,7,8,9,10,11,12]),import.meta.url).then(r=>r.default.mount(Object.assign(n,{phone_number:o})))}).catch(n=>{switch(t(),n.type){case"PHONE_NUMBER_INVALID":i.setError(),h(i.label,m("Login.PhoneLabelInvalid")),u.classList.add("error"),h(a,m("Login.Next"));break;default:console.error("auth.sendCode error:",n),a.innerText=n.type;break}})};B(a,S),l=P("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Login"}),l.addEventListener("click",()=>{j.mount()}),g.append(d.container,i.container,c.label,a,l);const _=document.createElement("h4");_.classList.add("text-center"),x(_,"Login.Title");const f=document.createElement("div");f.classList.add("subtitle","text-center"),x(f,"Login.StartText"),R.pageEl.querySelector(".container").append(_,f,g);const T=()=>{s.managers.apiManager.invokeApi("help.getNearestDc").then(e=>{const t=E.getFromCache("langPack");t&&!t.countries?.hash&&M.getLangPack(t.lang_code).then(()=>{i.simulateInputEvent()});const o=new Set([1,2,3,4,5]),n=[e.this_dc];let r;return e.nearest_dc!==e.this_dc&&(r=s.managers.apiManager.getNetworkerVoid(e.nearest_dc).then(()=>{n.push(e.nearest_dc)})),(r||Promise.resolve()).then(()=>{n.forEach(p=>{o.delete(p)});const b=[...o],v=async()=>{const p=b.shift();if(!p)return;const w=`dc${p}_auth_key`;if(await F.get(w))return v();setTimeout(()=>{s.managers.apiManager.getNetworkerVoid(p).finally(v)},3e3)};v()}),e}).then(e=>{!d.value.length&&!i.value.length&&d.selectCountryByIso2(e.country)})};A||setTimeout(()=>{u.focus()},0),q(g),T()},R=new V("page-sign",!0,D,()=>{a&&(h(a,m("Login.Next")),H(a,void 0,void 0,!0),a.removeAttribute("disabled")),l&&l.removeAttribute("disabled"),s.managers.appStateManager.pushToState("authState",{_:"authStateSignIn"})});export{R as default};
//# sourceMappingURL=pageSignIn-yNFHmbPt.js.map

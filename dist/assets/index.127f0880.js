const d=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};d();const s=document.querySelector("#video"),f=new BroadcastChannel("quote_channel");document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"?s.play():s.pause()});const u=o=>{const r=new Date(o),n=navigator.language;return new Intl.DateTimeFormat(n,{timeZone:"UTC"}).format(r)},l=document.querySelector("#quote"),c=async()=>{if(document.visibilityState==="visible")try{const o=await fetch("https://api.quotable.io/random"),{content:r,author:n,dateAdded:i}=await o.json(),e=`
			<span>${r}</span> 
			<span>- ${n} Added on ${u(i)}</span>`;l.innerHTML=e,f.postMessage(e)}catch(o){console.error(o)}};c();setInterval(c,1e4);const h=document.querySelector("#share-button"),m=async o=>{try{await navigator.share(o)}catch(r){console.error(r)}};h.addEventListener("click",()=>{let o={title:"A Beautiful Quote",text:l.textContent,url:location.href};m(o)});
import"./style.987d2646.js";const n=new BroadcastChannel("quote_channel"),o=document.querySelector("#quote");n.onmessage=({data:e})=>{o.innerHTML=e};

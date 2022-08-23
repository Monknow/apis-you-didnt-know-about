import"./style.0c45c0da.js";const n=new BroadcastChannel("quote_channel"),o=document.querySelector("#quote");n.onmessage=({data:e})=>{o.innerHTML=e};

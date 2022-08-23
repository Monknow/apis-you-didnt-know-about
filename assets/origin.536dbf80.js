import"./style.b43ae589.js";const n=new BroadcastChannel("quote_channel"),o=document.querySelector("#quote");n.onmessage=({data:e})=>{o.innerHTML=e};

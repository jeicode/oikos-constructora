import './polyfills.server.mjs';
import{a as n}from"./chunk-CRUCEMX5.mjs";import{C as r,L as m,sb as h}from"./chunk-CLTGIIR5.mjs";var p=(()=>{let o=class o{constructor(t){this._document=t}getHomeSchema(){return{"@context":"https://schema.org","@type":"Organization",name:"OIKOS Constructora",url:"https://www.oikos.com.co/constructora/",logo:"https://www.oikos.com.co/constructora/logo_constructora.38d078bd10a91c19.svg",sameAs:["https://www.facebook.com/oikosconstructora","https://twitter.com/oikosconstr","https://www.instagram.com/oikos_constructora/","https://www.youtube.com/channel/UCGYegtZ2w7LVLu_LcOtxdTA","https://www.linkedin.com/company/grupo-empresarial-oikos/"]}}getBlogSchema(t){return{"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":this._document.URL},headline:t.title_new||t.title,image:n.imagenes_url+t.imagen,author:{"@type":"organization",name:"OIKOS Constructora"},publisher:{"@type":"Organization",name:"OIKOS Constructora",logo:{"@type":"ImageObject",url:n.imagenes_url+"logo_constructora.svg"}},datePublished:t.date,dateModified:t.fecha_modificacion}}removeElementHeadByClass(t){let e=this._document.head.getElementsByClassName(`${t}`);if(e?.length>0)for(let s=0;s<e.length;s++){let i=e[s];this._document.head.removeChild(i)}}insertSchema(t,e){let{id:s,className:i}=e;this.removeElementHeadByClass(i);let a=this._document.createElement("script");a.setAttribute("class",i),a.setAttribute("id",String(s)),a.setAttribute("type","application/ld+json"),a.text=JSON.stringify(t),this._document.head.appendChild(a)}};o.\u0275fac=function(e){return new(e||o)(m(h))},o.\u0275prov=r({token:o,factory:o.\u0275fac,providedIn:"root"});let c=o;return c})();export{p as a};

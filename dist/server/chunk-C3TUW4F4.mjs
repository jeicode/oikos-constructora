import './polyfills.server.mjs';
import{A as a,Fa as o,_ as s,w as r}from"./chunk-CLTGIIR5.mjs";var u=(()=>{let e=class e{constructor(t){this.elementRef=t,this.defaultLink="https://www.oikos.com.co/constructora/images/website/Image_not_available.png"}loadDefaultImage(){let t=this.elementRef.nativeElement;t.src===this.defaultLink?console.error(`La imagen por default ${this.defaultLink} est\xE1 rota, por favor asigna una url v\xE1lida`):t.src=this.defaultLink}};e.\u0275fac=function(n){return new(n||e)(s(a))},e.\u0275dir=r({type:e,selectors:[["","defaultImg",""]],hostBindings:function(n,l){n&1&&o("error",function(){return l.loadDefaultImage()})},inputs:{defaultLink:"defaultLink"},standalone:!0});let i=e;return i})();export{u as a};

import{a as f}from"./chunk-BCAWV3EG.js";import{B as m}from"./chunk-TLFEZ4DJ.js";import{c as n,ca as s,na as u,q as c}from"./chunk-77KFO6RP.js";var p=f.base_url,w=(()=>{let o=class o{constructor(t){this._http=t}getContentHtmlExternalPage(t){return n(this,null,function*(){let r=`${p}api/v1/getContentHtmlExternalPage?urlPage=${t}`;return c(this._http.get(r)).then().catch(e=>(console.warn(e),!1))})}getCopPriceByUsd(){return n(this,null,function*(){let t="https://www.google.com/finance/quote/USD-COP?sa=X&ved=2ahUKEwiBpd_lo5L7AhV1VTABHSOsBHgQmY0JegQIBhAc",{html:r}=yield this.getContentHtmlExternalPage(t);if(r){var e=new DOMParser,i=e.parseFromString(r,"text/html");if(i){let l=i.querySelector(".fxKbKc")?.textContent;if(l){let g=l.replace(/,/g,"");return Number(g)}}}return null})}convertCopToUsdProjects(t){return n(this,null,function*(){let r=yield this.getCopPriceByUsd();return r&&t?.length>0&&t.length>0?t.map(e=>(e?.valor_proyecto&&(e.dollar_value=Number(e?.valor_proyecto)/r,e.dollar_value=Math.trunc(e.dollar_value)),e)):null})}};o.\u0275fac=function(r){return new(r||o)(u(m))},o.\u0275prov=s({token:o,factory:o.\u0275fac,providedIn:"root"});let a=o;return a})();export{w as a};

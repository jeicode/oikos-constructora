import{Ac as i,Bc as v,Da as m,ab as f,ea as l,fb as o,l as u,qa as d,za as b}from"./chunk-XI7NKT5T.js";function a(t,e){!e?.injector&&b(a);let s=e?.injector??d(m),n=new u(1),r=v(()=>{let c;try{c=t()}catch(h){i(()=>n.error(h));return}i(()=>n.next(c))},{injector:s,manualCleanup:!0});return s.get(f).onDestroy(()=>{r.destroy(),n.complete()}),n.asObservable()}var E=(()=>{let e=class e{constructor(){this.loadCEvent=o([]),this.$loadCEvent=a(this.loadCEvent)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{E as a};

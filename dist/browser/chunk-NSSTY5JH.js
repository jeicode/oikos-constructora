import{B as g,D as E,Fc as D,K as x,L as I,N,Ta as S,ba as c,f as w,ha as j,i as b,ia as M,ka as o,r as m,s as y,v}from"./chunk-E5IYGAUJ.js";function h(e){return Array.isArray(e)?e:[e]}var f;try{f=typeof Intl<"u"&&Intl.v8BreakIterator}catch{f=!1}var A=(()=>{let t=class t{constructor(i){this._platformId=i,this.isBrowser=this._platformId?D(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||f)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(n){return new(n||t)(o(j))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var B=new Set,d,F=(()=>{let t=class t{constructor(i,n){this._platform=i,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):W}matchMedia(i){return(this._platform.WEBKIT||this._platform.BLINK)&&C(i,this._nonce),this._matchMedia(i)}};t.\u0275fac=function(n){return new(n||t)(o(A),o(M,8))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function C(e,t){if(!B.has(e))try{d||(d=document.createElement("style"),t&&(d.nonce=t),d.setAttribute("type","text/css"),document.head.appendChild(d)),d.sheet&&(d.sheet.insertRule(`@media ${e} {body{ }}`,0),B.add(e))}catch(l){console.error(l)}}function W(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var L=(()=>{let t=class t{constructor(i,n){this._mediaMatcher=i,this._zone=n,this._queries=new Map,this._destroySubject=new b}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(i){return k(h(i)).some(u=>this._registerQuery(u).mql.matches)}observe(i){let u=k(h(i)).map(s=>this._registerQuery(s).observable),r=y(u);return r=v(r.pipe(E(1)),r.pipe(x(1),g(0))),r.pipe(m(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:p,query:R})=>{a.matches=a.matches||p,a.breakpoints[R]=p}),a}))}_registerQuery(i){if(this._queries.has(i))return this._queries.get(i);let n=this._mediaMatcher.matchMedia(i),r={observable:new w(s=>{let a=p=>this._zone.run(()=>s.next(p));return n.addListener(a),()=>{n.removeListener(a)}}).pipe(I(n),m(({matches:s})=>({query:i,matches:s})),N(this._destroySubject)),mql:n};return this._queries.set(i,r),r}};t.\u0275fac=function(n){return new(n||t)(o(F),o(S))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function k(e){return e.map(t=>t.split(",")).reduce((t,l)=>t.concat(l)).map(t=>t.trim())}var it=(()=>{let t=class t{constructor(i){this.breakpointObserver=i,this.isMobile=!1,this.observeBreakpoints()}observeBreakpoints(){this.breakpointObserver.observe(["(min-width: 768px)"]).subscribe(i=>{i.breakpoints["(min-width: 768px)"]?this.isMobile=!1:this.isMobile=!0})}};t.\u0275fac=function(n){return new(n||t)(o(L))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{it as a};

import{a as k}from"./chunk-3F7A77HI.js";import{a as O}from"./chunk-6DP3GNXQ.js";import{M as w,Na as B,d as T,e as R,m as S,ta as F}from"./chunk-E2SANVYB.js";import{Ab as p,Bb as a,Cb as v,Hb as u,Kb as I,Oa as C,Sb as f,Ta as o,Ua as g,Ub as b,X as x,Xb as y,d,ib as m,pa as _,qb as c,rb as l}from"./chunk-4JXXPMF3.js";var h=class{constructor(r="",n=""){this.title=r,this.link=n}};function P(e,r){e&1&&v(0,"span",2)}function E(e,r){if(e&1&&(p(0,"a",6),f(1),m(2,P,1,0,"span",7),a()),e&2){let n=u(),t=n.$implicit,i=n.index,s=u();l("color",s.colorTxt),I("href",t==null?null:t.url,C),o(),b("",t==null?null:t.title," "),o(),c("ngIf",i+1!=s.rutas.length)}}function j(e,r){if(e&1&&(p(0,"a"),f(1),a()),e&2){let n=u().$implicit,t=u();l("color",t.colorTxt),o(),b("",n==null?null:n.title," ")}}function L(e,r){if(e&1&&(p(0,"div"),m(1,E,3,5,"a",4)(2,j,2,3,"a",5),a()),e&2){let n=r.$implicit;o(),c("ngIf",(n==null?null:n.url)!=""),o(),c("ngIf",(n==null?null:n.url)=="")}}var Q=(()=>{let r=class r{constructor(t,i){this.router=t,this.pageService=i,this.cssClass="",this.colorTxt="black",this.crumbTitle="",this.breadcrumbs=[],this.spliceRoutes=[],this.paths=[],this.ngOnInitFirstCalled=!1,this.configService=_(O),this.rutas=[],this.suscribeListenRouter=this.router.events.subscribe(s=>{s instanceof w&&this.ngOnInitFirstCalled&&(this.ngOnInit(),this.mappingRoutes())})}ngOnInit(){this.init()}ngOnDestroy(){this.suscribeListenRouter.unsubscribe()}init(){return d(this,null,function*(){let t=[()=>this.getBreadCrumb()];for(let i of t)yield i()})}getBreadCrumb(){return d(this,null,function*(){this.configService.isBrowser()&&(this.rutas=yield this.pageService.getBreadCrumb(window.location.href))})}mappingRoutes(){let t="";this.breadcrumbs=this.paths.map(i=>{t+=`${i}/`;let s=new h;return s.title=this.capitalizeFirstLetter(i),s.link=t,s})}deletePathsInRoute(){if(this.spliceRoutes.length>0){let[t,i]=this.spliceRoutes;this.paths.splice(t,i)}return this.paths}clearPaths(){return this.paths.map(t=>t.replace(/-/ig," "))}capitalizeFirstLetter(t){return t?t.charAt(0).toUpperCase()+t.slice(1):"Oikos Constructora"}};r.\u0275fac=function(i){return new(i||r)(g(F),g(k))},r.\u0275cmp=x({type:r,selectors:[["app-breadcrumb"]],inputs:{cssClass:"cssClass",colorTxt:"colorTxt",crumbTitle:"crumbTitle",breadcrumbs:"breadcrumbs",spliceRoutes:"spliceRoutes"},standalone:!0,features:[y],decls:5,vars:5,consts:[[1,"miga"],["href","https://www.oikos.com.co/constructora/"],[1,"fas","fa-chevron-right"],[4,"ngFor","ngForOf"],[3,"href","color",4,"ngIf"],[3,"color",4,"ngIf"],[3,"href"],["class","fas fa-chevron-right",4,"ngIf"]],template:function(i,s){i&1&&(p(0,"div",0)(1,"a",1),f(2,"Home "),v(3,"span",2),a(),m(4,L,3,2,"div",3),a()),i&2&&(l("color",s.colorTxt),o(),l("color",s.colorTxt),o(3),c("ngForOf",s.rutas))},dependencies:[S,T,R,B],encapsulation:2});let e=r;return e})();export{h as a,Q as b};

import{a as H}from"./chunk-E6AFMTFW.js";import"./chunk-C5PPJS33.js";import{b as d}from"./chunk-SXUUXRTP.js";import{a as D}from"./chunk-VHFAMSYY.js";import{a as l}from"./chunk-2M4BUVJI.js";import{Bb as P,C as b,Cb as F,D as m,Eb as f,Gb as y,Hb as N,Ka as M,Ma as k,Qa as R,R as I,V as u,W as s,c as a,ia as h,mb as w,sa as g,ta as v,tb as x,ua as S,w as j,x as c,z as p}from"./chunk-3MCO4G7G.js";var T=(()=>{let t=class t{constructor(o,e,r){this.pageService=o,this.router=e,this.seoService=r}canActivate(o,e){return a(this,null,function*(){let r=o.params.slug,n=yield this.pageService.getSeoContentPage(r);return n?.friendly_url!=null?(this.pageService.currentPage=n,this.seoService.setUpMetaTags(n),!0):(this.router.navigateByUrl("404",{skipLocationChange:!0}),!1)})}};t.\u0275fac=function(e){return new(e||t)(p(l),p(f),p(D))},t.\u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var z=()=>[1,1],A=(()=>{let t=class t{constructor(o,e,r,n){this.pageService=o,this.router=e,this.configServ=r,this.activateRoute=n,this.data=[],this.imagenes=[],this.imagen_prin=[],this.slug=this.activateRoute.snapshot.paramMap.get("slug"),this.suscribeListenRouter=this.router.events.subscribe(E=>{E instanceof P&&(this.slug=this.activateRoute.snapshot.paramMap.get("slug"),this.configServ.goUpPage(),this.getData())})}ngOnInit(){this.init()}init(){return a(this,null,function*(){let o=[()=>this.getData()];for(let e of o)yield e()})}getData(){return a(this,null,function*(){this.data=yield this.pageService.getPageContent(this.slug)})}};t.\u0275fac=function(e){return new(e||t)(s(l),s(f),s(N),s(F))},t.\u0275cmp=b({type:t,selectors:[["app-legales"]],decls:7,vars:4,consts:[[1,"cuerpo"],[3,"spliceRoutes"],["bis_skin_checked","1",1,"cnt_central"],["bis_skin_checked","1",1,"contenidopol"],[1,"title"],["bis_skin_checked","1",1,"textopol",3,"innerHTML"]],template:function(e,r){e&1&&(g(0,"div",0),S(1,"app-breadcrumb",1),g(2,"div",2)(3,"div",3)(4,"h1",4),M(5),v(),S(6,"div",5),v()()()),e&2&&(u(),h("spliceRoutes",R(3,z)),u(4),k(" ",r.data.titulo_legales," "),u(),h("innerHTML",r.data.texto_legales,I))},dependencies:[d],encapsulation:2});let i=t;return i})();var O=[{path:"",component:H},{path:":slug",component:A,canActivate:[T]}],B=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m({type:t}),t.\u0275inj=c({imports:[y.forChild(O),y]});let i=t;return i})();var st=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m({type:t}),t.\u0275inj=c({imports:[w,B,x,d]});let i=t;return i})();export{st as LegalesModule};

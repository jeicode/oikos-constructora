import './polyfills.server.mjs';
import{b as f}from"./chunk-LJLQXH5Y.mjs";import{a as P}from"./chunk-VTZAZGTN.mjs";import{a as I}from"./chunk-XFQKBCHA.mjs";import{a as M}from"./chunk-PTQY4S64.mjs";import{Ea as S,X as C,Ya as z,g as y,p as N,qa as k}from"./chunk-Q5TJCI5I.mjs";import{Ab as l,Bb as d,Gb as b,Jb as p,Ma as E,Na as s,Rb as _,Sa as c,T as h,Ta as a,Tb as R,U as v,aa as w,ib as x,pb as u,zb as r}from"./chunk-ES2QDY3L.mjs";import{h as g}from"./chunk-VVCT4QZE.mjs";function q(e,t){if(e&1&&(r(0,"a",7),d(1,"img",8)(2,"div",9),l()),e&2){let o=t.$implicit,n=b();p("href",o==null?null:o.enlace_seccion_pagos,s),c(),p("src",n.imagenes+(o==null?null:o.imagen),s),p("src",n.imagenes+(o==null?null:o.imagen),s),c(),u("innerHTML",o==null?null:o.texto_seccion_pagos,E)}}var U=(()=>{let t=class t{constructor(n,i,m,O){this.pageService=n,this.router=i,this.configServ=m,this.activateRoute=O,this.data=[],this.imagenes="",this.imagenes=M.imagenes_url,this.slug=this.activateRoute.snapshot.paramMap.get("slug"),this.suscribeListenRouter=this.router.events.subscribe(j=>{j instanceof C&&this.configServ.goUpPage()})}ngOnInit(){this.init()}init(){return g(this,null,function*(){let n=[()=>this.getSecciones()];for(let i of n)yield i()})}getSecciones(){return g(this,null,function*(){this.data=yield this.pageService.getElementsContent("titulo seccion pagos","pagos","",this.slug)})}};t.\u0275fac=function(i){return new(i||t)(a(P),a(S),a(I),a(k))},t.\u0275cmp=h({type:t,selectors:[["app-interna-pagos"]],decls:9,vars:1,consts:[[1,"cuerpo"],["bis_skin_checked","1",1,"cnt_central"],["bis_skin_checked","1",1,"contenidopol"],[1,"title"],[1,"cont_central"],[1,"cont_lista_logos"],["target","_blank","rel","noopener, nofollow","class","logo_list_pago",3,"href",4,"ngFor","ngForOf"],["target","_blank","rel","noopener, nofollow",1,"logo_list_pago",3,"href"],["title","","alt","",1,"lazyloaded",3,"src"],[1,"cont_txt_logos_pago",3,"innerHTML"]],template:function(i,m){i&1&&(r(0,"div",0),d(1,"app-breadcrumb"),r(2,"div",1)(3,"div",2)(4,"h1",3),_(5," Pagos Constructora "),l(),r(6,"section",4)(7,"div",5),x(8,q,3,4,"a",6),l()()()()()),i&2&&(c(8),u("ngForOf",m.data))},dependencies:[y,f],styles:[".cont_central[_ngcontent-%COMP%]{width:100%;display:inline-block;max-width:1300px}.cont_lista_logos[_ngcontent-%COMP%]{display:flex;display:-webkit-flex;flex-wrap:wrap;-webkit-flex-wrap:wrap;justify-content:center}.logo_list_pago[_ngcontent-%COMP%]{width:22%;position:relative;border:1px solid #ccc;display:flex;display:-webkit-flex;justify-content:center;-webkit-justify-content:center;align-items:center;-webkit-align-items:center;align-content:center;-webkit-align-content:center;margin:10px 1%;overflow:hidden;border-radius:10px;transition:all .3s;flex-wrap:wrap;-webkit-flex-wrap:wrap}.logo_list_pago[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70%}.cont_txt_logos_pago[_ngcontent-%COMP%]{font-size:16px;font-weight:700;width:100%;color:gray;background:#fafafa;padding:5px 2.5%;box-sizing:border-box}"]});let e=t;return e})();function G(e,t){if(e&1&&(r(0,"a",7),d(1,"img",8),r(2,"div",9),_(3),l()()),e&2){let o=t.$implicit,n=b();p("href",o==null?null:o.enlace_seccion_categoria_pagos,s),c(),p("src",n.imagenes+(o==null?null:o.imagen),s),p("src",n.imagenes+(o==null?null:o.imagen),s),c(2),R(" ",o==null?null:o.direccion_seccion_categoria_pagos," ")}}var T=(()=>{let t=class t{constructor(n,i,m,O){this.pageService=n,this.router=i,this.configServ=m,this.activateRoute=O,this.data=[],this.imagenes="",this.imagenes=M.imagenes_url,this.suscribeListenRouter=this.router.events.subscribe(j=>{j instanceof C&&this.configServ.goUpPage()})}ngOnInit(){this.init()}init(){return g(this,null,function*(){let n=[()=>this.getSecciones()];for(let i of n)yield i()})}getSecciones(){return g(this,null,function*(){this.data=yield this.pageService.getElementsContent("titulo seccion categoria pagos","categorias_pagos")})}};t.\u0275fac=function(i){return new(i||t)(a(P),a(S),a(I),a(k))},t.\u0275cmp=h({type:t,selectors:[["app-pagos"]],decls:9,vars:1,consts:[[1,"cuerpo"],["bis_skin_checked","1",1,"cnt_central"],["bis_skin_checked","1",1,"contenidopol"],[1,"title"],[1,"cont_central"],[1,"cont_lista_logos"],["target","_blank","rel","noopener, nofollow","class","logo_list_pago",3,"href",4,"ngFor","ngForOf"],["target","_blank","rel","noopener, nofollow",1,"logo_list_pago",3,"href"],["title","","alt","",1,"lazyloaded",3,"src"],[1,"cont_txt_logos_pago"]],template:function(i,m){i&1&&(r(0,"div",0),d(1,"app-breadcrumb"),r(2,"div",1)(3,"div",2)(4,"h1",3),_(5," Pagos Constructora "),l(),r(6,"section",4)(7,"div",5),x(8,G,4,4,"a",6),l()()()()()),i&2&&(c(8),u("ngForOf",m.data))},dependencies:[y,f],styles:[".cont_central[_ngcontent-%COMP%]{width:100%;display:inline-block;max-width:1300px}.cont_lista_logos[_ngcontent-%COMP%]{display:flex;display:-webkit-flex;flex-wrap:wrap;-webkit-flex-wrap:wrap;justify-content:center}.logo_list_pago[_ngcontent-%COMP%]{width:22%;position:relative;border:1px solid #ccc;display:flex;display:-webkit-flex;justify-content:center;-webkit-justify-content:center;align-items:center;-webkit-align-items:center;align-content:center;-webkit-align-content:center;margin:10px 1%;overflow:hidden;border-radius:10px;transition:all .3s;flex-wrap:wrap;-webkit-flex-wrap:wrap}.logo_list_pago[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70%}.cont_txt_logos_pago[_ngcontent-%COMP%]{font-size:16px;font-weight:700;width:100%;color:gray;background:#fafafa;padding:5px 2.5%;box-sizing:border-box}[_nghost-%COMP%]     .contenidopol .title{font-size:30px}"]});let e=t;return e})();var J=[{path:"",component:T},{path:":slug",component:U}],D=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=v({type:t}),t.\u0275inj=w({imports:[z.forChild(J),z]});let e=t;return e})();var gt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=v({type:t}),t.\u0275inj=w({imports:[N,D,f]});let e=t;return e})();export{gt as PagosModule};

import{e as j,f as x}from"./chunk-V2HR63II.js";import{Ab as g,Dc as v,Ha as _,Ma as r,Na as m,Nb as C,V as d,ab as u,c as l,fb as h,gb as c,qb as a,rb as s,sb as p,tc as P,uc as y,xb as f}from"./chunk-E5IYGAUJ.js";function O(o,t){if(o&1&&(a(0,"a",4),p(1,"img",5),s()),o&2){let i=t.$implicit,e=t.index,n=f();c("ngClass",e==0?"active":""),h("data-proyecto",e+1),r(),g("src",n.IMG_URL+(i==null?null:i.logo_proyecto),_),g("alt",i==null?null:i.alt_logo)}}var A=(()=>{let t=class t{constructor(e){this.projService=e,this.ejecutados=[],this.IMG_URL=x.imagenes_url}ngOnInit(){this.getEjecutados()}getEjecutados(){return l(this,null,function*(){this.ejecutados=yield this.projService.getProyectosByTipo("4","NA","NA","NA","","","descripcion_precio DESC"),this.initSlide()})}initSlide(){$(window).width()>=960?$(function(){let e=$("div.holder").jPages({previous:"\u2190 Anterior",next:"Siguiente \u2192",perPage:7,startRange:0,midRange:0,endRange:0,containerID:"itemContainer",animation:"bounceInUp"}).pages;e&&e.hasOwnProperty("showing")&&(e.showing=!1),$("select").change(function(){var n=$($("select")).val();$("div.holder").jPages("destroy").jPages({containerID:"itemContainer",animation:n})})}):$(window).width()>=480?$(function(){$("div.holder").jPages({previous:"\u2190 Anterior",next:"Siguiente \u2192",perPage:4,startRange:0,midRange:0,endRange:0,containerID:"itemContainer",animation:"bounceInUp"}),$("select").change(function(){var e=$("select").val();$("div.holder").jPages("destroy").jPages({containerID:"itemContainer",animation:e})})}):$(function(){$("div.holder").jPages({previous:"\u2190 Anterior",next:"Siguiente \u2192",perPage:3,startRange:0,midRange:0,endRange:0,containerID:"itemContainer",animation:"bounceInUp"}),$("select").change(function(){var e=$("select").val();$("div.holder").jPages("destroy").jPages({containerID:"itemContainer",animation:e})})})}};t.\u0275fac=function(n){return new(n||t)(m(j))},t.\u0275cmp=d({type:t,selectors:[["app-executed-projects-slide-pag"]],standalone:!0,features:[C],decls:4,vars:1,consts:[[1,"tabs_proyectos_eject"],[1,"holder"],["id","itemContainer",1,"cont_proyecto_logo"],["class","animate__animated animate__fadeIn tab_logo_eject",3,"ngClass",4,"ngFor","ngForOf"],[1,"animate__animated","animate__fadeIn","tab_logo_eject",3,"ngClass"],["width","76","height","65",3,"src","alt"]],template:function(n,M){n&1&&(a(0,"div",0),p(1,"div",1),a(2,"div",2),u(3,O,2,4,"a",3),s()()),n&2&&(r(3),c("ngForOf",M.ejecutados))},dependencies:[v,P,y],styles:['.tabs_proyectos_eject[_ngcontent-%COMP%]{margin:0 0 40px}.holder[_ngcontent-%COMP%]{width:100%;max-width:750px;margin:0 auto;display:flex;justify-content:space-between;padding:20px 0}[_nghost-%COMP%]     .holder a:not(.jp-previous, .jp-next)[_ngcontent-%COMP%], [_nghost-%COMP%]     .holder span{display:none}[_nghost-%COMP%]     .holder .jp-previous, [_nghost-%COMP%]     .holder .jp-next{color:#182360!important;font-weight:700;font-size:15px;cursor:pointer}[_nghost-%COMP%]     .holder .jp-previous.jp-disabled, [_nghost-%COMP%]     .holder .jp-next.jp-disabled{opacity:.5}.cont_proyecto_logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:1px solid #E4E4E4;max-width:100px;cursor:pointer;position:relative;z-index:1;transition:.4s ease;border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:0;width:70px;height:60px;border-radius:100%;margin:auto;z-index:-1;background:#333663;opacity:0;filter:blur(26px);transition:.4s ease}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.2) translateY(0);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{opacity:.58;bottom:-20px}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{transform:scale(1.05) translateY(-15px);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before{opacity:.58;bottom:-10px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}']});let o=t;return o})();export{A as a};

"use strict";(self.webpackChunkoikos_constructora=self.webpackChunkoikos_constructora||[]).push([[592],{1657:(P,g,i)=>{i.d(g,{a:()=>l});class l{constructor(p="",n=""){this.title=p,this.link=n}}},1299:(P,g,i)=>{i.d(g,{L:()=>d});var l=i(5861),a=i(6895),p=i(5906),n=i(1657),t=i(8256),c=i(5480);function f(s,h){1&s&&t._UZ(0,"span",2)}function _(s,h){if(1&s&&(t.TgZ(0,"a",6),t._uU(1),t.YNc(2,f,1,0,"span",7),t.qZA()),2&s){const e=t.oxw(),r=e.$implicit,u=e.index,C=t.oxw();t.Udp("color",C.colorTxt),t.s9C("href",null==r?null:r.url,t.LSH),t.xp6(1),t.hij("",null==r?null:r.title," "),t.xp6(1),t.Q6J("ngIf",u+1!=C.rutas.length)}}function m(s,h){if(1&s&&(t.TgZ(0,"a"),t._uU(1),t.qZA()),2&s){const e=t.oxw().$implicit,r=t.oxw();t.Udp("color",r.colorTxt),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function o(s,h){if(1&s&&(t.TgZ(0,"div"),t.YNc(1,_,3,5,"a",4),t.YNc(2,m,2,3,"a",5),t.qZA()),2&s){const e=h.$implicit;t.xp6(1),t.Q6J("ngIf",""!=(null==e?null:e.url)),t.xp6(1),t.Q6J("ngIf",""==(null==e?null:e.url))}}let d=(()=>{class s{constructor(e,r){this.router=e,this.pageService=r,this.cssClass="",this.colorTxt="black",this.crumbTitle="",this.breadcrumbs=[],this.spliceRoutes=[],this.paths=[],this.ngOnInitFirstCalled=!1,this.rutas=[],this.suscribeListenRouter=this.router.events.subscribe(u=>{u instanceof p.m2&&this.ngOnInitFirstCalled&&(this.ngOnInit(),this.mappingRoutes())})}ngOnInit(){this.init()}init(){var e=this;return(0,l.Z)(function*(){const r=[()=>e.getBreadCrumb()];for(const u of r)yield u()})()}getBreadCrumb(){var e=this;return(0,l.Z)(function*(){e.rutas=yield e.pageService.getBreadCrumb(window.location.href)})()}mappingRoutes(){let e="";this.breadcrumbs=this.paths.map(r=>{e+=`${r}/`;const u=new n.a;return u.title=this.capitalizeFirstLetter(r),u.link=e,u})}deletePathsInRoute(){if(this.spliceRoutes.length>0){const[e,r]=this.spliceRoutes;this.paths.splice(e,r)}return this.paths}clearPaths(){return this.paths.map(e=>e.replace(/-/gi," "))}capitalizeFirstLetter(e){return e?e.charAt(0).toUpperCase()+e.slice(1):"Oikos Constructora"}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(p.F0),t.Y36(c.P))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-breadcrumb"]],inputs:{cssClass:"cssClass",colorTxt:"colorTxt",crumbTitle:"crumbTitle",breadcrumbs:"breadcrumbs",spliceRoutes:"spliceRoutes"},standalone:!0,features:[t.jDz],decls:5,vars:5,consts:[[1,"miga"],["href","https://www.oikos.com.co/constructora/"],[1,"fas","fa-chevron-right"],[4,"ngFor","ngForOf"],[3,"href","color",4,"ngIf"],[3,"color",4,"ngIf"],[3,"href"],["class","fas fa-chevron-right",4,"ngIf"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"a",1),t._uU(2,"Home "),t._UZ(3,"span",2),t.qZA(),t.YNc(4,o,3,2,"div",3),t.qZA()),2&e&&(t.Udp("color",r.colorTxt),t.xp6(1),t.Udp("color",r.colorTxt),t.xp6(3),t.Q6J("ngForOf",r.rutas))},dependencies:[a.ez,a.sg,a.O5,p.Bz],encapsulation:2}),s})()},9341:(P,g,i)=>{i.d(g,{m:()=>f});var l=i(5861),a=i(6895),p=i(9019),n=i(8256),t=i(221);function c(_,m){if(1&_&&(n.TgZ(0,"a",4),n._UZ(1,"img",5),n.qZA()),2&_){const o=m.$implicit,d=m.index,s=n.oxw();n.Q6J("ngClass",0==d?"active":""),n.uIk("data-proyecto",d+1),n.xp6(1),n.s9C("src",s.IMG_URL+(null==o?null:o.logo_proyecto),n.LSH),n.s9C("alt",null==o?null:o.alt_logo)}}let f=(()=>{class _{constructor(o){this.projService=o,this.ejecutados=[],this.IMG_URL=p.N.imagenes_url}ngOnInit(){this.getEjecutados()}getEjecutados(){var o=this;return(0,l.Z)(function*(){o.ejecutados=yield o.projService.getProyectosByTipo("4","NA","NA","NA","","","descripcion_precio DESC"),o.initSlide()})()}initSlide(){$(window).width()>=960?$(function(){const o=$("div.holder").jPages({previous:"\u2190 Anterior",next:"Siguiente \u2192",perPage:7,startRange:0,midRange:0,endRange:0,containerID:"itemContainer",animation:"bounceInUp"}).pages;o&&o.hasOwnProperty("showing")&&(o.showing=!1),$("select").change(function(){var d=$($("select")).val();$("div.holder").jPages("destroy").jPages({containerID:"itemContainer",animation:d})})}):$(window).width()>=480?$(function(){$("div.holder").jPages({previous:"\u2190 Anterior",next:"Siguiente \u2192",perPage:4,startRange:0,midRange:0,endRange:0,containerID:"itemContainer",animation:"bounceInUp"}),$("select").change(function(){var o=$("select").val();$("div.holder").jPages("destroy").jPages({containerID:"itemContainer",animation:o})})}):$(function(){$("div.holder").jPages({previous:"\u2190 Anterior",next:"Siguiente \u2192",perPage:3,startRange:0,midRange:0,endRange:0,containerID:"itemContainer",animation:"bounceInUp"}),$("select").change(function(){var o=$("select").val();$("div.holder").jPages("destroy").jPages({containerID:"itemContainer",animation:o})})})}}return _.\u0275fac=function(o){return new(o||_)(n.Y36(t.Y))},_.\u0275cmp=n.Xpm({type:_,selectors:[["app-executed-projects-slide-pag"]],standalone:!0,features:[n.jDz],decls:4,vars:1,consts:[[1,"tabs_proyectos_eject"],[1,"holder"],["id","itemContainer",1,"cont_proyecto_logo"],["class","animate__animated animate__fadeIn tab_logo_eject",3,"ngClass",4,"ngFor","ngForOf"],[1,"animate__animated","animate__fadeIn","tab_logo_eject",3,"ngClass"],["width","76","height","65",3,"src","alt"]],template:function(o,d){1&o&&(n.TgZ(0,"div",0),n._UZ(1,"div",1),n.TgZ(2,"div",2),n.YNc(3,c,2,4,"a",3),n.qZA()()),2&o&&(n.xp6(3),n.Q6J("ngForOf",d.ejecutados))},dependencies:[a.ez,a.mk,a.sg],styles:['.tabs_proyectos_eject[_ngcontent-%COMP%]{margin:0 0 40px}.holder[_ngcontent-%COMP%]{width:100%;max-width:750px;margin:0 auto;display:flex;justify-content:space-between;padding:20px 0}[_nghost-%COMP%]     .holder a:not(.jp-previous, .jp-next)[_ngcontent-%COMP%], [_nghost-%COMP%]     .holder span{display:none}[_nghost-%COMP%]     .holder .jp-previous, [_nghost-%COMP%]     .holder .jp-next{color:#182360!important;font-weight:700;font-size:15px;cursor:pointer}[_nghost-%COMP%]     .holder .jp-previous.jp-disabled, [_nghost-%COMP%]     .holder .jp-next.jp-disabled{opacity:.5}.cont_proyecto_logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:1px solid #E4E4E4;max-width:100px;cursor:pointer;position:relative;z-index:1;transition:.4s ease;border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:0;width:70px;height:60px;border-radius:100%;margin:auto;z-index:-1;background:#333663;opacity:0;filter:blur(26px);transition:.4s ease}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.2) translateY(0);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{opacity:.58;bottom:-20px}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{transform:scale(1.05) translateY(-15px);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before{opacity:.58;bottom:-10px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}']}),_})()},1001:(P,g,i)=>{i.d(g,{y:()=>p});var l=i(8256),a=i(1481);let p=(()=>{class n{constructor(c){this._sanitizer=c}transform(c="",f){return"html"==f?this._sanitizer.bypassSecurityTrustHtml(c):this._sanitizer.bypassSecurityTrustResourceUrl(c)}}return n.\u0275fac=function(c){return new(c||n)(l.Y36(a.H7,16))},n.\u0275pipe=l.Yjl({name:"safe",type:n,pure:!0,standalone:!0}),n})()}}]);
import './polyfills.server.mjs';
import{a as L}from"./chunk-WVZZTQUD.mjs";import{b as N}from"./chunk-LJLQXH5Y.mjs";import{a as F}from"./chunk-YOL3IJDA.mjs";import{a as pt}from"./chunk-YDJHGMB3.mjs";import"./chunk-7ZFGUSPL.mjs";import{a as dt}from"./chunk-CKLS6JK2.mjs";import{a as at}from"./chunk-YTF4D2JK.mjs";import{a as T}from"./chunk-VTZAZGTN.mjs";import{a as ct}from"./chunk-XFQKBCHA.mjs";import{a as _t}from"./chunk-IRX2KLR6.mjs";import{a as V}from"./chunk-2YUM3OEL.mjs";import"./chunk-6BNKN5NM.mjs";import{a as lt,b as st}from"./chunk-PXOTGSUP.mjs";import{a as rt}from"./chunk-PTQY4S64.mjs";import{Ea as z,Fa as ot,X as it,Ya as R,f as K,g as Q,h as tt,l as et,p as nt}from"./chunk-Q5TJCI5I.mjs";import{$ as W,$b as G,Ab as i,Bb as d,Eb as k,Fb as h,Gb as _,Jb as g,Kb as D,Ma as I,Na as x,Qb as b,Rb as a,Sa as o,Sb as v,T as J,Ta as y,Tb as f,U as j,Ub as U,X as M,Xb as Z,Y as O,Yb as H,Zb as q,aa as S,bc as B,f as A,ib as m,la as E,ob as X,pb as p,zb as r}from"./chunk-ES2QDY3L.mjs";import{h as u}from"./chunk-VVCT4QZE.mjs";var gt=(()=>{let n=class n{constructor(c,s,l){this.pageService=c,this.router=s,this.seoService=l}canActivate(c,s){return u(this,null,function*(){let l=yield this.pageService.getSeoContentPage("proyectos-construccion-vivienda");return l?.friendly_url!=null?(this.pageService.currentPage=l,this.seoService.setUpMetaTags(l),!0):!1})}};n.\u0275fac=function(s){return new(s||n)(E(T),E(z),E(at))},n.\u0275prov=W({token:n,factory:n.\u0275fac,providedIn:"root"});let e=n;return e})();function Ct(e,n){if(e&1&&(r(0,"option",32),a(1),i()),e&2){let t=n.$implicit;g("value",t==null?null:t.id),o(),v(t==null?null:t.field_content)}}function Pt(e,n){if(e&1&&(r(0,"option",32),a(1),i()),e&2){let t=n.$implicit;g("value",t==null?null:t.id),o(),v(t==null?null:t.field_content)}}function yt(e,n){if(e&1&&(r(0,"option",32),a(1),i()),e&2){let t=n.$implicit;g("value",t==null?null:t.rango),o(),v(t==null?null:t.mostrar)}}function Mt(e,n){if(e&1&&(r(0,"a",48),d(1,"img",49),i()),e&2){let t=_(2).$implicit;g("href",t==null?null:t.vista360,x)}}function Ot(e,n){if(e&1&&(r(0,"a",48),d(1,"span",50),i()),e&2){let t=_(2).$implicit;g("href",t==null?null:t.url_waze,x)}}function bt(e,n){if(e&1&&(r(0,"div",46),m(1,Mt,2,1,"a",47)(2,Ot,2,1,"a",47),i()),e&2){let t=_().$implicit;o(),p("ngIf",(t==null?null:t.vista360)!=""&&(t==null?null:t.vista360)!=null),o(),p("ngIf",(t==null?null:t.url_waze)!=""&&(t==null?null:t.url_waze)!=null)}}function wt(e,n){if(e&1&&(r(0,"a",51),d(1,"img",52),i()),e&2){let t=_().$implicit,c=_();D("routerLink","/proyecto/",t==null?null:t.url_amigable,""),o(),p("src",c.imagenes_url+(t==null?null:t.imagen_principal_proyecto),x)("alt",t==null?null:t.alt_principal)("title",t==null?null:t.title_principal)}}function jt(e,n){if(e&1&&d(0,"img",52),e&2){let t=_().$implicit,c=_();p("src",c.imagenes_url+(t==null?null:t.imagen_principal_proyecto),x)("alt",t==null?null:t.alt_principal)("title",t==null?null:t.title_principal)}}function St(e,n){if(e&1&&(r(0,"h4")(1,"span"),a(2," Desde"),i(),a(3),i()),e&2){let t=_().$implicit;o(3),f(" $",t==null?null:t.valor_proyecto_formato," ")}}function Et(e,n){if(e&1&&(r(0,"div",53),a(1," Precio de referencia "),r(2,"b"),a(3),q(4,"thousandNumber"),i()()),e&2){let t=_().$implicit;o(3),f("USD ",G(4,1,t==null?null:t.dollar_value,"es"),"")}}function It(e,n){if(e&1){let t=k();r(0,"div",54)(1,"a",55),h("click",function(){M(t);let s=_().$implicit,l=_();return O(l.selectProjectToModal(s))}),d(2,"span",56),a(3," Contactar "),i(),r(4,"a",57),a(5," Ver proyecto "),i()()}if(e&2){let t=_().$implicit;o(4),D("routerLink","/proyecto/",t==null?null:t.url_amigable,"")}}var kt=()=>({"grid-template-columns":"2fr 1fr"});function zt(e,n){if(e&1){let t=k();r(0,"div",58)(1,"a",59),h("click",function(){M(t);let s=_().$implicit,l=_();return O(l.selectProjectToPreLaunch(s))}),a(2," Inscribirse "),i()()}e&2&&p("ngStyle",Z(1,kt))}var ut=e=>({"background-color":e});function Tt(e,n){if(e&1&&(r(0,"div",33)(1,"picture")(2,"span",34),a(3),i(),m(4,bt,3,2,"div",35)(5,wt,2,4,"a",36)(6,jt,1,3,"ng-template",null,37,B),i(),r(8,"h2",38)(9,"picture"),d(10,"img",39),i(),r(11,"div"),a(12),i()(),r(13,"div",40)(14,"h3"),a(15),i(),m(16,St,4,1,"h4",41)(17,Et,5,4,"div",42),i(),r(18,"div",43)(19,"span"),a(20),i()(),m(21,It,6,1,"div",44)(22,zt,3,2,"ng-template",null,45,B),i()),e&2){let t=n.$implicit,c=b(7),s=b(23),l=_();o(2),p("ngStyle",H(17,ut,t==null?null:t.color_secundario)),o(),v(t==null?null:t.estado_proyecto),o(),p("ngIf",(t==null?null:t.vista360)||(t==null?null:t.url_waze)),o(),p("ngIf",(t==null?null:t.interna)==="si")("ngIfElse",c),o(3),p("ngStyle",H(19,ut,t==null?null:t.color_primario)),o(2),g("src",l.imagenes_url+(t==null?null:t.logo_proyecto),x),g("alt",t==null?null:t.alt_logo),g("title",t==null?null:t.title_logo),o(2),v(t==null?null:t.titulo_proyecto),o(3),U("",t==null?null:t.zona_proyecto," / ",t==null?null:t.ubicacion_proyecto,""),o(),p("ngIf",t==null?null:t.valor_proyecto_formato),o(),p("ngIf",t==null?null:t.dollar_value),o(3),f(" ",t==null?null:t.texto_adicional," "),o(),p("ngIf",(t==null?null:t.interna)==="si")("ngIfElse",s)}}function Vt(e,n){e&1&&(r(0,"p",60),a(1,"No existe informaci\xF3n relacionado con el filtro utilizado"),i())}function Ft(e,n){if(e&1&&(r(0,"div",68)(1,"div",69)(2,"div",70)(3,"h5"),a(4),i(),d(5,"h2",71),r(6,"a",72),a(7),i()(),r(8,"div",73),d(9,"img",74),i()()()),e&2){let t=n.$implicit,c=_(2);o(4),v(t==null?null:t.field_content),o(),p("innerHTML",t==null?null:t.subtitulo_banner_vivienda,I),o(),g("href",t==null?null:t.enlace_cta_banner_vivienda,x),o(),v(t==null?null:t.texto_cta_banner_vivienda),o(2),g("src",c.imagenes_url+(t==null?null:t.imagen),x),g("alt",t==null?null:t.imagen_alt),g("title",t==null?null:t.imagen_title)}}function Nt(e,n){if(e&1&&(r(0,"section",61)(1,"div",62)(2,"div",63),m(3,Ft,10,7,"div",64),i(),d(4,"div",65)(5,"div",66)(6,"div",67),i()()),e&2){let t=_();o(3),p("ngForOf",t.banners)}}function $t(e,n){if(e&1&&(r(0,"div")(1,"b"),a(2," Direcci\xF3n:"),i(),a(3),i()),e&2){let t=_().$implicit;o(3),f(" ",t==null?null:t.direccion_proyecto,"")}}function Lt(e,n){if(e&1&&(r(0,"div")(1,"b"),a(2," Ciudad:"),i(),a(3),i()),e&2){let t=_().$implicit;o(3),f(" ",t==null?null:t.ubicacion_proyecto,"")}}function At(e,n){if(e&1&&(r(0,"div")(1,"b"),a(2," Zona:"),i(),a(3),i()),e&2){let t=_().$implicit;o(3),f(" ",t==null?null:t.zona_proyecto,"")}}function Dt(e,n){if(e&1&&(r(0,"div")(1,"b"),a(2," Tel\xE9fono:"),i(),a(3),i()),e&2){let t=_().$implicit;o(3),f(" ",t==null?null:t.telefono_salaventas,"")}}function Ut(e,n){if(e&1&&(r(0,"div")(1,"b"),a(2," Celular:"),i(),a(3),i()),e&2){let t=_().$implicit;o(3),f(" ",t==null?null:t.celular_salaventas,"")}}function Ht(e,n){if(e&1&&(r(0,"div")(1,"b"),a(2," Email:"),i(),a(3),i()),e&2){let t=_().$implicit;o(3),f(" ",t==null?null:t.email,"")}}function Bt(e,n){if(e&1&&(r(0,"div",75)(1,"div",76)(2,"div",77)(3,"h2"),a(4),i()(),r(5,"div",78),a(6),i(),r(7,"div",79),m(8,$t,4,1,"div",41)(9,Lt,4,1,"div",41)(10,At,4,1,"div",41)(11,Dt,4,1,"div",41)(12,Ut,4,1,"div",41)(13,Ht,4,1,"div",41),i()(),r(14,"div",80)(15,"div",81)(16,"div",63)(17,"div",68),d(18,"img",82),i()(),d(19,"div",67),i()()()),e&2){let t=n.$implicit,c=n.index,s=_();p("ngClass",c==0?"active":""),X("data-proyecto",c+1),o(4),v(t==null?null:t.titulo_proyecto),o(2),U(" ",t==null?null:t.zona_proyecto," / ",t==null?null:t.ubicacion_proyecto," "),o(2),p("ngIf",(t==null?null:t.direccion_proyecto)!=""),o(),p("ngIf",(t==null?null:t.ubicacion_proyecto)!=""),o(),p("ngIf",(t==null?null:t.zona_proyecto)!=""),o(),p("ngIf",(t==null?null:t.telefono_salaventas)!=""),o(),p("ngIf",(t==null?null:t.celular_salaventas)!=""),o(),p("ngIf",(t==null?null:t.email)!=""),o(5),g("src",s.imagenes_url+(t==null?null:t.imagen_principal_proyecto),x),g("alt",t==null?null:t.alt_principal)}}var mt=(()=>{let n=class n{constructor(c,s,l,w,C,P){this.pageService=c,this.router=s,this.responsiveService=l,this.currencyConverter=w,this.configServ=C,this.projService=P,this.data=[],this.general=[],this.imagenes=[],this.ciudades=[],this.proyectos=[],this.typesProject=[],this.banners=[],this.ejecutados=[],this.precios=[],this.isSubmitted=!1,this.proyectos_ver=!0,this.captcha="",this.imagenes_url="",this.imagen_banner="",this.ciudad="NA",this.tipo_search="NA",this.precio_search="NA",this.projectSelectedToModal=new lt,this.modalLaunchProjectIsOpen=!1,this.notifyChanges=new A,this.notifyChangesPreLaunchProject=new A,this.imagenes_url=rt.imagenes_url,this.suscribeListenRouter=this.router.events.subscribe(xt=>{xt instanceof it&&(this.configServ.goUpPage(),this.pageService.closeNav())})}openModalPreLaunchProject(){this.modalLaunchProjectIsOpen=!0}toogleContainerSearch(){if(this.responsiveService.isMobile){let c=document.querySelector(".filtro_proyectos");$(c).slideToggle().css("display","flex")}}ngOnInit(){this.init(),this.pageService.closeNav()}init(){return u(this,null,function*(){let c=[()=>this.getData(),()=>this.getSecciones(),()=>this.getProyectos(),()=>this.convertCopToUsdProjects(),()=>this.getEjecutados(),()=>this.getPreciosProyectos()];for(let s of c)yield s()})}convertCopToUsdProjects(){return u(this,null,function*(){yield this.currencyConverter.convertCopToUsdProjects(this.proyectos)})}selectProjectToPreLaunch(c){this.projectSelectedToModal=c,this.notifyChangesPreLaunchProject.next({openModal:!0})}selectProjectToModal(c){this.projectSelectedToModal=c,this.notifyChanges.next({openModal:!0})}getData(){return u(this,null,function*(){this.data=yield this.pageService.getContentPage("proyectos-construccion-vivienda")})}getEjecutados(){return u(this,null,function*(){this.ejecutados=yield this.projService.getProyectosByTipo("4","NA","NA","NA","","","descripcion_precio DESC"),this.configServ.loadbannerEjecutados(1e3)})}getImagenes(){return u(this,null,function*(){this.imagenes=yield this.pageService.getImagesBySlugPage("proyectos-construccion-vivienda"),this.imagen_banner=this.imagenes_url+this.imagenes[0].field_content})}getSecciones(){return u(this,null,function*(){let c=yield this.projService.getCitiesByProjectType("1");c&&(this.ciudades=c);let s=yield this.projService.getHousingTypesByType("1");s&&(this.typesProject=s),this.banners=yield this.pageService.getElementsContent("titulo banner vivienda","banner_vivienda")})}getCiudad(c){this.ciudad=c}getTipo(c){this.tipo_search=c}getPrecio(c){this.precio_search=c}getProyectos(){return u(this,null,function*(){this.proyectos=yield this.projService.getProyectosByTipo("1"),this.proyectos?.length==0?this.proyectos_ver=!1:this.proyectos_ver=!0})}buscarProyectos(){return u(this,null,function*(){this.toogleContainerSearch(),this.proyectos=yield this.projService.getProyectosByTipo("1",this.ciudad,this.tipo_search,this.precio_search),this.proyectos.length==0?this.proyectos_ver=!1:this.proyectos_ver=!0})}limpiarFiltros(){return u(this,null,function*(){this.toogleContainerSearch(),this.getProyectos(),$(".filtroCiudad").val("NA"),$(".filtroTipo").val("NA"),$(".filtroPrecio").val("NA")})}getPreciosProyectos(){return u(this,null,function*(){this.precios=yield this.projService.getPreciosProyectos("1")})}};n.\u0275fac=function(s){return new(s||n)(y(T),y(z),y(dt),y(pt),y(ct),y(st))},n.\u0275cmp=J({type:n,selectors:[["app-vivienda"]],decls:50,vars:14,consts:[[1,""],[1,"s_proyecto_vivienda"],[1,"cnt_central"],[1,"c_proyecto_vivienda"],[1,"title_section","al_center",3,"innerHTML"],[1,"container_filtro"],[1,"act_filtro_mobile",3,"click"],[1,"btn_icon_search"],[1,"fas","fa-search"],[1,"filtro_proyectos"],[1,"filtroCiudad",3,"change"],["nomCiudad",""],["value","NA","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"filtroTipo",3,"change"],["nomTipo",""],[1,"precio","filtroPrecio",3,"change"],["nomPrecio",""],[1,"cont_filtr_btns"],["type","button",1,"btn_link_reset",3,"click"],[1,"fas","fa-times"],["type","button",1,"btn",3,"click"],[1,"s_cards_proyectos"],[1,"c_cards_proyectos"],["class","card_p",4,"ngFor","ngForOf"],["style","text-align:center;",4,"ngIf"],["class","s_futuros_proyectos",4,"ngIf"],[1,"s_proyectos_ejecutados"],[1,"c_proyectos_ejecutados"],[1,"title_section","al-center",3,"innerHTML"],["class","cont_proyecto_eject",3,"ngClass",4,"ngFor","ngForOf"],[3,"modalEvent","project"],[3,"value"],[1,"card_p"],[1,"tag_state",3,"ngStyle"],["class","btns_icons",4,"ngIf"],[3,"routerLink",4,"ngIf","ngIfElse"],["notRedirect",""],[1,"name_proyecto",3,"ngStyle"],["width","87","height","87",3,"src","alt","title"],[1,"datos_proyecto"],[4,"ngIf"],["class","precio_usd",4,"ngIf"],[1,"franja_p"],["class","ctas_proyectos",4,"ngIf","ngIfElse"],["redirect",""],[1,"btns_icons"],["target","_blank","rel","nofollow,noopener","class","btn_icon",3,"href",4,"ngIf"],["target","_blank","rel","nofollow,noopener",1,"btn_icon",3,"href"],["src","assets/images/diseno/proyectos_vivienda/icon_360.svg","width","20","height","20","alt",""],[1,"fas","fa-map-marker-alt"],[3,"routerLink"],["width","350","height","219","defaultImg","",3,"src","alt","title"],[1,"precio_usd"],[1,"ctas_proyectos"],[1,"btn_whatsapp","c-pointer",3,"click"],[1,"fab","fa-whatsapp"],[1,"btn",3,"routerLink"],[1,"ctas_proyectos",3,"ngStyle"],[1,"btn",3,"click"],[2,"text-align","center"],[1,"s_futuros_proyectos"],[1,"swiper","swiperFuturos"],[1,"swiper-wrapper"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"swiper-button-next"],[1,"swiper-button-prev"],[1,"swiper-pagination"],[1,"swiper-slide"],[1,"c_futuros_proyectos"],[1,"info_fp"],[3,"innerHTML"],[1,"btn","contacto_h",3,"href"],[1,"img_fp"],["width","1280","height","720",3,"src","alt","title"],[1,"cont_proyecto_eject",3,"ngClass"],[1,"info_pe"],[1,"title_pe"],[1,"lugar"],[1,"info_datos_pe"],[1,"c_slider_pe"],[1,"swiper","swiperPe"],["width","530","height","390",3,"src","alt"]],template:function(s,l){if(s&1){let w=k();r(0,"body",0)(1,"section",1)(2,"div",2)(3,"div",2),d(4,"app-breadcrumb"),i(),r(5,"div",3),d(6,"h1",4),r(7,"div",5)(8,"div",6),h("click",function(){return l.toogleContainerSearch()}),r(9,"h3"),a(10),i(),r(11,"a",7),d(12,"span",8),i()(),r(13,"form",9)(14,"select",10,11),h("change",function(){M(w);let P=b(15);return O(l.getCiudad(P.value))}),r(16,"option",12),a(17,"Ciudad"),i(),m(18,Ct,2,2,"option",13),i(),r(19,"select",14,15),h("change",function(){M(w);let P=b(20);return O(l.getTipo(P.value))}),r(21,"option",12),a(22,"Tipo de vivienda"),i(),m(23,Pt,2,2,"option",13),i(),r(24,"select",16,17),h("change",function(){M(w);let P=b(25);return O(l.getPrecio(P.value))}),r(26,"option",12),a(27,"Precio"),i(),m(28,yt,2,2,"option",13),i(),r(29,"div",18)(30,"button",19),h("click",function(){return l.limpiarFiltros()}),a(31,"Limpiar "),d(32,"span",20),i(),r(33,"button",21),h("click",function(){return l.buscarProyectos()}),a(34,"Buscar "),d(35,"span",8),i()()()()()()(),r(36,"section",22)(37,"div",2)(38,"div",23),m(39,Tt,24,21,"div",24)(40,Vt,2,0,"p",25),i()()(),m(41,Nt,7,1,"section",26),r(42,"section",27)(43,"div",2)(44,"div",28),d(45,"div",29)(46,"app-executed-projects-slide-pag"),m(47,Bt,20,13,"div",30),i()()(),d(48,"app-modal-pre-launch-project",31)(49,"app-wpp-modal-project",31),i()}s&2&&(o(6),p("innerHTML",l.data.titulo_proyecto_vivienda,I),o(4),f(" ",l.data.titulo_busqueda," "),o(8),p("ngForOf",l.ciudades),o(5),p("ngForOf",l.typesProject),o(5),p("ngForOf",l.precios),o(11),p("ngForOf",l.proyectos),o(),p("ngIf",!l.proyectos_ver),o(),p("ngIf",l.banners.length>0),o(4),p("innerHTML",l.data.subtitulo_proyectos_ejecutados,I),o(2),p("ngForOf",l.ejecutados),o(),p("modalEvent",l.notifyChangesPreLaunchProject.asObservable())("project",l.projectSelectedToModal),o(),p("modalEvent",l.notifyChanges.asObservable())("project",l.projectSelectedToModal))},dependencies:[K,Q,tt,et,ot,N,F,L,V,_t],styles:['.s_proyecto_vivienda[_ngcontent-%COMP%]{background:linear-gradient(180deg,#e9edf700,#e8ebf1 72.6%),#fff;min-height:340px;position:relative}.s_proyecto_vivienda[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:-2px;background:url("./media/curva_bg-OTFE4YJC.svg") no-repeat;background-size:cover;background-position:center top;z-index:1;width:100%;height:100%;max-height:145px;pointer-events:none}.c_proyecto_vivienda[_ngcontent-%COMP%]{position:relative}.c_proyecto_vivienda[_ngcontent-%COMP%]:before, .c_proyecto_vivienda[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;background:url("./media/puntos-NZD4PTXJ.svg") no-repeat center;width:20px;height:70px}.c_proyecto_vivienda[_ngcontent-%COMP%]:after{right:0;left:initial;top:initial;bottom:0;transform:rotate(180deg)}.filtro_proyectos[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;background:#fff;box-shadow:0 2px 20px -3px #33427740;border-radius:39px;padding:8px 20px;max-width:920px;margin:0 auto}.filtro_proyectos[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:none;border-radius:0;border:0;border-bottom:1px solid #DADADA;padding:5px;color:#666;font-size:14px;cursor:pointer}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:130px}.s_cards_proyectos[_ngcontent-%COMP%]{padding:0 0 40px;position:relative;z-index:1;transform:translateY(-80px)}.c_cards_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}.card_p[_ngcontent-%COMP%]{overflow:hidden;background:#fff;box-shadow:0 19px 41px -18px #23386273;border-radius:24px;display:inline-grid;max-width:400px}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;max-height:219px;width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover}.card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%]{text-align:center;position:absolute;left:10px;top:10px;border-radius:100px;padding:8px 20px;color:#fff;font-weight:600;font-size:14px;z-index:1}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:10px;right:10px;border-radius:6px;background:var(--color-grad_azul_osc);width:80px;height:40px;z-index:1;overflow:hidden}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{position:absolute;left:0;right:0;height:80%;width:1px;background-color:#a5a5a5;margin:auto;z-index:2}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;display:flex;justify-content:center;align-items:center;width:26px;height:26px;transition:.3s ease;width:100%;height:100%;position:relative}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{content:"";background-color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px;color:#fff;display:inline-flex;justify-content:center;align-items:center}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{background-color:#2e3b85;padding:10px;display:grid;grid-template-columns:80px 1fr;align-items:center;gap:20px;position:relative;min-height:54px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-width:87px;border-radius:100px;border:5px solid #FFFFFF;background-color:#fff;position:absolute;width:90px;height:90px;box-shadow:0 5px 15px -5px #00000054;left:10px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{grid-column:2;color:#fff;font-size:15px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 20px;text-align:center;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:34px;font-weight:900;display:flex;align-items:center;gap:10px;text-align:center;justify-content:center}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;display:inline-block}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]{width:100%;background:linear-gradient(90deg,#eeeeee80,#eee 48.96%,#eeeeee80);display:flex;align-items:center;justify-content:center;gap:10px;padding:10px}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:center;padding:10px}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover{color:#060b29}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(180deg,#5ffc7b,#26d044);border-radius:6px;display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:22px;color:#fff;font-weight:500}.card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:fit-content;justify-self:flex-end}.act_filtro_mobile[_ngcontent-%COMP%]{display:none;color:var(--color-c2);font-size:18px;align-items:center;justify-content:center;gap:10px;background:#fff;padding:20px;border-radius:10px}.container_filtro[_ngcontent-%COMP%]{position:relative}.cont_filtr_btns[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:20px;padding-left:10px;border-left:1px solid #DADADA}.s_futuros_proyectos[_ngcontent-%COMP%]{position:relative;width:100%;min-height:460px}.s_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;background:url("./media/curva_sup-A26RCSX4.svg") no-repeat center;background-size:cover;background-position:center bottom;width:100%;height:100%;max-height:40px;top:-2px;left:0;right:0;z-index:2}.s_futuros_proyectos[_ngcontent-%COMP%]:after{content:"";position:absolute;background:url("./media/curva_inf-3374WHOG.svg") no-repeat center;background-size:cover;background-position:center top;width:100%;height:100%;max-height:40px;bottom:-2px;left:0;right:0;z-index:2}.c_futuros_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:stretch;position:relative;min-height:460px}.c_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:0;bottom:0;width:400px;height:300px;border-radius:100%;background:#366bec59;filter:blur(54px);margin:auto;mix-blend-mode:lighten}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{background:url("./media/bg_futuros-EKYL62GA.jpg"),linear-gradient(107.08deg,#4565b3,#2b478b 31.11%,#13203e);background-blend-mode:multiply;background-size:cover;background-position:center;padding:0 100px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;height:100%;position:relative;z-index:1;gap:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:before, .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{content:"";position:absolute;width:20px;height:70px;background:url("./media/puntos-NZD4PTXJ.svg") no-repeat center;background-size:contain;left:3%;top:20%}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{right:3%;bottom:20%;top:initial;left:initial;transform:rotate(180deg)}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{letter-spacing:.365em;text-transform:uppercase;color:#ffed00;font-weight:600;font-size:20px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:900;color:#fff;font-size:40px;max-width:500px;line-height:1.1}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]{width:100%;height:100%}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{background:#182360;border:3px solid #FAFAFA;border-radius:100px;width:35px;height:35px}.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-button-prev[_ngcontent-%COMP%]:after{font-size:16px;font-weight:800;color:#fff}.swiper-pagination[_ngcontent-%COMP%]{bottom:60px!important}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{background-color:#fff;width:10px;border-radius:100px;height:10px;transition:.4s ease}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%]{width:20px}.swiper-button-prev[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]{left:25px}.swiper-button-next[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{right:25px}.s_proyectos_ejecutados[_ngcontent-%COMP%]{padding:30px 0}.cont_proyecto_logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:1px solid #E4E4E4;max-width:100px;cursor:pointer;position:relative;z-index:1;transition:.4s ease;border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:0;width:70px;height:60px;border-radius:100%;margin:auto;z-index:-1;background:#333663;opacity:0;filter:blur(26px);transition:.4s ease}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.2) translateY(0);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{opacity:.58;bottom:-20px}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{transform:scale(1.05) translateY(-15px);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before{opacity:.58;bottom:-10px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.holder[_ngcontent-%COMP%]{width:100%;max-width:750px;margin:0 auto;display:flex;justify-content:space-between;padding:20px 0}[_nghost-%COMP%]     .holder a:not(.jp-previous, .jp-next)[_ngcontent-%COMP%], [_nghost-%COMP%]     .holder span{display:none}[_nghost-%COMP%]     .holder .jp-previous, [_nghost-%COMP%]     .holder .jp-next{color:#182360!important;font-weight:700;font-size:15px;cursor:pointer}[_nghost-%COMP%]     .holder .jp-previous.jp-disabled, [_nghost-%COMP%]     .holder .jp-next.jp-disabled{opacity:.5}.cont_proyecto_eject[_ngcontent-%COMP%]{display:none;grid-template-columns:1fr 1fr;justify-content:center;width:100%;align-items:stretch;background:url(/assets/images/diseno/proyectos_vivienda/bg_pe.jpg),#0a102deb;border-radius:48px 48px 97px;background-blend-mode:multiply;background-size:cover;position:relative;margin:0 0 40px}.cont_proyecto_eject[_ngcontent-%COMP%]:before{content:"";position:absolute;left:10%;top:0;bottom:0;margin:auto;mix-blend-mode:lighten;max-width:400px;width:100%;max-height:300px;height:100%;border-radius:100%;background:#366bec59;filter:blur(54px);pointer-events:none}.cont_proyecto_eject.active[_ngcontent-%COMP%]{display:grid}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{position:relative;padding:40px 100px;z-index:1;display:flex;flex-direction:column;gap:20px;color:#fff;align-items:flex-start;justify-content:center}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;text-shadow:0px 3px 1px rgba(0,0,0,.17);letter-spacing:.62em;font-weight:400}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:52px;font-weight:800;text-transform:uppercase;background:linear-gradient(180deg,#fff,#fff,#9297b7);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0px 3px 1px rgba(0,0,0,.17)}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:20px;border-bottom:1px solid rgba(215,215,215,.6235294118);font-weight:700}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{height:100%}.info_datos_pe[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:4px;font-size:18px;font-weight:300}.info_datos_pe[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:700}.c_slider_pe[_ngcontent-%COMP%]{border-radius:100px 0 95px;overflow:hidden;max-height:380px}.c_slider_pe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover}.tabs_proyectos_eject[_ngcontent-%COMP%]{margin:0 0 40px}.bg_dark[_ngcontent-%COMP%]{display:none;width:100%;height:100%;position:fixed;z-index:99;background:#090818d1;inset:0}.s_modal_calculadora[_ngcontent-%COMP%]{position:fixed;height:auto;max-height:90%;z-index:100;top:10%;right:0;width:100%;max-width:450px;background-color:#fff;border-radius:20px 0 0 20px;padding:30px 4%;transition:.3s ease-out;transform:translate(100%);overflow-y:scroll}.s_modal_calculadora[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;margin:0 0 4px;color:#9c9c9c;display:inline-block}.s_modal_calculadora.active[_ngcontent-%COMP%]{transform:translate(0)}.s_modal_calculadora[_ngcontent-%COMP%]   .close_calc[_ngcontent-%COMP%]{text-align:right;display:flex;justify-content:flex-end;margin:0 0 20px}.s_modal_calculadora[_ngcontent-%COMP%]   .close_calc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;align-items:center;justify-content:center;width:30px;height:30px;font-size:20px;cursor:pointer}.s_modal_calculadora[_ngcontent-%COMP%]   .close_calc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover:before{transform:translate(10px);color:#4369c6}.s_modal_calculadora[_ngcontent-%COMP%]   .close_calc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{transition:.3s ease;display:flex;align-items:center;justify-content:center;width:30px;height:30px}.f_calculadora[_ngcontent-%COMP%]{width:100%}.grand_c_inputs[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;gap:16px}.datos_persona[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.cont_input_x1[_ngcontent-%COMP%]{width:100%;position:relative}.cont_chk[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.cont_chk[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin:0}.cont_chk[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-c2)}.datos_persona[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:90px}.h_form_proy_esp[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:var(--color-c2);padding-bottom:16px}@media screen and (max-width: 1200px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:40px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:0 20px 0 80px;gap:20px}}@media screen and (max-width: 1050px){.c_proyecto_vivienda[_ngcontent-%COMP%]:after{bottom:initial;top:0}.act_filtro_mobile[_ngcontent-%COMP%]{display:flex}.filtro_proyectos[_ngcontent-%COMP%]{display:none;flex-direction:column;position:absolute;z-index:10;padding:20px;width:100%;top:70px;border-radius:10px}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:initial}.cont_filtr_btns[_ngcontent-%COMP%]{border:0}.cont_proyecto_eject[_ngcontent-%COMP%]{grid-template-columns:1fr}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{gap:10px}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{max-height:300px}}@media screen and (max-width: 768px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:20px;min-height:340px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:18px}.c_futuros_proyectos[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:initial}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:80px 20px 20px;min-height:380px}.swiperFuturos[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .swiperFuturos[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{top:13%}.cont_proyecto_eject[_ngcontent-%COMP%]:before{display:none}}@media screen and (max-width: 480px){.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:30px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 10px}}']});let e=n;return e})();var Rt=[{path:"",component:mt,canActivate:[gt]}],ft=(()=>{let n=class n{};n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=j({type:n}),n.\u0275inj=S({imports:[R.forChild(Rt),R]});let e=n;return e})();var Oe=(()=>{let n=class n{};n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=j({type:n}),n.\u0275inj=S({imports:[nt,ft,N,F,L,V]});let e=n;return e})();export{Oe as ViviendaModule};

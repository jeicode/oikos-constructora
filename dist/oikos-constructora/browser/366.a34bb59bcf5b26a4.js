"use strict";(self.webpackChunkoikos_constructora=self.webpackChunkoikos_constructora||[]).push([[366],{1657:(O,m,o)=>{o.d(m,{a:()=>_});class _{constructor(g="",t=""){this.title=g,this.link=t}}},2902:(O,m,o)=>{o.r(m),o.d(m,{ComercialesModule:()=>B});var _=o(6895),d=o(2100),g=o(5861),t=o(8256),P=o(5480),a=o(8830);let v=(()=>{class n{constructor(e,c,h){this.pageService=e,this.router=c,this.seoService=h}canActivate(e,c){var h=this;return(0,g.Z)(function*(){const x=yield h.pageService.getSeoContentPage("proyectos-construccion-comerciales-industriales");return null!=x?.friendly_url?(h.pageService.currentPage=x,h.seoService.setUpMetaTags(x),!0):(h.router.navigateByUrl("404",{skipLocationChange:!0}),!1)})()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(P.P),t.LFG(d.F0),t.LFG(a.v))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var i=o(2340),u=o(4130),r=o(221),s=o(1299),l=o(9341);function f(n,p){if(1&n&&(t.TgZ(0,"option",30),t._uU(1),t.qZA()),2&n){const e=p.$implicit;t.s9C("value",null==e?null:e.id),t.xp6(1),t.Oqu(null==e?null:e.field_content)}}function C(n,p){if(1&n&&(t.TgZ(0,"option",30),t._uU(1),t.qZA()),2&n){const e=p.$implicit;t.s9C("value",null==e?null:e.id),t.xp6(1),t.Oqu(null==e?null:e.field_content)}}function M(n,p){if(1&n&&(t.TgZ(0,"option",30),t._uU(1),t.qZA()),2&n){const e=p.$implicit;t.s9C("value",null==e?null:e.rango),t.xp6(1),t.Oqu(null==e?null:e.mostrar)}}function b(n,p){if(1&n&&(t.TgZ(0,"a",46),t._UZ(1,"img",47),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.s9C("href",null==e?null:e.vista360,t.LSH)}}function Z(n,p){if(1&n&&(t.TgZ(0,"a",46),t._UZ(1,"span",48),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.s9C("href",null==e?null:e.url_waze,t.LSH)}}function T(n,p){if(1&n&&(t.TgZ(0,"div",44),t.YNc(1,b,2,1,"a",45),t.YNc(2,Z,2,1,"a",45),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",""!=(null==e?null:e.vista360)&&null!=(null==e?null:e.vista360)),t.xp6(1),t.Q6J("ngIf",""!=(null==e?null:e.url_waze)&&null!=(null==e?null:e.url_waze))}}function F(n,p){if(1&n&&(t.TgZ(0,"h4")(1,"span"),t._uU(2,"Desde"),t.qZA(),t._uU(3),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(3),t.hij(" $",null==e?null:e.valor_proyecto_formato," ")}}const w=function(n){return{"background-color":n}};function A(n,p){if(1&n&&(t.TgZ(0,"div",31)(1,"picture")(2,"span",32),t._uU(3),t.qZA(),t.YNc(4,T,3,2,"div",33),t._UZ(5,"img",34),t.qZA(),t.TgZ(6,"h2",35)(7,"picture"),t._UZ(8,"img",36),t.qZA(),t.TgZ(9,"div"),t._uU(10),t.qZA()(),t.TgZ(11,"div",37)(12,"h3"),t._uU(13),t.qZA(),t.YNc(14,F,4,1,"h4",38),t.qZA(),t.TgZ(15,"div",39)(16,"span"),t._uU(17),t.qZA()(),t.TgZ(18,"div",40)(19,"a",41),t._UZ(20,"span",42),t._uU(21," Contactar "),t.qZA(),t.TgZ(22,"a",43),t._uU(23,"Ver proyecto"),t.qZA()()()),2&n){const e=p.$implicit,c=t.oxw();t.xp6(2),t.Q6J("ngStyle",t.VKq(17,w,null==e?null:e.color_secundario)),t.xp6(1),t.Oqu(null==e?null:e.estado_proyecto),t.xp6(1),t.Q6J("ngIf",""!=(null==e?null:e.vista360)||""!=(null==e?null:e.url_waze)),t.xp6(1),t.s9C("src",c.imagenes_url+(null==e?null:e.imagen_fondo_proyecto),t.LSH),t.s9C("alt",null==e?null:e.alt_fondo),t.s9C("title",null==e?null:e.title_fondo),t.xp6(1),t.Q6J("ngStyle",t.VKq(19,w,null==e?null:e.color_primario)),t.xp6(2),t.s9C("src",c.imagenes_url+(null==e?null:e.logo_proyecto),t.LSH),t.s9C("alt",null==e?null:e.alt_logo),t.s9C("title",null==e?null:e.title_logo),t.xp6(2),t.Oqu(null==e?null:e.titulo_proyecto),t.xp6(3),t.AsE("",null==e?null:e.zona_proyecto," / ",null==e?null:e.ubicacion_proyecto,""),t.xp6(1),t.Q6J("ngIf",""!=(null==e?null:e.valor_proyecto)&&null!=(null==e?null:e.valor_proyecto)),t.xp6(3),t.hij(" ",null==e?null:e.texto_adicional," "),t.xp6(2),t.s9C("href",null==e?null:e.api_wsp,t.LSH),t.xp6(3),t.MGl("routerLink","/proyecto/",null==e?null:e.url_amigable,"")}}function j(n,p){1&n&&(t.TgZ(0,"p",49),t._uU(1,"No existe informaci\xf3n relacionado con el filtro utilizado"),t.qZA())}function z(n,p){if(1&n&&(t.TgZ(0,"div",57)(1,"div",58)(2,"div",59)(3,"h5"),t._uU(4),t.qZA(),t._UZ(5,"h2",60),t.TgZ(6,"a",61),t._uU(7),t.qZA()(),t.TgZ(8,"div",62),t._UZ(9,"img",63),t.qZA()()()),2&n){const e=p.$implicit,c=t.oxw(2);t.xp6(4),t.Oqu(null==e?null:e.field_content),t.xp6(1),t.Q6J("innerHTML",null==e?null:e.subtitulo_banner_vivienda,t.oJD),t.xp6(1),t.s9C("href",null==e?null:e.enlace_cta_banner_vivienda,t.LSH),t.xp6(1),t.Oqu(null==e?null:e.texto_cta_banner_vivienda),t.xp6(2),t.s9C("src",c.imagenes_url+(null==e?null:e.imagen),t.LSH),t.s9C("alt",null==e?null:e.imagen_alt),t.s9C("title",null==e?null:e.imagen_title)}}function U(n,p){if(1&n&&(t.TgZ(0,"section",50)(1,"div",51)(2,"div",52),t.YNc(3,z,10,7,"div",53),t.qZA(),t._UZ(4,"div",54)(5,"div",55)(6,"div",56),t.qZA()()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngForOf",e.banners)}}function S(n,p){if(1&n&&(t.TgZ(0,"div",64)(1,"div",65)(2,"div",66)(3,"h2"),t._uU(4),t.qZA()(),t.TgZ(5,"div",67),t._uU(6),t.qZA(),t.TgZ(7,"div",68)(8,"div")(9,"b"),t._uU(10," Direcci\xf3n:"),t.qZA(),t._uU(11),t.qZA(),t.TgZ(12,"div")(13,"b"),t._uU(14," Ciudad:"),t.qZA(),t._uU(15),t.qZA(),t.TgZ(16,"div")(17,"b"),t._uU(18," Zona:"),t.qZA(),t._uU(19),t.qZA()()(),t.TgZ(20,"div",69)(21,"div",70)(22,"div",52)(23,"div",57),t._UZ(24,"img",71),t.qZA()(),t._UZ(25,"div",56),t.qZA()()()),2&n){const e=p.$implicit,c=p.index,h=t.oxw();t.Q6J("ngClass",0==c?"active":""),t.uIk("data-proyecto",c+1),t.xp6(4),t.Oqu(null==e?null:e.titulo_proyecto),t.xp6(2),t.AsE(" ",null==e?null:e.zona_proyecto," / ",null==e?null:e.ubicacion_proyecto," "),t.xp6(5),t.hij(" ",null==e?null:e.direccion_proyecto,""),t.xp6(4),t.hij(" ",null==e?null:e.ubicacion_proyecto,""),t.xp6(4),t.hij(" ",null==e?null:e.zona_proyecto,""),t.xp6(5),t.s9C("src",h.imagenes_url+(null==e?null:e.imagen_principal_proyecto),t.LSH),t.s9C("alt",null==e?null:e.alt_principal)}}const k=[{path:"",component:(()=>{class n{constructor(e,c,h,x){this.pageService=e,this.router=c,this.configServ=h,this.projService=x,this.data=[],this.general=[],this.imagenes=[],this.ciudades=[],this.typesProject=[],this.proyectos=[],this.banners=[],this.ejecutados=[],this.precios=[],this.isSubmitted=!1,this.proyectos_ver=!0,this.captcha="",this.imagenes_url="",this.imagen_banner="",this.ciudad="NA",this.tipo_search="NA",this.precio_search="NA",this.imagenes_url=i.N.imagenes_url,this.suscribeListenRouter=this.router.events.subscribe(y=>{y instanceof d.m2&&(this.configServ.goUpPage(),this.pageService.closeNav())})}ngOnInit(){this.init(),this.configServ.loadBannerProyectos(1e3),this.pageService.closeNav()}init(){var e=this;return(0,g.Z)(function*(){const c=[()=>e.getData(),()=>e.getSecciones(),()=>e.getProyectos(),()=>e.getEjecutados(),()=>e.getPreciosProyectos()];for(const h of c)yield h()})()}getData(){var e=this;return(0,g.Z)(function*(){e.data=yield e.pageService.getContentPage("proyectos-construccion-comerciales-industriales")})()}getImagenes(){var e=this;return(0,g.Z)(function*(){e.imagenes=yield e.pageService.getImagesBySlugPage("proyectos-construccion-comerciales-industriales"),e.imagen_banner=e.imagenes_url+e.imagenes[0].field_content})()}getSecciones(){var e=this;return(0,g.Z)(function*(){const c=yield e.projService.getHousingTypesByType("2");c&&(e.typesProject=c),e.ciudades=yield e.pageService.getElementsContent("nombre ciudad","ciudades"),e.banners=yield e.pageService.getElementsContent("titulo banner comerciales","banner_comerciales")})()}getCiudad(e){this.ciudad=e}getTipo(e){this.tipo_search=e}getPrecio(e){this.precio_search=e}toogleContainerSearch(){const e=document.querySelector(".filtro_proyectos");$(e).slideToggle().css("display","flex")}getProyectos(){var e=this;return(0,g.Z)(function*(){e.proyectos=yield e.projService.getProyectosByTipo("2"),e.proyectos_ver=0!=e.proyectos.length})()}buscarProyectos(){var e=this;return(0,g.Z)(function*(){e.toogleContainerSearch(),e.proyectos=yield e.projService.getProyectosByTipo("2",e.ciudad,e.tipo_search,e.precio_search),e.proyectos_ver=0!=e.proyectos.length})()}limpiarFiltros(){var e=this;return(0,g.Z)(function*(){e.toogleContainerSearch(),e.getProyectos(),$(".filtroCiudad").val("NA"),$(".filtroTipo").val("NA"),$(".filtroPrecio").val("NA")})()}getEjecutados(){var e=this;return(0,g.Z)(function*(){e.ejecutados=yield e.projService.getProyectosByTipo("4"),e.configServ.loadbannerEjecutados(1e3)})()}getPreciosProyectos(){var e=this;return(0,g.Z)(function*(){e.precios=yield e.projService.getPreciosProyectos("2")})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(P.P),t.Y36(d.F0),t.Y36(u.E),t.Y36(r.Y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-comerciales"]],decls:47,vars:10,consts:[[1,"s_proyecto_vivienda"],[1,"cnt_central"],[1,"c_proyecto_vivienda"],[1,"title_section","al_center",3,"innerHTML"],[1,"container_filtro"],[1,"act_filtro_mobile",3,"click"],[1,"btn_icon_search"],[1,"fas","fa-search"],[1,"filtro_proyectos"],[1,"filtroCiudad",3,"change"],["nomCiudad",""],["value","NA","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"filtroTipo",3,"change"],["nomTipo",""],[1,"precio","filtroPrecio",3,"change"],["nomPrecio",""],[1,"cont_filtr_btns"],["type","button",1,"btn_link_reset",3,"click"],[1,"fas","fa-times"],["type","button",1,"btn",3,"click"],[1,"s_cards_proyectos"],[1,"c_cards_proyectos"],["class","card_p",4,"ngFor","ngForOf"],["style","text-align:center;",4,"ngIf"],["class","s_futuros_proyectos",4,"ngIf"],[1,"s_proyectos_ejecutados"],[1,"c_proyectos_ejecutados"],[1,"title_section","al-center",3,"innerHTML"],["class","cont_proyecto_eject",3,"ngClass",4,"ngFor","ngForOf"],[3,"value"],[1,"card_p"],[1,"tag_state",3,"ngStyle"],["class","btns_icons",4,"ngIf"],["width","350","height","219",3,"src","alt","title"],[1,"name_proyecto",3,"ngStyle"],["width","87","height","87",3,"src","alt","title"],[1,"datos_proyecto"],[4,"ngIf"],[1,"franja_p"],[1,"ctas_proyectos"],["target","_blank","rel","noopener, nofollow",1,"btn_whatsapp",3,"href"],[1,"fab","fa-whatsapp"],[1,"btn",3,"routerLink"],[1,"btns_icons"],["target","_blank","rel","nofollow,noopener","class","btn_icon",3,"href",4,"ngIf"],["target","_blank","rel","nofollow,noopener",1,"btn_icon",3,"href"],["src","assets/images/diseno/proyectos_vivienda/icon_360.svg","width","20","height","20","alt",""],[1,"fas","fa-map-marker-alt"],[2,"text-align","center"],[1,"s_futuros_proyectos"],[1,"swiper","swiperFuturos"],[1,"swiper-wrapper"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"swiper-button-next"],[1,"swiper-button-prev"],[1,"swiper-pagination"],[1,"swiper-slide"],[1,"c_futuros_proyectos"],[1,"info_fp"],[3,"innerHTML"],[1,"btn","contacto_h",3,"href"],[1,"img_fp"],["width","1280","height","720",3,"src","alt","title"],[1,"cont_proyecto_eject",3,"ngClass"],[1,"info_pe"],[1,"title_pe"],[1,"lugar"],[1,"info_datos_pe"],[1,"c_slider_pe"],[1,"swiper","swiperPe"],["width","530","height","390",3,"src","alt"]],template:function(e,c){if(1&e){const h=t.EpF();t.TgZ(0,"section",0)(1,"div",1)(2,"div",1),t._UZ(3,"app-breadcrumb"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"h1",3),t.TgZ(6,"div",4)(7,"div",5),t.NdJ("click",function(){return c.toogleContainerSearch()}),t.TgZ(8,"h3"),t._uU(9),t.qZA(),t.TgZ(10,"a",6),t._UZ(11,"span",7),t.qZA()(),t.TgZ(12,"form",8)(13,"select",9,10),t.NdJ("change",function(){t.CHM(h);const y=t.MAs(14);return t.KtG(c.getCiudad(y.value))}),t.TgZ(15,"option",11),t._uU(16,"Ciudad"),t.qZA(),t.YNc(17,f,2,2,"option",12),t.qZA(),t.TgZ(18,"select",13,14),t.NdJ("change",function(){t.CHM(h);const y=t.MAs(19);return t.KtG(c.getTipo(y.value))}),t.TgZ(20,"option",11),t._uU(21,"Tipo de proyecto comercial"),t.qZA(),t.YNc(22,C,2,2,"option",12),t.qZA(),t.TgZ(23,"select",15,16),t.NdJ("change",function(){t.CHM(h);const y=t.MAs(24);return t.KtG(c.getPrecio(y.value))}),t.TgZ(25,"option",11),t._uU(26,"Precio"),t.qZA(),t.YNc(27,M,2,2,"option",12),t.qZA(),t.TgZ(28,"div",17)(29,"button",18),t.NdJ("click",function(){return c.limpiarFiltros()}),t._uU(30,"Limpiar "),t._UZ(31,"span",19),t.qZA(),t.TgZ(32,"button",20),t.NdJ("click",function(){return c.buscarProyectos()}),t._uU(33,"Buscar "),t._UZ(34,"span",7),t.qZA()()()()()()(),t.TgZ(35,"section",21)(36,"div",1)(37,"div",22),t.YNc(38,A,24,21,"div",23),t.YNc(39,j,2,0,"p",24),t.qZA()()(),t.YNc(40,U,7,1,"section",25),t.TgZ(41,"section",26)(42,"div",1)(43,"div",27),t._UZ(44,"div",28)(45,"app-executed-projects-slide-pag"),t.YNc(46,S,26,10,"div",29),t.qZA()()()}2&e&&(t.xp6(5),t.Q6J("innerHTML",c.data.titulo_proyecto_comerciales,t.oJD),t.xp6(4),t.hij(" ",c.data.titulo_busqueda," "),t.xp6(8),t.Q6J("ngForOf",c.ciudades),t.xp6(5),t.Q6J("ngForOf",c.typesProject),t.xp6(5),t.Q6J("ngForOf",c.precios),t.xp6(11),t.Q6J("ngForOf",c.proyectos),t.xp6(1),t.Q6J("ngIf",!c.proyectos_ver),t.xp6(1),t.Q6J("ngIf",c.banners.length>0),t.xp6(4),t.Q6J("innerHTML",c.data.subtitulo_proyectos_ejecutados,t.oJD),t.xp6(2),t.Q6J("ngForOf",c.ejecutados))},dependencies:[_.mk,_.sg,_.O5,_.PC,d.yS,s.L,l.m],styles:['.s_proyecto_vivienda[_ngcontent-%COMP%]{background:linear-gradient(180deg,rgba(233,237,247,0) 0%,#E8EBF1 72.6%),#FFFFFF;min-height:340px;position:relative}.s_proyecto_vivienda[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:-2px;background:url(curva_bg.74ca4e612261135c.svg) no-repeat;background-size:cover;background-position:center top;z-index:1;width:100%;height:100%;max-height:145px;pointer-events:none}.c_proyecto_vivienda[_ngcontent-%COMP%]{position:relative}.c_proyecto_vivienda[_ngcontent-%COMP%]:before, .c_proyecto_vivienda[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;background:url(puntos.6e47c7cee921d0de.svg) no-repeat center;width:20px;height:70px}.c_proyecto_vivienda[_ngcontent-%COMP%]:after{right:0;left:initial;top:initial;bottom:0;transform:rotate(180deg)}.filtro_proyectos[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;background:#FFFFFF;box-shadow:0 2px 20px -3px #33427740;border-radius:39px;padding:8px 20px;max-width:920px;margin:0 auto}.filtro_proyectos[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:none;border-radius:0;border:0;border-bottom:1px solid #DADADA;padding:5px;color:#666;font-size:14px;cursor:pointer}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:130px}.s_cards_proyectos[_ngcontent-%COMP%]{padding:0 0 40px;position:relative;z-index:1;transform:translateY(-80px)}.c_cards_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}.card_p[_ngcontent-%COMP%]{overflow:hidden;background:#FFFFFF;box-shadow:0 19px 41px -18px #23386273;border-radius:24px;display:inline-grid}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;max-height:219px;width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%]{text-align:center;position:absolute;left:10px;top:10px;border-radius:100px;padding:8px 20px;color:#fff;font-weight:600;font-size:14px;z-index:1}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:10px;right:10px;border-radius:6px;background:var(--color-grad_azul_osc);width:80px;height:40px;z-index:1;overflow:hidden}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{position:absolute;left:0;right:0;height:80%;width:1px;background-color:#a5a5a5;margin:auto;z-index:2}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;display:flex;justify-content:center;align-items:center;width:26px;height:26px;transition:.3s ease;width:100%;height:100%;position:relative}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{content:"";background-color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px;color:#fff;display:inline-flex;justify-content:center;align-items:center}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{background-color:#2e3b85;padding:10px;display:grid;grid-template-columns:80px 1fr;align-items:center;gap:20px;position:relative;min-height:54px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-width:87px;border-radius:100px;border:5px solid #FFFFFF;background-color:#fff;position:absolute;width:90px;height:90px;box-shadow:0 5px 15px -5px #00000054;left:10px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{grid-column:2;color:#fff;font-size:15px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 20px;text-align:center;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:34px;font-weight:900;display:flex;align-items:center;gap:10px;text-align:center;justify-content:center}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;display:inline-block}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]{width:100%;background:linear-gradient(90deg,rgba(238,238,238,.5) 0%,#EEEEEE 48.96%,rgba(238,238,238,.5) 100%);display:flex;align-items:center;justify-content:center;gap:10px;padding:10px}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:center;padding:10px}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover{color:#060b29}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(180deg,#5FFC7B 0%,#26D044 100%);border-radius:6px;display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:22px;color:#fff;font-weight:500}.card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;justify-self:flex-end}.act_filtro_mobile[_ngcontent-%COMP%]{display:none;color:var(--color-c2);font-size:18px;align-items:center;justify-content:center;gap:10px;background:#FFF;padding:20px;border-radius:10px}.container_filtro[_ngcontent-%COMP%]{position:relative}.cont_filtr_btns[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:20px;padding-left:10px;border-left:1px solid #DADADA}.s_futuros_proyectos[_ngcontent-%COMP%]{position:relative;width:100%;min-height:460px}.s_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;background:url(curva_sup.06bd114afc8325f1.svg) no-repeat center;background-size:cover;background-position:center bottom;width:100%;height:100%;max-height:40px;top:-2px;left:0;right:0;z-index:2}.s_futuros_proyectos[_ngcontent-%COMP%]:after{content:"";position:absolute;background:url(curva_inf.deffcb1dc6e96b2c.svg) no-repeat center;background-size:cover;background-position:center top;width:100%;height:100%;max-height:40px;bottom:-2px;left:0;right:0;z-index:2}.c_futuros_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:stretch;position:relative;min-height:460px}.c_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:0;bottom:0;width:400px;height:300px;border-radius:100%;background:rgba(54,107,236,.35);filter:blur(54px);margin:auto;mix-blend-mode:lighten}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{background:url(bg_futuros.22b0bf68c0483482.jpg),linear-gradient(107.08deg,#4565B3 0%,#2B478B 31.11%,#13203E 100%);background-blend-mode:multiply;background-size:cover;background-position:center;padding:0 100px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;height:100%;position:relative;z-index:1;gap:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:before, .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{content:"";position:absolute;width:20px;height:70px;background:url(puntos.6e47c7cee921d0de.svg) no-repeat center;background-size:contain;left:3%;top:20%}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{right:3%;bottom:20%;top:initial;left:initial;transform:rotate(180deg)}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{letter-spacing:.365em;text-transform:uppercase;color:#ffed00;font-weight:600;font-size:20px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:900;color:#fff;font-size:40px;max-width:500px;line-height:1.1}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]{width:100%;height:100%}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{background:#182360;border:3px solid #FAFAFA;border-radius:100px;width:35px;height:35px}.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-button-prev[_ngcontent-%COMP%]:after{font-size:16px;font-weight:800;color:#fff}.swiper-pagination[_ngcontent-%COMP%]{bottom:60px!important}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{background-color:#fff;width:10px;border-radius:100px;height:10px;transition:.4s ease}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%]{width:20px}.swiper-button-prev[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]{left:25px}.swiper-button-next[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{right:25px}.s_proyectos_ejecutados[_ngcontent-%COMP%]{padding:30px 0}.cont_proyecto_eject[_ngcontent-%COMP%]{display:none;grid-template-columns:1fr 1fr;justify-content:center;width:100%;align-items:stretch;background:url(bg_pe.ec3fb9feb5864594.jpg),rgba(10,16,45,.9215686275);border-radius:48px 48px 97px;background-blend-mode:multiply;background-size:cover;position:relative;margin:0 0 40px}.cont_proyecto_eject[_ngcontent-%COMP%]:before{content:"";position:absolute;left:10%;top:0;bottom:0;margin:auto;mix-blend-mode:lighten;max-width:400px;width:100%;max-height:300px;height:100%;border-radius:100%;background:rgba(54,107,236,.3490196078);filter:blur(54px);pointer-events:none}.cont_proyecto_eject.active[_ngcontent-%COMP%]{display:grid}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{position:relative;padding:40px 100px;z-index:1;display:flex;flex-direction:column;gap:20px;color:#fff;align-items:flex-start;justify-content:center}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;text-shadow:0px 3px 1px rgba(0,0,0,.17);letter-spacing:.62em;font-weight:400}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:52px;font-weight:800;text-transform:uppercase;background:linear-gradient(180deg,#FFFFFF,#FFFFFF,#9297b7);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0px 3px 1px rgba(0,0,0,.17)}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:20px;border-bottom:1px solid rgba(215,215,215,.6235294118);font-weight:700}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{height:100%}.info_datos_pe[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:4px;font-size:18px;font-weight:300}.info_datos_pe[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:700}.c_slider_pe[_ngcontent-%COMP%]{border-radius:100px 0 95px;overflow:hidden;max-height:380px}.c_slider_pe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover}@media screen and (max-width: 1200px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:40px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:0 20px 0 80px;gap:20px}}@media screen and (max-width: 1050px){.c_proyecto_vivienda[_ngcontent-%COMP%]:after{bottom:initial;top:0}.act_filtro_mobile[_ngcontent-%COMP%]{display:flex}.filtro_proyectos[_ngcontent-%COMP%]{display:none;flex-direction:column;position:absolute;z-index:10;padding:20px;width:100%;top:70px;border-radius:10px}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:initial}.cont_filtr_btns[_ngcontent-%COMP%]{border:0}.cont_proyecto_eject[_ngcontent-%COMP%]{grid-template-columns:1fr}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{gap:10px}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{max-height:300px}}@media screen and (max-width: 768px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:20px;min-height:340px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:18px}.c_futuros_proyectos[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:initial}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:80px 20px 20px;min-height:380px}.swiperFuturos[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .swiperFuturos[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{top:13%}.cont_proyecto_eject[_ngcontent-%COMP%]:before{display:none}}@media screen and (max-width: 480px){.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:30px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 10px}}']}),n})(),canActivate:[v]}];let E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(k),d.Bz]}),n})();var L=o(5626),D=o(529);let B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[_.ez,E,L.h,D.JF,s.L,l.m]}),n})()},1299:(O,m,o)=>{o.d(m,{L:()=>P});var _=o(6895),d=o(2100),g=o(1657),t=o(8256);let P=(()=>{class a{constructor(i){this.router=i,this.cssClass="",this.colorTxt="black",this.crumbTitle="",this.breadcrumbs=[],this.spliceRoutes=[],this.paths=[],this.ngOnInitFirstCalled=!1,this.suscribeListenRouter=this.router.events.subscribe(u=>{u instanceof d.m2&&this.ngOnInitFirstCalled&&(this.ngOnInit(),this.mappingRoutes())})}ngOnDestroy(){this.suscribeListenRouter.unsubscribe()}ngOnInit(){this.paths=this.router.url.split("/"),this.paths=this.deletePathsInRoute(),this.paths=this.clearPaths(),this.crumbTitle&&(this.paths.splice(this.paths.length-1,this.paths.length),this.paths.push(this.crumbTitle)),0===this.breadcrumbs.length&&this.mappingRoutes(),this.ngOnInitFirstCalled=!0}mappingRoutes(){let i="";this.breadcrumbs=this.paths.map(u=>{i+=`${u}/`;const r=new g.a;return r.title=this.capitalizeFirstLetter(u),r.link=i,r})}deletePathsInRoute(){if(this.spliceRoutes.length>0){const[i,u]=this.spliceRoutes;this.paths.splice(i,u)}return this.paths}clearPaths(){return this.paths.map(i=>i.replace(/-/gi," "))}capitalizeFirstLetter(i){return i?i.charAt(0).toUpperCase()+i.slice(1):"Oikos Constructora"}}return a.\u0275fac=function(i){return new(i||a)(t.Y36(d.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-breadcrumb"]],inputs:{cssClass:"cssClass",colorTxt:"colorTxt",crumbTitle:"crumbTitle",breadcrumbs:"breadcrumbs",spliceRoutes:"spliceRoutes"},standalone:!0,features:[t.jDz],decls:0,vars:0,template:function(i,u){},dependencies:[_.ez,d.Bz],encapsulation:2}),a})()},221:(O,m,o)=>{o.d(m,{Y:()=>v});var _=o(5861),d=o(2340),g=o(3905),t=o(8256),P=o(529);const{api_url:a}=d.N;let v=(()=>{class i{constructor(r){this._http=r}getHousingTypesByType(r){var s=this;return(0,_.Z)(function*(){return(0,g.z)(s._http.get(`${a}v1/getHousingTypesByType?project_type=${r}`)).then().catch(f=>(console.warn(f),!1))})()}getFeaturedProjects(){var r=this;return(0,_.Z)(function*(){return(0,g.z)(r._http.get(`${a}v1/getProyectosDestacados`)).then().catch(l=>(console.warn(l),!1))})()}getProyectosByTipo(r,s,l,f,C){var M=this;return(0,_.Z)(function*(){return M._http.get(`${a}v1/getProyectosByTipo?tipo=${r}&ciudad=${s}&tipo_proyecto=${l}&precio=${f}&limite=${C}`).toPromise().then().catch(Z=>(console.warn(Z),!1))})()}getProyectoByUrl(r){var s=this;return(0,_.Z)(function*(){return s._http.get(`${a}v1/getProyectoByUrl?friendly_url=${r}`).toPromise().then().catch(f=>(console.warn(f),!1))})()}getCalculoPorcentaje(r,s,l,f,C){var M=this;return(0,_.Z)(function*(){return M._http.get(`${a}v1/getCalculoPorcentaje?valorProyecto=${r}&porcentaje=${s}&cuotasinicialfinanciar=${l}&plazo=${f}&valorafinanciaranios=${C}`).toPromise().then().catch(Z=>(console.warn(Z),!1))})()}getCalculoCuota(r,s){var l=this;return(0,_.Z)(function*(){return l._http.get(`${a}v1/getCalculoCuota?cuota=${s}&saldocuotainicial=${r}`).toPromise().then().catch(C=>(console.warn(C),!1))})()}getPlazoanios(r,s){var l=this;return(0,_.Z)(function*(){return l._http.get(`${a}v1/getPlazoanios?cuota=${r}&valorafinanciar=${s}`).toPromise().then().catch(C=>(console.warn(C),!1))})()}setCalculadoraForm(r){return this._http.post(`${a}v1/setCalculadoraForm`,JSON.stringify(r)).toPromise().then().catch(l=>(console.warn(l),!1))}getCategoriasInteres(r){var s=this;return(0,_.Z)(function*(){return s._http.get(`${a}v1/getCategoriasInteres?id_proyecto=${r}`).toPromise().then().catch(f=>(console.warn(f),!1))})()}getSitiosInteres(r,s){var l=this;return(0,_.Z)(function*(){return l._http.get(`${a}v1/getSitiosInteres?id_proyecto=${s}&id_categoria=${r}`).toPromise().then().catch(C=>(console.warn(C),!1))})()}getSeoContentProject(r){var s=this;return(0,_.Z)(function*(){return s._http.get(`${a}v1/getSeoContentProject?friendly_url=${r}`).toPromise().then().catch(f=>(console.warn(f),!1))})()}getPreciosProyectos(r){var s=this;return(0,_.Z)(function*(){return s._http.get(`${a}v1/getPreciosProyectos?tipo=${r}`).toPromise().then()})()}createContactWppProject(r){var s=this;return(0,_.Z)(function*(){return s._http.post(`${a}v1/createContactWppProject`,r).toPromise().then()})()}}return i.\u0275fac=function(r){return new(r||i)(t.LFG(P.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},8830:(O,m,o)=>{o.d(m,{v:()=>P});var _=o(6895),d=o(8256),g=o(1481),t=o(5480);let P=(()=>{class a{constructor(i,u,r,s){this.meta=i,this.pageService=u,this.doc=r,this.titlePage=s}updateCanonicalUrl(i=""){let u=this.doc.querySelector("link[rel='canonical']")||null;u||(u=this.doc.createElement("link")),u.setAttribute("rel","canonical"),u.setAttribute("href",i||this.doc.URL),this.doc.head.appendChild(u)}setUpMetaTags(i){if(i){var u="";""!=i.canonical&&(u=i.canonical),this.updateCanonicalUrl(u),this.titlePage.setTitle(i.title),this.meta.updateTag({name:"description",content:i.metadescription}),this.meta.updateTag({name:"robots",content:i.metarobots})}}}return a.\u0275fac=function(i){return new(i||a)(d.LFG(g.h_),d.LFG(t.P),d.LFG(_.K0),d.LFG(g.Dx))},a.\u0275prov=d.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},9019:(O,m,o)=>{o.d(m,{N:()=>_});const _={production:!0,base_url:"https://adminpaxzu-cons.oikos.com.co/",api_url:"https://adminpaxzu-cons.oikos.com.co/api/",token:"aff7d877-d0ff-4dfa-a85c-d9715ea82061",imagenes_url:"https://adminpaxzu-cons.oikos.com.co/"}}}]);
"use strict";(self.webpackChunkoikos_constructora=self.webpackChunkoikos_constructora||[]).push([[566],{566:(w,P,r)=>{r.r(P),r.d(P,{ViviendaModule:()=>J});var _=r(6895),h=r(2100),u=r(5861),t=r(8256),m=r(5480),p=r(8830);let O=(()=>{class e{constructor(n,o,d){this.pageService=n,this.router=o,this.seoService=d}canActivate(n,o){var d=this;return(0,u.Z)(function*(){const v=yield d.pageService.getSeoContentPage("proyectos-construccion-vivienda");return null!=v?.friendly_url&&(d.pageService.currentPage=v,d.seoService.setUpMetaTags(v),!0)})()}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(m.P),t.LFG(h.F0),t.LFG(p.v))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=r(7579),f=r(2340),i=r(849),c=r(3771),a=r(4130),g=r(221),C=r(1299),y=r(9924),M=r(9341);function b(e,s){if(1&e&&(t.TgZ(0,"option",32),t._uU(1),t.qZA()),2&e){const n=s.$implicit;t.s9C("value",null==n?null:n.id),t.xp6(1),t.Oqu(null==n?null:n.field_content)}}function j(e,s){if(1&e&&(t.TgZ(0,"option",32),t._uU(1),t.qZA()),2&e){const n=s.$implicit;t.s9C("value",null==n?null:n.id),t.xp6(1),t.Oqu(null==n?null:n.field_content)}}function T(e,s){if(1&e&&(t.TgZ(0,"option",32),t._uU(1),t.qZA()),2&e){const n=s.$implicit;t.s9C("value",null==n?null:n.rango),t.xp6(1),t.Oqu(null==n?null:n.mostrar)}}function F(e,s){if(1&e&&(t.TgZ(0,"a",49),t._UZ(1,"img",50),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.s9C("href",null==n?null:n.vista360,t.LSH)}}function A(e,s){if(1&e&&(t.TgZ(0,"a",49),t._UZ(1,"span",51),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.s9C("href",null==n?null:n.url_waze,t.LSH)}}function z(e,s){if(1&e&&(t.TgZ(0,"div",47),t.YNc(1,F,2,1,"a",48),t.YNc(2,A,2,1,"a",48),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",""!=(null==n?null:n.vista360)&&null!=(null==n?null:n.vista360)),t.xp6(1),t.Q6J("ngIf",""!=(null==n?null:n.url_waze)&&null!=(null==n?null:n.url_waze))}}function S(e,s){if(1&e&&(t.TgZ(0,"h4")(1,"span"),t._uU(2,"Desde"),t.qZA(),t._uU(3),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(3),t.hij(" $",null==n?null:n.valor_proyecto_formato," ")}}const Z=function(e){return{"background-color":e}};function U(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",33)(1,"picture")(2,"span",34),t._uU(3),t.qZA(),t.YNc(4,z,3,2,"div",35),t.TgZ(5,"a",36),t._UZ(6,"img",37),t.qZA()(),t.TgZ(7,"h2",38)(8,"picture"),t._UZ(9,"img",39),t.qZA(),t.TgZ(10,"div"),t._uU(11),t.qZA()(),t.TgZ(12,"div",40)(13,"h3"),t._uU(14),t.qZA(),t.YNc(15,S,4,1,"h4",41),t.qZA(),t.TgZ(16,"div",42)(17,"span"),t._uU(18),t.qZA()(),t.TgZ(19,"div",43)(20,"a",44),t.NdJ("click",function(){const v=t.CHM(n).$implicit,x=t.oxw();return t.KtG(x.selectProjectToModal(v))}),t._UZ(21,"span",45),t._uU(22," Contactar "),t.qZA(),t.TgZ(23,"a",46),t._uU(24,"Ver proyecto"),t.qZA()()()}if(2&e){const n=s.$implicit,o=t.oxw();t.xp6(2),t.Q6J("ngStyle",t.VKq(17,Z,null==n?null:n.color_secundario)),t.xp6(1),t.Oqu(null==n?null:n.estado_proyecto),t.xp6(1),t.Q6J("ngIf",""!=(null==n?null:n.vista360)||""!=(null==n?null:n.url_waze)),t.xp6(1),t.MGl("routerLink","/proyecto/",null==n?null:n.url_amigable,""),t.xp6(1),t.s9C("src",o.imagenes_url+(null==n?null:n.imagen_fondo_proyecto),t.LSH),t.s9C("alt",null==n?null:n.alt_fondo),t.s9C("title",null==n?null:n.title_fondo),t.xp6(1),t.Q6J("ngStyle",t.VKq(19,Z,null==n?null:n.color_primario)),t.xp6(2),t.s9C("src",o.imagenes_url+(null==n?null:n.logo_proyecto),t.LSH),t.s9C("alt",null==n?null:n.alt_logo),t.s9C("title",null==n?null:n.title_logo),t.xp6(2),t.Oqu(null==n?null:n.titulo_proyecto),t.xp6(3),t.AsE("",null==n?null:n.zona_proyecto," / ",null==n?null:n.ubicacion_proyecto,""),t.xp6(1),t.Q6J("ngIf",""!=(null==n?null:n.valor_proyecto)&&null!=(null==n?null:n.valor_proyecto)),t.xp6(3),t.hij(" ",null==n?null:n.texto_adicional," "),t.xp6(5),t.MGl("routerLink","/proyecto/",null==n?null:n.url_amigable,"")}}function k(e,s){1&e&&(t.TgZ(0,"p",52),t._uU(1,"No existe informaci\xf3n relacionado con el filtro utilizado"),t.qZA())}function E(e,s){if(1&e&&(t.TgZ(0,"div",60)(1,"div",61)(2,"div",62)(3,"h5"),t._uU(4),t.qZA(),t._UZ(5,"h2",63),t.TgZ(6,"a",64),t._uU(7),t.qZA()(),t.TgZ(8,"div",65),t._UZ(9,"img",66),t.qZA()()()),2&e){const n=s.$implicit,o=t.oxw(2);t.xp6(4),t.Oqu(null==n?null:n.field_content),t.xp6(1),t.Q6J("innerHTML",null==n?null:n.subtitulo_banner_vivienda,t.oJD),t.xp6(1),t.s9C("href",null==n?null:n.enlace_cta_banner_vivienda,t.LSH),t.xp6(1),t.Oqu(null==n?null:n.texto_cta_banner_vivienda),t.xp6(2),t.s9C("src",o.imagenes_url+(null==n?null:n.imagen),t.LSH),t.s9C("alt",null==n?null:n.imagen_alt),t.s9C("title",null==n?null:n.imagen_title)}}function L(e,s){if(1&e&&(t.TgZ(0,"section",53)(1,"div",54)(2,"div",55),t.YNc(3,E,10,7,"div",56),t.qZA(),t._UZ(4,"div",57)(5,"div",58)(6,"div",59),t.qZA()()),2&e){const n=t.oxw();t.xp6(3),t.Q6J("ngForOf",n.banners)}}function V(e,s){if(1&e&&(t.TgZ(0,"div",67)(1,"div",68)(2,"div",69)(3,"h2"),t._uU(4),t.qZA()(),t.TgZ(5,"div",70),t._uU(6),t.qZA(),t.TgZ(7,"div",71)(8,"div")(9,"b"),t._uU(10," Direcci\xf3n:"),t.qZA(),t._uU(11),t.qZA(),t.TgZ(12,"div")(13,"b"),t._uU(14," Ciudad:"),t.qZA(),t._uU(15),t.qZA(),t.TgZ(16,"div")(17,"b"),t._uU(18," Zona:"),t.qZA(),t._uU(19),t.qZA()()(),t.TgZ(20,"div",72)(21,"div",73)(22,"div",55)(23,"div",60),t._UZ(24,"img",74),t.qZA()(),t._UZ(25,"div",59),t.qZA()()()),2&e){const n=s.$implicit,o=s.index,d=t.oxw();t.Q6J("ngClass",0==o?"active":""),t.uIk("data-proyecto",o+1),t.xp6(4),t.Oqu(null==n?null:n.titulo_proyecto),t.xp6(2),t.AsE(" ",null==n?null:n.zona_proyecto," / ",null==n?null:n.ubicacion_proyecto," "),t.xp6(5),t.hij(" ",null==n?null:n.direccion_proyecto,""),t.xp6(4),t.hij(" ",null==n?null:n.ubicacion_proyecto,""),t.xp6(4),t.hij(" ",null==n?null:n.zona_proyecto,""),t.xp6(5),t.s9C("src",d.imagenes_url+(null==n?null:n.imagen_principal_proyecto),t.LSH),t.s9C("alt",null==n?null:n.alt_principal)}}const B=[{path:"",component:(()=>{class e{constructor(n,o,d,v,x){this.pageService=n,this.router=o,this.responsiveService=d,this.configServ=v,this.projService=x,this.data=[],this.general=[],this.imagenes=[],this.ciudades=[],this.proyectos=[],this.typesProject=[],this.banners=[],this.ejecutados=[],this.precios=[],this.isSubmitted=!1,this.proyectos_ver=!0,this.captcha="",this.imagenes_url="",this.imagen_banner="",this.ciudad="NA",this.tipo_search="NA",this.precio_search="NA",this.projectSelectedToModal=new i.I,this.notifyChanges=new l.x,this.imagenes_url=f.N.imagenes_url,this.suscribeListenRouter=this.router.events.subscribe(N=>{N instanceof h.m2&&(this.configServ.goUpPage(),this.pageService.closeNav())})}toogleContainerSearch(){if(this.responsiveService.isMobile){const n=document.querySelector(".filtro_proyectos");$(n).slideToggle().css("display","flex")}}ngOnInit(){this.init(),this.pageService.closeNav()}init(){var n=this;return(0,u.Z)(function*(){const o=[()=>n.getData(),()=>n.getSecciones(),()=>n.getProyectos(),()=>n.getEjecutados(),()=>n.getPreciosProyectos()];for(const d of o)yield d()})()}selectProjectToModal(n){this.projectSelectedToModal=n,this.notifyChanges.next(!0)}getData(){var n=this;return(0,u.Z)(function*(){n.data=yield n.pageService.getContentPage("proyectos-construccion-vivienda")})()}getEjecutados(){var n=this;return(0,u.Z)(function*(){n.ejecutados=yield n.projService.getProyectosByTipo("4"),n.configServ.loadbannerEjecutados(1e3)})()}getImagenes(){var n=this;return(0,u.Z)(function*(){n.imagenes=yield n.pageService.getImagesBySlugPage("proyectos-construccion-vivienda"),n.imagen_banner=n.imagenes_url+n.imagenes[0].field_content})()}getSecciones(){var n=this;return(0,u.Z)(function*(){const o=yield n.projService.getCitiesByProjectType("1");o&&(n.ciudades=o);const d=yield n.projService.getHousingTypesByType("1");d&&(n.typesProject=d),n.banners=yield n.pageService.getElementsContent("titulo banner vivienda","banner_vivienda")})()}getCiudad(n){this.ciudad=n}getTipo(n){this.tipo_search=n}getPrecio(n){this.precio_search=n}getProyectos(){var n=this;return(0,u.Z)(function*(){n.proyectos=yield n.projService.getProyectosByTipo("1"),n.proyectos_ver=0!=n.proyectos.length})()}buscarProyectos(){var n=this;return(0,u.Z)(function*(){n.proyectos=yield n.projService.getProyectosByTipo("1",n.ciudad,n.tipo_search,n.precio_search),n.proyectos_ver=0!=n.proyectos.length})()}limpiarFiltros(){var n=this;return(0,u.Z)(function*(){n.getProyectos(),$(".filtroCiudad").val("NA"),$(".filtroTipo").val("NA"),$(".filtroPrecio").val("NA")})()}getPreciosProyectos(){var n=this;return(0,u.Z)(function*(){n.precios=yield n.projService.getPreciosProyectos("1")})()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.P),t.Y36(h.F0),t.Y36(c.k),t.Y36(a.E),t.Y36(g.Y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-vivienda"]],decls:49,vars:12,consts:[[1,""],[1,"s_proyecto_vivienda"],[1,"cnt_central"],[1,"c_proyecto_vivienda"],[1,"title_section","al_center",3,"innerHTML"],[1,"container_filtro"],[1,"act_filtro_mobile",3,"click"],[1,"btn_icon_search"],[1,"fas","fa-search"],[1,"filtro_proyectos"],[1,"filtroCiudad",3,"change"],["nomCiudad",""],["value","NA","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"filtroTipo",3,"change"],["nomTipo",""],[1,"precio","filtroPrecio",3,"change"],["nomPrecio",""],[1,"cont_filtr_btns"],["type","button",1,"btn_link_reset",3,"click"],[1,"fas","fa-times"],["type","button",1,"btn",3,"click"],[1,"s_cards_proyectos"],[1,"c_cards_proyectos"],["class","card_p",4,"ngFor","ngForOf"],["style","text-align:center;",4,"ngIf"],["class","s_futuros_proyectos",4,"ngIf"],[1,"s_proyectos_ejecutados"],[1,"c_proyectos_ejecutados"],[1,"title_section","al-center",3,"innerHTML"],["class","cont_proyecto_eject",3,"ngClass",4,"ngFor","ngForOf"],[3,"modalEvent","project"],[3,"value"],[1,"card_p"],[1,"tag_state",3,"ngStyle"],["class","btns_icons",4,"ngIf"],[3,"routerLink"],["width","350","height","219",3,"src","alt","title"],[1,"name_proyecto",3,"ngStyle"],["width","87","height","87",3,"src","alt","title"],[1,"datos_proyecto"],[4,"ngIf"],[1,"franja_p"],[1,"ctas_proyectos"],[1,"btn_whatsapp","c-pointer",3,"click"],[1,"fab","fa-whatsapp"],[1,"btn",3,"routerLink"],[1,"btns_icons"],["target","_blank","rel","nofollow,noopener","class","btn_icon",3,"href",4,"ngIf"],["target","_blank","rel","nofollow,noopener",1,"btn_icon",3,"href"],["src","assets/images/diseno/proyectos_vivienda/icon_360.svg","width","20","height","20","alt",""],[1,"fas","fa-map-marker-alt"],[2,"text-align","center"],[1,"s_futuros_proyectos"],[1,"swiper","swiperFuturos"],[1,"swiper-wrapper"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"swiper-button-next"],[1,"swiper-button-prev"],[1,"swiper-pagination"],[1,"swiper-slide"],[1,"c_futuros_proyectos"],[1,"info_fp"],[3,"innerHTML"],[1,"btn","contacto_h",3,"href"],[1,"img_fp"],["width","1280","height","720",3,"src","alt","title"],[1,"cont_proyecto_eject",3,"ngClass"],[1,"info_pe"],[1,"title_pe"],[1,"lugar"],[1,"info_datos_pe"],[1,"c_slider_pe"],[1,"swiper","swiperPe"],["width","530","height","390",3,"src","alt"]],template:function(n,o){if(1&n){const d=t.EpF();t.TgZ(0,"body",0)(1,"section",1)(2,"div",2)(3,"div",2),t._UZ(4,"app-breadcrumb"),t.qZA(),t.TgZ(5,"div",3),t._UZ(6,"h1",4),t.TgZ(7,"div",5)(8,"div",6),t.NdJ("click",function(){return o.toogleContainerSearch()}),t.TgZ(9,"h3"),t._uU(10),t.qZA(),t.TgZ(11,"a",7),t._UZ(12,"span",8),t.qZA()(),t.TgZ(13,"form",9)(14,"select",10,11),t.NdJ("change",function(){t.CHM(d);const x=t.MAs(15);return t.KtG(o.getCiudad(x.value))}),t.TgZ(16,"option",12),t._uU(17,"Ciudad"),t.qZA(),t.YNc(18,b,2,2,"option",13),t.qZA(),t.TgZ(19,"select",14,15),t.NdJ("change",function(){t.CHM(d);const x=t.MAs(20);return t.KtG(o.getTipo(x.value))}),t.TgZ(21,"option",12),t._uU(22,"Tipo de vivienda"),t.qZA(),t.YNc(23,j,2,2,"option",13),t.qZA(),t.TgZ(24,"select",16,17),t.NdJ("change",function(){t.CHM(d);const x=t.MAs(25);return t.KtG(o.getPrecio(x.value))}),t.TgZ(26,"option",12),t._uU(27,"Precio"),t.qZA(),t.YNc(28,T,2,2,"option",13),t.qZA(),t.TgZ(29,"div",18)(30,"button",19),t.NdJ("click",function(){return o.limpiarFiltros()}),t._uU(31,"Limpiar "),t._UZ(32,"span",20),t.qZA(),t.TgZ(33,"button",21),t.NdJ("click",function(){return o.buscarProyectos()}),t._uU(34,"Buscar "),t._UZ(35,"span",8),t.qZA()()()()()()(),t.TgZ(36,"section",22)(37,"div",2)(38,"div",23),t.YNc(39,U,25,21,"div",24),t.YNc(40,k,2,0,"p",25),t.qZA()()(),t.YNc(41,L,7,1,"section",26),t.TgZ(42,"section",27)(43,"div",2)(44,"div",28),t._UZ(45,"div",29)(46,"app-executed-projects-slide-pag"),t.YNc(47,V,26,10,"div",30),t.qZA()()(),t._UZ(48,"app-wpp-modal-project",31),t.qZA()}2&n&&(t.xp6(6),t.Q6J("innerHTML",o.data.titulo_proyecto_vivienda,t.oJD),t.xp6(4),t.hij(" ",o.data.titulo_busqueda," "),t.xp6(8),t.Q6J("ngForOf",o.ciudades),t.xp6(5),t.Q6J("ngForOf",o.typesProject),t.xp6(5),t.Q6J("ngForOf",o.precios),t.xp6(11),t.Q6J("ngForOf",o.proyectos),t.xp6(1),t.Q6J("ngIf",!o.proyectos_ver),t.xp6(1),t.Q6J("ngIf",o.banners.length>0),t.xp6(4),t.Q6J("innerHTML",o.data.subtitulo_proyectos_ejecutados,t.oJD),t.xp6(2),t.Q6J("ngForOf",o.ejecutados),t.xp6(1),t.Q6J("modalEvent",o.notifyChanges.asObservable())("project",o.projectSelectedToModal))},dependencies:[_.mk,_.sg,_.O5,_.PC,h.yS,C.L,y.B,M.m],styles:['.s_proyecto_vivienda[_ngcontent-%COMP%]{background:linear-gradient(180deg,rgba(233,237,247,0) 0%,#E8EBF1 72.6%),#FFFFFF;min-height:340px;position:relative}.s_proyecto_vivienda[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:-2px;background:url(curva_bg.74ca4e612261135c.svg) no-repeat;background-size:cover;background-position:center top;z-index:1;width:100%;height:100%;max-height:145px;pointer-events:none}.c_proyecto_vivienda[_ngcontent-%COMP%]{position:relative}.c_proyecto_vivienda[_ngcontent-%COMP%]:before, .c_proyecto_vivienda[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;background:url(puntos.6e47c7cee921d0de.svg) no-repeat center;width:20px;height:70px}.c_proyecto_vivienda[_ngcontent-%COMP%]:after{right:0;left:initial;top:initial;bottom:0;transform:rotate(180deg)}.filtro_proyectos[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;background:#FFFFFF;box-shadow:0 2px 20px -3px #33427740;border-radius:39px;padding:8px 20px;max-width:920px;margin:0 auto}.filtro_proyectos[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:none;border-radius:0;border:0;border-bottom:1px solid #DADADA;padding:5px;color:#666;font-size:14px;cursor:pointer}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:130px}.s_cards_proyectos[_ngcontent-%COMP%]{padding:0 0 40px;position:relative;z-index:1;transform:translateY(-80px)}.c_cards_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}.card_p[_ngcontent-%COMP%]{overflow:hidden;background:#FFFFFF;box-shadow:0 19px 41px -18px #23386273;border-radius:24px;display:inline-grid;max-width:400px}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;max-height:219px;width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover}.card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%]{text-align:center;position:absolute;left:10px;top:10px;border-radius:100px;padding:8px 20px;color:#fff;font-weight:600;font-size:14px;z-index:1}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:10px;right:10px;border-radius:6px;background:var(--color-grad_azul_osc);width:80px;height:40px;z-index:1;overflow:hidden}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{position:absolute;left:0;right:0;height:80%;width:1px;background-color:#a5a5a5;margin:auto;z-index:2}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;display:flex;justify-content:center;align-items:center;width:26px;height:26px;transition:.3s ease;width:100%;height:100%;position:relative}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{content:"";background-color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px;color:#fff;display:inline-flex;justify-content:center;align-items:center}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{background-color:#2e3b85;padding:10px;display:grid;grid-template-columns:80px 1fr;align-items:center;gap:20px;position:relative;min-height:54px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-width:87px;border-radius:100px;border:5px solid #FFFFFF;background-color:#fff;position:absolute;width:90px;height:90px;box-shadow:0 5px 15px -5px #00000054;left:10px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{grid-column:2;color:#fff;font-size:15px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 20px;text-align:center;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:34px;font-weight:900;display:flex;align-items:center;gap:10px;text-align:center;justify-content:center}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;display:inline-block}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]{width:100%;background:linear-gradient(90deg,rgba(238,238,238,.5) 0%,#EEEEEE 48.96%,rgba(238,238,238,.5) 100%);display:flex;align-items:center;justify-content:center;gap:10px;padding:10px}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:center;padding:10px}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover{color:#060b29}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(180deg,#5FFC7B 0%,#26D044 100%);border-radius:6px;display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:22px;color:#fff;font-weight:500}.card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;justify-self:flex-end}.act_filtro_mobile[_ngcontent-%COMP%]{display:none;color:var(--color-c2);font-size:18px;align-items:center;justify-content:center;gap:10px;background:#FFF;padding:20px;border-radius:10px}.container_filtro[_ngcontent-%COMP%]{position:relative}.cont_filtr_btns[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:20px;padding-left:10px;border-left:1px solid #DADADA}.s_futuros_proyectos[_ngcontent-%COMP%]{position:relative;width:100%;min-height:460px}.s_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;background:url(curva_sup.06bd114afc8325f1.svg) no-repeat center;background-size:cover;background-position:center bottom;width:100%;height:100%;max-height:40px;top:-2px;left:0;right:0;z-index:2}.s_futuros_proyectos[_ngcontent-%COMP%]:after{content:"";position:absolute;background:url(curva_inf.deffcb1dc6e96b2c.svg) no-repeat center;background-size:cover;background-position:center top;width:100%;height:100%;max-height:40px;bottom:-2px;left:0;right:0;z-index:2}.c_futuros_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:stretch;position:relative;min-height:460px}.c_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:0;bottom:0;width:400px;height:300px;border-radius:100%;background:rgba(54,107,236,.35);filter:blur(54px);margin:auto;mix-blend-mode:lighten}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{background:url(bg_futuros.22b0bf68c0483482.jpg),linear-gradient(107.08deg,#4565B3 0%,#2B478B 31.11%,#13203E 100%);background-blend-mode:multiply;background-size:cover;background-position:center;padding:0 100px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;height:100%;position:relative;z-index:1;gap:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:before, .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{content:"";position:absolute;width:20px;height:70px;background:url(puntos.6e47c7cee921d0de.svg) no-repeat center;background-size:contain;left:3%;top:20%}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{right:3%;bottom:20%;top:initial;left:initial;transform:rotate(180deg)}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{letter-spacing:.365em;text-transform:uppercase;color:#ffed00;font-weight:600;font-size:20px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:900;color:#fff;font-size:40px;max-width:500px;line-height:1.1}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]{width:100%;height:100%}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{background:#182360;border:3px solid #FAFAFA;border-radius:100px;width:35px;height:35px}.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-button-prev[_ngcontent-%COMP%]:after{font-size:16px;font-weight:800;color:#fff}.swiper-pagination[_ngcontent-%COMP%]{bottom:60px!important}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{background-color:#fff;width:10px;border-radius:100px;height:10px;transition:.4s ease}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%]{width:20px}.swiper-button-prev[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]{left:25px}.swiper-button-next[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{right:25px}.s_proyectos_ejecutados[_ngcontent-%COMP%]{padding:30px 0}.cont_proyecto_logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:1px solid #E4E4E4;max-width:100px;cursor:pointer;position:relative;z-index:1;transition:.4s ease;border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:0;width:70px;height:60px;border-radius:100%;margin:auto;z-index:-1;background:#333663;opacity:0;filter:blur(26px);transition:.4s ease}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.2) translateY(0);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{opacity:.58;bottom:-20px}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{transform:scale(1.05) translateY(-15px);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before{opacity:.58;bottom:-10px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.holder[_ngcontent-%COMP%]{width:100%;max-width:750px;margin:0 auto;display:flex;justify-content:space-between;padding:20px 0}[_nghost-%COMP%]     .holder a:not(.jp-previous, .jp-next)[_ngcontent-%COMP%], [_nghost-%COMP%]     .holder span{display:none}[_nghost-%COMP%]     .holder .jp-previous, [_nghost-%COMP%]     .holder .jp-next{color:#182360!important;font-weight:700;font-size:15px;cursor:pointer}[_nghost-%COMP%]     .holder .jp-previous.jp-disabled, [_nghost-%COMP%]     .holder .jp-next.jp-disabled{opacity:.5}.cont_proyecto_eject[_ngcontent-%COMP%]{display:none;grid-template-columns:1fr 1fr;justify-content:center;width:100%;align-items:stretch;background:url(/assets/images/diseno/proyectos_vivienda/bg_pe.jpg),rgba(10,16,45,.9215686275);border-radius:48px 48px 97px;background-blend-mode:multiply;background-size:cover;position:relative;margin:0 0 40px}.cont_proyecto_eject[_ngcontent-%COMP%]:before{content:"";position:absolute;left:10%;top:0;bottom:0;margin:auto;mix-blend-mode:lighten;max-width:400px;width:100%;max-height:300px;height:100%;border-radius:100%;background:rgba(54,107,236,.3490196078);filter:blur(54px);pointer-events:none}.cont_proyecto_eject.active[_ngcontent-%COMP%]{display:grid}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{position:relative;padding:40px 100px;z-index:1;display:flex;flex-direction:column;gap:20px;color:#fff;align-items:flex-start;justify-content:center}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;text-shadow:0px 3px 1px rgba(0,0,0,.17);letter-spacing:.62em;font-weight:400}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:52px;font-weight:800;text-transform:uppercase;background:linear-gradient(180deg,#FFFFFF,#FFFFFF,#9297b7);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0px 3px 1px rgba(0,0,0,.17)}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:20px;border-bottom:1px solid rgba(215,215,215,.6235294118);font-weight:700}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{height:100%}.info_datos_pe[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:4px;font-size:18px;font-weight:300}.info_datos_pe[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:700}.c_slider_pe[_ngcontent-%COMP%]{border-radius:100px 0 95px;overflow:hidden;max-height:380px}.c_slider_pe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover}.tabs_proyectos_eject[_ngcontent-%COMP%]{margin:0 0 40px}@media screen and (max-width: 1200px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:40px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:0 20px 0 80px;gap:20px}}@media screen and (max-width: 1050px){.c_proyecto_vivienda[_ngcontent-%COMP%]:after{bottom:initial;top:0}.act_filtro_mobile[_ngcontent-%COMP%]{display:flex}.filtro_proyectos[_ngcontent-%COMP%]{display:none;flex-direction:column;position:absolute;z-index:10;padding:20px;width:100%;top:70px;border-radius:10px}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:initial}.cont_filtr_btns[_ngcontent-%COMP%]{border:0}.cont_proyecto_eject[_ngcontent-%COMP%]{grid-template-columns:1fr}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{gap:10px}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{max-height:300px}}@media screen and (max-width: 768px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:20px;min-height:340px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:18px}.c_futuros_proyectos[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:initial}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:80px 20px 20px;min-height:380px}.swiperFuturos[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .swiperFuturos[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{top:13%}.cont_proyecto_eject[_ngcontent-%COMP%]:before{display:none}}@media screen and (max-width: 480px){.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:30px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 10px}}']}),e})(),canActivate:[O]}];let D=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.Bz.forChild(B),h.Bz]}),e})();var q=r(5626),I=r(529);let J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[_.ez,D,q.h,I.JF,C.L,y.B,M.m]}),e})()},221:(w,P,r)=>{r.d(P,{Y:()=>O});var _=r(5861),h=r(2340),u=r(3905),t=r(8256),m=r(529);const{api_url:p}=h.N;let O=(()=>{class l{constructor(i){this._http=i}getCitiesByProjectType(i){var c=this;return(0,_.Z)(function*(){return(0,u.z)(c._http.get(`${p}v1/getCitiesByProjectType?project_type=${i}`)).then().catch(g=>(console.warn(g),!1))})()}getHousingTypesByType(i){var c=this;return(0,_.Z)(function*(){return(0,u.z)(c._http.get(`${p}v1/getHousingTypesByType?project_type=${i}`)).then().catch(g=>(console.warn(g),!1))})()}getFeaturedProjects(){var i=this;return(0,_.Z)(function*(){return(0,u.z)(i._http.get(`${p}v1/getProyectosDestacados`)).then().catch(a=>(console.warn(a),!1))})()}getProyectosByTipo(i,c,a,g,C){var y=this;return(0,_.Z)(function*(){return y._http.get(`${p}v1/getProyectosByTipo?tipo=${i}&ciudad=${c}&tipo_proyecto=${a}&precio=${g}&limite=${C}`).toPromise().then().catch(b=>(console.warn(b),!1))})()}getProyectoByUrl(i){var c=this;return(0,_.Z)(function*(){return c._http.get(`${p}v1/getProyectoByUrl?friendly_url=${i}`).toPromise().then().catch(g=>(console.warn(g),!1))})()}getCalculoPorcentaje(i,c,a,g,C){var y=this;return(0,_.Z)(function*(){return y._http.get(`${p}v1/getCalculoPorcentaje?valorProyecto=${i}&porcentaje=${c}&cuotasinicialfinanciar=${a}&plazo=${g}&valorafinanciaranios=${C}`).toPromise().then().catch(b=>(console.warn(b),!1))})()}getCalculoCuota(i,c){var a=this;return(0,_.Z)(function*(){return a._http.get(`${p}v1/getCalculoCuota?cuota=${c}&saldocuotainicial=${i}`).toPromise().then().catch(C=>(console.warn(C),!1))})()}getPlazoanios(i,c){var a=this;return(0,_.Z)(function*(){return a._http.get(`${p}v1/getPlazoanios?cuota=${i}&valorafinanciar=${c}`).toPromise().then().catch(C=>(console.warn(C),!1))})()}setCalculadoraForm(i){return this._http.post(`${p}v1/setCalculadoraForm`,JSON.stringify(i)).toPromise().then().catch(a=>(console.warn(a),!1))}getCategoriasInteres(i){var c=this;return(0,_.Z)(function*(){return c._http.get(`${p}v1/getCategoriasInteres?id_proyecto=${i}`).toPromise().then().catch(g=>(console.warn(g),!1))})()}getSitiosInteres(i,c){var a=this;return(0,_.Z)(function*(){return a._http.get(`${p}v1/getSitiosInteres?id_proyecto=${c}&id_categoria=${i}`).toPromise().then().catch(C=>(console.warn(C),!1))})()}getSeoContentProject(i){var c=this;return(0,_.Z)(function*(){return c._http.get(`${p}v1/getSeoContentProject?friendly_url=${i}`).toPromise().then().catch(g=>(console.warn(g),!1))})()}getPreciosProyectos(i){var c=this;return(0,_.Z)(function*(){return c._http.get(`${p}v1/getPreciosProyectos?tipo=${i}`).toPromise().then()})()}createContactWppProject(i){var c=this;return(0,_.Z)(function*(){return c._http.post(`${p}v1/createContactWppProject`,i).toPromise().then()})()}}return l.\u0275fac=function(i){return new(i||l)(t.LFG(m.eN))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},8830:(w,P,r)=>{r.d(P,{v:()=>m});var _=r(6895),h=r(8256),u=r(1481),t=r(5480);let m=(()=>{class p{constructor(l,f,i,c){this.meta=l,this.pageService=f,this.doc=i,this.titlePage=c}updateCanonicalUrl(l=""){let f=this.doc.querySelector("link[rel='canonical']")||null;f||(f=this.doc.createElement("link")),f.setAttribute("rel","canonical"),f.setAttribute("href",l||this.doc.URL),this.doc.head.appendChild(f)}setUpMetaTags(l){if(l){var f="";""!=l.canonical&&(f=l.canonical),this.updateCanonicalUrl(f),this.titlePage.setTitle(l.title),this.meta.updateTag({name:"description",content:l.metadescription}),this.meta.updateTag({name:"robots",content:l.metarobots})}}}return p.\u0275fac=function(l){return new(l||p)(h.LFG(u.h_),h.LFG(t.P),h.LFG(_.K0),h.LFG(u.Dx))},p.\u0275prov=h.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);
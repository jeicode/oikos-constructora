"use strict";(self.webpackChunkoikos_constructora=self.webpackChunkoikos_constructora||[]).push([[344],{5344:(A,d,i)=>{i.r(d),i.d(d,{EjecutadosModule:()=>k});var g=i(6895),s=i(5906),a=i(5861),t=i(8256),l=i(5480),C=i(8830);let x=(()=>{class e{constructor(n,o,c){this.pageService=n,this.router=o,this.seoService=c}canActivate(n,o){var c=this;return(0,a.Z)(function*(){const p=yield c.pageService.getSeoContentPage("proyectos-ejecutados");return null!=p?.friendly_url?(c.pageService.currentPage=p,c.seoService.setUpMetaTags(p),!0):(c.router.navigateByUrl("404",{skipLocationChange:!0}),!1)})()}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(l.P),t.LFG(s.F0),t.LFG(C.v))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var P=i(2340),M=i(1096),h=i(4130),O=i(221),u=i(5141),f=i(1299);function y(e,r){if(1&e&&(t.TgZ(0,"option",27),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.s9C("value",null==n?null:n.id),t.xp6(1),t.Oqu(null==n?null:n.field_content)}}function m(e,r){if(1&e&&(t.TgZ(0,"option",27),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.s9C("value",null==n?null:n.id),t.xp6(1),t.Oqu(null==n?null:n.field_content)}}function b(e,r){if(1&e&&(t.TgZ(0,"div",36)(1,"a",37),t._UZ(2,"span",38),t.qZA()()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.s9C("href",null==n?null:n.url_waze,t.LSH)}}function v(e,r){if(1&e&&(t.TgZ(0,"div",28)(1,"picture"),t.YNc(2,b,3,1,"div",29),t._UZ(3,"img",30),t.qZA(),t.TgZ(4,"h2",31)(5,"picture"),t._UZ(6,"img",32),t.qZA(),t.TgZ(7,"div"),t._uU(8),t.qZA()(),t.TgZ(9,"div",33)(10,"h3"),t._uU(11),t.qZA()(),t.TgZ(12,"div",34)(13,"a",35),t._uU(14,"Ver proyecto"),t.qZA()()()),2&e){const n=r.$implicit,o=t.oxw();t.xp6(2),t.Q6J("ngIf",""!=(null==n?null:n.url_waze)||null!=(null==n?null:n.url_waze)||""!=(null==n?null:n.url_waze)),t.xp6(1),t.s9C("src",o.imagenes_url+(null==n?null:n.imagen_principal_proyecto),t.LSH),t.s9C("alt",null==n?null:n.alt_fondo),t.s9C("title",null==n?null:n.title_fondo),t.xp6(3),t.s9C("src",o.imagenes_url+(null==n?null:n.logo_proyecto),t.LSH),t.s9C("alt",null==n?null:n.alt_logo),t.s9C("title",null==n?null:n.title_logo),t.xp6(2),t.Oqu(null==n?null:n.titulo_proyecto),t.xp6(3),t.AsE("",null==n?null:n.zona_proyecto," / ",null==n?null:n.ubicacion_proyecto,""),t.xp6(2),t.MGl("routerLink","/proyecto/",null==n?null:n.url_amigable,"")}}function j(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",39),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.cargarMas())}),t.TgZ(1,"div",40),t._uU(2,"Cargar m\xe1s proyectos"),t.qZA()()}}const w=[{path:"",component:(()=>{class e{constructor(n,o,c,p,_){this.pageService=n,this.router=o,this.responsiveService=c,this.configServ=p,this.projService=_,this.data=[],this.general=[],this.proyectos=[],this.total=[],this.imagenes_url="",this.limt=12,this.ciudad=[],this.ciudades=[],this.typesProject=[],this.tipo_search=[],this.precio_search=[],this.proyectos_ver=!1,this.imagenes_url=P.N.imagenes_url,this.suscribeListenRouter=this.router.events.subscribe(T=>{T instanceof s.m2&&this.configServ.goUpPage()})}ngOnInit(){this.init(),this.pageService.closeNav()}init(){var n=this;return(0,a.Z)(function*(){const o=[()=>n.getData(),()=>n.getProyectos(),()=>n.getSecciones()];for(const c of o)yield c()})()}getData(){var n=this;return(0,a.Z)(function*(){n.data=yield n.pageService.getContentPage("proyectos-ejecutados")})()}getProyectos(){var n=this;return(0,a.Z)(function*(){n.proyectos=yield n.projService.getProyectosByTipo("4","NA","NA","NA",n.limt),n.total=yield n.projService.getProyectosByTipo("4")})()}cargarMas(){this.limt+=12,this.getProyectos()}toogleContainerSearch(){if(this.responsiveService.isMobile){const n=document.querySelector(".filtro_proyectos");$(n).slideToggle().css("display","flex")}}getCiudad(n){this.ciudad=n}getTipo(n){this.tipo_search=n}getPrecio(n){this.precio_search=n}limpiarFiltros(){var n=this;return(0,a.Z)(function*(){n.toogleContainerSearch(),n.getProyectos(),$(".filtroCiudad").val("NA"),$(".filtroTipo").val("NA"),$(".filtroPrecio").val("NA")})()}buscarProyectos(){var n=this;return(0,a.Z)(function*(){n.toogleContainerSearch(),n.proyectos=yield n.projService.getProyectosByTipo("4",n.ciudad,n.tipo_search),n.proyectos_ver=0!=n.proyectos.length})()}getSecciones(){var n=this;return(0,a.Z)(function*(){const o=yield n.projService.getCitiesByProjectType("4");o&&(n.ciudades=o);const c=yield n.projService.getHousingTypesByType("4");c&&(n.typesProject=c)})()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.P),t.Y36(s.F0),t.Y36(M.k),t.Y36(h.E),t.Y36(O.Y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ejecutados"]],decls:51,vars:6,consts:[[1,"s_proyecto_vivienda"],[1,"cnt_central"],[1,"title_section","al_center"],[1,"c_proyecto_vivienda"],[1,"title_section","al_center",3,"innerHTML"],[1,"container_filtro"],[1,"act_filtro_mobile",3,"click"],[1,"btn_icon_search"],[1,"fas","fa-search"],[1,"filtro_proyectos"],[1,"filtroCiudad",3,"change"],["nomCiudad",""],["value","NA","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"filtroTipo",3,"change"],["nomTipo",""],[1,"cont_filtr_btns"],["type","button",1,"btn_link_reset",3,"click"],[1,"fas","fa-times"],["type","button",1,"btn",3,"click"],[1,"s_list_proy_dest"],[1,"cnt_list_proy_ejec"],["class","card_p proy_dest",4,"ngFor","ngForOf"],["class","row_bnt",3,"click",4,"ngIf"],[1,"s_carr_proy"],[1,"bg_round"],[1,"cnt_car_proy_dest"],[3,"value"],[1,"card_p","proy_dest"],["class","btns_icons",4,"ngIf"],["width","350","height","219",3,"src","alt","title"],[1,"name_proyecto"],["width","87","height","87",3,"src","alt","title"],[1,"datos_proyecto"],[1,"ctas_proyectos"],[1,"btn",3,"routerLink"],[1,"btns_icons"],["target","_blank","rel","nofollow,noopener",1,"btn_icon",3,"href"],[1,"fas","fa-map-marker-alt"],[1,"row_bnt",3,"click"],[1,"btn"]],template:function(n,o){if(1&n){const c=t.EpF();t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-breadcrumb"),t.TgZ(3,"h1",2)(4,"span"),t._uU(5,"Proyectos "),t.qZA(),t._uU(6," Ejecutados "),t.qZA()(),t.TgZ(7,"div",3),t._UZ(8,"h1",4),t.TgZ(9,"div",5)(10,"div",6),t.NdJ("click",function(){return o.toogleContainerSearch()}),t.TgZ(11,"h3"),t._uU(12),t.qZA(),t.TgZ(13,"a",7),t._UZ(14,"span",8),t.qZA()(),t.TgZ(15,"form",9)(16,"select",10,11),t.NdJ("change",function(){t.CHM(c);const _=t.MAs(17);return t.KtG(o.getCiudad(_.value))}),t.TgZ(18,"option",12),t._uU(19,"Ciudad"),t.qZA(),t.YNc(20,y,2,2,"option",13),t.qZA(),t.TgZ(21,"select",14,15),t.NdJ("change",function(){t.CHM(c);const _=t.MAs(22);return t.KtG(o.getTipo(_.value))}),t.TgZ(23,"option",12),t._uU(24,"Tipo de vivienda"),t.qZA(),t.YNc(25,m,2,2,"option",13),t.qZA(),t.TgZ(26,"div",16)(27,"button",17),t.NdJ("click",function(){return o.limpiarFiltros()}),t._uU(28,"Limpiar "),t._UZ(29,"span",18),t.qZA(),t.TgZ(30,"button",19),t.NdJ("click",function(){return o.buscarProyectos()}),t._uU(31,"Buscar "),t._UZ(32,"span",8),t.qZA()()()()()(),t._UZ(33,"br")(34,"br")(35,"br"),t.TgZ(36,"section",20)(37,"div",1)(38,"div",21),t.YNc(39,v,15,11,"div",22),t.qZA(),t.YNc(40,j,3,0,"div",23),t.qZA()(),t.TgZ(41,"section",24)(42,"span",25),t._UZ(43,"span"),t.qZA(),t.TgZ(44,"div",1)(45,"h2",2)(46,"span"),t._uU(47,"Proyectos "),t.qZA(),t._uU(48," en venta"),t.qZA(),t.TgZ(49,"div",26),t._UZ(50,"app-slide-projects"),t.qZA()()()}2&n&&(t.xp6(8),t.Q6J("innerHTML",o.data.titulo_proyecto_vivienda,t.oJD),t.xp6(4),t.hij(" ",o.data.titulo_busqueda," "),t.xp6(8),t.Q6J("ngForOf",o.ciudades),t.xp6(5),t.Q6J("ngForOf",o.typesProject),t.xp6(14),t.Q6J("ngForOf",o.proyectos),t.xp6(1),t.Q6J("ngIf",o.total.length>o.proyectos.length))},dependencies:[g.sg,g.O5,s.yS,u.L,f.L],styles:['.cnt_gen_proy_ejec[_ngcontent-%COMP%]{position:relative;width:100%}.cnt_gen_proy_ejec[_ngcontent-%COMP%]   .s_proyecto_vivienda[_ngcontent-%COMP%]{min-height:240px}.s_list_proy_dest[_ngcontent-%COMP%]{margin-top:0;position:relative;z-index:1;padding:0 0 64px}.s_list_proy_dest[_ngcontent-%COMP%]   .row_bnt[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:56px 0 0}.cnt_list_proy_ejec[_ngcontent-%COMP%]{width:100%;max-width:1112px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:30px}.proy_dest[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{width:37px}.proy_dest[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:4px 8px}.proy_dest[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{display:none}.proy_dest[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:flex}.proy_dest[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{justify-content:center}@media screen and (max-width: 1050px){.cnt_list_proy_ejec[_ngcontent-%COMP%]{gap:16px}}@media screen and (max-width: 768px){.cnt_list_proy_ejec[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{width:70px;height:70px}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{grid-template-columns:60px 1fr}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:20px 16px 8px}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}}@media screen and (max-width: 480px){.s_carr_proy[_ngcontent-%COMP%]{padding-bottom:0}.cnt_list_proy_ejec[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 16px}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{height:200px}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{object-fit:cover}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{width:60px;height:60px}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{grid-template-columns:50px 1fr}.cnt_car_proy_dest[_ngcontent-%COMP%]{padding-top:0}.cnt_car_proy_dest[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.cnt_car_proy_dest[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]{right:-12px}.cnt_car_proy_dest[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{left:-12px}}.s_proyecto_vivienda[_ngcontent-%COMP%]{background:linear-gradient(180deg,rgba(233,237,247,0) 0%,#E8EBF1 72.6%),#FFFFFF;min-height:340px;position:relative}.s_proyecto_vivienda[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:-2px;background:url(curva_bg.2b0569ad9051fa6d.svg) no-repeat;background-size:cover;background-position:center top;z-index:1;width:100%;height:100%;max-height:145px;pointer-events:none}.c_proyecto_vivienda[_ngcontent-%COMP%]{position:relative}.c_proyecto_vivienda[_ngcontent-%COMP%]:before, .c_proyecto_vivienda[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;background:url(puntos.751d6b73ac110942.svg) no-repeat center;width:20px;height:70px}.c_proyecto_vivienda[_ngcontent-%COMP%]:after{right:0;left:initial;top:initial;bottom:0;transform:rotate(180deg)}.filtro_proyectos[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;background:#FFFFFF;box-shadow:0 2px 20px -3px #33427740;border-radius:39px;padding:8px 20px;max-width:920px;margin:0 auto}.filtro_proyectos[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:none;border-radius:0;border:0;border-bottom:1px solid #DADADA;padding:5px;color:#666;font-size:14px;cursor:pointer}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:130px}.s_cards_proyectos[_ngcontent-%COMP%]{padding:0 0 40px;position:relative;z-index:1;transform:translateY(-80px)}.c_cards_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}.card_p[_ngcontent-%COMP%]{overflow:hidden;background:#FFFFFF;box-shadow:0 19px 41px -18px #23386273;border-radius:24px;display:inline-grid}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;max-height:219px;width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%]{text-align:center;position:absolute;left:10px;top:10px;border-radius:100px;padding:8px 20px;color:#282828;font-weight:600;font-size:14px;z-index:1}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:10px;right:10px;border-radius:6px;background:var(--color-grad_azul_osc);width:80px;height:40px;z-index:1;overflow:hidden}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;height:80%;width:1px;background-color:#a5a5a5;margin:auto;z-index:2}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;display:flex;justify-content:center;align-items:center;width:26px;height:26px;transition:.3s ease;width:100%;height:100%;position:relative}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{content:"";background-color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px;color:#fff;display:inline-flex;justify-content:center;align-items:center}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{background-color:#2e3b85;padding:10px;display:grid;grid-template-columns:80px 1fr;align-items:center;gap:20px;position:relative;min-height:54px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-width:87px;border-radius:100px;border:5px solid #FFFFFF;background-color:#fff;position:absolute;width:90px;height:90px;box-shadow:0 5px 15px -5px #00000054;left:10px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{grid-column:2;color:#fff;font-size:15px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 20px;text-align:center;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:34px;font-weight:900;display:flex;align-items:center;gap:10px;text-align:center;justify-content:center}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;display:inline-block}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]{width:100%;background:linear-gradient(90deg,rgba(238,238,238,.5) 0%,#EEEEEE 48.96%,rgba(238,238,238,.5) 100%);display:flex;align-items:center;justify-content:center;gap:10px;padding:10px}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto;align-items:center;padding:10px}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover{color:#060b29}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(180deg,#5FFC7B 0%,#26D044 100%);border-radius:6px;display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:22px;color:#fff;font-weight:500}.card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;justify-self:flex-end}.act_filtro_mobile[_ngcontent-%COMP%]{display:none;color:var(--color-c2);font-size:18px;align-items:center;justify-content:center;gap:10px;background:#FFF;padding:20px;border-radius:10px}.container_filtro[_ngcontent-%COMP%]{position:relative}.cont_filtr_btns[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:20px;padding-left:10px;border-left:1px solid #DADADA}.s_futuros_proyectos[_ngcontent-%COMP%]{position:relative;width:100%;min-height:460px}.s_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;background:url(curva_sup.d87a1a75f613ec17.svg) no-repeat center;background-size:cover;background-position:center bottom;width:100%;height:100%;max-height:40px;top:-2px;left:0;right:0;z-index:2}.s_futuros_proyectos[_ngcontent-%COMP%]:after{content:"";position:absolute;background:url(curva_inf.34d86ba594172014.svg) no-repeat center;background-size:cover;background-position:center top;width:100%;height:100%;max-height:40px;bottom:-2px;left:0;right:0;z-index:2}.c_futuros_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:stretch;position:relative;min-height:460px}.c_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:0;bottom:0;width:400px;height:300px;border-radius:100%;background:rgba(54,107,236,.35);filter:blur(54px);margin:auto;mix-blend-mode:lighten}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{background:url(bg_futuros.22b0bf68c0483482.jpg),linear-gradient(107.08deg,#4565B3 0%,#2B478B 31.11%,#13203E 100%);background-blend-mode:multiply;background-size:cover;background-position:center;padding:0 100px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;height:100%;position:relative;z-index:1;gap:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:before, .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{content:"";position:absolute;width:20px;height:70px;background:url(puntos.751d6b73ac110942.svg) no-repeat center;background-size:contain;left:3%;top:20%}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{right:3%;bottom:20%;top:initial;left:initial;transform:rotate(180deg)}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{letter-spacing:.365em;text-transform:uppercase;color:#ffed00;font-weight:600;font-size:20px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:900;color:#fff;font-size:40px;max-width:500px;line-height:1.1}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]{width:100%;height:100%}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{background:#182360;border:3px solid #FAFAFA;border-radius:100px;width:35px;height:35px}.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-button-prev[_ngcontent-%COMP%]:after{font-size:16px;font-weight:800;color:#fff}.swiper-pagination[_ngcontent-%COMP%]{bottom:60px!important}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{background-color:#fff;width:10px;border-radius:100px;height:10px;transition:.4s ease}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%]{width:20px}.swiper-button-prev[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]{left:25px}.swiper-button-next[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{right:25px}.s_proyectos_ejecutados[_ngcontent-%COMP%]{padding:30px 0}.cont_proyecto_logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:1px solid #E4E4E4;max-width:100px;cursor:pointer;position:relative;z-index:1;transition:.4s ease;border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:0;width:70px;height:60px;border-radius:100%;margin:auto;z-index:-1;background:#333663;opacity:0;filter:blur(26px);transition:.4s ease}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.2) translateY(0);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{opacity:.58;bottom:-20px}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{transform:scale(1.05) translateY(-15px);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before{opacity:.58;bottom:-10px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.holder[_ngcontent-%COMP%]{width:100%;max-width:750px;margin:0 auto;display:flex;justify-content:space-between;padding:20px 0}.holder[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.jp-previous, .jp-next)[_ngcontent-%COMP%]{display:none}.holder[_ngcontent-%COMP%]   .jp-previous[_ngcontent-%COMP%], .holder[_ngcontent-%COMP%]   .jp-next[_ngcontent-%COMP%]{color:#182360;font-weight:700;font-size:15px;cursor:pointer}.holder[_ngcontent-%COMP%]   .jp-previous.jp-disabled[_ngcontent-%COMP%], .holder[_ngcontent-%COMP%]   .jp-next.jp-disabled[_ngcontent-%COMP%]{opacity:.5}.cont_proyecto_eject[_ngcontent-%COMP%]{display:none;grid-template-columns:1fr 1fr;justify-content:center;width:100%;align-items:stretch;background:url(bg_pe.ec3fb9feb5864594.jpg),rgba(10,16,45,.9215686275);border-radius:48px 48px 97px;background-blend-mode:multiply;background-size:cover;position:relative;margin:0 0 40px}.cont_proyecto_eject[_ngcontent-%COMP%]:before{content:"";position:absolute;left:10%;top:0;bottom:0;margin:auto;mix-blend-mode:lighten;max-width:400px;width:100%;max-height:300px;height:100%;border-radius:100%;background:rgba(54,107,236,.3490196078);filter:blur(54px);pointer-events:none}.cont_proyecto_eject.active[_ngcontent-%COMP%]{display:grid}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{position:relative;padding:40px 100px;z-index:1;display:flex;flex-direction:column;gap:20px;color:#fff;align-items:flex-start;justify-content:center}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;text-shadow:0px 3px 1px rgba(0,0,0,.17);letter-spacing:.62em;font-weight:400}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:52px;font-weight:800;text-transform:uppercase;background:linear-gradient(180deg,#FFFFFF,#FFFFFF,#9297b7);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0px 3px 1px rgba(0,0,0,.17)}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:20px;border-bottom:1px solid rgba(215,215,215,.6235294118);font-weight:700}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{height:100%}.info_datos_pe[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:4px;font-size:18px;font-weight:300}.info_datos_pe[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:700}.c_slider_pe[_ngcontent-%COMP%]{border-radius:100px 0 95px;overflow:hidden;max-height:380px}.c_slider_pe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover}.tabs_proyectos_eject[_ngcontent-%COMP%]{margin:0 0 40px}@media screen and (max-width: 1200px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:40px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:0 20px 0 80px;gap:20px}}@media screen and (max-width: 1050px){.c_proyecto_vivienda[_ngcontent-%COMP%]:after{bottom:initial;top:0}.act_filtro_mobile[_ngcontent-%COMP%]{display:flex}.filtro_proyectos[_ngcontent-%COMP%]{display:none;flex-direction:column;position:absolute;z-index:10;padding:20px;width:100%;top:70px;border-radius:10px}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:initial}.cont_filtr_btns[_ngcontent-%COMP%]{border:0}.cont_proyecto_eject[_ngcontent-%COMP%]{grid-template-columns:1fr}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{gap:10px}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{max-height:300px}}@media screen and (max-width: 768px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:20px;min-height:340px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:18px}.c_futuros_proyectos[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:initial}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:80px 20px 20px;min-height:380px}.swiperFuturos[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .swiperFuturos[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{top:13%}.cont_proyecto_eject[_ngcontent-%COMP%]:before{display:none}}@media screen and (max-width: 480px){.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:30px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 10px}.cnt_gen_proy_ejec[_ngcontent-%COMP%]{min-height:190px}}']}),e})(),canActivate:[x]}];let F=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(w),s.Bz]}),e})();var Z=i(5626),z=i(529);let k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,F,z.JF,Z.h,u.L,f.L]}),e})()}}]);
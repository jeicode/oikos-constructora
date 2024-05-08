import{a as E}from"./chunk-QGZK76N7.js";import"./chunk-A7F52KJG.js";import"./chunk-C7X2ZCJM.js";import{a as Q}from"./chunk-MEFGBXKH.js";import{b as z}from"./chunk-HW7VBWRH.js";import"./chunk-PZIYWDPO.js";import{a as K}from"./chunk-GOHAQDMH.js";import{a as k}from"./chunk-SDOUBX2N.js";import{u as X}from"./chunk-GRGBXFZV.js";import{Ab as Y,Bb as G,C as V,Ca as l,D as w,Da as B,Eb as S,Fb as q,Gb as A,Hb as J,I as u,J as m,Ja as j,Ka as s,La as M,Ma as L,Na as U,R as D,S as I,V as a,W as O,c as g,ca as P,db as W,eb as R,ia as d,mb as H,sa as o,ta as r,ua as _,w as N,x as b,xa as T,ya as h,z as v,za as y}from"./chunk-IQ6ZU3QK.js";var Z=(()=>{let e=class e{constructor(i,c,p){this.pageService=i,this.router=c,this.seoService=p}canActivate(i,c){return g(this,null,function*(){let p=yield this.pageService.getSeoContentPage("proyectos-ejecutados");return p?.friendly_url!=null?(this.pageService.currentPage=p,this.seoService.setUpMetaTags(p),!0):(this.router.navigateByUrl("404",{skipLocationChange:!0}),!1)})}};e.\u0275fac=function(c){return new(c||e)(v(k),v(S),v(K))},e.\u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function it(n,e){if(n&1&&(o(0,"option",29),s(1),r()),n&2){let t=e.$implicit;l("value",t==null?null:t.id),a(),M(t==null?null:t.field_content)}}function rt(n,e){if(n&1&&(o(0,"option",29),s(1),r()),n&2){let t=e.$implicit;l("value",t==null?null:t.id),a(),M(t==null?null:t.field_content)}}function ct(n,e){if(n&1&&(o(0,"option",29),s(1),r()),n&2){let t=e.$implicit;l("value",t),a(),M(t)}}function pt(n,e){if(n&1&&(o(0,"h3"),s(1),r()),n&2){let t=y().$implicit;a(),U("",t==null?null:t.zona_proyecto," / ",t==null?null:t.ubicacion_proyecto,"")}}function at(n,e){if(n&1&&(o(0,"h3"),s(1),r()),n&2){let t=y().$implicit;a(),M(t==null?null:t.ubicacion_proyecto)}}function st(n,e){if(n&1&&(o(0,"div",30)(1,"picture"),_(2,"img",31),r(),o(3,"h2",32)(4,"picture"),_(5,"img",33),r(),o(6,"div"),s(7),r()(),o(8,"div",34),P(9,pt,2,2,"h3",35)(10,at,2,1,"h3",35),o(11,"div",36),s(12),r()(),o(13,"div",37)(14,"a",38),s(15,"Ver proyecto"),r()()()),n&2){let t=e.$implicit,i=y();a(2),l("src",i.imagenes_url+(t==null?null:t.imagen_principal_proyecto),I),l("alt",t==null?null:t.alt_fondo),l("title",t==null?null:t.title_fondo),a(3),l("src",i.imagenes_url+(t==null?null:t.logo_proyecto),I),l("alt",t==null?null:t.alt_logo),l("title",t==null?null:t.title_logo),a(2),M(t==null?null:t.titulo_proyecto),a(2),d("ngIf",(t==null?null:t.zona_proyecto)!=""&&(t==null?null:t.zona_proyecto)!=null&&(t==null?null:t.zona_proyecto)!=null),a(),d("ngIf",(t==null?null:t.zona_proyecto)==""||(t==null?null:t.zona_proyecto)==null||(t==null?null:t.zona_proyecto)==null),a(2),M(t==null?null:t.descripcion_precio),a(2),B("routerLink","/proyecto/",t==null?null:t.url_amigable,"")}}function _t(n,e){if(n&1){let t=T();o(0,"div",39),h("click",function(){u(t);let c=y();return m(c.cargarMas())}),o(1,"div",40),s(2,"Cargar m\xE1s proyectos"),r()()}}var tt=(()=>{let e=class e{constructor(i,c,p,f,C){this.pageService=i,this.router=c,this.responsiveService=p,this.configServ=f,this.projService=C,this.data=[],this.general=[],this.proyectos=[],this.total=[],this.imagenes_url="",this.limt=12,this.ciudad="NA",this.ciudades=[],this.typesProject=[],this.tipo_search="NA",this.precio_search="NA",this.anios=[],this.proyectos_ver=!1,this.imagenes_url=Y.imagenes_url,this.suscribeListenRouter=this.router.events.subscribe(x=>{x instanceof G&&this.configServ.goUpPage()})}ngOnInit(){this.init(),this.pageService.closeNav()}init(){return g(this,null,function*(){let i=[()=>this.getData(),()=>this.getProyectos(),()=>this.getSecciones()];for(let c of i)yield c()})}getData(){return g(this,null,function*(){this.data=yield this.pageService.getContentPage("proyectos-ejecutados")})}getProyectos(){return g(this,null,function*(){this.proyectos=yield this.projService.getProyectosByTipo("4","NA","NA","NA",this.limt,"","descripcion_precio DESC"),this.total=yield this.projService.getProyectosByTipo("4","NA","NA","NA","","","descripcion_precio DESC"),this.anios=[];for(var i in this.proyectos)this.proyectos[i]?.descripcion_precio!=""&&this.proyectos[i]?.descripcion_precio!=null&&this.anios.push(this.proyectos[i]?.descripcion_precio)})}cargarMas(){this.limt+=12,this.getProyectos()}toogleContainerSearch(){if(this.responsiveService.isMobile){let i=document.querySelector(".filtro_proyectos");$(i).slideToggle().css("display","flex")}}getCiudad(i){this.ciudad=i}getTipo(i){this.tipo_search=i}getPrecio(i){this.precio_search=i}limpiarFiltros(){return g(this,null,function*(){this.toogleContainerSearch(),this.getProyectos(),$(".filtroCiudad").val("NA"),$(".filtroTipo").val("NA"),$(".filtroPrecio").val("NA"),this.ciudad="NA",this.tipo_search="NA",this.precio_search="NA"})}buscarProyectos(){return g(this,null,function*(){this.toogleContainerSearch(),this.proyectos=yield this.projService.getProyectosByTipo("4",this.ciudad,this.tipo_search,this.precio_search,"","","descripcion_precio DESC"),this.proyectos.length==0?this.proyectos_ver=!1:this.proyectos_ver=!0})}getSecciones(){return g(this,null,function*(){let i=yield this.projService.getCitiesByProjectType("4");i&&(this.ciudades=i);let c=yield this.projService.getHousingTypesByType("4");c&&(this.typesProject=c)})}};e.\u0275fac=function(c){return new(c||e)(O(k),O(S),O(Q),O(J),O(X))},e.\u0275cmp=V({type:e,selectors:[["app-ejecutados"]],decls:56,vars:7,consts:[["nomCiudad",""],["nomTipo",""],["nomPrecio",""],[1,"s_proyecto_vivienda"],[1,"cnt_central"],[1,"title_section","al_center"],[1,"c_proyecto_vivienda"],[1,"title_section","al_center",3,"innerHTML"],[1,"container_filtro"],[1,"act_filtro_mobile",3,"click"],[1,"btn_icon_search"],[1,"fas","fa-search"],[1,"filtro_proyectos"],[1,"filtroCiudad",3,"change"],["value","NA","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"filtroTipo",3,"change"],[1,"precio","filtroPrecio",3,"change"],[1,"cont_filtr_btns"],["type","button",1,"btn_link_reset",3,"click"],[1,"fas","fa-times"],["type","button",1,"btn",3,"click"],[1,"s_list_proy_dest"],[1,"cnt_list_proy_ejec"],["class","card_p proy_dest",4,"ngFor","ngForOf"],["class","row_bnt",3,"click",4,"ngIf"],[1,"s_carr_proy"],[1,"bg_round"],[1,"cnt_car_proy_dest"],[3,"value"],[1,"card_p","proy_dest"],["width","350","height","219",3,"src","alt","title"],[1,"name_proyecto"],["width","87","height","87",3,"src","alt","title"],[1,"datos_proyecto"],[4,"ngIf"],[1,"campo_anno"],[1,"ctas_proyectos"],[1,"btn",3,"routerLink"],[1,"row_bnt",3,"click"],[1,"btn"]],template:function(c,p){if(c&1){let f=T();o(0,"div",3)(1,"div",4),_(2,"app-breadcrumb"),o(3,"h1",5)(4,"span"),s(5,"Proyectos "),r(),s(6," Ejecutados "),r()(),o(7,"div",6),_(8,"h1",7),o(9,"div",8)(10,"div",9),h("click",function(){return u(f),m(p.toogleContainerSearch())}),o(11,"h3"),s(12),r(),o(13,"a",10),_(14,"span",11),r()(),o(15,"form",12)(16,"select",13,0),h("change",function(){u(f);let x=j(17);return m(p.getCiudad(x.value))}),o(18,"option",14),s(19,"Ciudad"),r(),P(20,it,2,2,"option",15),r(),o(21,"select",16,1),h("change",function(){u(f);let x=j(22);return m(p.getTipo(x.value))}),o(23,"option",14),s(24,"Tipo de vivienda"),r(),P(25,rt,2,2,"option",15),r(),o(26,"select",17,2),h("change",function(){u(f);let x=j(27);return m(p.getPrecio(x.value))}),o(28,"option",14),s(29,"A\xF1o"),r(),P(30,ct,2,2,"option",15),r(),o(31,"div",18)(32,"button",19),h("click",function(){return u(f),m(p.limpiarFiltros())}),s(33,"Limpiar "),_(34,"span",20),r(),o(35,"button",21),h("click",function(){return u(f),m(p.buscarProyectos())}),s(36,"Buscar "),_(37,"span",11),r()()()()()(),_(38,"br")(39,"br")(40,"br"),o(41,"section",22)(42,"div",4)(43,"div",23),P(44,st,16,12,"div",24),r(),P(45,_t,3,0,"div",25),r()(),o(46,"section",26)(47,"span",27),_(48,"span"),r(),o(49,"div",4)(50,"h2",5)(51,"span"),s(52,"Proyectos "),r(),s(53," en venta"),r(),o(54,"div",28),_(55,"app-slide-projects"),r()()()}c&2&&(a(8),d("innerHTML",p.data.titulo_proyecto_vivienda,D),a(4),L(" ",p.data.titulo_busqueda," "),a(8),d("ngForOf",p.ciudades),a(5),d("ngForOf",p.typesProject),a(5),d("ngForOf",p.anios),a(14),d("ngForOf",p.proyectos),a(),d("ngIf",p.total.length>p.proyectos.length))},dependencies:[W,R,q,E,z],styles:['.cnt_gen_proy_ejec[_ngcontent-%COMP%]{position:relative;width:100%}.cnt_gen_proy_ejec[_ngcontent-%COMP%]   .s_proyecto_vivienda[_ngcontent-%COMP%]{min-height:240px}.s_list_proy_dest[_ngcontent-%COMP%]{margin-top:0;position:relative;z-index:1;padding:0 0 64px}.s_list_proy_dest[_ngcontent-%COMP%]   .row_bnt[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:56px 0 0}.cnt_list_proy_ejec[_ngcontent-%COMP%]{width:100%;max-width:1112px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:30px}.proy_dest[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{width:37px}.proy_dest[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:4px 8px}.proy_dest[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{display:none}.proy_dest[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:flex}.proy_dest[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{justify-content:center}.campo_anno[_ngcontent-%COMP%]{width:100%;font-size:16px}@media screen and (max-width: 1050px){.cnt_list_proy_ejec[_ngcontent-%COMP%]{gap:16px}}@media screen and (max-width: 768px){.cnt_list_proy_ejec[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{width:70px;height:70px}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{grid-template-columns:60px 1fr}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:20px 16px 8px}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}}@media screen and (max-width: 480px){.s_carr_proy[_ngcontent-%COMP%]{padding-bottom:0}.cnt_list_proy_ejec[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 16px}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{height:200px}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{object-fit:cover}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{width:60px;height:60px}.cnt_list_proy_ejec[_ngcontent-%COMP%]   .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{grid-template-columns:50px 1fr}.cnt_car_proy_dest[_ngcontent-%COMP%]{padding-top:0}.cnt_car_proy_dest[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%]{padding-left:0;padding-right:0}.cnt_car_proy_dest[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]{right:-12px}.cnt_car_proy_dest[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{left:-12px}}.s_proyecto_vivienda[_ngcontent-%COMP%]{background:linear-gradient(180deg,#e9edf700,#e8ebf1 72.6%),#fff;min-height:340px;position:relative}.s_proyecto_vivienda[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:-2px;background:url("./media/curva_bg-FMCWTLMQ.svg") no-repeat;background-size:cover;background-position:center top;z-index:1;width:100%;height:100%;max-height:145px;pointer-events:none}.c_proyecto_vivienda[_ngcontent-%COMP%]{position:relative}.c_proyecto_vivienda[_ngcontent-%COMP%]:before, .c_proyecto_vivienda[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;background:url("./media/puntos-OUOWW45M.svg") no-repeat center;width:20px;height:70px}.c_proyecto_vivienda[_ngcontent-%COMP%]:after{right:0;left:initial;top:initial;bottom:0;transform:rotate(180deg)}.filtro_proyectos[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;background:#fff;box-shadow:0 2px 20px -3px #33427740;border-radius:39px;padding:8px 20px;max-width:920px;margin:0 auto}.filtro_proyectos[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:none;border-radius:0;border:0;border-bottom:1px solid #DADADA;padding:5px;color:#666;font-size:14px;cursor:pointer}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:130px}.s_cards_proyectos[_ngcontent-%COMP%]{padding:0 0 40px;position:relative;z-index:1;transform:translateY(-80px)}.c_cards_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}.card_p[_ngcontent-%COMP%]{overflow:hidden;background:#fff;box-shadow:0 19px 41px -18px #23386273;border-radius:24px;display:inline-grid}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;max-height:219px;width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%]{text-align:center;position:absolute;left:10px;top:10px;border-radius:100px;padding:8px 20px;color:#282828;font-weight:600;font-size:14px;z-index:1}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:10px;right:10px;border-radius:6px;background:var(--color-grad_azul_osc);width:80px;height:40px;z-index:1;overflow:hidden}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;height:80%;width:1px;background-color:#a5a5a5;margin:auto;z-index:2}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;display:flex;justify-content:center;align-items:center;width:26px;height:26px;transition:.3s ease;width:100%;height:100%;position:relative}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{content:"";background-color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px;color:#fff;display:inline-flex;justify-content:center;align-items:center}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{background-color:#2e3b85;padding:10px;display:grid;grid-template-columns:80px 1fr;align-items:center;gap:20px;position:relative;min-height:54px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-width:87px;border-radius:100px;border:5px solid #FFFFFF;background-color:#fff;position:absolute;width:90px;height:90px;box-shadow:0 5px 15px -5px #00000054;left:10px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{grid-column:2;color:#fff;font-size:15px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:24px 20px 8px;text-align:center;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:34px;font-weight:900;display:flex;align-items:center;gap:10px;text-align:center;justify-content:center}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;display:inline-block}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]{width:100%;background:linear-gradient(90deg,#eeeeee80,#eee 48.96%,#eeeeee80);display:flex;align-items:center;justify-content:center;gap:10px;padding:10px}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto;align-items:center;padding:10px}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover{color:#060b29}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(180deg,#5ffc7b,#26d044);border-radius:6px;display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:22px;color:#fff;font-weight:500}.card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:fit-content;justify-self:flex-end}.act_filtro_mobile[_ngcontent-%COMP%]{display:none;color:var(--color-c2);font-size:18px;align-items:center;justify-content:center;gap:10px;background:#fff;padding:20px;border-radius:10px}.container_filtro[_ngcontent-%COMP%]{position:relative}.cont_filtr_btns[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:20px;padding-left:10px;border-left:1px solid #DADADA}.s_futuros_proyectos[_ngcontent-%COMP%]{position:relative;width:100%;min-height:460px}.s_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;background:url("./media/curva_sup-3B5BU5PW.svg") no-repeat center;background-size:cover;background-position:center bottom;width:100%;height:100%;max-height:40px;top:-2px;left:0;right:0;z-index:2}.s_futuros_proyectos[_ngcontent-%COMP%]:after{content:"";position:absolute;background:url("./media/curva_inf-GTMGXJMU.svg") no-repeat center;background-size:cover;background-position:center top;width:100%;height:100%;max-height:40px;bottom:-2px;left:0;right:0;z-index:2}.c_futuros_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:stretch;position:relative;min-height:460px}.c_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:0;bottom:0;width:400px;height:300px;border-radius:100%;background:#366bec59;filter:blur(54px);margin:auto;mix-blend-mode:lighten}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{background:url("./media/bg_futuros-EKYL62GA.jpg"),linear-gradient(107.08deg,#4565b3,#2b478b 31.11%,#13203e);background-blend-mode:multiply;background-size:cover;background-position:center;padding:0 100px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;height:100%;position:relative;z-index:1;gap:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:before, .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{content:"";position:absolute;width:20px;height:70px;background:url("./media/puntos-OUOWW45M.svg") no-repeat center;background-size:contain;left:3%;top:20%}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{right:3%;bottom:20%;top:initial;left:initial;transform:rotate(180deg)}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{letter-spacing:.365em;text-transform:uppercase;color:#ffed00;font-weight:600;font-size:20px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:900;color:#fff;font-size:40px;max-width:500px;line-height:1.1}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]{width:100%;height:100%}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{background:#182360;border:3px solid #FAFAFA;border-radius:100px;width:35px;height:35px}.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-button-prev[_ngcontent-%COMP%]:after{font-size:16px;font-weight:800;color:#fff}.swiper-pagination[_ngcontent-%COMP%]{bottom:60px!important}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{background-color:#fff;width:10px;border-radius:100px;height:10px;transition:.4s ease}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%]{width:20px}.swiper-button-prev[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]{left:25px}.swiper-button-next[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{right:25px}.s_proyectos_ejecutados[_ngcontent-%COMP%]{padding:30px 0}.cont_proyecto_logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:1px solid #E4E4E4;max-width:100px;cursor:pointer;position:relative;z-index:1;transition:.4s ease;border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:0;width:70px;height:60px;border-radius:100%;margin:auto;z-index:-1;background:#333663;opacity:0;filter:blur(26px);transition:.4s ease}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.2) translateY(0);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{opacity:.58;bottom:-20px}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{transform:scale(1.05) translateY(-15px);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before{opacity:.58;bottom:-10px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.holder[_ngcontent-%COMP%]{width:100%;max-width:750px;margin:0 auto;display:flex;justify-content:space-between;padding:20px 0}.holder[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.jp-previous, .jp-next)[_ngcontent-%COMP%]{display:none}.holder[_ngcontent-%COMP%]   .jp-previous[_ngcontent-%COMP%], .holder[_ngcontent-%COMP%]   .jp-next[_ngcontent-%COMP%]{color:#182360;font-weight:700;font-size:15px;cursor:pointer}.holder[_ngcontent-%COMP%]   .jp-previous.jp-disabled[_ngcontent-%COMP%], .holder[_ngcontent-%COMP%]   .jp-next.jp-disabled[_ngcontent-%COMP%]{opacity:.5}.cont_proyecto_eject[_ngcontent-%COMP%]{display:none;grid-template-columns:1fr 1fr;justify-content:center;width:100%;align-items:stretch;background:url("./media/bg_pe-5Q73T7VV.jpg"),#0a102deb;border-radius:48px 48px 97px;background-blend-mode:multiply;background-size:cover;position:relative;margin:0 0 40px}.cont_proyecto_eject[_ngcontent-%COMP%]:before{content:"";position:absolute;left:10%;top:0;bottom:0;margin:auto;mix-blend-mode:lighten;max-width:400px;width:100%;max-height:300px;height:100%;border-radius:100%;background:#366bec59;filter:blur(54px);pointer-events:none}.cont_proyecto_eject.active[_ngcontent-%COMP%]{display:grid}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{position:relative;padding:40px 100px;z-index:1;display:flex;flex-direction:column;gap:20px;color:#fff;align-items:flex-start;justify-content:center}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;text-shadow:0px 3px 1px rgba(0,0,0,.17);letter-spacing:.62em;font-weight:400}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:52px;font-weight:800;text-transform:uppercase;background:linear-gradient(180deg,#fff,#fff,#9297b7);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0px 3px 1px rgba(0,0,0,.17)}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:20px;border-bottom:1px solid rgba(215,215,215,.6235294118);font-weight:700}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{height:100%}.info_datos_pe[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:4px;font-size:18px;font-weight:300}.info_datos_pe[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:700}.c_slider_pe[_ngcontent-%COMP%]{border-radius:100px 0 95px;overflow:hidden;max-height:380px}.c_slider_pe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover}.tabs_proyectos_eject[_ngcontent-%COMP%]{margin:0 0 40px}@media screen and (max-width: 1200px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:40px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:0 20px 0 80px;gap:20px}}@media screen and (max-width: 1050px){.c_proyecto_vivienda[_ngcontent-%COMP%]:after{bottom:initial;top:0}.act_filtro_mobile[_ngcontent-%COMP%]{display:flex}.filtro_proyectos[_ngcontent-%COMP%]{display:none;flex-direction:column;position:absolute;z-index:10;padding:20px;width:100%;top:70px;border-radius:10px}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:initial}.cont_filtr_btns[_ngcontent-%COMP%]{border:0}.cont_proyecto_eject[_ngcontent-%COMP%]{grid-template-columns:1fr}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{gap:10px}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{max-height:300px}}@media screen and (max-width: 768px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:20px;min-height:340px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:18px}.c_futuros_proyectos[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:initial}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:80px 20px 20px;min-height:380px}.swiperFuturos[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .swiperFuturos[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{top:13%}.cont_proyecto_eject[_ngcontent-%COMP%]:before{display:none}}@media screen and (max-width: 480px){.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:30px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 10px}.cnt_gen_proy_ejec[_ngcontent-%COMP%]{min-height:190px}}']});let n=e;return n})();var lt=[{path:"",component:tt,canActivate:[Z]}],et=(()=>{let e=class e{};e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=w({type:e}),e.\u0275inj=b({imports:[A.forChild(lt),A]});let n=e;return n})();var Ft=(()=>{let e=class e{};e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=w({type:e}),e.\u0275inj=b({imports:[H,et,E,z]});let n=e;return n})();export{Ft as EjecutadosModule};

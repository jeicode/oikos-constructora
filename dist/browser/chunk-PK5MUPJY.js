import{a as V}from"./chunk-3TYL3RXZ.js";import{a as ce}from"./chunk-UVVPM26Z.js";import{b as L}from"./chunk-SXUUXRTP.js";import{a as F,b as N,c as _e,d as de}from"./chunk-LTMVHOJA.js";import{a as le}from"./chunk-VHFAMSYY.js";import{a as z}from"./chunk-2M4BUVJI.js";import{a as pe,u as se}from"./chunk-56DJ75US.js";import{Ab as ie,Bb as oe,C as W,Ca as g,D as k,Da as D,Eb as T,Fb as re,Gb as R,Hb as ae,I as f,J as h,Ja as w,Ka as l,La as y,Ma as P,Na as U,Qa as Z,R as E,Ra as B,S as x,Sa as q,Ua as G,V as o,W as O,Wa as H,c as m,ca as u,cb as K,db as Q,e as A,eb as ee,ha as X,ia as s,ib as te,mb as ne,sa as r,ta as i,ua as _,w as J,x as j,xa as I,ya as C,z as S,za as d}from"./chunk-3MCO4G7G.js";var ge=(()=>{let n=class n{constructor(c,p,a){this.pageService=c,this.router=p,this.seoService=a}canActivate(c,p){return m(this,null,function*(){let a=yield this.pageService.getSeoContentPage("proyectos-construccion-comerciales-industriales");return a?.friendly_url!=null?(this.pageService.currentPage=a,this.seoService.setUpMetaTags(a),!0):(this.router.navigateByUrl("404",{skipLocationChange:!0}),!1)})}};n.\u0275fac=function(p){return new(p||n)(S(z),S(T),S(le))},n.\u0275prov=J({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();var me=t=>({"background-color":t}),ye=()=>({"grid-template-columns":"2fr 1fr"});function ve(t,n){if(t&1&&(r(0,"option",33),l(1),i()),t&2){let e=n.$implicit;g("value",e==null?null:e.id),o(),y(e==null?null:e.field_content)}}function Pe(t,n){if(t&1&&(r(0,"option",33),l(1),i()),t&2){let e=n.$implicit;g("value",e==null?null:e.id),o(),y(e==null?null:e.field_content)}}function Me(t,n){if(t&1&&(r(0,"option",33),l(1),i()),t&2){let e=n.$implicit;g("value",e==null?null:e.rango),o(),y(e==null?null:e.mostrar)}}function be(t,n){if(t&1&&(r(0,"a",47),_(1,"img",48),i()),t&2){let e=d(2).$implicit;g("href",e==null?null:e.vista360,x)}}function Oe(t,n){if(t&1&&(r(0,"a",47),_(1,"span",49),i()),t&2){let e=d(2).$implicit;g("href",e==null?null:e.url_waze,x)}}function we(t,n){if(t&1&&(r(0,"div",45),u(1,be,2,1,"a",46)(2,Oe,2,1,"a",46),i()),t&2){let e=d().$implicit;o(),s("ngIf",(e==null?null:e.vista360)!=""&&(e==null?null:e.vista360)!=null),o(),s("ngIf",(e==null?null:e.url_waze)!=""&&(e==null?null:e.url_waze)!=null)}}function je(t,n){if(t&1&&(r(0,"a",50),_(1,"img",51),i()),t&2){let e=d().$implicit,c=d();D("routerLink","/proyecto/",e==null?null:e.url_amigable,""),o(),s("src",c.imagenes_url+(e==null?null:e.imagen_principal_proyecto),x)("alt",e==null?null:e.alt_principal)("title",e==null?null:e.title_principal)}}function Se(t,n){if(t&1&&_(0,"img",51),t&2){let e=d().$implicit,c=d();s("src",c.imagenes_url+(e==null?null:e.imagen_principal_proyecto),x)("alt",e==null?null:e.alt_principal)("title",e==null?null:e.title_principal)}}function ke(t,n){if(t&1&&(r(0,"h4")(1,"span"),l(2,"Desde"),i(),l(3),i()),t&2){let e=d().$implicit;o(3),P(" $",e==null?null:e.valor_proyecto_formato," ")}}function Ee(t,n){if(t&1&&(r(0,"div",52),l(1," Precio de referencia "),r(2,"b"),l(3),q(4,"thousandNumber"),i()()),t&2){let e=d().$implicit;o(3),P("USD ",G(4,1,e==null?null:e.dollar_value,"es"),"")}}function Ie(t,n){if(t&1){let e=I();r(0,"div",53)(1,"a",54),C("click",function(){f(e);let p=d().$implicit,a=d();return h(a.selectProjectToModal(p))}),_(2,"span",55),l(3," Contactar "),i(),r(4,"a",56),l(5," Ver proyecto "),i()()}if(t&2){let e=d().$implicit;o(4),D("routerLink","/proyecto/",e==null?null:e.url_amigable,"")}}function Te(t,n){if(t&1){let e=I();r(0,"div",57)(1,"a",58),C("click",function(){f(e);let p=d().$implicit,a=d();return h(a.selectProjectToPreLaunch(p))}),l(2," Inscribirse "),i()()}t&2&&s("ngStyle",Z(1,ye))}function ze(t,n){if(t&1&&(r(0,"div",34)(1,"picture")(2,"span",35),l(3),i(),u(4,we,3,2,"div",36)(5,je,2,5,"a",37)(6,Se,1,3,"ng-template",null,3,H),i(),r(8,"h2",38)(9,"picture"),_(10,"img",39),i(),r(11,"div"),l(12),i()(),r(13,"div",40)(14,"h3"),l(15),i(),u(16,ke,4,1,"h4",41)(17,Ee,5,4,"div",42),i(),r(18,"div",43)(19,"span"),l(20),i()(),u(21,Ie,6,2,"div",44)(22,Te,3,2,"ng-template",null,4,H),i()),t&2){let e=n.$implicit,c=w(7),p=w(23),a=d();o(2),s("ngStyle",B(17,me,e==null?null:e.color_secundario)),o(),y(e==null?null:e.estado_proyecto),o(),s("ngIf",(e==null?null:e.vista360)||(e==null?null:e.url_waze)),o(),s("ngIf",(e==null?null:e.interna)==="si")("ngIfElse",c),o(3),s("ngStyle",B(19,me,e==null?null:e.color_primario)),o(2),g("src",a.imagenes_url+(e==null?null:e.logo_proyecto),x),g("alt",e==null?null:e.alt_logo),g("title",e==null?null:e.title_logo),o(2),y(e==null?null:e.titulo_proyecto),o(3),U("",e==null?null:e.zona_proyecto," / ",e==null?null:e.ubicacion_proyecto,""),o(),s("ngIf",e==null?null:e.valor_proyecto),o(),s("ngIf",e==null?null:e.dollar_value),o(3),P(" ",e==null?null:e.texto_adicional," "),o(),s("ngIf",(e==null?null:e.interna)==="si")("ngIfElse",p)}}function Fe(t,n){t&1&&(r(0,"p",59),l(1,"No existe informaci\xF3n relacionado con el filtro utilizado"),i())}function Ne(t,n){if(t&1&&(r(0,"div",67)(1,"div",68)(2,"div",69)(3,"h5"),l(4),i(),_(5,"h2",70),r(6,"a",71),l(7),i()(),r(8,"div",72),_(9,"img",73),i()()()),t&2){let e=n.$implicit,c=d(2);o(4),y(e==null?null:e.field_content),o(),s("innerHTML",e==null?null:e.subtitulo_banner_vivienda,E),o(),g("href",e==null?null:e.enlace_cta_banner_vivienda,x),o(),y(e==null?null:e.texto_cta_banner_vivienda),o(2),g("src",c.imagenes_url+(e==null?null:e.imagen),x),g("alt",e==null?null:e.imagen_alt),g("title",e==null?null:e.imagen_title)}}function Le(t,n){if(t&1&&(r(0,"section",60)(1,"div",61)(2,"div",62),u(3,Ne,10,7,"div",63),i(),_(4,"div",64)(5,"div",65)(6,"div",66),i()()),t&2){let e=d();o(3),s("ngForOf",e.banners)}}function Ve(t,n){if(t&1&&(r(0,"div",74)(1,"div",75)(2,"div",76)(3,"h2"),l(4),i()(),r(5,"div",77),l(6),i(),r(7,"div",78)(8,"div")(9,"b"),l(10," Direcci\xF3n:"),i(),l(11),i(),r(12,"div")(13,"b"),l(14," Ciudad:"),i(),l(15),i(),r(16,"div")(17,"b"),l(18," Zona:"),i(),l(19),i()()(),r(20,"div",79)(21,"div",80)(22,"div",62)(23,"div",67),_(24,"img",81),i()(),_(25,"div",66),i()()()),t&2){let e=n.$implicit,c=n.index,p=d();s("ngClass",c==0?"active":""),X("data-proyecto",c+1),o(4),y(e==null?null:e.titulo_proyecto),o(2),U(" ",e==null?null:e.zona_proyecto," / ",e==null?null:e.ubicacion_proyecto," "),o(5),P(" ",e==null?null:e.direccion_proyecto,""),o(4),P(" ",e==null?null:e.ubicacion_proyecto,""),o(4),P(" ",e==null?null:e.zona_proyecto,""),o(5),g("src",p.imagenes_url+(e==null?null:e.imagen_principal_proyecto),x),g("alt",e==null?null:e.alt_principal)}}var ue=(()=>{let n=class n{constructor(c,p,a,v,M,b){this.pageService=c,this.router=p,this.configServ=a,this.projService=v,this.responsiveService=M,this.currencyConverter=b,this.data=[],this.general=[],this.imagenes=[],this.ciudades=[],this.typesProject=[],this.proyectos=[],this.banners=[],this.ejecutados=[],this.precios=[],this.isSubmitted=!1,this.proyectos_ver=!0,this.captcha="",this.imagenes_url="",this.imagen_banner="",this.ciudad="NA",this.tipo_search="NA",this.precio_search="NA",this.projectSelectedToModal=new pe,this.notifyChanges=new A,this.notifyChangesPreLaunchProject=new A,this.imagenes_url=ie.imagenes_url,this.suscribeListenRouter=this.router.events.subscribe(he=>{he instanceof oe&&(this.configServ.goUpPage(),this.pageService.closeNav())})}ngOnInit(){this.init(),this.pageService.closeNav()}init(){return m(this,null,function*(){let c=[()=>this.getData(),()=>this.getSecciones(),()=>this.getProyectos(),()=>this.convertCopToUsdProjects(),()=>this.getEjecutados(),()=>this.getPreciosProyectos()];for(let p of c)yield p()})}convertCopToUsdProjects(){return m(this,null,function*(){yield this.currencyConverter.convertCopToUsdProjects(this.proyectos)})}getData(){return m(this,null,function*(){this.data=yield this.pageService.getContentPage("proyectos-construccion-comerciales-industriales")})}getImagenes(){return m(this,null,function*(){this.imagenes=yield this.pageService.getImagesBySlugPage("proyectos-construccion-comerciales-industriales"),this.imagen_banner=this.imagenes_url+this.imagenes[0].field_content})}getSecciones(){return m(this,null,function*(){let c=yield this.projService.getHousingTypesByType("2");c&&(this.typesProject=c);let p=yield this.projService.getCitiesByProjectType("2");p&&(this.ciudades=p),this.banners=yield this.pageService.getElementsContent("titulo banner comerciales","banner_comerciales")})}getCiudad(c){this.ciudad=c}getTipo(c){this.tipo_search=c}getPrecio(c){this.precio_search=c}toogleContainerSearch(){if(this.responsiveService.isMobile){let c=document.querySelector(".filtro_proyectos");$(c).slideToggle().css("display","flex")}}getProyectos(){return m(this,null,function*(){this.proyectos=yield this.projService.getProyectosByTipo("2"),this.proyectos.length==0?this.proyectos_ver=!1:this.proyectos_ver=!0})}buscarProyectos(){return m(this,null,function*(){this.toogleContainerSearch(),this.proyectos=yield this.projService.getProyectosByTipo("2",this.ciudad,this.tipo_search,this.precio_search),this.proyectos.length==0?this.proyectos_ver=!1:this.proyectos_ver=!0})}limpiarFiltros(){return m(this,null,function*(){this.toogleContainerSearch(),this.getProyectos(),$(".filtroCiudad").val("NA"),$(".filtroTipo").val("NA"),$(".filtroPrecio").val("NA")})}getEjecutados(){return m(this,null,function*(){this.ejecutados=yield this.projService.getProyectosByTipo("4"),this.configServ.loadbannerEjecutados(1e3)})}getPreciosProyectos(){return m(this,null,function*(){this.precios=yield this.projService.getPreciosProyectos("2")})}selectProjectToModal(c){this.projectSelectedToModal=c,this.notifyChanges.next({openModal:!0})}selectProjectToPreLaunch(c){this.projectSelectedToModal=c,this.notifyChangesPreLaunchProject.next({openModal:!0})}};n.\u0275fac=function(p){return new(p||n)(O(z),O(T),O(ae),O(se),O(ce),O(de))},n.\u0275cmp=W({type:n,selectors:[["app-comerciales"]],decls:49,vars:14,consts:[["nomCiudad",""],["nomTipo",""],["nomPrecio",""],["notRedirect",""],["redirect",""],[1,"s_proyecto_vivienda"],[1,"cnt_central"],[1,"c_proyecto_vivienda"],[1,"title_section","al_center",3,"innerHTML"],[1,"container_filtro"],[1,"act_filtro_mobile",3,"click"],[1,"btn_icon_search"],[1,"fas","fa-search"],[1,"filtro_proyectos"],[1,"filtroCiudad",3,"change"],["value","NA","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"filtroTipo",3,"change"],[1,"precio","filtroPrecio",3,"change"],[1,"cont_filtr_btns"],["type","button",1,"btn_link_reset",3,"click"],[1,"fas","fa-times"],["type","button",1,"btn",3,"click"],[1,"s_cards_proyectos"],[1,"c_cards_proyectos"],["class","card_p",4,"ngFor","ngForOf"],["style","text-align:center;",4,"ngIf"],["class","s_futuros_proyectos",4,"ngIf"],[1,"s_proyectos_ejecutados"],[1,"c_proyectos_ejecutados"],[1,"title_section","al-center",3,"innerHTML"],["class","cont_proyecto_eject",3,"ngClass",4,"ngFor","ngForOf"],[3,"modalEvent","project"],[3,"value"],[1,"card_p"],[1,"tag_state",3,"ngStyle"],["class","btns_icons",4,"ngIf"],[3,"routerLink",4,"ngIf","ngIfElse"],[1,"name_proyecto",3,"ngStyle"],["width","87","height","87",3,"src","alt","title"],[1,"datos_proyecto"],[4,"ngIf"],["class","precio_usd",4,"ngIf"],[1,"franja_p"],["class","ctas_proyectos",4,"ngIf","ngIfElse"],[1,"btns_icons"],["target","_blank","rel","nofollow,noopener","class","btn_icon",3,"href",4,"ngIf"],["target","_blank","rel","nofollow,noopener",1,"btn_icon",3,"href"],["src","assets/images/diseno/proyectos_vivienda/icon_360.svg","width","20","height","20","alt",""],[1,"fas","fa-map-marker-alt"],[3,"routerLink"],["width","350","height","219","defaultImg","",3,"src","alt","title"],[1,"precio_usd"],[1,"ctas_proyectos"],[1,"btn_whatsapp","c-pointer",3,"click"],[1,"fab","fa-whatsapp"],[1,"btn",3,"routerLink"],[1,"ctas_proyectos",3,"ngStyle"],[1,"btn",3,"click"],[2,"text-align","center"],[1,"s_futuros_proyectos"],[1,"swiper","swiperFuturos"],[1,"swiper-wrapper"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"swiper-button-next"],[1,"swiper-button-prev"],[1,"swiper-pagination"],[1,"swiper-slide"],[1,"c_futuros_proyectos"],[1,"info_fp"],[3,"innerHTML"],[1,"btn","contacto_h",3,"href"],[1,"img_fp"],["width","1280","height","720",3,"src","alt","title"],[1,"cont_proyecto_eject",3,"ngClass"],[1,"info_pe"],[1,"title_pe"],[1,"lugar"],[1,"info_datos_pe"],[1,"c_slider_pe"],[1,"swiper","swiperPe"],["width","530","height","390",3,"src","alt"]],template:function(p,a){if(p&1){let v=I();r(0,"section",5)(1,"div",6)(2,"div",6),_(3,"app-breadcrumb"),i(),r(4,"div",7),_(5,"h1",8),r(6,"div",9)(7,"div",10),C("click",function(){return f(v),h(a.toogleContainerSearch())}),r(8,"h3"),l(9),i(),r(10,"a",11),_(11,"span",12),i()(),r(12,"form",13)(13,"select",14,0),C("change",function(){f(v);let b=w(14);return h(a.getCiudad(b.value))}),r(15,"option",15),l(16,"Ciudad"),i(),u(17,ve,2,2,"option",16),i(),r(18,"select",17,1),C("change",function(){f(v);let b=w(19);return h(a.getTipo(b.value))}),r(20,"option",15),l(21,"Tipo de proyecto comercial"),i(),u(22,Pe,2,2,"option",16),i(),r(23,"select",18,2),C("change",function(){f(v);let b=w(24);return h(a.getPrecio(b.value))}),r(25,"option",15),l(26,"Precio"),i(),u(27,Me,2,2,"option",16),i(),r(28,"div",19)(29,"button",20),C("click",function(){return f(v),h(a.limpiarFiltros())}),l(30,"Limpiar "),_(31,"span",21),i(),r(32,"button",22),C("click",function(){return f(v),h(a.buscarProyectos())}),l(33,"Buscar "),_(34,"span",12),i()()()()()()(),r(35,"section",23)(36,"div",6)(37,"div",24),u(38,ze,24,21,"div",25)(39,Fe,2,0,"p",26),i()()(),u(40,Le,7,1,"section",27),r(41,"section",28)(42,"div",6)(43,"div",29),_(44,"div",30)(45,"app-executed-projects-slide-pag"),u(46,Ve,26,10,"div",31),i()()(),_(47,"app-modal-pre-launch-project",32)(48,"app-wpp-modal-project",32)}p&2&&(o(5),s("innerHTML",a.data.titulo_proyecto_comerciales,E),o(4),P(" ",a.data.titulo_busqueda," "),o(8),s("ngForOf",a.ciudades),o(5),s("ngForOf",a.typesProject),o(5),s("ngForOf",a.precios),o(11),s("ngForOf",a.proyectos),o(),s("ngIf",!a.proyectos_ver),o(),s("ngIf",a.banners.length>0),o(4),s("innerHTML",a.data.subtitulo_proyectos_ejecutados,E),o(2),s("ngForOf",a.ejecutados),o(),s("modalEvent",a.notifyChangesPreLaunchProject.asObservable())("project",a.projectSelectedToModal),o(),s("modalEvent",a.notifyChanges.asObservable())("project",a.projectSelectedToModal))},dependencies:[K,Q,ee,te,re,L,V,N,F,_e],styles:['.s_proyecto_vivienda[_ngcontent-%COMP%]{background:linear-gradient(180deg,#e9edf700,#e8ebf1 72.6%),#fff;min-height:340px;position:relative}.s_proyecto_vivienda[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:-2px;background:url("./media/curva_bg-OTFE4YJC.svg") no-repeat;background-size:cover;background-position:center top;z-index:1;width:100%;height:100%;max-height:145px;pointer-events:none}.c_proyecto_vivienda[_ngcontent-%COMP%]{position:relative}.c_proyecto_vivienda[_ngcontent-%COMP%]:before, .c_proyecto_vivienda[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;background:url("./media/puntos-NZD4PTXJ.svg") no-repeat center;width:20px;height:70px}.c_proyecto_vivienda[_ngcontent-%COMP%]:after{right:0;left:initial;top:initial;bottom:0;transform:rotate(180deg)}.filtro_proyectos[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;background:#fff;box-shadow:0 2px 20px -3px #33427740;border-radius:39px;padding:8px 20px;max-width:920px;margin:0 auto}.filtro_proyectos[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:none;border-radius:0;border:0;border-bottom:1px solid #DADADA;padding:5px;color:#666;font-size:14px;cursor:pointer}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:130px}.s_cards_proyectos[_ngcontent-%COMP%]{padding:0 0 40px;position:relative;z-index:1;transform:translateY(-80px)}.c_cards_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}.card_p[_ngcontent-%COMP%]{overflow:hidden;background:#fff;box-shadow:0 19px 41px -18px #23386273;border-radius:24px;display:inline-grid;max-width:400px;justify-self:center}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;max-height:219px;width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%]{text-align:center;position:absolute;left:10px;top:10px;border-radius:100px;padding:8px 20px;color:#fff;font-weight:600;font-size:14px;z-index:1}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:10px;right:10px;border-radius:6px;background:var(--color-grad_azul_osc);width:80px;height:40px;z-index:1;overflow:hidden}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{position:absolute;left:0;right:0;height:80%;width:1px;background-color:#a5a5a5;margin:auto;z-index:2}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;display:flex;justify-content:center;align-items:center;width:26px;height:26px;transition:.3s ease;width:100%;height:100%;position:relative}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{content:"";background-color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px;color:#fff;display:inline-flex;justify-content:center;align-items:center}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{background-color:#2e3b85;padding:10px;display:grid;grid-template-columns:80px 1fr;align-items:center;gap:20px;position:relative;min-height:54px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-width:87px;border-radius:100px;border:5px solid #FFFFFF;background-color:#fff;position:absolute;width:90px;height:90px;box-shadow:0 5px 15px -5px #00000054;left:10px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{grid-column:2;color:#fff;font-size:15px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 20px;text-align:center;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:34px;font-weight:900;display:flex;align-items:center;gap:10px;text-align:center;justify-content:center}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;display:inline-block}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]{width:100%;background:linear-gradient(90deg,#eeeeee80,#eee 48.96%,#eeeeee80);display:flex;align-items:center;justify-content:center;gap:10px;padding:10px}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:center;padding:10px}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover{color:#060b29}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(180deg,#5ffc7b,#26d044);border-radius:6px;display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:22px;color:#fff;font-weight:500}.card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:fit-content;justify-self:flex-end}.act_filtro_mobile[_ngcontent-%COMP%]{display:none;color:var(--color-c2);font-size:18px;align-items:center;justify-content:center;gap:10px;background:#fff;padding:20px;border-radius:10px}.container_filtro[_ngcontent-%COMP%]{position:relative}.cont_filtr_btns[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:20px;padding-left:10px;border-left:1px solid #DADADA}.s_futuros_proyectos[_ngcontent-%COMP%]{position:relative;width:100%;min-height:460px}.s_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;background:url("./media/curva_sup-A26RCSX4.svg") no-repeat center;background-size:cover;background-position:center bottom;width:100%;height:100%;max-height:40px;top:-2px;left:0;right:0;z-index:2}.s_futuros_proyectos[_ngcontent-%COMP%]:after{content:"";position:absolute;background:url("./media/curva_inf-3374WHOG.svg") no-repeat center;background-size:cover;background-position:center top;width:100%;height:100%;max-height:40px;bottom:-2px;left:0;right:0;z-index:2}.c_futuros_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:stretch;position:relative;min-height:460px}.c_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:0;bottom:0;width:400px;height:300px;border-radius:100%;background:#366bec59;filter:blur(54px);margin:auto;mix-blend-mode:lighten}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{background:url("./media/bg_futuros-EKYL62GA.jpg"),linear-gradient(107.08deg,#4565b3,#2b478b 31.11%,#13203e);background-blend-mode:multiply;background-size:cover;background-position:center;padding:0 100px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;height:100%;position:relative;z-index:1;gap:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:before, .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{content:"";position:absolute;width:20px;height:70px;background:url("./media/puntos-NZD4PTXJ.svg") no-repeat center;background-size:contain;left:3%;top:20%}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{right:3%;bottom:20%;top:initial;left:initial;transform:rotate(180deg)}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{letter-spacing:.365em;text-transform:uppercase;color:#ffed00;font-weight:600;font-size:20px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:900;color:#fff;font-size:40px;max-width:500px;line-height:1.1}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]{width:100%;height:100%}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{background:#182360;border:3px solid #FAFAFA;border-radius:100px;width:35px;height:35px}.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-button-prev[_ngcontent-%COMP%]:after{font-size:16px;font-weight:800;color:#fff}.swiper-pagination[_ngcontent-%COMP%]{bottom:60px!important}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{background-color:#fff;width:10px;border-radius:100px;height:10px;transition:.4s ease}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%]{width:20px}.swiper-button-prev[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]{left:25px}.swiper-button-next[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{right:25px}.s_proyectos_ejecutados[_ngcontent-%COMP%]{padding:30px 0}.cont_proyecto_logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:1px solid #E4E4E4;max-width:100px;cursor:pointer;position:relative;z-index:1;transition:.4s ease;border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:0;width:70px;height:60px;border-radius:100%;margin:auto;z-index:-1;background:#333663;opacity:0;filter:blur(26px);transition:.4s ease}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.2) translateY(0);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{opacity:.58;bottom:-20px}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{transform:scale(1.05) translateY(-15px);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before{opacity:.58;bottom:-10px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.holder[_ngcontent-%COMP%]{width:100%;max-width:750px;margin:0 auto;display:flex;justify-content:space-between;padding:20px 0}[_nghost-%COMP%]     .holder a:not(.jp-previous, .jp-next)[_ngcontent-%COMP%], [_nghost-%COMP%]     .holder span{display:none}[_nghost-%COMP%]     .holder .jp-previous, [_nghost-%COMP%]     .holder .jp-next{color:#182360;font-weight:700;font-size:15px;cursor:pointer}[_nghost-%COMP%]     .holder .jp-previous.jp-disabled, [_nghost-%COMP%]     .holder .jp-next.jp-disabled{opacity:.5}.cont_proyecto_eject[_ngcontent-%COMP%]{display:none;grid-template-columns:1fr 1fr;justify-content:center;width:100%;align-items:stretch;background:url("./media/bg_pe-5Q73T7VV.jpg"),#0a102deb;border-radius:48px 48px 97px;background-blend-mode:multiply;background-size:cover;position:relative;margin:0 0 40px}.cont_proyecto_eject[_ngcontent-%COMP%]:before{content:"";position:absolute;left:10%;top:0;bottom:0;margin:auto;mix-blend-mode:lighten;max-width:400px;width:100%;max-height:300px;height:100%;border-radius:100%;background:#366bec59;filter:blur(54px);pointer-events:none}.cont_proyecto_eject.active[_ngcontent-%COMP%]{display:grid}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{position:relative;padding:40px 100px;z-index:1;display:flex;flex-direction:column;gap:20px;color:#fff;align-items:flex-start;justify-content:center}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;text-shadow:0px 3px 1px rgba(0,0,0,.17);letter-spacing:.62em;font-weight:400}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:35px;font-weight:800;text-transform:uppercase;background:linear-gradient(180deg,#fff,#fff,#9297b7);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0px 3px 1px rgba(0,0,0,.17)}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:20px;border-bottom:1px solid rgba(215,215,215,.6235294118);font-weight:700}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{height:100%}.info_datos_pe[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:4px;font-size:18px;font-weight:300}.info_datos_pe[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:700}.c_slider_pe[_ngcontent-%COMP%]{border-radius:100px 0 95px;overflow:hidden;align-self:stretch}.c_slider_pe[_ngcontent-%COMP%]   .swiper[_ngcontent-%COMP%]{height:100%}.c_slider_pe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.tabs_proyectos_eject[_ngcontent-%COMP%]{margin:0 0 40px}@media screen and (max-width: 1200px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:40px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:0 20px 0 80px;gap:20px}}@media screen and (max-width: 1050px){.c_proyecto_vivienda[_ngcontent-%COMP%]:after{bottom:initial;top:0}.act_filtro_mobile[_ngcontent-%COMP%]{display:flex}.filtro_proyectos[_ngcontent-%COMP%]{display:none;flex-direction:column;position:absolute;z-index:10;padding:20px;width:100%;top:70px;border-radius:10px}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:initial}.cont_filtr_btns[_ngcontent-%COMP%]{border:0}.cont_proyecto_eject[_ngcontent-%COMP%]{grid-template-columns:1fr}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{gap:10px}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{max-height:300px}}@media screen and (max-width: 768px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:20px;min-height:340px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:18px}.c_futuros_proyectos[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:initial}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:80px 20px 20px;min-height:380px}.swiperFuturos[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .swiperFuturos[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{top:13%}.cont_proyecto_eject[_ngcontent-%COMP%]:before{display:none}}@media screen and (max-width: 480px){.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:30px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 10px}}']});let t=n;return t})();var $e=[{path:"",component:ue,canActivate:[ge]}],fe=(()=>{let n=class n{};n.\u0275fac=function(p){return new(p||n)},n.\u0275mod=k({type:n}),n.\u0275inj=j({imports:[R.forChild($e),R]});let t=n;return t})();var xt=(()=>{let n=class n{};n.\u0275fac=function(p){return new(p||n)},n.\u0275mod=k({type:n}),n.\u0275inj=j({imports:[ne,fe,L,V,N,F]});let t=n;return t})();export{xt as ComercialesModule};

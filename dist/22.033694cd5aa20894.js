"use strict";(self.webpackChunkoikos_constructora=self.webpackChunkoikos_constructora||[]).push([[22],{6022:(lt,u,r)=>{r.r(u),r.d(u,{HomeModule:()=>at});var p=r(6895),s=r(5906),l=r(5861),t=r(8256),h=r(5480),M=r(655);let O=(()=>{class i{constructor(n,e){this.pageService=n,this.seoService=e}canActivate(n,e){var a=this;return(0,l.Z)(function*(){const c=yield a.pageService.getSeoContentPage("/");return!!c&&(a.pageService.currentPage=c,a.seoService.setUpMetaTags(c),!0)})()}}return i.\u0275fac=function(n){return new(n||i)(t.LFG(h.P),t.LFG(M.v))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var x=r(7579),v=r(849),w=r(9019),d=r(8879),b=r(221),y=r(7471),Z=r(4130),j=r(4349),m=r(9485),A=r(5425),f=r(9924),P=r(426);let S=(()=>{class i{transform(n=[],e="",a=","){if(e){const c=e.split(a),g=[];return e&&n&&n?.length>0&&c.forEach(rt=>{const C=n.find(ct=>ct?.nombre.toLowerCase()==rt.trim().toLowerCase());C&&g.push(C)}),g.slice(0,4)}return n.slice(0,4)}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275pipe=t.Yjl({name:"sortArraySplitStr",type:i,pure:!0,standalone:!0}),i})();var T=r(5520);function H(i,o){if(1&i&&(t.TgZ(0,"div",52),t._UZ(1,"img",53),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&i){const n=o.$implicit,e=t.oxw(4);t.xp6(1),t.Q6J("src",e.BASE_URL+(null==n?null:n.imagen),t.LSH)("title",null==n?null:n.title)("alt",null==n?null:n.alt),t.xp6(2),t.Oqu(null==n?null:n.nombre)}}function U(i,o){if(1&i&&(t.TgZ(0,"h2",54)(1,"span"),t._uU(2," Desde"),t.qZA(),t._UZ(3,"br"),t._uU(4),t.qZA()),2&i){const n=t.oxw(3).$implicit;t.xp6(4),t.hij(" ",null==n?null:n.valor_proyecto," ")}}function F(i,o){if(1&i&&(t.TgZ(0,"picture",55),t._UZ(1,"img",56),t.qZA()),2&i){const n=t.oxw(3).$implicit,e=t.oxw();t.xp6(1),t.Q6J("src",e.BASE_URL+n.imagen[0],t.LSH)("alt",n.imagen_alt[0])("title",n.imagen_title[0])}}function z(i,o){if(1&i&&(t.TgZ(0,"picture",55),t._UZ(1,"img",56),t.qZA()),2&i){const n=t.oxw(4).$implicit,e=t.oxw();t.xp6(1),t.Q6J("src",e.BASE_URL+n.galeria[0].field_content,t.LSH)("alt",n.galeria[0].alt)("title",n.galeria[0].title)}}function L(i,o){if(1&i&&t.YNc(0,z,2,3,"picture",57),2&i){const n=t.oxw(3).$implicit;t.Q6J("ngIf",n.galeria&&n.galeria.length>0)}}function J(i,o){if(1&i&&(t.TgZ(0,"picture",58),t._UZ(1,"img",59),t.qZA()),2&i){const n=t.oxw(3).$implicit,e=t.oxw();t.xp6(1),t.Q6J("src",e.BASE_URL+n.galeria[1].field_content,t.LSH)("alt",n.galeria[1].alt)("title",n.galeria[1].title)}}const _=function(i){return{"background-color":i}};function E(i,o){if(1&i&&(t.TgZ(0,"div",32)(1,"div",33),t._UZ(2,"img",34),t.qZA(),t.TgZ(3,"div",35)(4,"div",36)(5,"aside",37)(6,"picture"),t._UZ(7,"img",38),t.qZA(),t.TgZ(8,"div",39)(9,"div",40),t._uU(10),t.qZA(),t.YNc(11,H,4,4,"div",41),t.ALo(12,"sortArraySplitStr"),t.qZA()(),t.TgZ(13,"div",42)(14,"div",43),t._uU(15),t.qZA(),t.TgZ(16,"h2",44),t._uU(17),t.qZA(),t.TgZ(18,"h3",45),t._uU(19),t.qZA(),t.YNc(20,U,5,1,"h2",46),t.TgZ(21,"a",47),t._uU(22),t.qZA()()(),t.TgZ(23,"div",48),t.YNc(24,F,2,3,"picture",49),t.YNc(25,L,1,1,"ng-template",null,50,t.W1O),t.YNc(27,J,2,3,"picture",51),t.qZA()()()),2&i){const n=t.MAs(26),e=t.oxw(2).$implicit,a=t.oxw();t.xp6(2),t.Q6J("src",a.BASE_URL+(e.imagen[0]?e.imagen[0]:e.galeria[0].field_content),t.LSH),t.xp6(5),t.Q6J("src",a.BASE_URL+(null==e?null:e.logo_proyecto),t.LSH),t.xp6(1),t.Q6J("ngStyle",t.VKq(18,_,null==e?null:e.color_primario)),t.xp6(2),t.hij(" ",null==e?null:e.titulo_proyecto," "),t.xp6(1),t.Q6J("ngForOf",t.xi3(12,15,null==e?null:e.zonas,null==e?null:e.beneficios_proyecto)),t.xp6(3),t.Q6J("ngStyle",t.VKq(20,_,null==e?null:e.color_secundario)),t.xp6(1),t.hij(" ",null==e?null:e.estado_proyecto," "),t.xp6(2),t.Oqu(null==e?null:e.field_content),t.xp6(2),t.Oqu(null==e?null:e.descripcion_banner_home),t.xp6(1),t.Q6J("ngIf",null==e?null:e.valor_proyecto),t.xp6(1),t.Q6J("routerLink",null==e?null:e.link_cta_banner),t.xp6(1),t.hij(" ",null==e?null:e.texto_cta_banner," "),t.xp6(2),t.Q6J("ngIf",e.imagen[0])("ngIfElse",n),t.xp6(3),t.Q6J("ngIf",e.galeria&&e.galeria.length>1)}}function k(i,o){if(1&i&&(t.TgZ(0,"a",63)(1,"picture"),t._UZ(2,"source",64)(3,"source",65)(4,"source",66)(5,"img",67),t.qZA()()),2&i){const n=t.oxw(3).$implicit,e=t.oxw();t.s9C("href",null==n?null:n.link_cta_banner,t.LSH),t.xp6(2),t.s9C("srcset",e.BASE_URL+n.imagen[1]),t.xp6(1),t.s9C("srcset",e.BASE_URL+n.imagen[2]),t.xp6(1),t.Q6J("srcset",e.BASE_URL+(n.imagen[0]?n.imagen[0]:n.galeria[0].field_content)),t.xp6(1),t.s9C("src",e.BASE_URL+n.imagen[1],t.LSH)}}function q(i,o){if(1&i&&(t.TgZ(0,"picture"),t._UZ(1,"source",64)(2,"source",65)(3,"source",66)(4,"img",67),t.qZA()),2&i){const n=t.oxw(3).$implicit,e=t.oxw();t.xp6(1),t.s9C("srcset",e.BASE_URL+n.imagen[1]),t.xp6(1),t.s9C("srcset",e.BASE_URL+n.imagen[2]),t.xp6(1),t.Q6J("srcset",e.BASE_URL+(n.imagen[0]?n.imagen[0]:n.galeria[0].field_content)),t.xp6(1),t.s9C("src",e.BASE_URL+n.imagen[1],t.LSH)}}function Q(i,o){if(1&i&&(t.TgZ(0,"div",32)(1,"div",60),t.YNc(2,k,6,5,"a",61),t.YNc(3,q,5,4,"ng-template",null,62,t.W1O),t.qZA()()),2&i){const n=t.MAs(4),e=t.oxw(2).$implicit;t.xp6(2),t.Q6J("ngIf",""!=(null==e?null:e.link_cta_banner)&&null!=(null==e?null:e.link_cta_banner))("ngIfElse",n)}}function I(i,o){if(1&i&&(t.YNc(0,E,28,22,"div",30),t.YNc(1,Q,5,2,"ng-template",null,31,t.W1O)),2&i){const n=t.MAs(2),e=t.oxw().$implicit;t.Q6J("ngIf",""!=(null==e?null:e.titulo_proyecto)&&null!=(null==e?null:e.titulo_proyecto))("ngIfElse",n)}}function B(i,o){1&i&&t.YNc(0,I,3,2,"ng-template",29)}function Y(i,o){if(1&i&&(t.TgZ(0,"a",84),t._UZ(1,"img",85),t.qZA()),2&i){const n=t.oxw(2).$implicit;t.Q6J("href",null==n?null:n.vista360,t.LSH)}}function N(i,o){if(1&i&&(t.TgZ(0,"a",84),t._UZ(1,"span",86),t.qZA()),2&i){const n=t.oxw(2).$implicit;t.Q6J("href",null==n?null:n.url_waze,t.LSH)}}function R(i,o){if(1&i&&(t.TgZ(0,"div",82),t.YNc(1,Y,2,1,"a",83),t.YNc(2,N,2,1,"a",83),t.qZA()),2&i){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",null==n?null:n.vista360),t.xp6(1),t.Q6J("ngIf",null==n?null:n.url_waze)}}function $(i,o){if(1&i&&(t.TgZ(0,"a",87),t._UZ(1,"img",88),t.qZA()),2&i){const n=t.oxw().$implicit,e=t.oxw();t.MGl("routerLink","/proyecto/",null==n?null:n.url_amigable,""),t.xp6(1),t.Q6J("src",e.BASE_URL+(null==n?null:n.imagen_principal_proyecto),t.LSH)("alt",null==n?null:n.alt_principal)("title",null==n?null:n.title_principal)}}function D(i,o){if(1&i&&t._UZ(0,"img",88),2&i){const n=t.oxw().$implicit,e=t.oxw();t.Q6J("src",e.BASE_URL+(null==n?null:n.imagen_principal_proyecto),t.LSH)("alt",null==n?null:n.alt_principal)("title",null==n?null:n.title_principal)}}function W(i,o){if(1&i&&(t.TgZ(0,"h4")(1,"span"),t._uU(2,"Desde"),t.qZA(),t._uU(3),t.qZA()),2&i){const n=t.oxw().$implicit;t.xp6(3),t.hij(" $",null==n?null:n.valor_proyecto_formato," ")}}function G(i,o){if(1&i&&(t.TgZ(0,"div",89),t._uU(1," Precio de referencia "),t.TgZ(2,"b"),t._uU(3),t.ALo(4,"thousandNumber"),t.qZA()()),2&i){const n=t.oxw().$implicit;t.xp6(3),t.hij("USD ",t.xi3(4,1,null==n?null:n.dollar_value,"es"),"")}}function K(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"div",90)(1,"a",91),t.NdJ("click",function(){t.CHM(n);const a=t.oxw().$implicit,c=t.oxw();return t.KtG(c.selectProjectToModal(a))}),t._UZ(2,"span",92),t._uU(3," Contactar "),t.qZA(),t.TgZ(4,"a",21),t._uU(5," Ver proyecto "),t.qZA()()}if(2&i){const n=t.oxw().$implicit;t.xp6(4),t.MGl("routerLink","/proyecto/",null==n?null:n.url_amigable,"")}}const V=function(){return{"grid-template-columns":"2fr 1fr"}};function X(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"div",93)(1,"a",94),t.NdJ("click",function(){t.CHM(n);const a=t.oxw().$implicit,c=t.oxw();return t.KtG(c.selectProjectToPreLaunch(a))}),t._uU(2," Inscribirse "),t.qZA()()}2&i&&t.Q6J("ngStyle",t.DdM(1,V))}function tt(i,o){if(1&i&&(t.TgZ(0,"div",68)(1,"picture")(2,"span",69),t._uU(3),t.qZA(),t.YNc(4,R,3,2,"div",70),t.YNc(5,$,2,4,"a",71),t.YNc(6,D,1,3,"ng-template",null,72,t.W1O),t.qZA(),t.TgZ(8,"h2",73)(9,"picture"),t._UZ(10,"img",74),t.qZA(),t.TgZ(11,"div"),t._uU(12),t.qZA()(),t.TgZ(13,"div",75)(14,"h3"),t._uU(15),t.qZA(),t.YNc(16,W,4,1,"h4",76),t.YNc(17,G,5,4,"div",77),t.qZA(),t.TgZ(18,"div",78),t._UZ(19,"img",79),t.TgZ(20,"span"),t._uU(21),t.qZA()(),t.YNc(22,K,6,1,"div",80),t.YNc(23,X,3,2,"ng-template",null,81,t.W1O),t.qZA()),2&i){const n=o.$implicit,e=t.MAs(7),a=t.MAs(24),c=t.oxw();t.xp6(2),t.Q6J("ngStyle",t.VKq(17,_,null==n?null:n.color_secundario)),t.xp6(1),t.Oqu(null==n?null:n.estado_proyecto),t.xp6(1),t.Q6J("ngIf",(null==n?null:n.vista360)&&(null==n?null:n.url_waze)),t.xp6(1),t.Q6J("ngIf","si"===(null==n?null:n.interna))("ngIfElse",e),t.xp6(3),t.Q6J("ngStyle",t.VKq(19,_,null==n?null:n.color_primario)),t.xp6(2),t.Q6J("src",c.BASE_URL+(null==n?null:n.logo_proyecto),t.LSH)("alt",null==n?null:n.alt_logo)("title",null==n?null:n.title_logo),t.xp6(2),t.Oqu(null==n?null:n.titulo_proyecto),t.xp6(3),t.AsE("",null==n?null:n.zona_proyecto," / ",null==n?null:n.ubicacion_proyecto,""),t.xp6(1),t.Q6J("ngIf",null==n?null:n.valor_proyecto_formato),t.xp6(1),t.Q6J("ngIf",null==n?null:n.dollar_value),t.xp6(4),t.Oqu(null==n?null:n.texto_adicional),t.xp6(1),t.Q6J("ngIf","si"===(null==n?null:n.interna))("ngIfElse",a)}}function nt(i,o){if(1&i&&(t.TgZ(0,"div",95)(1,"picture"),t._UZ(2,"img",96),t.qZA(),t._UZ(3,"div",97),t.qZA()),2&i){const n=o.$implicit,e=t.oxw();t.xp6(2),t.Q6J("src",e.BASE_URL+(null==n?null:n.imagen[0]),t.LSH)("alt",null==n?null:n.imagen_alt)("title",null==n?null:n.imagen_title),t.xp6(1),t.Q6J("innerHtml",null==n?null:n.descripcion_item_por_que_elegirnos_home,t.oJD)}}function et(i,o){if(1&i&&(t.TgZ(0,"div",98)(1,"picture"),t._UZ(2,"img",99),t.qZA(),t.TgZ(3,"label",100),t._uU(4),t.qZA()()),2&i){const n=o.$implicit,e=t.oxw();t.xp6(2),t.Q6J("src",e.BASE_URL+(null==n?null:n.imagen[0]),t.LSH)("alt",null==n?null:n.imagen_alt[0]),t.xp6(2),t.hij(" ",null==n?null:n.field_content," ")}}d.ZP.use([d.W_,d.tl]);const it=[{path:"",component:(()=>{class i{constructor(n,e,a,c,g){this.projectService=n,this.pageService=e,this.responsiveService=a,this.configServ=c,this.currencyConverter=g,this.housingProjects=[],this.projectSelectedToModal=new v.I,this.notifyChanges=new x.x,this.notifyChangesPreLaunchProject=new x.x,this.BASE_URL=w.N.imagenes_url,this.bannersHome=[],this.itemsWhyChooseUs=[],this.itemsPlanet=[],this.config={autoplay:{delay:1e4},parallax:!0,slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination",clickable:!0}}}ngOnInit(){this.init(),this.getProjectsHome()}init(){var n=this;return(0,l.Z)(function*(){const e=[()=>n.getBannersHome(),()=>n.getProjectsHome(),()=>n.convertCopToUsdProjects(),()=>n.getData(),()=>n.getCollections()];for(const a of e)yield a()})()}convertCopToUsdProjects(){var n=this;return(0,l.Z)(function*(){yield n.currencyConverter.convertCopToUsdProjects(n.housingProjects)})()}getCustomBenefitsProject(n,e){const a=n.split(",");return a.length>0?a.map(c=>e.find(g=>g.nombre==c)):[]}getBannersHome(){var n=this;return(0,l.Z)(function*(){const e=yield n.pageService.getBannersHome("titulo banner home","banner_home");e&&(n.bannersHome=e),console.log(n.bannersHome)})()}getData(){var n=this;return(0,l.Z)(function*(){const e=yield n.pageService.getPageContent("/");e&&(n.data=e)})()}getCollections(){var n=this;return(0,l.Z)(function*(){const e=yield n.pageService.getElementsContent("titulo item por que elegirnos home","item_elegirnos_home");e&&(n.itemsWhyChooseUs=e);const a=yield n.pageService.getElementsContent("titulo seccion planeta home","item_seccion_planeta_home");a&&(n.itemsPlanet=a)})()}getProjectsHome(){var n=this;return(0,l.Z)(function*(){const e=yield n.projectService.getProyectosByTipo("1");e&&(n.housingProjects=e)})()}selectProjectToModal(n){n.origin="home",this.projectSelectedToModal=n,this.notifyChanges.next({openModal:!0})}selectProjectToPreLaunch(n){this.projectSelectedToModal=n,this.notifyChangesPreLaunchProject.next({openModal:!0})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(b.Y),t.Y36(h.P),t.Y36(y.k),t.Y36(Z.E),t.Y36(j.l))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-home-page"]],decls:41,vars:19,consts:[[1,"s_home_hero"],[1,"swiper","swiperHomeHero"],[3,"config"],[4,"ngFor","ngForOf"],[1,"swiper-pagination"],[1,"bg_grad"],[1,"s_cards_proyectos"],[1,"title_section","al-center"],[1,"cnt_central"],[1,"c_cards_proyectos"],["class","card_p",4,"ngFor","ngForOf"],[1,"s_porque_elegir"],[1,"c_porque_elegir"],[1,"title_section","al-center",3,"innerHtml"],[1,"cnt_items_elegir"],["class","item_elegir",4,"ngFor","ngForOf"],[1,"s_edge"],[1,"c_edge"],[1,"cnt_edge"],[3,"innerHtml"],[1,"txt_edge_cnt"],[1,"btn",3,"routerLink"],[1,"fas","fa-chevron-right"],[1,"cnt_icons_edge"],["class","icon_edge",4,"ngFor","ngForOf"],["width","107","height","46",1,"logo_edge",3,"src","alt"],["width","414","height","284",1,"img_pri_edge",3,"src","alt"],[1,"hashtag"],[3,"modalEvent","project"],["swiperSlide",""],["class","swiper-slide",4,"ngIf","ngIfElse"],["bannerEa",""],[1,"swiper-slide"],["data-swiper-parallax-opacity","0.6",1,"bg_img_h_hero"],["width","1920","height","700",1,"bg_img_h_hero",3,"src"],[1,"cnt_h_hero"],[1,"desc_txt_hero"],["data-swiper-parallax","-300","data-swiper-parallax-duration","800",1,"aside_prjct"],["defaultImg","","width","200","height","200",3,"src"],[1,"dt_prjct",3,"ngStyle"],[1,"place_prjct"],["class","item_prjct",4,"ngFor","ngForOf"],["data-swiper-parallax","-600","data-swiper-parallax-duration","800",1,"datos_info_prjct"],["data-swiper-parallax-opacity","0.6","data-swiper-parallax","-100","data-swiper-parallax-duration","800",1,"tag",3,"ngStyle"],["data-swiper-parallax-opacity","0.6","data-swiper-parallax","-300","data-swiper-parallax-duration","800"],["data-swiper-parallax-opacity","0.6","data-swiper-parallax","-500","data-swiper-parallax-duration","800"],["data-swiper-parallax-opacity","0.6","data-swiper-parallax","-700","data-swiper-parallax-duration","800",4,"ngIf"],["data-swiper-parallax-opacity","0.6","data-swiper-parallax","-900","data-swiper-parallax-duration","800","href","",1,"btn",3,"routerLink"],[1,"grand_img_h_hero"],["class","grand_img_hero1","data-swiper-parallax-duration","600","data-swiper-parallax-scale","0.15","data-swiper-parallax-opacity","0.5",4,"ngIf","ngIfElse"],["mainImage",""],["class","grand_img_hero_mini","data-swiper-parallax-duration","700","data-swiper-parallax-scale","0.15","data-swiper-parallax-opacity","0.5",4,"ngIf"],[1,"item_prjct"],["defaultImg","","width","28","height","28",3,"src","title","alt"],["data-swiper-parallax-opacity","0.6","data-swiper-parallax","-700","data-swiper-parallax-duration","800"],["data-swiper-parallax-duration","600","data-swiper-parallax-scale","0.15","data-swiper-parallax-opacity","0.5",1,"grand_img_hero1"],["width","516","height","454",3,"src","alt","title"],["class","grand_img_hero1","data-swiper-parallax-duration","600","data-swiper-parallax-scale","0.15","data-swiper-parallax-opacity","0.5",4,"ngIf"],["data-swiper-parallax-duration","700","data-swiper-parallax-scale","0.15","data-swiper-parallax-opacity","0.5",1,"grand_img_hero_mini"],["width","204","height","137",3,"src","alt","title"],["data-swiper-parallax-opacity","0.6",1,"bg_img_h_hero_2"],[3,"href",4,"ngIf","ngIfElse"],["imgBannerWithoutLink",""],[3,"href"],["media","(max-width: 425px)",3,"srcset"],["media","(max-width: 1024px)",3,"srcset"],["media","(min-width: 1025px)",3,"srcset"],["alt","Imagen","width","1920","height","700",1,"bg_img_h_hero_2",3,"src"],[1,"card_p"],[1,"tag_state",3,"ngStyle"],["class","btns_icons",4,"ngIf"],[3,"routerLink",4,"ngIf","ngIfElse"],["notRedirect",""],[1,"name_proyecto",3,"ngStyle"],["width","87","height","87","defaultImg","",3,"src","alt","title"],[1,"datos_proyecto"],[4,"ngIf"],["class","precio_usd",4,"ngIf"],[1,"franja_p"],["width","20","height","20","src","assets/images/diseno/proyectos_vivienda/icono_proyecto.svg","alt",""],["class","ctas_proyectos",4,"ngIf","ngIfElse"],["redirect",""],[1,"btns_icons"],["target","_blank","class","btn_icon",3,"href",4,"ngIf"],["target","_blank",1,"btn_icon",3,"href"],["src","assets/images/diseno/proyectos_vivienda/icon_360.svg","width","20","height","20"],[1,"fas","fa-map-marker-alt"],[3,"routerLink"],["width","350","height","219","defaultImg","",3,"src","alt","title"],[1,"precio_usd"],[1,"ctas_proyectos"],[1,"btn_whatsapp","c-pointer",3,"click"],[1,"fab","fa-whatsapp"],[1,"ctas_proyectos",3,"ngStyle"],[1,"btn",3,"click"],[1,"item_elegir"],["width","75","height","75",3,"src","alt","title"],[1,"txt_elegir",3,"innerHtml"],[1,"icon_edge"],["width","50","height","50",3,"src","alt"],["for",""]],template:function(n,e){1&n&&(t.TgZ(0,"body")(1,"section",0)(2,"div",1)(3,"swiper",2),t.YNc(4,B,1,0,null,3),t.qZA()(),t._UZ(5,"div",4),t.qZA(),t.TgZ(6,"div",5)(7,"section",6)(8,"h2",7)(9,"span"),t._uU(10,"Proyectos"),t.qZA(),t._UZ(11,"br"),t._uU(12," Destacados "),t.qZA(),t.TgZ(13,"div",8)(14,"div",9),t.YNc(15,tt,25,21,"div",10),t.qZA()()(),t.TgZ(16,"section",11)(17,"div",8)(18,"div",12),t._UZ(19,"h2",13),t.TgZ(20,"div",14),t.YNc(21,nt,4,4,"div",15),t.qZA()()()()(),t.TgZ(22,"section",16)(23,"div",8)(24,"div",17)(25,"div",18),t._UZ(26,"h2",19),t.TgZ(27,"div",20)(28,"a",21),t._uU(29),t._UZ(30,"span",22),t.qZA(),t._uU(31),t.qZA(),t.TgZ(32,"div",23),t.YNc(33,et,5,3,"div",24),t.qZA()(),t.TgZ(34,"picture"),t._UZ(35,"img",25)(36,"img",26),t.TgZ(37,"span",27),t._uU(38),t.qZA()()()()()(),t._UZ(39,"app-modal-pre-launch-project",28)(40,"app-wpp-modal-project",28)),2&n&&(t.xp6(3),t.Q6J("config",e.config),t.xp6(1),t.Q6J("ngForOf",e.bannersHome),t.xp6(11),t.Q6J("ngForOf",e.housingProjects),t.xp6(4),t.Q6J("innerHtml",null==e.data?null:e.data.titulo_por_que_elegir,t.oJD),t.xp6(2),t.Q6J("ngForOf",e.itemsWhyChooseUs),t.xp6(5),t.Q6J("innerHtml",null==e.data?null:e.data.titulo_seccion_para_el_planeta,t.oJD),t.xp6(2),t.Q6J("routerLink",null==e.data?null:e.data.link_boton_seccion_para_el_planeta),t.xp6(1),t.hij("",null==e.data?null:e.data.texto_boton_seccion_para_el_planeta," "),t.xp6(2),t.hij(" ",null==e.data?null:e.data.subtitulo_seccion_para_el_planeta," "),t.xp6(2),t.Q6J("ngForOf",e.itemsPlanet),t.xp6(2),t.Q6J("src",e.BASE_URL+(null==e.data?null:e.data.logo_seccion_para_el_planeta),t.LSH)("alt",null==e.data?null:e.data.logo_seccion_para_el_planeta_alt),t.xp6(1),t.Q6J("src",e.BASE_URL+(null==e.data?null:e.data.imagen_seccion_para_el_planeta),t.LSH)("alt",null==e.data?null:e.data.imagen_seccion_para_el_planeta_alt),t.xp6(2),t.Oqu(null==e.data?null:e.data.hashtag_seccion_para_el_planeta),t.xp6(1),t.Q6J("modalEvent",e.notifyChangesPreLaunchProject.asObservable())("project",e.projectSelectedToModal),t.xp6(1),t.Q6J("modalEvent",e.notifyChanges.asObservable())("project",e.projectSelectedToModal))},dependencies:[p.sg,p.O5,p.PC,s.yS,m.nF,m.YC,A.n,f.B,P.w,S,T.D],styles:['.bg_grad[_ngcontent-%COMP%]{padding-top:64px;background:linear-gradient(to top,#F0F2F7,#ffffff,#EEF1F9)}.c_edge[_ngcontent-%COMP%]{background:#FFFFFF;box-shadow:0 102px 24px -108px #1a41e540,0 20px 31px -14px #4453a640;display:grid;grid-template-columns:2fr 1fr;position:relative;z-index:2;max-width:1050px;margin:0 auto}.c_edge[_ngcontent-%COMP%] > picture[_ngcontent-%COMP%]{display:inline-block;position:relative;width:100%;height:100%}.logo_edge[_ngcontent-%COMP%]{position:absolute;z-index:1;top:20px;right:10px;background-color:#fff;padding:4px;border-radius:0 20px;width:100%;height:100%;object-fit:contain;max-width:100px;height:-moz-fit-content;height:fit-content}.img_pri_edge[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.hashtag[_ngcontent-%COMP%]{position:absolute;bottom:30px;left:0;background-color:#66dc2e;font-size:18px;padding:5px 10px;font-weight:600}.cnt_edge[_ngcontent-%COMP%]{padding:40px}[_nghost-%COMP%]     .cnt_edge h2 p{font-size:50px;text-align:left;line-height:1;max-width:368px;color:#253489;font-weight:800;margin:0 0 20px}[_nghost-%COMP%]     .cnt_edge h2 p span{display:inline-block;line-height:1;font-size:24px;font-weight:400}.txt_edge_cnt[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:18px;color:#253489}.cnt_icons_edge[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:30px;align-items:center;align-content:center;margin:20px 0 0}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:inline-block}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#182360}.s_edge[_ngcontent-%COMP%]{padding:0 0 100px;position:relative}.s_edge[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:100%;max-height:280px;background:url(/assets/images/diseno/home/curva_azul_edge.svg) no-repeat center bottom;background-size:cover;top:-2;left:0;right:0;margin:auto;z-index:1}.cnt_items_elegir[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:24px;align-items:stretch}.item_elegir[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;gap:20px;background:linear-gradient(180deg,#FAFAFA 0%,#FFFFFF 100%);border-radius:24px;padding:20px;max-width:250px;justify-self:center}.item_elegir[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:inline-block;max-width:70px}.item_elegir[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.item_elegir[_ngcontent-%COMP%]   .txt_elegir[_ngcontent-%COMP%]{line-height:1.3}.s_porque_elegir[_ngcontent-%COMP%]{padding:0 0 100px}.c_porque_elegir[_ngcontent-%COMP%]{max-width:1050px;margin:auto}.s_proyecto_vivienda[_ngcontent-%COMP%]{background:linear-gradient(180deg,rgba(233,237,247,0) 0%,#E8EBF1 72.6%),#FFFFFF;min-height:340px;position:relative}.s_proyecto_vivienda[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:-2px;background:url(/assets/images/diseno/proyectos_vivienda/curva_bg.svg) no-repeat;background-size:cover;background-position:center top;z-index:1;width:100%;height:100%;max-height:145px;pointer-events:none}.c_proyecto_vivienda[_ngcontent-%COMP%]{position:relative}.c_proyecto_vivienda[_ngcontent-%COMP%]:before, .c_proyecto_vivienda[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/nueva/images/diseno/proyectos_vivienda/puntos.svg) no-repeat center;width:20px;height:70px}.c_proyecto_vivienda[_ngcontent-%COMP%]:after{right:0;left:initial;top:initial;bottom:0;transform:rotate(180deg)}.s_cards_proyectos[_ngcontent-%COMP%]{padding:0 0 40px;position:relative;z-index:1}.s_cards_proyectos[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]{margin-top:0}.c_cards_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}.card_p[_ngcontent-%COMP%]{overflow:hidden;background:#FFFFFF;box-shadow:0 19px 41px -18px #23386273;border-radius:24px;display:inline-grid}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;max-height:219px;width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:contain}.card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%]{text-align:center;position:absolute;left:10px;top:10px;border-radius:100px;padding:8px 20px;color:#fff;font-weight:600;font-size:14px;z-index:1}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:10px;right:10px;border-radius:6px;background:var(--color-grad_azul_osc);width:80px;height:40px;z-index:1;overflow:hidden}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{position:absolute;left:0;right:0;height:80%;width:1px;background-color:#a5a5a5;margin:auto;z-index:2}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;display:flex;justify-content:center;align-items:center;width:26px;height:26px;transition:.3s ease;width:100%;height:100%;position:relative}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{content:"";background-color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px;color:#fff;display:inline-flex;justify-content:center;align-items:center}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{background-color:#2e3b85;padding:10px;display:grid;grid-template-columns:80px 1fr;align-items:center;gap:20px;position:relative;min-height:54px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-width:87px;border-radius:100px;border:5px solid #FFFFFF;background-color:#fff;position:absolute;width:90px;height:90px;box-shadow:0 5px 15px -5px #00000054;left:10px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{grid-column:2;color:#fff;font-size:15px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 20px;text-align:center;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:34px;font-weight:900;display:flex;align-items:center;gap:10px;text-align:center;justify-content:center}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;display:inline-block}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]{width:100%;background:linear-gradient(90deg,rgba(238,238,238,.5) 0%,#EEEEEE 48.96%,rgba(238,238,238,.5) 100%);display:flex;align-items:center;justify-content:center;gap:10px;padding:10px}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:center;padding:10px}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover{color:#060b29}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(180deg,#5FFC7B 0%,#26D044 100%);border-radius:6px;display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:22px;color:#fff;font-weight:500}.card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;justify-self:flex-end}.s_home_hero[_ngcontent-%COMP%]{position:relative}.s_home_hero[_ngcontent-%COMP%]:before{content:"";position:absolute;bottom:-2px;width:100%;height:100%;max-height:120px;left:0;right:0;margin:0 auto;background-size:contain;z-index:10}.s_home_hero[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{min-height:650px;padding:80px;height:100%}[_nghost-%COMP%]     .swiperHomeHero .swiper-wrapper>.swiper-slide{height:auto}[_nghost-%COMP%]     .swiper-pagination-horizontal{width:100%;display:flex;gap:10px;left:0;bottom:62px;margin:auto;justify-content:center}[_nghost-%COMP%]     .swiper-pagination-bullet{width:12px;height:12px}[_nghost-%COMP%]     .swiper-pagination-bullet-active{width:12px;height:12px;background:#253489;border-radius:100px;transition:.3s ease}[_nghost-%COMP%]     .swiper-pagination-bullet-active{width:20px}.bg_img_h_hero[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;inset:0;z-index:1}.bg_img_h_hero_2[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;inset:0;z-index:1;object-fit:cover}.bg_img_h_hero[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;background:#FFFFFF;z-index:2;mix-blend-mode:color}.bg_img_h_hero[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;background:linear-gradient(to right,rgba(255,255,255,.8509803922),#ffffff);z-index:2;opacity:1}.bg_img_h_hero_2[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;mix-blend-mode:color}.bg_img_h_hero_2[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;opacity:1}.bg_img_h_hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.cnt_h_hero[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.5fr 1fr;position:relative;z-index:2;gap:40px}.grand_img_h_hero[_ngcontent-%COMP%]{position:relative;z-index:3}.grand_img_h_hero[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-40px;top:0;bottom:0;margin:auto;width:20px;height:90px;background:url(/assets/images/diseno/home/puntos.svg) no-repeat center;background-size:contain}.grand_img_h_hero[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-self:center}.grand_img_h_hero[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{position:absolute;z-index:2;max-width:200px;bottom:40px;left:-100px;border-radius:15px;overflow:hidden;box-shadow:8px 21px 30px -14px #112333;min-height:134px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:160px 30px;overflow:hidden;max-height:454px;min-height:454px}.desc_txt_hero[_ngcontent-%COMP%]{display:flex;align-items:center;gap:30px;position:relative;z-index:2}.aside_prjct[_ngcontent-%COMP%]{border-radius:16px;background-color:#fff;padding:8px;display:flex;flex-direction:column;align-items:center;max-width:160px;min-width:150px;z-index:2}.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;align-items:center}.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.dt_prjct[_ngcontent-%COMP%]{border-radius:15px;padding:16px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:10px;color:#fff}.item_prjct[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;width:100%;text-align:left;font-size:13px}.item_prjct[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:grayscale(1) brightness(20)}.datos_info_prjct[_ngcontent-%COMP%]{max-width:680px;position:relative;z-index:1}.datos_info_prjct[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{padding:4px 20px;border-radius:100px;width:-moz-fit-content;width:fit-content;color:#fff}.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:1;margin:14px 0;color:#182360;text-align:left}.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:400;text-align:left;padding:0 0 6px;border-bottom:1px solid #182360;width:-moz-fit-content;width:fit-content;color:#182360;position:relative}.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{content:"";position:absolute;width:80px;height:6px;border-radius:100px;background-color:#3e6ddf;bottom:-3px;left:30px}.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:34px;color:#182360;margin:10px 0}.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:23px}@media screen and (min-width: 2540px){.s_home_hero[_ngcontent-%COMP%]:before{background-size:cover;background-position:top;max-height:169px}}@media screen and (max-width: 1440px){.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:43px}.s_home_hero[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{padding:80px 60px}}@media screen and (max-width: 1280px){.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{bottom:20px;left:-40px}.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:33px}.s_home_hero[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{padding:50px 30px 50px 60px;min-height:550px}}@media screen and (max-width: 1050px){.cnt_h_hero[_ngcontent-%COMP%]{grid-template-columns:1fr}.desc_txt_hero[_ngcontent-%COMP%]{gap:20px}[_nghost-%COMP%]     .swiper-pagination-horizontal{left:0!important;right:0!important;margin:auto!important;flex-direction:row!important;top:8px!important;bottom:initial!important;height:12px!important;width:100%}[_nghost-%COMP%]     .swiper-pagination-bullet-active{width:20px;height:12px}}@media screen and (max-width: 768px){.s_home_hero[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{padding:32px 20px;min-height:initial}.grand_img_h_hero[_ngcontent-%COMP%]{max-height:350px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%]{min-height:initial}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{left:0;right:0;margin:auto;bottom:-30px;width:130px;display:none}.cnt_items_elegir[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.cnt_edge[_ngcontent-%COMP%]{padding:20px}.c_edge[_ngcontent-%COMP%]{grid-template-columns:1fr}.txt_edge_cnt[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.cnt_icons_edge[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}}@media screen and (max-width: 480px){.cnt_h_hero[_ngcontent-%COMP%]{gap:0px}.cnt_items_elegir[_ngcontent-%COMP%]{grid-template-columns:1fr}.item_elegir[_ngcontent-%COMP%]{max-width:initial}.desc_txt_hero[_ngcontent-%COMP%]{flex-direction:column;order:2;padding-top:0;gap:0}.datos_info_prjct[_ngcontent-%COMP%]{padding-top:16px}.aside_prjct[_ngcontent-%COMP%]{flex-direction:row;max-width:initial;width:100%}.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{max-width:100px}.dt_prjct[_ngcontent-%COMP%]{width:100%;text-align:left;justify-content:flex-start;align-items:flex-start;display:grid;grid-template-columns:1fr 1fr}.dt_prjct[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.place_prjct[_ngcontent-%COMP%]{grid-column:1/3}.grand_img_h_hero[_ngcontent-%COMP%]{max-height:250px}.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%]{border-radius:100px 20px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{bottom:-50px;max-height:90px;min-height:initial}.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}}']}),i})(),canActivate:[O]}];let ot=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[s.Bz.forChild(it),s.Bz]}),i})(),at=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.ez,ot,m.kz,f.B,P.w]}),i})()}}]);
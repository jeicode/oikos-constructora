import{a as de}from"./chunk-UPUECNQO.js";import{a as fe}from"./chunk-JGVCT673.js";import{a as ue}from"./chunk-BTLJX74Q.js";import{a as b}from"./chunk-GBTEJTQQ.js";import"./chunk-FWCGPABR.js";import{a as v}from"./chunk-7SCTSF4L.js";import{M as me,Na as F,c as Y,d as ee,e as te,ia as pe,m as ie,o as j,p as ne,q as oe,r as re,s as le,ta as _e,u as ae,ua as L,v as se,z as ce}from"./chunk-H2TGXSEJ.js";import{$ as I,Ab as l,Bb as u,Eb as w,Fb as S,Gb as c,Jb as D,Oa as C,Qb as N,Rb as p,Sb as J,Ta as a,Tb as f,Wb as H,X as y,Y as O,Yb as B,aa as k,bc as Q,cb as M,d as _,da as P,ea as R,ib as d,jb as Z,nb as W,oa as K,pa as h,pb as s,r as q,tb as X,vb as T,wb as V,xb as z,yb as G,zb as r}from"./chunk-R7NMAL7N.js";var ge=(()=>{let i=class i{constructor(){}intercept(n,o){let m=v.token,x=n;return m&&(x=n.clone({setHeaders:{"x-api-key":m}})),o.handle(x)}};i.\u0275fac=function(o){return new(o||i)},i.\u0275prov=P({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();var he=(e,i)=>_(void 0,null,function*(){let t=h(b),n=h(ue),o=h(de),m=yield t.getSeoContentPage("/");return m?(n.setUpMetaTags(m),o.insertSchema(o.getHomeSchema(),{className:"home_schema",id:0}),!0):!1});var Ve=[{path:"",loadComponent:()=>import("./chunk-HXBND7MW.js").then(e=>e.HomePageComponent),canActivate:[he]},{path:"contactanos",loadChildren:()=>import("./chunk-2IY3VHIV.js").then(e=>e.ContactModule)},{path:"gracias/:slug",loadChildren:()=>import("./chunk-NGAATFW5.js").then(e=>e.ThanksModule)},{path:"noticias-constructora",loadChildren:()=>import("./chunk-KWUTIRR7.js").then(e=>e.BlogModule)},{path:"proyectos-construccion-vivienda",loadChildren:()=>import("./chunk-74JBGI6U.js").then(e=>e.ViviendaModule)},{path:"proyectos-construccion-comerciales-industriales",loadChildren:()=>import("./chunk-YMILA3LE.js").then(e=>e.ComercialesModule)},{path:"proyecto/:slug",loadChildren:()=>import("./chunk-E4D5S6PV.js").then(e=>e.InternaModule)},{path:"legales",loadChildren:()=>import("./chunk-7WQ3EFBD.js").then(e=>e.LegalesModule)},{path:"proyectos-ejecutados",loadChildren:()=>import("./chunk-SOGXQMXU.js").then(e=>e.EjecutadosModule)},{path:"pagos-constructora",loadChildren:()=>import("./chunk-KST4GUF3.js").then(e=>e.PagosModule)},{path:"mapa-del-sitio",loadChildren:()=>import("./chunk-KWUMHH5V.js").then(e=>e.MapaModule)},{path:"**",loadComponent:()=>import("./chunk-G2HVEFQW.js").then(e=>e.NotFoundPageComponent)},{path:"404",loadComponent:()=>import("./chunk-G2HVEFQW.js").then(e=>e.NotFoundPageComponent)}],ve=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=O({type:i}),i.\u0275inj=R({imports:[F.forRoot(Ve),F]});let e=i;return e})();function ze(e,i){if(e&1&&(r(0,"a",19),u(1,"img",20),r(2,"span",21),p(3),l()()),e&2){let t=c().$implicit,n=c();s("href",t.enlace,C),a(),s("ngSrc",n.IMG_URL()+(t.imagen==null?null:t.imagen[0]))("alt",t.imagen_alt==null?null:t.imagen_alt[0])("title",t.imagen_title==null?null:t.imagen_title[0]),a(2),J(t==null?null:t.field_content)}}function Ge(e,i){if(e&1&&(r(0,"a",19),u(1,"img",20),l()),e&2){let t=c().$implicit,n=c();s("href",t.enlace,C),a(),s("ngSrc",n.IMG_URL()+(t.imagen==null?null:t.imagen[0]))("alt",t.imagen_alt==null?null:t.imagen_alt[0])("title",t.imagen_title==null?null:t.imagen_title[0])}}function Je(e,i){if(e&1&&d(0,ze,4,5,"a",18)(1,Ge,2,4),e&2){let t=i.$implicit;T(0,t.enlace.includes("https://")?0:1)}}function Be(e,i){e&1&&(r(0,"h1",22)(1,"a",23),p(2," Grupo Oikos "),l()())}function Qe(e,i){e&1&&(r(0,"div",22)(1,"a",23),p(2," Grupo Oikos "),l()())}function qe(e,i){if(e&1&&(r(0,"a",27),p(1),l()),e&2){let t=c().$implicit;s("href",t.enlace_menu,C),a(),f(" ",t.field_content," ")}}function Ke(e,i){if(e&1&&(r(0,"a",28),p(1),l()),e&2){let t=c().$implicit;D("routerLink",t.enlace_menu),a(),J(t.field_content)}}function Ze(e,i){if(e&1){let t=w();r(0,"li",26),S("click",function(){I(t);let o=c(2);return k(o.closeNav())}),d(1,qe,2,2,"a",27)(2,Ke,2,2),l()}if(e&2){let t=i.$implicit;a(),T(1,t.enlace_menu.includes("https://")?1:2)}}var xe=e=>({active:e});function We(e,i){if(e&1){let t=w();r(0,"nav",24)(1,"ul"),z(2,Ze,3,1,"li",null,V),r(4,"a",25),S("click",function(){I(t);let o=c();return k(o.closeNav())}),p(5," Contacto "),l()()()}if(e&2){let t=c();s("ngClass",B(1,xe,t.menuMobileIsActive)),a(2),G(t.linksHeader)}}var U=(()=>{let i=class i{constructor(){this.IMG_URL=M(v.imagenes_url),this.pageService=h(b),this.router=h(_e),this.menuMobileIsActive=!1,this.homeIsActive=!1,this.logos=M([]),this.linksHeader=[],this.suscribeListenRouter=this.router.events.subscribe(n=>{n instanceof me&&(this.router.url=="/"?this.homeIsActive=!0:this.homeIsActive=!1)})}ngOnInit(){this.getCollectionsPage()}ngOnDestroy(){this.suscribeListenRouter.unsubscribe()}closeNav(){$(".btn_menu_movil").hasClass("active")&&$(".btn_menu_movil").click()}getCollectionsPage(){return _(this,null,function*(){this.linksHeader=yield this.pageService.getElementsContent("titulo menu","menu");let n=yield this.pageService.getElementsContent("titulo empresa","logos_empresas","field_name='ver en header' AND field_content='2'");this.logos.set(n)})}toogleActiveMenuMobile(){this.menuMobileIsActive=!this.menuMobileIsActive}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=y({type:i,selectors:[["app-header"]],standalone:!0,features:[H],decls:30,vars:5,consts:[[1,"header"],[1,"topbar_h"],[1,"cnt_inf_topbar_h"],[1,"ctn_logos"],["href","https://clientes.oikos.com.co/zonaclientesoikos/","target","_blank",1,"btn_z_clientes"],["routerLink","/pagos-constructora",1,"btn_pse"],[1,"txt_pse"],[1,"ic_pse"],[1,"cnt_esp_eng"],[1,"btn_idioma","active"],[1,"ic_bandera"],["ngSrc","assets/images/diseno/ic_col.svg","width","14","height","12","alt",""],["href","https://www.oikosconstructora.us/",1,"btn_idioma"],["ngSrc","assets/images/diseno/ic_usa.svg","width","14","height","12","alt",""],[1,"nav_bar_h"],["class","logo_pri"],["class","nav",3,"ngClass"],[1,"btn_menu_movil",3,"ngClass","click"],["target","_blank","class","btn_oikos_logos",3,"href"],["target","_blank",1,"btn_oikos_logos",3,"href"],["width","38","height","24",3,"ngSrc","alt","title"],[1,"txt_logos_h"],[1,"logo_pri"],["routerLink","/"],[1,"nav",3,"ngClass"],["routerLink","/contactanos",1,"btn","contacto_h",3,"click"],[3,"click"],["target","_blank",3,"href"],[3,"routerLink"]],template:function(o,m){o&1&&(r(0,"header",0)(1,"div",1)(2,"div",2)(3,"div",3),z(4,Je,2,1,null,null,V),l(),r(6,"a",4),p(7," Zona de Clientes "),l(),r(8,"a",5)(9,"div",6),p(10,"Pague aqu\xED"),l(),u(11,"span",7),l()(),r(12,"div",8)(13,"a",9)(14,"span",10),u(15,"img",11),l(),p(16," Es "),l(),r(17,"a",12)(18,"span",10),u(19,"img",13),l(),p(20," En "),l()()(),r(21,"div",14),d(22,Be,3,0,"h1",15)(23,Qe,3,0)(24,We,6,3,"nav",16),r(25,"div",17),S("click",function(){return m.toogleActiveMenuMobile()}),r(26,"span"),u(27,"span")(28,"span")(29,"span"),l()()()()),o&2&&(a(4),G(m.logos()),a(18),T(22,m.homeIsActive?22:23),a(2),T(24,m.linksHeader.length>0?24:-1),a(),s("ngClass",B(3,xe,m.menuMobileIsActive)))},dependencies:[Y,F,L,j],encapsulation:2});let e=i;return e})();var Se=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=y({type:i,selectors:[["app-root"]],decls:3,vars:0,consts:[[1,"cuerpo"]],template:function(o,m){o&1&&(r(0,"div",0),u(1,"app-header")(2,"router-outlet"),l())},dependencies:[pe,U]});let e=i;return e})();var A=class{constructor(i="",t="",n="",o="",m="",x="",ke="",we="",be="",Ee="",Me="",Te="",$e="",De="",Ne="",Oe="",Pe="",Re="",He="",je="",Le="",Ue="",Ae=""){this.address=i,this.autoalmacenamiento=t,this.celular=n,this.celular_formato=o,this.contactemails=m,this.correo_pruebas=x,this.cotizador=ke,this.emails=we,this.field_form_loc=be,this.field_form_uri=Ee,this.nombre_empresa=Me,this.notas_por_pagina=Te,this.pbx=$e,this.pbx_formato=De,this.phone2=Ne,this.redaccion=Oe,this.telefono_wsp=Pe,this.texto_feed=Re,this.texto_footer=He,this.texto_general_contacto_sedes=je,this.texto_wsp=Le,this.titulo_feed=Ue,this.trabaje=Ae}};var{api_url:g}=v,Fe=(()=>{let i=class i{constructor(n){this._http=n}getSocialNetwork(){return _(this,null,function*(){let n=`${g}v1/getSocialNetwork`;return this._http.get(n).toPromise().then().catch(o=>(console.error(o),[]))})}getConfigFooter(){return _(this,null,function*(){let n=`${g}v1/getConfigInfo`;return this._http.get(n).toPromise().then().catch(o=>(console.warn(o),!1))})}getDepartaments(){return _(this,null,function*(){let n=`${g}v1/getDepartamentos`;return this._http.get(n).toPromise().then().catch(o=>(console.warn(o),!1))})}getCities(n){return _(this,null,function*(){let o=`${g}v1/getCiudades`,m={departamento:n};return this._http.post(o,JSON.stringify(m)).toPromise().then().catch(x=>(console.warn(x),!1))})}setContactForm(n){return _(this,null,function*(){let o=`${g}v1/setContactForm`;return this._http.post(o,JSON.stringify(n)).toPromise().then()})}setContactPQRS(n){return _(this,null,function*(){let o=`${g}v1/setContactPQRS`;return this._http.post(o,JSON.stringify(n)).toPromise().then()})}setSedeForm(n){return _(this,null,function*(){let o=`${g}v1/setSedeForm`;return this._http.post(o,JSON.stringify(n)).toPromise().then()})}setAutoForm(n){return _(this,null,function*(){let o=`${g}v1/setAutoForm`;return this._http.post(o,JSON.stringify(n)).toPromise().then()})}setMinibodegasForm(n){return _(this,null,function*(){let o=`${g}v1/setMinibodegasForm`;return this._http.post(o,JSON.stringify(n)).toPromise().then()})}setCotizador(n){return _(this,null,function*(){let o=`${g}v1/setCotizador`;return this._http.post(o,JSON.stringify(n)).toPromise().then()})}getMenu(){return _(this,null,function*(){let n=`${g}v1/getMenu`;return this._http.get(n).toPromise().then()})}getMenuFooter(){return _(this,null,function*(){let n=`${g}v1/getMenuFooter`;return q(this._http.get(n)).catch(o=>(console.error(o),[]))})}};i.\u0275fac=function(o){return new(o||i)(K(ne))},i.\u0275prov=P({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();var Ye=()=>[import("./chunk-BQ5JSASB.js").then(e=>e.SurveyModalComponent),ee,te,L,j];function et(e,i){if(e&1&&(r(0,"a",10),u(1,"img",11),l()),e&2){let t=i.$implicit,n=c(3);s("href",t==null?null:t.enlace,C),a(),s("ngSrc",n.IMG_URL()+(t==null?null:t.imagen[0]))("alt",t==null?null:t.imagen_alt[0])("title",t==null?null:t.imagen_title[0])}}function tt(e,i){if(e&1&&(r(0,"div",8),d(1,et,2,4,"a",9),l()),e&2){let t=c(2);a(),s("ngForOf",t.companies)}}function it(e,i){if(e&1&&(r(0,"div")(1,"div",12),p(2),l(),r(3,"div",13)(4,"div",14)(5,"span",15),p(6,"place"),l(),p(7),l(),r(8,"div",14)(9,"span",15),p(10,"mail"),l(),p(11),l()()()),e&2){let t=c(2);a(2),f(" ",t.configFooter.texto_footer," "),a(5),f(" ",t.configFooter.address," "),a(4),f(" ",t.configFooter.contactemails," ")}}function nt(e,i){if(e&1&&(r(0,"div",18),u(1,"img",19),l()),e&2){let t=i.$implicit,n=c(3);a(),s("ngSrc",n.IMG_URL()+(t==null?null:t.imagen[0]))("alt",t==null?null:t.imagen_alt[0])("title",t==null?null:t.imagen_title[0])}}function ot(e,i){if(e&1&&(r(0,"div",16),d(1,nt,2,3,"div",17),l()),e&2){let t=c(2);a(),s("ngForOf",t.logos)}}function rt(e,i){if(e&1&&(r(0,"a",29),p(1),l()),e&2){let t=c().$implicit;s("href",t==null?null:t.url_enlace_footer,C),a(),f(" ",t==null?null:t.field_content," ")}}function lt(e,i){if(e&1&&(r(0,"a",30),p(1),l()),e&2){let t=c().$implicit;D("routerLink",t==null?null:t.url_enlace_footer),a(),f(" ",t==null?null:t.field_content," ")}}function at(e,i){if(e&1&&(r(0,"li"),d(1,rt,2,2,"a",27)(2,lt,2,2,"ng-template",null,28,Q),l()),e&2){let t=i.$implicit,n=N(3);a(),s("ngIf",(t==null||t.url_enlace_footer==null?null:t.url_enlace_footer.includes("https://"))||(t==null||t.url_enlace_footer==null?null:t.url_enlace_footer.includes("http://")))("ngIfElse",n)}}function st(e,i){if(e&1){let t=w();r(0,"div",22,23),S("click",function(){I(t);let o=N(1),m=c(3);return k(m.dropdownToogleMenu(o))}),r(2,"div",24),p(3),l(),r(4,"ul",25),d(5,at,4,2,"li",26),l()()}if(e&2){let t=i.$implicit;a(3),f(" ",t==null?null:t.field_content," "),a(2),s("ngForOf",t.hijos)}}function ct(e,i){if(e&1&&(r(0,"a",29),p(1),l()),e&2){let t=c().$implicit;s("href",t==null?null:t.url_enlace_footer,C),a(),f(" ",t==null?null:t.field_content," ")}}function mt(e,i){if(e&1&&(r(0,"a",30),p(1),l()),e&2){let t=c().$implicit;D("routerLink",t==null?null:t.url_enlace_footer),a(),f(" ",t==null?null:t.field_content," ")}}function pt(e,i){if(e&1&&(r(0,"li"),d(1,ct,2,2,"a",27)(2,mt,2,2,"ng-template",null,28,Q),l()),e&2){let t=i.$implicit,n=N(3);a(),s("ngIf",t==null||t.url_enlace_footer==null?null:t.url_enlace_footer.includes("https://"))("ngIfElse",n)}}function _t(e,i){if(e&1){let t=w();r(0,"div",22,23),S("click",function(){I(t);let o=N(1),m=c(3);return k(m.dropdownToogleMenu(o))}),r(2,"div",31),p(3),l(),r(4,"ul",25),d(5,pt,4,2,"li",26),l()()}if(e&2){let t=i.$implicit;a(3),f(" ",t.field_content," "),a(2),s("ngForOf",t.hijos)}}function dt(e,i){if(e&1&&(r(0,"div",20),d(1,st,6,2,"div",21)(2,_t,6,2,"div",21),l()),e&2){let t=c(2);a(),s("ngForOf",t.menuFooter),a(),s("ngForOf",t.menuFooterProyectos)}}function ut(e,i){if(e&1&&(r(0,"a",36),u(1,"i"),l()),e&2){let t=i.$implicit;s("href",t==null?null:t.url,C),a(),X(t==null?null:t.class_footer)}}function ft(e,i){if(e&1&&(r(0,"div",32)(1,"div",33),d(2,ut,2,3,"a",34),l(),r(3,"div",35),p(4," \xA9OIKOS CONSTRUCTORA 2022. Todos los derechos reservados. "),l()()),e&2){let t=c(2);a(2),s("ngForOf",t.socialNetwork)}}function gt(e,i){if(e&1&&(r(0,"footer",0)(1,"div",1)(2,"div",2),d(3,tt,2,1,"div",3)(4,it,12,3,"div",4)(5,ot,2,1,"div",5),l()(),d(6,dt,3,2,"div",6)(7,ft,5,1,"div",7),l(),u(8,"survey-modal")),e&2){let t=c();a(3),s("ngIf",t.companies.length>0),a(),s("ngIf",t.configFooter),a(),s("ngIf",t.logos.length>0),a(),s("ngIf",t.menuFooter.length>0),a(),s("ngIf",t.socialNetwork.length>0)}}function ht(e,i){e&1&&u(0,"div",37)}var ye=(()=>{let i=class i{constructor(){this.globalService=h(Fe),this.responsive=h(fe),this.pageService=h(b),this.IMG_URL=M(v.imagenes_url),this.loadingData=!1,this.BASE_URL=v.imagenes_url,this.socialNetwork=[],this.configFooter=new A,this.companies=[],this.logos=[],this.menuFooter=[],this.menuFooterProyectos=[]}ngOnInit(){this.init()}init(){return _(this,null,function*(){yield this.getCollectionsPage(),yield this.getConfigFooter(),yield this.getMenuFooter(),yield this.getSocialNetwork(),this.loadingData=!0})}getSocialNetwork(){return _(this,null,function*(){this.socialNetwork=yield this.globalService.getSocialNetwork()})}getConfigFooter(){return _(this,null,function*(){let n=yield this.globalService.getConfigFooter();n&&(this.configFooter=n)})}getCollectionsPage(){return _(this,null,function*(){this.companies=yield this.pageService.getElementsContent("titulo empresa","logos_empresas"),this.logos=yield this.pageService.getElementsContent("titulo logo footer","logos")})}getMenuFooter(){return _(this,null,function*(){let n=yield this.globalService.getMenuFooter();this.menuFooter=n.splice(0,2),this.menuFooterProyectos=n})}dropdownToogleMenu(n){if(this.responsive.isMobile){let o=$(n).find(".h_cl_pie"),m=$(n).find(".menu_pie");$(o).hasClass("active")?($(o).next(m).slideUp(),$(o).removeClass("active")):($(m).slideUp(),$(o).removeClass("active"),$(o).addClass("active"),$(o).next().slideToggle())}}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=y({type:i,selectors:[["app-footer"]],standalone:!0,features:[H],decls:4,vars:0,consts:[[1,"footer"],[1,"cnt_lat_pie"],[1,"cnt_gen_inf_lat_pie"],["class","cnt_logos_pie",4,"ngIf"],[4,"ngIf"],["class","cnt_gen_cert_pie",4,"ngIf"],["class","cnt_mid_pie",4,"ngIf"],["class","cnt_bot_pie",4,"ngIf"],[1,"cnt_logos_pie"],["target","_blank","rel","noopener","class","logo_pie",3,"href",4,"ngFor","ngForOf"],["target","_blank","rel","noopener",1,"logo_pie",3,"href"],["width","80","height","60",3,"ngSrc","alt","title"],[1,"txt_pie"],[1,"cnt_dir_pie"],[1,"direccion_pie"],[1,"material-icons"],[1,"cnt_gen_cert_pie"],["class","logo_cert_pie",4,"ngFor","ngForOf"],[1,"logo_cert_pie"],["height","143","width","140",3,"ngSrc","alt","title"],[1,"cnt_mid_pie"],["class","col_mid_men_pie",3,"click",4,"ngFor","ngForOf"],[1,"col_mid_men_pie",3,"click"],["menuEle",""],[1,"h_cl_pie"],[1,"menu_pie"],[4,"ngFor","ngForOf"],["target","_blank","rel","noopener",3,"href",4,"ngIf","ngIfElse"],["routerLink",""],["target","_blank","rel","noopener",3,"href"],[3,"routerLink"],[1,"h_cl_pie","proy_footer"],[1,"cnt_bot_pie"],[1,"cnt_redes_pie"],["target","_blank","rel","nofollow",3,"href",4,"ngFor","ngForOf"],[1,"copyr_pie"],["target","_blank","rel","nofollow",3,"href"],[1,""]],template:function(o,m){o&1&&(d(0,gt,9,5)(1,ht,1,0),Z(2,0,Ye,null,1),W(0,-1))},dependencies:[ie,F],encapsulation:2});let e=i;return e})();var Ie=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=O({type:i,bootstrap:[Se]}),i.\u0275inj=R({providers:[re(le()),{provide:oe,useClass:ge,multi:!0},ce()],imports:[se,ve,U,ye]});let e=i;return e})();v.production&&void 0;ae().bootstrapModule(Ie).catch(e=>console.error(e));

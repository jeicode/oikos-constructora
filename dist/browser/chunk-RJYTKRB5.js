import{a as _e}from"./chunk-N3ZSSO6E.js";import{a as N}from"./chunk-3F7A77HI.js";import{a as I}from"./chunk-7SCTSF4L.js";import{M as B,Na as V,c as H,d as G,e as J,m as z,o as Q,p as ce,ta as q,ua as K}from"./chunk-E2SANVYB.js";import{$ as v,Ab as a,Bb as r,Cb as g,Fb as x,Gb as f,Hb as c,Kb as L,Lb as A,Mb as U,Oa as S,Rb as F,Sb as d,Ta as l,Tb as M,Ua as E,Ub as C,Vb as k,X as O,Xb as P,Y as oe,Zb as T,aa as h,cb as R,cc as D,d as u,da as ae,ea as re,ib as m,oa as le,pa as Z,pb as b,qb as _,r as ne,ub as se,vb as Y,wb as j,xb as ee,yb as te,zb as ie}from"./chunk-4JXXPMF3.js";function ze(t,o){if(t&1&&(a(0,"a",19),g(1,"img",20),a(2,"span",21),d(3),r()()),t&2){let e=c().$implicit,i=c();_("href",e.enlace,S),l(),_("ngSrc",i.IMG_URL()+(e.imagen==null?null:e.imagen[0]))("alt",e.imagen_alt==null?null:e.imagen_alt[0])("title",e.imagen_title==null?null:e.imagen_title[0]),l(2),M(e==null?null:e.field_content)}}function Ve(t,o){if(t&1&&(a(0,"a",19),g(1,"img",20),r()),t&2){let e=c().$implicit,i=c();_("href",e.enlace,S),l(),_("ngSrc",i.IMG_URL()+(e.imagen==null?null:e.imagen[0]))("alt",e.imagen_alt==null?null:e.imagen_alt[0])("title",e.imagen_title==null?null:e.imagen_title[0])}}function Ne(t,o){if(t&1&&m(0,ze,4,5,"a",18)(1,Ve,2,4),t&2){let e=o.$implicit;j(0,e.enlace.includes("https://")?0:1)}}function Re(t,o){t&1&&(a(0,"h1",22)(1,"a",23),d(2," Grupo Oikos "),r()())}function je(t,o){t&1&&(a(0,"div",22)(1,"a",23),d(2," Grupo Oikos "),r()())}function Le(t,o){if(t&1&&(a(0,"a",27),d(1),r()),t&2){let e=c().$implicit;_("href",e.enlace_menu,S),l(),C(" ",e.field_content," ")}}function Ae(t,o){if(t&1&&(a(0,"a",28),d(1),r()),t&2){let e=c().$implicit;L("routerLink",e.enlace_menu),l(),M(e.field_content)}}function Ue(t,o){if(t&1){let e=x();a(0,"li",26),f("click",function(){v(e);let n=c(2);return h(n.closeNav())}),m(1,Le,2,2,"a",27)(2,Ae,2,2),r()}if(t&2){let e=o.$implicit;l(),j(1,e.enlace_menu.includes("https://")?1:2)}}var pe=t=>({active:t});function De(t,o){if(t&1){let e=x();a(0,"nav",24)(1,"ul"),te(2,Ue,3,1,"li",null,ee),a(4,"a",25),f("click",function(){v(e);let n=c();return h(n.closeNav())}),d(5," Contacto "),r()()()}if(t&2){let e=c();_("ngClass",T(1,pe,e.menuMobileIsActive)),l(2),ie(e.linksHeader)}}var me=(()=>{let o=class o{constructor(){this.IMG_URL=R(I.imagenes_url),this.pageService=Z(N),this.router=Z(q),this.menuMobileIsActive=!1,this.homeIsActive=!1,this.logos=R([]),this.linksHeader=[],this.suscribeListenRouter=this.router.events.subscribe(i=>{i instanceof B&&(this.router.url=="/"?this.homeIsActive=!0:this.homeIsActive=!1)})}ngOnInit(){this.getCollectionsPage()}ngOnDestroy(){this.suscribeListenRouter.unsubscribe()}closeNav(){$(".btn_menu_movil").hasClass("active")&&$(".btn_menu_movil").click()}getCollectionsPage(){return u(this,null,function*(){this.linksHeader=yield this.pageService.getElementsContent("titulo menu","menu");let i=yield this.pageService.getElementsContent("titulo empresa","logos_empresas","field_name='ver en header' AND field_content='2'");this.logos.set(i)})}toogleActiveMenuMobile(){this.menuMobileIsActive=!this.menuMobileIsActive}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=O({type:o,selectors:[["app-header"]],standalone:!0,features:[P],decls:30,vars:5,consts:[[1,"header"],[1,"topbar_h"],[1,"cnt_inf_topbar_h"],[1,"ctn_logos"],["href","https://clientes.oikos.com.co/zonaclientesoikos/","target","_blank",1,"btn_z_clientes"],["routerLink","/pagos-constructora",1,"btn_pse"],[1,"txt_pse"],[1,"ic_pse"],[1,"cnt_esp_eng"],[1,"btn_idioma","active"],[1,"ic_bandera"],["ngSrc","assets/images/diseno/ic_col.svg","width","14","height","12","alt",""],["href","https://www.oikosconstructora.us/",1,"btn_idioma"],["ngSrc","assets/images/diseno/ic_usa.svg","width","14","height","12","alt",""],[1,"nav_bar_h"],["class","logo_pri"],["class","nav",3,"ngClass"],[1,"btn_menu_movil",3,"ngClass","click"],["target","_blank","class","btn_oikos_logos",3,"href"],["target","_blank",1,"btn_oikos_logos",3,"href"],["width","38","height","24",3,"ngSrc","alt","title"],[1,"txt_logos_h"],[1,"logo_pri"],["routerLink","/"],[1,"nav",3,"ngClass"],["routerLink","/contactanos",1,"btn","contacto_h",3,"click"],[3,"click"],["target","_blank",3,"href"],[3,"routerLink"]],template:function(n,s){n&1&&(a(0,"header",0)(1,"div",1)(2,"div",2)(3,"div",3),te(4,Ne,2,1,null,null,ee),r(),a(6,"a",4),d(7," Zona de Clientes "),r(),a(8,"a",5)(9,"div",6),d(10,"Pague aqu\xED"),r(),g(11,"span",7),r()(),a(12,"div",8)(13,"a",9)(14,"span",10),g(15,"img",11),r(),d(16," Es "),r(),a(17,"a",12)(18,"span",10),g(19,"img",13),r(),d(20," En "),r()()(),a(21,"div",14),m(22,Re,3,0,"h1",15)(23,je,3,0)(24,De,6,3,"nav",16),a(25,"div",17),f("click",function(){return s.toogleActiveMenuMobile()}),a(26,"span"),g(27,"span")(28,"span")(29,"span"),r()()()()),n&2&&(l(4),ie(s.logos()),l(18),j(22,s.homeIsActive?22:23),l(2),j(24,s.linksHeader.length>0?24:-1),l(),_("ngClass",T(3,pe,s.menuMobileIsActive)))},dependencies:[H,V,K,Q],encapsulation:2});let t=o;return t})();var X=class{constructor(o="",e="",i="",n="",s="",p="",y="",he="",xe="",Ce="",ye="",Se="",we="",Me="",Ee="",be="",Fe="",ke="",Ie="",Oe="",Pe="",Te="",$e=""){this.address=o,this.autoalmacenamiento=e,this.celular=i,this.celular_formato=n,this.contactemails=s,this.correo_pruebas=p,this.cotizador=y,this.emails=he,this.field_form_loc=xe,this.field_form_uri=Ce,this.nombre_empresa=ye,this.notas_por_pagina=Se,this.pbx=we,this.pbx_formato=Me,this.phone2=Ee,this.redaccion=be,this.telefono_wsp=Fe,this.texto_feed=ke,this.texto_footer=Ie,this.texto_general_contacto_sedes=Oe,this.texto_wsp=Pe,this.titulo_feed=Te,this.trabaje=$e}};function Je(t,o){if(t&1){let e=x();a(0,"div",18),f("click",function(){v(e);let n=c();return h(n.activarEncuesta())}),g(1,"img",19),r()}if(t&2){let e=c();Y("btn_flt_encuesta ",e.moveFlotante,"")}}function Qe(t,o){if(t&1&&(a(0,"option",33),d(1),r()),t&2){let e=o.$implicit,i=c(2).$implicit;_("value",e==null?null:e.titulo),b("id_encuesta",i==null?null:i.id),l(),M(e==null?null:e.titulo)}}function Be(t,o){if(t&1){let e=x();a(0,"div",27)(1,"div",28)(2,"div",29),d(3),r(),a(4,"select",30),f("change",function(n){v(e);let s=c(3);return h(s.marcarPregunta(n))}),a(5,"option",31),d(6,"Seleccione"),r(),m(7,Qe,2,3,"option",32),r()()()}if(t&2){let e=c().$implicit;l(3),k(" ",e==null?null:e.contar,". ",e==null?null:e.titulo," "),l(2),b("id_encuesta",e==null?null:e.id),l(2),_("ngForOf",e==null?null:e.opciones)}}function qe(t,o){if(t&1){let e=x();a(0,"div",38),f("click",function(){let s=v(e).$implicit,p=c(2).$implicit,y=c(2);return h(y.marcarEscala(p==null?null:p.id,s))}),g(1,"input",39),a(2,"label",40)(3,"div",41),g(4,"img",42),r(),a(5,"div",43),d(6),r()()()}if(t&2){let e=o.$implicit,i=o.index,n=c(2).$implicit,s=c(2);l(),A("name","opc_",n==null?null:n.id,""),U("id","opc_",n==null?null:n.id,"_",i,""),l(),U("for","opc_",n==null?null:n.id,"_",i,""),l(2),A("src","assets/images/diseno/",s.imagenes_escala[i],"",S),l(2),C(" ",e," ")}}function Ke(t,o){if(t&1&&(a(0,"div",34)(1,"div",35),d(2),r(),a(3,"div",36),m(4,qe,7,7,"div",37),r()()),t&2){let e=c().$implicit,i=c(2);l(2),k(" ",e==null?null:e.contar,". ",e==null?null:e.titulo," "),l(2),_("ngForOf",i.escala)}}function We(t,o){if(t&1){let e=x();a(0,"div",27)(1,"div",28)(2,"div",29),d(3),r(),a(4,"textarea",44),f("change",function(n){v(e);let s=c(3);return h(s.marcarTextarea(n))}),r()()()}if(t&2){let e=c().$implicit;l(3),k(" ",e==null?null:e.contar,". ",e==null?null:e.titulo," "),l(),b("id_encuesta",e==null?null:e.id)}}function Xe(t,o){if(t&1&&(a(0,"div"),m(1,Be,8,4,"div",25)(2,Ke,5,3,"div",26)(3,We,5,3,"div",25),r()),t&2){let e=o.$implicit;l(),_("ngIf",(e==null?null:e.tipo_pregunta)=="1"),l(),_("ngIf",(e==null?null:e.tipo_pregunta)=="2"),l(),_("ngIf",(e==null?null:e.tipo_pregunta)=="3")}}function Ze(t,o){if(t&1){let e=x();a(0,"div",20)(1,"div",8)(2,"div",9),d(3,"Queremos conocer tu opini\xF3n"),r()(),a(4,"div",21),m(5,Xe,4,3,"div",22),a(6,"div",23)(7,"div",14),f("click",function(){v(e);let n=c();return h(n.avanzarUnico())}),d(8,"Siguiente"),r()(),a(9,"p",24),d(10),r()()()}if(t&2){let e=c();l(5),_("ngForOf",e.encuesta[0].preguntas),l(5),M(e.showErrors)}}function Ye(t,o){if(t&1&&(a(0,"option",33),d(1),r()),t&2){let e=o.$implicit,i=c(2).$implicit;_("value",e==null?null:e.titulo),b("id_encuesta",i==null?null:i.id),l(),M(e==null?null:e.titulo)}}function et(t,o){if(t&1){let e=x();a(0,"div",27)(1,"div",28)(2,"div",29),d(3),r(),a(4,"select",30),f("change",function(n){v(e);let s=c(4);return h(s.marcarPregunta(n))}),a(5,"option",31),d(6,"Seleccione"),r(),m(7,Ye,2,3,"option",32),r()()()}if(t&2){let e=c().$implicit;l(3),k(" ",e==null?null:e.contar,". ",e==null?null:e.titulo," "),l(2),b("id_encuesta",e==null?null:e.id),l(2),_("ngForOf",e==null?null:e.opciones)}}function tt(t,o){if(t&1){let e=x();a(0,"div",38),f("click",function(){let s=v(e).$implicit,p=c(2).$implicit,y=c(3);return h(y.marcarEscala(p==null?null:p.id,s))}),g(1,"input",39),a(2,"label",40)(3,"div",41),g(4,"img",42),r(),a(5,"div",43),d(6),r()()()}if(t&2){let e=o.$implicit,i=o.index,n=c(2).$implicit,s=c(3);l(),A("name","opc_",n==null?null:n.id,""),U("id","opc_",n==null?null:n.id,"_",i,""),l(),U("for","opc_",n==null?null:n.id,"_",i,""),l(2),A("src","assets/images/diseno/",s.imagenes_escala[i],"",S),l(2),C(" ",e," ")}}function it(t,o){if(t&1&&(a(0,"div",34)(1,"div",35),d(2),r(),a(3,"div",36),m(4,tt,7,7,"div",37),r()()),t&2){let e=c().$implicit,i=c(3);l(2),k(" ",e==null?null:e.contar,". ",e==null?null:e.titulo," "),l(2),_("ngForOf",i.escala)}}function nt(t,o){if(t&1){let e=x();a(0,"div",27)(1,"div",28)(2,"div",29),d(3),r(),a(4,"textarea",44),f("change",function(n){v(e);let s=c(4);return h(s.marcarTextarea(n))}),r()()()}if(t&2){let e=c().$implicit;l(3),k(" ",e==null?null:e.contar,". ",e==null?null:e.titulo," "),l(),b("id_encuesta",e==null?null:e.id)}}function ot(t,o){if(t&1&&(a(0,"div"),m(1,et,8,4,"div",25)(2,it,5,3,"div",26)(3,nt,5,3,"div",25),r()),t&2){let e=o.$implicit;l(),_("ngIf",(e==null?null:e.tipo_pregunta)=="1"),l(),_("ngIf",(e==null?null:e.tipo_pregunta)=="2"),l(),_("ngIf",(e==null?null:e.tipo_pregunta)=="3")}}var ue=t=>({active:t});function at(t,o){if(t&1){let e=x();a(0,"div",46)(1,"div",8)(2,"div",9),d(3,"Queremos conocer tu opini\xF3n"),r()(),a(4,"div",21),m(5,ot,4,3,"div",22),a(6,"div",23)(7,"div",14),f("click",function(){let n=v(e),s=n.index,p=n.$implicit,y=c(2);return h(y.avanzarMultiple(s+1,p.preguntas.length))}),d(8,"Siguiente "),r()(),a(9,"p",24),d(10),r()()()}if(t&2){let e=o.$implicit,i=o.index,n=c(2);Y("cnt_sec_modal paso",i,""),_("ngClass",T(6,ue,i==0)),l(5),_("ngForOf",e.preguntas),l(5),M(n.showErrors)}}function rt(t,o){if(t&1&&m(0,at,11,8,"div",45),t&2){let e=c();_("ngForOf",e.encuesta[0]==null?null:e.encuesta[0].secciones)}}var ge=(()=>{let o=class o{constructor(i,n){this.pageService=i,this.router=n,this.activarEncuestaS=!1,this.mostrarEncuesta=!1,this.encuesta=[],this.escala=["Para nada de acuerdo","En desacuerdo","Ni de acuerdo ni en desacuerdo","De acuerdo","Completamente de acuerdo"],this.imagenes_escala=["ic_encuesta_1.svg","ic_encuesta_2.svg","ic_encuesta_3.svg","ic_encuesta_4.svg","ic_encuesta_5.svg"],this.respuestas=[],this.opciones_marcadas=[],this.agrupada=1,this.showErrors="",this.token="",this.moveFlotante="",this.suscribeListenRouter=this.router.events.subscribe(s=>{if(s instanceof B){var p=n.url.split("/");p[1]=="proyecto"?this.moveFlotante="moveToLeft":this.moveFlotante=""}})}ngOnInit(){this.init()}ngOnDestroy(){this.suscribeListenRouter.unsubscribe()}init(){return u(this,null,function*(){yield this.getEncuestaActiva()})}getEncuestaActiva(){return u(this,null,function*(){this.encuesta=yield this.pageService.getEncuestaActiva(this.agrupada),this.encuesta?.[0]?.id_encuesta&&(this.mostrarEncuesta=!0)})}activarEncuesta(i){this.activarEncuestaS=!this.activarEncuestaS,this.avanzar("portada"),this.token="",this.opciones_marcadas=[],this.respuestas=[],$(".inp_modal").val(0),$(".radio_modal").prop("checked",!1)}avanzar(i){$(".cnt_sec_modal").removeClass("active"),$("."+i).addClass("active")}avanzarUnico(){return u(this,null,function*(){if(this.opciones_marcadas.length==this.encuesta[0].preguntas.length){let i=yield this.pageService.setRespuestaEncuesta(this.opciones_marcadas,this.token);this.token=i[0].token,$(".cnt_sec_modal").removeClass("active"),$(".final").addClass("active"),setTimeout(()=>{this.mostrarEncuesta=!1,this.token=""},1500)}else this.showErrors="Debes marcar todas las preguntas",setTimeout(()=>{this.showErrors=""},3e3)})}marcarPregunta(i){let n=i.target.selectedIndex,s=i.target.options[n].getAttribute("id_encuesta"),p=i.target.value;if(p!=""&&p!=null&&p!=null)if(!this.respuestas.includes(s))this.respuestas.push(s),this.opciones_marcadas.push({id_encuesta:this.encuesta[0].id_encuesta,id_pregunta:s,valor:p});else{let y=this.respuestas.indexOf(s);this.respuestas.splice(y,1),this.opciones_marcadas.splice(y,1),this.respuestas.push(s),this.opciones_marcadas.push({id_encuesta:this.encuesta[0].id_encuesta,id_pregunta:s,valor:p})}else{let y=this.respuestas.indexOf(s);this.respuestas.splice(y,1),this.opciones_marcadas.splice(y,1)}}marcarEscala(i,n){if(!this.respuestas.includes(i))this.respuestas.push(i),this.opciones_marcadas.push({id_encuesta:this.encuesta[0].id_encuesta,id_pregunta:i,valor:n});else{let s=this.respuestas.indexOf(i);this.respuestas.splice(s,1),this.opciones_marcadas.splice(s,1),this.respuestas.push(i),this.opciones_marcadas.push({id_encuesta:this.encuesta[0].id_encuesta,id_pregunta:i,valor:n})}}marcarTextarea(i){let n=i.target.getAttribute("id_encuesta"),s=i.target.value;if(s!=""&&s!=null&&s!=null)if(!this.respuestas.includes(n))this.respuestas.push(n),this.opciones_marcadas.push({id_encuesta:this.encuesta[0].id_encuesta,id_pregunta:n,valor:s});else{let p=this.respuestas.indexOf(n);this.respuestas.splice(p,1),this.opciones_marcadas.splice(p,1),this.respuestas.push(n),this.opciones_marcadas.push({id_encuesta:this.encuesta[0].id_encuesta,id_pregunta:n,valor:s})}else{let p=this.respuestas.indexOf(n);this.respuestas.splice(p,1),this.opciones_marcadas.splice(p,1)}}avanzarMultiple(i,n){return u(this,null,function*(){if(n==this.opciones_marcadas.length){let s=yield this.pageService.setRespuestaEncuesta(this.opciones_marcadas,this.token);this.token=s[0].token,this.encuesta[0].secciones.length==i?($(".cnt_sec_modal").removeClass("active"),$(".final").addClass("active"),setTimeout(()=>{this.mostrarEncuesta=!1,this.token=""},1500)):($(".cnt_sec_modal").removeClass("active"),$(".paso"+i).addClass("active")),this.respuestas=[],this.opciones_marcadas=[]}else this.showErrors="Debes marcar todas las preguntas",this.showErrors=""})}};o.\u0275fac=function(n){return new(n||o)(E(N),E(q))},o.\u0275cmp=O({type:o,selectors:[["survey-modal"]],standalone:!0,features:[P],decls:33,vars:6,consts:[["style","cursor:pointer",3,"class","click",4,"ngIf"],[1,"layer",3,"ngClass"],[1,"cnt_gen_modal"],[1,"cnt_modal"],[1,"cerrar_modal",3,"click"],[1,"material-icons"],["action","","id","myform",1,"cnt_form_modal"],[1,"cnt_sec_modal","portada"],[1,"top_azul_modal"],[1,"h_modal"],[1,"txt_modal"],[1,"portada_modal"],[1,"logo_modal"],["loading","lazy","src","assets/images/diseno/logo_constructora.svg","alt",""],[1,"btn","btn_modal",3,"click"],["class","cnt_sec_modal paso0 active",4,"ngIf","ngIfElse"],["encuestaAgrupada",""],[1,"cnt_sec_modal","final"],[2,"cursor","pointer",3,"click"],["src","assets/images/diseno/ic_encuesta.svg","alt",""],[1,"cnt_sec_modal","paso0","active"],[1,"cnt_preg"],[4,"ngFor","ngForOf"],[1,"row_preg_1"],[1,"error-text"],["class","list_dropdown",4,"ngIf"],["class","escala",4,"ngIf"],[1,"list_dropdown"],[1,"cntpreg_dropdown"],[1,"txt_preg"],[1,"input","inp_modal",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"escala"],[1,"preg_radio"],[1,"row_radios_modal"],["class","itm_radio_modal",3,"click",4,"ngFor","ngForOf"],[1,"itm_radio_modal",3,"click"],["type","radio",1,"radio_modal",3,"name","id"],["for","",1,"cnt_if_radio_modal",3,"for"],[1,"ic_radio_modal"],["alt","",3,"src"],[1,"txt_radio_modal"],["name","","id","","cols","30","rows","10",3,"change"],[3,"class","ngClass",4,"ngFor","ngForOf"],[3,"ngClass"]],template:function(n,s){if(n&1&&(m(0,Je,2,3,"div",0),a(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),f("click",function(){return s.activarEncuesta("cerrar")}),a(5,"span",5),d(6,"cancel"),r()(),a(7,"form",6)(8,"div",7)(9,"div",8)(10,"div",9),d(11,"Queremos conocer tu opini\xF3n"),r(),a(12,"div",10),d(13," Esta encuesta no te tomar\xE1 m\xE1s de 2 minutos "),r()(),a(14,"div",11)(15,"div",12),g(16,"img",13),r(),a(17,"div",14),f("click",function(){return s.avanzar("paso0")}),d(18,"Continuar"),r()()(),m(19,Ze,11,2,"div",15)(20,rt,1,1,"ng-template",null,16,D),a(22,"div",17)(23,"div",8)(24,"div",9),d(25," Muchas gracias por "),g(26,"br"),d(27," tu colaboraci\xF3n "),r()(),a(28,"div",11)(29,"div",12),g(30,"img",13),r(),a(31,"div",14),f("click",function(){return s.activarEncuesta()}),d(32,"Cerrar"),r()()()()()()()),n&2){let p=F(21);_("ngIf",s.mostrarEncuesta),l(),_("ngClass",T(4,ue,s.activarEncuestaS)),l(18),_("ngIf",s.agrupada==0)("ngIfElse",p)}},dependencies:[z,H,G,J],styles:['.layer[_ngcontent-%COMP%]{width:100%;background:#0009;height:100%;position:fixed;top:0;left:0;z-index:30;overflow-y:auto;opacity:0;display:none;animation:_ngcontent-%COMP%_fadeIn 1s forwards}.layer.active[_ngcontent-%COMP%]{display:block}.cnt_gen_modal[_ngcontent-%COMP%]{width:95%;max-width:600px;position:absolute;top:10%;left:50%;transform:translate(-50%);position:relative}.cnt_modal[_ngcontent-%COMP%]{border-radius:20px;background:#fff;overflow:hidden;box-shadow:0 13px 30px -8px #00000040}.top_azul_modal[_ngcontent-%COMP%]{width:100%;display:flex;background:var(--c_pri);padding:16px 48px;color:#fff;flex-direction:column;align-items:center;overflow:hidden;box-shadow:0 13px 30px -8px #00000040;position:relative;z-index:1}.h_modal[_ngcontent-%COMP%]{width:100%;font-size:24px;font-weight:900;text-align:center;padding:16px 0}.txt_modal[_ngcontent-%COMP%]{font-size:16px;text-align:center;padding:16px 0;border-top:1px solid #fff}.cerrar_modal[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;cursor:pointer;z-index:2}.cerrar_modal[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.cerrar_modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#fff}.cnt_form_modal[_ngcontent-%COMP%]{width:100%}.cnt_sec_modal[_ngcontent-%COMP%]{width:100%;display:none;opacity:0;animation:_ngcontent-%COMP%_fadeIn .5s forwards}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}.cnt_sec_modal.active[_ngcontent-%COMP%]{display:block}.portada_modal[_ngcontent-%COMP%]{width:100%;padding:64px 48px;display:flex;flex-direction:column;gap:32px;align-items:center;background:url("./media/bg_encuesta-CWLXQM3L.png") no-repeat center;background-size:cover}.logo_modal[_ngcontent-%COMP%]{width:130px}.logo_modal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.btn.btn_modal[_ngcontent-%COMP%]{width:260px}.cnt_preg[_ngcontent-%COMP%]{padding:64px;background:#fff}.list_dropdown[_ngcontent-%COMP%]{width:100%}.cntpreg_dropdown[_ngcontent-%COMP%]{padding:24px 0;border-bottom:1px solid #ccc}.cntpreg_dropdown[_ngcontent-%COMP%]:last-child{border-bottom:none}.txt_preg[_ngcontent-%COMP%]{font-size:16px;color:#626262;box-sizing:border-box;padding:0 16px 4px}.input.inp_modal[_ngcontent-%COMP%]{height:35px;padding:0 12px}.row_preg_1[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:32px 0 0}.preg_radio[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:18px;color:#626262;padding:16px 0;border-bottom:1px solid #ccc}.row_radios_modal[_ngcontent-%COMP%]{width:100%;display:flex;gap:20px;padding:24px 0}.itm_radio_modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;width:19%;flex-grow:1;align-items:center}.radio_modal[_ngcontent-%COMP%]{display:none}.cnt_if_radio_modal[_ngcontent-%COMP%]{cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:12px;height:100%}.radio_modal[_ngcontent-%COMP%]:checked ~ .cnt_if_radio_modal[_ngcontent-%COMP%]   .ic_radio_modal[_ngcontent-%COMP%]{background:#bcccf8;box-shadow:none;transform:scale(1)}.cnt_if_radio_modal[_ngcontent-%COMP%]:hover   .ic_radio_modal[_ngcontent-%COMP%]{transform:scale(1.1)}.ic_radio_modal[_ngcontent-%COMP%]{width:50px;height:50px;background:linear-gradient(104.32deg,#fff,#e4e4e4),#c2c2c2;box-shadow:0 4px 4px #00000040;padding:8px;border-radius:8px;transition:all .3s}.txt_radio_modal[_ngcontent-%COMP%]{font-size:12px;line-height:12px;color:var(--c_pri);text-align:center;width:100%;display:flex;flex-grow:1;align-items:center;font-weight:700}.btn_flt_encuesta[_ngcontent-%COMP%]{position:fixed;bottom:5%;right:23px;width:70px;height:70px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135.57deg,#4565b3,#2b478b 54.17%,#13203e);border-radius:50%;box-shadow:2px 2px 10px 5px #2e3b8540;z-index:10}.moveToLeft[_ngcontent-%COMP%]{bottom:5%;left:23px}@media screen and (max-width:1050px){.top_azul_modal[_ngcontent-%COMP%]{padding:32px 24px 0}.cnt_preg[_ngcontent-%COMP%]{padding:24px 32px}}@media screen and (max-width:480px){.h_modal[_ngcontent-%COMP%]{font-size:20px}.row_radios_modal[_ngcontent-%COMP%]{flex-direction:column;gap:12px}.itm_radio_modal[_ngcontent-%COMP%]{width:100%}.cnt_if_radio_modal[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row}.ic_radio_modal[_ngcontent-%COMP%]{min-width:40px;width:40px;height:40px}.txt_radio_modal[_ngcontent-%COMP%]{font-size:16px;line-height:18px;text-align:left}.btn_flt_encuesta[_ngcontent-%COMP%]{width:45px;height:45px;padding:8px}.btn_flt_encuesta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}}.error-text[_ngcontent-%COMP%]{color:red;font-size:13px;text-align:center;width:100%}.btn_flt_encuesta[_ngcontent-%COMP%]:after{content:"";width:30px;height:30px;border-radius:100%;border:5px #182360 solid;position:absolute;z-index:-1;animation:_ngcontent-%COMP%_ring 1.5s infinite}.btn_flt_encuesta[_ngcontent-%COMP%]:hover:after{display:none;-webkit-animation:none;animation:none}@-webkit-keyframes _ngcontent-%COMP%_ring{0%{width:60px;height:60px;opacity:1}to{width:150px;height:150px;opacity:0}}@keyframes _ngcontent-%COMP%_ring{0%{width:60px;height:60px;opacity:1}to{width:150px;height:150px;opacity:0}}']});let t=o;return t})();var{api_url:w}=I,fe=(()=>{let o=class o{constructor(i){this._http=i}getSocialNetwork(){return u(this,null,function*(){let i=`${w}v1/getSocialNetwork`;return this._http.get(i).toPromise().then().catch(n=>(console.error(n),[]))})}getConfigFooter(){return u(this,null,function*(){let i=`${w}v1/getConfigInfo`;return this._http.get(i).toPromise().then().catch(n=>(console.warn(n),!1))})}getDepartaments(){return u(this,null,function*(){let i=`${w}v1/getDepartamentos`;return this._http.get(i).toPromise().then().catch(n=>(console.warn(n),!1))})}getCities(i){return u(this,null,function*(){let n=`${w}v1/getCiudades`,s={departamento:i};return this._http.post(n,JSON.stringify(s)).toPromise().then().catch(p=>(console.warn(p),!1))})}setContactForm(i){return u(this,null,function*(){let n=`${w}v1/setContactForm`;return this._http.post(n,JSON.stringify(i)).toPromise().then()})}setContactPQRS(i){return u(this,null,function*(){let n=`${w}v1/setContactPQRS`;return this._http.post(n,JSON.stringify(i)).toPromise().then()})}setSedeForm(i){return u(this,null,function*(){let n=`${w}v1/setSedeForm`;return this._http.post(n,JSON.stringify(i)).toPromise().then()})}setAutoForm(i){return u(this,null,function*(){let n=`${w}v1/setAutoForm`;return this._http.post(n,JSON.stringify(i)).toPromise().then()})}setMinibodegasForm(i){return u(this,null,function*(){let n=`${w}v1/setMinibodegasForm`;return this._http.post(n,JSON.stringify(i)).toPromise().then()})}setCotizador(i){return u(this,null,function*(){let n=`${w}v1/setCotizador`;return this._http.post(n,JSON.stringify(i)).toPromise().then()})}getMenu(){return u(this,null,function*(){let i=`${w}v1/getMenu`;return this._http.get(i).toPromise().then()})}getMenuFooter(){return u(this,null,function*(){let i=`${w}v1/getMenuFooter`;return ne(this._http.get(i)).catch(n=>(console.error(n),[]))})}};o.\u0275fac=function(n){return new(n||o)(le(ce))},o.\u0275prov=ae({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();function st(t,o){if(t&1&&(a(0,"a",11),g(1,"img",12),r()),t&2){let e=o.$implicit,i=c(3);_("href",e==null?null:e.enlace,S),l(),_("ngSrc",i.IMG_URL()+(e==null?null:e.imagen[0]))("alt",e==null?null:e.imagen_alt[0])("title",e==null?null:e.imagen_title[0])}}function ct(t,o){if(t&1&&(a(0,"div",9),m(1,st,2,4,"a",10),r()),t&2){let e=c(2);l(),_("ngForOf",e.companies)}}function _t(t,o){if(t&1&&(a(0,"div")(1,"div",13),d(2),r(),a(3,"div",14)(4,"div",15)(5,"span",16),d(6,"place"),r(),d(7),r(),a(8,"div",15)(9,"span",16),d(10,"mail"),r(),d(11),r()()()),t&2){let e=c(2);l(2),C(" ",e.configFooter.texto_footer," "),l(5),C(" ",e.configFooter.address," "),l(4),C(" ",e.configFooter.contactemails," ")}}function dt(t,o){if(t&1&&(a(0,"div",19),g(1,"img",20),r()),t&2){let e=o.$implicit,i=c(3);l(),_("ngSrc",i.IMG_URL()+(e==null?null:e.imagen[0]))("alt",e==null?null:e.imagen_alt[0])("title",e==null?null:e.imagen_title[0])}}function pt(t,o){if(t&1&&(a(0,"div",17),m(1,dt,2,3,"div",18),r()),t&2){let e=c(2);l(),_("ngForOf",e.logos)}}function mt(t,o){if(t&1&&(a(0,"a",30),d(1),r()),t&2){let e=c().$implicit;_("href",e==null?null:e.url_enlace_footer,S),l(),C(" ",e==null?null:e.field_content," ")}}function ut(t,o){if(t&1&&(a(0,"a",31),d(1),r()),t&2){let e=c().$implicit;L("routerLink",e==null?null:e.url_enlace_footer),l(),C(" ",e==null?null:e.field_content," ")}}function gt(t,o){if(t&1&&(a(0,"li"),m(1,mt,2,2,"a",28)(2,ut,2,2,"ng-template",null,29,D),r()),t&2){let e=o.$implicit,i=F(3);l(),_("ngIf",(e==null||e.url_enlace_footer==null?null:e.url_enlace_footer.includes("https://"))||(e==null||e.url_enlace_footer==null?null:e.url_enlace_footer.includes("http://")))("ngIfElse",i)}}function ft(t,o){if(t&1){let e=x();a(0,"div",23,24),f("click",function(){v(e);let n=F(1),s=c(3);return h(s.dropdownToogleMenu(n))}),a(2,"div",25),d(3),r(),a(4,"ul",26),m(5,gt,4,2,"li",27),r()()}if(t&2){let e=o.$implicit;l(3),C(" ",e==null?null:e.field_content," "),l(2),_("ngForOf",e.hijos)}}function vt(t,o){if(t&1&&(a(0,"a",30),d(1),r()),t&2){let e=c().$implicit;_("href",e==null?null:e.url_enlace_footer,S),l(),C(" ",e==null?null:e.field_content," ")}}function ht(t,o){if(t&1&&(a(0,"a",31),d(1),r()),t&2){let e=c().$implicit;L("routerLink",e==null?null:e.url_enlace_footer),l(),C(" ",e==null?null:e.field_content," ")}}function xt(t,o){if(t&1&&(a(0,"li"),m(1,vt,2,2,"a",28)(2,ht,2,2,"ng-template",null,29,D),r()),t&2){let e=o.$implicit,i=F(3);l(),_("ngIf",e==null||e.url_enlace_footer==null?null:e.url_enlace_footer.includes("https://"))("ngIfElse",i)}}function Ct(t,o){if(t&1){let e=x();a(0,"div",23,24),f("click",function(){v(e);let n=F(1),s=c(3);return h(s.dropdownToogleMenu(n))}),a(2,"div",32),d(3),r(),a(4,"ul",26),m(5,xt,4,2,"li",27),r()()}if(t&2){let e=o.$implicit;l(3),C(" ",e.field_content," "),l(2),_("ngForOf",e.hijos)}}function yt(t,o){if(t&1&&(a(0,"div",21),m(1,ft,6,2,"div",22)(2,Ct,6,2,"div",22),r()),t&2){let e=c(2);l(),_("ngForOf",e.menuFooter),l(),_("ngForOf",e.menuFooterProyectos)}}function St(t,o){if(t&1&&(a(0,"a",37),g(1,"i"),r()),t&2){let e=o.$implicit;_("href",e==null?null:e.url,S),l(),se(e==null?null:e.class_footer)}}function wt(t,o){if(t&1&&(a(0,"div",33)(1,"div",34),m(2,St,2,3,"a",35),r(),a(3,"div",36),d(4," \xA9OIKOS CONSTRUCTORA 2022. Todos los derechos reservados. "),r()()),t&2){let e=c(2);l(2),_("ngForOf",e.socialNetwork)}}function Mt(t,o){if(t&1&&(a(0,"footer",2)(1,"div",3)(2,"div",4),m(3,ct,2,1,"div",5)(4,_t,12,3,"div",1)(5,pt,2,1,"div",6),r()(),m(6,yt,3,2,"div",7)(7,wt,5,1,"div",8),r()),t&2){let e=c();l(3),_("ngIf",e.companies.length>0),l(),_("ngIf",e.configFooter),l(),_("ngIf",e.logos.length>0),l(),_("ngIf",e.menuFooter.length>0),l(),_("ngIf",e.socialNetwork.length>0)}}function Et(t,o){t&1&&g(0,"survey-modal")}var ve=(()=>{let o=class o{constructor(i,n,s){this.globalService=i,this.responsive=n,this.pageService=s,this.IMG_URL=R(I.imagenes_url),this.loadingData=!1,this.BASE_URL=I.imagenes_url,this.socialNetwork=[],this.configFooter=new X,this.companies=[],this.logos=[],this.menuFooter=[],this.menuFooterProyectos=[]}ngOnInit(){this.init()}init(){return u(this,null,function*(){yield this.getCollectionsPage(),yield this.getConfigFooter(),yield this.getMenuFooter(),yield this.getSocialNetwork(),this.loadingData=!0})}getSocialNetwork(){return u(this,null,function*(){this.socialNetwork=yield this.globalService.getSocialNetwork()})}getConfigFooter(){return u(this,null,function*(){let i=yield this.globalService.getConfigFooter();i&&(this.configFooter=i)})}getCollectionsPage(){return u(this,null,function*(){this.companies=yield this.pageService.getElementsContent("titulo empresa","logos_empresas"),this.logos=yield this.pageService.getElementsContent("titulo logo footer","logos")})}getMenuFooter(){return u(this,null,function*(){let i=yield this.globalService.getMenuFooter();this.menuFooter=i.splice(0,2),this.menuFooterProyectos=i})}dropdownToogleMenu(i){if(this.responsive.isMobile){let n=$(i).find(".h_cl_pie"),s=$(i).find(".menu_pie");$(n).hasClass("active")?($(n).next(s).slideUp(),$(n).removeClass("active")):($(s).slideUp(),$(n).removeClass("active"),$(n).addClass("active"),$(n).next().slideToggle())}}};o.\u0275fac=function(n){return new(n||o)(E(fe),E(_e),E(N))},o.\u0275cmp=O({type:o,selectors:[["app-footer"]],standalone:!0,features:[P],decls:2,vars:2,consts:[["class","footer",4,"ngIf"],[4,"ngIf"],[1,"footer"],[1,"cnt_lat_pie"],[1,"cnt_gen_inf_lat_pie"],["class","cnt_logos_pie",4,"ngIf"],["class","cnt_gen_cert_pie",4,"ngIf"],["class","cnt_mid_pie",4,"ngIf"],["class","cnt_bot_pie",4,"ngIf"],[1,"cnt_logos_pie"],["target","_blank","rel","noopener","class","logo_pie",3,"href",4,"ngFor","ngForOf"],["target","_blank","rel","noopener",1,"logo_pie",3,"href"],["width","80","height","60",3,"ngSrc","alt","title"],[1,"txt_pie"],[1,"cnt_dir_pie"],[1,"direccion_pie"],[1,"material-icons"],[1,"cnt_gen_cert_pie"],["class","logo_cert_pie",4,"ngFor","ngForOf"],[1,"logo_cert_pie"],["height","143","width","140",3,"ngSrc","alt","title"],[1,"cnt_mid_pie"],["class","col_mid_men_pie",3,"click",4,"ngFor","ngForOf"],[1,"col_mid_men_pie",3,"click"],["menuEle",""],[1,"h_cl_pie"],[1,"menu_pie"],[4,"ngFor","ngForOf"],["target","_blank","rel","noopener",3,"href",4,"ngIf","ngIfElse"],["routerLink",""],["target","_blank","rel","noopener",3,"href"],[3,"routerLink"],[1,"h_cl_pie","proy_footer"],[1,"cnt_bot_pie"],[1,"cnt_redes_pie"],["target","_blank","rel","nofollow",3,"href",4,"ngFor","ngForOf"],[1,"copyr_pie"],["target","_blank","rel","nofollow",3,"href"]],template:function(n,s){n&1&&m(0,Mt,8,5,"footer",0)(1,Et,1,0,"survey-modal",1),n&2&&(_("ngIf",s.loadingData),l(),_("ngIf",s.loadingData))},dependencies:[ge,z,G,J,V,K,Q],encapsulation:2});let t=o;return t})();var ni=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=oe({type:o}),o.\u0275inj=re({imports:[V,z,me,ve]});let t=o;return t})();export{me as a,ve as b,ni as c};

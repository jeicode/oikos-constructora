import{a as W}from"./chunk-ZBBSDTB6.js";import{a as he}from"./chunk-6KENQKPV.js";import{a as Se}from"./chunk-NVX3FEQP.js";import{a as ye}from"./chunk-DW2SIOT3.js";import{a as we}from"./chunk-F2SF6G4W.js";import{a as X}from"./chunk-2T53BGYM.js";import"./chunk-P2VQUAOJ.js";import{A as k,Ab as T,Bb as N,C as b,Ca as V,D as K,Da as A,Db as Ce,Ea as H,Eb as R,Fb as B,Gb as G,I as g,J as x,Ja as z,Ka as _,La as O,Ma as f,Na as D,Pa as L,Ra as j,S as y,V as r,W as Y,Wa as se,aa as F,c as M,ca as m,cb as q,da as re,db as _e,eb as de,fa as ce,ha as P,ia as d,j as ae,ma as ee,mb as pe,na as te,oa as C,ob as ne,pa as S,pb as J,qa as w,qb as me,ra as E,rb as ue,sa as i,sb as fe,ta as a,ua as u,ub as ve,vb as ge,w as le,x as Q,xa as h,ya as v,za as s,zb as xe}from"./chunk-GPJC3AX4.js";var Ee=(()=>{let n=class n{constructor(){}intercept(l,o){let c=T.token,p=l;return c&&(p=l.clone({setHeaders:{"x-api-key":c}})),o.handle(p)}};n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=le({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();var Fe=t=>({active:t});function De(t,n){if(t&1&&(i(0,"a",18),u(1,"img",19),i(2,"span",20),_(3),a()()),t&2){let e=s().$implicit,l=s();d("href",e.enlace,y),r(),d("src",l.IMG_URL()+(e.imagen==null?null:e.imagen[0]),y)("alt",e.imagen_alt==null?null:e.imagen_alt[0])("title",e.imagen_title==null?null:e.imagen_title[0]),r(2),O(e==null?null:e.field_content)}}function Le(t,n){if(t&1&&(i(0,"a",18),u(1,"img",19),a()),t&2){let e=s().$implicit,l=s();d("href",e.enlace,y),r(),d("src",l.IMG_URL()+(e.imagen==null?null:e.imagen[0]),y)("alt",e.imagen_alt==null?null:e.imagen_alt[0])("title",e.imagen_title==null?null:e.imagen_title[0])}}function je(t,n){if(t&1&&m(0,De,4,5,"a",18)(1,Le,2,4),t&2){let e=n.$implicit;C(0,e.enlace.includes("https://")?0:1)}}function Ne(t,n){t&1&&(i(0,"h1",15)(1,"a",21),_(2," Grupo Oikos "),a()())}function Re(t,n){t&1&&(i(0,"div",15)(1,"a",21),_(2," Grupo Oikos "),a()())}function Ue(t,n){if(t&1&&(i(0,"a",24),_(1),a()),t&2){let e=s().$implicit;d("href",e.enlace_menu,y),r(),f(" ",e.field_content," ")}}function Ae(t,n){if(t&1&&(i(0,"a",25),_(1),a()),t&2){let e=s().$implicit;V("routerLink",e.enlace_menu),r(),O(e.field_content)}}function He(t,n){if(t&1){let e=h();i(0,"li",23),v("click",function(){g(e);let o=s(2);return x(o.closeNav())}),m(1,Ue,2,2,"a",24)(2,Ae,2,2),a()}if(t&2){let e=n.$implicit;r(),C(1,e.enlace_menu.includes("https://")?1:2)}}function Be(t,n){if(t&1){let e=h();i(0,"nav",16)(1,"ul"),w(2,He,3,1,"li",null,S),i(4,"a",22),v("click",function(){g(e);let o=s();return x(o.closeNav())}),_(5," Contacto "),a()()()}if(t&2){let e=s();d("ngClass",j(1,Fe,e.menuMobileIsActive())),r(2),E(e.linksHeader())}}var Me=(()=>{let n=class n{constructor(){this.getElementsContent=W(),this.IMG_URL=F(T.imagenes_url),this.router=k(R),this.menuMobileIsActive=F(!1),this.homeIsActive=F(!0),this.suscribeListenRouter=F(void 0),this.logos=F([]),this.linksHeader=F([]),this.suscribeListenRouter.set(this.router.events.subscribe(l=>{l instanceof N&&(this.router.url=="/"?this.homeIsActive.set(!0):this.homeIsActive.set(!1))}))}ngOnInit(){this.getCollectionsPage()}ngOnDestroy(){this.suscribeListenRouter()?.unsubscribe()}closeNav(){this.menuMobileIsActive.set(!1)}getCollectionsPage(){return M(this,null,function*(){let l=yield this.getElementsContent({name:"titulo menu",content:"menu"});this.linksHeader.set(l);let o=yield this.getElementsContent({name:"titulo empresa",content:"logos_empresas",condicional:"field_name='ver en header' AND field_content='2'"});this.logos.set(o)})}};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=b({type:n,selectors:[["app-header"]],standalone:!0,features:[L],decls:30,vars:5,consts:[[1,"header"],[1,"topbar_h"],[1,"cnt_inf_topbar_h"],[1,"ctn_logos"],["href","https://clientes.oikos.com.co/zonaclientesoikos/","target","_blank",1,"btn_z_clientes"],["routerLink","/pagos-constructora",1,"btn_pse"],[1,"txt_pse"],[1,"ic_pse"],[1,"cnt_esp_eng"],[1,"btn_idioma","active"],[1,"ic_bandera"],["src","assets/images/diseno/ic_col.svg","width","14","height","12","alt",""],["href","https://www.oikosconstructora.us/",1,"btn_idioma"],["src","assets/images/diseno/ic_usa.svg","width","14","height","12","alt",""],[1,"nav_bar_h"],[1,"logo_pri"],[1,"nav",3,"ngClass"],[1,"btn_menu_movil",3,"click","ngClass"],["target","_blank",1,"btn_oikos_logos",3,"href"],["width","38","height","24",3,"src","alt","title"],[1,"txt_logos_h"],["routerLink","/"],["routerLink","/contactanos",1,"btn","contacto_h",3,"click"],[3,"click"],["target","_blank",3,"href"],[3,"routerLink"]],template:function(o,c){o&1&&(i(0,"header",0)(1,"div",1)(2,"div",2)(3,"div",3),w(4,je,2,1,null,null,S),a(),i(6,"a",4),_(7," Zona de Clientes "),a(),i(8,"a",5)(9,"div",6),_(10,"Pague aqu\xED"),a(),u(11,"span",7),a()(),i(12,"div",8)(13,"a",9)(14,"span",10),u(15,"img",11),a(),_(16," Es "),a(),i(17,"a",12)(18,"span",10),u(19,"img",13),a(),_(20," En "),a()()(),i(21,"div",14),m(22,Ne,3,0,"h1",15)(23,Re,3,0)(24,Be,6,3,"nav",16),i(25,"div",17),v("click",function(){return c.menuMobileIsActive.set(!c.menuMobileIsActive())}),i(26,"span"),u(27,"span")(28,"span")(29,"span"),a()()()()),o&2&&(r(4),E(c.logos()),r(18),C(22,c.homeIsActive()?22:23),r(2),C(24,c.linksHeader().length>0?24:-1),r(),d("ngClass",j(3,Fe,c.menuMobileIsActive())))},dependencies:[q,B],encapsulation:2});let t=n;return t})();var{api_url:ie}=T,ke=()=>{let t=k(J);return()=>M(void 0,null,function*(){let n=`${ie}v1/getSocialNetwork`;return t.get(n).toPromise().catch(e=>[])})},Ie=()=>{let t=k(J);return()=>M(void 0,null,function*(){let n=`${ie}v1/getConfigInfo`;return t.get(n).toPromise().then().catch(e=>(console.warn(e),null))})},Te=()=>{let t=k(J);return()=>M(void 0,null,function*(){let n=`${ie}v1/getMenuFooter`;return ae(t.get(n)).catch(e=>(console.error(e),[]))})};var Oe=t=>({active:t});function Qe(t,n){if(t&1){let e=h();i(0,"div",18),v("click",function(){g(e);let o=s();return x(o.activarEncuesta())}),u(1,"img",19),a()}if(t&2){let e=s();te("btn_flt_encuesta ",e.moveFlotante,"")}}function Ke(t,n){if(t&1&&(i(0,"option",33),_(1),a()),t&2){let e=n.$implicit,l=s(2).$implicit;d("value",e==null?null:e.titulo),P("id_encuesta",l==null?null:l.id),r(),O(e==null?null:e.titulo)}}function qe(t,n){if(t&1){let e=h();i(0,"div",27)(1,"div",28)(2,"div",29),_(3),a(),i(4,"select",30),v("change",function(o){g(e);let c=s(3);return x(c.marcarPregunta(o))}),i(5,"option",31),_(6,"Seleccione"),a(),m(7,Ke,2,3,"option",32),a()()()}if(t&2){let e=s().$implicit;r(3),D(" ",e==null?null:e.contar,". ",e==null?null:e.titulo," "),r(2),P("id_encuesta",e==null?null:e.id),r(2),d("ngForOf",e==null?null:e.opciones)}}function Je(t,n){if(t&1){let e=h();i(0,"div",38),v("click",function(){let o=g(e).$implicit,c=s(2).$implicit,p=s(2);return x(p.marcarEscala(c==null?null:c.id,o))}),u(1,"input",39),i(2,"label",40)(3,"div",41),u(4,"img",42),a(),i(5,"div",43),_(6),a()()()}if(t&2){let e=n.$implicit,l=n.index,o=s(2).$implicit,c=s(2);r(),A("name","opc_",o==null?null:o.id,""),H("id","opc_",o==null?null:o.id,"_",l,""),r(),H("for","opc_",o==null?null:o.id,"_",l,""),r(2),A("src","assets/images/diseno/",c.imagenes_escala[l],"",y),r(2),f(" ",e," ")}}function We(t,n){if(t&1&&(i(0,"div",34)(1,"div",35),_(2),a(),i(3,"div",36),m(4,Je,7,11,"div",37),a()()),t&2){let e=s().$implicit,l=s(2);r(2),D(" ",e==null?null:e.contar,". ",e==null?null:e.titulo," "),r(2),d("ngForOf",l.escala)}}function Xe(t,n){if(t&1){let e=h();i(0,"div",27)(1,"div",28)(2,"div",29),_(3),a(),i(4,"textarea",44),v("change",function(o){g(e);let c=s(3);return x(c.marcarTextarea(o))}),a()()()}if(t&2){let e=s().$implicit;r(3),D(" ",e==null?null:e.contar,". ",e==null?null:e.titulo," "),r(),P("id_encuesta",e==null?null:e.id)}}function Ze(t,n){if(t&1&&(i(0,"div"),m(1,qe,8,4,"div",25)(2,We,5,3,"div",26)(3,Xe,5,3,"div",25),a()),t&2){let e=n.$implicit;r(),d("ngIf",(e==null?null:e.tipo_pregunta)=="1"),r(),d("ngIf",(e==null?null:e.tipo_pregunta)=="2"),r(),d("ngIf",(e==null?null:e.tipo_pregunta)=="3")}}function Ye(t,n){if(t&1){let e=h();i(0,"div",20)(1,"div",9)(2,"div",10),_(3,"Queremos conocer tu opini\xF3n"),a()(),i(4,"div",21),m(5,Ze,4,3,"div",22),i(6,"div",23)(7,"div",15),v("click",function(){g(e);let o=s();return x(o.avanzarUnico())}),_(8,"Siguiente"),a()(),i(9,"p",24),_(10),a()()()}if(t&2){let e=s();r(5),d("ngForOf",e.encuesta[0].preguntas),r(5),O(e.showErrors)}}function et(t,n){if(t&1&&(i(0,"option",33),_(1),a()),t&2){let e=n.$implicit,l=s(2).$implicit;d("value",e==null?null:e.titulo),P("id_encuesta",l==null?null:l.id),r(),O(e==null?null:e.titulo)}}function tt(t,n){if(t&1){let e=h();i(0,"div",27)(1,"div",28)(2,"div",29),_(3),a(),i(4,"select",30),v("change",function(o){g(e);let c=s(4);return x(c.marcarPregunta(o))}),i(5,"option",31),_(6,"Seleccione"),a(),m(7,et,2,3,"option",32),a()()()}if(t&2){let e=s().$implicit;r(3),D(" ",e==null?null:e.contar,". ",e==null?null:e.titulo," "),r(2),P("id_encuesta",e==null?null:e.id),r(2),d("ngForOf",e==null?null:e.opciones)}}function nt(t,n){if(t&1){let e=h();i(0,"div",38),v("click",function(){let o=g(e).$implicit,c=s(2).$implicit,p=s(3);return x(p.marcarEscala(c==null?null:c.id,o))}),u(1,"input",39),i(2,"label",40)(3,"div",41),u(4,"img",42),a(),i(5,"div",43),_(6),a()()()}if(t&2){let e=n.$implicit,l=n.index,o=s(2).$implicit,c=s(3);r(),A("name","opc_",o==null?null:o.id,""),H("id","opc_",o==null?null:o.id,"_",l,""),r(),H("for","opc_",o==null?null:o.id,"_",l,""),r(2),A("src","assets/images/diseno/",c.imagenes_escala[l],"",y),r(2),f(" ",e," ")}}function it(t,n){if(t&1&&(i(0,"div",34)(1,"div",35),_(2),a(),i(3,"div",36),m(4,nt,7,11,"div",37),a()()),t&2){let e=s().$implicit,l=s(3);r(2),D(" ",e==null?null:e.contar,". ",e==null?null:e.titulo," "),r(2),d("ngForOf",l.escala)}}function ot(t,n){if(t&1){let e=h();i(0,"div",27)(1,"div",28)(2,"div",29),_(3),a(),i(4,"textarea",44),v("change",function(o){g(e);let c=s(4);return x(c.marcarTextarea(o))}),a()()()}if(t&2){let e=s().$implicit;r(3),D(" ",e==null?null:e.contar,". ",e==null?null:e.titulo," "),r(),P("id_encuesta",e==null?null:e.id)}}function at(t,n){if(t&1&&(i(0,"div"),m(1,tt,8,4,"div",25)(2,it,5,3,"div",26)(3,ot,5,3,"div",25),a()),t&2){let e=n.$implicit;r(),d("ngIf",(e==null?null:e.tipo_pregunta)=="1"),r(),d("ngIf",(e==null?null:e.tipo_pregunta)=="2"),r(),d("ngIf",(e==null?null:e.tipo_pregunta)=="3")}}function lt(t,n){if(t&1){let e=h();i(0,"div",46)(1,"div",9)(2,"div",10),_(3,"Queremos conocer tu opini\xF3n"),a()(),i(4,"div",21),m(5,at,4,3,"div",22),i(6,"div",23)(7,"div",15),v("click",function(){let o=g(e),c=o.$implicit,p=o.index,I=s(2);return x(I.avanzarMultiple(p+1,c.preguntas.length))}),_(8,"Siguiente "),a()(),i(9,"p",24),_(10),a()()()}if(t&2){let e=n.$implicit,l=n.index,o=s(2);te("cnt_sec_modal paso",l,""),d("ngClass",j(6,Oe,l==0)),r(5),d("ngForOf",e.preguntas),r(5),O(o.showErrors)}}function rt(t,n){if(t&1&&m(0,lt,11,8,"div",45),t&2){let e=s();d("ngForOf",e.encuesta[0]==null?null:e.encuesta[0].secciones)}}var oe=(()=>{let n=class n{constructor(l,o){this.pageService=l,this.router=o,this.activarEncuestaS=!1,this.mostrarEncuesta=!1,this.encuesta=[],this.escala=["Para nada de acuerdo","En desacuerdo","Ni de acuerdo ni en desacuerdo","De acuerdo","Completamente de acuerdo"],this.imagenes_escala=["ic_encuesta_1.svg","ic_encuesta_2.svg","ic_encuesta_3.svg","ic_encuesta_4.svg","ic_encuesta_5.svg"],this.respuestas=[],this.opciones_marcadas=[],this.agrupada=1,this.showErrors="",this.token="",this.moveFlotante="",this.suscribeListenRouter=this.router.events.subscribe(c=>{if(c instanceof N){var p=o.url.split("/");p[1]=="proyecto"?this.moveFlotante="moveToLeft":this.moveFlotante=""}})}ngOnInit(){this.init()}ngOnDestroy(){this.suscribeListenRouter.unsubscribe()}init(){return M(this,null,function*(){yield this.getEncuestaActiva()})}getEncuestaActiva(){return M(this,null,function*(){this.encuesta=yield this.pageService.getEncuestaActiva(this.agrupada),this.encuesta?.[0]?.id_encuesta&&(this.mostrarEncuesta=!0)})}activarEncuesta(l){this.activarEncuestaS=!this.activarEncuestaS,this.avanzar("portada"),this.token="",this.opciones_marcadas=[],this.respuestas=[],$(".inp_modal").val(0),$(".radio_modal").prop("checked",!1)}avanzar(l){$(".cnt_sec_modal").removeClass("active"),$("."+l).addClass("active")}avanzarUnico(){return M(this,null,function*(){if(this.opciones_marcadas.length==this.encuesta[0].preguntas.length){let l=yield this.pageService.setRespuestaEncuesta(this.opciones_marcadas,this.token);this.token=l[0].token,$(".cnt_sec_modal").removeClass("active"),$(".final").addClass("active"),setTimeout(()=>{this.mostrarEncuesta=!1,this.token=""},1500)}else this.showErrors="Debes marcar todas las preguntas",setTimeout(()=>{this.showErrors=""},3e3)})}marcarPregunta(l){let o=l.target.selectedIndex,c=l.target.options[o].getAttribute("id_encuesta"),p=l.target.value;if(p!=""&&p!=null&&p!=null)if(!this.respuestas.includes(c))this.respuestas.push(c),this.opciones_marcadas.push({id_encuesta:this.encuesta[0].id_encuesta,id_pregunta:c,valor:p});else{let I=this.respuestas.indexOf(c);this.respuestas.splice(I,1),this.opciones_marcadas.splice(I,1),this.respuestas.push(c),this.opciones_marcadas.push({id_encuesta:this.encuesta[0].id_encuesta,id_pregunta:c,valor:p})}else{let I=this.respuestas.indexOf(c);this.respuestas.splice(I,1),this.opciones_marcadas.splice(I,1)}}marcarEscala(l,o){if(!this.respuestas.includes(l))this.respuestas.push(l),this.opciones_marcadas.push({id_encuesta:this.encuesta[0].id_encuesta,id_pregunta:l,valor:o});else{let c=this.respuestas.indexOf(l);this.respuestas.splice(c,1),this.opciones_marcadas.splice(c,1),this.respuestas.push(l),this.opciones_marcadas.push({id_encuesta:this.encuesta[0].id_encuesta,id_pregunta:l,valor:o})}}marcarTextarea(l){let o=l.target.getAttribute("id_encuesta"),c=l.target.value;if(c!=""&&c!=null&&c!=null)if(!this.respuestas.includes(o))this.respuestas.push(o),this.opciones_marcadas.push({id_encuesta:this.encuesta[0].id_encuesta,id_pregunta:o,valor:c});else{let p=this.respuestas.indexOf(o);this.respuestas.splice(p,1),this.opciones_marcadas.splice(p,1),this.respuestas.push(o),this.opciones_marcadas.push({id_encuesta:this.encuesta[0].id_encuesta,id_pregunta:o,valor:c})}else{let p=this.respuestas.indexOf(o);this.respuestas.splice(p,1),this.opciones_marcadas.splice(p,1)}}avanzarMultiple(l,o){return M(this,null,function*(){if(o==this.opciones_marcadas.length){let c=yield this.pageService.setRespuestaEncuesta(this.opciones_marcadas,this.token);this.token=c[0].token,this.encuesta[0].secciones.length==l?($(".cnt_sec_modal").removeClass("active"),$(".final").addClass("active"),setTimeout(()=>{this.mostrarEncuesta=!1,this.token=""},1500)):($(".cnt_sec_modal").removeClass("active"),$(".paso"+l).addClass("active")),this.respuestas=[],this.opciones_marcadas=[]}else this.showErrors="Debes marcar todas las preguntas",this.showErrors=""})}};n.\u0275fac=function(o){return new(o||n)(Y(X),Y(R))},n.\u0275cmp=b({type:n,selectors:[["survey-modal"]],standalone:!0,features:[L],decls:33,vars:6,consts:[["encuestaAgrupada",""],["style","cursor:pointer",3,"class","click",4,"ngIf"],[1,"layer",3,"ngClass"],[1,"cnt_gen_modal"],[1,"cnt_modal"],[1,"cerrar_modal",3,"click"],[1,"material-icons"],["action","","id","myform",1,"cnt_form_modal"],[1,"cnt_sec_modal","portada"],[1,"top_azul_modal"],[1,"h_modal"],[1,"txt_modal"],[1,"portada_modal"],[1,"logo_modal"],["loading","lazy","src","assets/images/diseno/logo_constructora.svg","alt",""],[1,"btn","btn_modal",3,"click"],["class","cnt_sec_modal paso0 active",4,"ngIf","ngIfElse"],[1,"cnt_sec_modal","final"],[2,"cursor","pointer",3,"click"],["src","assets/images/diseno/ic_encuesta.svg","alt",""],[1,"cnt_sec_modal","paso0","active"],[1,"cnt_preg"],[4,"ngFor","ngForOf"],[1,"row_preg_1"],[1,"error-text"],["class","list_dropdown",4,"ngIf"],["class","escala",4,"ngIf"],[1,"list_dropdown"],[1,"cntpreg_dropdown"],[1,"txt_preg"],[1,"input","inp_modal",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"escala"],[1,"preg_radio"],[1,"row_radios_modal"],["class","itm_radio_modal",3,"click",4,"ngFor","ngForOf"],[1,"itm_radio_modal",3,"click"],["type","radio",1,"radio_modal",3,"name","id"],["for","",1,"cnt_if_radio_modal",3,"for"],[1,"ic_radio_modal"],["alt","",3,"src"],[1,"txt_radio_modal"],["name","","id","","cols","30","rows","10",3,"change"],[3,"class","ngClass",4,"ngFor","ngForOf"],[3,"ngClass"]],template:function(o,c){if(o&1){let p=h();m(0,Qe,2,3,"div",1),i(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5),v("click",function(){return g(p),x(c.activarEncuesta("cerrar"))}),i(5,"span",6),_(6,"cancel"),a()(),i(7,"form",7)(8,"div",8)(9,"div",9)(10,"div",10),_(11,"Queremos conocer tu opini\xF3n"),a(),i(12,"div",11),_(13," Esta encuesta no te tomar\xE1 m\xE1s de 2 minutos "),a()(),i(14,"div",12)(15,"div",13),u(16,"img",14),a(),i(17,"div",15),v("click",function(){return g(p),x(c.avanzar("paso0"))}),_(18,"Continuar"),a()()(),m(19,Ye,11,2,"div",16)(20,rt,1,1,"ng-template",null,0,se),i(22,"div",17)(23,"div",9)(24,"div",10),_(25," Muchas gracias por "),u(26,"br"),_(27," tu colaboraci\xF3n "),a()(),i(28,"div",12)(29,"div",13),u(30,"img",14),a(),i(31,"div",15),v("click",function(){return g(p),x(c.activarEncuesta())}),_(32,"Cerrar"),a()()()()()()()}if(o&2){let p=z(21);d("ngIf",c.mostrarEncuesta),r(),d("ngClass",j(4,Oe,c.activarEncuestaS)),r(18),d("ngIf",c.agrupada==0)("ngIfElse",p)}},dependencies:[pe,q,_e,de],styles:['.layer[_ngcontent-%COMP%]{width:100%;background:#0009;height:100%;position:fixed;top:0;left:0;z-index:30;overflow-y:auto;opacity:0;display:none;animation:_ngcontent-%COMP%_fadeIn 1s forwards}.layer.active[_ngcontent-%COMP%]{display:block}.cnt_gen_modal[_ngcontent-%COMP%]{width:95%;max-width:600px;position:absolute;top:10%;left:50%;transform:translate(-50%);position:relative}.cnt_modal[_ngcontent-%COMP%]{border-radius:20px;background:#fff;overflow:hidden;box-shadow:0 13px 30px -8px #00000040}.top_azul_modal[_ngcontent-%COMP%]{width:100%;display:flex;background:var(--c_pri);padding:16px 48px;color:#fff;flex-direction:column;align-items:center;overflow:hidden;box-shadow:0 13px 30px -8px #00000040;position:relative;z-index:1}.h_modal[_ngcontent-%COMP%]{width:100%;font-size:24px;font-weight:900;text-align:center;padding:16px 0}.txt_modal[_ngcontent-%COMP%]{font-size:16px;text-align:center;padding:16px 0;border-top:1px solid #fff}.cerrar_modal[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;cursor:pointer;z-index:2}.cerrar_modal[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.cerrar_modal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{color:#fff}.cnt_form_modal[_ngcontent-%COMP%]{width:100%}.cnt_sec_modal[_ngcontent-%COMP%]{width:100%;display:none;opacity:0;animation:_ngcontent-%COMP%_fadeIn .5s forwards}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}.cnt_sec_modal.active[_ngcontent-%COMP%]{display:block}.portada_modal[_ngcontent-%COMP%]{width:100%;padding:64px 48px;display:flex;flex-direction:column;gap:32px;align-items:center;background:url("./media/bg_encuesta-CWLXQM3L.png") no-repeat center;background-size:cover}.logo_modal[_ngcontent-%COMP%]{width:130px}.logo_modal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.btn.btn_modal[_ngcontent-%COMP%]{width:260px}.cnt_preg[_ngcontent-%COMP%]{padding:64px;background:#fff}.list_dropdown[_ngcontent-%COMP%]{width:100%}.cntpreg_dropdown[_ngcontent-%COMP%]{padding:24px 0;border-bottom:1px solid #ccc}.cntpreg_dropdown[_ngcontent-%COMP%]:last-child{border-bottom:none}.txt_preg[_ngcontent-%COMP%]{font-size:16px;color:#626262;box-sizing:border-box;padding:0 16px 4px}.input.inp_modal[_ngcontent-%COMP%]{height:35px;padding:0 12px}.row_preg_1[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:32px 0 0}.preg_radio[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:18px;color:#626262;padding:16px 0;border-bottom:1px solid #ccc}.row_radios_modal[_ngcontent-%COMP%]{width:100%;display:flex;gap:20px;padding:24px 0}.itm_radio_modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;width:19%;flex-grow:1;align-items:center}.radio_modal[_ngcontent-%COMP%]{display:none}.cnt_if_radio_modal[_ngcontent-%COMP%]{cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:12px;height:100%}.radio_modal[_ngcontent-%COMP%]:checked ~ .cnt_if_radio_modal[_ngcontent-%COMP%]   .ic_radio_modal[_ngcontent-%COMP%]{background:#bcccf8;box-shadow:none;transform:scale(1)}.cnt_if_radio_modal[_ngcontent-%COMP%]:hover   .ic_radio_modal[_ngcontent-%COMP%]{transform:scale(1.1)}.ic_radio_modal[_ngcontent-%COMP%]{width:50px;height:50px;background:linear-gradient(104.32deg,#fff,#e4e4e4),#c2c2c2;box-shadow:0 4px 4px #00000040;padding:8px;border-radius:8px;transition:all .3s}.txt_radio_modal[_ngcontent-%COMP%]{font-size:12px;line-height:12px;color:var(--c_pri);text-align:center;width:100%;display:flex;flex-grow:1;align-items:center;font-weight:700}.btn_flt_encuesta[_ngcontent-%COMP%]{position:fixed;bottom:5%;right:23px;width:70px;height:70px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135.57deg,#4565b3,#2b478b 54.17%,#13203e);border-radius:50%;box-shadow:2px 2px 10px 5px #2e3b8540;z-index:10}.moveToLeft[_ngcontent-%COMP%]{bottom:5%;left:23px}@media screen and (max-width:1050px){.top_azul_modal[_ngcontent-%COMP%]{padding:32px 24px 0}.cnt_preg[_ngcontent-%COMP%]{padding:24px 32px}}@media screen and (max-width:480px){.h_modal[_ngcontent-%COMP%]{font-size:20px}.row_radios_modal[_ngcontent-%COMP%]{flex-direction:column;gap:12px}.itm_radio_modal[_ngcontent-%COMP%]{width:100%}.cnt_if_radio_modal[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row}.ic_radio_modal[_ngcontent-%COMP%]{min-width:40px;width:40px;height:40px}.txt_radio_modal[_ngcontent-%COMP%]{font-size:16px;line-height:18px;text-align:left}.btn_flt_encuesta[_ngcontent-%COMP%]{width:45px;height:45px;padding:8px}.btn_flt_encuesta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}}.error-text[_ngcontent-%COMP%]{color:red;font-size:13px;text-align:center;width:100%}.btn_flt_encuesta[_ngcontent-%COMP%]:after{content:"";width:30px;height:30px;border-radius:100%;border:5px #182360 solid;position:absolute;z-index:-1;animation:_ngcontent-%COMP%_ring 1.5s infinite}.btn_flt_encuesta[_ngcontent-%COMP%]:hover:after{display:none;-webkit-animation:none;animation:none}@-webkit-keyframes _ngcontent-%COMP%_ring{0%{width:60px;height:60px;opacity:1}to{width:150px;height:150px;opacity:0}}@keyframes _ngcontent-%COMP%_ring{0%{width:60px;height:60px;opacity:1}to{width:150px;height:150px;opacity:0}}']});let t=n;return t})();var ct=()=>[oe,B,ne];function st(t,n){if(t&1&&(i(0,"a",8),u(1,"img",9),a()),t&2){let e=n.$implicit,l=s(3);d("href",e==null?null:e.enlace,y),r(),d("ngSrc",l.IMG_URL()+(e==null?null:e.imagen[0]))("alt",e==null?null:e.imagen_alt[0])("title",e==null?null:e.imagen_title[0])}}function _t(t,n){if(t&1&&(i(0,"div",4),w(1,st,2,4,"a",8,S),a()),t&2){let e=s(2);r(),E(e.companies())}}function dt(t,n){if(t&1&&(i(0,"div")(1,"div",10),_(2),a(),i(3,"div",11)(4,"div",12)(5,"span",13),_(6,"place"),a(),_(7),a(),i(8,"div",12)(9,"span",13),_(10,"mail"),a(),_(11),a()()()),t&2){let e,l,o,c=s(2);r(2),f(" ",(e=c.configFooter())==null?null:e.texto_footer," "),r(5),f(" ",(l=c.configFooter())==null?null:l.address," "),r(4),f(" ",(o=c.configFooter())==null?null:o.contactemails," ")}}function pt(t,n){if(t&1&&(i(0,"div",14),u(1,"img",15),a()),t&2){let e=n.$implicit,l=s(3);r(),d("ngSrc",l.IMG_URL()+(e==null?null:e.imagen[0]))("alt",e==null?null:e.imagen_alt[0])("title",e==null?null:e.imagen_title[0])}}function mt(t,n){if(t&1&&(i(0,"div",5),w(1,pt,2,3,"div",14,S),a()),t&2){let e=s(2);r(),E(e.logos())}}function ut(t,n){if(t&1&&(i(0,"a",20),_(1),a()),t&2){let e=s().$implicit;d("href",e==null?null:e.url_enlace_footer,y),r(),f(" ",e==null?null:e.field_content," ")}}function ft(t,n){if(t&1&&(i(0,"a",21),_(1),a()),t&2){let e=s().$implicit;V("routerLink",e==null?null:e.url_enlace_footer),r(),f(" ",e==null?null:e.field_content," ")}}function vt(t,n){if(t&1&&(i(0,"li"),m(1,ut,2,2,"a",20)(2,ft,2,2),a()),t&2){let e=n.$implicit;r(),C(1,!(e==null||e.url_enlace_footer==null)&&e.url_enlace_footer.includes("https://")||!(e==null||e.url_enlace_footer==null)&&e.url_enlace_footer.includes("http://")?1:2)}}function gt(t,n){if(t&1){let e=h();i(0,"div",17,0),v("click",function(){g(e);let o=z(1),c=s(3);return x(c.dropdownToogleMenu(o))}),i(2,"div",18),_(3),a(),i(4,"ul",19),w(5,vt,3,1,"li",null,S),a()()}if(t&2){let e=n.$implicit;r(3),f(" ",e==null?null:e.field_content," "),r(2),E(e.hijos)}}function xt(t,n){if(t&1&&(i(0,"a",20),_(1),a()),t&2){let e=s().$implicit;d("href",e==null?null:e.url_enlace_footer,y),r(),f(" ",e==null?null:e.field_content," ")}}function Ct(t,n){if(t&1&&(i(0,"a",21),_(1),a()),t&2){let e=s().$implicit;V("routerLink",e==null?null:e.url_enlace_footer),r(),f(" ",e==null?null:e.field_content," ")}}function ht(t,n){if(t&1&&(i(0,"li"),m(1,xt,2,2,"a",20)(2,Ct,2,2),a()),t&2){let e=n.$implicit;r(),C(1,!(e==null||e.url_enlace_footer==null)&&e.url_enlace_footer.includes("https://")?1:2)}}function yt(t,n){if(t&1){let e=h();i(0,"div",17,0),v("click",function(){g(e);let o=z(1),c=s(3);return x(c.dropdownToogleMenu(o))}),i(2,"div",22),_(3),a(),i(4,"ul",19),w(5,ht,3,1,"li",null,S),a()()}if(t&2){let e=n.$implicit;r(3),f(" ",e.field_content," "),r(2),E(e.hijos)}}function St(t,n){if(t&1&&(i(0,"div",6),w(1,gt,7,1,"div",16,S),w(3,yt,7,1,"div",16,S),a()),t&2){let e=s(2);r(),E(e.menuFooter()),r(2),E(e.menuFooterProyectos())}}function wt(t,n){if(t&1&&(i(0,"a",24),u(1,"i"),a()),t&2){let e=n.$implicit;d("href",e==null?null:e.url,y),r(),ee(e==null?null:e.class_footer)}}function Et(t,n){if(t&1&&(i(0,"div",7)(1,"div",23),w(2,wt,2,3,"a",24,S),a(),i(4,"div",25),_(5," \xA9OIKOS CONSTRUCTORA 2022. Todos los derechos reservados. "),a()()),t&2){let e=s(2);r(2),E(e.socialNetwork())}}function Ft(t,n){if(t&1&&(i(0,"footer",1)(1,"div",2)(2,"div",3),m(3,_t,3,0,"div",4)(4,dt,12,3,"div")(5,mt,3,0,"div",5),a()(),m(6,St,5,0,"div",6)(7,Et,6,0,"div",7),a(),u(8,"survey-modal")),t&2){let e=s();r(3),C(3,e.companies().length>0?3:-1),r(),C(4,e.configFooter()?4:-1),r(),C(5,e.logos.length>0?5:-1),r(),C(6,e.menuFooter().length>0?6:-1),r(),C(7,e.socialNetwork().length>0?7:-1)}}function Mt(t,n){if(t&1&&(i(0,"a",8),u(1,"img",9),a()),t&2){let e=n.$implicit,l=s(4);d("href",e==null?null:e.enlace,y),r(),d("ngSrc",l.IMG_URL()+(e==null?null:e.imagen[0]))("alt",e==null?null:e.imagen_alt[0])("title",e==null?null:e.imagen_title[0])}}function kt(t,n){if(t&1&&(i(0,"div",4),w(1,Mt,2,4,"a",8,S),a()),t&2){let e=s(3);r(),E(e.companies())}}function It(t,n){if(t&1&&(i(0,"div")(1,"div",10),_(2),a(),i(3,"div",11)(4,"div",12)(5,"span",13),_(6,"place"),a(),_(7),a(),i(8,"div",12)(9,"span",13),_(10,"mail"),a(),_(11),a()()()),t&2){let e,l,o,c=s(3);r(2),f(" ",(e=c.configFooter())==null?null:e.texto_footer," "),r(5),f(" ",(l=c.configFooter())==null?null:l.address," "),r(4),f(" ",(o=c.configFooter())==null?null:o.contactemails," ")}}function Tt(t,n){if(t&1&&(i(0,"div",14),u(1,"img",15),a()),t&2){let e=n.$implicit,l=s(4);r(),d("ngSrc",l.IMG_URL()+(e==null?null:e.imagen[0]))("alt",e==null?null:e.imagen_alt[0])("title",e==null?null:e.imagen_title[0])}}function bt(t,n){if(t&1&&(i(0,"div",5),w(1,Tt,2,3,"div",14,S),a()),t&2){let e=s(3);r(),E(e.logos())}}function Ot(t,n){if(t&1&&(i(0,"a",20),_(1),a()),t&2){let e=s().$implicit;d("href",e==null?null:e.url_enlace_footer,y),r(),f(" ",e==null?null:e.field_content," ")}}function Pt(t,n){if(t&1&&(i(0,"a",21),_(1),a()),t&2){let e=s().$implicit;V("routerLink",e==null?null:e.url_enlace_footer),r(),f(" ",e==null?null:e.field_content," ")}}function $t(t,n){if(t&1&&(i(0,"li"),m(1,Ot,2,2,"a",20)(2,Pt,2,2),a()),t&2){let e=n.$implicit;r(),C(1,!(e==null||e.url_enlace_footer==null)&&e.url_enlace_footer.includes("https://")||!(e==null||e.url_enlace_footer==null)&&e.url_enlace_footer.includes("http://")?1:2)}}function Vt(t,n){if(t&1){let e=h();i(0,"div",17,0),v("click",function(){g(e);let o=z(1),c=s(4);return x(c.dropdownToogleMenu(o))}),i(2,"div",18),_(3),a(),i(4,"ul",19),w(5,$t,3,1,"li",null,S),a()()}if(t&2){let e=n.$implicit;r(3),f(" ",e==null?null:e.field_content," "),r(2),E(e.hijos)}}function zt(t,n){if(t&1&&(i(0,"a",20),_(1),a()),t&2){let e=s().$implicit;d("href",e==null?null:e.url_enlace_footer,y),r(),f(" ",e==null?null:e.field_content," ")}}function Dt(t,n){if(t&1&&(i(0,"a",21),_(1),a()),t&2){let e=s().$implicit;V("routerLink",e==null?null:e.url_enlace_footer),r(),f(" ",e==null?null:e.field_content," ")}}function Lt(t,n){if(t&1&&(i(0,"li"),m(1,zt,2,2,"a",20)(2,Dt,2,2),a()),t&2){let e=n.$implicit;r(),C(1,!(e==null||e.url_enlace_footer==null)&&e.url_enlace_footer.includes("https://")?1:2)}}function jt(t,n){if(t&1){let e=h();i(0,"div",17,0),v("click",function(){g(e);let o=z(1),c=s(4);return x(c.dropdownToogleMenu(o))}),i(2,"div",22),_(3),a(),i(4,"ul",19),w(5,Lt,3,1,"li",null,S),a()()}if(t&2){let e=n.$implicit;r(3),f(" ",e.field_content," "),r(2),E(e.hijos)}}function Nt(t,n){if(t&1&&(i(0,"div",6),w(1,Vt,7,1,"div",16,S),w(3,jt,7,1,"div",16,S),a()),t&2){let e=s(3);r(),E(e.menuFooter()),r(2),E(e.menuFooterProyectos())}}function Rt(t,n){if(t&1&&(i(0,"a",24),u(1,"i"),a()),t&2){let e=n.$implicit;d("href",e==null?null:e.url,y),r(),ee(e==null?null:e.class_footer)}}function Ut(t,n){if(t&1&&(i(0,"div",7)(1,"div",23),w(2,Rt,2,3,"a",24,S),a(),i(4,"div",25),_(5," \xA9OIKOS CONSTRUCTORA 2022. Todos los derechos reservados. "),a()()),t&2){let e=s(3);r(2),E(e.socialNetwork())}}function At(t,n){if(t&1&&(i(0,"footer",1)(1,"div",2)(2,"div",3),m(3,kt,3,0,"div",4)(4,It,12,3,"div")(5,bt,3,0,"div",5),a()(),m(6,Nt,5,0,"div",6)(7,Ut,6,0,"div",7),a(),u(8,"survey-modal")),t&2){let e=s(2);r(3),C(3,e.companies().length>0?3:-1),r(),C(4,e.configFooter()?4:-1),r(),C(5,e.logos.length>0?5:-1),r(),C(6,e.menuFooter().length>0?6:-1),r(),C(7,e.socialNetwork().length>0?7:-1)}}function Ht(t,n){t&1&&(m(0,At,9,5),re(1,0,ct),ce())}var Z=(()=>{let n=class n{constructor(){this.homeIsActive=F(void 0),this.cs=k(he),this.getSocialNetwork=ke(),this.getConfigFooter=Ie(),this.getElementsContent=W(),this.getMenuFooter=Te(),this.responsive=k(ye),this.router=k(R),this.IMG_URL=F(T.imagenes_url),this.socialNetwork=F([]),this.configFooter=F(null),this.companies=F([]),this.logos=F([]),this.menuFooter=F([]),this.menuFooterProyectos=F([]),this.suscribeListenRouter=F(void 0),this.suscribeListenRouter.set(this.router.events.subscribe(l=>{l instanceof N&&(this.router.url=="/"?this.homeIsActive.set(!0):this.homeIsActive.set(!1))}))}ngOnInit(){this.init()}ngOnDestroy(){this.suscribeListenRouter()?.unsubscribe()}init(){return M(this,null,function*(){yield this.getCollectionsPage(),this.configFooter.set(yield this.getConfigFooter());let l=yield this.getMenuFooter();this.menuFooter.set(l.splice(0,2)),this.menuFooterProyectos.set(l),this.socialNetwork.set(yield this.getSocialNetwork())})}getCollectionsPage(){return M(this,null,function*(){this.companies.set(yield this.getElementsContent({name:"titulo empresa",content:"logos_empresas"})),this.logos.set(yield this.getElementsContent({name:"titulo logo footer",content:"logos"}))})}dropdownToogleMenu(l){if(this.responsive.isMobile){let o=$(l).find(".h_cl_pie"),c=$(l).find(".menu_pie");$(o).hasClass("active")?($(o).next(c).slideUp(),$(o).removeClass("active")):($(c).slideUp(),$(o).removeClass("active"),$(o).addClass("active"),$(o).next().slideToggle())}}};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=b({type:n,selectors:[["app-footer"]],standalone:!0,features:[L],decls:2,vars:1,consts:[["menuEle",""],[1,"footer"],[1,"cnt_lat_pie"],[1,"cnt_gen_inf_lat_pie"],[1,"cnt_logos_pie"],[1,"cnt_gen_cert_pie"],[1,"cnt_mid_pie"],[1,"cnt_bot_pie"],["target","_blank","rel","noopener",1,"logo_pie",3,"href"],["width","80","height","60",3,"ngSrc","alt","title"],[1,"txt_pie"],[1,"cnt_dir_pie"],[1,"direccion_pie"],[1,"material-icons"],[1,"logo_cert_pie"],["height","143","width","140",3,"ngSrc","alt","title"],[1,"col_mid_men_pie"],[1,"col_mid_men_pie",3,"click"],[1,"h_cl_pie"],[1,"menu_pie"],["target","_blank","rel","noopener",3,"href"],[3,"routerLink"],[1,"h_cl_pie","proy_footer"],[1,"cnt_redes_pie"],["target","_blank","rel","nofollow",3,"href"],[1,"copyr_pie"]],template:function(o,c){o&1&&m(0,Ft,9,5)(1,Ht,3,0),o&2&&C(0,c.cs.loadCEvent().includes("last")&&c.homeIsActive()==!0?0:c.homeIsActive()==!1?1:-1)},dependencies:[oe,G,B,ne],encapsulation:2});let t=n;return t})();var Pe=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=b({type:n,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"cuerpo"]],template:function(o,c){o&1&&(i(0,"div",0),u(1,"app-header")(2,"router-outlet")(3,"app-footer"),a())},dependencies:[Ce,Me,Z]});let t=n;return t})();var $e=(t,n)=>M(void 0,null,function*(){let e=k(X),l=k(we),o=k(Se),c=yield e.getSeoContentPage("/");return c?(l.setUpMetaTags(c),o.insertSchema(o.getHomeSchema(),{className:"home_schema",id:0}),!0):!1});var Gt=[{path:"",loadComponent:()=>import("./chunk-IHKP3VAU.js").then(t=>t.HomePageComponent),canActivate:[$e]},{path:"contactanos",loadChildren:()=>import("./chunk-BPCSNTGQ.js").then(t=>t.ContactModule)},{path:"gracias/:slug",loadChildren:()=>import("./chunk-NOIF7Q6J.js").then(t=>t.ThanksModule)},{path:"noticias-constructora",loadChildren:()=>import("./chunk-AXGBS5AN.js").then(t=>t.BlogModule)},{path:"proyectos-construccion-vivienda",loadChildren:()=>import("./chunk-SHQJY6Y6.js").then(t=>t.ViviendaModule)},{path:"proyectos-construccion-comerciales-industriales",loadChildren:()=>import("./chunk-6QTVWJCY.js").then(t=>t.ComercialesModule)},{path:"proyecto/:slug",loadChildren:()=>import("./chunk-HEKFNQHU.js").then(t=>t.InternaModule)},{path:"legales",loadChildren:()=>import("./chunk-XGEFG6YT.js").then(t=>t.LegalesModule)},{path:"proyectos-ejecutados",loadChildren:()=>import("./chunk-QO6A2WSO.js").then(t=>t.EjecutadosModule)},{path:"pagos-constructora",loadChildren:()=>import("./chunk-AVTBI4ZA.js").then(t=>t.PagosModule)},{path:"mapa-del-sitio",loadChildren:()=>import("./chunk-RTWCHAI7.js").then(t=>t.MapaModule)},{path:"**",loadComponent:()=>import("./chunk-ZPT5GSQF.js").then(t=>t.NotFoundPageComponent)},{path:"404",loadComponent:()=>import("./chunk-ZPT5GSQF.js").then(t=>t.NotFoundPageComponent)}],Ve=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=K({type:n}),n.\u0275inj=Q({imports:[G.forRoot(Gt),G]});let t=n;return t})();var ze=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=K({type:n,bootstrap:[Pe]}),n.\u0275inj=Q({providers:[ue(fe()),{provide:me,useClass:Ee,multi:!0},xe()],imports:[ge,Ve,Z]});let t=n;return t})();T.production&&void 0;ve().bootstrapModule(ze).catch(t=>console.error(t));

import{b as rt}from"./chunk-6HO5ICAQ.js";import{a as Ct}from"./chunk-3R5L5U6C.js";import{a as M}from"./chunk-J5NU3EP2.js";import{a as bt}from"./chunk-BCAWV3EG.js";import{a as W}from"./chunk-XOQTU3U2.js";import{a as G,b as Y,c as _,d as J,e as K,g as Q,h as wt,i as X,j as Z,k as tt,l as et,m as ot,n as yt,o as nt,p as it,q as k,r as N,s as at}from"./chunk-XQTG2NCF.js";import{a as Pt,b as U}from"./chunk-POD4BLUB.js";import{a as vt}from"./chunk-7SCTSF4L.js";import{Na as P,c as B,d as w,e as y,m as O,p as xt,ta as R,ua as H}from"./chunk-FBJGKUSD.js";import{Bb as e,Cb as n,Db as p,Gb as ft,Hb as h,Ib as x,Lb as gt,Mb as j,Pa as dt,Qa as _t,Tb as l,Ub as I,Va as m,Vb as v,Wa as u,Y as b,Yb as D,Z as T,Zb as q,_b as L,aa as st,ba as pt,d as f,ea as V,fa as A,lb as d,pa as E,qa as ht,rb as s,s as ut}from"./chunk-XI7NKT5T.js";var Mt=(()=>{let o=class o{constructor(i,c){this.pageService=i,this.seoService=c}canActivate(i,c){return f(this,null,function*(){let a=yield this.pageService.getSeoContentPage("contactanos");return a?(this.pageService.currentPage=a,this.seoService.setUpMetaTags(a),!0):!1})}};o.\u0275fac=function(c){return new(c||o)(E(M),E(Ct))},o.\u0275prov=V({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();var It=vt.base_url,St=(()=>{let o=class o{constructor(i){this._http=i,this.nameContact=""}postContactForm(i){return f(this,null,function*(){let c=`${It}api/v1/setContactForm`;return ut(this._http.post(c,i)).then().catch(a=>(console.warn(a),!1))})}};o.\u0275fac=function(c){return new(c||o)(E(xt))},o.\u0275prov=V({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();function At(t,o){t&1&&(e(0,"small"),l(1,"campo inv\xE1lido*"),n())}function $t(t,o){t&1&&(e(0,"small"),l(1,"campo inv\xE1lido*"),n())}function Dt(t,o){t&1&&(e(0,"small"),l(1,"campo inv\xE1lido*"),n())}function qt(t,o){if(t&1&&(e(0,"option",21),l(1),n()),t&2){let r=o.$implicit;s("value",r==null?null:r.field_content),m(),I(r==null?null:r.field_content)}}function Lt(t,o){if(t&1&&(e(0,"div",6)(1,"select",20)(2,"option",11),l(3,"Selecciona el asunto"),n(),d(4,qt,2,2,"option",12),n()()),t&2){let r=x();m(4),s("ngForOf",r.affairList)}}function Bt(t,o){if(t&1&&(e(0,"option",21),l(1),n()),t&2){let r=o.$implicit;s("value",r==null?null:r.id),m(),I(r==null?null:r.titulo_proyecto)}}function Rt(t,o){t&1&&(e(0,"small"),l(1,"campo inv\xE1lido*"),n())}function Ht(t,o){t&1&&(e(0,"small"),l(1,"campo inv\xE1lido*"),n())}function Wt(t,o){t&1&&(e(0,"small"),l(1,"debes aceptar la pol\xEDtica de tratamiento de datos*"),n())}var Ut=()=>["/legales","politicas-de-privacidad"],ct=(()=>{let o=class o{constructor(i,c,a,g,C,F){this.fb=i,this.formService=c,this.router=a,this.contactService=g,this.pageService=C,this.projectService=F,this.showErrors=!1,this.affairList=[],this.housingProjects=[],this.typeForm="general",this.recipient_mail=""}ngOnInit(){this.initForm(),this.getProjectsHome()}initForm(){this.typeForm==="general"?(this.contactForm=this.fb.group({full_name:["",this.formService.noWhitespaceValidator],email:["",[this.formService.noWhitespaceValidator,_.pattern(k)]],phone:["",_.compose([_.required,_.pattern(N)])],affair:["",this.formService.noWhitespaceValidator],message:["",this.formService.noWhitespaceValidator],project:["",this.formService.noWhitespaceValidator],terms:["",_.requiredTrue]}),this.getAffairList()):this.contactForm=this.fb.group({full_name:["",this.formService.noWhitespaceValidator],email:["",[this.formService.noWhitespaceValidator,_.pattern(k)]],phone:["",_.compose([_.required,_.pattern(N)])],message:["",this.formService.noWhitespaceValidator],terms:["",_.requiredTrue]})}getProjectsHome(){return f(this,null,function*(){let i=yield this.projectService.getProyectosByTipo("1");i&&(this.housingProjects=i)})}getAffairList(){return f(this,null,function*(){let i=yield this.pageService.getElementsContent("titulo asunto contacto","asunto_contacto");i?.length>0&&(this.affairList=i)})}submitContactForm(){return f(this,null,function*(){if(this.contactForm.valid){let{email:i,message:c,phone:a,full_name:g,affair:C,project:F}=this.contactForm.getRawValue(),mt={nombre:g,email:i,telefono:a,page_section:this.typeForm,comentario:c,asunto:C,correo_destinatario:this.recipient_mail,proyecto:F},z=yield this.contactService.postContactForm(mt);z?.resp?this.router.navigateByUrl(z?.resp,{state:{nameContact:g}}):alert("Opps ocurri\xF3 un error enviando el formulario"),this.contactForm.reset()}else this.showErrors=!0})}hasErrorsFieldForm(i){let c=this.contactForm;return this.formService.hasErrorsFieldForm(c,i,this.showErrors)}};o.\u0275fac=function(c){return new(c||o)(u(nt),u(at),u(R),u(St),u(M),u(U))},o.\u0275cmp=b({type:o,selectors:[["app-contact-form"]],inputs:{typeForm:"typeForm",recipient_mail:"recipient_mail"},standalone:!0,features:[D],decls:37,vars:11,consts:[["action","",1,"form_mod_contacto",3,"formGroup","ngSubmit"],[1,"s_form_cnt"],[1,"cnt_campo_form"],["formControlName","full_name","type","text","placeholder","Nombre completo *",1,"campo_form"],[1,"text-danger",2,"height","7px"],[4,"ngIf"],[1,"cnt_campo_form","w_100"],["formControlName","email","type","email","placeholder","Email *",1,"campo_form"],["formControlName","phone","type","tel","placeholder","Tel\xE9fono *",1,"campo_form"],["class","cnt_campo_form w_100",4,"ngIf"],["formControlName","project"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","message","cols","10","rows","4","placeholder","Mensaje *"],[1,"cont_politicas"],["formControlName","terms","type","checkbox","name","","id","politicas1"],["for","politicas1"],["target","_blank",3,"routerLink"],[1,"row_btn"],["type","submit",1,"btn"],["formControlName","affair","id",""],[3,"value"]],template:function(c,a){c&1&&(e(0,"form",0),h("ngSubmit",function(){return a.submitContactForm()}),e(1,"section",1)(2,"div",2),p(3,"input",3),n(),e(4,"div",4),d(5,At,2,0,"small",5),n(),e(6,"div",6),p(7,"input",7),n(),e(8,"div",4),d(9,$t,2,0,"small",5),n(),e(10,"div",6),p(11,"input",8),n(),e(12,"div",4),d(13,Dt,2,0,"small",5),n(),d(14,Lt,5,1,"div",9),e(15,"div",6)(16,"select",10)(17,"option",11),l(18,"Selecciona el proyecto"),n(),d(19,Bt,2,2,"option",12),n()(),e(20,"div",4),d(21,Rt,2,0,"small",5),n(),e(22,"div",6),p(23,"textarea",13),n(),e(24,"div",4),d(25,Ht,2,0,"small",5),n()(),e(26,"div",14),p(27,"input",15),e(28,"label",16),l(29,"Acepto y Autorizo la "),e(30,"a",17),l(31," Pol\xEDtica de Tratamiento de Datos "),n()()(),e(32,"div",4),d(33,Wt,2,0,"small",5),n(),e(34,"div",18)(35,"button",19),l(36,"Enviar"),n()()()),c&2&&(s("formGroup",a.contactForm),m(5),s("ngIf",a.hasErrorsFieldForm("full_name")),m(4),s("ngIf",a.hasErrorsFieldForm("email")),m(4),s("ngIf",a.hasErrorsFieldForm("phone")),m(),s("ngIf",a.typeForm==="general"),m(5),s("ngForOf",a.housingProjects),m(2),s("ngIf",a.hasErrorsFieldForm("affair")),m(4),s("ngIf",a.hasErrorsFieldForm("message")),m(5),s("routerLink",q(10,Ut)),m(3),s("ngIf",a.hasErrorsFieldForm("terms")))},dependencies:[it,Q,et,ot,Y,G,tt,J,K,X,Z,O,w,y,P,H],styles:[".cnt_gen_contacto[_ngcontent-%COMP%]{width:100%;position:relative}.h_contacto[_ngcontent-%COMP%]{width:100%;font-size:54px;font-weight:900;color:var(--color-c2);text-align:center;padding:48px 0 0}.txt_contacto[_ngcontent-%COMP%]{font-size:15px;width:100%;max-width:657px;margin:auto;padding:0 0 48px;text-align:center}.row_mod_contacto[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;flex-wrap:wrap;padding-bottom:80px}.mod_contacto[_ngcontent-%COMP%]{width:31%;max-width:374px;height:344px;margin:46px 1%;overflow:hidden;border-radius:28px;position:relative;cursor:pointer;transition:all .5s;display:none;animation:_ngcontent-%COMP%_mod_in 1s forwards}.mod_contacto[_ngcontent-%COMP%]:hover   .cnt_inf_mod_contacto[_ngcontent-%COMP%]{bottom:0}.mod_contacto.active[_ngcontent-%COMP%]{display:block;opacity:1}@keyframes _ngcontent-%COMP%_mod_in{0%{opacity:0}to{opacity:1}}.img_mod_contacto[_ngcontent-%COMP%]{width:100%;height:100%}.img_mod_contacto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{width:130%;height:55%;position:absolute;bottom:-34%;left:50%;background:linear-gradient(180deg,#253482,#182360 49.79%,#111b52);border-radius:50% 50% 0 0;transform:translate(-50%);display:flex;flex-direction:column;gap:16px;align-items:center;box-sizing:border-box;padding:0 20%;transition:all .5s}.ic_mod_contacto[_ngcontent-%COMP%]{width:40px;height:40px;background:linear-gradient(104.32deg,#fff,#e4e4e4),#c2c2c2;box-shadow:0 4px 7px #00000078;line-height:40px;text-align:center;margin-top:-20px;display:block;border-radius:50%;display:flex;align-items:center;justify-content:center}.h_mod_contacto[_ngcontent-%COMP%]{width:100%;font-size:20px;color:#fff;font-weight:900;text-align:center}.txt_mod_contacto[_ngcontent-%COMP%]{width:100%;font-size:14px;color:#fff;text-align:center}.bnt_mod_contacto[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:16px;color:#608eff;position:absolute;bottom:16px}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:45%;max-width:587px;display:flex;flex-direction:column;gap:16px;align-items:flex-start;margin:0 1%;animation:_ngcontent-%COMP%_mod_in 1s forwards}.cnt_form_mod_contacto.active_form[_ngcontent-%COMP%]{display:flex}.btn_volver_contacto[_ngcontent-%COMP%]{display:flex;align-items:center;background:#fff;border-radius:46px;padding:2px 12px 2px 8px;font-size:20px;font-weight:800;gap:8px;cursor:pointer}.btn_volver_contacto[_ngcontent-%COMP%]:hover{background:var(--color-c2);color:#fff}.form_mod_contacto[_ngcontent-%COMP%]{width:100%;background:#fff;box-shadow:0 13px 34px -8px #00000040;border-radius:19px;padding:36px}.s_form_cnt[_ngcontent-%COMP%]{width:100%;padding:16px 0;border-bottom:1px solid #ccc;display:flex;flex-wrap:wrap;justify-content:space-between;row-gap:16px}.cnt_campo_form[_ngcontent-%COMP%]{width:100%;position:relative}.cnt_campo_form.w_50[_ngcontent-%COMP%]{width:48%}.cnt_campo_form.w_30[_ngcontent-%COMP%]{width:32%}.campo_form[_ngcontent-%COMP%]{height:38px;width:100%;background:#f2f2f2;border:1px solid #E1E1E1;border-radius:6px;padding:9px 10px;box-sizing:border-box;font-size:13px}.campo_form.filled[_ngcontent-%COMP%]{font-size:16px;color:var(--color-c2);text-align:center;background:#e0e0e0}.campo_form.filled.esp[_ngcontent-%COMP%]{background:var(--color-c2);color:#fff}.etq_form_cnt[_ngcontent-%COMP%]{width:100%;font-size:13px;color:#626262;padding-bottom:4px}.etq_form_cnt.center[_ngcontent-%COMP%]{text-align:center}.form_mod_contacto[_ngcontent-%COMP%]   .cont_politicas[_ngcontent-%COMP%]{margin:0;padding:16px 0}.form_mod_contacto[_ngcontent-%COMP%]   .row_btn[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.form_mod_contacto[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:160px;text-align:center;justify-content:center}@media screen and (max-width: 1050px){.h_contacto[_ngcontent-%COMP%]{font-size:40px;padding-top:24px}.txt_contacto[_ngcontent-%COMP%]{padding-bottom:32px}.mod_contacto[_ngcontent-%COMP%]{height:300px}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{gap:12px}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:65%}}@media screen and (max-width: 768px){.row_mod_contacto[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.mod_contacto[_ngcontent-%COMP%]{width:100%;height:auto;margin:8px 0}.img_mod_contacto[_ngcontent-%COMP%]{height:200px}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{position:relative;bottom:inherit;padding-bottom:16px;margin-top:-50px}.bnt_mod_contacto[_ngcontent-%COMP%]{position:relative;bottom:inherit}.bnt_mod_contacto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform:rotate(90deg)}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:100%;margin:16px 0}}@media screen and (max-width: 480px){.cnt_campo_form.w_30[_ngcontent-%COMP%], .cnt_campo_form.w_50[_ngcontent-%COMP%]{width:100%}}.text-danger[_ngcontent-%COMP%]{color:#c03939}.disable-ele[_ngcontent-%COMP%]{opacity:.3;cursor:default}"]});let t=o;return t})();function Yt(t,o){t&1&&(e(0,"small"),l(1,"campo inv\xE1lido*"),n())}function Jt(t,o){t&1&&(e(0,"small"),l(1,"campo inv\xE1lido*"),n())}function Kt(t,o){t&1&&(e(0,"small"),l(1,"campo inv\xE1lido*"),n())}function Qt(t,o){if(t&1&&(e(0,"option",37),l(1),n()),t&2){let r=o.$implicit;s("value",r==null?null:r.url_amigable),m(),I(r==null?null:r.titulo_proyecto)}}function Xt(t,o){t&1&&(e(0,"small"),l(1,"campo inv\xE1lido*"),n())}function Zt(t,o){if(t&1&&(e(0,"small"),l(1),n()),t&2){let r=x();m(),v(" Ingresa un valor entre ",r.selectedProject.porcentaje_minimo," y 100 ")}}function te(t,o){if(t&1&&(e(0,"option",38),l(1),n()),t&2){let r=o.$implicit,i=o.index;gt("value",r.nro),s("selected",i==0),m(),v(" ",r.nro," ")}}function ee(t,o){t&1&&(e(0,"small"),l(1,"campo inv\xE1lido*"),n())}function oe(t,o){t&1&&(e(0,"small"),l(1,"Debes aceptar la Pol\xEDtica de Tratamiento de Datos*"),n())}var ne=t=>({"disable-ele":t}),ie=()=>["/legales","politicas-de-privacidad"],lt=(()=>{let o=class o{constructor(i,c,a,g,C){this.fb=i,this.formService=c,this.configServ=a,this.projectService=g,this.router=C,this.showErrors=!1,this.disableForm=!0,this.housingProjects=[],this.selectedProject=new Pt,this.datosCalc=[],this.datosCuota=[],this.datosAnio=[],this.porcFinanciar=100,this.calculateForm=this.fb.group({full_name:["",this.formService.noWhitespaceValidator],project_slug:["",this.formService.noWhitespaceValidator],email:["",[this.formService.noWhitespaceValidator,_.pattern(k)]],phone:["",_.compose([_.required,_.pattern(N)])],initial_fee:[0,_.compose([_.required,_.max(100)])],total_fees:[null,_.compose([_.required])],termInYears:["10"],terms:["",_.requiredTrue]})}ngOnInit(){this.getProjectsHome()}getProjectsHome(){return f(this,null,function*(){let i=yield this.projectService.getProyectosByTipo("1");i&&(this.housingProjects=i)})}hasErrorsFieldForm(i){let c=this.calculateForm;return this.formService.hasErrorsFieldForm(c,i,this.showErrors)}updateProjectSelected(){return f(this,null,function*(){let[i]=yield this.projectService.getProyectoByUrl(this.calculateForm.value?.project_slug);i?(this.selectedProject=i,this.calculateForm.patchValue({initial_fee:this.selectedProject.porcentaje_minimo}),this.calculatePercentage(),this.disableForm=!1):alert("Ocurri\xF3 un error, por favor contact\xE9se con el administrador")})}calculatePercentage(){return f(this,null,function*(){let{initial_fee:i,total_fees:c,termInYears:a}=this.calculateForm.getRawValue(),g=i,C=c,F=a,mt=this.selectedProject.financiar;this.porcFinanciar=100-g;let[z]=yield this.projectService.getCalculoPorcentaje(this.selectedProject.valor_proyecto,g,C,F,mt);this.datosCalc=z,$(".valorCuotaInicial").val("$ "+this.datosCalc.cuotaInicial),$(".diferencia").val("$ "+this.datosCalc.diferencia),this.datosCalc.cuotasinicialfinanciar!="inf"&&$(".cuotamensual").val("$ "+this.datosCalc.cuotasinicialfinanciar),$(".valorafinanciar").val("$ "+this.datosCalc.valorafinanciar),this.termInYears()})}diferenciadordecuotasmensuales(){return f(this,null,function*(){var i=$(".diferencia").val(),c=$(".cuotasinicialfinanciar").val();this.datosCuota=yield this.projectService.getCalculoCuota(i,c),this.datosCuota=this.datosCuota[0],this.datosCuota.valorcuotas!="inf"&&$(".cuotamensual").val("$ "+this.datosCuota.valorcuotas)})}termInYears(){return f(this,null,function*(){var i=this.calculateForm.getRawValue()?.termInYears,c=$(".valorafinanciar").val();this.datosAnio=yield this.projectService.getPlazoanios(i,c),this.datosAnio=this.datosAnio[0],$(".cuotahipoteca").val("$ "+this.datosAnio.total)})}insertContact(){return f(this,null,function*(){if(this.configServ.isBrowser()){let i={nombre:this.calculateForm.controls.full_name?.value,email:this.calculateForm.controls.email?.value,telefono:this.calculateForm.controls.phone?.value,cuotaInicial:this.calculateForm.controls.initial_fee?.value,numeroCuotas:this.calculateForm.controls.total_fees?.value,valorCuotaInicial:$(".valorCuotaInicial").val(),separacion:$(".separacion").val(),saldoCuotaInicial:$(".diferencia").val(),cuotamensual:$(".cuotamensual").val(),porcentajeFinanciar:$(".porcentajeFinanciar").val(),valorafinanciar:$(".valorafinanciar").val(),plazoaniosa:this.calculateForm.controls.termInYears?.value,cuotahipoteca:$(".cuotahipoteca").val(),porcentajeseparacion:this.selectedProject.porcentaje_separacion,url_proyecto:window.location.href,proyecto:this.selectedProject.titulo_proyecto,valorProyecto:this.selectedProject.valor_proyecto,sendTo:this.selectedProject.email_contactos,id_proyecto:this.selectedProject.id};if(this.calculateForm.valid){let{resp:c}=yield this.projectService.setCalculadoraForm(i);c!="no"&&this.router.navigateByUrl(c,{state:{nameContact:this.calculateForm.controls.full_name?.value}})}else this.showErrors=!0}})}};o.\u0275fac=function(c){return new(c||o)(u(nt),u(at),u(W),u(U),u(R))},o.\u0275cmp=b({type:o,selectors:[["app-calculate-form"]],standalone:!0,features:[D],decls:90,vars:22,consts:[[1,"form_mod_contacto",3,"formGroup","ngSubmit"],[1,"s_form_cnt"],[1,"cnt_campo_form"],["formControlName","full_name","type","text","placeholder","Nombre completo *",1,"campo_form"],[1,"text-danger",2,"height","7px"],[4,"ngIf"],[1,"cnt_campo_form","w_50"],["type","email","placeholder","Email *","formControlName","email",1,"campo_form"],["type","tel","placeholder","Tel\xE9fono *","formControlName","phone",1,"campo_form"],[1,"etq_form_cnt"],["formControlName","project_slug","name","","id","",1,"campo_form",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"calculate-container",3,"ngClass"],["for",""],["type","number","formControlName","initial_fee",1,"cambiarPorcentaje",3,"min","change"],["formControlName","total_fees",1,"campo_form","cuotasinicialfinanciar",3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],[1,"cnt_campo_form","w_30"],[1,"etq_form_cnt","center"],["type","text","readonly","",1,"campo_form","filled","valorCuotaInicial",3,"value"],["type","text","readonly","",1,"campo_form","filled","separacion",3,"value"],["type","text",1,"campo_form","filled","esp","diferencia",3,"value"],["type","text","readonly","",1,"campo_form","filled","cuotamensual"],["type","text","readonly","",1,"campo_form","filled","porcentajeFinanciar",3,"value"],["type","text","readonly","",1,"campo_form","filled","valorafinanciar",3,"value"],["formControlName","termInYears",1,"campo_form",3,"change"],["value","10"],["value","15"],["value","20"],["type","text","readonly","",1,"campo_form","filled","cuotahipoteca"],[1,"cont_politicas"],["formControlName","terms","type","checkbox","name","","id","politicas1"],["for","politicas1"],["target","_blank",3,"routerLink"],[1,"row_btn"],["type","submit",1,"btn"],[3,"value"],[3,"value","selected"]],template:function(c,a){c&1&&(e(0,"form",0),h("ngSubmit",function(){return a.insertContact()}),e(1,"section",1)(2,"div",2),p(3,"input",3),e(4,"div",4),d(5,Yt,2,0,"small",5),n()(),e(6,"div",6),p(7,"input",7),e(8,"div",4),d(9,Jt,2,0,"small",5),n()(),e(10,"div",6),p(11,"input",8),e(12,"div",4),d(13,Kt,2,0,"small",5),n()()(),e(14,"section",1)(15,"div",2)(16,"div",9),l(17,"Elige el proyecto a cotizar"),n(),e(18,"select",10),h("change",function(){return a.updateProjectSelected()}),e(19,"option",11),l(20,"Selecciona el proyecto"),n(),d(21,Qt,2,2,"option",12),n(),e(22,"div",4),d(23,Xt,2,0,"small",5),n()()(),e(24,"div",13)(25,"section",1)(26,"div",6)(27,"label",14),l(28,"Cuota inicial %"),n(),e(29,"input",15),h("change",function(){return a.calculatePercentage()}),n(),e(30,"div",4),d(31,Zt,2,1,"small",5),n()(),e(32,"div",6)(33,"label",14),l(34,"N\xFAmero de cuotas"),n(),e(35,"select",16),h("change",function(){return a.diferenciadordecuotasmensuales()}),d(36,te,2,3,"option",17),n(),e(37,"div",4),d(38,ee,2,0,"small",5),n()(),e(39,"div",18)(40,"div",19),l(41,"Valor cuota inicial"),n(),p(42,"input",20),n(),e(43,"div",18)(44,"div",19),l(45),n(),p(46,"input",21),n(),e(47,"div",18)(48,"div",19),l(49,"Saldo cuota inicial"),n(),p(50,"input",22),n(),e(51,"div",18)(52,"div",19),l(53,"Valor cuota mensual"),n(),p(54,"input",23),n()(),e(55,"section",1)(56,"div",6)(57,"div",19),l(58,"Saldo a financiar"),n(),p(59,"input",24),n(),e(60,"div",6)(61,"div",19),l(62,"Valor"),n(),p(63,"input",25),n()(),e(64,"section",1)(65,"div",6)(66,"div",9),l(67,"Plazo en a\xF1os"),n(),e(68,"select",26),h("change",function(){return a.termInYears()}),e(69,"option",27),l(70,"10"),n(),e(71,"option",28),l(72,"15"),n(),e(73,"option",29),l(74,"20"),n()()(),e(75,"div",6)(76,"div",9),l(77,"Valor cuota hipotecaria"),n(),p(78,"input",30),n()()(),e(79,"div",31),p(80,"input",32),e(81,"label",33),l(82,"Acepto y Autorizo la "),e(83,"a",34),l(84," Pol\xEDtica de Tratamiento de Datos "),n()(),e(85,"div",4),d(86,oe,2,0,"small",5),n()(),e(87,"div",35)(88,"button",36),l(89,"Enviar"),n()()()),c&2&&(s("formGroup",a.calculateForm),m(5),s("ngIf",a.hasErrorsFieldForm("full_name")),m(4),s("ngIf",a.hasErrorsFieldForm("email")),m(4),s("ngIf",a.hasErrorsFieldForm("phone")),m(8),s("ngForOf",a.housingProjects),m(2),s("ngIf",a.hasErrorsFieldForm("project_slug")),m(),s("ngClass",L(19,ne,a.disableForm)),m(5),s("min",a.selectedProject.porcentaje_minimo),m(2),s("ngIf",a.hasErrorsFieldForm("initial_fee")),m(5),s("ngForOf",a.selectedProject.numero_cuotas),m(2),s("ngIf",a.hasErrorsFieldForm("total_fees")),m(4),j("value","$ ",a.selectedProject.cuota_inicial,""),m(3),v("Separaci\xF3n ",a.selectedProject.porcentaje_separacion,"%"),m(),j("value","$ ",a.selectedProject.cuota_separacion,""),m(4),j("value","$ ",a.selectedProject.saldo_cuota,""),m(9),gt("value",a.porcFinanciar),m(4),j("value","$ ",a.selectedProject.financiar,""),m(20),s("routerLink",q(21,ie)),m(3),s("ngIf",a.hasErrorsFieldForm("terms")))},dependencies:[it,Q,et,ot,Y,wt,G,tt,J,K,yt,X,Z,O,B,w,y,P,H],styles:[".cnt_gen_contacto[_ngcontent-%COMP%]{width:100%;position:relative}.h_contacto[_ngcontent-%COMP%]{width:100%;font-size:54px;font-weight:900;color:var(--color-c2);text-align:center;padding:48px 0 0}.txt_contacto[_ngcontent-%COMP%]{font-size:15px;width:100%;max-width:657px;margin:auto;padding:0 0 48px;text-align:center}.row_mod_contacto[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;flex-wrap:wrap;padding-bottom:80px}.mod_contacto[_ngcontent-%COMP%]{width:31%;max-width:374px;height:344px;margin:46px 1%;overflow:hidden;border-radius:28px;position:relative;cursor:pointer;transition:all .5s;display:none;animation:_ngcontent-%COMP%_mod_in 1s forwards}.mod_contacto[_ngcontent-%COMP%]:hover   .cnt_inf_mod_contacto[_ngcontent-%COMP%]{bottom:0}.mod_contacto.active[_ngcontent-%COMP%]{display:block;opacity:1}@keyframes _ngcontent-%COMP%_mod_in{0%{opacity:0}to{opacity:1}}.img_mod_contacto[_ngcontent-%COMP%]{width:100%;height:100%}.img_mod_contacto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{width:130%;height:55%;position:absolute;bottom:-34%;left:50%;background:linear-gradient(180deg,#253482,#182360 49.79%,#111b52);border-radius:50% 50% 0 0;transform:translate(-50%);display:flex;flex-direction:column;gap:16px;align-items:center;box-sizing:border-box;padding:0 20%;transition:all .5s}.ic_mod_contacto[_ngcontent-%COMP%]{width:40px;height:40px;background:linear-gradient(104.32deg,#fff,#e4e4e4),#c2c2c2;box-shadow:0 4px 7px #00000078;line-height:40px;text-align:center;margin-top:-20px;display:block;border-radius:50%;display:flex;align-items:center;justify-content:center}.h_mod_contacto[_ngcontent-%COMP%]{width:100%;font-size:20px;color:#fff;font-weight:900;text-align:center}.txt_mod_contacto[_ngcontent-%COMP%]{width:100%;font-size:14px;color:#fff;text-align:center}.bnt_mod_contacto[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:16px;color:#608eff;position:absolute;bottom:16px}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:45%;max-width:587px;display:flex;flex-direction:column;gap:16px;align-items:flex-start;margin:0 1%;animation:_ngcontent-%COMP%_mod_in 1s forwards}.cnt_form_mod_contacto.active_form[_ngcontent-%COMP%]{display:flex}.btn_volver_contacto[_ngcontent-%COMP%]{display:flex;align-items:center;background:#fff;border-radius:46px;padding:2px 12px 2px 8px;font-size:20px;font-weight:800;gap:8px;cursor:pointer}.btn_volver_contacto[_ngcontent-%COMP%]:hover{background:var(--color-c2);color:#fff}.form_mod_contacto[_ngcontent-%COMP%]{width:100%;background:#fff;box-shadow:0 13px 34px -8px #00000040;border-radius:19px;padding:36px}.s_form_cnt[_ngcontent-%COMP%]{width:100%;padding:16px 0;border-bottom:1px solid #ccc;display:flex;flex-wrap:wrap;justify-content:space-between;row-gap:16px}.cnt_campo_form[_ngcontent-%COMP%]{width:100%;position:relative}.cnt_campo_form.w_50[_ngcontent-%COMP%]{width:48%}.cnt_campo_form.w_30[_ngcontent-%COMP%]{width:32%}.campo_form[_ngcontent-%COMP%]{height:38px;width:100%;background:#f2f2f2;border:1px solid #E1E1E1;border-radius:6px;padding:9px 10px;box-sizing:border-box;font-size:13px}.campo_form.filled[_ngcontent-%COMP%]{font-size:16px;color:var(--color-c2);text-align:center;background:#e0e0e0}.campo_form.filled.esp[_ngcontent-%COMP%]{background:var(--color-c2);color:#fff}.etq_form_cnt[_ngcontent-%COMP%]{width:100%;font-size:13px;color:#626262;padding-bottom:4px}.etq_form_cnt.center[_ngcontent-%COMP%]{text-align:center}.form_mod_contacto[_ngcontent-%COMP%]   .cont_politicas[_ngcontent-%COMP%]{margin:0;padding:16px 0}.form_mod_contacto[_ngcontent-%COMP%]   .row_btn[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.form_mod_contacto[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:160px;text-align:center;justify-content:center}@media screen and (max-width: 1050px){.h_contacto[_ngcontent-%COMP%]{font-size:40px;padding-top:24px}.txt_contacto[_ngcontent-%COMP%]{padding-bottom:32px}.mod_contacto[_ngcontent-%COMP%]{height:300px}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{gap:12px}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:65%}}@media screen and (max-width: 768px){.row_mod_contacto[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.mod_contacto[_ngcontent-%COMP%]{width:100%;height:auto;margin:8px 0}.img_mod_contacto[_ngcontent-%COMP%]{height:200px}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{position:relative;bottom:inherit;padding-bottom:16px;margin-top:-50px}.bnt_mod_contacto[_ngcontent-%COMP%]{position:relative;bottom:inherit}.bnt_mod_contacto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform:rotate(90deg)}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:100%;margin:16px 0}}@media screen and (max-width: 480px){.cnt_campo_form.w_30[_ngcontent-%COMP%], .cnt_campo_form.w_50[_ngcontent-%COMP%]{width:100%}}.text-danger[_ngcontent-%COMP%]{color:#c03939}.disable-ele[_ngcontent-%COMP%]{opacity:.3;cursor:default}"]});let t=o;return t})();var re=t=>({active:t});function ce(t,o){if(t&1){let r=ft();e(0,"div",9),h("click",function(){let a=st(r).index,g=x();return pt(g.activeItemContact(a))}),e(1,"div",10),p(2,"img",11),n(),e(3,"div",12)(4,"span",13),p(5,"img",11),n(),e(6,"div",14),l(7),n(),p(8,"div",15),e(9,"div",16),l(10),e(11,"span",17),l(12,"arrow_forward"),n()()()()}if(t&2){let r=o.$implicit,i=o.index,c=x();s("ngClass",L(10,re,c.formIsShow?i===c.indexItemActive:!0)),m(2),s("src",c.BASE_URL+(r==null?null:r.imagen[0]),_t)("alt",r==null?null:r.imagen_alt[0])("title",r==null?null:r.imagen_title[0]),m(3),s("src",c.BASE_URL+(r==null?null:r.imagen[1]),_t)("alt",r==null?null:r.imagen_alt[1])("title",r==null?null:r.imagen_title[1]),m(2),v(" ",r==null?null:r.field_content," "),m(),s("innerHtml",r==null?null:r.descripcion_item_contacto,dt),m(2),v(" ",r==null?null:r.texto_boton_item_contacto," ")}}function le(t,o){if(t&1&&p(0,"app-contact-form",22),t&2){let r=x(2);s("typeForm",r.itemActive==null?null:r.itemActive.tipo_formulario_contacto)("recipient_mail",r.itemActive==null?null:r.itemActive.correo_destinatario)}}function me(t,o){t&1&&p(0,"app-calculate-form")}function se(t,o){if(t&1){let r=ft();e(0,"div",18)(1,"div",19),h("click",function(){st(r);let c=x();return pt(c.formIsShow=!1)}),e(2,"span",17),l(3,"arrow_back"),n(),l(4," Volver "),n(),d(5,le,1,2,"app-contact-form",20)(6,me,1,0,"app-calculate-form",21),n()}if(t&2){let r=x();m(5),s("ngIf",(r.itemActive==null?null:r.itemActive.tipo_formulario_contacto)==="general"||(r.itemActive==null?null:r.itemActive.tipo_formulario_contacto)==="postventas"),m(),s("ngIf",(r.itemActive==null?null:r.itemActive.tipo_formulario_contacto)==="calcula")}}var Et=(()=>{let o=class o{constructor(i){this.pageService=i,this.BASE_URL=bt.imagenes_url,this.formIsShow=!1,this.itemsContact=[],this.configService=ht(W)}ngOnInit(){this.init(),this.pageService.closeNav()}init(){return f(this,null,function*(){let i=[()=>this.getData(),()=>this.getCollectionsPage()];for(let c of i)yield c()})}getData(){return f(this,null,function*(){let i=yield this.pageService.getContentPage("contactanos");i&&(this.data=i)})}getCollectionsPage(){return f(this,null,function*(){let i=yield this.pageService.getElementsContent("titulo item contacto","item_contacto");i?.length>0&&(this.itemsContact=i)})}activeItemContact(i){this.configService.isBrowser()&&(this.itemActive=this.itemsContact[i],this.indexItemActive=i,i==1?window.open("https://clientes.oikos.com.co/solicitudoikos/","_blank"):this.showForm())}showForm(){this.formIsShow=!0}};o.\u0275fac=function(c){return new(c||o)(u(M))},o.\u0275cmp=b({type:o,selectors:[["app-contact-page"]],decls:12,vars:4,consts:[[1,""],[1,"cnt_gen_contacto"],[1,"bg_round"],[1,"cnt_central"],[1,"h_contacto"],[1,"txt_contacto",3,"innerHtml"],[1,"row_mod_contacto"],["class","mod_contacto",3,"ngClass","click",4,"ngFor","ngForOf"],["class","cnt_form_mod_contacto",4,"ngIf"],[1,"mod_contacto",3,"ngClass","click"],[1,"img_mod_contacto"],[3,"src","alt","title"],[1,"cnt_inf_mod_contacto"],[1,"ic_mod_contacto"],[1,"h_mod_contacto"],[1,"txt_mod_contacto",3,"innerHtml"],[1,"bnt_mod_contacto"],[1,"material-icons"],[1,"cnt_form_mod_contacto"],[1,"btn_volver_contacto",3,"click"],[3,"typeForm","recipient_mail",4,"ngIf"],[4,"ngIf"],[3,"typeForm","recipient_mail"]],template:function(c,a){c&1&&(e(0,"body",0)(1,"div",1)(2,"span",2),p(3,"span"),n(),e(4,"div",3),p(5,"app-breadcrumb"),e(6,"h1",4),l(7),n(),p(8,"div",5),e(9,"div",6),d(10,ce,13,12,"div",7)(11,se,7,2,"div",8),n()()()()),c&2&&(m(7),v(" ",a.data==null?null:a.data.titulo_contacto," "),m(),s("innerHtml",a.data==null?null:a.data.descripcion,dt),m(2),s("ngForOf",a.itemsContact),m(),s("ngIf",a.formIsShow))},dependencies:[B,w,y,rt,ct,lt],styles:[".cnt_gen_contacto[_ngcontent-%COMP%]{width:100%;position:relative}.h_contacto[_ngcontent-%COMP%]{width:100%;font-size:54px;font-weight:900;color:var(--color-c2);text-align:center;padding:48px 0 0}.txt_contacto[_ngcontent-%COMP%]{font-size:15px;width:100%;max-width:657px;margin:auto;padding:0 0 48px;text-align:center}.row_mod_contacto[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;flex-wrap:wrap;padding-bottom:80px}.mod_contacto[_ngcontent-%COMP%]{width:31%;max-width:374px;height:344px;margin:46px 1%;overflow:hidden;border-radius:28px;position:relative;cursor:pointer;transition:all .5s;display:none;animation:_ngcontent-%COMP%_mod_in 1s forwards}.mod_contacto[_ngcontent-%COMP%]:hover   .cnt_inf_mod_contacto[_ngcontent-%COMP%]{bottom:0}.mod_contacto.active[_ngcontent-%COMP%]{display:block;opacity:1}@keyframes _ngcontent-%COMP%_mod_in{0%{opacity:0}to{opacity:1}}.img_mod_contacto[_ngcontent-%COMP%]{width:100%;height:100%}.img_mod_contacto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{width:130%;height:55%;position:absolute;bottom:-34%;left:50%;background:linear-gradient(180deg,#253482,#182360 49.79%,#111b52);border-radius:50% 50% 0 0;transform:translate(-50%);display:flex;flex-direction:column;gap:16px;align-items:center;box-sizing:border-box;padding:0 20%;transition:all .5s}.ic_mod_contacto[_ngcontent-%COMP%]{width:40px;height:40px;background:linear-gradient(104.32deg,#fff,#e4e4e4),#c2c2c2;box-shadow:0 4px 7px #00000078;line-height:40px;text-align:center;margin-top:-20px;display:block;border-radius:50%;display:flex;align-items:center;justify-content:center}.h_mod_contacto[_ngcontent-%COMP%]{width:100%;font-size:20px;color:#fff;font-weight:900;text-align:center}.txt_mod_contacto[_ngcontent-%COMP%]{width:100%;font-size:14px;color:#fff;text-align:center}.bnt_mod_contacto[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:16px;color:#608eff;position:absolute;bottom:16px}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:45%;max-width:587px;display:flex;flex-direction:column;gap:16px;align-items:flex-start;margin:0 1%;animation:_ngcontent-%COMP%_mod_in 1s forwards}.cnt_form_mod_contacto.active_form[_ngcontent-%COMP%]{display:flex}.btn_volver_contacto[_ngcontent-%COMP%]{display:flex;align-items:center;background:#fff;border-radius:46px;padding:2px 12px 2px 8px;font-size:20px;font-weight:800;gap:8px;cursor:pointer}.btn_volver_contacto[_ngcontent-%COMP%]:hover{background:var(--color-c2);color:#fff}.form_mod_contacto[_ngcontent-%COMP%]{width:100%;background:#fff;box-shadow:0 13px 34px -8px #00000040;border-radius:19px;padding:36px}.s_form_cnt[_ngcontent-%COMP%]{width:100%;padding:16px 0;border-bottom:1px solid #ccc;display:flex;flex-wrap:wrap;justify-content:space-between;row-gap:16px}.cnt_campo_form[_ngcontent-%COMP%]{width:100%;position:relative}.cnt_campo_form.w_50[_ngcontent-%COMP%]{width:48%}.cnt_campo_form.w_30[_ngcontent-%COMP%]{width:32%}.campo_form[_ngcontent-%COMP%]{height:38px;width:100%;background:#f2f2f2;border:1px solid #E1E1E1;border-radius:6px;padding:9px 10px;box-sizing:border-box;font-size:13px}.campo_form.filled[_ngcontent-%COMP%]{font-size:16px;color:var(--color-c2);text-align:center;background:#e0e0e0}.campo_form.filled.esp[_ngcontent-%COMP%]{background:var(--color-c2);color:#fff}.etq_form_cnt[_ngcontent-%COMP%]{width:100%;font-size:13px;color:#626262;padding-bottom:4px}.etq_form_cnt.center[_ngcontent-%COMP%]{text-align:center}.form_mod_contacto[_ngcontent-%COMP%]   .cont_politicas[_ngcontent-%COMP%]{margin:0;padding:16px 0}.form_mod_contacto[_ngcontent-%COMP%]   .row_btn[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.form_mod_contacto[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:160px;text-align:center;justify-content:center}@media screen and (max-width: 1050px){.h_contacto[_ngcontent-%COMP%]{font-size:40px;padding-top:24px}.txt_contacto[_ngcontent-%COMP%]{padding-bottom:32px}.mod_contacto[_ngcontent-%COMP%]{height:300px}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{gap:12px}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:65%}}@media screen and (max-width: 768px){.row_mod_contacto[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.mod_contacto[_ngcontent-%COMP%]{width:100%;height:auto;margin:8px 0}.img_mod_contacto[_ngcontent-%COMP%]{height:200px}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{position:relative;bottom:inherit;padding-bottom:16px;margin-top:-50px}.bnt_mod_contacto[_ngcontent-%COMP%]{position:relative;bottom:inherit}.bnt_mod_contacto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform:rotate(90deg)}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:100%;margin:16px 0}}@media screen and (max-width: 480px){.cnt_campo_form.w_30[_ngcontent-%COMP%], .cnt_campo_form.w_50[_ngcontent-%COMP%]{width:100%}}.text-danger[_ngcontent-%COMP%]{color:#c03939}.disable-ele[_ngcontent-%COMP%]{opacity:.3;cursor:default}"]});let t=o;return t})();var pe=[{path:"",component:Et,canActivate:[Mt]}],jt=(()=>{let o=class o{};o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=T({type:o}),o.\u0275inj=A({imports:[P.forChild(pe),P]});let t=o;return t})();var Je=(()=>{let o=class o{};o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=T({type:o}),o.\u0275inj=A({imports:[O,jt,rt,ct,lt]});let t=o;return t})();export{Je as ContactModule};

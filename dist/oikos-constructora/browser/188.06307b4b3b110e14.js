"use strict";(self.webpackChunkoikos_constructora=self.webpackChunkoikos_constructora||[]).push([[188],{4188:(T,P,l)=>{l.r(P),l.d(P,{ContactModule:()=>lt});var m=l(6895),u=l(2100),d=l(5861),t=l(8256),C=l(5480),_=l(8830);let F=(()=>{class n{constructor(o,e){this.pageService=o,this.seoService=e}canActivate(o,e){var i=this;return(0,d.Z)(function*(){const h=yield i.pageService.getSeoContentPage("contactanos");return!!h&&(i.pageService.currentPage=h,i.seoService.setUpMetaTags(h),!0)})()}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(C.P),t.LFG(_.v))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var p=l(9019),f=l(1299),a=l(433),r=l(1372),s=l(961),g=l(3905),x=l(2340),Z=l(529);const O=x.N.base_url;let M=(()=>{class n{constructor(o){this._http=o}postContactForm(o){var e=this;return(0,d.Z)(function*(){return(0,g.z)(e._http.post(`${O}api/v1/setContactForm`,o)).then().catch(h=>(console.warn(h),!1))})()}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(Z.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function j(n,c){1&n&&(t.TgZ(0,"small"),t._uU(1,"campo inv\xe1lido*"),t.qZA())}function U(n,c){1&n&&(t.TgZ(0,"small"),t._uU(1,"campo inv\xe1lido*"),t.qZA())}function I(n,c){1&n&&(t.TgZ(0,"small"),t._uU(1,"campo inv\xe1lido*"),t.qZA())}function S(n,c){if(1&n&&(t.TgZ(0,"option",20),t._uU(1),t.qZA()),2&n){const o=c.$implicit;t.Q6J("value",null==o?null:o.field_content),t.xp6(1),t.Oqu(null==o?null:o.field_content)}}function q(n,c){if(1&n&&(t.TgZ(0,"div",6)(1,"select",17)(2,"option",18),t._uU(3,"Selecciona el asunto"),t.qZA(),t.YNc(4,S,2,2,"option",19),t.qZA()()),2&n){const o=t.oxw();t.xp6(4),t.Q6J("ngForOf",o.affairList)}}function k(n,c){1&n&&(t.TgZ(0,"small"),t._uU(1,"campo inv\xe1lido*"),t.qZA())}function z(n,c){1&n&&(t.TgZ(0,"small"),t._uU(1,"campo inv\xe1lido*"),t.qZA())}function J(n,c){1&n&&(t.TgZ(0,"small"),t._uU(1,"debes aceptar la pol\xedtica de tratamiento de datos*"),t.qZA())}const N=function(){return["/legales","politicas-de-privacidad"]};let A=(()=>{class n{constructor(o,e,i,h,v){this.fb=o,this.formService=e,this.router=i,this.contactService=h,this.pageService=v,this.showErrors=!1,this.affairList=[],this.typeForm="general",this.recipient_mail=""}ngOnInit(){this.initForm()}initForm(){"general"===this.typeForm?(this.contactForm=this.fb.group({full_name:["",this.formService.noWhitespaceValidator],email:["",[this.formService.noWhitespaceValidator,a.kI.pattern(r.E)]],phone:["",a.kI.compose([a.kI.required,a.kI.pattern(r.A)])],affair:["",this.formService.noWhitespaceValidator],message:["",this.formService.noWhitespaceValidator],terms:["",a.kI.requiredTrue]}),this.getAffairList()):this.contactForm=this.fb.group({full_name:["",this.formService.noWhitespaceValidator],email:["",[this.formService.noWhitespaceValidator,a.kI.pattern(r.E)]],phone:["",a.kI.compose([a.kI.required,a.kI.pattern(r.A)])],message:["",this.formService.noWhitespaceValidator],terms:["",a.kI.requiredTrue]})}getAffairList(){var o=this;return(0,d.Z)(function*(){const e=yield o.pageService.getElementsContent("titulo asunto contacto","asunto_contacto");e?.length>0&&(o.affairList=e)})()}submitContactForm(){var o=this;return(0,d.Z)(function*(){if(o.contactForm.valid){const{email:e,message:i,phone:h,full_name:v,affair:b}=o.contactForm.getRawValue(),y={nombre:v,email:e,telefono:h,page_section:o.typeForm,comentario:i,asunto:b,correo_destinatario:o.recipient_mail},{resp:w}=yield o.contactService.postContactForm(y);w?o.router.navigateByUrl(w):alert("Opps ocurri\xf3 un error enviando el formulario"),o.contactForm.reset()}else o.showErrors=!0})()}hasErrorsFieldForm(o){return this.formService.hasErrorsFieldForm(this.contactForm,o,this.showErrors)}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(a.qu),t.Y36(s.o),t.Y36(u.F0),t.Y36(M),t.Y36(C.P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact-form"]],inputs:{typeForm:"typeForm",recipient_mail:"recipient_mail"},standalone:!0,features:[t.jDz],decls:32,vars:10,consts:[["action","",1,"form_mod_contacto",3,"formGroup","ngSubmit"],[1,"s_form_cnt"],[1,"cnt_campo_form"],["formControlName","full_name","type","text","placeholder","Nombre completo *",1,"campo_form"],[1,"text-danger",2,"height","7px"],[4,"ngIf"],[1,"cnt_campo_form","w_100"],["formControlName","email","type","email","placeholder","Email *",1,"campo_form"],["formControlName","phone","type","tel","placeholder","Tel\xe9fono *",1,"campo_form"],["class","cnt_campo_form w_100",4,"ngIf"],["formControlName","message","cols","10","rows","4","placeholder","Mensaje *"],[1,"cont_politicas"],["formControlName","terms","type","checkbox","name","","id","politicas1"],["for","politicas1"],["target","_blank",3,"routerLink"],[1,"row_btn"],["type","submit",1,"btn"],["formControlName","affair","id",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,e){1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return e.submitContactForm()}),t.TgZ(1,"section",1)(2,"div",2),t._UZ(3,"input",3),t.qZA(),t.TgZ(4,"div",4),t.YNc(5,j,2,0,"small",5),t.qZA(),t.TgZ(6,"div",6),t._UZ(7,"input",7),t.qZA(),t.TgZ(8,"div",4),t.YNc(9,U,2,0,"small",5),t.qZA(),t.TgZ(10,"div",6),t._UZ(11,"input",8),t.qZA(),t.TgZ(12,"div",4),t.YNc(13,I,2,0,"small",5),t.qZA(),t.YNc(14,q,5,1,"div",9),t.TgZ(15,"div",4),t.YNc(16,k,2,0,"small",5),t.qZA(),t.TgZ(17,"div",6),t._UZ(18,"textarea",10),t.qZA(),t.TgZ(19,"div",4),t.YNc(20,z,2,0,"small",5),t.qZA()(),t.TgZ(21,"div",11),t._UZ(22,"input",12),t.TgZ(23,"label",13),t._uU(24,"Acepto y Autorizo la "),t.TgZ(25,"a",14),t._uU(26," Pol\xedtica de Tratamiento de Datos "),t.qZA()()(),t.TgZ(27,"div",4),t.YNc(28,J,2,0,"small",5),t.qZA(),t.TgZ(29,"div",15)(30,"button",16),t._uU(31,"Enviar"),t.qZA()()()),2&o&&(t.Q6J("formGroup",e.contactForm),t.xp6(5),t.Q6J("ngIf",e.hasErrorsFieldForm("full_name")),t.xp6(4),t.Q6J("ngIf",e.hasErrorsFieldForm("email")),t.xp6(4),t.Q6J("ngIf",e.hasErrorsFieldForm("phone")),t.xp6(1),t.Q6J("ngIf","general"===e.typeForm),t.xp6(2),t.Q6J("ngIf",e.hasErrorsFieldForm("affair")),t.xp6(4),t.Q6J("ngIf",e.hasErrorsFieldForm("message")),t.xp6(5),t.Q6J("routerLink",t.DdM(9,N)),t.xp6(3),t.Q6J("ngIf",e.hasErrorsFieldForm("terms")))},dependencies:[a.UX,a._Y,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.JL,a.sg,a.u,m.ez,m.sg,m.O5,u.Bz,u.yS],styles:[".cnt_gen_contacto[_ngcontent-%COMP%]{width:100%;position:relative}.h_contacto[_ngcontent-%COMP%]{width:100%;font-size:54px;font-weight:900;color:var(--color-c2);text-align:center;padding:48px 0 0}.txt_contacto[_ngcontent-%COMP%]{font-size:15px;width:100%;max-width:657px;margin:auto;padding:0 0 48px;text-align:center}.row_mod_contacto[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;flex-wrap:wrap;padding-bottom:80px}.mod_contacto[_ngcontent-%COMP%]{width:31%;max-width:374px;height:344px;margin:46px 1%;overflow:hidden;border-radius:28px;position:relative;cursor:pointer;transition:all .5s;display:none;animation:mod_in 1s forwards}.mod_contacto[_ngcontent-%COMP%]:hover   .cnt_inf_mod_contacto[_ngcontent-%COMP%]{bottom:0}.mod_contacto.active[_ngcontent-%COMP%]{display:block;opacity:1}@keyframes mod_in{0%{opacity:0}to{opacity:1}}.img_mod_contacto[_ngcontent-%COMP%]{width:100%;height:100%}.img_mod_contacto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{width:130%;height:55%;position:absolute;bottom:-34%;left:50%;background:linear-gradient(180deg,#253482 0%,#182360 49.79%,#111B52 100%);border-radius:50% 50% 0 0;transform:translate(-50%);display:flex;flex-direction:column;gap:16px;align-items:center;box-sizing:border-box;padding:0 20%;transition:all .5s}.ic_mod_contacto[_ngcontent-%COMP%]{width:40px;height:40px;background:linear-gradient(104.32deg,#FFFFFF 0%,#E4E4E4 100%),#C2C2C2;box-shadow:0 4px 7px #00000078;line-height:40px;text-align:center;margin-top:-20px;display:block;border-radius:50%;display:flex;align-items:center;justify-content:center}.h_mod_contacto[_ngcontent-%COMP%]{width:100%;font-size:20px;color:#fff;font-weight:900;text-align:center}.txt_mod_contacto[_ngcontent-%COMP%]{width:100%;font-size:14px;color:#fff;text-align:center}.bnt_mod_contacto[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:16px;color:#608eff;position:absolute;bottom:16px}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:45%;max-width:587px;display:flex;flex-direction:column;gap:16px;align-items:flex-start;margin:0 1%;animation:mod_in 1s forwards}.cnt_form_mod_contacto.active_form[_ngcontent-%COMP%]{display:flex}.btn_volver_contacto[_ngcontent-%COMP%]{display:flex;align-items:center;background:#FFFFFF;border-radius:46px;padding:2px 12px 2px 8px;font-size:20px;font-weight:800;gap:8px;cursor:pointer}.btn_volver_contacto[_ngcontent-%COMP%]:hover{background:var(--color-c2);color:#fff}.form_mod_contacto[_ngcontent-%COMP%]{width:100%;background:#FFFFFF;box-shadow:0 13px 34px -8px #00000040;border-radius:19px;padding:36px}.s_form_cnt[_ngcontent-%COMP%]{width:100%;padding:16px 0;border-bottom:1px solid #ccc;display:flex;flex-wrap:wrap;justify-content:space-between;row-gap:16px}.cnt_campo_form[_ngcontent-%COMP%]{width:100%;position:relative}.cnt_campo_form.w_50[_ngcontent-%COMP%]{width:48%}.cnt_campo_form.w_30[_ngcontent-%COMP%]{width:32%}.campo_form[_ngcontent-%COMP%]{height:38px;width:100%;background:#F2F2F2;border:1px solid #E1E1E1;border-radius:6px;padding:9px 10px;box-sizing:border-box;font-size:13px}.campo_form.filled[_ngcontent-%COMP%]{font-size:16px;color:var(--color-c2);text-align:center;background:#E0E0E0}.campo_form.filled.esp[_ngcontent-%COMP%]{background:var(--color-c2);color:#fff}.etq_form_cnt[_ngcontent-%COMP%]{width:100%;font-size:13px;color:#626262;padding-bottom:4px}.etq_form_cnt.center[_ngcontent-%COMP%]{text-align:center}.form_mod_contacto[_ngcontent-%COMP%]   .cont_politicas[_ngcontent-%COMP%]{margin:0;padding:16px 0}.form_mod_contacto[_ngcontent-%COMP%]   .row_btn[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.form_mod_contacto[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:160px;text-align:center;justify-content:center}@media screen and (max-width: 1050px){.h_contacto[_ngcontent-%COMP%]{font-size:40px;padding-top:24px}.txt_contacto[_ngcontent-%COMP%]{padding-bottom:32px}.mod_contacto[_ngcontent-%COMP%]{height:300px}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{gap:12px}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:65%}}@media screen and (max-width: 768px){.row_mod_contacto[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.mod_contacto[_ngcontent-%COMP%]{width:100%;height:auto;margin:8px 0}.img_mod_contacto[_ngcontent-%COMP%]{height:200px}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{position:relative;bottom:inherit;padding-bottom:16px;margin-top:-50px}.bnt_mod_contacto[_ngcontent-%COMP%]{position:relative;bottom:inherit}.bnt_mod_contacto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform:rotate(90deg)}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:100%;margin:16px 0}}@media screen and (max-width: 480px){.cnt_campo_form.w_30[_ngcontent-%COMP%], .cnt_campo_form.w_50[_ngcontent-%COMP%]{width:100%}}.text-danger[_ngcontent-%COMP%]{color:#c03939}.disable-ele[_ngcontent-%COMP%]{opacity:.3;cursor:default}"]}),n})();var Y=l(849),L=l(221);function Q(n,c){1&n&&(t.TgZ(0,"small"),t._uU(1,"campo inv\xe1lido*"),t.qZA())}function D(n,c){1&n&&(t.TgZ(0,"small"),t._uU(1,"campo inv\xe1lido*"),t.qZA())}function B(n,c){1&n&&(t.TgZ(0,"small"),t._uU(1,"campo inv\xe1lido*"),t.qZA())}function G(n,c){if(1&n&&(t.TgZ(0,"option",37),t._uU(1),t.qZA()),2&n){const o=c.$implicit;t.Q6J("value",null==o?null:o.url_amigable),t.xp6(1),t.Oqu(null==o?null:o.titulo_proyecto)}}function V(n,c){1&n&&(t.TgZ(0,"small"),t._uU(1,"campo inv\xe1lido*"),t.qZA())}function W(n,c){if(1&n&&(t.TgZ(0,"small"),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.hij(" Ingresa un valor entre ",o.selectedProject.porcentaje_minimo," y 100 ")}}function R(n,c){if(1&n&&(t.TgZ(0,"option",38),t._uU(1),t.qZA()),2&n){const o=c.$implicit,e=c.index;t.s9C("value",o.nro),t.Q6J("selected",0==e),t.xp6(1),t.hij(" ",o.nro," ")}}function K(n,c){1&n&&(t.TgZ(0,"small"),t._uU(1,"campo inv\xe1lido*"),t.qZA())}function H(n,c){1&n&&(t.TgZ(0,"small"),t._uU(1,"Debes aceptar la Pol\xedtica de Tratamiento de Datos*"),t.qZA())}const X=function(n){return{"disable-ele":n}},tt=function(){return["/legales","politicas-de-privacidad"]};let E=(()=>{class n{constructor(o,e,i,h){this.fb=o,this.formService=e,this.projectService=i,this.router=h,this.showErrors=!1,this.disableForm=!0,this.housingProjects=[],this.selectedProject=new Y.I,this.datosCalc=[],this.datosCuota=[],this.datosAnio=[],this.porcFinanciar=100,this.calculateForm=this.fb.group({full_name:["",this.formService.noWhitespaceValidator],project_slug:["",this.formService.noWhitespaceValidator],email:["",[this.formService.noWhitespaceValidator,a.kI.pattern(r.E)]],phone:["",a.kI.compose([a.kI.required,a.kI.pattern(r.A)])],initial_fee:[0,a.kI.compose([a.kI.required,a.kI.max(100)])],total_fees:[null,a.kI.compose([a.kI.required])],termInYears:["10"],terms:["",a.kI.requiredTrue]})}ngOnInit(){this.getProjectsHome()}getProjectsHome(){var o=this;return(0,d.Z)(function*(){const e=yield o.projectService.getProyectosByTipo("1");e&&(o.housingProjects=e)})()}hasErrorsFieldForm(o){return this.formService.hasErrorsFieldForm(this.calculateForm,o,this.showErrors)}updateProjectSelected(){var o=this;return(0,d.Z)(function*(){const[e]=yield o.projectService.getProyectoByUrl(o.calculateForm.value?.project_slug);e?(o.selectedProject=e,o.calculateForm.patchValue({initial_fee:o.selectedProject.porcentaje_minimo}),o.calculatePercentage(),o.disableForm=!1):alert("Ocurri\xf3 un error, por favor contact\xe9se con el administrador")})()}calculatePercentage(){var o=this;return(0,d.Z)(function*(){const{initial_fee:e,total_fees:i,termInYears:h}=o.calculateForm.getRawValue();let v=e,b=i,y=h,w=o.selectedProject.financiar;o.porcFinanciar=100-v;const[st]=yield o.projectService.getCalculoPorcentaje(o.selectedProject.valor_proyecto,v,b,y,w);o.datosCalc=st,$(".valorCuotaInicial").val("$ "+o.datosCalc.cuotaInicial),$(".diferencia").val("$ "+o.datosCalc.diferencia),"inf"!=o.datosCalc.cuotasinicialfinanciar&&$(".cuotamensual").val("$ "+o.datosCalc.cuotasinicialfinanciar),$(".valorafinanciar").val("$ "+o.datosCalc.valorafinanciar),o.termInYears()})()}diferenciadordecuotasmensuales(){var o=this;return(0,d.Z)(function*(){var e=$(".diferencia").val(),i=$(".cuotasinicialfinanciar").val();o.datosCuota=yield o.projectService.getCalculoCuota(e,i),o.datosCuota=o.datosCuota[0],"inf"!=o.datosCuota.valorcuotas&&$(".cuotamensual").val("$ "+o.datosCuota.valorcuotas)})()}termInYears(){var o=this;return(0,d.Z)(function*(){var e=o.calculateForm.getRawValue()?.termInYears,i=$(".valorafinanciar").val();o.datosAnio=yield o.projectService.getPlazoanios(e,i),o.datosAnio=o.datosAnio[0],$(".cuotahipoteca").val("$ "+o.datosAnio.total)})()}insertContact(){var o=this;return(0,d.Z)(function*(){const e={nombre:o.calculateForm.controls.full_name?.value,email:o.calculateForm.controls.email?.value,telefono:o.calculateForm.controls.phone?.value,cuotaInicial:o.calculateForm.controls.initial_fee?.value,numeroCuotas:o.calculateForm.controls.total_fees?.value,valorCuotaInicial:$(".valorCuotaInicial").val(),separacion:$(".separacion").val(),saldoCuotaInicial:$(".diferencia").val(),cuotamensual:$(".cuotamensual").val(),porcentajeFinanciar:$(".porcentajeFinanciar").val(),valorafinanciar:$(".valorafinanciar").val(),plazoaniosa:o.calculateForm.controls.termInYears?.value,cuotahipoteca:$(".cuotahipoteca").val(),porcentajeseparacion:o.selectedProject.porcentaje_separacion,url_proyecto:window.location.href,proyecto:o.selectedProject.titulo_proyecto,valorProyecto:o.selectedProject.valor_proyecto,sendTo:o.selectedProject.email_contactos,id_proyecto:o.selectedProject.id};if(o.calculateForm.valid){const{resp:i}=yield o.projectService.setCalculadoraForm(e);console.log(i),"no"!=i&&(window.location.href=i)}else o.showErrors=!0})()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(a.qu),t.Y36(s.o),t.Y36(L.Y),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-calculate-form"]],standalone:!0,features:[t.jDz],decls:90,vars:21,consts:[[1,"form_mod_contacto",3,"formGroup","ngSubmit"],[1,"s_form_cnt"],[1,"cnt_campo_form"],["formControlName","full_name","type","text","placeholder","Nombre completo *",1,"campo_form"],[1,"text-danger",2,"height","7px"],[4,"ngIf"],[1,"cnt_campo_form","w_50"],["type","email","placeholder","Email *","formControlName","email",1,"campo_form"],["type","tel","placeholder","Tel\xe9fono *","formControlName","phone",1,"campo_form"],[1,"etq_form_cnt"],["formControlName","project_slug","name","","id","",1,"campo_form",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"calculate-container",3,"ngClass"],["for",""],["type","number","formControlName","initial_fee",1,"cambiarPorcentaje",3,"min","change"],["formControlName","total_fees",1,"campo_form","cuotasinicialfinanciar",3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],[1,"cnt_campo_form","w_30"],[1,"etq_form_cnt","center"],["type","text","readonly","",1,"campo_form","filled","valorCuotaInicial",3,"value"],["type","text","readonly","",1,"campo_form","filled","separacion",3,"value"],["type","text",1,"campo_form","filled","esp","diferencia",3,"value"],["type","text","readonly","",1,"campo_form","filled","cuotamensual"],["type","text","readonly","",1,"campo_form","filled","porcentajeFinanciar",3,"value"],["type","text","readonly","",1,"campo_form","filled","valorafinanciar",3,"value"],["formControlName","termInYears",1,"campo_form",3,"change"],["value","10"],["value","15"],["value","20"],["type","text","readonly","",1,"campo_form","filled","cuotahipoteca"],[1,"cont_politicas"],["formControlName","terms","type","checkbox","name","","id","politicas1"],["for","politicas1"],["target","_blank",3,"routerLink"],[1,"row_btn"],["type","submit",1,"btn"],[3,"value"],[3,"value","selected"]],template:function(o,e){1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return e.insertContact()}),t.TgZ(1,"section",1)(2,"div",2),t._UZ(3,"input",3),t.TgZ(4,"div",4),t.YNc(5,Q,2,0,"small",5),t.qZA()(),t.TgZ(6,"div",6),t._UZ(7,"input",7),t.TgZ(8,"div",4),t.YNc(9,D,2,0,"small",5),t.qZA()(),t.TgZ(10,"div",6),t._UZ(11,"input",8),t.TgZ(12,"div",4),t.YNc(13,B,2,0,"small",5),t.qZA()()(),t.TgZ(14,"section",1)(15,"div",2)(16,"div",9),t._uU(17,"Elige el proyecto a cotizar"),t.qZA(),t.TgZ(18,"select",10),t.NdJ("change",function(){return e.updateProjectSelected()}),t.TgZ(19,"option",11),t._uU(20,"Selecciona el proyecto"),t.qZA(),t.YNc(21,G,2,2,"option",12),t.qZA(),t.TgZ(22,"div",4),t.YNc(23,V,2,0,"small",5),t.qZA()()(),t.TgZ(24,"div",13)(25,"section",1)(26,"div",6)(27,"label",14),t._uU(28,"Cuota inicial %"),t.qZA(),t.TgZ(29,"input",15),t.NdJ("change",function(){return e.calculatePercentage()}),t.qZA(),t.TgZ(30,"div",4),t.YNc(31,W,2,1,"small",5),t.qZA()(),t.TgZ(32,"div",6)(33,"label",14),t._uU(34,"N\xfamero de cuotas"),t.qZA(),t.TgZ(35,"select",16),t.NdJ("change",function(){return e.diferenciadordecuotasmensuales()}),t.YNc(36,R,2,3,"option",17),t.qZA(),t.TgZ(37,"div",4),t.YNc(38,K,2,0,"small",5),t.qZA()(),t.TgZ(39,"div",18)(40,"div",19),t._uU(41,"Valor cuota inicial"),t.qZA(),t._UZ(42,"input",20),t.qZA(),t.TgZ(43,"div",18)(44,"div",19),t._uU(45,"Separaci\xf3n 2%"),t.qZA(),t._UZ(46,"input",21),t.qZA(),t.TgZ(47,"div",18)(48,"div",19),t._uU(49,"Saldo cuota inicial"),t.qZA(),t._UZ(50,"input",22),t.qZA(),t.TgZ(51,"div",18)(52,"div",19),t._uU(53,"Valor cuota mensual"),t.qZA(),t._UZ(54,"input",23),t.qZA()(),t.TgZ(55,"section",1)(56,"div",6)(57,"div",19),t._uU(58,"Saldo a financiar"),t.qZA(),t._UZ(59,"input",24),t.qZA(),t.TgZ(60,"div",6)(61,"div",19),t._uU(62,"Valor"),t.qZA(),t._UZ(63,"input",25),t.qZA()(),t.TgZ(64,"section",1)(65,"div",6)(66,"div",9),t._uU(67,"Plazo en a\xf1os"),t.qZA(),t.TgZ(68,"select",26),t.NdJ("change",function(){return e.termInYears()}),t.TgZ(69,"option",27),t._uU(70,"10"),t.qZA(),t.TgZ(71,"option",28),t._uU(72,"15"),t.qZA(),t.TgZ(73,"option",29),t._uU(74,"20"),t.qZA()()(),t.TgZ(75,"div",6)(76,"div",9),t._uU(77,"Valor cuota hipotecaria"),t.qZA(),t._UZ(78,"input",30),t.qZA()()(),t.TgZ(79,"div",31),t._UZ(80,"input",32),t.TgZ(81,"label",33),t._uU(82,"Acepto y Autorizo la "),t.TgZ(83,"a",34),t._uU(84," Pol\xedtica de Tratamiento de Datos "),t.qZA()(),t.TgZ(85,"div",4),t.YNc(86,H,2,0,"small",5),t.qZA()(),t.TgZ(87,"div",35)(88,"button",36),t._uU(89,"Enviar"),t.qZA()()()),2&o&&(t.Q6J("formGroup",e.calculateForm),t.xp6(5),t.Q6J("ngIf",e.hasErrorsFieldForm("full_name")),t.xp6(4),t.Q6J("ngIf",e.hasErrorsFieldForm("email")),t.xp6(4),t.Q6J("ngIf",e.hasErrorsFieldForm("phone")),t.xp6(8),t.Q6J("ngForOf",e.housingProjects),t.xp6(2),t.Q6J("ngIf",e.hasErrorsFieldForm("project_slug")),t.xp6(1),t.Q6J("ngClass",t.VKq(18,X,e.disableForm)),t.xp6(5),t.Q6J("min",e.selectedProject.porcentaje_minimo),t.xp6(2),t.Q6J("ngIf",e.hasErrorsFieldForm("initial_fee")),t.xp6(5),t.Q6J("ngForOf",e.selectedProject.numero_cuotas),t.xp6(2),t.Q6J("ngIf",e.hasErrorsFieldForm("total_fees")),t.xp6(4),t.MGl("value","$ ",e.selectedProject.cuota_inicial,""),t.xp6(4),t.MGl("value","$ ",e.selectedProject.cuota_separacion,""),t.xp6(4),t.MGl("value","$ ",e.selectedProject.saldo_cuota,""),t.xp6(9),t.s9C("value",e.porcFinanciar),t.xp6(4),t.MGl("value","$ ",e.selectedProject.financiar,""),t.xp6(20),t.Q6J("routerLink",t.DdM(20,tt)),t.xp6(3),t.Q6J("ngIf",e.hasErrorsFieldForm("terms")))},dependencies:[a.UX,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.Wl,a.EJ,a.JJ,a.JL,a.qQ,a.sg,a.u,m.ez,m.mk,m.sg,m.O5,u.Bz,u.yS],styles:[".cnt_gen_contacto[_ngcontent-%COMP%]{width:100%;position:relative}.h_contacto[_ngcontent-%COMP%]{width:100%;font-size:54px;font-weight:900;color:var(--color-c2);text-align:center;padding:48px 0 0}.txt_contacto[_ngcontent-%COMP%]{font-size:15px;width:100%;max-width:657px;margin:auto;padding:0 0 48px;text-align:center}.row_mod_contacto[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;flex-wrap:wrap;padding-bottom:80px}.mod_contacto[_ngcontent-%COMP%]{width:31%;max-width:374px;height:344px;margin:46px 1%;overflow:hidden;border-radius:28px;position:relative;cursor:pointer;transition:all .5s;display:none;animation:mod_in 1s forwards}.mod_contacto[_ngcontent-%COMP%]:hover   .cnt_inf_mod_contacto[_ngcontent-%COMP%]{bottom:0}.mod_contacto.active[_ngcontent-%COMP%]{display:block;opacity:1}@keyframes mod_in{0%{opacity:0}to{opacity:1}}.img_mod_contacto[_ngcontent-%COMP%]{width:100%;height:100%}.img_mod_contacto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{width:130%;height:55%;position:absolute;bottom:-34%;left:50%;background:linear-gradient(180deg,#253482 0%,#182360 49.79%,#111B52 100%);border-radius:50% 50% 0 0;transform:translate(-50%);display:flex;flex-direction:column;gap:16px;align-items:center;box-sizing:border-box;padding:0 20%;transition:all .5s}.ic_mod_contacto[_ngcontent-%COMP%]{width:40px;height:40px;background:linear-gradient(104.32deg,#FFFFFF 0%,#E4E4E4 100%),#C2C2C2;box-shadow:0 4px 7px #00000078;line-height:40px;text-align:center;margin-top:-20px;display:block;border-radius:50%;display:flex;align-items:center;justify-content:center}.h_mod_contacto[_ngcontent-%COMP%]{width:100%;font-size:20px;color:#fff;font-weight:900;text-align:center}.txt_mod_contacto[_ngcontent-%COMP%]{width:100%;font-size:14px;color:#fff;text-align:center}.bnt_mod_contacto[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:16px;color:#608eff;position:absolute;bottom:16px}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:45%;max-width:587px;display:flex;flex-direction:column;gap:16px;align-items:flex-start;margin:0 1%;animation:mod_in 1s forwards}.cnt_form_mod_contacto.active_form[_ngcontent-%COMP%]{display:flex}.btn_volver_contacto[_ngcontent-%COMP%]{display:flex;align-items:center;background:#FFFFFF;border-radius:46px;padding:2px 12px 2px 8px;font-size:20px;font-weight:800;gap:8px;cursor:pointer}.btn_volver_contacto[_ngcontent-%COMP%]:hover{background:var(--color-c2);color:#fff}.form_mod_contacto[_ngcontent-%COMP%]{width:100%;background:#FFFFFF;box-shadow:0 13px 34px -8px #00000040;border-radius:19px;padding:36px}.s_form_cnt[_ngcontent-%COMP%]{width:100%;padding:16px 0;border-bottom:1px solid #ccc;display:flex;flex-wrap:wrap;justify-content:space-between;row-gap:16px}.cnt_campo_form[_ngcontent-%COMP%]{width:100%;position:relative}.cnt_campo_form.w_50[_ngcontent-%COMP%]{width:48%}.cnt_campo_form.w_30[_ngcontent-%COMP%]{width:32%}.campo_form[_ngcontent-%COMP%]{height:38px;width:100%;background:#F2F2F2;border:1px solid #E1E1E1;border-radius:6px;padding:9px 10px;box-sizing:border-box;font-size:13px}.campo_form.filled[_ngcontent-%COMP%]{font-size:16px;color:var(--color-c2);text-align:center;background:#E0E0E0}.campo_form.filled.esp[_ngcontent-%COMP%]{background:var(--color-c2);color:#fff}.etq_form_cnt[_ngcontent-%COMP%]{width:100%;font-size:13px;color:#626262;padding-bottom:4px}.etq_form_cnt.center[_ngcontent-%COMP%]{text-align:center}.form_mod_contacto[_ngcontent-%COMP%]   .cont_politicas[_ngcontent-%COMP%]{margin:0;padding:16px 0}.form_mod_contacto[_ngcontent-%COMP%]   .row_btn[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.form_mod_contacto[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:160px;text-align:center;justify-content:center}@media screen and (max-width: 1050px){.h_contacto[_ngcontent-%COMP%]{font-size:40px;padding-top:24px}.txt_contacto[_ngcontent-%COMP%]{padding-bottom:32px}.mod_contacto[_ngcontent-%COMP%]{height:300px}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{gap:12px}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:65%}}@media screen and (max-width: 768px){.row_mod_contacto[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.mod_contacto[_ngcontent-%COMP%]{width:100%;height:auto;margin:8px 0}.img_mod_contacto[_ngcontent-%COMP%]{height:200px}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{position:relative;bottom:inherit;padding-bottom:16px;margin-top:-50px}.bnt_mod_contacto[_ngcontent-%COMP%]{position:relative;bottom:inherit}.bnt_mod_contacto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform:rotate(90deg)}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:100%;margin:16px 0}}@media screen and (max-width: 480px){.cnt_campo_form.w_30[_ngcontent-%COMP%], .cnt_campo_form.w_50[_ngcontent-%COMP%]{width:100%}}.text-danger[_ngcontent-%COMP%]{color:#c03939}.disable-ele[_ngcontent-%COMP%]{opacity:.3;cursor:default}"]}),n})();const ot=function(n){return{active:n}};function nt(n,c){if(1&n){const o=t.EpF();t.TgZ(0,"div",9),t.NdJ("click",function(){const h=t.CHM(o).index,v=t.oxw();return t.KtG(v.activeItemContact(h))}),t.TgZ(1,"div",10),t._UZ(2,"img",11),t.qZA(),t.TgZ(3,"div",12)(4,"span",13),t._UZ(5,"img",11),t.qZA(),t.TgZ(6,"div",14),t._uU(7),t.qZA(),t._UZ(8,"div",15),t.TgZ(9,"div",16),t._uU(10),t.TgZ(11,"span",17),t._uU(12,"arrow_forward"),t.qZA()()()()}if(2&n){const o=c.$implicit,e=c.index,i=t.oxw();t.Q6J("ngClass",t.VKq(10,ot,!i.formIsShow||e===i.indexItemActive)),t.xp6(2),t.Q6J("src",i.BASE_URL+(null==o?null:o.imagen[0]),t.LSH)("alt",null==o?null:o.imagen_alt[0])("title",null==o?null:o.imagen_title[0]),t.xp6(3),t.Q6J("src",i.BASE_URL+(null==o?null:o.imagen[1]),t.LSH)("alt",null==o?null:o.imagen_alt[1])("title",null==o?null:o.imagen_title[1]),t.xp6(2),t.hij(" ",null==o?null:o.field_content," "),t.xp6(1),t.Q6J("innerHtml",null==o?null:o.descripcion_item_contacto,t.oJD),t.xp6(2),t.hij(" ",null==o?null:o.texto_boton_item_contacto," ")}}function et(n,c){if(1&n&&t._UZ(0,"app-contact-form",22),2&n){const o=t.oxw(2);t.Q6J("typeForm",null==o.itemActive?null:o.itemActive.tipo_formulario_contacto)("recipient_mail",null==o.itemActive?null:o.itemActive.correo_destinatario)}}function at(n,c){1&n&&t._UZ(0,"app-calculate-form")}function ct(n,c){if(1&n){const o=t.EpF();t.TgZ(0,"div",18)(1,"div",19),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.formIsShow=!1)}),t.TgZ(2,"span",17),t._uU(3,"arrow_back"),t.qZA(),t._uU(4," Volver "),t.qZA(),t.YNc(5,et,1,2,"app-contact-form",20),t.YNc(6,at,1,0,"app-calculate-form",21),t.qZA()}if(2&n){const o=t.oxw();t.xp6(5),t.Q6J("ngIf","general"===(null==o.itemActive?null:o.itemActive.tipo_formulario_contacto)||"postventas"===(null==o.itemActive?null:o.itemActive.tipo_formulario_contacto)),t.xp6(1),t.Q6J("ngIf","calcula"===(null==o.itemActive?null:o.itemActive.tipo_formulario_contacto))}}const it=[{path:"",component:(()=>{class n{constructor(o){this.pageService=o,this.BASE_URL=p.N.base_url,this.formIsShow=!1,this.itemsContact=[]}ngOnInit(){this.init(),this.pageService.closeNav()}init(){var o=this;return(0,d.Z)(function*(){const e=[()=>o.getData(),()=>o.getCollectionsPage()];for(const i of e)yield i()})()}getData(){var o=this;return(0,d.Z)(function*(){const e=yield o.pageService.getContentPage("contactanos");e&&(o.data=e)})()}getCollectionsPage(){var o=this;return(0,d.Z)(function*(){const e=yield o.pageService.getElementsContent("titulo item contacto","item_contacto");e?.length>0&&(o.itemsContact=e)})()}activeItemContact(o){this.itemActive=this.itemsContact[o],this.indexItemActive=o,this.showForm()}showForm(){this.formIsShow=!0}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(C.P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact-page"]],decls:12,vars:4,consts:[[1,""],[1,"cnt_gen_contacto"],[1,"bg_round"],[1,"cnt_central"],[1,"h_contacto"],[1,"txt_contacto",3,"innerHtml"],[1,"row_mod_contacto"],["class","mod_contacto",3,"ngClass","click",4,"ngFor","ngForOf"],["class","cnt_form_mod_contacto",4,"ngIf"],[1,"mod_contacto",3,"ngClass","click"],[1,"img_mod_contacto"],[3,"src","alt","title"],[1,"cnt_inf_mod_contacto"],[1,"ic_mod_contacto"],[1,"h_mod_contacto"],[1,"txt_mod_contacto",3,"innerHtml"],[1,"bnt_mod_contacto"],[1,"material-icons"],[1,"cnt_form_mod_contacto"],[1,"btn_volver_contacto",3,"click"],[3,"typeForm","recipient_mail",4,"ngIf"],[4,"ngIf"],[3,"typeForm","recipient_mail"]],template:function(o,e){1&o&&(t.TgZ(0,"body",0)(1,"div",1)(2,"span",2),t._UZ(3,"span"),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"app-breadcrumb"),t.TgZ(6,"div",4),t._uU(7),t.qZA(),t._UZ(8,"div",5),t.TgZ(9,"div",6),t.YNc(10,nt,13,12,"div",7),t.YNc(11,ct,7,2,"div",8),t.qZA()()()()),2&o&&(t.xp6(7),t.hij(" ",null==e.data?null:e.data.titulo_contacto," "),t.xp6(1),t.Q6J("innerHtml",null==e.data?null:e.data.descripcion,t.oJD),t.xp6(2),t.Q6J("ngForOf",e.itemsContact),t.xp6(1),t.Q6J("ngIf",e.formIsShow))},dependencies:[m.mk,m.sg,m.O5,f.L,A,E],styles:[".cnt_gen_contacto[_ngcontent-%COMP%]{width:100%;position:relative}.h_contacto[_ngcontent-%COMP%]{width:100%;font-size:54px;font-weight:900;color:var(--color-c2);text-align:center;padding:48px 0 0}.txt_contacto[_ngcontent-%COMP%]{font-size:15px;width:100%;max-width:657px;margin:auto;padding:0 0 48px;text-align:center}.row_mod_contacto[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;flex-wrap:wrap;padding-bottom:80px}.mod_contacto[_ngcontent-%COMP%]{width:31%;max-width:374px;height:344px;margin:46px 1%;overflow:hidden;border-radius:28px;position:relative;cursor:pointer;transition:all .5s;display:none;animation:mod_in 1s forwards}.mod_contacto[_ngcontent-%COMP%]:hover   .cnt_inf_mod_contacto[_ngcontent-%COMP%]{bottom:0}.mod_contacto.active[_ngcontent-%COMP%]{display:block;opacity:1}@keyframes mod_in{0%{opacity:0}to{opacity:1}}.img_mod_contacto[_ngcontent-%COMP%]{width:100%;height:100%}.img_mod_contacto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{width:130%;height:55%;position:absolute;bottom:-34%;left:50%;background:linear-gradient(180deg,#253482 0%,#182360 49.79%,#111B52 100%);border-radius:50% 50% 0 0;transform:translate(-50%);display:flex;flex-direction:column;gap:16px;align-items:center;box-sizing:border-box;padding:0 20%;transition:all .5s}.ic_mod_contacto[_ngcontent-%COMP%]{width:40px;height:40px;background:linear-gradient(104.32deg,#FFFFFF 0%,#E4E4E4 100%),#C2C2C2;box-shadow:0 4px 7px #00000078;line-height:40px;text-align:center;margin-top:-20px;display:block;border-radius:50%;display:flex;align-items:center;justify-content:center}.h_mod_contacto[_ngcontent-%COMP%]{width:100%;font-size:20px;color:#fff;font-weight:900;text-align:center}.txt_mod_contacto[_ngcontent-%COMP%]{width:100%;font-size:14px;color:#fff;text-align:center}.bnt_mod_contacto[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:16px;color:#608eff;position:absolute;bottom:16px}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:45%;max-width:587px;display:flex;flex-direction:column;gap:16px;align-items:flex-start;margin:0 1%;animation:mod_in 1s forwards}.cnt_form_mod_contacto.active_form[_ngcontent-%COMP%]{display:flex}.btn_volver_contacto[_ngcontent-%COMP%]{display:flex;align-items:center;background:#FFFFFF;border-radius:46px;padding:2px 12px 2px 8px;font-size:20px;font-weight:800;gap:8px;cursor:pointer}.btn_volver_contacto[_ngcontent-%COMP%]:hover{background:var(--color-c2);color:#fff}.form_mod_contacto[_ngcontent-%COMP%]{width:100%;background:#FFFFFF;box-shadow:0 13px 34px -8px #00000040;border-radius:19px;padding:36px}.s_form_cnt[_ngcontent-%COMP%]{width:100%;padding:16px 0;border-bottom:1px solid #ccc;display:flex;flex-wrap:wrap;justify-content:space-between;row-gap:16px}.cnt_campo_form[_ngcontent-%COMP%]{width:100%;position:relative}.cnt_campo_form.w_50[_ngcontent-%COMP%]{width:48%}.cnt_campo_form.w_30[_ngcontent-%COMP%]{width:32%}.campo_form[_ngcontent-%COMP%]{height:38px;width:100%;background:#F2F2F2;border:1px solid #E1E1E1;border-radius:6px;padding:9px 10px;box-sizing:border-box;font-size:13px}.campo_form.filled[_ngcontent-%COMP%]{font-size:16px;color:var(--color-c2);text-align:center;background:#E0E0E0}.campo_form.filled.esp[_ngcontent-%COMP%]{background:var(--color-c2);color:#fff}.etq_form_cnt[_ngcontent-%COMP%]{width:100%;font-size:13px;color:#626262;padding-bottom:4px}.etq_form_cnt.center[_ngcontent-%COMP%]{text-align:center}.form_mod_contacto[_ngcontent-%COMP%]   .cont_politicas[_ngcontent-%COMP%]{margin:0;padding:16px 0}.form_mod_contacto[_ngcontent-%COMP%]   .row_btn[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.form_mod_contacto[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:160px;text-align:center;justify-content:center}@media screen and (max-width: 1050px){.h_contacto[_ngcontent-%COMP%]{font-size:40px;padding-top:24px}.txt_contacto[_ngcontent-%COMP%]{padding-bottom:32px}.mod_contacto[_ngcontent-%COMP%]{height:300px}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{gap:12px}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:65%}}@media screen and (max-width: 768px){.row_mod_contacto[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.mod_contacto[_ngcontent-%COMP%]{width:100%;height:auto;margin:8px 0}.img_mod_contacto[_ngcontent-%COMP%]{height:200px}.cnt_inf_mod_contacto[_ngcontent-%COMP%]{position:relative;bottom:inherit;padding-bottom:16px;margin-top:-50px}.bnt_mod_contacto[_ngcontent-%COMP%]{position:relative;bottom:inherit}.bnt_mod_contacto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transform:rotate(90deg)}.cnt_form_mod_contacto[_ngcontent-%COMP%]{width:100%;margin:16px 0}}@media screen and (max-width: 480px){.cnt_campo_form.w_30[_ngcontent-%COMP%], .cnt_campo_form.w_50[_ngcontent-%COMP%]{width:100%}}.text-danger[_ngcontent-%COMP%]{color:#c03939}.disable-ele[_ngcontent-%COMP%]{opacity:.3;cursor:default}"]}),n})(),canActivate:[F]}];let rt=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(it),u.Bz]}),n})(),lt=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,rt,f.L,A,E]}),n})()},221:(T,P,l)=>{l.d(P,{Y:()=>F});var m=l(5861),u=l(2340),d=l(3905),t=l(8256),C=l(529);const{api_url:_}=u.N;let F=(()=>{class p{constructor(a){this._http=a}getHousingTypesByType(a){var r=this;return(0,m.Z)(function*(){return(0,d.z)(r._http.get(`${_}v1/getHousingTypesByType?project_type=${a}`)).then().catch(g=>(console.warn(g),!1))})()}getFeaturedProjects(){var a=this;return(0,m.Z)(function*(){return(0,d.z)(a._http.get(`${_}v1/getProyectosDestacados`)).then().catch(s=>(console.warn(s),!1))})()}getProyectosByTipo(a,r,s,g,x){var Z=this;return(0,m.Z)(function*(){return Z._http.get(`${_}v1/getProyectosByTipo?tipo=${a}&ciudad=${r}&tipo_proyecto=${s}&precio=${g}&limite=${x}`).toPromise().then().catch(M=>(console.warn(M),!1))})()}getProyectoByUrl(a){var r=this;return(0,m.Z)(function*(){return r._http.get(`${_}v1/getProyectoByUrl?friendly_url=${a}`).toPromise().then().catch(g=>(console.warn(g),!1))})()}getCalculoPorcentaje(a,r,s,g,x){var Z=this;return(0,m.Z)(function*(){return Z._http.get(`${_}v1/getCalculoPorcentaje?valorProyecto=${a}&porcentaje=${r}&cuotasinicialfinanciar=${s}&plazo=${g}&valorafinanciaranios=${x}`).toPromise().then().catch(M=>(console.warn(M),!1))})()}getCalculoCuota(a,r){var s=this;return(0,m.Z)(function*(){return s._http.get(`${_}v1/getCalculoCuota?cuota=${r}&saldocuotainicial=${a}`).toPromise().then().catch(x=>(console.warn(x),!1))})()}getPlazoanios(a,r){var s=this;return(0,m.Z)(function*(){return s._http.get(`${_}v1/getPlazoanios?cuota=${a}&valorafinanciar=${r}`).toPromise().then().catch(x=>(console.warn(x),!1))})()}setCalculadoraForm(a){return this._http.post(`${_}v1/setCalculadoraForm`,JSON.stringify(a)).toPromise().then().catch(s=>(console.warn(s),!1))}getCategoriasInteres(a){var r=this;return(0,m.Z)(function*(){return r._http.get(`${_}v1/getCategoriasInteres?id_proyecto=${a}`).toPromise().then().catch(g=>(console.warn(g),!1))})()}getSitiosInteres(a,r){var s=this;return(0,m.Z)(function*(){return s._http.get(`${_}v1/getSitiosInteres?id_proyecto=${r}&id_categoria=${a}`).toPromise().then().catch(x=>(console.warn(x),!1))})()}getSeoContentProject(a){var r=this;return(0,m.Z)(function*(){return r._http.get(`${_}v1/getSeoContentProject?friendly_url=${a}`).toPromise().then().catch(g=>(console.warn(g),!1))})()}getPreciosProyectos(a){var r=this;return(0,m.Z)(function*(){return r._http.get(`${_}v1/getPreciosProyectos?tipo=${a}`).toPromise().then()})()}createContactWppProject(a){var r=this;return(0,m.Z)(function*(){return r._http.post(`${_}v1/createContactWppProject`,a).toPromise().then()})()}}return p.\u0275fac=function(a){return new(a||p)(t.LFG(C.eN))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},8830:(T,P,l)=>{l.d(P,{v:()=>C});var m=l(6895),u=l(8256),d=l(1481),t=l(5480);let C=(()=>{class _{constructor(p,f,a,r){this.meta=p,this.pageService=f,this.doc=a,this.titlePage=r}updateCanonicalUrl(p=""){let f=this.doc.querySelector("link[rel='canonical']")||null;f||(f=this.doc.createElement("link")),f.setAttribute("rel","canonical"),f.setAttribute("href",p||this.doc.URL),this.doc.head.appendChild(f)}setUpMetaTags(p){if(p){var f="";""!=p.canonical&&(f=p.canonical),this.updateCanonicalUrl(f),this.titlePage.setTitle(p.title),this.meta.updateTag({name:"description",content:p.metadescription}),this.meta.updateTag({name:"robots",content:p.metarobots})}}}return _.\u0275fac=function(p){return new(p||_)(u.LFG(d.h_),u.LFG(t.P),u.LFG(m.K0),u.LFG(d.Dx))},_.\u0275prov=u.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()}}]);
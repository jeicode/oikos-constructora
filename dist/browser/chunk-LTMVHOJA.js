import{a as y,b as re,c as O,d as p,e as E,f as F,h as S,i as ae,j,k,p as I,q as N,r as z,s as W,t as B,u as T,v as V,w as le}from"./chunk-56DJ75US.js";import{A as R,C as x,Ca as Q,Eb as M,F as G,Fb as ne,Gb as oe,Hb as ie,I as H,J as K,Ka as s,La as J,Ma as X,Pa as v,Ra as f,S as Y,V as l,W as d,c as g,ca as u,cb as w,eb as C,ia as c,ib as ee,j as A,mb as P,pb as te,sa as r,ta as a,ua as m,w as q,xa as Z,ya as h,z as U,za as $}from"./chunk-3MCO4G7G.js";var ue=o=>({display:o}),he=o=>({active:o});function be(o,i){o&1&&(r(0,"small"),s(1,"campo inv\xE1lido*"),a())}function xe(o,i){o&1&&(r(0,"small"),s(1,"campo inv\xE1lido*"),a())}function ve(o,i){o&1&&(r(0,"small"),s(1,"campo inv\xE1lido*"),a())}function we(o,i){o&1&&(r(0,"small"),s(1,"campo inv\xE1lido*"),a())}function Ce(o,i){o&1&&(r(0,"small"),s(1,"debes aceptar la pol\xEDtica de tratamiento de datos*"),a())}var je=(()=>{let i=class i{constructor(e,n,t,_){this.fb=e,this.formService=n,this.projectService=t,this.router=_,this.project=new y,this.modalIsOpen=!1,this.showErrors=!1,this.form=this.fb.group({name:["",p.required],last_name:["",p.required],email:["",[p.required,p.pattern(z)]],phone:["",[p.required,p.pattern(W)]],terms:["",p.requiredTrue],project_id:[""],title_project:[""],sendTo:[""]})}ngOnDestroy(){this.eventsSubscription.unsubscribe()}ngOnInit(){this.eventsSubscription=this.modalEvent.subscribe(e=>{let{openModal:n}=e;n&&this.setModalIsOpen(n)})}saveFormData(){return g(this,null,function*(){this.form.valid?(this.form.patchValue({project_id:this.project.id,title_project:this.project.titulo_proyecto,sendTo:this.project.email_contactos}),(yield this.projectService.createContactPreLaunchProject(this.form.getRawValue()))?(this.modalIsOpen=!1,this.router.navigateByUrl("/gracias/general")):alert("Ocurri\xF3 un error, contactese con el administrador")):this.showErrors=!0})}setModalIsOpen(e){this.modalIsOpen=e}hasErrorsFieldForm(e){let n=this.form;return this.formService.hasErrorsFieldForm(n,e,this.showErrors)}};i.\u0275fac=function(n){return new(n||i)(d(I),d(B),d(T),d(M))},i.\u0275cmp=x({type:i,selectors:[["app-modal-pre-launch-project"]],inputs:{modalEvent:"modalEvent",project:"project"},standalone:!0,features:[v],decls:36,vars:12,consts:[["_ngcontent-serverapp-c76","",1,"bg_dark",3,"ngStyle"],[1,"s_modal_calculadora",3,"ngClass"],[1,"close_calc"],[1,"fas","fa-arrow-right",3,"click"],[1,"f_calculadora",3,"ngSubmit","formGroup"],[1,"h_form_proy_esp"],[1,"grand_c_inputs"],[1,"datos_persona"],[1,"cont_input_x1"],["type","text","placeholder","Nombre","formControlName","name"],[1,"text-danger",2,"height","11px"],[4,"ngIf"],["type","text","placeholder","Apellidos","formControlName","last_name"],["type","email","placeholder","Email","formControlName","email"],["type","number","placeholder","Tel\xE9fono","formControlName","phone"],[1,"cont_chk"],["type","checkbox","name","","id","calc_form_chk","formControlName","terms"],["for","calc_form_chk"],["routerLink","/legales/politicas-de-privacidad","target","_blank"],[1,"cont_submit"],["type","submit",1,"btn"]],template:function(n,t){n&1&&(m(0,"span",0),r(1,"div",1)(2,"a",2)(3,"span",3),h("click",function(){return t.modalIsOpen=!1}),a()(),r(4,"form",4),h("ngSubmit",function(){return t.saveFormData()}),r(5,"div",5),s(6," Llene el formulario a continuaci\xF3n para inscribirse "),a(),r(7,"div",6)(8,"div",7)(9,"div",8),m(10,"input",9),r(11,"div",10),u(12,be,2,0,"small",11),a()(),r(13,"div",8),m(14,"input",12),r(15,"div",10),u(16,xe,2,0,"small",11),a()(),r(17,"div",8),m(18,"input",13),r(19,"div",10),u(20,ve,2,0,"small",11),a()(),r(21,"div",8),m(22,"input",14),r(23,"div",10),u(24,we,2,0,"small",11),a()()(),r(25,"div",15),m(26,"input",16),r(27,"label",17),s(28," Acepto y Autorizo la "),r(29,"a",18),s(30," Pol\xEDtica de Tratamiento de Datos "),a()()(),r(31,"div",10),u(32,Ce,2,0,"small",11),a(),r(33,"div",19)(34,"button",20),s(35,"Enviar"),a()()()()()),n&2&&(c("ngStyle",f(8,ue,t.modalIsOpen?"block":"none")),l(),c("ngClass",f(10,he,t.modalIsOpen)),l(3),c("formGroup",t.form),l(8),c("ngIf",t.hasErrorsFieldForm("name")),l(4),c("ngIf",t.hasErrorsFieldForm("last_name")),l(4),c("ngIf",t.hasErrorsFieldForm("email")),l(4),c("ngIf",t.hasErrorsFieldForm("phone")),l(8),c("ngIf",t.hasErrorsFieldForm("terms")))},dependencies:[P,w,C,ee,N,S,O,ae,re,E,F,j,k,oe,ne],styles:[".bg_dark[_ngcontent-%COMP%]{display:none;width:100%;height:100%;position:fixed;z-index:99;background:#090818d1;inset:0}.s_modal_calculadora[_ngcontent-%COMP%]{position:fixed;height:auto;max-height:90%;z-index:100;top:10%;right:0;width:100%;max-width:450px;background-color:#fff;border-radius:20px 0 0 20px;padding:30px 4%;transition:.3s ease-out;transform:translate(100%);overflow-y:scroll}.s_modal_calculadora[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px;margin:0 0 4px;color:#9c9c9c;display:inline-block}.s_modal_calculadora.active[_ngcontent-%COMP%]{transform:translate(0)}.s_modal_calculadora[_ngcontent-%COMP%]   .close_calc[_ngcontent-%COMP%]{text-align:right;display:flex;justify-content:flex-end;margin:0 0 20px}.s_modal_calculadora[_ngcontent-%COMP%]   .close_calc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;align-items:center;justify-content:center;width:30px;height:30px;font-size:20px;cursor:pointer}.s_modal_calculadora[_ngcontent-%COMP%]   .close_calc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover:before{transform:translate(10px);color:#4369c6}.s_modal_calculadora[_ngcontent-%COMP%]   .close_calc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{transition:.3s ease;display:flex;align-items:center;justify-content:center;width:30px;height:30px}.f_calculadora[_ngcontent-%COMP%]{width:100%}.grand_c_inputs[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;gap:16px}.datos_persona[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.cont_input_x1[_ngcontent-%COMP%]{width:100%;position:relative}.cont_chk[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.cont_chk[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin:0}.cont_chk[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-c2)}.datos_persona[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:90px}.h_form_proy_esp[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:var(--color-c2);padding-bottom:16px}.text-danger[_ngcontent-%COMP%]{color:#fb2727}"]});let o=i;return o})();var ce=o=>({active:o}),L=o=>({"error-form-field":o});function Pe(o,i){if(o&1){let se=Z();r(0,"div",23),h("click",function(){H(se);let n=$();return K(n.modalIsOpen=!n.modalIsOpen)}),r(1,"div",24),m(2,"i",25),a()()}}var De=(()=>{let i=class i{constructor(e,n,t,_,b){this.fb=e,this.formService=n,this.globalService=t,this.router=_,this.projectService=b,this.BASE_URL=V.imagenes_url,this.project=new y,this.showFloatingButton=!1,this.idBtnWpp="",this.modalIsOpen=!1,this.showErrors=!1,this.contactWppForm=this.fb.group({name:["",p.required],email:["",[p.required,p.pattern(z)]],phone:["",[p.required,p.pattern(W)]],project_id:[""]})}ngOnDestroy(){this.eventsSubscription.unsubscribe()}ngOnInit(){this.eventsSubscription=this.modalEvent.subscribe(e=>this.setOpenModalValue(e?.openModal))}setOpenModalValue(e){e!==void 0&&(this.modalIsOpen=e)}sendContactUserWpp(){return g(this,null,function*(){if(this.contactWppForm.valid){this.contactWppForm.patchValue({project_id:this.project.id});let e=this.contactWppForm.getRawValue(),n=yield this.projectService.createContactWppProject(e);n?this.redirectToWppLink():(yield this.globalService.sendMailApiError({api:"v1/createContactWppProject",errors:{url:this.router.url,request:e,response:n}}),alert("Opps ocurri\xF3 un error enviando el formulario")),this.contactWppForm.reset()}else this.showErrors=!0})}hasErrorsFieldForm(e){let n=this.contactWppForm;return this.formService.hasErrorsFieldForm(n,e,this.showErrors)}redirectToWppLink(){this.project.origin=="home"?window.open(this.project.api_wsp,"_blank"):window.open(this.project.api_wsp_flotante,"_blank")}};i.\u0275fac=function(n){return new(n||i)(d(I),d(B),d(le),d(M),d(T))},i.\u0275cmp=x({type:i,selectors:[["app-wpp-modal-project"]],inputs:{project:"project",modalEvent:"modalEvent",showFloatingButton:"showFloatingButton",idBtnWpp:"idBtnWpp"},standalone:!0,features:[v],decls:37,vars:22,consts:[[1,"layer_negro_wa_form",3,"ngClass"],[1,"cont_gen_form_wa",3,"ngClass"],[1,"cont_top_form_wa"],[1,"cont_gen_prof_a_form"],[1,"img_pr_wa_form"],[1,"lazyload",3,"src"],[1,"cont_nom_est_wa_form"],[1,"nomb_wa_fl"],[1,"estado_wa_form"],[1,"ic_cerrar_wa_form",3,"click"],[1,"cont_gen_s_chat","validateForm",3,"formGroup"],[1,"cont_s_chat_conv_bl"],[1,"s_chat_conv_bl"],[1,"cont_s_chat_conv_ver"],[1,"s_chat_conv_ver",3,"ngClass"],[1,"cont_etq_campo_wa_form"],[1,"etq_wa_form"],["formControlName","name","type","text","name","name","id","inp_name_wa_form",1,"campo_wa_form"],["formControlName","email","type","email","name","email","id","inp_email_wa_form",1,"campo_wa_form"],[1,"cont_s_chat_conv_ver","cnt_tel"],["type","tel","name","telefono","formControlName","phone","id","inp_tel_wa_form",1,"campo_wa_form"],["type","submit",1,"btn_form_wa","disabled",3,"click","disabled","id"],["class","cont_gen_wa_form_flt c-pointer",3,"click",4,"ngIf"],[1,"cont_gen_wa_form_flt","c-pointer",3,"click"],[1,"btn_wa_flt"],[1,"fab","fa-whatsapp"]],template:function(n,t){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),m(5,"img",5),a(),r(6,"div",6)(7,"div",7),s(8),a(),r(9,"div",8),s(10," en linea "),a()()(),r(11,"span",9),h("click",function(){return t.setOpenModalValue(!1)}),a()(),r(12,"form",10)(13,"div",11)(14,"div",12),s(15),a()(),r(16,"div",13)(17,"div",14)(18,"div",15)(19,"label",16),s(20,"Nombre:*"),a(),m(21,"input",17),a()()(),r(22,"div",13)(23,"div",14)(24,"div",15)(25,"label",16),s(26,"Email:*"),a(),m(27,"input",18),a()()(),r(28,"div",19)(29,"div",14)(30,"div",15)(31,"label",16),s(32,"Celular:*"),a(),m(33,"input",20),a()()(),r(34,"button",21),h("click",function(){return t.sendContactUserWpp()}),s(35," Iniciar conversaci\xF3n "),a()()()(),u(36,Pe,3,0,"div",22)),n&2&&(c("ngClass",f(12,ce,t.modalIsOpen)),l(),c("ngClass",f(14,ce,t.modalIsOpen)),l(4),Q("src",t.BASE_URL+t.project.logo_proyecto,Y),l(3),J(t.project.titulo_proyecto),l(4),c("formGroup",t.contactWppForm),l(3),X(" ",t.project.msg_wsp_flotante," "),l(2),c("ngClass",f(16,L,t.hasErrorsFieldForm("name"))),l(6),c("ngClass",f(18,L,t.hasErrorsFieldForm("email"))),l(6),c("ngClass",f(20,L,t.hasErrorsFieldForm("phone"))),l(5),c("disabled",t.contactWppForm.invalid)("id",t.idBtnWpp?t.idBtnWpp:"btn_form_wa_"+t.project.titulo_proyecto_wsp),l(2),c("ngIf",t.showFloatingButton))},dependencies:[P,w,C,N,S,O,E,F,j,k],styles:['.error-form-field[_ngcontent-%COMP%]{border:solid 2px rgb(213,34,34)}.layer_negro_wa_form[_ngcontent-%COMP%]{width:100%;height:100%;position:fixed;top:0;left:0;background:#000000b3;z-index:-3;opacity:0;transition:all .3s}.layer_negro_wa_form.active[_ngcontent-%COMP%]{opacity:1;z-index:30}.cont_gen_form_wa[_ngcontent-%COMP%]{width:350px;position:absolute;bottom:-800px;right:10px;background:url("./media/bg_form_wa-WPNZZYUZ.webp") center #e5e5e5;overflow:hidden;border-radius:7px;box-shadow:0 4px 4px #00000040;font-family:Helvetica,Arial,sans-serif;z-index:1;opacity:0;transition:all .3s}.cont_gen_form_wa.active[_ngcontent-%COMP%]{bottom:70px;opacity:1}.cont_gen_form_wa[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:Helvetica,Arial,sans-serif}.cont_top_form_wa[_ngcontent-%COMP%]{width:100%;background:#fafafa;border-radius:7px 7px 0 0;border-bottom:1px solid #bcbcbc;box-sizing:border-box;padding:4px 8px;display:flex;display:-webkit-flex;justify-content:space-between;-webkit-justify-content:space-between}.cont_gen_prof_a_form[_ngcontent-%COMP%]{width:80%;display:flex;display:-webkit-flex}.img_pr_wa_form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:70%;max-height:25px}.cont_nom_est_wa_form[_ngcontent-%COMP%]{box-sizing:border-box;padding-left:8px;text-align:left;margin-top:4px}.nomb_wa_fl[_ngcontent-%COMP%]{width:100%;font-size:11px;font-weight:700;color:#2a2f32}.estado_wa_form[_ngcontent-%COMP%]{width:100%;font-size:10px;color:#a0a0a0}.ic_cerrar_wa_form[_ngcontent-%COMP%]{color:#2a2f32;display:block;background:url("./media/cerrar_form_wa-N7OHUEFY.svg") no-repeat center;width:35px;height:35px;background-size:40% auto;cursor:pointer}.cont_gen_s_chat[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;padding:16px 8px;position:relative;display:inline-block}.s_chat_conv_bl[_ngcontent-%COMP%]{width:100%;display:inline-block;background:#fff;box-sizing:border-box;padding:8px;font-size:11px;text-align:left;position:relative;border-radius:4px 0 0}.s_chat_conv_bl[_ngcontent-%COMP%]:after{content:"";width:0;height:0;border-top:10px solid transparent;border-right:10px solid #fff;position:absolute;left:-10px;bottom:0}.s_chat_conv_bl[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:14px}.cont_s_chat_conv_bl[_ngcontent-%COMP%]{width:90%;max-width:266px;float:left;text-align:right;box-sizing:border-box;padding-left:10px;overflow:hidden;border-radius:4px;border-bottom:1px solid #ccc;margin-bottom:20px}.cont_s_chat_conv_ver[_ngcontent-%COMP%]{width:90%;max-width:266px;float:right;text-align:right;box-sizing:border-box;padding-right:10px;border-radius:4px;border-bottom:1px solid #ccc;margin-bottom:8px}.cont_s_chat_conv_ver.cnt_tel[_ngcontent-%COMP%]{overflow:visible}.cont_s_chat_conv_ver[_ngcontent-%COMP%]   .formError[_ngcontent-%COMP%]{left:0!important}.s_chat_conv_ver[_ngcontent-%COMP%]{width:100%;display:inline-block;background:#dcf8c6;box-sizing:border-box;padding:8px;font-size:11px;text-align:left;position:relative;border-radius:4px 0 4px 4px}.s_chat_conv_ver[_ngcontent-%COMP%]:after{content:"";width:0;height:0;border-bottom:10px solid transparent;border-left:10px solid #DCF8C6;position:absolute;right:-10px;top:0}.cont_etq_campo_wa_form[_ngcontent-%COMP%]{width:100%;display:flex;display:-webkit-flex;align-items:center;-webkit-align-items:center}.etq_wa_form[_ngcontent-%COMP%]{font-size:11px;color:#737373;text-align:left}.campo_wa_form[_ngcontent-%COMP%]{flex-grow:1;font-size:12px;color:#333;box-sizing:border-box;padding:0 8px;border:none;background:none}.btn_form_wa[_ngcontent-%COMP%]{width:180px;font-size:12px;color:#fff;font-weight:700;margin:10px 10px 40px 0;background:#0b6156;border-radius:4px;float:right;padding:10px 0;cursor:pointer;display:flex;justify-content:center}.btn_form_wa[_ngcontent-%COMP%]:hover{background:#04433b}.btn_form_wa[_ngcontent-%COMP%]:disabled{background-color:#ccc}.cont_gen_wa_form_flt[_ngcontent-%COMP%]{width:45px;height:45px;position:fixed;bottom:25px;left:16px;right:40px;z-index:31}.btn_wa_flt[_ngcontent-%COMP%]{width:70px;height:70px;background:#00c033;color:#fff;border-radius:50%;line-height:56px;position:fixed;bottom:5%;right:2%;font-size:25px;box-shadow:0 4px 14px #00000040;z-index:100;text-align:center}.btn_wa_flt[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]{font-size:42px;line-height:70px;position:relative}@media screen and (max-width:480px){.cont_gen_form_wa[_ngcontent-%COMP%]{width:95%;position:fixed;margin:0}.cont_gen_form_wa.active[_ngcontent-%COMP%]{bottom:10%;left:2.5%}.btn_wa_flt[_ngcontent-%COMP%]{width:45px;height:45px;bottom:5%;line-height:45px}.btn_wa_flt[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%]{font-size:22px;line-height:45px;display:inline-block}.btn_wa_flt[_ngcontent-%COMP%]{visibility:hidden}.img_pr_wa_form[_ngcontent-%COMP%]{min-width:50px;width:50px;height:50px}}']});let o=i;return o})();var qe=(()=>{let i=class i{transform(e,n="es"){if(typeof e=="string"){if(e=e.replace(/[.,\s]/g,""),/^\d+$/.test(e)){let t=BigInt(e);return this.getFormatEnNumber(t,n)}}else if(typeof e=="number")return this.getFormatEnNumber(e,n);return""}getFormatEnNumber(e,n){return new Intl.NumberFormat(n).format(e)}};i.\u0275fac=function(n){return new(n||i)},i.\u0275pipe=G({name:"thousandNumber",type:i,pure:!0,standalone:!0});let o=i;return o})();var Me=V.base_url,$e=(()=>{let i=class i{constructor(e){this._http=e,this.configService=R(ie)}getContentHtmlExternalPage(e){return g(this,null,function*(){let n=`${Me}api/v1/getContentHtmlExternalPage?urlPage=${e}`;return A(this._http.get(n)).then().catch(t=>(console.warn(t),!1))})}getCopPriceByUsd(){return g(this,null,function*(){if(this.configService.isBrowser()){let t="https://www.google.com/finance/quote/USD-COP?sa=X&ved=2ahUKEwiBpd_lo5L7AhV1VTABHSOsBHgQmY0JegQIBhAc",{html:_}=yield this.getContentHtmlExternalPage(t);if(_){var e=new DOMParser,n=e.parseFromString(_,"text/html");if(n){let b=n.querySelector(".fxKbKc")?.textContent;if(b){let pe=b.replace(/,/g,"");return Number(pe)}}}}return null})}convertCopToUsdProjects(e){return g(this,null,function*(){let n=yield this.getCopPriceByUsd();return n&&e?.length>0&&e.length>0?e.map(t=>(t?.valor_proyecto&&(t.dollar_value=Number(t?.valor_proyecto)/n,t.dollar_value=Math.trunc(t.dollar_value)),t)):null})}};i.\u0275fac=function(n){return new(n||i)(U(te))},i.\u0275prov=q({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();export{je as a,De as b,qe as c,$e as d};

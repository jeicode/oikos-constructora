import{a as tt}from"./chunk-GXODMUWI.js";import{a as q,b as N,c as B,d as Y,e as W,f as G}from"./chunk-FU3NXVUK.js";import{a as Q}from"./chunk-OZSXTQSK.js";import{a as X}from"./chunk-SGN266RM.js";import{a as Z}from"./chunk-SBJ3RA75.js";import{a as J}from"./chunk-KF326LM6.js";import{a as H,b as K}from"./chunk-ORME4VUE.js";import{a as R}from"./chunk-6DP3GNXQ.js";import{a as D}from"./chunk-7SCTSF4L.js";import{Na as V,d as F,e as L,i as $,m as A,ua as U}from"./chunk-E2SANVYB.js";import{$ as C,Ab as p,Bb as r,Cb as g,Fb as h,Gb as M,Hb as a,Lb as O,Oa as u,Rb as y,Sb as s,Ta as o,Tb as b,Ua as f,Ub as m,Vb as z,X as k,Xb as I,Yb as v,Zb as w,_b as E,aa as P,ac as T,cc as j,d as S,ib as d,j as x,qb as i}from"./chunk-4JXXPMF3.js";var et=e=>({"background-color":e});function nt(e,c){if(e&1&&(p(0,"span",21),s(1),r()),e&2){let t=a(2).$implicit;i("ngStyle",w(2,et,t==null?null:t.color_secundario)),o(),m(" ",t==null?null:t.estado_proyecto," ")}}function ot(e,c){if(e&1&&(p(0,"a",24),g(1,"img",25),r()),e&2){let t=a(3).$implicit;i("href",t==null?null:t.vista360,u)}}function it(e,c){if(e&1&&(p(0,"a",24),g(1,"span",26),r()),e&2){let t=a(3).$implicit;i("href",t==null?null:t.url_waze,u)}}function rt(e,c){if(e&1&&(p(0,"div",22),d(1,ot,2,1,"a",23)(2,it,2,1,"a",23),r()),e&2){let t=a(2).$implicit;o(),i("ngIf",t==null?null:t.vista360),o(),i("ngIf",t==null?null:t.url_waze)}}function ct(e,c){if(e&1&&(p(0,"a",27),g(1,"img",28),r()),e&2){let t=a(2).$implicit,l=a();O("routerLink","/proyecto/",t==null?null:t.url_amigable,""),o(),i("src",l.BASE_URL+(t==null?null:t.imagen_principal_proyecto),u)("alt",t==null?null:t.alt_principal)("title",t==null?null:t.title_principal)}}function pt(e,c){if(e&1&&g(0,"img",28),e&2){let t=a(2).$implicit,l=a();i("src",l.BASE_URL+(t==null?null:t.imagen_principal_proyecto),u)("alt",t==null?null:t.alt_principal)("title",t==null?null:t.title_principal)}}function at(e,c){if(e&1&&(p(0,"h3"),s(1),r()),e&2){let t=a(2).$implicit;o(),z(" ",t==null?null:t.zona_proyecto," / ",t==null?null:t.ubicacion_proyecto," ")}}function lt(e,c){if(e&1&&(p(0,"h4")(1,"span"),s(2,"Desde"),r(),s(3),r()),e&2){let t=a(2).$implicit;o(3),m(" $",t==null?null:t.valor_proyecto_formato," ")}}function _t(e,c){if(e&1&&(p(0,"div",29),s(1," Precio de referencia "),p(2,"b"),s(3),E(4,"thousandNumber"),r()()),e&2){let t=a(2).$implicit;o(3),m("USD ",T(4,1,t==null?null:t.dollar_value,"es"),"")}}function st(e,c){if(e&1&&(p(0,"div",30),g(1,"img",31),p(2,"span"),s(3),r()()),e&2){let t=a(2).$implicit;o(3),b(t==null?null:t.texto_adicional)}}function gt(e,c){if(e&1){let t=h();p(0,"div",32)(1,"a",33),M("click",function(){C(t);let n=a(2).$implicit,_=a();return P(_.selectProjectToModal(n))}),g(2,"span",34),s(3," Contactar "),r(),p(4,"a",35),s(5," Ver proyecto "),r()()}if(e&2){let t=a(2).$implicit;o(4),O("routerLink","/proyecto/",t==null?null:t.url_amigable,"")}}var dt=()=>({"grid-template-columns":" 1fr"}),ut=()=>({"justify-self":" center"});function ft(e,c){if(e&1){let t=h();p(0,"div",36)(1,"a",37),M("click",function(){C(t);let n=a(2).$implicit,_=a();return P(_.selectProjectToPreLaunch(n))}),s(2," Inscribirse "),r()()}e&2&&(i("ngStyle",v(2,dt)),o(),i("ngStyle",v(3,ut)))}function mt(e,c){if(e&1&&(p(0,"div",8)(1,"picture"),d(2,nt,2,4,"span",9)(3,rt,3,2,"div",10)(4,ct,2,4,"a",11)(5,pt,1,3,"ng-template",null,12,j),r(),p(7,"h2",13)(8,"picture"),g(9,"img",14),r(),p(10,"div"),s(11),r()(),p(12,"div",15),d(13,at,2,2,"h3",16)(14,lt,4,1,"h4",16)(15,_t,5,4,"div",17),r(),d(16,st,4,1,"div",18)(17,gt,6,1,"div",19)(18,ft,3,4,"ng-template",null,20,j),r()),e&2){let t=y(6),l=y(19),n=a().$implicit,_=a();o(2),i("ngIf",n==null?null:n.estado_proyecto),o(),i("ngIf",(n==null?null:n.vista360)&&(n==null?null:n.url_waze)),o(),i("ngIf",(n==null?null:n.interna)==="si")("ngIfElse",t),o(3),i("ngStyle",w(15,et,n==null?null:n.color_primario)),o(2),i("src",_.BASE_URL+(n==null?null:n.logo_proyecto),u)("alt",n==null?null:n.alt_logo)("title",n==null?null:n.title_logo),o(2),b(n==null?null:n.titulo_proyecto),o(2),i("ngIf",(n==null?null:n.zona_proyecto)&&(n==null?null:n.ubicacion_proyecto)),o(),i("ngIf",n==null?null:n.valor_proyecto_formato),o(),i("ngIf",n==null?null:n.dollar_value),o(),i("ngIf",n==null?null:n.texto_adicional),o(),i("ngIf",(n==null?null:n.interna)==="si")("ngIfElse",l)}}function xt(e,c){e&1&&d(0,mt,20,17,"ng-template",7)}q.use([N,B]);var $t=(()=>{let c=class c{constructor(l,n,_){this.projectService=l,this.configServ=n,this.currencyConverter=_,this.BASE_URL=D.imagenes_url,this.projectSelectedToModal=new H,this.notifyModalChanges=new x,this.notifyChangesPreLaunchProject=new x,this.config={slidesPerView:1,breakpoints:{1050:{slidesPerView:3},768:{slidesPerView:2},100:{slidesPerView:1}},navigation:{nextEl:".cnt_car_proy_dest .swiper-button-next",prevEl:".cnt_car_proy_dest .swiper-button-prev"}},this.projects=[]}ngOnInit(){this.getFeaturedProjects()}getFeaturedProjects(){return S(this,null,function*(){this.projects.length==0&&(this.projects=yield this.projectService.getFeaturedProjects()),yield this.currencyConverter.convertCopToUsdProjects(this.projects)})}selectProjectToModal(l){this.projectSelectedToModal=l,this.notifyModalChanges.next({openModal:!0})}selectProjectToPreLaunch(l){this.projectSelectedToModal=l,this.notifyChangesPreLaunchProject.next({openModal:!0})}};c.\u0275fac=function(n){return new(n||c)(f(K),f(R),f(J))},c.\u0275cmp=k({type:c,selectors:[["app-slide-projects"]],inputs:{projects:"projects"},standalone:!0,features:[I],decls:8,vars:6,consts:[[1,"cnt_car_proy_dest"],[1,"swiper-container"],[3,"config"],[4,"ngFor","ngForOf"],[1,"swiper-button-next"],[1,"swiper-button-prev"],[3,"modalEvent","project"],["swiperSlide",""],[1,"card_p"],["class","tag_state",3,"ngStyle",4,"ngIf"],["class","btns_icons",4,"ngIf"],[3,"routerLink",4,"ngIf","ngIfElse"],["notRedirect",""],[1,"name_proyecto",3,"ngStyle"],["loading","lazy","width","87","height","87","defaultImg","",3,"src","alt","title"],[1,"datos_proyecto"],[4,"ngIf"],["class","precio_usd",4,"ngIf"],["class","franja_p",4,"ngIf"],["class","ctas_proyectos",4,"ngIf","ngIfElse"],["redirect",""],[1,"tag_state",3,"ngStyle"],[1,"btns_icons"],["target","_blank","class","btn_icon",3,"href",4,"ngIf"],["target","_blank",1,"btn_icon",3,"href"],["loading","lazy","src","assets/images/diseno/proyectos_vivienda/icon_360.svg","width","20","height","20"],[1,"fas","fa-map-marker-alt"],[3,"routerLink"],["loading","lazy","width","350","height","219","defaultImg","",3,"src","alt","title"],[1,"precio_usd"],[1,"franja_p"],["loading","lazy","width","20","height","20","src","assets/images/diseno/proyectos_vivienda/icono_proyecto.svg","alt",""],[1,"ctas_proyectos"],[1,"btn_whatsapp","c-pointer",3,"click"],[1,"fab","fa-whatsapp"],[1,"btn",3,"routerLink"],[1,"ctas_proyectos",3,"ngStyle"],[1,"btn",3,"ngStyle","click"]],template:function(n,_){n&1&&(p(0,"div",0)(1,"div",1)(2,"swiper",2),d(3,xt,1,0,null,3),r()(),g(4,"div",4)(5,"div",5),r(),g(6,"app-modal-pre-launch-project",6)(7,"app-wpp-modal-project",6)),n&2&&(o(2),i("config",_.config),o(),i("ngForOf",_.projects),o(3),i("modalEvent",_.notifyChangesPreLaunchProject.asObservable())("project",_.projectSelectedToModal),o(),i("modalEvent",_.notifyModalChanges.asObservable())("project",_.projectSelectedToModal))},dependencies:[A,F,L,$,G,W,Y,V,U,tt,X,Q,Z],styles:['.s_proyecto_vivienda[_ngcontent-%COMP%]{background:linear-gradient(180deg,#e9edf700,#e8ebf1 72.6%),#fff;min-height:340px;position:relative}.s_proyecto_vivienda[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:-2px;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/curva_bg.svg) no-repeat;background-size:cover;background-position:center top;z-index:1;width:100%;height:100%;max-height:145px;pointer-events:none}.c_proyecto_vivienda[_ngcontent-%COMP%]{position:relative}.c_proyecto_vivienda[_ngcontent-%COMP%]:before, .c_proyecto_vivienda[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/puntos.svg) no-repeat center;width:20px;height:70px}.c_proyecto_vivienda[_ngcontent-%COMP%]:after{right:0;left:initial;top:initial;bottom:0;transform:rotate(180deg)}.filtro_proyectos[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;background:#fff;box-shadow:0 2px 20px -3px #33427740;border-radius:39px;padding:8px 20px;max-width:920px;margin:0 auto}.filtro_proyectos[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:none;border-radius:0;border:0;border-bottom:1px solid #DADADA;padding:5px;color:#666;font-size:14px;cursor:pointer}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:130px}.s_cards_proyectos[_ngcontent-%COMP%]{padding:0 0 40px;position:relative;z-index:1;transform:translateY(-80px)}.c_cards_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}.card_p[_ngcontent-%COMP%]{overflow:hidden;background:#fff;box-shadow:0 19px 41px -18px #23386273;border-radius:24px;display:inline-grid}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;height:170px;width:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover}.card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%]{text-align:center;position:absolute;left:10px;top:10px;border-radius:100px;padding:8px 20px;color:#fff;font-weight:600;font-size:14px;z-index:1}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:10px;right:10px;border-radius:6px;background:var(--color-grad_azul_osc);width:80px;height:40px;z-index:1;overflow:hidden}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{position:absolute;left:0;right:0;height:80%;width:1px;background-color:#a5a5a5;margin:auto;z-index:2}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;display:flex;justify-content:center;align-items:center;width:26px;height:26px;transition:.3s ease;width:100%;height:100%;position:relative}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{content:"";background-color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px;color:#fff;display:inline-flex;justify-content:center;align-items:center}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{background-color:#2e3b85;padding:10px;display:grid;grid-template-columns:80px 1fr;align-items:center;gap:20px;position:relative;min-height:54px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-width:87px;border-radius:100px;border:5px solid #FFFFFF;background-color:#fff;position:absolute;width:90px;height:90px;box-shadow:0 5px 15px -5px #00000054;left:10px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{grid-column:2;color:#fff;font-size:15px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 20px;text-align:center;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:34px;font-weight:900;display:flex;align-items:center;gap:10px;text-align:center;justify-content:center}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;display:inline-block}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]{width:100%;background:linear-gradient(90deg,#eeeeee80,#eee 48.96%,#eeeeee80);display:flex;align-items:center;justify-content:center;gap:10px;padding:10px}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:center;padding:10px}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover{color:#060b29}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(180deg,#5ffc7b,#26d044);border-radius:6px;display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:22px;color:#fff;font-weight:500}.card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:fit-content;justify-self:flex-end;padding:4px 16px;font-size:14px}.act_filtro_mobile[_ngcontent-%COMP%]{display:none;color:var(--color-c2);font-size:18px;align-items:center;justify-content:center;gap:10px;background:#fff;padding:20px;border-radius:10px}.container_filtro[_ngcontent-%COMP%]{position:relative}.cont_filtr_btns[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:20px;padding-left:10px;border-left:1px solid #DADADA}.s_futuros_proyectos[_ngcontent-%COMP%]{position:relative;width:100%;min-height:460px}.s_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/curva_sup.svg) no-repeat center;background-size:cover;background-position:center bottom;width:100%;height:100%;max-height:40px;top:-2px;left:0;right:0;z-index:2}.s_futuros_proyectos[_ngcontent-%COMP%]:after{content:"";position:absolute;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/curva_inf.svg) no-repeat center;background-size:cover;background-position:center top;width:100%;height:100%;max-height:40px;bottom:-2px;left:0;right:0;z-index:2}.c_futuros_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:stretch;position:relative;min-height:460px}.c_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:0;bottom:0;width:400px;height:300px;border-radius:100%;background:#366bec59;filter:blur(54px);margin:auto;mix-blend-mode:lighten}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/bg_futuros.jpg),linear-gradient(107.08deg,#4565b3,#2b478b 31.11%,#13203e);background-blend-mode:multiply;background-size:cover;background-position:center;padding:0 100px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;height:100%;position:relative;z-index:1;gap:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:before, .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{content:"";position:absolute;width:20px;height:70px;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/puntos.svg) no-repeat center;background-size:contain;left:3%;top:20%}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{right:3%;bottom:20%;top:initial;left:initial;transform:rotate(180deg)}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{letter-spacing:.365em;text-transform:uppercase;color:#ffed00;font-weight:600;font-size:20px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:900;color:#fff;font-size:40px;max-width:500px;line-height:1.1}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]{width:100%;height:100%}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{background:#182360;border:3px solid #FAFAFA;border-radius:100px;width:35px;height:35px}.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-button-prev[_ngcontent-%COMP%]:after{font-size:16px;font-weight:800;color:#fff}.swiper-pagination[_ngcontent-%COMP%]{bottom:60px!important}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{background-color:#fff;width:10px;border-radius:100px;height:10px;transition:.4s ease}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%]{width:20px}.swiper-button-prev[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]{left:25px}.swiper-button-next[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{right:25px}.s_proyectos_ejecutados[_ngcontent-%COMP%]{padding:30px 0}.cont_proyecto_logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:1px solid #E4E4E4;max-width:100px;cursor:pointer;position:relative;z-index:1;transition:.4s ease;border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:0;width:70px;height:60px;border-radius:100%;margin:auto;z-index:-1;background:#333663;opacity:0;filter:blur(26px);transition:.4s ease}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.2) translateY(0);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{opacity:.58;bottom:-20px}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{transform:scale(1.05) translateY(-15px);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before{opacity:.58;bottom:-10px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.holder[_ngcontent-%COMP%]{width:100%;max-width:750px;margin:0 auto;display:flex;justify-content:space-between;padding:20px 0}.holder[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.jp-previous, .jp-next)[_ngcontent-%COMP%]{display:none}.holder[_ngcontent-%COMP%]   .jp-previous[_ngcontent-%COMP%], .holder[_ngcontent-%COMP%]   .jp-next[_ngcontent-%COMP%]{color:#182360;font-weight:700;font-size:15px;cursor:pointer}.holder[_ngcontent-%COMP%]   .jp-previous.jp-disabled[_ngcontent-%COMP%], .holder[_ngcontent-%COMP%]   .jp-next.jp-disabled[_ngcontent-%COMP%]{opacity:.5}.cont_proyecto_eject[_ngcontent-%COMP%]{display:none;grid-template-columns:1fr 1fr;justify-content:center;width:100%;align-items:stretch;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/bg_pe.jpg),#0a102deb;border-radius:48px 48px 97px;background-blend-mode:multiply;background-size:cover;position:relative;margin:0 0 40px}.cont_proyecto_eject[_ngcontent-%COMP%]:before{content:"";position:absolute;left:10%;top:0;bottom:0;margin:auto;mix-blend-mode:lighten;max-width:400px;width:100%;max-height:300px;height:100%;border-radius:100%;background:#366bec59;filter:blur(54px);pointer-events:none}.cont_proyecto_eject.active[_ngcontent-%COMP%]{display:grid}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{position:relative;padding:40px 100px;z-index:1;display:flex;flex-direction:column;gap:20px;color:#fff;align-items:flex-start;justify-content:center}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;text-shadow:0px 3px 1px rgba(0,0,0,.17);letter-spacing:.62em;font-weight:400}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:52px;font-weight:800;text-transform:uppercase;background:linear-gradient(180deg,#fff,#fff,#9297b7);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0px 3px 1px rgba(0,0,0,.17)}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:20px;border-bottom:1px solid rgba(215,215,215,.6235294118);font-weight:700}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{height:100%}.info_datos_pe[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:4px;font-size:18px;font-weight:300}.info_datos_pe[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:700}.c_slider_pe[_ngcontent-%COMP%]{border-radius:100px 0 95px;overflow:hidden;max-height:380px}.c_slider_pe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover}.tabs_proyectos_eject[_ngcontent-%COMP%]{margin:0 0 40px}@media screen and (max-width: 1200px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:40px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:0 20px 0 80px;gap:20px}}@media screen and (max-width: 1050px){.c_proyecto_vivienda[_ngcontent-%COMP%]:after{bottom:initial;top:0}.act_filtro_mobile[_ngcontent-%COMP%]{display:flex}.filtro_proyectos[_ngcontent-%COMP%]{display:none;flex-direction:column;position:absolute;z-index:10;padding:20px;width:100%;top:70px;border-radius:10px}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:initial}.cont_filtr_btns[_ngcontent-%COMP%]{border:0}.cont_proyecto_eject[_ngcontent-%COMP%]{grid-template-columns:1fr}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{gap:10px}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{max-height:300px}}@media screen and (max-width: 768px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:20px;min-height:340px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:18px}.c_futuros_proyectos[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:initial}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:80px 20px 20px;min-height:380px}.swiperFuturos[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .swiperFuturos[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{top:13%}.cont_proyecto_eject[_ngcontent-%COMP%]:before{display:none}}@media screen and (max-width: 480px){.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}.card_p[_ngcontent-%COMP%]{box-shadow:0 4px 4px #0000004d}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:30px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 10px}}']});let e=c;return e})();export{$t as a};

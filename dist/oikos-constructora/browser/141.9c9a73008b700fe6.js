"use strict";(self.webpackChunkoikos_constructora=self.webpackChunkoikos_constructora||[]).push([[141],{5141:(b,l,o)=>{o.d(l,{L:()=>m});var d=o(5861),r=o(6895),p=o(9485),a=o(8879),u=o(2340),x=o(5425),_=o(2100),t=o(8256),f=o(221);function P(e,c){if(1&e&&(t.TgZ(0,"a",21),t._UZ(1,"img",22),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.Q6J("href",null==n?null:n.vista360,t.LSH)}}function O(e,c){if(1&e&&(t.TgZ(0,"a",21),t._UZ(1,"span",23),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.Q6J("href",null==n?null:n.url_waze,t.LSH)}}function C(e,c){if(1&e&&(t.TgZ(0,"a",24),t._UZ(1,"span",25),t._uU(2," contactar "),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.Q6J("href",null==n?null:n.api_wsp,t.LSH)}}const s=function(e){return{"background-color":e}},g=function(e){return["/proyecto",e]};function M(e,c){if(1&e&&(t.TgZ(0,"div",7)(1,"picture")(2,"span",8),t._uU(3),t.qZA(),t.TgZ(4,"div",9),t.YNc(5,P,2,1,"a",10),t.YNc(6,O,2,1,"a",10),t.qZA(),t.TgZ(7,"a",11),t._UZ(8,"img",12),t.qZA()(),t.TgZ(9,"h2",13)(10,"picture"),t._UZ(11,"img",14),t.qZA(),t.TgZ(12,"div"),t._uU(13),t.qZA()(),t.TgZ(14,"div",15)(15,"h3"),t._uU(16),t.qZA(),t.TgZ(17,"h4")(18,"span"),t._uU(19,"Desde"),t.qZA(),t._uU(20),t.qZA()(),t.TgZ(21,"div",16),t._UZ(22,"img",17),t.TgZ(23,"span"),t._uU(24),t.qZA()(),t.TgZ(25,"div",18),t.YNc(26,C,3,1,"a",19),t.TgZ(27,"a",20),t._uU(28,"ver proyecto"),t.qZA()()()),2&e){const n=t.oxw().$implicit,i=t.oxw();t.xp6(2),t.Q6J("ngStyle",t.VKq(19,s,null==n?null:n.color_secundario)),t.xp6(1),t.Oqu(null==n?null:n.estado_proyecto),t.xp6(2),t.Q6J("ngIf",null==n?null:n.vista360),t.xp6(1),t.Q6J("ngIf",null==n?null:n.url_waze),t.xp6(1),t.Q6J("routerLink",t.VKq(21,g,null==n?null:n.url_amigable)),t.xp6(1),t.Q6J("src",i.BASE_URL+(null==n?null:n.imagen_principal_proyecto),t.LSH)("alt",null==n?null:n.alt_principal)("title",null==n?null:n.title_principal),t.xp6(1),t.Q6J("ngStyle",t.VKq(23,s,null==n?null:n.color_primario)),t.xp6(2),t.Q6J("src",i.BASE_URL+(null==n?null:n.logo_proyecto),t.LSH)("alt",null==n?null:n.alt_logo)("title",null==n?null:n.title_logo),t.xp6(2),t.Oqu(null==n?null:n.titulo_proyecto),t.xp6(3),t.AsE("",null==n?null:n.zona_proyecto," / ",null==n?null:n.ubicacion_proyecto,""),t.xp6(4),t.hij("$",null==n?null:n.valor_proyecto_formato," "),t.xp6(4),t.Oqu(null==n?null:n.texto_adicional),t.xp6(2),t.Q6J("ngIf",null==n?null:n.api_wsp),t.xp6(1),t.Q6J("routerLink",t.VKq(25,g,null==n?null:n.url_amigable))}}function h(e,c){1&e&&t.YNc(0,M,29,27,"ng-template",6)}a.ZP.use([a.W_,a.tl]);let m=(()=>{class e{constructor(n){this.projectService=n,this.BASE_URL=u.N.base_url,this.config={slidesPerView:1,breakpoints:{1050:{slidesPerView:3},768:{slidesPerView:2},100:{slidesPerView:1}},navigation:{nextEl:".cnt_car_proy_dest .swiper-button-next",prevEl:".cnt_car_proy_dest .swiper-button-prev"}},this.projects=[]}ngOnInit(){this.getFeaturedProjects()}getFeaturedProjects(){var n=this;return(0,d.Z)(function*(){if(0==n.projects.length){const i=yield n.projectService.getFeaturedProjects();i&&(n.projects=i)}})()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f.Y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-slide-projects"]],inputs:{projects:"projects"},standalone:!0,features:[t.jDz],decls:6,vars:2,consts:[[1,"cnt_car_proy_dest"],[1,"swiper-container"],[3,"config"],[4,"ngFor","ngForOf"],[1,"swiper-button-next"],[1,"swiper-button-prev"],["swiperSlide",""],[1,"card_p"],[1,"tag_state",3,"ngStyle"],[1,"btns_icons"],["target","_blank","class","btn_icon",3,"href",4,"ngIf"],[3,"routerLink"],["width","350","height","219","defaultImg","",3,"src","alt","title"],[1,"name_proyecto",3,"ngStyle"],["width","87","height","87","defaultImg","",3,"src","alt","title"],[1,"datos_proyecto"],[1,"franja_p"],["width","20","height","20","src","assets/images/diseno/proyectos_vivienda/icono_proyecto.svg","alt",""],[1,"ctas_proyectos"],["target","_blank","class","btn_whatsapp",3,"href",4,"ngIf"],[1,"btn",3,"routerLink"],["target","_blank",1,"btn_icon",3,"href"],["src","assets/images/diseno/proyectos_vivienda/icon_360.svg","width","20","height","20"],[1,"fas","fa-map-marker-alt"],["target","_blank",1,"btn_whatsapp",3,"href"],[1,"fab","fa-whatsapp"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"swiper",2),t.YNc(3,h,1,0,null,3),t.qZA()(),t._UZ(4,"div",4)(5,"div",5),t.qZA()),2&n&&(t.xp6(2),t.Q6J("config",i.config),t.xp6(1),t.Q6J("ngForOf",i.projects))},dependencies:[r.ez,r.sg,r.O5,r.PC,p.kz,p.nF,p.YC,_.Bz,_.yS,x.n],styles:['.s_proyecto_vivienda[_ngcontent-%COMP%]{background:linear-gradient(180deg,rgba(233,237,247,0) 0%,#E8EBF1 72.6%),#FFFFFF;min-height:340px;position:relative}.s_proyecto_vivienda[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:-2px;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/curva_bg.svg) no-repeat;background-size:cover;background-position:center top;z-index:1;width:100%;height:100%;max-height:145px;pointer-events:none}.c_proyecto_vivienda[_ngcontent-%COMP%]{position:relative}.c_proyecto_vivienda[_ngcontent-%COMP%]:before, .c_proyecto_vivienda[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/puntos.svg) no-repeat center;width:20px;height:70px}.c_proyecto_vivienda[_ngcontent-%COMP%]:after{right:0;left:initial;top:initial;bottom:0;transform:rotate(180deg)}.filtro_proyectos[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;background:#FFFFFF;box-shadow:0 2px 20px -3px #33427740;border-radius:39px;padding:8px 20px;max-width:920px;margin:0 auto}.filtro_proyectos[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:none;border-radius:0;border:0;border-bottom:1px solid #DADADA;padding:5px;color:#666;font-size:14px;cursor:pointer}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:130px}.s_cards_proyectos[_ngcontent-%COMP%]{padding:0 0 40px;position:relative;z-index:1;transform:translateY(-80px)}.c_cards_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}.card_p[_ngcontent-%COMP%]{overflow:hidden;background:#FFFFFF;box-shadow:0 19px 41px -18px #23386273;border-radius:24px;display:inline-grid}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;max-height:219px;width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover}.card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%]{text-align:center;position:absolute;left:10px;top:10px;border-radius:100px;padding:8px 20px;color:#fff;font-weight:600;font-size:14px;z-index:1}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:10px;right:10px;border-radius:6px;background:var(--color-grad_azul_osc);width:80px;height:40px;z-index:1;overflow:hidden}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{position:absolute;left:0;right:0;height:80%;width:1px;background-color:#a5a5a5;margin:auto;z-index:2}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;display:flex;justify-content:center;align-items:center;width:26px;height:26px;transition:.3s ease;width:100%;height:100%;position:relative}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{content:"";background-color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px;color:#fff;display:inline-flex;justify-content:center;align-items:center}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{background-color:#2e3b85;padding:10px;display:grid;grid-template-columns:80px 1fr;align-items:center;gap:20px;position:relative;min-height:54px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-width:87px;border-radius:100px;border:5px solid #FFFFFF;background-color:#fff;position:absolute;width:90px;height:90px;box-shadow:0 5px 15px -5px #00000054;left:10px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{grid-column:2;color:#fff;font-size:15px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 20px;text-align:center;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:34px;font-weight:900;display:flex;align-items:center;gap:10px;text-align:center;justify-content:center}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;display:inline-block}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]{width:100%;background:linear-gradient(90deg,rgba(238,238,238,.5) 0%,#EEEEEE 48.96%,rgba(238,238,238,.5) 100%);display:flex;align-items:center;justify-content:center;gap:10px;padding:10px}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:center;padding:10px}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover{color:#060b29}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(180deg,#5FFC7B 0%,#26D044 100%);border-radius:6px;display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:22px;color:#fff;font-weight:500}.card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;justify-self:flex-end}.act_filtro_mobile[_ngcontent-%COMP%]{display:none;color:var(--color-c2);font-size:18px;align-items:center;justify-content:center;gap:10px;background:#FFF;padding:20px;border-radius:10px}.container_filtro[_ngcontent-%COMP%]{position:relative}.cont_filtr_btns[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:20px;padding-left:10px;border-left:1px solid #DADADA}.s_futuros_proyectos[_ngcontent-%COMP%]{position:relative;width:100%;min-height:460px}.s_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/curva_sup.svg) no-repeat center;background-size:cover;background-position:center bottom;width:100%;height:100%;max-height:40px;top:-2px;left:0;right:0;z-index:2}.s_futuros_proyectos[_ngcontent-%COMP%]:after{content:"";position:absolute;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/curva_inf.svg) no-repeat center;background-size:cover;background-position:center top;width:100%;height:100%;max-height:40px;bottom:-2px;left:0;right:0;z-index:2}.c_futuros_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;align-items:stretch;position:relative;min-height:460px}.c_futuros_proyectos[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:0;bottom:0;width:400px;height:300px;border-radius:100%;background:rgba(54,107,236,.35);filter:blur(54px);margin:auto;mix-blend-mode:lighten}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/bg_futuros.jpg),linear-gradient(107.08deg,#4565B3 0%,#2B478B 31.11%,#13203E 100%);background-blend-mode:multiply;background-size:cover;background-position:center;padding:0 100px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;height:100%;position:relative;z-index:1;gap:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:before, .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{content:"";position:absolute;width:20px;height:70px;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/puntos.svg) no-repeat center;background-size:contain;left:3%;top:20%}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after{right:3%;bottom:20%;top:initial;left:initial;transform:rotate(180deg)}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{letter-spacing:.365em;text-transform:uppercase;color:#ffed00;font-weight:600;font-size:20px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:900;color:#fff;font-size:40px;max-width:500px;line-height:1.1}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]{width:100%;height:100%}.c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{background:#182360;border:3px solid #FAFAFA;border-radius:100px;width:35px;height:35px}.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-button-prev[_ngcontent-%COMP%]:after{font-size:16px;font-weight:800;color:#fff}.swiper-pagination[_ngcontent-%COMP%]{bottom:60px!important}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%]{background-color:#fff;width:10px;border-radius:100px;height:10px;transition:.4s ease}.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%]{width:20px}.swiper-button-prev[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]{left:25px}.swiper-button-next[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{right:25px}.s_proyectos_ejecutados[_ngcontent-%COMP%]{padding:30px 0}.cont_proyecto_logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border:1px solid #E4E4E4;max-width:100px;cursor:pointer;position:relative;z-index:1;transition:.4s ease;border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:9px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:0;width:70px;height:60px;border-radius:100%;margin:auto;z-index:-1;background:#333663;opacity:0;filter:blur(26px);transition:.4s ease}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.2) translateY(0);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{opacity:.58;bottom:-20px}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{transform:scale(1.05) translateY(-15px);z-index:2}.cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before{opacity:.58;bottom:-10px}.cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.holder[_ngcontent-%COMP%]{width:100%;max-width:750px;margin:0 auto;display:flex;justify-content:space-between;padding:20px 0}.holder[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.jp-previous, .jp-next)[_ngcontent-%COMP%]{display:none}.holder[_ngcontent-%COMP%]   .jp-previous[_ngcontent-%COMP%], .holder[_ngcontent-%COMP%]   .jp-next[_ngcontent-%COMP%]{color:#182360;font-weight:700;font-size:15px;cursor:pointer}.holder[_ngcontent-%COMP%]   .jp-previous.jp-disabled[_ngcontent-%COMP%], .holder[_ngcontent-%COMP%]   .jp-next.jp-disabled[_ngcontent-%COMP%]{opacity:.5}.cont_proyecto_eject[_ngcontent-%COMP%]{display:none;grid-template-columns:1fr 1fr;justify-content:center;width:100%;align-items:stretch;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/proyectos_vivienda/bg_pe.jpg),rgba(10,16,45,.9215686275);border-radius:48px 48px 97px;background-blend-mode:multiply;background-size:cover;position:relative;margin:0 0 40px}.cont_proyecto_eject[_ngcontent-%COMP%]:before{content:"";position:absolute;left:10%;top:0;bottom:0;margin:auto;mix-blend-mode:lighten;max-width:400px;width:100%;max-height:300px;height:100%;border-radius:100%;background:rgba(54,107,236,.3490196078);filter:blur(54px);pointer-events:none}.cont_proyecto_eject.active[_ngcontent-%COMP%]{display:grid}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{position:relative;padding:40px 100px;z-index:1;display:flex;flex-direction:column;gap:20px;color:#fff;align-items:flex-start;justify-content:center}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px;text-shadow:0px 3px 1px rgba(0,0,0,.17);letter-spacing:.62em;font-weight:400}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:52px;font-weight:800;text-transform:uppercase;background:linear-gradient(180deg,#FFFFFF,#FFFFFF,#9297b7);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0px 3px 1px rgba(0,0,0,.17)}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:20px;border-bottom:1px solid rgba(215,215,215,.6235294118);font-weight:700}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{height:100%}.info_datos_pe[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:4px;font-size:18px;font-weight:300}.info_datos_pe[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:700}.c_slider_pe[_ngcontent-%COMP%]{border-radius:100px 0 95px;overflow:hidden;max-height:380px}.c_slider_pe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover}.tabs_proyectos_eject[_ngcontent-%COMP%]{margin:0 0 40px}@media screen and (max-width: 1200px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:40px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:0 20px 0 80px;gap:20px}}@media screen and (max-width: 1050px){.c_proyecto_vivienda[_ngcontent-%COMP%]:after{bottom:initial;top:0}.act_filtro_mobile[_ngcontent-%COMP%]{display:flex}.filtro_proyectos[_ngcontent-%COMP%]{display:none;flex-direction:column;position:absolute;z-index:10;padding:20px;width:100%;top:70px;border-radius:10px}.filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%]{max-width:initial}.cont_filtr_btns[_ngcontent-%COMP%]{border:0}.cont_proyecto_eject[_ngcontent-%COMP%]{grid-template-columns:1fr}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{gap:10px}.swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{max-height:300px}}@media screen and (max-width: 768px){.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]{padding:20px;min-height:340px}.cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%]{font-size:18px}.c_futuros_proyectos[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:initial}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]{padding:80px 20px 20px;min-height:380px}.swiperFuturos[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .swiperFuturos[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]{top:13%}.cont_proyecto_eject[_ngcontent-%COMP%]:before{display:none}}@media screen and (max-width: 480px){.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px}.c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}.card_p[_ngcontent-%COMP%]{box-shadow:0 4px 4px #0000004d}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:30px}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 10px}}']}),e})()}}]);
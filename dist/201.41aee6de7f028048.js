"use strict";(self.webpackChunkoikos_constructora=self.webpackChunkoikos_constructora||[]).push([[201],{7201:(gt,w,c)=>{c.r(w),c.d(w,{BlogModule:()=>tt});var d=c(6895),p=c(2100),l=c(5861),t=c(8256),f=c(3905),q=c(849);class v{constructor(_="",n="",e="",i="",a="",s="",r="",g="",h="",nt="",et="",ot="",it="",_t="",at="",rt="",ct="",st="",lt=new q.I){this.id=_,this.friendly_url=n,this.date_format=e,this.imagen=i,this.imagen_alt=a,this.imagen_title=s,this.summary=r,this.title=g,this.title_new=h,this.dynamic=nt,this.title_ant=et,this.title_sig=ot,this.url_ant=it,this.url_sig=_t,this.nombre_categoria=at,this.color_categoria=rt,this.link_cta=ct,this.texto_cta=st,this.proyecto=lt}}var P=c(2340),z=c(529);const u=P.N.base_url;let x=(()=>{class o{constructor(n){this._http=n,this.currentBlogs=[],this.currentNumPage=1,this.remainingPages=0,this.activeBlog=new v}getMainNew(){var n=this;return(0,l.Z)(function*(){return(0,f.z)(n._http.get(`${u}api/v1/getMainNews`)).then().catch(i=>(console.warn(i),!1))})()}getSecondMainNews(){var n=this;return(0,l.Z)(function*(){return(0,f.z)(n._http.get(`${u}api/v1/getMain3News`)).then().catch(i=>(console.warn(i),!1))})()}getMostRecentNews(n){var e=this;return(0,l.Z)(function*(){return(0,f.z)(e._http.get(`${u}api/v1/getNewsPages${n}`)).then().catch(a=>(console.warn(a),!1))})()}getInterestNews(){var n=this;return(0,l.Z)(function*(){return(0,f.z)(n._http.get(`${u}api/v1/getInterestNews`)).then().catch(i=>(console.warn(i),!1))})()}getDetailNewBySlug(n){var e=this;return(0,l.Z)(function*(){return(0,f.z)(e._http.get(`${u}api/v1/getDetailNews?slug=${n}`)).then().catch(a=>(console.warn(a),!1))})()}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(z.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var b=c(4130),O=c(8830),Z=c(5347),y=c(5480);let B=(()=>{class o{constructor(n,e,i,a,s){this.blogService=n,this.configServ=e,this.seoService=i,this.responsiveService=a,this.pageService=s}canActivate(n,e){var i=this;return(0,l.Z)(function*(){const a=n.params.numberPage;let s;if(s=i.responsiveService.isMobile?8:9,!a)return i.defaultRender(s);const r=Number(a);if(!r||r>5e3)return i.configServ.renderView404();const g=yield i.blogService.getMostRecentNews(`?num_pagina=${a}&limite=${s}`);if(g){if(g?.restantes<=0&&!g?.notas)return i.configServ.renderView404();i.blogService.currentNumPage=a,i.blogService.currentBlogs=g?.notas,i.blogService.remainingPages=g?.restantes;const h=yield i.pageService.getSeoContentPage("noticias-constructora");return h&&i.seoService.setUpMetaTags(h),!0}return i.configServ.renderView404()})()}defaultRender(n){var e=this;return(0,l.Z)(function*(){const i=yield e.blogService.getMostRecentNews(`?num_pagina=1&limite=${n}`),a=yield e.pageService.getSeoContentPage("noticias-constructora");return i&&(e.blogService.currentBlogs=i?.notas,e.blogService.remainingPages=i?.restantes),a&&e.seoService.setUpMetaTags(a),!0})()}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(x),t.LFG(b.E),t.LFG(O.v),t.LFG(Z.k),t.LFG(y.P))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),L=(()=>{class o{constructor(n,e,i){this.blogService=n,this.seoService=e,this.configServ=i}canActivate(n,e){var i=this;return(0,l.Z)(function*(){const a=n.params.slug,s=yield i.blogService.getDetailNewBySlug(a);if(s&&s?.length>0){const[r]=s;if(r)return i.seoService.setUpMetaTags(r),i.blogService.activeBlog=r,!0}return i.configServ.renderView404()})()}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(x),t.LFG(O.v),t.LFG(b.E))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var C=c(1299),k=c(5141),T=c(5425);function N(o,_){if(1&o&&(t.TgZ(0,"div",42),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.hij(" ",n.activeBlog.nombre_categoria," ")}}const F=function(o){return["/proyecto",o]};function J(o,_){if(1&o&&(t.TgZ(0,"a",49)(1,"div",50),t._uU(2," Ir al proyecto "),t.qZA()()),2&o){const n=t.oxw(2);t.Q6J("routerLink",t.VKq(1,F,n.activeBlog.proyecto.url_amigable))}}function I(o,_){if(1&o&&(t.TgZ(0,"div",43)(1,"div",44),t._UZ(2,"img",45),t.qZA(),t.TgZ(3,"div",46)(4,"div",47),t._uU(5," Conoce nuestro"),t._UZ(6,"br"),t.TgZ(7,"span"),t._uU(8),t.qZA()(),t.YNc(9,J,3,3,"a",48),t.qZA()()),2&o){const n=t.oxw();t.xp6(2),t.Q6J("src",n.BASE_URL+n.activeBlog.proyecto.imagen_principal_proyecto,t.LSH)("alt",n.activeBlog.proyecto.alt_principal)("title",n.activeBlog.proyecto.title_principal),t.xp6(6),t.hij("proyecto ubicado en ",n.activeBlog.proyecto.ubicacion_proyecto,""),t.xp6(1),t.Q6J("ngIf",n.activeBlog.proyecto.url_amigable)}}const M=function(o){return["/noticias-constructora",o]},A=function(o){return{scrolled:o}};function D(o,_){if(1&o&&(t.TgZ(0,"a",51)(1,"div",52),t._UZ(2,"img",53),t.qZA(),t.TgZ(3,"div",54)(4,"span",55),t._uU(5,"west"),t.qZA(),t._uU(6," Anterior "),t.qZA(),t.TgZ(7,"div",56),t._uU(8),t.qZA()()),2&o){const n=t.oxw();t.Q6J("routerLink",t.VKq(6,M,n.activeBlog.url_ant))("ngClass",t.VKq(8,A,n.scrollPaginationIsActive)),t.xp6(2),t.Q6J("src",n.BASE_URL+n.activeBlog.imagen,t.LSH)("alt",n.activeBlog.imagen_alt)("title",n.activeBlog.imagen_title),t.xp6(6),t.hij(" ",n.activeBlog.title_ant," ")}}function Q(o,_){if(1&o&&(t.TgZ(0,"a",57)(1,"div",52),t._UZ(2,"img",53),t.qZA(),t.TgZ(3,"div",54),t._uU(4," Siguiente "),t.TgZ(5,"span",55),t._uU(6,"east"),t.qZA()(),t.TgZ(7,"div",56),t._uU(8),t.qZA()()),2&o){const n=t.oxw();t.Q6J("routerLink",t.VKq(6,M,n.activeBlog.url_sig))("ngClass",t.VKq(8,A,n.scrollPaginationIsActive)),t.xp6(2),t.Q6J("src",n.BASE_URL+n.activeBlog.imagen,t.LSH)("alt",n.activeBlog.imagen_alt)("title",n.activeBlog.imagen_title),t.xp6(6),t.hij(" ",n.activeBlog.title_sig," ")}}function j(o,_){if(1&o&&(t.TgZ(0,"a",58)(1,"div",59),t._UZ(2,"img",53),t.qZA(),t.TgZ(3,"div",60)(4,"div",61),t._uU(5),t.qZA(),t.TgZ(6,"div",62),t._uU(7),t.qZA(),t._UZ(8,"div",63),t.TgZ(9,"div",64)(10,"span",65),t._uU(11,"arrow_right_alt"),t.qZA()()()()),2&o){const n=_.$implicit,e=t.oxw();t.Q6J("routerLink",t.VKq(7,M,null==n?null:n.friendly_url)),t.xp6(2),t.Q6J("src",e.BASE_URL+(null==n?null:n.imagen),t.LSH)("alt",null==n?null:n.imagen_alt)("title",null==n?null:n.imagen_title),t.xp6(3),t.Oqu(null==n?null:n.date_format),t.xp6(2),t.hij(" ",null==n?null:n.title_new," "),t.xp6(1),t.Q6J("innerHtml",null==n?null:n.summary,t.oJD)}}let E=(()=>{class o{constructor(n,e,i){var a=this;this.blogService=n,this.router=e,this.configServ=i,this.BASE_URL=P.N.imagenes_url,this.activeBlog=new v,this.recentBlogs=[],this.scrollPaginationIsActive=!1,this.routerListener=this.router.events.subscribe(function(){var s=(0,l.Z)(function*(r){r instanceof p.m2&&(a.activeBlog=a.blogService.activeBlog,a.configServ.goUpPage())});return function(r){return s.apply(this,arguments)}}())}ngOnInit(){this.getInterestNews()}getInterestNews(){var n=this;return(0,l.Z)(function*(){const e=yield n.blogService.getMostRecentNews("?num_pagina=1&limite=3");e&&(n.recentBlogs=e?.notas)})()}shareBy(n){let e="";const i=window.location.href;switch(n){case"fb":e=`https://www.facebook.com/sharer/sharer.php?u=${i}`;break;case"twitter":e=`https://twitter.com/intent/tweet?text=${i}`;break;case"linkedln":e=`https://www.linkedin.com/sharing/share-offsite/?url=${i}`}window.open(e,"_blank")}configScrollPagination(){if($(window).width()>1200){var n=$(window).scrollTop();this.scrollPaginationIsActive=n>=420}}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(x),t.Y36(p.F0),t.Y36(b.E))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-detail"]],hostBindings:function(n,e){1&n&&t.NdJ("scroll",function(a){return e.configScrollPagination(a)},!1,t.Jf7)},decls:60,vars:14,consts:[[1,""],[1,"s_banner_not_int"],[1,"img_dest_not_int"],["defaultImg","","width","1440","height","420",3,"src","alt","title"],[1,"cnt_central"],["colorTxt","white",2,"color","#fff",3,"crumbTitle"],[1,"cnt_inf_h_nota_int"],["class","cat_not_int",4,"ngIf"],[1,"h_not_int"],[1,"row_fecha_redes"],[1,"fecha_not_int"],[1,"cnt_compartit_h_not_int"],[1,"etq_compartir_h_not_int"],[1,"cnt_redes_h_not_int"],[1,"red_h","ic_fb",3,"click"],[1,"red_h","ic_tw",3,"click"],[1,"red_h","ic_in",3,"click"],[1,"s_cuerpo_not_int"],[1,"cnt_nota_int"],[1,"cnt_top_nota_int"],[1,"col_compartir_nota"],[1,"cnt_redes_nota"],[1,"red_nota","ic_fb",3,"click"],[1,"red_nota","ic_tw",3,"click"],[1,"red_nota","ic_in",3,"click"],[1,"col_nota_int"],[1,"txt_nota_int",3,"innerHtml"],[1,"row_banner_not_int"],["class","cnt_banner_proy_not_int",4,"ngIf"],[1,"row_cta"],["target","_blank",1,"btn",3,"href"],[1,"cnt_ant_sig_not_int"],["class","bnt_ant_sig_nota nota_ant",3,"routerLink","ngClass",4,"ngIf"],["class","bnt_ant_sig_nota nota_sig",3,"routerLink","ngClass",4,"ngIf"],[1,"cnt_not_interes_int"],[1,"h_not_interes_int"],[1,"cnt_cards_not_interes_int"],["class","card_not_list",3,"routerLink",4,"ngFor","ngForOf"],["routerLink","/noticias-constructora",1,"btn"],[1,"s_carr_proy"],[1,"bg_round"],[1,"title_section","al_center"],[1,"cat_not_int"],[1,"cnt_banner_proy_not_int"],[1,"img_banner_proy_not_int"],["defaultImg","","width","300","height","121","alt","",3,"src","alt","title"],[1,"inf_banner_proy_not_int"],[1,"h_ban_proy_not_int"],[3,"routerLink",4,"ngIf"],[3,"routerLink"],[1,"btn"],[1,"bnt_ant_sig_nota","nota_ant",3,"routerLink","ngClass"],[1,"img_btn_ant_sig"],["defaultImg","",3,"src","alt","title"],[1,"cnt_h_ant_sig_not"],[1,"material-icons-round","ic_ant_sig"],[1,"txt_ant_sig_not"],[1,"bnt_ant_sig_nota","nota_sig",3,"routerLink","ngClass"],[1,"card_not_list",3,"routerLink"],[1,"img_card_not_int"],[1,"cnt_inf_card_not"],[1,"fecha_nota_card_int"],[1,"h_otra_not_dest"],[1,"txt_otra_not_dest",3,"innerHtml"],[1,"row_ic_arrow"],[1,"material-icons","ic_arrow_otra_nota_int"]],template:function(n,e){1&n&&(t.TgZ(0,"body",0)(1,"section",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4),t._UZ(5,"app-breadcrumb",5),t.TgZ(6,"div",6),t.YNc(7,N,2,1,"div",7),t.TgZ(8,"div",8),t._uU(9),t.qZA(),t.TgZ(10,"div",9)(11,"div",10)(12,"b"),t._uU(13,"Publicado:"),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"span"),t._uU(16,"\u2022"),t.qZA(),t.TgZ(17,"div",11)(18,"div",12),t._uU(19,"Compartir"),t.qZA(),t.TgZ(20,"div",13)(21,"div",14),t.NdJ("click",function(){return e.shareBy("fb")}),t.qZA(),t.TgZ(22,"div",15),t.NdJ("click",function(){return e.shareBy("twitter")}),t.qZA(),t.TgZ(23,"div",16),t.NdJ("click",function(){return e.shareBy("linkedln")}),t.qZA()()()()()()(),t.TgZ(24,"section",17)(25,"div",4)(26,"div",18)(27,"div",19)(28,"div",20)(29,"div",21)(30,"div",22),t.NdJ("click",function(){return e.shareBy("fb")}),t.qZA(),t.TgZ(31,"div",23),t.NdJ("click",function(){return e.shareBy("twitter")}),t.qZA(),t.TgZ(32,"div",24),t.NdJ("click",function(){return e.shareBy("linkedln")}),t.qZA()()(),t.TgZ(33,"div",25),t._UZ(34,"div",26),t.TgZ(35,"div",27),t.YNc(36,I,10,5,"div",28),t.qZA(),t.TgZ(37,"div",29)(38,"a",30),t._uU(39),t.qZA()()()(),t.TgZ(40,"div",31),t.YNc(41,D,9,10,"a",32),t.YNc(42,Q,9,10,"a",33),t.qZA(),t.TgZ(43,"div",34)(44,"div",35),t._uU(45," Post recientes "),t.qZA(),t.TgZ(46,"div",36),t.YNc(47,j,12,9,"a",37),t.qZA(),t.TgZ(48,"div",29)(49,"a",38),t._uU(50," Ver m\xe1s "),t.qZA()()()()()(),t.TgZ(51,"section",39)(52,"span",40),t._UZ(53,"span"),t.qZA(),t.TgZ(54,"div",4)(55,"h2",41)(56,"span"),t._uU(57,"Proyectos "),t.qZA(),t._uU(58," en construcci\xf3n "),t.qZA(),t._UZ(59,"app-slide-projects"),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("src",e.BASE_URL+e.activeBlog.imagen,t.LSH)("alt",e.activeBlog.imagen_alt)("title",e.activeBlog.imagen_title),t.xp6(2),t.Q6J("crumbTitle",e.activeBlog.title_new),t.xp6(2),t.Q6J("ngIf",e.activeBlog.nombre_categoria),t.xp6(2),t.hij(" ",e.activeBlog.title_new," "),t.xp6(5),t.hij(" ",e.activeBlog.date_format," "),t.xp6(20),t.Q6J("innerHtml",e.activeBlog.dynamic,t.oJD),t.xp6(2),t.Q6J("ngIf",e.activeBlog.proyecto),t.xp6(2),t.Q6J("href",e.activeBlog.link_cta,t.LSH),t.xp6(1),t.hij(" ",e.activeBlog.texto_cta," "),t.xp6(2),t.Q6J("ngIf",e.activeBlog.url_ant),t.xp6(1),t.Q6J("ngIf",e.activeBlog.url_sig),t.xp6(5),t.Q6J("ngForOf",e.recentBlogs))},dependencies:[d.mk,d.sg,d.O5,p.yS,C.L,k.L,T.n],styles:['.s_banner_not_int[_ngcontent-%COMP%]{width:100%;height:420px;position:relative;overflow:hidden;border-radius:0 0 30px 30px}.s_banner_not_int[_ngcontent-%COMP%]   .miga[_ngcontent-%COMP%]{position:relative;z-index:2}.s_banner_not_int[_ngcontent-%COMP%]:before, .s_banner_not_int[_ngcontent-%COMP%]:after{content:"";width:70px;height:20px;position:absolute;z-index:2;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/nueva/images/diseno/noticias/dots.svg) no-repeat center}.s_banner_not_int[_ngcontent-%COMP%]:before{top:40px;left:40px}.s_banner_not_int[_ngcontent-%COMP%]:after{bottom:40px;right:40px}.s_banner_not_int[_ngcontent-%COMP%]   .cnt_central[_ngcontent-%COMP%]{height:100%}.img_dest_not_int[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0}.img_dest_not_int[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;object-fit:cover}.img_dest_not_int[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(0deg,rgba(46,47,78,.67),rgba(46,47,78,.67));mix-blend-mode:multiply}.cnt_inf_h_nota_int[_ngcontent-%COMP%]{width:100%;height:80%;max-width:750px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;margin:auto}.cat_not_int[_ngcontent-%COMP%]{display:flex;gap:6px;align-items:center;background:#fff;border-radius:4px;font-size:15px;font-weight:700;padding:4px 8px 3px}.cat_not_int[_ngcontent-%COMP%]:before{content:"";width:0;height:0;display:block;border-left:8px solid var(--c_pri);border-top:5px solid transparent;border-bottom:5px solid transparent}.h_not_int[_ngcontent-%COMP%]{width:100%;max-width:750px;color:#fff;font-size:54px;font-weight:900;line-height:100%;text-align:left;padding:12px 0}.row_fecha_redes[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;gap:16px;color:#fff}.fecha_not_int[_ngcontent-%COMP%]{font-size:15px;color:#fff}.cnt_compartit_h_not_int[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.etq_compartir_h_not_int[_ngcontent-%COMP%]{font-size:15px;font-weight:700;color:#fff}.cnt_redes_h_not_int[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px}.red_h[_ngcontent-%COMP%]{width:22px;height:22px;line-height:22px;text-align:center;border-radius:2px;font-size:12px;color:#fff;font-family:icomoon;cursor:pointer;transition:all .3s}.red_h[_ngcontent-%COMP%]:hover{background:#fff;color:var(--c_pri)}.s_cuerpo_not_int[_ngcontent-%COMP%]{width:100%;position:relative;padding:40px 0}.s_cuerpo_not_int[_ngcontent-%COMP%]   .cnt_central[_ngcontent-%COMP%]{position:initial}.cnt_nota_int[_ngcontent-%COMP%]{width:100%;max-width:847px;margin:auto}.cnt_top_nota_int[_ngcontent-%COMP%]{width:100%;display:flex;gap:20px}.col_compartir_nota[_ngcontent-%COMP%]{width:90px;min-width:90px;position:relative}.cnt_redes_nota[_ngcontent-%COMP%]{background:#FFFFFF;box-shadow:0 8px 17px -4px #98a8e3;border-radius:4px;position:sticky;top:130px;width:38px;overflow:hidden;text-align:center}.red_nota[_ngcontent-%COMP%]{width:38px;height:38px;line-height:38px;font-family:icomoon;color:var(--c_pri);cursor:pointer}.red_nota[_ngcontent-%COMP%]:hover{background:var(--c_pri);color:#fff}.col_nota_int[_ngcontent-%COMP%]{flex-grow:1;text-align:left}.txt_nota_int[_ngcontent-%COMP%]{width:100%;text-align:left;font-size:16px;line-height:140%}.txt_nota_int[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-c2)}.txt_nota_int[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:24px;box-sizing:border-box}.txt_nota_int[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;font-weight:900;padding:12px 0;color:var(--color-c2)}.txt_nota_int[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;color:var(--color-c2);font-weight:900;padding:8px 0}.row_cta[_ngcontent-%COMP%]{width:100%;text-align:center;padding:48px 0}.cnt_not_interes_int[_ngcontent-%COMP%]{width:100%;padding:32px 0;border-top:1px solid #ccc;display:flex;flex-direction:column;gap:32px}.cnt_ant_sig_not_int[_ngcontent-%COMP%]{width:100%}.bnt_ant_sig_nota[_ngcontent-%COMP%]{background:#FFFFFF;box-shadow:0 4px 20px #00000040;box-sizing:border-box;padding:12px 20px;position:absolute;top:40px;width:225px;min-height:110px;overflow:hidden;z-index:1}.bnt_ant_sig_nota.scrolled[_ngcontent-%COMP%]{position:fixed;top:130px}.bnt_ant_sig_nota[_ngcontent-%COMP%]:hover{background:var(--c_pri)}.bnt_ant_sig_nota[_ngcontent-%COMP%]:hover   .img_btn_ant_sig[_ngcontent-%COMP%]{opacity:.08}.bnt_ant_sig_nota[_ngcontent-%COMP%]:hover   .cnt_h_ant_sig_not[_ngcontent-%COMP%], .bnt_ant_sig_nota[_ngcontent-%COMP%]:hover   .txt_ant_sig_not[_ngcontent-%COMP%]{color:#fff}.bnt_ant_sig_nota[_ngcontent-%COMP%]:hover   .ic_ant_sig[_ngcontent-%COMP%]{max-width:100px;color:#fff}.bnt_ant_sig_nota.nota_ant[_ngcontent-%COMP%], .bnt_ant_sig_nota.nota_sig[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.bnt_ant_sig_nota.nota_ant[_ngcontent-%COMP%]{border-radius:0 12px 12px 0;text-align:left;left:0}.bnt_ant_sig_nota.nota_ant[_ngcontent-%COMP%]:hover   .ic_ant_sig[_ngcontent-%COMP%]{padding-right:8px}.bnt_ant_sig_nota.nota_sig[_ngcontent-%COMP%]{border-radius:12px 0 0 12px;text-align:right;right:0}.bnt_ant_sig_nota.nota_sig[_ngcontent-%COMP%]:hover   .ic_ant_sig[_ngcontent-%COMP%]{padding-left:8px}.bnt_ant_sig_nota.nota_sig[_ngcontent-%COMP%]   .cnt_h_ant_sig_not[_ngcontent-%COMP%]{justify-content:flex-end}.img_btn_ant_sig[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:-1;opacity:0;transition:all .3s}.img_btn_ant_sig[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.cnt_h_ant_sig_not[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;font-size:16px;font-weight:700;color:#282828}.ic_ant_sig[_ngcontent-%COMP%]{max-width:0;overflow:hidden;display:block;box-sizing:border-box;font-size:18px!important}.txt_ant_sig_not[_ngcontent-%COMP%]{width:100%;font-size:14px;line-height:120%;color:#282828}.row_banner_not_int[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:48px 0}.cnt_banner_proy_not_int[_ngcontent-%COMP%]{width:100%;max-width:600px;display:flex;overflow:hidden;background:linear-gradient(180deg,rgba(226,229,247,.37) 0%,#FFFFFF 100%);box-shadow:0 23px 23px -17px #98a8e361;border-radius:8px;position:relative}.cnt_banner_proy_not_int[_ngcontent-%COMP%]:before, .cnt_banner_proy_not_int[_ngcontent-%COMP%]:after{content:"";width:12px;height:42px;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/nueva/images/diseno/noticias/dots_sm.svg) center;position:absolute}.cnt_banner_proy_not_int[_ngcontent-%COMP%]:before{bottom:16px;left:16px}.cnt_banner_proy_not_int[_ngcontent-%COMP%]:after{top:16px;right:16px}.img_banner_proy_not_int[_ngcontent-%COMP%]{width:50%}.img_banner_proy_not_int[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.inf_banner_proy_not_int[_ngcontent-%COMP%]{width:50%;box-sizing:border-box;padding:24px 48px;display:flex;flex-direction:column;gap:12px}.inf_banner_proy_not_int[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{text-align:center;justify-content:center}.h_ban_proy_not_int[_ngcontent-%COMP%]{width:100%;font-size:18px;color:var(--color-c2)}.h_ban_proy_not_int[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:900;font-size:24px}.h_not_interes_int[_ngcontent-%COMP%]{width:100%;font-size:32px;color:var(--color-c2);font-weight:32px;font-weight:900;padding:24px 0}.cnt_cards_not_interes_int[_ngcontent-%COMP%]{display:flex;width:100%;gap:24px}.card_not_list[_ngcontent-%COMP%]{width:32%;max-width:305px;overflow:hidden;border-radius:20px;display:flex;flex-direction:column;transition:all .3s}.card_not_list[_ngcontent-%COMP%]:hover{box-shadow:0 14px 15px -9px #98a8e36b}.card_not_list[_ngcontent-%COMP%]:hover   .ic_arrow_otra_nota_int[_ngcontent-%COMP%]{transform:translateY(-8px);opacity:1}.img_card_not_int[_ngcontent-%COMP%]{width:100%;height:143px;overflow:hidden}.img_card_not_int[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover}.cnt_inf_card_not[_ngcontent-%COMP%]{width:100%;flex-grow:1;padding:16px 20px 0;display:flex;flex-direction:column;gap:8px;background:#fff;border-radius:20px 20px 0 0;margin-top:-20px}.fecha_nota_card_int[_ngcontent-%COMP%]{color:#b3b3b3;font-size:13px}.h_otra_not_dest[_ngcontent-%COMP%]{color:var(--color-c2);font-size:16px;font-weight:700;line-height:100%}.txt_otra_not_dest[_ngcontent-%COMP%]{color:#000;font-size:15px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.row_ic_arrow[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end}.ic_arrow_otra_nota_int[_ngcontent-%COMP%]{color:#fdb718;transform:translate(-20px,-8px);opacity:0;transition:all .5s}.cnt_not_interes_int[_ngcontent-%COMP%]   .row_cta[_ngcontent-%COMP%]{padding:16px 0}@media screen and (max-width: 1300px){.bnt_ant_sig_nota[_ngcontent-%COMP%]{width:175px}}@media screen and (max-width: 1200px){.cnt_ant_sig_not_int[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:24px 0;border-top:1px solid #ccc}.bnt_ant_sig_nota[_ngcontent-%COMP%]{position:relative;top:inherit;left:inherit;right:inherit;width:48%;min-height:inherit;max-width:400px;box-shadow:none;border-radius:none;background:transparent}.cnt_h_ant_sig_not[_ngcontent-%COMP%]{gap:12px}.ic_ant_sig[_ngcontent-%COMP%]{max-width:100px}}@media screen and (max-width: 1050px){.h_not_int[_ngcontent-%COMP%]{font-size:40px}}@media screen and (max-width: 768px){.cnt_nota_int[_ngcontent-%COMP%], .cnt_not_interes_int[_ngcontent-%COMP%]{padding:0}.col_compartir_nota[_ngcontent-%COMP%]{min-width:inherit}.h_nota_int[_ngcontent-%COMP%]{font-size:30px}.txt_nota_int[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;line-height:120%}.txt_nota_int[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px}.row_banner_not_int[_ngcontent-%COMP%]{padding:16px 0}.inf_banner_proy_not_int[_ngcontent-%COMP%]{padding:12px 24px}.cnt_cards_not_interes_int[_ngcontent-%COMP%]{flex-direction:column}.card_not_list[_ngcontent-%COMP%]{width:100%;max-width:inherit;flex-direction:row}.img_card_not_int[_ngcontent-%COMP%]{height:auto}.cnt_inf_card_not[_ngcontent-%COMP%]{margin:0;justify-content:center;border-radius:0}}@media screen and (max-width: 480px){.cnt_inf_h_nota_int[_ngcontent-%COMP%]{gap:12px;padding-left:32px}.h_not_int[_ngcontent-%COMP%]{font-size:24px}.row_fecha_redes[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:4px}.row_fecha_redes[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:none}.cnt_redes_nota[_ngcontent-%COMP%]{position:fixed;top:120px;left:0}.row_fecha_autor[_ngcontent-%COMP%]   .fecha_nota[_ngcontent-%COMP%]{border:none}.txt_nota_int[_ngcontent-%COMP%]{padding-top:0}.cnt_cards_not_interes_int[_ngcontent-%COMP%]{flex-direction:column}.txt_ant_sig_not[_ngcontent-%COMP%]{display:none}.cnt_banner_proy_not_int[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{line-height:16px;font-size:13px;padding:6px 12px;height:auto}.h_ban_proy_not_int[_ngcontent-%COMP%]{font-size:14px}.h_ban_proy_not_int[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px}}']}),o})();function R(o,_){if(1&o&&(t.TgZ(0,"div",34),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.hij(" ",n.mainBlog.nombre_categoria," ")}}function Y(o,_){if(1&o&&(t.TgZ(0,"div",34),t._uU(1),t.qZA()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==n?null:n.nombre_categoria," ")}}const m=function(o){return["/noticias-constructora",o]};function H(o,_){if(1&o&&(t.TgZ(0,"a",35)(1,"div",8),t._UZ(2,"img",36),t.qZA(),t.TgZ(3,"div",10),t.YNc(4,Y,2,1,"div",11),t.TgZ(5,"div",12)(6,"span",13),t._uU(7,"access_time"),t.qZA(),t.TgZ(8,"div",14),t._uU(9),t.qZA()(),t._UZ(10,"div",37),t.qZA()()),2&o){const n=_.$implicit,e=t.oxw();t.Q6J("routerLink",t.VKq(7,m,null==n?null:n.friendly_url)),t.xp6(2),t.Q6J("src",e.BASE_URL+(null==n?null:n.imagen),t.LSH)("alt",null==n?null:n.imagen_alt)("title",null==n?null:n.imagen_title),t.xp6(2),t.Q6J("ngIf",n.nombre_categoria),t.xp6(5),t.Oqu(null==n?null:n.date_format),t.xp6(1),t.Q6J("innerHtml",null==n?null:n.title,t.oJD)}}function V(o,_){if(1&o&&(t.TgZ(0,"div",44),t._uU(1),t.qZA()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==n?null:n.nombre_categoria," ")}}function G(o,_){if(1&o&&(t.TgZ(0,"a",38)(1,"div",39),t._UZ(2,"img",40),t.qZA(),t.YNc(3,V,2,1,"div",41),t.TgZ(4,"div",42)(5,"div",12)(6,"span",13),t._uU(7,"access_time"),t.qZA(),t.TgZ(8,"div",14),t._uU(9),t.qZA()(),t.TgZ(10,"div",43),t._uU(11),t.qZA()()()),2&o){const n=_.$implicit,e=t.oxw();t.Q6J("routerLink",t.VKq(7,m,null==n?null:n.friendly_url)),t.xp6(2),t.Q6J("src",e.BASE_URL+(null==n?null:n.imagen),t.LSH)("alt",null==n?null:n.imagen_alt)("title",null==n?null:n.imagen_title),t.xp6(1),t.Q6J("ngIf",n.nombre_categoria),t.xp6(6),t.Oqu(null==n?null:n.date_format),t.xp6(2),t.Oqu(null==n?null:n.title)}}function K(o,_){if(1&o&&(t.TgZ(0,"a",45)(1,"div",12)(2,"span",13),t._uU(3,"access_time"),t.qZA(),t.TgZ(4,"div",14),t._uU(5),t.qZA()(),t._UZ(6,"div",46),t.qZA()),2&o){const n=_.$implicit;t.Q6J("routerLink",t.VKq(3,m,null==n?null:n.friendly_url)),t.xp6(5),t.Oqu(null==n?null:n.date_format),t.xp6(1),t.Q6J("innerHtml",null==n?null:n.title,t.oJD)}}const S=function(o){return{"jp-disabled":o}};let U=(()=>{class o{constructor(n,e,i,a,s){var r=this;this.blogService=n,this.router=e,this.responsiveService=i,this.doc=a,this.pageService=s,this.BASE_URL=P.N.imagenes_url,this.oninitIsExecute=!1,this.numPage=1,this.remainingPages=0,this.mainBlog=new v,this.secondMainNews=[],this.interestBlogs=[],this.blogs=[],this.spliceRoutes=[],this.routerListener=this.router.events.subscribe(function(){var g=(0,l.Z)(function*(h){h instanceof p.m2&&(e.url.includes("pagina/")&&(r.spliceRoutes=[2,4]),r.blogs=r.blogService.currentBlogs,r.numPage=r.blogService.currentNumPage,r.remainingPages=r.blogService.remainingPages,r.oninitIsExecute&&r.doc.getElementById("pageUp")?.scrollIntoView())});return function(h){return g.apply(this,arguments)}}())}ngOnInit(){this.init(),this.oninitIsExecute=!0,this.pageService.closeNav()}init(){var n=this;return(0,l.Z)(function*(){const e=[()=>n.getMainNew(),()=>n.getSecondMainNews(),()=>n.getInterestNews()];for(const i of e)yield i()})()}getMainNew(){var n=this;return(0,l.Z)(function*(){const e=yield n.blogService.getMainNew();e&&(n.mainBlog=e)})()}getSecondMainNews(){var n=this;return(0,l.Z)(function*(){const e=yield n.blogService.getSecondMainNews();e&&(n.secondMainNews=e)})()}getInterestNews(){var n=this;return(0,l.Z)(function*(){const e=yield n.blogService.getInterestNews();e&&(n.interestBlogs=e)})()}nextPage(){this.remainingPages>0&&(this.numPage++,this.router.navigate(["/noticias-constructora/pagina/",this.numPage]))}beforePage(){this.numPage>1&&(this.numPage--,this.router.navigate(["/noticias-constructora/pagina/",this.numPage]))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(x),t.Y36(p.F0),t.Y36(Z.k),t.Y36(d.K0),t.Y36(y.P))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-page"]],decls:43,vars:20,consts:[[1,""],[1,"cnt_gen_noticias"],[1,"bg_round"],[1,"cnt_central"],[3,"spliceRoutes"],[1,"row_h_gen_noticias"],[1,"cnt_tob_not_dest"],[1,"cnt_not_dest",3,"routerLink"],[1,"img_not_dest"],["defaultImg","","width","616","height","375",3,"src","alt","title"],[1,"cnt_inf_not_dest"],["class","cat_not",4,"ngIf"],[1,"row_fecha"],[1,"material-icons","ic_fech_not"],[1,"fecha_nota"],[1,"h_not_dest"],[1,"txt_not_dest",3,"innerHtml"],[1,"col_top_dest"],["class","cnt_otra_not_dest",3,"routerLink",4,"ngFor","ngForOf"],["id","pageUp",1,"cnt_bot_not"],[1,"col_gen_list_not"],[1,"row_h_list_not"],[1,"h_not_recientes"],[1,"sep_list_not"],[1,"paginador_list_not"],[1,"jp-previous",3,"ngClass","click"],[1,"jp-next",3,"ngClass","click"],["id","list_container",1,"list_not"],["class","itm_list_not",3,"routerLink",4,"ngFor","ngForOf"],[1,"col_post_dest"],[1,"ctn_lat_post_dets"],[1,"h_post_dest"],[1,"list_post_dest"],["class","itm_post_dest",3,"routerLink",4,"ngFor","ngForOf"],[1,"cat_not"],[1,"cnt_otra_not_dest",3,"routerLink"],["defaultImg","","width","282","height","178",3,"src","alt","title"],[1,"h_not_dest",3,"innerHtml"],[1,"itm_list_not",3,"routerLink"],[1,"img_not_list"],["defaultImg","",3,"src","alt","title"],["class","catedoria",4,"ngIf"],[1,"cnt_inf_nota_list"],[1,"txt_not_list"],[1,"catedoria"],[1,"itm_post_dest",3,"routerLink"],[1,"txt_not_list",3,"innerHtml"]],template:function(n,e){1&n&&(t.TgZ(0,"body",0)(1,"div",1)(2,"span",2),t._UZ(3,"span"),t.qZA(),t.TgZ(4,"div",3),t._UZ(5,"app-breadcrumb",4),t.TgZ(6,"div",5),t._uU(7," Noticias "),t.qZA(),t.TgZ(8,"div",6)(9,"a",7)(10,"div",8),t._UZ(11,"img",9),t.qZA(),t.TgZ(12,"div",10),t.YNc(13,R,2,1,"div",11),t.TgZ(14,"div",12)(15,"span",13),t._uU(16,"access_time"),t.qZA(),t.TgZ(17,"div",14),t._uU(18),t.qZA()(),t.TgZ(19,"div",15),t._uU(20),t.qZA(),t._UZ(21,"div",16),t.qZA()(),t.TgZ(22,"div",17),t.YNc(23,H,11,9,"a",18),t.qZA()(),t.TgZ(24,"div",19)(25,"div",20)(26,"div",21)(27,"div",22),t._uU(28," Post recientes "),t.qZA(),t._UZ(29,"span",23),t.TgZ(30,"div",24)(31,"a",25),t.NdJ("click",function(){return e.beforePage()}),t._uU(32," \u2190 "),t.qZA(),t.TgZ(33,"a",26),t.NdJ("click",function(){return e.nextPage()}),t._uU(34," \u2192 "),t.qZA()()(),t.TgZ(35,"div",27),t.YNc(36,G,12,9,"a",28),t.qZA()(),t.TgZ(37,"div",29)(38,"div",30)(39,"div",31),t._uU(40," Posts descatados "),t.qZA(),t.TgZ(41,"div",32),t.YNc(42,K,7,5,"a",33),t.qZA()()()()()()()),2&n&&(t.xp6(5),t.Q6J("spliceRoutes",e.spliceRoutes),t.xp6(4),t.Q6J("routerLink",t.VKq(14,m,e.mainBlog.friendly_url)),t.xp6(2),t.Q6J("src",e.BASE_URL+e.mainBlog.imagen,t.LSH)("alt",e.mainBlog.imagen_alt)("title",e.mainBlog.imagen_title),t.xp6(2),t.Q6J("ngIf",e.mainBlog.nombre_categoria),t.xp6(5),t.Oqu(e.mainBlog.date_format),t.xp6(2),t.hij(" ",e.mainBlog.title," "),t.xp6(1),t.Q6J("innerHtml",e.mainBlog.summary,t.oJD),t.xp6(2),t.Q6J("ngForOf",e.secondMainNews),t.xp6(8),t.Q6J("ngClass",t.VKq(16,S,e.numPage<=1)),t.xp6(2),t.Q6J("ngClass",t.VKq(18,S,e.remainingPages<0)),t.xp6(3),t.Q6J("ngForOf",e.blogs),t.xp6(6),t.Q6J("ngForOf",e.interestBlogs))},dependencies:[d.mk,d.sg,d.O5,p.yS,C.L,T.n],styles:['.cnt_gen_noticias[_ngcontent-%COMP%]{width:100%;position:relative}.row_h_gen_noticias[_ngcontent-%COMP%]{width:100%;display:flex;gap:32px;color:var(--color-c2);font-size:42px;font-weight:900;align-items:center;padding:32px 0}.row_h_gen_noticias[_ngcontent-%COMP%]:after{content:"";flex-grow:1;height:1px;background:#E0E0E0}.cnt_tob_not_dest[_ngcontent-%COMP%]{width:100%;display:flex;gap:20px}.cnt_not_dest[_ngcontent-%COMP%]{width:62%;position:relative;overflow:hidden;border-radius:8px;display:block}.cnt_not_dest[_ngcontent-%COMP%]:hover   .img_not_dest[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.1)}.cnt_not_dest[_ngcontent-%COMP%]:after{content:"";position:absolute;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/nueva/images/diseno/proyectos_vivienda/puntos.svg) no-repeat center;width:20px;height:70px;bottom:40px;right:16px}.img_not_dest[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden}.img_not_dest[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:all 1s;display:block}.cnt_inf_not_dest[_ngcontent-%COMP%]{width:100%;position:absolute;bottom:0;left:0;background:linear-gradient(180deg,rgba(217,217,217,0) 28.65%,rgba(0,0,0,.7) 100%);box-sizing:border-box;padding:120px 40px 24px;text-align:left;display:flex;flex-flow:column;align-items:flex-start;gap:8px}.cat_not[_ngcontent-%COMP%]{background:#FDB718;color:#fff;font-size:12px;font-weight:700;padding:4px 16px;border-radius:4px}.row_fecha[_ngcontent-%COMP%]{display:flex;gap:8px}.ic_fech_not[_ngcontent-%COMP%]{color:#fff;font-size:18px!important}.fecha_nota[_ngcontent-%COMP%]{font-size:13px;color:var(--c_pri);width:100%;line-height:18px;color:#fff}.autor_nota[_ngcontent-%COMP%]{font-size:13px;line-height:15px;color:var(--c_pri);width:100%}.autor_nota[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:600}.h_not_dest[_ngcontent-%COMP%]{width:100%;font-size:28px;line-height:35px;font-weight:600;color:#fff;text-shadow:0 4px 6px rgba(0,0,0,.9)}.txt_not_dest[_ngcontent-%COMP%]{font-size:16px;color:#fff}.btn_not[_ngcontent-%COMP%]{width:100%;font-size:14px;color:var(--c_pri);text-decoration:underline;padding-top:8px}.col_top_dest[_ngcontent-%COMP%]{width:40%;display:flex;flex-direction:column;align-items:flex-start;gap:20px}.cnt_otra_not_dest[_ngcontent-%COMP%]{width:100%;max-height:240px;position:relative;border-radius:12px;overflow:hidden}.cnt_otra_not_dest[_ngcontent-%COMP%]   .h_not_dest[_ngcontent-%COMP%]{font-size:22px;line-height:100%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.cnt_otra_not_dest[_ngcontent-%COMP%]   .cnt_inf_not_dest[_ngcontent-%COMP%]{padding-left:24px;padding-right:24px}.cnt_otra_not_dest[_ngcontent-%COMP%]:hover   .img_not_dest[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.1)}.cnt_bot_not[_ngcontent-%COMP%]{width:100%;display:flex;gap:20px;padding:40px 0}.col_gen_list_not[_ngcontent-%COMP%]{width:77%;position:relative}.row_h_list_not[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;gap:20px;padding:16px 0}.h_not_recientes[_ngcontent-%COMP%]{font-size:28px;font-weight:900;color:var(--color-c2)}.sep_list_not[_ngcontent-%COMP%]{flex-grow:1;height:1px;background:#E0E0E0}[_nghost-%COMP%]     .paginador_list_not a{width:35px;height:35px;line-height:35px;text-align:center;display:inline-block;vertical-align:middle;border-radius:50%;background:#F0F2F7;border:1px solid #0A102D;color:var(--c_pri);cursor:pointer;margin:0 4px}[_nghost-%COMP%]     .paginador_list_not{color:red}[_nghost-%COMP%]     .paginador_list_not a:hover{background:var(--c_pri);color:#fff}[_nghost-%COMP%]     .paginador_list_not .jp-disabled{pointer-events:none;opacity:20%}[_nghost-%COMP%]     .paginador_list_not .jp-current{background:var(--c_pri);color:#fff}.list_not[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(3,1fr);gap:20px 24px}.itm_list_not[_ngcontent-%COMP%]{height:280px;overflow:hidden;border-radius:15px;position:relative;transition:all .4s}.itm_list_not[_ngcontent-%COMP%]:hover{box-shadow:0 30px 40px -20px #00000080;z-index:1}.itm_list_not[_ngcontent-%COMP%]:hover   .img_not_list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.1)}.img_not_list[_ngcontent-%COMP%]{width:100%;height:100%}.img_not_list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:cover;transition:all .6s}.catedoria[_ngcontent-%COMP%]{position:absolute;top:0;right:0;padding:4px 16px 4px 12px;background:var(--color-c2);font-size:12px;color:#fff;border-radius:0 0 0 8px}.cnt_inf_nota_list[_ngcontent-%COMP%]{width:90%;height:102px;position:absolute;bottom:16px;left:5%;box-sizing:border-box;padding:10px 16px;background:rgba(255,255,255,.6);background-blend-mode:overlay,normal;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border-radius:8px}.cnt_inf_nota_list[_ngcontent-%COMP%]   .row_fecha[_ngcontent-%COMP%]{padding:4px 0}.cnt_inf_nota_list[_ngcontent-%COMP%]   .ic_fech_not[_ngcontent-%COMP%], .cnt_inf_nota_list[_ngcontent-%COMP%]   .fecha_nota[_ngcontent-%COMP%]{color:#1a6be5}.cnt_inf_nota_list[_ngcontent-%COMP%]   .ic_fech_not[_ngcontent-%COMP%]{font-size:14px!important}.cnt_inf_nota_list[_ngcontent-%COMP%]   .fecha_nota[_ngcontent-%COMP%]{font-weight:700}.txt_not_list[_ngcontent-%COMP%]{font-size:16px;font-weight:800;color:var(--color-c2);overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.col_post_dest[_ngcontent-%COMP%]{width:23%;position:relative}.ctn_lat_post_dets[_ngcontent-%COMP%]{width:100%;background:#F0F2F7;border:1px solid #D7D7D7;border-radius:15px;position:sticky;top:130px;overflow:hidden}.h_post_dest[_ngcontent-%COMP%]{width:100%;padding:8px 16px;font-size:28px;font-weight:900;color:var(--c_pri);background:#CED2DD}.list_post_dest[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:16px 24px}.itm_post_dest[_ngcontent-%COMP%]{width:100%;padding:8px 0;border-bottom:1px solid #d7d7d7}.itm_post_dest[_ngcontent-%COMP%]   .row_fecha[_ngcontent-%COMP%]{padding:4px 0}.itm_post_dest[_ngcontent-%COMP%]   .ic_fech_not[_ngcontent-%COMP%], .itm_post_dest[_ngcontent-%COMP%]   .fecha_nota[_ngcontent-%COMP%]{color:#1a6be5}.itm_post_dest[_ngcontent-%COMP%]   .ic_fech_not[_ngcontent-%COMP%]{font-size:14px!important}.itm_post_dest[_ngcontent-%COMP%]   .fecha_nota[_ngcontent-%COMP%]{font-weight:700}.itm_post_dest[_ngcontent-%COMP%]   .txt_not_list[_ngcontent-%COMP%]{font-weight:600;transition:all .3s}.itm_post_dest[_ngcontent-%COMP%]:hover   .txt_not_list[_ngcontent-%COMP%]{color:#1a6be5}.itm_post_dest[_ngcontent-%COMP%]:last-child{border-bottom:none}@media screen and (max-width: 1050px){.cnt_tob_not_dest[_ngcontent-%COMP%]{flex-direction:column}.cnt_not_dest[_ngcontent-%COMP%]{width:100%;height:400px}.col_top_dest[_ngcontent-%COMP%]{width:100%;flex-direction:row}.cnt_bot_not[_ngcontent-%COMP%]{flex-direction:column}.col_gen_list_not[_ngcontent-%COMP%], .col_post_dest[_ngcontent-%COMP%]{width:100%}.list_post_dest[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between;flex-wrap:wrap}.itm_post_dest[_ngcontent-%COMP%]{width:48%}.itm_post_dest[_ngcontent-%COMP%]:last-child{border-bottom:1px solid #D7D7D7}}@media screen and (max-width: 768px){.cnt_otra_not_dest[_ngcontent-%COMP%]   .h_not_dest[_ngcontent-%COMP%]{font-size:18px}[_nghost-%COMP%]     .paginador_list_not a{width:30px;height:30px;line-height:30px;font-size:14px;margin:0 2px}[_nghost-%COMP%]     .paginador_list_not a:hover{background:var(--c_pri);color:#fff}.list_not[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);gap:16px}.list_post_dest[_ngcontent-%COMP%]{flex-direction:column}.itm_post_dest[_ngcontent-%COMP%]{width:100%}.itm_post_dest[_ngcontent-%COMP%]:last-child{border-bottom:none}.row_h_gen_noticias[_ngcontent-%COMP%]{font-size:30px}.h_not_recientes[_ngcontent-%COMP%]{font-size:24px}}@media screen and (max-width: 480px){.cnt_inf_not_dest[_ngcontent-%COMP%]{padding:40px 16px 24px}.h_not_dest[_ngcontent-%COMP%]{font-size:20px;line-height:22px}.txt_not_dest[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.col_top_dest[_ngcontent-%COMP%]{flex-direction:column}.row_h_list_not[_ngcontent-%COMP%]{flex-direction:column;gap:0}.sep_list_not[_ngcontent-%COMP%], .row_fecha[_ngcontent-%COMP%]   .ic_fech_not[_ngcontent-%COMP%]{display:none}.itm_list_not[_ngcontent-%COMP%]{height:200px}.cnt_inf_nota_list[_ngcontent-%COMP%]{left:0;bottom:0;width:100%;padding:8px;height:auto;border-top-left-radius:0;border-top-right-radius:0}.fecha_nota[_ngcontent-%COMP%], .txt_not_list[_ngcontent-%COMP%]{font-size:12px}}']}),o})();const X=[{path:"",component:U,canActivate:[B]},{path:":slug",component:E,canActivate:[L]},{path:"pagina/:numberPage",component:U,canActivate:[B]}];let W=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(X),p.Bz]}),o})(),tt=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,W,C.L,k.L]}),o})()}}]);
import{a as q}from"./chunk-PP6BHPLG.js";import{a as H}from"./chunk-XD5LP47T.js";import"./chunk-BCAWV3EG.js";import"./chunk-XOQTU3U2.js";import{a as N,b as B}from"./chunk-POD4BLUB.js";import{a as G}from"./chunk-7SCTSF4L.js";import{i as V,o as R}from"./chunk-FBJGKUSD.js";import{$b as $,Ab as E,Bb as r,Cb as i,Db as g,Gb as y,Hb as v,Ib as c,Mb as w,Qa as u,Tb as p,Ub as j,Va as n,Vb as x,Wb as F,Y as S,Yb as D,Zb as I,_b as z,aa as C,ba as P,bc as U,d as k,fb as M,j as f,lb as s,mb as O,nb as b,qa as m,rb as _,xb as l,yb as L,zb as T}from"./chunk-XI7NKT5T.js";var A=()=>[V,import("./chunk-5P2F5UP4.js").then(t=>t.RouterLink),R,import("./chunk-B46VASZV.js").then(t=>t.ThousandNumber)],J=()=>[import("./chunk-QULCN3VK.js").then(t=>t.ModalPreLaunchProjectComponent),import("./chunk-XE4XEQA3.js").then(t=>t.WppModalProjectComponent)];function K(t,o){if(t&1&&(r(0,"a",18),g(1,"img",19),i()),t&2){let e=c(2).$implicit;_("href",e.vista360,u)}}function Q(t,o){if(t&1&&(r(0,"a",18),g(1,"span",20),i()),t&2){let e=c(2).$implicit;_("href",e.url_waze,u)}}function X(t,o){if(t&1&&(r(0,"div",16),s(1,K,2,1,"a",17)(2,Q,2,1),i()),t&2){let e=c().$implicit;n(),l(1,e!=null&&e.vista360?1:2)}}function Y(t,o){if(t&1&&(r(0,"a",8),g(1,"img",21),i()),t&2){let e=c().$implicit,a=c(2);w("routerLink","/proyecto/",e.url_amigable,""),n(),_("ngSrc",a.IMG_URL()+e.imagen_principal_proyecto)("alt",e.alt_principal)("title",e.title_principal)}}function Z(t,o){if(t&1&&g(0,"img",21),t&2){let e=c().$implicit,a=c(2);_("ngSrc",a.IMG_URL()+e.imagen_principal_proyecto)("alt",e.alt_principal)("title",e.title_principal)}}function tt(t,o){if(t&1&&(r(0,"h4")(1,"span"),p(2,"Desde"),i(),p(3),i()),t&2){let e=c().$implicit;n(3),x(" $",e.valor_proyecto_formato," ")}}function et(t,o){if(t&1&&(r(0,"div",22),p(1," Precio de referencia "),r(2,"b"),p(3),$(4,"thousandNumber"),i()()),t&2){let e=c().$implicit;n(3),x("USD ",U(4,1,e.dollar_value,"es"),"")}}function nt(t,o){if(t&1){let e=y();r(0,"div",23)(1,"a",24,25),v("click",function(){C(e);let d=c().$implicit,h=c(2);return P(h.selectProjectToModal(d))}),g(3,"span",26),p(4," Contactar "),i(),r(5,"a",27),p(6," Ver proyecto "),i()()}if(t&2){let e=c().$implicit;n(5),w("routerLink","/proyecto/",e.url_amigable,"")}}var it=()=>({"grid-template-columns":"2fr 1fr"});function ot(t,o){if(t&1){let e=y();r(0,"div",28)(1,"a",29),v("click",function(){C(e);let d=c().$implicit,h=c(2);return P(h.selectProjectToPreLaunch(d))}),p(2," Inscribirse "),i()()}t&2&&_("ngStyle",I(1,it))}var W=t=>({"background-color":t});function rt(t,o){if(t&1&&(r(0,"div",5)(1,"picture")(2,"span",6),p(3),i(),s(4,X,3,1,"div",7)(5,Y,2,4,"a",8)(6,Z,1,3),i(),r(7,"h2",9)(8,"picture"),g(9,"img",10),i(),r(10,"div"),p(11),i()(),r(12,"div",11)(13,"h3"),p(14),i(),s(15,tt,4,1,"h4")(16,et,5,4,"div",12),i(),r(17,"div",13),g(18,"img",14),r(19,"span"),p(20),i()(),s(21,nt,7,1,"div",15)(22,ot,3,2),i()),t&2){let e=o.$implicit,a=c(2);n(2),_("ngStyle",z(15,W,e.color_secundario)),n(),x(" ",e.estado_proyecto," "),n(),l(4,e.vista360||e.url_waze?4:-1),n(),l(5,e.interna==="si"?5:6),n(2),_("ngStyle",z(17,W,e.color_primario)),n(2),_("ngSrc",a.IMG_URL()+e.logo_proyecto)("alt",e.alt_logo)("title",e.title_logo),n(2),j(e.titulo_proyecto),n(3),F("",e.zona_proyecto," / ",e.ubicacion_proyecto,""),n(),l(15,e.valor_proyecto_formato?15:-1),n(),l(16,e!=null&&e.dollar_value?16:-1),n(4),j(e.texto_adicional),n(),l(21,e.interna==="si"?21:22)}}function ct(t,o){if(t&1&&(r(0,"div",0)(1,"section",1)(2,"h2",2)(3,"span"),p(4,"Proyectos"),i(),g(5,"br"),p(6," Destacados "),i(),r(7,"div",3)(8,"div",4),T(9,rt,23,19,"div",30,L),i()()()()),t&2){let e=c();n(9),E(e.housingProjects())}}function at(t,o){if(t&1&&g(0,"app-modal-pre-launch-project",31)(1,"app-wpp-modal-project",31),t&2){let e=c();_("modalEvent",e.notifyChangesPreLaunchProject.asObservable())("project",e.projectSelectedToModal),n(),_("modalEvent",e.notifyChanges.asObservable())("project",e.projectSelectedToModal)}}function pt(t,o){t&1&&g(0,"div")}var Pt=(()=>{let o=class o{constructor(){this.cs=m(H),this.IMG_URL=M(G.imagenes_url),this.housingProjects=M([]),this.projectService=m(B),this.currencyConverter=m(q),this.projectSelectedToModal=new N,this.notifyChanges=new f,this.notifyChangesPreLaunchProject=new f}ngOnInit(){console.log('%csrc/app/modules/home/components/projects-list/projects-list.component.ts:47 "object"',"color: #007acc;","object"),this.getProjectsHome()}getProjectsHome(){return k(this,null,function*(){let a=yield this.projectService.getProyectosByTipo("1",void 0,void 0,void 0,void 0,"home");this.housingProjects.set(a),this.cs.loadCEvent.update(d=>d.concat("app-projects-list")),yield this.currencyConverter.convertCopToUsdProjects(this.housingProjects())})}selectProjectToModal(a){a.origin="home",this.projectSelectedToModal=a,this.notifyChanges.next({openModal:!0})}selectProjectToPreLaunch(a){this.projectSelectedToModal=a,this.notifyChangesPreLaunchProject.next({openModal:!0})}};o.\u0275fac=function(d){return new(d||o)},o.\u0275cmp=S({type:o,selectors:[["app-projects-list"]],standalone:!0,features:[D],decls:7,vars:2,consts:[[1,"bg_grad"],[1,"s_cards_proyectos"],[1,"title_section","al-center"],[1,"cnt_central"],[1,"c_cards_proyectos"],[1,"card_p"],[1,"tag_state",3,"ngStyle"],["class","btns_icons"],[3,"routerLink"],[1,"name_proyecto",3,"ngStyle"],["width","87","height","87","defaultImg","",3,"ngSrc","alt","title"],[1,"datos_proyecto"],["class","precio_usd"],[1,"franja_p"],["width","20","height","20","ngSrc","assets/images/diseno/proyectos_vivienda/icono_proyecto.svg","alt",""],["class","ctas_proyectos"],[1,"btns_icons"],["target","_blank","class","btn_icon",3,"href"],["target","_blank",1,"btn_icon",3,"href"],["ngSrc","assets/images/diseno/proyectos_vivienda/icon_360.svg","width","20","height","20"],[1,"fas","fa-map-marker-alt"],["width","350","height","168","defaultImg","",3,"ngSrc","alt","title"],[1,"precio_usd"],[1,"ctas_proyectos"],[1,"btn_whatsapp","c-pointer",3,"click"],["contact",""],[1,"fab","fa-whatsapp"],[1,"btn",3,"routerLink"],[1,"ctas_proyectos",3,"ngStyle"],[1,"btn",3,"click"],["class","card_p"],[3,"modalEvent","project"]],template:function(d,h){d&1&&(s(0,ct,11,0),O(1,0,A),s(3,at,2,4)(4,pt,1,0),O(5,3,J,null,4)),d&2&&(n(),b(h.housingProjects().length>0),n(4),b(h.projectSelectedToModal.id))},styles:['.bg_grad[_ngcontent-%COMP%]{min-height:400px;padding-top:64px;background:linear-gradient(to top,#f0f2f7,#fff,#eef1f9)}.c_edge[_ngcontent-%COMP%]{background:#fff;box-shadow:0 102px 24px -108px #1a41e540,0 20px 31px -14px #4453a640;display:grid;grid-template-columns:2fr 1fr;position:relative;z-index:2;max-width:1050px;margin:0 auto}.c_edge[_ngcontent-%COMP%] > picture[_ngcontent-%COMP%]{display:inline-block;position:relative;width:100%;height:100%}.logo_edge[_ngcontent-%COMP%]{position:absolute;z-index:1;top:20px;right:10px;background-color:#fff;padding:4px;border-radius:0 20px;width:100%;height:100%;object-fit:contain;max-width:100px;height:fit-content}.img_pri_edge[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.hashtag[_ngcontent-%COMP%]{position:absolute;bottom:30px;left:0;background-color:#66dc2e;font-size:18px;padding:5px 10px;font-weight:600}.cnt_edge[_ngcontent-%COMP%]{padding:40px}[_nghost-%COMP%]     .cnt_edge h2 p{font-size:50px;text-align:left;line-height:1;max-width:368px;color:#253489;font-weight:800;margin:0 0 20px}[_nghost-%COMP%]     .cnt_edge h2 p span{display:inline-block;line-height:1;font-size:24px;font-weight:400}.txt_edge_cnt[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:18px;color:#253489}.cnt_icons_edge[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:30px;align-items:center;align-content:center;margin:20px 0 0}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:inline-block}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#182360}.s_edge[_ngcontent-%COMP%]{padding:0 0 100px;position:relative}.s_edge[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:100%;max-height:280px;background:url(/assets/images/diseno/home/curva_azul_edge.svg) no-repeat center bottom;background-size:cover;top:-2;left:0;right:0;margin:auto;z-index:1}.cnt_items_elegir[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:24px;align-items:stretch}.item_elegir[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;gap:20px;background:linear-gradient(180deg,#fafafa,#fff);border-radius:24px;padding:20px;max-width:250px;justify-self:center}.item_elegir[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:inline-block;max-width:70px}.item_elegir[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.item_elegir[_ngcontent-%COMP%]   .txt_elegir[_ngcontent-%COMP%]{line-height:1.3}.s_porque_elegir[_ngcontent-%COMP%]{padding:0 0 100px}.c_porque_elegir[_ngcontent-%COMP%]{max-width:1050px;margin:auto}.s_proyecto_vivienda[_ngcontent-%COMP%]{background:linear-gradient(180deg,#e9edf700,#e8ebf1 72.6%),#fff;min-height:340px;position:relative}.s_proyecto_vivienda[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:-2px;background:url(/assets/images/diseno/proyectos_vivienda/curva_bg.svg) no-repeat;background-size:cover;background-position:center top;z-index:1;width:100%;height:100%;max-height:145px;pointer-events:none}.c_proyecto_vivienda[_ngcontent-%COMP%]{position:relative}.c_proyecto_vivienda[_ngcontent-%COMP%]:before, .c_proyecto_vivienda[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/nueva/images/diseno/proyectos_vivienda/puntos.svg) no-repeat center;width:20px;height:70px}.c_proyecto_vivienda[_ngcontent-%COMP%]:after{right:0;left:initial;top:initial;bottom:0;transform:rotate(180deg)}.s_cards_proyectos[_ngcontent-%COMP%]{padding:0 0 40px;position:relative;z-index:1}.s_cards_proyectos[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]{min-height:73.58px;margin-top:0}.c_cards_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}.card_p[_ngcontent-%COMP%]{overflow:hidden;background:#fff;box-shadow:0 19px 41px -18px #23386273;border-radius:24px;display:inline-grid}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;max-height:219px;width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:contain}.card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%]{text-align:center;position:absolute;left:10px;top:10px;border-radius:100px;padding:8px 20px;color:#fff;font-weight:600;font-size:14px;z-index:1}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:10px;right:10px;border-radius:6px;background:var(--color-grad_azul_osc);width:80px;height:40px;z-index:1;overflow:hidden}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{position:absolute;left:0;right:0;height:80%;width:1px;background-color:#a5a5a5;margin:auto;z-index:2}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;display:flex;justify-content:center;align-items:center;width:26px;height:26px;transition:.3s ease;width:100%;height:100%;position:relative}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{content:"";background-color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px;color:#fff;display:inline-flex;justify-content:center;align-items:center}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{background-color:#2e3b85;padding:10px;display:grid;grid-template-columns:80px 1fr;align-items:center;gap:20px;position:relative;min-height:54px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-width:87px;border-radius:100px;border:5px solid #FFFFFF;background-color:#fff;position:absolute;width:90px;height:90px;box-shadow:0 5px 15px -5px #00000054;left:10px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{grid-column:2;color:#fff;font-size:15px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 20px;text-align:center;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:34px;font-weight:900;display:flex;align-items:center;gap:10px;text-align:center;justify-content:center}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;display:inline-block}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]{width:100%;background:linear-gradient(90deg,#eeeeee80,#eee 48.96%,#eeeeee80);display:flex;align-items:center;justify-content:center;gap:10px;padding:10px}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:center;padding:10px}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover{color:#060b29}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(180deg,#5ffc7b,#26d044);border-radius:6px;display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:22px;color:#fff;font-weight:500}.card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:fit-content;justify-self:flex-end}.s_home_hero[_ngcontent-%COMP%]{min-height:717px;position:relative}.s_home_hero[_ngcontent-%COMP%]:before{display:none;content:"";position:absolute;bottom:-2px;width:100%;height:100%;max-height:120px;left:0;right:0;margin:0 auto;background-size:contain;z-index:10}[_nghost-%COMP%]     .s_home_hero .swiper-slide{min-height:650px;padding:80px;height:100%}[_nghost-%COMP%]     .swiperHomeHero .swiper-wrapper>.swiper-slide{height:auto}[_nghost-%COMP%]     .swiper-pagination-horizontal{width:100%;display:flex;gap:10px;left:0;bottom:62px;margin:auto;justify-content:center}[_nghost-%COMP%]     .swiper-pagination-bullet{width:12px;height:12px}[_nghost-%COMP%]     .swiper-pagination-bullet-active{width:12px;height:12px;background:#253489;border-radius:100px;transition:.3s ease}[_nghost-%COMP%]     .swiper-pagination-bullet-active{width:20px}.bg_img_h_hero[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;inset:0;z-index:1}.bg_img_h_hero_2[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;inset:0;z-index:1;object-fit:cover}.bg_img_h_hero[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;background:#fff;z-index:2;mix-blend-mode:color}.bg_img_h_hero[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;background:linear-gradient(to right,#ffffffd9,#fff);z-index:2;opacity:1}.bg_img_h_hero_2[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;mix-blend-mode:color}.bg_img_h_hero_2[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;opacity:1}.bg_img_h_hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.cnt_h_hero[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.5fr 1fr;position:relative;z-index:2;gap:40px}.grand_img_h_hero[_ngcontent-%COMP%]{position:relative;z-index:3}.grand_img_h_hero[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-40px;top:0;bottom:0;margin:auto;width:20px;height:90px;background:url(/assets/images/diseno/home/puntos.svg) no-repeat center;background-size:contain}.grand_img_h_hero[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-self:center}.grand_img_h_hero[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{position:absolute;z-index:2;max-width:200px;bottom:40px;left:-100px;border-radius:15px;overflow:hidden;box-shadow:8px 21px 30px -14px #112333;min-height:134px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:100%}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:160px 30px;overflow:hidden;max-height:454px;min-height:454px}.desc_txt_hero[_ngcontent-%COMP%]{display:flex;align-items:center;gap:30px;position:relative;z-index:2}.aside_prjct[_ngcontent-%COMP%]{border-radius:16px;background-color:#fff;padding:8px;display:flex;flex-direction:column;align-items:center;max-width:160px;min-width:150px;z-index:2}.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;align-items:center}.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.dt_prjct[_ngcontent-%COMP%]{border-radius:15px;padding:16px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:10px;color:#fff}.item_prjct[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;width:100%;text-align:left;font-size:13px}.item_prjct[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:grayscale(1) brightness(20)}.datos_info_prjct[_ngcontent-%COMP%]{max-width:680px;position:relative;z-index:1}.datos_info_prjct[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{padding:4px 20px;border-radius:100px;width:fit-content;color:#fff}.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:1;margin:14px 0;color:#182360;text-align:left}.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:400;text-align:left;padding:0 0 6px;border-bottom:1px solid #182360;width:fit-content;color:#182360;position:relative}.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{content:"";position:absolute;width:80px;height:6px;border-radius:100px;background-color:#3e6ddf;bottom:-3px;left:30px}.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:34px;color:#182360;margin:10px 0}.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:23px}@media screen and (min-width: 2540px){.s_home_hero[_ngcontent-%COMP%]:before{background-size:cover;background-position:top;max-height:169px}}@media screen and (max-width: 1440px){.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:43px}[_nghost-%COMP%]     .s_home_hero .swiper-slide{padding:80px 60px}}@media screen and (max-width: 1280px){.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{bottom:20px;left:-40px}.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:33px}[_nghost-%COMP%]     .s_home_hero .swiper-slide{padding:50px 30px 50px 60px;min-height:550px}}@media screen and (max-width: 1050px){.cnt_h_hero[_ngcontent-%COMP%]{grid-template-columns:1fr}.desc_txt_hero[_ngcontent-%COMP%]{gap:20px}[_nghost-%COMP%]     .swiper-pagination-horizontal{left:0!important;right:0!important;margin:auto!important;flex-direction:row!important;top:8px!important;bottom:initial!important;height:12px!important;width:100%}[_nghost-%COMP%]     .swiper-pagination-bullet-active{width:20px;height:12px}}@media screen and (max-width: 768px){.s_home_hero[_ngcontent-%COMP%]{margin-top:10px}[_nghost-%COMP%]     .s_home_hero .swiper-slide{padding:32px 20px;min-height:initial}.grand_img_h_hero[_ngcontent-%COMP%]{max-height:350px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%]{min-height:initial}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{left:0;right:0;margin:auto;bottom:-30px;width:130px;display:none}.cnt_items_elegir[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.cnt_edge[_ngcontent-%COMP%]{padding:20px}.c_edge[_ngcontent-%COMP%]{grid-template-columns:1fr}.txt_edge_cnt[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.cnt_icons_edge[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}}@media screen and (max-width: 480px){.cnt_h_hero[_ngcontent-%COMP%]{min-height:630px;gap:0px}.cnt_items_elegir[_ngcontent-%COMP%]{grid-template-columns:1fr}.item_elegir[_ngcontent-%COMP%]{max-width:initial}.desc_txt_hero[_ngcontent-%COMP%]{flex-direction:column;order:2;padding-top:0;gap:0}.datos_info_prjct[_ngcontent-%COMP%]{padding-top:16px}.aside_prjct[_ngcontent-%COMP%]{flex-direction:row;max-width:initial;width:100%}.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{max-width:100px}.dt_prjct[_ngcontent-%COMP%]{width:100%;text-align:left;justify-content:flex-start;align-items:flex-start;display:grid;grid-template-columns:1fr 1fr}.dt_prjct[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.place_prjct[_ngcontent-%COMP%]{grid-column:1/3}.grand_img_h_hero[_ngcontent-%COMP%]{max-height:250px}.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%]{border-radius:100px 20px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{bottom:-50px;max-height:90px;min-height:initial}.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}}']});let t=o;return t})();export{Pt as ProjectsListComponent};

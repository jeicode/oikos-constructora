import './polyfills.server.mjs';
import{a as H,b as T,c as $,d as D,e as q,f as N,g as A}from"./chunk-OTQRHQ37.mjs";import{a as G}from"./chunk-MWN3FEEN.mjs";import{a as U}from"./chunk-XNEFQIGY.mjs";import"./chunk-6O4CIOZQ.mjs";import{a as R}from"./chunk-PTQY4S64.mjs";import{Fa as B,l as E,v as L}from"./chunk-NFEH3HHQ.mjs";import{$b as I,Ab as O,Bb as c,Cb as a,Db as _,Ib as p,Lb as h,Pa as k,Tb as d,U as j,Ua as i,Ub as C,Vb as x,X as z,Yb as S,_b as b,bc as F,fb as f,lb as s,na as M,rb as g,xb as m,yb as u,zb as P}from"./chunk-W6KK3X73.mjs";import{h as v}from"./chunk-VVCT4QZE.mjs";var V=(()=>{let r=class r{transform(o=[],t="",l=","){if(t){let K=t.split(l),w=[];return t&&o&&o?.length>0&&K.forEach(Q=>{let y=o.find(W=>W?.nombre.toLowerCase()==Q.trim().toLowerCase());y&&w.push(y)}),w.slice(0,4)}return o.slice(0,4)}};r.\u0275fac=function(t){return new(t||r)},r.\u0275pipe=z({name:"sortArraySplitStr",type:r,pure:!0,standalone:!0});let n=r;return n})();function Y(n,r){if(n&1&&(c(0,"div",21),_(1,"img",22),c(2,"span"),d(3),a()()),n&2){let e=r.$implicit,o=p(5);i(),g("ngSrc",o.IMG_URL()+e.imagen)("title",e.title)("alt",e.alt),i(2),C(e.nombre)}}function Z(n,r){if(n&1&&(c(0,"h2")(1,"span"),d(2," Desde"),a(),_(3,"br"),d(4),a()),n&2){let e=p(3).$implicit;i(4),x(" ",e==null?null:e.valor_proyecto," ")}}function tt(n,r){if(n&1&&(c(0,"picture",23),_(1,"img",24),a()),n&2){let e=p(3).$implicit,o=p(2);i(),g("ngSrc",o.IMG_URL()+e.galeria[1].field_content)("alt",e.galeria[1].alt)("title",e.galeria[1].title)}}var J=n=>({"background-color":n});function nt(n,r){if(n&1&&(c(0,"div",6),_(1,"img",7),a(),c(2,"div",8)(3,"div",9)(4,"aside",10),_(5,"img",11),c(6,"div",12)(7,"div",13),d(8),a(),P(9,Y,4,4,"div",25,u),I(11,"sortArraySplitStr"),a()(),c(12,"div",14)(13,"div",15),d(14),a(),c(15,"h2"),d(16),a(),c(17,"h3"),d(18),a(),s(19,Z,5,1,"h2"),c(20,"a",16),d(21),a()()(),c(22,"div",17)(23,"picture",18),_(24,"img",19),a(),s(25,tt,2,3,"picture",20),a()()),n&2){let e=p(2),o=e.$index,t=e.$implicit,l=p(2);i(),g("priority",o==0)("ngSrc",l.IMG_URL()+(t.imagen[0]?t.imagen[0]:t.galeria[0].field_content)),i(4),g("ngSrc",l.IMG_URL()+t.logo_proyecto),i(),g("ngStyle",b(20,J,t==null?null:t.color_primario)),i(2),x(" ",t==null?null:t.titulo_proyecto," "),i(),O(F(11,17,t.zonas,t.beneficios_proyecto)),i(4),g("ngStyle",b(22,J,t==null?null:t.color_secundario)),i(),x(" ",t.estado_proyecto," "),i(2),C(t.field_content),i(2),C(t.descripcion_banner_home),i(),m(19,t.valor_proyecto?19:-1),i(),g("routerLink",t.link_cta_banner),i(),x(" ",t.texto_cta_banner," "),i(3),g("priority",o==0)("ngSrc",l.IMG_URL()+(t.imagen[0]?t.imagen[0]:t.galeria[0].field_content))("alt",t.imagen_alt[0]?t.imagen_alt[0]:t.galeria[0].alt)("title",t.imagen_title[0]?t.imagen_title[0]:t.galeria[0].title),i(),m(25,!(t==null||t.galeria==null)&&t.galeria[1]?25:-1)}}function et(n,r){if(n&1&&(c(0,"a",27)(1,"picture"),_(2,"source",28)(3,"source",29)(4,"source",30)(5,"img",31),a()()),n&2){let e=p(3).$implicit,o=p(2);h("href",e.link_cta_banner,k),i(2),h("srcset",o.IMG_URL()+e.imagen[1]),i(),h("srcset",o.IMG_URL()+e.imagen[2]),i(),g("srcset",o.IMG_URL()+(e.imagen[0]?e.imagen[0]:e.galeria[0].field_content)),i(),g("ngSrc",o.IMG_URL()+e.imagen[1])}}function it(n,r){if(n&1&&(c(0,"picture"),_(1,"source",28)(2,"source",29)(3,"source",30)(4,"img",31),a()),n&2){let e=p(3).$implicit,o=p(2);i(),h("srcset",o.IMG_URL()+e.imagen[1]),i(),h("srcset",o.IMG_URL()+e.imagen[2]),i(),g("srcset",o.IMG_URL()+(e.imagen[0]?e.imagen[0]:e.galeria[0].field_content)),i(),g("ngSrc",o.IMG_URL()+e.imagen[1])}}function ot(n,r){if(n&1&&(c(0,"div")(1,"div",26),s(2,et,6,5,"a",27)(3,it,5,4),a()()),n&2){let e=p(2).$implicit;i(2),m(2,e!=null&&e.link_cta_banner?2:3)}}function rt(n,r){if(n&1&&s(0,nt,26,24)(1,ot,4,1),n&2){let e=p().$implicit;m(0,e.titulo_proyecto?0:1)}}function at(n,r){n&1&&s(0,rt,2,1,"ng-template",5)}function ct(n,r){if(n&1&&(c(0,"section",1)(1,"div",2)(2,"swiper",3),P(3,at,1,0,null,5,u),a()(),_(5,"div",4),a()),n&2){let e=p();i(2),g("config",e.config()),i(),O(e.bannersHome())}}H.use([T,$,D]);var ut=(()=>{let r=class r{constructor(){this.cs=M(G),this.IMG_URL=f(R.imagenes_url),this.pageService=M(U),this.bannersHome=f([]),this.config=f({lazy:!0,autoplay:{delay:1e4},parallax:!0,slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination",clickable:!0}})}ngOnInit(){this.getBannersHome()}getBannersHome(){return v(this,null,function*(){let o=yield this.pageService.getBannersHome("titulo banner home","banner_home");this.bannersHome.set(o),this.cs.loadCEvent.update(t=>t.concat("app-projects-banner"))})}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=j({type:r,selectors:[["app-projects-banner"]],standalone:!0,features:[S],decls:1,vars:1,consts:[["class","s_home_hero"],[1,"s_home_hero"],[1,"swiper","swiperHomeHero"],[3,"config"],[1,"swiper-pagination"],["swiperSlide",""],[1,"bg_img_h_hero"],["width","1920","height","700",3,"priority","ngSrc"],[1,"cnt_h_hero"],[1,"desc_txt_hero"],[1,"aside_prjct"],["defaultImg","","width","100","height","100",3,"ngSrc"],[1,"dt_prjct",3,"ngStyle"],[1,"place_prjct"],[1,"datos_info_prjct"],[1,"tag",3,"ngStyle"],[1,"btn",3,"routerLink"],[1,"grand_img_h_hero"],[1,"grand_img_hero1"],["width","516","height","454",3,"priority","ngSrc","alt","title"],["class","grand_img_hero_mini"],[1,"item_prjct"],["defaultImg","","width","28","height","28",3,"ngSrc","title","alt"],[1,"grand_img_hero_mini"],["width","204","height","137",3,"ngSrc","alt","title"],["class","item_prjct"],["data-swiper-parallax-opacity","0.6",1,"bg_img_h_hero_2"],[3,"href"],["media","(max-width: 425px)",3,"srcset"],["media","(max-width: 1024px)",3,"srcset"],["media","(min-width: 1025px)",3,"srcset"],["alt","Imagen","width","1920","height","700",1,"bg_img_h_hero_2",3,"ngSrc"]],template:function(t,l){t&1&&s(0,ct,6,1,"section",0),t&2&&m(0,l.bannersHome().length>0?0:-1)},dependencies:[E,A,N,q,L,B,V],styles:['.bg_grad[_ngcontent-%COMP%]{min-height:400px;padding-top:64px;background:linear-gradient(to top,#f0f2f7,#fff,#eef1f9)}.c_edge[_ngcontent-%COMP%]{background:#fff;box-shadow:0 102px 24px -108px #1a41e540,0 20px 31px -14px #4453a640;display:grid;grid-template-columns:2fr 1fr;position:relative;z-index:2;max-width:1050px;margin:0 auto}.c_edge[_ngcontent-%COMP%] > picture[_ngcontent-%COMP%]{display:inline-block;position:relative;width:100%;height:100%}.logo_edge[_ngcontent-%COMP%]{position:absolute;z-index:1;top:20px;right:10px;background-color:#fff;padding:4px;border-radius:0 20px;width:100%;height:100%;object-fit:contain;max-width:100px;height:fit-content}.img_pri_edge[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.hashtag[_ngcontent-%COMP%]{position:absolute;bottom:30px;left:0;background-color:#66dc2e;font-size:18px;padding:5px 10px;font-weight:600}.cnt_edge[_ngcontent-%COMP%]{padding:40px}[_nghost-%COMP%]     .cnt_edge h2 p{font-size:50px;text-align:left;line-height:1;max-width:368px;color:#253489;font-weight:800;margin:0 0 20px}[_nghost-%COMP%]     .cnt_edge h2 p span{display:inline-block;line-height:1;font-size:24px;font-weight:400}.txt_edge_cnt[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:18px;color:#253489}.cnt_icons_edge[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:30px;align-items:center;align-content:center;margin:20px 0 0}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:inline-block}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#182360}.s_edge[_ngcontent-%COMP%]{padding:0 0 100px;position:relative}.s_edge[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:100%;max-height:280px;background:url(/assets/images/diseno/home/curva_azul_edge.svg) no-repeat center bottom;background-size:cover;top:-2;left:0;right:0;margin:auto;z-index:1}.cnt_items_elegir[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:24px;align-items:stretch}.item_elegir[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;gap:20px;background:linear-gradient(180deg,#fafafa,#fff);border-radius:24px;padding:20px;max-width:250px;justify-self:center}.item_elegir[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:inline-block;max-width:70px}.item_elegir[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.item_elegir[_ngcontent-%COMP%]   .txt_elegir[_ngcontent-%COMP%]{line-height:1.3}.s_porque_elegir[_ngcontent-%COMP%]{padding:0 0 100px}.c_porque_elegir[_ngcontent-%COMP%]{max-width:1050px;margin:auto}.s_proyecto_vivienda[_ngcontent-%COMP%]{background:linear-gradient(180deg,#e9edf700,#e8ebf1 72.6%),#fff;min-height:340px;position:relative}.s_proyecto_vivienda[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:-2px;background:url(/assets/images/diseno/proyectos_vivienda/curva_bg.svg) no-repeat;background-size:cover;background-position:center top;z-index:1;width:100%;height:100%;max-height:145px;pointer-events:none}.c_proyecto_vivienda[_ngcontent-%COMP%]{position:relative}.c_proyecto_vivienda[_ngcontent-%COMP%]:before, .c_proyecto_vivienda[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/nueva/images/diseno/proyectos_vivienda/puntos.svg) no-repeat center;width:20px;height:70px}.c_proyecto_vivienda[_ngcontent-%COMP%]:after{right:0;left:initial;top:initial;bottom:0;transform:rotate(180deg)}.s_cards_proyectos[_ngcontent-%COMP%]{padding:0 0 40px;position:relative;z-index:1}.s_cards_proyectos[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]{min-height:73.58px;margin-top:0}.c_cards_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}.card_p[_ngcontent-%COMP%]{overflow:hidden;background:#fff;box-shadow:0 19px 41px -18px #23386273;border-radius:24px;display:inline-grid}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;max-height:219px;width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:contain}.card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%]{text-align:center;position:absolute;left:10px;top:10px;border-radius:100px;padding:8px 20px;color:#fff;font-weight:600;font-size:14px;z-index:1}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:10px;right:10px;border-radius:6px;background:var(--color-grad_azul_osc);width:80px;height:40px;z-index:1;overflow:hidden}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{position:absolute;left:0;right:0;height:80%;width:1px;background-color:#a5a5a5;margin:auto;z-index:2}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;display:flex;justify-content:center;align-items:center;width:26px;height:26px;transition:.3s ease;width:100%;height:100%;position:relative}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{content:"";background-color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px;color:#fff;display:inline-flex;justify-content:center;align-items:center}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{background-color:#2e3b85;padding:10px;display:grid;grid-template-columns:80px 1fr;align-items:center;gap:20px;position:relative;min-height:54px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-width:87px;border-radius:100px;border:5px solid #FFFFFF;background-color:#fff;position:absolute;width:90px;height:90px;box-shadow:0 5px 15px -5px #00000054;left:10px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{grid-column:2;color:#fff;font-size:15px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 20px;text-align:center;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:34px;font-weight:900;display:flex;align-items:center;gap:10px;text-align:center;justify-content:center}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;display:inline-block}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]{width:100%;background:linear-gradient(90deg,#eeeeee80,#eee 48.96%,#eeeeee80);display:flex;align-items:center;justify-content:center;gap:10px;padding:10px}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:center;padding:10px}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover{color:#060b29}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(180deg,#5ffc7b,#26d044);border-radius:6px;display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:22px;color:#fff;font-weight:500}.card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:fit-content;justify-self:flex-end}.s_home_hero[_ngcontent-%COMP%]{min-height:717px;position:relative}.s_home_hero[_ngcontent-%COMP%]:before{display:none;content:"";position:absolute;bottom:-2px;width:100%;height:100%;max-height:120px;left:0;right:0;margin:0 auto;background-size:contain;z-index:10}[_nghost-%COMP%]     .s_home_hero .swiper-slide{min-height:650px;padding:80px;height:100%}[_nghost-%COMP%]     .swiperHomeHero .swiper-wrapper>.swiper-slide{height:auto}[_nghost-%COMP%]     .swiper-pagination-horizontal{width:100%;display:flex;gap:10px;left:0;bottom:62px;margin:auto;justify-content:center}[_nghost-%COMP%]     .swiper-pagination-bullet{width:12px;height:12px}[_nghost-%COMP%]     .swiper-pagination-bullet-active{width:12px;height:12px;background:#253489;border-radius:100px;transition:.3s ease}[_nghost-%COMP%]     .swiper-pagination-bullet-active{width:20px}.bg_img_h_hero[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;inset:0;z-index:1}.bg_img_h_hero_2[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;inset:0;z-index:1;object-fit:cover}.bg_img_h_hero[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;background:#fff;z-index:2;mix-blend-mode:color}.bg_img_h_hero[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;background:linear-gradient(to right,#ffffffd9,#fff);z-index:2;opacity:1}.bg_img_h_hero_2[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;mix-blend-mode:color}.bg_img_h_hero_2[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;opacity:1}.bg_img_h_hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.cnt_h_hero[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.5fr 1fr;position:relative;z-index:2;gap:40px}.grand_img_h_hero[_ngcontent-%COMP%]{position:relative;z-index:3}.grand_img_h_hero[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-40px;top:0;bottom:0;margin:auto;width:20px;height:90px;background:url(/assets/images/diseno/home/puntos.svg) no-repeat center;background-size:contain}.grand_img_h_hero[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-self:center}.grand_img_h_hero[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{position:absolute;z-index:2;max-width:200px;bottom:40px;left:-100px;border-radius:15px;overflow:hidden;box-shadow:8px 21px 30px -14px #112333;min-height:134px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:100%}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:160px 30px;overflow:hidden;max-height:454px;min-height:454px}.desc_txt_hero[_ngcontent-%COMP%]{display:flex;align-items:center;gap:30px;position:relative;z-index:2}.aside_prjct[_ngcontent-%COMP%]{border-radius:16px;background-color:#fff;padding:8px;display:flex;flex-direction:column;align-items:center;max-width:160px;min-width:150px;z-index:2}.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;align-items:center}.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.dt_prjct[_ngcontent-%COMP%]{border-radius:15px;padding:16px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:10px;color:#fff}.item_prjct[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;width:100%;text-align:left;font-size:13px}.item_prjct[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:grayscale(1) brightness(20)}.datos_info_prjct[_ngcontent-%COMP%]{max-width:680px;position:relative;z-index:1}.datos_info_prjct[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{padding:4px 20px;border-radius:100px;width:fit-content;color:#fff}.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:1;margin:14px 0;color:#182360;text-align:left}.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:400;text-align:left;padding:0 0 6px;border-bottom:1px solid #182360;width:fit-content;color:#182360;position:relative}.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{content:"";position:absolute;width:80px;height:6px;border-radius:100px;background-color:#3e6ddf;bottom:-3px;left:30px}.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:34px;color:#182360;margin:10px 0}.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:23px}@media screen and (min-width: 2540px){.s_home_hero[_ngcontent-%COMP%]:before{background-size:cover;background-position:top;max-height:169px}}@media screen and (max-width: 1440px){.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:43px}[_nghost-%COMP%]     .s_home_hero .swiper-slide{padding:80px 60px}}@media screen and (max-width: 1280px){.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{bottom:20px;left:-40px}.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:33px}[_nghost-%COMP%]     .s_home_hero .swiper-slide{padding:50px 30px 50px 60px;min-height:550px}}@media screen and (max-width: 1050px){.cnt_h_hero[_ngcontent-%COMP%]{grid-template-columns:1fr}.desc_txt_hero[_ngcontent-%COMP%]{gap:20px}[_nghost-%COMP%]     .swiper-pagination-horizontal{left:0!important;right:0!important;margin:auto!important;flex-direction:row!important;top:8px!important;bottom:initial!important;height:12px!important;width:100%}[_nghost-%COMP%]     .swiper-pagination-bullet-active{width:20px;height:12px}}@media screen and (max-width: 768px){.s_home_hero[_ngcontent-%COMP%]{margin-top:10px}[_nghost-%COMP%]     .s_home_hero .swiper-slide{padding:32px 20px;min-height:initial}.grand_img_h_hero[_ngcontent-%COMP%]{max-height:350px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%]{min-height:initial}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{left:0;right:0;margin:auto;bottom:-30px;width:130px;display:none}.cnt_items_elegir[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.cnt_edge[_ngcontent-%COMP%]{padding:20px}.c_edge[_ngcontent-%COMP%]{grid-template-columns:1fr}.txt_edge_cnt[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.cnt_icons_edge[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}}@media screen and (max-width: 480px){.cnt_h_hero[_ngcontent-%COMP%]{min-height:630px;gap:0px}.cnt_items_elegir[_ngcontent-%COMP%]{grid-template-columns:1fr}.item_elegir[_ngcontent-%COMP%]{max-width:initial}.desc_txt_hero[_ngcontent-%COMP%]{flex-direction:column;order:2;padding-top:0;gap:0}.datos_info_prjct[_ngcontent-%COMP%]{padding-top:16px}.aside_prjct[_ngcontent-%COMP%]{flex-direction:row;max-width:initial;width:100%}.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{max-width:100px}.dt_prjct[_ngcontent-%COMP%]{width:100%;text-align:left;justify-content:flex-start;align-items:flex-start;display:grid;grid-template-columns:1fr 1fr}.dt_prjct[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.place_prjct[_ngcontent-%COMP%]{grid-column:1/3}.grand_img_h_hero[_ngcontent-%COMP%]{max-height:250px}.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%]{border-radius:100px 20px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{bottom:-50px;max-height:90px;min-height:initial}.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}}']});let n=r;return n})();export{ut as ProjectsBannerComponent};

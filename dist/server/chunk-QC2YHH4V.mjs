import './polyfills.server.mjs';
import{a as y}from"./chunk-VTZAZGTN.mjs";import"./chunk-XFQKBCHA.mjs";import{a as w}from"./chunk-PTQY4S64.mjs";import{v as b}from"./chunk-Q5TJCI5I.mjs";import{Ab as a,Bb as p,Gb as s,Ma as _,Sa as o,T as x,Wb as u,cb as d,ib as f,ma as m,pb as g,vb as C,wb as M,xb as O,yb as P,zb as r}from"./chunk-ES2QDY3L.mjs";import{h as l}from"./chunk-VVCT4QZE.mjs";function v(t,n){if(t&1&&(r(0,"div",7)(1,"picture"),p(2,"img",8),a(),p(3,"div",9),a()),t&2){let e=n.$implicit,i=s(2);o(2),g("ngSrc",i.IMG_URL()+(e.imagen==null?null:e.imagen[0]))("alt",e.imagen_alt)("title",e.imagen_title),o(),g("innerHtml",e.descripcion_item_por_que_elegirnos_home,_)}}function j(t,n){if(t&1&&(r(0,"div",1)(1,"section",2)(2,"div",3)(3,"div",4),p(4,"h2",5),r(5,"div",6),O(6,v,4,4,"div",10,M),a()()()()()),t&2){let e=s();o(4),g("innerHtml",e.data.titulo_por_que_elegir,_),o(2),P(e.itemsWhyChooseUs())}}var I=(()=>{let n=class n{constructor(){this.IMG_URL=d(w.imagenes_url),this.itemsWhyChooseUs=d([]),this.pageService=m(y)}ngOnInit(){return l(this,null,function*(){console.log('%csrc/app/modules/home/components/why-choose-us/why-choose-us.component.ts:20 "object"',"color: #007acc;","object");let i=yield this.pageService.getElementsContent("titulo item por que elegirnos home","item_elegirnos_home");this.itemsWhyChooseUs.set(i)})}};n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=x({type:n,selectors:[["app-why-choose-us"]],inputs:{data:"data"},standalone:!0,features:[u],decls:1,vars:1,consts:[["class","bg_grad"],[1,"bg_grad"],[1,"s_porque_elegir"],[1,"cnt_central"],[1,"c_porque_elegir"],[1,"title_section","al-center",3,"innerHtml"],[1,"cnt_items_elegir"],[1,"item_elegir"],["width","75","height","75",3,"ngSrc","alt","title"],[1,"txt_elegir",3,"innerHtml"],["class","item_elegir"]],template:function(c,h){c&1&&f(0,j,8,1,"div",0),c&2&&C(0,h.data&&h.itemsWhyChooseUs().length>0?0:-1)},dependencies:[b],styles:['.bg_grad[_ngcontent-%COMP%]{min-height:400px;padding-top:64px;background:linear-gradient(to top,#f0f2f7,#fff,#eef1f9)}.c_edge[_ngcontent-%COMP%]{background:#fff;box-shadow:0 102px 24px -108px #1a41e540,0 20px 31px -14px #4453a640;display:grid;grid-template-columns:2fr 1fr;position:relative;z-index:2;max-width:1050px;margin:0 auto}.c_edge[_ngcontent-%COMP%] > picture[_ngcontent-%COMP%]{display:inline-block;position:relative;width:100%;height:100%}.logo_edge[_ngcontent-%COMP%]{position:absolute;z-index:1;top:20px;right:10px;background-color:#fff;padding:4px;border-radius:0 20px;width:100%;height:100%;object-fit:contain;max-width:100px;height:fit-content}.img_pri_edge[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.hashtag[_ngcontent-%COMP%]{position:absolute;bottom:30px;left:0;background-color:#66dc2e;font-size:18px;padding:5px 10px;font-weight:600}.cnt_edge[_ngcontent-%COMP%]{padding:40px}[_nghost-%COMP%]     .cnt_edge h2 p{font-size:50px;text-align:left;line-height:1;max-width:368px;color:#253489;font-weight:800;margin:0 0 20px}[_nghost-%COMP%]     .cnt_edge h2 p span{display:inline-block;line-height:1;font-size:24px;font-weight:400}.txt_edge_cnt[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:18px;color:#253489}.cnt_icons_edge[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:30px;align-items:center;align-content:center;margin:20px 0 0}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:inline-block}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#182360}.s_edge[_ngcontent-%COMP%]{padding:0 0 100px;position:relative}.s_edge[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:100%;max-height:280px;background:url(/assets/images/diseno/home/curva_azul_edge.svg) no-repeat center bottom;background-size:cover;top:-2;left:0;right:0;margin:auto;z-index:1}.cnt_items_elegir[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:24px;align-items:stretch}.item_elegir[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;gap:20px;background:linear-gradient(180deg,#fafafa,#fff);border-radius:24px;padding:20px;max-width:250px;justify-self:center}.item_elegir[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:inline-block;max-width:70px}.item_elegir[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.item_elegir[_ngcontent-%COMP%]   .txt_elegir[_ngcontent-%COMP%]{line-height:1.3}.s_porque_elegir[_ngcontent-%COMP%]{padding:0 0 100px}.c_porque_elegir[_ngcontent-%COMP%]{max-width:1050px;margin:auto}.s_proyecto_vivienda[_ngcontent-%COMP%]{background:linear-gradient(180deg,#e9edf700,#e8ebf1 72.6%),#fff;min-height:340px;position:relative}.s_proyecto_vivienda[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;bottom:-2px;background:url(/assets/images/diseno/proyectos_vivienda/curva_bg.svg) no-repeat;background-size:cover;background-position:center top;z-index:1;width:100%;height:100%;max-height:145px;pointer-events:none}.c_proyecto_vivienda[_ngcontent-%COMP%]{position:relative}.c_proyecto_vivienda[_ngcontent-%COMP%]:before, .c_proyecto_vivienda[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/nueva/images/diseno/proyectos_vivienda/puntos.svg) no-repeat center;width:20px;height:70px}.c_proyecto_vivienda[_ngcontent-%COMP%]:after{right:0;left:initial;top:initial;bottom:0;transform:rotate(180deg)}.s_cards_proyectos[_ngcontent-%COMP%]{padding:0 0 40px;position:relative;z-index:1}.s_cards_proyectos[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%]{min-height:73.58px;margin-top:0}.c_cards_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}.card_p[_ngcontent-%COMP%]{overflow:hidden;background:#fff;box-shadow:0 19px 41px -18px #23386273;border-radius:24px;display:inline-grid}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;max-height:219px;width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%}.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block;object-fit:contain}.card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%]{text-align:center;position:absolute;left:10px;top:10px;border-radius:100px;padding:8px 20px;color:#fff;font-weight:600;font-size:14px;z-index:1}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;top:10px;right:10px;border-radius:6px;background:var(--color-grad_azul_osc);width:80px;height:40px;z-index:1;overflow:hidden}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]:before{position:absolute;left:0;right:0;height:80%;width:1px;background-color:#a5a5a5;margin:auto;z-index:2}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:8px;display:flex;justify-content:center;align-items:center;width:26px;height:26px;transition:.3s ease;width:100%;height:100%;position:relative}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{content:"";background-color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;font-size:20px;color:#fff;display:inline-flex;justify-content:center;align-items:center}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]{background-color:#2e3b85;padding:10px;display:grid;grid-template-columns:80px 1fr;align-items:center;gap:20px;position:relative;min-height:54px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-width:87px;border-radius:100px;border:5px solid #FFFFFF;background-color:#fff;position:absolute;width:90px;height:90px;box-shadow:0 5px 15px -5px #00000054;left:10px}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply}.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{grid-column:2;color:#fff;font-size:15px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]{padding:30px 20px 20px;text-align:center;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:34px;font-weight:900;display:flex;align-items:center;gap:10px;text-align:center;justify-content:center}.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;display:inline-block}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]{width:100%;background:linear-gradient(90deg,#eeeeee80,#eee 48.96%,#eeeeee80);display:flex;align-items:center;justify-content:center;gap:10px;padding:10px}.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:center;padding:10px}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:var(--color-c2)}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover{color:#060b29}.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(180deg,#5ffc7b,#26d044);border-radius:6px;display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:22px;color:#fff;font-weight:500}.card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:fit-content;justify-self:flex-end}.s_home_hero[_ngcontent-%COMP%]{min-height:717px;position:relative}.s_home_hero[_ngcontent-%COMP%]:before{display:none;content:"";position:absolute;bottom:-2px;width:100%;height:100%;max-height:120px;left:0;right:0;margin:0 auto;background-size:contain;z-index:10}.s_home_hero[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{min-height:650px;padding:80px;height:100%}[_nghost-%COMP%]     .swiperHomeHero .swiper-wrapper>.swiper-slide{height:auto}[_nghost-%COMP%]     .swiper-pagination-horizontal{width:100%;display:flex;gap:10px;left:0;bottom:62px;margin:auto;justify-content:center}[_nghost-%COMP%]     .swiper-pagination-bullet{width:12px;height:12px}[_nghost-%COMP%]     .swiper-pagination-bullet-active{width:12px;height:12px;background:#253489;border-radius:100px;transition:.3s ease}[_nghost-%COMP%]     .swiper-pagination-bullet-active{width:20px}.bg_img_h_hero[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;inset:0;z-index:1}.bg_img_h_hero_2[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;inset:0;z-index:1;object-fit:cover}.bg_img_h_hero[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;background:#fff;z-index:2;mix-blend-mode:color}.bg_img_h_hero[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;background:linear-gradient(to right,#ffffffd9,#fff);z-index:2;opacity:1}.bg_img_h_hero_2[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;mix-blend-mode:color}.bg_img_h_hero_2[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;margin:auto;width:100%;height:100%;opacity:1}.bg_img_h_hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.cnt_h_hero[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.5fr 1fr;position:relative;z-index:2;gap:40px}.grand_img_h_hero[_ngcontent-%COMP%]{position:relative;z-index:3}.grand_img_h_hero[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-40px;top:0;bottom:0;margin:auto;width:20px;height:90px;background:url(/assets/images/diseno/home/puntos.svg) no-repeat center;background-size:contain}.grand_img_h_hero[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:flex;align-items:center;justify-self:center}.grand_img_h_hero[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;object-fit:cover}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{position:absolute;z-index:2;max-width:200px;bottom:40px;left:-100px;border-radius:15px;overflow:hidden;box-shadow:8px 21px 30px -14px #112333;min-height:134px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:100%}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:160px 30px;overflow:hidden;max-height:454px;min-height:454px}.desc_txt_hero[_ngcontent-%COMP%]{display:flex;align-items:center;gap:30px;position:relative;z-index:2}.aside_prjct[_ngcontent-%COMP%]{border-radius:16px;background-color:#fff;padding:8px;display:flex;flex-direction:column;align-items:center;max-width:160px;min-width:150px;z-index:2}.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;align-items:center}.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain}.dt_prjct[_ngcontent-%COMP%]{border-radius:15px;padding:16px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:10px;color:#fff}.item_prjct[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;width:100%;text-align:left;font-size:13px}.item_prjct[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{filter:grayscale(1) brightness(20)}.datos_info_prjct[_ngcontent-%COMP%]{max-width:680px;position:relative;z-index:1}.datos_info_prjct[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{padding:4px 20px;border-radius:100px;width:fit-content;color:#fff}.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:1;margin:14px 0;color:#182360;text-align:left}.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:400;text-align:left;padding:0 0 6px;border-bottom:1px solid #182360;width:fit-content;color:#182360;position:relative}.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{content:"";position:absolute;width:80px;height:6px;border-radius:100px;background-color:#3e6ddf;bottom:-3px;left:30px}.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:34px;color:#182360;margin:10px 0}.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:23px}@media screen and (min-width: 2540px){.s_home_hero[_ngcontent-%COMP%]:before{background-size:cover;background-position:top;max-height:169px}}@media screen and (max-width: 1440px){.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:43px}.s_home_hero[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{padding:80px 60px}}@media screen and (max-width: 1280px){.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{bottom:20px;left:-40px}.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:33px}.s_home_hero[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{padding:50px 30px 50px 60px;min-height:550px}}@media screen and (max-width: 1050px){.cnt_h_hero[_ngcontent-%COMP%]{grid-template-columns:1fr}.desc_txt_hero[_ngcontent-%COMP%]{gap:20px}[_nghost-%COMP%]     .swiper-pagination-horizontal{left:0!important;right:0!important;margin:auto!important;flex-direction:row!important;top:8px!important;bottom:initial!important;height:12px!important;width:100%}[_nghost-%COMP%]     .swiper-pagination-bullet-active{width:20px;height:12px}}@media screen and (max-width: 768px){.s_home_hero[_ngcontent-%COMP%]{margin-top:10px}.s_home_hero[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{padding:32px 20px;min-height:initial}.grand_img_h_hero[_ngcontent-%COMP%]{max-height:350px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%]{min-height:initial}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{left:0;right:0;margin:auto;bottom:-30px;width:130px;display:none}.cnt_items_elegir[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.cnt_edge[_ngcontent-%COMP%]{padding:20px}.c_edge[_ngcontent-%COMP%]{grid-template-columns:1fr}.txt_edge_cnt[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.cnt_icons_edge[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}}@media screen and (max-width: 480px){.cnt_h_hero[_ngcontent-%COMP%]{gap:0px}.cnt_items_elegir[_ngcontent-%COMP%]{grid-template-columns:1fr}.item_elegir[_ngcontent-%COMP%]{max-width:initial}.desc_txt_hero[_ngcontent-%COMP%]{flex-direction:column;order:2;padding-top:0;gap:0}.datos_info_prjct[_ngcontent-%COMP%]{padding-top:16px}.aside_prjct[_ngcontent-%COMP%]{flex-direction:row;max-width:initial;width:100%}.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{max-width:100px}.dt_prjct[_ngcontent-%COMP%]{width:100%;text-align:left;justify-content:flex-start;align-items:flex-start;display:grid;grid-template-columns:1fr 1fr}.dt_prjct[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.place_prjct[_ngcontent-%COMP%]{grid-column:1/3}.grand_img_h_hero[_ngcontent-%COMP%]{max-height:250px}.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%]{border-radius:100px 20px}.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%]{bottom:-50px;max-height:90px;min-height:initial}.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}}']});let t=n;return t})();export{I as WhyChooseUsComponent};

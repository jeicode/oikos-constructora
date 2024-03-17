import './polyfills.server.mjs';
import{a as M}from"./chunk-E6O2DE43.mjs";import{a as b}from"./chunk-CRUCEMX5.mjs";import{Aa as c,Ba as _,Ra as p,Sa as l,W as u,Wa as h,Z as i,_ as m,ec as x,fc as f,pa as s,u as d,za as r}from"./chunk-CLTGIIR5.mjs";import{h as o}from"./chunk-VVCT4QZE.mjs";var S=(()=>{let n=class n{constructor(e){this.pageService=e,this.images=[],this.IMG_URL=b.imagenes_url}ngOnInit(){this.init()}init(){return o(this,null,function*(){yield this.getData(),yield this.getImages()})}getData(){return o(this,null,function*(){let e=yield this.pageService.getContentPage("404");e&&(this.data=e)})}getImages(){return o(this,null,function*(){let e=yield this.pageService.getImagesBySlugPage("404");e&&(this.images=e)})}};n.\u0275fac=function(a){return new(a||n)(m(M))},n.\u0275cmp=d({type:n,selectors:[["app-not-found-page"]],standalone:!0,features:[h],decls:10,vars:6,consts:[[1,"cuerpo"],[1,"s_gracias_404","s_404"],[1,"cnt_central"],[1,"c_gracias_404","c_404"],["width","393","height","240",3,"src","alt","title"],[1,"btn","al-center",3,"routerLink"]],template:function(a,t){a&1&&(r(0,"body",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"picture"),_(5,"img",4),c(),r(6,"h2"),p(7),c(),r(8,"a",5),p(9),c()()()()()),a&2&&(i(5),s("src",t.IMG_URL+(t.images[0]==null?null:t.images[0].field_content),u)("alt",t.images[0]==null?null:t.images[0].alt)("title",t.images[0]==null?null:t.images[0].title),i(2),l(t.data==null?null:t.data.titulo_404),i(),s("routerLink",t.data==null?null:t.data.link_btn_404),i(),l(t.data==null?null:t.data.texto_btn_404))},dependencies:[f,x],styles:['.c_gracias_404[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;padding:40px 20px 100px}.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain}.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-30%;top:30%;width:76px;height:43px;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/gracias_404/puntos1.svg) no-repeat center;background-size:contain;z-index:1}.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]:after{content:"";position:absolute;right:-20%;top:15%;width:20px;height:70px;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/gracias_404/puntos2.svg) no-repeat center;background-size:contain;z-index:1}h1[_ngcontent-%COMP%]{font-size:53px;background:linear-gradient(180deg,#2c3ea0,#131d54);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;margin:0 0 10px;line-height:1}h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:800}h2[_ngcontent-%COMP%]{font-weight:600;max-width:550px;margin:30px 0;line-height:1.2;text-align:center}.txt_page[_ngcontent-%COMP%]{font-size:20px;max-width:530px;margin:0 0 20px}.c_404[_ngcontent-%COMP%]{height:60vh;padding:60px 0 100px;position:relative}.c_404[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:40px;left:0;right:0;margin:auto;width:100%;max-width:600px;height:100%;max-height:90px;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/gracias_404/tuercas.svg) no-repeat center;background-size:contain}.c_404[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{height:40px}.bg_gracias[_ngcontent-%COMP%]{background:linear-gradient(to top,#e9edf729,#e8ebf1);background-blend-mode:normal,color;position:relative;padding-top:40px}.bg_gracias[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:300;margin:40px 0 10px;text-align:center}.bg_gracias[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:800}.bg_gracias[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;line-height:1.3;color:#131d54;max-width:550px;margin:0 auto 30px;text-align:center}.bg_gracias[_ngcontent-%COMP%]:before{content:"";position:absolute;left:2%;top:10%;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/gracias_404/puntos2.svg) no-repeat center;background-size:contain;width:30px;height:90px}.bg_gracias[_ngcontent-%COMP%]:after{content:"";position:absolute;right:2%;bottom:10%;background:url(https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/gracias_404/puntos2.svg) no-repeat center;background-size:contain;width:30px;height:90px;transform:rotate(180deg)}@media screen and (max-width: 480px){h1[_ngcontent-%COMP%]{font-size:32px}.c_gracias_404[_ngcontent-%COMP%]{padding-left:0;padding-top:0;padding-right:0;margin:-40px 0 0}picture[_ngcontent-%COMP%]:before, picture[_ngcontent-%COMP%]:after{display:none}.c_404[_ngcontent-%COMP%]{height:initial;margin-top:0;padding-top:60px}}']});let g=n;return g})();export{S as a};

"use strict";(self.webpackChunkoikos_constructora=self.webpackChunkoikos_constructora||[]).push([[466],{8466:(b,u,o)=>{o.r(u),o.d(u,{ThanksModule:()=>P});var l=o(6895),r=o(5906),g=o(5861),t=o(8256),d=o(5480),f=o(655);let m=(()=>{class n{constructor(e,a,i){this.pageService=e,this.router=a,this.seoService=i}canActivate(e,a){var i=this;return(0,g.Z)(function*(){const p=e.params.slug,s=yield i.pageService.getSeoContentPage(p);return null!=s?.friendly_url?(i.pageService.currentPage=s,i.seoService.setUpMetaTags(s),!0):(i.router.navigateByUrl("404",{skipLocationChange:!0}),!1)})()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(d.P),t.LFG(r.F0),t.LFG(f.v))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var x=o(4130),h=o(5141);const v=[{path:"",component:(()=>{class n{constructor(e,a,i,p){this.pageService=e,this.router=a,this.configServ=i,this.activateRoute=p,this.data=[],this.imagenes=[],this.imagen_prin=[],this.nameContact="";const s=this.router.getCurrentNavigation()?.extras.state;s&&(this.nameContact=s.nameContact),this.slug=this.activateRoute.snapshot.paramMap.get("slug"),this.suscribeListenRouter=this.router.events.subscribe(O=>{O instanceof r.m2&&(this.slug=this.activateRoute.snapshot.paramMap.get("slug"),this.configServ.goUpPage(),this.getData())})}ngOnInit(){this.init()}init(){var e=this;return(0,g.Z)(function*(){const a=[()=>e.getData()];for(const i of a)yield i()})()}getData(){var e=this;return(0,g.Z)(function*(){e.data=yield e.pageService.getPageContent(e.slug)})()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.P),t.Y36(r.F0),t.Y36(x.E),t.Y36(r.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-thanks"]],decls:22,vars:3,consts:[[1,"bg_gracias"],[1,"s_gracias_404"],[1,"cnt_central"],[1,"c_gracias_404"],["width","393","height","240","src","assets/images/diseno/gracias_404/gracias_img.png","alt",""],["routerLink","/",1,"btn","al-center"],[1,"s_carr_proy"],[1,"bg_round"],[1,"title_section","al_center"],[1,"cnt_car_proy_dest"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"picture"),t._UZ(5,"img",4),t.qZA(),t.TgZ(6,"h1"),t._uU(7),t.qZA(),t.TgZ(8,"h3"),t._uU(9),t.qZA(),t.TgZ(10,"a",5),t._uU(11,"Volver al inicio"),t.qZA()()()()(),t.TgZ(12,"section",6)(13,"span",7),t._UZ(14,"span"),t.qZA(),t.TgZ(15,"div",2)(16,"h2",8)(17,"span"),t._uU(18,"Proyectos "),t.qZA(),t._uU(19," en construcci\xf3n "),t.qZA(),t.TgZ(20,"div",9),t._UZ(21,"app-slide-projects"),t.qZA()()()),2&e&&(t.xp6(7),t.AsE("",a.data.texto1_gracias_proyecto," ",a.nameContact,""),t.xp6(2),t.Oqu(a.data.texto2_gracias_proyecto))},dependencies:[r.yS,h.L],styles:['.s_gracias_404[_ngcontent-%COMP%]{padding-top:40px}.c_gracias_404[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;padding:40px 20px 100px}.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain}.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-30%;top:30%;width:76px;height:43px;background:url(puntos1.56fc6499f5012647.svg) no-repeat center;background-size:contain;z-index:1}.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]:after{content:"";position:absolute;right:-20%;top:15%;width:20px;height:70px;background:url(puntos2.d629ec2278294ed5.svg) no-repeat center;background-size:contain;z-index:1}h1[_ngcontent-%COMP%]{font-size:53px;background:linear-gradient(180deg,#2C3EA0 0%,#131D54 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-fill-color:transparent;margin:0 0 10px;line-height:1}h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:800}.txt_page[_ngcontent-%COMP%]{font-size:20px;max-width:530px;margin:0 0 20px}.c_404[_ngcontent-%COMP%]{height:auto;padding:60px 0 100px;position:relative}.c_404[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:40px;left:0;right:0;margin:auto;width:100%;max-width:600px;height:100%;max-height:90px;background:url(tuercas.50f5336545432d56.svg) no-repeat center;background-size:contain}.c_404[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{height:40px}.bg_gracias[_ngcontent-%COMP%]{background:linear-gradient(to top,rgba(233,237,247,.16),#E8EBF1);background-blend-mode:normal,color;position:relative;padding-top:40px}.bg_gracias[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:300;margin:40px 0 10px;text-align:center}.bg_gracias[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:800}.bg_gracias[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;line-height:1.3;color:#131d54;max-width:550px;margin:0 auto 30px;text-align:center}.bg_gracias[_ngcontent-%COMP%]:before{content:"";position:absolute;left:2%;top:10%;background:url(puntos2.d629ec2278294ed5.svg) no-repeat center;background-size:contain;width:30px;height:90px}.bg_gracias[_ngcontent-%COMP%]:after{content:"";position:absolute;right:2%;bottom:10%;background:url(puntos2.d629ec2278294ed5.svg) no-repeat center;background-size:contain;width:30px;height:90px;transform:rotate(180deg)}@media screen and (max-width: 480px){h1[_ngcontent-%COMP%]{font-size:32px}.c_gracias_404[_ngcontent-%COMP%]{padding-left:0;padding-top:0;padding-right:0;margin:-40px 0 0}picture[_ngcontent-%COMP%]:before, picture[_ngcontent-%COMP%]:after{display:none}.c_404[_ngcontent-%COMP%]{height:initial;margin-top:0;padding-top:60px}}']}),n})(),canActivate:[m]}];let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(v),r.Bz]}),n})();var _=o(529),M=o(4883);let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,C,_.JF,M.x,h.L]}),n})()}}]);
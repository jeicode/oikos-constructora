"use strict";(self.webpackChunkoikos_constructora=self.webpackChunkoikos_constructora||[]).push([[592],{8731:(d,i,r)=>{r.d(i,{L:()=>T});var c=r(6895),u=r(2100);class b{constructor(n="",t=""){this.title=n,this.link=t}}var e=r(8256);function h(s,n){if(1&s&&(e.TgZ(0,"div")(1,"a",2),e._uU(2),e.qZA(),e._UZ(3,"span",3),e.qZA()),2&s){const t=n.$implicit,o=e.oxw();e.xp6(1),e.Udp("color",o.colorTxt),e.Q6J("routerLink",null==t?null:t.link),e.xp6(1),e.Oqu(null==t?null:t.title)}}let T=(()=>{class s{constructor(t){this.router=t,this.cssClass="",this.colorTxt="black",this.crumbTitle="",this.breadcrumbs=[],this.numberRoutesToDelete=0,this.test=0}ngOnInit(){let t=this.router.url.split("/");const{paths:o,crumbTitle:l}=this.deletePathsInRoute(t);t=o,this.crumbTitle||(this.crumbTitle=this.capitalizeFirstLetter(l[0]));let m="";this.breadcrumbs=t.map(p=>{m+=`${p}/`;const a=new b;return a.title=this.capitalizeFirstLetter(p),a.link=m,a})}deletePathsInRoute(t){let o=t.length;this.numberRoutesToDelete&&this.numberRoutesToDelete<o&&t.splice(t.length-this.numberRoutesToDelete,o);const l=t.splice(o-1,o);return{paths:t,crumbTitle:l}}capitalizeFirstLetter(t){return t?t.charAt(0).toUpperCase()+t.slice(1):"Oikos Constructora"}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(u.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-breadcrumb"]],inputs:{cssClass:"cssClass",colorTxt:"colorTxt",crumbTitle:"crumbTitle",breadcrumbs:"breadcrumbs",numberRoutesToDelete:"numberRoutesToDelete",test:"test"},standalone:!0,features:[e.jDz],decls:4,vars:6,consts:[[1,"miga"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"fas","fa-chevron-right"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,h,4,4,"div",1),e.TgZ(2,"a"),e._uU(3),e.qZA()()),2&t&&(e.Udp("color",o.colorTxt),e.xp6(1),e.Q6J("ngForOf",o.breadcrumbs),e.xp6(1),e.Udp("color",o.colorTxt),e.xp6(1),e.Oqu(o.crumbTitle))},dependencies:[c.ez,c.sg,u.Bz,u.yS],encapsulation:2}),s})()},9019:(d,i,r)=>{r.d(i,{N:()=>c});const c={production:!0,base_url:"https://adminpaxzu-devcons.oikos.com.co/",api_url:"https://adminpaxzu-devcons.oikos.com.co/api/",token:"aff7d877-d0ff-4dfa-a85c-d9715ea82061",imagenes_url:"https://adminpaxzu-devcons.oikos.com.co/"}}}]);
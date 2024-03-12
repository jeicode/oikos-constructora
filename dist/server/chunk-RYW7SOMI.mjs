import './polyfills.server.mjs';
import{a as d}from"./chunk-PTQY4S64.mjs";import{w as m}from"./chunk-Y5MNMU2Z.mjs";import{$ as y,la as g,n as l}from"./chunk-6MVF4B2C.mjs";import{h as i}from"./chunk-VVCT4QZE.mjs";var f=class{constructor(a="",$="",t="",o="",e="",r="",c="",n="",h="",_="",u="",P="",v="",w="",C="",j="",b="",B="",I="",T="",F="",z="",L="",S="",x="",H="",U="",k="",J="",N="",O="",W="",A="",D="",R="",V="",q="",E="",G="",K="",M="",Q="",X="",Y="",Z="",tt="",ot="",et="",st="",it="",rt="",at="",ct="",nt="",ht="",lt="",pt="",_t="",ut="",yt="",gt="",mt="",dt="",ft="",$t="",Pt="",vt="",wt="",Ct="",jt="",bt="",Bt="",It="",Tt="",Ft="",zt="",Lt="",St="",xt="",Ht="",Ut="",kt="",Jt="",Nt="",Ot="",Wt=[],At=[],Dt=[],Rt=[],Vt=[],qt="",Et="",Gt="",Kt=[],Mt="",Qt=0,Xt=""){this.active=a,this.alt_banner=$,this.alt_fondo=t,this.alt_lateral_proyecto=o,this.alt_logo=e,this.alt_principal=r,this.api_wsp=c,this.api_wsp_flotante=n,this.area=h,this.bandera=_,this.bodegas=u,this.calculadora=P,this.canonical=v,this.categoria_proyecto=w,this.celular_salaventas=C,this.centros_comerciales=j,this.color_primario=b,this.color_secundario=B,this.cuotaminima=I,this.descripcion_proyecto=T,this.destacar=F,this.destacar2=z,this.direccion_proyecto=L,this.direccion_salaventas=S,this.director_ventas=x,this.email=H,this.email_contactos=U,this.enlace_wsp_proyecto=k,this.estado_proyecto=J,this.facebook_lead=N,this.fecha=O,this.footer=W,this.gracias_proyecto=A,this.horario=D,this.id=R,this.id_origen_sinco=V,this.id_proyecto_sinco=q,this.id_sinco=E,this.id_smartcalculadora=G,this.id_smartcontacto=K,this.imagen_banner_proyecto=M,this.imagen_fondo_proyecto=Q,this.imagen_lateral_proyecto=X,this.imagen_og_proyecto=Y,this.imagen_principal_proyecto=Z,this.interna=tt,this.local_comercial=ot,this.local_comida=et,this.logo_proyecto=st,this.metadescription=it,this.metatitle=rt,this.msg_wsp_flotante=at,this.msg_wsp_home=ct,this.msg_wsp_interna=nt,this.ord=ht,this.porcentaje_minimo=lt,this.porcentaje_separacion=pt,this.redirigir=_t,this.resumen_proyecto=ut,this.seccion=yt,this.subsidio=gt,this.telefono_salaventas=mt,this.texto_adicional=dt,this.texto_video=ft,this.tipo_proyecto=$t,this.title_banner=Pt,this.title_fondo=vt,this.title_lateral_proyecto=wt,this.title_logo=Ct,this.title_principal=jt,this.titulo_proyecto=bt,this.titulo_proyecto_wsp=Bt,this.tourguiado=It,this.ubicacion_proyecto=Tt,this.url_amigable=Ft,this.url_video=zt,this.url_waze=Lt,this.valor_proyecto=St,this.valor_proyecto_formato=xt,this.vista360=Ht,this.wsp_flotante=Ut,this.api_wsp_web=kt,this.wsp_home=Jt,this.wsp_interna=Nt,this.zona_proyecto=Ot,this.galeria=Wt,this.planos=At,this.tipologia=Dt,this.avances=Rt,this.zonas=Vt,this.cuota_inicial=qt,this.cuota_separacion=Et,this.saldo_cuota=Gt,this.numero_cuotas=Kt,this.financiar=Mt,this.dollar_value=Qt,this.origin=Xt}};var{api_url:s}=d,so=(()=>{let a=class a{constructor(t){this._http=t}getCitiesByProjectType(t){return i(this,null,function*(){let o=`${s}v1/getCitiesByProjectType?project_type=${t}`;return l(this._http.get(o)).then().catch(e=>(console.warn(e),!1))})}getHousingTypesByType(t){return i(this,null,function*(){let o=`${s}v1/getHousingTypesByType?project_type=${t}`;return l(this._http.get(o)).then().catch(e=>(console.warn(e),!1))})}getFeaturedProjects(){return i(this,null,function*(){let t=`${s}v1/getProyectosDestacados`;return l(this._http.get(t)).then().catch(o=>(console.warn(o),[]))})}getProyectosByTipo(t,o,e,r,c,n,h){return i(this,null,function*(){let _=`${s}v1/getProyectosByTipo?tipo=${t}&ciudad=${o}&tipo_proyecto=${e}&precio=${r}&limite=${c}&section=${n}&order=${h}`;return this._http.get(_).toPromise().then().catch(u=>(console.warn(u),[]))})}getProyectoByUrl(t){return i(this,null,function*(){let o=`${s}v1/getProyectoByUrl?friendly_url=${t}`;return this._http.get(o).toPromise().then().catch(e=>(console.warn(e),!1))})}getCalculoPorcentaje(t,o,e,r,c){return i(this,null,function*(){let n=`${s}v1/getCalculoPorcentaje?valorProyecto=${t}&porcentaje=${o}&cuotasinicialfinanciar=${e}&plazo=${r}&valorafinanciaranios=${c}`;return this._http.get(n).toPromise().then().catch(h=>(console.warn(h),!1))})}getCalculoCuota(t,o){return i(this,null,function*(){let e=`${s}v1/getCalculoCuota?cuota=${o}&saldocuotainicial=${t}`;return this._http.get(e).toPromise().then().catch(r=>(console.warn(r),!1))})}getPlazoanios(t,o){return i(this,null,function*(){let e=`${s}v1/getPlazoanios?cuota=${t}&valorafinanciar=${o}`;return this._http.get(e).toPromise().then().catch(r=>(console.warn(r),!1))})}setCalculadoraForm(t){let o=`${s}v1/setCalculadoraForm`;return this._http.post(o,JSON.stringify(t)).toPromise().then().catch(e=>(console.warn(e),!1))}setContactFormProyecto(t){let o=`${s}v1/setContactFormProyecto`;return this._http.post(o,JSON.stringify(t)).toPromise().then().catch(e=>(console.warn(e),!1))}getCategoriasInteres(t){return i(this,null,function*(){let o=`${s}v1/getCategoriasInteres?id_proyecto=${t}`;return this._http.get(o).toPromise().then().catch(e=>(console.warn(e),!1))})}getSitiosInteres(t,o){return i(this,null,function*(){let e=`${s}v1/getSitiosInteres?id_proyecto=${o}&id_categoria=${t}`;return this._http.get(e).toPromise().then().catch(r=>(console.warn(r),!1))})}getSeoContentProject(t){return i(this,null,function*(){let o=`${s}v1/getSeoContentProject?friendly_url=${t}`;return this._http.get(o).toPromise().then().catch(e=>(console.warn(e),!1))})}getPreciosProyectos(t){return i(this,null,function*(){let o=`${s}v1/getPreciosProyectos?tipo=${t}`;return this._http.get(o).toPromise().then()})}createContactWppProject(t){return i(this,null,function*(){let o=`${s}v1/createContactWppProject`;return this._http.post(o,t).toPromise().then()})}createContactPreLaunchProject(t){return i(this,null,function*(){let o=`${s}v1/createContactPreLaunchProject`;return this._http.post(o,t).toPromise().then().catch(e=>(console.warn(e),!1))})}getProjectsByIdList(t){return i(this,null,function*(){let o=`${s}v1/getProjectsByIdList?ids=${t}`;return l(this._http.get(o)).then().catch(e=>(console.warn(e),[]))})}};a.\u0275fac=function(o){return new(o||a)(g(m))},a.\u0275prov=y({token:a,factory:a.\u0275fac,providedIn:"root"});let p=a;return p})();export{f as a,so as b};

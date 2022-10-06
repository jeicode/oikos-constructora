"use strict";
(self["webpackChunkoikos_constructora"] = self["webpackChunkoikos_constructora"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/pages/not-found-page/not-found-page.component */ 5481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_directives_default-img_directive_ts-src_app_shared_services_api_projec-e8a8f2"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 4882)).then(m => m.HomeModule)
    },
    {
        path: 'contactanos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_services_functions_form_service_ts-node_modules_angular_forms_fesm2020-376538"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_contact_contact_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/contact/contact.module */ 3033)).then(m => m.ContactModule)
    },
    {
        path: 'gracias/:slug',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_directives_default-img_directive_ts-src_app_shared_services_api_projec-e8a8f2"), __webpack_require__.e("default-src_app_shared_components_slide-projects_slide-projects_component_ts-src_app_shared_s-aa6456"), __webpack_require__.e("src_app_modules_thanks_thanks_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/thanks/thanks.module */ 7411)).then(m => m.ThanksModule)
    },
    {
        path: 'noticias',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_directives_default-img_directive_ts-src_app_shared_services_api_projec-e8a8f2"), __webpack_require__.e("default-src_app_shared_components_slide-projects_slide-projects_component_ts-src_app_shared_s-aa6456"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_blog_blog_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/blog/blog.module */ 6195)).then(m => m.BlogModule)
    },
    {
        path: 'proyectos-construccion-vivienda',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_projects_vivienda_vivienda_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/projects/vivienda/vivienda.module */ 5500)).then(m => m.ViviendaModule)
    }, {
        path: 'proyectos-construccion-comerciales-industriales',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_projects_comerciales_comerciales_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/projects/comerciales/comerciales.module */ 6208)).then(m => m.ComercialesModule)
    }, {
        path: 'proyecto/:slug',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_directives_default-img_directive_ts-src_app_shared_services_api_projec-e8a8f2"), __webpack_require__.e("default-src_app_shared_components_slide-projects_slide-projects_component_ts-src_app_shared_s-aa6456"), __webpack_require__.e("default-src_app_shared_services_functions_form_service_ts-node_modules_angular_forms_fesm2020-376538"), __webpack_require__.e("src_app_modules_projects_interna_interna_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/projects/interna/interna.module */ 7540)).then(m => m.InternaModule)
    }, {
        path: 'legales/:slug',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_legales_legales_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/legales/legales.module */ 3304)).then(m => m.LegalesModule)
    }, {
        path: 'proyectos-ejecutados',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_directives_default-img_directive_ts-src_app_shared_services_api_projec-e8a8f2"), __webpack_require__.e("default-src_app_shared_components_slide-projects_slide-projects_component_ts-src_app_shared_s-aa6456"), __webpack_require__.e("src_app_modules_projects_ejecutados_ejecutados_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/projects/ejecutados/ejecutados.module */ 1898)).then(m => m.EjecutadosModule)
    }, {
        path: '**',
        component: _shared_pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageComponent
    },
    {
        path: '404',
        component: _shared_pages_not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundPageComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/functions/config.service */ 4130);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/header/header.component */ 6290);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ 6526);





class AppComponent {
    constructor(configServ) {
        this.configServ = configServ;
    }
    ngOnInit() { }
    onActivate() {
        this.configServ.goUpPage();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/components.module */ 5626);
/* harmony import */ var _core_interceptors_http_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/interceptors/http-interceptor.service */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
            useClass: _core_interceptors_http_interceptor_service__WEBPACK_IMPORTED_MODULE_1__.HttpInterceptorService,
            multi: true
        }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentSharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _shared_components_components_module__WEBPACK_IMPORTED_MODULE_0__.ComponentSharedModule] }); })();


/***/ }),

/***/ 2508:
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/http-interceptor.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpInterceptorService": () => (/* binding */ HttpInterceptorService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class HttpInterceptorService {
    constructor() { }
    intercept(req, next) {
        const token = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.token;
        let request = req;
        if (token) {
            request = req.clone({
                setHeaders: {
                    'x-api-key': token
                }
            });
        }
        return next.handle(request);
    }
}
HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) { return new (t || HttpInterceptorService)(); };
HttpInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpInterceptorService, factory: HttpInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2159:
/*!****************************************************!*\
  !*** ./src/app/core/models/config-footer.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigFooter": () => (/* binding */ ConfigFooter)
/* harmony export */ });
class ConfigFooter {
    constructor(address = '', autoalmacenamiento = '', celular = '', celular_formato = '', contactemails = '', correo_pruebas = '', cotizador = "", emails = "", field_form_loc = "", field_form_uri = "", nombre_empresa = "", notas_por_pagina = "", pbx = "", pbx_formato = "", phone2 = "", redaccion = "", telefono_wsp = "", texto_feed = "", texto_footer = "", texto_general_contacto_sedes = "", texto_wsp = "", titulo_feed = "", trabaje = "") {
        this.address = address;
        this.autoalmacenamiento = autoalmacenamiento;
        this.celular = celular;
        this.celular_formato = celular_formato;
        this.contactemails = contactemails;
        this.correo_pruebas = correo_pruebas;
        this.cotizador = cotizador;
        this.emails = emails;
        this.field_form_loc = field_form_loc;
        this.field_form_uri = field_form_uri;
        this.nombre_empresa = nombre_empresa;
        this.notas_por_pagina = notas_por_pagina;
        this.pbx = pbx;
        this.pbx_formato = pbx_formato;
        this.phone2 = phone2;
        this.redaccion = redaccion;
        this.telefono_wsp = telefono_wsp;
        this.texto_feed = texto_feed;
        this.texto_footer = texto_footer;
        this.texto_general_contacto_sedes = texto_general_contacto_sedes;
        this.texto_wsp = texto_wsp;
        this.titulo_feed = titulo_feed;
        this.trabaje = trabaje;
    }
}


/***/ }),

/***/ 5626:
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentSharedModule": () => (/* binding */ ComponentSharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 6290);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 6526);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class ComponentSharedModule {
}
ComponentSharedModule.ɵfac = function ComponentSharedModule_Factory(t) { return new (t || ComponentSharedModule)(); };
ComponentSharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComponentSharedModule });
ComponentSharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentSharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent] }); })();


/***/ }),

/***/ 6526:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_core_models_config_footer_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/config-footer.model */ 2159);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/global.service */ 9651);
/* harmony import */ var _services_functions_responsive_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/functions/responsive.service */ 3228);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 5480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);










function FooterComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.BASE_URL + (i_r4 == null ? null : i_r4.imagen[0]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", i_r4 == null ? null : i_r4.imagen_alt[0])("title", i_r4 == null ? null : i_r4.imagen_title[0]);
  }
}

function FooterComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.BASE_URL + (i_r5 == null ? null : i_r5.imagen[0]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", i_r5 == null ? null : i_r5.imagen_alt[0])("title", i_r5 == null ? null : i_r5.imagen_title[0]);
  }
}

function FooterComponent_div_14_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const j_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", j_r8 == null ? null : j_r8.url_enlace_footer, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", j_r8 == null ? null : j_r8.field_content, " ");
  }
}

function FooterComponent_div_14_li_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const j_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("routerLink", j_r8 == null ? null : j_r8.url_enlace_footer);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", j_r8 == null ? null : j_r8.field_content, " ");
  }
}

function FooterComponent_div_14_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FooterComponent_div_14_li_4_a_1_Template, 2, 2, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, FooterComponent_div_14_li_4_ng_template_2_Template, 2, 2, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const j_r8 = ctx.$implicit;

    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (j_r8 == null ? null : j_r8.url_enlace_footer == null ? null : j_r8.url_enlace_footer.includes("https://")) || (j_r8 == null ? null : j_r8.url_enlace_footer == null ? null : j_r8.url_enlace_footer.includes("http://")))("ngIfElse", _r10);
  }
}

function FooterComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, FooterComponent_div_14_li_4_Template, 4, 2, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r6 == null ? null : i_r6.field_content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", i_r6.hijos);
  }
}

function FooterComponent_a_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", i_r14 == null ? null : i_r14.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](i_r14 == null ? null : i_r14.class_footer);
  }
}

class FooterComponent {
  constructor(globalService, responsive, pageService) {
    this.globalService = globalService;
    this.responsive = responsive;
    this.pageService = pageService;
    this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.base_url;
    this.socialNetwork = [];
    this.configFooter = new src_app_core_models_config_footer_model__WEBPACK_IMPORTED_MODULE_1__.ConfigFooter(); //collections

    this.companies = [];
    this.logos = [];
    this.menuFooter = [];
  }

  ngOnInit() {
    this.init();
  }

  init() {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tasks = [() => _this.getSocialNetwork(), () => _this.getConfigFooter(), () => _this.getMenuFooter(), () => _this.getCollectionsPage()];

      for (const task of tasks) {
        yield task();
      }
    })();
  }

  getSocialNetwork() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const socialNetwork = yield _this2.globalService.getSocialNetwork();
      if (socialNetwork) _this2.socialNetwork = socialNetwork;
    })();
  }

  getConfigFooter() {
    var _this3 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const configFooter = yield _this3.globalService.getConfigFooter();
      if (configFooter) _this3.configFooter = configFooter;
    })();
  }

  getCollectionsPage() {
    var _this4 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const companies = yield _this4.pageService.getElementsContent("titulo empresa", "logos_empresas");
      if (companies) _this4.companies = companies;
      const logos = yield _this4.pageService.getElementsContent("titulo logo footer", "logos");
      if (logos && logos?.length > 0) _this4.logos = logos;
    })();
  }

  getMenuFooter() {
    var _this5 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.menuFooter = yield _this5.globalService.getMenuFooter();
      /*const linksFooter = await this.pageService.getElementsContent('titulo enlace footer', 'enlaces_footer');
           if (sectionsFooter && linksFooter) {
        sectionsFooter.forEach( (i:any)  => {
          const children = linksFooter.filter( (a:any) => a?.static === i?.id)
          this.menuFooter.push({
            title:i?.field_content,
            children
          })
        });
           }*/
    })();
  }
  /**
   *
   * @param menuEle HTMLDivElement
   */


  dropdownToogleMenu(menuEle) {
    if (this.responsive.isMobile) {
      const menu = $(menuEle).find('.h_cl_pie');
      const contentMent = $(menuEle).find('.menu_pie');

      if ($(menu).hasClass('active')) {
        $(menu).next(contentMent).slideUp();
        $(menu).removeClass('active');
      } else {
        $(contentMent).slideUp();
        $(menu).removeClass('active');
        $(menu).addClass('active');
        $(menu).next().slideToggle();
      }
    }
  }

}

FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_api_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_functions_responsive_service__WEBPACK_IMPORTED_MODULE_4__.ResponsiveService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_5__.PageService));
};

FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 36,
  vars: 9,
  consts: [[1, "footer"], [1, "cnt_lat_pie"], [1, "cnt_gen_inf_lat_pie"], [1, "cnt_logos_pie"], ["class", "logo_pie", 4, "ngFor", "ngForOf"], [1, "txt_pie"], [1, "direccion_pie"], [1, "material-icons"], [1, "cnt_gen_cert_pie"], ["class", "logo_cert_pie", 4, "ngFor", "ngForOf"], [1, "cnt_mid_pie"], ["class", "col_mid_men_pie", 4, "ngFor", "ngForOf"], [1, "col_susc_pie"], [1, "h_cl_pie"], [1, "cnt_gen_susc_pie"], [1, "txt_susc_pie"], ["action", "", 1, "form_susc"], ["type", "email", "placeholder", "aqu\u00ED tu e-mail", 1, "campo_susc_pie"], ["type", "submit", 1, "bnt_susc"], [1, "datos_pie"], [1, "cnt_bot_pie"], [1, "cnt_redes_pie"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], [1, "copyr_pie"], [1, "logo_pie"], [3, "src", "alt", "title"], [1, "logo_cert_pie"], [1, "col_mid_men_pie"], [1, "menu_pie"], [4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf", "ngIfElse"], ["routerLink", ""], ["target", "_blank", "rel", "noopener", 3, "href"], [3, "routerLink"], ["target", "_blank", 3, "href"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, FooterComponent_a_4_Template, 2, 3, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6)(8, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "place");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, FooterComponent_div_12_Template, 2, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, FooterComponent_div_14_Template, 5, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 12)(16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Suscribirse ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 14)(19, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Escribe tu e-mail para mantenerte al tanto de nuestra informaci\u00F3n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "form", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 17)(23, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 19)(25, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 20)(32, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, FooterComponent_a_33_Template, 2, 3, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " \u00A9GRUPO EMPRESARIAL OIKOS 2022. Todos los derechos reservados. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.companies);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.configFooter.texto_footer, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.configFooter.address, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.logos);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.menuFooter);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.configFooter.address, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.configFooter.pbx, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.configFooter.contactemails, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.socialNetwork);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 6290:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 5480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function HeaderComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", i_r2 == null ? null : i_r2.enlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.BASE_URL + (i_r2 == null ? null : i_r2.imagen[0]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", i_r2 == null ? null : i_r2.imagen_alt[0])("title", i_r2 == null ? null : i_r2.imagen_title[0]);
  }
}

function HeaderComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", i_r3 == null ? null : i_r3.enlace_menu);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r3 == null ? null : i_r3.field_content);
  }
}

const _c0 = function (a0) {
  return {
    "active": a0
  };
};

class HeaderComponent {
  constructor(pageService) {
    this.pageService = pageService;
    this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url;
    this.menuMobileIsActive = false; // collections

    this.logos = [];
    this.linksHeader = [];
  }

  ngOnInit() {
    this.init();
  }

  init() {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tasks = [() => _this.getCollectionsPage()];

      for (const task of tasks) {
        yield task();
      }
    })();
  }

  getCollectionsPage() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const linksHeader = yield _this2.pageService.getElementsContent('titulo menu', 'menu');

      if (linksHeader && linksHeader?.length > 0) {
        _this2.linksHeader = linksHeader;
      }

      const logos = yield _this2.pageService.getElementsContent("titulo empresa", "logos_empresas", "field_name='ver en header' AND field_content='2'");
      if (logos && logos?.length > 0) _this2.logos = logos;
    })();
  }

  toogleActiveMenuMobile() {
    this.menuMobileIsActive = !this.menuMobileIsActive;
  }

}

HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_2__.PageService));
};

HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 24,
  vars: 8,
  consts: [[1, "header"], [1, "topbar_h"], [1, "cnt_inf_topbar_h"], ["class", "btn_oikos_logos", 3, "routerLink", 4, "ngFor", "ngForOf"], ["href", "", 1, "btn_z_clientes"], ["href", "", 1, "btn_pse"], [1, "txt_pse"], [1, "ic_pse"], [1, "nav_bar_h"], [1, "logo_pri"], ["href", ""], [1, "nav", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["routerLink", "contactanos", 1, "btn", "contacto_h"], [1, "btn_menu_movil", 3, "ngClass", "click"], [1, "btn_oikos_logos", 3, "routerLink"], ["width", "38", "height", "24", 3, "src", "alt", "title"], [3, "routerLink"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HeaderComponent_a_3_Template, 2, 4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Zona de Clientes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 5)(7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Pague aqu\u00ED");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8)(11, "h1", 9)(12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Grupo Oikos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nav", 11)(15, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 3, 2, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Contacto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_19_listener() {
        return ctx.toogleActiveMenuMobile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "span")(22, "span")(23, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.logos);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx.menuMobileIsActive));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.linksHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx.menuMobileIsActive));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
  encapsulation: 2
});

/***/ }),

/***/ 5481:
/*!*************************************************************************!*\
  !*** ./src/app/shared/pages/not-found-page/not-found-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageComponent": () => (/* binding */ NotFoundPageComponent)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nguniversal/express-engine/tokens */ 3640);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/page.service */ 5480);







class NotFoundPageComponent {
  constructor(response, pageService) {
    this.pageService = pageService;
    this.images = [];
    this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.base_url;
    this.response = response;
  }

  ngOnInit() {
    if (this.response) this.response.statusCode = 404;
    this.init();
  }

  init() {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tasks = [() => _this.getData(), () => _this.getImages()];

      for (const task of tasks) {
        yield task();
      }
    })();
  }

  getData() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this2.pageService.getContentPage('404');

      if (data) {
        _this2.data = data;
      }
    })();
  }

  getImages() {
    var _this3 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const images = yield _this3.pageService.getImagesBySlugPage('404');

      if (images) {
        _this3.images = images;
      }
    })();
  }

}

NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) {
  return new (t || NotFoundPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_1__.RESPONSE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_api_page_service__WEBPACK_IMPORTED_MODULE_3__.PageService));
};

NotFoundPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NotFoundPageComponent,
  selectors: [["app-not-found-page"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 10,
  vars: 6,
  consts: [[1, "cuerpo"], [1, "s_gracias_404", "s_404"], [1, "cnt_central"], [1, "c_gracias_404", "c_404"], ["width", "393", "height", "240", 3, "src", "alt", "title"], [1, "btn", "al-center", 3, "routerLink"]],
  template: function NotFoundPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "body", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.BASE_URL + (ctx.images[0] == null ? null : ctx.images[0].field_content), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx.images[0] == null ? null : ctx.images[0].alt)("title", ctx.images[0] == null ? null : ctx.images[0].title);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.titulo_404);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.data == null ? null : ctx.data.link_btn_404);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.texto_btn_404);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
  styles: [".c_gracias_404[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding: 40px 20px 100px;\n}\n\n.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    object-fit: contain;\n}\n\n.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    left: -30%;\n    top: 30%;\n    width: 76px;\n    height: 43px;\n    background: url(\"https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/gracias_404/puntos1.svg\") no-repeat center;\n    background-size: contain;\n    z-index: 1;\n}\n\n.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    right: -20%;\n    top: 15%;\n    width: 20px;\n    height: 70px;\n    background: url(\"https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/gracias_404/puntos2.svg\") no-repeat center;\n    background-size: contain;\n    z-index: 1;\n}\n\nh1[_ngcontent-%COMP%] {\n    font-size: 53px;\n    background: linear-gradient(180deg, #2C3EA0 0%, #131D54 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n    margin: 0 0 10px;\n    line-height: 1;\n}\n\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 800;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-weight: 600;\n    max-width: 550px;\n    margin: 30px 0;\n    line-height: 1.2;\n    text-align: center;\n}\n\n.txt_page[_ngcontent-%COMP%] {\n    font-size: 20px;\n    max-width: 530px;\n    margin: 0 0 20px;\n}\n\n.c_404[_ngcontent-%COMP%] {\n    height: 60vh;\n    padding: 60px 0 100px;\n    position: relative;\n}\n\n.c_404[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    bottom: 40px;\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: 100%;\n    max-width: 600px;\n    height: 100%;\n    max-height: 90px;\n    background: url(\"https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/gracias_404/tuercas.svg\") no-repeat center;\n    background-size: contain;\n}\n\n.c_404[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    height: 40px;\n}\n\n.bg_gracias[_ngcontent-%COMP%] {\n    background: linear-gradient(to top, rgba(233, 237, 247, 0.16), #E8EBF1);\n    background-blend-mode: normal, color;\n    position: relative;\n    padding-top: 40px;\n}\n\n.bg_gracias[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: 300;\n    margin: 40px 0 10px;\n    text-align: center;\n}\n\n.bg_gracias[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-weight: 800;\n}\n\n.bg_gracias[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.3;\n    color: #131D54;\n    max-width: 550px;\n    margin: 0px auto 30px;\n    text-align: center;\n}\n\n.bg_gracias[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    left: 2%;\n    top: 10%;\n    background: url(\"https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/gracias_404/puntos2.svg\") no-repeat center;\n    background-size: contain;\n    width: 30px;\n    height: 90px;\n}\n\n.bg_gracias[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    right: 2%;\n    bottom: 10%;\n    background: url(\"https://paxzupruebas.com/maquetas/oikos_constructora/images/diseno/gracias_404/puntos2.svg\") no-repeat center;\n    background-size: contain;\n    width: 30px;\n    height: 90px;\n    transform: rotate(180deg);\n}\n\n@media screen and (max-width: 480px) {\n    h1[_ngcontent-%COMP%] {\n        font-size: 32px;\n    }\n\n    .c_gracias_404[_ngcontent-%COMP%] {\n        padding-left: 0;\n        padding-top: 0;\n        padding-right: 0;\n        margin: -40px 0 0;\n    }\n\n    picture[_ngcontent-%COMP%]:before, picture[_ngcontent-%COMP%]:after {\n        display: none;\n    }\n\n    .c_404[_ngcontent-%COMP%] {\n        height: initial;\n        margin-top: 0;\n        padding-top: 60px;\n    }\n}\n/*# sourceMappingURL=gracias_404.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0bHllcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLDhIQUE4SDtJQUM5SCx3QkFBd0I7SUFDeEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEhBQThIO0lBQzlILHdCQUF3QjtJQUN4QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkRBQTZEO0lBQzdELDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDhIQUE4SDtJQUM5SCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUVBQXVFO0lBQ3ZFLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7SUFDUiw4SEFBOEg7SUFDOUgsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLDhIQUE4SDtJQUM5SCx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7O1FBRUksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixhQUFhO1FBQ2IsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUEsMENBQTBDIiwiZmlsZSI6InN0bHllcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY19ncmFjaWFzXzQwNCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDQwcHggMjBweCAxMDBweDtcbn1cblxuLmNfZ3JhY2lhc180MDQgcGljdHVyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNfZ3JhY2lhc180MDQgcGljdHVyZSBpbWcge1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5jX2dyYWNpYXNfNDA0IHBpY3R1cmU6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMzAlO1xuICAgIHRvcDogMzAlO1xuICAgIHdpZHRoOiA3NnB4O1xuICAgIGhlaWdodDogNDNweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3BheHp1cHJ1ZWJhcy5jb20vbWFxdWV0YXMvb2lrb3NfY29uc3RydWN0b3JhL2ltYWdlcy9kaXNlbm8vZ3JhY2lhc180MDQvcHVudG9zMS5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgei1pbmRleDogMTtcbn1cblxuLmNfZ3JhY2lhc180MDQgcGljdHVyZTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0yMCU7XG4gICAgdG9wOiAxNSU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vcGF4enVwcnVlYmFzLmNvbS9tYXF1ZXRhcy9vaWtvc19jb25zdHJ1Y3RvcmEvaW1hZ2VzL2Rpc2Vuby9ncmFjaWFzXzQwNC9wdW50b3MyLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB6LWluZGV4OiAxO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiA1M3B4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyQzNFQTAgMCUsICMxMzFENTQgMTAwJSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICB0ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbmgxIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbmgyIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50eHRfcGFnZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1heC13aWR0aDogNTMwcHg7XG4gICAgbWFyZ2luOiAwIDAgMjBweDtcbn1cblxuLmNfNDA0IHtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gICAgcGFkZGluZzogNjBweCAwIDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNfNDA0OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogOTBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3BheHp1cHJ1ZWJhcy5jb20vbWFxdWV0YXMvb2lrb3NfY29uc3RydWN0b3JhL2ltYWdlcy9kaXNlbm8vZ3JhY2lhc180MDQvdHVlcmNhcy5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5jXzQwNCAuYnRuIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5iZ19ncmFjaWFzIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDIzMywgMjM3LCAyNDcsIDAuMTYpLCAjRThFQkYxKTtcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbCwgY29sb3I7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4uYmdfZ3JhY2lhcyBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDQwcHggMCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJnX2dyYWNpYXMgaDEgYiB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmJnX2dyYWNpYXMgaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIGNvbG9yOiAjMTMxRDU0O1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0byAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJnX2dyYWNpYXM6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMiU7XG4gICAgdG9wOiAxMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9wYXh6dXBydWViYXMuY29tL21hcXVldGFzL29pa29zX2NvbnN0cnVjdG9yYS9pbWFnZXMvZGlzZW5vL2dyYWNpYXNfNDA0L3B1bnRvczIuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogOTBweDtcbn1cblxuLmJnX2dyYWNpYXM6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMiU7XG4gICAgYm90dG9tOiAxMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9wYXh6dXBydWViYXMuY29tL21hcXVldGFzL29pa29zX2NvbnN0cnVjdG9yYS9pbWFnZXMvZGlzZW5vL2dyYWNpYXNfNDA0L3B1bnRvczIuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cblxuICAgIC5jX2dyYWNpYXNfNDA0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luOiAtNDBweCAwIDA7XG4gICAgfVxuXG4gICAgcGljdHVyZTpiZWZvcmUsXG4gICAgcGljdHVyZTphZnRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmNfNDA0IHtcbiAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWdyYWNpYXNfNDA0LmNzcy5tYXAgKi8iXX0= */"]
});

/***/ }),

/***/ 9651:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/api/global.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalService": () => (/* binding */ GlobalService)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




const {
  api_url: API_URL
} = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment;
class GlobalService {
  constructor(_http) {
    this._http = _http;
  }

  getSocialNetwork() {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getSocialNetwork`;
      return _this._http.get(url).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }

  getConfigFooter() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getConfigInfo`;
      return _this2._http.get(url).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }

  getDepartaments() {
    var _this3 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getDepartamentos`;
      return _this3._http.get(url).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }

  getCities(valueDep) {
    var _this4 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getCiudades`;
      const values = {
        departamento: valueDep
      };
      return _this4._http.post(url, JSON.stringify(values)).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }

  setContactForm(data) {
    var _this5 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/setContactForm`;
      return _this5._http.post(url, JSON.stringify(data)).toPromise().then();
    })();
  }

  setContactPQRS(data) {
    var _this6 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/setContactPQRS`;
      return _this6._http.post(url, JSON.stringify(data)).toPromise().then();
    })();
  }

  setSedeForm(data) {
    var _this7 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/setSedeForm`;
      return _this7._http.post(url, JSON.stringify(data)).toPromise().then();
    })();
  }

  setAutoForm(data) {
    var _this8 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/setAutoForm`;
      return _this8._http.post(url, JSON.stringify(data)).toPromise().then();
    })();
  }

  setMinibodegasForm(data) {
    var _this9 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/setMinibodegasForm`;
      return _this9._http.post(url, JSON.stringify(data)).toPromise().then();
    })();
  }

  setCotizador(data) {
    var _this10 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/setCotizador`;
      return _this10._http.post(url, JSON.stringify(data)).toPromise().then();
    })();
  }

  getMenu() {
    var _this11 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getMenu`;
      return _this11._http.get(url).toPromise().then();
    })();
  }

  getMenuFooter() {
    var _this12 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getMenuFooter`;
      return _this12._http.get(url).toPromise().then();
    })();
  }

}

GlobalService.ɵfac = function GlobalService_Factory(t) {
  return new (t || GlobalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

GlobalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: GlobalService,
  factory: GlobalService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5480:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/api/page.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageService": () => (/* binding */ PageService)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);





const {
  api_url: API_URL
} = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment;
class PageService {
  constructor(_http) {
    this._http = _http;
  }
  /**
   *
   * @param friendlyUrl
   * @returns Promise<any>
   */


  getSeoContentPage(friendlyUrl) {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getSeoContent`;
      const values = {
        friendlyUrl
      };
      return _this._http.post(url, JSON.stringify(values)).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }
  /**
   *
   * @param friendlyUrl
   * @returns
   */


  getContentPage(friendlyUrl) {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getContentPage`;
      const values = {
        friendlyUrl
      };
      return _this2._http.post(url, JSON.stringify(values)).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }
  /**
   *
   * @param friendlyUrl slug page
   * @returns Promise<any>
   */


  getImagesBySlugPage(friendlyUrl) {
    var _this3 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getImagenesByIdPage`;
      const values = {
        friendlyUrl
      };
      return _this3._http.post(url, JSON.stringify(values)).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }
  /**
   *
   * @param name
   * @param content
   * @returns any[] || boolean:false
   */


  getBannersHome(name, content) {
    var _this4 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getBannersHome?name=${name}&content=${content}`;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this4._http.get(url)).then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }
  /**
   *
   * @param name
   * @param content
   * @param condicional
   * @param children
   * @param excluir
   * @param destacado
   * @returns
   */


  getElementsContent(name, content, condicional, children, excluir, destacado) {
    var _this5 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getElementsContent`;
      const values = {
        name,
        content,
        condicional,
        children,
        excluir,
        destacado
      };
      return _this5._http.post(url, JSON.stringify(values)).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }
  /**
   *
   * @param friendlyUrl slug page
   * @returns Promise<any>
   */


  getPageContent(slug) {
    var _this6 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getPageContent?friendly_url=${slug}`;
      return _this6._http.get(url).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }
  /**
   *
   * @param friendlyUrl slug page
   * @returns Promise<any>
   */


  getBreadCrumb(slug) {
    var _this7 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getBreadCrumb?url=${slug}`;
      return _this7._http.get(url).toPromise().then();
    })();
  }

}

PageService.ɵfac = function PageService_Factory(t) {
  return new (t || PageService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

PageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: PageService,
  factory: PageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4130:
/*!*************************************************************!*\
  !*** ./src/app/shared/services/functions/config.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class ConfigService {
    constructor(plataformId, router) {
        this.plataformId = plataformId;
        this.router = router;
        this.infoIsLoaded = false;
        this.isBrowser = false;
        this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.plataformId);
    }
    goUpPage(top = 0) {
        if (this.isBrowser) {
            window.scroll({
                top,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
    redirectUrl(url = "") {
        if (url.includes('https://')) {
            window.location.href = url;
        }
        else if (url) {
            this.router.navigateByUrl(url);
        }
    }
    loadSearchMobile(time = 0) {
        if (this.isBrowser) {
            setTimeout(() => {
                searchMobile();
            }, time);
        }
    }
    loadHeroProyectos(time = 0) {
        if (this.isBrowser) {
            setTimeout(() => {
                heroProyectos();
            }, time);
        }
    }
    loadChangeTab(time = 0) {
        if (this.isBrowser) {
            setTimeout(() => {
                changeTab();
            }, time);
        }
    }
    loadBannerProyectos(time = 0) {
        if (this.isBrowser) {
            setTimeout(() => {
                bannerProyectos();
            }, time);
        }
    }
    loadbannerEjecutados(time = 0) {
        if (this.isBrowser) {
            setTimeout(() => {
                bannerEjecutados();
            }, time);
        }
    }
    renderView404(skipLocationChange = true) {
        this.router.navigateByUrl('404', { skipLocationChange });
        return false;
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3228:
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/functions/responsive.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponsiveService": () => (/* binding */ ResponsiveService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);


class ResponsiveService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isMobile = false;
        this.observeBreakpoints();
    }
    observeBreakpoints() {
        this.breakpointObserver
            .observe(['(min-width: 768px)'])
            .subscribe((state) => {
            if (state.breakpoints['(min-width: 768px)']) {
                this.isMobile = false;
            }
            else {
                this.isMobile = true;
            }
        });
    }
}
ResponsiveService.ɵfac = function ResponsiveService_Factory(t) { return new (t || ResponsiveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver)); };
ResponsiveService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResponsiveService, factory: ResponsiveService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    base_url: 'https://adminpaxzu-devcons.oikos.com.co/',
    api_url: 'https://adminpaxzu-devcons.oikos.com.co/api/',
    imagenes_url: 'https://adminpaxzu-devcons.oikos.com.co/',
    token: 'aff7d877-d0ff-4dfa-a85c-d9715ea82061' //se genera al publicar
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
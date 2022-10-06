"use strict";
(self["webpackChunkoikos_constructora"] = self["webpackChunkoikos_constructora"] || []).push([["src_app_modules_projects_interna_interna_module_ts"],{

/***/ 6214:
/*!******************************************************!*\
  !*** ./src/app/core/guards/internaproyecto.guard.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InternaProyectoGuard": () => (/* binding */ InternaProyectoGuard)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 5480);
/* harmony import */ var src_app_shared_services_api_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api/project.service */ 221);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_functions_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/functions/seo.service */ 655);







class InternaProyectoGuard {
  constructor(pageService, projService, router, seoService) {
    this.pageService = pageService;
    this.projService = projService;
    this.router = router;
    this.seoService = seoService;
  }

  canActivate(_route, _state) {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const slug = _route.params['slug'];
      const page = yield _this.projService.getSeoContentProject(slug);

      if (page?.friendly_url != null) {
        _this.pageService.currentPage = page;

        _this.seoService.setUpMetaTags(page);

        return true;
      }

      _this.router.navigateByUrl('404', {
        skipLocationChange: true
      });

      return false;
    })();
  }

}

InternaProyectoGuard.ɵfac = function InternaProyectoGuard_Factory(t) {
  return new (t || InternaProyectoGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__.PageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_shared_services_api_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_shared_services_functions_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService));
};

InternaProyectoGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: InternaProyectoGuard,
  factory: InternaProyectoGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2496:
/*!********************************************************************!*\
  !*** ./src/app/modules/projects/interna/interna-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InternaRoutingModule": () => (/* binding */ InternaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_guards_internaproyecto_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/internaproyecto.guard */ 6214);
/* harmony import */ var _pages_interna_interna_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/interna/interna.component */ 3055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        component: _pages_interna_interna_component__WEBPACK_IMPORTED_MODULE_1__.InternaComponent,
        canActivate: [src_app_core_guards_internaproyecto_guard__WEBPACK_IMPORTED_MODULE_0__.InternaProyectoGuard]
    }
];
class InternaRoutingModule {
}
InternaRoutingModule.ɵfac = function InternaRoutingModule_Factory(t) { return new (t || InternaRoutingModule)(); };
InternaRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InternaRoutingModule });
InternaRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InternaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 7540:
/*!************************************************************!*\
  !*** ./src/app/modules/projects/interna/interna.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InternaModule": () => (/* binding */ InternaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _interna_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interna-routing.module */ 2496);
/* harmony import */ var _pages_interna_interna_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/interna/interna.component */ 3055);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/components.module */ 5626);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8418);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-recaptcha */ 9191);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/google-maps */ 3889);
/* harmony import */ var src_app_shared_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pipes/safe-resource-url.pipe */ 1001);
/* harmony import */ var src_app_shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/slide-projects/slide-projects.component */ 5141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);











class InternaModule {
}
InternaModule.ɵfac = function InternaModule_Factory(t) { return new (t || InternaModule)(); };
InternaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: InternaModule });
InternaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _interna_routing_module__WEBPACK_IMPORTED_MODULE_0__.InternaRoutingModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentSharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__.RecaptchaModule,
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_10__.GoogleMapsModule,
        //standalones
        src_app_shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_4__.SlideProjectsComponent] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](InternaModule, { declarations: [_pages_interna_interna_component__WEBPACK_IMPORTED_MODULE_1__.InternaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _interna_routing_module__WEBPACK_IMPORTED_MODULE_0__.InternaRoutingModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentSharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ng_recaptcha__WEBPACK_IMPORTED_MODULE_9__.RecaptchaModule,
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_10__.GoogleMapsModule,
        src_app_shared_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_3__.SafePipe,
        //standalones
        src_app_shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_4__.SlideProjectsComponent] }); })();


/***/ }),

/***/ 3055:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/projects/interna/pages/interna/interna.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InternaComponent": () => (/* binding */ InternaComponent)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/functions/config.service */ 4130);
/* harmony import */ var src_app_shared_services_api_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api/project.service */ 221);
/* harmony import */ var src_app_shared_services_functions_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/functions/form.service */ 961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/google-maps */ 3889);
/* harmony import */ var _shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/slide-projects/slide-projects.component */ 5141);
/* harmony import */ var _shared_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/pipes/safe-resource-url.pipe */ 1001);















function InternaComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div")(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Direcci\u00F3n proyecto: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.data == null ? null : ctx_r0.data.direccion_proyecto, " ");
  }
}

function InternaComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div")(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Tel\u00E9fono: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r1.data == null ? null : ctx_r1.data.telefono_salaventas, "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.data == null ? null : ctx_r1.data.telefono_salaventas, "");
  }
}

function InternaComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div")(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Director de ventas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.data == null ? null : ctx_r2.data.director_ventas, "");
  }
}

function InternaComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div")(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Horario:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.data == null ? null : ctx_r3.data.horario, "");
  }
}

function InternaComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div")(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " E-mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r4.data == null ? null : ctx_r4.data.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.data == null ? null : ctx_r4.data.email, "");
  }
}

function InternaComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 130)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r5.data == null ? null : ctx_r5.data.tipo_proyecto, " DESDE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" $ ", ctx_r5.data == null ? null : ctx_r5.data.valor_proyecto_formato, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.data == null ? null : ctx_r5.data.texto_adicional);
  }
}

function InternaComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r31 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx_r6.imagenes_url + (i_r31 == null ? null : i_r31.field_content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", i_r31 == null ? null : i_r31.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", i_r31 == null ? null : i_r31.title);
  }
}

function InternaComponent_a_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Maqueta virtual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", ctx_r7.data == null ? null : ctx_r7.data.tourguiado, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}

function InternaComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r32 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx_r8.imagenes_url + (i_r32 == null ? null : i_r32.field_content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", i_r32 == null ? null : i_r32.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", i_r32 == null ? null : i_r32.title);
  }
}

function InternaComponent_a_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Recorrido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", ctx_r9.data == null ? null : ctx_r9.data.vista360, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}

function InternaComponent_a_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "C\u00F3mo llegar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", ctx_r10.data == null ? null : ctx_r10.data.url_waze, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}

function InternaComponent_a_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Calcule su cuota mensual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function InternaComponent_a_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InternaComponent_a_50_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r33.trasladar("sect1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Sobre el proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}

function InternaComponent_a_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InternaComponent_a_51_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r35.trasladar("sect2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Planos y Tipolog\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}

function InternaComponent_a_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InternaComponent_a_52_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r37.trasladar("sect3"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Sitios de inter\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}

function InternaComponent_a_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InternaComponent_a_53_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r39.trasladar("sect4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Zonas comunes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}

function InternaComponent_a_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InternaComponent_a_54_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r41.trasladar("sect5"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Avance obra");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}

function InternaComponent_a_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InternaComponent_a_55_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r43.trasladar("sect6"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Calcula");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}

function InternaComponent_div_57_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Recorrido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", ctx_r45.data == null ? null : ctx_r45.data.vista360, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}

function InternaComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 149)(1, "h3", 150)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Descripci\u00F3n del");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, InternaComponent_div_57_a_7_Template, 3, 1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r18.data == null ? null : ctx_r18.data.descripcion_proyecto, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r18.data.vista360 != "" && ctx_r18.data.vista360 != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx_r18.imagenes_url + (ctx_r18.data == null ? null : ctx_r18.data.imagen_banner_proyecto), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", ctx_r18.data == null ? null : ctx_r18.data.alt_banner);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", ctx_r18.data == null ? null : ctx_r18.data.title_banner);
  }
}

function InternaComponent_div_59_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 132)(1, "div", 156)(2, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 159)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const i_r47 = ctx.$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", ctx_r46.imagenes_url + (i_r47 == null ? null : i_r47.field_content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx_r46.imagenes_url + (i_r47 == null ? null : i_r47.field_content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", i_r47 == null ? null : i_r47.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r47 == null ? null : i_r47.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", i_r47 == null ? null : i_r47.title, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}

function InternaComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 153)(1, "h3", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Planos");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 155)(4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, InternaComponent_div_59_div_5_Template, 8, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "div", 22)(7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r19.data.planos);
  }
}

function InternaComponent_div_60_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 132)(1, "div", 156)(2, "a", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 159)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const i_r49 = ctx.$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", ctx_r48.imagenes_url + (i_r49 == null ? null : i_r49.field_content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx_r48.imagenes_url + (i_r49 == null ? null : i_r49.field_content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", i_r49 == null ? null : i_r49.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", i_r49 == null ? null : i_r49.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r49 == null ? null : i_r49.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", i_r49 == null ? null : i_r49.title, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}

function InternaComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 153)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Tipolog\u00EDas");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 160)(4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, InternaComponent_div_60_div_5_Template, 8, 6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "div", 22)(7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r20.data.tipologia);
  }
}

function InternaComponent_div_61_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InternaComponent_div_61_span_6_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55);
      const i_r53 = restoredCtx.$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r54.cargarSitios(i_r53 == null ? null : i_r53.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r53 == null ? null : i_r53.field_content);
  }
}

function InternaComponent_div_61_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "C\u00F3mo llegar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", ctx_r51.data == null ? null : ctx_r51.data.url_waze, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}

function InternaComponent_div_61_map_marker_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "map-marker", 170);
  }

  if (rf & 2) {
    const marker_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("position", marker_r56.position)("label", marker_r56.label)("title", marker_r56.title)("options", marker_r56.options)("icon", marker_r56.icon);
  }
}

function InternaComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 163)(1, "h3", 150)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Sitios de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Inter\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, InternaComponent_div_61_span_6_Template, 2, 1, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, InternaComponent_div_61_a_8_Template, 3, 1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "google-map", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, InternaComponent_div_61_map_marker_10_Template, 1, 5, "map-marker", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r21.sitiosInteres);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r21.data.url_waze != "" && ctx_r21.data.url_waze != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("center", ctx_r21.center)("zoom", ctx_r21.zoom);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r21.markers);
  }
}

function InternaComponent_div_62_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const i_r58 = ctx.$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx_r57.imagenes_url + (i_r58 == null ? null : i_r58.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", i_r58 == null ? null : i_r58.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r58 == null ? null : i_r58.nombre);
  }
}

function InternaComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 171)(1, "h3", 150)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Zonas");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Comunes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, InternaComponent_div_62_div_6_Template, 4, 3, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r22.zonas);
  }
}

function InternaComponent_div_63_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r62 = ctx.$implicit;
    const j_r63 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", j_r63 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("ncol", j_r63 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r62 == null ? null : i_r62.title);
  }
}

function InternaComponent_div_63_div_8_iframe_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "iframe", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "safeResourceUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 3, i_r64 == null ? null : i_r64.field_description), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx_r66.imagenes_url + (i_r64 == null ? null : i_r64.field_content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", i_r64 == null ? null : i_r64.alt);
  }
}

function InternaComponent_div_63_div_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 187);
  }

  if (rf & 2) {
    const i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx_r68.imagenes_url + (i_r64 == null ? null : i_r64.field_content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", i_r64 == null ? null : i_r64.alt);
  }
}

function InternaComponent_div_63_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, InternaComponent_div_63_div_8_iframe_1_Template, 3, 5, "iframe", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, InternaComponent_div_63_div_8_ng_template_2_Template, 1, 2, "ng-template", null, 185, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r64 = ctx.$implicit;
    const j_r65 = ctx.index;

    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", j_r65 != 0 ? "oculto" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("ncol", j_r65 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (i_r64 == null ? null : i_r64.field_description) != "" && (i_r64 == null ? null : i_r64.field_description) != null)("ngIfElse", _r67);
  }
}

function InternaComponent_div_63_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 188);
  }

  if (rf & 2) {
    const i_r71 = ctx.$implicit;
    const j_r72 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", j_r72 != 0 ? "oculto" : "")("innerHTML", i_r71 == null ? null : i_r71.alt, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("ncol", j_r72 + 1);
  }
}

function InternaComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 176)(1, "h3", 150)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Avance de");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " obra");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 177)(6, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, InternaComponent_div_63_a_7_Template, 2, 3, "a", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, InternaComponent_div_63_div_8_Template, 4, 4, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, InternaComponent_div_63_div_9_Template, 1, 3, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r23.avances);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r23.avances);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r23.avances);
  }
}

function InternaComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 189)(1, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 191)(4, "a", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Calcula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}

function InternaComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r73 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx_r25.imagenes_url + (i_r73 == null ? null : i_r73.field_content), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", i_r73 == null ? null : i_r73.alt);
  }
}

function InternaComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Existen errores, por favor revisar*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function InternaComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Existen errores, por favor revisar*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function InternaComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Existen errores, por favor revisar* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " M\u00EDnimo 7, M\u00E1ximo 10 n\u00FAmeros");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function InternaComponent_option_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r74 = ctx.$implicit;
    const j_r75 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", i_r74.nro);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selected", j_r75 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r74.nro);
  }
}

function InternaComponent_div_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Existen errores, por favor revisar*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0) {
  return {
    "background-color": a0
  };
};

class InternaComponent {
  constructor(configServ, projService, router, activateRoute, fb, formServ) {
    this.configServ = configServ;
    this.projService = projService;
    this.router = router;
    this.activateRoute = activateRoute;
    this.fb = fb;
    this.formServ = formServ;
    this.data = [];
    this.datosCalc = [];
    this.datosCuota = [];
    this.datosAnio = [];
    this.galeria = [];
    this.avances = [];
    this.tipologia = [];
    this.planos = [];
    this.zonas = [];
    this.sitiosInteres = [];
    this.seccionesInteres = [];
    this.imagenes_url = "";
    this.captcha = '';
    this.porcFinanciar = 100;
    this.isSubmitted = false;
    this.showErrors = false;
    this.zoom = 14;
    this.center = {
      lat: 0,
      lng: 0
    };
    this.markers = [];
    this.contactForm = this.fb.group({
      nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email])),
      telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^-?([0-9]{7,10})?$/)])),
      terminos: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.requiredTrue)
    });
    this.slug = this.activateRoute.snapshot.paramMap.get('slug');
    this.imagenes_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imagenes_url;
    this.suscribeListenRouter = this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd) {
        this.slug = this.activateRoute.snapshot.paramMap.get('slug');
        this.configServ.goUpPage();
        this.getData();
      }
    });
  }

  resolved(captchaResponse) {
    this.captcha = captchaResponse;
  }

  ngOnInit() {
    this.init();
    this.configServ.loadHeroProyectos(1000);
    this.configServ.loadChangeTab(1000);
  }

  init() {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tasks = [() => _this.getData()];

      for (const task of tasks) {
        yield task();
      }
    })();
  }

  getData() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.data = yield _this2.projService.getProyectoByUrl(_this2.slug);
      _this2.data = _this2.data[0];
      _this2.porcFinanciar = 100 - _this2.data.porcentaje_minimo;
      _this2.zonas = _this2.data.zonas;
      _this2.galeria = _this2.data.galeria;
      _this2.planos = _this2.data.planos;
      _this2.tipologia = _this2.data.tipologia;
      _this2.avances = _this2.data.avances;

      _this2.calculoPorcentaje();

      _this2.diferenciadordecuotasmensuales();

      _this2.sitiosInteres = yield _this2.projService.getCategoriasInteres(_this2.data.id);
      _this2.center = {
        lat: _this2.data.latitude,
        lng: _this2.data.longitude
      };
      _this2.markers = [];

      _this2.markers.push({
        position: {
          lat: _this2.data.latitude,
          lng: _this2.data.longitude
        },
        icon: {
          url: _this2.imagenes_url + _this2.data?.logo_proyecto,
          scaledSize: new google.maps.Size(30, 30) // scaled size

        },
        options: {
          animation: google.maps.Animation.BOUNCE
        }
      });
    })();
  }

  trasladar(el) {
    var pos = Number($("#" + el).offset().top) - 100;
    window.scrollTo({
      top: pos,
      behavior: 'smooth'
    });
    $(".state").removeClass('active');
    $("." + el).addClass('active');
  }

  calculoPorcentaje() {
    var _this3 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var porcentaje = $(".cambiarPorcentaje").val();
      var cuotasinicialfinanciar = $(".cuotasinicialfinanciar").val();
      var plazoaniosa = $(".plazoaniosa").val();
      var financiar = $(".valorafinanciar").val();
      _this3.porcFinanciar = 100 - porcentaje;
      _this3.datosCalc = yield _this3.projService.getCalculoPorcentaje(_this3.data.valor_proyecto, porcentaje, cuotasinicialfinanciar, plazoaniosa, financiar);
      _this3.datosCalc = _this3.datosCalc[0];
      $(".valorCuotaInicial").val('$ ' + _this3.datosCalc['cuotaInicial']);
      $(".diferencia").val('$ ' + _this3.datosCalc['diferencia']);

      if (_this3.datosCalc['cuotasinicialfinanciar'] != 'inf') {
        $(".cuotamensual").val('$ ' + _this3.datosCalc['cuotasinicialfinanciar']);
      }

      $(".valorafinanciar").val('$ ' + _this3.datosCalc['valorafinanciar']);

      _this3.plazoanios();
    })();
  }

  diferenciadordecuotasmensuales() {
    var _this4 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var saldocuotainicial = $(".diferencia").val();
      var cuotasinicialfinanciar = $(".cuotasinicialfinanciar").val();
      _this4.datosCuota = yield _this4.projService.getCalculoCuota(saldocuotainicial, cuotasinicialfinanciar);
      _this4.datosCuota = _this4.datosCuota[0];

      if (_this4.datosCuota['valorcuotas'] != 'inf') {
        $(".cuotamensual").val('$ ' + _this4.datosCuota['valorcuotas']);
      }
    })();
  }

  plazoanios() {
    var _this5 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var cuota = $(".plazoaniosa").val();
      var valorafinanciar = $(".valorafinanciar").val();
      _this5.datosAnio = yield _this5.projService.getPlazoanios(cuota, valorafinanciar);
      _this5.datosAnio = _this5.datosAnio[0];
      $(".cuotahipoteca").val('$ ' + _this5.datosAnio['total']);
    })();
  }

  hasErrorsFieldForm(field) {
    const form = this.contactForm;
    return this.formServ.hasErrorsFieldForm(form, field, this.showErrors);
  }

  insertContact() {
    var _this6 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.isSubmitted = true;
      const values = {
        nombre: _this6.contactForm.controls['nombre'].value,
        email: _this6.contactForm.controls['email'].value,
        telefono: _this6.contactForm.controls['telefono'].value,
        cuotaInicial: $(".cambiarPorcentaje").val(),
        numeroCuotas: $(".cuotasinicialfinanciar").val(),
        valorCuotaInicial: $(".valorCuotaInicial").val(),
        separacion: $(".separacion").val(),
        saldoCuotaInicial: $(".diferencia").val(),
        cuotamensual: $(".cuotamensual").val(),
        porcentajeFinanciar: $(".porcentajeFinanciar").val(),
        valorafinanciar: $(".valorafinanciar").val(),
        plazoaniosa: $(".plazoaniosa").val(),
        cuotahipoteca: $(".cuotahipoteca").val(),
        porcentajeseparacion: _this6.data.porcentaje_separacion,
        url_proyecto: window.location.href,
        proyecto: _this6.data.titulo_proyecto,
        valorProyecto: _this6.data.valor_proyecto,
        sendTo: _this6.data.email_contactos,
        id_proyecto: _this6.data.id
      };

      if (_this6.contactForm.valid) {
        const resp = yield _this6.projService.setCalculadoraForm(values);

        if (resp.resp != 'no') {
          window.location.href = resp.resp;
        }
      } else {
        console.log('Por favor completa todos los datos');
      }
    })();
  }

  cargarSitios(id_categoria) {
    var _this7 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.seccionesInteres = yield _this7.projService.getSitiosInteres(id_categoria, _this7.data.id);

      if (_this7.seccionesInteres.length > 0) {
        _this7.markers = [];
        _this7.zoom = 14; //se adiciona primero el pin principal

        _this7.markers.push({
          position: {
            lat: _this7.data.latitude,
            lng: _this7.data.longitude
          },
          icon: {
            url: _this7.imagenes_url + _this7.data?.logo_proyecto,
            scaledSize: new google.maps.Size(30, 30) // scaled size

          },
          options: {
            animation: google.maps.Animation.BOUNCE
          }
        });

        for (var i in _this7.seccionesInteres) {
          _this7.markers.push({
            position: {
              lat: _this7.seccionesInteres[i].latitude_interes_proyecto,
              lng: _this7.seccionesInteres[i].longitude_interes_proyecto
            },
            icon: {
              url: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|4286f4"
            },
            title: _this7.seccionesInteres[i].field_content,
            options: {//animation: google.maps.Animation.BOUNCE
            }
          });
        }
      }
    })();
  }

}

InternaComponent.ɵfac = function InternaComponent_Factory(t) {
  return new (t || InternaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_api_project_service__WEBPACK_IMPORTED_MODULE_3__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_functions_form_service__WEBPACK_IMPORTED_MODULE_4__.FormService));
};

InternaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: InternaComponent,
  selectors: [["app-interna"]],
  decls: 207,
  vars: 58,
  consts: [[1, "s_proyecto_h"], [1, "cnt_central"], [1, "miga"], ["href", ""], [1, "hero_proyecto"], [1, "info_h_proyecto"], [1, "h_logo_proyect"], ["width", "140", "height", "140", 3, "src", "alt", "title"], [1, "title_ph", 2, "color", "#fff"], [1, "tag", 3, "ngStyle"], [1, "info_heading_proy"], ["class", "item_hp", 4, "ngIf"], [1, "precio_hp"], ["class", "price_project", 4, "ngIf"], ["target", "_blank", "rel", "noopener, nofollow", 1, "btn", "whatsapp", "whatsapp_init", 2, "cursor", "pointer"], [1, "fab", "fa-whatsapp"], [1, "slide_h_proyecto"], [1, "col_slide_p"], [1, "swiper", "mySwiper2", 2, "--swiper-navigation-color", "#fff", "--swiper-pagination-color", "#fff"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "container_arrows"], [1, "swiper-button-next"], [1, "swiper-button-prev"], ["class", "btn cta_maqueta_virt", "rel", "noopener,nofollow", "target", "_blank", 3, "href", 4, "ngIf"], ["thumbsSlider", "", 1, "swiper", "mySwiper"], [1, "grand_cont_ctas"], ["class", "btn", "rel", "noopener,nofollow", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "btn btn_calc_1", 4, "ngIf"], [1, "s_desc_proyecto"], [1, "c_desc_proyecto"], [1, "progress_state"], ["class", "state active sect1", "style", "cursor:pointer", 3, "click", 4, "ngIf"], ["class", "state sect2", "style", "cursor:pointer", 3, "click", 4, "ngIf"], ["class", "state sect3", "style", "cursor:pointer", 3, "click", 4, "ngIf"], ["class", "state sect4", "style", "cursor:pointer", 3, "click", 4, "ngIf"], ["class", "state sect5", "style", "cursor:pointer", 3, "click", 4, "ngIf"], ["class", "state sect6", "style", "cursor:pointer", 3, "click", 4, "ngIf"], [1, "container_desc_project"], ["class", "info_proj", "id", "sect1", 4, "ngIf"], ["id", "sect2", 1, "info_planos"], ["class", "container_pp", 4, "ngIf"], ["class", "info_sitios_interes", "id", "sect3", 4, "ngIf"], ["class", "info_zonas_comunes", "id", "sect4", 4, "ngIf"], ["class", "info_avance_obra", "id", "sect5", 4, "ngIf"], ["class", "info_banner_calcula", "id", "sect6", 4, "ngIf"], [1, "s_carr_proy"], [1, "bg_round"], [1, "title_section", "al_center"], [1, "cnt_car_proy_dest"], [1, "bg_dark"], [1, "s_modal_calculadora"], [1, "close_calc"], [1, "fas", "fa-arrow-right"], ["novalidate", "", 1, "f_calculadora", 3, "formGroup", "ngSubmit"], [1, "csp_calc"], [1, "swiper", "swiperCalcP"], [1, "swiper-pagination"], [1, "title_proyecto"], [1, "grand_c_inputs"], [1, "datos_persona"], [1, "cont_input_x1"], ["type", "text", "placeholder", "Nombre", "formControlName", "nombre"], ["class", "error-text", 4, "ngIf"], [1, "cont_input_x2"], ["type", "email", "placeholder", "Email", "formControlName", "email"], ["type", "tel", "placeholder", "Tel\u00E9fono", "formControlName", "telefono"], [1, "datos_cuota_inicial"], [1, "info"], ["for", ""], ["type", "number", "max", "100", 1, "cambiarPorcentaje", 3, "min", "value", "click"], [1, "cuotasinicialfinanciar", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "solo_info", "x3"], ["type", "text", "readonly", "", 1, "valorCuotaInicial", 3, "value"], ["type", "text", "readonly", "", 1, "separacion", 3, "value"], [1, "info", "highlight"], ["type", "text", "readonly", "", 1, "diferencia", 3, "value"], [1, "solo_info", "x1"], ["type", "text", "readonly", "", 1, "cuotamensual"], [1, "datos_financiacion"], [1, "solo_info", "x2"], ["type", "text", "readonly", "", 1, "porcentajeFinanciar", 3, "value"], ["type", "text", "readonly", "", 1, "valorafinanciar", 3, "value"], [1, "plazoaniosa", 3, "change"], ["value", "10"], ["value", "15"], ["value", "20"], ["type", "text", "value", "$ ", "readonly", "", 1, "cuotahipoteca"], [1, "cont_chk"], ["type", "checkbox", "id", "calc_form_chk", "formControlName", "terminos"], ["for", "calc_form_chk"], [1, "cont_submit"], ["type", "submit", 1, "btn", 3, "disabled"], [1, "layer_negro_wa_form"], [1, "cont_gen_wa_form_flt"], [1, "btn_wa_flt"], [1, "cont_gen_form_wa"], [1, "cont_top_form_wa"], [1, "cont_gen_prof_a_form"], [1, "img_pr_wa_form"], [1, "lazyload", 3, "src"], [1, "cont_nom_est_wa_form"], [1, "nomb_wa_fl"], [1, "estado_wa_form"], [1, "ic_cerrar_wa_form"], ["method", "post", "target", "_blank", 1, "cont_gen_s_chat", "validateForm"], [1, "cont_s_chat_conv_bl"], [1, "s_chat_conv_bl"], [1, "cont_s_chat_conv_ver"], [1, "s_chat_conv_ver"], [1, "cont_etq_campo_wa_form"], [1, "etq_wa_form"], ["type", "text", "name", "nombre", "id", "inp_name_wa_form", "required", "", 1, "campo_wa_form", 2, "background", "none"], ["type", "email", "name", "email", "id", "inp_email_wa_form", "required", "", 1, "campo_wa_form", 2, "background", "none"], [1, "cont_s_chat_conv_ver", "cnt_tel"], ["type", "tel", "name", "telefono", "id", "inp_tel_wa_form", "required", "", 1, "campo_wa_form", 2, "background", "none"], ["target", "_blank", "rel", "noopener,nofollow", "type", "submit", 1, "btn_form_wa", 2, "border", "none", "text-align", "center", 3, "href", "id"], ["type", "hidden", "name", "task", "value", "insertWhatsappData"], ["type", "hidden", "name", "mensaje", 3, "value"], ["type", "hidden", "name", "telefono_wsp", 3, "value"], ["type", "hidden", "name", "id_proyecto", 3, "value"], ["type", "hidden", "name", "url", 3, "value"], [1, "item_hp"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-phone-alt"], [3, "href"], [1, "fas", "fa-user-alt"], [1, "fas", "fa-clock"], [1, "fas", "fa-envelope"], [1, "price_project"], [1, "cont_price"], [1, "swiper-slide"], [3, "src", "alt", "title"], ["rel", "noopener,nofollow", "target", "_blank", 1, "btn", "cta_maqueta_virt", 3, "href"], ["width", "20", "height", "20", "src", "./assets/images/diseno/proyectos_vivienda/icon_360.svg", "alt", ""], ["rel", "noopener,nofollow", "target", "_blank", 1, "btn", 3, "href"], ["src", "assets/images/diseno/int_proyecto/icono_recorrido.svg", "width", "20", "height", "20", "alt", ""], ["src", "assets/images/diseno/int_proyecto/icono_waze.svg", "width", "20", "height", "20", "alt", ""], [1, "btn", "btn_calc_1"], ["src", "assets/images/diseno/int_proyecto/icono_calc.svg", "width", "20", "height", "20", "alt", ""], [1, "state", "active", "sect1", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-circle"], [1, "state", "sect2", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-circle-notch"], [1, "state", "sect3", 2, "cursor", "pointer", 3, "click"], [1, "state", "sect4", 2, "cursor", "pointer", 3, "click"], [1, "state", "sect5", 2, "cursor", "pointer", 3, "click"], [1, "state", "sect6", 2, "cursor", "pointer", 3, "click"], ["id", "sect1", 1, "info_proj"], [1, "title_section"], [3, "innerHTML"], ["width", "838", "height", "350", 3, "src", "alt", "title"], [1, "container_pp"], [1, ""], [1, "swiper", "swiperPlanos"], [1, "img_slider_tipo"], ["data-lightbox", "plano", 3, "href"], ["width", "409", "height", "247", 3, "src", "alt"], [1, "txt_img_plano"], [1, "swiper", "swiperTipologia"], ["data-lightbox", "tipologia", 3, "href"], ["width", "409", "height", "247", 3, "src", "alt", "title"], ["id", "sect3", 1, "info_sitios_interes"], [1, "tags_s_interes"], ["style", "cursor:pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "map"], ["width", "1050", "height", "350", 3, "center", "zoom"], [3, "position", "label", "title", "options", "icon", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"], [3, "position", "label", "title", "options", "icon"], ["id", "sect4", 1, "info_zonas_comunes"], [1, "c_zonas_c"], ["class", "item_zc", 4, "ngFor", "ngForOf"], [1, "item_zc"], ["width", "44", "height", "44", 3, "src", "alt"], ["id", "sect5", 1, "info_avance_obra"], [1, "fechas_a_obra"], [1, "tabs_nav_obra"], ["class", "botonpfc", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "cont_tab_video info", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "resumen_a_obra info", 3, "ngClass", "innerHTML", 4, "ngFor", "ngForOf"], [1, "botonpfc", 3, "ngClass"], [1, "cont_tab_video", "info", 3, "ngClass"], ["width", "514", "height", "300", "class", "js-modal-btn", 3, "src", 4, "ngIf", "ngIfElse"], ["routerVideo", ""], ["width", "514", "height", "300", 1, "js-modal-btn", 3, "src"], ["width", "517", "height", "301", 3, "src", "alt"], [1, "resumen_a_obra", "info", 3, "ngClass", "innerHTML"], ["id", "sect6", 1, "info_banner_calcula"], ["width", "571", "height", "110", "src", "assets/images/diseno/int_proyecto/img_calcula.jpg", "alt", ""], [1, "cnt_btn_calc"], [1, "btn", "contacto_h", "btn_calc_1"], [1, "fas", "fa-calculator"], ["width", "400", "height", "200", 3, "src", "alt"], [1, "error-text"], [3, "value", "selected"]],
  template: function InternaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "OIKOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " > ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Proyecto");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "div", 6)(12, "picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 8)(15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, InternaComponent_div_20_Template, 6, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, InternaComponent_div_21_Template, 7, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, InternaComponent_div_22_Template, 6, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, InternaComponent_div_23_Template, 6, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, InternaComponent_div_24_Template, 7, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, InternaComponent_div_26_Template, 7, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Contactar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 16)(31, "div", 17)(32, "div", 18)(33, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, InternaComponent_div_34_Template, 2, 3, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "div", 22)(37, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, InternaComponent_a_38_Template, 3, 1, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 25)(40, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, InternaComponent_div_41_Template, 2, 3, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, InternaComponent_a_43_Template, 3, 1, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, InternaComponent_a_44_Template, 3, 1, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, InternaComponent_a_45_Template, 3, 0, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "section", 29)(47, "div", 1)(48, "div", 30)(49, "aside", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, InternaComponent_a_50_Template, 4, 0, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, InternaComponent_a_51_Template, 4, 0, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, InternaComponent_a_52_Template, 4, 0, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, InternaComponent_a_53_Template, 4, 0, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, InternaComponent_a_54_Template, 4, 0, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, InternaComponent_a_55_Template, 4, 0, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, InternaComponent_div_57_Template, 9, 5, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, InternaComponent_div_59_Template, 8, 1, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, InternaComponent_div_60_Template, 8, 1, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, InternaComponent_div_61_Template, 11, 5, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, InternaComponent_div_62_Template, 7, 1, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, InternaComponent_div_63_Template, 10, 3, "div", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, InternaComponent_div_64_Template, 7, 0, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "section", 46)(66, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 1)(69, "h2", 48)(70, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "Proyectos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, " en construcci\u00F3n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](74, "app-slide-projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "span", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 51)(77, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](78, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "form", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function InternaComponent_Template_form_ngSubmit_79_listener() {
        return ctx.insertContact();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 55)(81, "div", 56)(82, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, InternaComponent_div_83_Template, 2, 2, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](84, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "h4", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 59)(88, "div", 60)(89, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](90, "input", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](91, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](92, InternaComponent_div_92_Template, 2, 0, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](94, "input", 65)(95, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](96, InternaComponent_div_96_Template, 2, 0, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](97, InternaComponent_div_97_Template, 4, 0, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 67)(99, "div", 64)(100, "div", 68)(101, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102, "Cuota inicial %");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "input", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InternaComponent_Template_input_click_103_listener() {
        return ctx.calculoPorcentaje();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "div", 68)(105, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106, "N\u00FAmero de cuotas");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "select", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function InternaComponent_Template_select_change_107_listener() {
        return ctx.diferenciadordecuotasmensuales();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](108, InternaComponent_option_108_Template, 2, 3, "option", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "div", 73)(110, "div", 68)(111, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](112, "Valor cuota inicial");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](113, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "div", 68)(115, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](116, "Separaci\u00F3n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](117, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](118, " 2%");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](119, "input", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "div", 76)(121, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "Saldo cuota inicial");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](123, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "div", 78)(125, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](126, "Valor cuota mensual");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](127, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "div", 80)(129, "div", 81)(130, "div", 68)(131, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](132, "Saldo a financiar %");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](133, "input", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](134, "div", 76)(135, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](136, "Valor");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](137, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "div", 64)(139, "div", 68)(140, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](141, "Plazo en a\u00F1os");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](142, "select", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function InternaComponent_Template_select_change_142_listener() {
        return ctx.plazoanios();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](143, "option", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](144, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](145, "option", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](146, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "option", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](148, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](149, "div", 68)(150, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](151, "Valor estimado cuota hipotecaria");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](152, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](153, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](154, "input", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "label", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](156, " Acepto y Autorizo la ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](158, " Pol\u00EDtica de Tratamiento de Datos");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](159, InternaComponent_div_159_Template, 2, 0, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "div", 92)(161, "button", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](162, "Enviar");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](163, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "div", 95)(165, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](166, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "div", 97)(168, "div", 98)(169, "div", 99)(170, "div", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](171, "img", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](172, "div", 102)(173, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](174);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](175, "div", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](176, " en linea ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](177, "span", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](178, "form", 106)(179, "div", 107)(180, "div", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](181);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](182, "div", 109)(183, "div", 110)(184, "div", 111)(185, "label", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](186, "Nombre:*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](187, "input", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](188, "div", 109)(189, "div", 110)(190, "div", 111)(191, "label", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](192, "Email:*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](193, "input", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](194, "div", 115)(195, "div", 110)(196, "div", 111)(197, "label", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](198, "Celular:*");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](199, "input", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](200, "a", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](201, "Iniciar conversaci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](202, "input", 118)(203, "input", 119)(204, "input", 120)(205, "input", 121)(206, "input", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx.imagenes_url + (ctx.data == null ? null : ctx.data.logo_proyecto), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", ctx.data == null ? null : ctx.data.alt_logo);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", ctx.data == null ? null : ctx.data.title_logo);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](56, _c0, ctx.data == null ? null : ctx.data.color_secundario));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.estado_proyecto, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.titulo_proyecto);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.direccion_proyecto) != "" && (ctx.data == null ? null : ctx.data.direccion_proyecto) != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.telefono_salaventas) != "" && (ctx.data == null ? null : ctx.data.telefono_salaventas) != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.director_ventas) != "" && (ctx.data == null ? null : ctx.data.director_ventas) != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.horario) != "" && (ctx.data == null ? null : ctx.data.horario) != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.email) != "" && (ctx.data == null ? null : ctx.data.email) != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.valor_proyecto) != "" && (ctx.data == null ? null : ctx.data.valor_proyecto) != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.galeria);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.tourguiado != "" && ctx.data.tourguiado != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.galeria);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.vista360 != "" && ctx.data.vista360 != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.url_waze != "" && ctx.data.url_waze != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.calculadora) == "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.descripcion_proyecto) && (ctx.data == null ? null : ctx.data.descripcion_proyecto) != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.planos.length > 0 || ctx.tipologia.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sitiosInteres.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.zonas.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.avances.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.calculadora) == "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.descripcion_proyecto) && (ctx.data == null ? null : ctx.data.descripcion_proyecto) != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.planos.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.tipologia.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sitiosInteres.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.zonas.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.avances.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.data == null ? null : ctx.data.calculadora) == "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.contactForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.galeria);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.titulo_proyecto, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("nombre"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("telefono"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("min", ctx.data == null ? null : ctx.data.porcentaje_minimo);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx.data == null ? null : ctx.data.porcentaje_minimo);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.data.numero_cuotas);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("value", "$ ", ctx.data == null ? null : ctx.data.cuota_inicial, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("value", "$ ", ctx.data == null ? null : ctx.data.cuota_separacion, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("value", "$ ", ctx.data == null ? null : ctx.data.saldo_cuota, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx.porcFinanciar);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("value", "$ ", ctx.data == null ? null : ctx.data.financiar, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("terminos"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.contactForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx.imagenes_url + (ctx.data == null ? null : ctx.data.logo_proyecto), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.titulo_proyecto);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.msg_wsp_flotante, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", ctx.data == null ? null : ctx.data.api_wsp, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "btn_form_wa_", ctx.data == null ? null : ctx.data.titulo_proyecto, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx.data == null ? null : ctx.data.msg_wsp_flotante);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx.data == null ? null : ctx.data.wsp_flotante);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx.data == null ? null : ctx.data.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", ctx.data == null ? null : ctx.data.url_amigable);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__.MapMarker, _shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_5__.SlideProjectsComponent, _shared_pipes_safe_resource_url_pipe__WEBPACK_IMPORTED_MODULE_6__.SafePipe],
  styles: ["*[_ngcontent-%COMP%] {\n    scroll-behavior: smooth;\n  }\n  \n  .bg_dark[_ngcontent-%COMP%] {\n    display: none;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: 99;\n    background: rgba(9, 8, 24, 0.8196078431);\n    inset: 0;\n  }\n  \n  .s_modal_calculadora[_ngcontent-%COMP%] {\n    position: fixed;\n    height: 100%;\n    z-index: 100;\n    top: 0;\n    right: 0;\n    width: 100%;\n    max-width: 520px;\n    background-color: #fff;\n    border-radius: 20px 0 0 20px;\n    padding: 30px;\n    transition: 300ms ease-out;\n    transform: translateX(100%);\n    overflow-y: scroll;\n  }\n  \n  .s_modal_calculadora[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 12px;\n    margin: 0 0 4px;\n    color: #9c9c9c;\n    display: inline-block;\n  }\n  \n  .s_modal_calculadora.active[_ngcontent-%COMP%] {\n    transform: translateX(0%);\n  }\n  \n  .s_modal_calculadora[_ngcontent-%COMP%]   .close_calc[_ngcontent-%COMP%] {\n    text-align: right;\n    display: flex;\n    justify-content: flex-end;\n    margin: 0 0 20px;\n  }\n  \n  .s_modal_calculadora[_ngcontent-%COMP%]   .close_calc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    align-items: center;\n    justify-content: center;\n    width: 30px;\n    height: 30px;\n    font-size: 20px;\n    cursor: pointer;\n  }\n  \n  .s_modal_calculadora[_ngcontent-%COMP%]   .close_calc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover:before {\n    transform: translateX(10px);\n    color: #4369c6;\n  }\n  \n  .s_modal_calculadora[_ngcontent-%COMP%]   .close_calc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n    transition: 300ms ease;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 30px;\n    height: 30px;\n  }\n  \n  .csp_calc[_ngcontent-%COMP%] {\n    border-radius: 20px;\n    overflow: hidden;\n    margin: 0 0 30px;\n  }\n  \n  .csp_calc[_ngcontent-%COMP%]   .title_proyecto[_ngcontent-%COMP%] {\n    background: #0a102d;\n    padding: 8px;\n    text-align: center;\n    color: #fff;\n    font-size: 15px;\n  }\n  \n  .swiperCalcP[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  \n  .swiperCalcP[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to top, rgba(0, 0, 0, 0.3803921569), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));\n    z-index: 2;\n    pointer-events: none;\n  }\n  \n  .swiperCalcP[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n    max-height: 200px;\n  }\n  \n  .swiperCalcP[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  .swiperCalcP[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n    background-color: #fff;\n    width: 10px;\n    height: 10px;\n    border-radius: 100px;\n    transition: 300ms ease;\n  }\n  \n  .swiperCalcP[_ngcontent-%COMP%]   .swiper-pagination-bullet.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n    width: 15px;\n  }\n  \n  .swiperCalcP[_ngcontent-%COMP%]   .swiper-pagination[_ngcontent-%COMP%] {\n    bottom: 0 !important;\n  }\n  \n  .grand_c_inputs[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  \n  .grand_c_inputs[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    cursor: pointer;\n    height: 37px;\n  }\n  \n  .datos_cuota_inicial[_ngcontent-%COMP%] {\n    margin: 10px 0;\n    padding: 20px 0;\n    border-top: 1px solid #dadada;\n    border-bottom: 1px solid #dadada;\n  }\n  \n  input[_ngcontent-%COMP%] {\n    outline: 0;\n  }\n  \n  .datos_cuota_inicial[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  \n  .x3[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 10px;\n  }\n  \n  .x2[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n  \n  .info.highlight[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    background-color: #182360;\n    color: #fff;\n  }\n  \n  .info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    background: #e0e0e0;\n    border: 0;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    color: #182360;\n    font-weight: 700;\n  }\n  \n  .cont_input_x2[_ngcontent-%COMP%] {\n    align-items: flex-end;\n  }\n  \n  .datos_financiacion[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  \n  .cont_chk[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n  }\n  \n  .cont_chk[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  \n  .cont_submit[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    text-align: center;\n    justify-content: center;\n  }\n  \n  .s_proyecto_h[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, rgba(198, 198, 198, 0) 0%, #E3E3E3 100%), #FFFFFF;\n    position: relative;\n    padding: 30px 0 100px;\n  }\n  \n  .s_proyecto_h[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    background: url('curva_inf.svg') no-repeat center;\n    background-position: center bottom;\n    background-size: cover;\n    bottom: -1px;\n    left: 0;\n    margin: auto;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    max-height: 60px;\n    z-index: 1;\n  }\n  \n  .precio_hp[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 30px;\n    align-items: center;\n    justify-content: flex-start;\n    justify-items: flex-start;\n  }\n  \n  .price_project[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .price_project[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #182360;\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 18px;\n    font-weight: 700;\n    margin: 0 0 6px;\n  }\n  \n  .price_project[_ngcontent-%COMP%]   .cont_price[_ngcontent-%COMP%] {\n    background: #182360;\n    border-radius: 8px;\n    color: #FFF;\n    font-weight: 900;\n    font-size: 34px;\n    padding: 8px 14px;\n  }\n  \n  .price_project[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n    text-align: center;\n    display: block;\n    margin: 6px 0 0;\n  }\n  \n  .hero_proyecto[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 40px;\n    align-items: center;\n    max-width: 1440px;\n    margin: 0 auto;\n    padding: 0 20px;\n  }\n  \n  .h_logo_proyect[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 30px;\n    padding: 0 0 30px;\n    border-bottom: 1px solid #DADADA;\n  }\n  \n  .h_logo_proyect[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    display: inline-flex;\n    max-width: 140px;\n    background-color: #FFFFFF;\n    box-shadow: 0px 10px 26px -5px rgba(49, 60, 103, 0.4);\n    border-radius: 9px;\n    background-blend-mode: multiply;\n    border-radius: 8px;\n    overflow: hidden;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .h_logo_proyect[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  .h_logo_proyect[_ngcontent-%COMP%]   .title_ph[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  \n  .h_logo_proyect[_ngcontent-%COMP%]   .title_ph[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n    width: -moz-fit-content;\n    width: fit-content;\n    padding: 6px 20px;\n    border-radius: 100px;\n    font-weight: 700;\n    margin: 0 0 14px;\n  }\n  \n  .h_logo_proyect[_ngcontent-%COMP%]   .title_ph[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 20px;\n    letter-spacing: 0.62em;\n    color: #2A3C7F;\n  }\n  \n  .h_logo_proyect[_ngcontent-%COMP%]   .title_ph[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    color: #2A3C7F;\n    font-weight: 900;\n    font-size: 34px;\n  }\n  \n  .info_heading_proy[_ngcontent-%COMP%] {\n    padding: 30px 0;\n    border-bottom: 1px solid #DADADA;\n    margin: 0 0 20px;\n  }\n  \n  .item_hp[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    gap: 10px;\n    color: #182360;\n    margin: 0 0 10px;\n  }\n  \n  .item_hp[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #182360;\n    text-decoration: underline;\n  }\n  \n  .item_hp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    min-width: 20px;\n    align-items: center;\n    justify-content: center;\n    color: #182360;\n    display: flex;\n  }\n  \n  .col_slide_p[_ngcontent-%COMP%] {\n    max-width: 680px;\n    display: flex;\n    align-items: stretch;\n    justify-content: center;\n    max-height: 360px;\n    gap: 10px;\n    width: 100%;\n  }\n  \n  .mySwiper2[_ngcontent-%COMP%] {\n    max-height: 360px;\n    border-radius: 15px;\n    overflow: hidden;\n    width: 100%;\n    margin: 0;\n  }\n  \n  .mySwiper2[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n    width: 100% !important;\n    height: 100%;\n  }\n  \n  .mySwiper2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  .mySwiper[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  \n  .mySwiper[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n    cursor: pointer;\n    width: 100% !important;\n    height: 100% !important;\n    max-width: 90px;\n    max-height: 63px;\n    border-radius: 4px;\n    overflow: hidden;\n  }\n  \n  .mySwiper[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  .grand_cont_ctas[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    margin: 20px 0 0;\n    gap: 20px;\n  }\n  \n  .grand_cont_ctas[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    height: 30px;\n  }\n  \n  .c_desc_proyecto[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 220px 1fr;\n    gap: 20px;\n    align-items: stretch;\n  }\n  \n  .progress_state[_ngcontent-%COMP%] {\n    height: -moz-fit-content;\n    height: fit-content;\n    position: sticky;\n    top: 140px;\n    background: #182360;\n    box-shadow: 0px 16px 35px -8px rgba(0, 0, 0, 0.1215686275);\n    border-radius: 8px;\n    padding: 20px;\n  }\n  \n  .progress_state[_ngcontent-%COMP%]::before {\n    content: \"\";\n    left: 28px;\n    top: 0;\n    bottom: 0;\n    width: 1px;\n    height: 80%;\n    margin: auto;\n    z-index: 1;\n    background-color: rgba(255, 255, 255, 0.254);\n    position: absolute;\n  }\n  \n  .cta_maqueta_virt[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    height: 30px;\n  }\n  \n  .cta_maqueta_virt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    max-width: 20px;\n  }\n  \n  .mySwiper2[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .mySwiper2[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n    top: initial;\n    bottom: 20px;\n    position: initial;\n  }\n  \n  .mySwiper2[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n    right: 45%;\n    background-color: #FFF;\n    border-radius: 100px;\n    width: 30px;\n    height: 30px;\n    border-radius: 0 100px 100px 0;\n    border-left: 1px solid #DADADA;\n  }\n  \n  .mySwiper2[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]:after {\n    color: #0a102d;\n    font-size: 20px;\n  }\n  \n  .mySwiper2[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n    left: 45%;\n    background-color: #FFF;\n    border-radius: 100px;\n    width: 30px;\n    height: 30px;\n    border-radius: 100px 0 0 100px;\n    border-right: 1px solid #DADADA;\n  }\n  \n  .mySwiper2[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]:after {\n    color: #0a102d;\n    font-size: 20px;\n  }\n  \n  .container_arrows[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 20px;\n    left: 0;\n    right: 0;\n    margin: auto;\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: center;\n  }\n  \n  .btn_whatsapp_fixed[_ngcontent-%COMP%] {\n    position: fixed;\n    right: 2%;\n    bottom: 2%;\n    width: 80px;\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: 300ms ease-out;\n    z-index: 10;\n  }\n  \n  .btn_whatsapp_fixed[_ngcontent-%COMP%]:hover {\n    transform: scale(1.2);\n  }\n  \n  .btn_whatsapp_fixed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n  \n  .state[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 10px;\n    color: #FFF;\n    position: relative;\n    z-index: 3;\n    margin: 0 0 14px;\n    transition: 300ms ease;\n  }\n  \n  .state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    background-color: #182360;\n    border-radius: 100px;\n    position: relative;\n    z-index: 3;\n  }\n  \n  .state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-weight: 300;\n  }\n  \n  .state.active[_ngcontent-%COMP%] {\n    color: #4584e9;\n  }\n  \n  .state[_ngcontent-%COMP%]:hover {\n    color: #929aca;\n  }\n  \n  .info_proj[_ngcontent-%COMP%] {\n    max-width: 830px;\n  }\n  \n  .info_proj[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 0 0 20px;\n  }\n  \n  .info_proj[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.3;\n  }\n  \n  .info_proj[_ngcontent-%COMP%]   .btn.read[_ngcontent-%COMP%] {\n    background: #FDB718;\n    padding: 4px 20px;\n    height: auto;\n    text-align: right;\n    display: flex;\n    align-items: center;\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n  \n  .info_proj[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    max-height: 351px;\n    overflow: hidden;\n    border-radius: 22px;\n    position: relative;\n    margin: 30px 0;\n  }\n  \n  .info_proj[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  .info_proj[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 3%;\n    right: 1%;\n  }\n  \n  .cont_btn_seguir[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n  }\n  \n  .info_planos[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 40px;\n    width: 100%;\n    max-width: 830px;\n  }\n  \n  .swiperPlanos[_ngcontent-%COMP%], .swiperTipologia[_ngcontent-%COMP%] {\n    width: 92vw;\n    max-width: 400px;\n    display: flex;\n    flex-direction: column;\n  }\n  \n  .swiperPlanos[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiperTipologia[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  \n  .swiperPlanos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .swiperTipologia[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    max-height: 250px;\n    border-radius: 20px;\n    position: relative;\n    object-fit: cover;\n    z-index: 1;\n  }\n  \n  .swiperPlanos[_ngcontent-%COMP%]   .txt_img_plano[_ngcontent-%COMP%], .swiperTipologia[_ngcontent-%COMP%]   .txt_img_plano[_ngcontent-%COMP%] {\n    background: #0a102d;\n    text-align: center;\n    color: #FFFFFF;\n    padding: 20px;\n    box-sizing: border-box;\n    border-radius: 0 0 10px 10px;\n    transform: translateY(-20px);\n  }\n  \n  .swiperPlanos[_ngcontent-%COMP%]   .txt_img_plano[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .swiperTipologia[_ngcontent-%COMP%]   .txt_img_plano[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin: 20px 0 20px;\n    font-weight: 700;\n    font-size: 20px;\n  }\n  \n  .swiperPlanos[_ngcontent-%COMP%]   .txt_img_plano[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .swiperTipologia[_ngcontent-%COMP%]   .txt_img_plano[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n  \n  .swiperPlanos[_ngcontent-%COMP%]   .txt_img_plano[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .swiperTipologia[_ngcontent-%COMP%]   .txt_img_plano[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0 0 10px;\n    opacity: 0.8;\n  }\n  \n  .container_pp[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 400px;\n  }\n  \n  .container_pp[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin: 20px 0;\n  }\n  \n  .map[_ngcontent-%COMP%] {\n    position: relative;\n    min-height: 330px;\n  }\n  \n  .map[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    max-height: 330px;\n    object-fit: cover;\n    border-radius: 10px;\n  }\n  \n  .map[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 20px;\n    right: 0;\n    left: 0;\n    margin: auto;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n    z-index: 1;\n  }\n  \n  .info_sitios_interes[_ngcontent-%COMP%] {\n    max-width: 830px;\n  }\n  \n  .info_sitios_interes[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 20px 0;\n  }\n  \n  .tags_s_interes[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 0 0 20px;\n    flex-wrap: wrap;\n  }\n  \n  .tags_s_interes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    border-radius: 100px;\n    background-color: #0a102d;\n    color: #FFF;\n    font-size: 12px;\n    padding: 4px 8px;\n  }\n  \n  .item_zc[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n    text-align: center;\n  }\n  \n  .item_zc[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    max-width: 44px;\n    object-fit: contain;\n  }\n  \n  .c_zonas_c[_ngcontent-%COMP%] {\n    padding: 40px;\n    box-sizing: border-box;\n    background: #F7F7F7;\n    border: 1px solid #E3E3E3;\n    border-radius: 14px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n    flex-wrap: wrap;\n    gap: 20px;\n  }\n  \n  .info_avance_obra[_ngcontent-%COMP%] {\n    background: linear-gradient(0deg, rgba(24, 35, 96, 0.9), rgba(24, 35, 96, 0.9)), linear-gradient(0deg, #182360, #182360), url('bg_proyecto.jpg') no-repeat center;\n    background-size: cover;\n    background-blend-mode: normal, color, normal;\n    border-radius: 46px;\n    padding: 40px;\n    max-width: 840px;\n  }\n  \n  .info_avance_obra[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 0 0 20px;\n    color: #FFF;\n  }\n  \n  .fechas_a_obra[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 2.5fr;\n    gap: 30px;\n    margin: 0 0 20px;\n  }\n  \n  .resumen_a_obra[_ngcontent-%COMP%] {\n    color: #FFF;\n    line-height: 1.5;\n    font-weight: 300;\n    opacity: 0.8;\n  }\n  \n  .tabs_nav_obra[_ngcontent-%COMP%] {\n    background-color: #FFF;\n    border-radius: 20px;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n  \n  .tabs_nav_obra[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n    opacity: 0.5;\n  }\n  \n  .tabs_nav_obra[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  \n  .cont_tab_video[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-height: 300px;\n    overflow: hidden;\n    border-radius: 20px;\n    position: relative;\n    cursor: pointer;\n  }\n  \n  .cont_tab_video[_ngcontent-%COMP%]:hover::before {\n    transform: scale(1.1);\n  }\n  \n  .cont_tab_video[_ngcontent-%COMP%]:before {\n    font-family: \"Font Awesome 5 Pro\";\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    width: 50px;\n    height: 50px;\n    border-radius: 100px;\n    background-color: #FFF;\n    display: flex;\n    color: #182360;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n    font-weight: 800;\n    transition: 300ms ease-out;\n  }\n  \n  .cont_tab_video[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    object-fit: cover;\n  }\n  \n  .info_zonas_comunes[_ngcontent-%COMP%] {\n    max-width: 830px;\n    margin: 0 0 50px;\n  }\n  \n  .info_zonas_comunes[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 30px 0 20px;\n  }\n  \n  .info_banner_calcula[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    align-items: center;\n    justify-items: center;\n    max-height: 110px;\n    border-radius: 100px;\n    overflow: hidden;\n    max-width: 830px;\n    background-color: #182360;\n    margin: 40px 0;\n  }\n  \n  .info_banner_calcula[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    max-height: 100px;\n  }\n  \n  .info_banner_calcula[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  .cnt_btn_calc[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .container_desc_project[_ngcontent-%COMP%] {\n    max-width: 830px;\n    width: 100%;\n  }\n  \n  .img_slider_tipo[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: hidden;\n    background: #FFF;\n    position: relative;\n    z-index: 1;\n    border-radius: 20px;\n  }\n  \n  .swiper-button-prev[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n    left: -25px;\n    background-color: #182360;\n    width: 50px;\n    height: 50px;\n    border-radius: 100px;\n  }\n  \n  .swiper-button-next[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n    right: -25px;\n    background-color: #182360;\n    width: 50px;\n    height: 50px;\n    border-radius: 100px;\n  }\n  \n  .container_desc_project[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]:after, .container_desc_project[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]:after {\n    font-size: 20px;\n    padding-right: 18px;\n    color: #FFF;\n  }\n  \n  .container_desc_project[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]:after {\n    padding-left: 18px;\n    padding-right: 0;\n  }\n  \n  .whatsapp[_ngcontent-%COMP%] {\n    background: linear-gradient(90deg, #35C24D 0%, #48E263 45.83%, #35C24D 100%);\n  }\n  \n  @media screen and (max-width: 1200px) {\n    .grand_cont_ctas[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n      font-size: 14px;\n    }\n    .col_slide_p[_ngcontent-%COMP%] {\n      max-width: initial;\n    }\n  }\n  \n  @media screen and (max-width: 1050px) {\n    .hero_proyecto[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr;\n    }\n    .progress_state[_ngcontent-%COMP%] {\n      display: none;\n    }\n    .c_desc_proyecto[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr;\n    }\n    .info_planos[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n    }\n    .container_pp[_ngcontent-%COMP%], .swiperPlanos[_ngcontent-%COMP%], .swiperTipologia[_ngcontent-%COMP%] {\n      max-width: initial;\n    }\n    .fechas_a_obra[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr;\n    }\n  }\n  \n  @media screen and (max-width: 768px) {\n    .info_banner_calcula[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr;\n    }\n    .info_banner_calcula[_ngcontent-%COMP%] {\n      max-height: initial;\n      position: relative;\n    }\n    .info_banner_calcula[_ngcontent-%COMP%]::before {\n      content: \"\";\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background: linear-gradient(to top, rgba(25, 35, 111, 0.8784313725), rgba(41, 57, 160, 0));\n      inset: 0;\n    }\n    .cnt_btn_calc[_ngcontent-%COMP%] {\n      position: absolute;\n      margin: 0;\n    }\n    .precio_hp[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr;\n    }\n    .grand_cont_ctas[_ngcontent-%COMP%] {\n      flex-direction: column;\n    }\n    .grand_cont_ctas[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n      width: 100%;\n      text-align: center;\n      justify-content: center;\n    }\n  }\n  \n  @media screen and (max-width: 480px) {\n    .col_slide_p[_ngcontent-%COMP%] {\n      max-height: 214px;\n    }\n    .h_logo_proyect[_ngcontent-%COMP%]   .title_ph[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n      font-size: 14px;\n    }\n    .h_logo_proyect[_ngcontent-%COMP%]   .title_ph[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 24px;\n    }\n    .c_zonas_c[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr 1fr 1fr;\n      padding: 20px;\n    }\n  }\n  \n  @media screen and (max-width: 390px) {\n    .item_zc[_ngcontent-%COMP%] {\n      text-align: center;\n    }\n    .c_zonas_c[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n  \n  \n  \n  .oculto[_ngcontent-%COMP%]{\n    display: none;\n  }\n  \n  \n  \n  .s_proyecto_vivienda[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, rgba(233, 237, 247, 0) 0%, #E8EBF1 72.6%), #FFFFFF;\n    min-height: 340px;\n    position: relative;\n  }\n  \n  .s_proyecto_vivienda[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: -2px;\n    background: url('curva_bg.svg') no-repeat;\n    background-size: cover;\n    background-position: center top;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    max-height: 145px;\n    pointer-events: none;\n  }\n  \n  .c_proyecto_vivienda[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  \n  .c_proyecto_vivienda[_ngcontent-%COMP%]::before, .c_proyecto_vivienda[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    background: url('puntos.svg') no-repeat center;\n    width: 20px;\n    height: 70px;\n  }\n  \n  .c_proyecto_vivienda[_ngcontent-%COMP%]:after {\n    right: 0;\n    left: initial;\n    top: initial;\n    bottom: 0;\n    transform: rotate(180deg);\n  }\n  \n  .filtro_proyectos[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    background: #FFFFFF;\n    box-shadow: 0px 2px 20px -3px rgba(51, 66, 119, 0.25);\n    border-radius: 39px;\n    padding: 8px 20px;\n    max-width: 920px;\n    margin: 0 auto;\n  }\n  \n  .filtro_proyectos[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    background: none;\n    border-radius: 0;\n    border: 0;\n    border-bottom: 1px solid #DADADA;\n    padding: 5px;\n    color: #666666;\n    font-size: 14px;\n    cursor: pointer;\n  }\n  \n  .filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%] {\n    max-width: 130px;\n  }\n  \n  .s_cards_proyectos[_ngcontent-%COMP%] {\n    padding: 0px 0 40px;\n    position: relative;\n    z-index: 1;\n    transform: translateY(-80px);\n  }\n  \n  .c_cards_proyectos[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n    gap: 20px;\n  }\n  \n  .card_p[_ngcontent-%COMP%] {\n    overflow: hidden;\n    background: #FFFFFF;\n    box-shadow: 0px 19px 41px -18px rgba(35, 56, 98, 0.45);\n    border-radius: 24px;\n    display: inline-grid;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    max-height: 219px;\n    width: 100%;\n    height: 100%;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%] {\n    text-align: center;\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    border-radius: 100px;\n    padding: 8px 20px;\n    color: #282828;\n    font-weight: 600;\n    font-size: 14px;\n    z-index: 1;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 10px;\n    right: 10px;\n    border-radius: 6px;\n    background: var(--color-grad_azul_osc);\n    width: 80px;\n    height: 40px;\n    z-index: 1;\n    overflow: hidden;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 80%;\n    width: 1px;\n    background-color: rgb(165, 165, 165);\n    margin: auto;\n    z-index: 2;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 26px;\n    height: 26px;\n    transition: 300ms ease;\n    width: 100%;\n    height: 100%;\n    position: relative;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    content: \"\";\n    background-color: var(--color-c2);\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 300;\n    font-size: 20px;\n    color: #FFF;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%] {\n    background-color: #2E3B85;\n    padding: 10px;\n    display: grid;\n    grid-template-columns: 80px 1fr;\n    align-items: center;\n    gap: 20px;\n    position: relative;\n    min-height: 54px;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    max-width: 87px;\n    border-radius: 100px;\n    border: 5px solid #FFFFFF;\n    background-color: #FFF;\n    position: absolute;\n    width: 90px;\n    height: 90px;\n    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.33);\n    left: 10px;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    mix-blend-mode: multiply;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    grid-column: 2;\n    color: #FFFFFF;\n    font-size: 15px;\n    font-weight: 700;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%] {\n    padding: 30px 20px 20px;\n    text-align: center;\n    color: var(--color-c2);\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: 700;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 34px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    text-align: center;\n    justify-content: center;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 400;\n    display: inline-block;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%] {\n    width: 100%;\n    background: linear-gradient(90deg, rgba(238, 238, 238, 0.5) 0%, #EEEEEE 48.96%, rgba(238, 238, 238, 0.5) 100%);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    padding: 10px;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: var(--color-c2);\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    align-items: center;\n    padding: 10px;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color: var(--color-c2);\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover {\n    color: #060b29;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, #5FFC7B 0%, #26D044 100%);\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 30px;\n    height: 30px;\n    font-size: 22px;\n    color: #FFF;\n    font-weight: 500;\n  }\n  \n  .card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: -moz-fit-content;\n    width: fit-content;\n    justify-self: flex-end;\n  }\n  \n  .act_filtro_mobile[_ngcontent-%COMP%] {\n    display: none;\n    color: var(--color-c2);\n    font-size: 18px;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    background: #FFF;\n    padding: 20px;\n    border-radius: 10px;\n  }\n  \n  .container_filtro[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  \n  .cont_filtr_btns[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    padding-left: 10px;\n    border-left: 1px solid #DADADA;\n  }\n  \n  .s_futuros_proyectos[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    min-height: 460px;\n  }\n  \n  .s_futuros_proyectos[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    background: url('curva_sup.svg') no-repeat center;\n    background-size: cover;\n    background-position: center bottom;\n    width: 100%;\n    height: 100%;\n    max-height: 40px;\n    top: -2px;\n    left: 0;\n    right: 0;\n    z-index: 2;\n  }\n  \n  .s_futuros_proyectos[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    background: url('curva_inf.svg') no-repeat center;\n    background-size: cover;\n    background-position: center top;\n    width: 100%;\n    height: 100%;\n    max-height: 40px;\n    bottom: -2px;\n    left: 0;\n    right: 0;\n    z-index: 2;\n  }\n  \n  .c_futuros_proyectos[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: stretch;\n    position: relative;\n    min-height: 460px;\n  }\n  \n  .c_futuros_proyectos[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 400px;\n    height: 300px;\n    border-radius: 100%;\n    background: rgba(54, 107, 236, 0.35);\n    filter: blur(54px);\n    margin: auto;\n    mix-blend-mode: lighten;\n  }\n  \n  .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%] {\n    background: url('bg_futuros.jpg'), linear-gradient(107.08deg, #4565B3 0%, #2B478B 31.11%, #13203E 100%);\n    background-blend-mode: multiply;\n    background-size: cover;\n    background-position: center;\n    padding: 0 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    gap: 30px;\n  }\n  \n  .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]::before, .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    width: 20px;\n    height: 70px;\n    background: url('puntos.svg') no-repeat center;\n    background-size: contain;\n    left: 3%;\n    top: 20%;\n  }\n  \n  .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after {\n    right: 3%;\n    bottom: 20%;\n    top: initial;\n    left: initial;\n    transform: rotate(180deg);\n  }\n  \n  .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    letter-spacing: 0.365em;\n    text-transform: uppercase;\n    color: #FFED00;\n    font-weight: 600;\n    font-size: 20px;\n  }\n  \n  .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-weight: 900;\n    color: #FFF;\n    font-size: 40px;\n    max-width: 500px;\n    line-height: 1.1;\n  }\n  \n  .c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n  \n  .c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  .swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%] {\n    background: #182360;\n    border: 3px solid #FAFAFA;\n    border-radius: 100px;\n    width: 35px;\n    height: 35px;\n  }\n  \n  .swiper-button-next[_ngcontent-%COMP%]:after, .swiper-button-prev[_ngcontent-%COMP%]:after {\n    font-size: 16px;\n    font-weight: 800;\n    color: #FFF;\n  }\n  \n  .swiper-pagination[_ngcontent-%COMP%] {\n    bottom: 60px !important;\n  }\n  \n  .swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n    background-color: #FFF;\n    width: 10px;\n    border-radius: 100px;\n    height: 10px;\n    transition: 400ms ease;\n  }\n  \n  .swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  \n  .swiper-button-prev[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n    left: 25px;\n  }\n  \n  .swiper-button-next[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n    right: 25px;\n  }\n  \n  .s_proyectos_ejecutados[_ngcontent-%COMP%] {\n    padding: 30px 0;\n  }\n  \n  .cont_proyecto_logo[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n  }\n  \n  .cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #E4E4E4;\n    max-width: 100px;\n    cursor: pointer;\n    position: relative;\n    z-index: 1;\n    transition: 400ms ease;\n    border-radius: 9px;\n  }\n  \n  .cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 9px;\n  }\n  \n  .cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0px;\n    width: 70px;\n    height: 60px;\n    border-radius: 100%;\n    margin: auto;\n    z-index: -1;\n    background: #333663;\n    opacity: 0;\n    filter: blur(26px);\n    transition: 400ms ease;\n  }\n  \n  .cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    transform: scale(1.2) translateY(0px);\n    z-index: 2;\n  }\n  \n  .cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n    opacity: 0.58;\n    bottom: -20px;\n  }\n  \n  .cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    transform: scale(1.05) translateY(-15px);\n    z-index: 2;\n  }\n  \n  .cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::before {\n    opacity: 0.58;\n    bottom: -10px;\n  }\n  \n  .cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n  \n  .holder[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 750px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    padding: 20px 0;\n  }\n  \n  .holder[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.jp-previous, .jp-next)[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  .holder[_ngcontent-%COMP%]   .jp-previous[_ngcontent-%COMP%], .holder[_ngcontent-%COMP%]   .jp-next[_ngcontent-%COMP%] {\n    color: #182360;\n    font-weight: 700;\n    font-size: 15px;\n    cursor: pointer;\n  }\n  \n  .holder[_ngcontent-%COMP%]   .jp-previous.jp-disabled[_ngcontent-%COMP%], .holder[_ngcontent-%COMP%]   .jp-next.jp-disabled[_ngcontent-%COMP%] {\n    opacity: 0.5;\n  }\n  \n  .cont_proyecto_eject[_ngcontent-%COMP%] {\n    display: none;\n    width: 100%;\n    grid-template-columns: 1fr 1fr;\n    justify-content: center;\n    width: 100%;\n    align-items: stretch;\n    background: url('bg_pe.jpg'), rgba(10, 16, 45, 0.9215686275);\n    border-radius: 48px 48px 97px 48px;\n    background-blend-mode: multiply;\n    background-size: cover;\n    position: relative;\n    margin: 0 0 40px;\n  }\n  \n  .cont_proyecto_eject[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    left: 10%;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    mix-blend-mode: lighten;\n    max-width: 400px;\n    width: 100%;\n    max-height: 300px;\n    height: 100%;\n    border-radius: 100%;\n    background: rgba(54, 107, 236, 0.3490196078);\n    filter: blur(54px);\n    pointer-events: none;\n  }\n  \n  .cont_proyecto_eject.active[_ngcontent-%COMP%] {\n    display: grid;\n  }\n  \n  .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 40px 100px;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    color: #FFF;\n    align-items: flex-start;\n    justify-content: center;\n  }\n  \n  .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n    text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.17);\n    letter-spacing: 0.62em;\n    font-weight: 400;\n  }\n  \n  .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 52px;\n    font-weight: 800;\n    text-transform: uppercase;\n    background: linear-gradient(180deg, #FFFFFF, #FFFFFF, #9297b7);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.17);\n  }\n  \n  .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%] {\n    font-size: 20px;\n    border-bottom: 1px solid rgba(215, 215, 215, 0.6235294118);\n    font-weight: 700;\n  }\n  \n  .swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  \n  .info_datos_pe[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 4px;\n    font-size: 18px;\n    font-weight: 300;\n  }\n  \n  .info_datos_pe[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-weight: 700;\n  }\n  \n  .c_slider_pe[_ngcontent-%COMP%] {\n    border-radius: 100px 0px 95px 0;\n    overflow: hidden;\n    max-height: 380px;\n  }\n  \n  .c_slider_pe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    object-fit: cover;\n  }\n  \n  .tabs_proyectos_eject[_ngcontent-%COMP%] {\n    margin: 0 0 40px;\n  }\n  \n  \n  \n  @media screen and (max-width: 1200px) {\n    .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%] {\n      padding: 40px;\n    }\n    .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      font-size: 30px;\n    }\n    .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%] {\n      padding: 0 20px 0 80px;\n      gap: 20px;\n    }\n  }\n  \n  @media screen and (max-width: 1050px) {\n    .c_proyecto_vivienda[_ngcontent-%COMP%]:after {\n      bottom: initial;\n      top: 0;\n    }\n    .act_filtro_mobile[_ngcontent-%COMP%] {\n      display: flex;\n    }\n    .filtro_proyectos[_ngcontent-%COMP%] {\n      display: none;\n      flex-direction: column;\n      position: absolute;\n      z-index: 10;\n      padding: 20px;\n      width: 100%;\n      top: 70px;\n      border-radius: 10px;\n    }\n    .filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%] {\n      max-width: initial;\n    }\n    .cont_filtr_btns[_ngcontent-%COMP%] {\n      border: 0;\n    }\n    .cont_proyecto_eject[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr;\n    }\n    .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      font-size: 32px;\n    }\n    .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%] {\n      gap: 10px;\n    }\n    .swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n      max-height: 300px;\n    }\n  }\n  \n  @media screen and (max-width: 768px) {\n    .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%] {\n      padding: 20px;\n      min-height: 340px;\n    }\n    .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%] {\n      font-size: 18px;\n    }\n    .c_futuros_proyectos[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr;\n      min-height: initial;\n    }\n    .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%] {\n      padding: 80px 20px 20px;\n      min-height: 380px;\n    }\n    .swiperFuturos[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .swiperFuturos[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n      top: 13%;\n    }\n    .cont_proyecto_eject[_ngcontent-%COMP%]:before {\n      display: none;\n    }\n  }\n  \n  @media screen and (max-width: 480px) {\n    .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n      font-size: 16px;\n    }\n    .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      font-size: 26px;\n    }\n    .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      font-size: 16px;\n    }\n    .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      font-size: 30px;\n    }\n    .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%] {\n      padding: 30px 20px 10px;\n    }\n  }\n  \n  \n  \n  \n  \n  .layer_negro_wa_form[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.7);\n    z-index: -3;\n    opacity: 0;\n    transition: all .3s;\n}\n  \n  .layer_negro_wa_form.active[_ngcontent-%COMP%]{\n    opacity: 1;\n    z-index: 30;\n}\n  \n  .cont_gen_wa_form_flt[_ngcontent-%COMP%] {\n    width:45px;\n    height: 45px;\n    position: fixed;\n    bottom: 25px;\n    left: 16px;\n    right: 40px;\n    z-index: 31\n}\n  \n  .btn_wa_flt[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n    background: #00C033;\n    color: #fff;\n    border-radius: 50%;\n    line-height: 56px;\n    position: fixed;\n    bottom: 5%;\n    right: 2%;\n    font-size: 25px;\n    box-shadow: 0px 4px 14px rgb(0 0 0 / 25%);\n    z-index: 100;\n}\n  \n  .btn_wa_flt[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n    font-size: 42px;\n    line-height: 68px;\n    position: relative;\n    right: -17px;\n}\n  \n  .cont_gen_form_wa[_ngcontent-%COMP%] {\n    width: 350px;\n    position: absolute;\n    bottom: -800px;\n    right: 10px;\n    background: url('bg_form_wa.png') center #E5E5E5;\n    overflow: hidden;\n    border-radius: 7px;\n    box-shadow: 0 4px 4px rgba(0,0,0,.25);\n    font-family: 'Helvetica', 'Arial', sans-serif;\n    z-index: 1;\n    opacity: 0;\n    transition: all .3s;\n}\n  \n  .cont_gen_form_wa.active[_ngcontent-%COMP%] {\n    bottom: 70px;\n    opacity: 1;\n}\n  \n  .cont_gen_form_wa[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    font-family: 'Helvetica', 'Arial', sans-serif;\n}\n  \n  .cont_top_form_wa[_ngcontent-%COMP%] {\n    width: 100%;\n    background: #FAFAFA;\n    border-radius: 7px 7px 0px 0px;\n    border-bottom: 1px solid #bcbcbc;\n    box-sizing: border-box;\n    padding: 4px 8px;\n    display: flex;\n    display: -webkit-flex;\n    justify-content: space-between;\n    -webkit-justify-content: space-between;\n}\n  \n  .img_pr_wa_form[_ngcontent-%COMP%] {\n    width: 30px;\n    min-width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n}\n  \n  .img_pr_wa_form[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    max-width: 70%;\n    max-height: 25px;\n}\n  \n  .cont_gen_prof_a_form[_ngcontent-%COMP%] {\n    width: 80%;\n    display: flex;\n    display: -webkit-flex;\n}\n  \n  .cont_nom_est_wa_form[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    padding-left: 8px;\n    text-align: left;\n    margin-top: 4px;\n}\n  \n  .nomb_wa_fl[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 11px;\n    font-weight: bold;\n    color: #2A2F32;\n}\n  \n  .estado_wa_form[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 10px;\n    color: #A0A0A0;\n}\n  \n  .ic_cerrar_wa_form[_ngcontent-%COMP%] {\n    color: #2A2F32;\n    display: block;\n    background: url('cerrar_form_wa.svg') no-repeat center;\n    width: 35px;\n    height: 35px;\n    background-size: 40% auto;\n    cursor: pointer;\n}\n  \n  .cont_gen_s_chat[_ngcontent-%COMP%] {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 16px 8px;\n    position: relative;\n    display: inline-block;\n}\n  \n  .s_chat_conv_bl[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    background: #fff;\n    box-sizing: border-box;\n    padding: 8px;\n    font-size:11px;\n    text-align: left;\n    position: relative;\n    border-radius: 4px 0 0 0;\n}\n  \n  .s_chat_conv_bl[_ngcontent-%COMP%]:after {\n    content: \"\";\n    width: 0;\n    height: 0;\n    border-top: 10px solid transparent;\n    border-right: 10px solid #fff;\n    position: absolute;\n    left: -10px;\n    bottom: 0;\n}\n  \n  .s_chat_conv_bl[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 14px;\n}\n  \n  .cont_s_chat_conv_bl[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 266px;\n    float: left;\n    text-align: right;\n    box-sizing: border-box;\n    padding-left: 10px;\n    overflow: hidden;\n    border-radius: 4px;\n    border-bottom: 1px solid #ccc;\n    margin-bottom: 20px;\n}\n  \n  .cont_s_chat_conv_ver[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 266px;\n    float: right;\n    text-align: right;\n    box-sizing: border-box;\n    padding-right: 10px;\n    \n    border-radius: 4px;\n    border-bottom: 1px solid #ccc;\n    margin-bottom: 8px;\n}\n  \n  .cont_s_chat_conv_ver.cnt_tel[_ngcontent-%COMP%]{\n    overflow: visible;\n}\n  \n  .s_chat_conv_ver[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    background: #DCF8C6;\n    box-sizing: border-box;\n    padding: 8px;\n    font-size:11px;\n    text-align: left;\n    position: relative;\n    border-radius: 4px 0 4px 4px;\n}\n  \n  .s_chat_conv_ver[_ngcontent-%COMP%]:after {\n    content: \"\";\n    width: 0;\n    height: 0;\n    border-bottom: 10px solid transparent;\n    border-left: 10px solid #DCF8C6;\n    position: absolute;\n    right: -10px;\n    top: 0;\n}\n  \n  .cont_etq_campo_wa_form[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    display: -webkit-flex;\n    align-items: center;\n    -webkit-align-items: center;\n}\n  \n  .etq_wa_form[_ngcontent-%COMP%] {\n    font-size:11px;\n    color: #737373;\n    text-align: left;\n}\n  \n  .campo_wa_form[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    font-size: 12px;\n    color: #333;box-sizing: border-box;\n    padding: 0 8px;\n    border: none;\n}\n  \n  .btn_form_wa[_ngcontent-%COMP%] {\n    width: 180px;\n    font-size: 12px;\n    color: #fff;\n    font-weight: bold;\n    margin: 10px 0 40px;\n    background: #0B6156;\n    border-radius: 4px;\n    float: right;\n    margin-right: 10px;\n    padding: 10px 0;\n    cursor:pointer;\n}\n  \n  .btn_form_wa[_ngcontent-%COMP%]:hover {\n    background: #04433b;\n}\n  \n  .cont_s_chat_conv_ver[_ngcontent-%COMP%]   .formError[_ngcontent-%COMP%]{\n    left: 0!important;\n}\n  \n  @media screen and (max-width:480px){\n    .cont_gen_form_wa[_ngcontent-%COMP%] {\n        width: 95%;\n        position: fixed;\n        margin: 0;\n    }\n    .cont_gen_form_wa.active[_ngcontent-%COMP%]{\n        bottom: 10%;\n        left: 2.5%;\n    }\n    .btn_wa_flt[_ngcontent-%COMP%]{\n        width:  45px;\n        height: 45px;\n        bottom: 5%;\n        line-height: 43px;\n    }\n    .btn_wa_flt[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n        font-size: 22px;\n        line-height: 40px;\n        height: 22px;\n        display: inline-block;\n    }\n}\n  \n  .btn_form_wa[_ngcontent-%COMP%]:disabled{\n  background-color: #ccc;\n}\n/*# sourceMappingURL=proyecto.css.map */\n/*# sourceMappingURL=proyectos_vivienda.css.map */\n/*# sourceMappingURL=data:application/json;base64,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SUFDVCxxQ0FBcUM7SUFDckMsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osTUFBTTtBQUNWOztFQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDJCQUEyQjtBQUMvQjs7RUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztFQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXLENBQUMsc0JBQXNCO0lBQ2xDLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztFQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0VBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0VBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0VBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsU0FBUztJQUNiO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLHFCQUFxQjtJQUN6QjtBQUNKOztFQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImludGVybmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICB9XG4gIFxuICAuYmdfZGFyayB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoOSwgOCwgMjQsIDAuODE5NjA3ODQzMSk7XG4gICAgaW5zZXQ6IDA7XG4gIH1cbiAgXG4gIC5zX21vZGFsX2NhbGN1bGFkb3JhIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMCAwIDIwcHg7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLW91dDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG4gIC5zX21vZGFsX2NhbGN1bGFkb3JhIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiAwIDAgNHB4O1xuICAgIGNvbG9yOiAjOWM5YzljO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuc19tb2RhbF9jYWxjdWxhZG9yYS5hY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbiAgLnNfbW9kYWxfY2FsY3VsYWRvcmEgLmNsb3NlX2NhbGMge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xuICB9XG4gIC5zX21vZGFsX2NhbGN1bGFkb3JhIC5jbG9zZV9jYWxjIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnNfbW9kYWxfY2FsY3VsYWRvcmEgLmNsb3NlX2NhbGMgc3Bhbjpob3ZlcjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICBjb2xvcjogIzQzNjljNjtcbiAgfVxuICAuc19tb2RhbF9jYWxjdWxhZG9yYSAuY2xvc2VfY2FsYyBzcGFuOmJlZm9yZSB7XG4gICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICAuY3NwX2NhbGMge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xuICB9XG4gIC5jc3BfY2FsYyAudGl0bGVfcHJveWVjdG8ge1xuICAgIGJhY2tncm91bmQ6ICMwYTEwMmQ7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgXG4gIC5zd2lwZXJDYWxjUCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zd2lwZXJDYWxjUDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjM4MDM5MjE1NjkpLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIC5zd2lwZXJDYWxjUCAuc3dpcGVyLXNsaWRlIHtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgfVxuICAuc3dpcGVyQ2FsY1AgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgLnN3aXBlckNhbGNQIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2U7XG4gIH1cbiAgLnN3aXBlckNhbGNQIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgd2lkdGg6IDE1cHg7XG4gIH1cbiAgLnN3aXBlckNhbGNQIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5ncmFuZF9jX2lucHV0cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbiAgLmdyYW5kX2NfaW5wdXRzIHNlbGVjdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMzdweDtcbiAgfVxuICBcbiAgLmRhdG9zX2N1b3RhX2luaWNpYWwge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RhZGFkYTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZGFkYTtcbiAgfVxuICBcbiAgaW5wdXQge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbiAgXG4gIC5kYXRvc19jdW90YV9pbmljaWFsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuICBcbiAgLngzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG4gIFxuICAueDIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuICBcbiAgLmluZm8uaGlnaGxpZ2h0IGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyMzYwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5pbmZvIGlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgIGJvcmRlcjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMTgyMzYwO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgXG4gIC5jb250X2lucHV0X3gyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cbiAgXG4gIC5kYXRvc19maW5hbmNpYWNpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG4gIFxuICAuY29udF9jaGsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbiAgLmNvbnRfY2hrIGxhYmVsIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5jb250X3N1Ym1pdCAuYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5zX3Byb3llY3RvX2gge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTk4LCAxOTgsIDE5OCwgMCkgMCUsICNFM0UzRTMgMTAwJSksICNGRkZGRkY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDMwcHggMCAxMDBweDtcbiAgfVxuICAuc19wcm95ZWN0b19oOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaXNlbm8vcHJveWVjdG9zX3ZpdmllbmRhL2N1cnZhX2luZi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm90dG9tOiAtMXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC5wcmVjaW9faHAge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIFxuICAucHJpY2VfcHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnByaWNlX3Byb2plY3QgaDQge1xuICAgIGNvbG9yOiAjMTgyMzYwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMCAwIDZweDtcbiAgfVxuICAucHJpY2VfcHJvamVjdCAuY29udF9wcmljZSB7XG4gICAgYmFja2dyb3VuZDogIzE4MjM2MDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgcGFkZGluZzogOHB4IDE0cHg7XG4gIH1cbiAgLnByaWNlX3Byb2plY3Qgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDZweCAwIDA7XG4gIH1cbiAgXG4gIC5oZXJvX3Byb3llY3RvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbiAgXG4gIC5oX2xvZ29fcHJveWVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBnYXA6IDMwcHg7XG4gICAgcGFkZGluZzogMCAwIDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQURBREE7XG4gIH1cbiAgLmhfbG9nb19wcm95ZWN0IHBpY3R1cmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIG1heC13aWR0aDogMTQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyNnB4IC01cHggcmdiYSg0OSwgNjAsIDEwMywgMC40KTtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5oX2xvZ29fcHJveWVjdCBwaWN0dXJlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG4gIC5oX2xvZ29fcHJveWVjdCAudGl0bGVfcGgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICAuaF9sb2dvX3Byb3llY3QgLnRpdGxlX3BoIC50YWcge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMCAwIDE0cHg7XG4gIH1cbiAgLmhfbG9nb19wcm95ZWN0IC50aXRsZV9waCBoNSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYyZW07XG4gICAgY29sb3I6ICMyQTNDN0Y7XG4gIH1cbiAgLmhfbG9nb19wcm95ZWN0IC50aXRsZV9waCBoMSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzJBM0M3RjtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgfVxuICBcbiAgLmluZm9faGVhZGluZ19wcm95IHtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQURBREE7XG4gICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgfVxuICBcbiAgLml0ZW1faHAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGNvbG9yOiAjMTgyMzYwO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gIH1cbiAgLml0ZW1faHAgYSB7XG4gICAgY29sb3I6ICMxODIzNjA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgLml0ZW1faHAgc3BhbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1pbi13aWR0aDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjMTgyMzYwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5jb2xfc2xpZGVfcCB7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1heC1oZWlnaHQ6IDM2MHB4O1xuICAgIGdhcDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm15U3dpcGVyMiB7XG4gICAgbWF4LWhlaWdodDogMzYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAubXlTd2lwZXIyIC5zd2lwZXItc2xpZGUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5teVN3aXBlcjIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgXG4gIC5teVN3aXBlciB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5teVN3aXBlciAuc3dpcGVyLXNsaWRlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDkwcHg7XG4gICAgbWF4LWhlaWdodDogNjNweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAubXlTd2lwZXIgLnN3aXBlci1zbGlkZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICBcbiAgLmdyYW5kX2NvbnRfY3RhcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luOiAyMHB4IDAgMDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgLmdyYW5kX2NvbnRfY3RhcyAuYnRuIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIC5jX2Rlc2NfcHJveWVjdG8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMjBweCAxZnI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIFxuICAucHJvZ3Jlc3Nfc3RhdGUge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDE0MHB4O1xuICAgIGJhY2tncm91bmQ6ICMxODIzNjA7XG4gICAgYm94LXNoYWRvdzogMHB4IDE2cHggMzVweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4xMjE1Njg2Mjc1KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAucHJvZ3Jlc3Nfc3RhdGU6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBsZWZ0OiAyOHB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjU0KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgXG4gIC5jdGFfbWFxdWV0YV92aXJ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIC5jdGFfbWFxdWV0YV92aXJ0IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgbWF4LXdpZHRoOiAyMHB4O1xuICB9XG4gIFxuICAubXlTd2lwZXIyIC5zd2lwZXItYnV0dG9uLW5leHQsIC5teVN3aXBlcjIgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgdG9wOiBpbml0aWFsO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgfVxuICBcbiAgLm15U3dpcGVyMiAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICByaWdodDogNDUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMTAwcHggMTAwcHggMDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNEQURBREE7XG4gIH1cbiAgLm15U3dpcGVyMiAuc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyIHtcbiAgICBjb2xvcjogIzBhMTAyZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgXG4gIC5teVN3aXBlcjIgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgbGVmdDogNDUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4IDAgMCAxMDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjREFEQURBO1xuICB9XG4gIC5teVN3aXBlcjIgLnN3aXBlci1idXR0b24tcHJldjphZnRlciB7XG4gICAgY29sb3I6ICMwYTEwMmQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyX2Fycm93cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmJ0bl93aGF0c2FwcF9maXhlZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAyJTtcbiAgICBib3R0b206IDIlO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1vdXQ7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgLmJ0bl93aGF0c2FwcF9maXhlZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG4gIC5idG5fd2hhdHNhcHBfZml4ZWQgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuICBcbiAgLnN0YXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMztcbiAgICBtYXJnaW46IDAgMCAxNHB4O1xuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2U7XG4gIH1cbiAgLnN0YXRlIHNwYW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODIzNjA7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDM7XG4gIH1cbiAgLnN0YXRlIGg0IHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIC5zdGF0ZS5hY3RpdmUge1xuICAgIGNvbG9yOiAjNDU4NGU5O1xuICB9XG4gIC5zdGF0ZTpob3ZlciB7XG4gICAgY29sb3I6ICM5MjlhY2E7XG4gIH1cbiAgXG4gIC5pbmZvX3Byb2oge1xuICAgIG1heC13aWR0aDogODMwcHg7XG4gIH1cbiAgLmluZm9fcHJvaiBoMyB7XG4gICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgfVxuICAuaW5mb19wcm9qIHAge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIH1cbiAgLmluZm9fcHJvaiAuYnRuLnJlYWQge1xuICAgIGJhY2tncm91bmQ6ICNGREI3MTg7XG4gICAgcGFkZGluZzogNHB4IDIwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIH1cbiAgLmluZm9fcHJvaiBwaWN0dXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDM1MXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gIH1cbiAgLmluZm9fcHJvaiBwaWN0dXJlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG4gIC5pbmZvX3Byb2ogcGljdHVyZSBhIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzJTtcbiAgICByaWdodDogMSU7XG4gIH1cbiAgXG4gIC5jb250X2J0bl9zZWd1aXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmluZm9fcGxhbm9zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA4MzBweDtcbiAgfVxuICBcbiAgLnN3aXBlclBsYW5vcywgLnN3aXBlclRpcG9sb2dpYSB7XG4gICAgd2lkdGg6IDkydnc7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnN3aXBlclBsYW5vcyAuc3dpcGVyLXNsaWRlLCAuc3dpcGVyVGlwb2xvZ2lhIC5zd2lwZXItc2xpZGUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnN3aXBlclBsYW5vcyBpbWcsIC5zd2lwZXJUaXBvbG9naWEgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAuc3dpcGVyUGxhbm9zIC50eHRfaW1nX3BsYW5vLCAuc3dpcGVyVGlwb2xvZ2lhIC50eHRfaW1nX3BsYW5vIHtcbiAgICBiYWNrZ3JvdW5kOiAjMGExMDJkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG4gIC5zd2lwZXJQbGFub3MgLnR4dF9pbWdfcGxhbm8gaDQsIC5zd2lwZXJUaXBvbG9naWEgLnR4dF9pbWdfcGxhbm8gaDQge1xuICAgIG1hcmdpbjogMjBweCAwIDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLnN3aXBlclBsYW5vcyAudHh0X2ltZ19wbGFubyBkaXYgdWwsIC5zd2lwZXJUaXBvbG9naWEgLnR4dF9pbWdfcGxhbm8gZGl2IHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIC5zd2lwZXJQbGFub3MgLnR4dF9pbWdfcGxhbm8gdWwgbGksIC5zd2lwZXJUaXBvbG9naWEgLnR4dF9pbWdfcGxhbm8gdWwgbGkge1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIFxuICAuY29udGFpbmVyX3BwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICB9XG4gIC5jb250YWluZXJfcHAgPiBoMyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG4gIFxuICAubWFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMzMwcHg7XG4gIH1cbiAgLm1hcCA+IGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAzMzBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5tYXAgLmJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC5pbmZvX3NpdGlvc19pbnRlcmVzIHtcbiAgICBtYXgtd2lkdGg6IDgzMHB4O1xuICB9XG4gIC5pbmZvX3NpdGlvc19pbnRlcmVzIGgzIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgfVxuICBcbiAgLnRhZ3Nfc19pbnRlcmVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC50YWdzX3NfaW50ZXJlcyBzcGFuIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGExMDJkO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICB9XG4gIFxuICAuaXRlbV96YyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaXRlbV96YyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQ0cHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuICBcbiAgLmNfem9uYXNfYyB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UzRTNFMztcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMjBweCwgMWZyKSk7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMjBweDtcbiAgfVxuICBcbiAgLmluZm9fYXZhbmNlX29icmEge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI0LCAzNSwgOTYsIDAuOSksIHJnYmEoMjQsIDM1LCA5NiwgMC45KSksIGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTgyMzYwLCAjMTgyMzYwKSwgdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaXNlbm8vaW50X3Byb3llY3RvL2JnX3Byb3llY3RvLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWwsIGNvbG9yLCBub3JtYWw7XG4gICAgYm9yZGVyLXJhZGl1czogNDZweDtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIG1heC13aWR0aDogODQwcHg7XG4gIH1cbiAgLmluZm9fYXZhbmNlX29icmEgaDMge1xuICAgIG1hcmdpbjogMCAwIDIwcHg7XG4gICAgY29sb3I6ICNGRkY7XG4gIH1cbiAgXG4gIC5mZWNoYXNfYV9vYnJhIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuNWZyO1xuICAgIGdhcDogMzBweDtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xuICB9XG4gIFxuICAucmVzdW1lbl9hX29icmEge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgXG4gIC50YWJzX25hdl9vYnJhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gIC50YWJzX25hdl9vYnJhIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgLnRhYnNfbmF2X29icmEgYS5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIC5jb250X3RhYl92aWRlbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5jb250X3RhYl92aWRlbzpob3Zlcjo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgLmNvbnRfdGFiX3ZpZGVvOmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgUHJvXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAjMTgyMzYwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1vdXQ7XG4gIH1cbiAgLmNvbnRfdGFiX3ZpZGVvIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgXG4gIC5pbmZvX3pvbmFzX2NvbXVuZXMge1xuICAgIG1heC13aWR0aDogODMwcHg7XG4gICAgbWFyZ2luOiAwIDAgNTBweDtcbiAgfVxuICAuaW5mb196b25hc19jb211bmVzIGgzIHtcbiAgICBtYXJnaW46IDMwcHggMCAyMHB4O1xuICB9XG4gIFxuICAuaW5mb19iYW5uZXJfY2FsY3VsYSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LWhlaWdodDogMTEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtd2lkdGg6IDgzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODIzNjA7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG4gIH1cbiAgLmluZm9fYmFubmVyX2NhbGN1bGEgcGljdHVyZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuaW5mb19iYW5uZXJfY2FsY3VsYSBwaWN0dXJlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG4gIFxuICAuY250X2J0bl9jYWxjIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jb250YWluZXJfZGVzY19wcm9qZWN0IHtcbiAgICBtYXgtd2lkdGg6IDgzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuaW1nX3NsaWRlcl90aXBvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICBcbiAgLnN3aXBlci1idXR0b24tcHJldiwgLnN3aXBlci1ydGwgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgbGVmdDogLTI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MjM2MDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIH1cbiAgXG4gIC5zd2lwZXItYnV0dG9uLW5leHQsIC5zd2lwZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIHJpZ2h0OiAtMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyMzYwO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lcl9kZXNjX3Byb2plY3QgLnN3aXBlci1idXR0b24tbmV4dDphZnRlciwgLmNvbnRhaW5lcl9kZXNjX3Byb2plY3QgLnN3aXBlci1idXR0b24tcHJldjphZnRlciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG4gICAgY29sb3I6ICNGRkY7XG4gIH1cbiAgXG4gIC5jb250YWluZXJfZGVzY19wcm9qZWN0IC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIge1xuICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG4gIFxuICAud2hhdHNhcHAge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzM1QzI0RCAwJSwgIzQ4RTI2MyA0NS44MyUsICMzNUMyNEQgMTAwJSk7XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIC5ncmFuZF9jb250X2N0YXMgLmJ0biB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5jb2xfc2xpZGVfcCB7XG4gICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuICAgIC5oZXJvX3Byb3llY3RvIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgICAucHJvZ3Jlc3Nfc3RhdGUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmNfZGVzY19wcm95ZWN0byB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gICAgLmluZm9fcGxhbm9zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuY29udGFpbmVyX3BwLCAuc3dpcGVyUGxhbm9zLCAuc3dpcGVyVGlwb2xvZ2lhIHtcbiAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgICB9XG4gICAgLmZlY2hhc19hX29icmEge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmluZm9fYmFubmVyX2NhbGN1bGEge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICAgIC5pbmZvX2Jhbm5lcl9jYWxjdWxhIHtcbiAgICAgIG1heC1oZWlnaHQ6IGluaXRpYWw7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5pbmZvX2Jhbm5lcl9jYWxjdWxhOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgyNSwgMzUsIDExMSwgMC44Nzg0MzEzNzI1KSwgcmdiYSg0MSwgNTcsIDE2MCwgMCkpO1xuICAgICAgaW5zZXQ6IDA7XG4gICAgfVxuICAgIC5jbnRfYnRuX2NhbGMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAucHJlY2lvX2hwIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgICAuZ3JhbmRfY29udF9jdGFzIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5ncmFuZF9jb250X2N0YXMgLmJ0biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5jb2xfc2xpZGVfcCB7XG4gICAgICBtYXgtaGVpZ2h0OiAyMTRweDtcbiAgICB9XG4gICAgLmhfbG9nb19wcm95ZWN0IC50aXRsZV9waCBoNSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5oX2xvZ29fcHJveWVjdCAudGl0bGVfcGggaDEge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICAuY196b25hc19jIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTBweCkge1xuICAgIC5pdGVtX3pjIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNfem9uYXNfYyB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgfVxuICB9LyojIHNvdXJjZU1hcHBpbmdVUkw9cHJveWVjdG8uY3NzLm1hcCAqL1xuXG4gIC5vY3VsdG97XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qIHByb3llY3RvIHZpdmllbmRhICovXG4gIC5zX3Byb3llY3RvX3ZpdmllbmRhIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIzMywgMjM3LCAyNDcsIDApIDAlLCAjRThFQkYxIDcyLjYlKSwgI0ZGRkZGRjtcbiAgICBtaW4taGVpZ2h0OiAzNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnNfcHJveWVjdG9fdml2aWVuZGE6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IC0ycHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaXNlbm8vcHJveWVjdG9zX3ZpdmllbmRhL2N1cnZhX2JnLnN2Z1wiKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDE0NXB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICAuY19wcm95ZWN0b192aXZpZW5kYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5jX3Byb3llY3RvX3ZpdmllbmRhOjpiZWZvcmUsIC5jX3Byb3llY3RvX3ZpdmllbmRhOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaXNlbm8vcHJveWVjdG9zX3ZpdmllbmRhL3B1bnRvcy5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gIH1cbiAgLmNfcHJveWVjdG9fdml2aWVuZGE6YWZ0ZXIge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGluaXRpYWw7XG4gICAgdG9wOiBpbml0aWFsO1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG4gIFxuICAuZmlsdHJvX3Byb3llY3RvcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMjBweCAtM3B4IHJnYmEoNTEsIDY2LCAxMTksIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDM5cHg7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA5MjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAuZmlsdHJvX3Byb3llY3RvcyBzZWxlY3Qge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQURBREE7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmZpbHRyb19wcm95ZWN0b3MgLnByZWNpbyB7XG4gICAgbWF4LXdpZHRoOiAxMzBweDtcbiAgfVxuICBcbiAgLnNfY2FyZHNfcHJveWVjdG9zIHtcbiAgICBwYWRkaW5nOiAwcHggMCA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODBweCk7XG4gIH1cbiAgXG4gIC5jX2NhcmRzX3Byb3llY3RvcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgXG4gIC5jYXJkX3Age1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMTlweCA0MXB4IC0xOHB4IHJnYmEoMzUsIDU2LCA5OCwgMC40NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgfVxuICAuY2FyZF9wIHBpY3R1cmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LWhlaWdodDogMjE5cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5jYXJkX3AgcGljdHVyZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuY2FyZF9wIC50YWdfc3RhdGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgY29sb3I6ICMyODI4Mjg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAuY2FyZF9wIC5idG5zX2ljb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZ3JhZF9henVsX29zYyk7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuY2FyZF9wIC5idG5zX2ljb25zOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxNjUsIDE2NSk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgLmNhcmRfcCAuYnRuc19pY29ucyBhIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmNhcmRfcCAuYnRuc19pY29ucyBhOmhvdmVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWMyKTtcbiAgfVxuICAuY2FyZF9wIC5idG5zX2ljb25zIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbiAgLmNhcmRfcCAuYnRuc19pY29ucyBzcGFuIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jYXJkX3AgLm5hbWVfcHJveWVjdG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTNCODU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDU0cHg7XG4gIH1cbiAgLmNhcmRfcCAubmFtZV9wcm95ZWN0byBwaWN0dXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA4N3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNGRkZGRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuICAuY2FyZF9wIC5uYW1lX3Byb3llY3RvIHBpY3R1cmUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gIH1cbiAgLmNhcmRfcCAubmFtZV9wcm95ZWN0byBkaXYge1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIC5jYXJkX3AgLmRhdG9zX3Byb3llY3RvIHtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWMyKTtcbiAgfVxuICAuY2FyZF9wIC5kYXRvc19wcm95ZWN0byBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLmNhcmRfcCAuZGF0b3NfcHJveWVjdG8gaDQge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5jYXJkX3AgLmRhdG9zX3Byb3llY3RvIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuY2FyZF9wIC5mcmFuamFfcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuNSkgMCUsICNFRUVFRUUgNDguOTYlLCByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuNSkgMTAwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5jYXJkX3AgLmZyYW5qYV9wIHNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jMik7XG4gIH1cbiAgLmNhcmRfcCAuY3Rhc19wcm95ZWN0b3Mge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmNhcmRfcCAuYnRuX3doYXRzYXBwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jMik7XG4gIH1cbiAgLmNhcmRfcCAuYnRuX3doYXRzYXBwOmhvdmVyIHtcbiAgICBjb2xvcjogIzA2MGIyOTtcbiAgfVxuICAuY2FyZF9wIC5idG5fd2hhdHNhcHAgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzVGRkM3QiAwJSwgIzI2RDA0NCAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuY2FyZF9wIC5idG4ge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICB9XG4gIFxuICAuYWN0X2ZpbHRyb19tb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWMyKTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXJfZmlsdHJvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5jb250X2ZpbHRyX2J0bnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0RBREFEQTtcbiAgfVxuICBcbiAgLnNfZnV0dXJvc19wcm95ZWN0b3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA0NjBweDtcbiAgfVxuICAuc19mdXR1cm9zX3Byb3llY3Rvczo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9wcm95ZWN0b3Nfdml2aWVuZGEvY3VydmFfc3VwLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICB0b3A6IC0ycHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5zX2Z1dHVyb3NfcHJveWVjdG9zOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaXNlbm8vcHJveWVjdG9zX3ZpdmllbmRhL2N1cnZhX2luZi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgYm90dG9tOiAtMnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICBcbiAgLmNfZnV0dXJvc19wcm95ZWN0b3Mge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiA0NjBweDtcbiAgfVxuICAuY19mdXR1cm9zX3Byb3llY3Rvczo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU0LCAxMDcsIDIzNiwgMC4zNSk7XG4gICAgZmlsdGVyOiBibHVyKDU0cHgpO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtaXgtYmxlbmQtbW9kZTogbGlnaHRlbjtcbiAgfVxuICAuY19mdXR1cm9zX3Byb3llY3RvcyAuaW5mb19mcCB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaXNlbm8vcHJveWVjdG9zX3ZpdmllbmRhL2JnX2Z1dHVyb3MuanBnXCIpLCBsaW5lYXItZ3JhZGllbnQoMTA3LjA4ZGVnLCAjNDU2NUIzIDAlLCAjMkI0NzhCIDMxLjExJSwgIzEzMjAzRSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBnYXA6IDMwcHg7XG4gIH1cbiAgLmNfZnV0dXJvc19wcm95ZWN0b3MgLmluZm9fZnA6OmJlZm9yZSwgLmNfZnV0dXJvc19wcm95ZWN0b3MgLmluZm9fZnA6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9wcm95ZWN0b3Nfdml2aWVuZGEvcHVudG9zLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBsZWZ0OiAzJTtcbiAgICB0b3A6IDIwJTtcbiAgfVxuICAuY19mdXR1cm9zX3Byb3llY3RvcyAuaW5mb19mcDphZnRlciB7XG4gICAgcmlnaHQ6IDMlO1xuICAgIGJvdHRvbTogMjAlO1xuICAgIHRvcDogaW5pdGlhbDtcbiAgICBsZWZ0OiBpbml0aWFsO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgLmNfZnV0dXJvc19wcm95ZWN0b3MgLmluZm9fZnAgaDUge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjM2NWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNGRkVEMDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLmNfZnV0dXJvc19wcm95ZWN0b3MgLmluZm9fZnAgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgfVxuICAuY19mdXR1cm9zX3Byb3llY3RvcyAuaW1nX2ZwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmNfZnV0dXJvc19wcm95ZWN0b3MgLmltZ19mcCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICBcbiAgLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgYmFja2dyb3VuZDogIzE4MjM2MDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRkFGQUZBO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuICBcbiAgLnN3aXBlci1idXR0b24tbmV4dDphZnRlciwgLnN3aXBlci1idXR0b24tcHJldjphZnRlciB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICNGRkY7XG4gIH1cbiAgXG4gIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgYm90dG9tOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnN3aXBlci1wYWdpbmF0aW9uIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHRyYW5zaXRpb246IDQwMG1zIGVhc2U7XG4gIH1cbiAgLnN3aXBlci1wYWdpbmF0aW9uIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICBcbiAgLnN3aXBlci1idXR0b24tcHJldiwgLnN3aXBlci1ydGwgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgbGVmdDogMjVweDtcbiAgfVxuICBcbiAgLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1ydGwgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgcmlnaHQ6IDI1cHg7XG4gIH1cbiAgXG4gIC5zX3Byb3llY3Rvc19lamVjdXRhZG9zIHtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gIH1cbiAgXG4gIC5jb250X3Byb3llY3RvX2xvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgfVxuICAuY29udF9wcm95ZWN0b19sb2dvIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTRFNEU0O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zaXRpb246IDQwMG1zIGVhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICB9XG4gIC5jb250X3Byb3llY3RvX2xvZ28gYSBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgfVxuICAuY29udF9wcm95ZWN0b19sb2dvIGE6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgei1pbmRleDogLTE7XG4gICAgYmFja2dyb3VuZDogIzMzMzY2MztcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYmx1cigyNnB4KTtcbiAgICB0cmFuc2l0aW9uOiA0MDBtcyBlYXNlO1xuICB9XG4gIC5jb250X3Byb3llY3RvX2xvZ28gYTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5jb250X3Byb3llY3RvX2xvZ28gYTpob3Zlcjo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAwLjU4O1xuICAgIGJvdHRvbTogLTIwcHg7XG4gIH1cbiAgLmNvbnRfcHJveWVjdG9fbG9nbyBhLmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5jb250X3Byb3llY3RvX2xvZ28gYS5hY3RpdmU6OmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMC41ODtcbiAgICBib3R0b206IC0xMHB4O1xuICB9XG4gIC5jb250X3Byb3llY3RvX2xvZ28gYSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIFxuICAuaG9sZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgfVxuICAuaG9sZGVyIGE6bm90KC5qcC1wcmV2aW91cywgLmpwLW5leHQpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ob2xkZXIgLmpwLXByZXZpb3VzLCAuaG9sZGVyIC5qcC1uZXh0IHtcbiAgICBjb2xvcjogIzE4MjM2MDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmhvbGRlciAuanAtcHJldmlvdXMuanAtZGlzYWJsZWQsIC5ob2xkZXIgLmpwLW5leHQuanAtZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICBcbiAgLmNvbnRfcHJveWVjdG9fZWplY3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGlzZW5vL3Byb3llY3Rvc192aXZpZW5kYS9iZ19wZS5qcGdcIiksIHJnYmEoMTAsIDE2LCA0NSwgMC45MjE1Njg2Mjc1KTtcbiAgICBib3JkZXItcmFkaXVzOiA0OHB4IDQ4cHggOTdweCA0OHB4O1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIDAgNDBweDtcbiAgfVxuICAuY29udF9wcm95ZWN0b19lamVjdDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwJTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtaXgtYmxlbmQtbW9kZTogbGlnaHRlbjtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNTQsIDEwNywgMjM2LCAwLjM0OTAxOTYwNzgpO1xuICAgIGZpbHRlcjogYmx1cig1NHB4KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICAuY29udF9wcm95ZWN0b19lamVjdC5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cbiAgLmNvbnRfcHJveWVjdG9fZWplY3QgLmluZm9fcGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA0MHB4IDEwMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuY29udF9wcm95ZWN0b19lamVjdCAuaW5mb19wZSBoNCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICAuY29udF9wcm95ZWN0b19lamVjdCAuaW5mb19wZSBoMiB7XG4gICAgZm9udC1zaXplOiA1MnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkZGRkZGLCAjRkZGRkZGLCAjOTI5N2I3KTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICB9XG4gIC5jb250X3Byb3llY3RvX2VqZWN0IC5pbmZvX3BlIC5sdWdhciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxNSwgMjE1LCAyMTUsIDAuNjIzNTI5NDExOCk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgLnN3aXBlclBlIC5zd2lwZXItc2xpZGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLmluZm9fZGF0b3NfcGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiA0cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgLmluZm9fZGF0b3NfcGUgYiB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgLmNfc2xpZGVyX3BlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweCAwcHggOTVweCAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMzgwcHg7XG4gIH1cbiAgLmNfc2xpZGVyX3BlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgXG4gIC50YWJzX3Byb3llY3Rvc19lamVjdCB7XG4gICAgbWFyZ2luOiAwIDAgNDBweDtcbiAgfVxuICBcbiAgLyogUkVTUE9OSVNJVkUgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNvbnRfcHJveWVjdG9fZWplY3QgLmluZm9fcGUge1xuICAgICAgcGFkZGluZzogNDBweDtcbiAgICB9XG4gICAgLmNfZnV0dXJvc19wcm95ZWN0b3MgLmluZm9fZnAgaDIge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgICAuY19mdXR1cm9zX3Byb3llY3RvcyAuaW5mb19mcCB7XG4gICAgICBwYWRkaW5nOiAwIDIwcHggMCA4MHB4O1xuICAgICAgZ2FwOiAyMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgICAuY19wcm95ZWN0b192aXZpZW5kYTphZnRlciB7XG4gICAgICBib3R0b206IGluaXRpYWw7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICAgIC5hY3RfZmlsdHJvX21vYmlsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuZmlsdHJvX3Byb3llY3RvcyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdG9wOiA3MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgLmZpbHRyb19wcm95ZWN0b3MgLnByZWNpbyB7XG4gICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gICAgfVxuICAgIC5jb250X2ZpbHRyX2J0bnMge1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgICAuY29udF9wcm95ZWN0b19lamVjdCB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gICAgLmNvbnRfcHJveWVjdG9fZWplY3QgLmluZm9fcGUgaDIge1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cbiAgICAuY29udF9wcm95ZWN0b19lamVjdCAuaW5mb19wZSB7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgfVxuICAgIC5zd2lwZXJQZSAuc3dpcGVyLXNsaWRlIHtcbiAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jb250X3Byb3llY3RvX2VqZWN0IC5pbmZvX3BlIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAzNDBweDtcbiAgICB9XG4gICAgLmNvbnRfcHJveWVjdG9fZWplY3QgLmluZm9fcGUgLmx1Z2FyIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLmNfZnV0dXJvc19wcm95ZWN0b3Mge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xuICAgIH1cbiAgICAuY19mdXR1cm9zX3Byb3llY3RvcyAuaW5mb19mcCB7XG4gICAgICBwYWRkaW5nOiA4MHB4IDIwcHggMjBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDM4MHB4O1xuICAgIH1cbiAgICAuc3dpcGVyRnV0dXJvcyAuc3dpcGVyLWJ1dHRvbi1uZXh0LCAuc3dpcGVyRnV0dXJvcyAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICAgIHRvcDogMTMlO1xuICAgIH1cbiAgICAuY29udF9wcm95ZWN0b19lamVjdDpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAuY19mdXR1cm9zX3Byb3llY3RvcyAuaW5mb19mcCBoNSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5jX2Z1dHVyb3NfcHJveWVjdG9zIC5pbmZvX2ZwIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG4gICAgLmNhcmRfcCAuZGF0b3NfcHJveWVjdG8gaDMge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuY2FyZF9wIC5kYXRvc19wcm95ZWN0byBoNCB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICAgIC5jYXJkX3AgLmRhdG9zX3Byb3llY3RvIHtcbiAgICAgIHBhZGRpbmc6IDMwcHggMjBweCAxMHB4O1xuICAgIH1cbiAgfS8qIyBzb3VyY2VNYXBwaW5nVVJMPXByb3llY3Rvc192aXZpZW5kYS5jc3MubWFwICovXG5cbiAgLyogd2hhdHNhcHAgKi9cblxuICAubGF5ZXJfbmVncm9fd2FfZm9ybXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcbiAgICB6LWluZGV4OiAtMztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG59XG4ubGF5ZXJfbmVncm9fd2FfZm9ybS5hY3RpdmV7XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiAzMDtcbn1cbi5jb250X2dlbl93YV9mb3JtX2ZsdCB7XG4gICAgd2lkdGg6NDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMjVweDtcbiAgICBsZWZ0OiAxNnB4O1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIHotaW5kZXg6IDMxXG59XG5cbi5idG5fd2FfZmx0IHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwQzAzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNSU7XG4gICAgcmlnaHQ6IDIlO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggcmdiKDAgMCAwIC8gMjUlKTtcbiAgICB6LWluZGV4OiAxMDA7XG59XG4uYnRuX3dhX2ZsdCAuZmFiIHtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgbGluZS1oZWlnaHQ6IDY4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAtMTdweDtcbn1cbi5jb250X2dlbl9mb3JtX3dhIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTgwMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9iZ19mb3JtX3dhLnBuZykgY2VudGVyICNFNUU1RTU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwwLDAsLjI1KTtcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gICAgei1pbmRleDogMTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG59XG4uY29udF9nZW5fZm9ybV93YS5hY3RpdmUge1xuICAgIGJvdHRvbTogNzBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuLmNvbnRfZ2VuX2Zvcm1fd2EgaW5wdXR7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udF90b3BfZm9ybV93YSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDBweCAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiY2JjYmM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmltZ19wcl93YV9mb3JtIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmltZ19wcl93YV9mb3JtIGltZ3tcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBtYXgtaGVpZ2h0OiAyNXB4O1xufVxuXG4uY29udF9nZW5fcHJvZl9hX2Zvcm0ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG59XG5cblxuXG4uY29udF9ub21fZXN0X3dhX2Zvcm0ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5ub21iX3dhX2ZsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMyQTJGMzI7XG59XG5cbi5lc3RhZG9fd2FfZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjQTBBMEEwO1xufVxuXG4uaWNfY2VycmFyX3dhX2Zvcm0ge1xuICAgIGNvbG9yOiAjMkEyRjMyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9jZXJyYXJfZm9ybV93YS5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDAlIGF1dG87XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udF9nZW5fc19jaGF0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDE2cHggOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zX2NoYXRfY29udl9ibCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOjExcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCAwO1xufVxuLnNfY2hhdF9jb252X2JsOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICBib3R0b206IDA7XG59XG4uc19jaGF0X2NvbnZfYmwgc3BhbiBpbWd7XG4gICAgd2lkdGg6IDE0cHg7XG59XG5cbi5jb250X3NfY2hhdF9jb252X2JsIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogMjY2cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbnRfc19jaGF0X2NvbnZfdmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogMjY2cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uY29udF9zX2NoYXRfY29udl92ZXIuY250X3RlbHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnNfY2hhdF9jb252X3ZlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNEQ0Y4QzY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOjExcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgNHB4IDRweDtcbn1cbi5zX2NoYXRfY29udl92ZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI0RDRjhDNjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIHRvcDogMDtcbn1cblxuLmNvbnRfZXRxX2NhbXBvX3dhX2Zvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZXRxX3dhX2Zvcm0ge1xuICAgIGZvbnQtc2l6ZToxMXB4O1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYW1wb193YV9mb3JtIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMzMzO2JveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmJ0bl9mb3JtX3dhIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMTBweCAwIDQwcHg7XG4gICAgYmFja2dyb3VuZDogIzBCNjE1NjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG59XG4uYnRuX2Zvcm1fd2E6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwNDQzM2I7XG59XG4uY29udF9zX2NoYXRfY29udl92ZXIgLmZvcm1FcnJvcntcbiAgICBsZWZ0OiAwIWltcG9ydGFudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpe1xuICAgIC5jb250X2dlbl9mb3JtX3dhIHtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5jb250X2dlbl9mb3JtX3dhLmFjdGl2ZXtcbiAgICAgICAgYm90dG9tOiAxMCU7XG4gICAgICAgIGxlZnQ6IDIuNSU7XG4gICAgfVxuICAgIC5idG5fd2FfZmx0e1xuICAgICAgICB3aWR0aDogIDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgYm90dG9tOiA1JTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gICAgfVxuICAgIC5idG5fd2FfZmx0IC5mYWIge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG59XG5cbi5idG5fZm9ybV93YTpkaXNhYmxlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn0iXX0= */"]
});

/***/ }),

/***/ 1001:
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/safe-resource-url.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


class SafePipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(value = "") {
        return this._sanitizer.bypassSecurityTrustResourceUrl(value);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeResourceUrl", type: SafePipe, pure: true, standalone: true });


/***/ }),

/***/ 3889:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/google-maps/fesm2020/google-maps.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap),
/* harmony export */   "GoogleMapsModule": () => (/* binding */ GoogleMapsModule),
/* harmony export */   "MapBaseLayer": () => (/* binding */ MapBaseLayer),
/* harmony export */   "MapBicyclingLayer": () => (/* binding */ MapBicyclingLayer),
/* harmony export */   "MapCircle": () => (/* binding */ MapCircle),
/* harmony export */   "MapDirectionsRenderer": () => (/* binding */ MapDirectionsRenderer),
/* harmony export */   "MapDirectionsService": () => (/* binding */ MapDirectionsService),
/* harmony export */   "MapEventManager": () => (/* binding */ MapEventManager),
/* harmony export */   "MapGeocoder": () => (/* binding */ MapGeocoder),
/* harmony export */   "MapGroundOverlay": () => (/* binding */ MapGroundOverlay),
/* harmony export */   "MapHeatmapLayer": () => (/* binding */ MapHeatmapLayer),
/* harmony export */   "MapInfoWindow": () => (/* binding */ MapInfoWindow),
/* harmony export */   "MapKmlLayer": () => (/* binding */ MapKmlLayer),
/* harmony export */   "MapMarker": () => (/* binding */ MapMarker),
/* harmony export */   "MapMarkerClusterer": () => (/* binding */ MapMarkerClusterer),
/* harmony export */   "MapPolygon": () => (/* binding */ MapPolygon),
/* harmony export */   "MapPolyline": () => (/* binding */ MapPolyline),
/* harmony export */   "MapRectangle": () => (/* binding */ MapRectangle),
/* harmony export */   "MapTrafficLayer": () => (/* binding */ MapTrafficLayer),
/* harmony export */   "MapTransitLayer": () => (/* binding */ MapTransitLayer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8951);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Manages event on a Google Maps object, ensuring that events are added only when necessary. */

const _c0 = ["*"];

class MapEventManager {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
    /** Pending listeners that were added before the target was set. */

    this._pending = [];
    this._listeners = [];
    this._targetStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
  }
  /** Clears all currently-registered event listeners. */


  _clearListeners() {
    for (const listener of this._listeners) {
      listener.remove();
    }

    this._listeners = [];
  }
  /** Gets an observable that adds an event listener to the map when a consumer subscribes to it. */


  getLazyEmitter(name) {
    return this._targetStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(target => {
      const observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
        // If the target hasn't been initialized yet, cache the observer so it can be added later.
        if (!target) {
          this._pending.push({
            observable,
            observer
          });

          return undefined;
        }

        const listener = target.addListener(name, event => {
          this._ngZone.run(() => observer.next(event));
        });

        this._listeners.push(listener);

        return () => listener.remove();
      });
      return observable;
    }));
  }
  /** Sets the current target that the manager should bind events to. */


  setTarget(target) {
    const currentTarget = this._targetStream.value;

    if (target === currentTarget) {
      return;
    } // Clear the listeners from the pre-existing target.


    if (currentTarget) {
      this._clearListeners();

      this._pending = [];
    }

    this._targetStream.next(target); // Add the listeners that were bound before the map was initialized.


    this._pending.forEach(subscriber => subscriber.observable.subscribe(subscriber.observer));

    this._pending = [];
  }
  /** Destroys the manager and clears the event listeners. */


  destroy() {
    this._clearListeners();

    this._pending = [];

    this._targetStream.complete();
  }

} /// <reference types="google.maps" />

/** default options set to the Googleplex */


const DEFAULT_OPTIONS = {
  center: {
    lat: 37.421995,
    lng: -122.084092
  },
  zoom: 17,
  // Note: the type conversion here isn't necessary for our CI, but it resolves a g3 failure.
  mapTypeId: 'roadmap'
};
/** Arbitrary default height for the map element */

const DEFAULT_HEIGHT = '500px';
/** Arbitrary default width for the map element */

const DEFAULT_WIDTH = '500px';
/**
 * Angular component that renders a Google Map via the Google Maps JavaScript
 * API.
 * @see https://developers.google.com/maps/documentation/javascript/reference/
 */

class GoogleMap {
  constructor(_elementRef, _ngZone, platformId) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    /** Height of the map. Set this to `null` if you'd like to control the height through CSS. */

    this.height = DEFAULT_HEIGHT;
    /** Width of the map. Set this to `null` if you'd like to control the width through CSS. */

    this.width = DEFAULT_WIDTH;
    this._options = DEFAULT_OPTIONS;
    /** Event emitted when the map is initialized. */

    this.mapInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/events#auth-errors
     */

    this.authFailure = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.bounds_changed
     */

    this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.center_changed
     */

    this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.click
     */

    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dblclick
     */

    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.drag
     */

    this.mapDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragend
     */

    this.mapDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragstart
     */

    this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.heading_changed
     */

    this.headingChanged = this._eventManager.getLazyEmitter('heading_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.idle
     */

    this.idle = this._eventManager.getLazyEmitter('idle');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.maptypeid_changed
     */

    this.maptypeidChanged = this._eventManager.getLazyEmitter('maptypeid_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mousemove
     */

    this.mapMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseout
     */

    this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseover
     */

    this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/map#Map.projection_changed
     */

    this.projectionChanged = this._eventManager.getLazyEmitter('projection_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.rightclick
     */

    this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilesloaded
     */

    this.tilesloaded = this._eventManager.getLazyEmitter('tilesloaded');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilt_changed
     */

    this.tiltChanged = this._eventManager.getLazyEmitter('tilt_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.zoom_changed
     */

    this.zoomChanged = this._eventManager.getLazyEmitter('zoom_changed');
    this._isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(platformId);

    if (this._isBrowser) {
      const googleMapsWindow = window;

      if (!googleMapsWindow.google && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Namespace google not found, cannot construct embedded google ' + 'map. Please install the Google Maps JavaScript API: ' + 'https://developers.google.com/maps/documentation/javascript/' + 'tutorial#Loading_the_Maps_API');
      }

      this._existingAuthFailureCallback = googleMapsWindow.gm_authFailure;

      googleMapsWindow.gm_authFailure = () => {
        if (this._existingAuthFailureCallback) {
          this._existingAuthFailureCallback();
        }

        this.authFailure.emit();
      };
    }
  }

  set center(center) {
    this._center = center;
  }

  set zoom(zoom) {
    this._zoom = zoom;
  }

  set options(options) {
    this._options = options || DEFAULT_OPTIONS;
  }

  ngOnChanges(changes) {
    if (changes['height'] || changes['width']) {
      this._setSize();
    }

    const googleMap = this.googleMap;

    if (googleMap) {
      if (changes['options']) {
        googleMap.setOptions(this._combineOptions());
      }

      if (changes['center'] && this._center) {
        googleMap.setCenter(this._center);
      } // Note that the zoom can be zero.


      if (changes['zoom'] && this._zoom != null) {
        googleMap.setZoom(this._zoom);
      }

      if (changes['mapTypeId'] && this.mapTypeId) {
        googleMap.setMapTypeId(this.mapTypeId);
      }
    }
  }

  ngOnInit() {
    // It should be a noop during server-side rendering.
    if (this._isBrowser) {
      this._mapEl = this._elementRef.nativeElement.querySelector('.map-container');

      this._setSize(); // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.


      this._ngZone.runOutsideAngular(() => {
        this.googleMap = new google.maps.Map(this._mapEl, this._combineOptions());
      });

      this._eventManager.setTarget(this.googleMap);

      this.mapInitialized.emit(this.googleMap);
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    if (this._isBrowser) {
      const googleMapsWindow = window;
      googleMapsWindow.gm_authFailure = this._existingAuthFailureCallback;
    }
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds
   */


  fitBounds(bounds, padding) {
    this._assertInitialized();

    this.googleMap.fitBounds(bounds, padding);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panBy
   */


  panBy(x, y) {
    this._assertInitialized();

    this.googleMap.panBy(x, y);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo
   */


  panTo(latLng) {
    this._assertInitialized();

    this.googleMap.panTo(latLng);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
   */


  panToBounds(latLngBounds, padding) {
    this._assertInitialized();

    this.googleMap.panToBounds(latLngBounds, padding);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getBounds
   */


  getBounds() {
    this._assertInitialized();

    return this.googleMap.getBounds() || null;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getCenter
   */


  getCenter() {
    this._assertInitialized();

    return this.googleMap.getCenter();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getClickableIcons
   */


  getClickableIcons() {
    this._assertInitialized();

    return this.googleMap.getClickableIcons();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getHeading
   */


  getHeading() {
    this._assertInitialized();

    return this.googleMap.getHeading();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getMapTypeId
   */


  getMapTypeId() {
    this._assertInitialized();

    return this.googleMap.getMapTypeId();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getProjection
   */


  getProjection() {
    this._assertInitialized();

    return this.googleMap.getProjection() || null;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getStreetView
   */


  getStreetView() {
    this._assertInitialized();

    return this.googleMap.getStreetView();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getTilt
   */


  getTilt() {
    this._assertInitialized();

    return this.googleMap.getTilt();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getZoom
   */


  getZoom() {
    this._assertInitialized();

    return this.googleMap.getZoom();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.controls
   */


  get controls() {
    this._assertInitialized();

    return this.googleMap.controls;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.data
   */


  get data() {
    this._assertInitialized();

    return this.googleMap.data;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mapTypes
   */


  get mapTypes() {
    this._assertInitialized();

    return this.googleMap.mapTypes;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.overlayMapTypes
   */


  get overlayMapTypes() {
    this._assertInitialized();

    return this.googleMap.overlayMapTypes;
  }

  _setSize() {
    if (this._mapEl) {
      const styles = this._mapEl.style;
      styles.height = this.height === null ? '' : coerceCssPixelValue(this.height) || DEFAULT_HEIGHT;
      styles.width = this.width === null ? '' : coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
    }
  }
  /** Combines the center and zoom and the other map options into a single object */


  _combineOptions() {
    const options = this._options || {};
    return { ...options,
      // It's important that we set **some** kind of `center` and `zoom`, otherwise
      // Google Maps will render a blank rectangle which looks broken.
      center: this._center || options.center || DEFAULT_OPTIONS.center,
      zoom: this._zoom ?? options.zoom ?? DEFAULT_OPTIONS.zoom,
      // Passing in an undefined `mapTypeId` seems to break tile loading
      // so make sure that we have some kind of default (see #22082).
      mapTypeId: this.mapTypeId || options.mapTypeId || DEFAULT_OPTIONS.mapTypeId
    };
  }
  /** Asserts that the map has been initialized. */


  _assertInitialized() {
    if (!this.googleMap && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
    }
  }

}

GoogleMap.ɵfac = function GoogleMap_Factory(t) {
  return new (t || GoogleMap)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID));
};

GoogleMap.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: GoogleMap,
  selectors: [["google-map"]],
  inputs: {
    height: "height",
    width: "width",
    mapTypeId: "mapTypeId",
    center: "center",
    zoom: "zoom",
    options: "options"
  },
  outputs: {
    mapInitialized: "mapInitialized",
    authFailure: "authFailure",
    boundsChanged: "boundsChanged",
    centerChanged: "centerChanged",
    mapClick: "mapClick",
    mapDblclick: "mapDblclick",
    mapDrag: "mapDrag",
    mapDragend: "mapDragend",
    mapDragstart: "mapDragstart",
    headingChanged: "headingChanged",
    idle: "idle",
    maptypeidChanged: "maptypeidChanged",
    mapMousemove: "mapMousemove",
    mapMouseout: "mapMouseout",
    mapMouseover: "mapMouseover",
    projectionChanged: "projectionChanged",
    mapRightclick: "mapRightclick",
    tilesloaded: "tilesloaded",
    tiltChanged: "tiltChanged",
    zoomChanged: "zoomChanged"
  },
  exportAs: ["googleMap"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "map-container"]],
  template: function GoogleMap_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](GoogleMap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'google-map',
      exportAs: 'googleMap',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
      template: '<div class="map-container"></div><ng-content></ng-content>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID]
      }]
    }];
  }, {
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    mapTypeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    center: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    zoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    mapInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    authFailure: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    boundsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    centerChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    headingChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    idle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    maptypeidChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    projectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    tilesloaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    tiltChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    zoomChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})();

const cssUnitsPattern = /([A-Za-z%]+)$/;
/** Coerces a value to a CSS pixel value. */

function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }

  return cssUnitsPattern.test(value) ? value : `${value}px`;
} /// <reference types="google.maps" />


class MapBaseLayer {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        this._initializeObject();
      });

      this._assertInitialized();

      this._setMap();
    }
  }

  ngOnDestroy() {
    this._unsetMap();
  }

  _assertInitialized() {
    if (!this._map.googleMap) {
      throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
    }
  }

  _initializeObject() {}

  _setMap() {}

  _unsetMap() {}

}

MapBaseLayer.ɵfac = function MapBaseLayer_Factory(t) {
  return new (t || MapBaseLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapBaseLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapBaseLayer,
  selectors: [["map-base-layer"]],
  exportAs: ["mapBaseLayer"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapBaseLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-base-layer',
      exportAs: 'mapBaseLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, null);
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Bicycling Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#BicyclingLayer
 */


class MapBicyclingLayer extends MapBaseLayer {
  _initializeObject() {
    this.bicyclingLayer = new google.maps.BicyclingLayer();
  }

  _setMap() {
    this._assertLayerInitialized();

    this.bicyclingLayer.setMap(this._map.googleMap);
  }

  _unsetMap() {
    if (this.bicyclingLayer) {
      this.bicyclingLayer.setMap(null);
    }
  }

  _assertLayerInitialized() {
    if (!this.bicyclingLayer) {
      throw Error('Cannot interact with a Google Map Bicycling Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
    }
  }

}

MapBicyclingLayer.ɵfac = /* @__PURE__ */function () {
  let ɵMapBicyclingLayer_BaseFactory;
  return function MapBicyclingLayer_Factory(t) {
    return (ɵMapBicyclingLayer_BaseFactory || (ɵMapBicyclingLayer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MapBicyclingLayer)))(t || MapBicyclingLayer);
  };
}();

MapBicyclingLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapBicyclingLayer,
  selectors: [["map-bicycling-layer"]],
  exportAs: ["mapBicyclingLayer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapBicyclingLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-bicycling-layer',
      exportAs: 'mapBicyclingLayer'
    }]
  }], null, null);
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Circle via the Google Maps JavaScript API.
 * @see developers.google.com/maps/documentation/javascript/reference/polygon#Circle
 */


class MapCircle {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._center = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._radius = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.center_changed
     */

    this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.click
     */

    this.circleClick = this._eventManager.getLazyEmitter('click');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dblclick
     */

    this.circleDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.drag
     */

    this.circleDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragend
     */

    this.circleDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragstart
     */

    this.circleDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousedown
     */

    this.circleMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousemove
     */

    this.circleMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseout
     */

    this.circleMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseover
     */

    this.circleMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseup
     */

    this.circleMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.radius_changed
     */

    this.radiusChanged = this._eventManager.getLazyEmitter('radius_changed');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.rightclick
     */

    this.circleRightclick = this._eventManager.getLazyEmitter('rightclick');
  }

  set options(options) {
    this._options.next(options || {});
  }

  set center(center) {
    this._center.next(center);
  }

  set radius(radius) {
    this._radius.next(radius);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => {
          this.circle = new google.maps.Circle(options);
        });

        this._assertInitialized();

        this.circle.setMap(this._map.googleMap);

        this._eventManager.setTarget(this.circle);
      });

      this._watchForOptionsChanges();

      this._watchForCenterChanges();

      this._watchForRadiusChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroyed.next();

    this._destroyed.complete();

    if (this.circle) {
      this.circle.setMap(null);
    }
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getBounds
   */


  getBounds() {
    this._assertInitialized();

    return this.circle.getBounds();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getCenter
   */


  getCenter() {
    this._assertInitialized();

    return this.circle.getCenter();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getDraggable
   */


  getDraggable() {
    this._assertInitialized();

    return this.circle.getDraggable();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getEditable
   */


  getEditable() {
    this._assertInitialized();

    return this.circle.getEditable();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getRadius
   */


  getRadius() {
    this._assertInitialized();

    return this.circle.getRadius();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getVisible
   */


  getVisible() {
    this._assertInitialized();

    return this.circle.getVisible();
  }

  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._center, this._radius]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, center, radius]) => {
      const combinedOptions = { ...options,
        center: center || options.center,
        radius: radius !== undefined ? radius : options.radius
      };
      return combinedOptions;
    }));
  }

  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();

      this.circle.setOptions(options);
    });
  }

  _watchForCenterChanges() {
    this._center.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(center => {
      if (center) {
        this._assertInitialized();

        this.circle.setCenter(center);
      }
    });
  }

  _watchForRadiusChanges() {
    this._radius.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(radius => {
      if (radius !== undefined) {
        this._assertInitialized();

        this.circle.setRadius(radius);
      }
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.circle) {
        throw Error('Cannot interact with a Google Map Circle before it has been ' + 'initialized. Please wait for the Circle to load before trying to interact with it.');
      }
    }
  }

}

MapCircle.ɵfac = function MapCircle_Factory(t) {
  return new (t || MapCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapCircle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapCircle,
  selectors: [["map-circle"]],
  inputs: {
    options: "options",
    center: "center",
    radius: "radius"
  },
  outputs: {
    centerChanged: "centerChanged",
    circleClick: "circleClick",
    circleDblclick: "circleDblclick",
    circleDrag: "circleDrag",
    circleDragend: "circleDragend",
    circleDragstart: "circleDragstart",
    circleMousedown: "circleMousedown",
    circleMousemove: "circleMousemove",
    circleMouseout: "circleMouseout",
    circleMouseover: "circleMouseover",
    circleMouseup: "circleMouseup",
    radiusChanged: "radiusChanged",
    circleRightclick: "circleRightclick"
  },
  exportAs: ["mapCircle"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapCircle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-circle',
      exportAs: 'mapCircle'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    center: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    centerChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    radiusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Directions Renderer via the Google Maps
 * JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsRenderer
 */


class MapDirectionsRenderer {
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    /**
     * See developers.google.com/maps/documentation/javascript/reference/directions
     * #DirectionsRenderer.directions_changed
     */

    this.directionsChanged = this._eventManager.getLazyEmitter('directions_changed');
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRendererOptions.directions
   */


  set directions(directions) {
    this._directions = directions;
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRendererOptions
   */


  set options(options) {
    this._options = options;
  }

  ngOnInit() {
    if (this._googleMap._isBrowser) {
      // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.
      this._ngZone.runOutsideAngular(() => {
        this.directionsRenderer = new google.maps.DirectionsRenderer(this._combineOptions());
      });

      this._assertInitialized();

      this.directionsRenderer.setMap(this._googleMap.googleMap);

      this._eventManager.setTarget(this.directionsRenderer);
    }
  }

  ngOnChanges(changes) {
    if (this.directionsRenderer) {
      if (changes['options']) {
        this.directionsRenderer.setOptions(this._combineOptions());
      }

      if (changes['directions'] && this._directions !== undefined) {
        this.directionsRenderer.setDirections(this._directions);
      }
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    if (this.directionsRenderer) {
      this.directionsRenderer.setMap(null);
    }
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getDirections
   */


  getDirections() {
    this._assertInitialized();

    return this.directionsRenderer.getDirections();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getPanel
   */


  getPanel() {
    this._assertInitialized();

    return this.directionsRenderer.getPanel();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getRouteIndex
   */


  getRouteIndex() {
    this._assertInitialized();

    return this.directionsRenderer.getRouteIndex();
  }

  _combineOptions() {
    const options = this._options || {};
    return { ...options,
      directions: this._directions || options.directions,
      map: this._googleMap.googleMap
    };
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.directionsRenderer) {
        throw Error('Cannot interact with a Google Map Directions Renderer before it has been ' + 'initialized. Please wait for the Directions Renderer to load before trying ' + 'to interact with it.');
      }
    }
  }

}

MapDirectionsRenderer.ɵfac = function MapDirectionsRenderer_Factory(t) {
  return new (t || MapDirectionsRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapDirectionsRenderer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapDirectionsRenderer,
  selectors: [["map-directions-renderer"]],
  inputs: {
    directions: "directions",
    options: "options"
  },
  outputs: {
    directionsChanged: "directionsChanged"
  },
  exportAs: ["mapDirectionsRenderer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapDirectionsRenderer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-directions-renderer',
      exportAs: 'mapDirectionsRenderer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    directions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    directionsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Ground Overlay via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay
 */


class MapGroundOverlay {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._opacity = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(1);
    this._url = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /** Whether the overlay is clickable */

    this.clickable = false;
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay.click
     */

    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.dblclick
     */

    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
  }
  /** URL of the image that will be shown in the overlay. */


  set url(url) {
    this._url.next(url);
  }
  /** Bounds for the overlay. */


  get bounds() {
    return this._bounds.value;
  }

  set bounds(bounds) {
    this._bounds.next(bounds);
  }
  /** Opacity of the overlay. */


  set opacity(opacity) {
    this._opacity.next(opacity);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      // The ground overlay setup is slightly different from the other Google Maps objects in that
      // we have to recreate the `GroundOverlay` object whenever the bounds change, because
      // Google Maps doesn't provide an API to update the bounds of an existing overlay.
      this._bounds.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(bounds => {
        if (this.groundOverlay) {
          this.groundOverlay.setMap(null);
          this.groundOverlay = undefined;
        } // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.


        if (bounds) {
          this._ngZone.runOutsideAngular(() => {
            this.groundOverlay = new google.maps.GroundOverlay(this._url.getValue(), bounds, {
              clickable: this.clickable,
              opacity: this._opacity.value
            });
          });

          this._assertInitialized();

          this.groundOverlay.setMap(this._map.googleMap);

          this._eventManager.setTarget(this.groundOverlay);
        }
      });

      this._watchForOpacityChanges();

      this._watchForUrlChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroyed.next();

    this._destroyed.complete();

    if (this.groundOverlay) {
      this.groundOverlay.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getBounds
   */


  getBounds() {
    this._assertInitialized();

    return this.groundOverlay.getBounds();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getOpacity
   */


  getOpacity() {
    this._assertInitialized();

    return this.groundOverlay.getOpacity();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getUrl
   */


  getUrl() {
    this._assertInitialized();

    return this.groundOverlay.getUrl();
  }

  _watchForOpacityChanges() {
    this._opacity.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(opacity => {
      if (opacity != null) {
        this._assertInitialized();

        this.groundOverlay.setOpacity(opacity);
      }
    });
  }

  _watchForUrlChanges() {
    this._url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(url => {
      this._assertInitialized();

      const overlay = this.groundOverlay;
      overlay.set('url', url); // Google Maps only redraws the overlay if we re-set the map.

      overlay.setMap(null);
      overlay.setMap(this._map.googleMap);
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.groundOverlay) {
        throw Error('Cannot interact with a Google Map GroundOverlay before it has been initialized. ' + 'Please wait for the GroundOverlay to load before trying to interact with it.');
      }
    }
  }

}

MapGroundOverlay.ɵfac = function MapGroundOverlay_Factory(t) {
  return new (t || MapGroundOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapGroundOverlay.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapGroundOverlay,
  selectors: [["map-ground-overlay"]],
  inputs: {
    url: "url",
    bounds: "bounds",
    clickable: "clickable",
    opacity: "opacity"
  },
  outputs: {
    mapClick: "mapClick",
    mapDblclick: "mapDblclick"
  },
  exportAs: ["mapGroundOverlay"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapGroundOverlay, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-ground-overlay',
      exportAs: 'mapGroundOverlay'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps info window via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/info-window
 */


class MapInfoWindow {
  constructor(_googleMap, _elementRef, _ngZone) {
    this._googleMap = _googleMap;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._position = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.closeclick
     */

    this.closeclick = this._eventManager.getLazyEmitter('closeclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.content_changed
     */

    this.contentChanged = this._eventManager.getLazyEmitter('content_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.domready
     */

    this.domready = this._eventManager.getLazyEmitter('domready');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.position_changed
     */

    this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.zindex_changed
     */

    this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
  }

  set options(options) {
    this._options.next(options || {});
  }

  set position(position) {
    this._position.next(position);
  }

  ngOnInit() {
    if (this._googleMap._isBrowser) {
      const combinedOptionsChanges = this._combineOptions();

      combinedOptionsChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => {
          this.infoWindow = new google.maps.InfoWindow(options);
        });

        this._eventManager.setTarget(this.infoWindow);
      });

      this._watchForOptionsChanges();

      this._watchForPositionChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroy.next();

    this._destroy.complete(); // If no info window has been created on the server, we do not try closing it.
    // On the server, an info window cannot be created and this would cause errors.


    if (this.infoWindow) {
      this.close();
    }
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.close
   */


  close() {
    this._assertInitialized();

    this.infoWindow.close();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getContent
   */


  getContent() {
    this._assertInitialized();

    return this.infoWindow.getContent() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window
   * #InfoWindow.getPosition
   */


  getPosition() {
    this._assertInitialized();

    return this.infoWindow.getPosition() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getZIndex
   */


  getZIndex() {
    this._assertInitialized();

    return this.infoWindow.getZIndex();
  }
  /**
   * Opens the MapInfoWindow using the provided anchor. If the anchor is not set,
   * then the position property of the options input is used instead.
   */


  open(anchor, shouldFocus) {
    this._assertInitialized();

    const anchorObject = anchor ? anchor.getAnchor() : undefined; // Prevent the info window from initializing when trying to reopen on the same anchor.
    // Note that when the window is opened for the first time, the anchor will always be
    // undefined. If that's the case, we have to allow it to open in order to handle the
    // case where the window doesn't have an anchor, but is placed at a particular position.

    if (this.infoWindow.get('anchor') !== anchorObject || !anchorObject) {
      this._elementRef.nativeElement.style.display = ''; // The config is cast to `any`, because the internal typings are out of date.

      this.infoWindow.open({
        map: this._googleMap.googleMap,
        anchor: anchorObject,
        shouldFocus
      });
    }
  }

  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._position]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, position]) => {
      const combinedOptions = { ...options,
        position: position || options.position,
        content: this._elementRef.nativeElement
      };
      return combinedOptions;
    }));
  }

  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroy)).subscribe(options => {
      this._assertInitialized();

      this.infoWindow.setOptions(options);
    });
  }

  _watchForPositionChanges() {
    this._position.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroy)).subscribe(position => {
      if (position) {
        this._assertInitialized();

        this.infoWindow.setPosition(position);
      }
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.infoWindow) {
        throw Error('Cannot interact with a Google Map Info Window before it has been ' + 'initialized. Please wait for the Info Window to load before trying to interact with ' + 'it.');
      }
    }
  }

}

MapInfoWindow.ɵfac = function MapInfoWindow_Factory(t) {
  return new (t || MapInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapInfoWindow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapInfoWindow,
  selectors: [["map-info-window"]],
  hostAttrs: [2, "display", "none"],
  inputs: {
    options: "options",
    position: "position"
  },
  outputs: {
    closeclick: "closeclick",
    contentChanged: "contentChanged",
    domready: "domready",
    positionChanged: "positionChanged",
    zindexChanged: "zindexChanged"
  },
  exportAs: ["mapInfoWindow"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapInfoWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-info-window',
      exportAs: 'mapInfoWindow',
      host: {
        'style': 'display: none'
      }
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    closeclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    contentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    domready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    zindexChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps KML Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer
 */


class MapKmlLayer {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._url = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.click
     */

    this.kmlClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/kml
     * #KmlLayer.defaultviewport_changed
     */

    this.defaultviewportChanged = this._eventManager.getLazyEmitter('defaultviewport_changed');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.status_changed
     */

    this.statusChanged = this._eventManager.getLazyEmitter('status_changed');
  }

  set options(options) {
    this._options.next(options || {});
  }

  set url(url) {
    this._url.next(url);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => this.kmlLayer = new google.maps.KmlLayer(options));

        this._assertInitialized();

        this.kmlLayer.setMap(this._map.googleMap);

        this._eventManager.setTarget(this.kmlLayer);
      });

      this._watchForOptionsChanges();

      this._watchForUrlChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroyed.next();

    this._destroyed.complete();

    if (this.kmlLayer) {
      this.kmlLayer.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getDefaultViewport
   */


  getDefaultViewport() {
    this._assertInitialized();

    return this.kmlLayer.getDefaultViewport();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getMetadata
   */


  getMetadata() {
    this._assertInitialized();

    return this.kmlLayer.getMetadata();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getStatus
   */


  getStatus() {
    this._assertInitialized();

    return this.kmlLayer.getStatus();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getUrl
   */


  getUrl() {
    this._assertInitialized();

    return this.kmlLayer.getUrl();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getZIndex
   */


  getZIndex() {
    this._assertInitialized();

    return this.kmlLayer.getZIndex();
  }

  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._url]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, url]) => {
      const combinedOptions = { ...options,
        url: url || options.url
      };
      return combinedOptions;
    }));
  }

  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      if (this.kmlLayer) {
        this._assertInitialized();

        this.kmlLayer.setOptions(options);
      }
    });
  }

  _watchForUrlChanges() {
    this._url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(url => {
      if (url && this.kmlLayer) {
        this._assertInitialized();

        this.kmlLayer.setUrl(url);
      }
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.kmlLayer) {
        throw Error('Cannot interact with a Google Map KmlLayer before it has been ' + 'initialized. Please wait for the KmlLayer to load before trying to interact with it.');
      }
    }
  }

}

MapKmlLayer.ɵfac = function MapKmlLayer_Factory(t) {
  return new (t || MapKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapKmlLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapKmlLayer,
  selectors: [["map-kml-layer"]],
  inputs: {
    options: "options",
    url: "url"
  },
  outputs: {
    kmlClick: "kmlClick",
    defaultviewportChanged: "defaultviewportChanged",
    statusChanged: "statusChanged"
  },
  exportAs: ["mapKmlLayer"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapKmlLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-kml-layer',
      exportAs: 'mapKmlLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    kmlClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    defaultviewportChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    statusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Default options for the Google Maps marker component. Displays a marker
 * at the Googleplex.
 */


const DEFAULT_MARKER_OPTIONS = {
  position: {
    lat: 37.421995,
    lng: -122.084092
  }
};
/**
 * Angular component that renders a Google Maps marker via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/marker
 */

class MapMarker {
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.animation_changed
     */

    this.animationChanged = this._eventManager.getLazyEmitter('animation_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.click
     */

    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.clickable_changed
     */

    this.clickableChanged = this._eventManager.getLazyEmitter('clickable_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.cursor_changed
     */

    this.cursorChanged = this._eventManager.getLazyEmitter('cursor_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dblclick
     */

    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.drag
     */

    this.mapDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragend
     */

    this.mapDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.draggable_changed
     */

    this.draggableChanged = this._eventManager.getLazyEmitter('draggable_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragstart
     */

    this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.flat_changed
     */

    this.flatChanged = this._eventManager.getLazyEmitter('flat_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.icon_changed
     */

    this.iconChanged = this._eventManager.getLazyEmitter('icon_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mousedown
     */

    this.mapMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseout
     */

    this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseover
     */

    this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseup
     */

    this.mapMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.position_changed
     */

    this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.rightclick
     */

    this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.shape_changed
     */

    this.shapeChanged = this._eventManager.getLazyEmitter('shape_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.title_changed
     */

    this.titleChanged = this._eventManager.getLazyEmitter('title_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.visible_changed
     */

    this.visibleChanged = this._eventManager.getLazyEmitter('visible_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.zindex_changed
     */

    this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
  }
  /**
   * Title of the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.title
   */


  set title(title) {
    this._title = title;
  }
  /**
   * Position of the marker. See:
   * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.position
   */


  set position(position) {
    this._position = position;
  }
  /**
   * Label for the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.label
   */


  set label(label) {
    this._label = label;
  }
  /**
   * Whether the marker is clickable. See:
   * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.clickable
   */


  set clickable(clickable) {
    this._clickable = clickable;
  }
  /**
   * Options used to configure the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
   */


  set options(options) {
    this._options = options;
  }
  /**
   * Icon to be used for the marker.
   * See: https://developers.google.com/maps/documentation/javascript/reference/marker#Icon
   */


  set icon(icon) {
    this._icon = icon;
  }
  /**
   * Whether the marker is visible.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.visible
   */


  set visible(value) {
    this._visible = value;
  }

  ngOnInit() {
    if (this._googleMap._isBrowser) {
      // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.
      this._ngZone.runOutsideAngular(() => {
        this.marker = new google.maps.Marker(this._combineOptions());
      });

      this._assertInitialized();

      this.marker.setMap(this._googleMap.googleMap);

      this._eventManager.setTarget(this.marker);
    }
  }

  ngOnChanges(changes) {
    const {
      marker,
      _title,
      _position,
      _label,
      _clickable,
      _icon,
      _visible
    } = this;

    if (marker) {
      if (changes['options']) {
        marker.setOptions(this._combineOptions());
      }

      if (changes['title'] && _title !== undefined) {
        marker.setTitle(_title);
      }

      if (changes['position'] && _position) {
        marker.setPosition(_position);
      }

      if (changes['label'] && _label !== undefined) {
        marker.setLabel(_label);
      }

      if (changes['clickable'] && _clickable !== undefined) {
        marker.setClickable(_clickable);
      }

      if (changes['icon'] && _icon) {
        marker.setIcon(_icon);
      }

      if (changes['visible'] && _visible !== undefined) {
        marker.setVisible(_visible);
      }
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    if (this.marker) {
      this.marker.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getAnimation
   */


  getAnimation() {
    this._assertInitialized();

    return this.marker.getAnimation() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getClickable
   */


  getClickable() {
    this._assertInitialized();

    return this.marker.getClickable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getCursor
   */


  getCursor() {
    this._assertInitialized();

    return this.marker.getCursor() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getDraggable
   */


  getDraggable() {
    this._assertInitialized();

    return !!this.marker.getDraggable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getIcon
   */


  getIcon() {
    this._assertInitialized();

    return this.marker.getIcon() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getLabel
   */


  getLabel() {
    this._assertInitialized();

    return this.marker.getLabel() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getOpacity
   */


  getOpacity() {
    this._assertInitialized();

    return this.marker.getOpacity() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getPosition
   */


  getPosition() {
    this._assertInitialized();

    return this.marker.getPosition() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getShape
   */


  getShape() {
    this._assertInitialized();

    return this.marker.getShape() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getTitle
   */


  getTitle() {
    this._assertInitialized();

    return this.marker.getTitle() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getVisible
   */


  getVisible() {
    this._assertInitialized();

    return this.marker.getVisible();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getZIndex
   */


  getZIndex() {
    this._assertInitialized();

    return this.marker.getZIndex() || null;
  }
  /** Gets the anchor point that can be used to attach other Google Maps objects. */


  getAnchor() {
    this._assertInitialized();

    return this.marker;
  }
  /** Creates a combined options object using the passed-in options and the individual inputs. */


  _combineOptions() {
    const options = this._options || DEFAULT_MARKER_OPTIONS;
    return { ...options,
      title: this._title || options.title,
      position: this._position || options.position,
      label: this._label || options.label,
      clickable: this._clickable ?? options.clickable,
      map: this._googleMap.googleMap,
      icon: this._icon || options.icon,
      visible: this._visible ?? options.visible
    };
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.marker) {
        throw Error('Cannot interact with a Google Map Marker before it has been ' + 'initialized. Please wait for the Marker to load before trying to interact with it.');
      }
    }
  }

}

MapMarker.ɵfac = function MapMarker_Factory(t) {
  return new (t || MapMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapMarker.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapMarker,
  selectors: [["map-marker"]],
  inputs: {
    title: "title",
    position: "position",
    label: "label",
    clickable: "clickable",
    options: "options",
    icon: "icon",
    visible: "visible"
  },
  outputs: {
    animationChanged: "animationChanged",
    mapClick: "mapClick",
    clickableChanged: "clickableChanged",
    cursorChanged: "cursorChanged",
    mapDblclick: "mapDblclick",
    mapDrag: "mapDrag",
    mapDragend: "mapDragend",
    draggableChanged: "draggableChanged",
    mapDragstart: "mapDragstart",
    flatChanged: "flatChanged",
    iconChanged: "iconChanged",
    mapMousedown: "mapMousedown",
    mapMouseout: "mapMouseout",
    mapMouseover: "mapMouseover",
    mapMouseup: "mapMouseup",
    positionChanged: "positionChanged",
    mapRightclick: "mapRightclick",
    shapeChanged: "shapeChanged",
    titleChanged: "titleChanged",
    visibleChanged: "visibleChanged",
    zindexChanged: "zindexChanged"
  },
  exportAs: ["mapMarker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapMarker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-marker',
      exportAs: 'mapMarker'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    animationChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    clickableChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    cursorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    draggableChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    flatChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    iconChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    shapeChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    titleChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    visibleChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    zindexChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/** Default options for a clusterer. */


const DEFAULT_CLUSTERER_OPTIONS = {};
/**
 * Angular component for implementing a Google Maps Marker Clusterer.
 *
 * See https://developers.google.com/maps/documentation/javascript/marker-clustering
 */

class MapMarkerClusterer {
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._currentMarkers = new Set();
    this._eventManager = new MapEventManager(this._ngZone);
    this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();

    this.ariaLabelFn = () => '';
    /**
     * See
     * googlemaps.github.io/v3-utility-library/modules/
     * _google_markerclustererplus.html#clusteringbegin
     */


    this.clusteringbegin = this._eventManager.getLazyEmitter('clusteringbegin');
    /**
     * See
     * googlemaps.github.io/v3-utility-library/modules/_google_markerclustererplus.html#clusteringend
     */

    this.clusteringend = this._eventManager.getLazyEmitter('clusteringend');
    /** Emits when a cluster has been clicked. */

    this.clusterClick = this._eventManager.getLazyEmitter('click');
    this._canInitialize = this._googleMap._isBrowser;
  }

  set averageCenter(averageCenter) {
    this._averageCenter = averageCenter;
  }

  set batchSizeIE(batchSizeIE) {
    this._batchSizeIE = batchSizeIE;
  }

  set calculator(calculator) {
    this._calculator = calculator;
  }

  set clusterClass(clusterClass) {
    this._clusterClass = clusterClass;
  }

  set enableRetinaIcons(enableRetinaIcons) {
    this._enableRetinaIcons = enableRetinaIcons;
  }

  set gridSize(gridSize) {
    this._gridSize = gridSize;
  }

  set ignoreHidden(ignoreHidden) {
    this._ignoreHidden = ignoreHidden;
  }

  set imageExtension(imageExtension) {
    this._imageExtension = imageExtension;
  }

  set imagePath(imagePath) {
    this._imagePath = imagePath;
  }

  set imageSizes(imageSizes) {
    this._imageSizes = imageSizes;
  }

  set maxZoom(maxZoom) {
    this._maxZoom = maxZoom;
  }

  set minimumClusterSize(minimumClusterSize) {
    this._minimumClusterSize = minimumClusterSize;
  }

  set styles(styles) {
    this._styles = styles;
  }

  set title(title) {
    this._title = title;
  }

  set zIndex(zIndex) {
    this._zIndex = zIndex;
  }

  set zoomOnClick(zoomOnClick) {
    this._zoomOnClick = zoomOnClick;
  }

  set options(options) {
    this._options = options;
  }

  ngOnInit() {
    if (this._canInitialize) {
      if (typeof MarkerClusterer !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('MarkerClusterer class not found, cannot construct a marker cluster. ' + 'Please install the MarkerClustererPlus library: ' + 'https://github.com/googlemaps/js-markerclustererplus');
      } // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.


      this._ngZone.runOutsideAngular(() => {
        this.markerClusterer = new MarkerClusterer(this._googleMap.googleMap, [], this._combineOptions());
      });

      this._assertInitialized();

      this._eventManager.setTarget(this.markerClusterer);
    }
  }

  ngAfterContentInit() {
    if (this._canInitialize) {
      this._watchForMarkerChanges();
    }
  }

  ngOnChanges(changes) {
    const {
      markerClusterer: clusterer,
      ariaLabelFn,
      _averageCenter,
      _batchSizeIE,
      _calculator,
      _styles,
      _clusterClass,
      _enableRetinaIcons,
      _gridSize,
      _ignoreHidden,
      _imageExtension,
      _imagePath,
      _imageSizes,
      _maxZoom,
      _minimumClusterSize,
      _title,
      _zIndex,
      _zoomOnClick
    } = this;

    if (clusterer) {
      if (changes['options']) {
        clusterer.setOptions(this._combineOptions());
      }

      if (changes['ariaLabelFn']) {
        clusterer.ariaLabelFn = ariaLabelFn;
      }

      if (changes['averageCenter'] && _averageCenter !== undefined) {
        clusterer.setAverageCenter(_averageCenter);
      }

      if (changes['batchSizeIE'] && _batchSizeIE !== undefined) {
        clusterer.setBatchSizeIE(_batchSizeIE);
      }

      if (changes['calculator'] && !!_calculator) {
        clusterer.setCalculator(_calculator);
      }

      if (changes['clusterClass'] && _clusterClass !== undefined) {
        clusterer.setClusterClass(_clusterClass);
      }

      if (changes['enableRetinaIcons'] && _enableRetinaIcons !== undefined) {
        clusterer.setEnableRetinaIcons(_enableRetinaIcons);
      }

      if (changes['gridSize'] && _gridSize !== undefined) {
        clusterer.setGridSize(_gridSize);
      }

      if (changes['ignoreHidden'] && _ignoreHidden !== undefined) {
        clusterer.setIgnoreHidden(_ignoreHidden);
      }

      if (changes['imageExtension'] && _imageExtension !== undefined) {
        clusterer.setImageExtension(_imageExtension);
      }

      if (changes['imagePath'] && _imagePath !== undefined) {
        clusterer.setImagePath(_imagePath);
      }

      if (changes['imageSizes'] && _imageSizes) {
        clusterer.setImageSizes(_imageSizes);
      }

      if (changes['maxZoom'] && _maxZoom !== undefined) {
        clusterer.setMaxZoom(_maxZoom);
      }

      if (changes['minimumClusterSize'] && _minimumClusterSize !== undefined) {
        clusterer.setMinimumClusterSize(_minimumClusterSize);
      }

      if (changes['styles'] && _styles) {
        clusterer.setStyles(_styles);
      }

      if (changes['title'] && _title !== undefined) {
        clusterer.setTitle(_title);
      }

      if (changes['zIndex'] && _zIndex !== undefined) {
        clusterer.setZIndex(_zIndex);
      }

      if (changes['zoomOnClick'] && _zoomOnClick !== undefined) {
        clusterer.setZoomOnClick(_zoomOnClick);
      }
    }
  }

  ngOnDestroy() {
    this._destroy.next();

    this._destroy.complete();

    this._eventManager.destroy();

    if (this.markerClusterer) {
      this.markerClusterer.setMap(null);
    }
  }

  fitMapToMarkers(padding) {
    this._assertInitialized();

    this.markerClusterer.fitMapToMarkers(padding);
  }

  getAverageCenter() {
    this._assertInitialized();

    return this.markerClusterer.getAverageCenter();
  }

  getBatchSizeIE() {
    this._assertInitialized();

    return this.markerClusterer.getBatchSizeIE();
  }

  getCalculator() {
    this._assertInitialized();

    return this.markerClusterer.getCalculator();
  }

  getClusterClass() {
    this._assertInitialized();

    return this.markerClusterer.getClusterClass();
  }

  getClusters() {
    this._assertInitialized();

    return this.markerClusterer.getClusters();
  }

  getEnableRetinaIcons() {
    this._assertInitialized();

    return this.markerClusterer.getEnableRetinaIcons();
  }

  getGridSize() {
    this._assertInitialized();

    return this.markerClusterer.getGridSize();
  }

  getIgnoreHidden() {
    this._assertInitialized();

    return this.markerClusterer.getIgnoreHidden();
  }

  getImageExtension() {
    this._assertInitialized();

    return this.markerClusterer.getImageExtension();
  }

  getImagePath() {
    this._assertInitialized();

    return this.markerClusterer.getImagePath();
  }

  getImageSizes() {
    this._assertInitialized();

    return this.markerClusterer.getImageSizes();
  }

  getMaxZoom() {
    this._assertInitialized();

    return this.markerClusterer.getMaxZoom();
  }

  getMinimumClusterSize() {
    this._assertInitialized();

    return this.markerClusterer.getMinimumClusterSize();
  }

  getStyles() {
    this._assertInitialized();

    return this.markerClusterer.getStyles();
  }

  getTitle() {
    this._assertInitialized();

    return this.markerClusterer.getTitle();
  }

  getTotalClusters() {
    this._assertInitialized();

    return this.markerClusterer.getTotalClusters();
  }

  getTotalMarkers() {
    this._assertInitialized();

    return this.markerClusterer.getTotalMarkers();
  }

  getZIndex() {
    this._assertInitialized();

    return this.markerClusterer.getZIndex();
  }

  getZoomOnClick() {
    this._assertInitialized();

    return this.markerClusterer.getZoomOnClick();
  }

  _combineOptions() {
    const options = this._options || DEFAULT_CLUSTERER_OPTIONS;
    return { ...options,
      ariaLabelFn: this.ariaLabelFn ?? options.ariaLabelFn,
      averageCenter: this._averageCenter ?? options.averageCenter,
      batchSize: this.batchSize ?? options.batchSize,
      batchSizeIE: this._batchSizeIE ?? options.batchSizeIE,
      calculator: this._calculator ?? options.calculator,
      clusterClass: this._clusterClass ?? options.clusterClass,
      enableRetinaIcons: this._enableRetinaIcons ?? options.enableRetinaIcons,
      gridSize: this._gridSize ?? options.gridSize,
      ignoreHidden: this._ignoreHidden ?? options.ignoreHidden,
      imageExtension: this._imageExtension ?? options.imageExtension,
      imagePath: this._imagePath ?? options.imagePath,
      imageSizes: this._imageSizes ?? options.imageSizes,
      maxZoom: this._maxZoom ?? options.maxZoom,
      minimumClusterSize: this._minimumClusterSize ?? options.minimumClusterSize,
      styles: this._styles ?? options.styles,
      title: this._title ?? options.title,
      zIndex: this._zIndex ?? options.zIndex,
      zoomOnClick: this._zoomOnClick ?? options.zoomOnClick
    };
  }

  _watchForMarkerChanges() {
    this._assertInitialized();

    const initialMarkers = [];

    for (const marker of this._getInternalMarkers(this._markers.toArray())) {
      this._currentMarkers.add(marker);

      initialMarkers.push(marker);
    }

    this.markerClusterer.addMarkers(initialMarkers);

    this._markers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroy)).subscribe(markerComponents => {
      this._assertInitialized();

      const newMarkers = new Set(this._getInternalMarkers(markerComponents));
      const markersToAdd = [];
      const markersToRemove = [];

      for (const marker of Array.from(newMarkers)) {
        if (!this._currentMarkers.has(marker)) {
          this._currentMarkers.add(marker);

          markersToAdd.push(marker);
        }
      }

      for (const marker of Array.from(this._currentMarkers)) {
        if (!newMarkers.has(marker)) {
          markersToRemove.push(marker);
        }
      }

      this.markerClusterer.addMarkers(markersToAdd, true);
      this.markerClusterer.removeMarkers(markersToRemove, true);
      this.markerClusterer.repaint();

      for (const marker of markersToRemove) {
        this._currentMarkers.delete(marker);
      }
    });
  }

  _getInternalMarkers(markers) {
    return markers.filter(markerComponent => !!markerComponent.marker).map(markerComponent => markerComponent.marker);
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.markerClusterer) {
        throw Error('Cannot interact with a MarkerClusterer before it has been initialized. ' + 'Please wait for the MarkerClusterer to load before trying to interact with it.');
      }
    }
  }

}

MapMarkerClusterer.ɵfac = function MapMarkerClusterer_Factory(t) {
  return new (t || MapMarkerClusterer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapMarkerClusterer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MapMarkerClusterer,
  selectors: [["map-marker-clusterer"]],
  contentQueries: function MapMarkerClusterer_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MapMarker, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._markers = _t);
    }
  },
  inputs: {
    ariaLabelFn: "ariaLabelFn",
    averageCenter: "averageCenter",
    batchSize: "batchSize",
    batchSizeIE: "batchSizeIE",
    calculator: "calculator",
    clusterClass: "clusterClass",
    enableRetinaIcons: "enableRetinaIcons",
    gridSize: "gridSize",
    ignoreHidden: "ignoreHidden",
    imageExtension: "imageExtension",
    imagePath: "imagePath",
    imageSizes: "imageSizes",
    maxZoom: "maxZoom",
    minimumClusterSize: "minimumClusterSize",
    styles: "styles",
    title: "title",
    zIndex: "zIndex",
    zoomOnClick: "zoomOnClick",
    options: "options"
  },
  outputs: {
    clusteringbegin: "clusteringbegin",
    clusteringend: "clusteringend",
    clusterClick: "clusterClick"
  },
  exportAs: ["mapMarkerClusterer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MapMarkerClusterer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapMarkerClusterer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'map-marker-clusterer',
      exportAs: 'mapMarkerClusterer',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    ariaLabelFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    averageCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    batchSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    batchSizeIE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    calculator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    clusterClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    enableRetinaIcons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    gridSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    ignoreHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    imageExtension: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    imagePath: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    imageSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    minimumClusterSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    zoomOnClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    clusteringbegin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    clusteringend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    clusterClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    _markers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
      args: [MapMarker, {
        descendants: true
      }]
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Polygon via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon
 */


class MapPolygon {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._paths = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.click
     */

    this.polygonClick = this._eventManager.getLazyEmitter('click');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dblclick
     */

    this.polygonDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.drag
     */

    this.polygonDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragend
     */

    this.polygonDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragstart
     */

    this.polygonDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousedown
     */

    this.polygonMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousemove
     */

    this.polygonMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseout
     */

    this.polygonMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseover
     */

    this.polygonMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseup
     */

    this.polygonMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.rightclick
     */

    this.polygonRightclick = this._eventManager.getLazyEmitter('rightclick');
  }

  set options(options) {
    this._options.next(options || {});
  }

  set paths(paths) {
    this._paths.next(paths);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => {
          this.polygon = new google.maps.Polygon(options);
        });

        this._assertInitialized();

        this.polygon.setMap(this._map.googleMap);

        this._eventManager.setTarget(this.polygon);
      });

      this._watchForOptionsChanges();

      this._watchForPathChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroyed.next();

    this._destroyed.complete();

    if (this.polygon) {
      this.polygon.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getDraggable
   */


  getDraggable() {
    this._assertInitialized();

    return this.polygon.getDraggable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getEditable
   */


  getEditable() {
    this._assertInitialized();

    return this.polygon.getEditable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPath
   */


  getPath() {
    this._assertInitialized();

    return this.polygon.getPath();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPaths
   */


  getPaths() {
    this._assertInitialized();

    return this.polygon.getPaths();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getVisible
   */


  getVisible() {
    this._assertInitialized();

    return this.polygon.getVisible();
  }

  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._paths]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, paths]) => {
      const combinedOptions = { ...options,
        paths: paths || options.paths
      };
      return combinedOptions;
    }));
  }

  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();

      this.polygon.setOptions(options);
    });
  }

  _watchForPathChanges() {
    this._paths.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(paths => {
      if (paths) {
        this._assertInitialized();

        this.polygon.setPaths(paths);
      }
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.polygon) {
        throw Error('Cannot interact with a Google Map Polygon before it has been ' + 'initialized. Please wait for the Polygon to load before trying to interact with it.');
      }
    }
  }

}

MapPolygon.ɵfac = function MapPolygon_Factory(t) {
  return new (t || MapPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapPolygon.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapPolygon,
  selectors: [["map-polygon"]],
  inputs: {
    options: "options",
    paths: "paths"
  },
  outputs: {
    polygonClick: "polygonClick",
    polygonDblclick: "polygonDblclick",
    polygonDrag: "polygonDrag",
    polygonDragend: "polygonDragend",
    polygonDragstart: "polygonDragstart",
    polygonMousedown: "polygonMousedown",
    polygonMousemove: "polygonMousemove",
    polygonMouseout: "polygonMouseout",
    polygonMouseover: "polygonMouseover",
    polygonMouseup: "polygonMouseup",
    polygonRightclick: "polygonRightclick"
  },
  exportAs: ["mapPolygon"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapPolygon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-polygon',
      exportAs: 'mapPolygon'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    paths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    polygonClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Polyline via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline
 */


class MapPolyline {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._path = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.click
     */

    this.polylineClick = this._eventManager.getLazyEmitter('click');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dblclick
     */

    this.polylineDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.drag
     */

    this.polylineDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragend
     */

    this.polylineDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragstart
     */

    this.polylineDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousedown
     */

    this.polylineMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousemove
     */

    this.polylineMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseout
     */

    this.polylineMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseover
     */

    this.polylineMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseup
     */

    this.polylineMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.rightclick
     */

    this.polylineRightclick = this._eventManager.getLazyEmitter('rightclick');
  }

  set options(options) {
    this._options.next(options || {});
  }

  set path(path) {
    this._path.next(path);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => this.polyline = new google.maps.Polyline(options));

        this._assertInitialized();

        this.polyline.setMap(this._map.googleMap);

        this._eventManager.setTarget(this.polyline);
      });

      this._watchForOptionsChanges();

      this._watchForPathChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroyed.next();

    this._destroyed.complete();

    if (this.polyline) {
      this.polyline.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getDraggable
   */


  getDraggable() {
    this._assertInitialized();

    return this.polyline.getDraggable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getEditable
   */


  getEditable() {
    this._assertInitialized();

    return this.polyline.getEditable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getPath
   */


  getPath() {
    this._assertInitialized();

    return this.polyline.getPath();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getVisible
   */


  getVisible() {
    this._assertInitialized();

    return this.polyline.getVisible();
  }

  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._path]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, path]) => {
      const combinedOptions = { ...options,
        path: path || options.path
      };
      return combinedOptions;
    }));
  }

  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();

      this.polyline.setOptions(options);
    });
  }

  _watchForPathChanges() {
    this._path.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(path => {
      if (path) {
        this._assertInitialized();

        this.polyline.setPath(path);
      }
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.polyline) {
        throw Error('Cannot interact with a Google Map Polyline before it has been ' + 'initialized. Please wait for the Polyline to load before trying to interact with it.');
      }
    }
  }

}

MapPolyline.ɵfac = function MapPolyline_Factory(t) {
  return new (t || MapPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapPolyline.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapPolyline,
  selectors: [["map-polyline"]],
  inputs: {
    options: "options",
    path: "path"
  },
  outputs: {
    polylineClick: "polylineClick",
    polylineDblclick: "polylineDblclick",
    polylineDrag: "polylineDrag",
    polylineDragend: "polylineDragend",
    polylineDragstart: "polylineDragstart",
    polylineMousedown: "polylineMousedown",
    polylineMousemove: "polylineMousemove",
    polylineMouseout: "polylineMouseout",
    polylineMouseover: "polylineMouseover",
    polylineMouseup: "polylineMouseup",
    polylineRightclick: "polylineRightclick"
  },
  exportAs: ["mapPolyline"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapPolyline, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-polyline',
      exportAs: 'mapPolyline'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    path: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    polylineClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Rectangle via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle
 */


class MapRectangle {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.boundsChanged
     */

    this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.click
     */

    this.rectangleClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dblclick
     */

    this.rectangleDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.drag
     */

    this.rectangleDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragend
     */

    this.rectangleDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragstart
     */

    this.rectangleDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousedown
     */

    this.rectangleMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousemove
     */

    this.rectangleMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseout
     */

    this.rectangleMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseover
     */

    this.rectangleMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseup
     */

    this.rectangleMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.rightclick
     */

    this.rectangleRightclick = this._eventManager.getLazyEmitter('rightclick');
  }

  set options(options) {
    this._options.next(options || {});
  }

  set bounds(bounds) {
    this._bounds.next(bounds);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => {
          this.rectangle = new google.maps.Rectangle(options);
        });

        this._assertInitialized();

        this.rectangle.setMap(this._map.googleMap);

        this._eventManager.setTarget(this.rectangle);
      });

      this._watchForOptionsChanges();

      this._watchForBoundsChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroyed.next();

    this._destroyed.complete();

    if (this.rectangle) {
      this.rectangle.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getBounds
   */


  getBounds() {
    this._assertInitialized();

    return this.rectangle.getBounds();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getDraggable
   */


  getDraggable() {
    this._assertInitialized();

    return this.rectangle.getDraggable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getEditable
   */


  getEditable() {
    this._assertInitialized();

    return this.rectangle.getEditable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getVisible
   */


  getVisible() {
    this._assertInitialized();

    return this.rectangle.getVisible();
  }

  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._bounds]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, bounds]) => {
      const combinedOptions = { ...options,
        bounds: bounds || options.bounds
      };
      return combinedOptions;
    }));
  }

  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();

      this.rectangle.setOptions(options);
    });
  }

  _watchForBoundsChanges() {
    this._bounds.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(bounds => {
      if (bounds) {
        this._assertInitialized();

        this.rectangle.setBounds(bounds);
      }
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.rectangle) {
        throw Error('Cannot interact with a Google Map Rectangle before it has been initialized. ' + 'Please wait for the Rectangle to load before trying to interact with it.');
      }
    }
  }

}

MapRectangle.ɵfac = function MapRectangle_Factory(t) {
  return new (t || MapRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapRectangle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapRectangle,
  selectors: [["map-rectangle"]],
  inputs: {
    options: "options",
    bounds: "bounds"
  },
  outputs: {
    boundsChanged: "boundsChanged",
    rectangleClick: "rectangleClick",
    rectangleDblclick: "rectangleDblclick",
    rectangleDrag: "rectangleDrag",
    rectangleDragend: "rectangleDragend",
    rectangleDragstart: "rectangleDragstart",
    rectangleMousedown: "rectangleMousedown",
    rectangleMousemove: "rectangleMousemove",
    rectangleMouseout: "rectangleMouseout",
    rectangleMouseover: "rectangleMouseover",
    rectangleMouseup: "rectangleMouseup",
    rectangleRightclick: "rectangleRightclick"
  },
  exportAs: ["mapRectangle"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapRectangle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-rectangle',
      exportAs: 'mapRectangle'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    boundsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Traffic Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TrafficLayer
 */


class MapTrafficLayer {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._autoRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  /**
   * Whether the traffic layer refreshes with updated information automatically.
   */


  set autoRefresh(autoRefresh) {
    this._autoRefresh.next(autoRefresh);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        this._ngZone.runOutsideAngular(() => {
          this.trafficLayer = new google.maps.TrafficLayer(options);
        });

        this._assertInitialized();

        this.trafficLayer.setMap(this._map.googleMap);
      });

      this._watchForAutoRefreshChanges();
    }
  }

  ngOnDestroy() {
    this._destroyed.next();

    this._destroyed.complete();

    if (this.trafficLayer) {
      this.trafficLayer.setMap(null);
    }
  }

  _combineOptions() {
    return this._autoRefresh.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(autoRefresh => {
      const combinedOptions = {
        autoRefresh
      };
      return combinedOptions;
    }));
  }

  _watchForAutoRefreshChanges() {
    this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();

      this.trafficLayer.setOptions(options);
    });
  }

  _assertInitialized() {
    if (!this._map.googleMap) {
      throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
    }

    if (!this.trafficLayer) {
      throw Error('Cannot interact with a Google Map Traffic Layer before it has been initialized. ' + 'Please wait for the Traffic Layer to load before trying to interact with it.');
    }
  }

}

MapTrafficLayer.ɵfac = function MapTrafficLayer_Factory(t) {
  return new (t || MapTrafficLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapTrafficLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapTrafficLayer,
  selectors: [["map-traffic-layer"]],
  inputs: {
    autoRefresh: "autoRefresh"
  },
  exportAs: ["mapTrafficLayer"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapTrafficLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-traffic-layer',
      exportAs: 'mapTrafficLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    autoRefresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Transit Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TransitLayer
 */


class MapTransitLayer extends MapBaseLayer {
  _initializeObject() {
    this.transitLayer = new google.maps.TransitLayer();
  }

  _setMap() {
    this._assertLayerInitialized();

    this.transitLayer.setMap(this._map.googleMap);
  }

  _unsetMap() {
    if (this.transitLayer) {
      this.transitLayer.setMap(null);
    }
  }

  _assertLayerInitialized() {
    if (!this.transitLayer) {
      throw Error('Cannot interact with a Google Map Transit Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
    }
  }

}

MapTransitLayer.ɵfac = /* @__PURE__ */function () {
  let ɵMapTransitLayer_BaseFactory;
  return function MapTransitLayer_Factory(t) {
    return (ɵMapTransitLayer_BaseFactory || (ɵMapTransitLayer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MapTransitLayer)))(t || MapTransitLayer);
  };
}();

MapTransitLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapTransitLayer,
  selectors: [["map-transit-layer"]],
  exportAs: ["mapTransitLayer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapTransitLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-transit-layer',
      exportAs: 'mapTransitLayer'
    }]
  }], null, null);
})(); /// <reference types="google.maps" />

/**
 * Angular directive that renders a Google Maps heatmap via the Google Maps JavaScript API.
 *
 * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
 */


class MapHeatmapLayer {
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
  }
  /**
   * Data shown on the heatmap.
   * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
   */


  set data(data) {
    this._data = data;
  }
  /**
   * Options used to configure the heatmap. See:
   * developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions
   */


  set options(options) {
    this._options = options;
  }

  ngOnInit() {
    if (this._googleMap._isBrowser) {
      if (!window.google?.maps?.visualization && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Namespace `google.maps.visualization` not found, cannot construct heatmap. ' + 'Please install the Google Maps JavaScript API with the "visualization" library: ' + 'https://developers.google.com/maps/documentation/javascript/visualization');
      } // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.


      this._ngZone.runOutsideAngular(() => {
        this.heatmap = new google.maps.visualization.HeatmapLayer(this._combineOptions());
      });

      this._assertInitialized();

      this.heatmap.setMap(this._googleMap.googleMap);
    }
  }

  ngOnChanges(changes) {
    const {
      _data,
      heatmap
    } = this;

    if (heatmap) {
      if (changes['options']) {
        heatmap.setOptions(this._combineOptions());
      }

      if (changes['data'] && _data !== undefined) {
        heatmap.setData(this._normalizeData(_data));
      }
    }
  }

  ngOnDestroy() {
    if (this.heatmap) {
      this.heatmap.setMap(null);
    }
  }
  /**
   * Gets the data that is currently shown on the heatmap.
   * See: developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer
   */


  getData() {
    this._assertInitialized();

    return this.heatmap.getData();
  }
  /** Creates a combined options object using the passed-in options and the individual inputs. */


  _combineOptions() {
    const options = this._options || {};
    return { ...options,
      data: this._normalizeData(this._data || options.data || []),
      map: this._googleMap.googleMap
    };
  }
  /**
   * Most Google Maps APIs support both `LatLng` objects and `LatLngLiteral`. The latter is more
   * convenient to write out, because the Google Maps API doesn't have to have been loaded in order
   * to construct them. The `HeatmapLayer` appears to be an exception that only allows a `LatLng`
   * object, or it throws a runtime error. Since it's more convenient and we expect that Angular
   * users will load the API asynchronously, we allow them to pass in a `LatLngLiteral` and we
   * convert it to a `LatLng` object before passing it off to Google Maps.
   */


  _normalizeData(data) {
    const result = [];
    data.forEach(item => {
      result.push(isLatLngLiteral(item) ? new google.maps.LatLng(item.lat, item.lng) : item);
    });
    return result;
  }
  /** Asserts that the heatmap object has been initialized. */


  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.heatmap) {
        throw Error('Cannot interact with a Google Map HeatmapLayer before it has been ' + 'initialized. Please wait for the heatmap to load before trying to interact with it.');
      }
    }
  }

}

MapHeatmapLayer.ɵfac = function MapHeatmapLayer_Factory(t) {
  return new (t || MapHeatmapLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapHeatmapLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapHeatmapLayer,
  selectors: [["map-heatmap-layer"]],
  inputs: {
    data: "data",
    options: "options"
  },
  exportAs: ["mapHeatmapLayer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapHeatmapLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-heatmap-layer',
      exportAs: 'mapHeatmapLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
/** Asserts that an object is a `LatLngLiteral`. */


function isLatLngLiteral(value) {
  return value && typeof value.lat === 'number' && typeof value.lng === 'number';
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const COMPONENTS = [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer];

class GoogleMapsModule {}

GoogleMapsModule.ɵfac = function GoogleMapsModule_Factory(t) {
  return new (t || GoogleMapsModule)();
};

GoogleMapsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: GoogleMapsModule
});
GoogleMapsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](GoogleMapsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      declarations: COMPONENTS,
      exports: COMPONENTS
    }]
  }], null, null);
})(); /// <reference types="google.maps" />

/**
 * Angular service that wraps the Google Maps DirectionsService from the Google Maps JavaScript
 * API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsService
 */


class MapDirectionsService {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsService.route
   */


  route(request) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      // Initialize the `DirectionsService` lazily since the Google Maps API may
      // not have been loaded when the provider is instantiated.
      if (!this._directionsService) {
        this._directionsService = new google.maps.DirectionsService();
      }

      this._directionsService.route(request, (result, status) => {
        this._ngZone.run(() => {
          observer.next({
            result: result || undefined,
            status
          });
          observer.complete();
        });
      });
    });
  }

}

MapDirectionsService.ɵfac = function MapDirectionsService_Factory(t) {
  return new (t || MapDirectionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapDirectionsService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: MapDirectionsService,
  factory: MapDirectionsService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapDirectionsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, null);
})(); /// <reference types="google.maps" />

/**
 * Angular service that wraps the Google Maps Geocoder from the Google Maps JavaScript API.
 * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder
 */


class MapGeocoder {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder.geocode
   */


  geocode(request) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      // Initialize the `Geocoder` lazily since the Google Maps API may
      // not have been loaded when the provider is instantiated.
      if (!this._geocoder) {
        this._geocoder = new google.maps.Geocoder();
      }

      this._geocoder.geocode(request, (results, status) => {
        this._ngZone.run(() => {
          observer.next({
            results: results || [],
            status
          });
          observer.complete();
        });
      });
    });
  }

}

MapGeocoder.ɵfac = function MapGeocoder_Factory(t) {
  return new (t || MapGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapGeocoder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: MapGeocoder,
  factory: MapGeocoder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapGeocoder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9191:
/*!*************************************************************!*\
  !*** ./node_modules/ng-recaptcha/fesm2020/ng-recaptcha.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RECAPTCHA_BASE_URL": () => (/* binding */ RECAPTCHA_BASE_URL),
/* harmony export */   "RECAPTCHA_LANGUAGE": () => (/* binding */ RECAPTCHA_LANGUAGE),
/* harmony export */   "RECAPTCHA_NONCE": () => (/* binding */ RECAPTCHA_NONCE),
/* harmony export */   "RECAPTCHA_SETTINGS": () => (/* binding */ RECAPTCHA_SETTINGS),
/* harmony export */   "RECAPTCHA_V3_SITE_KEY": () => (/* binding */ RECAPTCHA_V3_SITE_KEY),
/* harmony export */   "ReCaptchaV3Service": () => (/* binding */ ReCaptchaV3Service),
/* harmony export */   "RecaptchaComponent": () => (/* binding */ RecaptchaComponent),
/* harmony export */   "RecaptchaFormsModule": () => (/* binding */ RecaptchaFormsModule),
/* harmony export */   "RecaptchaLoaderService": () => (/* binding */ RecaptchaLoaderService),
/* harmony export */   "RecaptchaModule": () => (/* binding */ RecaptchaModule),
/* harmony export */   "RecaptchaV3Module": () => (/* binding */ RecaptchaV3Module),
/* harmony export */   "RecaptchaValueAccessorDirective": () => (/* binding */ RecaptchaValueAccessorDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8418);





const RECAPTCHA_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-language");
const RECAPTCHA_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-base-url");
const RECAPTCHA_NONCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-nonce-tag");
const RECAPTCHA_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-settings");
const RECAPTCHA_V3_SITE_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-v3-site-key");

function loadScript(renderMode, onLoaded, urlParams, url, nonce) {
  window.ng2recaptchaloaded = () => {
    onLoaded(grecaptcha);
  };

  const script = document.createElement("script");
  script.innerHTML = "";
  const baseUrl = url || "https://www.google.com/recaptcha/api.js";
  script.src = `${baseUrl}?render=${renderMode}&onload=ng2recaptchaloaded${urlParams}`;

  if (nonce) {
    script.nonce = nonce;
  }

  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

const loader = {
  loadScript
};

class RecaptchaLoaderService {
  constructor( // eslint-disable-next-line @typescript-eslint/ban-types
  platformId, language, baseUrl, nonce, v3SiteKey) {
    this.platformId = platformId;
    this.language = language;
    this.baseUrl = baseUrl;
    this.nonce = nonce;
    this.v3SiteKey = v3SiteKey;
    this.init();
    this.ready = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) ? RecaptchaLoaderService.ready.asObservable() : (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)();
  }
  /** @internal */


  init() {
    if (RecaptchaLoaderService.ready) {
      return;
    }

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
      RecaptchaLoaderService.ready = subject;
      const langParam = this.language ? "&hl=" + this.language : "";
      const renderMode = this.v3SiteKey || "explicit";
      loader.loadScript(renderMode, grecaptcha => subject.next(grecaptcha), langParam, this.baseUrl, this.nonce);
    }
  }

}
/**
 * @internal
 * @nocollapse
 */


RecaptchaLoaderService.ready = null;

RecaptchaLoaderService.ɵfac = function RecaptchaLoaderService_Factory(t) {
  return new (t || RecaptchaLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_LANGUAGE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_V3_SITE_KEY, 8));
};

RecaptchaLoaderService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: RecaptchaLoaderService,
  factory: RecaptchaLoaderService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaLoaderService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_LANGUAGE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_BASE_URL]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_NONCE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_V3_SITE_KEY]
      }]
    }];
  }, null);
})();

let nextId = 0;

class RecaptchaComponent {
  constructor(elementRef, loader, zone, settings) {
    this.elementRef = elementRef;
    this.loader = loader;
    this.zone = zone;
    this.id = `ngrecaptcha-${nextId++}`;
    this.errorMode = "default";
    this.resolved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // The rename will happen a bit later
    // eslint-disable-next-line @angular-eslint/no-output-native

    this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    if (settings) {
      this.siteKey = settings.siteKey;
      this.theme = settings.theme;
      this.type = settings.type;
      this.size = settings.size;
      this.badge = settings.badge;
    }
  }

  ngAfterViewInit() {
    this.subscription = this.loader.ready.subscribe(grecaptcha => {
      if (grecaptcha != null && grecaptcha.render instanceof Function) {
        this.grecaptcha = grecaptcha;
        this.renderRecaptcha();
      }
    });
  }

  ngOnDestroy() {
    // reset the captcha to ensure it does not leave anything behind
    // after the component is no longer needed
    this.grecaptchaReset();

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  /**
   * Executes the invisible recaptcha.
   * Does nothing if component's size is not set to "invisible".
   */


  execute() {
    if (this.size !== "invisible") {
      return;
    }

    if (this.widget != null) {
      this.grecaptcha.execute(this.widget);
    } else {
      // delay execution of recaptcha until it actually renders
      this.executeRequested = true;
    }
  }

  reset() {
    if (this.widget != null) {
      if (this.grecaptcha.getResponse(this.widget)) {
        // Only emit an event in case if something would actually change.
        // That way we do not trigger "touching" of the control if someone does a "reset"
        // on a non-resolved captcha.
        this.resolved.emit(null);
      }

      this.grecaptchaReset();
    }
  }
  /**
   * ⚠️ Warning! Use this property at your own risk!
   *
   * While this member is `public`, it is not a part of the component's public API.
   * The semantic versioning guarantees _will not be honored_! Thus, you might find that this property behavior changes in incompatible ways in minor or even patch releases.
   * You are **strongly advised** against using this property.
   * Instead, use more idiomatic ways to get reCAPTCHA value, such as `resolved` EventEmitter, or form-bound methods (ngModel, formControl, and the likes).å
   */


  get __unsafe_widgetValue() {
    return this.widget != null ? this.grecaptcha.getResponse(this.widget) : null;
  }
  /** @internal */


  expired() {
    this.resolved.emit(null);
  }
  /** @internal */


  errored(args) {
    this.error.emit(args);
  }
  /** @internal */


  captchaResponseCallback(response) {
    this.resolved.emit(response);
  }
  /** @internal */


  grecaptchaReset() {
    if (this.widget != null) {
      this.zone.runOutsideAngular(() => this.grecaptcha.reset(this.widget));
    }
  }
  /** @internal */


  renderRecaptcha() {
    // This `any` can be removed after @types/grecaptcha get updated
    const renderOptions = {
      badge: this.badge,
      callback: response => {
        this.zone.run(() => this.captchaResponseCallback(response));
      },
      "expired-callback": () => {
        this.zone.run(() => this.expired());
      },
      sitekey: this.siteKey,
      size: this.size,
      tabindex: this.tabIndex,
      theme: this.theme,
      type: this.type
    };

    if (this.errorMode === "handled") {
      renderOptions["error-callback"] = (...args) => {
        this.zone.run(() => this.errored(args));
      };
    }

    this.widget = this.grecaptcha.render(this.elementRef.nativeElement, renderOptions);

    if (this.executeRequested === true) {
      this.executeRequested = false;
      this.execute();
    }
  }

}

RecaptchaComponent.ɵfac = function RecaptchaComponent_Factory(t) {
  return new (t || RecaptchaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RecaptchaLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RECAPTCHA_SETTINGS, 8));
};

RecaptchaComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RecaptchaComponent,
  selectors: [["re-captcha"]],
  hostVars: 1,
  hostBindings: function RecaptchaComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
    }
  },
  inputs: {
    id: "id",
    siteKey: "siteKey",
    theme: "theme",
    type: "type",
    size: "size",
    tabIndex: "tabIndex",
    badge: "badge",
    errorMode: "errorMode"
  },
  outputs: {
    resolved: "resolved",
    error: "error"
  },
  exportAs: ["reCaptcha"],
  decls: 0,
  vars: 0,
  template: function RecaptchaComponent_Template(rf, ctx) {},
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      exportAs: "reCaptcha",
      selector: "re-captcha",
      template: ``
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: RecaptchaLoaderService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_SETTINGS]
      }]
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.id"]
    }],
    siteKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    badge: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    errorMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resolved: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    error: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class RecaptchaCommonModule {}

RecaptchaCommonModule.ɵfac = function RecaptchaCommonModule_Factory(t) {
  return new (t || RecaptchaCommonModule)();
};

RecaptchaCommonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: RecaptchaCommonModule
});
RecaptchaCommonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaCommonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [RecaptchaComponent],
      exports: [RecaptchaComponent]
    }]
  }], null, null);
})();

class RecaptchaModule {}

RecaptchaModule.ɵfac = function RecaptchaModule_Factory(t) {
  return new (t || RecaptchaModule)();
};

RecaptchaModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: RecaptchaModule
});
RecaptchaModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [RecaptchaLoaderService],
  imports: [RecaptchaCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [RecaptchaComponent],
      imports: [RecaptchaCommonModule],
      providers: [RecaptchaLoaderService]
    }]
  }], null, null);
})();
/**
 * The main service for working with reCAPTCHA v3 APIs.
 *
 * Use the `execute` method for executing a single action, and
 * `onExecute` observable for listening to all actions at once.
 */


class ReCaptchaV3Service {
  constructor(zone, siteKey, // eslint-disable-next-line @typescript-eslint/ban-types
  platformId, baseUrl, nonce, language) {
    /** @internal */
    this.onLoadComplete = grecaptcha => {
      this.grecaptcha = grecaptcha;

      if (this.actionBacklog && this.actionBacklog.length > 0) {
        this.actionBacklog.forEach(([action, subject]) => this.executeActionWithSubject(action, subject));
        this.actionBacklog = undefined;
      }
    };

    this.zone = zone;
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(platformId);
    this.siteKey = siteKey;
    this.nonce = nonce;
    this.language = language;
    this.baseUrl = baseUrl;
    this.init();
  }

  get onExecute() {
    if (!this.onExecuteSubject) {
      this.onExecuteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.onExecuteObservable = this.onExecuteSubject.asObservable();
    }

    return this.onExecuteObservable;
  }

  get onExecuteError() {
    if (!this.onExecuteErrorSubject) {
      this.onExecuteErrorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.onExecuteErrorObservable = this.onExecuteErrorSubject.asObservable();
    }

    return this.onExecuteErrorObservable;
  }
  /**
   * Executes the provided `action` with reCAPTCHA v3 API.
   * Use the emitted token value for verification purposes on the backend.
   *
   * For more information about reCAPTCHA v3 actions and tokens refer to the official documentation at
   * https://developers.google.com/recaptcha/docs/v3.
   *
   * @param {string} action the action to execute
   * @returns {Observable<string>} an `Observable` that will emit the reCAPTCHA v3 string `token` value whenever ready.
   * The returned `Observable` completes immediately after emitting a value.
   */


  execute(action) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();

    if (this.isBrowser) {
      if (!this.grecaptcha) {
        if (!this.actionBacklog) {
          this.actionBacklog = [];
        }

        this.actionBacklog.push([action, subject]);
      } else {
        this.executeActionWithSubject(action, subject);
      }
    }

    return subject.asObservable();
  }
  /** @internal */


  executeActionWithSubject(action, subject) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onError = error => {
      this.zone.run(() => {
        subject.error(error);

        if (this.onExecuteErrorSubject) {
          // We don't know any better at this point, unfortunately, so have to resort to `any`
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          this.onExecuteErrorSubject.next({
            action,
            error
          });
        }
      });
    };

    this.zone.runOutsideAngular(() => {
      try {
        this.grecaptcha.execute(this.siteKey, {
          action
        }).then(token => {
          this.zone.run(() => {
            subject.next(token);
            subject.complete();

            if (this.onExecuteSubject) {
              this.onExecuteSubject.next({
                action,
                token
              });
            }
          });
        }, onError);
      } catch (e) {
        onError(e);
      }
    });
  }
  /** @internal */


  init() {
    if (this.isBrowser) {
      if ("grecaptcha" in window) {
        this.grecaptcha = grecaptcha;
      } else {
        const langParam = this.language ? "&hl=" + this.language : "";
        loader.loadScript(this.siteKey, this.onLoadComplete, langParam, this.baseUrl, this.nonce);
      }
    }
  }

}

ReCaptchaV3Service.ɵfac = function ReCaptchaV3Service_Factory(t) {
  return new (t || ReCaptchaV3Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_V3_SITE_KEY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_LANGUAGE, 8));
};

ReCaptchaV3Service.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ReCaptchaV3Service,
  factory: ReCaptchaV3Service.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReCaptchaV3Service, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_V3_SITE_KEY]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_BASE_URL]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_NONCE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [RECAPTCHA_LANGUAGE]
      }]
    }];
  }, null);
})();

class RecaptchaV3Module {}

RecaptchaV3Module.ɵfac = function RecaptchaV3Module_Factory(t) {
  return new (t || RecaptchaV3Module)();
};

RecaptchaV3Module.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: RecaptchaV3Module
});
RecaptchaV3Module.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [ReCaptchaV3Service]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaV3Module, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      providers: [ReCaptchaV3Service]
    }]
  }], null, null);
})();

class RecaptchaValueAccessorDirective {
  constructor(host) {
    this.host = host;
    this.requiresControllerReset = false;
  }

  writeValue(value) {
    if (!value) {
      this.host.reset();
    } else {
      // In this case, it is most likely that a form controller has requested to write a specific value into the component.
      // This isn't really a supported case - reCAPTCHA values are single-use, and, in a sense, readonly.
      // What this means is that the form controller has recaptcha control state of X, while reCAPTCHA itself can't "restore"
      // to that state. In order to make form controller aware of this discrepancy, and to fix the said misalignment,
      // we'll be telling the controller to "reset" the value back to null.
      if (this.host.__unsafe_widgetValue !== value && Boolean(this.host.__unsafe_widgetValue) === false) {
        this.requiresControllerReset = true;
      }
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;

    if (this.requiresControllerReset) {
      this.requiresControllerReset = false;
      this.onChange(null);
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  onResolve($event) {
    if (this.onChange) {
      this.onChange($event);
    }

    if (this.onTouched) {
      this.onTouched();
    }
  }

}

RecaptchaValueAccessorDirective.ɵfac = function RecaptchaValueAccessorDirective_Factory(t) {
  return new (t || RecaptchaValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RecaptchaComponent));
};

RecaptchaValueAccessorDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: RecaptchaValueAccessorDirective,
  selectors: [["re-captcha", "formControlName", ""], ["re-captcha", "formControl", ""], ["re-captcha", "ngModel", ""]],
  hostBindings: function RecaptchaValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resolved", function RecaptchaValueAccessorDirective_resolved_HostBindingHandler($event) {
        return ctx.onResolve($event);
      });
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => RecaptchaValueAccessorDirective)
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaValueAccessorDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => RecaptchaValueAccessorDirective)
      }],
      selector: "re-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]"
    }]
  }], function () {
    return [{
      type: RecaptchaComponent
    }];
  }, {
    onResolve: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ["resolved", ["$event"]]
    }]
  });
})();

class RecaptchaFormsModule {}

RecaptchaFormsModule.ɵfac = function RecaptchaFormsModule_Factory(t) {
  return new (t || RecaptchaFormsModule)();
};

RecaptchaFormsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: RecaptchaFormsModule
});
RecaptchaFormsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, RecaptchaCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecaptchaFormsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [RecaptchaValueAccessorDirective],
      exports: [RecaptchaValueAccessorDirective],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, RecaptchaCommonModule]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_modules_projects_interna_interna_module_ts.js.map
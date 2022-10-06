"use strict";
(self["webpackChunkoikos_constructora"] = self["webpackChunkoikos_constructora"] || []).push([["src_app_modules_legales_legales_module_ts"],{

/***/ 361:
/*!**********************************************!*\
  !*** ./src/app/core/guards/legales.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegalesGuard": () => (/* binding */ LegalesGuard)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 5480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_functions_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/functions/seo.service */ 655);






class LegalesGuard {
  constructor(pageService, router, seoService) {
    this.pageService = pageService;
    this.router = router;
    this.seoService = seoService;
  }

  canActivate(_route, _state) {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const slug = _route.params['slug'];
      const page = yield _this.pageService.getSeoContentPage(slug);

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

LegalesGuard.ɵfac = function LegalesGuard_Factory(t) {
  return new (t || LegalesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__.PageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_services_functions_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService));
};

LegalesGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: LegalesGuard,
  factory: LegalesGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9928:
/*!***********************************************************!*\
  !*** ./src/app/modules/legales/legales-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegalesRoutingModule": () => (/* binding */ LegalesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_guards_legales_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/legales.guard */ 361);
/* harmony import */ var _pages_legales_legales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/legales/legales.component */ 453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        component: _pages_legales_legales_component__WEBPACK_IMPORTED_MODULE_1__.LegalesComponent,
        canActivate: [src_app_core_guards_legales_guard__WEBPACK_IMPORTED_MODULE_0__.LegalesGuard]
    }
];
class LegalesRoutingModule {
}
LegalesRoutingModule.ɵfac = function LegalesRoutingModule_Factory(t) { return new (t || LegalesRoutingModule)(); };
LegalesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LegalesRoutingModule });
LegalesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LegalesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 3304:
/*!***************************************************!*\
  !*** ./src/app/modules/legales/legales.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegalesModule": () => (/* binding */ LegalesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _legales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legales-routing.module */ 9928);
/* harmony import */ var _pages_legales_legales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/legales/legales.component */ 453);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/components.module */ 5626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class LegalesModule {
}
LegalesModule.ɵfac = function LegalesModule_Factory(t) { return new (t || LegalesModule)(); };
LegalesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LegalesModule });
LegalesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _legales_routing_module__WEBPACK_IMPORTED_MODULE_0__.LegalesRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentSharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LegalesModule, { declarations: [_pages_legales_legales_component__WEBPACK_IMPORTED_MODULE_1__.LegalesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _legales_routing_module__WEBPACK_IMPORTED_MODULE_0__.LegalesRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentSharedModule] }); })();


/***/ }),

/***/ 453:
/*!********************************************************************!*\
  !*** ./src/app/modules/legales/pages/legales/legales.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegalesComponent": () => (/* binding */ LegalesComponent)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 5480);
/* harmony import */ var src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/functions/config.service */ 4130);






class LegalesComponent {
  constructor(pageService, router, configServ, activateRoute) {
    this.pageService = pageService;
    this.router = router;
    this.configServ = configServ;
    this.activateRoute = activateRoute;
    this.data = [];
    this.imagenes = [];
    this.imagen_prin = [];
    this.slug = this.activateRoute.snapshot.paramMap.get('slug');
    this.suscribeListenRouter = this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        this.slug = this.activateRoute.snapshot.paramMap.get('slug');
        this.configServ.goUpPage();
        this.getData();
      }
    });
  }

  ngOnInit() {
    this.init();
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
      _this2.data = yield _this2.pageService.getPageContent(_this2.slug);
    })();
  }

}

LegalesComponent.ɵfac = function LegalesComponent_Factory(t) {
  return new (t || LegalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__.PageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
};

LegalesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LegalesComponent,
  selectors: [["app-legales"]],
  decls: 5,
  vars: 2,
  consts: [["bis_skin_checked", "1", 1, "cnt_central"], ["bis_skin_checked", "1", 1, "contenidopol"], [1, "title"], ["bis_skin_checked", "1", 1, "textopol", 3, "innerHTML"]],
  template: function LegalesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data["titulo_legales"], " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.data["texto_legales"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 655:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/functions/seo.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoService": () => (/* binding */ SeoService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _api_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/page.service */ 5480);




class SeoService {
    constructor(meta, pageService, doc, titlePage) {
        this.meta = meta;
        this.pageService = pageService;
        this.doc = doc;
        this.titlePage = titlePage;
    }
    updateCanonicalUrl(canonical = "") {
        let element = this.doc.querySelector(`link[rel='canonical']`) || null;
        if (!element) { // create canonical element
            element = this.doc.createElement('link');
        }
        element.setAttribute('rel', 'canonical');
        canonical ? element.setAttribute('href', canonical) : element.setAttribute('href', this.doc.URL);
        this.doc.head.appendChild(element);
    }
    setUpMetaTags(seoPage) {
        if (seoPage) {
            var canonical = '';
            if (seoPage.canonical != '') {
                canonical = seoPage.canonical;
            }
            this.updateCanonicalUrl(canonical);
            this.titlePage.setTitle(seoPage.title);
            this.meta.updateTag({ name: 'description', content: seoPage.metadescription });
            this.meta.updateTag({ name: 'robots', content: seoPage.metarobots });
        }
    }
}
SeoService.ɵfac = function SeoService_Factory(t) { return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_page_service__WEBPACK_IMPORTED_MODULE_0__.PageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title)); };
SeoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SeoService, factory: SeoService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_legales_legales_module_ts.js.map
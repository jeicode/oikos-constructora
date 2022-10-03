"use strict";
(self["webpackChunkoikos_constructora"] = self["webpackChunkoikos_constructora"] || []).push([["src_app_modules_thanks_thanks_module_ts"],{

/***/ 2451:
/*!*********************************************!*\
  !*** ./src/app/core/guards/thanks.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThanksGuard": () => (/* binding */ ThanksGuard)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 5480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_functions_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/functions/seo.service */ 655);






class ThanksGuard {
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

ThanksGuard.ɵfac = function ThanksGuard_Factory(t) {
  return new (t || ThanksGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__.PageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_services_functions_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService));
};

ThanksGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ThanksGuard,
  factory: ThanksGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1910:
/*!*****************************************************************!*\
  !*** ./src/app/modules/thanks/pages/thanks/thanks.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThanksComponent": () => (/* binding */ ThanksComponent)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 5480);
/* harmony import */ var src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/functions/config.service */ 4130);






class ThanksComponent {
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

ThanksComponent.ɵfac = function ThanksComponent_Factory(t) {
  return new (t || ThanksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__.PageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
};

ThanksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ThanksComponent,
  selectors: [["app-thanks"]],
  decls: 124,
  vars: 2,
  consts: [[1, "bg_gracias"], [1, "s_gracias_404"], [1, "cnt_central"], [1, "c_gracias_404"], ["width", "393", "height", "240", "src", "assets/images/diseno/gracias_404/gracias_img.png", "alt", ""], ["routerLink", "/", 1, "btn", "al-center"], [1, "s_carr_proy"], [1, "bg_round"], [1, "title_section", "al_center"], [1, "cnt_car_proy_dest"], [1, "swiper-container"], [1, "swiper-wrapper"], [1, "swiper-slide"], [1, "card_p"], [1, "tag_state", 2, "background-color", "Yellow"], [1, "btns_icons"], ["href", "", 1, "btn_icon"], ["src", "assets/images/diseno/proyectos_vivienda/icon_360.svg", "width", "20", "height", "20", "alt", ""], [1, "fas", "fa-map-marker-alt"], ["width", "350", "height", "219", "src", "assets/images/diseno/proyectos_vivienda/img_proyecto.jpg", "alt", ""], [1, "name_proyecto"], ["width", "87", "height", "87", "src", "assets/images/diseno/proyectos_vivienda/logo_proyecto.jpg", "alt", ""], [1, "datos_proyecto"], [1, "franja_p"], ["width", "20", "height", "20", "src", "assets/images/diseno/proyectos_vivienda/icono_proyecto.svg", "alt", ""], [1, "ctas_proyectos"], ["href", "", 1, "btn_whatsapp"], [1, "fab", "fa-whatsapp"], ["href", "", 1, "btn"], [1, "swiper-button-next"], [1, "swiper-button-prev"]],
  template: function ThanksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Volver al inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "section", 6)(13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 2)(16, "h2", 8)(17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Proyectos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " en construcci\u00F3n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 9)(21, "div", 10)(22, "div", 11)(23, "div", 12)(24, "div", 13)(25, "picture")(26, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Lanzamiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 15)(29, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "h2", 20)(35, "picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "San Pablo Sport Club");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 22)(40, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Cundinamarca / Fusagasug\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "h4")(43, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Desde");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " $238.686.400 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " Aplica subsidio de vivienda VIS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 25)(51, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, " contactar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "ver proyectos");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 12)(57, "div", 13)(58, "picture")(59, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Lanzamiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 15)(62, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "h2", 20)(68, "picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "San Pablo Sport Club");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 22)(73, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Cundinamarca / Fusagasug\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "h4")(76, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Desde");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, " $238.686.400 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, " Aplica subsidio de vivienda VIS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 25)(84, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, " contactar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "ver proyectos");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 12)(90, "div", 13)(91, "picture")(92, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Lanzamiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 15)(95, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](98, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "h2", 20)(101, "picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](102, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "San Pablo Sport Club");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 22)(106, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Cundinamarca / Fusagasug\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "h4")(109, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "Desde");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, " $238.686.400 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](113, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, " Aplica subsidio de vivienda VIS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 25)(117, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](118, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, " contactar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "ver proyectos");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](122, "div", 29)(123, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data.texto1_gracias_proyecto);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data.texto2_gracias_proyecto);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
  styles: [".c_gracias_404[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding: 40px 20px 100px;\n  }\n  .c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    object-fit: contain;\n  }\n  .c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    left: -30%;\n    top: 30%;\n    width: 76px;\n    height: 43px;\n    background: url('puntos1.svg') no-repeat center;\n    background-size: contain;\n    z-index: 1;\n  }\n  .c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    right: -20%;\n    top: 15%;\n    width: 20px;\n    height: 70px;\n    background: url('puntos2.svg') no-repeat center;\n    background-size: contain;\n    z-index: 1;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 53px;\n    background: linear-gradient(180deg, #2C3EA0 0%, #131D54 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n    margin: 0 0 10px;\n    line-height: 1;\n  }\n  h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 800;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-weight: 600;\n    max-width: 550px;\n    margin: 30px 0;\n    line-height: 1.2;\n    text-align: center;\n  }\n  .txt_page[_ngcontent-%COMP%] {\n    font-size: 20px;\n    max-width: 530px;\n    margin: 0 0 20px;\n  }\n  .c_404[_ngcontent-%COMP%] {\n    height: 60vh;\n    padding: 60px 0 100px;\n    position: relative;\n  }\n  .c_404[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    bottom: 40px;\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: 100%;\n    max-width: 600px;\n    height: 100%;\n    max-height: 90px;\n    background: url('tuercas.svg') no-repeat center;\n    background-size: contain;\n  }\n  .c_404[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n  .bg_gracias[_ngcontent-%COMP%] {\n    background: linear-gradient(to top, rgba(233, 237, 247, 0.16), #E8EBF1);\n    background-blend-mode: normal, color;\n    position: relative;\n    padding-top: 40px;\n  }\n  .bg_gracias[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: 300;\n    margin: 40px 0 10px;\n    text-align: center;\n  }\n  .bg_gracias[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-weight: 800;\n  }\n  .bg_gracias[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.3;\n    color: #131D54;\n    max-width: 550px;\n    margin: 0px auto 30px;\n    text-align: center;\n  }\n  .bg_gracias[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    left: 2%;\n    top: 10%;\n    background: url('puntos2.svg') no-repeat center;\n    background-size: contain;\n    width: 30px;\n    height: 90px;\n  }\n  .bg_gracias[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    right: 2%;\n    bottom: 10%;\n    background: url('puntos2.svg') no-repeat center;\n    background-size: contain;\n    width: 30px;\n    height: 90px;\n    transform: rotate(180deg);\n  }\n  @media screen and (max-width: 480px) {\n    h1[_ngcontent-%COMP%] {\n      font-size: 32px;\n    }\n    .c_gracias_404[_ngcontent-%COMP%] {\n      padding-left: 0;\n      padding-top: 0;\n      padding-right: 0;\n      margin: -40px 0 0;\n    }\n    picture[_ngcontent-%COMP%]:before, picture[_ngcontent-%COMP%]:after {\n      display: none;\n    }\n    .c_404[_ngcontent-%COMP%] {\n      height: initial;\n      margin-top: 0;\n      padding-top: 60px;\n    }\n  }\n/*# sourceMappingURL=gracias_404.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWiwrQ0FBK0Y7SUFDL0Ysd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osK0NBQStGO0lBQy9GLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7RUFFQTtJQUNFLGVBQWU7SUFDZiw2REFBNkQ7SUFDN0QsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLCtDQUErRjtJQUMvRix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUVBO0lBQ0UsdUVBQXVFO0lBQ3ZFLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLCtDQUErRjtJQUMvRix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLCtDQUErRjtJQUMvRix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7RUFFQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtJQUNBO01BQ0UsZUFBZTtNQUNmLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLGVBQWU7TUFDZixhQUFhO01BQ2IsaUJBQWlCO0lBQ25CO0VBQ0Y7RUFBQywwQ0FBMEMiLCJmaWxlIjoidGhhbmtzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY19ncmFjaWFzXzQwNCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDQwcHggMjBweCAxMDBweDtcbiAgfVxuICAuY19ncmFjaWFzXzQwNCBwaWN0dXJlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5jX2dyYWNpYXNfNDA0IHBpY3R1cmUgaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIC5jX2dyYWNpYXNfNDA0IHBpY3R1cmU6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMzAlO1xuICAgIHRvcDogMzAlO1xuICAgIHdpZHRoOiA3NnB4O1xuICAgIGhlaWdodDogNDNweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9ncmFjaWFzXzQwNC9wdW50b3MxLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIC5jX2dyYWNpYXNfNDA0IHBpY3R1cmU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMjAlO1xuICAgIHRvcDogMTUlO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9ncmFjaWFzXzQwNC9wdW50b3MyLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICBoMSB7XG4gICAgZm9udC1zaXplOiA1M3B4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyQzNFQTAgMCUsICMxMzFENTQgMTAwJSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICB0ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbiAgaDEgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICBcbiAgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWF4LXdpZHRoOiA1NTBweDtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnR4dF9wYWdlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA1MzBweDtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xuICB9XG4gIFxuICAuY180MDQge1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBwYWRkaW5nOiA2MHB4IDAgMTAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5jXzQwNDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDkwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaXNlbm8vZ3JhY2lhc180MDQvdHVlcmNhcy5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIH1cbiAgLmNfNDA0IC5idG4ge1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICBcbiAgLmJnX2dyYWNpYXMge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjMzLCAyMzcsIDI0NywgMC4xNiksICNFOEVCRjEpO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsLCBjb2xvcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gIH1cbiAgLmJnX2dyYWNpYXMgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luOiA0MHB4IDAgMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmJnX2dyYWNpYXMgaDEgYiB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuICAuYmdfZ3JhY2lhcyBoMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgY29sb3I6ICMxMzFENTQ7XG4gICAgbWF4LXdpZHRoOiA1NTBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvIDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5iZ19ncmFjaWFzOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIlO1xuICAgIHRvcDogMTAlO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGlzZW5vL2dyYWNpYXNfNDA0L3B1bnRvczIuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgfVxuICAuYmdfZ3JhY2lhczo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyJTtcbiAgICBib3R0b206IDEwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9ncmFjaWFzXzQwNC9wdW50b3MyLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgfVxuICAgIC5jX2dyYWNpYXNfNDA0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIG1hcmdpbjogLTQwcHggMCAwO1xuICAgIH1cbiAgICBwaWN0dXJlOmJlZm9yZSwgcGljdHVyZTphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuY180MDQge1xuICAgICAgaGVpZ2h0OiBpbml0aWFsO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIH1cbiAgfS8qIyBzb3VyY2VNYXBwaW5nVVJMPWdyYWNpYXNfNDA0LmNzcy5tYXAgKi8iXX0= */"]
});

/***/ }),

/***/ 9657:
/*!*********************************************************!*\
  !*** ./src/app/modules/thanks/thanks-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThanksRoutingModule": () => (/* binding */ ThanksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_guards_thanks_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/thanks.guard */ 2451);
/* harmony import */ var _pages_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/thanks/thanks.component */ 1910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        component: _pages_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_1__.ThanksComponent,
        canActivate: [src_app_core_guards_thanks_guard__WEBPACK_IMPORTED_MODULE_0__.ThanksGuard]
    }
];
class ThanksRoutingModule {
}
ThanksRoutingModule.ɵfac = function ThanksRoutingModule_Factory(t) { return new (t || ThanksRoutingModule)(); };
ThanksRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ThanksRoutingModule });
ThanksRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ThanksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 7411:
/*!*************************************************!*\
  !*** ./src/app/modules/thanks/thanks.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThanksModule": () => (/* binding */ ThanksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _thanks_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thanks-routing.module */ 9657);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/components.module */ 5626);
/* harmony import */ var _pages_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/thanks/thanks.component */ 1910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class ThanksModule {
}
ThanksModule.ɵfac = function ThanksModule_Factory(t) { return new (t || ThanksModule)(); };
ThanksModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ThanksModule });
ThanksModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _thanks_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThanksRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentSharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ThanksModule, { declarations: [_pages_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_2__.ThanksComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _thanks_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThanksRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentSharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_thanks_thanks_module_ts.js.map
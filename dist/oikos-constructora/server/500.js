"use strict";
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 77470:
/*!***********************************************!*\
  !*** ./src/app/core/guards/vivienda.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViviendaGuard": () => (/* binding */ ViviendaGuard)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 85480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_shared_services_functions_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/functions/seo.service */ 80655);






class ViviendaGuard {
  constructor(pageService, router, seoService) {
    this.pageService = pageService;
    this.router = router;
    this.seoService = seoService;
  }

  canActivate(_route, _state) {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const page = yield _this.pageService.getSeoContentPage('proyectos-construccion-vivienda');

      if ((page === null || page === void 0 ? void 0 : page.friendly_url) != null) {
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

ViviendaGuard.ɵfac = function ViviendaGuard_Factory(t) {
  return new (t || ViviendaGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__.PageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_shared_services_functions_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService));
};

ViviendaGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ViviendaGuard,
  factory: ViviendaGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 15469:
/*!********************************************************************************!*\
  !*** ./src/app/modules/projects/vivienda/pages/vivienda/vivienda.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViviendaComponent": () => (/* binding */ ViviendaComponent)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 85480);
/* harmony import */ var src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/functions/config.service */ 84130);
/* harmony import */ var src_app_shared_services_api_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/api/project.service */ 20221);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);










function ViviendaComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", i_r5 == null ? null : i_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r5 == null ? null : i_r5.field_content);
  }
}

function ViviendaComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", i_r6 == null ? null : i_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r6 == null ? null : i_r6.field_content);
  }
}

function ViviendaComponent_div_57_div_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", i_r7 == null ? null : i_r7.vista360, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}

function ViviendaComponent_div_57_div_4_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", i_r7 == null ? null : i_r7.url_waze, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}

function ViviendaComponent_div_57_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ViviendaComponent_div_57_div_4_a_1_Template, 2, 1, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ViviendaComponent_div_57_div_4_a_2_Template, 2, 1, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (i_r7 == null ? null : i_r7.vista360) != "" && (i_r7 == null ? null : i_r7.vista360) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (i_r7 == null ? null : i_r7.url_waze) != "" && (i_r7 == null ? null : i_r7.url_waze) != null);
  }
}

function ViviendaComponent_div_57_h4_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Desde");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" $", i_r7 == null ? null : i_r7.valor_proyecto_formato, " ");
  }
}

const _c0 = function (a0) {
  return {
    "background-color": a0
  };
};

function ViviendaComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 66)(1, "picture")(2, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ViviendaComponent_div_57_div_4_Template, 3, 2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h2", 70)(7, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 72)(12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ViviendaComponent_div_57_h4_14_Template, 4, 1, "h4", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 74)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 75)(19, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Contactar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Ver proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const i_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c0, i_r7 == null ? null : i_r7.color_secundario));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r7 == null ? null : i_r7.estado_proyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (i_r7 == null ? null : i_r7.vista360) != "" || (i_r7 == null ? null : i_r7.url_waze) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r4.imagenes_url + (i_r7 == null ? null : i_r7.imagen_fondo_proyecto), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", i_r7 == null ? null : i_r7.alt_fondo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", i_r7 == null ? null : i_r7.title_fondo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c0, i_r7 == null ? null : i_r7.color_primario));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r4.imagenes_url + (i_r7 == null ? null : i_r7.logo_proyecto), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", i_r7 == null ? null : i_r7.alt_logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", i_r7 == null ? null : i_r7.title_logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r7 == null ? null : i_r7.titulo_proyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", i_r7 == null ? null : i_r7.zona_proyecto, " / ", i_r7 == null ? null : i_r7.ubicacion_proyecto, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (i_r7 == null ? null : i_r7.valor_proyecto) != "" && (i_r7 == null ? null : i_r7.valor_proyecto) != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r7 == null ? null : i_r7.texto_adicional, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", i_r7 == null ? null : i_r7.api_wsp, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/proyecto/", i_r7 == null ? null : i_r7.url_amigable, "");
  }
}

class ViviendaComponent {
  constructor(pageService, router, configServ, projService) {
    this.pageService = pageService;
    this.router = router;
    this.configServ = configServ;
    this.projService = projService;
    this.data = []; //data page

    this.general = []; //data website

    this.imagenes = [];
    this.ciudades = [];
    this.tipo_proyecto = [];
    this.proyectos = [];
    this.isSubmitted = false;
    this.captcha = "";
    this.imagenes_url = "";
    this.imagen_banner = "";
    this.ciudad = "NA";
    this.tipo_search = "NA";
    this.imagenes_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imagenes_url;
    this.suscribeListenRouter = this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
        this.configServ.goUpPage();
      }
    });
  }

  ngOnInit() {
    this.init();
    this.configServ.loadSearchMobile(1000);
  }

  init() {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tasks = [() => _this.getData(), () => _this.getSecciones(), () => _this.getProyectos()];

      for (const task of tasks) {
        yield task();
      }
    })();
  }

  getData() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.data = yield _this2.pageService.getContentPage('proyectos-construccion-vivienda');
    })();
  }

  getImagenes() {
    var _this3 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.imagenes = yield _this3.pageService.getImagesBySlugPage('proyectos-construccion-vivienda');
      _this3.imagen_banner = _this3.imagenes_url + _this3.imagenes[0]['field_content'];
    })();
  }

  getSecciones() {
    var _this4 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.ciudades = yield _this4.pageService.getElementsContent('nombre ciudad', 'ciudades');
      _this4.tipo_proyecto = yield _this4.pageService.getElementsContent('titulo tipo proyecto', 'tipos_proyectos');
    })();
  }

  getCiudad(ciudad) {
    this.ciudad = ciudad;
  }

  getTipo(tipo) {
    this.tipo_search = tipo;
  }

  getProyectos() {
    var _this5 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.proyectos = yield _this5.projService.getProyectosByTipo('1');
    })();
  }

  buscarProyectos() {
    var _this6 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.proyectos = yield _this6.projService.getProyectosByTipo('1', _this6.ciudad, _this6.tipo_search);
    })();
  }

  limpiarFiltros() {
    var _this7 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.getProyectos();
    })();
  }

}

ViviendaComponent.ɵfac = function ViviendaComponent_Factory(t) {
  return new (t || ViviendaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_2__.PageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_api_project_service__WEBPACK_IMPORTED_MODULE_4__.ProjectService));
};

ViviendaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ViviendaComponent,
  selectors: [["app-vivienda"]],
  decls: 227,
  vars: 5,
  consts: [[1, "s_proyecto_vivienda"], [1, "cnt_central"], [1, "c_proyecto_vivienda"], [1, "title_section", "al_center", 3, "innerHTML"], [1, "container_filtro"], [1, "act_filtro_mobile"], [1, "btn_icon_search"], [1, "fas", "fa-search"], [1, "filtro_proyectos"], [3, "change"], ["nomCiudad", ""], ["value", "NA", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["nomTipo", ""], [1, "precio"], ["value", "", "selected", "", "disabled", ""], ["value", ""], [1, "cont_filtr_btns"], ["type", "button", 1, "btn_link_reset", 3, "click"], [1, "fas", "fa-times"], ["type", "button", 1, "btn", 3, "click"], [1, "s_cards_proyectos"], [1, "c_cards_proyectos"], ["class", "card_p", 4, "ngFor", "ngForOf"], [1, "s_futuros_proyectos"], [1, "swiper", "swiperFuturos"], [1, "swiper-wrapper"], [1, "swiper-slide"], [1, "c_futuros_proyectos"], [1, "info_fp"], ["href", "", 1, "btn", "contacto_h"], [1, "img_fp"], ["width", "1280", "height", "720", "src", "assets/images/diseno/proyectos_vivienda/img_banner_futuros.jpg", "alt", ""], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "swiper-pagination"], [1, "s_proyectos_ejecutados"], [1, "c_proyectos_ejecutados"], [1, "title_section", "al-center"], [1, "tabs_proyectos_eject"], [1, "holder"], ["id", "itemContainer", 1, "cont_proyecto_logo"], ["data-proyecto", "1", 1, "animate__animated", "animate__fadeIn", "tab_logo_eject", "active"], ["width", "76", "height", "65", "src", "assets/images/diseno/proyectos_vivienda/logo1.png", "alt", ""], ["data-proyecto", "2", 1, "animate__animated", "animate__fadeIn", "tab_logo_eject"], ["width", "76", "height", "65", "src", "assets/images/diseno/proyectos_vivienda/logo2.png", "alt", ""], ["data-proyecto", "3", 1, "animate__animated", "animate__fadeIn", "tab_logo_eject"], ["width", "76", "height", "65", "src", "assets/images/diseno/proyectos_vivienda/logo3.png", "alt", ""], ["data-proyecto", "4", 1, "animate__animated", "animate__fadeIn", "tab_logo_eject"], ["data-proyecto", "5", 1, "animate__animated", "animate__fadeIn", "tab_logo_eject"], ["data-proyecto", "6", 1, "animate__animated", "animate__fadeIn", "tab_logo_eject"], ["data-proyecto", "7", 1, "animate__animated", "animate__fadeIn", "tab_logo_eject"], ["data-proyecto", "8", 1, "animate__animated", "animate__fadeIn", "tab_logo_eject"], ["data-proyecto", "9", 1, "animate__animated", "animate__fadeIn", "tab_logo_eject"], ["data-proyecto", "1", 1, "cont_proyecto_eject", "active"], [1, "info_pe"], [1, "title_pe"], [1, "lugar"], [1, "info_datos_pe"], [1, "c_slider_pe"], [1, "swiper", "swiperPe"], ["width", "530", "height", "390", "src", "assets/images/diseno/proyectos_vivienda/img_banner_futuros.jpg", "alt", ""], ["width", "530", "height", "390", "src", "https://picsum.photos/600/400", "alt", ""], ["data-proyecto", "2", 1, "cont_proyecto_eject"], ["data-proyecto", "3", 1, "cont_proyecto_eject"], [3, "value"], [1, "card_p"], [1, "tag_state", 3, "ngStyle"], ["class", "btns_icons", 4, "ngIf"], ["width", "350", "height", "219", 3, "src", "alt", "title"], [1, "name_proyecto", 3, "ngStyle"], ["width", "87", "height", "87", 3, "src", "alt", "title"], [1, "datos_proyecto"], [4, "ngIf"], [1, "franja_p"], [1, "ctas_proyectos"], ["target", "_blank", "rel", "noopener, nofollow", 1, "btn_whatsapp", 3, "href"], [1, "fab", "fa-whatsapp"], [1, "btn", 3, "routerLink"], [1, "btns_icons"], ["target", "_blank", "rel", "nofollow,noopener", "class", "btn_icon", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "nofollow,noopener", 1, "btn_icon", 3, "href"], ["src", "assets/images/diseno/proyectos_vivienda/icon_360.svg", "width", "20", "height", "20", "alt", ""], [1, "fas", "fa-map-marker-alt"]],
  template: function ViviendaComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 8)(11, "select", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ViviendaComponent_Template_select_change_11_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);

        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.getCiudad(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Ciudad");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ViviendaComponent_option_15_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "select", 9, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ViviendaComponent_Template_select_change_16_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);

        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);

        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.getTipo(_r2.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Tipo de vivienda");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ViviendaComponent_option_20_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "select", 14)(22, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Precio desde");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "100.000.000");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "select", 14)(35, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Precio hasta");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "1.000.000.000");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 17)(48, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViviendaComponent_Template_button_click_48_listener() {
        return ctx.limpiarFiltros();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Limpiar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViviendaComponent_Template_button_click_51_listener() {
        return ctx.buscarProyectos();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Buscar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "section", 21)(55, "div", 1)(56, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, ViviendaComponent_div_57_Template, 24, 21, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "section", 24)(59, "div", 25)(60, "div", 26)(61, "div", 27)(62, "div", 28)(63, "div", 29)(64, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Futuros Proyectos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Conoce m\u00E1s");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 27)(73, "div", 28)(74, "div", 29)(75, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Futuros Proyectos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "Lorem ipsum dolor sit amet, consectetur adipisasdasdasddasacing elit. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Conoce m\u00E1s");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 27)(84, "div", 28)(85, "div", 29)(86, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Futuros Proyectos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Lorem ipsum dolor sit amur adipiscing elit. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "Conoce m\u00E1s");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "div", 33)(95, "div", 34)(96, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "section", 36)(98, "div", 1)(99, "div", 37)(100, "div", 38)(101, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, " Proyectos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, " Ejecutados");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](105, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 41)(107, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](108, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](110, "img", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](112, "img", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](114, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "a", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](116, "img", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "a", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](118, "img", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](120, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](122, "img", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "a", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](124, "img", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 54)(126, "div", 55)(127, "div", 56)(128, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, "OIKOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "PALMA REAL");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, " Ricaurte - Cundinamarca Sector Pe\u00F1alisa ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "div", 58)(135, "div")(136, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](137, " Direcci\u00F3n:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, " Calle 67A #113c-27");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "div")(140, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, " Ciudad:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, " Bogot\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "div")(144, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](145, " Zona:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146, " Engativ\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](148, "Ver proyecto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "div", 59)(150, "div", 60)(151, "div", 26)(152, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](153, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](155, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](156, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](157, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](158, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "div", 63)(160, "div", 55)(161, "div", 56)(162, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, "OIKOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](165, "SAVANA");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](166, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](167, " Ricaurte - Cundinamarca Sector Pe\u00F1alisa ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "div", 58)(169, "div")(170, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](171, " Direcci\u00F3n:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](172, " Calle 67A #113c-27");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "div")(174, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](175, " Ciudad:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](176, " Bogot\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](177, "div")(178, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](179, " Zona:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](180, " Engativ\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](182, "Ver proyecto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "div", 59)(184, "div", 60)(185, "div", 26)(186, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](187, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](188, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](189, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](190, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](191, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](192, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](193, "div", 64)(194, "div", 55)(195, "div", 56)(196, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](197, "OIKOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](198, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](199, "SANTA CLARA");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](201, " Ricaurte - Cundinamarca Sector Pe\u00F1alisa ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](202, "div", 58)(203, "div")(204, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](205, " Direcci\u00F3n:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](206, " Calle 67A #113c-27");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](207, "div")(208, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](209, " Ciudad:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](210, " Bogot\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](211, "div")(212, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](213, " Zona:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](214, " Engativ\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](215, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](216, "Ver proyecto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](217, "div", 59)(218, "div", 60)(219, "div", 26)(220, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](221, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](223, "img", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](224, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](225, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](226, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", ctx.data.titulo_proyecto_vivienda, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.data.titulo_busqueda, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.ciudades);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.tipo_proyecto);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.proyectos);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref],
  styles: [".s_proyecto_vivienda[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, rgba(233, 237, 247, 0) 0%, #E8EBF1 72.6%), #FFFFFF;\n    min-height: 340px;\n    position: relative;\n  }\n  .s_proyecto_vivienda[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: -2px;\n    background: url('curva_bg.svg') no-repeat;\n    background-size: cover;\n    background-position: center top;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    max-height: 145px;\n    pointer-events: none;\n  }\n  .c_proyecto_vivienda[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .c_proyecto_vivienda[_ngcontent-%COMP%]::before, .c_proyecto_vivienda[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    background: url('puntos.svg') no-repeat center;\n    width: 20px;\n    height: 70px;\n  }\n  .c_proyecto_vivienda[_ngcontent-%COMP%]:after {\n    right: 0;\n    left: initial;\n    top: initial;\n    bottom: 0;\n    transform: rotate(180deg);\n  }\n  .filtro_proyectos[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    background: #FFFFFF;\n    box-shadow: 0px 2px 20px -3px rgba(51, 66, 119, 0.25);\n    border-radius: 39px;\n    padding: 8px 20px;\n    max-width: 920px;\n    margin: 0 auto;\n  }\n  .filtro_proyectos[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    background: none;\n    border-radius: 0;\n    border: 0;\n    border-bottom: 1px solid #DADADA;\n    padding: 5px;\n    color: #666666;\n    font-size: 14px;\n    cursor: pointer;\n  }\n  .filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%] {\n    max-width: 130px;\n  }\n  .s_cards_proyectos[_ngcontent-%COMP%] {\n    padding: 0px 0 40px;\n    position: relative;\n    z-index: 1;\n    transform: translateY(-80px);\n  }\n  .c_cards_proyectos[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n    gap: 20px;\n  }\n  .card_p[_ngcontent-%COMP%] {\n    overflow: hidden;\n    background: #FFFFFF;\n    box-shadow: 0px 19px 41px -18px rgba(35, 56, 98, 0.45);\n    border-radius: 24px;\n    display: inline-grid;\n  }\n  .card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    max-height: 219px;\n    width: 100%;\n    height: 100%;\n  }\n  .card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n  .card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%] {\n    text-align: center;\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    border-radius: 100px;\n    padding: 8px 20px;\n    color: #fff;\n    font-weight: 600;\n    font-size: 14px;\n    z-index: 1;\n  }\n  .card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 10px;\n    right: 10px;\n    border-radius: 6px;\n    background: var(--color-grad_azul_osc);\n    width: 80px;\n    height: 40px;\n    z-index: 1;\n    overflow: hidden;\n  }\n  .card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]::before {\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 80%;\n    width: 1px;\n    background-color: rgb(165, 165, 165);\n    margin: auto;\n    z-index: 2;\n  }\n  .card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 26px;\n    height: 26px;\n    transition: 300ms ease;\n    width: 100%;\n    height: 100%;\n    position: relative;\n  }\n  .card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    content: \"\";\n    background-color: var(--color-c2);\n  }\n  .card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n  .card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 300;\n    font-size: 20px;\n    color: #FFF;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%] {\n    background-color: #2E3B85;\n    padding: 10px;\n    display: grid;\n    grid-template-columns: 80px 1fr;\n    align-items: center;\n    gap: 20px;\n    position: relative;\n    min-height: 54px;\n  }\n  .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    max-width: 87px;\n    border-radius: 100px;\n    border: 5px solid #FFFFFF;\n    background-color: #FFF;\n    position: absolute;\n    width: 90px;\n    height: 90px;\n    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.33);\n    left: 10px;\n  }\n  .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    mix-blend-mode: multiply;\n  }\n  .card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    grid-column: 2;\n    color: #FFFFFF;\n    font-size: 15px;\n    font-weight: 700;\n  }\n  .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%] {\n    padding: 30px 20px 20px;\n    text-align: center;\n    color: var(--color-c2);\n  }\n  .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: 700;\n  }\n  .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 34px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    text-align: center;\n    justify-content: center;\n  }\n  .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 400;\n    display: inline-block;\n  }\n  .card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%] {\n    width: 100%;\n    background: linear-gradient(90deg, rgba(238, 238, 238, 0.5) 0%, #EEEEEE 48.96%, rgba(238, 238, 238, 0.5) 100%);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    padding: 10px;\n  }\n  .card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: var(--color-c2);\n  }\n  .card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    align-items: center;\n    padding: 10px;\n  }\n  .card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color: var(--color-c2);\n  }\n  .card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover {\n    color: #060b29;\n  }\n  .card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, #5FFC7B 0%, #26D044 100%);\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 30px;\n    height: 30px;\n    font-size: 22px;\n    color: #FFF;\n    font-weight: 500;\n  }\n  .card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: -moz-fit-content;\n    width: fit-content;\n    justify-self: flex-end;\n  }\n  .act_filtro_mobile[_ngcontent-%COMP%] {\n    display: none;\n    color: var(--color-c2);\n    font-size: 18px;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    background: #FFF;\n    padding: 20px;\n    border-radius: 10px;\n  }\n  .container_filtro[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .cont_filtr_btns[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    padding-left: 10px;\n    border-left: 1px solid #DADADA;\n  }\n  .s_futuros_proyectos[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    min-height: 460px;\n  }\n  .s_futuros_proyectos[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    background: url('curva_sup.svg') no-repeat center;\n    background-size: cover;\n    background-position: center bottom;\n    width: 100%;\n    height: 100%;\n    max-height: 40px;\n    top: -2px;\n    left: 0;\n    right: 0;\n    z-index: 2;\n  }\n  .s_futuros_proyectos[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    background: url('curva_inf.svg') no-repeat center;\n    background-size: cover;\n    background-position: center top;\n    width: 100%;\n    height: 100%;\n    max-height: 40px;\n    bottom: -2px;\n    left: 0;\n    right: 0;\n    z-index: 2;\n  }\n  .c_futuros_proyectos[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: stretch;\n    position: relative;\n    min-height: 460px;\n  }\n  .c_futuros_proyectos[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 400px;\n    height: 300px;\n    border-radius: 100%;\n    background: rgba(54, 107, 236, 0.35);\n    filter: blur(54px);\n    margin: auto;\n    mix-blend-mode: lighten;\n  }\n  .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%] {\n    background: url('bg_futuros.jpg'), linear-gradient(107.08deg, #4565B3 0%, #2B478B 31.11%, #13203E 100%);\n    background-blend-mode: multiply;\n    background-size: cover;\n    background-position: center;\n    padding: 0 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    gap: 30px;\n  }\n  .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]::before, .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    width: 20px;\n    height: 70px;\n    background: url('puntos.svg') no-repeat center;\n    background-size: contain;\n    left: 3%;\n    top: 20%;\n  }\n  .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]:after {\n    right: 3%;\n    bottom: 20%;\n    top: initial;\n    left: initial;\n    transform: rotate(180deg);\n  }\n  .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    letter-spacing: 0.365em;\n    text-transform: uppercase;\n    color: #FFED00;\n    font-weight: 600;\n    font-size: 20px;\n  }\n  .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-weight: 900;\n    color: #FFF;\n    font-size: 40px;\n    max-width: 500px;\n    line-height: 1.1;\n  }\n  .c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n  .c_futuros_proyectos[_ngcontent-%COMP%]   .img_fp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  .swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%] {\n    background: #182360;\n    border: 3px solid #FAFAFA;\n    border-radius: 100px;\n    width: 35px;\n    height: 35px;\n  }\n  .swiper-button-next[_ngcontent-%COMP%]:after, .swiper-button-prev[_ngcontent-%COMP%]:after {\n    font-size: 16px;\n    font-weight: 800;\n    color: #FFF;\n  }\n  .swiper-pagination[_ngcontent-%COMP%] {\n    bottom: 60px !important;\n  }\n  .swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n    background-color: #FFF;\n    width: 10px;\n    border-radius: 100px;\n    height: 10px;\n    transition: 400ms ease;\n  }\n  .swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n    width: 20px;\n  }\n  .swiper-button-prev[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n    left: 25px;\n  }\n  .swiper-button-next[_ngcontent-%COMP%], .swiper-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n    right: 25px;\n  }\n  .s_proyectos_ejecutados[_ngcontent-%COMP%] {\n    padding: 30px 0;\n  }\n  .cont_proyecto_logo[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n  }\n  .cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #E4E4E4;\n    max-width: 100px;\n    cursor: pointer;\n    position: relative;\n    z-index: 1;\n    transition: 400ms ease;\n    border-radius: 9px;\n  }\n  .cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 9px;\n  }\n  .cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0px;\n    width: 70px;\n    height: 60px;\n    border-radius: 100%;\n    margin: auto;\n    z-index: -1;\n    background: #333663;\n    opacity: 0;\n    filter: blur(26px);\n    transition: 400ms ease;\n  }\n  .cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    transform: scale(1.2) translateY(0px);\n    z-index: 2;\n  }\n  .cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n    opacity: 0.58;\n    bottom: -20px;\n  }\n  .cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    transform: scale(1.05) translateY(-15px);\n    z-index: 2;\n  }\n  .cont_proyecto_logo[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::before {\n    opacity: 0.58;\n    bottom: -10px;\n  }\n  .cont_proyecto_logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n  .holder[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 750px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    padding: 20px 0;\n  }\n  .holder[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.jp-previous, .jp-next)[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .holder[_ngcontent-%COMP%]   .jp-previous[_ngcontent-%COMP%], .holder[_ngcontent-%COMP%]   .jp-next[_ngcontent-%COMP%] {\n    color: #182360;\n    font-weight: 700;\n    font-size: 15px;\n    cursor: pointer;\n  }\n  .holder[_ngcontent-%COMP%]   .jp-previous.jp-disabled[_ngcontent-%COMP%], .holder[_ngcontent-%COMP%]   .jp-next.jp-disabled[_ngcontent-%COMP%] {\n    opacity: 0.5;\n  }\n  .cont_proyecto_eject[_ngcontent-%COMP%] {\n    display: none;\n    width: 100%;\n    grid-template-columns: 1fr 1fr;\n    justify-content: center;\n    width: 100%;\n    align-items: stretch;\n    background: url('bg_pe.jpg'), rgba(10, 16, 45, 0.9215686275);\n    border-radius: 48px 48px 97px 48px;\n    background-blend-mode: multiply;\n    background-size: cover;\n    position: relative;\n    margin: 0 0 40px;\n  }\n  .cont_proyecto_eject[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    left: 10%;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    mix-blend-mode: lighten;\n    max-width: 400px;\n    width: 100%;\n    max-height: 300px;\n    height: 100%;\n    border-radius: 100%;\n    background: rgba(54, 107, 236, 0.3490196078);\n    filter: blur(54px);\n    pointer-events: none;\n  }\n  .cont_proyecto_eject.active[_ngcontent-%COMP%] {\n    display: grid;\n  }\n  .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 40px 100px;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    color: #FFF;\n    align-items: flex-start;\n    justify-content: center;\n  }\n  .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 20px;\n    text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.17);\n    letter-spacing: 0.62em;\n    font-weight: 400;\n  }\n  .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 52px;\n    font-weight: 800;\n    text-transform: uppercase;\n    background: linear-gradient(180deg, #FFFFFF, #FFFFFF, #9297b7);\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    text-shadow: 0px 3px 1px rgba(0, 0, 0, 0.17);\n  }\n  .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%] {\n    font-size: 20px;\n    border-bottom: 1px solid rgba(215, 215, 215, 0.6235294118);\n    font-weight: 700;\n  }\n  .swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n  .info_datos_pe[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 4px;\n    font-size: 18px;\n    font-weight: 300;\n  }\n  .info_datos_pe[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-weight: 700;\n  }\n  .c_slider_pe[_ngcontent-%COMP%] {\n    border-radius: 100px 0px 95px 0;\n    overflow: hidden;\n    max-height: 380px;\n  }\n  .c_slider_pe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    object-fit: cover;\n  }\n  .tabs_proyectos_eject[_ngcontent-%COMP%] {\n    margin: 0 0 40px;\n  }\n  \n  @media screen and (max-width: 1200px) {\n    .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%] {\n      padding: 40px;\n    }\n    .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      font-size: 30px;\n    }\n    .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%] {\n      padding: 0 20px 0 80px;\n      gap: 20px;\n    }\n  }\n  @media screen and (max-width: 1050px) {\n    .c_proyecto_vivienda[_ngcontent-%COMP%]:after {\n      bottom: initial;\n      top: 0;\n    }\n    .act_filtro_mobile[_ngcontent-%COMP%] {\n      display: flex;\n    }\n    .filtro_proyectos[_ngcontent-%COMP%] {\n      display: none;\n      flex-direction: column;\n      position: absolute;\n      z-index: 10;\n      padding: 20px;\n      width: 100%;\n      top: 70px;\n      border-radius: 10px;\n    }\n    .filtro_proyectos[_ngcontent-%COMP%]   .precio[_ngcontent-%COMP%] {\n      max-width: initial;\n    }\n    .cont_filtr_btns[_ngcontent-%COMP%] {\n      border: 0;\n    }\n    .cont_proyecto_eject[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr;\n    }\n    .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      font-size: 32px;\n    }\n    .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%] {\n      gap: 10px;\n    }\n    .swiperPe[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n      max-height: 300px;\n    }\n  }\n  @media screen and (max-width: 768px) {\n    .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%] {\n      padding: 20px;\n      min-height: 340px;\n    }\n    .cont_proyecto_eject[_ngcontent-%COMP%]   .info_pe[_ngcontent-%COMP%]   .lugar[_ngcontent-%COMP%] {\n      font-size: 18px;\n    }\n    .c_futuros_proyectos[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr;\n      min-height: initial;\n    }\n    .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%] {\n      padding: 80px 20px 20px;\n      min-height: 380px;\n    }\n    .swiperFuturos[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%], .swiperFuturos[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n      top: 13%;\n    }\n    .cont_proyecto_eject[_ngcontent-%COMP%]:before {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 480px) {\n    .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n      font-size: 16px;\n    }\n    .c_futuros_proyectos[_ngcontent-%COMP%]   .info_fp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      font-size: 26px;\n    }\n    .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      font-size: 16px;\n    }\n    .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      font-size: 30px;\n    }\n    .card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%] {\n      padding: 30px 20px 10px;\n    }\n  }\n/*# sourceMappingURL=proyectos_vivienda.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpdmllbmRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzRkFBc0Y7SUFDdEYsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWix5Q0FBbUc7SUFDbkcsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTiw4Q0FBd0c7SUFDeEcsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsUUFBUTtJQUNSLGFBQWE7SUFDYixZQUFZO0lBQ1osU0FBUztJQUNULHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHFEQUFxRDtJQUNyRCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViw0QkFBNEI7RUFDOUI7RUFFQTtJQUNFLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsU0FBUztFQUNYO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNEQUFzRDtJQUN0RCxtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lB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YTtNQUNiLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsZUFBZTtJQUNqQjtJQUNBO01BQ0UsMEJBQTBCO01BQzFCLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsdUJBQXVCO01BQ3ZCLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsUUFBUTtJQUNWO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7RUFDRjtFQUNBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSx1QkFBdUI7SUFDekI7RUFDRjtFQUFDLGlEQUFpRCIsImZpbGUiOiJ2aXZpZW5kYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNfcHJveWVjdG9fdml2aWVuZGEge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjMzLCAyMzcsIDI0NywgMCkgMCUsICNFOEVCRjEgNzIuNiUpLCAjRkZGRkZGO1xuICAgIG1pbi1oZWlnaHQ6IDM0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc19wcm95ZWN0b192aXZpZW5kYTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogLTJweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9wcm95ZWN0b3Nfdml2aWVuZGEvY3VydmFfYmcuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTQ1cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIC5jX3Byb3llY3RvX3ZpdmllbmRhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmNfcHJveWVjdG9fdml2aWVuZGE6OmJlZm9yZSwgLmNfcHJveWVjdG9fdml2aWVuZGE6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9wcm95ZWN0b3Nfdml2aWVuZGEvcHVudG9zLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuICAuY19wcm95ZWN0b192aXZpZW5kYTphZnRlciB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogaW5pdGlhbDtcbiAgICB0b3A6IGluaXRpYWw7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgXG4gIC5maWx0cm9fcHJveWVjdG9zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAyMHB4IC0zcHggcmdiYSg1MSwgNjYsIDExOSwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMzlweDtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBtYXgtd2lkdGg6IDkyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5maWx0cm9fcHJveWVjdG9zIHNlbGVjdCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RBREFEQTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuZmlsdHJvX3Byb3llY3RvcyAucHJlY2lvIHtcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xuICB9XG4gIFxuICAuc19jYXJkc19wcm95ZWN0b3Mge1xuICAgIHBhZGRpbmc6IDBweCAwIDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MHB4KTtcbiAgfVxuICBcbiAgLmNfY2FyZHNfcHJveWVjdG9zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzIwcHgsIDFmcikpO1xuICAgIGdhcDogMjBweDtcbiAgfVxuICBcbiAgLmNhcmRfcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAxOXB4IDQxcHggLTE4cHggcmdiYSgzNSwgNTYsIDk4LCAwLjQ1KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICB9XG4gIC5jYXJkX3AgcGljdHVyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtaGVpZ2h0OiAyMTlweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmNhcmRfcCBwaWN0dXJlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5jYXJkX3AgLnRhZ19zdGF0ZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIC5jYXJkX3AgLmJ0bnNfaWNvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ncmFkX2F6dWxfb3NjKTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5jYXJkX3AgLmJ0bnNfaWNvbnM6OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxNjUsIDE2NSk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgLmNhcmRfcCAuYnRuc19pY29ucyBhIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmNhcmRfcCAuYnRuc19pY29ucyBhOmhvdmVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWMyKTtcbiAgfVxuICAuY2FyZF9wIC5idG5zX2ljb25zIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbiAgLmNhcmRfcCAuYnRuc19pY29ucyBzcGFuIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jYXJkX3AgLm5hbWVfcHJveWVjdG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTNCODU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDU0cHg7XG4gIH1cbiAgLmNhcmRfcCAubmFtZV9wcm95ZWN0byBwaWN0dXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA4N3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNGRkZGRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuICAuY2FyZF9wIC5uYW1lX3Byb3llY3RvIHBpY3R1cmUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gIH1cbiAgLmNhcmRfcCAubmFtZV9wcm95ZWN0byBkaXYge1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIC5jYXJkX3AgLmRhdG9zX3Byb3llY3RvIHtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWMyKTtcbiAgfVxuICAuY2FyZF9wIC5kYXRvc19wcm95ZWN0byBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLmNhcmRfcCAuZGF0b3NfcHJveWVjdG8gaDQge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5jYXJkX3AgLmRhdG9zX3Byb3llY3RvIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuY2FyZF9wIC5mcmFuamFfcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuNSkgMCUsICNFRUVFRUUgNDguOTYlLCByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuNSkgMTAwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5jYXJkX3AgLmZyYW5qYV9wIHNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jMik7XG4gIH1cbiAgLmNhcmRfcCAuY3Rhc19wcm95ZWN0b3Mge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmNhcmRfcCAuYnRuX3doYXRzYXBwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jMik7XG4gIH1cbiAgLmNhcmRfcCAuYnRuX3doYXRzYXBwOmhvdmVyIHtcbiAgICBjb2xvcjogIzA2MGIyOTtcbiAgfVxuICAuY2FyZF9wIC5idG5fd2hhdHNhcHAgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzVGRkM3QiAwJSwgIzI2RDA0NCAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuY2FyZF9wIC5idG4ge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICB9XG4gIFxuICAuYWN0X2ZpbHRyb19tb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWMyKTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXJfZmlsdHJvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5jb250X2ZpbHRyX2J0bnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0RBREFEQTtcbiAgfVxuICBcbiAgLnNfZnV0dXJvc19wcm95ZWN0b3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA0NjBweDtcbiAgfVxuICAuc19mdXR1cm9zX3Byb3llY3Rvczo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9wcm95ZWN0b3Nfdml2aWVuZGEvY3VydmFfc3VwLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICB0b3A6IC0ycHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5zX2Z1dHVyb3NfcHJveWVjdG9zOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaXNlbm8vcHJveWVjdG9zX3ZpdmllbmRhL2N1cnZhX2luZi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgYm90dG9tOiAtMnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICBcbiAgLmNfZnV0dXJvc19wcm95ZWN0b3Mge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiA0NjBweDtcbiAgfVxuICAuY19mdXR1cm9zX3Byb3llY3Rvczo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU0LCAxMDcsIDIzNiwgMC4zNSk7XG4gICAgZmlsdGVyOiBibHVyKDU0cHgpO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtaXgtYmxlbmQtbW9kZTogbGlnaHRlbjtcbiAgfVxuICAuY19mdXR1cm9zX3Byb3llY3RvcyAuaW5mb19mcCB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaXNlbm8vcHJveWVjdG9zX3ZpdmllbmRhL2JnX2Z1dHVyb3MuanBnXCIpLCBsaW5lYXItZ3JhZGllbnQoMTA3LjA4ZGVnLCAjNDU2NUIzIDAlLCAjMkI0NzhCIDMxLjExJSwgIzEzMjAzRSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBnYXA6IDMwcHg7XG4gIH1cbiAgLmNfZnV0dXJvc19wcm95ZWN0b3MgLmluZm9fZnA6OmJlZm9yZSwgLmNfZnV0dXJvc19wcm95ZWN0b3MgLmluZm9fZnA6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9wcm95ZWN0b3Nfdml2aWVuZGEvcHVudG9zLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBsZWZ0OiAzJTtcbiAgICB0b3A6IDIwJTtcbiAgfVxuICAuY19mdXR1cm9zX3Byb3llY3RvcyAuaW5mb19mcDphZnRlciB7XG4gICAgcmlnaHQ6IDMlO1xuICAgIGJvdHRvbTogMjAlO1xuICAgIHRvcDogaW5pdGlhbDtcbiAgICBsZWZ0OiBpbml0aWFsO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgLmNfZnV0dXJvc19wcm95ZWN0b3MgLmluZm9fZnAgaDUge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjM2NWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNGRkVEMDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLmNfZnV0dXJvc19wcm95ZWN0b3MgLmluZm9fZnAgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgfVxuICAuY19mdXR1cm9zX3Byb3llY3RvcyAuaW1nX2ZwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmNfZnV0dXJvc19wcm95ZWN0b3MgLmltZ19mcCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICBcbiAgLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgYmFja2dyb3VuZDogIzE4MjM2MDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRkFGQUZBO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuICBcbiAgLnN3aXBlci1idXR0b24tbmV4dDphZnRlciwgLnN3aXBlci1idXR0b24tcHJldjphZnRlciB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICNGRkY7XG4gIH1cbiAgXG4gIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgYm90dG9tOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnN3aXBlci1wYWdpbmF0aW9uIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHRyYW5zaXRpb246IDQwMG1zIGVhc2U7XG4gIH1cbiAgLnN3aXBlci1wYWdpbmF0aW9uIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICBcbiAgLnN3aXBlci1idXR0b24tcHJldiwgLnN3aXBlci1ydGwgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgbGVmdDogMjVweDtcbiAgfVxuICBcbiAgLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1ydGwgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgcmlnaHQ6IDI1cHg7XG4gIH1cbiAgXG4gIC5zX3Byb3llY3Rvc19lamVjdXRhZG9zIHtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gIH1cbiAgXG4gIC5jb250X3Byb3llY3RvX2xvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgfVxuICAuY29udF9wcm95ZWN0b19sb2dvIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTRFNEU0O1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zaXRpb246IDQwMG1zIGVhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICB9XG4gIC5jb250X3Byb3llY3RvX2xvZ28gYSBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgfVxuICAuY29udF9wcm95ZWN0b19sb2dvIGE6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgei1pbmRleDogLTE7XG4gICAgYmFja2dyb3VuZDogIzMzMzY2MztcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYmx1cigyNnB4KTtcbiAgICB0cmFuc2l0aW9uOiA0MDBtcyBlYXNlO1xuICB9XG4gIC5jb250X3Byb3llY3RvX2xvZ28gYTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5jb250X3Byb3llY3RvX2xvZ28gYTpob3Zlcjo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAwLjU4O1xuICAgIGJvdHRvbTogLTIwcHg7XG4gIH1cbiAgLmNvbnRfcHJveWVjdG9fbG9nbyBhLmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIC5jb250X3Byb3llY3RvX2xvZ28gYS5hY3RpdmU6OmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMC41ODtcbiAgICBib3R0b206IC0xMHB4O1xuICB9XG4gIC5jb250X3Byb3llY3RvX2xvZ28gYSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIFxuICAuaG9sZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgfVxuICAuaG9sZGVyIGE6bm90KC5qcC1wcmV2aW91cywgLmpwLW5leHQpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ob2xkZXIgLmpwLXByZXZpb3VzLCAuaG9sZGVyIC5qcC1uZXh0IHtcbiAgICBjb2xvcjogIzE4MjM2MDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmhvbGRlciAuanAtcHJldmlvdXMuanAtZGlzYWJsZWQsIC5ob2xkZXIgLmpwLW5leHQuanAtZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICBcbiAgLmNvbnRfcHJveWVjdG9fZWplY3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGlzZW5vL3Byb3llY3Rvc192aXZpZW5kYS9iZ19wZS5qcGdcIiksIHJnYmEoMTAsIDE2LCA0NSwgMC45MjE1Njg2Mjc1KTtcbiAgICBib3JkZXItcmFkaXVzOiA0OHB4IDQ4cHggOTdweCA0OHB4O1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIDAgNDBweDtcbiAgfVxuICAuY29udF9wcm95ZWN0b19lamVjdDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwJTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtaXgtYmxlbmQtbW9kZTogbGlnaHRlbjtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNTQsIDEwNywgMjM2LCAwLjM0OTAxOTYwNzgpO1xuICAgIGZpbHRlcjogYmx1cig1NHB4KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICAuY29udF9wcm95ZWN0b19lamVjdC5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cbiAgLmNvbnRfcHJveWVjdG9fZWplY3QgLmluZm9fcGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA0MHB4IDEwMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuY29udF9wcm95ZWN0b19lamVjdCAuaW5mb19wZSBoNCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICAuY29udF9wcm95ZWN0b19lamVjdCAuaW5mb19wZSBoMiB7XG4gICAgZm9udC1zaXplOiA1MnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkZGRkZGLCAjRkZGRkZGLCAjOTI5N2I3KTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRleHQtc2hhZG93OiAwcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTcpO1xuICB9XG4gIC5jb250X3Byb3llY3RvX2VqZWN0IC5pbmZvX3BlIC5sdWdhciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxNSwgMjE1LCAyMTUsIDAuNjIzNTI5NDExOCk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgLnN3aXBlclBlIC5zd2lwZXItc2xpZGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLmluZm9fZGF0b3NfcGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiA0cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgLmluZm9fZGF0b3NfcGUgYiB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgLmNfc2xpZGVyX3BlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweCAwcHggOTVweCAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMzgwcHg7XG4gIH1cbiAgLmNfc2xpZGVyX3BlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgXG4gIC50YWJzX3Byb3llY3Rvc19lamVjdCB7XG4gICAgbWFyZ2luOiAwIDAgNDBweDtcbiAgfVxuICBcbiAgLyogUkVTUE9OSVNJVkUgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNvbnRfcHJveWVjdG9fZWplY3QgLmluZm9fcGUge1xuICAgICAgcGFkZGluZzogNDBweDtcbiAgICB9XG4gICAgLmNfZnV0dXJvc19wcm95ZWN0b3MgLmluZm9fZnAgaDIge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbiAgICAuY19mdXR1cm9zX3Byb3llY3RvcyAuaW5mb19mcCB7XG4gICAgICBwYWRkaW5nOiAwIDIwcHggMCA4MHB4O1xuICAgICAgZ2FwOiAyMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgICAuY19wcm95ZWN0b192aXZpZW5kYTphZnRlciB7XG4gICAgICBib3R0b206IGluaXRpYWw7XG4gICAgICB0b3A6IDA7XG4gICAgfVxuICAgIC5hY3RfZmlsdHJvX21vYmlsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuZmlsdHJvX3Byb3llY3RvcyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdG9wOiA3MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgLmZpbHRyb19wcm95ZWN0b3MgLnByZWNpbyB7XG4gICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gICAgfVxuICAgIC5jb250X2ZpbHRyX2J0bnMge1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgICAuY29udF9wcm95ZWN0b19lamVjdCB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gICAgLmNvbnRfcHJveWVjdG9fZWplY3QgLmluZm9fcGUgaDIge1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cbiAgICAuY29udF9wcm95ZWN0b19lamVjdCAuaW5mb19wZSB7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgfVxuICAgIC5zd2lwZXJQZSAuc3dpcGVyLXNsaWRlIHtcbiAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jb250X3Byb3llY3RvX2VqZWN0IC5pbmZvX3BlIHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAzNDBweDtcbiAgICB9XG4gICAgLmNvbnRfcHJveWVjdG9fZWplY3QgLmluZm9fcGUgLmx1Z2FyIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLmNfZnV0dXJvc19wcm95ZWN0b3Mge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xuICAgIH1cbiAgICAuY19mdXR1cm9zX3Byb3llY3RvcyAuaW5mb19mcCB7XG4gICAgICBwYWRkaW5nOiA4MHB4IDIwcHggMjBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDM4MHB4O1xuICAgIH1cbiAgICAuc3dpcGVyRnV0dXJvcyAuc3dpcGVyLWJ1dHRvbi1uZXh0LCAuc3dpcGVyRnV0dXJvcyAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICAgIHRvcDogMTMlO1xuICAgIH1cbiAgICAuY29udF9wcm95ZWN0b19lamVjdDpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAuY19mdXR1cm9zX3Byb3llY3RvcyAuaW5mb19mcCBoNSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5jX2Z1dHVyb3NfcHJveWVjdG9zIC5pbmZvX2ZwIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG4gICAgLmNhcmRfcCAuZGF0b3NfcHJveWVjdG8gaDMge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAuY2FyZF9wIC5kYXRvc19wcm95ZWN0byBoNCB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICAgIC5jYXJkX3AgLmRhdG9zX3Byb3llY3RvIHtcbiAgICAgIHBhZGRpbmc6IDMwcHggMjBweCAxMHB4O1xuICAgIH1cbiAgfS8qIyBzb3VyY2VNYXBwaW5nVVJMPXByb3llY3Rvc192aXZpZW5kYS5jc3MubWFwICovIl19 */"]
});

/***/ }),

/***/ 71482:
/*!**********************************************************************!*\
  !*** ./src/app/modules/projects/vivienda/vivienda-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViviendaRoutingModule": () => (/* binding */ ViviendaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_guards_vivienda_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/vivienda.guard */ 77470);
/* harmony import */ var _pages_vivienda_vivienda_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/vivienda/vivienda.component */ 15469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _pages_vivienda_vivienda_component__WEBPACK_IMPORTED_MODULE_1__.ViviendaComponent,
        canActivate: [src_app_core_guards_vivienda_guard__WEBPACK_IMPORTED_MODULE_0__.ViviendaGuard]
    }
];
class ViviendaRoutingModule {
}
ViviendaRoutingModule.ɵfac = function ViviendaRoutingModule_Factory(t) { return new (t || ViviendaRoutingModule)(); };
ViviendaRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ViviendaRoutingModule });
ViviendaRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ViviendaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 25500:
/*!**************************************************************!*\
  !*** ./src/app/modules/projects/vivienda/vivienda.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViviendaModule": () => (/* binding */ ViviendaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _vivienda_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vivienda-routing.module */ 71482);
/* harmony import */ var _pages_vivienda_vivienda_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/vivienda/vivienda.component */ 15469);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class ViviendaModule {
}
ViviendaModule.ɵfac = function ViviendaModule_Factory(t) { return new (t || ViviendaModule)(); };
ViviendaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ViviendaModule });
ViviendaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _vivienda_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViviendaRoutingModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentSharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ViviendaModule, { declarations: [_pages_vivienda_vivienda_component__WEBPACK_IMPORTED_MODULE_1__.ViviendaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _vivienda_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViviendaRoutingModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentSharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule] }); })();


/***/ }),

/***/ 20221:
/*!********************************************************!*\
  !*** ./src/app/shared/services/api/project.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectService": () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);




const {
  api_url: API_URL
} = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment;
class ProjectService {
  constructor(_http) {
    this._http = _http;
  }
  /**
   *
   * @param tipo
   * @param ciudad
   * @param tipo_proyecto
   * @returns Promise<any>
   */


  getProyectosByTipo(tipo, ciudad, tipo_proyecto) {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getProyectosByTipo?tipo=${tipo}&ciudad=${ciudad}&tipo_proyecto=${tipo_proyecto}`;
      return _this._http.get(url).toPromise().then();
    })();
  }
  /**
   *
   * @param tipo
   * @returns Promise<any>
   */


  getProyectoByUrl(slug) {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getProyectoByUrl?friendly_url=${slug}`;
      return _this2._http.get(url).toPromise().then();
    })();
  }
  /**
   *
   * @param valorProyecto
   * @param porcentaje
   * @param cuotasinicialfinanciar
   * @param plazo
   * @param valorafinanciaranios
   * @returns Promise<any>
   */


  getCalculoPorcentaje(valorProyecto, porcentaje, cuotasinicialfinanciar, plazo, valorafinanciaranios) {
    var _this3 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getCalculoPorcentaje?valorProyecto=${valorProyecto}&porcentaje=${porcentaje}&cuotasinicialfinanciar=${cuotasinicialfinanciar}&plazo=${plazo}&valorafinanciaranios=${valorafinanciaranios}`;
      return _this3._http.get(url).toPromise().then();
    })();
  }
  /**
   *
   * @param saldocuota
   * @param numerocuota
   * @returns Promise<any>
   */


  getCalculoCuota(saldocuota, numerocuota) {
    var _this4 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getCalculoCuota?cuota=${numerocuota}&saldocuotainicial=${saldocuota}`;
      return _this4._http.get(url).toPromise().then();
    })();
  }
  /**
   *
   * @param cuota
   * @param valorafinanciar
   * @param porcentajeefectivoanual
   * @returns Promise<any>
   */


  getPlazoanios(cuota, valorafinanciar) {
    var _this5 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getPlazoanios?cuota=${cuota}&valorafinanciar=${valorafinanciar}`;
      return _this5._http.get(url).toPromise().then();
    })();
  }
  /**
   *
   * @param data
   * @returns Promise<any>
   */


  setCalculadoraForm(data) {
    const url = `${API_URL}v1/setCalculadoraForm`;
    return this._http.post(url, JSON.stringify(data)).toPromise().then();
  }

}

ProjectService.ɵfac = function ProjectService_Factory(t) {
  return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

ProjectService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ProjectService,
  factory: ProjectService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 80655:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/functions/seo.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoService": () => (/* binding */ SeoService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _api_page_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/page.service */ 85480);




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

};
;
//# sourceMappingURL=500.js.map
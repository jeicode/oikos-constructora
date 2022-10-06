"use strict";
(self["webpackChunkoikos_constructora"] = self["webpackChunkoikos_constructora"] || []).push([["src_app_modules_home_home_module_ts"],{

/***/ 4601:
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 4032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4882:
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 4601);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 4032);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/angular */ 9737);
/* harmony import */ var src_app_shared_directives_default_img_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directives/default-img.directive */ 5425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        swiper_angular__WEBPACK_IMPORTED_MODULE_6__.SwiperModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        swiper_angular__WEBPACK_IMPORTED_MODULE_6__.SwiperModule,
        src_app_shared_directives_default_img_directive__WEBPACK_IMPORTED_MODULE_2__.DefaultImgDirective] }); })();


/***/ }),

/***/ 4032:
/*!*********************************************************************!*\
  !*** ./src/app/modules/home/pages/home-page/home-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ 9019);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_api_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api/project.service */ 221);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 5480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/angular */ 9737);
/* harmony import */ var _shared_directives_default_img_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/directives/default-img.directive */ 5425);











function HomePageComponent_4_ng_template_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const z_r12 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r6.BASE_URL + (z_r12 == null ? null : z_r12.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("title", z_r12 == null ? null : z_r12.title)("alt", z_r12 == null ? null : z_r12.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](z_r12 == null ? null : z_r12.nombre);
  }
}

function HomePageComponent_4_ng_template_0_h2_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2", 52)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Desde");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r4 == null ? null : i_r4.valor_proyecto, " ");
  }
}

function HomePageComponent_4_ng_template_0_picture_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "picture", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r8.BASE_URL + i_r4.imagen[0], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", i_r4.imagen_alt[0])("title", i_r4.imagen_title[0]);
  }
}

function HomePageComponent_4_ng_template_0_ng_template_25_picture_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "picture", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r15.BASE_URL + i_r4.galeria[0].field_content, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", i_r4.galeria[0].alt)("title", i_r4.galeria[0].title);
  }
}

function HomePageComponent_4_ng_template_0_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HomePageComponent_4_ng_template_0_ng_template_25_picture_0_Template, 2, 3, "picture", 55);
  }

  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r4.galeria && i_r4.galeria.length > 0);
  }
}

function HomePageComponent_4_ng_template_0_picture_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "picture", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r11.BASE_URL + i_r4.galeria[1].field_content, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", i_r4.galeria[1].alt)("title", i_r4.galeria[1].title);
  }
}

const _c0 = function (a0) {
  return {
    "background-color": a0
  };
};

function HomePageComponent_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 33)(4, "div", 34)(5, "aside", 35)(6, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 37)(9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, HomePageComponent_4_ng_template_0_div_11_Template, 4, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 40)(14, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h1", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, HomePageComponent_4_ng_template_0_h2_20_Template, 5, 1, "h2", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, HomePageComponent_4_ng_template_0_picture_24_Template, 2, 3, "picture", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, HomePageComponent_4_ng_template_0_ng_template_25_Template, 1, 1, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, HomePageComponent_4_ng_template_0_picture_27_Template, 2, 3, "picture", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](26);

    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r5.BASE_URL + (i_r4 == null ? null : i_r4.logo_proyecto), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](18, _c0, i_r4 == null ? null : i_r4.color_primario));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r4 == null ? null : i_r4.titulo_proyecto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](12, 14, i_r4 == null ? null : i_r4.zonas, 0, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](20, _c0, i_r4 == null ? null : i_r4.color_secundario));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r4 == null ? null : i_r4.estado_proyecto, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r4 == null ? null : i_r4.field_content);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r4 == null ? null : i_r4.descripcion_banner_home);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r4 == null ? null : i_r4.valor_proyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", i_r4 == null ? null : i_r4.link_cta_banner);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r4 == null ? null : i_r4.texto_cta_banner, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r4.imagen[0])("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r4.galeria && i_r4.galeria.length > 1);
  }
}

function HomePageComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HomePageComponent_4_ng_template_0_Template, 28, 22, "ng-template", 29);
  }
}

function HomePageComponent_div_15_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", i_r20 == null ? null : i_r20.vista360, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function HomePageComponent_div_15_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", i_r20 == null ? null : i_r20.url_waze, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

const _c1 = function (a1) {
  return ["/proyecto", a1];
};

function HomePageComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 58)(1, "picture")(2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, HomePageComponent_div_15_a_5_Template, 2, 1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, HomePageComponent_div_15_a_6_Template, 2, 1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h2", 63)(9, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 65)(14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h4")(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Desde");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " Aplica subsidio de vivienda VIS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 68)(25, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " contactar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "ver proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const i_r20 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](17, _c0, i_r20 == null ? null : i_r20.color_secundario));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r20 == null ? null : i_r20.estado_proyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r20 == null ? null : i_r20.vista360);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r20 == null ? null : i_r20.url_waze);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.BASE_URL + (i_r20 == null ? null : i_r20.imagen_principal_proyecto), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", i_r20 == null ? null : i_r20.alt_principal)("title", i_r20 == null ? null : i_r20.title_principal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](19, _c0, i_r20 == null ? null : i_r20.color_primario));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.BASE_URL + (i_r20 == null ? null : i_r20.logo_proyecto), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", i_r20 == null ? null : i_r20.alt_logo)("title", i_r20 == null ? null : i_r20.title_logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r20 == null ? null : i_r20.titulo_proyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", i_r20 == null ? null : i_r20.zona_proyecto, " / ", i_r20 == null ? null : i_r20.ubicacion_proyecto, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r20 == null ? null : i_r20.valor_proyecto_formato, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", i_r20 == null ? null : i_r20.api_wsp, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](21, _c1, i_r20 == null ? null : i_r20.url_amigable));
  }
}

function HomePageComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 74)(1, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r25 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.BASE_URL + (i_r25 == null ? null : i_r25.imagen[0]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", i_r25 == null ? null : i_r25.imagen_alt)("title", i_r25 == null ? null : i_r25.imagen_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", i_r25 == null ? null : i_r25.descripcion_item_por_que_elegirnos_home, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
  }
}

function HomePageComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 77)(1, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const i_r26 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r3.BASE_URL + (i_r26 == null ? null : i_r26.imagen[0]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", i_r26 == null ? null : i_r26.imagen_alt[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r26 == null ? null : i_r26.field_content, " ");
  }
}

swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination]);
class HomePageComponent {
  constructor(projectService, pageService) {
    this.projectService = projectService;
    this.pageService = pageService;
    this.housingProjects = [];
    this.BASE_URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.base_url; // collections

    this.bannersHome = [];
    this.itemsWhyChooseUs = [];
    this.itemsPlanet = [];
    this.config = {
      autoplay: {
        delay: 10000
      },
      parallax: true,
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    };
  }

  ngOnInit() {
    this.init();
    this.getProjectsHome();
  }

  init() {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tasks = [() => _this.getBannersHome(), () => _this.getProjectsHome(), () => _this.getData(), () => _this.getCollections()];

      for (const task of tasks) {
        yield task();
      }
    })();
  }

  getBannersHome() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const bannersHome = yield _this2.pageService.getBannersHome('titulo banner home', 'banner_home');
      if (bannersHome) _this2.bannersHome = bannersHome;
    })();
  }

  getData() {
    var _this3 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this3.pageService.getPageContent('/');
      if (data) _this3.data = data;
    })();
  }

  getCollections() {
    var _this4 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const itemsWhyChooseUs = yield _this4.pageService.getElementsContent('titulo item por que elegirnos home', 'item_elegirnos_home');
      if (itemsWhyChooseUs) _this4.itemsWhyChooseUs = itemsWhyChooseUs;
      const itemsPlanet = yield _this4.pageService.getElementsContent('titulo seccion planeta home', 'item_seccion_planeta_home');
      if (itemsPlanet) _this4.itemsPlanet = itemsPlanet;
    })();
  }

  getProjectsHome() {
    var _this5 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const housingProjects = yield _this5.projectService.getProyectosByTipo('1');
      if (housingProjects) _this5.housingProjects = housingProjects;
    })();
  }

}

HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
  return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_api_project_service__WEBPACK_IMPORTED_MODULE_3__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_4__.PageService));
};

HomePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: HomePageComponent,
  selectors: [["app-home-page"]],
  decls: 39,
  vars: 15,
  consts: [[1, "cuerpo"], [1, "s_home_hero"], [1, "swiper", "swiperHomeHero"], [3, "config"], [4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "bg_grad"], [1, "s_cards_proyectos"], [1, "title_section", "al-center"], [1, "cnt_central"], [1, "c_cards_proyectos"], ["class", "card_p", 4, "ngFor", "ngForOf"], [1, "s_porque_elegir"], [1, "c_porque_elegir"], [1, "title_section", "al-center", 3, "innerHtml"], [1, "cnt_items_elegir"], ["class", "item_elegir", 4, "ngFor", "ngForOf"], [1, "s_edge"], [1, "c_edge"], [1, "cnt_edge"], [3, "innerHtml"], [1, "txt_edge_cnt"], [1, "btn", 3, "routerLink"], [1, "fas", "fa-chevron-right"], [1, "cnt_icons_edge"], ["class", "icon_edge", 4, "ngFor", "ngForOf"], ["width", "107", "height", "46", 1, "logo_edge", 3, "src", "alt"], ["width", "414", "height", "284", 1, "img_pri_edge", 3, "src", "alt"], [1, "hashtag"], ["swiperSlide", ""], [1, "swiper-slide"], ["data-swiper-parallax-opacity", "0.6", 1, "bg_img_h_hero"], ["width", "1920", "height", "700", "src", "/assets/images/diseno/home/img_bg_her.jpg", 1, "bg_img_h_hero"], [1, "cnt_h_hero"], [1, "desc_txt_hero"], ["data-swiper-parallax", "-300", "data-swiper-parallax-duration", "800", 1, "aside_prjct"], ["defaultImg", "", "width", "200", "height", "200", 3, "src"], [1, "dt_prjct", 3, "ngStyle"], [1, "place_prjct"], ["class", "item_prjct", 4, "ngFor", "ngForOf"], ["data-swiper-parallax", "-600", "data-swiper-parallax-duration", "800", 1, "datos_info_prjct"], ["data-swiper-parallax-opacity", "0.6", "data-swiper-parallax", "-100", "data-swiper-parallax-duration", "800", 1, "tag", 3, "ngStyle"], ["data-swiper-parallax-opacity", "0.6", "data-swiper-parallax", "-300", "data-swiper-parallax-duration", "800"], ["data-swiper-parallax-opacity", "0.6", "data-swiper-parallax", "-500", "data-swiper-parallax-duration", "800"], ["data-swiper-parallax-opacity", "0.6", "data-swiper-parallax", "-700", "data-swiper-parallax-duration", "800", 4, "ngIf"], ["data-swiper-parallax-opacity", "0.6", "data-swiper-parallax", "-900", "data-swiper-parallax-duration", "800", "href", "", 1, "btn", 3, "routerLink"], [1, "grand_img_h_hero"], ["class", "grand_img_hero1", "data-swiper-parallax-duration", "600", "data-swiper-parallax-scale", "0.15", "data-swiper-parallax-opacity", "0.5", 4, "ngIf", "ngIfElse"], ["mainImage", ""], ["class", "grand_img_hero_mini", "data-swiper-parallax-duration", "700", "data-swiper-parallax-scale", "0.15", "data-swiper-parallax-opacity", "0.5", 4, "ngIf"], [1, "item_prjct"], ["defaultImg", "", "width", "28", "height", "28", 3, "src", "title", "alt"], ["data-swiper-parallax-opacity", "0.6", "data-swiper-parallax", "-700", "data-swiper-parallax-duration", "800"], ["data-swiper-parallax-duration", "600", "data-swiper-parallax-scale", "0.15", "data-swiper-parallax-opacity", "0.5", 1, "grand_img_hero1"], ["width", "516", "height", "454", 3, "src", "alt", "title"], ["class", "grand_img_hero1", "data-swiper-parallax-duration", "600", "data-swiper-parallax-scale", "0.15", "data-swiper-parallax-opacity", "0.5", 4, "ngIf"], ["data-swiper-parallax-duration", "700", "data-swiper-parallax-scale", "0.15", "data-swiper-parallax-opacity", "0.5", 1, "grand_img_hero_mini"], ["width", "204", "height", "137", 3, "src", "alt", "title"], [1, "card_p"], [1, "tag_state", 3, "ngStyle"], [1, "btns_icons"], ["target", "_blank", "class", "btn_icon", 3, "href", 4, "ngIf"], ["width", "350", "height", "219", "defaultImg", "", 3, "src", "alt", "title"], [1, "name_proyecto", 3, "ngStyle"], ["width", "87", "height", "87", "defaultImg", "", 3, "src", "alt", "title"], [1, "datos_proyecto"], [1, "franja_p"], ["width", "20", "height", "20", "src", "https://paxzupruebas.com/maquetas/oikos_constructora/nueva/images/diseno/proyectos_vivienda/icono_proyecto.svg", "alt", ""], [1, "ctas_proyectos"], ["target", "_blank", 1, "btn_whatsapp", 3, "href"], [1, "fab", "fa-whatsapp"], ["target", "_blank", 1, "btn_icon", 3, "href"], ["src", "assets/images/diseno/proyectos_vivienda/icon_360.svg", "width", "20", "height", "20"], [1, "fas", "fa-map-marker-alt"], [1, "item_elegir"], ["width", "75", "height", "75", 3, "src", "alt", "title"], [1, "txt_elegir", 3, "innerHtml"], [1, "icon_edge"], ["width", "50", "height", "50", 3, "src", "alt"], ["for", ""]],
  template: function HomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "body", 0)(1, "section", 1)(2, "div", 2)(3, "swiper", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HomePageComponent_4_Template, 1, 0, null, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6)(7, "section", 7)(8, "h2", 8)(9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Proyectos de");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Vivienda ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9)(14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, HomePageComponent_div_15_Template, 30, 23, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "section", 12)(17, "div", 9)(18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "h2", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, HomePageComponent_div_21_Template, 4, 4, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "section", 17)(23, "div", 9)(24, "div", 18)(25, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "h2", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 21)(28, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, HomePageComponent_div_33_Template, 5, 3, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "img", 26)(36, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("config", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.bannersHome);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.housingProjects);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", ctx.data == null ? null : ctx.data.titulo_por_que_elegir, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.itemsWhyChooseUs);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", ctx.data == null ? null : ctx.data.titulo_seccion_para_el_planeta, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", ctx.data == null ? null : ctx.data.link_boton_seccion_para_el_planeta);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.data == null ? null : ctx.data.texto_boton_seccion_para_el_planeta, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.subtitulo_seccion_para_el_planeta, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.itemsPlanet);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.BASE_URL + (ctx.data == null ? null : ctx.data.logo_seccion_para_el_planeta), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx.data == null ? null : ctx.data.logo_seccion_para_el_planeta_alt);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.BASE_URL + (ctx.data == null ? null : ctx.data.imagen_seccion_para_el_planeta), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", ctx.data == null ? null : ctx.data.imagen_seccion_para_el_planeta_alt);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.hashtag_seccion_para_el_planeta);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, swiper_angular__WEBPACK_IMPORTED_MODULE_9__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_9__.SwiperSlideDirective, _shared_directives_default_img_directive__WEBPACK_IMPORTED_MODULE_5__.DefaultImgDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.SlicePipe],
  styles: [".bg_grad[_ngcontent-%COMP%] {\n    background: linear-gradient(to top, #F0F2F7, #ffffff, #EEF1F9);\n}\n\n.c_edge[_ngcontent-%COMP%] {\n    background: #FFFFFF;\n    box-shadow: 0px 102px 24px -108px rgba(26, 65, 229, 0.25), 0px 20px 31px -14px rgba(68, 83, 166, 0.25);\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    position: relative;\n    z-index: 2;\n    max-width: 1050px;\n    margin: 0 auto;\n}\n\n.c_edge[_ngcontent-%COMP%] > picture[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n\n.logo_edge[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 1;\n    top: 20px;\n    right: 10px;\n    background-color: #FFF;\n    padding: 4px;\n    border-radius: 0 20px 0 20px;\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    max-width: 100px;\n    height: -moz-fit-content;\n    height: fit-content;\n}\n\n.img_pri_edge[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.hashtag[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 30px;\n    left: 0px;\n    background-color: #66DC2E;\n    font-size: 18px;\n    padding: 5px 10px;\n    font-weight: 600;\n}\n\n.cnt_edge[_ngcontent-%COMP%] {\n    padding: 40px;\n}\n\n[_nghost-%COMP%]     .cnt_edge h2 p {\n    font-size: 50px;\n    text-align: left;\n    line-height: 1;\n    max-width: 368px;\n    color: #253489;\n    font-weight: 800;\n    margin: 0 0 20px;\n}\n\n[_nghost-%COMP%]     .cnt_edge h2 p span {\n    display: inline-block;\n    line-height: 1;\n    font-size: 24px;\n    font-weight: 400;\n}\n\n.txt_edge_cnt[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 18px;\n    color: #253489;\n}\n\n.cnt_icons_edge[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 30px;\n    align-items: center;\n    align-content: center;\n    margin: 20px 0 0px;\n}\n\n.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.cnt_icons_edge[_ngcontent-%COMP%]   .icon_edge[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: #182360;\n}\n\n.s_edge[_ngcontent-%COMP%] {\n    padding: 0 0 100px;\n    position: relative;\n}\n\n.s_edge[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    max-height: 280px;\n    background: url(\"/assets/images/diseno/home/curva_azul_edge.svg\") no-repeat center bottom;\n    background-size: cover;\n    top: -2;\n    left: 0;\n    right: 0;\n    margin: auto;\n    z-index: 1;\n}\n\n.cnt_items_elegir[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 24px;\n    align-items: stretch;\n}\n\n.item_elegir[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 20px;\n    background: linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%);\n    border-radius: 24px;\n    padding: 20px;\n    max-width: 250px;\n    justify-self: center;\n}\n\n.item_elegir[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    display: inline-block;\n    max-width: 70px;\n}\n\n.item_elegir[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.item_elegir[_ngcontent-%COMP%]   .txt_elegir[_ngcontent-%COMP%] {\n    line-height: 1.3;\n}\n\n.s_porque_elegir[_ngcontent-%COMP%] {\n    padding: 0 0 100px;\n}\n\n.c_porque_elegir[_ngcontent-%COMP%] {\n    max-width: 1050px;\n    margin: auto;\n}\n\n\n\n.s_proyecto_vivienda[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, rgba(233, 237, 247, 0) 0%, #E8EBF1 72.6%), #FFFFFF;\n    min-height: 340px;\n    position: relative;\n}\n\n.s_proyecto_vivienda[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: -2px;\n    background: url(\"/assets/images/diseno/proyectos_vivienda/curva_bg.svg\") no-repeat;\n    background-size: cover;\n    background-position: center top;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    max-height: 145px;\n    pointer-events: none;\n}\n\n.c_proyecto_vivienda[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.c_proyecto_vivienda[_ngcontent-%COMP%]::before, .c_proyecto_vivienda[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    background: url(\"https://paxzupruebas.com/maquetas/oikos_constructora/nueva/images/diseno/proyectos_vivienda/puntos.svg\") no-repeat center;\n    width: 20px;\n    height: 70px;\n}\n\n.c_proyecto_vivienda[_ngcontent-%COMP%]:after {\n    right: 0;\n    left: initial;\n    top: initial;\n    bottom: 0;\n    transform: rotate(180deg);\n}\n\n.s_cards_proyectos[_ngcontent-%COMP%] {\n    padding: 0px 0 40px;\n    position: relative;\n    z-index: 1;\n}\n\n.s_cards_proyectos[_ngcontent-%COMP%]   .title_section[_ngcontent-%COMP%] {\n    margin-top: 0;\n}\n\n.c_cards_proyectos[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n    gap: 20px;\n}\n\n.card_p[_ngcontent-%COMP%] {\n    overflow: hidden;\n    background: #FFFFFF;\n    box-shadow: 0px 19px 41px -18px rgba(35, 56, 98, 0.45);\n    border-radius: 24px;\n    display: inline-grid;\n}\n\n.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    max-height: 219px;\n    width: 100%;\n    height: 100%;\n}\n\n.card_p[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n.card_p[_ngcontent-%COMP%]   .tag_state[_ngcontent-%COMP%] {\n    text-align: center;\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    border-radius: 100px;\n    padding: 8px 20px;\n    color: #ffffff;\n    font-weight: 600;\n    font-size: 14px;\n    z-index: 1;\n}\n\n.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 10px;\n    right: 10px;\n    border-radius: 6px;\n    background: var(--color-grad_azul_osc);\n    width: 80px;\n    height: 40px;\n    z-index: 1;\n    overflow: hidden;\n}\n\n.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    height: 80%;\n    width: 1px;\n    background-color: rgb(165, 165, 165);\n    margin: auto;\n    z-index: 2;\n}\n\n.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 26px;\n    height: 26px;\n    transition: 300ms ease;\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n\n.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    content: \"\";\n    background-color: var(--color-c2);\n}\n\n.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.card_p[_ngcontent-%COMP%]   .btns_icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 300;\n    font-size: 20px;\n    color: #FFF;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%] {\n    background-color: #2E3B85;\n    padding: 10px;\n    display: grid;\n    grid-template-columns: 80px 1fr;\n    align-items: center;\n    gap: 20px;\n    position: relative;\n    min-height: 54px;\n}\n\n.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    max-width: 87px;\n    border-radius: 100px;\n    border: 5px solid #FFFFFF;\n    background-color: #FFF;\n    position: absolute;\n    width: 90px;\n    height: 90px;\n    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.33);\n    left: 10px;\n}\n\n.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    mix-blend-mode: multiply;\n}\n\n.card_p[_ngcontent-%COMP%]   .name_proyecto[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    grid-column: 2;\n    color: #FFFFFF;\n    font-size: 15px;\n    font-weight: 700;\n}\n\n.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%] {\n    padding: 30px 20px 20px;\n    text-align: center;\n    color: var(--color-c2);\n}\n\n.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: 700;\n}\n\n.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 34px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    text-align: center;\n    justify-content: center;\n}\n\n.card_p[_ngcontent-%COMP%]   .datos_proyecto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 400;\n    display: inline-block;\n}\n\n.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%] {\n    width: 100%;\n    background: linear-gradient(90deg, rgba(238, 238, 238, 0.5) 0%, #EEEEEE 48.96%, rgba(238, 238, 238, 0.5) 100%);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    padding: 10px;\n}\n\n.card_p[_ngcontent-%COMP%]   .franja_p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: var(--color-c2);\n}\n\n.card_p[_ngcontent-%COMP%]   .ctas_proyectos[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n    align-items: center;\n    padding: 10px;\n}\n\n.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color: var(--color-c2);\n}\n\n.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]:hover {\n    color: #060b29;\n}\n\n.card_p[_ngcontent-%COMP%]   .btn_whatsapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, #5FFC7B 0%, #26D044 100%);\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 30px;\n    height: 30px;\n    font-size: 22px;\n    color: #FFF;\n    font-weight: 500;\n}\n\n.card_p[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: -moz-fit-content;\n    width: fit-content;\n    justify-self: flex-end;\n}\n\n\n\n.s_home_hero[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.s_home_hero[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    bottom: -2px;\n    width: 100%;\n    height: 100%;\n    max-height: 120px;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    background: url(\"/assets/images/diseno/home/curva_azul_hero.svg\") no-repeat center bottom;\n    background-size: contain;\n    z-index: 10;\n}\n\n.s_home_hero[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n    min-height: 650px;\n    padding: 80px;\n}\n\n[_nghost-%COMP%]     .swiper-pagination-horizontal {\n    width: -moz-fit-content;\n    width: fit-content;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n    left: 20px;\n    top: -80px;\n    margin: auto;\n    height: 100%;\n}\n\n[_nghost-%COMP%]     .swiper-pagination-bullet {\n    width: 12px;\n    height: 12px;\n}\n\n[_nghost-%COMP%]     .swiper-pagination-bullet-active {    \n    width: 12px;\n    height: 12px;\n    background: #253489;\n    border-radius: 100px;\n    transition: 300ms ease;\n}\n\n[_nghost-%COMP%]     .swiper-pagination-bullet-active {\n    height: 20px;\n}\n\n.bg_img_h_hero[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    inset: 0;\n    z-index: 1;\n}\n\n.bg_img_h_hero[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    width: 100%;\n    height: 100%;\n    background: #FFFFFF;\n    z-index: 2;\n    mix-blend-mode: color;\n}\n\n.bg_img_h_hero[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to right, rgba(255, 255, 255, 0.8509803922), #ffffff);\n    z-index: 2;\n    opacity: 1;\n}\n\n.bg_img_h_hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.cnt_h_hero[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1.5fr 1fr;\n    position: relative;\n    z-index: 2;\n    gap: 40px;\n}\n\n.grand_img_h_hero[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 3;\n}\n\n.grand_img_h_hero[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    left: -40px;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: 20px;\n    height: 90px;\n    background: url(\"/assets/images/diseno/home/puntos.svg\") no-repeat center;\n    background-size: contain;\n}\n\n.grand_img_h_hero[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-self: center;\n}\n\n.grand_img_h_hero[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    object-fit: cover;\n}\n\n.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 2;\n    max-width: 200px;\n    bottom: 40px;\n    left: -100px;\n    border-radius: 15px;\n    overflow: hidden;\n    box-shadow: 8px 21px 30px -14px #112333;\n    min-height: 134px;\n}\n\n.grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    border-radius: 160px 30px 160px 30px;\n    overflow: hidden;\n    max-height: 454px;\n    min-height: 454px;\n}\n\n.desc_txt_hero[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n    position: relative;\n    z-index: 2;\n}\n\n.aside_prjct[_ngcontent-%COMP%] {\n    border-radius: 16px;\n    background-color: #FFF;\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 160px;\n    min-width: 150px;\n    z-index: 2;\n}\n\n.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n.dt_prjct[_ngcontent-%COMP%] {\n    border-radius: 15px;\n    padding: 16px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    color: #ffffff;\n}\n\n.item_prjct[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.datos_info_prjct[_ngcontent-%COMP%] {\n    max-width: 680px;\n    position: relative;\n    z-index: 1;\n}\n\n.datos_info_prjct[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n    padding: 4px 20px;\n    border-radius: 100px;\n    width: -moz-fit-content;\n    width: fit-content;\n    color: #ffffff;\n}\n\n.datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    line-height: 1;\n    margin: 14px 0;\n    color: #182360;\n    text-align: left;\n}\n\n.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: 400;\n    text-align: left;\n    padding: 0 0 6px;\n    border-bottom: 1px solid #182360;\n    width: -moz-fit-content;\n    width: fit-content;\n    color: #182360;\n    position: relative;\n}\n\n.datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::before {\n    content: \"\";\n    position: absolute;\n    width: 80px;\n    height: 6px;\n    border-radius: 100px;\n    background-color: #3E6DDF;\n    bottom: -3px;\n    left: 30px;\n}\n\n.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n    color: #182360;\n    margin: 10px 0;\n}\n\n.datos_info_prjct[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 23px;\n}\n\n@media screen and (max-width: 1440px) {\n    .datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 43px;\n    }\n\n    .s_home_hero[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n        padding: 80px 60px;\n    }\n}\n\n@media screen and (max-width: 1280px) {\n    .grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%] {\n        bottom: 20px;\n        left: -40px;\n    }\n\n    .datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 33px;\n    }\n\n    .s_home_hero[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n        padding: 50px 30px 50px 60px;\n        min-height: 620px;\n    }\n}\n\n@media screen and (max-width: 1050px) {\n    .cnt_h_hero[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n\n    .desc_txt_hero[_ngcontent-%COMP%] {\n        gap: 20px;\n    }\n\n    [_nghost-%COMP%]     .swiper-pagination-horizontal {\n        left: 0 !important;\n        right: 0 !important;\n        margin: auto !important;\n        flex-direction: row !important;\n        top: 40px !important;\n        bottom: initial !important;\n        height: 12px !important;\n        width: 100%;\n    }\n\n    [_nghost-%COMP%]     .swiper-pagination-bullet-active {\n        width: 20px;\n        height: 12px;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .s_home_hero[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n        padding: 80px 20px;\n        min-height: initial;\n    }\n\n    .grand_img_h_hero[_ngcontent-%COMP%] {\n        max-height: 350px;\n    }\n\n    .grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%] {\n        min-height: initial;\n    }\n\n    .grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%] {\n        left: 0;\n        right: 0;\n        margin: auto;\n        bottom: -30px;\n    }\n\n    .cnt_items_elegir[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    .cnt_edge[_ngcontent-%COMP%] {\n        padding: 20px;\n    }\n\n    .c_edge[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n\n    .txt_edge_cnt[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n\n    .cnt_icons_edge[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .cnt_items_elegir[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n\n    .item_elegir[_ngcontent-%COMP%] {\n        max-width: initial;\n    }\n\n    .desc_txt_hero[_ngcontent-%COMP%] {\n        flex-direction: column-reverse;\n    }\n\n    .aside_prjct[_ngcontent-%COMP%] {\n        flex-direction: row;\n        max-width: initial;\n        width: 100%;\n    }\n\n    .aside_prjct[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n        max-width: 100px;\n    }\n\n    .dt_prjct[_ngcontent-%COMP%] {\n        width: 100%;\n        text-align: left;\n        justify-content: flex-start;\n        align-items: flex-start;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n    }\n\n    .dt_prjct[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        font-size: 13px;\n    }\n\n    .place_prjct[_ngcontent-%COMP%] {\n        grid-column: 1/3;\n    }\n\n    .grand_img_h_hero[_ngcontent-%COMP%] {\n        max-height: 250px;\n    }\n\n    .datos_info_prjct[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n\n    .grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero1[_ngcontent-%COMP%] {\n        border-radius: 100px 20px 100px 20px;\n    }\n\n    .grand_img_h_hero[_ngcontent-%COMP%]   picture.grand_img_hero_mini[_ngcontent-%COMP%] {\n        bottom: -50px;\n        max-height: 90px;\n        min-height: initial;\n    }\n\n    .datos_info_prjct[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n}\n/*# sourceMappingURL=home.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOERBQThEO0FBQ2xFOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNHQUFzRztJQUN0RyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix3QkFBbUI7SUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFD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bUNBQW1DIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnX2dyYWQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNGMEYyRjcsICNmZmZmZmYsICNFRUYxRjkpO1xufVxuXG4uY19lZGdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMDJweCAyNHB4IC0xMDhweCByZ2JhKDI2LCA2NSwgMjI5LCAwLjI1KSwgMHB4IDIwcHggMzFweCAtMTRweCByZ2JhKDY4LCA4MywgMTY2LCAwLjI1KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXgtd2lkdGg6IDEwNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNfZWRnZT5waWN0dXJlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ29fZWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uaW1nX3ByaV9lZGdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5oYXNodGFnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZEQzJFO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY250X2VkZ2Uge1xuICAgIHBhZGRpbmc6IDQwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY250X2VkZ2UgaDIgcCB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbWF4LXdpZHRoOiAzNjhweDtcbiAgICBjb2xvcjogIzI1MzQ4OTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIG1hcmdpbjogMCAwIDIwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY250X2VkZ2UgaDIgcCBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50eHRfZWRnZV9jbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMjUzNDg5O1xufVxuXG4uY250X2ljb25zX2VkZ2Uge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBnYXA6IDMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IDAgMHB4O1xufVxuXG4uY250X2ljb25zX2VkZ2UgLmljb25fZWRnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmNudF9pY29uc19lZGdlIC5pY29uX2VkZ2UgcGljdHVyZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY250X2ljb25zX2VkZ2UgLmljb25fZWRnZSBwaWN0dXJlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5jbnRfaWNvbnNfZWRnZSAuaWNvbl9lZGdlIGxhYmVsIHtcbiAgICBjb2xvcjogIzE4MjM2MDtcbn1cblxuLnNfZWRnZSB7XG4gICAgcGFkZGluZzogMCAwIDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNfZWRnZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMjgwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZGlzZW5vL2hvbWUvY3VydmFfYXp1bF9lZGdlLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGJvdHRvbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRvcDogLTI7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgei1pbmRleDogMTtcbn1cblxuLmNudF9pdGVtc19lbGVnaXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gICAgZ2FwOiAyNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4uaXRlbV9lbGVnaXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZBRkFGQSAwJSwgI0ZGRkZGRiAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLml0ZW1fZWxlZ2lyIHBpY3R1cmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDcwcHg7XG59XG5cbi5pdGVtX2VsZWdpciBwaWN0dXJlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5pdGVtX2VsZWdpciAudHh0X2VsZWdpciB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLnNfcG9ycXVlX2VsZWdpciB7XG4gICAgcGFkZGluZzogMCAwIDEwMHB4O1xufVxuXG4uY19wb3JxdWVfZWxlZ2lyIHtcbiAgICBtYXgtd2lkdGg6IDEwNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi8qIFBST1lFQ1RPUyBWSVZJRU5EQSAqL1xuLnNfcHJveWVjdG9fdml2aWVuZGEge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjMzLCAyMzcsIDI0NywgMCkgMCUsICNFOEVCRjEgNzIuNiUpLCAjRkZGRkZGO1xuICAgIG1pbi1oZWlnaHQ6IDM0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNfcHJveWVjdG9fdml2aWVuZGE6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IC0ycHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZGlzZW5vL3Byb3llY3Rvc192aXZpZW5kYS9jdXJ2YV9iZy5zdmdcIikgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxNDVweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNfcHJveWVjdG9fdml2aWVuZGEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNfcHJveWVjdG9fdml2aWVuZGE6OmJlZm9yZSxcbi5jX3Byb3llY3RvX3ZpdmllbmRhOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9wYXh6dXBydWViYXMuY29tL21hcXVldGFzL29pa29zX2NvbnN0cnVjdG9yYS9udWV2YS9pbWFnZXMvZGlzZW5vL3Byb3llY3Rvc192aXZpZW5kYS9wdW50b3Muc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uY19wcm95ZWN0b192aXZpZW5kYTphZnRlciB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogaW5pdGlhbDtcbiAgICB0b3A6IGluaXRpYWw7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5zX2NhcmRzX3Byb3llY3RvcyB7XG4gICAgcGFkZGluZzogMHB4IDAgNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnNfY2FyZHNfcHJveWVjdG9zIC50aXRsZV9zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uY19jYXJkc19wcm95ZWN0b3Mge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjBweCwgMWZyKSk7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uY2FyZF9wIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDE5cHggNDFweCAtMThweCByZ2JhKDM1LCA1NiwgOTgsIDAuNDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG59XG5cbi5jYXJkX3AgcGljdHVyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtaGVpZ2h0OiAyMTlweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkX3AgcGljdHVyZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmRfcCAudGFnX3N0YXRlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5jYXJkX3AgLmJ0bnNfaWNvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ncmFkX2F6dWxfb3NjKTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FyZF9wIC5idG5zX2ljb25zOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxNjUsIDE2NSk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5jYXJkX3AgLmJ0bnNfaWNvbnMgYSB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZF9wIC5idG5zX2ljb25zIGE6aG92ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYzIpO1xufVxuXG4uY2FyZF9wIC5idG5zX2ljb25zIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5jYXJkX3AgLmJ0bnNfaWNvbnMgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmRfcCAubmFtZV9wcm95ZWN0byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFM0I4NTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogNTRweDtcbn1cblxuLmNhcmRfcCAubmFtZV9wcm95ZWN0byBwaWN0dXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA4N3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNGRkZGRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG4gICAgbGVmdDogMTBweDtcbn1cblxuLmNhcmRfcCAubmFtZV9wcm95ZWN0byBwaWN0dXJlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xufVxuXG4uY2FyZF9wIC5uYW1lX3Byb3llY3RvIGRpdiB7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jYXJkX3AgLmRhdG9zX3Byb3llY3RvIHtcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWMyKTtcbn1cblxuLmNhcmRfcCAuZGF0b3NfcHJveWVjdG8gaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY2FyZF9wIC5kYXRvc19wcm95ZWN0byBoNCB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkX3AgLmRhdG9zX3Byb3llY3RvIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNhcmRfcCAuZnJhbmphX3Age1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjUpIDAlLCAjRUVFRUVFIDQ4Ljk2JSwgcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjUpIDEwMCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNhcmRfcCAuZnJhbmphX3Agc3BhbiB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWMyKTtcbn1cblxuLmNhcmRfcCAuY3Rhc19wcm95ZWN0b3Mge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkX3AgLmJ0bl93aGF0c2FwcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYzIpO1xufVxuXG4uY2FyZF9wIC5idG5fd2hhdHNhcHA6aG92ZXIge1xuICAgIGNvbG9yOiAjMDYwYjI5O1xufVxuXG4uY2FyZF9wIC5idG5fd2hhdHNhcHAgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzVGRkM3QiAwJSwgIzI2RDA0NCAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNhcmRfcCAuYnRuIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLyogRVNUSUxPUyBIT01FIEhFUk8gU0VDVElPTiAqL1xuLnNfaG9tZV9oZXJvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zX2hvbWVfaGVybzo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0ycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZGlzZW5vL2hvbWUvY3VydmFfYXp1bF9oZXJvLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGJvdHRvbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgei1pbmRleDogMTA7XG59XG5cbi5zX2hvbWVfaGVybyAuc3dpcGVyLXNsaWRlIHtcbiAgICBtaW4taGVpZ2h0OiA2NTBweDtcbiAgICBwYWRkaW5nOiA4MHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uLWhvcml6b250YWwge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgdG9wOiAtODBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUgeyAgICBcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogIzI1MzQ4OTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLmJnX2ltZ19oX2hlcm8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaW5zZXQ6IDA7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmJnX2ltZ19oX2hlcm86OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWl4LWJsZW5kLW1vZGU6IGNvbG9yO1xufVxuXG4uYmdfaW1nX2hfaGVybzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUwOTgwMzkyMiksICNmZmZmZmYpO1xuICAgIHotaW5kZXg6IDI7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmJnX2ltZ19oX2hlcm8gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jbnRfaF9oZXJvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgMWZyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGdhcDogNDBweDtcbn1cblxuLmdyYW5kX2ltZ19oX2hlcm8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAzO1xufVxuXG4uZ3JhbmRfaW1nX2hfaGVybzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC00MHB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9kaXNlbm8vaG9tZS9wdW50b3Muc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uZ3JhbmRfaW1nX2hfaGVybyBwaWN0dXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5ncmFuZF9pbWdfaF9oZXJvIHBpY3R1cmUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmdyYW5kX2ltZ19oX2hlcm8gcGljdHVyZS5ncmFuZF9pbWdfaGVyb19taW5pIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIGJvdHRvbTogNDBweDtcbiAgICBsZWZ0OiAtMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDhweCAyMXB4IDMwcHggLTE0cHggIzExMjMzMztcbiAgICBtaW4taGVpZ2h0OiAxMzRweDtcbn1cblxuLmdyYW5kX2ltZ19oX2hlcm8gcGljdHVyZS5ncmFuZF9pbWdfaGVybzEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNjBweCAzMHB4IDE2MHB4IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiA0NTRweDtcbiAgICBtaW4taGVpZ2h0OiA0NTRweDtcbn1cblxuLmRlc2NfdHh0X2hlcm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5hc2lkZV9wcmpjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmFzaWRlX3ByamN0IHBpY3R1cmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hc2lkZV9wcmpjdCBwaWN0dXJlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5kdF9wcmpjdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pdGVtX3ByamN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uZGF0b3NfaW5mb19wcmpjdCB7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmRhdG9zX2luZm9fcHJqY3QgLnRhZyB7XG4gICAgcGFkZGluZzogNHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZGF0b3NfaW5mb19wcmpjdCBoMSB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbWFyZ2luOiAxNHB4IDA7XG4gICAgY29sb3I6ICMxODIzNjA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRhdG9zX2luZm9fcHJqY3QgaDMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMCAwIDZweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE4MjM2MDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgY29sb3I6ICMxODIzNjA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGF0b3NfaW5mb19wcmpjdCBoMzo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U2RERGO1xuICAgIGJvdHRvbTogLTNweDtcbiAgICBsZWZ0OiAzMHB4O1xufVxuXG4uZGF0b3NfaW5mb19wcmpjdCBoMiB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGNvbG9yOiAjMTgyMzYwO1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG4uZGF0b3NfaW5mb19wcmpjdCBoMiBzcGFuIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIC5kYXRvc19pbmZvX3ByamN0IGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA0M3B4O1xuICAgIH1cblxuICAgIC5zX2hvbWVfaGVybyAuc3dpcGVyLXNsaWRlIHtcbiAgICAgICAgcGFkZGluZzogODBweCA2MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgLmdyYW5kX2ltZ19oX2hlcm8gcGljdHVyZS5ncmFuZF9pbWdfaGVyb19taW5pIHtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICBsZWZ0OiAtNDBweDtcbiAgICB9XG5cbiAgICAuZGF0b3NfaW5mb19wcmpjdCBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICB9XG5cbiAgICAuc19ob21lX2hlcm8gLnN3aXBlci1zbGlkZSB7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMzBweCA1MHB4IDYwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYyMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG4gICAgLmNudF9oX2hlcm8ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICAuZGVzY190eHRfaGVybyB7XG4gICAgICAgIGdhcDogMjBweDtcbiAgICB9XG5cbiAgICA6aG9zdCA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uLWhvcml6b250YWwge1xuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICBib3R0b206IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIDpob3N0IDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5zX2hvbWVfaGVybyAuc3dpcGVyLXNsaWRlIHtcbiAgICAgICAgcGFkZGluZzogODBweCAyMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xuICAgIH1cblxuICAgIC5ncmFuZF9pbWdfaF9oZXJvIHtcbiAgICAgICAgbWF4LWhlaWdodDogMzUwcHg7XG4gICAgfVxuXG4gICAgLmdyYW5kX2ltZ19oX2hlcm8gcGljdHVyZS5ncmFuZF9pbWdfaGVybzEge1xuICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xuICAgIH1cblxuICAgIC5ncmFuZF9pbWdfaF9oZXJvIHBpY3R1cmUuZ3JhbmRfaW1nX2hlcm9fbWluaSB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJvdHRvbTogLTMwcHg7XG4gICAgfVxuXG4gICAgLmNudF9pdGVtc19lbGVnaXIge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgfVxuXG4gICAgLmNudF9lZGdlIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAuY19lZGdlIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLnR4dF9lZGdlX2NudCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIC5jbnRfaWNvbnNfZWRnZSB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAuY250X2l0ZW1zX2VsZWdpciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cblxuICAgIC5pdGVtX2VsZWdpciB7XG4gICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgICB9XG5cbiAgICAuZGVzY190eHRfaGVybyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICB9XG5cbiAgICAuYXNpZGVfcHJqY3Qge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5hc2lkZV9wcmpjdCBwaWN0dXJlIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICB9XG5cbiAgICAuZHRfcHJqY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIH1cblxuICAgIC5kdF9wcmpjdCBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cblxuICAgIC5wbGFjZV9wcmpjdCB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgfVxuXG4gICAgLmdyYW5kX2ltZ19oX2hlcm8ge1xuICAgICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICB9XG5cbiAgICAuZGF0b3NfaW5mb19wcmpjdCBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAuZ3JhbmRfaW1nX2hfaGVybyBwaWN0dXJlLmdyYW5kX2ltZ19oZXJvMSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4IDIwcHggMTAwcHggMjBweDtcbiAgICB9XG5cbiAgICAuZ3JhbmRfaW1nX2hfaGVybyBwaWN0dXJlLmdyYW5kX2ltZ19oZXJvX21pbmkge1xuICAgICAgICBib3R0b206IC01MHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA5MHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xuICAgIH1cblxuICAgIC5kYXRvc19pbmZvX3ByamN0IGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9aG9tZS5jc3MubWFwICovIl19 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_home_home_module_ts.js.map
"use strict";
(self["webpackChunkoikos_constructora"] = self["webpackChunkoikos_constructora"] || []).push([["src_app_modules_blog_blog_module_ts"],{

/***/ 1410:
/*!*******************************************!*\
  !*** ./src/app/core/guards/blog.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogGuard": () => (/* binding */ BlogGuard)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_api_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api/blog.service */ 7280);
/* harmony import */ var src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/functions/config.service */ 4130);
/* harmony import */ var src_app_shared_services_functions_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/functions/seo.service */ 655);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 5480);







class BlogGuard {
  constructor(blogService, configServ, seoService, pageService) {
    this.blogService = blogService;
    this.configServ = configServ;
    this.seoService = seoService;
    this.pageService = pageService;
  }

  canActivate(_route, _state) {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const param = _route.params['numberPage']; // if we are in /noticias 

      if (!param) {
        return _this.defaultRender();
      } // if we are in /noticias/pagina/:numPage


      const numPage = Number(param);
      if (!numPage || numPage > 5000) return _this.configServ.renderView404();
      const blogs = yield _this.blogService.getMostRecentNews(`?num_pagina=${param}&limite=9`);

      if (blogs) {
        // if not exist more blogs
        if (blogs?.restantes <= 0 && !blogs?.notas) return _this.configServ.renderView404();
        _this.blogService.currentNumPage = param;
        _this.blogService.currentBlogs = blogs?.notas;
        _this.blogService.remainingPages = blogs?.restantes;
        const seo = yield _this.pageService.getSeoContentPage('noticias');
        if (seo) _this.seoService.setUpMetaTags(seo);
        return true;
      }

      return _this.configServ.renderView404();
    })();
  }

  defaultRender() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const blogs = yield _this2.blogService.getMostRecentNews(`?num_pagina=1&limite=9`);
      const seo = yield _this2.pageService.getSeoContentPage('noticias');

      if (blogs) {
        _this2.blogService.currentBlogs = blogs?.notas;
        _this2.blogService.remainingPages = blogs?.restantes;
      }

      if (seo) _this2.seoService.setUpMetaTags(seo);
      return true;
    })();
  }

}

BlogGuard.ɵfac = function BlogGuard_Factory(t) {
  return new (t || BlogGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_shared_services_api_blog_service__WEBPACK_IMPORTED_MODULE_1__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_shared_services_functions_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_4__.PageService));
};

BlogGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: BlogGuard,
  factory: BlogGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 475:
/*!**************************************************!*\
  !*** ./src/app/core/guards/detail-blog.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeatilBlogGuard": () => (/* binding */ DeatilBlogGuard)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_api_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api/blog.service */ 7280);
/* harmony import */ var src_app_shared_services_functions_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/functions/seo.service */ 655);
/* harmony import */ var src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/functions/config.service */ 4130);






class DeatilBlogGuard {
  constructor(blogService, seoService, configServ) {
    this.blogService = blogService;
    this.seoService = seoService;
    this.configServ = configServ;
  }

  canActivate(_route, _state) {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const param = _route.params['slug'];
      const res = yield _this.blogService.getDetailNewBySlug(param);

      if (res && res?.length > 0) {
        const [blog] = res;

        if (blog) {
          _this.seoService.setUpMetaTags(blog);

          _this.blogService.activeBlog = blog;
          return true;
        }
      }

      return _this.configServ.renderView404();
    })();
  }

}

DeatilBlogGuard.ɵfac = function DeatilBlogGuard_Factory(t) {
  return new (t || DeatilBlogGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_shared_services_api_blog_service__WEBPACK_IMPORTED_MODULE_1__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_shared_services_functions_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService));
};

DeatilBlogGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: DeatilBlogGuard,
  factory: DeatilBlogGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5731:
/*!*******************************************!*\
  !*** ./src/app/core/models/blog.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Blog": () => (/* binding */ Blog)
/* harmony export */ });
class Blog {
    constructor(id = "", friendly_url = "", date_format = "", imagen = "", imagen_alt = "", imagen_title = "", summary = "", title = "", title_new = "", dynamic = "", title_ant = "", title_sig = "", url_ant = "", url_sig = "", nombre_categoria = "", color_categoria = "", link_cta = "", texto_cta = "") {
        this.id = id;
        this.friendly_url = friendly_url;
        this.date_format = date_format;
        this.imagen = imagen;
        this.imagen_alt = imagen_alt;
        this.imagen_title = imagen_title;
        this.summary = summary;
        this.title = title;
        this.title_new = title_new;
        this.dynamic = dynamic;
        this.title_ant = title_ant;
        this.title_sig = title_sig;
        this.url_ant = url_ant;
        this.url_sig = url_sig;
        this.nombre_categoria = nombre_categoria;
        this.color_categoria = color_categoria;
        this.link_cta = link_cta;
        this.texto_cta = texto_cta;
    }
}


/***/ }),

/***/ 1516:
/*!*****************************************************!*\
  !*** ./src/app/modules/blog/blog-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogRoutingModule": () => (/* binding */ BlogRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_guards_blog_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guards/blog.guard */ 1410);
/* harmony import */ var src_app_core_guards_detail_blog_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/guards/detail-blog.guard */ 475);
/* harmony import */ var _pages_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/blog-detail/blog-detail.component */ 6706);
/* harmony import */ var _pages_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/blog-page/blog-page.component */ 8869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    {
        path: '',
        component: _pages_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_3__.BlogPageComponent,
        canActivate: [src_app_core_guards_blog_guard__WEBPACK_IMPORTED_MODULE_0__.BlogGuard]
    },
    {
        path: ':slug',
        component: _pages_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_2__.BlogDetailComponent,
        canActivate: [src_app_core_guards_detail_blog_guard__WEBPACK_IMPORTED_MODULE_1__.DeatilBlogGuard]
    },
    {
        path: 'pagina/:numberPage',
        component: _pages_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_3__.BlogPageComponent,
        canActivate: [src_app_core_guards_blog_guard__WEBPACK_IMPORTED_MODULE_0__.BlogGuard]
    },
];
class BlogRoutingModule {
}
BlogRoutingModule.ɵfac = function BlogRoutingModule_Factory(t) { return new (t || BlogRoutingModule)(); };
BlogRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BlogRoutingModule });
BlogRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BlogRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 6195:
/*!*********************************************!*\
  !*** ./src/app/modules/blog/blog.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogModule": () => (/* binding */ BlogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-routing.module */ 1516);
/* harmony import */ var _pages_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/blog-detail/blog-detail.component */ 6706);
/* harmony import */ var _pages_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/blog-page/blog-page.component */ 8869);
/* harmony import */ var src_app_shared_directives_default_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/directives/default-img.directive */ 5425);
/* harmony import */ var src_app_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/breadcrumb/breadcrumb.component */ 1299);
/* harmony import */ var src_app_shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/slide-projects/slide-projects.component */ 5141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);








class BlogModule {
}
BlogModule.ɵfac = function BlogModule_Factory(t) { return new (t || BlogModule)(); };
BlogModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BlogModule });
BlogModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogRoutingModule,
        // standalones comp
        src_app_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent,
        src_app_shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_5__.SlideProjectsComponent] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BlogModule, { declarations: [_pages_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_1__.BlogDetailComponent,
        _pages_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_2__.BlogPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogRoutingModule,
        // standalones comp
        src_app_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent,
        src_app_shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_5__.SlideProjectsComponent,
        //pipes
        src_app_shared_directives_default_img_directive__WEBPACK_IMPORTED_MODULE_3__.DefaultImgDirective] }); })();


/***/ }),

/***/ 6706:
/*!*************************************************************************!*\
  !*** ./src/app/modules/blog/pages/blog-detail/blog-detail.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailComponent": () => (/* binding */ BlogDetailComponent)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_models_blog_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/blog.model */ 5731);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_api_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api/blog.service */ 7280);
/* harmony import */ var src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/functions/config.service */ 4130);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 1299);
/* harmony import */ var _shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/slide-projects/slide-projects.component */ 5141);
/* harmony import */ var _shared_directives_default_img_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/directives/default-img.directive */ 5425);













const _c0 = function (a1) {
  return ["/noticias", a1];
};

const _c1 = function (a0) {
  return {
    "scrolled": a0
  };
};

function BlogDetailComponent_a_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 47)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 50)(4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Anterior ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c0, ctx_r0.activeBlog.url_ant))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c1, ctx_r0.scrollPaginationIsActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r0.BASE_URL + ctx_r0.activeBlog.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", ctx_r0.activeBlog.imagen_alt)("title", ctx_r0.activeBlog.imagen_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.activeBlog.title_ant, " ");
  }
}

function BlogDetailComponent_a_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 53)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Siguiente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "east");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c0, ctx_r1.activeBlog.url_sig))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c1, ctx_r1.scrollPaginationIsActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.BASE_URL + ctx_r1.activeBlog.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", ctx_r1.activeBlog.imagen_alt)("title", ctx_r1.activeBlog.imagen_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.activeBlog.title_sig, " ");
  }
}

function BlogDetailComponent_a_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 54)(1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 56)(4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 60)(10, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "arrow_right_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c0, i_r3 == null ? null : i_r3.friendly_url));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r2.BASE_URL + (i_r3 == null ? null : i_r3.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", i_r3 == null ? null : i_r3.imagen_alt)("title", i_r3 == null ? null : i_r3.imagen_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r3 == null ? null : i_r3.date_format);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", i_r3 == null ? null : i_r3.title_new, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", i_r3 == null ? null : i_r3.summary, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}

class BlogDetailComponent {
  constructor(blogService, router, configServ) {
    var _this = this;

    this.blogService = blogService;
    this.router = router;
    this.configServ = configServ;
    this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.base_url;
    this.activeBlog = new src_app_core_models_blog_model__WEBPACK_IMPORTED_MODULE_1__.Blog();
    this.recentBlogs = [];
    this.scrollPaginationIsActive = false;
    this.routerListener = this.router.events.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd) {
          _this.activeBlog = _this.blogService.activeBlog;

          _this.configServ.goUpPage();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  ngOnInit() {
    this.getInterestNews();
  }

  getInterestNews() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const recentBlogs = yield _this2.blogService.getMostRecentNews(`?num_pagina=1&limite=3`);
      if (recentBlogs) _this2.recentBlogs = recentBlogs?.notas;
    })();
  }

  shareBy(share) {
    let link = "";
    const linkShare = window.location.href;

    switch (share) {
      case 'fb':
        link = `https://www.facebook.com/sharer/sharer.php?u=${linkShare}`;
        break;

      case 'twitter':
        link = `https://twitter.com/intent/tweet?text=${linkShare}`;
        break;

      case 'linkedln':
        link = `https://www.linkedin.com/sharing/share-offsite/?url=${linkShare}`;
        break;
    }

    window.open(link, "_blank");
  }

  configScrollPagination() {
    if ($(window).width() > 1200) {
      var scroll = $(window).scrollTop();

      if (scroll >= 420) {
        this.scrollPaginationIsActive = true;
      } else {
        this.scrollPaginationIsActive = false;
      }
    }
  }

}

BlogDetailComponent.ɵfac = function BlogDetailComponent_Factory(t) {
  return new (t || BlogDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_api_blog_service__WEBPACK_IMPORTED_MODULE_3__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService));
};

BlogDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: BlogDetailComponent,
  selectors: [["app-blog-detail"]],
  hostBindings: function BlogDetailComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scroll", function BlogDetailComponent_scroll_HostBindingHandler($event) {
        return ctx.configScrollPagination($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    }
  },
  decls: 71,
  vars: 13,
  consts: [[1, "cuerpo"], [1, "s_banner_not_int"], [1, "img_dest_not_int"], ["defaultImg", "", "width", "1440", "height", "420", 3, "src", "alt", "title"], [1, "cnt_central"], ["colorTxt", "white", 3, "crumbTitle"], [1, "cnt_inf_h_nota_int"], [1, "cat_not_int"], [1, "h_not_int"], [1, "row_fecha_redes"], [1, "fecha_not_int"], [1, "cnt_compartit_h_not_int"], [1, "etq_compartir_h_not_int"], [1, "cnt_redes_h_not_int"], [1, "red_h", "ic_fb", 3, "click"], [1, "red_h", "ic_tw", 3, "click"], [1, "red_h", "ic_in", 3, "click"], [1, "s_cuerpo_not_int"], [1, "cnt_nota_int"], [1, "cnt_top_nota_int"], [1, "col_compartir_nota"], [1, "cnt_redes_nota"], [1, "red_nota", "ic_fb", 3, "click"], [1, "red_nota", "ic_tw", 3, "click"], [1, "red_nota", "ic_in", 3, "click"], [1, "col_nota_int"], [1, "txt_nota_int", 3, "innerHtml"], [1, "row_banner_not_int"], [1, "cnt_banner_proy_not_int"], [1, "img_banner_proy_not_int"], ["defaultImg", "", "src", "..", "width", "300", "height", "121", "alt", ""], [1, "inf_banner_proy_not_int"], [1, "h_ban_proy_not_int"], [1, "btn"], [1, "row_cta"], ["target", "_blank", 1, "btn", 3, "href"], [1, "cnt_ant_sig_not_int"], ["class", "bnt_ant_sig_nota nota_ant", 3, "routerLink", "ngClass", 4, "ngIf"], ["class", "bnt_ant_sig_nota nota_sig", 3, "routerLink", "ngClass", 4, "ngIf"], [1, "cnt_not_interes_int"], [1, "h_not_interes_int"], [1, "cnt_cards_not_interes_int"], ["class", "card_not_list", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/noticias", 1, "btn"], [1, "s_carr_proy"], [1, "bg_round"], [1, "title_section", "al_center"], [1, "bnt_ant_sig_nota", "nota_ant", 3, "routerLink", "ngClass"], [1, "img_btn_ant_sig"], ["defaultImg", "", 3, "src", "alt", "title"], [1, "cnt_h_ant_sig_not"], [1, "material-icons-round", "ic_ant_sig"], [1, "txt_ant_sig_not"], [1, "bnt_ant_sig_nota", "nota_sig", 3, "routerLink", "ngClass"], [1, "card_not_list", 3, "routerLink"], [1, "img_card_not_int"], [1, "cnt_inf_card_not"], [1, "fecha_nota_card_int"], [1, "h_otra_not_dest"], [1, "txt_otra_not_dest", 3, "innerHtml"], [1, "row_ic_arrow"], [1, "material-icons", "ic_arrow_otra_nota_int"]],
  template: function BlogDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "body", 0)(1, "section", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-breadcrumb", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Publicado:");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\u2022");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 11)(19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Compartir");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 13)(22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BlogDetailComponent_Template_div_click_22_listener() {
        return ctx.shareBy("fb");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BlogDetailComponent_Template_div_click_23_listener() {
        return ctx.shareBy("twitter");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BlogDetailComponent_Template_div_click_24_listener() {
        return ctx.shareBy("linkedln");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "section", 17)(26, "div", 4)(27, "div", 18)(28, "div", 19)(29, "div", 20)(30, "div", 21)(31, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BlogDetailComponent_Template_div_click_31_listener() {
        return ctx.shareBy("fb");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BlogDetailComponent_Template_div_click_32_listener() {
        return ctx.shareBy("twitter");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BlogDetailComponent_Template_div_click_33_listener() {
        return ctx.shareBy("linkedln");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 27)(37, "div", 28)(38, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 31)(41, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, " Conoce nuestro");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "proyecto ubicado en Flandes");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, " Ir al proyecto ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 34)(49, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, BlogDetailComponent_a_52_Template, 9, 10, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, BlogDetailComponent_a_53_Template, 9, 10, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 39)(55, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, " Post recientes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, BlogDetailComponent_a_58_Template, 12, 9, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 34)(60, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, " Ver m\u00E1s ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "section", 44)(63, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 4)(66, "h2", 46)(67, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, "Proyectos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, " en construcci\u00F3n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](70, "app-slide-projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.BASE_URL + ctx.activeBlog.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"])("alt", ctx.activeBlog.imagen_alt)("title", ctx.activeBlog.imagen_title);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("crumbTitle", ctx.activeBlog.title_new);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.activeBlog.nombre_categoria);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.activeBlog.title_new, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.activeBlog.date_format, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", ctx.activeBlog.dynamic, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("href", ctx.activeBlog.link_cta, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.activeBlog.texto_cta, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeBlog.url_ant);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.activeBlog.url_sig);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.recentBlogs);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_6__.SlideProjectsComponent, _shared_directives_default_img_directive__WEBPACK_IMPORTED_MODULE_7__.DefaultImgDirective],
  styles: [".s_banner_not_int[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 420px;\n    position: relative;\n    overflow: hidden;\n    border-radius: 0 0 30px 30px;\n}\n\n.s_banner_not_int[_ngcontent-%COMP%]   .miga[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 2;\n}\n\n\n\n.s_banner_not_int[_ngcontent-%COMP%]:before, .s_banner_not_int[_ngcontent-%COMP%]:after {\n    content: \"\";\n    width: 70px;\n    height: 20px;\n    position: absolute;\n    z-index: 2;\n    background: url(https://paxzupruebas.com/maquetas/oikos_constructora/nueva/images/diseno/noticias/dots.svg) no-repeat center;\n}\n\n.s_banner_not_int[_ngcontent-%COMP%]:before {\n    top: 40px;\n    left: 40px;\n}\n\n.s_banner_not_int[_ngcontent-%COMP%]:after {\n    bottom: 40px;\n    right: 40px;\n}\n\n.s_banner_not_int[_ngcontent-%COMP%]   .cnt_central[_ngcontent-%COMP%] {\n    height: 100%;\n}\n\n.img_dest_not_int[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.img_dest_not_int[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.img_dest_not_int[_ngcontent-%COMP%]::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(0deg, rgba(46, 47, 78, 0.67), rgba(46, 47, 78, 0.67));\n    mix-blend-mode: multiply;\n}\n\n.cnt_inf_h_nota_int[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 80%;\n    max-width: 750px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    margin: auto;\n}\n\n.cat_not_int[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 6px;\n    align-items: center;\n    background: #fff;\n    border-radius: 4px;\n    font-size: 15px;\n    font-weight: bold;\n    padding: 4px 8px 3px;\n}\n\n.cat_not_int[_ngcontent-%COMP%]:before {\n    content: \"\";\n    width: 0;\n    height: 0;\n    display: block;\n    border-left: 8px solid var(--c_pri);\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n}\n\n.h_not_int[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 750px;\n    color: #fff;\n    font-size: 54px;\n    font-weight: 900;\n    line-height: 100%;\n    text-align: left;\n    padding: 12px 0;\n}\n\n.row_fecha_redes[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    color: #fff;\n}\n\n.fecha_not_int[_ngcontent-%COMP%] {\n    font-size: 15px;\n    color: #fff;\n}\n\n.cnt_compartit_h_not_int[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.etq_compartir_h_not_int[_ngcontent-%COMP%] {\n    font-size: 15px;\n    font-weight: bold;\n    color: #fff;\n}\n\n.cnt_redes_h_not_int[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n}\n\n.red_h[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 22px;\n    line-height: 22px;\n    text-align: center;\n    border-radius: 2px;\n    font-size: 12px;\n    color: #fff;\n    font-family: \"icomoon\";\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.red_h[_ngcontent-%COMP%]:hover {\n    background: #fff;\n    color: var(--c_pri);\n}\n\n.s_cuerpo_not_int[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n    padding: 40px 0;\n}\n\n.s_cuerpo_not_int[_ngcontent-%COMP%]   .cnt_central[_ngcontent-%COMP%] {\n    position: initial;\n}\n\n.cnt_nota_int[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 847px;\n    margin: auto;\n}\n\n.cnt_top_nota_int[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n}\n\n.col_compartir_nota[_ngcontent-%COMP%] {\n    width: 90px;\n    min-width: 90px;\n    position: relative;\n}\n\n.cnt_redes_nota[_ngcontent-%COMP%] {\n    background: #FFFFFF;\n    box-shadow: 0px 8px 17px -4px #98A8E3;\n    border-radius: 4px;\n    position: sticky;\n    top: 130px;\n    width: 38px;\n    overflow: hidden;\n    text-align: center;\n}\n\n.red_nota[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    line-height: 38px;\n    font-family: \"icomoon\";\n    color: var(--c_pri);\n    cursor: pointer;\n}\n\n.red_nota[_ngcontent-%COMP%]:hover {\n    background: var(--c_pri);\n    color: #fff;\n}\n\n.col_nota_int[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    text-align: left;\n}\n\n.txt_nota_int[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: left;\n    font-size: 16px;\n    line-height: 140%;\n}\n\n.txt_nota_int[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: var(--c_link);\n}\n\n.txt_nota_int[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 24px;\n    box-sizing: border-box;\n}\n\n.txt_nota_int[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n    font-weight: 900;\n    padding: 12px 0;\n    color: var(--color-c2);\n}\n\n.txt_nota_int[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: var(--color-c2);\n    font-weight: 900;\n    padding: 8px 0;\n}\n\n.row_cta[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 48px 0;\n}\n\n.cnt_not_interes_int[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 32px 0;\n    border-top: 1px solid #ccc;\n    display: flex;\n    flex-direction: column;\n    gap: 32px;\n}\n\n.cnt_ant_sig_not_int[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.bnt_ant_sig_nota[_ngcontent-%COMP%] {\n    background: #FFFFFF;\n    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);\n    box-sizing: border-box;\n    padding: 12px 20px;\n    position: absolute;\n    top: 40px;\n    width: 225px;\n    min-height: 110px;\n    overflow: hidden;\n    z-index: 1;\n}\n\n.bnt_ant_sig_nota.scrolled[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 130px;\n}\n\n.bnt_ant_sig_nota[_ngcontent-%COMP%]:hover {\n    background: var(--c_pri);\n}\n\n.bnt_ant_sig_nota[_ngcontent-%COMP%]:hover   .img_btn_ant_sig[_ngcontent-%COMP%] {\n    opacity: 0.08;\n}\n\n.bnt_ant_sig_nota[_ngcontent-%COMP%]:hover   .cnt_h_ant_sig_not[_ngcontent-%COMP%], .bnt_ant_sig_nota[_ngcontent-%COMP%]:hover   .txt_ant_sig_not[_ngcontent-%COMP%] {\n    color: #fff;\n}\n\n.bnt_ant_sig_nota[_ngcontent-%COMP%]:hover   .ic_ant_sig[_ngcontent-%COMP%] {\n    max-width: 100px;\n    color: #fff;\n}\n\n.bnt_ant_sig_nota.nota_ant[_ngcontent-%COMP%], .bnt_ant_sig_nota.nota_sig[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.bnt_ant_sig_nota.nota_ant[_ngcontent-%COMP%] {\n    border-radius: 0 12px 12px 0;\n    text-align: left;\n    left: 0;\n}\n\n.bnt_ant_sig_nota.nota_ant[_ngcontent-%COMP%]:hover   .ic_ant_sig[_ngcontent-%COMP%] {\n    padding-right: 8px;\n}\n\n.bnt_ant_sig_nota.nota_sig[_ngcontent-%COMP%] {\n    border-radius: 12px 0 0 12px;\n    text-align: right;\n    right: 0;\n}\n\n.bnt_ant_sig_nota.nota_sig[_ngcontent-%COMP%]:hover   .ic_ant_sig[_ngcontent-%COMP%] {\n    padding-left: 8px;\n}\n\n.bnt_ant_sig_nota.nota_sig[_ngcontent-%COMP%]   .cnt_h_ant_sig_not[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n}\n\n.img_btn_ant_sig[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    opacity: 0;\n    transition: all 0.3s;\n}\n\n.img_btn_ant_sig[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.cnt_h_ant_sig_not[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    font-size: 16px;\n    font-weight: 700;\n    color: #282828;\n}\n\n.ic_ant_sig[_ngcontent-%COMP%] {\n    max-width: 0;\n    overflow: hidden;\n    display: block;\n    box-sizing: border-box;\n    font-size: 18px !important;\n}\n\n.txt_ant_sig_not[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 14px;\n    line-height: 120%;\n    color: #282828;\n}\n\n.row_banner_not_int[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding: 48px 0;\n}\n\n.cnt_banner_proy_not_int[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 600px;\n    display: flex;\n    overflow: hidden;\n    background: linear-gradient(180deg, rgba(226, 229, 247, 0.37) 0%, #FFFFFF 100%);\n    box-shadow: 0px 23px 23px -17px rgba(152, 168, 227, 0.38);\n    border-radius: 8px;\n    position: relative;\n}\n\n.cnt_banner_proy_not_int[_ngcontent-%COMP%]::before, .cnt_banner_proy_not_int[_ngcontent-%COMP%]:after {\n    content: \"\";\n    width: 12px;\n    height: 42px;\n    background: url(https://paxzupruebas.com/maquetas/oikos_constructora/nueva/images/diseno/noticias/dots_sm.svg) center;\n    position: absolute;\n}\n\n.cnt_banner_proy_not_int[_ngcontent-%COMP%]::before {\n    bottom: 16px;\n    left: 16px;\n}\n\n.cnt_banner_proy_not_int[_ngcontent-%COMP%]::after {\n    top: 16px;\n    right: 16px;\n}\n\n.img_banner_proy_not_int[_ngcontent-%COMP%] {\n    width: 50%;\n}\n\n.img_banner_proy_not_int[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n}\n\n.inf_banner_proy_not_int[_ngcontent-%COMP%] {\n    width: 50%;\n    box-sizing: border-box;\n    padding: 24px 48px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.inf_banner_proy_not_int[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    text-align: center;\n    justify-content: center;\n}\n\n.h_ban_proy_not_int[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 18px;\n    color: var(--color-c2);\n}\n\n.h_ban_proy_not_int[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 900;\n    font-size: 24px;\n}\n\n.h_not_interes_int[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 32px;\n    color: var(--color-c2);\n    font-weight: 32px;\n    font-weight: 900;\n    padding: 24px 0;\n}\n\n.cnt_cards_not_interes_int[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    gap: 24px;\n}\n\n.card_not_list[_ngcontent-%COMP%] {\n    width: 32%;\n    max-width: 305px;\n    overflow: hidden;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    transition: all 0.3s;\n}\n\n.card_not_list[_ngcontent-%COMP%]:hover {\n    box-shadow: 0px 14px 15px -9px rgba(152, 168, 227, 0.42);\n}\n\n.card_not_list[_ngcontent-%COMP%]:hover   .ic_arrow_otra_nota_int[_ngcontent-%COMP%] {\n    transform: translate(0, -8px);\n    opacity: 1;\n}\n\n.img_card_not_int[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 183px;\n    overflow: hidden;\n}\n\n.img_card_not_int[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    display: block;\n    object-fit: cover;\n}\n\n.cnt_inf_card_not[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-grow: 1;\n    padding: 16px 20px 0;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    background: #fff;\n    border-radius: 20px 20px 0 0;\n    margin-top: -20px;\n}\n\n.fecha_nota_card_int[_ngcontent-%COMP%] {\n    color: #B3B3B3;\n    font-size: 13px;\n}\n\n.h_otra_not_dest[_ngcontent-%COMP%] {\n    color: var(--color-c2);\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 100%;\n}\n\n.txt_otra_not_dest[_ngcontent-%COMP%] {\n    color: #000;\n    font-size: 15px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    \n    line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n\n.row_ic_arrow[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.ic_arrow_otra_nota_int[_ngcontent-%COMP%] {\n    color: #FDB718;\n    transform: translate(-20px, -8px);\n    opacity: 0;\n    transition: all 0.5s;\n}\n\n\n\n@media screen and (max-width: 1300px) {\n\n    \n    .bnt_ant_sig_nota[_ngcontent-%COMP%] {\n        width: 175px;\n    }\n\n    \n}\n\n@media screen and (max-width: 1200px) {\n    .cnt_ant_sig_not_int[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-between;\n        padding: 24px 0;\n        border-top: 1px solid #ccc;\n    }\n\n    .bnt_ant_sig_nota[_ngcontent-%COMP%] {\n        position: relative;\n        top: inherit;\n        left: inherit;\n        right: inherit;\n        width: 48%;\n        min-height: inherit;\n        max-width: 400px;\n        box-shadow: none;\n        border-radius: none;\n        background: transparent;\n    }\n\n    .cnt_h_ant_sig_not[_ngcontent-%COMP%] {\n        gap: 12px;\n    }\n\n    .ic_ant_sig[_ngcontent-%COMP%] {\n        max-width: 100px;\n    }\n}\n\n@media screen and (max-width: 1050px) {\n    .h_not_int[_ngcontent-%COMP%] {\n        font-size: 40px;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .cnt_nota_int[_ngcontent-%COMP%] {\n        padding: 0 0 64px;\n    }\n\n    .col_compartir_nota[_ngcontent-%COMP%] {\n        min-width: inherit;\n    }\n\n    .h_nota_int[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n\n    .txt_nota_int[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 24px;\n        line-height: 120%;\n    }\n\n    .txt_nota_int[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n\n    .row_banner_not_int[_ngcontent-%COMP%] {\n        padding: 16px 0;\n    }\n\n    .inf_banner_proy_not_int[_ngcontent-%COMP%] {\n        padding: 12px 24px;\n    }\n\n    .cnt_cards_not_interes_int[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .card_not_list[_ngcontent-%COMP%] {\n        width: 100%;\n        max-width: inherit;\n        flex-direction: row;\n    }\n\n    .img_card_not_int[_ngcontent-%COMP%] {\n        height: auto;\n    }\n\n    .cnt_inf_card_not[_ngcontent-%COMP%] {\n        margin: 0;\n        justify-content: center;\n        border-radius: 0;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .cnt_inf_h_nota_int[_ngcontent-%COMP%] {\n        gap: 12px;\n    }\n\n    .h_not_int[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n\n    .row_fecha_redes[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 4px;\n    }\n\n    .row_fecha_redes[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .cnt_redes_nota[_ngcontent-%COMP%] {\n        position: fixed;\n        top: 120px;\n        left: 0;\n    }\n\n    .row_fecha_autor[_ngcontent-%COMP%]   .fecha_nota[_ngcontent-%COMP%] {\n        border: none;\n    }\n\n    .txt_nota_int[_ngcontent-%COMP%] {\n        padding-top: 0;\n    }\n\n    .cnt_cards_not_interes_int[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .txt_ant_sig_not[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .cnt_banner_proy_not_int[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n        line-height: 16px;\n        font-size: 13px;\n        padding: 6px 12px;\n        height: auto;\n    }\n\n    .h_ban_proy_not_int[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n\n    .h_ban_proy_not_int[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n}\n/*# sourceMappingURL=noticia_interna.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTs7O0dBR0c7O0FBRUg7O0lBRUksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViw0SEFBNEg7QUFDaEk7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztBQUNYOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUZBQWlGO0lBQ2pGLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsaUNBQWlDO0lBQ2pDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7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IjoiYmxvZy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zX2Jhbm5lcl9ub3RfaW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzMHB4IDMwcHg7XG59XG5cbi5zX2Jhbm5lcl9ub3RfaW50IC5taWdhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbn1cblxuLyogLnNfYmFubmVyX25vdF9pbnQgLm1pZ2EgYSxcbi5zX2Jhbm5lcl9ub3RfaW50IC5taWdhIHNwYW4ge1xuICAgIGNvbG9yOiAjZmZmO1xufSAqL1xuXG4uc19iYW5uZXJfbm90X2ludDpiZWZvcmUsXG4uc19iYW5uZXJfbm90X2ludDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcGF4enVwcnVlYmFzLmNvbS9tYXF1ZXRhcy9vaWtvc19jb25zdHJ1Y3RvcmEvbnVldmEvaW1hZ2VzL2Rpc2Vuby9ub3RpY2lhcy9kb3RzLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcbn1cblxuLnNfYmFubmVyX25vdF9pbnQ6YmVmb3JlIHtcbiAgICB0b3A6IDQwcHg7XG4gICAgbGVmdDogNDBweDtcbn1cblxuLnNfYmFubmVyX25vdF9pbnQ6YWZ0ZXIge1xuICAgIGJvdHRvbTogNDBweDtcbiAgICByaWdodDogNDBweDtcbn1cblxuLnNfYmFubmVyX25vdF9pbnQgLmNudF9jZW50cmFsIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWdfZGVzdF9ub3RfaW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4uaW1nX2Rlc3Rfbm90X2ludCBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmltZ19kZXN0X25vdF9pbnQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNDYsIDQ3LCA3OCwgMC42NyksIHJnYmEoNDYsIDQ3LCA3OCwgMC42NykpO1xuICAgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbn1cblxuLmNudF9pbmZfaF9ub3RhX2ludCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2F0X25vdF9pbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA2cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogNHB4IDhweCAzcHg7XG59XG5cbi5jYXRfbm90X2ludDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0tY19wcmkpO1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5oX25vdF9pbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiA1NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG59XG5cbi5yb3dfZmVjaGFfcmVkZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5mZWNoYV9ub3RfaW50IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5jbnRfY29tcGFydGl0X2hfbm90X2ludCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xufVxuXG4uZXRxX2NvbXBhcnRpcl9oX25vdF9pbnQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmNudF9yZWRlc19oX25vdF9pbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbn1cblxuLnJlZF9oIHtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6IFwiaWNvbW9vblwiO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnJlZF9oOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiB2YXIoLS1jX3ByaSk7XG59XG5cbi5zX2N1ZXJwb19ub3RfaW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogNDBweCAwO1xufVxuXG4uc19jdWVycG9fbm90X2ludCAuY250X2NlbnRyYWwge1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuXG4uY250X25vdGFfaW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDg0N3B4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNudF90b3Bfbm90YV9pbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uY29sX2NvbXBhcnRpcl9ub3RhIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY250X3JlZGVzX25vdGEge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxN3B4IC00cHggIzk4QThFMztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDEzMHB4O1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVkX25vdGEge1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICBmb250LWZhbWlseTogXCJpY29tb29uXCI7XG4gICAgY29sb3I6IHZhcigtLWNfcHJpKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWRfbm90YTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY19wcmkpO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uY29sX25vdGFfaW50IHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnR4dF9ub3RhX2ludCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7XG59XG5cbi50eHRfbm90YV9pbnQgYSB7XG4gICAgY29sb3I6IHZhcigtLWNfbGluayk7XG59XG5cbi50eHRfbm90YV9pbnQgdWwge1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udHh0X25vdGFfaW50IGgyIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWMyKTtcbn1cblxuLnR4dF9ub3RhX2ludCBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jMik7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBwYWRkaW5nOiA4cHggMDtcbn1cblxuLnJvd19jdGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0OHB4IDA7XG59XG5cbi5jbnRfbm90X2ludGVyZXNfaW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzMnB4IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMzJweDtcbn1cblxuLmNudF9hbnRfc2lnX25vdF9pbnQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYm50X2FudF9zaWdfbm90YSB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHB4O1xuICAgIHdpZHRoOiAyMjVweDtcbiAgICBtaW4taGVpZ2h0OiAxMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5ibnRfYW50X3NpZ19ub3RhLnNjcm9sbGVkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAxMzBweDtcbn1cblxuLmJudF9hbnRfc2lnX25vdGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNfcHJpKTtcbn1cblxuLmJudF9hbnRfc2lnX25vdGE6aG92ZXIgLmltZ19idG5fYW50X3NpZyB7XG4gICAgb3BhY2l0eTogMC4wODtcbn1cblxuLmJudF9hbnRfc2lnX25vdGE6aG92ZXIgLmNudF9oX2FudF9zaWdfbm90LFxuLmJudF9hbnRfc2lnX25vdGE6aG92ZXIgLnR4dF9hbnRfc2lnX25vdCB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5ibnRfYW50X3NpZ19ub3RhOmhvdmVyIC5pY19hbnRfc2lnIHtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYm50X2FudF9zaWdfbm90YS5ub3RhX2FudCxcbi5ibnRfYW50X3NpZ19ub3RhLm5vdGFfc2lnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uYm50X2FudF9zaWdfbm90YS5ub3RhX2FudCB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxlZnQ6IDA7XG59XG5cbi5ibnRfYW50X3NpZ19ub3RhLm5vdGFfYW50OmhvdmVyIC5pY19hbnRfc2lnIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi5ibnRfYW50X3NpZ19ub3RhLm5vdGFfc2lnIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDAgMCAxMnB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uYm50X2FudF9zaWdfbm90YS5ub3RhX3NpZzpob3ZlciAuaWNfYW50X3NpZyB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5ibnRfYW50X3NpZ19ub3RhLm5vdGFfc2lnIC5jbnRfaF9hbnRfc2lnX25vdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmltZ19idG5fYW50X3NpZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5pbWdfYnRuX2FudF9zaWcgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jbnRfaF9hbnRfc2lnX25vdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMjgyODI4O1xufVxuXG4uaWNfYW50X3NpZyB7XG4gICAgbWF4LXdpZHRoOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLnR4dF9hbnRfc2lnX25vdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIGNvbG9yOiAjMjgyODI4O1xufVxuXG4ucm93X2Jhbm5lcl9ub3RfaW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQ4cHggMDtcbn1cblxuLmNudF9iYW5uZXJfcHJveV9ub3RfaW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIyNiwgMjI5LCAyNDcsIDAuMzcpIDAlLCAjRkZGRkZGIDEwMCUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAyM3B4IDIzcHggLTE3cHggcmdiYSgxNTIsIDE2OCwgMjI3LCAwLjM4KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY250X2Jhbm5lcl9wcm95X25vdF9pbnQ6OmJlZm9yZSxcbi5jbnRfYmFubmVyX3Byb3lfbm90X2ludDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcGF4enVwcnVlYmFzLmNvbS9tYXF1ZXRhcy9vaWtvc19jb25zdHJ1Y3RvcmEvbnVldmEvaW1hZ2VzL2Rpc2Vuby9ub3RpY2lhcy9kb3RzX3NtLnN2ZykgY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNudF9iYW5uZXJfcHJveV9ub3RfaW50OjpiZWZvcmUge1xuICAgIGJvdHRvbTogMTZweDtcbiAgICBsZWZ0OiAxNnB4O1xufVxuXG4uY250X2Jhbm5lcl9wcm95X25vdF9pbnQ6OmFmdGVyIHtcbiAgICB0b3A6IDE2cHg7XG4gICAgcmlnaHQ6IDE2cHg7XG59XG5cbi5pbWdfYmFubmVyX3Byb3lfbm90X2ludCB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmltZ19iYW5uZXJfcHJveV9ub3RfaW50IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW5mX2Jhbm5lcl9wcm95X25vdF9pbnQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAyNHB4IDQ4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTJweDtcbn1cblxuLmluZl9iYW5uZXJfcHJveV9ub3RfaW50IC5idG4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhfYmFuX3Byb3lfbm90X2ludCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jMik7XG59XG5cbi5oX2Jhbl9wcm95X25vdF9pbnQgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5oX25vdF9pbnRlcmVzX2ludCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jMik7XG4gICAgZm9udC13ZWlnaHQ6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBwYWRkaW5nOiAyNHB4IDA7XG59XG5cbi5jbnRfY2FyZHNfbm90X2ludGVyZXNfaW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogMjRweDtcbn1cblxuLmNhcmRfbm90X2xpc3Qge1xuICAgIHdpZHRoOiAzMiU7XG4gICAgbWF4LXdpZHRoOiAzMDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uY2FyZF9ub3RfbGlzdDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMHB4IDE0cHggMTVweCAtOXB4IHJnYmEoMTUyLCAxNjgsIDIyNywgMC40Mik7XG59XG5cbi5jYXJkX25vdF9saXN0OmhvdmVyIC5pY19hcnJvd19vdHJhX25vdGFfaW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtOHB4KTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uaW1nX2NhcmRfbm90X2ludCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxODNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1nX2NhcmRfbm90X2ludCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNudF9pbmZfY2FyZF9ub3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uZmVjaGFfbm90YV9jYXJkX2ludCB7XG4gICAgY29sb3I6ICNCM0IzQjM7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaF9vdHJhX25vdF9kZXN0IHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYzIpO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcbn1cblxuLnR4dF9vdHJhX25vdF9kZXN0IHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cbiAgICBsaW5lLWNsYW1wOiAzO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi5yb3dfaWNfYXJyb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmljX2Fycm93X290cmFfbm90YV9pbnQge1xuICAgIGNvbG9yOiAjRkRCNzE4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAtOHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4vKiBSRVNQT05JU0lWRSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG5cbiAgICAvKioqKioqKklOVEVSTkEqKioqKioqKi9cbiAgICAuYm50X2FudF9zaWdfbm90YSB7XG4gICAgICAgIHdpZHRoOiAxNzVweDtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKi9cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNudF9hbnRfc2lnX25vdF9pbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDI0cHggMDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgfVxuXG4gICAgLmJudF9hbnRfc2lnX25vdGEge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogaW5oZXJpdDtcbiAgICAgICAgbGVmdDogaW5oZXJpdDtcbiAgICAgICAgcmlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIC5jbnRfaF9hbnRfc2lnX25vdCB7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICB9XG5cbiAgICAuaWNfYW50X3NpZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgICAuaF9ub3RfaW50IHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY250X25vdGFfaW50IHtcbiAgICAgICAgcGFkZGluZzogMCAwIDY0cHg7XG4gICAgfVxuXG4gICAgLmNvbF9jb21wYXJ0aXJfbm90YSB7XG4gICAgICAgIG1pbi13aWR0aDogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAuaF9ub3RhX2ludCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAudHh0X25vdGFfaW50IGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICB9XG5cbiAgICAudHh0X25vdGFfaW50IGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5yb3dfYmFubmVyX25vdF9pbnQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgfVxuXG4gICAgLmluZl9iYW5uZXJfcHJveV9ub3RfaW50IHtcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgIH1cblxuICAgIC5jbnRfY2FyZHNfbm90X2ludGVyZXNfaW50IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuY2FyZF9ub3RfbGlzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuXG4gICAgLmltZ19jYXJkX25vdF9pbnQge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmNudF9pbmZfY2FyZF9ub3Qge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAuY250X2luZl9oX25vdGFfaW50IHtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cblxuICAgIC5oX25vdF9pbnQge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuXG4gICAgLnJvd19mZWNoYV9yZWRlcyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBnYXA6IDRweDtcbiAgICB9XG5cbiAgICAucm93X2ZlY2hhX3JlZGVzPnNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5jbnRfcmVkZXNfbm90YSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAxMjBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAucm93X2ZlY2hhX2F1dG9yIC5mZWNoYV9ub3RhIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgIC50eHRfbm90YV9pbnQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG5cbiAgICAuY250X2NhcmRzX25vdF9pbnRlcmVzX2ludCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLnR4dF9hbnRfc2lnX25vdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmNudF9iYW5uZXJfcHJveV9ub3RfaW50IC5idG4ge1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5oX2Jhbl9wcm95X25vdF9pbnQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmhfYmFuX3Byb3lfbm90X2ludCBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bm90aWNpYV9pbnRlcm5hLmNzcy5tYXAgKi8iXX0= */"]
});

/***/ }),

/***/ 8869:
/*!*********************************************************************!*\
  !*** ./src/app/modules/blog/pages/blog-page/blog-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPageComponent": () => (/* binding */ BlogPageComponent)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_models_blog_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/blog.model */ 5731);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_api_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api/blog.service */ 7280);
/* harmony import */ var src_app_shared_services_functions_responsive_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/functions/responsive.service */ 3228);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 1299);
/* harmony import */ var _shared_directives_default_img_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/directives/default-img.directive */ 5425);













const _c0 = function (a1) {
  return ["/noticias", a1];
};

function BlogPageComponent_a_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 34)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 10)(4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 12)(7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c0, i_r3 == null ? null : i_r3.friendly_url));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r0.BASE_URL + (i_r3 == null ? null : i_r3.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", i_r3 == null ? null : i_r3.imagen_alt)("title", i_r3 == null ? null : i_r3.imagen_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r3 == null ? null : i_r3.nombre_categoria, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r3 == null ? null : i_r3.date_format);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", i_r3 == null ? null : i_r3.summary, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}

function BlogPageComponent_a_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 37)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 41)(6, "div", 12)(7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c0, i_r4 == null ? null : i_r4.friendly_url));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.BASE_URL + (i_r4 == null ? null : i_r4.imagen), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", i_r4 == null ? null : i_r4.imagen_alt)("title", i_r4 == null ? null : i_r4.imagen_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", i_r4 == null ? null : i_r4.nombre_categoria, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r4 == null ? null : i_r4.date_format);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", i_r4 == null ? null : i_r4.summary, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}

function BlogPageComponent_a_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 43)(1, "div", 12)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, i_r5 == null ? null : i_r5.friendly_url));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r5 == null ? null : i_r5.date_format);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", i_r5 == null ? null : i_r5.summary, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}

const _c1 = function (a0) {
  return {
    "jp-disabled": a0
  };
};

class BlogPageComponent {
  constructor(blogService, router, responsiveService, doc) {
    var _this = this;

    this.blogService = blogService;
    this.router = router;
    this.responsiveService = responsiveService;
    this.doc = doc;
    this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.base_url;
    this.oninitIsExecute = false; //pagination

    this.numPage = 1;
    this.remainingPages = 0; // blogs

    this.mainBlog = new src_app_core_models_blog_model__WEBPACK_IMPORTED_MODULE_1__.Blog();
    this.secondMainNews = [];
    this.interestBlogs = [];
    this.blogs = [];
    this.numberRoutesToDelete = 2;
    this.routerListener = this.router.events.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd) {
          if (router.url.includes('pagina/')) _this.numberRoutesToDelete = 2;
          _this.blogs = _this.blogService.currentBlogs;
          _this.numPage = _this.blogService.currentNumPage;
          _this.remainingPages = _this.blogService.remainingPages;
          if (_this.oninitIsExecute) _this.doc.getElementById("pageUp")?.scrollIntoView();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  ngOnInit() {
    this.init();
    this.oninitIsExecute = true;
  }

  init() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tasks = [() => _this2.getMainNew(), () => _this2.getSecondMainNews(), () => _this2.getInterestNews()];

      for (const task of tasks) {
        yield task();
      }
    })();
  }

  getMainNew() {
    var _this3 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const mainBlog = yield _this3.blogService.getMainNew();
      if (mainBlog) _this3.mainBlog = mainBlog;
    })();
  }

  getSecondMainNews() {
    var _this4 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const secondMainNews = yield _this4.blogService.getSecondMainNews();
      if (secondMainNews) _this4.secondMainNews = secondMainNews;
    })();
  }

  getInterestNews() {
    var _this5 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const interestBlogs = yield _this5.blogService.getInterestNews();
      if (interestBlogs) _this5.interestBlogs = interestBlogs;
    })();
  }

  nextPage() {
    if (this.remainingPages > 0) {
      this.numPage++;
      this.router.navigate(['/noticias/pagina/', this.numPage]);
    }
  }

  beforePage() {
    if (this.numPage > 1) {
      this.numPage--;
      this.router.navigate(['/noticias/pagina/', this.numPage]);
    }
  }

}

BlogPageComponent.ɵfac = function BlogPageComponent_Factory(t) {
  return new (t || BlogPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_api_blog_service__WEBPACK_IMPORTED_MODULE_3__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_functions_responsive_service__WEBPACK_IMPORTED_MODULE_4__.ResponsiveService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT));
};

BlogPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: BlogPageComponent,
  selectors: [["app-blog-page"]],
  decls: 44,
  vars: 20,
  consts: [[1, "cuerpo"], [1, "cnt_gen_noticias"], [1, "bg_round"], [1, "cnt_central"], [3, "numberRoutesToDelete"], [1, "row_h_gen_noticias"], [1, "cnt_tob_not_dest"], [1, "cnt_not_dest", 3, "routerLink"], [1, "img_not_dest"], ["defaultImg", "", "width", "616", "height", "375", 3, "src", "alt", "title"], [1, "cnt_inf_not_dest"], [1, "cat_not"], [1, "row_fecha"], [1, "material-icons", "ic_fech_not"], [1, "fecha_nota"], [1, "h_not_dest"], [1, "txt_not_dest", 3, "innerHtml"], [1, "col_top_dest"], ["class", "cnt_otra_not_dest", 3, "routerLink", 4, "ngFor", "ngForOf"], ["id", "pageUp", 1, "cnt_bot_not"], [1, "col_gen_list_not"], [1, "row_h_list_not"], [1, "h_not_recientes"], [1, "sep_list_not"], [1, "paginador_list_not"], [1, "jp-previous", 3, "ngClass", "click"], [1, "jp-next", 3, "ngClass", "click"], ["id", "list_container", 1, "list_not"], ["class", "itm_list_not", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col_post_dest"], [1, "ctn_lat_post_dets"], [1, "h_post_dest"], [1, "list_post_dest"], ["class", "itm_post_dest", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "cnt_otra_not_dest", 3, "routerLink"], ["defaultImg", "", "width", "282", "height", "178", 3, "src", "alt", "title"], [1, "h_not_dest", 3, "innerHtml"], [1, "itm_list_not", 3, "routerLink"], [1, "img_not_list"], ["defaultImg", "", 3, "src", "alt", "title"], [1, "catedoria"], [1, "cnt_inf_nota_list"], [1, "txt_not_list", 3, "innerHtml"], [1, "itm_post_dest", 3, "routerLink"]],
  template: function BlogPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "body", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-breadcrumb", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Noticias ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6)(9, "a", 7)(10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 10)(13, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 12)(16, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "access_time");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, BlogPageComponent_a_24_Template, 12, 9, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 19)(26, "div", 20)(27, "div", 21)(28, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " Post recientes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 24)(32, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogPageComponent_Template_a_click_32_listener() {
        return ctx.beforePage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, " \u2190 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BlogPageComponent_Template_a_click_34_listener() {
        return ctx.nextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, " \u2192 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, BlogPageComponent_a_37_Template, 12, 9, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 29)(39, "div", 30)(40, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, " Posts descatados ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, BlogPageComponent_a_43_Template, 7, 5, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("numberRoutesToDelete", ctx.numberRoutesToDelete);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](14, _c0, ctx.mainBlog.friendly_url));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.BASE_URL + ctx.mainBlog.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", ctx.mainBlog.imagen_alt)("title", ctx.mainBlog.imagen_title);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.mainBlog.nombre_categoria, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.mainBlog.date_format);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.mainBlog.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", ctx.mainBlog.summary, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.secondMainNews);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](16, _c1, ctx.numPage <= 1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](18, _c1, ctx.remainingPages < 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.blogs);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.interestBlogs);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _shared_directives_default_img_directive__WEBPACK_IMPORTED_MODULE_6__.DefaultImgDirective],
  styles: [".cnt_gen_noticias[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n}\n\n.row_h_gen_noticias[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    gap: 32px;\n    color: var(--color-c2);\n    font-size: 42px;\n    font-weight: 900;\n    align-items: center;\n    padding: 32px 0;\n}\n\n.row_h_gen_noticias[_ngcontent-%COMP%]::after {\n    content: \"\";\n    flex-grow: 1;\n    height: 1px;\n    background: #E0E0E0;\n}\n\n.cnt_tob_not_dest[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n}\n\n.cnt_not_dest[_ngcontent-%COMP%] {\n    width: 62%;\n    position: relative;\n    overflow: hidden;\n    border-radius: 8px;\n    display: block;\n}\n\n.cnt_not_dest[_ngcontent-%COMP%]:hover   .img_not_dest[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: scale(1.1);\n}\n\n.cnt_not_dest[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    background: url(https://paxzupruebas.com/maquetas/oikos_constructora/nueva/images/diseno/proyectos_vivienda/puntos.svg) no-repeat center;\n    width: 20px;\n    height: 70px;\n    bottom: 40px;\n    right: 16px;\n}\n\n.img_not_dest[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n.img_not_dest[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: all 1s;\n    display: block;\n}\n\n.cnt_inf_not_dest[_ngcontent-%COMP%] {\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    background: linear-gradient(180deg, rgba(217, 217, 217, 0) 28.65%, rgba(0, 0, 0, 0.7) 100%);\n    box-sizing: border-box;\n    padding: 120px 40px 24px;\n    text-align: left;\n    display: flex;\n    flex-flow: column;\n    align-items: flex-start;\n    gap: 8px;\n}\n\n.cat_not[_ngcontent-%COMP%] {\n    background: #FDB718;\n    color: #fff;\n    font-size: 12px;\n    font-weight: bold;\n    padding: 4px 16px;\n    border-radius: 4px;\n}\n\n.row_fecha[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 8px;\n}\n\n.ic_fech_not[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 18px !important;\n}\n\n.fecha_nota[_ngcontent-%COMP%] {\n    font-size: 13px;\n    color: var(--c_pri);\n    width: 100%;\n    line-height: 18px;\n    color: #fff;\n}\n\n.autor_nota[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 15px;\n    color: var(--c_pri);\n    width: 100%;\n}\n\n.autor_nota[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n}\n\n.h_not_dest[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 28px;\n    line-height: 35px;\n    font-weight: 600;\n    color: #fff;\n    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.9);\n}\n\n.txt_not_dest[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #fff;\n}\n\n.btn_not[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 14px;\n    color: var(--c_pri);\n    text-decoration: underline;\n    padding-top: 8px;\n}\n\n.col_top_dest[_ngcontent-%COMP%] {\n    width: 40%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 20px;\n}\n\n.cnt_otra_not_dest[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 240px;\n    position: relative;\n    border-radius: 12px;\n    overflow: hidden;\n}\n\n.cnt_otra_not_dest[_ngcontent-%COMP%]   .h_not_dest[_ngcontent-%COMP%] {\n    font-size: 22px;\n    line-height: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    \n    line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n\n.cnt_otra_not_dest[_ngcontent-%COMP%]   .cnt_inf_not_dest[_ngcontent-%COMP%] {\n    padding-left: 24px;\n    padding-right: 24px;\n}\n\n.cnt_otra_not_dest[_ngcontent-%COMP%]:hover   .img_not_dest[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: scale(1.1);\n}\n\n.cnt_bot_not[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    padding: 40px 0;\n}\n\n.col_gen_list_not[_ngcontent-%COMP%] {\n    width: 77%;\n    position: relative;\n}\n\n.row_h_list_not[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 16px 0;\n}\n\n.h_not_recientes[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-weight: 900;\n    color: var(--color-c2);\n}\n\n.sep_list_not[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    height: 1px;\n    background: #E0E0E0;\n}\n\n[_nghost-%COMP%]     .paginador_list_not a {\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    text-align: center;\n    display: inline-block;\n    vertical-align: middle;\n    border-radius: 50%;\n    background: #F0F2F7;\n    border: 1px solid #0A102D;\n    color: var(--c_pri);\n    cursor: pointer;\n    margin: 0 4px;\n}\n\n[_nghost-%COMP%]     .paginador_list_not {\n    color: red;\n}\n\n[_nghost-%COMP%]     .paginador_list_not a:hover {\n    background: var(--c_pri);\n    color: #fff;\n}\n\n[_nghost-%COMP%]     .paginador_list_not .jp-disabled {\n    pointer-events: none;\n    opacity: 20%;\n}\n\n[_nghost-%COMP%]     .paginador_list_not .jp-current {\n    background: var(--c_pri);\n    color: #fff;\n}\n\n.list_not[_ngcontent-%COMP%] {\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 20px 24px;\n}\n\n.itm_list_not[_ngcontent-%COMP%] {\n    height: 280px;\n    overflow: hidden;\n    border-radius: 15px;\n    position: relative;\n    transition: all 0.4s;\n}\n\n.itm_list_not[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 30px 40px -20px rgba(0, 0, 0, 0.5);\n    z-index: 1;\n}\n\n.itm_list_not[_ngcontent-%COMP%]:hover   .img_not_list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: scale(1.1);\n}\n\n.img_not_list[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n.img_not_list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    display: block;\n    object-fit: cover;\n    transition: all 0.6s;\n}\n\n.catedoria[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 4px 16px 4px 12px;\n    background: var(--color-c2);\n    font-size: 12px;\n    color: #fff;\n    border-radius: 0 0 0 8px;\n}\n\n.cnt_inf_nota_list[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 102px;\n    position: absolute;\n    bottom: 16px;\n    left: 5%;\n    box-sizing: border-box;\n    padding: 10px 16px;\n    background: rgba(255, 255, 255, 0.6);\n    background-blend-mode: overlay, normal;\n    -webkit-backdrop-filter: blur(5px);\n            backdrop-filter: blur(5px);\n    border-radius: 8px;\n}\n\n.cnt_inf_nota_list[_ngcontent-%COMP%]   .row_fecha[_ngcontent-%COMP%] {\n    padding: 4px 0;\n}\n\n.cnt_inf_nota_list[_ngcontent-%COMP%]   .ic_fech_not[_ngcontent-%COMP%], .cnt_inf_nota_list[_ngcontent-%COMP%]   .fecha_nota[_ngcontent-%COMP%] {\n    color: #1A6BE5;\n}\n\n.cnt_inf_nota_list[_ngcontent-%COMP%]   .ic_fech_not[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n}\n\n.cnt_inf_nota_list[_ngcontent-%COMP%]   .fecha_nota[_ngcontent-%COMP%] {\n    font-weight: 700;\n}\n\n.txt_not_list[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 800;\n    color: var(--color-c2);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    \n    line-clamp: 3;\n    -webkit-box-orient: vertical;\n}\n\n.col_post_dest[_ngcontent-%COMP%] {\n    width: 23%;\n    position: relative;\n}\n\n.ctn_lat_post_dets[_ngcontent-%COMP%] {\n    width: 100%;\n    background: #F0F2F7;\n    border: 1px solid #D7D7D7;\n    border-radius: 15px;\n    position: sticky;\n    top: 130px;\n    overflow: hidden;\n}\n\n.h_post_dest[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 8px 16px;\n    font-size: 28px;\n    font-weight: 900;\n    color: var(--c_pri);\n    background: #CED2DD;\n}\n\n.list_post_dest[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: 16px 24px;\n}\n\n.itm_post_dest[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 8px 0;\n    border-bottom: 1px solid #d7d7d7;\n}\n\n.itm_post_dest[_ngcontent-%COMP%]   .row_fecha[_ngcontent-%COMP%] {\n    padding: 4px 0;\n}\n\n.itm_post_dest[_ngcontent-%COMP%]   .ic_fech_not[_ngcontent-%COMP%], .itm_post_dest[_ngcontent-%COMP%]   .fecha_nota[_ngcontent-%COMP%] {\n    color: #1A6BE5;\n}\n\n.itm_post_dest[_ngcontent-%COMP%]   .ic_fech_not[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n}\n\n.itm_post_dest[_ngcontent-%COMP%]   .fecha_nota[_ngcontent-%COMP%] {\n    font-weight: 700;\n}\n\n.itm_post_dest[_ngcontent-%COMP%]   .txt_not_list[_ngcontent-%COMP%] {\n    font-weight: 600;\n    transition: all 0.3s;\n}\n\n.itm_post_dest[_ngcontent-%COMP%]:hover   .txt_not_list[_ngcontent-%COMP%] {\n    color: #1A6BE5;\n}\n\n.itm_post_dest[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n}\n\n\n\n@media screen and (max-width: 1050px) {\n    .cnt_tob_not_dest[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .cnt_not_dest[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 400px;\n    }\n\n    .col_top_dest[_ngcontent-%COMP%] {\n        width: 100%;\n        flex-direction: row;\n    }\n\n    .cnt_bot_not[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .col_gen_list_not[_ngcontent-%COMP%], .col_post_dest[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .list_post_dest[_ngcontent-%COMP%] {\n        flex-direction: row;\n        justify-content: space-between;\n        flex-wrap: wrap;\n    }\n\n    .itm_post_dest[_ngcontent-%COMP%] {\n        width: 48%;\n    }\n\n    .itm_post_dest[_ngcontent-%COMP%]:last-child {\n        border-bottom: 1px solid #D7D7D7;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .cnt_otra_not_dest[_ngcontent-%COMP%]   .h_not_dest[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n\n    [_nghost-%COMP%]     .paginador_list_not a {\n        width: 30px;\n        height: 30px;\n        line-height: 30px;\n        font-size: 14px;\n        margin: 0 2px;\n    }\n\n    [_nghost-%COMP%]     .paginador_list_not a:hover {\n        background: var(--c_pri);\n        color: #fff;\n    }\n\n    .list_not[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, 1fr);\n        gap: 16px;\n    }\n\n    .list_post_dest[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .itm_post_dest[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .itm_post_dest[_ngcontent-%COMP%]:last-child {\n        border-bottom: none;\n    }\n\n    .row_h_gen_noticias[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n\n    .h_not_recientes[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .cnt_inf_not_dest[_ngcontent-%COMP%] {\n        padding: 40px 16px 24px;\n    }\n\n    .h_not_dest[_ngcontent-%COMP%] {\n        font-size: 20px;\n        line-height: 22px;\n    }\n\n    .txt_not_dest[_ngcontent-%COMP%] {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 3;\n        \n        line-clamp: 3;\n        -webkit-box-orient: vertical;\n    }\n\n    .col_top_dest[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .row_h_list_not[_ngcontent-%COMP%] {\n        flex-direction: column;\n        gap: 0;\n    }\n\n    .sep_list_not[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .row_fecha[_ngcontent-%COMP%]   .ic_fech_not[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .itm_list_not[_ngcontent-%COMP%] {\n        height: 200px;\n    }\n\n    .cnt_inf_nota_list[_ngcontent-%COMP%] {\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        padding: 8px;\n        height: auto;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n    }\n\n    .fecha_nota[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n\n    .txt_not_list[_ngcontent-%COMP%] {\n        font-size: 12px;\n    }\n}\n/*# sourceMappingURL=noticias.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsU0FBUztJQUNULHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsd0lBQXdJO0lBQ3hJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsMkZBQTJGO0lBQzNGLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwwQkFBMEI7QUFDOUI7O0FB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Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLHFDQUFxQztRQUNyQyxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUM1QixhQUFhO1FBQ2IsNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLE1BQU07SUFDVjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLE9BQU87UUFDUCxTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUEsdUNBQXVDIiwiZmlsZSI6ImJsb2ctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNudF9nZW5fbm90aWNpYXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJvd19oX2dlbl9ub3RpY2lhcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDMycHg7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWMyKTtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMycHggMDtcbn1cblxuLnJvd19oX2dlbl9ub3RpY2lhczo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7XG59XG5cbi5jbnRfdG9iX25vdF9kZXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbn1cblxuLmNudF9ub3RfZGVzdCB7XG4gICAgd2lkdGg6IDYyJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jbnRfbm90X2Rlc3Q6aG92ZXIgLmltZ19ub3RfZGVzdCBpbWcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmNudF9ub3RfZGVzdDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcGF4enVwcnVlYmFzLmNvbS9tYXF1ZXRhcy9vaWtvc19jb25zdHJ1Y3RvcmEvbnVldmEvaW1hZ2VzL2Rpc2Vuby9wcm95ZWN0b3Nfdml2aWVuZGEvcHVudG9zLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIHJpZ2h0OiAxNnB4O1xufVxuXG4uaW1nX25vdF9kZXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltZ19ub3RfZGVzdCBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jbnRfaW5mX25vdF9kZXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyMTcsIDIxNywgMjE3LCAwKSAyOC42NSUsIHJnYmEoMCwgMCwgMCwgMC43KSAxMDAlKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDEyMHB4IDQwcHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5jYXRfbm90IHtcbiAgICBiYWNrZ3JvdW5kOiAjRkRCNzE4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5yb3dfZmVjaGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5pY19mZWNoX25vdCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mZWNoYV9ub3RhIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHZhcigtLWNfcHJpKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmF1dG9yX25vdGEge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBjb2xvcjogdmFyKC0tY19wcmkpO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYXV0b3Jfbm90YSBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaF9ub3RfZGVzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5cbi50eHRfbm90X2Rlc3Qge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bl9ub3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tY19wcmkpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5jb2xfdG9wX2Rlc3Qge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMjBweDtcbn1cblxuLmNudF9vdHJhX25vdF9kZXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAyNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY250X290cmFfbm90X2Rlc3QgLmhfbm90X2Rlc3Qge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xuICAgIGxpbmUtY2xhbXA6IDI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLmNudF9vdHJhX25vdF9kZXN0IC5jbnRfaW5mX25vdF9kZXN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcbn1cblxuLmNudF9vdHJhX25vdF9kZXN0OmhvdmVyIC5pbWdfbm90X2Rlc3QgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5jbnRfYm90X25vdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogNDBweCAwO1xufVxuXG4uY29sX2dlbl9saXN0X25vdCB7XG4gICAgd2lkdGg6IDc3JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yb3dfaF9saXN0X25vdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBwYWRkaW5nOiAxNnB4IDA7XG59XG5cbi5oX25vdF9yZWNpZW50ZXMge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1jMik7XG59XG5cbi5zZXBfbGlzdF9ub3Qge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnBhZ2luYWRvcl9saXN0X25vdCBhIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMkY3O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwQTEwMkQ7XG4gICAgY29sb3I6IHZhcigtLWNfcHJpKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwIDRweDtcbn1cbjpob3N0IDo6bmctZGVlcCAucGFnaW5hZG9yX2xpc3Rfbm90IHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnBhZ2luYWRvcl9saXN0X25vdCBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jX3ByaSk7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucGFnaW5hZG9yX2xpc3Rfbm90IC5qcC1kaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMjAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnBhZ2luYWRvcl9saXN0X25vdCAuanAtY3VycmVudCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY19wcmkpO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubGlzdF9ub3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBnYXA6IDIwcHggMjRweDtcbn1cblxuLml0bV9saXN0X25vdCB7XG4gICAgaGVpZ2h0OiAyODBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4uaXRtX2xpc3Rfbm90OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNDBweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgei1pbmRleDogMTtcbn1cblxuLml0bV9saXN0X25vdDpob3ZlciAuaW1nX25vdF9saXN0IGltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uaW1nX25vdF9saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWdfbm90X2xpc3QgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnM7XG59XG5cbi5jYXRlZG9yaWEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogNHB4IDE2cHggNHB4IDEycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYzIpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCA4cHg7XG59XG5cbi5jbnRfaW5mX25vdGFfbGlzdCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDEwMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE2cHg7XG4gICAgbGVmdDogNSU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheSwgbm9ybWFsO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNudF9pbmZfbm90YV9saXN0IC5yb3dfZmVjaGEge1xuICAgIHBhZGRpbmc6IDRweCAwO1xufVxuXG4uY250X2luZl9ub3RhX2xpc3QgLmljX2ZlY2hfbm90LFxuLmNudF9pbmZfbm90YV9saXN0IC5mZWNoYV9ub3RhIHtcbiAgICBjb2xvcjogIzFBNkJFNTtcbn1cblxuLmNudF9pbmZfbm90YV9saXN0IC5pY19mZWNoX25vdCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jbnRfaW5mX25vdGFfbGlzdCAuZmVjaGFfbm90YSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnR4dF9ub3RfbGlzdCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWMyKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xuICAgIGxpbmUtY2xhbXA6IDM7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLmNvbF9wb3N0X2Rlc3Qge1xuICAgIHdpZHRoOiAyMyU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3RuX2xhdF9wb3N0X2RldHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNGMEYyRjc7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q3RDdENztcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAxMzBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaF9wb3N0X2Rlc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiB2YXIoLS1jX3ByaSk7XG4gICAgYmFja2dyb3VuZDogI0NFRDJERDtcbn1cblxuLmxpc3RfcG9zdF9kZXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xufVxuXG4uaXRtX3Bvc3RfZGVzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogOHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkN2Q3ZDc7XG59XG5cbi5pdG1fcG9zdF9kZXN0IC5yb3dfZmVjaGEge1xuICAgIHBhZGRpbmc6IDRweCAwO1xufVxuXG4uaXRtX3Bvc3RfZGVzdCAuaWNfZmVjaF9ub3QsXG4uaXRtX3Bvc3RfZGVzdCAuZmVjaGFfbm90YSB7XG4gICAgY29sb3I6ICMxQTZCRTU7XG59XG5cbi5pdG1fcG9zdF9kZXN0IC5pY19mZWNoX25vdCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pdG1fcG9zdF9kZXN0IC5mZWNoYV9ub3RhIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaXRtX3Bvc3RfZGVzdCAudHh0X25vdF9saXN0IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uaXRtX3Bvc3RfZGVzdDpob3ZlciAudHh0X25vdF9saXN0IHtcbiAgICBjb2xvcjogIzFBNkJFNTtcbn1cblxuLml0bV9wb3N0X2Rlc3Q6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLyogUkVTUE9OSVNJVkUgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuICAgIC5jbnRfdG9iX25vdF9kZXN0IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuY250X25vdF9kZXN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgfVxuXG4gICAgLmNvbF90b3BfZGVzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cblxuICAgIC5jbnRfYm90X25vdCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmNvbF9nZW5fbGlzdF9ub3QsXG4gICAgLmNvbF9wb3N0X2Rlc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubGlzdF9wb3N0X2Rlc3Qge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAuaXRtX3Bvc3RfZGVzdCB7XG4gICAgICAgIHdpZHRoOiA0OCU7XG4gICAgfVxuXG4gICAgLml0bV9wb3N0X2Rlc3Q6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDdEN0Q3O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY250X290cmFfbm90X2Rlc3QgLmhfbm90X2Rlc3Qge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5wYWdpbmFkb3JfbGlzdF9ub3QgYSB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogMCAycHg7XG4gICAgfVxuXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5wYWdpbmFkb3JfbGlzdF9ub3QgYTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNfcHJpKTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLmxpc3Rfbm90IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cblxuICAgIC5saXN0X3Bvc3RfZGVzdCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLml0bV9wb3N0X2Rlc3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuaXRtX3Bvc3RfZGVzdDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG5cbiAgICAucm93X2hfZ2VuX25vdGljaWFzIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cblxuICAgIC5oX25vdF9yZWNpZW50ZXMge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5jbnRfaW5mX25vdF9kZXN0IHtcbiAgICAgICAgcGFkZGluZzogNDBweCAxNnB4IDI0cHg7XG4gICAgfVxuXG4gICAgLmhfbm90X2Rlc3Qge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIH1cblxuICAgIC50eHRfbm90X2Rlc3Qge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cbiAgICAgICAgbGluZS1jbGFtcDogMztcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICB9XG5cbiAgICAuY29sX3RvcF9kZXN0IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAucm93X2hfbGlzdF9ub3Qge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDA7XG4gICAgfVxuXG4gICAgLnNlcF9saXN0X25vdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnJvd19mZWNoYSAuaWNfZmVjaF9ub3Qge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5pdG1fbGlzdF9ub3Qge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cblxuICAgIC5jbnRfaW5mX25vdGFfbGlzdCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAuZmVjaGFfbm90YSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAudHh0X25vdF9saXN0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bm90aWNpYXMuY3NzLm1hcCAqLyJdfQ== */"]
});

/***/ }),

/***/ 7280:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/api/blog.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogService": () => (/* binding */ BlogService)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_core_models_blog_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/blog.model */ 5731);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);






const BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.base_url;
class BlogService {
  constructor(_http) {
    this._http = _http;
    this.currentBlogs = [];
    this.currentNumPage = 1;
    this.remainingPages = 0;
    this.activeBlog = new src_app_core_models_blog_model__WEBPACK_IMPORTED_MODULE_1__.Blog();
  }

  getMainNew() {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${BASE_URL}api/v1/getMainNews`;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this._http.get(url)).then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }

  getSecondMainNews() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${BASE_URL}api/v1/getMain3News`;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this2._http.get(url)).then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }

  getMostRecentNews(query) {
    var _this3 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${BASE_URL}api/v1/getNewsPages${query}`;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this3._http.get(url)).then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }

  getInterestNews() {
    var _this4 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${BASE_URL}api/v1/getInterestNews`;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this4._http.get(url)).then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }

  getDetailNewBySlug(slug) {
    var _this5 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${BASE_URL}api/v1/getDetailNews?slug=${slug}`;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this5._http.get(url)).then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }

}

BlogService.ɵfac = function BlogService_Factory(t) {
  return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};

BlogService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: BlogService,
  factory: BlogService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_blog_blog_module_ts.js.map
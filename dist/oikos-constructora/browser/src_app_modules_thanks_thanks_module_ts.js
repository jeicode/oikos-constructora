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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 5480);
/* harmony import */ var src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/functions/config.service */ 4130);
/* harmony import */ var _shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/slide-projects/slide-projects.component */ 5141);







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
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
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
  return new (t || ThanksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_1__.PageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_functions_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};

ThanksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ThanksComponent,
  selectors: [["app-thanks"]],
  decls: 22,
  vars: 2,
  consts: [[1, "bg_gracias"], [1, "s_gracias_404"], [1, "cnt_central"], [1, "c_gracias_404"], ["width", "393", "height", "240", "src", "assets/images/diseno/gracias_404/gracias_img.png", "alt", ""], ["routerLink", "/", 1, "btn", "al-center"], [1, "s_carr_proy"], [1, "bg_round"], [1, "title_section", "al_center"], [1, "cnt_car_proy_dest"]],
  template: function ThanksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Volver al inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "section", 6)(13, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 2)(16, "h2", 8)(17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Proyectos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " en construcci\u00F3n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "app-slide-projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.data.texto1_gracias_proyecto);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.data.texto2_gracias_proyecto);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_3__.SlideProjectsComponent],
  styles: [".c_gracias_404[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  padding: 40px 20px 100px;\n}\n\n.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n\n.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: -30%;\n  top: 30%;\n  width: 76px;\n  height: 43px;\n  background: url('puntos1.svg') no-repeat center;\n  background-size: contain;\n  z-index: 1;\n}\n\n.c_gracias_404[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: -20%;\n  top: 15%;\n  width: 20px;\n  height: 70px;\n  background: url('puntos2.svg') no-repeat center;\n  background-size: contain;\n  z-index: 1;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 53px;\n  background: linear-gradient(180deg, #2C3EA0 0%, #131D54 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-fill-color: transparent;\n  margin: 0 0 10px;\n  line-height: 1;\n}\n\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n\n\n\n.txt_page[_ngcontent-%COMP%] {\n  font-size: 20px;\n  max-width: 530px;\n  margin: 0 0 20px;\n}\n\n.c_404[_ngcontent-%COMP%] {\n  height: 60vh;\n  padding: 60px 0 100px;\n  position: relative;\n}\n\n.c_404[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 40px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n  max-width: 600px;\n  height: 100%;\n  max-height: 90px;\n  background: url('tuercas.svg') no-repeat center;\n  background-size: contain;\n}\n\n.c_404[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n.bg_gracias[_ngcontent-%COMP%] {\n  background: linear-gradient(to top, rgba(233, 237, 247, 0.16), #E8EBF1);\n  background-blend-mode: normal, color;\n  position: relative;\n  padding-top: 40px;\n}\n\n.bg_gracias[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 300;\n  margin: 40px 0 10px;\n  text-align: center;\n}\n\n.bg_gracias[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n\n.bg_gracias[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1.3;\n  color: #131D54;\n  max-width: 550px;\n  margin: 0px auto 30px;\n  text-align: center;\n}\n\n.bg_gracias[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 2%;\n  top: 10%;\n  background: url('puntos2.svg') no-repeat center;\n  background-size: contain;\n  width: 30px;\n  height: 90px;\n}\n\n.bg_gracias[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  right: 2%;\n  bottom: 10%;\n  background: url('puntos2.svg') no-repeat center;\n  background-size: contain;\n  width: 30px;\n  height: 90px;\n  transform: rotate(180deg);\n}\n\n@media screen and (max-width: 480px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n\n  .c_gracias_404[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-top: 0;\n    padding-right: 0;\n    margin: -40px 0 0;\n  }\n\n  picture[_ngcontent-%COMP%]:before, picture[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n\n  .c_404[_ngcontent-%COMP%] {\n    height: initial;\n    margin-top: 0;\n    padding-top: 60px;\n  }\n}\n/*# sourceMappingURL=gracias_404.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoYW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWiwrQ0FBK0Y7RUFDL0Ysd0JBQXdCO0VBQ3hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLCtDQUErRjtFQUMvRix3QkFBd0I7RUFDeEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZEQUE2RDtFQUM3RCw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7OztHQU1HOztBQUVIO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwrQ0FBK0Y7RUFDL0Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUVBQXVFO0VBQ3ZFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7RUFDUiwrQ0FBK0Y7RUFDL0Ysd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsK0NBQStGO0VBQy9GLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBLDBDQUEwQyIsImZpbGUiOiJ0aGFua3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jX2dyYWNpYXNfNDA0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNDBweCAyMHB4IDEwMHB4O1xufVxuXG4uY19ncmFjaWFzXzQwNCBwaWN0dXJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNfZ3JhY2lhc180MDQgcGljdHVyZSBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uY19ncmFjaWFzXzQwNCBwaWN0dXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTMwJTtcbiAgdG9wOiAzMCU7XG4gIHdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGlzZW5vL2dyYWNpYXNfNDA0L3B1bnRvczEuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgei1pbmRleDogMTtcbn1cblxuLmNfZ3JhY2lhc180MDQgcGljdHVyZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yMCU7XG4gIHRvcDogMTUlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9ncmFjaWFzXzQwNC9wdW50b3MyLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHotaW5kZXg6IDE7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA1M3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMkMzRUEwIDAlLCAjMTMxRDU0IDEwMCUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIHRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5oMSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLyogaDIge1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICBtYXJnaW46IDMwcHggMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAqL1xuXG4udHh0X3BhZ2Uge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1heC13aWR0aDogNTMwcHg7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG59XG5cbi5jXzQwNCB7XG4gIGhlaWdodDogNjB2aDtcbiAgcGFkZGluZzogNjBweCAwIDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jXzQwNDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0MHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA5MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9ncmFjaWFzXzQwNC90dWVyY2FzLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5jXzQwNCAuYnRuIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYmdfZ3JhY2lhcyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjMzLCAyMzcsIDI0NywgMC4xNiksICNFOEVCRjEpO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbCwgY29sb3I7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5iZ19ncmFjaWFzIGgxIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luOiA0MHB4IDAgMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmdfZ3JhY2lhcyBoMSBiIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmJnX2dyYWNpYXMgaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjMTMxRDU0O1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICBtYXJnaW46IDBweCBhdXRvIDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJnX2dyYWNpYXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMiU7XG4gIHRvcDogMTAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rpc2Vuby9ncmFjaWFzXzQwNC9wdW50b3MyLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbi5iZ19ncmFjaWFzOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIlO1xuICBib3R0b206IDEwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaXNlbm8vZ3JhY2lhc180MDQvcHVudG9zMi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG5cbiAgLmNfZ3JhY2lhc180MDQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIG1hcmdpbjogLTQwcHggMCAwO1xuICB9XG5cbiAgcGljdHVyZTpiZWZvcmUsXG4gIHBpY3R1cmU6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY180MDQge1xuICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWdyYWNpYXNfNDA0LmNzcy5tYXAgKi8iXX0= */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _thanks_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thanks-routing.module */ 9657);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/components.module */ 5626);
/* harmony import */ var _pages_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/thanks/thanks.component */ 1910);
/* harmony import */ var src_app_shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/slide-projects/slide-projects.component */ 5141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class ThanksModule {
}
ThanksModule.ɵfac = function ThanksModule_Factory(t) { return new (t || ThanksModule)(); };
ThanksModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ThanksModule });
ThanksModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _thanks_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThanksRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentSharedModule,
        // standolnes
        src_app_shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_3__.SlideProjectsComponent] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ThanksModule, { declarations: [_pages_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_2__.ThanksComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _thanks_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThanksRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentSharedModule,
        // standolnes
        src_app_shared_components_slide_projects_slide_projects_component__WEBPACK_IMPORTED_MODULE_3__.SlideProjectsComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_thanks_thanks_module_ts.js.map
"use strict";
(self["webpackChunkoikos_constructora"] = self["webpackChunkoikos_constructora"] || []).push([["common"],{

/***/ 221:
/*!********************************************************!*\
  !*** ./src/app/shared/services/api/project.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectService": () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);





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
   * @returns Promise<any>
   */


  getProyectosByTipo(tipo) {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getProyectosByTipo?tipo=${tipo}`;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this._http.get(url)).then().catch(err => {
        console.warn(err);
        return false;
      });
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
  return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

ProjectService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ProjectService,
  factory: ProjectService.ɵfac,
  providedIn: 'root'
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


/***/ }),

/***/ 4363:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstValueFrom": () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 4423);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 9904);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map
"use strict";
(self["webpackChunkoikos_constructora"] = self["webpackChunkoikos_constructora"] || []).push([["common"],{

/***/ 1657:
/*!*************************************************!*\
  !*** ./src/app/core/models/breadcrumb.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Breadcrumb": () => (/* binding */ Breadcrumb)
/* harmony export */ });
class Breadcrumb {
    constructor(title = '', link = '') {
        this.title = title;
        this.link = link;
    }
}


/***/ }),

/***/ 1299:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_models_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/breadcrumb.model */ 1657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






function BreadcrumbComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r0.colorTxt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", i_r1 == null ? null : i_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r1 == null ? null : i_r1.title);
} }
class BreadcrumbComponent {
    constructor(router) {
        this.router = router;
        this.cssClass = "";
        this.colorTxt =  false || "black";
        this.crumbTitle = "";
        this.breadcrumbs = [];
        this.numberRoutesToDelete = 0;
        this.test = 0;
    }
    ngOnInit() {
        let paths = this.router.url.split('/');
        const { paths: completePaths, crumbTitle } = this.deletePathsInRoute(paths);
        paths = completePaths;
        if (!this.crumbTitle) {
            this.crumbTitle = this.capitalizeFirstLetter(crumbTitle[0]);
        }
        let linkBuilder = '';
        this.breadcrumbs = paths.map(p => {
            linkBuilder += `${p}/`;
            const crumb = new src_app_core_models_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Breadcrumb();
            crumb.title = this.capitalizeFirstLetter(p);
            crumb.link = linkBuilder;
            return crumb;
        });
    }
    /**
     *
     * @param paths ex: 'noticias/'
     * @returns
     */
    deletePathsInRoute(paths) {
        let pathsLen = paths.length;
        if (this.numberRoutesToDelete && this.numberRoutesToDelete < pathsLen) {
            paths.splice(paths.length - this.numberRoutesToDelete, pathsLen);
        }
        const crumbTitle = paths.splice(pathsLen - 1, pathsLen);
        return { paths, crumbTitle };
    }
    /**
     * Convert first letter to uppercase
     * @param title
     * @returns
     */
    capitalizeFirstLetter(title) {
        if (!title)
            return 'Oikos Constructora';
        return title.charAt(0).toUpperCase() + title.slice(1);
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { cssClass: "cssClass", colorTxt: "colorTxt", crumbTitle: "crumbTitle", breadcrumbs: "breadcrumbs", numberRoutesToDelete: "numberRoutesToDelete", test: "test" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 4, vars: 6, consts: [[1, "miga"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "fas", "fa-chevron-right"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BreadcrumbComponent_div_1_Template, 4, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.colorTxt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx.colorTxt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.crumbTitle);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 9019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    base_url: 'https://adminpaxzu-devcons.oikos.com.co/',
    api_url: 'https://adminpaxzu-devcons.oikos.com.co/api/',
    token: 'aff7d877-d0ff-4dfa-a85c-d9715ea82061',
    imagenes_url: 'https://adminpaxzu-devcons.oikos.com.co/', //establecer el subdominio para esta sección
};


/***/ })

}]);
//# sourceMappingURL=common.js.map
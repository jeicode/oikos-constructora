"use strict";
(self["webpackChunkoikos_constructora"] = self["webpackChunkoikos_constructora"] || []).push([["src_app_modules_contact_contact_module_ts"],{

/***/ 849:
/*!**********************************************!*\
  !*** ./src/app/core/models/project.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(active = "", alt_banner = "", alt_fondo = "", alt_lateral_proyecto = "", alt_logo = "", alt_principal = "", api_wsp = "", area = "", bandera = "", bodegas = "", calculadora = "", canonical = "", categoria_proyecto = "", celular_salaventas = "", centros_comerciales = "", color_primario = "", color_secundario = "", cuotaminima = "", descripcion_proyecto = "", destacar = "", destacar2 = "", direccion_proyecto = "", direccion_salaventas = "", director_ventas = "", email = "", email_contactos = "", enlace_wsp_proyecto = "", estado_proyecto = "", facebook_lead = "", fecha = "", footer = "", gracias_proyecto = "", horario = "", id = "", id_origen_sinco = "", id_proyecto_sinco = "", id_sinco = "", id_smartcalculadora = "", id_smartcontacto = "", imagen_banner_proyecto = "", imagen_fondo_proyecto = "", imagen_lateral_proyecto = "", imagen_og_proyecto = "", imagen_principal_proyecto = "", interna = "", local_comercial = "", local_comida = "", logo_proyecto = "", metadescription = "", metatitle = "", msg_wsp_flotante = "", msg_wsp_home = "", msg_wsp_interna = "", ord = "", porcentaje_minimo = "", porcentaje_separacion = "", redirigir = "", resumen_proyecto = "", seccion = "", subsidio = "", telefono_salaventas = "", texto_adicional = "", texto_video = "", tipo_proyecto = "", title_banner = "", title_fondo = "", title_lateral_proyecto = "", title_logo = "", title_principal = "", titulo_proyecto = "", tourguiado = "", ubicacion_proyecto = "", url_amigable = "", url_video = "", url_waze = "", valor_proyecto = "", valor_proyecto_formato = "", vista360 = "", wsp_flotante = "", wsp_home = "", wsp_interna = "", zona_proyecto = '', galeria = [], planos = [], tipologia = [], avances = [], zonas = [], cuota_inicial = "", cuota_separacion = "", saldo_cuota = "", numero_cuotas = [], financiar = "") {
        this.active = active;
        this.alt_banner = alt_banner;
        this.alt_fondo = alt_fondo;
        this.alt_lateral_proyecto = alt_lateral_proyecto;
        this.alt_logo = alt_logo;
        this.alt_principal = alt_principal;
        this.api_wsp = api_wsp;
        this.area = area;
        this.bandera = bandera;
        this.bodegas = bodegas;
        this.calculadora = calculadora;
        this.canonical = canonical;
        this.categoria_proyecto = categoria_proyecto;
        this.celular_salaventas = celular_salaventas;
        this.centros_comerciales = centros_comerciales;
        this.color_primario = color_primario;
        this.color_secundario = color_secundario;
        this.cuotaminima = cuotaminima;
        this.descripcion_proyecto = descripcion_proyecto;
        this.destacar = destacar;
        this.destacar2 = destacar2;
        this.direccion_proyecto = direccion_proyecto;
        this.direccion_salaventas = direccion_salaventas;
        this.director_ventas = director_ventas;
        this.email = email;
        this.email_contactos = email_contactos;
        this.enlace_wsp_proyecto = enlace_wsp_proyecto;
        this.estado_proyecto = estado_proyecto;
        this.facebook_lead = facebook_lead;
        this.fecha = fecha;
        this.footer = footer;
        this.gracias_proyecto = gracias_proyecto;
        this.horario = horario;
        this.id = id;
        this.id_origen_sinco = id_origen_sinco;
        this.id_proyecto_sinco = id_proyecto_sinco;
        this.id_sinco = id_sinco;
        this.id_smartcalculadora = id_smartcalculadora;
        this.id_smartcontacto = id_smartcontacto;
        this.imagen_banner_proyecto = imagen_banner_proyecto;
        this.imagen_fondo_proyecto = imagen_fondo_proyecto;
        this.imagen_lateral_proyecto = imagen_lateral_proyecto;
        this.imagen_og_proyecto = imagen_og_proyecto;
        this.imagen_principal_proyecto = imagen_principal_proyecto;
        this.interna = interna;
        this.local_comercial = local_comercial;
        this.local_comida = local_comida;
        this.logo_proyecto = logo_proyecto;
        this.metadescription = metadescription;
        this.metatitle = metatitle;
        this.msg_wsp_flotante = msg_wsp_flotante;
        this.msg_wsp_home = msg_wsp_home;
        this.msg_wsp_interna = msg_wsp_interna;
        this.ord = ord;
        this.porcentaje_minimo = porcentaje_minimo;
        this.porcentaje_separacion = porcentaje_separacion;
        this.redirigir = redirigir;
        this.resumen_proyecto = resumen_proyecto;
        this.seccion = seccion;
        this.subsidio = subsidio;
        this.telefono_salaventas = telefono_salaventas;
        this.texto_adicional = texto_adicional;
        this.texto_video = texto_video;
        this.tipo_proyecto = tipo_proyecto;
        this.title_banner = title_banner;
        this.title_fondo = title_fondo;
        this.title_lateral_proyecto = title_lateral_proyecto;
        this.title_logo = title_logo;
        this.title_principal = title_principal;
        this.titulo_proyecto = titulo_proyecto;
        this.tourguiado = tourguiado;
        this.ubicacion_proyecto = ubicacion_proyecto;
        this.url_amigable = url_amigable;
        this.url_video = url_video;
        this.url_waze = url_waze;
        this.valor_proyecto = valor_proyecto;
        this.valor_proyecto_formato = valor_proyecto_formato;
        this.vista360 = vista360;
        this.wsp_flotante = wsp_flotante;
        this.wsp_home = wsp_home;
        this.wsp_interna = wsp_interna;
        this.zona_proyecto = zona_proyecto;
        this.galeria = galeria;
        this.planos = planos;
        this.tipologia = tipologia;
        this.avances = avances;
        this.zonas = zonas;
        this.cuota_inicial = cuota_inicial;
        this.cuota_separacion = cuota_separacion;
        this.saldo_cuota = saldo_cuota;
        this.numero_cuotas = numero_cuotas;
        this.financiar = financiar;
    }
}


/***/ }),

/***/ 1641:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/contact/components/calculate-form/calculate-form.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculateFormComponent": () => (/* binding */ CalculateFormComponent)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_models_project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/project.model */ 849);
/* harmony import */ var src_app_shared_data_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data/regex */ 1372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_functions_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/functions/form.service */ 961);
/* harmony import */ var src_app_shared_services_api_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/api/project.service */ 221);













function CalculateFormComponent_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo inv\u00E1lido*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function CalculateFormComponent_small_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo inv\u00E1lido*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function CalculateFormComponent_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo inv\u00E1lido*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function CalculateFormComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r9 == null ? null : i_r9.url_amigable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r9 == null ? null : i_r9.titulo_proyecto);
  }
}

function CalculateFormComponent_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo inv\u00E1lido*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function CalculateFormComponent_small_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Ingresa un valor entre ", ctx_r5.selectedProject.porcentaje_minimo, " y 100 ");
  }
}

function CalculateFormComponent_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r10 = ctx.$implicit;
    const j_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", i_r10.nro);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", j_r11 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r10.nro, " ");
  }
}

function CalculateFormComponent_small_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo inv\u00E1lido*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function CalculateFormComponent_small_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Debes aceptar la Pol\u00EDtica de Tratamiento de Datos*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0) {
  return {
    "disable-ele": a0
  };
};

class CalculateFormComponent {
  constructor(fb, formService, projectService, router) {
    this.fb = fb;
    this.formService = formService;
    this.projectService = projectService;
    this.router = router;
    this.showErrors = false;
    this.disableForm = true;
    this.housingProjects = [];
    this.selectedProject = new src_app_core_models_project_model__WEBPACK_IMPORTED_MODULE_1__.Project();
    this.datosCalc = [];
    this.datosCuota = [];
    this.datosAnio = [];
    this.porcFinanciar = 100;
    this.calculateForm = this.fb.group({
      full_name: ['', this.formService.noWhitespaceValidator],
      project_slug: ['', this.formService.noWhitespaceValidator],
      email: ['', [this.formService.noWhitespaceValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_shared_data_regex__WEBPACK_IMPORTED_MODULE_2__.regexEmail)]],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_shared_data_regex__WEBPACK_IMPORTED_MODULE_2__.regexNumber)])],
      initial_fee: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(100)])],
      total_fees: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])],
      termInYears: ['10'],
      terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.requiredTrue]
    });
  }

  ngOnInit() {
    this.getProjectsHome();
  }

  getProjectsHome() {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const housingProjects = yield _this.projectService.getProyectosByTipo('1');
      if (housingProjects) _this.housingProjects = housingProjects;
    })();
  }

  hasErrorsFieldForm(field) {
    const form = this.calculateForm;
    return this.formService.hasErrorsFieldForm(form, field, this.showErrors);
  }

  updateProjectSelected() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const [project] = yield _this2.projectService.getProyectoByUrl(_this2.calculateForm.value?.project_slug);

      if (project) {
        _this2.selectedProject = project;

        _this2.calculateForm.patchValue({
          'initial_fee': _this2.selectedProject.porcentaje_minimo
        });

        _this2.calculatePercentage();

        _this2.disableForm = false;
      } else {
        alert("Ocurrió un error, por favor contactése con el administrador");
      }
    })();
  }

  calculatePercentage() {
    var _this3 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        initial_fee,
        total_fees,
        termInYears
      } = _this3.calculateForm.getRawValue();

      let porcentaje = initial_fee;
      let cuotasinicialfinanciar = total_fees;
      let plazoaniosa = termInYears;
      let financiar = _this3.selectedProject.financiar;
      _this3.porcFinanciar = 100 - porcentaje;
      const [datosCalc] = yield _this3.projectService.getCalculoPorcentaje(_this3.selectedProject.valor_proyecto, porcentaje, cuotasinicialfinanciar, plazoaniosa, financiar);
      _this3.datosCalc = datosCalc;
      console.log("datosCalc ", datosCalc);
      $(".valorCuotaInicial").val('$ ' + _this3.datosCalc['cuotaInicial']);
      $(".diferencia").val('$ ' + _this3.datosCalc['diferencia']);

      if (_this3.datosCalc['cuotasinicialfinanciar'] != 'inf') {
        $(".cuotamensual").val('$ ' + _this3.datosCalc['cuotasinicialfinanciar']);
      }

      $(".valorafinanciar").val('$ ' + _this3.datosCalc['valorafinanciar']);

      _this3.termInYears();
    })();
  }

  diferenciadordecuotasmensuales() {
    var _this4 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var saldocuotainicial = $(".diferencia").val();
      var cuotasinicialfinanciar = $(".cuotasinicialfinanciar").val();
      _this4.datosCuota = yield _this4.projectService.getCalculoCuota(saldocuotainicial, cuotasinicialfinanciar);
      _this4.datosCuota = _this4.datosCuota[0];

      if (_this4.datosCuota['valorcuotas'] != 'inf') {
        $(".cuotamensual").val('$ ' + _this4.datosCuota['valorcuotas']);
      }
    })();
  }

  termInYears() {
    var _this5 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var cuota = _this5.calculateForm.getRawValue()?.termInYears;
      var valorafinanciar = $(".valorafinanciar").val();
      console.log("cuota ", cuota);
      console.log('%ccalculate-form.component.ts line:116 valorafinanciar', 'color: #007acc;', valorafinanciar);
      _this5.datosAnio = yield _this5.projectService.getPlazoanios(cuota, valorafinanciar);
      console.log("datosAnio ", _this5.datosAnio);
      _this5.datosAnio = _this5.datosAnio[0];
      $(".cuotahipoteca").val('$ ' + _this5.datosAnio['total']);
    })();
  }

  insertContact() {
    var _this6 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        nombre: _this6.calculateForm.controls['full_name']?.value,
        email: _this6.calculateForm.controls['email']?.value,
        telefono: _this6.calculateForm.controls['phone']?.value,
        cuotaInicial: _this6.calculateForm.controls['initial_fee']?.value,
        numeroCuotas: _this6.calculateForm.controls['total_fees']?.value,
        valorCuotaInicial: $(".valorCuotaInicial").val(),
        separacion: $(".separacion").val(),
        saldoCuotaInicial: $(".diferencia").val(),
        cuotamensual: $(".cuotamensual").val(),
        porcentajeFinanciar: $(".porcentajeFinanciar").val(),
        valorafinanciar: $(".valorafinanciar").val(),
        plazoaniosa: _this6.calculateForm.controls['termInYears']?.value,
        cuotahipoteca: $(".cuotahipoteca").val(),
        porcentajeseparacion: _this6.selectedProject.porcentaje_separacion,
        url_proyecto: window.location.href,
        proyecto: _this6.selectedProject.titulo_proyecto,
        valorProyecto: _this6.selectedProject.valor_proyecto,
        sendTo: _this6.selectedProject.email_contactos,
        id_proyecto: _this6.selectedProject.id
      };
      console.log(data);

      if (_this6.calculateForm.valid) {
        const {
          resp
        } = yield _this6.projectService.setCalculadoraForm(data);
        if (resp != 'no') _this6.router.navigateByUrl(resp);
      } else {
        _this6.showErrors = true;
      }
    })();
  }

}

CalculateFormComponent.ɵfac = function CalculateFormComponent_Factory(t) {
  return new (t || CalculateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_functions_form_service__WEBPACK_IMPORTED_MODULE_3__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_api_project_service__WEBPACK_IMPORTED_MODULE_4__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};

CalculateFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CalculateFormComponent,
  selectors: [["app-calculate-form"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
  decls: 90,
  vars: 19,
  consts: [[1, "form_mod_contacto", 3, "formGroup", "ngSubmit"], [1, "s_form_cnt"], [1, "cnt_campo_form"], ["formControlName", "full_name", "type", "text", "placeholder", "Nombre completo *", 1, "campo_form"], [1, "text-danger", 2, "height", "7px"], [4, "ngIf"], [1, "cnt_campo_form", "w_50"], ["type", "email", "placeholder", "Email *", "formControlName", "email", 1, "campo_form"], ["type", "tel", "placeholder", "Tel\u00E9fono *", "formControlName", "phone", 1, "campo_form"], [1, "etq_form_cnt"], ["formControlName", "project_slug", "name", "", "id", "", 1, "campo_form", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "calculate-container", 3, "ngClass"], ["for", ""], ["type", "number", "formControlName", "initial_fee", 1, "cambiarPorcentaje", 3, "min", "change"], ["formControlName", "total_fees", 1, "campo_form", "cuotasinicialfinanciar", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "cnt_campo_form", "w_30"], [1, "etq_form_cnt", "center"], ["type", "text", "readonly", "", 1, "campo_form", "filled", "valorCuotaInicial", 3, "value"], ["type", "text", "readonly", "", 1, "campo_form", "filled", "separacion", 3, "value"], ["type", "text", 1, "campo_form", "filled", "esp", "diferencia", 3, "value"], ["type", "text", "readonly", "", 1, "campo_form", "filled", "cuotamensual"], ["type", "text", "readonly", "", 1, "campo_form", "filled", "porcentajeFinanciar", 3, "value"], ["type", "text", "readonly", "", 1, "campo_form", "filled", "valorafinanciar", 3, "value"], ["formControlName", "termInYears", 1, "campo_form", 3, "change"], ["value", "10"], ["value", "15"], ["value", "20"], ["type", "text", "readonly", "", 1, "campo_form", "filled", "cuotahipoteca"], [1, "cont_politicas"], ["formControlName", "terms", "type", "checkbox", "name", "", "id", "politicas1"], ["for", "politicas1"], ["href", ""], [1, "row_btn"], ["type", "submit", 1, "btn"], [3, "value"], [3, "value", "selected"]],
  template: function CalculateFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function CalculateFormComponent_Template_form_ngSubmit_0_listener() {
        return ctx.insertContact();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CalculateFormComponent_small_5_Template, 2, 0, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CalculateFormComponent_small_9_Template, 2, 0, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CalculateFormComponent_small_13_Template, 2, 0, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "section", 1)(15, "div", 2)(16, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Elige el proyecto a cotizar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CalculateFormComponent_Template_select_change_18_listener() {
        return ctx.updateProjectSelected();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Selecciona el proyecto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CalculateFormComponent_option_21_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, CalculateFormComponent_small_23_Template, 2, 0, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13)(25, "section", 1)(26, "div", 6)(27, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Cuota inicial %");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CalculateFormComponent_Template_input_change_29_listener() {
        return ctx.calculatePercentage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, CalculateFormComponent_small_31_Template, 2, 1, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 6)(33, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "N\u00FAmero de cuotas");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CalculateFormComponent_Template_select_change_35_listener() {
        return ctx.diferenciadordecuotasmensuales();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, CalculateFormComponent_option_36_Template, 2, 3, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, CalculateFormComponent_small_38_Template, 2, 0, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 18)(40, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Valor cuota inicial");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 18)(44, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Separaci\u00F3n 2%");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 18)(48, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Saldo cuota inicial");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 18)(52, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Valor cuota mensual");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "section", 1)(56, "div", 6)(57, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Saldo a financiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 6)(61, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Valor");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "section", 1)(65, "div", 6)(66, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Plazo en a\u00F1os");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "select", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CalculateFormComponent_Template_select_change_68_listener() {
        return ctx.termInYears();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "10");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "15");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 6)(76, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Valor cuota hipotecaria");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Acepto y Autorizo la ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, " Pol\u00EDtica de Tratamiento de Datos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, CalculateFormComponent_small_86_Template, 2, 0, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 35)(88, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Enviar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.calculateForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("full_name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("phone"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.housingProjects);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("project_slug"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c0, ctx.disableForm));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", ctx.selectedProject.porcentaje_minimo);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("initial_fee"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.selectedProject.numero_cuotas);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("total_fees"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("value", "$ ", ctx.selectedProject.cuota_inicial, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("value", "$ ", ctx.selectedProject.cuota_separacion, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("value", "$ ", ctx.selectedProject.saldo_cuota, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.porcFinanciar);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("value", "$ ", ctx.selectedProject.financiar, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("terms"));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
  styles: [".cnt_gen_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n}\n\n.h_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 54px;\n    font-weight: 900;\n    color: var(--color-c2);\n    text-align: center;\n    padding: 48px 0 0;\n}\n\n.txt_contacto[_ngcontent-%COMP%] {\n    font-size: 15px;\n    width: 100%;\n    max-width: 657px;\n    margin: auto;\n    padding: 0 0 48px;\n    text-align: center;\n}\n\n.row_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding-bottom: 80px;\n}\n\n.mod_contacto[_ngcontent-%COMP%] {\n    width: 31%;\n    max-width: 374px;\n    height: 344px;\n    margin: 46px 1%;\n    overflow: hidden;\n    border-radius: 28px;\n    position: relative;\n    cursor: pointer;\n    transition: all 0.5s;\n    display: none;\n    animation: mod_in 1s forwards;\n}\n\n.mod_contacto[_ngcontent-%COMP%]:hover   .cnt_inf_mod_contacto[_ngcontent-%COMP%] {\n    bottom: 0;\n}\n\n.mod_contacto.active[_ngcontent-%COMP%] {\n    display: block;\n    opacity: 1;\n}\n\n@keyframes mod_in {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n.img_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n.img_mod_contacto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    display: block;\n    object-fit: cover;\n}\n\n.cnt_inf_mod_contacto[_ngcontent-%COMP%] {\n    width: 130%;\n    height: 55%;\n    position: absolute;\n    bottom: -34%;\n    left: 50%;\n    background: linear-gradient(180deg, #253482 0%, #182360 49.79%, #111B52 100%);\n    border-radius: 50% 50% 0 0;\n    transform: translateX(-50%);\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 0 20%;\n    transition: all 0.5s;\n}\n\n.ic_mod_contacto[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    background: linear-gradient(104.32deg, #FFFFFF 0%, #E4E4E4 100%), #C2C2C2;\n    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.47);\n    line-height: 40px;\n    text-align: center;\n    margin-top: -20px;\n    display: block;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.h_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 20px;\n    color: #fff;\n    font-weight: 900;\n    text-align: center;\n}\n\n.txt_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 14px;\n    color: #fff;\n    text-align: center;\n}\n\n.bnt_mod_contacto[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 16px;\n    color: rgb(96, 142, 255);\n    position: absolute;\n    bottom: 16px;\n}\n\n.cnt_form_mod_contacto[_ngcontent-%COMP%] {\n    width: 45%;\n    max-width: 587px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n    margin: 0 1%;\n    \n    animation: mod_in 1s forwards;\n}\n\n.cnt_form_mod_contacto.active_form[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.btn_volver_contacto[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    background: #FFFFFF;\n    border-radius: 46px;\n    padding: 2px 12px 2px 8px;\n    font-size: 20px;\n    font-weight: 800;\n    gap: 8px;\n    cursor: pointer;\n}\n\n.btn_volver_contacto[_ngcontent-%COMP%]:hover {\n    background: var(--color-c2);\n    color: #fff;\n}\n\n.form_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    background: #FFFFFF;\n    box-shadow: 0px 13px 34px -8px rgba(0, 0, 0, 0.25);\n    border-radius: 19px;\n    padding: 36px;\n}\n\n.s_form_cnt[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 16px 0;\n    border-bottom: 1px solid #ccc;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    row-gap: 16px;\n}\n\n.cnt_campo_form[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n}\n\n.cnt_campo_form.w_50[_ngcontent-%COMP%] {\n    width: 48%;\n}\n\n.cnt_campo_form.w_30[_ngcontent-%COMP%] {\n    width: 32%;\n}\n\n.campo_form[_ngcontent-%COMP%] {\n    height: 38px;\n    width: 100%;\n    background: #F2F2F2;\n    border: 1px solid #E1E1E1;\n    border-radius: 6px;\n    padding: 9px 10px;\n    box-sizing: border-box;\n    font-size: 13px;\n}\n\n.campo_form.filled[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: var(--color-c2);\n    text-align: center;\n    background: #E0E0E0;\n}\n\n.campo_form.filled.esp[_ngcontent-%COMP%] {\n    background: var(--color-c2);\n    color: #fff;\n}\n\n.etq_form_cnt[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 13px;\n    color: #626262;\n    padding-bottom: 4px;\n}\n\n.etq_form_cnt.center[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.form_mod_contacto[_ngcontent-%COMP%]   .cont_politicas[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 16px 0;\n}\n\n.form_mod_contacto[_ngcontent-%COMP%]   .row_btn[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.form_mod_contacto[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    min-width: 160px;\n    text-align: center;\n    justify-content: center;\n}\n\n\n\n@media screen and (max-width: 1050px) {\n    .h_contacto[_ngcontent-%COMP%] {\n        font-size: 40px;\n        padding-top: 24px;\n    }\n\n    .txt_contacto[_ngcontent-%COMP%] {\n        padding-bottom: 32px;\n    }\n\n    .mod_contacto[_ngcontent-%COMP%] {\n        height: 300px;\n    }\n\n    .cnt_inf_mod_contacto[_ngcontent-%COMP%] {\n        gap: 12px;\n    }\n\n    .cnt_form_mod_contacto[_ngcontent-%COMP%] {\n        width: 65%;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .row_mod_contacto[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .mod_contacto[_ngcontent-%COMP%] {\n        width: 100%;\n        height: auto;\n        margin: 8px 0;\n    }\n\n    .img_mod_contacto[_ngcontent-%COMP%] {\n        height: 200px;\n    }\n\n    .cnt_inf_mod_contacto[_ngcontent-%COMP%] {\n        position: relative;\n        bottom: inherit;\n        padding-bottom: 16px;\n        margin-top: -50px;\n    }\n\n    .bnt_mod_contacto[_ngcontent-%COMP%] {\n        position: relative;\n        bottom: inherit;\n    }\n\n    .bnt_mod_contacto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        transform: rotate(90deg);\n    }\n\n    .cnt_form_mod_contacto[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 16px 0;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .cnt_campo_form.w_30[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .cnt_campo_form.w_50[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n}\n\n.text-danger[_ngcontent-%COMP%] {\n    color: rgb(192, 57, 57);\n}\n\n.disable-ele[_ngcontent-%COMP%] {\n    opacity: .3;\n    cursor: default;\n}\n/*# sourceMappingURL=contacto.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULDZFQUE2RTtJQUM3RSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUVBQXlFO0lBQ3pFLDJD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LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbnRfZ2VuX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDU0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYzIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0OHB4IDAgMDtcbn1cblxuLnR4dF9jb250YWN0byB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjU3cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMCA0OHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvd19tb2RfY29udGFjdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4ubW9kX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMzElO1xuICAgIG1heC13aWR0aDogMzc0cHg7XG4gICAgaGVpZ2h0OiAzNDRweDtcbiAgICBtYXJnaW46IDQ2cHggMSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbmltYXRpb246IG1vZF9pbiAxcyBmb3J3YXJkcztcbn1cblxuLm1vZF9jb250YWN0bzpob3ZlciAuY250X2luZl9tb2RfY29udGFjdG8ge1xuICAgIGJvdHRvbTogMDtcbn1cblxuLm1vZF9jb250YWN0by5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbkBrZXlmcmFtZXMgbW9kX2luIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaW1nX21vZF9jb250YWN0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW1nX21vZF9jb250YWN0byBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNudF9pbmZfbW9kX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMTMwJTtcbiAgICBoZWlnaHQ6IDU1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMzQlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjUzNDgyIDAlLCAjMTgyMzYwIDQ5Ljc5JSwgIzExMUI1MiAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCAyMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5pY19tb2RfY29udGFjdG8ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTA0LjMyZGVnLCAjRkZGRkZGIDAlLCAjRTRFNEU0IDEwMCUpLCAjQzJDMkMyO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggN3B4IHJnYmEoMCwgMCwgMCwgMC40Nyk7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oX21vZF9jb250YWN0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udHh0X21vZF9jb250YWN0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJudF9tb2RfY29udGFjdG8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHJnYig5NiwgMTQyLCAyNTUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE2cHg7XG59XG5cbi5jbnRfZm9ybV9tb2RfY29udGFjdG8ge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWF4LXdpZHRoOiA1ODdweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbjogMCAxJTtcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAgIGFuaW1hdGlvbjogbW9kX2luIDFzIGZvcndhcmRzO1xufVxuXG4uY250X2Zvcm1fbW9kX2NvbnRhY3RvLmFjdGl2ZV9mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnRuX3ZvbHZlcl9jb250YWN0byB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogNDZweDtcbiAgICBwYWRkaW5nOiAycHggMTJweCAycHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGdhcDogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bl92b2x2ZXJfY29udGFjdG86aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWMyKTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmZvcm1fbW9kX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDM0cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XG4gICAgcGFkZGluZzogMzZweDtcbn1cblxuLnNfZm9ybV9jbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcm93LWdhcDogMTZweDtcbn1cblxuLmNudF9jYW1wb19mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbnRfY2FtcG9fZm9ybS53XzUwIHtcbiAgICB3aWR0aDogNDglO1xufVxuXG4uY250X2NhbXBvX2Zvcm0ud18zMCB7XG4gICAgd2lkdGg6IDMyJTtcbn1cblxuLmNhbXBvX2Zvcm0ge1xuICAgIGhlaWdodDogMzhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMUUxRTE7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2FtcG9fZm9ybS5maWxsZWQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYzIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xufVxuXG4uY2FtcG9fZm9ybS5maWxsZWQuZXNwIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jMik7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5ldHFfZm9ybV9jbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzYyNjI2MjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4uZXRxX2Zvcm1fY250LmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybV9tb2RfY29udGFjdG8gLmNvbnRfcG9saXRpY2FzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTZweCAwO1xufVxuXG4uZm9ybV9tb2RfY29udGFjdG8gLnJvd19idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmZvcm1fbW9kX2NvbnRhY3RvIC5idG4ge1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBSRVNQT05JU0lWRSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG4gICAgLmhfY29udGFjdG8ge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC50eHRfY29udGFjdG8ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAubW9kX2NvbnRhY3RvIHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG5cbiAgICAuY250X2luZl9tb2RfY29udGFjdG8ge1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgfVxuXG4gICAgLmNudF9mb3JtX21vZF9jb250YWN0byB7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5yb3dfbW9kX2NvbnRhY3RvIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubW9kX2NvbnRhY3RvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICB9XG5cbiAgICAuaW1nX21vZF9jb250YWN0byB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuXG4gICAgLmNudF9pbmZfbW9kX2NvbnRhY3RvIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3R0b206IGluaGVyaXQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICB9XG5cbiAgICAuYm50X21vZF9jb250YWN0byB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiBpbmhlcml0O1xuICAgIH1cblxuICAgIC5ibnRfbW9kX2NvbnRhY3RvIHNwYW4ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgfVxuXG4gICAgLmNudF9mb3JtX21vZF9jb250YWN0byB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmNudF9jYW1wb19mb3JtLndfMzAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY250X2NhbXBvX2Zvcm0ud181MCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnRleHQtZGFuZ2VyIHtcbiAgICBjb2xvcjogcmdiKDE5MiwgNTcsIDU3KTtcbn1cblxuLmRpc2FibGUtZWxlIHtcbiAgICBvcGFjaXR5OiAuMztcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRhY3RvLmNzcy5tYXAgKi8iXX0= */"]
});

/***/ }),

/***/ 1154:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/contact/components/contact-form/contact-form.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactFormComponent": () => (/* binding */ ContactFormComponent)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_data_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data/regex */ 1372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_functions_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/functions/form.service */ 961);
/* harmony import */ var src_app_shared_services_api_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api/contact.service */ 1816);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 5480);













function ContactFormComponent_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo inv\u00E1lido*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function ContactFormComponent_small_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo inv\u00E1lido*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function ContactFormComponent_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo inv\u00E1lido*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function ContactFormComponent_div_14_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r8 == null ? null : i_r8.field_content);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r8 == null ? null : i_r8.field_content);
  }
}

function ContactFormComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "select", 17)(2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Selecciona el asunto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ContactFormComponent_div_14_option_4_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.affairList);
  }
}

function ContactFormComponent_small_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo inv\u00E1lido*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function ContactFormComponent_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "campo inv\u00E1lido*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function ContactFormComponent_small_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "debes aceptar la pol\u00EDtica de tratamiento de datos*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

class ContactFormComponent {
  constructor(fb, formService, router, contactService, pageService) {
    this.fb = fb;
    this.formService = formService;
    this.router = router;
    this.contactService = contactService;
    this.pageService = pageService;
    this.showErrors = false;
    this.affairList = [];
    this.typeForm = 'general';
    this.recipient_mail = '';
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    if (this.typeForm === 'general') {
      this.contactForm = this.fb.group({
        full_name: ['', this.formService.noWhitespaceValidator],
        email: ['', [this.formService.noWhitespaceValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_shared_data_regex__WEBPACK_IMPORTED_MODULE_1__.regexEmail)]],
        phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_shared_data_regex__WEBPACK_IMPORTED_MODULE_1__.regexNumber)])],
        affair: ['', this.formService.noWhitespaceValidator],
        message: ['', this.formService.noWhitespaceValidator],
        terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.requiredTrue]
      });
      this.getAffairList();
    } else {
      //this.typeForm === 'postventas'
      this.contactForm = this.fb.group({
        full_name: ['', this.formService.noWhitespaceValidator],
        email: ['', [this.formService.noWhitespaceValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_shared_data_regex__WEBPACK_IMPORTED_MODULE_1__.regexEmail)]],
        phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(src_app_shared_data_regex__WEBPACK_IMPORTED_MODULE_1__.regexNumber)])],
        message: ['', this.formService.noWhitespaceValidator],
        terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.requiredTrue]
      });
    }
  }

  getAffairList() {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const affairList = yield _this.pageService.getElementsContent('titulo asunto contacto', 'asunto_contacto');
      if (affairList?.length > 0) _this.affairList = affairList;
    })();
  }

  submitContactForm() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.contactForm.valid) {
        const {
          email,
          message,
          phone,
          full_name,
          affair
        } = _this2.contactForm.getRawValue();

        const data = {
          nombre: full_name,
          email,
          telefono: phone,
          page_section: _this2.typeForm,
          comentario: message,
          asunto: affair,
          correo_destinatario: _this2.recipient_mail
        };
        const {
          resp
        } = yield _this2.contactService.postContactForm(data);

        if (resp) {
          console.log("resp ", resp);

          _this2.router.navigateByUrl(resp);
        } else {
          alert('Opps ocurrió un error enviando el formulario');
        }

        _this2.contactForm.reset();
      } else {
        _this2.showErrors = true;
      }
    })();
  }

  hasErrorsFieldForm(field) {
    const form = this.contactForm;
    return this.formService.hasErrorsFieldForm(form, field, this.showErrors);
  }

}

ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) {
  return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_functions_form_service__WEBPACK_IMPORTED_MODULE_2__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_api_contact_service__WEBPACK_IMPORTED_MODULE_3__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_4__.PageService));
};

ContactFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ContactFormComponent,
  selectors: [["app-contact-form"]],
  inputs: {
    typeForm: "typeForm",
    recipient_mail: "recipient_mail"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
  decls: 32,
  vars: 8,
  consts: [["action", "", 1, "form_mod_contacto", 3, "formGroup", "ngSubmit"], [1, "s_form_cnt"], [1, "cnt_campo_form"], ["formControlName", "full_name", "type", "text", "placeholder", "Nombre completo *", 1, "campo_form"], [1, "text-danger", 2, "height", "7px"], [4, "ngIf"], [1, "cnt_campo_form", "w_100"], ["formControlName", "email", "type", "email", "placeholder", "Email *", 1, "campo_form"], ["formControlName", "phone", "type", "tel", "placeholder", "Tel\u00E9fono *", 1, "campo_form"], ["class", "cnt_campo_form w_100", 4, "ngIf"], ["formControlName", "message", "cols", "10", "rows", "4", "placeholder", "Mensaje *"], [1, "cont_politicas"], ["formControlName", "terms", "type", "checkbox", "name", "", "id", "politicas1"], ["for", "politicas1"], ["href", ""], [1, "row_btn"], ["type", "submit", 1, "btn"], ["formControlName", "affair", "id", ""], ["value", "", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
  template: function ContactFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_0_listener() {
        return ctx.submitContactForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ContactFormComponent_small_5_Template, 2, 0, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ContactFormComponent_small_9_Template, 2, 0, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ContactFormComponent_small_13_Template, 2, 0, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ContactFormComponent_div_14_Template, 5, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ContactFormComponent_small_16_Template, 2, 0, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "textarea", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ContactFormComponent_small_20_Template, 2, 0, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Acepto y Autorizo la ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Pol\u00EDtica de Tratamiento de Datos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ContactFormComponent_small_28_Template, 2, 0, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 15)(30, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Enviar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.contactForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("full_name"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("phone"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.typeForm === "general");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("affair"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("message"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasErrorsFieldForm("terms"));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
  styles: [".cnt_gen_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n}\n\n.h_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 54px;\n    font-weight: 900;\n    color: var(--color-c2);\n    text-align: center;\n    padding: 48px 0 0;\n}\n\n.txt_contacto[_ngcontent-%COMP%] {\n    font-size: 15px;\n    width: 100%;\n    max-width: 657px;\n    margin: auto;\n    padding: 0 0 48px;\n    text-align: center;\n}\n\n.row_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding-bottom: 80px;\n}\n\n.mod_contacto[_ngcontent-%COMP%] {\n    width: 31%;\n    max-width: 374px;\n    height: 344px;\n    margin: 46px 1%;\n    overflow: hidden;\n    border-radius: 28px;\n    position: relative;\n    cursor: pointer;\n    transition: all 0.5s;\n    display: none;\n    animation: mod_in 1s forwards;\n}\n\n.mod_contacto[_ngcontent-%COMP%]:hover   .cnt_inf_mod_contacto[_ngcontent-%COMP%] {\n    bottom: 0;\n}\n\n.mod_contacto.active[_ngcontent-%COMP%] {\n    display: block;\n    opacity: 1;\n}\n\n@keyframes mod_in {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n.img_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n.img_mod_contacto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    display: block;\n    object-fit: cover;\n}\n\n.cnt_inf_mod_contacto[_ngcontent-%COMP%] {\n    width: 130%;\n    height: 55%;\n    position: absolute;\n    bottom: -34%;\n    left: 50%;\n    background: linear-gradient(180deg, #253482 0%, #182360 49.79%, #111B52 100%);\n    border-radius: 50% 50% 0 0;\n    transform: translateX(-50%);\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 0 20%;\n    transition: all 0.5s;\n}\n\n.ic_mod_contacto[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    background: linear-gradient(104.32deg, #FFFFFF 0%, #E4E4E4 100%), #C2C2C2;\n    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.47);\n    line-height: 40px;\n    text-align: center;\n    margin-top: -20px;\n    display: block;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.h_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 20px;\n    color: #fff;\n    font-weight: 900;\n    text-align: center;\n}\n\n.txt_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 14px;\n    color: #fff;\n    text-align: center;\n}\n\n.bnt_mod_contacto[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 16px;\n    color: rgb(96, 142, 255);\n    position: absolute;\n    bottom: 16px;\n}\n\n.cnt_form_mod_contacto[_ngcontent-%COMP%] {\n    width: 45%;\n    max-width: 587px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n    margin: 0 1%;\n    \n    animation: mod_in 1s forwards;\n}\n\n.cnt_form_mod_contacto.active_form[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.btn_volver_contacto[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    background: #FFFFFF;\n    border-radius: 46px;\n    padding: 2px 12px 2px 8px;\n    font-size: 20px;\n    font-weight: 800;\n    gap: 8px;\n    cursor: pointer;\n}\n\n.btn_volver_contacto[_ngcontent-%COMP%]:hover {\n    background: var(--color-c2);\n    color: #fff;\n}\n\n.form_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    background: #FFFFFF;\n    box-shadow: 0px 13px 34px -8px rgba(0, 0, 0, 0.25);\n    border-radius: 19px;\n    padding: 36px;\n}\n\n.s_form_cnt[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 16px 0;\n    border-bottom: 1px solid #ccc;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    row-gap: 16px;\n}\n\n.cnt_campo_form[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n}\n\n.cnt_campo_form.w_50[_ngcontent-%COMP%] {\n    width: 48%;\n}\n\n.cnt_campo_form.w_30[_ngcontent-%COMP%] {\n    width: 32%;\n}\n\n.campo_form[_ngcontent-%COMP%] {\n    height: 38px;\n    width: 100%;\n    background: #F2F2F2;\n    border: 1px solid #E1E1E1;\n    border-radius: 6px;\n    padding: 9px 10px;\n    box-sizing: border-box;\n    font-size: 13px;\n}\n\n.campo_form.filled[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: var(--color-c2);\n    text-align: center;\n    background: #E0E0E0;\n}\n\n.campo_form.filled.esp[_ngcontent-%COMP%] {\n    background: var(--color-c2);\n    color: #fff;\n}\n\n.etq_form_cnt[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 13px;\n    color: #626262;\n    padding-bottom: 4px;\n}\n\n.etq_form_cnt.center[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.form_mod_contacto[_ngcontent-%COMP%]   .cont_politicas[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 16px 0;\n}\n\n.form_mod_contacto[_ngcontent-%COMP%]   .row_btn[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.form_mod_contacto[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    min-width: 160px;\n    text-align: center;\n    justify-content: center;\n}\n\n\n\n@media screen and (max-width: 1050px) {\n    .h_contacto[_ngcontent-%COMP%] {\n        font-size: 40px;\n        padding-top: 24px;\n    }\n\n    .txt_contacto[_ngcontent-%COMP%] {\n        padding-bottom: 32px;\n    }\n\n    .mod_contacto[_ngcontent-%COMP%] {\n        height: 300px;\n    }\n\n    .cnt_inf_mod_contacto[_ngcontent-%COMP%] {\n        gap: 12px;\n    }\n\n    .cnt_form_mod_contacto[_ngcontent-%COMP%] {\n        width: 65%;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .row_mod_contacto[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .mod_contacto[_ngcontent-%COMP%] {\n        width: 100%;\n        height: auto;\n        margin: 8px 0;\n    }\n\n    .img_mod_contacto[_ngcontent-%COMP%] {\n        height: 200px;\n    }\n\n    .cnt_inf_mod_contacto[_ngcontent-%COMP%] {\n        position: relative;\n        bottom: inherit;\n        padding-bottom: 16px;\n        margin-top: -50px;\n    }\n\n    .bnt_mod_contacto[_ngcontent-%COMP%] {\n        position: relative;\n        bottom: inherit;\n    }\n\n    .bnt_mod_contacto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        transform: rotate(90deg);\n    }\n\n    .cnt_form_mod_contacto[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 16px 0;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .cnt_campo_form.w_30[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .cnt_campo_form.w_50[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n}\n\n.text-danger[_ngcontent-%COMP%] {\n    color: rgb(192, 57, 57);\n}\n\n.disable-ele[_ngcontent-%COMP%] {\n    opacity: .3;\n    cursor: default;\n}\n/*# sourceMappingURL=contacto.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULDZFQUE2RTtJQUM3RSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUVBQXlFO0lBQ3pFLDJD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LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbnRfZ2VuX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDU0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYzIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0OHB4IDAgMDtcbn1cblxuLnR4dF9jb250YWN0byB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjU3cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMCA0OHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvd19tb2RfY29udGFjdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4ubW9kX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMzElO1xuICAgIG1heC13aWR0aDogMzc0cHg7XG4gICAgaGVpZ2h0OiAzNDRweDtcbiAgICBtYXJnaW46IDQ2cHggMSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbmltYXRpb246IG1vZF9pbiAxcyBmb3J3YXJkcztcbn1cblxuLm1vZF9jb250YWN0bzpob3ZlciAuY250X2luZl9tb2RfY29udGFjdG8ge1xuICAgIGJvdHRvbTogMDtcbn1cblxuLm1vZF9jb250YWN0by5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbkBrZXlmcmFtZXMgbW9kX2luIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaW1nX21vZF9jb250YWN0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW1nX21vZF9jb250YWN0byBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNudF9pbmZfbW9kX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMTMwJTtcbiAgICBoZWlnaHQ6IDU1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMzQlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjUzNDgyIDAlLCAjMTgyMzYwIDQ5Ljc5JSwgIzExMUI1MiAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCAyMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5pY19tb2RfY29udGFjdG8ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTA0LjMyZGVnLCAjRkZGRkZGIDAlLCAjRTRFNEU0IDEwMCUpLCAjQzJDMkMyO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggN3B4IHJnYmEoMCwgMCwgMCwgMC40Nyk7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oX21vZF9jb250YWN0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udHh0X21vZF9jb250YWN0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJudF9tb2RfY29udGFjdG8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHJnYig5NiwgMTQyLCAyNTUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE2cHg7XG59XG5cbi5jbnRfZm9ybV9tb2RfY29udGFjdG8ge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWF4LXdpZHRoOiA1ODdweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbjogMCAxJTtcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAgIGFuaW1hdGlvbjogbW9kX2luIDFzIGZvcndhcmRzO1xufVxuXG4uY250X2Zvcm1fbW9kX2NvbnRhY3RvLmFjdGl2ZV9mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnRuX3ZvbHZlcl9jb250YWN0byB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogNDZweDtcbiAgICBwYWRkaW5nOiAycHggMTJweCAycHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGdhcDogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bl92b2x2ZXJfY29udGFjdG86aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWMyKTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmZvcm1fbW9kX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDM0cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XG4gICAgcGFkZGluZzogMzZweDtcbn1cblxuLnNfZm9ybV9jbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcm93LWdhcDogMTZweDtcbn1cblxuLmNudF9jYW1wb19mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbnRfY2FtcG9fZm9ybS53XzUwIHtcbiAgICB3aWR0aDogNDglO1xufVxuXG4uY250X2NhbXBvX2Zvcm0ud18zMCB7XG4gICAgd2lkdGg6IDMyJTtcbn1cblxuLmNhbXBvX2Zvcm0ge1xuICAgIGhlaWdodDogMzhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMUUxRTE7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2FtcG9fZm9ybS5maWxsZWQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYzIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xufVxuXG4uY2FtcG9fZm9ybS5maWxsZWQuZXNwIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jMik7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5ldHFfZm9ybV9jbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzYyNjI2MjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4uZXRxX2Zvcm1fY250LmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybV9tb2RfY29udGFjdG8gLmNvbnRfcG9saXRpY2FzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTZweCAwO1xufVxuXG4uZm9ybV9tb2RfY29udGFjdG8gLnJvd19idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmZvcm1fbW9kX2NvbnRhY3RvIC5idG4ge1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBSRVNQT05JU0lWRSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG4gICAgLmhfY29udGFjdG8ge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC50eHRfY29udGFjdG8ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAubW9kX2NvbnRhY3RvIHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG5cbiAgICAuY250X2luZl9tb2RfY29udGFjdG8ge1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgfVxuXG4gICAgLmNudF9mb3JtX21vZF9jb250YWN0byB7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5yb3dfbW9kX2NvbnRhY3RvIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubW9kX2NvbnRhY3RvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICB9XG5cbiAgICAuaW1nX21vZF9jb250YWN0byB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuXG4gICAgLmNudF9pbmZfbW9kX2NvbnRhY3RvIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3R0b206IGluaGVyaXQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICB9XG5cbiAgICAuYm50X21vZF9jb250YWN0byB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiBpbmhlcml0O1xuICAgIH1cblxuICAgIC5ibnRfbW9kX2NvbnRhY3RvIHNwYW4ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgfVxuXG4gICAgLmNudF9mb3JtX21vZF9jb250YWN0byB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmNudF9jYW1wb19mb3JtLndfMzAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY250X2NhbXBvX2Zvcm0ud181MCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnRleHQtZGFuZ2VyIHtcbiAgICBjb2xvcjogcmdiKDE5MiwgNTcsIDU3KTtcbn1cblxuLmRpc2FibGUtZWxlIHtcbiAgICBvcGFjaXR5OiAuMztcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRhY3RvLmNzcy5tYXAgKi8iXX0= */"]
});

/***/ }),

/***/ 5647:
/*!***********************************************************!*\
  !*** ./src/app/modules/contact/contact-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactRoutingModule": () => (/* binding */ ContactRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ 253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_0__.ContactPageComponent
    }
];
class ContactRoutingModule {
}
ContactRoutingModule.ɵfac = function ContactRoutingModule_Factory(t) { return new (t || ContactRoutingModule)(); };
ContactRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactRoutingModule });
ContactRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3033:
/*!***************************************************!*\
  !*** ./src/app/modules/contact/contact.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactModule": () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-routing.module */ 5647);
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ 253);
/* harmony import */ var src_app_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/breadcrumb/breadcrumb.component */ 1299);
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ 1154);
/* harmony import */ var _components_calculate_form_calculate_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/calculate-form/calculate-form.component */ 1641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class ContactModule {
}
ContactModule.ɵfac = function ContactModule_Factory(t) { return new (t || ContactModule)(); };
ContactModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactRoutingModule,
        // standalones
        src_app_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent,
        _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__.ContactFormComponent,
        _components_calculate_form_calculate_form_component__WEBPACK_IMPORTED_MODULE_4__.CalculateFormComponent] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_1__.ContactPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactRoutingModule,
        // standalones
        src_app_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent,
        _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__.ContactFormComponent,
        _components_calculate_form_calculate_form_component__WEBPACK_IMPORTED_MODULE_4__.CalculateFormComponent] }); })();


/***/ }),

/***/ 253:
/*!******************************************************************************!*\
  !*** ./src/app/modules/contact/pages/contact-page/contact-page.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageComponent": () => (/* binding */ ContactPageComponent)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ 9019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/api/page.service */ 5480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/breadcrumb/breadcrumb.component */ 1299);
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/contact-form/contact-form.component */ 1154);
/* harmony import */ var _components_calculate_form_calculate_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/calculate-form/calculate-form.component */ 1641);









const _c0 = function (a0) {
  return {
    "active": a0
  };
};

function ContactPageComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ContactPageComponent_div_10_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const index_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.activeItemContact(index_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 12)(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c0, ctx_r0.formIsShow ? index_r3 === ctx_r0.indexItemActive : true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.BASE_URL + (i_r2 == null ? null : i_r2.imagen[0]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", i_r2 == null ? null : i_r2.imagen_alt[0])("title", i_r2 == null ? null : i_r2.imagen_title[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.BASE_URL + (i_r2 == null ? null : i_r2.imagen[1]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", i_r2 == null ? null : i_r2.imagen_alt[1])("title", i_r2 == null ? null : i_r2.imagen_title[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r2 == null ? null : i_r2.field_content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", i_r2 == null ? null : i_r2.descripcion_item_contacto, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r2 == null ? null : i_r2.texto_boton_item_contacto, " ");
  }
}

function ContactPageComponent_div_11_app_contact_form_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-contact-form", 22);
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("typeForm", ctx_r6.itemActive == null ? null : ctx_r6.itemActive.tipo_formulario_contacto)("recipient_mail", ctx_r6.itemActive == null ? null : ctx_r6.itemActive.correo_destinatario);
  }
}

function ContactPageComponent_div_11_app_calculate_form_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-calculate-form");
  }
}

function ContactPageComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ContactPageComponent_div_11_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.formIsShow = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ContactPageComponent_div_11_app_contact_form_5_Template, 1, 2, "app-contact-form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ContactPageComponent_div_11_app_calculate_form_6_Template, 1, 0, "app-calculate-form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.itemActive == null ? null : ctx_r1.itemActive.tipo_formulario_contacto) === "general" || (ctx_r1.itemActive == null ? null : ctx_r1.itemActive.tipo_formulario_contacto) === "postventas");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r1.itemActive == null ? null : ctx_r1.itemActive.tipo_formulario_contacto) === "calcula");
  }
}

class ContactPageComponent {
  constructor(pageService) {
    this.pageService = pageService;
    this.BASE_URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.base_url;
    this.formIsShow = false; // collections

    this.itemsContact = [];
  }

  ngOnInit() {
    this.init();
  }

  init() {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const tasks = [() => _this.getData(), () => _this.getCollectionsPage()];

      for (const task of tasks) {
        yield task();
      }
    })();
  }

  getData() {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = yield _this2.pageService.getContentPage('contactanos');
      if (data) _this2.data = data;
    })();
  }

  getCollectionsPage() {
    var _this3 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const itemsContact = yield _this3.pageService.getElementsContent('titulo item contacto', 'item_contacto');
      if (itemsContact?.length > 0) _this3.itemsContact = itemsContact;
    })();
  }

  activeItemContact(index) {
    this.itemActive = this.itemsContact[index];
    this.indexItemActive = index;
    this.showForm();
  }

  showForm() {
    this.formIsShow = true;
  }

}

ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) {
  return new (t || ContactPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_api_page_service__WEBPACK_IMPORTED_MODULE_2__.PageService));
};

ContactPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ContactPageComponent,
  selectors: [["app-contact-page"]],
  decls: 12,
  vars: 4,
  consts: [[1, "cuerpo"], [1, "cnt_gen_contacto"], [1, "bg_round"], [1, "cnt_central"], [1, "h_contacto"], [1, "txt_contacto", 3, "innerHtml"], [1, "row_mod_contacto"], ["class", "mod_contacto", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "cnt_form_mod_contacto", 4, "ngIf"], [1, "mod_contacto", 3, "ngClass", "click"], [1, "img_mod_contacto"], [3, "src", "alt", "title"], [1, "cnt_inf_mod_contacto"], [1, "ic_mod_contacto"], [1, "h_mod_contacto"], [1, "txt_mod_contacto", 3, "innerHtml"], [1, "bnt_mod_contacto"], [1, "material-icons"], [1, "cnt_form_mod_contacto"], [1, "btn_volver_contacto", 3, "click"], [3, "typeForm", "recipient_mail", 4, "ngIf"], [4, "ngIf"], [3, "typeForm", "recipient_mail"]],
  template: function ContactPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "body", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "app-breadcrumb");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ContactPageComponent_div_10_Template, 13, 12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ContactPageComponent_div_11_Template, 7, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.titulo_contacto, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", ctx.data == null ? null : ctx.data.descripcion, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.itemsContact);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formIsShow);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_4__.ContactFormComponent, _components_calculate_form_calculate_form_component__WEBPACK_IMPORTED_MODULE_5__.CalculateFormComponent],
  styles: [".cnt_gen_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n}\n\n.h_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 54px;\n    font-weight: 900;\n    color: var(--color-c2);\n    text-align: center;\n    padding: 48px 0 0;\n}\n\n.txt_contacto[_ngcontent-%COMP%] {\n    font-size: 15px;\n    width: 100%;\n    max-width: 657px;\n    margin: auto;\n    padding: 0 0 48px;\n    text-align: center;\n}\n\n.row_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding-bottom: 80px;\n}\n\n.mod_contacto[_ngcontent-%COMP%] {\n    width: 31%;\n    max-width: 374px;\n    height: 344px;\n    margin: 46px 1%;\n    overflow: hidden;\n    border-radius: 28px;\n    position: relative;\n    cursor: pointer;\n    transition: all 0.5s;\n    display: none;\n    animation: mod_in 1s forwards;\n}\n\n.mod_contacto[_ngcontent-%COMP%]:hover   .cnt_inf_mod_contacto[_ngcontent-%COMP%] {\n    bottom: 0;\n}\n\n.mod_contacto.active[_ngcontent-%COMP%] {\n    display: block;\n    opacity: 1;\n}\n\n@keyframes mod_in {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n.img_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n\n.img_mod_contacto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    display: block;\n    object-fit: cover;\n}\n\n.cnt_inf_mod_contacto[_ngcontent-%COMP%] {\n    width: 130%;\n    height: 55%;\n    position: absolute;\n    bottom: -34%;\n    left: 50%;\n    background: linear-gradient(180deg, #253482 0%, #182360 49.79%, #111B52 100%);\n    border-radius: 50% 50% 0 0;\n    transform: translateX(-50%);\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 0 20%;\n    transition: all 0.5s;\n}\n\n.ic_mod_contacto[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    background: linear-gradient(104.32deg, #FFFFFF 0%, #E4E4E4 100%), #C2C2C2;\n    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.47);\n    line-height: 40px;\n    text-align: center;\n    margin-top: -20px;\n    display: block;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.h_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 20px;\n    color: #fff;\n    font-weight: 900;\n    text-align: center;\n}\n\n.txt_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 14px;\n    color: #fff;\n    text-align: center;\n}\n\n.bnt_mod_contacto[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 16px;\n    color: rgb(96, 142, 255);\n    position: absolute;\n    bottom: 16px;\n}\n\n.cnt_form_mod_contacto[_ngcontent-%COMP%] {\n    width: 45%;\n    max-width: 587px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    align-items: flex-start;\n    margin: 0 1%;\n    \n    animation: mod_in 1s forwards;\n}\n\n.cnt_form_mod_contacto.active_form[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.btn_volver_contacto[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    background: #FFFFFF;\n    border-radius: 46px;\n    padding: 2px 12px 2px 8px;\n    font-size: 20px;\n    font-weight: 800;\n    gap: 8px;\n    cursor: pointer;\n}\n\n.btn_volver_contacto[_ngcontent-%COMP%]:hover {\n    background: var(--color-c2);\n    color: #fff;\n}\n\n.form_mod_contacto[_ngcontent-%COMP%] {\n    width: 100%;\n    background: #FFFFFF;\n    box-shadow: 0px 13px 34px -8px rgba(0, 0, 0, 0.25);\n    border-radius: 19px;\n    padding: 36px;\n}\n\n.s_form_cnt[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 16px 0;\n    border-bottom: 1px solid #ccc;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    row-gap: 16px;\n}\n\n.cnt_campo_form[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n}\n\n.cnt_campo_form.w_50[_ngcontent-%COMP%] {\n    width: 48%;\n}\n\n.cnt_campo_form.w_30[_ngcontent-%COMP%] {\n    width: 32%;\n}\n\n.campo_form[_ngcontent-%COMP%] {\n    height: 38px;\n    width: 100%;\n    background: #F2F2F2;\n    border: 1px solid #E1E1E1;\n    border-radius: 6px;\n    padding: 9px 10px;\n    box-sizing: border-box;\n    font-size: 13px;\n}\n\n.campo_form.filled[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: var(--color-c2);\n    text-align: center;\n    background: #E0E0E0;\n}\n\n.campo_form.filled.esp[_ngcontent-%COMP%] {\n    background: var(--color-c2);\n    color: #fff;\n}\n\n.etq_form_cnt[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 13px;\n    color: #626262;\n    padding-bottom: 4px;\n}\n\n.etq_form_cnt.center[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.form_mod_contacto[_ngcontent-%COMP%]   .cont_politicas[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 16px 0;\n}\n\n.form_mod_contacto[_ngcontent-%COMP%]   .row_btn[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.form_mod_contacto[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    min-width: 160px;\n    text-align: center;\n    justify-content: center;\n}\n\n\n\n@media screen and (max-width: 1050px) {\n    .h_contacto[_ngcontent-%COMP%] {\n        font-size: 40px;\n        padding-top: 24px;\n    }\n\n    .txt_contacto[_ngcontent-%COMP%] {\n        padding-bottom: 32px;\n    }\n\n    .mod_contacto[_ngcontent-%COMP%] {\n        height: 300px;\n    }\n\n    .cnt_inf_mod_contacto[_ngcontent-%COMP%] {\n        gap: 12px;\n    }\n\n    .cnt_form_mod_contacto[_ngcontent-%COMP%] {\n        width: 65%;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .row_mod_contacto[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .mod_contacto[_ngcontent-%COMP%] {\n        width: 100%;\n        height: auto;\n        margin: 8px 0;\n    }\n\n    .img_mod_contacto[_ngcontent-%COMP%] {\n        height: 200px;\n    }\n\n    .cnt_inf_mod_contacto[_ngcontent-%COMP%] {\n        position: relative;\n        bottom: inherit;\n        padding-bottom: 16px;\n        margin-top: -50px;\n    }\n\n    .bnt_mod_contacto[_ngcontent-%COMP%] {\n        position: relative;\n        bottom: inherit;\n    }\n\n    .bnt_mod_contacto[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        transform: rotate(90deg);\n    }\n\n    .cnt_form_mod_contacto[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 16px 0;\n    }\n}\n\n@media screen and (max-width: 480px) {\n    .cnt_campo_form.w_30[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n\n    .cnt_campo_form.w_50[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n}\n\n.text-danger[_ngcontent-%COMP%] {\n    color: rgb(192, 57, 57);\n}\n\n.disable-ele[_ngcontent-%COMP%] {\n    opacity: .3;\n    cursor: default;\n}\n/*# sourceMappingURL=contacto.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULDZFQUE2RTtJQUM3RSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUVBQXlFO0lBQ3pFLDJD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LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbnRfZ2VuX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDU0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYzIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0OHB4IDAgMDtcbn1cblxuLnR4dF9jb250YWN0byB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjU3cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMCA0OHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvd19tb2RfY29udGFjdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4ubW9kX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMzElO1xuICAgIG1heC13aWR0aDogMzc0cHg7XG4gICAgaGVpZ2h0OiAzNDRweDtcbiAgICBtYXJnaW46IDQ2cHggMSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbmltYXRpb246IG1vZF9pbiAxcyBmb3J3YXJkcztcbn1cblxuLm1vZF9jb250YWN0bzpob3ZlciAuY250X2luZl9tb2RfY29udGFjdG8ge1xuICAgIGJvdHRvbTogMDtcbn1cblxuLm1vZF9jb250YWN0by5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbkBrZXlmcmFtZXMgbW9kX2luIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaW1nX21vZF9jb250YWN0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW1nX21vZF9jb250YWN0byBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNudF9pbmZfbW9kX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMTMwJTtcbiAgICBoZWlnaHQ6IDU1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMzQlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjUzNDgyIDAlLCAjMTgyMzYwIDQ5Ljc5JSwgIzExMUI1MiAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCAyMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5pY19tb2RfY29udGFjdG8ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTA0LjMyZGVnLCAjRkZGRkZGIDAlLCAjRTRFNEU0IDEwMCUpLCAjQzJDMkMyO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggN3B4IHJnYmEoMCwgMCwgMCwgMC40Nyk7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oX21vZF9jb250YWN0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udHh0X21vZF9jb250YWN0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJudF9tb2RfY29udGFjdG8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHJnYig5NiwgMTQyLCAyNTUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE2cHg7XG59XG5cbi5jbnRfZm9ybV9tb2RfY29udGFjdG8ge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgbWF4LXdpZHRoOiA1ODdweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbjogMCAxJTtcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAgIGFuaW1hdGlvbjogbW9kX2luIDFzIGZvcndhcmRzO1xufVxuXG4uY250X2Zvcm1fbW9kX2NvbnRhY3RvLmFjdGl2ZV9mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnRuX3ZvbHZlcl9jb250YWN0byB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogNDZweDtcbiAgICBwYWRkaW5nOiAycHggMTJweCAycHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGdhcDogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bl92b2x2ZXJfY29udGFjdG86aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWMyKTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmZvcm1fbW9kX2NvbnRhY3RvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDM0cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XG4gICAgcGFkZGluZzogMzZweDtcbn1cblxuLnNfZm9ybV9jbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcm93LWdhcDogMTZweDtcbn1cblxuLmNudF9jYW1wb19mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbnRfY2FtcG9fZm9ybS53XzUwIHtcbiAgICB3aWR0aDogNDglO1xufVxuXG4uY250X2NhbXBvX2Zvcm0ud18zMCB7XG4gICAgd2lkdGg6IDMyJTtcbn1cblxuLmNhbXBvX2Zvcm0ge1xuICAgIGhlaWdodDogMzhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMUUxRTE7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2FtcG9fZm9ybS5maWxsZWQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYzIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xufVxuXG4uY2FtcG9fZm9ybS5maWxsZWQuZXNwIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jMik7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5ldHFfZm9ybV9jbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzYyNjI2MjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4uZXRxX2Zvcm1fY250LmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybV9tb2RfY29udGFjdG8gLmNvbnRfcG9saXRpY2FzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTZweCAwO1xufVxuXG4uZm9ybV9tb2RfY29udGFjdG8gLnJvd19idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmZvcm1fbW9kX2NvbnRhY3RvIC5idG4ge1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBSRVNQT05JU0lWRSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XG4gICAgLmhfY29udGFjdG8ge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgIH1cblxuICAgIC50eHRfY29udGFjdG8ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgICB9XG5cbiAgICAubW9kX2NvbnRhY3RvIHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG5cbiAgICAuY250X2luZl9tb2RfY29udGFjdG8ge1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgfVxuXG4gICAgLmNudF9mb3JtX21vZF9jb250YWN0byB7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5yb3dfbW9kX2NvbnRhY3RvIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubW9kX2NvbnRhY3RvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICB9XG5cbiAgICAuaW1nX21vZF9jb250YWN0byB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuXG4gICAgLmNudF9pbmZfbW9kX2NvbnRhY3RvIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3R0b206IGluaGVyaXQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICB9XG5cbiAgICAuYm50X21vZF9jb250YWN0byB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiBpbmhlcml0O1xuICAgIH1cblxuICAgIC5ibnRfbW9kX2NvbnRhY3RvIHNwYW4ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgfVxuXG4gICAgLmNudF9mb3JtX21vZF9jb250YWN0byB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmNudF9jYW1wb19mb3JtLndfMzAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY250X2NhbXBvX2Zvcm0ud181MCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnRleHQtZGFuZ2VyIHtcbiAgICBjb2xvcjogcmdiKDE5MiwgNTcsIDU3KTtcbn1cblxuLmRpc2FibGUtZWxlIHtcbiAgICBvcGFjaXR5OiAuMztcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRhY3RvLmNzcy5tYXAgKi8iXX0= */"]
});

/***/ }),

/***/ 1372:
/*!**************************************!*\
  !*** ./src/app/shared/data/regex.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "regexEmail": () => (/* binding */ regexEmail),
/* harmony export */   "regexNumber": () => (/* binding */ regexNumber)
/* harmony export */ });
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexNumber = "^[0-9]*$";



/***/ }),

/***/ 1816:
/*!********************************************************!*\
  !*** ./src/app/shared/services/api/contact.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactService": () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var _home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);





const BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url;
class ContactService {
  constructor(_http) {
    this._http = _http;
  }

  postContactForm(data) {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${BASE_URL}api/v1/setContactForm`;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this._http.post(url, data)).then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }

}

ContactService.ɵfac = function ContactService_Factory(t) {
  return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

ContactService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ContactService,
  factory: ContactService.ɵfac,
  providedIn: 'root'
});

/***/ }),

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
   * @returns Promise<any>
   */


  getFeaturedProjects() {
    var _this = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getProyectosDestacados`;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this._http.get(url)).then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }
  /**
   *
   * @param tipo
   * @param ciudad
   * @param tipo_proyecto
   * @returns Promise<any>
   */


  getProyectosByTipo(tipo, ciudad, tipo_proyecto, precio) {
    var _this2 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getProyectosByTipo?tipo=${tipo}&ciudad=${ciudad}&tipo_proyecto=${tipo_proyecto}&precio=${precio}`;
      return _this2._http.get(url).toPromise().then().catch(err => {
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
    var _this3 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getProyectoByUrl?friendly_url=${slug}`;
      return _this3._http.get(url).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
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
    var _this4 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getCalculoPorcentaje?valorProyecto=${valorProyecto}&porcentaje=${porcentaje}&cuotasinicialfinanciar=${cuotasinicialfinanciar}&plazo=${plazo}&valorafinanciaranios=${valorafinanciaranios}`;
      return _this4._http.get(url).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }
  /**
   *
   * @param saldocuota
   * @param numerocuota
   * @returns Promise<any>
   */


  getCalculoCuota(saldocuota, numerocuota) {
    var _this5 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getCalculoCuota?cuota=${numerocuota}&saldocuotainicial=${saldocuota}`;
      return _this5._http.get(url).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
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
    var _this6 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getPlazoanios?cuota=${cuota}&valorafinanciar=${valorafinanciar}`;
      return _this6._http.get(url).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }
  /**
   *
   * @param data
   * @returns Promise<any>
   */


  setCalculadoraForm(data) {
    const url = `${API_URL}v1/setCalculadoraForm`;
    return this._http.post(url, JSON.stringify(data)).toPromise().then().catch(err => {
      console.warn(err);
      return false;
    });
  }
  /**
   *
   * @param id_proyecto
   * @returns Promise<any>
   */


  getCategoriasInteres(id_proyecto) {
    var _this7 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getCategoriasInteres?id_proyecto=${id_proyecto}`;
      return _this7._http.get(url).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }
  /**
   *
   * @param id_categoria
   * @param id_proyecto
   * @returns Promise<any>
   */


  getSitiosInteres(id_categoria, id_proyecto) {
    var _this8 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getSitiosInteres?id_proyecto=${id_proyecto}&id_categoria=${id_categoria}`;
      return _this8._http.get(url).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }

  getSeoContentProject(slug) {
    var _this9 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getSeoContentProject?friendly_url=${slug}`;
      return _this9._http.get(url).toPromise().then().catch(err => {
        console.warn(err);
        return false;
      });
    })();
  }

  getPreciosProyectos(tipo) {
    var _this10 = this;

    return (0,_home_jeiobaco_codes_company_projects_paxzu_oikos_oikos_contructora_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${API_URL}v1/getPreciosProyectos?tipo=${tipo}`;
      return _this10._http.get(url).toPromise().then();
    })();
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

/***/ })

}]);
//# sourceMappingURL=src_app_modules_contact_contact_module_ts.js.map
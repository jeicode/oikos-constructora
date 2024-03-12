import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/functions/config.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { Subject, Subscription } from 'rxjs';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormService } from 'src/app/shared/services/functions/form.service';

import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';
import { Breadcrumb } from 'src/app/core/models/breadcrumb.model';

SwiperCore.use([Navigation, Pagination]);

declare var $: any;
@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.css']
})
export class InternaComponent implements OnInit {

  breadcrumbs: Breadcrumb[] = [];

  // swiper
  config: SwiperOptions = {
    slidesPerView: 1,
    pagination: { clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }

  data: any = [];
  datosCalc: any = [];
  datosCuota: any = [];
  datosAnio: any = [];
  galeria: any = [];
  avancesObra: any = [];
  avancesObraActivos: any = [];
  fechasAvancesObra: any = [];
  indiceFechaActiva: number = 0;
  tipologia: any = [];
  planos: any = [];
  zonas: any = [];
  sitiosInteres: any = [];
  seccionesInteres: any = [];
  slug: string | null;
  imagenes_url: string = "";
  captcha: string = '';
  url_mapa: string = '';
  suscribeListenRouter: Subscription;
  porcFinanciar: number = 100;
  showErrors: boolean = false
  sendingContact = false;

  modalIsOpen: boolean = false;

  zoom = 14;
  center = { lat: 0, lng: 0 };
  markers: any = [];
  notifyChanges: Subject<any> = new Subject<any>();

  contactForm: FormGroup = this.fb.group({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    telefono: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^-?([0-9]{7,10})?$/)])),
    terminos: new FormControl(false, Validators.requiredTrue)
  })

  contactForm2: FormGroup = this.fb.group({
    nombre2: new FormControl('', Validators.required),
    email2: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    telefono2: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^-?([0-9]{7,10})?$/)])),
    mensaje2: new FormControl('', Validators.required),
    terminos2: new FormControl(false, Validators.requiredTrue)
  })

  constructor(private configServ: ConfigService,
    private projService: ProjectService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private formServ: FormService) {
    this.slug = this.activateRoute.snapshot.paramMap.get('slug');
    this.imagenes_url = environment.imagenes_url;
    this.suscribeListenRouter = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.slug = this.activateRoute.snapshot.paramMap.get('slug');
        this.configServ.goUpPage()
        this.getData();
      }
    });
  }


  openModal() {
    this.notifyChanges.next({ openModal: true });
  }

  resolved(captchaResponse: any) {
    this.captcha = captchaResponse;
  }

  ngOnInit(): void {
    this.calculoPorcentaje();
    this.configServ.loadHeroProyectos(1000);
    this.configServ.loadChangeTab(1000);


  }


  async getData() {
    const [data] = await this.projService.getProyectoByUrl(this.slug);
    if (data) {
      this.data = data;

      const { seccion } = this.data

      this.breadcrumbs = this.getBreadcrumbList(seccion);

      this.porcFinanciar = (100 - this.data?.porcentaje_minimo);

      this.zonas = this.data?.zonas;
      this.galeria = this.data?.galeria;
      this.planos = this.data?.planos;
      this.tipologia = this.data?.tipologia;
      this.avancesObra = this.data?.avances;

      if (this.avancesObra) {
        let listDates = this.avancesObra.map((a: any) => a?.title)
        this.fechasAvancesObra = this.configServ.removeRepeatElementsArray(listDates);
        this.actualizarAvanceObraActivo(0, this.fechasAvancesObra[0])
      }


      await this.calculoPorcentaje();
      await this.diferenciadordecuotasmensuales();

      this.sitiosInteres = await this.projService.getCategoriasInteres(this.data?.id);

      this.cargarSitios(this.sitiosInteres[0].id);

    }
  }


  getBreadcrumbList(seccion: string): any[] {
    let breads = [new Breadcrumb('Oikos Constructora', '/'),]

    switch (seccion) {
      case '1':
        breads.push(
          new Breadcrumb('Proyectos contrucción vivienda', '/proyectos-construccion-vivienda'),
          new Breadcrumb(this.data?.titulo_proyecto),
        )
        break;

      case '2':
        breads.push(
          new Breadcrumb('Proyectos contrucción comerciales', '/proyectos-construccion-comerciales-industriales'),
          new Breadcrumb(this.data?.titulo_proyecto),
        )
        break;

      case '4':
        breads.push(
          new Breadcrumb('Proyectos ejecutados', '/proyectos-ejecutados'),
          new Breadcrumb(this.data?.titulo_proyecto),
        )
        break;
    }
    return breads;

  }

  /**
   *
   * @param index indice de la fecha activa
   * @param fecha parametro de fecha para hacer el filtro
   */
  actualizarAvanceObraActivo(index: number, fecha: string) {
    this.indiceFechaActiva = index
    this.avancesObraActivos = this.avancesObra?.filter((a: any) => a?.title === fecha);
  }


  trasladar(el: any) {
    if (this.configServ.isBrowser()){
      var pos = Number($("#" + el).offset().top) - 100;
      window.scrollTo({ top: pos, behavior: 'smooth' });
  
      $(".state").removeClass('active');
      $("." + el).addClass('active');
    }
  }

  async calculoPorcentaje() {
    //var porcentaje = this.data.porcentaje_minimo;
    var porcentaje = $(".cambiarPorcentaje").val();
    var cuotasinicialfinanciar = $(".cuotasinicialfinanciar").val();
    var plazoaniosa = $(".plazoaniosa").val();
    var financiar = $(".valorafinanciar").val();

    if (porcentaje == '' || porcentaje == null)
      porcentaje = this.data.porcentaje_minimo;

    this.porcFinanciar = (100 - porcentaje);
    this.datosCalc = await this.projService.getCalculoPorcentaje(this.data.valor_proyecto, porcentaje, cuotasinicialfinanciar, plazoaniosa, financiar);
    this.datosCalc = this.datosCalc[0];

    $(".valorCuotaInicial").val('$ ' + this.datosCalc['cuotaInicial']);
    $(".diferencia").val('$ ' + this.datosCalc['diferencia']);
    if (this.datosCalc['cuotasinicialfinanciar'] != 'inf') {
      $(".cuotamensual").val('$ ' + this.datosCalc['cuotasinicialfinanciar']);
    }
    $(".valorafinanciar").val('$ ' + this.datosCalc['valorafinanciar']);

    this.plazoanios();
  }

  async diferenciadordecuotasmensuales() {
    var saldocuotainicial = $(".diferencia").val();
    var cuotasinicialfinanciar = $(".cuotasinicialfinanciar").val();

    this.datosCuota = await this.projService.getCalculoCuota(saldocuotainicial, cuotasinicialfinanciar);
    this.datosCuota = this.datosCuota[0];

    if (this.datosCuota['valorcuotas'] != 'inf') {
      $(".cuotamensual").val('$ ' + this.datosCuota['valorcuotas']);
    }
  }

  async plazoanios() {
    var cuota = $(".plazoaniosa").val();
    var valorafinanciar = $(".valorafinanciar").val();

    this.datosAnio = await this.projService.getPlazoanios(cuota, valorafinanciar);
    this.datosAnio = this.datosAnio[0];

    $(".cuotahipoteca").val('$ ' + this.datosAnio['total']);
  }

  hasErrorsFieldForm(field: string): Boolean {
    const form = this.contactForm
    return this.formServ.hasErrorsFieldForm(form, field, this.showErrors)
  }

  hasErrorsFieldForm2(field: string): Boolean {
    const form = this.contactForm2
    return this.formServ.hasErrorsFieldForm(form, field, this.showErrors)
  }

  async insertContact() {
    if (this.contactForm.valid && !this.sendingContact && this.configServ.isBrowser()) {
      this.sendingContact = true
      this.showErrors = false
      const values = {
        nombre: this.contactForm.controls['nombre'].value,
        email: this.contactForm.controls['email'].value,
        telefono: this.contactForm.controls['telefono'].value,
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
        porcentajeseparacion: this.data.porcentaje_separacion,
        url_proyecto: window.location.href,
        proyecto: this.data.titulo_proyecto,
        valorProyecto: this.data.valor_proyecto,
        sendTo: this.data.email_contactos,
        id_proyecto: this.data.id,
        gracias_a: "1"
      }
      const resp = await this.projService.setCalculadoraForm(values);
      if (resp.resp != 'no') {
        window.location.href = resp.resp;
      }
      this.sendingContact = false
    }
    else {
      this.showErrors = true
    }
  }

  async cargarSitios(id_categoria: any) {
    this.seccionesInteres = await this.projService.getSitiosInteres(id_categoria, this.data.id);

    if (this.seccionesInteres.length > 0) {
      this.url_mapa = this.seccionesInteres[0].mapa_interes_proyecto;
    }
  }

  seguirLeyendo() {
    $(".read").remove();
    $(".descripcion_proyecto").css('height', 'max-content');
  }

  async insertContactForm() {
    if (this.contactForm2.valid && this.captcha && !this.sendingContact && this.configServ.isBrowser()) {
      this.sendingContact = true
      this.showErrors = false
      const values = {
        nombre: this.contactForm2.controls['nombre2'].value,
        email: this.contactForm2.controls['email2'].value,
        telefono: this.contactForm2.controls['telefono2'].value,
        mensaje: this.contactForm2.controls['mensaje2'].value,
        id_proyecto: this.data.id,
        nombre_proyecto: this.data.titulo_proyecto,
        sendTo: this.data.email_contactos
      }
      const resp = await this.projService.setContactFormProyecto(values);
      if (resp.resp != 'no') {
        window.location.href = resp.resp;
      }

      this.sendingContact = false
    }

    else {
      this.showErrors = true
    }
  }

  goToVentas() {
    if (this.configServ.isBrowser()){
      window.location.href = 'proyectos-construccion-vivienda';
    }
  }

  toogleFlotante() {
    if ($(".contacto_flotante").hasClass('active')) {
      $(".contacto_flotante").removeClass('active');
    } else {
      $(".contacto_flotante").addClass('active');
    }
  }

  closeContactModal(){
    $(".contacto_flotante").removeClass('active');
  }

}

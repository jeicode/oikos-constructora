import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/functions/config.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { Subject, Subscription } from 'rxjs';
import { NavigationEnd, Router, ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormService } from 'src/app/shared/services/functions/form.service';

import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';
import { GlobalService } from 'src/app/shared/services/api/global.service';
import { ResponsiveService } from 'src/app/shared/services/functions/responsive.service';
import { CurrencyConverterService } from 'src/app/shared/services/api/currency-converter.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RecaptchaModule } from 'ng-recaptcha';
import { SafePipe } from 'src/app/shared/pipes/safe-resource-url.pipe';
import { HTMLPipe } from 'src/app/shared/pipes/html-data.pipe';
import { SlideProjectsComponent } from 'src/app/shared/components/slide-projects/slide-projects.component';
import { BreadcrumbComponent } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { SwiperModule } from 'swiper/angular';
import { WppModalProjectComponent } from 'src/app/shared/components/wpp-modal-project/wpp-modal-project.component';
import { ThousandNumber } from 'src/app/shared/pipes/thousand-number.pipe';

SwiperCore.use([Navigation, Pagination]);

declare var $: any;
@Component({
  standalone: true,
  selector: 'app-interna',
  imports:[
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    RecaptchaModule,
    SafePipe,
    HTMLPipe,
    NgOptimizedImage,
    //standalones
    SlideProjectsComponent,
    BreadcrumbComponent,
    SwiperModule,
    WppModalProjectComponent,
    ThousandNumber
  ],
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.css']
})
export class InternaComponent implements OnInit, OnDestroy {

  // swiper
  config: SwiperOptions = {
    slidesPerView: 1,
    pagination: { clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }

  data: any = undefined;
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

  //data analytics
  sourceTrack: string | null | undefined;
  mediumTrack: string | null | undefined;
  campaignTrack: string | null | undefined;

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

  constructor(
    private configServ: ConfigService,
    private projService: ProjectService,
    private router: Router,
    public responsive: ResponsiveService,
    private activateRoute: ActivatedRoute,
    private globalService: GlobalService,
    private fb: FormBuilder,
    private formServ: FormService,
    private currencyConverter: CurrencyConverterService) {
    this.imagenes_url = environment.imagenes_url;
    this.suscribeListenRouter = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.getData();
        this.configServ.goUpPage()
      }
    });
  }


  openModal() {
    this.notifyChanges.next({ openModal: true });
  }

  resolved(captchaResponse: string | null) {
    captchaResponse && (this.captcha = captchaResponse)
  }

  ngOnInit(): void {
    if (this.configServ.isBrowser()) {
      this.sourceTrack = localStorage.getItem('sourceTrack');
      this.mediumTrack = localStorage.getItem('mediumTrack');
      this.campaignTrack = localStorage.getItem('campaignTrack');
    }
  }


  ngOnDestroy(): void {
    this.suscribeListenRouter.unsubscribe()
  }



  calculateFormulas(){
    this.diferenciadordecuotasmensuales();
    this.calculoPorcentaje();
  }


  async getData() {

    this.data = this.projService.project
    await this.currencyConverter.convertCopToUsd([this.data]);

    this.porcFinanciar = (100 - this.data?.porcentaje_minimo);
    this.zonas = this.data?.zonas;
    this.galeria = this.data?.galeria;
    this.planos = this.data?.planos;
    this.tipologia = this.data?.tipologia;
    this.avancesObra = this.data?.avances;
    this.projService.getSitiosInteres({id_proyecto: this.data?.id}).then(res => {
      if (res){
        this.sitiosInteres = res;
        this.url_mapa = this.sitiosInteres?.[0].mapa_interes_proyecto;
      }
    })

    if (this.avancesObra) {
      let listDates = this.avancesObra.map((a: any) => a?.title)
      this.fechasAvancesObra = this.configServ.removeRepeatElementsArray(listDates);
      this.actualizarAvanceObraActivo(0, this.fechasAvancesObra[0])
    }

    this.configServ.loadHeroProyectos();
    this.configServ.loadChangeTab();
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
    var pos = Number($("#" + el).offset().top) - 100;
    window.scrollTo({ top: pos, behavior: 'smooth' });

    $(".state").removeClass('active');
    $("." + el).addClass('active');
  }

  async calculoPorcentaje() {
    if (this.configServ.isBrowser()) {
      var porcentaje = $(".cambiarPorcentaje").val();
      var cuotasinicialfinanciar = $(".cuotasinicialfinanciar").val();
      var plazoaniosa = $(".plazoaniosa").val();
      var financiar = $(".valorafinanciar").val();

      if (!porcentaje) porcentaje = this.data?.porcentaje_minimo;

      this.porcFinanciar = (100 - porcentaje);
      this.datosCalc = await this.projService.getCalculoPorcentaje(this.data?.valor_proyecto, porcentaje, cuotasinicialfinanciar, plazoaniosa, financiar);
      this.datosCalc = this.datosCalc?.[0];

      if(this.datosCalc){
        $(".valorCuotaInicial").val('$ ' + this.datosCalc?.['cuotaInicial']);
        $(".diferencia").val('$ ' + this.datosCalc?.['diferencia']);
        if (this.datosCalc?.['cuotasinicialfinanciar'] != 'inf') {
          $(".cuotamensual").val('$ ' + this.datosCalc?.['cuotasinicialfinanciar']);
        }
        $(".valorafinanciar").val('$ ' + this.datosCalc?.['valorafinanciar']);
        this.plazoanios();
      }

    }
  }

  async diferenciadordecuotasmensuales() {
    if (this.configServ.isBrowser()) {
      var saldocuotainicial = $(".diferencia").val();
      var cuotasinicialfinanciar = $(".cuotasinicialfinanciar").val();

      this.datosCuota = await this.projService.getCalculoCuota(saldocuotainicial, cuotasinicialfinanciar);
      this.datosCuota = this.datosCuota[0];

      if (this.datosCuota?.['valorcuotas'] != 'inf') {
        $(".cuotamensual").val('$ ' + this.datosCuota?.['valorcuotas']);
      }
    }
  }

  async plazoanios() {
    var cuota = $(".plazoaniosa").val();
    var valorafinanciar = $(".valorafinanciar").val();

    this.datosAnio = await this.projService.getPlazoanios(cuota, valorafinanciar);
    this.datosAnio = this.datosAnio[0];
    $(".cuotahipoteca").val('$ ' + this.datosAnio?.['total']);
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
    if (this.contactForm.valid && !this.sendingContact) {
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
        valorProyecto: this.data?.valor_proyecto,
        sendTo: this.data.email_contactos,
        id_proyecto: this.data.id,
        gracias_a: "1",
        source: this.sourceTrack,
        medium: this.mediumTrack,
        campaign: this.campaignTrack,
        url_origen: window.location.href
      }
      const resp = await this.projService.setCalculadoraForm(values);
      if (resp.resp != 'no') {
        window.location.href = resp.resp;
      }
      else {
        await this.globalService.sendMailApiError({
          api: 'v1/setCalculadoraForm',
          errors: {
            url: this.router.url,
            request: values,
            response: resp
          }
        });
        alert('Opps ocurrió un error enviando el formulario')
      }
      this.sendingContact = false
    }
    else {
      this.showErrors = true
    }
  }

  async cargarSitios(idx: any) {
    this.url_mapa = this.sitiosInteres[idx].mapa_interes_proyecto;
  }

  seguirLeyendo() {
    $(".read").remove();
    $(".descripcion_proyecto").css('height', 'max-content');
  }

  async insertContactForm() {
    if (this.contactForm2.valid && this.captcha && !this.sendingContact) {
      this.sendingContact = true
      this.showErrors = false
      const values = {
        nombre: this.contactForm2.controls['nombre2'].value,
        email: this.contactForm2.controls['email2'].value,
        telefono: this.contactForm2.controls['telefono2'].value,
        mensaje: this.contactForm2.controls['mensaje2'].value,
        id_proyecto: this.data.id,
        nombre_proyecto: this.data.titulo_proyecto,
        sendTo: this.data.email_contactos,
        source: this.sourceTrack,
        medium: this.mediumTrack,
        campaign: this.campaignTrack,
        url_origen: window.location.href
      }
      const resp = await this.projService.setContactFormProyecto(values);
      if (resp.resp != 'no') {
        window.location.href = resp.resp;
      }
      else {
        await this.globalService.sendMailApiError({
          api: 'v1/setContactFormProyecto',
          errors: {
            url: this.router.url,
            request: values,
            response: resp.resp
          }
        });
        alert('Opps ocurrió un error enviando el formulario')
      }

      this.sendingContact = false
    }

    else {
      this.showErrors = true
    }
  }

  goToVentas() {
    window.location.href = 'proyectos-construccion-vivienda';
  }

  toogleFlotante() {
    if ($(".contacto_flotante").hasClass('active')) {
      $(".contacto_flotante").removeClass('active');
    } else {
      $(".contacto_flotante").addClass('active');
    }
  }

  closeContactModal() {
    $(".contacto_flotante").removeClass('active');
  }

}

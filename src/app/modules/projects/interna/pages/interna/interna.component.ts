import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/functions/config.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { FormService } from 'src/app/shared/services/functions/form.service';

declare var $:any;
@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.css']
})
export class InternaComponent implements OnInit {

  data                  : any = [];
  datosCalc             : any = [];
  datosCuota            : any = [];
  datosAnio             : any = [];
  galeria               : any = [];
  avances               : any = [];
  tipologia             : any = [];
  planos                : any = [];
  zonas                 : any = [];
  slug                  : string | null;
  imagenes_url          : string = "";
  captcha               : string = '';
  suscribeListenRouter  : Subscription;
  porcFinanciar         : number = 100;
  isSubmitted           : boolean = false;
  showErrors            : boolean = false

  contactForm: FormGroup = this.fb.group({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    telefono: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^-?([0-9]{7,10})?$/)])),
    terminos: new FormControl(false, Validators.requiredTrue)
  })


  constructor(private configServ: ConfigService, private projService: ProjectService, private router: Router, private activateRoute: ActivatedRoute, private fb: FormBuilder, private formServ: FormService) {
    this.slug = this.activateRoute.snapshot.paramMap.get('slug');
    this.imagenes_url = environment.imagenes_url;
    this.suscribeListenRouter = this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd  ) {
        this.slug = this.activateRoute.snapshot.paramMap.get('slug');
        this.configServ.goUpPage()
        this.getData();
      }
    });
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
  }

  ngOnInit(): void {
    this.init();
    this.configServ.loadHeroProyectos(1000);
  }

  async init(){
    const tasks = [
      () => this.getData()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  async getData(){
    this.data = await this.projService.getProyectoByUrl(this.slug);
    this.data = this.data[0];

    this.porcFinanciar = (100-this.data.porcentaje_minimo);

    this.zonas = this.data.zonas;
    this.galeria = this.data.galeria;
    this.planos = this.data.planos;
    this.tipologia = this.data.tipologia;
    this.avances = this.data.avances;

    this.calculoPorcentaje();
    this.diferenciadordecuotasmensuales();
  }

  trasladar(el: any){
    var pos = Number($("#"+el).offset().top)-100;
    window.scrollTo({top: pos, behavior: 'smooth'});

    $(".state").removeClass('active');
    $("."+el).addClass('active');
  }

  async calculoPorcentaje(){
    var porcentaje = $(".cambiarPorcentaje").val();
    var cuotasinicialfinanciar = $(".cuotasinicialfinanciar").val();
    var plazoaniosa = $(".plazoaniosa").val();
    var financiar = $(".valorafinanciar").val();

    this.porcFinanciar = (100-porcentaje);
    this.datosCalc = await this.projService.getCalculoPorcentaje(this.data.valor_proyecto, porcentaje, cuotasinicialfinanciar, plazoaniosa, financiar);
    this.datosCalc = this.datosCalc[0];

    $(".valorCuotaInicial").val('$ '+this.datosCalc['cuotaInicial']);
    $(".diferencia").val('$ '+this.datosCalc['diferencia']);
    if(this.datosCalc['cuotasinicialfinanciar']!='inf'){
      $(".cuotamensual").val('$ '+this.datosCalc['cuotasinicialfinanciar']);
    }
    $(".valorafinanciar").val('$ '+this.datosCalc['valorafinanciar']);

    this.plazoanios();
  }

  async diferenciadordecuotasmensuales(){
    var saldocuotainicial = $(".diferencia").val();
    var cuotasinicialfinanciar = $(".cuotasinicialfinanciar").val();

    this.datosCuota = await this.projService.getCalculoCuota(saldocuotainicial, cuotasinicialfinanciar);
    this.datosCuota = this.datosCuota[0];

    if(this.datosCuota['valorcuotas']!='inf'){
      $(".cuotamensual").val('$ '+this.datosCuota['valorcuotas']);
    }
  }

  async plazoanios(){
    var cuota = $(".plazoaniosa").val();
    var valorafinanciar = $(".valorafinanciar").val();

    this.datosAnio = await this.projService.getPlazoanios(cuota, valorafinanciar);
    this.datosAnio = this.datosAnio[0];

    $(".cuotahipoteca").val('$ '+this.datosAnio['total']);
  }

  hasErrorsFieldForm(field:string): Boolean {
    const form = this.contactForm
    return this.formServ.hasErrorsFieldForm(form, field, this.showErrors)
  }

  async insertContact(){
    this.isSubmitted = true;
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
      id_proyecto: this.data.id
    }

    if(this.contactForm.valid){
      const resp = await this.projService.setCalculadoraForm(values);
      if(resp.resp!='no'){
        window.location.href = resp.resp;
      }
    }else{
      console.log('Por favor completa todos los datos');
    }
  }

}

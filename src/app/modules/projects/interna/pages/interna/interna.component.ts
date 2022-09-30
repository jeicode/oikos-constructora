import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/functions/config.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

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
  galeria               : any = [];
  avances               : any = [];
  tipologia             : any = [];
  planos                : any = [];
  zonas                 : any = [];
  slug                  : string | null;
  imagenes_url          : string = "";
  suscribeListenRouter  : Subscription;
  porcFinanciar         : number = 100;

  constructor(private configServ: ConfigService, private projService: ProjectService, private router: Router, private activateRoute: ActivatedRoute) {
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

}

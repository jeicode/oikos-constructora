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
  galeria               : any = [];
  avances               : any = [];
  tipologia             : any = [];
  planos                : any = [];
  zonas                 : any = [];
  slug                  : string | null;
  imagenes_url          : string = "";
  suscribeListenRouter  : Subscription;

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

    this.zonas = this.data.zonas;
    this.galeria = this.data.galeria;
    this.planos = this.data.planos;
    this.tipologia = this.data.tipologia;
    this.avances = this.data.avances;
  }

  trasladar(el: any){
    var pos = Number($("#"+el).offset().top)-100;
    window.scrollTo({top: pos, behavior: 'smooth'});

    $(".state").removeClass('active');
    $("."+el).addClass('active');
  }

}

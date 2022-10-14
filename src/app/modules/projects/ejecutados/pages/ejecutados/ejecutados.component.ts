import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/shared/services/functions/config.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';

@Component({
  selector: 'app-ejecutados',
  templateUrl: './ejecutados.component.html',
  styleUrls: ['./ejecutados.component.css']
})
export class EjecutadosComponent implements OnInit {

  data                  : any = []; //data page
  general               : any = []; //data website
  proyectos             : any = [];
  total                 : any = [];
  suscribeListenRouter  : Subscription;
  imagenes_url          : string = "";
  limt                  : number = 12;

  constructor(private pageService: PageService, private router: Router, private configServ: ConfigService, private projService: ProjectService) {
    this.imagenes_url = environment.imagenes_url;
    this.suscribeListenRouter = this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd  ) {
        this.configServ.goUpPage()
      }
    });
  }

  ngOnInit(): void {
    this.init();
    this.pageService.closeNav();
  }

  async init(){
    const tasks = [
      () => this.getData(),
      () => this.getProyectos()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  async getData(){
    this.data = await this.pageService.getContentPage('proyectos-ejecutados')
  }

  async getProyectos(){
    this.proyectos = await this.projService.getProyectosByTipo('4', 'NA', 'NA', 'NA', this.limt);
    this.total = await this.projService.getProyectosByTipo('4');
  }

  cargarMas(){
    this.limt += 12;
    this.getProyectos();
  }

}

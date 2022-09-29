import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/shared/services/functions/config.service';

@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.component.html',
  styleUrls: ['./vivienda.component.css']
})
export class ViviendaComponent implements OnInit {

  data                  : any = []; //data page
  general               : any = []; //data website
  imagenes              : any = [];
  ciudades              : any = [];
  tipo_proyecto         : any = [];
  proyectos             : any = [];
  suscribeListenRouter  : Subscription;
  isSubmitted           : boolean = false;
  captcha               : string = "";
  imagenes_url          : string = "";
  imagen_banner         : string = "";

  constructor(private pageService: PageService, private router: Router, private configServ: ConfigService) {
    this.imagenes_url = environment.imagenes_url;
    this.suscribeListenRouter = this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd  ) {
        this.configServ.goUpPage()
      }
    });
  }

  ngOnInit(): void {
    this.init();
    this.configServ.loadSearchMobile(1000);
  }

  async init(){
    const tasks = [
      () => this.getData(),
      () => this.getSecciones(),
      () => this.getProyectos()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  async getData(){
    this.data = await this.pageService.getContentPage('proyectos-construccion-vivienda')
  }

  async getImagenes(){
    this.imagenes = await this.pageService.getImagesBySlugPage('proyectos-construccion-vivienda');

    this.imagen_banner = this.imagenes_url+this.imagenes[0]['field_content'];
  }

  async getSecciones() {
    this.ciudades = await this.pageService.getElementsContent('nombre ciudad', 'ciudades');
    this.tipo_proyecto = await this.pageService.getElementsContent('titulo tipo proyecto', 'tipos_proyectos');
  }

  async getProyectos(){
    this.proyectos = await this.pageService.getProyectosByTipo('1');
  }

}

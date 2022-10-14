import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/shared/services/functions/config.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { Project } from 'src/app/core/models/project.model';

declare var $:any;
@Component({
  selector: 'app-comerciales',
  templateUrl: './comerciales.component.html',
  styleUrls: ['./comerciales.component.css']
})
export class ComercialesComponent implements OnInit {

  data                  : any = []; //data page
  general               : any = []; //data website
  imagenes              : any = [];
  ciudades              : any = [];
  typesProject         : any = [];
  proyectos             : any = [];
  banners               : any = [];
  ejecutados            : Project[] = [];
  precios               : any = [];
  suscribeListenRouter  : Subscription;
  isSubmitted           : boolean = false;
  proyectos_ver         : boolean = true;
  captcha               : string = "";
  imagenes_url          : string = "";
  imagen_banner         : string = "";
  ciudad                : string = "NA";
  tipo_search           : string = "NA";
  precio_search         : string = "NA";

  constructor(private pageService: PageService, private router: Router, 
              private configServ: ConfigService, private projService: ProjectService) {
    this.imagenes_url = environment.imagenes_url;
    this.suscribeListenRouter = this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd  ) {
        this.configServ.goUpPage()
      }
    });
  }

  ngOnInit(): void {
    this.init();
    this.configServ.loadBannerProyectos(1000);
  }

  async init(){
    const tasks = [
      () => this.getData(),
      () => this.getSecciones(),
      () => this.getProyectos(),
      () => this.getEjecutados(),
      () => this.getPreciosProyectos()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  async getData(){
    this.data = await this.pageService.getContentPage('proyectos-construccion-comerciales-industriales')
  }

  async getImagenes(){
    this.imagenes = await this.pageService.getImagesBySlugPage('proyectos-construccion-comerciales-industriales');

    this.imagen_banner = this.imagenes_url+this.imagenes[0]['field_content'];
  }

  async getSecciones() {
    const typesProject = await this.projService.getHousingTypesByType('2');
    if (typesProject) this.typesProject = typesProject;

    this.ciudades = await this.pageService.getElementsContent('nombre ciudad', 'ciudades');

    this.banners = await this.pageService.getElementsContent('titulo banner comerciales', 'banner_comerciales');
  }

  getCiudad(ciudad: any){
    this.ciudad = ciudad;
  }

  getTipo(tipo: any){
    this.tipo_search = tipo;
  }

  getPrecio(precio: any){
    this.precio_search = precio;
  }


  toogleContainerSearch(){
    const containerFiltro = document.querySelector('.filtro_proyectos');
    $(containerFiltro).slideToggle().css('display', 'flex')

  }

  async getProyectos(){
    this.proyectos = await this.projService.getProyectosByTipo('2');

    if(this.proyectos.length==0){
      this.proyectos_ver = false;
    }else{
      this.proyectos_ver = true;
    }
  }

  async buscarProyectos(){
    this.toogleContainerSearch()
    this.proyectos = await this.projService.getProyectosByTipo('2', this.ciudad, this.tipo_search, this.precio_search);

    if(this.proyectos.length==0){
      this.proyectos_ver = false;
    }else{
      this.proyectos_ver = true;
    }
  }

  async limpiarFiltros(){
    this.toogleContainerSearch()
    this.getProyectos();
    $(".filtroCiudad").val("NA");
    $(".filtroTipo").val("NA");
    $(".filtroPrecio").val("NA");
  }

  async getEjecutados(){
    this.ejecutados = await this.projService.getProyectosByTipo('4');
    this.configServ.loadbannerEjecutados(1000);
  }

  async getPreciosProyectos(){
    this.precios = await this.projService.getPreciosProyectos('2');
  }

}

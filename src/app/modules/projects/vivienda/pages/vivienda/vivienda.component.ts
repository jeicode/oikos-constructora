import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/shared/services/functions/config.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { Project } from 'src/app/core/models/project.model';
import { ResponsiveService } from 'src/app/shared/services/functions/responsive.service';

declare var $:any;
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
  proyectos             : Project[] = [];
  typesProject          : any = [];
  banners               : any = [];
  ejecutados            : any = [];
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
  projectSelectedToModal:Project = new Project()

  notifyChanges: Subject<boolean> = new Subject<boolean>();


  constructor(private pageService: PageService, private router: Router,
              private responsiveService:ResponsiveService, 
              private configServ: ConfigService, private projService: ProjectService) {
    this.imagenes_url = environment.imagenes_url;
    this.suscribeListenRouter = this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd  ) {
        this.configServ.goUpPage()
      }
    });
  }

  toogleContainerSearch(){
    if(this.responsiveService.isMobile){
      const containerFiltro = document.querySelector('.filtro_proyectos');
      $(containerFiltro).slideToggle().css('display', 'flex')
    }

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
      () => this.getPreciosProyectos()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  selectProjectToModal(project:Project){
    this.projectSelectedToModal = project
    this.notifyChanges.next(true);
  }


  async getData(){
    this.data = await this.pageService.getContentPage('proyectos-construccion-vivienda')
  }

  async getImagenes(){
    this.imagenes = await this.pageService.getImagesBySlugPage('proyectos-construccion-vivienda');

    this.imagen_banner = this.imagenes_url+this.imagenes[0]['field_content'];
  }

  async getSecciones() {

    const ciudades = await this.projService.getCitiesByProjectType('1');
    if (ciudades) this.ciudades = ciudades;

    const typesProject = await this.projService.getHousingTypesByType('1');
    if (typesProject) this.typesProject = typesProject;
    
    this.banners = await this.pageService.getElementsContent('titulo banner vivienda', 'banner_vivienda');
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

  async getProyectos(){
    this.proyectos = await this.projService.getProyectosByTipo('1');

    if(this.proyectos.length==0){
      this.proyectos_ver = false;
    }else{
      this.proyectos_ver = true;
    }
  }

  async buscarProyectos(){
    this.toogleContainerSearch();
    this.proyectos = await this.projService.getProyectosByTipo('1', this.ciudad, this.tipo_search, this.precio_search);

    if(this.proyectos.length==0){
      this.proyectos_ver = false;
    }else{
      this.proyectos_ver = true;
    }
  }

  async limpiarFiltros(){
    this.toogleContainerSearch();
    this.getProyectos();
    $(".filtroCiudad").val("NA");
    $(".filtroTipo").val("NA");
    $(".filtroPrecio").val("NA");
  }

  async getPreciosProyectos(){
    this.precios = await this.projService.getPreciosProyectos('1');
  }
}

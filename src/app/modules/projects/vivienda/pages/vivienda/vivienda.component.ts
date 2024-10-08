import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/shared/services/functions/config.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { Project } from 'src/app/core/models/project.model';
import { ResponsiveService } from 'src/app/shared/services/functions/responsive.service';
import { CurrencyConverterService } from 'src/app/shared/services/api/currency-converter.service';

declare var $: any;
@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.component.html',
  styleUrls: ['./vivienda.component.css']
})
export class ViviendaComponent implements OnInit {

  data: any = []; //data page
  general: any = []; //data website
  imagenes: any = [];
  ciudades: any = [];
  proyectos: Project[] = [];
  typesProject: any = [];
  banners: any = [];
  ejecutados: any = [];
  precios: any = [];
  suscribeListenRouter: Subscription;
  isSubmitted: boolean = false;
  proyectos_ver: boolean = true;
  captcha: string = "";
  imagenes_url: string = "";
  imagen_banner: string = "";
  ciudad: string = "NA";
  tipo_search: string = "NA";
  precio_search: string = "NA";
  projectSelectedToModal: Project = new Project()

  modalLaunchProjectIsOpen: boolean = false;

  notifyChanges: Subject<any> = new Subject<any>();
  notifyChangesPreLaunchProject: Subject<any> = new Subject<any>();

  url_filtro: any = [];


  constructor(private pageService: PageService, private router: Router,
    private responsiveService: ResponsiveService, private currencyConverter: CurrencyConverterService,
    public configServ: ConfigService, private projService: ProjectService) {
    this.imagenes_url = environment.imagenes_url;
    this.suscribeListenRouter = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.configServ.goUpPage()
        this.pageService.closeNav();
      }
    });
  }


  openModalPreLaunchProject() {
    this.modalLaunchProjectIsOpen = true;
  }


  toogleContainerSearch() {
    if (this.responsiveService.isMobile) {
      const containerFiltro = document.querySelector('.filtro_proyectos');
      $(containerFiltro).slideToggle().css('display', 'flex')
    }

  }


  ngOnInit(): void {
    this.init();
    this.pageService.closeNav();
  }

  async init() {
    await Promise.all([
      this.getData(),
      this.getSecciones(),
      this.getProyectos(),
      this.getEjecutados(),
      this.getPreciosProyectos(),
    ])
    this.convertCopToUsdProjects()
  }


  async convertCopToUsdProjects() {
    await this.currencyConverter.convertCopToUsd(this.proyectos)
  }


  selectProjectToPreLaunch(project: Project) {
    this.projectSelectedToModal = project
    this.notifyChangesPreLaunchProject.next({ openModal: true });
  }

  selectProjectToModal(project: Project) {
    this.projectSelectedToModal = project
    this.notifyChanges.next({ openModal: true });
  }


  async getData() {
    this.data = await this.pageService.getContentPage('proyectos-construccion-vivienda')
  }

  async getEjecutados() {
    this.ejecutados = await this.projService.getProyectosByTipo('4', 'NA', 'NA', 'NA', '', '', 'descripcion_precio DESC');
    this.configServ.loadbannerEjecutados(1000);
  }

  async getImagenes() {
    this.imagenes = await this.pageService.getImagesBySlugPage('proyectos-construccion-vivienda');

    this.imagen_banner = this.imagenes_url + this.imagenes[0]['field_content'];
  }

  async getSecciones() {

    const ciudades = await this.projService.getCitiesByProjectType('1');
    if (ciudades) this.ciudades = ciudades;

    const typesProject = await this.projService.getHousingTypesByType('1');
    if (typesProject) this.typesProject = typesProject;

    this.banners = await this.pageService.getElementsContent('titulo banner vivienda', 'banner_vivienda');
  }

  getCiudad(ciudad: any) {
    this.ciudad = ciudad;
  }

  getTipo(tipo: any) {
    this.tipo_search = tipo;
  }

  getPrecio(precio: any) {
    this.precio_search = precio;
  }

  async getProyectos() {
    this.url_filtro = this.router.parseUrl(this.router.url);

    if (this.url_filtro.queryParams['ciudad']) {
      this.proyectos = await this.projService.getProyectosByTipo('1', this.url_filtro.queryParams['ciudad']);
    } else {
      this.proyectos = await this.projService.getProyectosByTipo('1');
    }

    if (this.proyectos?.length == 0) {
      this.proyectos_ver = false;
    } else {
      this.proyectos_ver = true;
    }
  }

  async buscarProyectos(ciudad?: any) {
    this.toogleContainerSearch();

    if (ciudad) {
      this.proyectos = await this.projService.getProyectosByTipo('1', ciudad, this.tipo_search, this.precio_search);
    } else {
      this.proyectos = await this.projService.getProyectosByTipo('1', this.ciudad, this.tipo_search, this.precio_search);
    }

    if (this.proyectos.length == 0) {
      this.proyectos_ver = false;
    } else {
      this.proyectos_ver = true;
    }
  }

  async limpiarFiltros() {
    this.toogleContainerSearch();
    this.getProyectos();
    $(".filtroCiudad").val("NA");
    $(".filtroTipo").val("NA");
    $(".filtroPrecio").val("NA");
  }

  async getPreciosProyectos() {
    this.precios = await this.projService.getPreciosProyectos('1');
  }
}

import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/shared/services/functions/config.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { ResponsiveService } from 'src/app/shared/services/functions/responsive.service';

declare const $: any;
@Component({
  selector: 'app-ejecutados',
  templateUrl: './ejecutados.component.html',
  styleUrls: ['./ejecutados.component.css']
})
export class EjecutadosComponent implements OnInit {

  data: any = []; //data page
  general: any = []; //data website
  proyectos: any = [];
  total: any = [];
  suscribeListenRouter: Subscription;
  imagenes_url: string = "";
  limt: number = 12;

  ciudad: any = "NA"; //data page
  ciudades: any = []; //data page
  typesProject: any = []; //data page
  tipo_search: any = "NA"; //data page
  precio_search: any = "NA"; //data page
  anios: any = [];
  proyectos_ver: boolean = false;
  constructor(private pageService: PageService,
    private router: Router,
    private responsiveService: ResponsiveService,
    private configServ: ConfigService,
    private projService: ProjectService) {
    this.imagenes_url = environment.imagenes_url;
    this.suscribeListenRouter = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.configServ.goUpPage()
      }
    });
  }

  ngOnInit(): void {
    this.init();
    this.pageService.closeNav();
  }

  async init() {
    const tasks = [
      () => this.getData(),
      () => this.getProyectos(),
      () => this.getSecciones()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  async getData() {
    this.data = await this.pageService.getContentPage('proyectos-ejecutados')
  }

  async getProyectos() {
    this.proyectos = await this.projService.getProyectosByTipo('4', 'NA', 'NA', 'NA', this.limt, '', 'descripcion_precio DESC');
    this.total = await this.projService.getProyectosByTipo('4', 'NA', 'NA', 'NA', '', '', 'descripcion_precio DESC');

    this.anios = [];
    for (var i in this.proyectos) {
      if (this.proyectos[i]?.descripcion_precio != '' && this.proyectos[i]?.descripcion_precio != null) {
        this.anios.push(this.proyectos[i]?.descripcion_precio)
      }
    }
  }

  cargarMas() {
    this.limt += 12;
    this.getProyectos();
  }

  // BUSCADOR FUNCTIONS
  toogleContainerSearch() {
    if (this.responsiveService.isMobile && this.configServ.isBrowser()) {
      const containerFiltro = document.querySelector('.filtro_proyectos');
      $(containerFiltro).slideToggle().css('display', 'flex')
    }
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
  async limpiarFiltros() {
    this.toogleContainerSearch();
    this.getProyectos();
    $(".filtroCiudad").val("NA");
    $(".filtroTipo").val("NA");
    $(".filtroPrecio").val("NA");
    this.ciudad = 'NA';
    this.tipo_search = 'NA';
    this.precio_search = 'NA';
  }
  async buscarProyectos() {
    this.toogleContainerSearch();
    this.proyectos = await this.projService.getProyectosByTipo('4', this.ciudad, this.tipo_search, this.precio_search, '', '', 'descripcion_precio DESC');

    if (this.proyectos.length == 0) {
      this.proyectos_ver = false;
    } else {
      this.proyectos_ver = true;
    }
  }


  async getSecciones() {

    const ciudades = await this.projService.getCitiesByProjectType('4');
    if (ciudades) this.ciudades = ciudades;

    const typesProject = await this.projService.getHousingTypesByType('4');
    if (typesProject) this.typesProject = typesProject;

  }



}

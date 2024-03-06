import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BannerHome, Zona } from 'src/app/core/models/banner-home.model';
import { Project } from 'src/app/core/models/project.model';
import { CurrencyConverterService } from 'src/app/shared/services/api/currency-converter.service';
import { PageService } from 'src/app/shared/services/api/page.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { ConfigService } from 'src/app/shared/services/functions/config.service';
import { ResponsiveService } from 'src/app/shared/services/functions/responsive.service';
import { environment } from 'src/environments/environment.prod';
import SwiperCore,{ Navigation, Pagination, SwiperOptions } from 'swiper';


SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  housingProjects:Project[] = []
  projectSelectedToModal:Project = new Project()
  notifyChanges: Subject<any> = new Subject<any>();
  notifyChangesPreLaunchProject: Subject<any> = new Subject<any>();


  data:any;
  BASE_URL:string = environment.imagenes_url

  // collections
  bannersHome:BannerHome[] = []
  itemsWhyChooseUs:any[] = []
  itemsPlanet:any[] = []

  config: SwiperOptions = {
    autoplay: {
        delay: 10000,
    },
    parallax:true,
    slidesPerView:1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
}

  constructor(private projectService: ProjectService, private pageService: PageService,
              public responsiveService: ResponsiveService, public configServ:ConfigService,
              private currencyConverter:CurrencyConverterService) { }

  ngOnInit(): void {
    this.init()
  }


  async init(){
    await this.getBannersHome()
    this.getProjectsHome()
    this.getData()
    this.getCollections()
  }



  getCustomBenefitsProject(benefits:string, zonas:Zona[]): (Zona | undefined)[]{
    const arrBenefits = benefits.split(',')
    if (arrBenefits.length > 0){
      return arrBenefits.map( b => {
        return zonas.find( z => z.nombre == b)
      })
    }
    return []
  }

  async getBannersHome(){
    this.bannersHome = await this.pageService.getBannersHome('titulo banner home', 'banner_home');
  }

  
  async getData(){
    const data = await this.pageService.getPageContent('/');
    if (data) this.data = data
  } 

  async getCollections(){
    this.itemsWhyChooseUs = await this.pageService.getElementsContent('titulo item por que elegirnos home','item_elegirnos_home');    
    this.itemsPlanet = await this.pageService.getElementsContent('titulo seccion planeta home','item_seccion_planeta_home');
  } 


  async getProjectsHome(){
    this.housingProjects = await this.projectService.getProyectosByTipo('1', undefined, undefined, undefined, undefined, 'home');
    await this.currencyConverter.convertCopToUsdProjects(this.housingProjects)
  }


  /**
   * 
   * @param project selected project to modal
   */
  selectProjectToModal(project:Project){
    project.origin = 'home';
    this.projectSelectedToModal = project
    this.notifyChanges.next({openModal:true});
  }


  /**
   * 
   * @param project project selected to prelaunch modal form
   */
  selectProjectToPreLaunch(project:Project){
    this.projectSelectedToModal = project
    this.notifyChangesPreLaunchProject.next({openModal:true});
  }



}

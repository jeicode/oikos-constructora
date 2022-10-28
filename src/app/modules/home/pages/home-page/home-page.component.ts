import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BannerHome, Zona } from 'src/app/core/models/banner-home.model';
import { Project } from 'src/app/core/models/project.model';
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
  BASE_URL:string = environment.base_url

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
              public responsiveService: ResponsiveService, public configServ:ConfigService) { }

  ngOnInit(): void {
    this.init()
    this.getProjectsHome()
  }


  async init(){
    const tasks = [
      () => this.getBannersHome(),
      () => this.getProjectsHome(),
      () => this.getData(),
      () => this.getCollections()
    ]

    for (const task of tasks) {
      await task();
    }
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
    const bannersHome = await this.pageService.getBannersHome('titulo banner home', 'banner_home');
    if (bannersHome) this.bannersHome = bannersHome
  }

  
  async getData(){
    const data = await this.pageService.getPageContent('/');
    if (data) this.data = data
  } 

  async getCollections(){
    const itemsWhyChooseUs = await this.pageService.getElementsContent('titulo item por que elegirnos home','item_elegirnos_home');
    if (itemsWhyChooseUs) this.itemsWhyChooseUs = itemsWhyChooseUs
    
    const itemsPlanet = await this.pageService.getElementsContent('titulo seccion planeta home','item_seccion_planeta_home');
    if (itemsPlanet) this.itemsPlanet = itemsPlanet
  } 

  async getProjectsHome(){
    const housingProjects = await this.projectService.getProyectosByTipo('1');
    if (housingProjects) this.housingProjects = housingProjects;
  }


  /**
   * 
   * @param project selected project to modal
   */
  selectProjectToModal(project:Project){
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

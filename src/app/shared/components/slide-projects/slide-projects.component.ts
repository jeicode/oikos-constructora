import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore,{ Navigation, Pagination, SwiperOptions } from 'swiper';
import { ProjectService } from '../../services/api/project.service';
import { Project } from 'src/app/core/models/project.model';
import { environment } from 'src/environments/environment';
import { DefaultImgDirective } from '../../directives/default-img.directive';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { WppModalProjectComponent } from '../wpp-modal-project/wpp-modal-project.component';
import { ConfigService } from '../../services/functions/config.service';
import { ModalPreLaunchProjectComponent } from '../modal-pre-launch-project/modal-pre-launch-project.component';
import { ThousandNumber } from '../../pipes/thousand-number.pipe';
import { CurrencyConverterService } from '../../services/api/currency-converter.service';


SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-slide-projects',
  templateUrl: './slide-projects.component.html',
  styleUrls: ['./slide-projects.component.css'],
  standalone: true,
  imports:[
    CommonModule,
    SwiperModule,
    RouterModule,

    // directives
    DefaultImgDirective,
    WppModalProjectComponent,
    ModalPreLaunchProjectComponent,
    ThousandNumber
  ]
})
export class SlideProjectsComponent implements OnInit {

  BASE_URL:string = environment.imagenes_url
  projectSelectedToModal:Project = new Project()
  notifyChanges: Subject<any> = new Subject<any>();
  notifyChangesPreLaunchProject: Subject<any> = new Subject<any>();

  config: SwiperOptions = {
    slidesPerView: 1,
    breakpoints:{
        1050:{
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 2,
        },
        100:{
            slidesPerView: 1,
        },
    },
    navigation: {
        nextEl: ".cnt_car_proy_dest .swiper-button-next",
        prevEl: ".cnt_car_proy_dest .swiper-button-prev",
      },
  };

  @Input() projects:Project[] = []



  constructor(private projectService: ProjectService, public configServ:ConfigService,
              private currencyConverter:CurrencyConverterService) {}
  
  ngOnInit(): void {
    this.getFeaturedProjects()  
  }


  async getFeaturedProjects(){
    if (this.projects.length == 0) this.projects = await this.projectService.getFeaturedProjects()
    await this.currencyConverter.convertCopToUsdProjects(this.projects)
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

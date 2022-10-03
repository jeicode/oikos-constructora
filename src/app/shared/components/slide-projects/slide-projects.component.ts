import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import SwiperCore,{ Navigation, Pagination, SwiperOptions } from 'swiper';
import { ProjectService } from '../../services/api/project.service';
import { Project } from 'src/app/core/models/project.model';
import { environment } from 'src/environments/environment';
import { DefaultImgDirective } from '../../directives/default-img.directive';
import { RouterModule } from '@angular/router';


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
    DefaultImgDirective
  ]
})
export class SlideProjectsComponent implements OnInit {

  BASE_URL:string = environment.base_url

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



  constructor(private projectService: ProjectService) {}
  
  ngOnInit(): void {
    this.getProjectsByType()  
  }


  async getProjectsByType(){
    if (this.projects.length == 0) {
      const projects = await this.projectService.getProyectosByTipo('1')
      if(projects) this.projects = projects
    }
  }

}

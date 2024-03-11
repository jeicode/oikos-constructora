import { Component, inject, OnInit } from '@angular/core';

import { PageService } from 'src/app/shared/services/api/page.service';

import { ProjectsBannerComponent } from './components/projects-banner/projects-banner.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { ItemsPlanetComponent } from './components/items-planet/items-planet.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ProjectsBannerComponent,
    ProjectsListComponent,
    WhyChooseUsComponent,
    ItemsPlanetComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  pageService = inject(PageService)
  data:any;

  // collections
  itemsPlanet:any[] = []

  ngOnInit(): void {
    this.getData()
  }
  
  async getData(){
    const data = await this.pageService.getPageContent('/');
    if (data) this.data = data
  } 

}

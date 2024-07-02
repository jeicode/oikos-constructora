import { Component, inject, OnInit, signal } from '@angular/core';
import { getPageContent } from 'src/app/shared/services/apis/page.service';
import { ItemsPlanetComponent } from './components/items-planet/items-planet.component';
import { ProjectsBannerComponent } from './components/projects-banner/projects-banner.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';

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

  getPageContent = getPageContent()
  data = signal(undefined);

  ngOnInit(): void {
    this.getPageContent('/').then(res => {
      res && this.data.set(res)
    })
  }



}

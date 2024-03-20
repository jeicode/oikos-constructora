import { Component, inject, OnInit, signal } from '@angular/core';
import { CsService } from 'src/app/shared/services/functions/cs.service';
import { ProjectsBannerComponent } from './components/projects-banner/projects-banner.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ProjectsBannerComponent,
    // ProjectsListComponent,
    // WhyChooseUsComponent,
    // ItemsPlanetComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cs = inject(CsService);
  data = signal(undefined);
  // pageService = inject(PageService)


  ngOnInit(): void {
    // this.getData()
  }
  
  async getData(){
    // const data = await this.pageService.getPageContent('/');
    // if (data) this.data.set(data)
  } 

}

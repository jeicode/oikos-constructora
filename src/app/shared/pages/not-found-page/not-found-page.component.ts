import { Component, Inject, OnInit, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RESPONSE } from '@nguniversal/express-engine/tokens'
import { Response } from 'express';
import { environment } from 'src/environments/environment';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { DefaultImgDirective } from '../../directives/default-img.directive';
import { PageService } from '../../services/api/page.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['../stlyes.css'],
  standalone: true,
  imports:[
    RouterModule,
    BreadcrumbComponent,
    //directives
    DefaultImgDirective
  ]
})
export class NotFoundPageComponent implements OnInit {

  images:any[] = []
  data:any;
  BASE_URL:string = environment.base_url

  private response: Response

  constructor(@Optional()
              @Inject(RESPONSE)
              response: any,
              private pageService: PageService) {
    this.response = response
  }

  ngOnInit(): void {
    if (this.response) this.response.statusCode = 404;
    this.init()
  }


  async init(){
    const tasks = [
      () => this.getData(),
      () => this.getImages()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  async getData(){
    const data = await this.pageService.getContentPage('404')
    if (data) {
      this.data = data;
    }
  }

  async getImages(){
    const images = await this.pageService.getImagesBySlugPage('404')
    if (images){
      this.images = images
    }
  }

}

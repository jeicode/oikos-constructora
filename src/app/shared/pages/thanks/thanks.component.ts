import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  standalone: true
})
export class ThanksComponent implements OnInit {

  data        : any = [];
  imagenes    : any = [];
  imagen_prin : any = [];

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    const tasks = [
      () => this.getData(),
      () => this.getImagenes()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  async getData(){
    this.data = await this.pageService.getContentPage('gracias')
  }

  async getImagenes(){
    this.imagenes = await this.pageService.getImagesBySlugPage('gracias')
    this.imagen_prin.push(this.imagenes[0]['field_content'], this.imagenes[0]['alt'], this.imagenes[0]['title']);
  }

}

import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  logos: any = [];
  imagenes_url: string = '';

  constructor(private pageService: PageService) {
  }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    const tasks = [
      () => this.getLogos()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  async getLogos(){
    this.logos = await this.pageService.getElementsContent("titulo emprsa", "logos_empresas", "field_name='ver en header' AND field_content='2'")
  }

}

import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { GlobalService } from '../../services/api/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  data          : any = [];
  general       : any = [];
  logos         : any = [];
  logos_footer  : any = [];
  imagenes_url  : string = '';

  constructor(private globalService: GlobalService, private pageService: PageService) {
  }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    const tasks = [
      () => this.getRedes(),
      () => this.getDataGeneral(),
      () => this.getEmpresas(),
      () => this.getLogos()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  async getRedes(){
    this.data = await this.globalService.getSocialNetwork()
  }

  async getDataGeneral(){
    this.general = await this.globalService.getConfigInfo()
  }

  async getEmpresas(){
    this.logos = await this.pageService.getElementsContent('titulo empresa', 'logos_empresas');
  }

  async getLogos(){
    this.logos_footer = await this.pageService.getElementsContent('titulo logo footer', 'logos');
  }

}

import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  BASE_URL:string = environment.base_url;
  menuMobileIsActive:boolean = false;
  
  // collections
  logos: any = [];
  linksHeader:any[] = []

  constructor(private pageService: PageService) {
  }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    const tasks = [
      () => this.getCollectionsPage()
    ]

    for (const task of tasks) {
      await task();
    }
  }

  


  async getCollectionsPage(){

    const linksHeader = await this.pageService.getElementsContent('titulo menu', 'menu');
    if (linksHeader && linksHeader?.length > 0) {
      this.linksHeader = linksHeader
    }
    const logos = await this.pageService.getElementsContent("titulo empresa", "logos_empresas", "field_name='ver en header' AND field_content='2'")
    if (logos && logos?.length > 0) this.logos = logos
  }



  toogleActiveMenuMobile(){
    this.menuMobileIsActive = !this.menuMobileIsActive
  }


}

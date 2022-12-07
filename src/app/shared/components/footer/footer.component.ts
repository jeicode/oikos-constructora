import { Component, OnInit } from '@angular/core';
import { ConfigFooter } from 'src/app/core/models/config-footer.model';
import { PageService } from 'src/app/shared/services/api/page.service';
import { environment } from 'src/environments/environment';
import { GlobalService } from '../../services/api/global.service';
import { ResponsiveService } from '../../services/functions/responsive.service';

declare const $:any;
interface MenuFooter {
  title: any,
  children: any[]
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  
  BASE_URL:string = environment.imagenes_url;

  socialNetwork : any = [];
  configFooter  : ConfigFooter = new ConfigFooter()
  
  //collections
  companies     : any[] = [];
  logos         : any[] = [];
  menuFooter    : any = [];
  constructor(private globalService: GlobalService, 
              private responsive: ResponsiveService,
              private pageService: PageService) {
  }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    const tasks = [
      () => this.getSocialNetwork(),
      () => this.getConfigFooter(),
      () => this.getMenuFooter(),
      () => this.getCollectionsPage(),
    ]

    for (const task of tasks) {
      await task();
    }
  }


  async getSocialNetwork(){
    const socialNetwork = await this.globalService.getSocialNetwork()
    if(socialNetwork) this.socialNetwork = socialNetwork
  }

  async getConfigFooter(){
    const configFooter = await this.globalService.getConfigFooter()
    if(configFooter) this.configFooter = configFooter
  }


  async getCollectionsPage(){
    
    const companies = await this.pageService.getElementsContent("titulo empresa", "logos_empresas")
    if (companies) this.companies = companies

    const logos = await this.pageService.getElementsContent("titulo logo footer", "logos")
    if (logos && logos?.length > 0) this.logos = logos
  }



  async getMenuFooter(){
    this.menuFooter = await this.globalService.getMenuFooter();
    /*const linksFooter = await this.pageService.getElementsContent('titulo enlace footer', 'enlaces_footer');

    if (sectionsFooter && linksFooter) {
      sectionsFooter.forEach( (i:any)  => {
        const children = linksFooter.filter( (a:any) => a?.static === i?.id)
        this.menuFooter.push({
          title:i?.field_content,
          children
        })
      });

    }*/
  }



  /**
   * 
   * @param menuEle HTMLDivElement
   */
  dropdownToogleMenu(menuEle:HTMLDivElement){

    if(this.responsive.isMobile){
      const menu = $(menuEle).find('.h_cl_pie')
      const contentMent = $(menuEle).find('.menu_pie')
      
      if( $(menu).hasClass('active') ){
        $(menu).next(contentMent).slideUp();
        $(menu).removeClass('active');
      }
      else{
        $(contentMent).slideUp();
        $(menu).removeClass('active');
        $(menu).addClass('active');
        $(menu).next().slideToggle();
      }
    }
  }
}

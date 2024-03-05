import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigFooter } from 'src/app/core/models/config-footer.model';
import { PageService } from 'src/app/shared/services/api/page.service';
import { environment } from 'src/environments/environment';
import { GlobalService } from '../../services/api/global.service';
import { ResponsiveService } from '../../services/functions/responsive.service';
import { SurveyModalComponent } from '../survey-modal/survey-modal.component';

declare const $:any;
@Component({
  standalone: true,
  imports:[SurveyModalComponent, CommonModule, RouterModule],
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  loadingData = false
  BASE_URL:string = environment.imagenes_url;

  socialNetwork : any = [];
  configFooter  : ConfigFooter = new ConfigFooter()
  
  //collections
  companies     : any[] = [];
  logos         : any[] = [];
  menuFooter    : any = [];
  menuFooterProyectos :any = [];
  
  constructor(private globalService: GlobalService, 
              private responsive: ResponsiveService,
              private pageService: PageService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 1500);
  }

  async init(){
    await this.getCollectionsPage()
    await this.getConfigFooter()
    await this.getMenuFooter()
    await this.getSocialNetwork()
    this.loadingData = true
  }


  async getSocialNetwork(){
    this.socialNetwork = await this.globalService.getSocialNetwork()
  }

  async getConfigFooter(){
    const configFooter = await this.globalService.getConfigFooter()
    if(configFooter) this.configFooter = configFooter
  }


  async getCollectionsPage(){
    this.companies = await this.pageService.getElementsContent("titulo empresa", "logos_empresas")
    this.logos = await this.pageService.getElementsContent("titulo logo footer", "logos")
  }

  async getMenuFooter(){
    const menuFooter = await this.globalService.getMenuFooter();
    this.menuFooter = menuFooter.splice(0,2)
    this.menuFooterProyectos = menuFooter;
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

import { NgOptimizedImage } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { IConfigFooter } from 'src/app/core/interfaces/footer.interface';
import { environment } from 'src/environments/environment';
import { getElementsContent } from '../../services/apis/common.service';
import { getConfigFooter, getMenuFooter, getSocialNetwork } from '../../services/apis/global.service';
import { CsService } from '../../services/functions/cs.service';
import { ResponsiveService } from '../../services/functions/responsive.service';
import { SurveyModalComponent } from '../survey-modal/survey-modal.component';

declare const $:any

@Component({
  standalone: true,
  imports:[SurveyModalComponent, RouterModule, NgOptimizedImage],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit, OnDestroy {

  homeIsActive:WritableSignal<boolean | undefined> = signal(undefined)

  cs = inject(CsService)

  getSocialNetwork = getSocialNetwork()
  getConfigFooter = getConfigFooter()
  getElementsContent = getElementsContent()
  getMenuFooter = getMenuFooter()

  responsive = inject(ResponsiveService)
  router = inject(Router)

  IMG_URL = signal(environment.imagenes_url)

  socialNetwork:WritableSignal<any[]> = signal([])
  configFooter:WritableSignal<IConfigFooter | null> = signal(null)
  
  //collections
  companies:WritableSignal<any[]> = signal([])
  logos:WritableSignal<any[]> = signal([])
  menuFooter:WritableSignal<any[]> = signal([])
  menuFooterProyectos:WritableSignal<any[]> = signal([])

  suscribeListenRouter:WritableSignal<Subscription | undefined> = signal(undefined)

  constructor(){
    this.suscribeListenRouter.set(this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd  ) {
        if (this.router.url == '/') this.homeIsActive.set(true)
        else this.homeIsActive.set(false)
      }
    }))
  }


  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.suscribeListenRouter()?.unsubscribe()
  }

  async init(){
    await this.getCollectionsPage()
    this.configFooter.set(await this.getConfigFooter())

    const menuFooter = await this.getMenuFooter();
    this.menuFooter.set(menuFooter.splice(0,2))
    this.menuFooterProyectos.set(menuFooter)

    this.socialNetwork.set( await this.getSocialNetwork())

  }



  async getCollectionsPage(){
    this.companies.set(await this.getElementsContent({name: "titulo empresa",content: "logos_empresas"}))
    this.logos.set(await this.getElementsContent( {name:"titulo logo footer",content: "logos"})) 
  }


  /**
   * 
   * @param menuEle HTMLDivElement
   */
  dropdownToogleMenu(menuEle:HTMLDivElement){

    if(this.responsive.isMobile){
      const menu = $(menuEle).find('.h_cl_pie')
      const contentMent = $(menuEle).find('.menu_pie')
      
      if( $(menu).hasClass('active')){
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

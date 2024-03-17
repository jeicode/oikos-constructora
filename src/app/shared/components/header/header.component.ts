import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { PageService } from 'src/app/shared/services/api/page.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

declare var $:any;
@Component({
  standalone: true,
  imports:[NgClass, RouterModule],
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  IMG_URL = signal(environment.imagenes_url)


  // injects
  pageService = inject(PageService)
  router = inject(Router)

  menuMobileIsActive:boolean = false;

  homeIsActive          : boolean = false;
  suscribeListenRouter  : Subscription;
  
  // collections
  logos:WritableSignal<any> = signal([]);
  linksHeader:any[] = []

  constructor( ) {
    this.suscribeListenRouter = this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd  ) {
        if (this.router.url == '/') this.homeIsActive = true
        else this.homeIsActive = false
      }
    });
  }

  ngOnInit(): void {
    this.getCollectionsPage();
  }

  ngOnDestroy(): void {
    this.suscribeListenRouter.unsubscribe()
  }


  closeNav(){
    if($(".btn_menu_movil").hasClass('active')){
      $(".btn_menu_movil").click();
    }
  }

  async getCollectionsPage(){
    this.linksHeader = await this.pageService.getElementsContent('titulo menu', 'menu');
    const logos = await this.pageService.getElementsContent("titulo empresa", "logos_empresas", "field_name='ver en header' AND field_content='2'")
    this.logos.set(logos);
  }


  toogleActiveMenuMobile(){
    this.menuMobileIsActive = !this.menuMobileIsActive
  }


}
